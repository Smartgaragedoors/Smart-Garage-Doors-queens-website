import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import FAQSchema from '../../components/seo/FAQSchema';
import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';
import ServiceLinks from '../../components/seo/ServiceLinks';
import { Location } from '../../config/locations';
import { BUSINESS_INFO } from '../../config/business-info';
import { buildCanonical } from '../../config/canonical';

interface CityServiceAreaPageProps {
  location: Location;
}

export default function CityServiceAreaPage({ location }: CityServiceAreaPageProps) {
  const canonicalUrl = buildCanonical(`/${location.slug}`);

  // Common issues (varied per city but generic enough)
  const commonIssues = [
    `Garage door won't open or close properly in ${location.city}`,
    `Broken or worn garage door springs requiring replacement`,
    `Garage door opener malfunction or remote control issues`,
    `Noisy garage door operation or track alignment problems`,
    `Weather-related damage affecting door performance`,
  ];

  // Service checklist (same across pages - acceptable per requirements)
  const serviceChecklist = [
    'Comprehensive inspection of all door components',
    'Safety feature testing and adjustment',
    'Lubrication of moving parts',
    'Track and hardware alignment',
    'Opener programming and sensor calibration',
    'Detailed service report with recommendations',
  ];

  // Convert location FAQs to FAQSchema format
  const faqsForSchema = location.faqs?.map(faq => ({
    question: faq.q,
    answer: faq.a,
  })) || [];

  // Generate meta description
  const metaDescription = location.serviceAreaText || 
    `Professional garage door repair and installation services in ${location.city}, ${location.stateAbbr}. Smartest Garage Doors offers same-day service, emergency repairs, and expert installation throughout ${location.city} and surrounding areas.`;

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
      {faqsForSchema.length > 0 && <FAQSchema faqs={faqsForSchema} />}
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {location.city} {location.stateAbbr} Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {location.serviceAreaText || `Expert garage door repair and installation services throughout ${location.city}, ${location.state}. Smartest Garage Doors provides reliable, professional solutions for all ${location.city} neighborhoods.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19145576816"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center"
              >
                <i className="ri-phone-line mr-2"></i>
                Call Now: (914) 557-6816
              </a>
              <Link
                to="/book-now/"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap inline-flex items-center justify-center"
              >
                <i className="ri-calendar-line mr-2"></i>
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answers FAQ (Above the fold for LLMs) */}
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

      {/* City-Specific Intro (uniqueAngle or fallback for stronger uniqueness signals) */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services in {location.city}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {location.uniqueAngle || `Smartest Garage Doors provides professional garage door repair and installation throughout ${location.city}, ${location.stateAbbr}. Our technicians serve ${location.city}${location.county ? ` and ${location.county}` : ' and surrounding areas'} with same-day service, emergency repairs, and expert installation.`}
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
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

      {/* Neighborhoods Section */}
      {location.neighborhoods && location.neighborhoods.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Neighborhoods We Serve in {location.city}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Smartest Garage Doors provides comprehensive garage door services throughout {location.city}:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {location.neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <i className="ri-map-pin-fill text-blue-600 text-xl mb-2"></i>
                  <p className="text-gray-900 font-medium">{neighborhood}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who We Help Section (for LLMs) */}
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

      {/* Service Checklist */}
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

      {/* Pricing Transparency */}
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
                <li>Type of repair (spring replacement, opener repair, track alignment, etc.)</li>
                <li>Door size and weight (single-car vs. double-car)</li>
                <li>Parts needed (we use quality parts with warranties)</li>
                <li>Complexity of the installation or repair</li>
              </ul>
              <p className="mt-4">
                We provide detailed estimates with no hidden fees. Call us at (914) 557-6816 for a free 
                consultation and transparent pricing for your {location.city} garage door needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Book Section (for LLMs) */}
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
              <li><strong>Call us:</strong> Dial (914) 557-6816 to speak with our team directly. We're available 24/7 for emergencies.</li>
              <li><strong>Schedule online:</strong> Use our <Link to="/book-now/" className="text-blue-600 hover:text-blue-700">online booking form</Link> to request service at your preferred time.</li>
              <li><strong>Describe your issue:</strong> Let us know what's wrong with your garage door so we can prepare the right tools and parts.</li>
              <li><strong>Get an estimate:</strong> Our technician will provide a free, detailed estimate before starting any work.</li>
              <li><strong>Service completion:</strong> We'll complete the repair or installation and test everything to ensure it works perfectly.</li>
            </ol>
            <p className="mt-6">
              For emergency situations in {location.city}, call us immediately at (914) 557-6816. 
              We prioritize urgent repairs and can often arrive within 60-90 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Full FAQ Section */}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Professional Garage Door Service in {location.city}?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Same-day service available. Contact Smartest Garage Doors for fast, reliable service throughout {location.city}, {location.stateAbbr}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19145576816"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center"
            >
              <i className="ri-phone-line mr-2"></i>
              Call: (914) 557-6816
            </a>
            <Link
              to="/book-now/"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap inline-flex items-center justify-center"
            >
              <i className="ri-calendar-line mr-2"></i>
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <ServiceLinks />
      <Footer />
    </div>
  );
}
