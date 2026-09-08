import assert from 'node:assert/strict';
import puppeteer from 'puppeteer';
import { mkdir } from 'node:fs/promises';

const origin = 'http://127.0.0.1:4180';
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
let mode = 'failure';
const sent = [];
await page.setRequestInterception(true);
page.on('request', req => {
  const url = req.url();
  if (req.method() === 'POST') {
    // No request may reach a real lead receiver, including the CRM mirror.
    sent.push({ url, body: req.postData() });
    if (mode === 'fallback') return req.abort('failed');
    return req.respond({ status: mode === 'success' ? 200 : 400, contentType: 'application/json', body: JSON.stringify({ success: mode === 'success', ok: mode === 'success', error: 'Test rejection' }) });
  }
  if (!url.startsWith(origin) && !url.startsWith('data:')) return req.abort();
  return req.continue();
});
try {
  await mkdir('tmp/commercial-acquisition', { recursive: true });
  for (const width of [390, 1440]) {
    await page.setViewport({ width, height: 900 });
    await page.goto(`${origin}/commercial-garage-door-repair/?utm_source=vendor_outreach&utm_campaign=september_2026&ga_debug=1`, { waitUntil: 'networkidle0' });
    await page.waitForSelector('#clf-company');
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    assert.equal(await page.$eval('#clf-company', el => el.required), true);
    assert.equal(await page.$eval('#clf-name', el => el.required), true);
    assert.equal(await page.$eval('#clf-phone', el => el.required), true);
    assert.equal(await page.$eval('#clf-company', el => el.form.noValidate), false);
    assert.equal(await page.$eval('#clf-company', el => el.form.querySelector('input[type=checkbox]').required), false);
    await page.$eval('#clf-company', el => el.closest('form').parentElement.scrollIntoView());
    await page.screenshot({ path: `tmp/commercial-acquisition/site-${width}.png` });
  }
  const beforeInvalid = sent.length;
  await page.click('button[type="submit"]');
  assert.equal(sent.length, beforeInvalid, 'Empty required fields must block submission');
  await page.type('#clf-company', 'Commercial Form Test');
  await page.type('#clf-name', 'Test Contact');
  await page.type('#clf-phone', '2125550100');
  await page.type('#clf-address', 'Avenel, NJ 07001');
  await page.select('#clf-request-type', 'urgent-repair');
  await page.click('button[type="submit"]');
  await page.waitForSelector('[role="alert"]');
  assert(!page.url().includes('thank-you'));
  assert.equal(await page.evaluate(() => (window.dataLayer || []).filter(e => e[0] === 'event' && e[1] === 'form_submit').length), 0);
  mode = 'fallback';
  await page.click('button[type="submit"]');
  await page.waitForFunction(() => document.body.innerText.includes('Your request has not been sent yet'));
  assert(!page.url().includes('thank-you'));
  assert.equal(await page.$eval('#clf-company', el => el.value), 'Commercial Form Test');
  assert.equal(await page.evaluate(() => (window.dataLayer || []).filter(e => e[0] === 'event' && e[1] === 'form_submit').length), 0);
  mode = 'success';
  await page.click('button[type="submit"]');
  await page.waitForFunction(() => location.pathname.includes('thank-you'));
  const events = await page.evaluate(() => (window.dataLayer || []).filter(e => e[0] === 'event' && e[1] === 'form_submit').map(e => Array.from(e)));
  assert.equal(events.length, 1);
  assert.equal(events[0][2].service_type, 'urgent-repair');
  assert.equal(events[0][2].urgency, 'urgent');
  const bodies = sent.map(r => r.body).join('\n');
  for (const text of ['Avenel', 'urgent-repair', 'vendor_outreach', 'september_2026']) assert(bodies.includes(text), text);
  assert(!bodies.includes('Yes (opted in to SMS)'));
  const pdf = await fetch(`${origin}/downloads/smart-garage-doors-commercial-capabilities.pdf`);
  assert.equal(pdf.status, 200);
  assert((await pdf.text()).startsWith('%PDF-'));
  console.log('PASS: desktop/mobile commercial form, validation, optional SMS, rejected/fallback/accepted delivery, preserved details, one conversion, attribution and downloadable PDF. All POST requests intercepted.');
} finally {
  // A mailto fallback can leave Chrome's close handshake pending on Windows.
  // Bound cleanup of this test's own browser after the assertions complete.
  let closeTimer;
  try {
    await Promise.race([
      browser.close(),
      new Promise(resolve => {
        closeTimer = setTimeout(() => {
          console.warn('Browser cleanup timed out; terminating the test browser.');
          browser.process()?.kill();
          resolve();
        }, 10_000);
      }),
    ]);
  } finally {
    clearTimeout(closeTimer);
  }
}
