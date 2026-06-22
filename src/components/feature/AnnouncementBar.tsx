/**
 * Slim, site-wide announcement bar rendered ABOVE the sticky <header> (in normal
 * document flow, so it is NOT sticky — it scrolls away and the nav then sticks to
 * top-0). Kept deliberately above the header rather than inside it so it can never
 * overlap the bottom mobile sticky CTA bar.
 *
 * Reinforces the single owner-approved offer ($0 service call with any completed
 * repair) and gives a one-tap phone CTA. Phone tracking reuses the existing global
 * tel: click tracker via `data-track-source` (see initGlobalClickTracking in
 * utils/analytics.ts) — no extra onClick, so there is zero risk of double-counting.
 */

const PHONE_DISPLAY = '(914) 557-6816';
const PHONE_HREF = 'tel:+19145576816';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#161D29] text-white" role="region" aria-label="Current promotion">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <p className="text-xs sm:text-sm font-medium leading-snug">
          <span className="font-newsreader italic text-[#F2B98C]">$0</span>{' '}
          <span className="font-semibold">Service Call</span> With Any Completed Repair
          <span className="hidden sm:inline"> — Same-Day Appointments Available</span>
        </p>
        <a
          href={PHONE_HREF}
          data-track-source="announcement_bar"
          aria-label={`Call Smart Garage Doors now at ${PHONE_DISPLAY}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 px-3 py-1 text-xs sm:text-sm font-semibold text-white transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1 focus:ring-offset-[#161D29]"
        >
          <i className="ri-phone-fill" aria-hidden="true" />
          Call {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
