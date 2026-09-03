/**
 * Join / welcome-kit form intake. Creates the Zoho CRM Lead directly.
 *
 * Was routed through the Pakka WhatsApp Manager's POST /api/web-lead, but that
 * route was never deployed — the live Railway API 404s it — so the form was
 * dead in production. Zoho was always the destination; this just drops the
 * middleman.
 *
 * The modal has two variants and each gets its own Zoho Lead_Source, so the
 * two intents stay separable in the CRM. Both values exist in the Leads
 * Lead_Source picklist (added 2026-08-25) — a value that is not in that
 * picklist makes Zoho reject the lead.
 *
 * Phone and Email are both unique fields on the Leads layout, so a restaurant
 * already in the CRM makes the insert fail as a duplicate. That is the common
 * case, not an edge case — existing Chuk customers are much of the audience for
 * this form. We attach a Note to the existing lead rather than upserting over
 * it, so the owner and original Lead_Source of a sales-worked lead survive.
 *
 * Env: ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN,
 *      ZOHO_API_DOMAIN (optional, defaults to the India DC).
 */
const LEAD_SOURCE = {
  join: 'RWCC kit', // "Claim Your Spot & Welcome Kit"
  talk: 'RWCC contact', // "Talk to the Chuk Team"
} as const;

const API = process.env.ZOHO_API_DOMAIN || 'https://www.zohoapis.in';
const ACCOUNTS = API.includes('.in') ? 'https://accounts.zoho.in' : 'https://accounts.zoho.com';

// ponytail: module-scope token cache, good enough for one serverless instance.
// Zoho access tokens last an hour; a cold start just mints a fresh one.
let token: { value: string; expires: number } | null = null;

async function accessToken() {
  if (token && Date.now() < token.expires) return token.value;
  const params = new URLSearchParams({
    refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
    client_id: process.env.ZOHO_CLIENT_ID!,
    client_secret: process.env.ZOHO_CLIENT_SECRET!,
    grant_type: 'refresh_token',
  });
  const res = await fetch(`${ACCOUNTS}/oauth/v2/token?${params}`, { method: 'POST' });
  const body = await res.json();
  if (!body.access_token) throw new Error(`zoho token: ${res.status} ${body.error ?? ''}`);
  token = { value: body.access_token, expires: Date.now() + (body.expires_in - 60) * 1000 };
  return token.value;
}

/**
 * Both Phone and Email are unique on the Leads layout. Zoho reports a collision
 * two different ways: `DUPLICATE_DATA` when one unique field clashes, and
 * `MULTIPLE_OR_MULTI_ERRORS` wrapping a nested `details.errors[]` when more than
 * one does. Both point at the same existing record; return its id either way.
 */
type ZohoError = {
  code?: string;
  details?: { duplicate_record?: { id?: string }; errors?: ZohoError[] };
};

function duplicateRecordId(result: ZohoError | undefined) {
  if (result?.code === 'DUPLICATE_DATA') return result.details?.duplicate_record?.id;
  if (result?.code === 'MULTIPLE_OR_MULTI_ERRORS') {
    return result.details?.errors?.find((e) => e.code === 'DUPLICATE_DATA')?.details
      ?.duplicate_record?.id;
  }
}

export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b?.phone || !b?.restaurantName) {
    return Response.json({ error: 'restaurantName and phone required' }, { status: 400 });
  }

  if (!process.env.ZOHO_CLIENT_ID || !process.env.ZOHO_CLIENT_SECRET || !process.env.ZOHO_REFRESH_TOKEN) {
    console.error('[join] ZOHO_CLIENT_ID / ZOHO_CLIENT_SECRET / ZOHO_REFRESH_TOKEN not set');
    return Response.json({ error: 'lead intake not configured' }, { status: 503 });
  }

  // Last_Name is the only field Zoho makes mandatory on Leads.
  const notes = [
    b.outlets && `Outlets: ${b.outlets}`,
    b.isChukCustomer && `Existing Chuk customer: ${b.isChukCustomer}`,
  ].filter(Boolean);

  const lead = {
    Last_Name: b.contactName || b.restaurantName,
    Company: b.restaurantName,
    Phone: b.phone,
    Email: b.email,
    Lead_Source: b.modalType === 'talk' ? LEAD_SOURCE.talk : LEAD_SOURCE.join,
    Description: notes.join('\n') || undefined,
  };

  try {
    const auth = {
      'content-type': 'application/json',
      Authorization: `Zoho-oauthtoken ${await accessToken()}`,
    };
    const res = await fetch(`${API}/crm/v6/Leads`, {
      method: 'POST',
      headers: auth,
      body: JSON.stringify({ data: [lead] }),
    });
    const body = await res.json().catch(() => null);
    const result = body?.data?.[0];

    if (result?.code === 'DUPLICATE_DATA' || result?.code === 'MULTIPLE_OR_MULTI_ERRORS') {
      const id = duplicateRecordId(result);
      if (!id) {
        console.error('[join] duplicate with no record id:', JSON.stringify(body));
        return Response.json({ error: 'could not save your details' }, { status: 502 });
      }
      const note = await fetch(`${API}/crm/v6/Notes`, {
        method: 'POST',
        headers: auth,
        body: JSON.stringify({
          data: [
            {
              // v6 wants the module nested inside Parent_Id; the older sibling
              // `se_module` is not enough and fails MANDATORY_NOT_FOUND.
              Parent_Id: { id, module: { api_name: 'Leads' } },
              se_module: 'Leads',
              Note_Title: `RWCC form: ${lead.Lead_Source}`,
              Note_Content: [
                `Submitted the RWCC form as "${lead.Lead_Source}".`,
                `Restaurant: ${lead.Company}`,
                `Contact: ${lead.Last_Name}`,
                lead.Phone && `Phone: ${lead.Phone}`,
                lead.Email && `Email: ${lead.Email}`,
                ...notes,
              ]
                .filter(Boolean)
                .join('\n'),
            },
          ],
        }),
      });
      if (!note.ok) {
        console.error('[join] note on existing lead failed:', note.status, await note.text().catch(() => ''));
        return Response.json({ error: 'could not save your details' }, { status: 502 });
      }
      return Response.json({ ok: true });
    }

    if (!res.ok || result?.status !== 'success') {
      console.error('[join] zoho rejected the lead:', res.status, JSON.stringify(body));
      return Response.json({ error: 'could not save your details' }, { status: 502 });
    }
  } catch (e) {
    console.error('[join] zoho unreachable:', e);
    return Response.json({ error: 'could not save your details' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
