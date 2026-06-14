# Reviews: real Google reviews, baked in (not an iframe widget)

## The decision (2026-06-12)

We display real Google reviews in the **native, prerendered** reviews section
instead of embedding a GoHighLevel / Shapo / SociableKit review **widget**.

Why not the widget (even though GHL offers one):
- It's an **iframe** → review text isn't in the prerendered HTML, so Google
  can't index it. We'd lose the on-page value of reviews that mention cities +
  services ("Forest Hills," "spring replacement," etc.).
- **Zero star-snippet upside.** Since 2019 Google does not show review stars for
  reviews a business controls on its own site — and that explicitly includes
  embedded third-party widgets. Your stars in search come from your Google
  Business Profile, not a site widget.
- **Schema risk.** Many widgets inject their own review schema and could
  re-trigger the "multiple aggregate ratings" GSC error we fixed on 2026-06-12.
- **Speed + brand.** Third-party JS adds layout shift and looks templated; the
  native section is fast, on-brand, and zero-CLS.

GoHighLevel is still the right **source** — it connected to the Google Business
Profile and holds ALL reviews (Google's own public API caps at 5). We just pull
from it as a data feed, not as a widget.

## How it works

- `scripts/fetch-reviews.mjs` calls GHL's V2 reputation API at build time,
  takes the newest 5-star Google reviews, and writes them to
  `src/data/googleReviews.generated.json`.
- `src/data/staticReviews.ts` uses those generated reviews when present, and
  falls back to the curated list otherwise.
- Reviews end up in the prerendered HTML on every deploy → real, fresh,
  indexable, fast. The "read all on Google" button covers the full set.

## One-time setup

1. In GoHighLevel: **Settings → Private Integrations → Create** a token with the
   reputation / "View Reviews" read scope. Copy the token.
2. Find the **Location ID** for Smart Garage Doors (GHL: Settings → Business
   Profile, or the `location_id` in the dashboard URL).
3. Add both to `.env.local` in the project root (gitignored):
   ```
   GHL_API_TOKEN=pit-xxxxxxxx
   GHL_LOCATION_ID=xxxxxxxxxxxxxxxxxxxx
   ```
4. Run `npm run fetch-reviews`. Check `src/data/googleReviews.generated.json` —
   it should now hold real reviews. Commit it.
5. Deploy. The homepage shows real Google reviews.

To keep them refreshing automatically, add `npm run fetch-reviews` to the build
(before `vite build`) once the manual run is verified — set the two env vars in
Vercel's project settings first. Until then it's a safe no-op: missing creds or a
failed fetch leaves the existing reviews untouched and never breaks the build.

## Note on the current curated fallback

The pre-existing reviews in `staticReviews.ts` read as composed (first-name +
last-initial) and contain arrival-time phrasing ("within 75 minutes," etc.) that
we removed from marketing copy elsewhere for LSA compliance. Real customer
reviews mentioning times are fine (the customer's own words); our *own* copy
making time promises is not. Pulling real reviews from GHL replaces the curated
set and resolves this.
