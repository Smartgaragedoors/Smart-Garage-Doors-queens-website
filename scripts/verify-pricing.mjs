// Pricing policy guard (owner decision 2026-11-02, see src/config/pricing.ts).
// The site publishes STARTING prices only. A price range or ceiling anywhere in
// src/ fails the build; in content/blog/ (Post Automation's publishing target)
// it only warns, so an automated post can't take production down.
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const RANGE_PATTERNS = [
  /\$\s?\d[\d,]*\s?(?:–|—|-|to)\s?\$?\s?\d/g,                 // $150–$300, $150-300, $150 to $300
  /\bbetween\s+\$\s?\d[\d,]*\s+and\s+\$/gi,                   // between $800 and $2,800
  /\bentre\s+\$\s?\d[\d,]*\s+y\s+\$/gi,                       // entre $175 y $350
  /\bde\s+\$\s?\d[\d,]*\s+a\s+\$/gi,                          // de $150 a $300
];

async function walk(dir, exts) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p, exts)));
    else if (exts.some((e) => entry.name.endsWith(e))) out.push(p);
  }
  return out;
}

function scan(text, file) {
  const hits = [];
  const lines = text.split('\n');
  lines.forEach((line, i) => {
    for (const re of RANGE_PATTERNS) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(line))) {
        // Skip regex replacement tokens like "$1</strong>" and sizes like "8×7".
        if (/^\$\d<\//.test(line.slice(m.index))) continue;
        hits.push(`${file}:${i + 1}: …${line.slice(Math.max(0, m.index - 40), m.index + m[0].length + 20).trim()}…`);
      }
    }
  });
  return hits;
}

const srcFiles = await walk('src', ['.ts', '.tsx']);
const blogFiles = await walk('content/blog', ['.json']);

const srcHits = [];
for (const f of srcFiles) srcHits.push(...scan(await readFile(f, 'utf8'), f));
// public/llms.txt is the summary AI assistants read. It is hand-edited, so it
// went stale once and kept "$175–$350" after the site moved to starting prices.
// Hold it to the same rule as src/.
const LLMS_FILE = 'public/llms.txt';
srcHits.push(...scan(await readFile(LLMS_FILE, 'utf8'), LLMS_FILE));
const blogHits = [];
for (const f of blogFiles) blogHits.push(...scan(await readFile(f, 'utf8'), f));

if (blogHits.length) {
  console.warn(`[verify-pricing] WARNING: ${blogHits.length} price range(s) in content/blog — policy is starting prices only ("from $X"). Fix the post or the Post Automation prompt:`);
  for (const h of blogHits) console.warn('  ' + h);
}
if (srcHits.length) {
  console.error(`[verify-pricing] FAIL: ${srcHits.length} price range(s) in src/ or public/llms.txt. The site shows starting prices only ("From $X" + <PricingNote />). See src/config/pricing.ts.`);
  for (const h of srcHits) console.error('  ' + h);
  process.exit(1);
}
console.log(`[verify-pricing] PASS: no price ranges in src/ (${srcFiles.length} files); ${blogHits.length} warning(s) in content/blog.`);
