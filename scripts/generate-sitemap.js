import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// Canonical base: always https, www (matches src/config/canonical.ts)
const BASE_URL = 'https://www.smartestgaragedoors.com';
const TODAY = new Date().toISOString().split('T')[0];

// URLs that redirect to other pages - EXCLUDE from sitemap
// These should not be indexed as they redirect to canonical URLs
//
// NOTE: this list does NOT need to (and does not) enumerate every legacy
// Navigate redirect in src/router/config.tsx. The sitemap is built only from
// coreRoutes (below) plus a regex scrape of service-area paths — a legacy
// redirect that isn't in either of those sources can never end up in the
// sitemap regardless of whether it's listed here. Only add a path here if it
// could otherwise collide with coreRoutes or the service-area regex match.
const EXCLUDED_PATHS = [
  '/home/',                                    // Redirects to /
  '/garage-door-repair-brooklyn-ny/',         // Redirects to /brooklyn-ny/
  '/garage-door-repair-stamford-ct/',         // Redirects to /stamford-ct/
  '/garage-door-installers-white-plains-ny/', // Redirects to /white-plains-ny/
  '/garage-door-installation-suffern-ny/',    // Redirects to /suffern-ny/
  '/garage-door-installation-stamford-ct/',   // Redirects to /stamford-ct/
  '/garage-door-replacement/',                // Redirects to /garage-door-installation/
  '/garage-door-repair-darien-ct/',           // Redirects to /darien-ct/
  '/garage-door-repair-white-plains-ny/',     // Redirects to /white-plains-ny/
  '/garage-door-repair-suffolk-county-ny/',   // Redirects to /suffolk-county-ny/
  '/garage-door-repair-nassau-county-ny/',    // Redirects to /nassau-county-ny/
  '/garage-door-repair-westchester-county-ny/', // Redirects to /westchester-county-ny/
  '/install-garage-door-opener-stamford-ct/', // Redirects to /stamford-ct/
  '/greatneck-ny/',                           // Redirects to /great-neck-ny/
];

// Never sitemap utility / tracking / default-noindex landing paths
function isTrackingOrCampaignPath(path) {
  return (
    path.startsWith('/go') ||
    path.startsWith('/lp/') ||
    path === '/lp/'
  );
}

// Helper function to check if a path should be excluded
function isExcluded(path) {
  if (EXCLUDED_PATHS.includes(path)) return true;
  if (isTrackingOrCampaignPath(path)) return true;
  return false;
}

// Core routes (non-service-area pages)
const coreRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/contact/', priority: '0.8', changefreq: 'monthly' },
  // /home/ removed - it redirects to /
  { path: '/book-now/', priority: '0.8', changefreq: 'monthly' },
  { path: '/reviews/', priority: '0.7', changefreq: 'weekly' },
  { path: '/blog/', priority: '0.7', changefreq: 'weekly' },
  { path: '/service-areas/', priority: '0.8', changefreq: 'monthly' },
  { path: '/garage-door-repair/', priority: '0.9', changefreq: 'monthly' },
  { path: '/garage-door-installation/', priority: '0.9', changefreq: 'monthly' },
  { path: '/emergency-garage-door-repair/', priority: '0.9', changefreq: 'monthly' },
  { path: '/spring-replacement/', priority: '0.8', changefreq: 'monthly' },
  { path: '/opener-repair-installation/', priority: '0.8', changefreq: 'monthly' },
  { path: '/cable-roller-repair/', priority: '0.8', changefreq: 'monthly' },
  { path: '/maintenance/', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/installation/', priority: '0.8', changefreq: 'monthly' },
  // Competitor comparison pages
  { path: '/vs-precision-garage-door/', priority: '0.7', changefreq: 'monthly' },
  { path: '/vs-overhead-door/', priority: '0.7', changefreq: 'monthly' },
  // Conversion pages
  { path: '/photo-estimate/', priority: '0.8', changefreq: 'monthly' },
  { path: '/second-opinion/', priority: '0.8', changefreq: 'monthly' },
  // Commercial / B2B pages
  { path: '/commercial-garage-door-repair/', priority: '0.8', changefreq: 'monthly' },
  { path: '/property-managers/', priority: '0.8', changefreq: 'monthly' },
  { path: '/loading-dock-door-repair/', priority: '0.8', changefreq: 'monthly' },
  { path: '/rolling-steel-gate-repair/', priority: '0.8', changefreq: 'monthly' },
  { path: '/commercial-maintenance-contracts/', priority: '0.8', changefreq: 'monthly' },
  { path: '/commercial-long-island-ny/', priority: '0.8', changefreq: 'monthly' },
  { path: '/commercial-northern-nj/', priority: '0.8', changefreq: 'monthly' },
  // Recruiting
  { path: '/careers/', priority: '0.6', changefreq: 'monthly' },
  { path: '/garage-door-insulation/', priority: '0.8', changefreq: 'monthly' },
  { path: '/overhead-door-repair/', priority: '0.8', changefreq: 'monthly' },
  // Buyer's guide + cost guide + brand pages
  { path: '/local-vs-national-garage-door-company/', priority: '0.7', changefreq: 'monthly' },
  { path: '/best-garage-door-company-queens/', priority: '0.8', changefreq: 'monthly' },
  { path: '/best-garage-door-company-tri-state/', priority: '0.9', changefreq: 'monthly' },
  { path: '/garage-door-replacement-cost-nassau-county/', priority: '0.8', changefreq: 'monthly' },
  { path: '/garage-door-installation-cost-westchester/', priority: '0.8', changefreq: 'monthly' },
  { path: '/insulated-garage-door-cost-long-island/', priority: '0.8', changefreq: 'monthly' },
  { path: '/liftmaster-opener-installation/', priority: '0.8', changefreq: 'monthly' },
  { path: '/pedestrian-garage-doors/', priority: '0.8', changefreq: 'monthly' },
];

// Extract service area routes from router config
// This reads the routes array and filters for service-area paths
function extractServiceAreaRoutes() {
  try {
    const routerConfigPath = path.join(__dirname, '..', 'src', 'router', 'config.tsx');
    const routerConfigContent = fs.readFileSync(routerConfigPath, 'utf8');
    
    // Extract all paths that match service-area pattern: /{city}-{state}/
    // Allows hyphens in city names (e.g. /bergen-county-nj/, /new-rochelle-ny/)
    // Legacy redirect paths (garage-door-*, etc.) are filtered by EXCLUDED_PATHS below
    const serviceAreaPathRegex = /path:\s*['"`](\/[a-z-]+-(?:ny|nj|ct)\/)['"`]/gi;
    const matches = [...routerConfigContent.matchAll(serviceAreaPathRegex)];
    
    const serviceAreaRoutes = matches.map(match => ({
      path: match[1],
      priority: '0.8',
      changefreq: 'monthly',
    }));
    
    // Remove duplicates
    const uniqueRoutes = Array.from(
      new Map(serviceAreaRoutes.map(route => [route.path, route])).values()
    );
    
    // Filter out excluded (redirected) paths
    const filteredRoutes = uniqueRoutes.filter(route => !isExcluded(route.path));
    
    return filteredRoutes.sort((a, b) => a.path.localeCompare(b.path));
  } catch (error) {
    console.warn('Warning: Could not read router config, falling back to hardcoded list:', error.message);
    // Fallback to hardcoded list if reading fails
    return [
      { path: '/brooklyn-ny/', priority: '0.8', changefreq: 'monthly' },
      { path: '/stamford-ct/', priority: '0.8', changefreq: 'monthly' },
      { path: '/darien-ct/', priority: '0.8', changefreq: 'monthly' },
      { path: '/suffern-ny/', priority: '0.8', changefreq: 'monthly' },
      { path: '/white-plains-ny/', priority: '0.8', changefreq: 'monthly' },
      { path: '/long-island-ny/', priority: '0.8', changefreq: 'monthly' },
      { path: '/staten-island-ny/', priority: '0.8', changefreq: 'monthly' },
      { path: '/teaneck-nj/', priority: '0.8', changefreq: 'monthly' },
      { path: '/greenwich-ct/', priority: '0.8', changefreq: 'monthly' },
      { path: '/new-canaan-ct/', priority: '0.8', changefreq: 'monthly' },
      { path: '/westport-ct/', priority: '0.8', changefreq: 'monthly' },
      { path: '/newtown-ct/', priority: '0.8', changefreq: 'monthly' },
      { path: '/queens-ny/', priority: '0.8', changefreq: 'monthly' },
      { path: '/elizabeth-nj/', priority: '0.8', changefreq: 'monthly' },
      { path: '/fairfield-ct/', priority: '0.8', changefreq: 'monthly' },
      { path: '/bergen-county-nj/', priority: '0.8', changefreq: 'monthly' },
      { path: '/nassau-county-ny/', priority: '0.8', changefreq: 'monthly' },
      { path: '/new-rochelle-ny/', priority: '0.8', changefreq: 'monthly' },
      { path: '/scarsdale-ny/', priority: '0.8', changefreq: 'monthly' },
      { path: '/suffolk-county-ny/', priority: '0.8', changefreq: 'monthly' },
      { path: '/westchester-county-ny/', priority: '0.8', changefreq: 'monthly' },
      { path: '/hauppauge-ny/', priority: '0.8', changefreq: 'monthly' },
      { path: '/smithtown-ny/', priority: '0.8', changefreq: 'monthly' },
      { path: '/paramus-nj/', priority: '0.8', changefreq: 'monthly' },
      { path: '/norwalk-ct/', priority: '0.8', changefreq: 'monthly' },
    ];
  }
}

// Blog posts (must match BLOG_POSTS in src/pages/blog/[slug]/page.tsx)
const blogPosts = [
  { slug: 'signs-your-garage-door-spring-needs-replacement', priority: '0.7', changefreq: 'monthly' },
  { slug: 'garage-door-repair-cost-guide-2025', priority: '0.7', changefreq: 'monthly' },
  { slug: 'how-to-fix-garage-door-wont-close', priority: '0.7', changefreq: 'monthly' },
  { slug: 'winter-garage-door-maintenance-tips', priority: '0.7', changefreq: 'monthly' },
  { slug: 'emergency-garage-door-repair-guide', priority: '0.7', changefreq: 'monthly' },
  { slug: 'professional-vs-diy-garage-door-repair', priority: '0.7', changefreq: 'monthly' },
  { slug: 'how-to-fix-garage-door-opener', priority: '0.7', changefreq: 'monthly' },
  { slug: 'cost-of-garage-door-spring-replacement', priority: '0.7', changefreq: 'monthly' },
  { slug: 'signs-you-need-new-garage-door', priority: '0.7', changefreq: 'monthly' },
  { slug: 'garage-door-safety-tips-homeowner', priority: '0.7', changefreq: 'monthly' },
  { slug: 'how-to-choose-right-garage-door', priority: '0.7', changefreq: 'monthly' },
  { slug: 'garage-door-roller-replacement-cost', priority: '0.7', changefreq: 'monthly' },
  { slug: 'chain-drive-vs-belt-drive-opener', priority: '0.7', changefreq: 'monthly' },
  { slug: 'queens-garage-door-repair-cost', priority: '0.7', changefreq: 'monthly' },
  { slug: 'brooklyn-garage-door-repair-cost', priority: '0.7', changefreq: 'monthly' },
  { slug: 'stamford-ct-garage-door-repair', priority: '0.7', changefreq: 'monthly' },
  { slug: 'white-plains-ny-garage-door-service', priority: '0.7', changefreq: 'monthly' },
  { slug: 'long-island-garage-door-repair', priority: '0.7', changefreq: 'monthly' },
  { slug: 'westchester-county-garage-door-service', priority: '0.7', changefreq: 'monthly' },
  { slug: 'greenwich-ct-garage-door-repair', priority: '0.7', changefreq: 'monthly' },
  { slug: 'staten-island-garage-door-repair', priority: '0.7', changefreq: 'monthly' },
  { slug: 'flushing-ny-garage-door-repair', priority: '0.7', changefreq: 'monthly' },
  { slug: 'fairfield-ct-garage-door-service', priority: '0.7', changefreq: 'monthly' },
  { slug: 'darien-ct-garage-door-repair', priority: '0.7', changefreq: 'monthly' },
  { slug: 'suffern-ny-garage-door-service', priority: '0.7', changefreq: 'monthly' },
];

// Content-folder blog posts (content/blog/*.json) — the Post Automation tool
// publishes here; hand-authored posts live here too.
function canonicalBlogSlug(slug) {
  const match = slug.match(/-([a-z0-9]{4})$/i);
  if (!match) return slug;
  const suffix = match[1];
  if (/[a-z]/i.test(suffix) && /[0-9]/.test(suffix)) {
    return slug.slice(0, -5);
  }
  return slug;
}

function extractContentBlogPosts() {
  const contentDir = path.join(__dirname, '..', 'content', 'blog');
  if (!fs.existsSync(contentDir)) return [];
  const posts = [];
  const seen = new Set();
  for (const file of fs.readdirSync(contentDir)) {
    if (!file.endsWith('.json')) continue;
    try {
      const data = JSON.parse(fs.readFileSync(path.join(contentDir, file), 'utf8'));
      if (data.slug) {
        const slug = canonicalBlogSlug(data.slug);
        if (!seen.has(slug)) {
          seen.add(slug);
          posts.push({ slug, priority: '0.7', changefreq: 'monthly' });
        }
      }
    } catch (e) {
      console.warn(`Warning: skipping invalid content/blog/${file}: ${e.message}`);
    }
  }
  return posts;
}

function generateSitemap() {
  const serviceAreaRoutes = extractServiceAreaRoutes();
  // Merge content-folder posts with the hardcoded list (content posts win on duplicate slugs)
  const contentPosts = extractContentBlogPosts();
  const hardcodedSlugs = new Set(blogPosts.map((p) => p.slug));
  for (const p of contentPosts) {
    if (!hardcodedSlugs.has(p.slug)) blogPosts.push(p);
  }
  
  // Filter core routes to exclude redirected URLs
  const filteredCoreRoutes = coreRoutes.filter(route => !isExcluded(route.path));
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add core routes (already filtered)
  filteredCoreRoutes.forEach(route => {
    xml += `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  // Add service area routes — skipping any path already emitted as a core
  // route. A page can legitimately be both (e.g. /commercial-long-island-ny/
  // is in coreRoutes AND matches the service-area regex), which used to
  // produce a duplicate <url> entry in the sitemap.
  const coreRoutePaths = new Set(filteredCoreRoutes.map(route => route.path));
  serviceAreaRoutes.filter(route => !coreRoutePaths.has(route.path)).forEach(route => {
    xml += `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  // Add blog posts
  blogPosts.forEach(post => {
    xml += `  <url>
    <loc>${BASE_URL}/blog/${post.slug}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${post.changefreq}</changefreq>
    <priority>${post.priority}</priority>
  </url>
`;
  });

  xml += `</urlset>`;

  // Write to public/sitemap.xml
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf8');
  
  const totalUrls = filteredCoreRoutes.length + serviceAreaRoutes.length + blogPosts.length;
  const excludedCount = EXCLUDED_PATHS.length;
  
  console.log(`Sitemap generated successfully at ${sitemapPath}`);
  console.log(`   Base URL: ${BASE_URL}`);
  console.log(`   Total URLs: ${totalUrls}`);
  console.log(`   - Core routes: ${filteredCoreRoutes.length} (${coreRoutes.length - filteredCoreRoutes.length} excluded)`);
  console.log(`   - Service areas: ${serviceAreaRoutes.length}`);
  console.log(`   - Blog posts: ${blogPosts.length}`);
  console.log(`   Warning: Excluded ${excludedCount} redirected/legacy URLs from sitemap`);
}

generateSitemap();
