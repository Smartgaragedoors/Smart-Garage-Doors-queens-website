# SEO audit implementation — September 8, 2026

Status: implementation verified for release through main and the existing Vercel Git integration. Deployment status is recorded on the release commit in GitHub. The supplied audit was evaluated against the current source, not executed as an instruction script.

## Implemented

- Replaced the broken installation image with an existing, visually inspected 900 × 1250 WebP photograph, descriptive alt text, dimensions and lazy loading. Both installation URLs remain intact.
- Removed the nonexistent Services breadcrumb level; retained the existing redirect policy.
- Removed the unsubstantiated 2010 start-year claim without inventing a replacement year.
- Centralized Queens, Suffern and the existing Pearl River contact routes. Announcement bar, header, footer, mobile bar, blog CTA and booking confirmation use local voice numbers. WhatsApp is unchanged. July 6 business notes confirm the Queens/Suffern addresses and separate lines.
- Queens and Suffern structured data use stable business identities and recorded addresses. Other towns use Service/areaServed referencing the company, without invented offices or city-centre business coordinates. Removed repeated self-serving review markup and unverified blanket opening-hours markup from the shared business component. Visible review counts are labeled company reviews.
- Existing Maps links explicitly identify Queens. No Suffern profile URL was guessed.
- Refreshed Queens and Suffern articles at their existing URLs using the audit drafts. Original publication dates are preserved; modification date records September 8 edits. Reading times were calculated from the replacement article text. Shared article records keep the index and post consistent.
- Blog index structured data now describes all 44 displayed posts, with canonical URLs and dates. Team authors use Organization.
- Shortened priority location/blog titles; removed duplicate JPEG hero preload; omitted sitemap lastmod until reliable per-page change dates can be maintained.
- Local CTAs carry city context into the editable booking location. Existing first-touch landing-page/UTM tracking is preserved.
- Booking is presented as a callback request; dispatch confirms availability and charges. Added a diagnostic/visit-charge clarification near the local free-estimate offer without inventing a new price policy.
- SMS consent is optional and unchecked; existing consent wording is unchanged.
- Email-client fallback no longer triggers a booking success redirect/conversion. Removed the conversion fired merely by viewing or reloading the thank-you page; successful backend acceptance triggers the existing form_submit event.

## Verification

- Production build passes.
- Browser regression: `npm run preview -- --host 127.0.0.1 --port 4180`, then `node scripts/test-seo-audit.mjs`. External requests are intercepted; no test notification or lead is delivered. Covers local calls, branch/service schema, installation image, breadcrumb, 44-post index, article metadata/content, mobile/desktop booking, attribution, accepted/rejected submissions and conversion behavior.
- Full prerender checked separately with `npm run prerender`: 141 routes, zero failures.
- The documented root `npx tsc --noEmit` command passes. The stricter app-project check below still exposes baseline debt.
- TypeScript check remains blocked by existing errors in unrelated components and utility types (Button props, type-only imports, optional array access, analytics event extras, and others). The modified contact, booking and article code introduced no remaining reported errors. Build success does not imply the repository-wide type check passes.

## Remaining business/account work

- Verify the current Suffern profile URL and current call routing; recorded phone confirmation dates to July 6. Keep Queens links explicitly identified until the correct Suffern destination is supplied.
- Confirm current price book, diagnostic fee/credit policy, financing, warranty scope, technician assignments and jurisdiction-specific licensing before changing factual offers. Existing license identifiers and actual job examples remain intact.
- The client mirrors CRM leads with a fire-and-forget request; the in-repo API sends email via Resend. This does not establish durable CRM persistence or deduplication. Production delivery, CRM acceptance, retries/deduplication and downstream revenue reporting require the CRM backend/account evidence. Mocked browser success does not prove dispatch received a live lead.
- Exact Semrush broken-external-link report, Search Console data, GBP settings and real field performance remain external follow-ups. No bulk external-link removals or new tracking scripts were added.
- Review the diff and release through the existing Vercel workflow. Verify the release commit has a successful Vercel status before treating changes as live.

## Why there are four local branches

Branches are retained work pointers, not four independent versions that need combining. After fetching origin, all three extra local branches are ancestors of main:

| Local branch | Commits behind main | Commits not in main |
| --- | ---: | ---: |
| claude/bold-wilbur-ad4f9a | 36 | 0 |
| feat/announcement-bar | 82 | 0 |
| homepage-layout-tightening | 69 | 0 |

Use main as the source of truth. No merge was needed. Removed all three redundant local branch pointers after verifying their commits are in main. The detached Claude worktree, remote branch refs and the user's untracked screenshots were preserved.

The remote claude/verify-claim-removals-TCGTx commit is patch-equivalent to the Pennsylvania change already merged into main (git cherry marks it with a minus). The remote gh-pages branch contains deployment output and must not be merged into source. Remote cleanup is separate from merging and no remote refs were deleted.


## Blog image follow-up

All 44 articles now use distinct local 1200 × 675 WebP images: 26 photographs from the existing site library and 18 purpose-drawn technical illustrations. No image was assigned a new geographic/job identity. Original photo sources are recorded in scripts/blog-photo-assignments.json; editable vector sources and their generator are retained. Card, hero, alt text and social-image assignments share src/data/blogImages.manifest.json. Photos and illustrations are optimized and blog cards lazy-load.

The build now runs verify:blog-images to reject reused source identities (including Cloudflare variant aliases), duplicated local pixel content, missing assets and missing alt text. The browser gallery test verifies all 44 images load and match the registry on desktop/mobile, and checks representative post/OG images. The existing preloaded homepage image is no longer the normal blog fallback for any current article.

To regenerate artwork: run python -X utf8 scripts/create-blog-illustrations.py, then node scripts/prepare-blog-images.mjs. To verify the gallery: run npm run preview -- --host 127.0.0.1 --port 4180 and node scripts/test-blog-gallery.mjs. No image generation API or stock-image download was used.
