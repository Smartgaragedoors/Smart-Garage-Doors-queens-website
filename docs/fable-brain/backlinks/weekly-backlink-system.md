# The Weekly Backlink System

A repeatable loop any future model can run. Budget: ~30–60 min/day of combined
AI + owner time. **Never skip the policy check** (`backlink-policy.md`) before
outreach.

## Monday — Prospect (AI)

- Pick ONE focus per site this week (e.g., SGD: property-manager vendor pages in
  Westchester; Z&E: holiday gift-guide editors). Rotating focus beats scattershot.
- Find 5–10 candidates via: web search with the playbook queries
  (`outreach-playbooks.md`), competitor citations (`competitor-backlink-map.md`),
  and unlinked-mention search (`"smart garage doors" -site:smartestgaragedoors.com`,
  `"zack & elle" OR "zack and elle" -site:zackandelle.com`).
- Log each in `backlink-opportunities.csv` with a real URL + evidence URL.
  Status = `new`.

## Tuesday — Qualify (AI)

- Score every `new` row (Relevance / Customer value / Trust / Difficulty / Risk).
- Reject Risk ≥4 or Relevance ≤2 → status `rejected` + reason in Notes.
- Find the real contact path (about page, contact form, LinkedIn, WHOIS as last
  resort). No guessed emails — blank beats wrong.
- Check the asset requirement: if the angle needs a content asset that doesn't
  exist (see `content-assets-for-links.md`), status = `blocked-on-asset` and add
  the asset to the build queue instead of outreaching with nothing to offer.

## Wednesday — Outreach (AI drafts → OWNER sends)

- Draft personalized emails from `outreach-templates.md` for the top 3–7 qualified
  prospects (per site, max ~10 total/week — quality over volume).
- Every draft: correct name, a specific reference to THEIR page (proof we read it),
  one clear ask, one real offer. No SEO-speak.
- Hand to owner as a ready-to-send batch. On send: status `contacted`,
  Last Contacted = today, Follow-Up Date = +6 days.

## Thursday — Follow-ups & replies (AI drafts → owner sends)

- Follow-up #1 for rows past their Follow-Up Date (short, adds one new piece of
  value — never "just bumping this").
- Process replies: `won` (link live — record the live URL in Evidence), `in-talks`,
  `declined` (thank them, log why), `no-response` after follow-up #2.

## Friday — Log & learn (AI)

- Append the weekly line to `backlink-kpi-dashboard.md`: sent / replies / wins /
  citations fixed / assets shipped.
- Wins: verify the live link, its rel attribute, and anchor; add to internal-linking
  consideration if it targets a deep page.
- Losses teach: if a category is 0-for-5, the playbook or asset is wrong — note it.
- Update `future-model-handoff.md` if anything material changed.

## Monthly — Competitor gap review (AI)

- Re-run the competitor searches in `competitor-backlink-map.md`; new places they
  appear = new prospects. Check our target-page rankings for movement (GSC once
  activated). Refresh seasonal angles in `digital-pr-plan.md`.

## Quarterly — Quality audit (AI + owner)

- Review all `won` links: still live? rel unchanged? anchor natural? site still
  reputable? Log rot/removals.
- Review the anchor mix against policy targets.
- Toxic-link check ONLY with real data (GSC/tool export) — document, don't panic;
  disavow needs owner approval and strong evidence.
- Prune the CSV: archive stale `rejected`/`no-response` rows to keep it workable.

## Rules of the loop

1. CSV is the single source of truth — every touch updates it.
2. Assets before outreach; owner sends; policy always wins over enthusiasm.
3. If a week is missed, resume — don't double volume to "catch up" (spike patterns
   look unnatural and burn the sender address).
