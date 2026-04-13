import { useLocation } from '../../contexts/LocationContext';
import { trackPhoneClick, trackEvent } from '../../utils/analytics';
import { getCFImageUrl, getCloudflareImage } from '../../data/cloudflareImages';
import { BUSINESS_INFO } from '../../config/business-info';

export default function Hero() {
  const { location, locationName, responseTime, isLoading } = useLocation();

  const localArea = location && !isLoading ? locationName : 'your area';

  const dispatchLine =
    'Three dispatch hubs—Brooklyn, Suffern, and Jackson, NJ—route crews for faster response across Long Island’s Gold Coast, Westchester, Fairfield County, and Northern NJ.';

  const serviceAreaText = location && !isLoading
    ? `Serving ${locationName} with the same regional dispatch network and location-specific service pages—not a distant call center.`
    : dispatchLine;

  const responseTimeText = location && !isLoading
    ? `Need help in ${locationName}? We route by area for same-day emergency repair and premium installs—springs, openers, and full door replacements.`
    : 'Broken spring, stuck door, or opener failure? Call now for 24/7 emergency garage door repair across the NYC metro, suburbs, and Tri-State corridor.';

  const ctaText = `Call Now for ${localArea} Service`;

  const homeHero = getCloudflareImage('homeHero');
  const heroImageUrl = getCFImageUrl(homeHero.id, homeHero.variant ?? 'hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-van-bg z-0"
        style={{
          backgroundImage: homeHero.fallbackSrc
            ? `linear-gradient(rgba(30, 58, 138, 0.78), rgba(15, 23, 42, 0.72)), url('${heroImageUrl}'), url('${homeHero.fallbackSrc}')`
            : `linear-gradient(rgba(30, 58, 138, 0.78), rgba(15, 23, 42, 0.72)), url('${heroImageUrl}')`,
        }}
      />
      <picture className="hidden" aria-hidden="true">
        <img
          src={heroImageUrl}
          alt={homeHero.alt}
          width="1280"
          height="720"
          loading="eager"
          fetchPriority="high"
          style={{ aspectRatio: '16 / 9' }}
        />
      </picture>

      <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-orange-300 mb-4">
            NYC Metro &amp; Tri-State • 24/7 Emergency
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Garage Door Repair Across the <span className="text-orange-400">NYC Metro &amp; Surrounding Areas</span> Backed by{' '}
            {BUSINESS_INFO.aggregateRating.reviewCount} Google Reviews
          </h1>
          <p className="text-lg md:text-2xl mb-4 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            {responseTimeText}
          </p>
          <p
            className={`text-base md:text-lg mb-8 max-w-3xl mx-auto ${
              location && !isLoading ? 'text-orange-300 font-semibold' : 'text-gray-100'
            }`}
          >
            {serviceAreaText}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            style={{ overflow: 'hidden' }}
          >
            <a
              href="tel:914-557-6816"
              onClick={() => {
                trackPhoneClick('914-557-6816');
                trackEvent('cta_click', { category: 'Hero', action: 'phone_click', label: 'Hero CTA' });
              }}
              aria-label="Call Smart Garage Doors from hero section"
              className="inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white shadow-2xl hover:shadow-3xl px-8 py-4 text-lg rounded-full transform hover:scale-105"
            >
              <i className="ri-phone-line mr-3 text-xl" aria-hidden="true"></i>
              <span>{ctaText}</span>
            </a>
            <a
              href={BUSINESS_INFO.socialMedia.googleReviews}
              onClick={() => trackEvent('cta_click', { category: 'Hero', action: 'reviews_click', label: 'Hero Reviews' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer whitespace-nowrap bg-white hover:bg-gray-100 text-blue-900 shadow-2xl hover:shadow-3xl px-8 py-4 text-lg rounded-full transform hover:scale-105"
            >
              <i className="ri-star-line mr-3 text-xl" aria-hidden="true"></i>
              <span>See Real Reviews</span>
            </a>
          </div>

          <p className="text-sm md:text-base mb-12 text-white/90 font-medium">
            Speak with a live dispatcher now. Upfront quote before work begins.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 rounded-lg p-4" style={{ backdropFilter: 'blur(4px)' }}>
              <div className="text-3xl font-bold text-orange-400">24/7</div>
              <div className="text-sm text-gray-100">Emergency Service</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4" style={{ backdropFilter: 'blur(4px)' }}>
              <div className="text-3xl font-bold text-orange-400">60 Min</div>
              <div className="text-sm text-gray-100">Fast Local Routing</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4" style={{ backdropFilter: 'blur(4px)' }}>
              <div className="text-3xl font-bold text-orange-400">{BUSINESS_INFO.aggregateRating.reviewCount}</div>
              <div className="text-sm text-gray-100">Google Reviews</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4" style={{ backdropFilter: 'blur(4px)' }}>
              <div className="text-3xl font-bold text-orange-400">Licensed</div>
              <div className="text-sm text-gray-100">&amp; Insured</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ willChange: 'transform', transform: 'translateZ(0) translateX(-50%)' }}
      >
        <i className="ri-arrow-down-line text-white text-2xl animate-bounce" style={{ willChange: 'transform', transform: 'translateZ(0)' }}></i>
      </div>
    </section>
  );
}
