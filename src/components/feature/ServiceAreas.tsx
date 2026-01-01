
export default function ServiceAreas() {
  const serviceAreas = {
    'New York': [
      'Brooklyn',
      'Queens', 
      'Staten Island',
      'Flushing',
      'Long Island',
      'Nassau County',
      'Suffolk County',
      'Westchester County',
      'White Plains',
      'New Rochelle',
      'Scarsdale',
      'Suffern'
    ],
    'Connecticut': [
      'Stamford',
      'Greenwich',
      'Darien',
      'New Canaan',
      'Westport',
      'Fairfield',
      'Newtown'
    ],
    'New Jersey': [
      'Bergen County'
    ]
  };

  return (
    <section id="service-areas" className="py-12 md:py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Services <span className="text-orange-500">Areas</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              Do you live in our service area?
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              We offer professional garage door services in a variety of communities.
            </h3>
            <p className="text-gray-200 mb-8">
              Our licensed and insured team is standing by to help homeowners in:
            </p>
            
            {/* Areas List by State */}
            <div className="space-y-6 mb-8">
              {Object.entries(serviceAreas).map(([state, areas]) => (
                <div key={state}>
                  <h4 className="text-base md:text-lg font-semibold text-orange-400 mb-3">{state}</h4>
                  <div className="grid grid-cols-2 gap-2 md:gap-3 ml-4">
                    {areas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-200 text-sm md:text-base">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-200 text-sm md:text-base">
              If you live in or around our service area, we'll be glad to give you a free estimate on your next garage door project. Connect with Smart Garage Doors today to get started.
            </p>
          </div>

          {/* Right - Real Google Map */}
          <div className="relative order-1 lg:order-2">
            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1214425.7347982!2d-74.25986935!3d41.0781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzQxLjIiTiA3NMKwMTUnMzUuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Areas Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
