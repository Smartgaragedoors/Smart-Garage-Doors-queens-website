import { memo } from 'react';

function Services() {
  const services = [
    {
      icon: 'ri-tools-line',
      title: 'Emergency Repairs',
      description: 'Broken spring, car stuck, or door off track? We dispatch fast and carry common parts for same-visit repairs.',
      link: '/emergency-garage-door-repair/'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Spring Replacement',
      description: 'Safe, high-cycle spring replacement for snapped or worn springs that leave your garage unusable.',
      link: '/spring-replacement/'
    },
    {
      icon: 'ri-remote-control-line',
      title: 'Opener Repair',
      description: 'Fast diagnosis for dead motors, remote issues, sensors, wall controls, and smart opener upgrades.',
      link: '/opener-repair-installation/'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Cable & Roller Repair',
      description: 'We fix snapped cables, noisy rollers, and doors that shake, drag, or come off balance.',
      link: '/cable-roller-repair/'
    },
    {
      icon: 'ri-hammer-line',
      title: 'New Installation',
      description: 'Clean, professional garage door replacement for homeowners who want reliability and curb appeal.',
      link: '/garage-door-installation/'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Maintenance',
      description: 'Prevent sudden failures with tune-ups, safety checks, lubrication, and hardware adjustments.',
      link: '/maintenance/'
    }
  ];

  return (
    <section id="services" className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 md:mb-4">
            What Broke? We Fix It Today.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Most garage door problems are urgent. We carry common parts on every truck so we can finish the job on the first visit.
          </p>
        </div>

        {/* Mobile: compact 2-col icon grid (icon + title). md+: full cards with copy. */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 hover:shadow-md hover:border-orange-300 transition-all duration-300 cursor-pointer group flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-orange-600 transition-colors">
                <i className={`${service.icon} text-2xl text-white`} aria-hidden="true"></i>
              </div>
              <h3 className="text-sm md:text-lg font-bold text-blue-900 leading-tight md:mb-2">{service.title}</h3>
              <p className="hidden md:block text-gray-600 mb-4">{service.description}</p>
              <span className="hidden md:inline-flex text-orange-500 font-semibold items-center group-hover:text-orange-600">
                Learn More <i className="ri-arrow-right-line ml-2" aria-hidden="true"></i>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 md:mt-10 bg-orange-50 border border-orange-100 rounded-2xl p-5 md:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 text-center sm:text-left">
          <div>
            <p className="text-lg md:text-xl font-bold text-blue-900">Not sure what's wrong?</p>
            <p className="text-gray-600 mt-1 text-sm md:text-base">Call us and describe what's happening. We'll tell you what it likely is and what it costs — before we come out.</p>
          </div>
          <a
            href="tel:+19145576816"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 md:py-4 rounded-xl shadow-md hover:shadow-lg transition-all whitespace-nowrap text-base md:text-lg flex-shrink-0"
          >
            <i className="ri-phone-fill" aria-hidden="true"></i>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(Services);
