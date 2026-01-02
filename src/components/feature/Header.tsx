import { useState, memo, useMemo, useCallback } from 'react';
import { useLocation as useLocationContext } from '../../contexts/LocationContext';
import { useLocation as useRouterLocation } from 'react-router-dom';
import { trackPhoneClick } from '../../utils/analytics';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);
  const { location, locationName } = useLocationContext();
  const routerLocation = useRouterLocation();

  // Get current page to show relevant address
  const currentPath = routerLocation.pathname;
  
  // Determine contact link: use #contact on home page for smooth scroll, /contact on other pages
  const contactLink = useMemo(
    () => currentPath === '/' || currentPath === '/home' ? '#contact' : '/contact',
    [currentPath]
  );
  

  // Memoize current address calculation
  const currentAddress = useMemo(() => {
    let address = "New York, New Jersey, Connecticut";
    
    // Use detected location first, then fall back to route-based
    if (location && !currentPath.includes('/garage-door-repair-') && !currentPath.includes('/service-areas/')) {
      // Show location-aware message
      if (location.city === 'Queens' || location.city === 'Flushing') {
        address = "141-24 70th Ave, Flushing, NY 11367";
      } else if (location.city === 'Brooklyn') {
        address = "71st 12th Ave, Dyker Heights, Brooklyn, NY";
      } else if (location.city === 'Suffern') {
        address = "31 Deerwood Road, Suffern, NY";
      } else {
        address = `Serving ${locationName} | Local to Your Area`;
      }
    } else if (currentPath.includes('brooklyn')) {
      address = "71st 12th Ave, Dyker Heights, Brooklyn, NY";
    } else if (currentPath.includes('suffern')) {
      address = "31 Deerwood Road, Suffern, NY";
    } else if (currentPath.includes('queens') || currentPath.includes('flushing')) {
      address = "141-24 70th Ave, Flushing, NY 11367";
    } else if (location) {
      address = `Local to ${locationName}`;
    }
    
    return address;
  }, [location, locationName, currentPath]);

  const handlePhoneClick = useCallback(() => {
    trackPhoneClick('(914) 557-6816');
  }, []);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleServicesMouseEnter = useCallback(() => {
    setIsServicesOpen(true);
  }, []);

  const handleServicesMouseLeave = useCallback(() => {
    setIsServicesOpen(false);
  }, []);

  const handleServiceAreasMouseEnter = useCallback(() => {
    setIsServiceAreasOpen(true);
  }, []);

  const handleServiceAreasMouseLeave = useCallback(() => {
    setIsServiceAreasOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50" style={{ overflow: 'visible' }}>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-1.5 md:py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center space-x-3 md:space-x-6">
            <a href="mailto:info@smartestgaragedoors.com" className="hidden md:flex items-center space-x-2 hover:text-orange-400 transition-colors">
              <i className="ri-mail-line" aria-hidden="true"></i>
              <span>info@smartestgaragedoors.com</span>
            </a>
            <div className="hidden md:flex items-center space-x-2">
              <i className="ri-map-pin-line" aria-hidden="true"></i>
              <span>{currentAddress}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61563773137785" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="hidden md:block hover:text-orange-400 transition-colors">
              <i className="ri-facebook-fill" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/smartgaragedoorss/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="hidden md:block hover:text-orange-400 transition-colors">
              <i className="ri-instagram-fill" aria-hidden="true"></i>
            </a>
            <a href="https://maps.app.goo.gl/GjfsFbH5kQ2smvdU8" target="_blank" rel="noopener noreferrer" aria-label="View our location on Google Maps" className="hidden md:block hover:text-orange-400 transition-colors">
              <i className="ri-map-pin-fill" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg" style={{ overflow: 'visible' }}>
        <div className="max-w-7xl mx-auto px-4" style={{ overflow: 'visible' }}>
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2 md:space-x-3" aria-label="Smart Garage Doors Home">
                <img 
                  src="https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/b5abc60311785d6f2fb733a6d104ca55.webp" 
                  alt=""
                  className="h-8 md:h-12 w-auto"
                  loading="eager"
                  fetchPriority="high"
                  width="48"
                  height="48"
                />
                <div>
                  <h2 className="text-base md:text-xl font-bold text-gray-900">Smart Garage Doors</h2>
                  <p className="text-xs md:text-sm text-gray-600 hidden sm:block">Professional Garage Door Services</p>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6" style={{ overflow: 'visible' }}>
              <a href="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Home
              </a>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                style={{ overflow: 'visible', position: 'relative' }}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button 
                  className="text-gray-700 hover:text-orange-500 font-medium flex items-center"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-menu"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsServicesOpen(!isServicesOpen);
                    } else if (e.key === 'Escape') {
                      setIsServicesOpen(false);
                    }
                  }}
                >
                  Services
                  <i className="ri-arrow-down-s-line ml-1" aria-hidden="true"></i>
                </button>
                {isServicesOpen && (
                  <div 
                    id="services-menu"
                    role="menu"
                    className="dropdown-menu absolute left-0 top-full mt-1 w-64 bg-white rounded-md shadow-lg py-1 z-[100]"
                    style={{ 
                      overflow: 'visible', 
                      overflowY: 'visible',
                      overflowX: 'visible',
                      maxHeight: 'none',
                      height: 'auto',
                      display: 'block',
                      position: 'absolute'
                    }}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setIsServicesOpen(false);
                        e.currentTarget.previousElementSibling?.querySelector('button')?.focus();
                      }
                    }}
                  >
                    <a href="/emergency-garage-door-repair/" role="menuitem" className="block px-4 py-2 text-gray-700 hover:text-orange-500 focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Emergency Repairs</a>
                    <a href="/garage-door-installation/" role="menuitem" className="block px-4 py-2 text-gray-700 hover:text-orange-500 focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Installation Services</a>
                    <a href="/garage-door-repair/" role="menuitem" className="block px-4 py-2 text-gray-700 hover:text-orange-500 focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Garage Door Repair</a>
                    <a href="/opener-repair-installation/" role="menuitem" className="block px-4 py-2 text-gray-700 hover:text-orange-500 focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Opener Repair</a>
                    <a href="/spring-replacement/" role="menuitem" className="block px-4 py-2 text-gray-700 hover:text-orange-500 focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Spring Replacement</a>
                    <a href="/cable-roller-repair/" role="menuitem" className="block px-4 py-2 text-gray-700 hover:text-orange-500 focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Cable & Roller Repair</a>
                    <a href="/services/maintenance/" role="menuitem" className="block px-4 py-2 text-gray-700 hover:text-orange-500 focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Maintenance</a>
                    <a href="/services/installation/" role="menuitem" className="block px-4 py-2 text-gray-700 hover:text-orange-500 focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Installation</a>
                  </div>
                )}
              </div>

              {/* Service Areas Dropdown */}
              <div 
                className="relative"
                style={{ overflow: 'visible', position: 'relative' }}
                onMouseEnter={handleServiceAreasMouseEnter}
                onMouseLeave={handleServiceAreasMouseLeave}
              >
                <button 
                  className="text-gray-700 hover:text-orange-500 font-medium flex items-center transition-colors"
                  aria-expanded={isServiceAreasOpen}
                  aria-haspopup="true"
                  aria-controls="service-areas-menu"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsServiceAreasOpen(!isServiceAreasOpen);
                    } else if (e.key === 'Escape') {
                      setIsServiceAreasOpen(false);
                    }
                  }}
                >
                  Service Areas
                  <i className="ri-arrow-down-s-line ml-1" aria-hidden="true"></i>
                </button>
                {isServiceAreasOpen && (
                  <div 
                    id="service-areas-menu"
                    role="menu"
                    className="dropdown-menu absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl z-[100]"
                    style={{ 
                      overflow: 'visible', 
                      overflowY: 'visible',
                      overflowX: 'visible',
                      maxHeight: 'none',
                      height: 'auto',
                      display: 'block',
                      position: 'absolute'
                    }}
                    onMouseEnter={handleServiceAreasMouseEnter}
                    onMouseLeave={handleServiceAreasMouseLeave}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setIsServiceAreasOpen(false);
                        e.currentTarget.previousElementSibling?.querySelector('button')?.focus();
                      }
                    }}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-4">
                        {/* New York */}
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2 border-b border-gray-200 pb-1">New York</h4>
                          <div className="space-y-1">
                            <a href="/garage-door-repair-brooklyn-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Brooklyn</a>
                            <a href="/garage-door-repair-flushing-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Flushing</a>
                            <a href="/garage-door-repair-long-island-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Long Island</a>
                            <a href="/garage-door-repair-staten-island-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Staten Island</a>
                            <a href="/garage-door-repair-suffern-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Suffern</a>
                            <a href="/garage-door-repair-white-plains-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">White Plains</a>
                          </div>
                        </div>
                        
                        {/* Connecticut */}
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2 border-b border-gray-200 pb-1">Connecticut</h4>
                          <div className="space-y-1">
                            <a href="/garage-door-repair-darien-ct/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Darien</a>
                            <a href="/garage-door-repair-greenwich-ct/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Greenwich</a>
                            <a href="/new-canaan-ct/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">New Canaan</a>
                            <a href="/newtown-ct/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Newtown</a>
                            <a href="/garage-door-repair-stamford-ct/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Stamford</a>
                            <a href="/westport-ct/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Westport</a>
                          </div>
                        </div>
                        
                        {/* New Jersey */}
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2 border-b border-gray-200 pb-1">New Jersey</h4>
                          <div className="space-y-1">
                            <a href="/teaneck-nj/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Teaneck</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="/blog/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Blog
              </a>
              <a href={contactLink} className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Contact
              </a>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <a 
                href="tel:(914) 557-6816" 
                onClick={handlePhoneClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-3 md:px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap text-sm md:text-base"
              >
                <i className="ri-phone-fill mr-1 md:mr-2"></i>
                <span className="hidden sm:inline">(914) 557-6816</span>
                <span className="sm:hidden">Call</span>
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={handleMenuToggle}
                className="lg:hidden text-gray-700 hover:text-orange-500 transition-colors p-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <i className={`text-2xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`} aria-hidden="true"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div id="mobile-menu" className="lg:hidden border-t border-gray-200 py-4 max-h-96 overflow-y-auto">
              <div className="space-y-2">
                <a href="/" className="block text-gray-700 hover:text-orange-500 font-medium transition-colors py-2">
                  Home
                </a>
                
                <div>
                  <div className="text-gray-700 font-medium py-2">Services</div>
                  <div className="space-y-1 pl-4">
                    <a href="/emergency-garage-door-repair/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Emergency Repairs</a>
                    <a href="/garage-door-installation/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Installation Services</a>
                    <a href="/garage-door-repair/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Garage Door Repair</a>
                    <a href="/opener-repair-installation/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Opener Repair</a>
                    <a href="/spring-replacement/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Spring Replacement</a>
                    <a href="/cable-roller-repair/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Cable & Roller Repair</a>
                    <a href="/services/maintenance/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Maintenance</a>
                    <a href="/services/installation/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Installation</a>
                  </div>
                </div>

                <div>
                  <div className="text-gray-700 font-medium py-2">Service Areas</div>
                  <div className="grid grid-cols-2 gap-1 pl-4">
                    <a href="/garage-door-repair-brooklyn-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Brooklyn</a>
                    <a href="/garage-door-repair-stamford-ct/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Stamford</a>
                    <a href="/teaneck-nj/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Teaneck</a>
                    <a href="/garage-door-repair-white-plains-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">White Plains</a>
                    <a href="/garage-door-repair-flushing-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Flushing</a>
                    <a href="/garage-door-repair-long-island-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Long Island</a>
                  </div>
                </div>

                <a href="/blog/" className="block text-gray-700 hover:text-orange-500 font-medium transition-colors py-2">
                  Blog
                </a>
                <a href={contactLink} className="block text-gray-700 hover:text-orange-500 font-medium transition-colors py-2">
                  Contact
                </a>
                
                <a 
                  href="tel:(914) 557-6816"
                  className="block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center mt-4"
                >
                  <i className="ri-phone-fill mr-2"></i>
                  Call (914) 557-6816
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default memo(Header);
