/**
 * SEO-critical canonical base URL.
 * Always https, www. Do not rely on env for SEO URLs.
 * Used for: canonical tags, og:url, breadcrumb schema, sitemap.
 */
export const CANONICAL_BASE = 'https://www.smartestgaragedoors.com';

/** Build canonical URL for a path. Ensures trailing slash. */
export function buildCanonical(path: string): string {
  const p = path.replace(/\/$/, '') || '/';
  return p === '/' ? `${CANONICAL_BASE}/` : `${CANONICAL_BASE}${p.startsWith('/') ? p : '/' + p}/`;
}
