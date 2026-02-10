# Google Search Console Indexing Debug Report
**Date:** February 2, 2026  
**Site:** smartestgaragedoors.com  
**Framework:** Vite + React Router SPA on Vercel

---

## EXECUTIVE SUMMARY

This audit identifies **7 critical issues** and **12 moderate issues** causing GSC indexing problems. The primary culprits are:
1. **Sitemap includes redirected URLs** (causing "Alternate page with canonical" exclusions)
2. **Duplicate route definitions** (causing inconsistent behavior)
3. **Missing noindex on 404 page** (causing "Soft 404" exclusions)
4. **Canonical URL inconsistencies** (trailing slash mismatches)
5. **Robots.txt path mismatches** (some paths allowed without trailing slash)

---

## 1. INVENTORY OF ALL PUBLIC URLS

### Routes Defined in `src/router/config.tsx`:

**Core Pages (13):**
- `/` (home)
- `/home/` → redirects to `/`
- `/contact/`
- `/book-now/`
- `/reviews/`
- `/blog/`
- `/blog/:slug/`
- `/service-areas/`
- `/garage-door-repair/`
- `/garage-door-installation/`
- `/emergency-garage-door-repair/`
- `/spring-replacement/`
- `/opener-repair-installation/`
- `/cable-roller-repair/`
- `/maintenance/`
- `/services/installation/`

**Service Area Pages (28):**
- `/brooklyn-ny/`
- `/queens-ny/`
- `/stamford-ct/`
- `/darien-ct/`
- `/suffern-ny/`
- `/white-plains-ny/`
- `/long-island-ny/`
- `/staten-island-ny/`
- `/teaneck-nj/`
- `/greenwich-ct/`
- `/new-canaan-ct/`
- `/westport-ct/`
- `/newtown-ct/`
- `/new-rochelle-ny/`
- `/scarsdale-ny/`
- `/westchester-county-ny/`
- `/nassau-county-ny/`
- `/suffolk-county-ny/`
- `/fairfield-ct/`
- `/bergen-county-nj/`
- `/elizabeth-nj/`
- `/hauppauge-ny/`
- `/smithtown-ny/`
- `/paramus-nj/` (NEW)
- `/norwalk-ct/` (NEW)
- `/edison-nj/` (NEW)
- `/jackson-nj/` (NEW)

**Legacy/Redirect Routes:**
- `/flushing-ny/` → redirects to `/queens-ny/`
- `/garage-door-replacement/` → redirects to `/garage-door-installation/`
- `/garage-door-repair-brooklyn-ny/` → redirects to `/brooklyn-ny/`
- `/garage-door-repair-stamford-ct/` → redirects to `/stamford-ct/`
- `/garage-door-installers-white-plains-ny/` → **DUPLICATE** (see issue #2)
- `/garage-door-installation-suffern-ny/` → redirects to `/suffern-ny/`
- `/garage-door-installation-stamford-ct/` → renders StamfordCTPage (NOT a redirect)

**Catch-all:**
- `*` → NotFoundPage (returns HTTP 200, no noindex)

**Total Intended URLs:** ~41 unique pages (excluding redirects and catch-all)

---

## 2. CANONICAL + META ROBOTS AUDIT

### Canonical URL Strategy:
- **Base URL:** `https://www.smartestgaragedoors.com` (from `VITE_SITE_URL` env var, fallback hardcoded)
- **Trailing Slash:** **INCONSISTENT** - Most routes use trailing slash, but `/contact` page sets canonical without slash
- **Format:** Absolute URLs (correct)

### Issues Found:

#### ❌ **CRITICAL: Contact Page Canonical Mismatch**
- **Route:** `/contact/` (with trailing slash)
- **Canonical Set:** `/contact` (without trailing slash) - Line 40 in `src/pages/contact/page.tsx`
- **Impact:** Google sees canonical mismatch between URL and canonical tag

#### ⚠️ **MODERATE: Duplicate Canonical Logic**
Many service-area pages set canonical in BOTH:
1. `useEffect` hook (manual DOM manipulation)
2. `DynamicMetaTags` component

**Affected Pages:**
- `queens-ny/page.tsx` (lines 24-27 AND 89)
- `elizabeth-nj/page.tsx` (lines 24-27 AND 120)
- `white-plains-ny/page.tsx` (lines 16-26 AND 47)
- `stamford-ct/page.tsx` (lines 14-24 AND 33)
- `suffern-ny/page.tsx` (lines 13-23)

**Risk:** Race conditions, duplicate tags, inconsistent values

#### ⚠️ **MODERATE: Canonical Default Behavior**
`DynamicMetaTags` component (line 79) defaults to:
```typescript
finalCanonical = `${siteUrl}${routerLocation.pathname}`;
```
This uses `routerLocation.pathname` which may not include trailing slash consistently.

#### ✅ **GOOD: New City Pages**
Template-based pages (Paramus, Norwalk, Edison, Jackson) use `DynamicMetaTags` correctly with explicit canonical.

### Meta Robots Audit:

#### ❌ **CRITICAL: NotFound Page Missing noindex**
- **File:** `src/pages/NotFound.tsx`
- **Current:** No `DynamicMetaTags` component, no noindex meta tag
- **Impact:** Google crawls 404 pages, sees HTTP 200, treats as "Soft 404"
- **Fix Required:** Add `<DynamicMetaTags noIndex={true} />`

#### ✅ **GOOD: Blog Post Not Found**
- **File:** `src/pages/blog/[slug]/page.tsx` (line 730)
- **Current:** Sets `noIndex={true}` when post not found
- **Status:** Correct

#### ✅ **GOOD: No Sitewide noindex**
- No global noindex found
- All service pages are indexable

### Sample Canonical Table (30 Key Routes):

| Route | Canonical Set | Trailing Slash Match | Robots | Issue |
|-------|--------------|---------------------|--------|-------|
| `/` | `${siteUrl}/` | ✅ Yes | index | None |
| `/home/` | `${siteUrl}/home/` | ✅ Yes | index | Redirects to `/` (should not be in sitemap) |
| `/contact/` | `${siteUrl}/contact` | ❌ **NO** | index | **Canonical missing trailing slash** |
| `/queens-ny/` | `${siteUrl}/queens-ny/` | ✅ Yes | index | Duplicate canonical logic |
| `/flushing-ny/` | N/A (redirect) | N/A | N/A | Redirects to `/queens-ny/` (should not be in sitemap) |
| `/brooklyn-ny/` | `${siteUrl}/brooklyn-ny/` | ✅ Yes | index | None |
| `/stamford-ct/` | `${siteUrl}/stamford-ct/` | ✅ Yes | index | Duplicate canonical logic |
| `/paramus-nj/` | `${siteUrl}/paramus-nj/` | ✅ Yes | index | None |
| `/garage-door-repair/` | `${siteUrl}/garage-door-repair/` | ✅ Yes | index | None |
| `/garage-door-installation/` | `${siteUrl}/garage-door-installation/` | ✅ Yes | index | None |
| `/emergency-garage-door-repair/` | `${siteUrl}/emergency-garage-door-repair/` | ✅ Yes | index | None |
| `/spring-replacement/` | `${siteUrl}/spring-replacement/` | ✅ Yes | index | None |
| `/opener-repair-installation/` | `${siteUrl}/opener-repair-installation/` | ✅ Yes | index | None |
| `/cable-roller-repair/` | `${siteUrl}/cable-roller-repair/` | ✅ Yes | index | None |
| `/maintenance/` | `${siteUrl}/maintenance/` | ✅ Yes | index | None |
| `/services/installation/` | `${siteUrl}/services/installation/` | ✅ Yes | index | None |
| `/service-areas/` | `${siteUrl}/service-areas/` | ✅ Yes | index | None |
| `/blog/` | `${siteUrl}/blog/` | ✅ Yes | index | None |
| `/blog/:slug/` | `${siteUrl}/blog/:slug/` | ✅ Yes | index (or noindex if not found) | None |
| `*` (404) | N/A | N/A | ❌ **Missing noindex** | **CRITICAL: Should have noindex** |
| `/garage-door-repair-brooklyn-ny/` | N/A (redirect) | N/A | N/A | Redirects (should not be in sitemap) |
| `/garage-door-repair-stamford-ct/` | N/A (redirect) | N/A | N/A | Redirects (should not be in sitemap) |
| `/garage-door-installers-white-plains-ny/` | N/A (redirect) | N/A | N/A | **DUPLICATE ROUTE** (should not be in sitemap) |
| `/garage-door-installation-stamford-ct/` | `${siteUrl}/garage-door-installation-stamford-ct/` | ✅ Yes | index | **Renders page, not redirect** |
| `/garage-door-installation-suffern-ny/` | N/A (redirect) | N/A | N/A | Redirects (should not be in sitemap) |

---

## 3. SOFT 404 CONDITIONS AUDIT

### ❌ **CRITICAL: NotFound Page Returns HTTP 200**
- **Route:** `*` (catch-all)
- **Component:** `src/pages/NotFound.tsx`
- **HTTP Status:** 200 (SPA default behavior)
- **Meta Robots:** **MISSING** (no noindex)
- **Content:** Has substantial content (good for UX), but Google sees HTTP 200 + no noindex = "Soft 404"
- **Impact:** Any non-existent URL returns 200 with content, Google flags as "Soft 404"

### ⚠️ **MODERATE: Blog Post Not Found**
- **Route:** `/blog/:slug/` with invalid slug
- **Component:** `src/pages/blog/[slug]/page.tsx` (line 724-742)
- **HTTP Status:** 200
- **Meta Robots:** ✅ Sets `noIndex={true}` (correct)
- **Status:** Properly handled

### ⚠️ **LOW RISK: New City Pages Fallback**
- **Component:** `src/pages/service-areas/paramus-nj/page.tsx` (and others)
- **Fallback:** Returns `<div>Location not found</div>` if location missing
- **Risk:** Low (locations are hardcoded in config, shouldn't fail)
- **Recommendation:** Add noindex to fallback, but this should never trigger

### ✅ **GOOD: No Client-Only Content Issues**
- All pages render content server-side (Vite prerenders)
- No content hidden behind geolocation checks
- No async fetch dependencies that could fail for bots

### ✅ **GOOD: Vercel Rewrite Behavior**
- `vercel.json` rewrites all non-API routes to `/index.html` (line 231-233)
- This is correct for SPAs
- HTTP status is handled by React Router, not Vercel

---

## 4. REDIRECTS / REWRITES AUDIT

### Vercel Redirects (`vercel.json`):

#### ✅ **GOOD: Trailing Slash Enforcement**
```json
{
  "source": "/:path((?!.*\\.).*[^/])",
  "destination": "/:path/",
  "permanent": true
}
```
- Redirects URLs without trailing slash to URLs with trailing slash
- **Impact:** Ensures consistent trailing slash usage

#### ✅ **GOOD: Domain Redirects**
- `old.smartestgaragedoors.com` → `www.smartestgaragedoors.com` (correct)

#### ✅ **GOOD: Legacy Route Redirects**
- `/flushing-ny/` → `/queens-ny/` (301 permanent)
- `/home/` → `/` (301 permanent)
- `/garage-door-replacement/` → `/garage-door-installation/` (301 permanent)
- `/garage-door-repair-brooklyn-ny/` → `/brooklyn-ny/` (301 permanent)
- `/garage-door-repair-stamford-ct/` → `/stamford-ct/` (301 permanent)
- `/garage-door-installers-white-plains-ny/` → `/white-plains-ny/` (301 permanent)
- `/garage-door-installation-suffern-ny/` → `/suffern-ny/` (301 permanent)

#### ⚠️ **ISSUE: React Router Also Handles Redirects**
Some redirects are handled in BOTH:
1. `vercel.json` (server-level)
2. `src/router/config.tsx` (client-level)

**Example:** `/flushing-ny/` redirects in both places. This is redundant but not harmful.

#### ❌ **CRITICAL: Duplicate Route Definition**
**File:** `src/router/config.tsx` lines 261-271

```typescript
{
  path: '/garage-door-installers-white-plains-ny/',
  element: <Navigate to="/white-plains-ny/" replace />  // Line 261-263
},
// ... other routes ...
{
  path: '/garage-door-installers-white-plains-ny/',
  element: <WhitePlainsNYPage />  // Line 269-271 - DUPLICATE!
},
```

**Impact:** React Router will use the FIRST match, so this route redirects. But having duplicate definitions is confusing and error-prone.

#### ⚠️ **CONFUSING: `/garage-door-installation-stamford-ct/`**
- **Route:** Defined in `src/router/config.tsx` line 273-275
- **Behavior:** Renders `StamfordCTPage` (NOT a redirect)
- **Issue:** This URL is a legacy format but renders content instead of redirecting
- **Impact:** Creates duplicate content (same page at `/stamford-ct/` and `/garage-door-installation-stamford-ct/`)
- **Recommendation:** Should redirect to `/stamford-ct/` OR have canonical pointing to `/stamford-ct/`

---

## 5. SITEMAP AUDIT

### Sitemap Generation (`scripts/generate-sitemap.js`):

#### ✅ **GOOD: Dynamic Route Extraction**
- Script reads `src/router/config.tsx` and extracts service-area routes using regex
- Automatically includes new cities (Paramus, Norwalk, Edison, Jackson)
- Has fallback hardcoded list if extraction fails

#### ❌ **CRITICAL: Sitemap Includes Redirected URLs**

**Current sitemap includes these redirected URLs:**
1. `/home/` → redirects to `/` (should not be in sitemap)
2. `/flushing-ny/` → redirects to `/queens-ny/` (should not be in sitemap)
3. `/garage-door-repair-brooklyn-ny/` → redirects to `/brooklyn-ny/` (should not be in sitemap)
4. `/garage-door-repair-stamford-ct/` → redirects to `/stamford-ct/` (should not be in sitemap)
5. `/garage-door-installers-white-plains-ny/` → redirects to `/white-plains-ny/` (should not be in sitemap)
6. `/garage-door-installation-suffern-ny/` → redirects to `/suffern-ny/` (should not be in sitemap)

**Impact:** Google crawls these URLs, sees redirects, excludes them as "Alternate page with canonical" or "Redirect"

#### ⚠️ **MODERATE: `/garage-door-installation-stamford-ct/` in Sitemap**
- This URL is in the sitemap (line 136)
- But it renders content (not a redirect)
- Creates duplicate content issue with `/stamford-ct/`

#### ✅ **GOOD: Trailing Slash Consistency**
- All URLs in sitemap have trailing slash (matches route definitions)

#### ✅ **GOOD: Absolute URLs**
- All URLs use `https://www.smartestgaragedoors.com` (correct)

### Sample URLs from Sitemap (20):

| URL in Sitemap | Status | Issue |
|----------------|--------|-------|
| `https://www.smartestgaragedoors.com/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/contact/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/home/` | ❌ **Redirects** | **Should not be in sitemap** |
| `https://www.smartestgaragedoors.com/book-now/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/reviews/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/blog/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/service-areas/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/garage-door-repair/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/garage-door-installation/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/emergency-garage-door-repair/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/spring-replacement/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/opener-repair-installation/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/cable-roller-repair/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/maintenance/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/services/installation/` | ✅ Valid | None |
| `https://www.smartestgaragedoors.com/flushing-ny/` | ❌ **Redirects** | **Should not be in sitemap** |
| `https://www.smartestgaragedoors.com/garage-door-repair-brooklyn-ny/` | ❌ **Redirects** | **Should not be in sitemap** |
| `https://www.smartestgaragedoors.com/garage-door-repair-stamford-ct/` | ❌ **Redirects** | **Should not be in sitemap** |
| `https://www.smartestgaragedoors.com/garage-door-installers-white-plains-ny/` | ❌ **Redirects** | **Should not be in sitemap** |
| `https://www.smartestgaragedoors.com/garage-door-installation-stamford-ct/` | ⚠️ **Renders content** | **Duplicate content with `/stamford-ct/`** |

---

## 6. ROBOTS.TXT AUDIT

### Current `public/robots.txt`:

#### ✅ **GOOD: Sitemap URL**
- Points to `https://www.smartestgaragedoors.com/sitemap.xml` (correct)

#### ✅ **GOOD: Disallows Booking Page**
- `Disallow: /book-now/` (intentional, correct)

#### ⚠️ **MODERATE: Path Inconsistencies**

**Issue 1: `/contact` vs `/contact/`**
- Line 8: `Allow: /contact` (no trailing slash)
- But route is `/contact/` (with trailing slash)
- **Impact:** Google may be confused about which path is allowed

**Issue 2: `/maintenance/` Missing**
- Route exists: `/maintenance/`
- Robots.txt only has: `Allow: /services/maintenance/`
- **Impact:** `/maintenance/` may not be explicitly allowed (though not disallowed)

#### ✅ **GOOD: All Service Areas Explicitly Allowed**
- All 28 service-area pages are listed with trailing slash
- New cities (Paramus, Norwalk, Edison, Jackson) are included

#### ✅ **GOOD: No Overly Restrictive Rules**
- No `Disallow: /` that would block everything
- Service pages are allowed

---

## 7. FINAL REPORT

### A) SUMMARY: What's Most Likely Causing Indexing Issues

#### 1. **"Alternate page with canonical" Exclusions**
**Root Cause:** Sitemap includes 6+ redirected URLs
- `/home/` redirects to `/`
- `/flushing-ny/` redirects to `/queens-ny/`
- `/garage-door-repair-brooklyn-ny/` redirects to `/brooklyn-ny/`
- `/garage-door-repair-stamford-ct/` redirects to `/stamford-ct/`
- `/garage-door-installers-white-plains-ny/` redirects to `/white-plains-ny/`
- `/garage-door-installation-suffern-ny/` redirects to `/suffern-ny/`

**Impact:** Google crawls these URLs, sees 301 redirects, excludes them. These should not be in sitemap.

#### 2. **"Soft 404" Exclusions**
**Root Cause:** NotFound page (`*` route) returns HTTP 200 with no `noindex` meta tag
- SPA catch-all always returns 200
- Google sees substantial content but no noindex
- Google flags as "Soft 404" (page exists but shouldn't be indexed)

**Impact:** Any non-existent URL gets flagged as Soft 404.

#### 3. **"Redirect" Exclusions**
**Root Cause:** Same as #1 - redirected URLs in sitemap
- Google follows redirects, excludes source URL

#### 4. **"Noindex" Exclusions**
**Root Cause:** None found (good!)
- Only blog post not found has noindex (correct)
- No sitewide noindex

#### 5. **"404" Exclusions**
**Root Cause:** None (SPA always returns 200)
- Real 404s don't exist in this SPA architecture

#### 6. **Canonical Mismatches**
**Root Cause:** Contact page canonical missing trailing slash
- Route: `/contact/`
- Canonical: `/contact` (missing slash)
- Google sees mismatch

#### 7. **Duplicate Content**
**Root Cause:** `/garage-door-installation-stamford-ct/` renders same content as `/stamford-ct/`
- Both URLs in sitemap
- No canonical pointing to preferred URL
- Google may see duplicate content

---

### B) TOP 10 FIXES (Ranked by Impact + LOWEST RISK First)

#### 🥇 **Fix #1: Remove Redirected URLs from Sitemap** (HIGH IMPACT, ZERO RISK)
**Priority:** CRITICAL  
**Risk:** None (removing bad URLs)  
**Files:** `scripts/generate-sitemap.js`  
**Action:** Filter out URLs that redirect before adding to sitemap  
**Expected Impact:** Eliminates "Alternate page with canonical" and "Redirect" exclusions

#### 🥈 **Fix #2: Add noindex to NotFound Page** (HIGH IMPACT, ZERO RISK)
**Priority:** CRITICAL  
**Risk:** None (404 pages shouldn't be indexed)  
**Files:** `src/pages/NotFound.tsx`  
**Action:** Add `<DynamicMetaTags noIndex={true} />`  
**Expected Impact:** Eliminates "Soft 404" exclusions

#### 🥉 **Fix #3: Fix Contact Page Canonical** (MEDIUM IMPACT, ZERO RISK)
**Priority:** HIGH  
**Risk:** None (fixing canonical mismatch)  
**Files:** `src/pages/contact/page.tsx` (line 40)  
**Action:** Change canonical from `/contact` to `/contact/`  
**Expected Impact:** Fixes canonical mismatch, improves indexing

#### 4. **Fix #4: Remove Duplicate Route Definition** (MEDIUM IMPACT, ZERO RISK)
**Priority:** HIGH  
**Risk:** None (removing duplicate)  
**Files:** `src/router/config.tsx` (lines 269-271)  
**Action:** Remove duplicate `/garage-door-installers-white-plains-ny/` route  
**Expected Impact:** Prevents confusion, ensures consistent redirect behavior

#### 5. **Fix #5: Fix `/garage-door-installation-stamford-ct/` Duplicate Content** (MEDIUM IMPACT, LOW RISK)
**Priority:** HIGH  
**Risk:** Low (may affect existing ranking, but duplicate content is worse)  
**Files:** `src/router/config.tsx` (line 273-275)  
**Action:** Change to redirect to `/stamford-ct/` OR add canonical to `/stamford-ct/`  
**Expected Impact:** Eliminates duplicate content issue

#### 6. **Fix #6: Remove Duplicate Canonical Logic** (LOW IMPACT, ZERO RISK)
**Priority:** MEDIUM  
**Risk:** None (removing redundancy)  
**Files:** Multiple service-area pages  
**Action:** Remove manual canonical setting in `useEffect`, rely on `DynamicMetaTags`  
**Expected Impact:** Prevents race conditions, ensures consistent canonicals

#### 7. **Fix #7: Fix Robots.txt Path Inconsistencies** (LOW IMPACT, ZERO RISK)
**Priority:** MEDIUM  
**Files:** `public/robots.txt`  
**Action:** 
- Change `Allow: /contact` to `Allow: /contact/`
- Add `Allow: /maintenance/`  
**Expected Impact:** Ensures Google understands allowed paths

#### 8. **Fix #8: Ensure Canonical Default Uses Trailing Slash** (LOW IMPACT, ZERO RISK)
**Priority:** LOW  
**Files:** `src/components/seo/DynamicMetaTags.tsx` (line 79)  
**Action:** Ensure `routerLocation.pathname` always includes trailing slash, or normalize it  
**Expected Impact:** Prevents future canonical mismatches

#### 9. **Fix #9: Add noindex Fallback for New City Pages** (VERY LOW IMPACT, ZERO RISK)
**Priority:** LOW  
**Files:** `src/pages/service-areas/paramus-nj/page.tsx` (and others)  
**Action:** Add `noIndex={true}` to fallback "Location not found" div  
**Expected Impact:** Prevents indexing if config error occurs (should never happen)

#### 10. **Fix #10: Remove `/home/` from Core Routes in Sitemap** (LOW IMPACT, ZERO RISK)
**Priority:** LOW  
**Files:** `scripts/generate-sitemap.js` (line 18)  
**Action:** Remove `/home/` from `coreRoutes` array (it redirects to `/`)  
**Expected Impact:** Removes one more redirected URL from sitemap

---

### C) "DO NOT DO" LIST (Anything That Could Harm Rankings)

#### ❌ **DO NOT:**
1. **Remove existing service-area routes** - All 28 service-area pages are valid and should remain
2. **Add sitewide noindex** - All pages should be indexable (except 404s)
3. **Change canonical URLs for existing pages** - Only fix the contact page canonical (it's wrong)
4. **Remove redirects** - Keep all redirects, just remove redirected URLs from sitemap
5. **Change route paths** - Don't rename `/queens-ny/` or any other existing route
6. **Add noindex to service pages** - All service pages should remain indexable
7. **Remove blog posts from sitemap** - Blog posts are valid content
8. **Change domain in canonicals** - Keep `www.smartestgaragedoors.com`
9. **Remove trailing slashes** - Current strategy (with trailing slash) is correct
10. **Change robots.txt to disallow service areas** - All service areas should be crawlable

---

### D) EXACT NEXT-STEP PROMPTS (Safe Implementation Plan)

#### **Commit 1: Sitemap Cleanup (Remove Redirected URLs)**

```
Update scripts/generate-sitemap.js to filter out redirected URLs before adding them to the sitemap. 

Specifically:
1. Remove '/home/' from coreRoutes array (line 18) - it redirects to '/'
2. Add logic to filter out service-area routes that redirect:
   - '/flushing-ny/' (redirects to '/queens-ny/')
   - '/garage-door-repair-brooklyn-ny/' (redirects to '/brooklyn-ny/')
   - '/garage-door-repair-stamford-ct/' (redirects to '/stamford-ct/')
   - '/garage-door-installers-white-plains-ny/' (redirects to '/white-plains-ny/')
   - '/garage-door-installation-suffern-ny/' (redirects to '/suffern-ny/')

3. Also filter out '/garage-door-installation-stamford-ct/' OR change it to redirect (see Commit 2)

The filter should check against a list of redirected paths, or better yet, read from vercel.json redirects to automatically exclude them.

After changes, regenerate sitemap and verify it no longer includes redirected URLs.
```

#### **Commit 2: Fix Duplicate Content & Route Issues**

```
1. Fix duplicate route in src/router/config.tsx:
   - Remove the duplicate '/garage-door-installers-white-plains-ny/' route at lines 269-271
   - Keep only the redirect version (lines 261-263)

2. Fix duplicate content issue for '/garage-door-installation-stamford-ct/':
   - Change the route at line 273-275 from rendering StamfordCTPage to redirecting to '/stamford-ct/'
   - Use: element: <Navigate to="/stamford-ct/" replace />
   - This matches the pattern of other legacy routes

3. Update vercel.json if needed to ensure server-level redirect consistency (though React Router redirects should be sufficient).
```

#### **Commit 3: Fix Canonical & Meta Tags**

```
1. Fix contact page canonical in src/pages/contact/page.tsx:
   - Line 40: Change canonical from '/contact' to '/contact/'
   - Ensure trailing slash matches route

2. Add noindex to NotFound page in src/pages/NotFound.tsx:
   - Import DynamicMetaTags component
   - Add <DynamicMetaTags noIndex={true} title="404 - Page Not Found" /> at the top of the component return

3. Remove duplicate canonical logic from service-area pages:
   - Remove manual canonical setting in useEffect from:
     * src/pages/service-areas/queens-ny/page.tsx (lines 24-27)
     * src/pages/service-areas/elizabeth-nj/page.tsx (lines 24-27)
     * src/pages/service-areas/white-plains-ny/page.tsx (lines 16-26)
     * src/pages/service-areas/stamford-ct/page.tsx (lines 14-24)
     * src/pages/service-areas/suffern-ny/page.tsx (lines 13-23)
   - Keep only the DynamicMetaTags canonical prop (it handles it correctly)
   - This prevents race conditions and duplicate tags
```

#### **Commit 4: Fix Robots.txt Inconsistencies**

```
Update public/robots.txt:
1. Line 8: Change 'Allow: /contact' to 'Allow: /contact/' (add trailing slash)
2. Add 'Allow: /maintenance/' after line 16 (to explicitly allow the /maintenance/ route)

This ensures robots.txt matches the actual route structure with trailing slashes.
```

#### **Commit 5: Regenerate Sitemap & Verify**

```
1. Run: npm run generate-sitemap (or whatever command generates the sitemap)
2. Verify public/sitemap.xml no longer includes:
   - /home/
   - /flushing-ny/
   - /garage-door-repair-brooklyn-ny/
   - /garage-door-repair-stamford-ct/
   - /garage-door-installers-white-plains-ny/
   - /garage-door-installation-suffern-ny/
   - /garage-door-installation-stamford-ct/ (if changed to redirect)

3. Verify all valid service-area pages are still included
4. Verify blog posts are still included
5. Commit the updated sitemap.xml
```

---

## VERIFICATION CHECKLIST

After implementing fixes, verify:

- [ ] Sitemap no longer includes redirected URLs
- [ ] NotFound page has `noindex` meta tag
- [ ] Contact page canonical has trailing slash
- [ ] No duplicate route definitions in router config
- [ ] `/garage-door-installation-stamford-ct/` redirects (or has canonical)
- [ ] Robots.txt paths match route structure
- [ ] All valid service-area pages still in sitemap
- [ ] All service pages still indexable
- [ ] No sitewide noindex added
- [ ] Canonical URLs are absolute and consistent

---

## EXPECTED OUTCOMES

After implementing these fixes:

1. **"Alternate page with canonical" exclusions:** Should drop significantly (removed redirected URLs from sitemap)
2. **"Soft 404" exclusions:** Should drop (added noindex to 404 page)
3. **"Redirect" exclusions:** Should drop (removed redirected URLs from sitemap)
4. **Canonical mismatches:** Should be fixed (contact page canonical corrected)
5. **Duplicate content:** Should be resolved (legacy route redirects or has canonical)

**Timeline:** Google typically re-crawls within 1-2 weeks after sitemap resubmission. Monitor GSC for improvements.

---

**Report Generated:** February 2, 2026  
**Next Steps:** Implement fixes in order (Commits 1-5), then resubmit sitemap to Google Search Console.
