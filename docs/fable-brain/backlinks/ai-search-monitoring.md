# AI Search (AEO/GEO) Monitoring — Smart Garage Doors

No API exists (as of 2026-07) to programmatically check whether ChatGPT,
Perplexity, Google AI Overviews, or Gemini cite a given business. This has to
be checked manually. This doc is the running log — check monthly, log the
result, don't skip months even when the answer is "not cited yet."

## What was shipped to earn citations (2026-07-09)

- Fixed a real leak: `public/llms.txt` was disclosing exact dispatch-hub
  cities/radii — removed, replaced with regional-only framing.
- `public/robots.txt`: explicit allow rules for GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, and 8 other AI/answer-engine crawlers.
- `public/llms.txt`: freshness date, verifiable (non-superlative)
  differentiators, corrected 3-state license list, direct Q&A for the
  "best in the tri-state area" query.
- New page `/best-garage-door-company-tri-state/`: honest checklist-based
  comparison guide with a direct-answer FAQ block.
- Schema: real individual `Review` entries (not just aggregateRating) and
  `SpeakableSpecification` pointing at the homepage H1 and FAQ section.
- Direct "Is Smart Garage Doors a good choice for garage door repair in
  [Area]?" FAQ added to the 8 highest-demand location pages (Brooklyn,
  Queens, Long Island, Nassau County, Suffern, Fairfield CT, Elizabeth NJ,
  Bergen County) — prioritized by real GSC impression volume, not a guess.

## Monthly check — how to do it

Ask each assistant below the exact queries listed, in a fresh/incognito
session (no prior chat history that could bias the answer). Record whether
Smart Garage Doors is mentioned, cited with a link, or absent — and if a
competitor is cited instead, name them.

**Assistants to check:** ChatGPT (with web search/browsing on), Perplexity,
Google (ask the query, check the AI Overview box), Gemini, Claude (with web
search on).

**Queries to test (ranked by real GSC demand, highest first):**
1. "garage door repair near me" (ask with location set to Queens, then
   Brooklyn, then Long Island — AI location-resolution differs per query)
2. "best garage door repair company in Brooklyn"
3. "best garage door repair company in Queens"
4. "best garage door company on Long Island"
5. "emergency garage door repair near me" (highest-impression query in GSC —
   3,387 impressions/28 days, still near-zero clicks as of 2026-07)
6. "best garage door company in the tri-state area" (lower search volume,
   but the flagship page targets this exactly)
7. "garage door repair Nassau County"
8. "garage door company Suffern NY" / "garage door repair Fairfield CT" /
   "garage door repair Bergen County NJ" — rotate through Tier 2 regions

## Log (append below — newest first)

| Date | Assistant | Query | Cited? | Notes |
|---|---|---|---|---|
| 2026-07-09 | — | — | — | Baseline — AEO work just shipped, first check due ~2026-08-09 |
