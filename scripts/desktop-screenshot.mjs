import puppeteer from 'puppeteer';

const URL = process.argv[2] || 'http://localhost:3002/';
const OUT = process.argv[3] || 'desktop-screenshot.png';

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();

// Desktop viewport
await page.setViewport({
  width: 1440,
  height: 900,
  deviceScaleFactor: 2,
});

await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });

// Let lazy content / animations settle
await new Promise((r) => setTimeout(r, 2500));

// Scroll through to trigger lazy-loaded images
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0;
    const step = 600;
    const timer = setInterval(() => {
      window.scrollBy(0, step);
      y += step;
      if (y >= document.body.scrollHeight) {
        clearInterval(timer);
        window.scrollTo(0, 0);
        resolve();
      }
    }, 100);
  });
});

await new Promise((r) => setTimeout(r, 1500));

await page.screenshot({ path: OUT, fullPage: true });
await browser.close();
console.log('Saved', OUT);
