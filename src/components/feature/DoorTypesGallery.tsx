import { memo } from 'react';

// NOTE: This section is icon-led by design — src/data/cloudflareImages.ts currently has
// no clean product-shot photography for these door types (only general job-site/technician
// photos). Once real photography of each door type exists, swap the icon circles below for
// image treatments (same card shell/copy/links can stay as-is).
function DoorTypesGallery() {
  const doorTypes = [
    {
      icon: 'ri-door-line',
      title: 'Sectional & Roll-Up Doors',
      description: 'The standard residential and light-commercial overhead door — steel panels that track straight up, installed and serviced on all major brands.',
      link: '/garage-door-installation/'
    },
    {
      icon: 'ri-shield-line',
      title: 'Rolling Steel & Security Gates',
      description: 'Storefront and warehouse security gates — slat, barrel spring, and motorized or manual gate service for businesses that need a solid close every night.',
      link: '/rolling-steel-gate-repair/'
    },
    {
      icon: 'ri-home-gear-line',
      title: 'Carriage-Style Doors',
      description: 'Carriage-house looks over a modern steel or insulated core — decorative hardware and curb appeal without giving up durability.',
      link: '/garage-door-installation/'
    },
    {
      icon: 'ri-snowy-line',
      title: 'Insulated Doors',
      description: 'Double- and triple-layer steel with a foam core for energy savings, noise reduction, and a stiffer, quieter panel — our most common upgrade.',
      link: '/insulated-garage-door-cost-long-island/'
    },
    {
      icon: 'ri-truck-line',
      title: 'Commercial Loading Dock Doors',
      description: 'Bay and dock doors built for high-cycle use — forklift-damage repair, track and operator service for warehouses and distribution centers.',
      link: '/loading-dock-door-repair/'
    }
  ];

  return (
    <section id="door-types" className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 md:mb-4">
            Every Door Type We Install & Service
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            From residential overhead doors to commercial security gates and dock doors — one call covers all of it.
          </p>
        </div>

        {/* Mobile: compact 2-col icon grid (icon + title). md+: full cards with copy. */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {doorTypes.map((doorType, index) => (
            <a
              key={index}
              href={doorType.link}
              className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 hover:shadow-md hover:border-orange-300 transition-all duration-300 cursor-pointer group flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-orange-600 transition-colors">
                <i className={`${doorType.icon} text-2xl text-white`} aria-hidden="true"></i>
              </div>
              <h3 className="text-sm md:text-lg font-bold text-blue-900 leading-tight md:mb-2">{doorType.title}</h3>
              <p className="hidden md:block text-gray-600 mb-4">{doorType.description}</p>
              <span className="hidden md:inline-flex text-orange-500 font-semibold items-center group-hover:text-orange-600">
                Learn More <i className="ri-arrow-right-line ml-2" aria-hidden="true"></i>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(DoorTypesGallery);
