/**
 * Blog internal-link report. Run AFTER `npm run build:seo` (needs out/).
 *
 * For every prerendered blog post, counts how many prerendered pages OUTSIDE
 * /blog/ link to it. Posts with 0 inbound links are orphans — Google files
 * them under "Discovered – currently not indexed" and often never crawls
 * them. Fix by adding a contextual link from the matching service or city
 * page (GuideLinks section / locationBlogMap.ts), never a link dump.
 *
 * Usage: node scripts/blog-orphan-report.mjs
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'out');
const BLOG = join(OUT, 'blog');
if (!existsSync(BLOG)) {
  console.error('out/blog not found — run the build + prerender first.');
  process.exit(1);
}

// Collect every non-blog prerendered page's HTML.
function collectPages(dir, rel = '') {
  const pages = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (rel === '' && entry.name === 'blog') continue;
      pages.push(...collectPages(join(dir, entry.name), `${rel}/${entry.name}`));
    } else if (entry.name === 'index.html') {
      pages.push({ route: rel || '/', html: readFileSync(join(dir, entry.name), 'utf8') });
    }
  }
  return pages;
}

const pages = collectPages(OUT);
const slugs = readdirSync(BLOG, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name);

const rows = slugs.map((slug) => {
  const needle = `href="/blog/${slug}/"`;
  const linkers = pages.filter((p) => p.html.includes(needle)).map((p) => p.route);
  return { slug, count: linkers.length, linkers };
}).sort((a, b) => a.count - b.count);

let orphans = 0;
for (const r of rows) {
  if (r.count === 0) orphans++;
  const sample = r.linkers.slice(0, 3).join(', ');
  console.log(`${String(r.count).padStart(3)}  /blog/${r.slug}/${r.count ? `  <- ${sample}${r.linkers.length > 3 ? ', …' : ''}` : '  ** ORPHAN **'}`);
}
console.log(`\n${rows.length} posts, ${orphans} orphaned (0 links from outside /blog/).`);
process.exit(orphans > 0 ? 2 : 0);
