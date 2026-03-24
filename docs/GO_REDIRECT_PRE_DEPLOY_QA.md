# Pre-deploy QA — `/go/:slug` server-side tracking

Run after deploying to **Vercel** with **`SUPABASE_SERVICE_ROLE_KEY`** and Supabase URL set. Use a **known active** test slug from your `links` table.

---

### 1. Redirect works

| | |
|--|--|
| **Test** | Open a live `/go/{active-slug}/` URL (with real query params if you use UTMs). |
| **Expected** | **302** to the right target: `redirect_mode=direct` → `destination_url`; `landing` → `/lp/whatsapp/` (or configured path) with `campaign` preserved; query params merged as designed. |
| **How to verify** | Browser lands on WhatsApp, external URL, or LP. In DevTools → **Network**, click the first document request: status **302**, **Location** header matches intent. |

---

### 2. `click_events` insert works

| | |
|--|--|
| **Test** | One fresh **GET** to `/go/{active-slug}/` (incognito or cache disabled). |
| **Expected** | Exactly **one** new row in `click_events` with correct `link_id`, `company_id`, `clicked_at`, and telemetry fields populated where available. |
| **How to verify** | Supabase **Table Editor** or SQL: filter by `link_id` / time; confirm row count increased by 1 per test GET. |

---

### 3. `links.click_count` increments

| | |
|--|--|
| **Test** | Note `click_count` before and after a successful tracked GET (same link as #2). |
| **Expected** | Count increases by **1** after insert succeeds (insert runs before update). |
| **How to verify** | Supabase `links` row for that slug; refresh after click. If insert fails, count may not increment (check function logs). |

---

### 4. Inactive slug behavior

| | |
|--|--|
| **Test** | Hit `/go/{slug}/` for a slug that is **inactive** (`is_active = false`) or **missing** from `links`. |
| **Expected** | **404** HTML (“Link not found”), **no** `click_events` row, **no** `click_count` change. |
| **How to verify** | Network tab: **404** on document request. Supabase: no new `click_events` for that attempt. |

---

### 5. SEO headers on tracking responses

| | |
|--|--|
| **Test** | Inspect response headers for `/go/{active-slug}/` (document request) and, if you hit it directly, `/api/go/{active-slug}`. |
| **Expected** | **`X-Robots-Tag: noindex, nofollow, noarchive`**. **`Cache-Control`** includes **`no-store`**, **`no-cache`**, **`private`**, **`max-age=0`** (handler also sets **`Pragma: no-cache`**, **`Expires: 0`** on API responses). |
| **How to verify** | DevTools → Network → document → **Headers**. Or: `curl -sI "https://www.smartestgaragedoors.com/go/your-slug/"` (follow redirects disabled: `curl -sI --max-redirs 0 ...` to see the **302** response headers). |

---

### 6. Sitemap excludes `/go/*` and `/lp/*`

| | |
|--|--|
| **Test** | Build/deploy; open **`/sitemap.xml`**. |
| **Expected** | No `<loc>` URLs whose path starts with **`/go/`** or **`/lp/`**. |
| **How to verify** | Search sitemap source for `go/` and `lp/`; confirm **zero** matches. |

---

### 7. Real SEO pages: canonical + not noindex

| | |
|--|--|
| **Test** | Load **`/garage-door-repair/`**, **`/queens-ny/`**, **`/book-now/`** (or other key money pages). |
| **Expected** | **`link rel="canonical"`** points to the **correct** https www URL for that path. **`meta name="robots"`** does **not** contain `noindex` (unless that page intentionally uses it). |
| **How to verify** | View page source or Elements: check `canonical` href and `robots` meta after JS runs (SPA). |

---

### 8. Landing page noindex by default

| | |
|--|--|
| **Test** | With **`VITE_LP_WHATSAPP_INDEXABLE` unset** (or not `true`), open **`/lp/whatsapp/`**. |
| **Expected** | **`meta name="robots"`** contains **`noindex`** (and related directives). **`robots.txt`** contains **`Disallow: /lp/`** (default in repo). |
| **How to verify** | View source / Elements on LP; read **`/robots.txt`**. Optional: set **`VITE_LP_WHATSAPP_INDEXABLE=true`**, rebuild — then `noindex` should be off and you should **remove** `Disallow: /lp/` if you want crawling. |

---

### 9. No double-tracking

| | |
|--|--|
| **Test** | Single browser navigation: `/go/{slug}/` → final destination (e.g. `/lp/whatsapp/?campaign=...`). |
| **Expected** | **One** new `click_events` row per **one** GET to `/go/...`. Landing page load does **not** insert another row into `click_events`. |
| **How to verify** | Count rows before/after one full journey; confirm **+1** only from the `/go` hit. |

---

### 10. Service pages & routing unchanged

| | |
|--|--|
| **Test** | Spot-check routes: home, several **service** URLs, several **city** URLs, **blog**, **contact**, **404** for unknown path. |
| **Expected** | All load as before; no unexpected **302** chains to `/api/go/...` except when path is actually **`/go/...`**. |
| **How to verify** | Manual click-through + Network tab (document request should be **200** + `index.html` for normal pages). |

---

## Quick env reminder

- [ ] `SUPABASE_SERVICE_ROLE_KEY` set on Vercel (server only)  
- [ ] `SUPABASE_URL` or `VITE_PUBLIC_SUPABASE_URL` set  
- [ ] Slug column / `is_active` (or `LINKS_IS_ACTIVE_FIELD` / `LINKS_ACTIVE_FILTER`) matches your schema  
