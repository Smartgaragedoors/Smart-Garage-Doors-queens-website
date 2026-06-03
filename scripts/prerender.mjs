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
 * SAFETY: Purely additive. If this step fails, the original SPA build in out/
 * is still fully functional — we simply fall back to today's behavior.
 */
import puppeteer from 'puppeteer';
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

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

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

      const html = await page.content();
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
}

main().catch((e) => { console.error('[prerender] fatal', e); process.exit(1); });
