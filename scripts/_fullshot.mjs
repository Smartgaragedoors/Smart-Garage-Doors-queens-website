import puppeteer from 'puppeteer';

const URL = 'http://localhost:4182/';
const phase = process.argv[2] || 'before';
const b = await puppeteer.launch({ headless: 'new' });

async function shot(name, width) {
  const p = await b.newPage();
  const errors = [];
  p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  p.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
  await p.setViewport({ width, height: 900, deviceScaleFactor: 1 });
  await p.goto(URL, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1800));
  // measure total document height + per-section heights
  const data = await p.evaluate(() => {
    const total = document.body.scrollHeight;
    const h1 = document.querySelectorAll('h1').length;
    const sections = [...document.querySelectorAll('section')].map((s) => ({
      h: Math.round(s.getBoundingClientRect().height),
      label: (s.id || s.querySelector('h2')?.innerText || s.querySelector('h1') ? (s.id || (s.querySelector('h2')||s.querySelector('h1'))?.innerText) : 'section')?.toString().slice(0, 34).replace(/\s+/g, ' '),
    }));
    return { total, h1, sections };
  });
  await p.screenshot({ path: `screenshots/${phase}-${name}.png`, fullPage: true });
  console.log(`[${phase}] ${name} docHeight=${data.total} h1=${data.h1} errors=${errors.length}`);
  data.sections.forEach((s) => console.log(`   ${String(s.h).padStart(5)}px  ${s.label}`));
  await p.close();
}

await shot('desktop', 1280);
await shot('mobile', 390);
await b.close();
