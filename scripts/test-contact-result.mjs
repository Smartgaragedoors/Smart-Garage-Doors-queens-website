import assert from 'node:assert/strict';
import { build } from 'esbuild';

// Exercise the actual contact-page submit handler with delivery responses.
// All providers and UI dependencies are replaced: no email, CRM or analytics
// request can leave this test, and no customer/test lead is created.
const harness = { states: [], cursor: 0, events: [], result: null };
globalThis.__contactResultTest = harness;
const compiled = await build({
  entryPoints: ['src/pages/contact/page.tsx'], bundle: true, write: false,
  platform: 'node', format: 'esm', jsx: 'automatic',
  plugins: [{
    name: 'isolate-contact-delivery',
    setup(b) {
      b.onResolve({ filter: /.*/ }, args => args.kind === 'entry-point' ? null : ({ path: args.path, namespace: 'test' }));
      b.onLoad({ filter: /.*/, namespace: 'test' }, ({ path }) => {
        if (path === 'react') return { contents: `
          export function useState(initial) { const h = globalThis.__contactResultTest; const i = h.cursor++; if (!(i in h.states)) h.states[i] = initial; return [h.states[i], value => { h.states[i] = typeof value === 'function' ? value(h.states[i]) : value; }]; }
          export const useRef = value => ({ current: value });` };
        if (path === 'react/jsx-runtime') return { contents: `export const Fragment = 'fragment'; export const jsx = (type, props) => ({type, props}); export const jsxs = jsx;` };
        if (path.endsWith('/formSubmission')) return { contents: `export const submitForm = async () => globalThis.__contactResultTest.result;` };
        if (path.endsWith('/analytics')) return { contents: `export const trackFormStart = () => {}; export const trackFormSubmit = (...args) => globalThis.__contactResultTest.events.push(args);` };
        if (path.endsWith('/canonical')) return { contents: `export const buildCanonical = p => p;` };
        if (path.endsWith('/business-info')) return { contents: `export const BUSINESS_INFO = { aggregateRating: {ratingValue: 5, reviewCount: 1}, licenses: [], addresses: [{}], serviceAreas: [], socialMedia: {} };` };
        return { contents: 'export default function Stub() { return null; }' };
      });
    },
  }],
});
const { default: ContactPage } = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString('base64')}`);
function find(node, predicate) {
  if (!node || typeof node !== 'object') return null;
  if (predicate(node)) return node;
  for (const child of [node.props?.children].flat(Infinity)) {
    const found = find(child, predicate);
    if (found) return found;
  }
  return null;
}
for (const [name, result, expectedStatus, expectedEvents] of [
  ['rejected', {success: false}, 'error', 0],
  ['email-app fallback', {success: true, usedFallback: true}, 'fallback', 0],
  ['accepted delivery', {success: true}, 'success', 1],
]) {
  const original = {name: 'TEST ONLY', phone: '2125550100', email: '', address: '', serviceType: 'repair', urgency: 'normal', preferredDate: '', preferredTime: '', message: 'Local handler test'};
  harness.states = [original]; harness.cursor = 0; harness.events = []; harness.result = result;
  const page = ContactPage();
  const form = find(page, node => node.type === 'form');
  assert(form, 'Contact form must exist');
  const sms = find(form, node => node.type === 'input' && node.props.type === 'checkbox');
  assert.notEqual(sms.props.required, true, 'SMS consent must remain optional');
  await form.props.onSubmit({preventDefault() {}});
  assert.equal(harness.states[3], expectedStatus, `${name}: visitor status`);
  assert.equal(harness.events.length, expectedEvents, `${name}: conversion count`);
  assert.equal(harness.states[2], false, `${name}: submit button is released`);
  if (!expectedEvents) assert.deepEqual(harness.states[0], original, `${name}: keep entered details`);
  else assert.equal(harness.states[0].name, '', 'Accepted delivery resets the form');
  console.log(`PASS: ${name}`);
}
delete globalThis.__contactResultTest;
