
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import FAQSchema from '../../components/seo/FAQSchema';
import ServiceAreaLinks from '../../components/seo/ServiceAreaLinks';

export default function GarageDoorInstallationNewYorkPage() {
  const faqs = [
    {
      question: 'How much does garage door installation cost in New York?',
      answer: 'New garage door installation typically costs $800-$2,500 depending on door size, material, style, and features. Basic single-car steel doors start around $800-$1,200, while premium double-car doors with windows, insulation, and custom features can cost $1,800-$2,500. Wood doors typically cost $1,500-$5,000+. We provide free estimates with detailed pricing breakdowns for all installation projects throughout New York.',
    },
    {
      question: 'How long does garage door installation take?',
      answer: 'Most garage door installations take 3-5 hours to complete from start to finish. This includes removing the old door (if applicable), installing the new door and tracks, setting up springs and cables, installing the opener (if included), and comprehensive testing. For complex installations or custom doors, the process may take 5-7 hours. We work efficiently to minimize disruption to your day.',
    },
    {
      question: 'Do you install all types and brands of garage doors in New York?',
      answer: 'Yes, we install all types of garage doors including sectional (most common), roll-up, side-hinged, and custom designs. We work with all major brands including Clopay, Wayne Dalton, Amarr, Raynor, CHI, LiftMaster, Chamberlain, and more. If you have a specific brand preference, we can source and install it for you.',
    },
    {
      question: 'What garage door materials do you install?',
      answer: 'We install garage doors in steel, aluminum, wood, fiberglass, and vinyl materials. Steel is the most popular choice for durability, value, and low maintenance. Wood doors offer premium aesthetics but require more maintenance. Aluminum is lightweight and corrosion-resistant, ideal for coastal areas. Fiberglass and vinyl offer low maintenance and weather resistance.',
    },
    {
      question: 'Do you offer installation warranty in New York?',
      answer: 'Yes, all our installations include comprehensive warranty coverage. We warranty our installation workmanship for 1 year, ensuring proper installation and function. Doors come with manufacturer warranties (typically 3-20 years depending on material and brand). Springs typically have 1-2 year warranties, and openers have 1-5 year warranties.',
    },
    {
      question: 'Can you install a new door without replacing the opener?',
      answer: 'Yes, if your existing opener is in good condition, compatible with the new door, and less than 10-15 years old, we can often reuse it. However, we\'ll inspect it thoroughly first and may recommend replacement if it\'s old, incompatible, showing signs of wear, or lacks modern safety features. New doors often work best with new openers for optimal performance.',
    },
    {
      question: 'Do you remove and dispose of old garage doors?',
      answer: 'Yes, we handle complete removal and disposal of old garage doors as part of our installation service. We\'ll safely remove the old door, tracks, springs, cables, and all hardware, and properly dispose of all materials. There\'s no extra charge for this service - it\'s included in the installation price.',
    },
    {
      question: 'How quickly can you install a new garage door in New York?',
      answer: 'We typically can schedule new garage door installations within 1-2 weeks, depending on door selection and current schedule. For standard doors in stock, we can often install within 3-7 days. Custom doors may take 2-4 weeks for ordering and delivery. Emergency installations are available when possible. We\'ll provide a timeline during your estimate.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags 
        title="Garage Door Installation NY NJ CT | Professional Installation Services"
        description="Professional garage door installation services in NY, NJ & CT. Expert installation of all garage door styles and brands. Same-day service available. Licensed and insured technicians."
        keywords="garage door installation, new garage door installation, garage door installer, professional garage door installation"
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://smartestgaragedoors.com/wp-content/uploads/2025/07/garage-door-installation-new-york.webp')`
          }}
        >
          <div className="absolute inset-0 bg-green-600/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Garage Door Installation New York
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Professional garage door installation services throughout New York. From residential to commercial, we install all types of garage doors with precision and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+19145576816" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-fill mr-2"></i>
                  Call: (914) 557-6816
                </a>
                <a 
                  href="/book-now/" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-calendar-line mr-2"></i>
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Garage Door Installation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in installing all types of garage doors across New York, from traditional to modern smart garage doors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-home-4-line text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Residential Installation</h3>
              <p className="text-gray-600 mb-4">
                Complete residential garage door installation with professional setup and testing.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" width="16" height="16" loading="lazy" />
                  <span>Single & Double Car Garages</span>
                </div>
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" width="16" height="16" loading="lazy" />
                  <span>All Door Materials</span>
                </div>
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" width="16" height="16" loading="lazy" />
                  <span>Opener Installation</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-building-line text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial Installation</h3>
              <p className="text-gray-600 mb-4">
                Heavy-duty commercial garage door installation for businesses and warehouses.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" width="16" height="16" loading="lazy" />
                  <span>Roll-Up Doors</span>
                </div>
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" width="16" height="16" loading="lazy" />
                  <span>Sectional Doors</span>
                </div>
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" width="16" height="16" loading="lazy" />
                  <span>High-Speed Doors</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-smartphone-line text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Door Installation</h3>
              <p className="text-gray-600 mb-4">
                Modern smart garage doors with WiFi connectivity and smartphone control.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" width="16" height="16" loading="lazy" />
                  <span>WiFi Connectivity</span>
                </div>
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" width="16" height="16" loading="lazy" />
                  <span>App Control</span>
                </div>
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" width="16" height="16" loading="lazy" />
                  <span>Security Features</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Types We Install
            </h2>
            <p className="text-lg text-gray-600">
              Choose from a wide variety of garage door styles and materials to match your home's architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <i className="ri-door-line text-4xl text-green-600 mb-2"></i>
                <h3 className="font-semibold text-gray-900">Sectional Doors</h3>
              </div>
              <p className="text-sm text-gray-600">Traditional sectional doors with horizontal panels</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <i className="ri-door-open-line text-4xl text-green-600 mb-2"></i>
                <h3 className="font-semibold text-gray-900">Roll-Up Doors</h3>
              </div>
              <p className="text-sm text-gray-600">Space-saving roll-up doors for commercial use</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <i className="ri-door-closed-line text-4xl text-green-600 mb-2"></i>
                <h3 className="font-semibold text-gray-900">Carriage House</h3>
              </div>
              <p className="text-sm text-gray-600">Classic carriage house style doors</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <i className="ri-door-lock-line text-4xl text-green-600 mb-2"></i>
                <h3 className="font-semibold text-gray-900">Contemporary</h3>
              </div>
              <p className="text-sm text-gray-600">Modern contemporary designs with clean lines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              New York Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              Professional garage door installation throughout New York
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <a href="/garage-door-repair-brooklyn-ny/" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">Brooklyn</a>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <a href="/garage-door-repair-flushing-ny/" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">Queens</a>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <a href="/garage-door-repair-staten-island-ny/" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">Staten Island</a>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <a href="/garage-door-repair-flushing-ny/" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">Flushing</a>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <a href="/garage-door-repair-long-island-ny/" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">Long Island</a>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <a href="/garage-door-repair-long-island-ny/" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">Nassau County</a>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <a href="/garage-door-repair-long-island-ny/" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">Suffolk County</a>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <a href="/garage-door-repair-white-plains-ny/" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">Westchester County</a>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <a href="/garage-door-repair-white-plains-ny/" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">White Plains</a>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <a href="/garage-door-repair-white-plains-ny/" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">New Rochelle</a>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <a href="/garage-door-repair-white-plains-ny/" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">Scarsdale</a>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <a href="/garage-door-repair-suffern-ny/" className="text-green-600 font-medium hover:text-green-700 cursor-pointer">Suffern</a>
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
                Why Choose Our Installation Services?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-6 h-6 mt-1 mr-3" width="24" height="24" loading="lazy" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Installation</h3>
                    <p className="text-gray-600">Expert installation by certified technicians with years of experience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-6 h-6 mt-1 mr-3" width="24" height="24" loading="lazy" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Materials</h3>
                    <p className="text-gray-600">We use only premium garage doors from trusted manufacturers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-6 h-6 mt-1 mr-3" width="24" height="24" loading="lazy" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Warranty Coverage</h3>
                    <p className="text-gray-600">Comprehensive warranty on both parts and installation labor.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-6 h-6 mt-1 mr-3" width="24" height="24" loading="lazy" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Free Estimates</h3>
                    <p className="text-gray-600">Detailed free estimates with transparent pricing and no hidden fees.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-6 h-6 mt-1 mr-3" width="24" height="24" loading="lazy" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Same-Day Service</h3>
                    <p className="text-gray-600">Fast installation service, often completed in the same day.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/image-2025-03-01T014834.747.png" 
                alt="Professional Installation" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Installation FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about new garage door installation in New York
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

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for a New Garage Door Installation?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your home with a new garage door installation. Contact us today for a free estimate and professional installation service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+19145576816" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-fill mr-2"></i>
              Call: (914) 557-6816
            </a>
            <a 
              href="/book-now/" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-calendar-line mr-2"></i>
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      <ServiceAreaLinks 
        title="Garage Door Installation Services in Your Area"
        showDescription={true}
        maxLinks={10}
      />

      <Footer />
    </div>
  );
}
