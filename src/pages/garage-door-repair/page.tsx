
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function GarageDoorRepairPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Schema.org structured data for Service Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Garage Door Repair Services",
            "description": "Professional garage door repair services in NY, NJ & CT. Same-day service, licensed technicians, all brands.",
            "url": `${import.meta.env.VITE_SITE_URL || "https://smartestgaragedoors.com"}/garage-door-repair/`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Smart Garage Doors",
              "telephone": "+19145576816",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "White Plains",
                "addressRegion": "NY",
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
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Opener Repair",
                    "description": "Garage door opener repair and installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cable & Roller Repair",
                    "description": "Cable and roller replacement services"
                  }
                }
              ]
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://smartestgaragedoors.com/wp-content/uploads/2025/06/Ben-fixing-door-scaled.jpg')`
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
              <p className="text-xl md:text-2xl mb-8">
                Expert garage door repair services across NY, NJ, and CT. Fast, reliable, and affordable solutions for all your garage door problems.
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
                  href="/book-now" 
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

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Repair Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From broken springs to malfunctioning openers, we handle all types of garage door repairs with precision and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-tools-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring Replacement</h3>
              <p className="text-gray-600 mb-4">
                Professional replacement of broken torsion and extension springs with high-quality parts.
              </p>
              <a href="/services/spring-replacement" className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-remote-control-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opener Repair</h3>
              <p className="text-gray-600 mb-4">
                Repair and installation of garage door openers from all major brands including LiftMaster and Chamberlain.
              </p>
              <a href="/services/opener-repair" className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-settings-3-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cable & Roller Repair</h3>
              <p className="text-gray-600 mb-4">
                Expert repair and replacement of cables, rollers, and other hardware components.
              </p>
              <a href="/services/cable-roller-repair" className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-alarm-warning-line text-red-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Repairs</h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency garage door repair services for urgent situations and safety concerns.
              </p>
              <a href="/services/emergency-repairs" className="text-red-600 font-medium hover:text-red-700 cursor-pointer">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-hammer-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Repair</h3>
              <p className="text-gray-600 mb-4">
                Straightening and replacement of bent or damaged garage door tracks for smooth operation.
              </p>
              <a href="/book-now" className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                Schedule Service <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Inspections</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive safety inspections to ensure your garage door operates safely and efficiently.
              </p>
              <a href="/services/maintenance" className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Smartest Garage Doors?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <img 
                    src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" 
                    alt="Check" 
                    className="w-6 h-6 mt-1 mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed and insured technicians for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img 
                    src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" 
                    alt="Check" 
                    className="w-6 h-6 mt-1 mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Same-Day Service</h3>
                    <p className="text-gray-600">Emergency repairs available with same-day service options.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img 
                    src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" 
                    alt="Check" 
                    className="w-6 h-6 mt-1 mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Parts</h3>
                    <p className="text-gray-600">We use only high-quality parts from trusted manufacturers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img 
                    src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" 
                    alt="Check" 
                    className="w-6 h-6 mt-1 mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Warranty Included</h3>
                    <p className="text-gray-600">All repairs come with our comprehensive warranty coverage.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img 
                    src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" 
                    alt="Check" 
                    className="w-6 h-6 mt-1 mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Upfront Pricing</h3>
                    <p className="text-gray-600">Transparent, upfront pricing with no hidden fees or surprises.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img 
                    src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" 
                    alt="Check" 
                    className="w-6 h-6 mt-1 mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Technicians</h3>
                    <p className="text-gray-600">Experienced technicians trained on all garage door brands and models.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/image-2025-03-01T014834.747.png" 
                alt="Professional Garage Door Repair" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

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
              href="/book-now" 
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
