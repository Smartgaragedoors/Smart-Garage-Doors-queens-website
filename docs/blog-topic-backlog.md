# Blog Topic Backlog — consumed by the weekly auto-blog routine

**How this works:** the scheduled blog agent takes the TOP unchecked topic,
writes it as `content/blog/<slug>.json`, checks it off here (same commit), and
publishes. Topics are ordered by real GSC opportunity. Humans: add topics
anywhere, reorder freely — the agent always takes the top unchecked one.

**Rules the agent must follow (non-negotiable, from `docs/fable-website-brain/08-agent-rules.md`):**
- One post per run. Never invent facts, prices, clients, or reviews — price
  ranges only from ranges already published on the site ($150–$300 repairs,
  $175–$350 springs, $150–$350 openers, from $800 installs).
- No arrival-time promises ("exact ETA when you call" is the approved phrasing).
- No hub cities. No fake city posts. FAQ block only for visible FAQs.
- Titles ≤60 chars where possible, meta descriptions ≤160.
- Full verification loop before push: `npx tsc --noEmit` → `npm run build` →
  `npm run prerender` (must end "N ok, 0 failed" — the gate enforces it).
- After deploy: submit the new URL via the GSC Indexing API if available.
- If nothing in this list fits or the list is empty: pull GSC quick-wins
  (positions 5–15) and add 3 new topics to this file INSTEAD of publishing.

## Backlog (top = next to publish)

- [x] Garage door cable replacement: signs & cost (2026-08-12, `garage-door-cable-replacement-cost-signs`)
- [x] Roll-up gate repair guide for facilities managers (2026-08-12, `roll-up-gate-repair-facilities-guide`)
- [x] Garage door opener won't work after a power outage: reset steps that actually work (2026-08-18, `garage-door-opener-not-working-after-power-outage`)
- [x] Pedestrian door vs. side door vs. opener upgrade (2026-08-23, `pedestrian-door-vs-side-door-garage`) — supports /pedestrian-garage-doors/
- [x] REWRITE (same URL): garage-door-repair-cost-guide-2025 → 2026 update, ~1,000 words (2026-08-23; ranked #5 for "garage door repair near me" at 229 words)
- [x] REWRITE (same URL): winter-garage-door-maintenance-tips → full checklist (2026-08-23; GSC "winter garage door care" @40)
- [x] REWRITE (same URL): emergency-garage-door-repair-guide → first-10-minutes triage (2026-08-23; feeds /emergency-garage-door-repair/)
- [x] GSC 2026-08-23: "garage door maintenance plans" 188 imp @49.6 — residential tune-up plan explainer; links /maintenance/ (NOT commercial contracts) (2026-08-25, `garage-door-maintenance-plans-explained`)
- [ ] GSC 2026-08-23: "garage door company near me" 1,650 imp @27.5 — "How to choose a garage door company in NY/NJ/CT: 9 questions to ask"; links /best-garage-door-company-tri-state/ and /local-vs-national-garage-door-company/
- [ ] GSC 2026-08-23: "commercial garage door maintenance" 81 imp @80 — "Commercial garage door maintenance schedule by door type"; links /commercial-maintenance-contracts/
- [ ] GSC 2026-08-23: "luxury garage doors" 68 imp @29.7 / "custom garage doors long island" 74 @38.8 — custom & luxury door options guide; links /garage-door-installation/
- [ ] Garage door insulation R-values explained: what the tri-state climate actually requires (supports /garage-door-insulation/ — internal-link it)
- [ ] Why is my garage door so loud? Noise diagnosis by sound (grinding vs. squeaking vs. banging)
- [ ] Cómo mantener su puerta de garaje en invierno (Spanish — winter prep; publish late October, skip until then)
- [ ] Loading dock door vs. dock leveler problems: which one is actually broken? (commercial; links /loading-dock-door-repair/)
- [ ] Garage door spring replacement: torsion vs. extension, and why cycle rating matters more than price
- [ ] What a commercial door baseline survey covers (and why FMs use it for budgeting) (commercial; links /commercial-maintenance-contracts/)
- [ ] Snapped garage door cable vs. broken spring: how to tell which one you have
- [ ] Storefront security gate compliance & maintenance for NYC retail (commercial; links /rolling-steel-gate-repair/)
- [ ] Garage door won't open in the cold: frozen seal, stiff springs, and opener force limits

## Cadence guidance

Weekly is the ceiling for this site. If the last 2 posts haven't been indexed
yet (check GSC), SKIP a week rather than stack unindexed content — indexing
health beats volume. Never publish more than 1 post per run.
