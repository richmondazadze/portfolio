import test from 'node:test';
import assert from 'node:assert/strict';
import { sendContact } from '../src/lib/contact.js';
const form = { name: 'Test Person', email: 'test@example.com', message: 'Local test only' };
test('sends the form and accepts confirmed delivery', async () => {
  await sendContact(form, 'owner@example.com', async (url, options) => {
    assert.equal(url, 'https://formsubmit.co/ajax/owner@example.com');
    assert.equal(JSON.parse(options.body).message, form.message);
    assert.equal(options.method, 'POST');
    return { ok: true, json: async () => ({ success: 'true' }) };
  });
});
test('does not treat an application-level rejection as success', async () => {
  await assert.rejects(sendContact(form, 'owner@example.com', async () => ({ ok: true, json: async () => ({ success: 'false' }) })));
});
test('handles server, malformed response, and network failures', async () => {
  for (const fetcher of [async () => ({ ok: false }), async () => ({ ok: true, json: async () => { throw new Error('bad JSON'); } }), async () => { throw new Error('network'); }]) await assert.rejects(sendContact(form, 'owner@example.com', fetcher));
});
