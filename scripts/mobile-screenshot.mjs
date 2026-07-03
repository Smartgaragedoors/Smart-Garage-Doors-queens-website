import puppeteer from 'puppeteer';

const URL = process.argv[2] || 'http://localhost:3002/';
const OUT = process.argv[3] || 'mobile-screenshot.png';

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();

// iPhone-ish mobile viewport
await page.setViewport({
  width: 390,
  height: 844,
  deviceScaleFactor: 1, // dSF:2 + isMobile triggers a fullPage mis-stitch bug in headless Chrome
  isMobile: true,
  hasTouch: true,
});
await page.setUserAgent(
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
);

await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });

// Let lazy content / animations settle
await new Promise((r) => setTimeout(r, 2500));

// Scroll through to trigger lazy-loaded images
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0;
    const step = 400;
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

await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 800));

// fullPage keeps the layout viewport at 844px high, so vh-based heights (the
// hero is min-h-[80vh]) stay correct — captureBeyondViewport stitches the rest.
await page.screenshot({ path: OUT, fullPage: true, captureBeyondViewport: true });
await browser.close();
console.log('Saved', OUT);
