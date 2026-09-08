import puppeteer from 'puppeteer';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const origin=process.env.AUDIT_TEST_ORIGIN||'http://127.0.0.1:4180';
const manifest=JSON.parse(await readFile('src/data/blogImages.manifest.json','utf8'));
const browser=await puppeteer.launch({headless:true});
try {
 const page=await browser.newPage();await page.setRequestInterception(true);
 page.on('request',r=>r.url().startsWith(origin)||r.url().startsWith('data:')?r.continue():r.abort());
 for(const width of [390,1440]) {
  await page.setViewport({width,height:1000});await page.goto(origin+'/blog/',{waitUntil:'networkidle0'});
  await page.$$eval('a[href^="/blog/"] img',nodes=>nodes.forEach(n=>n.loading='eager'));
  await page.waitForFunction(()=>[...document.querySelectorAll('a[href^="/blog/"] img')].length===44&&[...document.querySelectorAll('a[href^="/blog/"] img')].every(n=>n.complete&&n.naturalWidth>0));
  const cards=await page.$$eval('a[href^="/blog/"] img',nodes=>nodes.map(n=>({slug:n.closest('a').getAttribute('href').split('/')[2],src:n.getAttribute('src'),alt:n.alt})));
  assert.equal(new Set(cards.map(n=>n.src)).size,44);
  for(const card of cards){assert.equal(card.src,manifest[card.slug].image);assert.equal(card.alt,manifest[card.slug].imageAlt);}
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.screenshot({path:join(tmpdir(),`sgd-blog-gallery-${width}.png`)});
 }
 for(const slug of ['garage-door-repair-cost-guide-2025','suffern-ny-garage-door-service','modern-glass-garage-door-install-queens','chain-drive-vs-belt-drive-opener']) {
  await page.goto(origin+'/blog/'+slug+'/',{waitUntil:'networkidle0'});
  await page.waitForSelector('figure img');
  assert.equal(await page.$eval('figure img',n=>n.getAttribute('src')),manifest[slug].image);
  assert.equal(await page.$eval('meta[property="og:image"]',n=>n.content),'https://www.smartestgaragedoors.com'+manifest[slug].image);
 }
 console.log('PASS: all 44 blog cards load distinct matching images at mobile and desktop widths; sample article heroes and social images match.');
}finally{await browser.close();}
