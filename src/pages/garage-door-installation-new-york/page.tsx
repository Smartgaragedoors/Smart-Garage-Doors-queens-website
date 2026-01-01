
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function GarageDoorInstallationNewYorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
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
                  href="/book-now" 
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
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" />
                  <span>Single & Double Car Garages</span>
                </div>
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" />
                  <span>All Door Materials</span>
                </div>
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" />
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
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" />
                  <span>Roll-Up Doors</span>
                </div>
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" />
                  <span>Sectional Doors</span>
                </div>
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" />
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
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" />
                  <span>WiFi Connectivity</span>
                </div>
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" />
                  <span>App Control</span>
                </div>
                <div className="flex items-center">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-4 h-4 mr-2" />
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
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-6 h-6 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Installation</h3>
                    <p className="text-gray-600">Expert installation by certified technicians with years of experience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-6 h-6 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Materials</h3>
                    <p className="text-gray-600">We use only premium garage doors from trusted manufacturers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-6 h-6 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Warranty Coverage</h3>
                    <p className="text-gray-600">Comprehensive warranty on both parts and installation labor.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-6 h-6 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Free Estimates</h3>
                    <p className="text-gray-600">Detailed free estimates with transparent pricing and no hidden fees.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img src="https://smartestgaragedoors.com/wp-content/uploads/2025/02/check.png" alt="Check" className="w-6 h-6 mt-1 mr-3" />
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
              href="/book-now" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-calendar-line mr-2"></i>
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
