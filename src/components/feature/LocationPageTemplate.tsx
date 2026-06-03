import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from '../seo/Breadcrumbs';
import DynamicMetaTags from '../seo/DynamicMetaTags';
import FAQSchema from '../seo/FAQSchema';
import ServiceLinks from '../seo/ServiceLinks';
import NearbyAreasSection from '../seo/NearbyAreasSection';
import { buildCanonical } from '../../config/canonical';
import { BUSINESS_INFO } from '../../config/business-info';
import { trackPhoneClick, trackBookNowClick } from '../../utils/analytics';

export interface LocationNeighborhood {
  name: string;
  description: string;
}

export interface LocationReview {
  text: string;
  author: string;
  location: string;
  initials: string;
  color?: string; // tailwind bg class e.g. 'bg-blue-600'
}

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationService {
  icon: string;
  title: string;
  description: string;
}

export interface LocationAdvantage {
  icon: string;
  title: string;
  description: string;
}

export interface LocationPageTemplateProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  slug: string; // e.g. '/queens-ny/'

  // Identity
  cityName: string;
  stateCode: string;       // e.g. 'NY'
  stateName: string;       // e.g. 'New York'
  reviewCount?: number;

  // Hero
  heroImage?: string;

  // Content
  neighborhoods: LocationNeighborhood[];
  reviews: LocationReview[];
  faqs: LocationFAQ[];
  services?: LocationService[];
  advantages?: LocationAdvantage[];

  // Optional
  mapEmbedUrl?: string;
  comparisonRows?: Array<{ feature: string; ours: string }>;

}

const PHONE     = BUSINESS_INFO.phone;
const PHONE_TEL = BUSINESS_INFO.phoneFormatted;

const DEFAULT_SERVICES: LocationService[] = [
  { icon: 'ri-alarm-warning-line',   title: '24/7 Emergency Repair',       description: 'Broken spring, snapped cable, door off track — we respond fast any time of day.' },
  { icon: 'ri-settings-4-line',      title: 'Spring Replacement',          description: 'Torsion and extension spring replacement using high-cycle springs built to last.' },
  { icon: 'ri-remote-control-line',  title: 'Opener Repair & Install',     description: 'LiftMaster, Chamberlain, Genie — we repair or upgrade to a smart WiFi opener.' },
  { icon: 'ri-door-open-line',       title: 'New Door Installation',       description: 'Steel, wood, carriage-style — we install and help you choose the right door.' },
  { icon: 'ri-links-line',           title: 'Cable & Roller Repair',       description: 'Frayed cables and worn rollers fixed right, so your door runs smooth and safe.' },
  { icon: 'ri-shield-check-line',    title: 'Safety Tune-Up',              description: 'Full inspection, lubrication, balance test, and sensor check — keeps everything safe.' },
];

const DEFAULT_ADVANTAGES: LocationAdvantage[] = [
  { icon: 'ri-time-line',              title: 'Same-Day Service',          description: 'We prioritize fast arrivals so you\'re not waiting around for days.' },
  { icon: 'ri-price-tag-3-line',       title: 'Upfront Pricing',           description: 'You get the price before we start. No surprises, no hidden fees.' },
  { icon: 'ri-medal-line',             title: 'Licensed & Insured',        description: 'Fully licensed, fully insured. You\'re protected on every job.' },
  { icon: 'ri-refresh-line',           title: '1-Year Warranty',           description: 'All parts and labor backed by a 1-year warranty. We stand behind our work.' },
];

const DEFAULT_COMPARISON: Array<{ feature: string; ours: string }> = [
  { feature: 'Response Time',    ours: 'Fast Dispatch' },
  { feature: 'Same-Day Service', ours: 'Available' },
  { feature: '24/7 Emergency',   ours: 'Yes' },
  { feature: 'Upfront Pricing',  ours: 'Always' },
  { feature: '1-Year Warranty',  ours: 'Included' },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="text-yellow-400 text-lg leading-none" aria-label={`${count} stars`}>
      {'★'.repeat(count)}
    </span>
  );
}

function FAQAccordion({ faqs }: { faqs: LocationFAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{faq.question}</span>
            <i className={`ri-arrow-down-s-line text-xl text-orange-500 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100">
              <p className="pt-4">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function LocationPageTemplate(props: LocationPageTemplateProps) {
  const {
    metaTitle, metaDescription, keywords, slug,
    cityName, stateCode, stateName,
    reviewCount = 475,
    heroImage,
    neighborhoods, reviews, faqs,
    services = DEFAULT_SERVICES,
    advantages = DEFAULT_ADVANTAGES,
    mapEmbedUrl,
    comparisonRows = DEFAULT_COMPARISON,
  } = props;

  const city  = cityName;
  const state = stateCode;

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        title={metaTitle}
        description={metaDescription}
        keywords={keywords}
        canonical={buildCanonical(slug.replace(/\/$/, ''))}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <Breadcrumbs />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
        {heroImage && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url('${heroImage}')` }}
            aria-hidden="true"
          />
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Stars />
              <span className="text-blue-200 text-sm font-medium">{reviewCount} verified reviews</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Garage Door Repair in {city}, {state}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Same-day service, upfront pricing, and a 1-year warranty on every job.
              Licensed &amp; insured. Available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_TEL}`}
                onClick={() => trackPhoneClick(PHONE, `location_hero_${cityName}`)}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                <i className="ri-phone-fill" aria-hidden="true" />
                {PHONE}
              </a>
              <a
                href="/book-now/"
                onClick={() => trackBookNowClick(`location_hero_${cityName}`)}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <i className="ri-calendar-line" aria-hidden="true" />
                Book Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────── */}
      <section className="bg-blue-950 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Stars count={5} />
              <span>5.0 · {reviewCount} Reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="ri-shield-check-fill text-orange-400 text-base" aria-hidden="true" />
              <span>Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="ri-time-fill text-orange-400 text-base" aria-hidden="true" />
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="ri-price-tag-3-fill text-orange-400 text-base" aria-hidden="true" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="ri-refresh-fill text-orange-400 text-base" aria-hidden="true" />
              <span>1-Year Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Garage Door Services in {city}, {state}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We handle everything — from a snapped spring at midnight to a full new door installation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                  <i className={`${svc.icon} text-2xl text-orange-500`} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-lg text-gray-600">Simple, fast, and stress-free from start to finish.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', icon: 'ri-phone-line',      title: 'Call or Book Online',   desc: `Call ${PHONE} or fill out our booking form. We'll confirm availability and give you an honest quote right away.` },
              { step: '2', icon: 'ri-truck-line',       title: 'We Come to You',        desc: `A fully-stocked technician arrives at your ${city} location — usually same day. No waiting around for parts.` },
              { step: '3', icon: 'ri-check-double-line', title: 'Problem Solved',        desc: 'Fixed right the first time, backed by a 1-year parts and labor warranty. We clean up before we leave.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-5">
                  <div className="absolute inset-0 bg-orange-500 rounded-2xl rotate-6 opacity-20" />
                  <div className="relative w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                    <i className={`${item.icon} text-2xl text-white`} aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOODS ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Serving All of {city}, {state}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We know {city}'s neighborhoods well — faster routes, faster arrivals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {neighborhoods.map((n, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-map-pin-2-fill text-orange-500" aria-hidden="true" />
                  {n.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{n.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              What {city} Customers Say
            </h2>
            <p className="text-gray-600">Real reviews from your neighbors</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <Stars />
                <p className="text-gray-700 mt-3 mb-5 italic leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 ${r.color ?? 'bg-blue-600'} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{r.author}</div>
                    <div className="text-gray-500 text-xs">{r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={BUSINESS_INFO.socialMedia.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <i className="ri-external-link-line" aria-hidden="true" />
              See all {reviewCount}+ reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Why {city} Homeowners Choose Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${a.icon} text-2xl text-orange-500`} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              How We Compare in {city}
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-900 text-white text-sm">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Smartest Garage Doors</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-300">Typical Competitor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        <i className="ri-check-line" aria-hidden="true" />
                        {row.ours}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400 text-sm">Varies</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {city} Garage Door FAQ
            </h2>
            <p className="text-gray-600">Common questions from {city} homeowners</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── MAP ───────────────────────────────────────────────────── */}
      {mapEmbedUrl && (
        <section className="py-0">
          <div className="h-72 lg:h-96 w-full overflow-hidden">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${city}, ${state} Service Area Map`}
            />
          </div>
        </section>
      )}

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Need a Garage Door Tech in {city}?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Call now for same-day service or book online. We'll give you an honest price before we start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackPhoneClick(PHONE, `location_final_${cityName}`)}
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              {PHONE}
            </a>
            <a
              href="/book-now/"
              onClick={() => trackBookNowClick(`location_final_${cityName}`)}
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg border border-orange-400"
            >
              <i className="ri-calendar-line" aria-hidden="true" />
              Book Online
            </a>
          </div>
        </div>
      </section>

      <NearbyAreasSection currentPath={slug} cityName={cityName} />
      <ServiceLinks
        title={`Complete Garage Door Services in ${city}, ${state}`}
        showDescription={true}
        locationPath={slug}
      />
      <Footer />
    </div>
  );
}
