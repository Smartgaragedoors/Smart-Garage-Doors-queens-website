import { useEffect } from 'react';
import { buildCanonical } from '../../../config/canonical';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import ServiceLinks from '../../../components/seo/ServiceLinks';
import NearbyAreasSection from '../../../components/seo/NearbyAreasSection';

const BronxNY = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Smart Garage Doors - Bronx NY',
      description: 'Professional garage door repair and installation services in the Bronx, New York',
      url: buildCanonical('/bronx-ny'),
      telephone: '(914) 557-6816',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '141-24 70th Ave',
        addressLocality: 'Bronx',
        addressRegion: 'NY',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '40.8448',
        longitude: '-73.8648',
      },
      serviceArea: {
        '@type': 'City',
        name: 'Bronx',
        containedInPlace: {
          '@type': 'State',
          name: 'New York',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '392',
        bestRating: '5',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Bronx Garage Door Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Emergency Garage Door Repair Bronx NY',
              description: '24/7 emergency garage door repair services in the Bronx',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Garage Door Spring Replacement Bronx NY',
              description: 'Same-day torsion and extension spring replacement throughout the Bronx',
            },
          },
        ],
      },
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
        title="Bronx NY Garage Door Repair | Smart Garage Doors | 24/7 Emergency"
        description="Garage door repair in the Bronx, NY. 5.0 stars, 392 reviews. Fast service — call for availability. Emergency repairs, spring replacement & installation. Licensed and insured. Call (914) 557-6816."
        keywords="Bronx NY garage door repair, garage door spring replacement Bronx, emergency garage door service Bronx NY, garage door installation Bronx"
        canonical={buildCanonical('/bronx-ny')}
      />
      <Header />
      <Breadcrumbs />

      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 w-full">
              Bronx NY Garage Door Repair &amp; Installation
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
              Fast, reliable garage door repair and installation throughout the Bronx.
              24/7 emergency service — we dispatch based on technician availability.
            </p>
            <p className="text-lg mb-8 text-blue-200 font-semibold max-w-2xl mx-auto">
              5.0 star rated (392 Google Reviews) | Licensed &amp; Insured NY | Same-Day Service
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Service Throughout the Bronx
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors serves every Bronx neighborhood, from Riverdale to Co-op City,
              and dispatches quickly across the borough.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Riverdale &amp; Fieldston</h3>
              <p className="text-gray-600">
                Premium garage door repair and installation for Riverdale&apos;s single-family homes and
                luxury residences. We service all door styles and opener brands common to established properties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fordham &amp; Belmont</h3>
              <p className="text-gray-600">
                Fast garage door repair for Fordham and Belmont residents. Our technicians are familiar with
                the mixed residential stock in this area and respond quickly to emergency and scheduled calls.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Co-op City</h3>
              <p className="text-gray-600">
                Specialized garage door service for Co-op City&apos;s large residential complex. We work with
                building management and coordinate access efficiently to minimize disruption.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pelham Bay &amp; Throgs Neck</h3>
              <p className="text-gray-600">
                Reliable garage door repair and installation for Pelham Bay and Throgs Neck homeowners,
                with quick response times to eastern Bronx neighborhoods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Woodlawn &amp; Wakefield</h3>
              <p className="text-gray-600">
                Expert garage door services for Woodlawn and Wakefield&apos;s residential neighborhoods,
                including spring replacements, opener repairs, and full door installations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Morris Park &amp; Parkchester</h3>
              <p className="text-gray-600">
                Professional garage door repair for Morris Park and Parkchester residents, with same-day
                service available for most repairs and emergency support around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in the Bronx, NY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From a snapped spring at 6am to a full door replacement on the weekend, we cover
              everything garage door related in the Bronx.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Repair</h3>
              <p className="text-gray-600">
                Door stuck? Spring snapped? We dispatch to the Bronx around the clock — call us and we'll get the nearest available technician to you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-settings-4-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring Replacement</h3>
              <p className="text-gray-600">
                Torsion and extension spring replacement done safely by licensed technicians.
                We stock common spring sizes on our vehicles for same-visit repairs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-remote-control-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opener Repair &amp; Install</h3>
              <p className="text-gray-600">
                All major brands serviced, including LiftMaster, Chamberlain, Genie, and Craftsman.
                Smart opener upgrades with WiFi and app control are also available.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cable &amp; Roller Repair</h3>
              <p className="text-gray-600">
                Broken cables and worn rollers repaired fast. We use quality replacement parts and make
                sure the full system is balanced before leaving.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-door-open-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">New Door Installation</h3>
              <p className="text-gray-600">
                Full garage door replacement and new installation, with a wide selection of styles,
                materials, and insulation levels for Bronx residential properties.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance &amp; Tune-Up</h3>
              <p className="text-gray-600">
                Annual maintenance to extend door life and prevent breakdowns. Includes lubrication,
                balance checks, hardware inspection, and safety testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Bronx Homeowners Call Smart Garage Doors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Dispatch</h3>
              <p className="text-gray-600">
                We dispatch to all Bronx neighborhoods 24/7 — call us for current availability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.0 Star Google Rating</h3>
              <p className="text-gray-600">
                392 verified Google reviews built on showing up on time, doing clean work, and charging fair prices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed &amp; Insured</h3>
              <p className="text-gray-600">
                Fully licensed and insured in New York, with experienced field technicians on every job.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-money-dollar-circle-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upfront Pricing</h3>
              <p className="text-gray-600">
                Free estimate before any work begins, with no hidden fees and no surprise charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Compare to Other Bronx Garage Door Services
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="overflow-x-auto" style={{ scrollbarGutter: 'stable' }}>
              <table className="w-full">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Smart Garage Doors</th>
                    <th className="px-6 py-4 text-center font-semibold bg-gray-700">Typical Competitors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Response Time</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        <i className="ri-check-line mr-1"></i> 60 min or less
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">2-4 hours</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Same-Day Service</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        <i className="ri-check-line mr-1"></i> Available
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Limited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Bronx Coverage</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        <i className="ri-check-line mr-1"></i> All Neighborhoods
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Select Areas</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Google Rating</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        <i className="ri-star-fill text-yellow-400 mr-1"></i> 5.0 stars (392)
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Varies</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Upfront Pricing</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        <i className="ri-check-line mr-1"></i> Free Estimate First
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bronx Garage Door Service FAQ
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Which Bronx neighborhoods do you serve?
              </h3>
              <p className="text-gray-600">
                We serve all Bronx neighborhoods including Riverdale, Fieldston, Woodlawn, Wakefield,
                Co-op City, Pelham Bay, Throgs Neck, Morris Park, Parkchester, Belmont, Fordham,
                Mott Haven, South Bronx, Grand Concourse, Kingsbridge, Norwood, Eastchester, and beyond.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How fast can you respond to an emergency in the Bronx?
              </h3>
              <p className="text-gray-600">
                For emergency garage door calls in the Bronx, we dispatch from multiple service locations and know Bronx traffic patterns well. Response times vary based on technician availability and current location — call us and we'll give you an honest estimate.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you work on garage doors in Bronx apartment buildings?
              </h3>
              <p className="text-gray-600">
                Yes. We service garage doors in single-family homes, multi-unit buildings, and large
                residential complexes throughout the Bronx, including Co-op City and similar properties.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much does garage door repair cost in the Bronx?
              </h3>
              <p className="text-gray-600">
                Costs depend on the type of repair. Spring replacement typically runs $200-$400.
                Opener repair or replacement is $150-$350. Cable and roller repair is $100-$250.
                We provide a free, upfront estimate before starting any work.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Are you licensed and insured to work in the Bronx?
              </h3>
              <p className="text-gray-600">
                Yes. Smart Garage Doors is fully licensed and insured in New York State, and proof of
                insurance is available on request at the time of service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Garage Door Repair in the Bronx?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Call now or get a free estimate online. We dispatch to all Bronx neighborhoods 24/7 — call us and we'll get a technician to you as quickly as possible.
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
              Schedule Free Estimate
            </a>
          </div>
        </div>
      </section>

      <NearbyAreasSection currentPath="/bronx-ny/" cityName="Bronx" />
      <ServiceLinks
        title="Garage Door Services Available in the Bronx, NY"
        showDescription={true}
        locationPath="/bronx-ny/"
      />
      <Footer />
    </div>
  );
};

export default BronxNY;
