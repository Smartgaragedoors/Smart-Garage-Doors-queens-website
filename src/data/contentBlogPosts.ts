import { humanizeAutoPostHeading, stripAutomationSlugSuffix } from '../utils/blogFormat';

/**
 * Content-folder blog posts.
 * --------------------------
 * Loads every JSON file in /content/blog/ at build time (Vite glob import) and
 * normalizes it to the same shape the hardcoded BLOG_POSTS map uses, so the
 * blog index and [slug] page render them identically.
 *
 * This is the publishing target for the Post Automation tool: its GitHub
 * publisher commits `<slug>.json` (+ image) to this folder, Vercel rebuilds,
 * and the post is live + prerendered. Posts can also be hand-authored here.
 */

export interface ContentBlogSection {
  heading: string;
  body: string;
}

export interface ContentBlogJson {
  title: string;
  description: string;
  slug: string;
  date: string; // YYYY-MM-DD
  updatedAt?: string;
  city?: string | null;
  service?: string | null;
  image: string;
  imageAlt?: string | null;
  keywords?: string[];
  canonicalUrl?: string | null;
  h1?: string;
  intro?: string;
  sections?: ContentBlogSection[];
  faq?: Array<{ question: string; answer: string }>;
  cta?: string;
  body_markdown?: string;
}

export interface NormalizedBlogPost {
  title: string;
  slug: string;
  description: string;
  content: string; // HTML
  image: string;
  imageAlt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  city?: string | null;
  service?: string | null;
  faqs?: Array<{ question: string; answer: string }>;
  relatedPosts?: string[];
}

// ---- markdown-lite → HTML (paragraphs, **bold**, [links](/path/), "- " lists) ----

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function inlineMd(s: string): string {
  return s
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(
      /\[([^\]]+)\]\(([^)\s]+)\)/g,
      '<a href="$2" class="text-blue-600 font-medium hover:text-blue-800 hover:underline">$1</a>'
    );
}

function blockToHtml(block: string): string {
  const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
  if (lines.length > 0 && lines.every((l) => l.startsWith('- '))) {
    const items = lines.map((l) => `<li>${inlineMd(escapeHtml(l.slice(2)))}</li>`).join('');
    return `<ul>${items}</ul>`;
  }
  return `<p>${inlineMd(escapeHtml(lines.join(' ')))}</p>`;
}

export function mdLiteToHtml(text: string): string {
  return text
    .trim()
    .split(/\n\s*\n/)
    .filter((b) => b.trim())
    .map(blockToHtml)
    .join('\n');
}

// ---- normalization -------------------------------------------------------

function wordCount(post: ContentBlogJson): number {
  const all = [
    post.intro ?? '',
    ...(post.sections ?? []).map((s) => `${s.heading} ${s.body}`),
    post.cta ?? '',
  ].join(' ');
  return all.split(/\s+/).filter(Boolean).length;
}

function categoryFor(post: ContentBlogJson): string {
  const t = `${post.title} ${post.service ?? ''}`.toLowerCase();
  if (t.includes('cost') || t.includes('price')) return 'Cost Guide';
  if (t.includes('install')) return 'Installation';
  if (t.includes('repair')) return 'Repair';
  if (t.includes('maintenance')) return 'Maintenance';
  if (t.includes('safety')) return 'Safety';
  if (t.includes('emergency')) return 'Emergency';
  return 'Guides';
}

/** Slugs with Post Automation collision suffixes → canonical slug. */
export const CONTENT_BLOG_ALIASES: Record<string, string> = {};

export function canonicalBlogSlug(slug: string): string {
  return stripAutomationSlugSuffix(slug.trim());
}

function toHtml(post: ContentBlogJson): string {
  const parts: string[] = [];
  if (post.intro) parts.push(mdLiteToHtml(post.intro));
  for (const s of post.sections ?? []) {
    const heading = humanizeAutoPostHeading(s.heading);
    parts.push(`<h2>${escapeHtml(heading)}</h2>`);
    parts.push(mdLiteToHtml(s.body));
  }
  if (post.cta) {
    parts.push('<div class="blog-cta-callout">');
    parts.push(mdLiteToHtml(post.cta));
    parts.push('</div>');
  }
  return parts.join('\n');
}

function normalize(post: ContentBlogJson): NormalizedBlogPost {
  const slug = canonicalBlogSlug(post.slug);

  return {
    title: post.h1?.trim() || post.title,
    slug,
    description: post.description,
    content: toHtml(post),
    image: post.image,
    imageAlt: post.imageAlt?.trim() || post.title,
    date: post.date,
    category: categoryFor(post),
    readTime: `${Math.max(3, Math.round(wordCount(post) / 200))} min read`,
    author: 'Smart Garage Doors Team',
    city: post.city ?? null,
    service: post.service ?? null,
    faqs: post.faq && post.faq.length ? post.faq : undefined,
  };
}

// ---- load all /content/blog/*.json at build time -------------------------

const modules = import.meta.glob('../../content/blog/*.json', { eager: true }) as Record<
  string,
  { default: ContentBlogJson } | ContentBlogJson
>;

export const CONTENT_BLOG_POSTS: Record<string, NormalizedBlogPost> = {};

for (const mod of Object.values(modules)) {
  const raw = ('default' in mod ? mod.default : mod) as ContentBlogJson;
  if (raw && raw.slug && raw.title) {
    const originalSlug = raw.slug.trim();
    const normalized = normalize(raw);
    CONTENT_BLOG_POSTS[normalized.slug] = normalized;
    if (originalSlug !== normalized.slug) {
      CONTENT_BLOG_ALIASES[originalSlug] = normalized.slug;
    }
  }
}

/** Resolve a content post by slug, including Post Automation suffix aliases. */
export function getContentBlogPost(slug: string): NormalizedBlogPost | null {
  const trimmed = slug.trim();
  if (CONTENT_BLOG_POSTS[trimmed]) return CONTENT_BLOG_POSTS[trimmed];
  const alias = CONTENT_BLOG_ALIASES[trimmed];
  if (alias && CONTENT_BLOG_POSTS[alias]) return CONTENT_BLOG_POSTS[alias];
  const cleaned = canonicalBlogSlug(trimmed);
  if (cleaned !== trimmed && CONTENT_BLOG_POSTS[cleaned]) return CONTENT_BLOG_POSTS[cleaned];
  return null;
}

/** If the URL slug should redirect to a canonical slug, returns the target. */
export function getContentBlogSlugRedirect(slug: string): string | null {
  const post = getContentBlogPost(slug);
  if (!post) return null;
  const trimmed = slug.trim();
  return trimmed !== post.slug ? post.slug : null;
}

/** Newest-first list for the blog index. */
export const CONTENT_BLOG_LIST: NormalizedBlogPost[] = Object.values(CONTENT_BLOG_POSTS).sort(
  (a, b) => (a.date < b.date ? 1 : -1)
);

/** Related posts for sidebar (same category first, then newest). */
export function getRelatedBlogPosts(currentSlug: string, limit = 3): NormalizedBlogPost[] {
  const current = CONTENT_BLOG_POSTS[currentSlug];
  const others = CONTENT_BLOG_LIST.filter((p) => p.slug !== currentSlug);
  if (!current) return others.slice(0, limit);

  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
