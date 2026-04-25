import { useRef } from 'react';
import { BUSINESS_INFO } from '../../config/business-info';

export default function ServiceAreas() {
  const mapRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const hubParts = BUSINESS_INFO.dispatchHubs.map((h) =>
    h.id === 'jackson-nj' ? 'Jackson, NJ' : h.label.split(',')[0].trim()
  );
  const hubIntro =
    hubParts.length === 3 ? `${hubParts[0]}, ${hubParts[1]}, and ${hubParts[2]}` : hubParts.join(', ');

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
      'Bergen County',
      'Monmouth County',
      'Ocean County',
      'Middlesex County',
      'Jackson',
      'Princeton area'
    ]
  };

  return (
    <section id="service-areas" className="py-12 md:py-20 bg-blue-900 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-4" style={{ width: '100%', maxWidth: '1280px' }}>
        <div ref={gridRef} className="grid lg:grid-cols-[1fr_1.6fr] gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white order-2 lg:order-1 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Regional <span className="text-orange-500">Service Areas</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-4">
              Three dispatch hubs—{hubIntro}—each covering roughly a 60+ mile radius for emergency repair and premium installs.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-6">
              We prioritize high-trust markets: Long Island Gold Coast, Westchester, Fairfield County CT, Monmouth/Ocean shore, and Northern NJ—without the feel of a generic directory.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              We build pages and messaging around the cities and counties people actually search from.
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
              Call us and we will confirm coverage for your address, give you an honest arrival window, and dispatch the closest available technician.
            </p>
          </div>

          {/* Right - Real Google Map */}
          <div className="relative order-1 lg:order-2 w-full">
            <div
              ref={mapRef}
              className="relative w-full h-[32rem] md:h-[40rem] lg:h-[44rem] rounded-lg overflow-hidden shadow-2xl"
              style={{ maxWidth: '100%' }}
            >
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1yksORXIx5j9H9uXHQWO_zvzyTcMzlXc&ehbc=2E312F&noprof=1"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, minHeight: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Smart Garage Doors service area map — NY, NJ, and CT coverage"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
