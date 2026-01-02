import OrganizationSchema from '../seo/OrganizationSchema';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const routerLocation = useLocation();
  const services = [
    'Garage Door Repair',
    'Opener Repair & Installation', 
    'Spring Replacement',
    'Cable & Roller Repair',
    'Garage Door Installation',
    'Emergency Garage Door Repair'
  ];

  const serviceAreas = [
    { name: 'Flushing', href: '/garage-door-repair-flushing-ny/' },
    { name: 'White Plains', href: '/garage-door-repair-white-plains-ny/' },
    { name: 'Suffern', href: '/garage-door-repair-suffern-ny/' },
    { name: 'Brooklyn', href: '/garage-door-repair-brooklyn-ny/' },
    { name: 'Staten Island', href: '/garage-door-repair-staten-island-ny/' },
    { name: 'Long Island', href: '/garage-door-repair-long-island-ny/' },
    { name: 'Stamford', href: '/garage-door-repair-stamford-ct/' },
    { name: 'Greenwich', href: '/garage-door-repair-greenwich-ct/' },
    { name: 'Darien', href: '/garage-door-repair-darien-ct/' },
    { name: 'New Canaan', href: '/new-canaan-ct/' },
    { name: 'Westport', href: '/westport-ct/' },
    { name: 'Newtown', href: '/newtown-ct/' }
  ];

  // Get current page to show relevant address
  const currentPath = routerLocation.pathname;
  let currentAddress = "141-24 70th Ave, Flushing, NY 11367";

  if (currentPath.includes('suffern')) {
    currentAddress = "31 Deerwood Road, Suffern, NY";
  } else if (currentPath.includes('brooklyn')) {
    currentAddress = "71st 12th Ave, Dyker Heights, Brooklyn, NY";
  }

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/b5abc60311785d6f2fb733a6d104ca55.webp" 
              alt="Smart Garage Doors"
              className="h-16 w-auto mb-4"
              width="64"
              height="64"
              loading="lazy"
            />
            <p className="text-gray-300 mb-4">
              Professional garage door repair and installation services in NY, NJ &amp; CT.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61563773137785" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="text-gray-300 hover:text-orange-400 transition-colors">
                <i className="ri-facebook-fill text-xl" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/smartgaragedoorss/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="text-gray-300 hover:text-orange-400 transition-colors">
                <i className="ri-instagram-fill text-xl" aria-hidden="true"></i>
              </a>
              <a href="https://maps.app.goo.gl/GjfsFbH5kQ2smvdU8" target="_blank" rel="noopener noreferrer" aria-label="View our location on Google Maps" className="text-gray-300 hover:text-orange-400 transition-colors">
                <i className="ri-map-pin-fill text-xl" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/emergency-garage-door-repair/" className="text-gray-300 hover:text-orange-400 transition-colors">Emergency Repairs</a></li>
              <li><a href="/garage-door-installation/" className="text-gray-300 hover:text-orange-400 transition-colors">Installation Services</a></li>
              <li><a href="/garage-door-repair/" className="text-gray-300 hover:text-orange-400 transition-colors">Garage Door Repair</a></li>
              <li><a href="/opener-repair-installation/" className="text-gray-300 hover:text-orange-400 transition-colors">Opener Repair</a></li>
              <li><a href="/spring-replacement/" className="text-gray-300 hover:text-orange-400 transition-colors">Spring Replacement</a></li>
              <li><a href="/cable-roller-repair/" className="text-gray-300 hover:text-orange-400 transition-colors">Cable & Roller Repair</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.slice(0, 6).map((area, index) => (
                <li key={index}>
                  <a href={area.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <i className="ri-phone-fill text-orange-500" aria-hidden="true"></i>
                <a href="tel:(914) 557-6816" className="text-gray-300 hover:text-orange-400 transition-colors">
                  (914) 557-6816
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-mail-fill text-orange-500" aria-hidden="true"></i>
                <a href="mailto:info@smartestgaragedoors.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                  info@smartestgaragedoors.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <i className="ri-map-pin-fill text-orange-500 mt-1" aria-hidden="true"></i>
                <span className="text-gray-300">
                  {currentAddress}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 Smart Garage Doors. All rights reserved.
          </div>
          <div className="text-gray-300 text-sm">
            <a href="https://readdy.ai/?origin=logo" className="hover:text-orange-400 transition-colors">
              Website Builder
            </a>
          </div>
        </div>
      </div>
      <OrganizationSchema />
    </footer>
  );
}
