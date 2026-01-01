
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function TeaneckNJPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://smartestgaragedoors.com/wp-content/uploads/2025/03/appointment.png')`
          }}
        >
          <div className="absolute inset-0 bg-blue-600/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Garage Door Repair Teaneck, NJ
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Professional garage door repair and installation services in Teaneck, New Jersey. Fast, reliable service with same-day availability.
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

      {/* Service Area Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Teaneck Service Area
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive garage door services throughout Teaneck and surrounding areas in Bergen County, NJ
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.89!2d-74.0176!3d40.8876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f7c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sTeaneck%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Teaneck NJ Service Area Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services in Teaneck, NJ
            </h2>
            <p className="text-lg text-gray-600">
              Complete garage door solutions for residential and commercial properties in Teaneck
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-tools-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring Replacement</h3>
              <p className="text-gray-600 mb-4">
                Expert replacement of broken torsion and extension springs with high-quality parts.
              </p>
              <a href="/services/spring-replacement" className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-remote-control-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opener Repair</h3>
              <p className="text-gray-600 mb-4">
                Professional repair and installation of garage door openers from all major brands.
              </p>
              <a href="/services/opener-repair" className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-alarm-warning-line text-red-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Repairs</h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency garage door repair services for urgent situations in Teaneck.
              </p>
              <a href="/services/emergency-repairs" className="text-red-600 font-medium hover:text-red-700 cursor-pointer">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-door-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Door Installation</h3>
              <p className="text-gray-600 mb-4">
                Complete garage door installation services for new construction and replacements.
              </p>
              <a href="/services/installation" className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-settings-3-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cable & Roller Repair</h3>
              <p className="text-gray-600 mb-4">
                Professional repair and replacement of cables, rollers, and hardware components.
              </p>
              <a href="/services/cable-roller-repair" className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance Service</h3>
              <p className="text-gray-600 mb-4">
                Regular maintenance services to keep your garage door operating smoothly and safely.
              </p>
              <a href="/services/maintenance" className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Teaneck Residents Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Local expertise with professional service standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service</h3>
              <p className="text-gray-600">
                Fast response times with same-day service available for emergency repairs in Teaneck.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Experts</h3>
              <p className="text-gray-600">
                Bergen County locals who understand the specific needs of Teaneck area homes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed and insured technicians providing peace of mind with every service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Serving Teaneck, New Jersey
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Teaneck is a vibrant township in Bergen County, New Jersey, known for its diverse community and beautiful residential neighborhoods. Our garage door services cater to the unique needs of Teaneck homeowners, from historic homes to modern constructions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-map-pin-line text-blue-600 text-xl mt-1 mr-3"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Coverage</h3>
                    <p className="text-gray-600">All neighborhoods in Teaneck including Cedar Lane, Queen Anne Road, and Teaneck Road areas.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-time-line text-blue-600 text-xl mt-1 mr-3"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900">Response Time</h3>
                    <p className="text-gray-600">Typically within 1-2 hours for emergency calls in the Teaneck area.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-tools-line text-blue-600 text-xl mt-1 mr-3"></i>
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Expertise</h3>
                    <p className="text-gray-600">Familiar with common garage door issues in Bergen County's climate and housing styles.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Help!</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today for fast, professional garage door service in Teaneck, NJ.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+19145576816" 
                    className="block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    <i className="ri-phone-fill mr-2"></i>
                    Call: (914) 557-6816
                  </a>
                  <a 
                    href="/book-now" 
                    className="block bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <i className="ri-calendar-line mr-2"></i>
                    Schedule Online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Garage Door Service in Teaneck, NJ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let a broken garage door disrupt your day. Contact Smartest Garage Doors for fast, professional service in Teaneck and throughout Bergen County.
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
              Schedule Service
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
