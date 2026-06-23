import puppeteer from 'puppeteer';

const URL = 'http://localhost:4179/';
const b = await puppeteer.launch({ headless: 'new' });

async function shot(name, width, height) {
  const p = await b.newPage();
  const errors = [];
  p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  p.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
  await p.setViewport({ width, height, deviceScaleFactor: 1 });
  await p.goto(URL, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1500));
  const data = await p.evaluate(() => {
    return {
      h1Count: document.querySelectorAll('h1').length,
      h1Text: document.querySelector('h1')?.innerText?.replace(/\s+/g, ' ').trim() || null,
      heroCtaButtons: [...document.querySelectorAll('[data-hero-cta] a')].map((a) => a.innerText.replace(/\s+/g, ' ').trim()),
      trustBar: !!document.querySelector('section.border-orange-500'),
    };
  });
  await p.screenshot({ path: `screenshots/hero-${name}.png`, fullPage: false });
  console.log(name, JSON.stringify(data), 'errors:', errors.slice(0, 3));
  await p.close();
}

await shot('mobile', 390, 844);
await shot('desktop', 1280, 800);
await b.close();
