import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import FAQSchema from '../../components/seo/FAQSchema';
import { buildCanonical } from '../../config/canonical';
import { getAllLocations, getLocationsByState } from '../../config/locations';

// Organize locations by state
const serviceAreasByState = {
  'New York': getLocationsByState('NY').map(loc => ({
    name: loc.city,
    href: `/${loc.slug}/`,
    county: loc.county || '',
  })),
  'Connecticut': getLocationsByState('CT').map(loc => ({
    name: loc.city,
    href: `/${loc.slug}/`,
    county: loc.county || '',
  })),
  'New Jersey': getLocationsByState('NJ').map(loc => ({
    name: loc.city,
    href: `/${loc.slug}/`,
    county: loc.county || '',
  })),
};

const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We provide professional garage door repair and installation services throughout New York, New Jersey, and Connecticut. Our service area includes major cities and counties across the tri-state region, from Brooklyn and Queens in New York to Stamford and Greenwich in Connecticut, and Bergen County in New Jersey. We offer same-day service and 24/7 emergency repairs across all our service areas.',
  },
  {
    question: 'How quickly can you respond to service requests?',
    answer: 'Response times vary by location and technician availability. For most non-emergency repairs, same-day service is available. For emergency situations, we dispatch the nearest available technician — call us for an honest estimate. We have multiple service locations across NY, NJ, and CT.',
  },
  {
    question: 'Do you service all types of garage doors?',
    answer: 'Yes, we service and install all major garage door brands including Clopay, Wayne Dalton, Amarr, Raynor, CHI, LiftMaster, Chamberlain, Genie, Craftsman, and more. Our technicians are trained on residential and commercial garage door systems, including sectional doors, roll-up doors, and custom installations.',
  },
  {
    question: 'What services do you offer in each area?',
    answer: 'We provide comprehensive garage door services including emergency repairs, spring replacement, opener repair and installation, cable and roller replacement, track alignment, door installation, preventive maintenance, and smart technology integration. All services are available across our entire tri-state service area.',
  },
  {
    question: 'Are your technicians licensed and insured?',
    answer: 'Yes, all our technicians are fully licensed and insured. We maintain proper licensing in New York, New Jersey, and Connecticut, and carry comprehensive liability insurance. This ensures your protection and peace of mind for all service work performed.',
  },
  {
    question: 'How do I schedule service in my area?',
    answer: 'You can schedule service by calling (914) 557-6816, using our online booking form at /book-now/, or contacting us through our website. We offer flexible scheduling including same-day appointments and 24/7 emergency service. Our team will confirm your location and provide an estimated arrival time.',
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        title="Service Areas | Garage Door Repair NY NJ CT | Smartest Garage Doors"
        description="Professional garage door services throughout New York, New Jersey, and Connecticut. Serving Brooklyn, Queens, Stamford, Greenwich, Bergen County, and more. Same-day service and 24/7 emergency repairs available."
        keywords="garage door service areas, NY garage door repair, NJ garage door repair, CT garage door repair, tri-state garage door service"
        canonical={buildCanonical('/service-areas')}
      />
      <Header />
      <Breadcrumbs />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Service Areas
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional garage door repair and installation services throughout New York, New Jersey, and Connecticut. 
              Fast, reliable service across the tri-state area.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Garage Door Services Across the Tri-State Area
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smartest Garage Doors provides professional garage door repair, installation, and maintenance services 
              throughout New York, New Jersey, and Connecticut. With multiple service locations and experienced technicians, 
              we deliver fast, reliable service to homeowners and businesses across our entire coverage area.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service</h3>
              <p className="text-gray-600">
                Fast response times across all service areas. Most repairs completed the same day you call.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Available around the clock for urgent garage door issues throughout NY, NJ, and CT.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed technicians with comprehensive insurance coverage in all service areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas by State */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Service Coverage Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click on any location below to learn more about our services in that area.
            </p>
          </div>

          {/* New York */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="ri-map-pin-fill text-blue-600 mr-2"></i>
              New York
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceAreasByState['New York'].map((area, index) => (
                <Link
                  key={index}
                  to={area.href}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-500 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {area.name}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{area.county}</p>
                    </div>
                    <i className="ri-arrow-right-line text-gray-400 group-hover:text-blue-600 transition-colors"></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Connecticut */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="ri-map-pin-fill text-green-600 mr-2"></i>
              Connecticut
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceAreasByState['Connecticut'].map((area, index) => (
                <Link
                  key={index}
                  to={area.href}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-green-500 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        {area.name}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{area.county}</p>
                    </div>
                    <i className="ri-arrow-right-line text-gray-400 group-hover:text-green-600 transition-colors"></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* New Jersey */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="ri-map-pin-fill text-orange-600 mr-2"></i>
              New Jersey
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceAreasByState['New Jersey'].map((area, index) => (
                <Link
                  key={index}
                  to={area.href}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-orange-500 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {area.name}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{area.county}</p>
                    </div>
                    <i className="ri-arrow-right-line text-gray-400 group-hover:text-orange-600 transition-colors"></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Garage Door Service in Your Area?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for fast, professional service across NY, NJ, and CT.
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
              Schedule Online
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
