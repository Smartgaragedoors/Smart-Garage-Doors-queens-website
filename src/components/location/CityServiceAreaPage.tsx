import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import FAQSchema from '../../components/seo/FAQSchema';
import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';
import ReviewSchema from '../../components/seo/ReviewSchema';
import ServiceLinks from '../../components/seo/ServiceLinks';
import NearbyAreasSection from '../../components/seo/NearbyAreasSection';
import BookingCTABar from '../../components/conversion/BookingCTABar';
import type { Location } from '../../config/locations';
import { BUSINESS_INFO } from '../../config/business-info';
import { buildCanonical } from '../../config/canonical';

interface CityServiceAreaPageProps {
  location: Location;
}

export default function CityServiceAreaPage({ location }: CityServiceAreaPageProps) {
  const canonicalUrl = buildCanonical(`/${location.slug}`);
  const countyLabel = location.county ? `${location.county}, ${location.stateAbbr}` : `${location.city}, ${location.stateAbbr}`;
  const nearbyAreas = location.nearbyAreas?.slice(0, 4) || [];
  const neighborhoods = location.neighborhoods?.slice(0, 6) || [];

  const commonIssues = [
    `Garage door won't open or close properly in ${location.city}`,
    'Broken or worn garage door springs requiring replacement',
    'Garage door opener malfunction or remote control issues',
    'Noisy garage door operation or track alignment problems',
    'Weather-related damage affecting door performance',
  ];

  const serviceChecklist = [
    'Comprehensive inspection of all door components',
    'Safety feature testing and adjustment',
    'Lubrication of moving parts',
    'Track and hardware alignment',
    'Opener programming and sensor calibration',
    'Detailed service report with recommendations',
  ];

  const faqsForSchema = location.faqs?.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  })) || [];

  const metaDescription =
    location.serviceAreaText ||
    `Professional garage door repair and installation services in ${location.city}, ${location.stateAbbr}. Smartest Garage Doors offers same-day service, emergency repairs, and expert installation throughout ${location.city} and surrounding areas.`;

  const localReasons = [
    `Fast dispatch coverage across ${countyLabel}`,
    `Service for homeowners, property managers, and local businesses in ${location.city}`,
    'Upfront estimates before work begins',
    'Repair-first recommendations when replacement is not necessary',
  ];

  const localProofPoints = [
    { label: 'Primary service area', value: countyLabel },
    {
      label: 'Nearby communities',
      value: nearbyAreas.length > 0 ? nearbyAreas.join(', ') : `Areas surrounding ${location.city}`,
    },
    {
      label: 'Emergency response',
      value: `Response time varies — call to confirm availability in ${location.city}`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        title={`Garage Door Repair in ${location.city}, ${location.stateAbbr} | Smartest Garage Doors`}
        description={metaDescription}
        keywords={`${location.city} ${location.stateAbbr} garage door repair, garage door installation ${location.city}, emergency garage door service ${location.city}`}
        canonical={canonicalUrl}
      />
      <LocalBusinessSchema
        locationName={`${location.city}, ${location.stateAbbr}`}
        serviceArea={location.city}
        customAddress={location.coordinates ? undefined : {
          addressLocality: location.city,
          addressRegion: location.stateAbbr,
        }}
      />
      <ReviewSchema
        aggregateRating={{
          ratingValue: BUSINESS_INFO.aggregateRating.ratingValue,
          reviewCount: BUSINESS_INFO.aggregateRating.reviewCount,
          bestRating: BUSINESS_INFO.aggregateRating.bestRating,
          worstRating: BUSINESS_INFO.aggregateRating.worstRating,
        }}
      />
      {faqsForSchema.length > 0 && <FAQSchema faqs={faqsForSchema} />}
      <Header />
      <Breadcrumbs />

      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {location.city} {location.stateAbbr} Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {location.serviceAreaText ||
                `Expert garage door repair and installation services throughout ${location.city}, ${location.state}. Smartest Garage Doors provides reliable, professional solutions for homes and businesses across ${location.city}.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-now/"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap inline-flex items-center justify-center"
              >
                <i className="ri-calendar-line mr-2"></i>
                Get Free Estimate
              </Link>
              <a
                href="tel:+19145576816"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center"
              >
                <i className="ri-phone-line mr-2"></i>
                Call Now — We Answer Live
              </a>
            </div>
          </div>
        </div>
      </section>

      <BookingCTABar
        title={`Ready for Garage Door Service in ${location.city}?`}
        subtitle={`Same-day appointments often available | Licensed and insured | Free estimate in ${location.city}, ${location.stateAbbr}`}
      />

      {location.faqs && location.faqs.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Quick Answers About {location.city} Garage Door Service
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {location.faqs.slice(0, 2).map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {localProofPoints.map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services in {location.city}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {location.uniqueAngle ||
                `Smartest Garage Doors provides professional garage door repair and installation throughout ${location.city}, ${location.stateAbbr}. Our technicians serve ${location.city}${location.county ? ` and ${location.county}` : ' and surrounding areas'} with same-day service, emergency repairs, and expert installation.`}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Whether you need <a href="/garage-door-repair/" className="text-blue-600 hover:text-blue-700 font-medium">garage door repair</a>, <a href="/garage-door-installation/" className="text-blue-600 hover:text-blue-700 font-medium">new door installation</a>, or <a href="/emergency-garage-door-repair/" className="text-blue-600 hover:text-blue-700 font-medium">24/7 emergency service</a>, our licensed technicians provide fast, reliable solutions for {location.city} homeowners and businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Customers in {location.city} Choose Smartest Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local homeowners and businesses in {location.city} count on us for honest estimates, same-day availability, and technicians who know the area. Here is what sets us apart.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {localReasons.map((reason) => (
              <div key={reason} className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <div className="flex items-start gap-3">
                  <i className="ri-check-double-line text-blue-700 text-2xl mt-0.5"></i>
                  <p className="text-gray-700 text-lg">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Garage Door Issues in {location.city}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our technicians frequently address these garage door problems for {location.city} homeowners:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <i className="ri-checkbox-circle-line text-green-600 text-2xl mr-3 mt-1"></i>
                  <p className="text-gray-700">{issue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {(nearbyAreas.length > 0 || neighborhoods.length > 0) && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              {nearbyAreas.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Nearby Communities We Reach from {location.city}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    We regularly schedule garage door repair and installation work in nearby communities around {location.city}, which helps us keep response times practical for urgent calls.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {nearbyAreas.map((area) => (
                      <span key={area} className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {neighborhoods.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Neighborhood Focus in {location.city}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    We tailor repair recommendations, scheduling, and replacement options around the homes and properties we commonly see in these parts of {location.city}.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {neighborhoods.map((neighborhood) => (
                      <div key={neighborhood} className="rounded-xl bg-white px-4 py-3 border border-slate-200 text-slate-800 font-medium">
                        {neighborhood}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Who We Help in {location.city}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              We serve homeowners and businesses throughout {location.city}, {location.stateAbbr}.
              Whether you need emergency garage door repair, routine maintenance, or a complete door installation,
              our licensed technicians provide professional service tailored to your needs. We work with all types
              of properties including single-family homes, multi-unit buildings, and commercial facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Comprehensive Service Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every service call includes a thorough inspection and professional service:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceChecklist.map((item, index) => (
              <div key={index} className="flex items-start">
                <i className="ri-check-line text-green-600 text-xl mr-3 mt-1"></i>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Compare Services for {location.city}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              If you are comparing providers, these are usually the factors that matter most for garage door work in {location.city}.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-xl bg-blue-50 border border-blue-100 p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What to look for</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>Licensed and insured technicians working in {location.stateAbbr}</li>
                  <li>Clear estimates before repair or installation starts</li>
                  <li>Availability for urgent spring, cable, or opener failures</li>
                  <li>Experience with both residential and commercial properties</li>
                </ul>
              </div>
              <div className="rounded-xl bg-orange-50 border border-orange-100 p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How we help in {location.city}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>Same-day scheduling whenever parts and access allow</li>
                  <li>Repair-first approach for cost-conscious homeowners</li>
                  <li>Service coverage that extends through {countyLabel}</li>
                  <li>Online booking plus direct phone support for urgent jobs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Transparent Pricing for {location.city} Service
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                We believe in upfront, honest pricing for all {location.city} garage door services.
                Every service call begins with a free estimate, so you know exactly what to expect before any work begins.
              </p>
              <p className="mb-4">
                Pricing varies based on the type of service needed, parts required, and door size.
                Common factors include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Type of repair such as spring replacement, opener repair, or track alignment</li>
                <li>Door size and weight, including single-car versus double-car doors</li>
                <li>Parts needed, with quality replacement components and warranties</li>
                <li>Complexity of the installation or repair</li>
              </ul>
              <p className="mt-4">
                We provide detailed estimates with no hidden fees. Call us at (914) 557-6816 for a free consultation and transparent pricing for your {location.city} garage door needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            How to Book Service in {location.city}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Booking garage door service in {location.city} is simple:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Call us:</strong> Dial (914) 557-6816 to speak with our team directly. We are available 24/7 for emergencies.</li>
              <li><strong>Schedule online:</strong> Use our <Link to="/book-now/" className="text-blue-600 hover:text-blue-700">online booking form</Link> to request service at your preferred time.</li>
              <li><strong>Describe your issue:</strong> Let us know what is wrong with your garage door so we can prepare the right tools and parts.</li>
              <li><strong>Get an estimate:</strong> Our technician will provide a free, detailed estimate before starting any work.</li>
              <li><strong>Service completion:</strong> We will complete the repair or installation and test everything to ensure it works properly.</li>
            </ol>
            <p className="mt-6">
              For emergency situations in {location.city}, call us immediately at (914) 557-6816. We prioritize urgent repairs and dispatch the nearest available technician — response times vary based on technician availability and current location.
            </p>
          </div>
        </div>
      </section>

      {location.faqs && location.faqs.length > 2 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {location.faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Local Pages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore nearby coverage pages and our full service-area directory if you are comparing options across the wider tri-state region.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/service-areas/" className="rounded-xl border border-gray-200 bg-gray-50 p-5 hover:bg-white hover:shadow-sm transition-all">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Directory</p>
              <p className="mt-2 text-lg font-semibold text-gray-900">Browse all service areas</p>
            </Link>
            <Link to="/garage-door-repair/" className="rounded-xl border border-gray-200 bg-gray-50 p-5 hover:bg-white hover:shadow-sm transition-all">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Core service</p>
              <p className="mt-2 text-lg font-semibold text-gray-900">Garage door repair overview</p>
            </Link>
            <Link to="/book-now/" className="rounded-xl border border-gray-200 bg-gray-50 p-5 hover:bg-white hover:shadow-sm transition-all">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Conversion</p>
              <p className="mt-2 text-lg font-semibold text-gray-900">Request service online</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Professional Garage Door Service in {location.city}?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Same-day appointments often available — call to confirm. Get a free estimate before any work begins. Licensed and insured throughout {location.city}, {location.stateAbbr}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-now/"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap inline-flex items-center justify-center"
            >
              <i className="ri-calendar-line mr-2"></i>
              Get Free Estimate
            </Link>
            <a
              href="tel:+19145576816"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center"
            >
              <i className="ri-phone-line mr-2"></i>
              Call Now — We Answer Live
            </a>
          </div>
        </div>
      </section>

      <NearbyAreasSection currentPath={`/${location.slug}/`} cityName={location.city} />
      <ServiceLinks locationPath={`/${location.slug}/`} />
      <Footer />
    </div>
  );
}
