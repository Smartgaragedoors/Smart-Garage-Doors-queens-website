
export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20residential%20garage%20with%20professional%20technician%20working%20on%20sleek%20contemporary%20garage%20door%2C%20clean%20suburban%20home%20exterior%2C%20bright%20natural%20lighting%2C%20professional%20service%20van%20in%20driveway%2C%20well-maintained%20landscaping%2C%20premium%20garage%20door%20installation%2C%20expert%20craftsmanship%20visible&width=1920&height=1080&seq=hero001&orientation=landscape')`
      }}
    >
      {/* Preload critical background image */}
      <link 
        rel="preload" 
        as="image" 
        href="https://readdy.ai/api/search-image?query=Modern%20residential%20garage%20with%20professional%20technician%20working%20on%20sleek%20contemporary%20garage%20door%2C%20clean%20suburban%20home%20exterior%2C%20bright%20natural%20lighting%2C%20professional%20service%20van%20in%20driveway%2C%20well-maintained%20landscaping%2C%20premium%20garage%20door%20installation%2C%20expert%20craftsmanship%20visible&width=1920&height=1080&seq=hero001&orientation=landscape"
        fetchPriority="high"
      />
      
      <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Professional <span className="text-orange-400">Garage Door</span> Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            24/7 Emergency Repairs • Expert Installation • Maintenance Plans
            <br />
            Serving NY, NJ & CT with Fast, Reliable Service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="tel:914-557-6816"
              className="inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white shadow-2xl hover:shadow-3xl px-8 py-4 text-lg rounded-full transform hover:scale-105"
            >
              <i className="ri-phone-line mr-3 text-xl"></i>
              Call (914) 557-6816
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer whitespace-nowrap bg-white hover:bg-gray-100 text-blue-900 shadow-2xl hover:shadow-3xl px-8 py-4 text-lg rounded-full transform hover:scale-105"
            >
              <i className="ri-calendar-line mr-3 text-xl"></i>
              Schedule Service
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-400">24/7</div>
              <div className="text-sm text-gray-200">Emergency Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-400">15+</div>
              <div className="text-sm text-gray-200">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-400">1000+</div>
              <div className="text-sm text-gray-200">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-400">100%</div>
              <div className="text-sm text-gray-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl"></i>
      </div>
    </section>
  );
}
