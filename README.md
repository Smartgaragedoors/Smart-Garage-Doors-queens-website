# Smart Garage Doors — Website (smartestgaragedoors.com)

The lead engine for Smart Garage Doors: garage door repair/installation across the
NY/NJ/CT tri-state. Vite + React SPA with a post-build Puppeteer prerender for SEO,
deployed to Vercel (push to `main` = production).

> **🧠 Working on this repo (human or AI)? Start at
> [`docs/fable-website-brain/00-start-here.md`](docs/fable-website-brain/00-start-here.md)**
> and read [`docs/fable-website-brain/08-agent-rules.md`](docs/fable-website-brain/08-agent-rules.md)
> before changing anything. This site produces real leads — the brain docs explain
> what's dangerous (prerender pipeline, redirects, live review data, claim rules)
> and what's already been audited and fixed.

## Quick commands

```bash
npm run dev          # local dev server (auto-picks a free port)
npx tsc --noEmit     # type-check
npm run build        # production build → out/
npm run prerender    # render all routes to static HTML (expect "123 ok, 0 failed")
```

The full pre-deploy checklist is in
[`docs/fable-website-brain/05-technical-seo-and-performance.md`](docs/fable-website-brain/05-technical-seo-and-performance.md).

## Strategy docs

- [`docs/growth-and-commercial-plan.md`](docs/growth-and-commercial-plan.md) — competitor analysis + 30/60/90 roadmap
- [`docs/gbp-playbook.md`](docs/gbp-playbook.md) — Google Business Profile checklist (dashboard work)
- [`docs/fable-website-brain/09-known-risks-and-next-actions.md`](docs/fable-website-brain/09-known-risks-and-next-actions.md) — current top-10 action list
