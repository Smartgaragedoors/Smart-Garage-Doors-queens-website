/**
 * Post-build prerenderer for the Smart Garage Doors SPA.
 *
 * WHY: The app is a pure client-side React SPA. Search engines and social/AI
 * crawlers that do not execute JS receive an empty <div id="root"></div> with
 * the homepage's title/description on every route. This script renders each
 * indexable route with a real browser (Puppeteer) AFTER `vite build`, then
 * writes the fully-rendered HTML to out/<route>/index.html. Vercel serves those
 * static files directly (the SPA catch-all rewrite in vercel.json only fires
 * when no static file exists), so Google receives unique title, description,
 * canonical, Open Graph, H1, LocalBusiness/Service/FAQ schema, and body content
 * in the INITIAL HTML response. The React bundle still hydrates on top, so the
 * live app, forms, analytics, and design are unchanged.
 *
 * SAFETY: If any route fails to render (or the route count collapses), the
 * script exits nonzero and the Vercel build FAILS — the previous known-good
 * deployment stays live instead of shipping empty shells to Google. This gate
 * was added 2026-07-13 per brain 09 risk #4; a flaky prerender once shipped a
 * contentless homepage.
 */
import http from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join } from 'node:path';

const ROOT = process.cwd();
const OUT = join(ROOT, 'out');
const PORT = 4178;
const ORIGIN = `http://127.0.0.1:${PORT}`;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.xml': 'application/xml', '.txt': 'text/plain',
};

// Hosts we block during prerender: analytics/pixels (no double-counting),
// geolocation (keeps renders location-neutral so canonical pages don't get a
// random detected city), and heavy 3rd-party widgets/images we don't need in
// the HTML snapshot. The local JS bundle is always allowed so the app renders.
const BLOCK = [
  'googletagmanager.com', 'google-analytics.com', 'connect.facebook.net',
  'facebook.com', 'ip-api.com', 'sociablekit.com', 'leadconnectorhq.com',
  'readdy.ai', 'imagedelivery.net', 'maps.google', 'maps.googleapis.com',
  'cdn.jsdelivr.net', 'cdnjs.cloudflare.com', 'fonts.googleapis.com',
  'fonts.gstatic.com', 'fonts.bunny.net', 'youtube.com', 'youtube-nocookie.com',
];

// Launch a headless browser. Locally we use the full `puppeteer` package (its
// bundled Chromium). In CI/Vercel builds the build container lacks Chrome's
// system libraries (libnspr4 etc.), so we use `@sparticuz/chromium`, which
// bundles a Chromium + the required shared libs, driven by `puppeteer-core`.
async function launchBrowser() {
  if (process.env.VERCEL || process.env.CI) {
    const chromium = (await import('@sparticuz/chromium')).default;
    const puppeteer = (await import('puppeteer-core')).default;
    return puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }
  const puppeteer = (await import('puppeteer')).default;
  return puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
}

function getRoutes(sitemapXml) {
  const locs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const paths = locs.map((u) => {
    try { return new URL(u).pathname; } catch { return null; }
  }).filter(Boolean);
  // Never prerender noindex routes (tracking / paid LPs).
  const filtered = paths.filter((p) => !p.startsWith('/go/') && !p.startsWith('/lp/'));
  // De-dupe, ensure homepage present.
  return [...new Set(['/', ...filtered])];
}

async function main() {
  if (!existsSync(join(OUT, 'index.html'))) {
    console.error('[prerender] out/index.html not found — run `vite build` first.');
    process.exit(1);
  }
  // Pristine shell served for ALL html routes so every render starts clean,
  // regardless of files we write during the run.
  const shell = await readFile(join(OUT, 'index.html'), 'utf8');

  let routes = ['/'];
  if (existsSync(join(OUT, 'sitemap.xml'))) {
    routes = getRoutes(await readFile(join(OUT, 'sitemap.xml'), 'utf8'));
  } else {
    console.warn('[prerender] no sitemap.xml — prerendering homepage only.');
  }

  const server = http.createServer(async (req, res) => {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    const ext = extname(urlPath);
    if (ext) {
      const filePath = join(OUT, urlPath);
      if (existsSync(filePath)) {
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(await readFile(filePath));
        return;
      }
      res.writeHead(404); res.end('not found'); return;
    }
    // HTML route -> always serve pristine shell (SPA fallback).
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(shell);
  });
  await new Promise((r) => server.listen(PORT, r));

  const browser = await launchBrowser();

  // Renders one route and returns its HTML, or null if the app never painted
  // real content (empty <div id="root">) within the wait window — a timing
  // race we've seen intermittently, not a render error (see prerender-homepage-
  // flaky memory). Caller retries on null instead of writing an empty shell.
  async function renderOnce(page, route) {
    await page.goto(`${ORIGIN}${route}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    // Wait until the app has rendered content AND injected canonical + title.
    await page.waitForFunction(() => {
      const root = document.getElementById('root');
      return root && root.children.length > 0 &&
        document.querySelector('link[rel="canonical"]') &&
        document.title && document.title.length > 0;
    }, { timeout: 15000 }).catch(() => {});
    // Small settle for schema <script> injection.
    await new Promise((r) => setTimeout(r, 500));

    const hasContent = await page.evaluate(() => {
      const root = document.getElementById('root');
      return !!root && root.children.length > 0;
    });
    if (!hasContent) return null;
    return page.content();
  }

  let ok = 0, fail = 0;
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.setRequestInterception(true);
      page.on('request', (r) => {
        const u = r.url();
        if (u.startsWith(ORIGIN) || u.startsWith('data:')) return r.continue();
        if (BLOCK.some((h) => u.includes(h))) return r.abort();
        return r.continue();
      });
      page.on('console', () => {}); // swallow app console noise

      let html = null;
      const ATTEMPTS = 3;
      for (let attempt = 1; attempt <= ATTEMPTS && !html; attempt++) {
        html = await renderOnce(page, route);
        if (!html && attempt < ATTEMPTS) {
          console.warn(`[prerender] ⚠ ${route} — empty root on attempt ${attempt}, retrying`);
        }
      }

      if (!html) {
        // Never write an empty-rooted shell — leave whatever vite's own build
        // already put at this path (or none) rather than shipping a page
        // Google will see as thin/duplicate boilerplate.
        fail++;
        console.warn(`[prerender] ✗ ${route} — empty root after ${ATTEMPTS} attempts, skipped`);
        continue;
      }

      const dir = join(OUT, route);
      await mkdir(dir, { recursive: true });
      await writeFile(join(dir, 'index.html'), html, 'utf8');
      ok++;
      console.log(`[prerender] ✓ ${route}`);
    } catch (e) {
      fail++;
      console.warn(`[prerender] ✗ ${route} — ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  await new Promise((r) => server.close(r));
  console.log(`[prerender] done: ${ok} ok, ${fail} failed, ${routes.length} total`);

  // CI gate: a deploy with missing/empty pages is worse than no deploy — Google
  // would recrawl those routes as raw SPA shells. Fail the build (Vercel keeps
  // the previous deployment live) if any route failed, if the count doesn't add
  // up, or if the sitemap itself collapsed below the floor of known-good routes.
  const MIN_ROUTES = 100;
  if (fail > 0 || ok !== routes.length || ok < MIN_ROUTES) {
    console.error(
      `[prerender] GATE FAILED: ${ok}/${routes.length} rendered, ${fail} failed` +
      (ok < MIN_ROUTES ? ` (below the ${MIN_ROUTES}-route floor — sitemap collapse?)` : '') +
      ' — refusing to ship this build.'
    );
    process.exit(1);
  }
}

main().catch((e) => { console.error('[prerender] fatal', e); process.exit(1); });
