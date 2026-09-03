// Run: node --experimental-strip-types join-route.test.ts
// Checks the /api/join → Zoho Leads mapping (lead source, field names, error
// paths). No network, no CRM — global fetch is stubbed.
import assert from 'node:assert/strict';

process.env.ZOHO_API_DOMAIN = 'https://api.test';
process.env.ZOHO_CLIENT_ID = 'cid';
process.env.ZOHO_CLIENT_SECRET = 'csecret';
process.env.ZOHO_REFRESH_TOKEN = 'rtok';

const { POST } = await import('./src/app/api/join/route.ts');

const post = (body: unknown) =>
  POST(new Request('http://x/api/join', { method: 'POST', body: JSON.stringify(body) }));

const form = {
  restaurantName: 'Green Leaf Kitchen',
  contactName: 'Asmita',
  phone: '9876543210',
  email: 'a@b.com',
  outlets: '3',
  isChukCustomer: 'yes',
  modalType: 'join',
};

let sent: { url: string; init: RequestInit } | null = null;
let tokenCalls = 0;
const stub =
  (leadResponse: () => Response) =>
  async (url: string, init: RequestInit) => {
    if (url.includes('/oauth/v2/token')) {
      tokenCalls++;
      return new Response('{"access_token":"at","expires_in":3600}', { status: 200 });
    }
    sent = { url, init };
    return leadResponse();
  };
const ok = () => new Response('{"data":[{"status":"success"}]}', { status: 201 });

// happy path
globalThis.fetch = stub(ok) as unknown as typeof fetch;
let res = await post(form);
assert.equal(res.status, 200);
assert.equal(sent!.url, 'https://api.test/crm/v6/Leads');
assert.equal((sent!.init.headers as Record<string, string>).Authorization, 'Zoho-oauthtoken at');
const lead = JSON.parse(sent!.init.body as string).data[0];
assert.equal(lead.Lead_Source, 'RWCC kit');
assert.equal(lead.Company, 'Green Leaf Kitchen');
assert.equal(lead.Last_Name, 'Asmita');
assert.equal(lead.Phone, '9876543210');
assert.match(lead.Description, /Outlets: 3/);
assert.match(lead.Description, /Existing Chuk customer: yes/);

// the access token is cached, not re-minted per submission
await post(form);
assert.equal(tokenCalls, 1);

// Last_Name falls back to the restaurant when no contact name is given
await post({ ...form, contactName: '' });
assert.equal(JSON.parse(sent!.init.body as string).data[0].Last_Name, 'Green Leaf Kitchen');

// each modal variant carries its own Zoho Lead_Source
await post({ ...form, modalType: 'talk' });
assert.equal(JSON.parse(sent!.init.body as string).data[0].Lead_Source, 'RWCC contact');

// Zoho type-checks Email and kills the whole record with INVALID_DATA if it does
// not parse. The browser's type="email" is looser and lets "name@company" through.
// An unusable address must be dropped from the payload, not cost us the lead.
globalThis.fetch = stub(ok) as unknown as typeof fetch;
for (const bad of ['', '   ', 'name@company', 'not an email', 'a@b@c.com']) {
  res = await post({ ...form, email: bad });
  assert.equal(res.status, 200, `email ${JSON.stringify(bad)} must not fail the form`);
  const sentLead = JSON.parse(sent!.init.body as string).data[0];
  assert.equal(sentLead.Email, undefined, `email ${JSON.stringify(bad)} must not reach Zoho`);
  if (bad.trim()) {
    // whatever the restaurant typed is preserved rather than silently dropped
    assert.match(sentLead.Description, new RegExp(`Email as entered.*${bad.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`));
  }
}

// a valid address still goes through as a real Email field, and gets trimmed
res = await post({ ...form, email: '  hello@restaurant.com  ' });
assert.equal(JSON.parse(sent!.init.body as string).data[0].Email, 'hello@restaurant.com');

// surrounding whitespace never reaches the CRM
await post({ ...form, restaurantName: '  Green Leaf Kitchen  ', contactName: '  Asmita  ' });
const trimmed = JSON.parse(sent!.init.body as string).data[0];
assert.equal(trimmed.Company, 'Green Leaf Kitchen');
assert.equal(trimmed.Last_Name, 'Asmita');

// Phone is unique on Leads: an existing restaurant must not fail the form. The
// existing lead is annotated, never overwritten — its owner and Lead_Source stay.
{
  const calls: { url: string; init: RequestInit }[] = [];
  globalThis.fetch = (async (url: string, init: RequestInit) => {
    if (url.includes('/oauth/v2/token'))
      return new Response('{"access_token":"at","expires_in":3600}', { status: 200 });
    calls.push({ url, init });
    if (url.endsWith('/Leads'))
      return new Response(
        JSON.stringify({
          data: [{
            status: 'error',
            code: 'DUPLICATE_DATA',
            details: { api_name: 'Phone', duplicate_record: { id: '4972400005' } },
          }],
        }),
        { status: 400 },
      );
    return new Response('{"data":[{"status":"success"}]}', { status: 201 });
  }) as unknown as typeof fetch;

  res = await post(form);
  assert.equal(res.status, 200, 'a duplicate phone must not fail the form');
  assert.equal(calls.length, 2);
  assert.equal(calls[1].url, 'https://api.test/crm/v6/Notes');
  const note = JSON.parse(calls[1].init.body as string).data[0];
  assert.equal(note.Parent_Id.id, '4972400005');
  // v6 rejects the note with MANDATORY_NOT_FOUND unless module is nested here
  assert.equal(note.Parent_Id.module.api_name, 'Leads');
  assert.equal(note.se_module, 'Leads');
  assert.match(note.Note_Content, /Green Leaf Kitchen/);
  assert.match(note.Note_Content, /Outlets: 3/);
  // no PATCH/PUT anywhere — the existing lead is never mutated
  assert.deepEqual(calls.map((c) => c.init.method), ['POST', 'POST']);

  // When Phone AND Email both collide, Zoho wraps them in MULTIPLE_OR_MULTI_ERRORS
  // with a nested errors[] instead of a top-level DUPLICATE_DATA. Envelope taken
  // verbatim from a live production response on 2026-09-03.
  calls.length = 0;
  globalThis.fetch = (async (url: string, init: RequestInit) => {
    if (url.includes('/oauth/v2/token'))
      return new Response('{"access_token":"at","expires_in":3600}', { status: 200 });
    calls.push({ url, init });
    if (url.endsWith('/Leads'))
      return new Response(
        JSON.stringify({
          data: [{
            status: 'error',
            code: 'MULTIPLE_OR_MULTI_ERRORS',
            message: 'Multiple errors in the request',
            details: {
              errors: [
                { code: 'DUPLICATE_DATA', details: { api_name: 'Email', duplicate_record: { id: '49724000060592012' } } },
                { code: 'DUPLICATE_DATA', details: { api_name: 'Phone', duplicate_record: { id: '49724000060592012' } } },
              ],
            },
          }],
        }),
        { status: 400 },
      );
    return new Response('{"data":[{"status":"success"}]}', { status: 201 });
  }) as unknown as typeof fetch;

  res = await post(form);
  assert.equal(res.status, 200, 'a multi-field duplicate must not fail the form');
  assert.equal(calls[1].url, 'https://api.test/crm/v6/Notes');
  assert.equal(JSON.parse(calls[1].init.body as string).data[0].Parent_Id.id, '49724000060592012');

  // a duplicate whose payload carries no record id is a real failure
  globalThis.fetch = stub(() =>
    new Response('{"data":[{"status":"error","code":"DUPLICATE_DATA","details":{}}]}', { status: 400 }),
  ) as unknown as typeof fetch;
  res = await post(form);
  assert.equal(res.status, 502);
}

// missing required fields never reach Zoho
globalThis.fetch = stub(ok) as unknown as typeof fetch;
sent = null;
res = await post({ restaurantName: 'X' });
assert.equal(res.status, 400);
assert.equal(sent, null);

// a 200 from Zoho that rejects the record is still a failure, not a false success
globalThis.fetch = stub(() =>
  new Response('{"data":[{"status":"error","code":"INVALID_DATA"}]}', { status: 202 }),
) as unknown as typeof fetch;
res = await post(form);
assert.equal(res.status, 502);

// transport failure surfaces as 502
globalThis.fetch = (async () => { throw new Error('boom'); }) as typeof fetch;
res = await post(form);
assert.equal(res.status, 502);

// missing config fails loudly
delete process.env.ZOHO_REFRESH_TOKEN;
res = await post(form);
assert.equal(res.status, 503);

console.log('join-route: all checks passed');
