import { useLocation } from '../../contexts/LocationContext';
import { trackPhoneClick, trackEvent, trackWhatsAppClick, trackBookNowClick } from '../../utils/analytics';
import { getCFImageUrl, getCloudflareImage } from '../../data/cloudflareImages';
import { BUSINESS_INFO } from '../../config/business-info';
import { getWhatsAppHref } from '../../utils/whatsapp';
import HeroQuoteForm from '../conversion/HeroQuoteForm';

export default function Hero() {
  const { location, locationName } = useLocation();

  // Only personalize to a city when the visitor was GENUINELY detected in our service
  // area. Otherwise (IP lookup off, detection failed, or out-of-area → all default to
  // Queens internally) show neutral Tri-State copy so we never tell someone in another
  // city that we're "local" to a city that isn't theirs.
  const localArea = location?.detected ? locationName : null;

  const subheadline =
    'Broken spring, stuck door, or opener failure? Emergency repair and premium installs by local technicians across NY, NJ & CT — not a distant call center.';

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white relative z-10 py-14 md:py-16 w-full">
       <div className="grid lg:grid-cols-[1.25fr_0.95fr] gap-10 lg:gap-14 items-center">
        <div className="text-center">
        {/* Eyebrow — green "live answer" dot + amber label (premium design system) */}
        <p className="flex items-center justify-center gap-2.5 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#E8915A] mb-5">
          <span
            className="inline-block w-[7px] h-[7px] rounded-full bg-[#3FAE72]"
            style={{ boxShadow: '0 0 0 4px rgba(63,174,114,0.25)' }}
            aria-hidden="true"
          />
          {localArea ? `${localArea}` : 'Tri-State'} · Licensed &amp; Insured · 24/7 Live Answer
        </p>

        {/* H1 — keyword-rich + location-dynamic for SEO, premium serif treatment */}
        <h1 className="font-newsreader font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.05] tracking-[-0.02em]">
          Garage Door Repair{' '}
          <span className="text-[#F2B98C] italic">You Can Count On</span>
          {localArea ? ` in ${localArea}` : ' Across the Tri-State'}
        </h1>

        {/* Sub-headline — changes once location resolves */}
        <p className="text-lg md:text-xl mb-7 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>

        {/* Featured offer — owner-approved: $0 service call with any repair */}
        <div className="inline-flex items-center gap-3 mb-9 px-5 py-2.5 rounded-full bg-[rgba(217,100,31,0.14)] border border-[rgba(232,145,90,0.45)]">
          <span className="font-newsreader italic text-xl text-[#F2B98C] leading-none">$0</span>
          <span className="text-sm font-semibold text-white">service call with any repair</span>
        </div>

        {/* CTAs — data-hero-cta: the mobile sticky bar stays hidden while this block is visible */}
        <div data-hero-cta className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center items-center mb-6">
          <a
            href="tel:914-557-6816"
            onClick={() => {
              trackPhoneClick('914-557-6816');
              trackEvent('cta_click', { category: 'Hero', action: 'phone_click', label: 'Hero CTA' });
            }}
            aria-label="Call Smart Garage Doors now"
            className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 whitespace-nowrap"
          >
            <i className="ri-phone-line text-xl" aria-hidden="true" />
            Call (914) 557-6816
          </a>
          <a
            href="/book-now/"
            onClick={() => {
              trackBookNowClick('hero');
              trackEvent('cta_click', { category: 'Hero', action: 'book_click', label: 'Hero Book Online' });
            }}
            aria-label="Book garage door service online"
            className="inline-flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 whitespace-nowrap"
          >
            <i className="ri-calendar-check-line text-xl" aria-hidden="true" />
            Book Online
          </a>
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero')}
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 whitespace-nowrap"
            aria-label="Message us on WhatsApp"
          >
            <i className="ri-whatsapp-fill text-xl" aria-hidden="true" />
            WhatsApp Us
          </a>
          <a
            href={BUSINESS_INFO.socialMedia.googleReviews}
            onClick={() => trackEvent('cta_click', { category: 'Hero', action: 'reviews_click', label: 'Hero Reviews' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl backdrop-blur-sm transition-all duration-200 hover:scale-105 whitespace-nowrap"
          >
            <i className="ri-star-fill text-yellow-400 text-xl" aria-hidden="true" />
            {BUSINESS_INFO.aggregateRating.reviewCount} Google Reviews
          </a>
        </div>

        {/* Single trust line — one rating proof (eyebrow already covers licensed / 24-7) */}
        <p className="text-sm text-white/70">
          ★★★★★ {BUSINESS_INFO.aggregateRating.ratingValue} from {BUSINESS_INFO.aggregateRating.reviewCount} Google reviews
        </p>
        </div>

        {/* Right column — additive lead-capture form (phone CTA above stays dominant) */}
        <div className="w-full">
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
