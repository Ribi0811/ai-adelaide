import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { appendLeadToGoogleSheet, leadSheetRow } = require(path.join(process.env.LEAD_TEST_BUILD, 'lead-sheet.js'));
const { deliverContactEnquiry } = require(path.join(process.env.LEAD_TEST_BUILD, 'enquiry-delivery.js'));
const headers = require('../../lib/lead-sheet-columns.json');
const lead = {
  id: 'test-lead-01', timestamp: '2026-09-06T00:00:00.000Z', name: '=HYPERLINK("https://example.com","Example")',
  business: 'Internal test', email: 'test@example.com', phone: '0400000000', service: 'website',
  message: '+SUM(1,2)', source: '/contact', attribution: { landing: '/marion', utm_source: 'test' },
};
const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
const options = { spreadsheetId: 'test_sheet_id', getAccessToken: async () => 'test-token' };

test('new row preserves literal inputs, attribution and empty sales values', () => {
  const row = leadSheetRow(lead);
  assert.equal(row.length, headers.length);
  assert.equal(typeof row[0], 'number');
  assert.equal(row[2], lead.name);
  assert.equal(row[5], '0400000000');
  assert.equal(row[6], '+SUM(1,2)');
  assert.equal(row[7], 'New');
  assert.deepEqual(row.slice(8, 15), Array(7).fill(''));
  assert.equal(row[15], lead.id);
  assert.equal(row[17], '/marion');
  assert.equal(row[19], 'test');
});

test('successful save uses RAW insertion and verifies returned lead ID', async () => {
  const calls = [];
  const result = await appendLeadToGoogleSheet(lead, { ...options, transport: async (url, init) => {
    calls.push({ url, init });
    if (calls.length === 1) return json({ values: [headers] });
    assert.match(url, /valueInputOption=RAW/);
    assert.match(url, /insertDataOption=INSERT_ROWS/);
    assert.equal(init.method, 'POST');
    const row = JSON.parse(init.body).values[0];
    return json({ updates: { updatedRows: 1, updatedData: { values: [row] } } });
  }});
  assert.deepEqual(result, { ok: true, status: 'saved' });
  assert.equal(calls.length, 2);
});

test('changed headers prevent a write into the wrong columns', async () => {
  let calls = 0;
  const result = await appendLeadToGoogleSheet(lead, { ...options, transport: async () => {
    calls++;
    return json({ values: [[...headers].reverse()] });
  }});
  assert.equal(result.status, 'header_mismatch');
  assert.equal(calls, 1);
});

test('Google failure is contained without returning its response contents', async () => {
  const result = await appendLeadToGoogleSheet(lead, { ...options, transport: async () => json({ error: 'sensitive-provider-detail' }, 403) });
  assert.deepEqual(result, { ok: false, status: 'write_failed' });
});

test('ambiguous append is not retried or falsely marked saved', async () => {
  let calls = 0;
  const result = await appendLeadToGoogleSheet(lead, { ...options, transport: async () => {
    calls++;
    if (calls === 1) return json({ values: [headers] });
    throw new Error('Connection lost after write');
  }});
  assert.equal(result.ok, false);
  assert.equal(calls, 2);
});

test('wrong returned ID cannot count as confirmed storage', async () => {
  let calls = 0;
  const result = await appendLeadToGoogleSheet(lead, { ...options, transport: async () => {
    if (++calls === 1) return json({ values: [headers] });
    const row = leadSheetRow(lead); row[15] = 'different-id';
    return json({ updates: { updatedRows: 1, updatedData: { values: [row] } } });
  }});
  assert.equal(result.status, 'unconfirmed');
});

test('timeout during token acquisition prevents a later write', async () => {
  let releaseToken;
  let calls = 0;
  const result = await appendLeadToGoogleSheet(lead, { ...options, timeoutMs: 10,
    getAccessToken: () => new Promise(resolve => { releaseToken = resolve; }),
    transport: async () => { calls++; return json({}); },
  });
  assert.equal(result.status, 'timeout');
  releaseToken('late-token');
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(calls, 0);
});

test('Telegram and email start while the sheet is still pending', async () => {
  const started = [];
  let finishSheet;
  const pending = deliverContactEnquiry({
    telegram: async () => { started.push('telegram'); return { ok: true }; },
    email: async () => { started.push('email'); return { ok: true }; },
    sheet: () => new Promise(resolve => { finishSheet = resolve; }),
    local: async () => false,
  });
  await new Promise(resolve => setImmediate(resolve));
  assert.deepEqual(started, ['telegram', 'email']);
  finishSheet({ ok: false, status: 'timeout' });
  const result = await pending;
  assert.equal(result.ok, true);
  assert.equal(result.telegram.ok, true);
  assert.equal(result.persisted, false);
});

test('a thrown sheet failure cannot cancel Telegram or email', async () => {
  const result = await deliverContactEnquiry({
    telegram: async () => ({ ok: true }), email: async () => ({ ok: true }),
    sheet: async () => { throw new Error('Sheet failed'); }, local: async () => false,
  });
  assert.equal(result.ok, true);
  assert.equal(result.telegram.ok, true);
  assert.equal(result.email.ok, true);
  assert.equal(result.sheet.ok, false);
});

test('success requires at least one confirmed delivery or storage channel', async () => {
  const result = await deliverContactEnquiry({
    telegram: async () => ({ ok: false }), email: async () => ({ ok: false }),
    sheet: async () => ({ ok: false, status: 'write_failed' }), local: async () => false,
  });
  assert.equal(result.ok, false);
  assert.equal(result.persisted, false);
});
