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

  // Keyword-rich subhead (preserves "garage door repair" + service keywords + the
  // local-feel / no-call-center framing) WITHOUT ever naming dispatch hubs.
  const subheadline =
    'Emergency garage door repair and premium installs — springs, openers, cables, rolling gates & loading docks. Fast local dispatch across NY · NJ · CT, never a distant call center.';

  const homeHero = getCloudflareImage('homeHero');
  const heroImageUrl = getCFImageUrl(homeHero.id, homeHero.variant ?? 'hero');

  return (
    <section className="relative min-h-[80vh] md:min-h-[86vh] flex items-center justify-center overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white relative z-10 py-12 md:py-16 w-full">
       <div className="grid lg:grid-cols-[1.05fr_minmax(0,420px)] gap-10 lg:gap-14 items-center">
        <div className="text-center lg:text-left">
        {/* Eyebrow — green "live answer" dot + amber label (premium design system) */}
        <p className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs md:text-sm font-bold md:font-semibold uppercase tracking-[0.14em] md:tracking-[0.16em] text-[#E8915A] mb-5">
          <span
            className="inline-block w-[7px] h-[7px] rounded-full bg-[#3FAE72] animate-pulse"
            style={{ boxShadow: '0 0 0 4px rgba(63,174,114,0.25)' }}
            aria-hidden="true"
          />
          {localArea ? `${localArea}` : 'Tri-State'} · Licensed &amp; Insured · 24/7 Live Answer
        </p>

        {/* H1 — emotional serif lead (design handoff) with keyword-rich subhead below for SEO.
            Shorter accent line on mobile, fuller line on desktop. */}
        <h1 className="font-newsreader font-medium text-[clamp(2.1rem,9vw,2.75rem)] md:text-6xl lg:text-7xl mb-5 leading-[1.05] tracking-[-0.02em] text-balance">
          Garage door stuck?{' '}
          <span className="text-[#F2B98C] italic block sm:inline">
            <span className="md:hidden">We answer 24/7.</span>
            <span className="hidden md:inline">We answer — and we show up.</span>
          </span>
        </h1>

        {/* Sub-headline — keyword-rich, location-aware, no hubs named */}
        <p className="text-base md:text-xl mb-7 text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          {localArea ? `Serving ${localArea} and the wider Tri-State. ` : ''}
          {subheadline}
        </p>

        {/* Featured offer — subtle tinted badge (lower visual weight than Call Now) */}
        <div className="inline-flex items-center gap-3 mb-8 px-4 py-2.5 rounded-xl md:rounded-full bg-[rgba(217,100,31,0.16)] border border-[rgba(232,145,90,0.45)]">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-orange-500 text-white text-sm font-extrabold leading-none md:hidden" aria-hidden="true">✓</span>
          <span className="font-newsreader italic text-xl text-[#F2B98C] leading-none hidden md:inline">$0</span>
          <span className="text-sm font-semibold text-white">
            <span className="md:hidden">Free Service Call </span>
            <span className="hidden md:inline">service call </span>
            <span className="font-normal text-[#f0c9ad] md:text-white md:font-semibold">· with any repair</span>
          </span>
        </div>

        {/* Trust line — real-person reassurance directly above the call CTA */}
        <p className="flex items-start sm:items-center gap-2 mb-3 text-[15px] md:text-base font-semibold text-white max-w-xl mx-auto lg:mx-0 text-left">
          <i className="ri-customer-service-2-fill text-[#3FAE72] text-lg mt-0.5 sm:mt-0 flex-shrink-0" aria-hidden="true" />
          <span>Call now — a real person will answer and give you a clear arrival window.</span>
        </p>

        {/* CTAs — ONE dominant Call Now (lean hierarchy per handoff).
            data-hero-cta: the mobile sticky bar stays hidden while this block is visible. */}
        <div data-hero-cta className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center mb-6">
          <a
            href="tel:+19145576816"
            onClick={() => {
              trackPhoneClick('914-557-6816');
              trackEvent('cta_click', { category: 'Hero', action: 'phone_click', label: 'hero_call_now' });
            }}
            aria-label="Call Smart Garage Doors now"
            className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-extrabold px-8 py-4 text-lg sm:text-xl rounded-2xl sm:rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 sm:hover:scale-105 whitespace-nowrap"
          >
            <i className="ri-phone-fill text-xl" aria-hidden="true" />
            Call (914) 557-6816
          </a>
          {/* Mobile-only secondary: scroll to the quote form below */}
          <a
            href="#hero-quote-form"
            onClick={() => trackEvent('cta_click', { category: 'Hero', action: 'request_online', label: 'request_online' })}
            className="sm:hidden inline-flex items-center justify-center gap-2 min-h-[52px] text-white font-bold text-base rounded-2xl border-[1.5px] border-white/25 bg-white/[0.07] active:bg-white/[0.13] transition-colors px-5"
          >
            <span className="underline underline-offset-4 decoration-[#F2B98C]/80">Request service online</span> →
          </a>
        </div>

        {/* Secondary vendor link — desktop (commercial / property managers) */}
        <a
          href="/property-managers/"
          onClick={() => trackEvent('cta_click', { category: 'Hero', action: 'vendor_link', label: 'vendor_account' })}
          className="hidden sm:inline-flex items-center gap-1.5 text-[15px] font-semibold text-white/90 hover:text-white border-b-[1.5px] border-[#F2B98C]/50 hover:border-white pb-0.5 mb-7 transition-colors"
        >
          Property manager? Set up a vendor account →
        </a>

        {/* Trust row — rating proof + same-day / upfront (two clean lines on mobile) */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-3.5 gap-y-1.5 justify-center lg:justify-start items-center text-sm text-[#cdd9ea]">
          <span className="inline-flex items-center gap-2">
            <span className="text-[#F5A623] tracking-[1px]" aria-hidden="true">★★★★★</span>
            <b className="text-white">{BUSINESS_INFO.aggregateRating.ratingValue}</b>
            <span>· {BUSINESS_INFO.aggregateRating.reviewCount} Google reviews</span>
          </span>
          <span className="hidden sm:inline opacity-40" aria-hidden="true">|</span>
          <span className="font-semibold sm:font-normal">Same-Day Service · Upfront Pricing</span>
        </div>
        </div>

        {/* Right column — additive lead-capture form (phone CTA above stays dominant) */}
        <div id="hero-quote-form" className="w-full scroll-mt-28">
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
