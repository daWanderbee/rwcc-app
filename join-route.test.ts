// Run: node --experimental-strip-types join-route.test.ts
// Checks the /api/join → WhatsApp Manager mapping (lead source, field names,
// error paths). No network, no DB — global fetch is stubbed.
import assert from 'node:assert/strict';

process.env.WA_API_URL = 'http://api.test';
process.env.WA_LEAD_KEY = 'k123';

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
const okFetch = async (url: string, init: RequestInit) => {
  sent = { url, init };
  return new Response('{"ok":true}', { status: 200 });
};

// happy path
globalThis.fetch = okFetch as typeof fetch;
let res = await post(form);
assert.equal(res.status, 200);
assert.equal(sent!.url, 'http://api.test/api/web-lead');
assert.equal((sent!.init.headers as Record<string, string>)['x-web-lead-key'], 'k123');
const body = JSON.parse(sent!.init.body as string);
assert.equal(body.source, 'RWCC kit');
assert.equal(body.business, 'Green Leaf Kitchen');
assert.equal(body.name, 'Asmita');
assert.equal(body.fields.outlets, '3');

// each modal variant carries its own Zoho Lead_Source
await post({ ...form, modalType: 'talk' });
assert.equal(JSON.parse(sent!.init.body as string).source, 'RWCC contact');

// missing required fields never reach upstream
sent = null;
res = await post({ restaurantName: 'X' });
assert.equal(res.status, 400);
assert.equal(sent, null);

// upstream failure surfaces as 502, not a false success
globalThis.fetch = (async () => new Response('nope', { status: 500 })) as typeof fetch;
res = await post(form);
assert.equal(res.status, 502);

// missing config fails loudly
delete process.env.WA_LEAD_KEY;
res = await post(form);
assert.equal(res.status, 503);

console.log('join-route: all checks passed');
