import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'screenshots');
mkdirSync(outDir, { recursive: true });

const BASE = 'http://localhost:3002';

async function captureAroundText(page, searchText, file, extraHeight = 200) {
  const found = await page.evaluate((text) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue && node.nodeValue.includes(text)) {
        // Walk up to a section
        let el = node.parentElement;
        for (let i = 0; i < 8; i++) {
          if (!el || el.tagName === 'BODY') break;
          if (el.tagName === 'SECTION') break;
          el = el.parentElement;
        }
        const rect = el.getBoundingClientRect();
        return { top: rect.top + window.scrollY, height: rect.height };
      }
    }
    return null;
  }, searchText);

  if (found) {
    const scrollY = Math.max(0, found.top - 60);
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await new Promise(r => setTimeout(r, 700));
    const captureHeight = Math.min(found.height + extraHeight, 1800);
    await page.screenshot({
      path: join(outDir, file),
      clip: { x: 0, y: scrollY, width: 1280, height: captureHeight }
    });
    return true;
  }
  return false;
}

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

// 1. Garage Door Repair — the 3 price cards
{
  console.log('Capturing: Garage Door Repair Pricing');
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(`${BASE}/garage-door-repair/`, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.waitForSelector('body');
  const ok = await captureAroundText(page, 'Transparent Garage Door Repair Pricing', 'pricing-repair.png', 600);
  if (!ok) await page.screenshot({ path: join(outDir, 'pricing-repair.png') });
  console.log('  Saved: pricing-repair.png');
  await page.close();
}

// 2. Opener Repair — the 3 price cards with updated labels
{
  console.log('Capturing: Opener Repair Pricing');
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(`${BASE}/opener-repair-installation/`, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.waitForSelector('body');
  const ok = await captureAroundText(page, 'Opener Types & Pricing', 'pricing-opener.png', 700);
  if (!ok) await page.screenshot({ path: join(outDir, 'pricing-opener.png') });
  console.log('  Saved: pricing-opener.png');
  await page.close();
}

// 3. Maintenance Plans
{
  console.log('Capturing: Maintenance Plans Pricing');
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(`${BASE}/maintenance/`, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.waitForSelector('body');
  const ok = await captureAroundText(page, 'Maintenance Plan Options', 'pricing-maintenance.png', 700);
  if (!ok) await page.screenshot({ path: join(outDir, 'pricing-maintenance.png') });
  console.log('  Saved: pricing-maintenance.png');
  await page.close();
}

// 4. Installation FAQ — price question & answer
{
  console.log('Capturing: Installation FAQ Pricing');
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(`${BASE}/services/installation/`, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.waitForSelector('body');
  // Click to expand FAQ if it's an accordion
  await page.evaluate(() => {
    const buttons = [...document.querySelectorAll('button, summary, [role="button"]')];
    for (const btn of buttons) {
      if (btn.innerText && btn.innerText.includes('How much does garage door installation cost')) {
        btn.click();
      }
    }
  });
  await new Promise(r => setTimeout(r, 600));
  const ok = await captureAroundText(page, 'How much does garage door installation cost', 'pricing-installation-faq.png', 300);
  if (!ok) await page.screenshot({ path: join(outDir, 'pricing-installation-faq.png') });
  console.log('  Saved: pricing-installation-faq.png');
  await page.close();
}

await browser.close();
console.log('\nDone. Screenshots saved to: screenshots/');
