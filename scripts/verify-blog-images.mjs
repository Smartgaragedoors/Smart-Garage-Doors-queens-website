import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import sharp from 'sharp';

const manifest = JSON.parse(await readFile('src/data/blogImages.manifest.json', 'utf8'));
const posts = new Map();
const legacy = await readFile('src/pages/blog/[slug]/page.tsx', 'utf8');
for (const match of legacy.matchAll(/^  '([^']+)':/gm)) posts.set(match[1], manifest[match[1]]);
for (const file of await readdir('content/blog')) {
  if (!file.endsWith('.json')) continue;
  const post = JSON.parse((await readFile(`content/blog/${file}`, 'utf8')).replace(/^\uFEFF/, ''));
  const slug = post.slug.replace(/-([a-z0-9]{4})$/i, (whole, suffix) => /[a-z]/i.test(suffix) && /[0-9]/.test(suffix) ? '' : whole);
  posts.set(slug, manifest[slug] || post);
}
const sources = new Map();
const pixels = new Map();
for (const [slug, entry] of posts) {
  assert(entry?.image && entry.imageAlt, `Missing image or descriptive alt text: ${slug}`);
  const image = entry.image;
  // Cloudflare /card and /hero transformations still represent the same photograph.
  const identity = image.replace(/\?.*$/, '').replace(/(imagedelivery\.net\/[^/]+\/[^/]+)\/.*$/, '$1');
  assert(!sources.has(identity), `${slug} repeats the image used by ${sources.get(identity)}`);
  sources.set(identity, slug);
  if (image.startsWith('/')) {
    assert(!image.includes('..'), `Invalid local image path: ${image}`);
    const asset = sharp(await readFile(`public${image}`));
    const metadata = await asset.metadata();
    assert(metadata.width > 0 && metadata.height > 0, `Unreadable image: ${image}`);
    const normalized = await asset.resize(160, 90, {fit:'fill'}).removeAlpha().raw().toBuffer();
    const hash = createHash('sha256').update(normalized).digest('hex');
    assert(!pixels.has(hash), `${slug} duplicates the pixels in ${pixels.get(hash)}`);
    pixels.set(hash, slug);
  }
}
console.log(`PASS: ${posts.size} posts have distinct image sources, readable local assets and descriptive alt text.`);
