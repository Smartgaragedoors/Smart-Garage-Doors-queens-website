import { useEffect } from 'react';
import { buildCanonical } from '../../../config/canonical';
import { BUSINESS_INFO } from '../../../config/business-info';
import Header from '../../../components/feature/Header';

const SUFFERN_PHONE = '(845) 262-2034';
const SUFFERN_PHONE_E164 = '+18452622034';
import Footer from '../../../components/feature/Footer';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import ServiceLinks from '../../../components/seo/ServiceLinks';
import NearbyAreasSection from '../../../components/seo/NearbyAreasSection';

const SUFFERN_REVIEWS = [
  {
    author: 'Carlos M.',
    location: 'Suffern, NY',
    text: 'Torsion spring snapped and the door was completely stuck. Ben arrived in under an hour, diagnosed the problem immediately, and had it fixed in 90 minutes. He replaced both springs so the other one wouldn\'t fail soon after — honest advice, fair price.',
    timeAgo: '4 months ago',
  },
  {
    author: 'Linda R.',
    location: 'Nanuet, NY',
    text: 'Called on a Saturday evening after my opener died. Ben came out the same night and had a new LiftMaster installed before 9pm. Rockland County is lucky to have a tech this responsive. Will use Smart Garage Doors for everything going forward.',
    timeAgo: '2 months ago',
  },
  {
    author: 'David F.',
    location: 'Spring Valley, NY',
    text: 'Door came off the track during a busy Monday morning. They picked up immediately, sent Ben within 45 minutes, and he had the door back on track and fully operational before I had to leave for work. Incredible response time for Rockland County.',
    timeAgo: '6 weeks ago',
  },
];

const ROCKLAND_TOWNS = [
  'Suffern', 'Nanuet', 'Spring Valley', 'New City', 'Pearl River',
  'Nyack', 'Monsey', 'Haverstraw', 'Congers', 'West Nyack',
  'Tappan', 'Orangeburg', 'Chestnut Ridge', 'Mahwah NJ',
];

const FAQS = [
  {
    q: 'How quickly can you respond to garage door emergencies in Suffern?',
    a: 'Our Suffern-based technician Ben responds to emergency calls throughout Rockland County — we answer 24/7, including nights, weekends, and holidays. Call us and we\'ll give you an honest availability estimate based on current conditions.',
  },
  {
    q: 'Is the Suffern technician local to Rockland County?',
    a: 'Yes. Ben operates out of our Suffern dispatch hub at 31 Deerwood Road. He serves all of Rockland County and nearby areas including Mahwah NJ and parts of Orange County — no long wait for a tech coming from NYC.',
  },
  {
    q: 'What does a garage door spring replacement cost in Suffern NY?',
    a: 'Spring replacement in the Suffern area typically runs $150–$350 depending on spring type (torsion vs. extension) and whether you replace one or both. We always give a firm quote before starting — no surprise charges.',
  },
  {
    q: 'Do you work on older garage doors common in Rockland County homes?',
    a: 'Absolutely. Many Rockland County homes have older one-piece, two-car, or wood doors. Ben is experienced with all door types and can source parts for older systems or recommend a modern replacement when repair isn\'t cost-effective.',
  },
  {
    q: 'Can you replace my garage door opener with a smart/WiFi model?',
    a: 'Yes. We install all major smart opener brands including LiftMaster 87504, Chamberlain B4505T, and Genie models. These work with your phone, Alexa, and Google Home. Installation usually takes under 2 hours.',
  },
  {
    q: 'Do you serve the Monsey and Spring Valley areas?',
    a: 'Yes — Monsey, Spring Valley, New City, Nanuet, Pearl River, and all surrounding Rockland County communities are part of our regular service area from the Suffern hub.',
  },
];

export default function SuffernNY() {
  useEffect(() => {
    const metas: HTMLMetaElement[] = [];

    const addMeta = (name: string, content: string) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const el = document.createElement('meta');
        el.setAttribute('name', name);
        el.setAttribute('content', content);
        document.head.appendChild(el);
        metas.push(el);
      }
    };

    addMeta('geo.position', '41.1148;-74.1496');
    addMeta('geo.region', 'US-NY');
    addMeta('geo.placename', 'Suffern, New York');

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Smart Garage Doors - Suffern / Rockland County',
        description: 'Professional garage door repair and installation serving Suffern, NY and all of Rockland County. Same-day and 24/7 emergency service. Local technician Ben based in Suffern.',
        url: buildCanonical('/suffern-ny'),
        telephone: SUFFERN_PHONE,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '31 Deerwood Road',
          addressLocality: 'Suffern',
          addressRegion: 'NY',
          postalCode: '10901',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '41.1148',
          longitude: '-74.1496',
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: BUSINESS_INFO.aggregateRating.ratingValue,
          reviewCount: BUSINESS_INFO.aggregateRating.reviewCount,
          bestRating: '5',
        },
        areaServed: ROCKLAND_TOWNS.map(t => ({ '@type': 'City', name: t })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Garage Door Services in Rockland County NY',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Garage Door Repair Suffern NY' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garage Door Spring Replacement Rockland County' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garage Door Opener Installation Suffern NY' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garage Door Installation Rockland County NY' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Off-Track Garage Door Repair Suffern NY' } },
          ],
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ]);
    document.head.appendChild(script);

    return () => {
      metas.forEach(el => { if (document.head.contains(el)) document.head.removeChild(el); });
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <DynamicMetaTags
        title="Garage Door Repair Suffern NY & Rockland County | Smart Garage Doors"
        description="Garage door repair & installation in Suffern, NY and all of Rockland County. Local tech Ben based in Suffern — arrives in 45–75 min. 5.0★ rated. Call 24/7: (914) 557-6816."
        keywords="garage door repair Suffern NY, garage door Rockland County, spring replacement Suffern, garage door installation Nanuet, emergency garage door Monsey, garage door repair Spring Valley NY"
        canonical={buildCanonical('/suffern-ny')}
      />
      <Header />
      <Breadcrumbs />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url('https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/72cf9dc6-b05d-489e-29d5-16ea0a77d200/hero')` }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-400/40 rounded-full px-4 py-1.5 text-orange-300 text-sm font-medium mb-6">
            <i className="ri-map-pin-line mr-2" />
            Local tech in Suffern — serving all of Rockland County
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            Garage Door Repair<br />
            <span className="text-orange-400">Suffern NY & Rockland County</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Same-day and 24/7 emergency service. Local technician based in Suffern — no NYC wait times. Call for availability.
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300 mb-10">
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-400">★★★★★</span>
              <strong className="text-white">5.0</strong> ({BUSINESS_INFO.aggregateRating.reviewCount} reviews)
            </span>
            <span className="flex items-center gap-1.5"><i className="ri-time-line text-orange-400" /> 24/7 Emergency</span>
            <span className="flex items-center gap-1.5"><i className="ri-calendar-check-line text-orange-400" /> Same-Day Available</span>
            <span className="flex items-center gap-1.5"><i className="ri-shield-check-line text-orange-400" /> Licensed & Insured</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SUFFERN_PHONE_E164}`}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors whitespace-nowrap shadow-lg"
            >
              <i className="ri-phone-line mr-2" />
              Call {SUFFERN_PHONE}
            </a>
            <a
              href="/book-now/"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap"
            >
              Book Online
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Local Matters ── */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-orange-500 mb-1">45–75 min</div>
              <div className="text-gray-600 text-sm font-medium">Average arrival time in Rockland County</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-orange-500 mb-1">5.0 ★</div>
              <div className="text-gray-600 text-sm font-medium">{BUSINESS_INFO.aggregateRating.reviewCount} verified Google reviews</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-orange-500 mb-1">24/7</div>
              <div className="text-gray-600 text-sm font-medium">Emergency repairs, nights & weekends</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Garage Door Services in Suffern & Rockland County
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every job is done by a licensed, insured technician — not a subcontractor. Parts and labor are warrantied.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'ri-alarm-warning-line',
                title: 'Emergency Repair',
                desc: '24/7 response for broken springs, snapped cables, door off-track, or anything that leaves you stuck in or out. Ben answers the phone — not a call center.',
              },
              {
                icon: 'ri-settings-3-line',
                title: 'Spring Replacement',
                desc: 'Torsion and extension spring replacement. We always replace both springs at once so you\'re not back in a month with the second one gone.',
              },
              {
                icon: 'ri-remote-control-line',
                title: 'Opener Repair & Installation',
                desc: 'All brands serviced: LiftMaster, Chamberlain, Genie, Craftsman. Smart WiFi openers installed with app setup included.',
              },
              {
                icon: 'ri-home-gear-line',
                title: 'New Door Installation',
                desc: 'Full door replacement or new installation for Rockland County homes. Steel, carriage-style, wood — we help you choose and install it right.',
              },
              {
                icon: 'ri-tools-line',
                title: 'Cable & Track Repair',
                desc: 'Frayed cables and bent or misaligned tracks are an injury risk. We fix them the same visit — fast and safe.',
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Tune-Up & Maintenance',
                desc: 'Annual tune-ups extend door life and prevent costly emergency calls. Lubrication, balance check, safety reversal test included.',
              },
            ].map(s => (
              <div key={s.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${s.icon} text-2xl text-white`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">What Rockland County Customers Say</h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="font-semibold text-gray-900">5.0</span>
              <span>·</span>
              <span>{BUSINESS_INFO.aggregateRating.reviewCount} reviews on Google</span>
              <a
                href={BUSINESS_INFO.socialMedia.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline text-sm ml-1"
              >
                Read all reviews →
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SUFFERN_REVIEWS.map(r => (
              <div key={r.author} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">"{r.text}"</p>
                <div className="mt-auto">
                  <div className="font-semibold text-gray-900 text-sm">{r.author}</div>
                  <div className="text-gray-500 text-xs">{r.location} · {r.timeAgo}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={BUSINESS_INFO.socialMedia.googleWriteReview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-orange-400 hover:text-orange-600 px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              <i className="ri-star-line" /> Leave us a Google review
            </a>
          </div>
        </div>
      </section>

      {/* ── Local Area Info ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Your Local Rockland County Garage Door Team
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Our Suffern technician <strong>Ben</strong> lives and works in Rockland County — he's not driving an hour from the city to get to you. When your door breaks at 7am or 10pm, you're getting someone local who knows the area.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We serve every corner of Rockland County from our Suffern location, including Monsey, Spring Valley, Nanuet, Pearl River, Nyack, New City, and the surrounding communities. We also cover nearby Mahwah and Ramsey NJ.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Firm quote before we start — no surprise bills',
                  'All parts and labor warrantied',
                  'No subcontractors — your tech is our employee',
                  'Same tech for follow-ups if needed',
                  'Free estimates on new door installations',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <i className="ri-check-line text-orange-500 text-xl mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href={`tel:${SUFFERN_PHONE_E164}`}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                <i className="ri-phone-line" />
                Call {SUFFERN_PHONE}
              </a>
            </div>
            <div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="ri-map-pin-2-line text-orange-500" />
                  Rockland County Towns We Serve
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {ROCKLAND_TOWNS.map(town => (
                    <div key={town} className="flex items-center gap-2 text-gray-700 text-sm">
                      <i className="ri-arrow-right-s-line text-orange-400" />
                      {town}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <i className="ri-map-pin-line text-orange-500 text-xl mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Suffern Dispatch Hub</div>
                    <div className="text-gray-600 text-sm">31 Deerwood Road, Suffern, NY 10901</div>
                    <div className="text-gray-600 text-sm mt-1">Technician: <strong>Ben</strong></div>
                    <a
                      href={BUSINESS_INFO.socialMedia.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline text-sm mt-1 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Garage Door FAQ — Suffern & Rockland County
            </h2>
            <p className="text-gray-600">Common questions from Rockland County homeowners</p>
          </div>
          <div className="space-y-4">
            {FAQS.map(faq => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2 text-base">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Garage Door Tech in Rockland County?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ben is local to Suffern and ready to help — same day and 24/7 emergency available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SUFFERN_PHONE_E164}`}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold text-xl transition-colors whitespace-nowrap shadow-lg"
            >
              <i className="ri-phone-line mr-2" />
              {SUFFERN_PHONE}
            </a>
            <a
              href="/book-now/"
              className="border-2 border-gray-500 text-white hover:border-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap"
            >
              Schedule Online
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Licensed · Insured · Warrantied Work · No Surprise Charges
          </p>
        </div>
      </section>

      <NearbyAreasSection currentPath="/suffern-ny/" cityName="Suffern" />
      <ServiceLinks
        title="All Garage Door Services — Suffern & Rockland County"
        showDescription={true}
        locationPath="/suffern-ny/"
      />
      <Footer />
    </div>
  );
}
