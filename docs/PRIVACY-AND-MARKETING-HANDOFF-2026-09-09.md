# Privacy and marketing handoff for Claude / future site work

Owner requested a public privacy policy, footer access, conversion review, a Bing retry and a factual Google/voice-search baseline.

## Website changes

Validation: TypeScript check, production build and all 143 prerendered routes
passed, including the latest existing SEO changes from main. The contact-handler
regression checks passed for all three delivery outcomes. Publication is verified
separately after Vercel finishes.

- Added `/privacy-policy/`, metadata, sitemap entry and shared-footer link. Contact form also links to it.
- Policy describes observed forms, Meta lead forms, service photos, customer records, Google Analytics/Ads, Meta Pixel, Microsoft Clarity and Anthropic-powered chat. It does not make an unverified promise that no information is shared, or a blanket legal-compliance claim.
- Policy gives the existing business email and phone for privacy requests. Keep it aligned with actual providers, retention, advertising controls and data handling. A policy alone does not implement cookie consent or advertising opt-out controls.
- Contact form previously counted the email-app fallback as a conversion and cleared entered details. It now preserves them, says the request has not been sent, and only records a conversion after accepted delivery. SMS consent is optional with the existing wording intact, consistent with the already-corrected booking/commercial forms.
- `scripts/test-contact-result.mjs` exercises the actual contact-page submit handler with isolated rejected, fallback and accepted responses. No real messages or leads are sent. It verifies conversion counts, preserved fields and optional SMS consent.
- Successful browser delivery is not proof of CRM receipt or import into Google Ads. CRM mirroring is fire-and-forget; end-to-end verification remains separate. A phone-link click is not proof of a completed or qualified call.

## Search Console baseline observed September 9

Domain property: `sc-domain:smartestgaragedoors.com`, Web, all countries/devices.

| Period | Clicks | Impressions (rounded in UI) | CTR | Average position |
|---|---:|---:|---:|---:|
| June 7–September 6, 2026 | 383 | 167K | 0.2% | 17.5 |
| August 10–September 6, 2026 | 95 | 25.3K | 0.4% | 14 |

Recent queries: `garage door repair queens` 3 clicks / 146 impressions / average position 10.9; `garage door repair queens ny` 1 / 132 / 12.5. These are aggregated Search Console positions, not a local map-grid rank or voice-assistant test.

Search Console exposes a beta generative-AI performance report for this account. It showed 599 impressions in the three-month view and 85 impressions for August 10–September 6. This demonstrates Google AI-search visibility, not a spoken recommendation by Google, Siri or Alexa. Do not repeat older documentation claiming this account has no AI-search report.

## Bing and Meta

- Existing Bing Places listing remains published at `https://www.bing.com/maps?ss=ypid.YNE137082C20C446F4&mkt=en-US`; do not create another listing.
- Reconnected existing Google sign-in. Business email verified present: `info@smartestgaragedoors.com`.
- Retried Google synchronization; sync-failed status remained. That does not mean the existing listing is unpublished.
- Saved a replacement-door consultation announcement for September 10–30, 2026. Status **Pending** after save. Destination is `/photo-estimate/` with Bing organic attribution. Do not claim publicly live or duplicate while pending.
- Owner says Meta balance is paid. Fresh Ads Manager still showed account-unsettled and error #1487194. Billing and Business Settings require owner two-factor reauthentication; balance clearance and asset-permission cause are unconfirmed.
- New Meta campaign/ad set/ad remain off. Higher-intent form still needs the public privacy URL and final validation/attachment. Do not publish unrelated draft changes.

## Discovery sources

- Google local relevance, distance and prominence: https://support.google.com/business/answer/7091?hl=en
- Apple listings: https://business.apple.com/ (Business Connect redirects here).
- Alexa+ partner discovery: https://www.aboutamazon.com/news/devices/alexa-plus-voice-booking-integrations

No guaranteed top rank and no verified Siri/Alexa query result yet. Prioritize accurate verified listings, genuine reviews, useful existing pages, real project evidence and qualified lead outcomes over repeated keyword posts.
