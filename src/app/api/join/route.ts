/**
 * Join / welcome-kit form intake. Forwards to the Pakka WhatsApp Manager's
 * public /api/web-lead endpoint, which upserts the contact and creates the
 * Zoho lead. Server-side so WA_LEAD_KEY never ships to the browser.
 *
 * The modal has two variants and each gets its own Zoho Lead_Source, so the
 * two intents stay separable in the CRM. Both values exist in the Leads
 * Lead_Source picklist (added 2026-08-25) — a value that is not in that
 * picklist makes Zoho reject the lead.
 *
 * Env: WA_API_URL (e.g. https://<api>.up.railway.app), WA_LEAD_KEY.
 */
const LEAD_SOURCE = {
  join: 'RWCC kit', // "Claim Your Spot & Welcome Kit"
  talk: 'RWCC contact', // "Talk to the Chuk Team"
} as const;
export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b?.phone || !b?.restaurantName) {
    return Response.json({ error: 'restaurantName and phone required' }, { status: 400 });
  }

  const base = process.env.WA_API_URL;
  const key = process.env.WA_LEAD_KEY;
  if (!base || !key) {
    console.error('[join] WA_API_URL / WA_LEAD_KEY not set');
    return Response.json({ error: 'lead intake not configured' }, { status: 503 });
  }

  const res = await fetch(`${base}/api/web-lead`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-web-lead-key': key },
    body: JSON.stringify({
      source: b.modalType === 'talk' ? LEAD_SOURCE.talk : LEAD_SOURCE.join,
      phone: b.phone,
      name: b.contactName,
      email: b.email,
      business: b.restaurantName,
      fields: {
        restaurant: b.restaurantName,
        outlets: b.outlets,
        chuk_customer: b.isChukCustomer,
      },
    }),
  }).catch((e: unknown) => {
    console.error('[join] upstream unreachable:', e);
    return null;
  });

  if (!res?.ok) {
    console.error('[join] upstream failed:', res?.status, await res?.text().catch(() => ''));
    return Response.json({ error: 'could not save your details' }, { status: 502 });
  }
  return Response.json({ ok: true });
}
