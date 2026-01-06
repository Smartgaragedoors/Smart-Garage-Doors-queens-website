import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.smartestgaragedoors.com';
const TODAY = new Date().toISOString().split('T')[0];

// Routes from router config
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/contact/', priority: '0.8', changefreq: 'monthly' },
  { path: '/home/', priority: '0.6', changefreq: 'monthly' },
  { path: '/book-now/', priority: '0.8', changefreq: 'monthly' },
  { path: '/reviews/', priority: '0.7', changefreq: 'weekly' },
  { path: '/blog/', priority: '0.7', changefreq: 'weekly' },
  { path: '/garage-door-repair/', priority: '0.9', changefreq: 'monthly' },
  { path: '/garage-door-installation/', priority: '0.9', changefreq: 'monthly' },
  { path: '/emergency-garage-door-repair/', priority: '0.9', changefreq: 'monthly' },
  { path: '/spring-replacement/', priority: '0.8', changefreq: 'monthly' },
  { path: '/opener-repair-installation/', priority: '0.8', changefreq: 'monthly' },
  { path: '/cable-roller-repair/', priority: '0.8', changefreq: 'monthly' },
  { path: '/maintenance/', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/installation/', priority: '0.8', changefreq: 'monthly' },
];

// Service area pages
const serviceAreaPages = [
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
];

// Blog posts from the BLOG_POSTS object
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
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add all routes
  [...routes, ...serviceAreaPages].forEach(route => {
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
  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
  console.log(`   Total URLs: ${routes.length + serviceAreaPages.length + blogPosts.length}`);
}

generateSitemap();

