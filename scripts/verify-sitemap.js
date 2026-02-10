import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URLs that should NOT be in sitemap (redirected/legacy)
const EXCLUDED_PATHS = [
  '/home/',
  '/flushing-ny/',
  '/garage-door-repair-brooklyn-ny/',
  '/garage-door-repair-stamford-ct/',
  '/garage-door-installers-white-plains-ny/',
  '/garage-door-installation-suffern-ny/',
  '/garage-door-installation-stamford-ct/',
];

// Expected base URL
const EXPECTED_BASE_URL = 'https://www.smartestgaragedoors.com';

function verifySitemap() {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ Sitemap file not found:', sitemapPath);
    process.exit(1);
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Extract all URLs from sitemap
  const urlRegex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;
  
  while ((match = urlRegex.exec(sitemapContent)) !== null) {
    urls.push(match[1]);
  }

  console.log('🔍 Sitemap Verification Report\n');
  console.log(`Total URLs in sitemap: ${urls.length}\n`);

  // Check 1: No excluded URLs
  console.log('1️⃣  Checking for excluded (redirected) URLs...');
  const excludedFound = [];
  
  urls.forEach(url => {
    const path = new URL(url).pathname;
    if (EXCLUDED_PATHS.includes(path)) {
      excludedFound.push(url);
    }
  });

  if (excludedFound.length > 0) {
    console.error(`   ❌ Found ${excludedFound.length} excluded URLs:`);
    excludedFound.forEach(url => console.error(`      - ${url}`));
  } else {
    console.log(`   ✅ No excluded URLs found (${EXCLUDED_PATHS.length} excluded paths checked)`);
  }

  // Check 2: All URLs are absolute and use correct base URL
  console.log('\n2️⃣  Checking URL format (absolute, correct base URL)...');
  const invalidUrls = [];
  const wrongBaseUrls = [];

  urls.forEach(url => {
    try {
      const urlObj = new URL(url);
      
      // Check if absolute
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        invalidUrls.push(url);
        return;
      }

      // Check base URL
      if (urlObj.origin !== EXPECTED_BASE_URL) {
        wrongBaseUrls.push(url);
      }
    } catch (e) {
      invalidUrls.push(url);
    }
  });

  if (invalidUrls.length > 0) {
    console.error(`   ❌ Found ${invalidUrls.length} invalid URLs:`);
    invalidUrls.forEach(url => console.error(`      - ${url}`));
  } else {
    console.log(`   ✅ All URLs are absolute`);
  }

  if (wrongBaseUrls.length > 0) {
    console.error(`   ❌ Found ${wrongBaseUrls.length} URLs with wrong base URL:`);
    wrongBaseUrls.forEach(url => console.error(`      - ${url}`));
  } else {
    console.log(`   ✅ All URLs use correct base URL: ${EXPECTED_BASE_URL}`);
  }

  // Check 3: No duplicate URLs
  console.log('\n3️⃣  Checking for duplicate URLs...');
  const urlCounts = {};
  urls.forEach(url => {
    urlCounts[url] = (urlCounts[url] || 0) + 1;
  });

  const duplicates = Object.entries(urlCounts).filter(([url, count]) => count > 1);
  
  if (duplicates.length > 0) {
    console.error(`   ❌ Found ${duplicates.length} duplicate URLs:`);
    duplicates.forEach(([url, count]) => {
      console.error(`      - ${url} (appears ${count} times)`);
    });
  } else {
    console.log(`   ✅ No duplicate URLs found`);
  }

  // Check 4: Trailing slash consistency
  console.log('\n4️⃣  Checking trailing slash consistency...');
  const urlsWithoutSlash = urls.filter(url => {
    const urlObj = new URL(url);
    return urlObj.pathname !== '/' && !urlObj.pathname.endsWith('/');
  });

  if (urlsWithoutSlash.length > 0) {
    console.warn(`   ⚠️  Found ${urlsWithoutSlash.length} URLs without trailing slash:`);
    urlsWithoutSlash.slice(0, 5).forEach(url => console.warn(`      - ${url}`));
    if (urlsWithoutSlash.length > 5) {
      console.warn(`      ... and ${urlsWithoutSlash.length - 5} more`);
    }
  } else {
    console.log(`   ✅ All URLs have consistent trailing slash (or are root)`);
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  const hasErrors = excludedFound.length > 0 || invalidUrls.length > 0 || wrongBaseUrls.length > 0 || duplicates.length > 0;
  
  if (hasErrors) {
    console.error('\n❌ Sitemap verification FAILED');
    console.error('   Please fix the issues above before deploying.');
    process.exit(1);
  } else {
    console.log('\n✅ Sitemap verification PASSED');
    console.log(`   ${urls.length} URLs verified`);
    console.log('   Ready for deployment!');
  }
}

verifySitemap();
