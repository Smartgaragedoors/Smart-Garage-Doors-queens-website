import assert from 'node:assert/strict';
import { build } from 'esbuild';

async function loadModule(entry) {
  const result = await build({ entryPoints: [entry], bundle: true, write: false,
    platform: 'node', format: 'esm', define: {'import.meta.env': '{}'} });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
}
const prior = { window: globalThis.window, storage: globalThis.sessionStorage, fetch: globalThis.fetch };
const events = [];
globalThis.sessionStorage = { getItem: () => null };
globalThis.window = { location: { origin: 'https://example.invalid', hostname: 'example.invalid', href: '' }, gtag: (...args) => events.push(args) };
try {
  const { trackFormSubmit } = await loadModule('src/utils/analytics.ts');
  for (const type of ['contact', 'book_now', 'hero_quote_form', 'commercial_lead_form', 'emergency_garage_door_repair']) {
    events.length = 0;
    trackFormSubmit('Isolated test', type);
    assert.deepEqual(events.map(e => e[1]), ['form_submit', 'generate_lead']);
    assert.equal(events[1][2].lead_status, 'accepted');
    assert.equal(events[1][2].value, undefined, 'Do not invent lead revenue');
  }
  for (const type of ['careers_application_form', 'issue_report_form']) {
    events.length = 0;
    trackFormSubmit('Isolated test', type);
    assert.deepEqual(events.map(e => e[1]), ['form_submit'], 'Non-customer forms must not become acquisition leads');
  }
  console.log('PASS: accepted customer events, recruiting/staff exclusions, no invented revenue');

  // Every provider request (including the CRM mirror) is intercepted locally.
  globalThis.fetch = async () => { throw new Error('Simulated offline provider'); };
  const { submitForm } = await loadModule('src/utils/formSubmission.ts');
  const fallback = await submitForm({name: 'LOCAL TEST', phone: '2125550100'}, 'Local test');
  assert.equal(fallback.usedFallback, true);
  assert.equal(fallback.success, false, 'An email draft is not delivered');
  assert.match(fallback.error, /not been sent/);
  assert.match(globalThis.window.location.href, /^mailto:/);
  globalThis.fetch = async () => ({ok: true, status: 200, json: async () => ({success: true})});
  const accepted = await submitForm({name: 'LOCAL TEST', phone: '2125550100'}, 'Local test');
  assert.equal(accepted.success, true);
  assert.notEqual(accepted.usedFallback, true);
  console.log('PASS: offline fallback is unsuccessful; accepted provider delivery succeeds');
} finally {
  globalThis.window = prior.window; globalThis.sessionStorage = prior.storage; globalThis.fetch = prior.fetch;
}
