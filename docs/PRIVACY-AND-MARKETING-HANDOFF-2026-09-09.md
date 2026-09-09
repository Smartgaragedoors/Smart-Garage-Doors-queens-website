# Privacy and marketing handoff for Claude / future site work

Owner requested a public privacy policy, footer access, conversion review, a Bing retry and a factual Google/voice-search baseline.

## Website changes

Validation: TypeScript check, production build and all 143 prerendered routes
passed, including the latest existing SEO changes from main. The contact-handler
regression checks passed for all three delivery outcomes. Publication is verified
separately after Vercel finishes.

Privacy release `9fc6f87` completed successfully on Vercel. Public page and footer
were checked in the browser. Further conversion review found that the shared
email-draft fallback still returned success to other forms: it now returns false
globally. A distinct `generate_lead` event is emitted only for accepted customer
forms; recruiting and staff issue reports keep their diagnostic events but are
excluded from acquisition conversions. The homepage contact form preserves its
fields on fallback. Isolated tests cover these cases without external requests.

Live GA4 property is `510931588`, account `347177237`, accessed through
`sgd@smartestgaragedoors.com`. Its link to Ads `666-881-4449` already exists
(February 10, 2026). The old Ads action `Form` (`7305246953`) references
`ads_conversion_Form_1`, while the current site explicitly emits `form_submit`.
Before this work, live GA4 key events included `book_click`, unused `phone_click`
and `verify_*` events, but not the real form/call events. Do not mistake booking
clicks for accepted leads.

Conversion release `8d0a7dd` completed successfully on Vercel. The public policy
returns HTTP 200 with the correct canonical and footer link; the public JavaScript
contains the new accepted-lead event. All seven campaign destination/image/policy
URLs return HTTP 200. GA4 `generate_lead` is now a key event, and Google Ads action
`Website - Accepted Lead` (`7755193645`) was created and verified: live property
`510931588`, event `generate_lead`, Primary, Count One, no monetary value. The old
`Form` action (`7305246953`) was saved as Secondary and re-opened to verify it;
historical data remains available. New action is awaiting conversions. No live
test inquiry has been submitted: owner approval is pending because a test sends
an office notification and creates a CRM entry. Do not infer end-to-end receipt
or ad attribution from these configuration checks.

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
- New Meta campaign/ad set/ad remain off. The existing qualified-lead draft was completed through the Instant Forms library and created successfully as `SGD | Door Replacement | Qualified | Sep 2026`, form ID `2249701989184760`, Active in the form library with zero leads. Its public privacy URL, higher-intent review, phone verification, project/ZIP/timeline/decision-maker/budget questions and photo-estimate destination were verified; Messenger auto-conversations are off. The form was selected on ad `120250619568510305`, then a fresh browser tab confirmed the selected form and its destination preview persisted while the ad remained In draft / Off. The old nurturing controls disappear when the new form finishes loading. Creating and attaching this form did not activate an ad. Error #1487194 and the unsettled-balance banner remain. Do not use the old emergency/NY-NJ-CT form or publish unrelated draft changes.

## Discovery sources

- Google local relevance, distance and prominence: https://support.google.com/business/answer/7091?hl=en
- Apple listings: https://business.apple.com/ (Business Connect redirects here).
- Alexa+ partner discovery: https://www.aboutamazon.com/news/devices/alexa-plus-voice-booking-integrations

No guaranteed top rank and no verified Siri/Alexa query result yet. Prioritize accurate verified listings, genuine reviews, useful existing pages, real project evidence and qualified lead outcomes over repeated keyword posts.
