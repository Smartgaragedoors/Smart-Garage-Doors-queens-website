import { useLocation } from '../../contexts/LocationContext';
import { trackPhoneClick, trackEvent } from '../../utils/analytics';
import { getCFImageUrl, getCloudflareImage } from '../../data/cloudflareImages';
import { BUSINESS_INFO } from '../../config/business-info';

export default function Hero() {
  const { location, locationName, isLoading } = useLocation();

  const resolved = location && !isLoading;
  const localArea = resolved ? locationName : null;

  const subheadline = resolved
    ? `Serving ${locationName} — same-day emergency repair and premium installs for springs, openers, and full door replacements.`
    : 'Broken spring, stuck door, or opener failure? Call now for 24/7 emergency garage door repair across the NYC metro, suburbs, and Tri-State corridor.';

  const dispatchLine = resolved
    ? `Dispatch from Brooklyn, Suffern, and Jackson, NJ — local routing, not a distant call center.`
    : 'Three dispatch hubs across NY, NJ, and CT — route crews for faster local response.';

  const homeHero = getCloudflareImage('homeHero');
  const heroImageUrl = getCFImageUrl(homeHero.id, homeHero.variant ?? 'hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: homeHero.fallbackSrc
            ? `linear-gradient(rgba(15, 30, 90, 0.82), rgba(10, 20, 50, 0.76)), url('${heroImageUrl}'), url('${homeHero.fallbackSrc}')`
            : `linear-gradient(rgba(15, 30, 90, 0.82), rgba(10, 20, 50, 0.76)), url('${heroImageUrl}')`,
        }}
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-white relative z-10 py-24">
        {/* Eyebrow */}
        <p className="text-sm md:text-base font-semibold uppercase tracking-widest text-orange-300 mb-5">
          NYC Metro &amp; Tri-State &nbsp;•&nbsp; 24/7 Emergency
        </p>

        {/* H1 — shorter, punchier */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.08] tracking-tight">
          Garage Door Repair{' '}
          <span className="text-orange-400">You Can Count On</span>
          {localArea ? ` in ${localArea}` : ' Across the Tri-State'}
        </h1>

        {/* Sub-headline — changes once location resolves */}
        <p className="text-lg md:text-xl mb-3 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          {subheadline}
        </p>
        <p className="text-sm md:text-base mb-10 max-w-2xl mx-auto text-gray-300">
          {dispatchLine}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
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

        <p className="text-sm text-white/70 mb-14">
          Speak with a live dispatcher. Upfront quote before work begins.
        </p>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { value: '24/7', label: 'Emergency Service' },
            { value: '5.0★', label: 'Average Rating' },
            { value: `${BUSINESS_INFO.aggregateRating.reviewCount}+`, label: 'Google Reviews' },
            { value: 'Licensed', label: '& Insured' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-orange-400 leading-none">{value}</div>
              <div className="text-xs text-gray-300 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow — no conflicting transforms */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <i className="ri-arrow-down-line text-white text-2xl animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}
