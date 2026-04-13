import { useEffect } from 'react';
import { buildCanonical } from '../../../config/canonical';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import ServiceLinks from '../../../components/seo/ServiceLinks';
import NearbyAreasSection from '../../../components/seo/NearbyAreasSection';

const FlushingNY = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Smart Garage Doors - Flushing NY",
      "description": "Professional garage door repair and installation services in Flushing, Queens, New York",
      "url": buildCanonical('/flushing-ny'),
      "telephone": "(914) 557-6816",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "141-24 70th Ave",
        "addressLocality": "Flushing",
        "addressRegion": "NY",
        "postalCode": "11367",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.7670",
        "longitude": "-73.8330"
      },
      "serviceArea": {
        "@type": "Place",
        "name": "Flushing, Queens, New York"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "392",
        "bestRating": "5"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Flushing Garage Door Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Garage Door Repair Flushing NY",
              "description": "24/7 emergency garage door repair services in Flushing, Queens"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Garage Door Spring Replacement Flushing Queens",
              "description": "Same-day torsion and extension spring replacement in Flushing"
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        title="Garage Door Repair Flushing NY | Smart Garage Doors | Same-Day 24/7"
        description="Garage door repair in Flushing, Queens NY. 5.0★, 392 reviews. Same-day service, emergency repairs, spring replacement & installation. Local technicians — call (914) 557-6816."
        keywords="garage door repair Flushing NY, Flushing Queens garage door, emergency garage door service Flushing, garage door spring replacement Flushing"
        canonical={buildCanonical('/flushing-ny')}
      />
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 w-full">
              Garage Door Repair in Flushing, Queens NY
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
              Local garage door technicians serving Flushing and surrounding Queens neighborhoods.
              Broken spring, stuck door, or opener failure — we respond in 60 minutes or less.
            </p>
            <p className="text-lg mb-8 text-blue-200 font-semibold max-w-2xl mx-auto">
              5.0★ (392 Google Reviews) • Same-Day Service • Licensed &amp; Insured NY • 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <a
                href="tel:+19145576816"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap inline-flex items-center justify-center"
              >
                <i className="ri-phone-fill mr-2"></i>
                Call Now: (914) 557-6816
              </a>
              <a
                href="/book-now/"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap inline-block text-center"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Context Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services in Flushing, Queens
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Smart Garage Doors is based in Flushing — our primary service address is on 70th Avenue,
              right in the heart of the neighborhood. That means when you call for emergency service,
              we're often the closest team available. We know Flushing's streets, its mix of single-family
              homes, two-family houses, and larger residential buildings, and we respond faster here than
              any company dispatching from outside the area.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Whether you need a <a href="/garage-door-repair/" className="text-blue-600 hover:text-blue-700 font-medium">broken spring replaced</a>,
              an <a href="/opener-repair-installation/" className="text-blue-600 hover:text-blue-700 font-medium">opener repaired or upgraded</a>,
              or a <a href="/garage-door-installation/" className="text-blue-600 hover:text-blue-700 font-medium">full door installation</a>,
              our licensed Flushing technicians handle it the same day in most cases.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flushing &amp; Surrounding Neighborhoods We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Flushing location lets us reach these Queens neighborhoods especially quickly:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Downtown Flushing</h3>
              <p className="text-gray-600">
                Garage door repair and opener service for Flushing's dense residential and
                mixed-use properties. We navigate the busy downtown streets efficiently and
                arrive on time for both emergency and scheduled service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Murray Hill &amp; Queensboro Hill</h3>
              <p className="text-gray-600">
                Expert garage door services for Murray Hill and Queensboro Hill's residential
                neighborhoods. Broken springs, worn cables, and off-track doors are our most
                common calls in this area — typically resolved same day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Auburndale &amp; Bayside Hills</h3>
              <p className="text-gray-600">
                Premium garage door installations and repairs for Auburndale and Bayside Hills
                homeowners. Our technicians are experienced with the larger single-family homes
                and double-car garages common in these neighborhoods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">College Point</h3>
              <p className="text-gray-600">
                Fast garage door service for College Point residents. Our technicians reach
                College Point without the long wait times you'd get from out-of-area companies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fresh Meadows &amp; Utopia</h3>
              <p className="text-gray-600">
                Reliable garage door repair for Fresh Meadows and Utopia homeowners.
                We service all major door brands and opener systems with transparent,
                upfront pricing and no hidden charges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Whitestone &amp; Beechhurst</h3>
              <p className="text-gray-600">
                Expert garage door services for Whitestone and Beechhurst's suburban-style
                waterfront homes. Custom door installations and full-service repairs with
                same-day availability most days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services Available in Flushing, NY
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Repair</h3>
              <p className="text-gray-600">
                24/7 emergency response throughout Flushing and Queens. Spring snapped, door
                won't open, cable off the drum — we fix it fast, any hour.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-settings-4-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring Replacement</h3>
              <p className="text-gray-600">
                Torsion and extension spring replacement done safely. We stock common spring
                sizes on our vehicles so most Flushing jobs are completed on the first visit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-remote-control-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opener Repair &amp; Upgrade</h3>
              <p className="text-gray-600">
                All major brands serviced. Smart WiFi opener upgrades with app control
                available for Flushing homeowners who want a modern, connected system.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cable &amp; Roller Repair</h3>
              <p className="text-gray-600">
                Snapped cables and worn rollers fixed quickly. Full hardware inspection
                included to catch anything else that might fail soon.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-door-open-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">New Door Installation</h3>
              <p className="text-gray-600">
                Complete garage door replacement for Flushing homes. Wide selection of
                styles, colors, and materials — insulated steel, carriage house, modern.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance Plans</h3>
              <p className="text-gray-600">
                Annual tune-ups to extend door life and prevent costly emergency calls.
                Includes lubrication, balance test, hardware tightening, and safety check.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flushing Garage Door Service FAQ
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Are you actually based in Flushing?
              </h3>
              <p className="text-gray-600">
                Yes. Our primary service address is 141-24 70th Ave, Flushing, NY 11367.
                Being local means faster response times, lower travel costs, and technicians
                who know Flushing's streets and building stock.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How quickly can you arrive for an emergency in Flushing?
              </h3>
              <p className="text-gray-600">
                Because we're based in Flushing, our typical emergency response time is
                30–60 minutes within the immediate Flushing area, and up to 60–90 minutes
                for surrounding neighborhoods like Whitestone, College Point, and Fresh Meadows.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer multilingual service in Flushing?
              </h3>
              <p className="text-gray-600">
                Yes. Flushing is one of the most diverse neighborhoods in New York, and our
                team reflects that. We can communicate in English and Mandarin Chinese for
                our Flushing customers — just let us know when you call.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's the typical cost for garage door repair in Flushing?
              </h3>
              <p className="text-gray-600">
                Most common repairs in Flushing run: spring replacement $200–$400, opener
                repair $150–$300, cable repair $100–$200, off-track repair $100–$180.
                We provide a free, written estimate before starting any work — no obligation.
                Call (914) 557-6816 to describe your issue and get a ballpark right away.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can you service garage doors in Flushing apartment buildings?
              </h3>
              <p className="text-gray-600">
                Yes. We regularly service garage doors in multi-unit buildings and larger
                complexes throughout Flushing. We coordinate with building management or
                supers as needed. Contact us with your building's access requirements and
                we'll plan accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Garage Door Problem in Flushing? We're Right Here.
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Local to Flushing, available 24/7. Call now for same-day service or get a
            free estimate online — technician dispatches in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19145576816"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap inline-flex items-center justify-center"
            >
              <i className="ri-phone-fill mr-2"></i>
              Call (914) 557-6816
            </a>
            <a
              href="/book-now/"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap inline-flex items-center justify-center"
            >
              <i className="ri-calendar-line mr-2"></i>
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      <NearbyAreasSection currentPath="/flushing-ny/" cityName="Flushing" />
      <ServiceLinks
        title="Garage Door Services in Flushing, Queens NY"
        showDescription={true}
        locationPath="/flushing-ny/"
      />
      <Footer />
    </div>
  );
};

export default FlushingNY;
