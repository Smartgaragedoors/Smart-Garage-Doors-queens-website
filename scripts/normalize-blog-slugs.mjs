#!/usr/bin/env node
/**
 * Normalizes content/blog/*.json slugs by stripping Post Automation collision
 * suffixes (e.g. -b77j) and renames files to match the canonical slug.
 *
 * Usage: node scripts/normalize-blog-slugs.mjs
 *        node scripts/normalize-blog-slugs.mjs --write
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '..', 'content', 'blog');
const write = process.argv.includes('--write');

function canonicalBlogSlug(slug) {
  const match = slug.match(/-([a-z0-9]{4})$/i);
  if (!match) return slug;
  const suffix = match[1];
  if (/[a-z]/i.test(suffix) && /[0-9]/.test(suffix)) {
    return slug.slice(0, -5);
  }
  return slug;
}

if (!fs.existsSync(contentDir)) {
  console.log('No content/blog directory found.');
  process.exit(0);
}

let changed = 0;

for (const file of fs.readdirSync(contentDir)) {
  if (!file.endsWith('.json')) continue;
  const filePath = path.join(contentDir, file);
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (!raw.slug) continue;

  const originalSlug = raw.slug.trim();
  const cleanSlug = canonicalBlogSlug(originalSlug);
  const needsSlugFix = originalSlug !== cleanSlug;
  const targetFile = `${cleanSlug}.json`;
  const targetPath = path.join(contentDir, targetFile);
  const needsRename = file !== targetFile && !fs.existsSync(targetPath);

  if (!needsSlugFix && !needsRename) continue;

  changed++;
  console.log(`• ${file}`);
  if (needsSlugFix) console.log(`    slug: ${originalSlug} → ${cleanSlug}`);
  if (needsRename) console.log(`    file: ${file} → ${targetFile}`);

  if (write) {
    raw.slug = cleanSlug;
    if (raw.canonicalUrl) {
      raw.canonicalUrl = raw.canonicalUrl.replace(/-[a-z0-9]{4}\/?$/i, '/');
    }
    fs.writeFileSync(targetPath, `${JSON.stringify(raw, null, 2)}\n`, 'utf8');
    if (filePath !== targetPath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
}

if (changed === 0) {
  console.log('All blog JSON slugs are already canonical.');
} else if (!write) {
  console.log(`\n${changed} file(s) need normalization. Re-run with --write to apply.`);
} else {
  console.log(`\nNormalized ${changed} file(s).`);
}
