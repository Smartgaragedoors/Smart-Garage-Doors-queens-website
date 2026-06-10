/**
 * One-time codemod: location pages used to inject a bare LocalBusiness schema
 * via useEffect AND pass a hardcoded reviewCount prop. LocationPageTemplate now
 * renders a richer, centralized LocalBusinessSchema (with @id, offer catalog,
 * and the live review count from BUSINESS_INFO), so this script:
 *   1. extracts the geo coordinates from each page's useEffect schema
 *   2. removes the useEffect block + now-unused imports
 *   3. removes the hardcoded reviewCount prop
 *   4. passes the extracted coordinates as the new `geo` prop
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIR = join(process.cwd(), 'src', 'pages', 'service-areas');
let changed = 0, skipped = 0;

for (const entry of readdirSync(DIR, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const file = join(DIR, entry.name, 'page.tsx');
  if (!existsSync(file)) continue;
  let src = readFileSync(file, 'utf8');

  // 1. Extract geo coords from the useEffect schema
  const geoMatch = src.match(/geo:\s*\{\s*'@type':\s*'GeoCoordinates',\s*latitude:\s*'([^']+)',\s*longitude:\s*'([^']+)'\s*\}/);

  // 2. Remove the whole useEffect schema-injection block
  const cleaned = src.replace(
    /\s*useEffect\(\(\) => \{[\s\S]*?document\.head\.removeChild\(s\); \};\s*\}, \[\]\);\n/,
    '\n'
  );
  if (cleaned === src) { console.log(`skip (no useEffect block): ${entry.name}`); skipped++; continue; }
  src = cleaned;

  // 3. Remove now-unused imports
  src = src.replace(/import \{ useEffect \} from 'react';\r?\n/, '');
  if (!src.includes('buildCanonical(')) {
    src = src.replace(/import \{ buildCanonical \} from '[^']+';\r?\n/, '');
  }

  // 4. Remove hardcoded reviewCount prop
  src = src.replace(/\s*reviewCount=\{\d+\}/, '');

  // 5. Add geo prop after stateName=... line
  if (geoMatch) {
    src = src.replace(
      /(stateName="[^"]+")/,
      `$1\n      geo={{ latitude: '${geoMatch[1]}', longitude: '${geoMatch[2]}' }}`
    );
  }

  writeFileSync(file, src, 'utf8');
  console.log(`updated: ${entry.name}${geoMatch ? '' : ' (NO GEO FOUND)'}`);
  changed++;
}
console.log(`done: ${changed} updated, ${skipped} skipped`);
