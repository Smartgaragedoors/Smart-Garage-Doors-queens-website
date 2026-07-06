# The Backlink Brain — README

Created 2026-07-06 by Fable 5. A **permanent, multi-site authority-building
system** for the owner's businesses — not a one-time list. Future AI models: this
folder is your operating manual; read this file, then `backlink-policy.md`
(non-negotiable), then `future-model-handoff.md` for current state.

## The three sites

| Site | Domain | Model | Authority goal |
|---|---|---|---|
| Smart Garage Doors | smartestgaragedoors.com | Local service (NY/NJ/CT) | Local + commercial trust → leads; property-manager/vendor relationships |
| Zack & Elle Diamonds | zackandelle.com | Shopify ecommerce (lab-grown diamonds) | Editorial/luxury trust → category rankings + brand legitimacy |
| Trojan | see `sites.md` | see `sites.md` (verified, not assumed) | Pre-launch/author authority per its real state |

Full per-site detail: `sites.md`.

## Operating philosophy (why this system is shaped this way)

1. **Links that create customers outrank links that create metrics.** A property-
   manager vendor page or a wedding-vendor directory sends actual buyers AND
   authority. A random DA-60 blog sends neither. Score with the rubric in
   `backlink-policy.md`, not with DA alone.
2. **Assets before outreach.** Most outreach fails because there's nothing worth
   linking to. `content-assets-for-links.md` is the build queue; the weekly system
   blocks outreach for angles whose asset doesn't exist yet.
3. **White-hat only, forever.** These are real businesses with real revenue. One
   penalty costs more than five years of spam links earn. The forbidden list in
   `backlink-policy.md` is absolute.
4. **Everything is logged.** Prospects live in `backlink-opportunities.csv` (the
   single working database — update statuses, never fork it). Wins/losses/decisions
   append to the KPI file and the weekly log.
5. **The owner is the sender.** AI models research, qualify, draft, and track.
   Outreach is SENT by the owner (or with explicit approval per message) — a real
   business owner's email converts; an agency-sounding blast burns the domain's
   reputation. Anything requiring accounts, payment, publishing, or public business
   info changes is OWNER-APPROVAL-REQUIRED, always.

## File map

| File | What it is | Update cadence |
|---|---|---|
| `sites.md` | Per-site facts, priority pages, keywords, voice | When business facts change |
| `backlink-policy.md` | Rules — forbidden tactics, anchors, paid links, scoring | Rarely; owner approves changes |
| `competitor-backlink-map.md` | Who outranks us and their visible link patterns | Monthly review |
| `backlink-opportunities.csv` | THE prospect database | Every session that touches outreach |
| `outreach-playbooks.md` | Per-opportunity-type playbooks | As tactics prove in/out |
| `outreach-templates.md` | Ready-to-send drafts (owner voice) | As replies teach us |
| `content-assets-for-links.md` | Linkable asset build queue | As assets ship |
| `internal-linking-plan.md` | Where earned authority should flow | Quarterly |
| `local-citations-plan.md` | SGD NAP/citation program | As citations complete |
| `digital-pr-plan.md` | Story angles per site | Seasonal refresh |
| `weekly-backlink-system.md` | The repeatable weekly workflow | Follow it; improve it |
| `backlink-kpi-dashboard.md` | What success means + running log | Weekly log entries |
| `implementation-roadmap.md` | 30/60/90 + do-this-first list | Monthly |
| `future-model-handoff.md` | Current state for the next model | END OF EVERY SESSION |

## Hard constraints future models must know up front

- **No backlink-tool data exists yet** (no Ahrefs/Semrush/Majestic; GSC API access
  is built but awaiting owner activation — see `future-model-handoff.md`). Anything
  labeled "backlink profile" before that activation is inference, not data. Do not
  invent referring-domain numbers.
- Evidence discipline: every prospect in the CSV needs a real, verified URL.
  Contact emails only if actually found — never guessed.
- Related brains: `docs/fable-website-brain/` (SGD site rules — claims, redirects,
  prerender) governs any on-site work here; the CRM brain lives in the CRM repo.
