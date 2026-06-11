import { memo, useMemo } from 'react';
import OrganizationSchema from '../seo/OrganizationSchema';
import { useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../../config/business-info';

function Footer() {
  const routerLocation = useLocation();

  const serviceAreas = useMemo(() => [
    { name: 'Queens', href: '/queens-ny/' },
    { name: 'Brooklyn', href: '/brooklyn-ny/' },
    { name: 'Staten Island', href: '/staten-island-ny/' },
    { name: 'Long Island', href: '/long-island-ny/' },
    { name: 'Westchester County', href: '/westchester-county-ny/' },
    { name: 'Bergen County', href: '/bergen-county-nj/' }
  ], []);

  const currentPath = routerLocation.pathname;
  const currentAddress = useMemo(() => {
    if (currentPath.includes('suffern')) return '31 Deerwood Road, Suffern, NY';
    if (currentPath.includes('brooklyn')) return '71st 12th Ave, Dyker Heights, Brooklyn, NY';
    return '141-24 70th Ave, Flushing, NY 11367';
  }, [currentPath]);

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="/smart-garage-doors-logo.webp"
              alt="Smart Garage Doors"
              className="h-16 w-auto mb-4"
              width="499"
              height="160"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <p className="text-gray-200 mb-4">
              Tri-State garage door repair and replacement with local-feeling dispatch, real reviews, and fast emergency response.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61563773137785" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="text-gray-200 hover:text-orange-400 transition-colors">
                <i className="ri-facebook-fill text-xl" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/smartgaragedoorss/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="text-gray-200 hover:text-orange-400 transition-colors">
                <i className="ri-instagram-fill text-xl" aria-hidden="true"></i>
              </a>
              <a href="https://maps.app.goo.gl/GjfsFbH5kQ2smvdU8" target="_blank" rel="noopener noreferrer" aria-label="View our location on Google Maps" className="text-gray-200 hover:text-orange-400 transition-colors">
                <i className="ri-map-pin-fill text-xl" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/emergency-garage-door-repair/" className="text-gray-200 hover:text-orange-400 transition-colors">Emergency Repairs</a></li>
              <li><a href="/garage-door-repair/" className="text-gray-200 hover:text-orange-400 transition-colors">Garage Door Repair</a></li>
              <li><a href="/spring-replacement/" className="text-gray-200 hover:text-orange-400 transition-colors">Spring Replacement</a></li>
              <li><a href="/opener-repair-installation/" className="text-gray-200 hover:text-orange-400 transition-colors">Opener Repair</a></li>
              <li><a href="/garage-door-installation/" className="text-gray-200 hover:text-orange-400 transition-colors">Installation Services</a></li>
              <li><a href="/liftmaster-opener-installation/" className="text-gray-200 hover:text-orange-400 transition-colors">LiftMaster Installation</a></li>
              <li><a href="/photo-estimate/" className="text-gray-200 hover:text-orange-400 transition-colors">Free Photo Estimate</a></li>
              <li><a href="/second-opinion/" className="text-gray-200 hover:text-orange-400 transition-colors">Get a Second Opinion</a></li>
              <li><a href="/vs-precision-garage-door/" className="text-gray-200 hover:text-orange-400 transition-colors">vs. Precision Garage Door</a></li>
              <li><a href="/vs-overhead-door/" className="text-gray-200 hover:text-orange-400 transition-colors">vs. Overhead Door</a></li>
              <li><a href="/book-now/" className="text-gray-200 hover:text-orange-400 transition-colors">Request Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Local Pages</h3>
            <ul className="space-y-2">
              <li>
                <a href="/service-areas/" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                  View All Areas →
                </a>
              </li>
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <a href={area.href} className="text-gray-200 hover:text-orange-400 transition-colors">
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-4 mt-6">Guides</h3>
            <ul className="space-y-2">
              <li><a href="/garage-door-replacement-cost-nassau-county/" className="text-gray-200 hover:text-orange-400 transition-colors">Nassau County Cost Guide</a></li>
              <li><a href="/garage-door-installation-cost-westchester/" className="text-gray-200 hover:text-orange-400 transition-colors">Westchester Cost Guide</a></li>
              <li><a href="/insulated-garage-door-cost-long-island/" className="text-gray-200 hover:text-orange-400 transition-colors">Insulated Door Cost Guide</a></li>
              <li><a href="/best-garage-door-company-queens/" className="text-gray-200 hover:text-orange-400 transition-colors">Choosing a Company in Queens</a></li>
              <li><a href="/local-vs-national-garage-door-company/" className="text-gray-200 hover:text-orange-400 transition-colors">Local vs. National Companies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <i className="ri-phone-fill text-orange-500" aria-hidden="true"></i>
                <a href="tel:+19145576816" className="text-gray-200 hover:text-orange-400 transition-colors">
                  (914) 557-6816
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-mail-fill text-orange-500" aria-hidden="true"></i>
                <a href="mailto:info@smartestgaragedoors.com" className="text-gray-200 hover:text-orange-400 transition-colors">
                  info@smartestgaragedoors.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <i className="ri-map-pin-fill text-orange-500 mt-1" aria-hidden="true"></i>
                <span className="text-gray-200">{currentAddress}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-gray-200 text-sm">
            © {new Date().getFullYear()} Smart Garage Doors. All rights reserved.
          </div>
          <div className="text-gray-300 text-xs text-center md:text-right">
            {BUSINESS_INFO.licenses.map((l) => l.label).join(' · ')} · Fully Insured
          </div>
        </div>
      </div>
      <OrganizationSchema />
    </footer>
  );
}

export default memo(Footer);
