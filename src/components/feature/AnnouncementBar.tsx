/**
 * Slim, site-wide top bar rendered ABOVE the sticky <header> (in normal document
 * flow, so it is NOT sticky — it scrolls away and the nav then sticks to top-0).
 * Kept above the header rather than inside it so it can never overlap the bottom
 * mobile sticky CTA bar.
 *
 * This is the single top strip for the whole site (it replaced the old separate
 * desktop "blue top bar"):
 *   - ALL viewports: the owner-approved offer ($0 service call with any completed
 *     repair) + a one-tap phone CTA.
 *   - Desktop (md+): also the visitor's LOCAL serving area, email, and socials —
 *     so there is one clean bar instead of two stacked strips.
 *
 * The serving-area text is localized to the visitor (IP-detected city) or the
 * location page they're on — local feel without ever naming hubs or drive times
 * (see utils/serviceArea.ts). Phone tracking reuses the existing global tel: click
 * tracker via `data-track-source` (initGlobalClickTracking in utils/analytics.ts) —
 * no extra onClick, so there is zero risk of double-counting.
 */

import { useLocation as useLocationContext } from '../../contexts/LocationContext';
import { useLocation as useRouterLocation } from 'react-router-dom';
import { localServiceAreaLabel } from '../../utils/serviceArea';

const PHONE_DISPLAY = '(914) 557-6816';
const PHONE_HREF = 'tel:+19145576816';

const SOCIALS = [
  { href: 'https://www.facebook.com/profile.php?id=61563773137785', icon: 'ri-facebook-fill', label: 'Facebook' },
  { href: 'https://www.instagram.com/smartgaragedoorss/', icon: 'ri-instagram-fill', label: 'Instagram' },
  { href: 'https://maps.app.goo.gl/GjfsFbH5kQ2smvdU8', icon: 'ri-map-pin-fill', label: 'Google Maps' },
];

export default function AnnouncementBar() {
  const { location } = useLocationContext();
  const { pathname } = useRouterLocation();
  const areaLabel = localServiceAreaLabel(location, pathname);

  return (
    <div className="bg-[#161D29] text-white" role="region" aria-label="Promotion and contact">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-x-3 gap-y-1">
        {/* Left (desktop only): visitor's local serving area + email */}
        <div className="hidden md:flex items-center gap-x-4 text-xs text-gray-300 min-w-0">
          <span className="flex items-center gap-1.5 min-w-0">
            <i className="ri-map-pin-line text-[#E8915A]" aria-hidden="true" />
            <span className="truncate">{areaLabel}</span>
          </span>
          <a
            href="mailto:info@smartestgaragedoors.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap"
          >
            <i className="ri-mail-line" aria-hidden="true" />
            <span>info@smartestgaragedoors.com</span>
          </a>
        </div>

        {/* Center: the owner-approved offer */}
        <p className="md:flex-1 text-center text-[11px] sm:text-sm font-medium leading-snug">
          <span className="font-newsreader italic text-[#F2B98C]">$0</span>{' '}
          <span className="font-semibold">Service Call</span> With Any Completed Repair
          <span className="hidden sm:inline"> — Same-Day Appointments Available</span>
        </p>

        {/* Right: phone CTA (+ socials on desktop) */}
        <div className="flex items-center gap-x-3 shrink-0">
          <a
            href={PHONE_HREF}
            data-track-source="announcement_bar"
            aria-label={`Call Smart Garage Doors now at ${PHONE_DISPLAY}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 px-2.5 sm:px-3 py-1 text-[11px] sm:text-sm font-semibold text-white transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1 focus:ring-offset-[#161D29]"
          >
            <i className="ri-phone-fill" aria-hidden="true" />
            <span className="hidden sm:inline">Call </span>{PHONE_DISPLAY}
          </a>
          <div className="hidden md:flex items-center gap-x-2 text-gray-300">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${s.label} page`}
                className="hover:text-white transition-colors"
              >
                <i className={s.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
