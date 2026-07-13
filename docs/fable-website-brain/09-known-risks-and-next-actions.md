# Known Risks & Next Actions

State as of 2026-07-06. The full multi-agent audit (2026-07-04/05) found 26 issues;
all Critical/High and nearly all Medium/Low are FIXED — don't re-audit those. This
is what remains.

## Highest risks

1. ~~**Flying blind on analytics.**~~ **PARTIALLY RESOLVED 2026-07-13:** a GSC
   MCP connection is now live in Claude Code sessions (site_snapshot, quick_wins,
   alerts, custom queries all verified working). GA4 event verification still
   pending. Real numbers (28d to 2026-07-12): 138 clicks, 67K impressions, 0.2%
   CTR, avg position 17.2. Daily data shows high volatility, not a collapse —
   impressions fell ~2/3 around 06-29 while position improved; a 07-12 flood of
   low-position impressions (4,129 @ pos 27) triggered 45 GSC alerts that are
   mostly noise. Live-checked 5 money pages 2026-07-13: all serve full prerendered
   HTML + schema. Commercial pages barely surface yet: `/commercial-garage-door-
   repair/` pos 55.3 / 12 impressions; the commercial *blog* posts rank far better
   (spring-cycle-ratings pos 7.3). Quick-win queries sitting at pos 5-10 with ~0%
   CTR: "garage door insulation" (812 imp), "garage door repair" (818 imp),
   "garage door repair queens" (151 imp, pos 6.6), "garage door cable replacement"
   (144 imp, pos 5.4).
2. **Location-page content quality vs Google's scaled-content policies.** The
   technical indexing causes were fixed; the remaining "crawled – not indexed"
   pages need genuine per-city depth (real reviews, real photos, unique FAQs) —
   grinding content work, per `07`.
3. **Weak backlink profile** — the most common reason a technically-sound local
   site sits on page 2. Off-site work (owner/marketing): ThomasNet, IDA membership,
   BOMA/IREM chapters, Avetta/ISNetworld for commercial procurement, local/trade
   links. From the page-1 plan.
4. **Prerender is a single point of SEO failure.** Hardened (retry + refuse-empty)
   but unmonitored — a silent regression would drop Google to empty shells. No CI
   gate exists on "123 ok, 0 failed."

## Smaller known issues

- wp-content-hosted images remain on 2 hero backgrounds + 6 legacy blog posts
  (Cloudflare migration blocked on upload access — owner or credentials needed).
- No native `sms:` link — WhatsApp is the deliberate text channel; a true SMS
  option is an untested conversion experiment (`trackSmsClick` helper already
  exists, unused).
- No lab-metrics CI (Lighthouse) — CWV regressions would be caught only manually.
- `whatsapp_click` events showed 0 in June GA4 despite tracked links — verify
  events actually arrive once GA4 access lands (possible event-name mismatch).
- Blog `[slug]/page.tsx` still contains 6 hardcoded legacy posts with wp-content
  images (works, but content lives in code instead of `content/blog/`).

## Missing (deliberately not built yet)

- Online booking with real dispatch windows (growth-plan P4 — needs owner's
  calendar/CRM decision, "only expose real, dispatchable windows").
- Review-velocity automation (ask every completed job — SOP in gbp-playbook).
- A second location-specific commercial page (Northern NJ) — the plan calls for
  watching `/commercial-long-island-ny/`'s indexing first before expanding the
  pattern (shipped 2026-07-06, see decision log).

## Top 10 next actions

1. **Owner: activate GSC/GA4 access** (5 steps, ~15 min) — then re-validate the
   page-1 plan against real data.
2. **Owner: rotate the leaked CRM DB password** (different repo, but same owner —
   see the CRM brain; it's still outstanding).
3. Resubmit sitemap + Request Indexing for the newest pages (4 commercial pages
   incl. the new `/commercial-long-island-ny/`, recent blog posts) in GSC.
   **2026-07-13 status:** `/commercial-long-island-ny/` inspected — "URL is
   unknown to Google" (never crawled since the 07-06 ship). Programmatic
   submission attempted and BLOCKED on two ~5-min owner steps: (a) enable the
   Web Search Indexing API in GCP project 135100098993
   (console.developers.google.com/apis/api/indexing.googleapis.com/overview?project=135100098993),
   (b) add `https://smartestgaragedoors.com/` as a URL-prefix property in GSC
   and grant the service account Owner (the Sitemaps API can't use the domain
   property). Until then: owner can Request Indexing manually in the GSC UI for
   the 6 commercial URLs + `/careers/`.
4. Deep-content upgrade for the 10 highest-opportunity location pages: real photos,
   real city-tagged reviews (owner supplies), unique FAQs — attack risk #2.
5. ~~Write `/loading-dock-door-repair/` up to the page-1 recipe~~ — DONE 2026-07-06
   (see decision log): named counties, named equipment brands, dock-leveler
   section, named verticals, case study. Also done on rolling-steel-gate-repair
   and commercial-maintenance-contracts, plus a new location-specific commercial
   page. **Next step in this thread, not yet done:** real (or owner-anonymized)
   case studies beyond the one reused reference, and a second location-specific
   commercial page (Northern NJ) once Long Island's indexing is observed.
6. Owner: ThomasNet listing + NAP citation cleanup (cheap, table stakes) — see
   `docs/fable-brain/backlinks/local-citations-plan.md`, now has confirmed NAP.
7. Migrate the remaining wp-content images to Cloudflare once access exists.
8. Add a prerender CI check (fail deploy if any route renders empty / count drops).
9. Verify GA4 event flow end-to-end (esp. whatsapp_click) once access lands; fix
   names rather than adding new events.
10. Convert the 6 hardcoded legacy blog posts to `content/blog/` JSON (with
    Cloudflare images) so all content flows one pipeline.

## Standing constraints (don't "fix" these)

- WhatsApp-first texting is a business decision, not a gap.
- No online-booking promises until real dispatch windows exist.
- Commercial anchor client stays anonymous.
- The visual diet is owner-approved — don't re-add visual weight.
