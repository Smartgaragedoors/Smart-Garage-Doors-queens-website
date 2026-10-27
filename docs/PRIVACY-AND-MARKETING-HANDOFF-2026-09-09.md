# Privacy and marketing handoff for Claude / future site work

Owner requested a public privacy policy, footer access, conversion review, a Bing retry and a factual Google/voice-search baseline.

## Latest Meta sign-in follow-up

After the owner signed in, Billing shows **$0.00 current balance**, no payment due,
and **$64.71 Paid on September 9**. Business Settings confirms Daniel Abraham has
full portfolio and ad-account access; his Instagram permissions include Ads.
Instagram `@smartgaragedoorss` (`17841462230843913`) was connected only to Facebook
Page `404192472772347`, without ad account `570130732681432`. The owner explicitly
approved connecting that exact Instagram/ad-account pair. Add reached Meta's
separate account-verification step; completion of the link has not yet been
verified. Error `#1487194` remained in the draft, so the missing connection is a
candidate cause, not a proven resolution. Do not change people or other assets.

The saved draft schedule is September 10–25, 2026, 7:17 PM Eastern at both ends,
15 days under the existing **$300 lifetime campaign budget**. Review showed
Queens and Nassau County controls, adults 18+, and Instant Forms. **All edits
saved** was observed; the ad set and ad remain off. Move dates again if needed
before any approved launch. No new paid campaign has been activated.

Meta's HubSpot integration says Connected (last connected February 12, 2025),
but the last-lead-push column is blank. This does not establish delivery.
Notifications had instant Facebook app alerts on, and email on with no selected
recipient. The owner explicitly specified **smartestgaragedoors@gmail.com** for
Smart Garage Doors alerts. The native lead-summary picker only lists existing
admins' personal emails and returned No matching admins for the business inbox.
All unsaved lead-summary edits were canceled; no personal-email summaries were
saved. Business portfolio Profile contact info had no email. The requested
business email was added and confirmed through Meta's verification email; the
Pending confirmation badge disappeared. This is a confirmed portfolio contact
email, not proof that individual lead summaries reach it. The Instagram Add
action still returned Email Verification Needed afterwards. A clean settings
refresh then reached another phone-code verification to the owner number ending
0009; the owner was asked to complete the latest code and Next. Completion of
the asset link is not verified. The separate Instagram connection approval was granted and must not
be asked again. Live website/CRM test inquiry approval remains outstanding.

The public privacy/footer and verified Yelp/Bing schema changes are already live
in successful Vercel release `fb98077`; the public HTML check passed.

### Apple account now inspected

The owner signed in using the personal Apple account that manages the business.
Organization `1464715017783903232` and brand `1564641434130448384` are Verified.
The full brand list shows two older Not Approved location records and a third
location `1536144461106512773` **In Review**, sent September 9. Apple estimates
up to five days. The root agent did not create that third record. Its phone
914-557-6816, website and Garage Door Contractor category match the business.
The missing About description was saved and reread successfully:

> Garage door repair, replacement, opener installation and maintenance in Queens and Nassau County.

The older full-address location `1536114966640200837` was rejected because Apple
requires a storefront/commercial location where people may visit during business
hours and receive onsite services without an appointment. The owner was asked
whether such premises exist and for walk-in hours. The pending record says open
24 hours daily; that schedule is not independently confirmed or changed. Do not
claim Maps/Siri visibility or approval from verified organization status, create
another duplicate, or represent a mobile service/home address as a storefront.

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

## Continued September 9: payment and Apple discovery

The owner again reported settling Meta payment and authorized continued ad/listing
work. The refreshed ad editor no longer displays the account-unsettled banner,
but #1487194 remains. Do not describe payment as uncleared based on the old banner.
Billing still requires a code sent to the owner's phone ending 76, and ad-account
roles link to Business Settings. Business Support Home for ad account
`570130732681432` shows no ads rejected / none available for additional review in
the last 90 days; this does not prove asset permissions are correct. An unrelated
business account appears under Other issues; do not alter it or treat its
restriction as evidence about SGD.

Apple Business is signed out. Public name/location searches did not identify the
exact Flushing or Suffern business listing; no duplicate was created. A focused
Apple Business/Maps email search in connected `smartestgaragedoors@gmail.com`
returned no messages, which does not establish whether another Apple account owns
the listing. Owner was asked to sign into the existing Apple account and complete
Meta's code in the sites, not share credentials in chat.

Yelp's existing Queens profile is confirmed Claimed at
`https://www.yelp.com/biz/smart-garage-doors-queens-3`, with correct primary phone,
street address, ZIP and website. Yahoo Local displays the same business and links
to that Yelp record. No Yelp account, ad or duplicate listing was created. The
website's existing organization schema is being extended with the verified Yelp
and Bing profile references; deployment verification is recorded separately.
Safari uses the person's selected search engine, so an Apple listing alone does
not cover every Safari search. Apple Business supports Maps/Siri discovery, but
no assistant ranking or recommendation is guaranteed.


## Latest organic-first follow-up

See `marketing/2026-09-launch/START-HERE.md` for the consolidated current status, superseding older observations above. Six Facebook/Instagram posts are now verified scheduled through September 29, plus two live posts. Google main-profile description and tracked website saved; Pending labels later cleared. Replacement service description saved and reopened. Google Search draft now says ready to publish; prior required-value error absent. Campaigns remain off; negatives and live delivery testing remain before serving. Search Console baseline: 383 web clicks / 167K impressions / 0.2% CTR / average position 17.5, June 7–September 6. Generative AI report: 599 impressions, not Siri/Alexa proof. Nassau County live Google test passed and indexing request was accepted into the priority crawl queue; indexing is not yet confirmed. Detailed evidence is in the dated marketing JSON files.


September 9 continued setup (owner explicitly requested assistant finish rather than hand off): verified Search-only, Queens/Nassau Presence targeting, 08:00–18:00 Eastern, saved ads and accepted-lead conversion. Google approval email confirms Advanced Verification completed May 7 for the exact account/domain. Saved shared negative list 12227199858 (27 phrase exclusions) and custom goal SGD | Accepted Inquiries + 60s Calls (2 actions); both verified, neither attached because campaign is still a draft. Future dates October 1–30 are saved as a temporary no-serving safeguard. Publish-and-pause was rejected by automatic approval review pending specific owner approval. A clearly labelled internal website test was filled but submission separately rejected; owner approval requested. No campaign published and no test sent. Remaining work stays with the assistant; these are authorization dependencies, not instructions for the owner to configure the account.
