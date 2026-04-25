
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import FAQSchema from '../../components/seo/FAQSchema';
import RelatedServices from '../../components/seo/RelatedServices';
import ServiceAreaLinks from '../../components/seo/ServiceAreaLinks';
import BookingCTABar from '../../components/conversion/BookingCTABar';
import { useLocation } from '../../contexts/LocationContext';
import { BUSINESS_INFO } from '../../config/business-info';
import { buildCanonical } from '../../config/canonical';

export default function GarageDoorRepairPage() {
  const { location, locationName, isLoading } = useLocation();
  
  // Use generic regional language for Queens or when location isn't detected yet
  // For other cities, use the specific city name to feel local
  const displayLocation = (location?.city === 'Queens' || !location || isLoading) 
    ? 'your area' 
    : locationName;
  
  const displayRegion = (location?.city === 'Queens' || !location || isLoading)
    ? 'NY, NJ & CT'
    : `${locationName} and surrounding areas`;
  
  // Build service areas list based on detected location
  const serviceAreasList = location && location.city !== 'Queens'
    ? `New York (including ${location.city}, Queens, Brooklyn, Long Island, Westchester County), New Jersey (Bergen County), and Connecticut (Fairfield County)`
    : `New York (including Queens, Brooklyn, Long Island, Westchester County), New Jersey (Bergen County), and Connecticut (Fairfield County)`;
  
  const faqs = [
    {
      question: `How quickly can you repair my garage door in ${displayLocation}?`,
      answer: `We work to schedule service as quickly as possible — same-day appointments are often available depending on your location and technician availability. Call us to confirm current availability for ${displayRegion}. For urgent situations, let us know when you call and we will prioritize your job.`,
    },
    {
      question: 'What types of garage door repairs do you handle?',
      answer: 'We repair all types of garage door issues including broken springs, malfunctioning openers, damaged cables and rollers, bent tracks, broken panels, weatherstripping, and safety sensor problems. Our technicians are trained on all major garage door brands.',
    },
    {
      question: 'Are your technicians licensed and insured?',
      answer: 'Yes, all of our garage door repair technicians are fully licensed, insured, and bonded. We carry comprehensive liability insurance for your protection and peace of mind.',
    },
    {
      question: `How much does garage door repair cost in ${displayLocation}?`,
      answer: `Garage door repair costs depend on the specific issue, parts needed, door size, and condition of existing hardware. We provide a free on-site estimate before any work begins so you know the exact total cost — including parts and labor — before we start. Call us to describe the issue and we can give you a general idea of what to expect.`,
    },
    {
      question: 'Do you offer a warranty on repairs?',
      answer: 'Yes, all our garage door repairs come with a comprehensive warranty. Parts are typically covered for 1-2 years depending on the component, and labor is covered for 90 days to 1 year. We stand behind our workmanship.',
    },
    {
      question: 'Can you repair garage doors from all brands?',
      answer: 'Absolutely. We service and repair all major garage door brands including LiftMaster, Chamberlain, Genie, Craftsman, Wayne Dalton, Clopay, Amarr, Raynor, and more. Our technicians are trained on residential and commercial systems.',
    },
    {
      question: `What areas do you serve for garage door repair?`,
      answer: `We provide comprehensive garage door repair services throughout ${serviceAreasList}. With multiple service locations, we can quickly reach customers in Queens, Brooklyn, Long Island, Westchester County, Bergen County NJ, Fairfield County CT, and all surrounding communities within a 50-mile radius. No matter where you're located in our service area, we have local technicians ready to help.`,
    },
    {
      question: 'Do you provide emergency garage door repair services?',
      answer: `Yes, we offer 24/7 emergency garage door repair services throughout all our service areas. Whether your door is stuck open or closed, or there's a safety issue, we can dispatch a technician from the nearest location to quickly address urgent situations.`,
    },
    {
      question: 'Do you have multiple service locations?',
      answer: 'Yes, we operate from multiple service locations strategically positioned throughout our coverage area to provide fast, reliable service. This allows us to serve customers in Queens, Brooklyn, Long Island, Westchester County, New Jersey, and Connecticut with quick response times. Our network of technicians ensures we can reach you quickly, regardless of which area you\'re in.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags 
        title="Garage Door Repair NY NJ CT | 5.0★ 475 Reviews | Smartest Garage Doors"
        description="5.0★ rated, 475 reviews. Fast garage door repair across NY, NJ & CT. Spring replacement, opener repair, emergency service. Free estimate. Licensed & insured."
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <Breadcrumbs />
      
      {/* Schema.org structured data for Service Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Garage Door Repair Services",
            "description": "Professional garage door repair services in NY, NJ & CT. Fast response, licensed technicians, all brands.",
            "url": buildCanonical('/garage-door-repair'),
            "provider": {
              "@type": "LocalBusiness",
              "name": "Smart Garage Doors",
              "telephone": "+19145576816",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "141-24 70th Ave",
                "addressLocality": "Flushing",
                "addressRegion": "NY",
                "postalCode": "11367",
                "addressCountry": "US"
              }
            },
            "serviceType": "Garage Door Repair",
            "areaServed": [
              {
                "@type": "State",
                "name": "New York"
              },
              {
                "@type": "State", 
                "name": "New Jersey"
              },
              {
                "@type": "State",
                "name": "Connecticut"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Garage Door Repair Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Spring Replacement",
                    "description": "Professional garage door spring repair and replacement"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "200-400",
                    "priceCurrency": "USD",
                    "valueAddedTaxIncluded": false
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Opener Repair",
                    "description": "Garage door opener repair and installation"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "150-350",
                    "priceCurrency": "USD",
                    "valueAddedTaxIncluded": false
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cable & Roller Repair",
                    "description": "Cable and roller replacement services"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "150-400",
                    "priceCurrency": "USD",
                    "valueAddedTaxIncluded": false
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Garage Door Repair",
                    "description": "24/7 emergency garage door repair services"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "200-500",
                    "priceCurrency": "USD",
                    "valueAddedTaxIncluded": false
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "priceRange": "$$",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": buildCanonical('/garage-door-repair')
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://www.smartestgaragedoors.com/wp-content/uploads/2025/06/Ben-fixing-door-scaled.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-blue-600/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Garage Door Repair Services
              </h1>
              <p className="text-xl md:text-2xl mb-4">
                Expert garage door repair services across NY, NJ, and CT. Fast, reliable, and affordable solutions for all your garage door problems.
              </p>
              <p className="text-lg md:text-xl mb-8 text-blue-100 font-semibold">
                5.0★ rated by {BUSINESS_INFO.aggregateRating.reviewCount}+ homeowners • Fast response — call to confirm • Fully insured local technicians.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+19145576816" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-fill mr-2"></i>
                  Call: (914) 557-6816
                </a>
                <a 
                  href="/book-now/" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-calendar-line mr-2"></i>
                  Schedule Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingCTABar
        title="Ready to Schedule Your Repair?"
        subtitle="Fast response • Licensed & insured • 5-Star rated • Free estimate"
      />

      {/* Repair Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Repair Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We diagnose, repair, and restore your garage door with professional expertise and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Response</h3>
              <p className="text-gray-600">
                We prioritize urgent calls and dispatch the nearest available technician with all necessary tools and parts to diagnose your issue.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accurate Diagnosis</h3>
              <p className="text-gray-600">
                Comprehensive inspection to identify the root cause. We provide transparent, upfront pricing before any work begins.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Repair</h3>
              <p className="text-gray-600">
                Professional repair using quality parts. All work is backed by our warranty and tested to ensure proper operation.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need help with a specific repair? <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold">View all our services</a> or call us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transparent Garage Door Repair Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No surprises, no hidden fees. Upfront pricing for all garage door repair services across NY, NJ & CT.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Repairs</h3>
              <div className="text-3xl font-bold text-blue-600 mb-1">$150–$450</div>
              <p className="text-sm text-gray-500 mb-4">Typical total cost — parts & labor included</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                  <span>Cable replacement</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                  <span>Roller repair</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                  <span>Track alignment</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                  <span>Sensor adjustment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-orange-500 relative">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                MOST COMMON
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Spring Replacement</h3>
              <div className="text-3xl font-bold text-orange-600 mb-1">$200–$550</div>
              <p className="text-sm text-gray-500 mb-4">Typical total cost — parts & labor included</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                  <span>Torsion spring replacement</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                  <span>Extension spring replacement</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                  <span>Professional installation</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                  <span>Parts warranty included</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Opener Repair</h3>
              <div className="text-3xl font-bold text-green-600 mb-1">$150–$500</div>
              <p className="text-sm text-gray-500 mb-4">Typical total cost — parts & labor included</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                  <span>Motor repair & replacement</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                  <span>Chain/belt drive repair</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                  <span>Remote programming</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                  <span>WiFi connectivity setup</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-3">
              <i className="ri-information-line text-blue-500 text-xl flex-shrink-0 mt-0.5" aria-hidden="true"></i>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong className="text-gray-800">About these ranges:</strong> The figures above reflect typical total costs including parts and labor for standard jobs. Your actual cost depends on door size, spring type, parts required, and the overall condition of your hardware. We provide a <strong>free on-site estimate</strong> before starting any work — you will know the exact price before we touch anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About Garage Door Repair
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our garage door repair services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
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

      {/* Related Services */}
      <RelatedServices />

      {/* Service Area Links - Creates incoming internal links to location pages */}
      <ServiceAreaLinks 
        serviceType="repair"
        title="Garage Door Repair Services in Your Area"
        showDescription={true}
        maxLinks={10}
      />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Garage Door Repair? We're Here to Help!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let a broken garage door disrupt your day. Contact Smartest Garage Doors for fast, professional repair services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+19145576816" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-fill mr-2"></i>
              Call Now: (914) 557-6816
            </a>
                <a 
                  href="/book-now/" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-calendar-line mr-2"></i>
                  Schedule Online
                </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
