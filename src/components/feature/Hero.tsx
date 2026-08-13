import { useLocation } from '../../contexts/LocationContext';
import { trackPhoneClick, trackEvent } from '../../utils/analytics';
import { getCFImageUrl, getCloudflareImage } from '../../data/cloudflareImages';
import { BUSINESS_INFO } from '../../config/business-info';
import HeroQuoteForm from '../conversion/HeroQuoteForm';

export default function Hero() {
  const { location, locationName } = useLocation();

  // Only personalize to a city when the visitor was GENUINELY detected in our service
  // area. Otherwise (IP lookup off, detection failed, or out-of-area → all default to
  // Queens internally) show neutral Tri-State copy so we never tell someone in another
  // city that we're "local" to a city that isn't theirs.
  const localArea = location?.detected ? locationName : null;


  const homeHero = getCloudflareImage('homeHero');
  const heroImageUrl = getCFImageUrl(homeHero.id, homeHero.variant ?? 'hero');

  return (
    <section className="relative min-h-[70vh] md:min-h-[74vh] flex items-center justify-center overflow-hidden">
      {/* Background image — premium ink/charcoal scrim (design system) keeps hero photo legible */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: homeHero.fallbackSrc
            ? `linear-gradient(rgba(22, 29, 41, 0.88), rgba(11, 15, 23, 0.82)), url('${heroImageUrl}'), url('${homeHero.fallbackSrc}')`
            : `linear-gradient(rgba(22, 29, 41, 0.88), rgba(11, 15, 23, 0.82)), url('${heroImageUrl}')`,
        }}
      />
      {/* Decorative amber corner glow (design accent) */}
      <div
        className="absolute top-0 right-0 w-[420px] h-[420px] z-0 pointer-events-none hidden md:block"
        style={{ background: 'radial-gradient(circle at 75% 25%, rgba(217,100,31,0.16), transparent 64%)' }}
        aria-hidden="true"
      />
      {/* Preload hint — hidden from layout */}
      <img
        src={heroImageUrl}
        alt=""
        aria-hidden="true"
        className="sr-only"
        width="1600"
        height="900"
        loading="eager"
        fetchPriority="high"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white relative z-10 py-10 md:py-12 w-full">
       <div className="grid lg:grid-cols-[1.05fr_minmax(0,420px)] gap-10 lg:gap-14 items-center">
        <div className="text-center lg:text-left">
        {/* Eyebrow — green "live answer" dot + amber label (premium design system) */}
        <p className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs md:text-sm font-bold md:font-semibold uppercase tracking-[0.14em] md:tracking-[0.16em] text-[#E8915A] mb-5">
          <span
            className="inline-block w-[7px] h-[7px] rounded-full bg-[#3FAE72] animate-pulse"
            style={{ boxShadow: '0 0 0 4px rgba(63,174,114,0.25)' }}
            aria-hidden="true"
          />
          {localArea ? `${localArea}` : 'Tri-State'} · Licensed &amp; Insured · Live Dispatcher
        </p>

        {/* H1 — emotional serif lead (design handoff) with keyword-rich subhead below for SEO.
            Shorter accent line on mobile, fuller line on desktop. */}
        <h1 className="font-newsreader font-medium text-[clamp(2rem,8vw,2.5rem)] md:text-5xl lg:text-6xl mb-5 leading-[1.05] tracking-[-0.02em] text-balance">
          Garage door stuck?{' '}
          <span className="text-[#F2B98C] italic block sm:inline">
            <span className="md:hidden">We answer. We show up.</span>
            <span className="hidden md:inline">We answer — and we show up.</span>
          </span>
        </h1>

        {/* Social proof directly under the headline — the visitor sees the rating
            BEFORE any CTA (moved up from the hero footer per CRO hierarchy:
            headline → proof → CTA). */}
        <p className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-[15px] md:text-base text-[#cdd9ea]">
          <span className="text-[#F5A623] tracking-[1px]" aria-hidden="true">★★★★★</span>
          <b className="text-white">{BUSINESS_INFO.aggregateRating.ratingValue}</b>
          <span>· {BUSINESS_INFO.aggregateRating.reviewCount}+ Google reviews</span>
        </p>

        {/* Sub-headline — scannable stacked lines instead of a paragraph (people
            scan, not read). Keeps the SEO keywords: "garage door repair", the
            service list, the tri-state coverage, and the no-call-center framing. */}
        <div className="mb-5 text-gray-200 max-w-xl mx-auto lg:mx-0 space-y-1 leading-snug">
          <p className="text-base md:text-lg font-semibold text-white">
            Emergency garage door repair &amp; premium installs — NY · NJ · CT
          </p>
          <p className="text-sm md:text-base">
            Springs · Openers · Cables · Off-track doors · Rolling gates &amp; docks
          </p>
          <p className="text-sm md:text-base">
            {localArea ? `Serving ${localArea} — ` : ''}Local dispatch, never a distant call center.
          </p>
        </div>

        {/* Featured offer — subtle tinted badge (lower visual weight than Call Now) */}
        <div className="inline-flex items-center gap-3 mb-5 md:mb-7 px-4 py-2.5 rounded-xl md:rounded-full bg-[rgba(217,100,31,0.16)] border border-[rgba(232,145,90,0.45)]">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-orange-500 text-white text-sm font-extrabold leading-none md:hidden" aria-hidden="true">✓</span>
          <span className="font-newsreader italic text-xl text-[#F2B98C] leading-none hidden md:inline">Free</span>
          <span className="text-sm font-semibold text-white">
            <span className="md:hidden">Free Estimate </span>
            <span className="hidden md:inline">written estimate </span>
            <span className="font-normal text-[#f0c9ad] md:text-white md:font-semibold">· total price incl. fees &amp; taxes</span>
          </span>
        </div>

        {/* Trust line — real-person reassurance directly above the call CTA */}
        <p className="flex items-start sm:items-center gap-2 mb-3 text-[15px] md:text-base font-semibold text-white max-w-xl mx-auto lg:mx-0 text-left">
          <i className="ri-customer-service-2-fill text-[#3FAE72] text-lg mt-0.5 sm:mt-0 flex-shrink-0" aria-hidden="true" />
          <span>Call now — a real person will answer and give you a clear arrival window.</span>
        </p>

        {/* CTAs — ONE dominant Call Now (lean hierarchy per handoff). Form below is
            additive, not a second competing CTA button, so it stays out of this row.
            data-hero-cta: the mobile sticky bar stays hidden while this block is visible. */}
        <div data-hero-cta className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center mb-3">
          <a
            href="tel:+19145576816"
            onClick={() => {
              trackPhoneClick('914-557-6816');
              trackEvent('cta_click', { category: 'Hero', action: 'phone_click', label: 'hero_call_now' });
            }}
            aria-label="Call Smart Garage Doors now"
            className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-extrabold px-7 py-3.5 text-lg rounded-2xl sm:rounded-full shadow-lg hover:shadow-xl transition-all duration-200 whitespace-nowrap"
          >
            <i className="ri-phone-fill text-xl" aria-hidden="true" />
            Call (914) 557-6816
          </a>
        </div>

        {/* Compact trust badges — one row on mobile, directly under the Call CTA
            (risk-reduction at the exact moment of decision). */}
        <p className="flex flex-wrap justify-center lg:justify-start items-center gap-x-3 gap-y-1 mb-6 text-[13px] md:text-sm text-[#cdd9ea]">
          <span className="inline-flex items-center gap-1.5">
            <i className="ri-checkbox-circle-fill text-[#3FAE72]" aria-hidden="true" />
            1-Year Warranty
          </span>
          <span className="inline-flex items-center gap-1.5">
            <i className="ri-checkbox-circle-fill text-[#3FAE72]" aria-hidden="true" />
            Licensed &amp; Insured
          </span>
          <span className="inline-flex items-center gap-1.5">
            <i className="ri-checkbox-circle-fill text-[#3FAE72]" aria-hidden="true" />
            Total-Price Quotes
          </span>
          <a
            href="/reparacion-de-puertas-de-garaje/"
            lang="es"
            onClick={() => trackEvent('cta_click', { category: 'Hero', action: 'es_landing_link', label: 'se_habla_espanol' })}
            className="inline-flex items-center gap-1.5 text-white font-semibold underline decoration-[#3FAE72]/60 underline-offset-2 hover:decoration-white transition-colors"
          >
            <i className="ri-chat-3-fill text-[#3FAE72]" aria-hidden="true" />
            Se habla español
          </a>
        </p>

        {/* Below lg: quote form shown inline, always visible (no tap required — owner
            wants zero friction to start filling it out). Sits below the dominant Call
            Now button so phone stays the #1 path; this is the secondary/additive path. */}
        <div className="lg:hidden mb-6">
          <HeroQuoteForm />
        </div>

        {/* Secondary vendor link — desktop (commercial / property managers) */}
        <a
          href="/property-managers/"
          onClick={() => trackEvent('cta_click', { category: 'Hero', action: 'vendor_link', label: 'vendor_account' })}
          className="hidden sm:inline-flex items-center gap-1.5 text-[15px] font-semibold text-white/90 hover:text-white border-b-[1.5px] border-[#F2B98C]/50 hover:border-white pb-0.5 mb-7 transition-colors"
        >
          Property manager? Set up a vendor account →
        </a>

        {/* (Rating proof moved directly under the H1; warranty/pricing badges moved to
            the badge row under the Call CTA — no duplicate trust rows down here.) */}
        </div>

        {/* Right column — desktop only. Below lg the same form renders inline above
            (see the lg:hidden block near the CTAs) instead of in this column. */}
        <div className="hidden lg:block w-full">
          <HeroQuoteForm />
        </div>
       </div>
      </div>

      {/* Scroll arrow — no conflicting transforms */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <i className="ri-arrow-down-line text-white text-2xl animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}
