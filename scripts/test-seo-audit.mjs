import assert from 'node:assert/strict';
import puppeteer from 'puppeteer';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const origin = process.env.AUDIT_TEST_ORIGIN || 'http://127.0.0.1:4180';
const browser = await puppeteer.launch({headless: true});
const page = await browser.newPage();
let mode = 'success';
const submitted = [];
await page.setRequestInterception(true);
page.on('request', request => {
  const url = request.url();
  if (request.method() === 'POST' && (/submit-form|web3forms|formspree|webhooks\/website\/lead/.test(url))) {
    submitted.push({url, body: request.postData()});
    return request.respond({status: mode === 'failure' ? 400 : 200, contentType: 'application/json', body: JSON.stringify(mode === 'failure' ? {success:false,error:'Test rejection'} : {success:true,ok:true})});
  }
  if (!url.startsWith(origin) && !url.startsWith('data:')) return request.abort();
  return request.continue();
});
async function visit(path) {
 console.log('Checking', path);
 await page.goto(origin + path, {waitUntil:'networkidle0'});
 await page.waitForSelector('h1');
}
async function schemas() { return page.$$eval('script[type="application/ld+json"]', nodes=>nodes.map(n=>JSON.parse(n.textContent))); }
try {
 for (const [path, phone] of [['/queens-ny/','+19145576816'],['/suffern-ny/','+18452622034'],['/blog/suffern-ny-garage-door-service/','+18452622034']]) {
  await visit(path);
  const phones=await page.$$eval('a[href^="tel:"]',nodes=>nodes.map(n=>n.getAttribute('href')));
  assert(phones.length>0);
  assert(phones.every(p=>p===`tel:${phone}`), `${path}: ${phones}`);
  assert.equal(await page.$$eval('h1', n=>n.length),1);
  assert(!(await page.content()).includes('Serving the area since 2010'));
 }
 await visit('/suffern-ny/');
 const branch=(await schemas()).find(s=>s['@type']==='LocalBusiness');
 assert.equal(branch.address.postalCode,'10901'); assert(!branch.hasMap); assert(!branch.aggregateRating);
 await visit('/scarsdale-ny/');
 const service=(await schemas()).find(s=>s['@type']==='Service');
 assert(service); assert(!service.address); assert(!(await schemas()).some(s=>s['@type']==='LocalBusiness'));
 await visit('/garage-door-installation/');
 const img=await page.$('img[alt="Wood-grain raised-panel garage door with windows at an installation site"]');
 await img.evaluate(el=>el.scrollIntoView());
 await page.waitForFunction(()=>document.querySelector('img[alt="Wood-grain raised-panel garage door with windows at an installation site"]').naturalWidth>0);
 await visit('/services/installation/'); assert.equal(await page.$$eval('a[href="/services"]',n=>n.length),0);
 await visit('/blog/'); const blog=(await schemas()).find(s=>s['@type']==='Blog');assert.equal(blog.blogPost.length,44);assert(blog.blogPost.every(p=>p.url && p.datePublished && p.author['@type']==='Organization'));
 for(const slug of ['queens-garage-door-repair-cost','suffern-ny-garage-door-service']) {
  await visit('/blog/'+slug+'/'); const s=(await schemas()).find(s=>s['@type']==='BlogPosting');assert.equal(s.dateModified,'2026-09-08'); assert.equal(s.author['@type'],'Organization');
  assert((await page.$eval('article',n=>n.innerText)).split(/\s+/).length>450);
 }
 for (const width of [390,1440]) {
  await page.setViewport({width,height:900}); await visit('/book-now/?location=Suffern%2C%20NY&utm_source=google&utm_campaign=gbp_suffern');
  assert.equal(await page.$eval('#address',n=>n.value),'Suffern, NY');
  assert((await page.$eval('footer',n=>n.innerText)).includes('31 Deerwood Road, Suffern, NY 10901'));
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.screenshot({path:join(tmpdir(),`sgd-audit-booking-${width}.png`),fullPage:true});
 }
 // A fresh browser context gives the booking test its own first-touch attribution.
 await page.evaluate(()=>{localStorage.clear();sessionStorage.clear();});
 await visit('/suffern-ny/?utm_source=google&utm_campaign=gbp_suffern&ga_debug=1');
 await page.click('[data-hero-cta] a[href^="/book-now/"]');
 await page.waitForFunction(()=>document.querySelector('#address')?.value === 'Suffern, NY');
 assert.equal(await page.$eval('#address',n=>n.value),'Suffern, NY');
 await page.type('#name','Audit Test'); await page.type('#phone','2125550100');
 for(const id of ['serviceType','urgency']) {const value=await page.$eval('#'+id,n=>Array.from(n.options).find(o=>o.value).value);await page.select('#'+id,value);}
 mode='failure'; await page.click('button[type="submit"]');
 await page.waitForFunction(()=>document.body.innerText.includes('There was an error submitting'));
 assert(!page.url().includes('thank-you'));
 assert.equal(await page.evaluate(()=>(window.dataLayer||[]).filter(e=>e[0]==='event' && e[1]==='form_submit').length),0);
 mode='success';await page.click('button[type="submit"]');await page.waitForFunction(()=>location.pathname.includes('thank-you'));
 assert.equal(await page.evaluate(()=>(window.dataLayer||[]).filter(e=>e[0]==='event' && e[1]==='form_submit').length),1);
 const bodies=submitted.map(s=>s.body).join('\n');assert(bodies.includes('gbp_suffern'));assert(bodies.includes('Suffern'));
 await page.reload({waitUntil:'networkidle0'});
 const events=await page.evaluate(()=>(window.dataLayer||[]).map(e=>Array.from(e)));
 assert(!events.some(e=>e[0]==='event' && ['conversion','form_submit'].includes(e[1])));
 console.log('PASS: local calls, branch/service schema, image, breadcrumb, 44-post index, article dates/content, desktop/mobile booking, attribution, rejected/accepted requests, thank-you conversion guard. All external requests intercepted.');
} finally { await browser.close(); }
