import puppeteer from 'puppeteer';

const URL = process.argv[2] || 'http://localhost:4173/';

// Keywords that MUST remain in the crawlable HTML (SEO guardrail)
const SEO_TERMS = [
  'spring replacement', 'opener repair', 'cable', 'roller', 'garage door repair',
  'Queens', 'Brooklyn', 'Bronx', 'Westchester', 'Long Island', 'Stamford',
  'Greenwich', 'Bergen', 'commercial', 'property manager',
];

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });

// Throttle to a mid-tier mobile (4x CPU, Fast 3G-ish) for representative CWV
const client = await page.target().createCDPSession();
await client.send('Network.emulateNetworkConditions', {
  offline: false, latency: 150, downloadThroughput: (1.6 * 1024 * 1024) / 8, uploadThroughput: (750 * 1024) / 8,
});
await client.send('Emulation.setCPUThrottlingRate', { rate: 4 });

let transferBytes = 0;
let imageBytes = 0;
const requests = [];
page.on('response', async (res) => {
  try {
    const len = Number(res.headers()['content-length'] || 0);
    const type = res.request().resourceType();
    transferBytes += len;
    if (type === 'image') imageBytes += len;
    requests.push({ type, len, url: res.url() });
  } catch {}
});

await page.goto(URL, { waitUntil: 'networkidle0', timeout: 90000 });
await new Promise((r) => setTimeout(r, 1500));

const metrics = await page.evaluate(async () => {
  const lcp = await new Promise((resolve) => {
    let val = 0;
    new PerformanceObserver((l) => { for (const e of l.getEntries()) val = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
    setTimeout(() => resolve(val), 600);
  });
  let cls = 0;
  await new Promise((resolve) => {
    new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
    setTimeout(resolve, 600);
  });
  const fcp = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;
  const imgs = Array.from(document.images);
  const lazy = imgs.filter((i) => i.loading === 'lazy').length;
  return {
    fcp: Math.round(fcp), lcp: Math.round(lcp), cls: Number(cls.toFixed(4)),
    domNodes: document.getElementsByTagName('*').length,
    scrollHeight: document.documentElement.scrollHeight,
    images: imgs.length, lazyImages: lazy,
    htmlText: document.body.innerText,
  };
});

const html = (await page.content()).toLowerCase();
const bodyText = metrics.htmlText.toLowerCase();
const missing = SEO_TERMS.filter((t) => !html.includes(t.toLowerCase()) && !bodyText.includes(t.toLowerCase()));

const byType = {};
for (const r of requests) { byType[r.type] = (byType[r.type] || 0) + 1; }

console.log(JSON.stringify({
  url: URL,
  transferKB: Math.round(transferBytes / 1024),
  imageKB: Math.round(imageBytes / 1024),
  requests: requests.length,
  requestsByType: byType,
  fcp_ms: metrics.fcp, lcp_ms: metrics.lcp, cls: metrics.cls,
  domNodes: metrics.domNodes,
  pageScrollHeight: metrics.scrollHeight,
  images: metrics.images, lazyImages: metrics.lazyImages,
  seoTermsMissingFromHTML: missing,
}, null, 2));

await browser.close();
