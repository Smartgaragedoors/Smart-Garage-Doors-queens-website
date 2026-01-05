import { useEffect, useRef } from 'react';

export default function ServiceAreas() {
  // #region agent log
  const mapRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const log = () => {
      if (!mapRef.current || !gridRef.current) return;
      const mapRect = mapRef.current.getBoundingClientRect();
      const gridRect = gridRef.current.getBoundingClientRect();
      const mapStyle = window.getComputedStyle(mapRef.current);
      const gridStyle = window.getComputedStyle(gridRef.current);
      fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: 'ServiceAreas.tsx:map',
          message: 'ServiceAreas map bounding + overflow',
          data: {
            mapRect,
            gridRect,
            mapOverflow: { overflow: mapStyle.overflow, overflowX: mapStyle.overflowX, overflowY: mapStyle.overflowY },
            gridOverflow: { overflow: gridStyle.overflow, overflowX: gridStyle.overflowX, overflowY: gridStyle.overflowY }
          },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'post-fix',
          hypothesisId: 'MAP'
        })
      }).catch(() => {});
    };
    log();
    window.addEventListener('resize', log);
    return () => window.removeEventListener('resize', log);
  }, []);
  // #endregion

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
    <section id="service-areas" className="py-12 md:py-20 bg-blue-900 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-4" style={{ width: '100%', maxWidth: '1280px' }}>
        <div ref={gridRef} className="grid lg:grid-cols-[1fr_1.6fr] gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white order-2 lg:order-1 w-full">
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
                title="Service Areas Map"
              ></iframe>
              {/* Overlay to hide Google My Maps attribution */}
              <div className="absolute top-0 left-0 right-0 h-24 md:h-28 bg-blue-900 pointer-events-none z-20 rounded-t-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
