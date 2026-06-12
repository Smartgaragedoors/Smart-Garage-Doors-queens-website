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
  date: string;
  category: string;
  readTime: string;
  author: string;
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
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
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
  if (t.includes('repair')) return 'Repair';
  if (t.includes('maintenance')) return 'Maintenance';
  return 'Guides';
}

function toHtml(post: ContentBlogJson): string {
  const parts: string[] = [];
  if (post.intro) parts.push(mdLiteToHtml(post.intro));
  for (const s of post.sections ?? []) {
    parts.push(`<h2>${escapeHtml(s.heading)}</h2>`);
    parts.push(mdLiteToHtml(s.body));
  }
  if (post.cta) parts.push(mdLiteToHtml(post.cta));
  return parts.join('\n');
}

function normalize(post: ContentBlogJson): NormalizedBlogPost {
  return {
    title: post.title,
    slug: post.slug,
    description: post.description,
    content: toHtml(post),
    image: post.image,
    date: post.date,
    category: categoryFor(post),
    readTime: `${Math.max(3, Math.round(wordCount(post) / 200))} min read`,
    author: 'Smart Garage Doors Team',
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
    CONTENT_BLOG_POSTS[raw.slug] = normalize(raw);
  }
}

/** Newest-first list for the blog index. */
export const CONTENT_BLOG_LIST: NormalizedBlogPost[] = Object.values(CONTENT_BLOG_POSTS).sort(
  (a, b) => (a.date < b.date ? 1 : -1)
);
