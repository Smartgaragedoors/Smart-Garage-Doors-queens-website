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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Fast Garage Door Repairs for the Problems That Trigger Calls
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We focus on the high-urgency problems that stop homeowners in their tracks and need a real technician fast, whether they are in Queens, Nassau, Westchester, North Jersey, or Connecticut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <i className={`${service.icon} text-3xl text-white`} aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <span className="text-orange-500 font-semibold inline-flex items-center group-hover:text-orange-600">
                Learn More <i className="ri-arrow-right-line ml-2" aria-hidden="true"></i>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Need Help Right Now?</h3>
            <p className="text-xl text-gray-100 mb-8">Speak to a live dispatcher and get an upfront quote before work begins.</p>
            <a
              href="tel:914-557-6816"
              aria-label="Call Smart Garage Doors from services section"
              className="inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white shadow-2xl hover:shadow-3xl px-8 py-4 text-lg rounded-full transform hover:scale-105"
            >
              <i className="ri-phone-line mr-3 text-xl" aria-hidden="true"></i>
              Call (914) 557-6816
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Services);
