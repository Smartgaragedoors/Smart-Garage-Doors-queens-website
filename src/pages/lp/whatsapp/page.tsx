import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import CFImage from '../../../components/base/CFImage';
import { BUSINESS_INFO } from '../../../config/business-info';
import { STATIC_REVIEWS } from '../../../data/staticReviews';
import { getCloudflareImage } from '../../../data/cloudflareImages';
import { getWhatsAppHref } from '../../../utils/whatsapp';
import {
  trackLandingPageView,
  trackLandingPageWhatsAppClick,
  trackLandingPageCallClick,
  trackLandingPageScroll,
  trackPhoneClick,
} from '../../../utils/analytics';

/** Config for future campaign/city overrides (from URL params or props) */
export interface LPWhatsAppConfig {
  headline?: string;
  subheadline?: string;
  campaign?: string;
  platform?: string;
}

const COMMON_PROBLEMS = [
  'Broken springs',
  'Garage door opener issues',
  'Door off track',
  'Snapped cables',
  'Door stuck halfway',
  'Noisy or shaking door',
  'Remote or keypad problems',
  'Emergency garage door repair',
];

export default function LPWhatsAppPage() {
  const [searchParams] = useSearchParams();
  const scroll50Sent = useRef(false);
  const scroll90Sent = useRef(false);

  const config: LPWhatsAppConfig = {
    campaign: searchParams.get('campaign') ?? undefined,
    platform: searchParams.get('platform') ?? undefined,
  };

  useEffect(() => {
    trackLandingPageView();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = (scrollTop / docHeight) * 100;
      if (pct >= 50 && !scroll50Sent.current) {
        scroll50Sent.current = true;
        trackLandingPageScroll(50);
      }
      if (pct >= 90 && !scroll90Sent.current) {
        scroll90Sent.current = true;
        trackLandingPageScroll(90);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    trackLandingPageWhatsAppClick();
  };

  const handleCallClick = () => {
    trackLandingPageCallClick();
    trackPhoneClick(BUSINESS_INFO.phone);
  };

  const whatsappHref = getWhatsAppHref({
    campaign: config.campaign,
    platform: config.platform,
  });

  const headline = config.headline ?? 'Garage Door Repair Without the Runaround';
  const subheadline =
    config.subheadline ??
    'Same-day garage door repair, opener repair, spring replacement, and emergency service across NY, NJ & CT. Message Smartest Garage Doors on WhatsApp now and get help fast.';

  const reviews = STATIC_REVIEWS.slice(0, 3);
  const lpHero = getCloudflareImage('lpWhatsappHero');

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        title="Garage Door Repair | Message Us on WhatsApp | Smartest Garage Doors"
        description="Same-day garage door repair across NY, NJ & CT. Message us on WhatsApp for fast help. 5.0 rated, 392 reviews, licensed & insured."
        noIndex
      />
      <Header />

      {/* Section 1: Hero */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {headline}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed">
                {subheadline}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">
                  5.0 Rated
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">
                  {BUSINESS_INFO.aggregateRating.reviewCount} Reviews
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">
                  Same-Day Service
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">
                  Licensed & Insured
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
                  aria-label="Message us on WhatsApp"
                >
                  <i className="ri-whatsapp-fill text-2xl" aria-hidden="true" />
                  Message Us on WhatsApp
                </a>
                <a
                  href="tel:+19145576816"
                  onClick={handleCallClick}
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
                  aria-label="Call Smart Garage Doors"
                >
                  <i className="ri-phone-fill text-xl" aria-hidden="true" />
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
              <p className="text-blue-200 text-sm mb-4">
                Fast response. No pressure. Real help from a local pro.
              </p>
              <p className="text-blue-300/90 text-sm">
                Broken spring • Door won&apos;t open • Opener problems • Off-track door • Strange noise
              </p>
            </div>
            <div className="hidden lg:block">
              <CFImage
                id={lpHero.id}
                variant="hero"
                alt={lpHero.alt}
                className="rounded-xl shadow-2xl w-full max-w-lg"
                width={600}
                height={400}
                sizes="(max-width: 1024px) 100vw, 600px"
                fallbackSrc={lpHero.fallbackSrc}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why People Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast, Same-Day Help</h3>
              <p className="text-gray-600 text-sm">
                We move quickly. Most customers reach out because they need the problem fixed now, not next week.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Real Diagnostics</h3>
              <p className="text-gray-600 text-sm">
                We do not guess from a script. We identify the actual issue so you do not waste money on the wrong fix.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Repair First Mindset</h3>
              <p className="text-gray-600 text-sm">
                If your door can be repaired safely and properly, we will tell you. We are not here to push what you do not need.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Local, Trusted, Proven</h3>
              <p className="text-gray-600 text-sm">
                {BUSINESS_INFO.name} is trusted by homeowners across NY, NJ & CT for fast service and professional work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Common Problems */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Common Problems We Fix
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-10">
            If your garage door is stuck, noisy, heavy, crooked, or not opening properly, we can usually diagnose the issue quickly and tell you the best next step.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {COMMON_PROBLEMS.map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-lg px-4 py-3 text-center text-gray-800 font-medium text-sm"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <i className="ri-whatsapp-fill text-xl" aria-hidden="true" />
              Get Help on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Message Us</h3>
              <p className="text-gray-600">
                Send a quick WhatsApp message with your issue, photo, or video if you have one.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get a Fast Response</h3>
              <p className="text-gray-600">
                We review the issue and help you figure out the best next step.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Book Service</h3>
              <p className="text-gray-600">
                If needed, we schedule service and get your garage door working again fast.
              </p>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm">
            No long forms. No back and forth with call centers. Just direct communication.
          </p>
        </div>
      </section>

      {/* Section 5: Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Trusted by Hundreds of Homeowners
          </h2>
          <p className="text-center text-gray-600 mb-10">
            {BUSINESS_INFO.aggregateRating.ratingValue} rating from {BUSINESS_INFO.aggregateRating.reviewCount} reviews
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {reviews.map((r) => (
              <div key={r.id} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <i
                      key={i}
                      className={`ri-star-${i < r.rating ? 'fill' : 'line'} text-yellow-400`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-3">&ldquo;{r.text}&rdquo;</p>
                <p className="text-sm font-medium text-gray-900">{r.author_name}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <i className="ri-whatsapp-fill text-xl" aria-hidden="true" />
              Start on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Garage Door Help Today?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Message {BUSINESS_INFO.name} on WhatsApp now for fast help with repairs, openers, springs, emergencies, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <i className="ri-whatsapp-fill text-xl" aria-hidden="true" />
              Message Us on WhatsApp
            </a>
            <a
              href="tel:+19145576816"
              onClick={handleCallClick}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <i className="ri-phone-fill text-xl" aria-hidden="true" />
              Call Now
            </a>
          </div>
          <ul className="flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
            <li>Same-day appointments often available</li>
            <li>Fast response</li>
            <li>Licensed & insured</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
