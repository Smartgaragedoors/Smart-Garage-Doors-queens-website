import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// Read site URL from environment or use default
const BASE_URL = process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://www.smartestgaragedoors.com';
const TODAY = new Date().toISOString().split('T')[0];

// URLs that redirect to other pages - EXCLUDE from sitemap
// These should not be indexed as they redirect to canonical URLs
const EXCLUDED_PATHS = [
  '/home/',                                    // Redirects to /
  '/flushing-ny/',                            // Redirects to /queens-ny/
  '/garage-door-repair-brooklyn-ny/',         // Redirects to /brooklyn-ny/
  '/garage-door-repair-stamford-ct/',         // Redirects to /stamford-ct/
  '/garage-door-installers-white-plains-ny/', // Redirects to /white-plains-ny/
  '/garage-door-installation-suffern-ny/',    // Redirects to /suffern-ny/
  '/garage-door-installation-stamford-ct/',  // Will redirect in commit 2, exclude now
];

// Helper function to check if a path should be excluded
function isExcluded(path) {
  return EXCLUDED_PATHS.includes(path);
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
];

// Extract service area routes from router config
// This reads the routes array and filters for service-area paths
function extractServiceAreaRoutes() {
  try {
    const routerConfigPath = path.join(__dirname, '..', 'src', 'router', 'config.tsx');
    const routerConfigContent = fs.readFileSync(routerConfigPath, 'utf8');
    
    // Extract all paths that match service-area pattern: /{city}-{state}/
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
    console.warn('⚠️  Could not read router config, falling back to hardcoded list:', error.message);
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

// Blog posts (static list - could be extracted from blog config if available)
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
];

function generateSitemap() {
  const serviceAreaRoutes = extractServiceAreaRoutes();
  
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

  // Add service area routes
  serviceAreaRoutes.forEach(route => {
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
  
  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
  console.log(`   Base URL: ${BASE_URL}`);
  console.log(`   Total URLs: ${totalUrls}`);
  console.log(`   - Core routes: ${filteredCoreRoutes.length} (${coreRoutes.length - filteredCoreRoutes.length} excluded)`);
  console.log(`   - Service areas: ${serviceAreaRoutes.length}`);
  console.log(`   - Blog posts: ${blogPosts.length}`);
  console.log(`   ⚠️  Excluded ${excludedCount} redirected/legacy URLs from sitemap`);
}

generateSitemap();
