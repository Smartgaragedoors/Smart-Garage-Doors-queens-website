import { useState } from 'react';
import { useLocation as useLocationContext } from '../../contexts/LocationContext';
import { useLocation as useRouterLocation } from 'react-router-dom';
import { trackPhoneClick } from '../../utils/analytics';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);
  
  const { location, locationName } = useLocationContext();
  const routerLocation = useRouterLocation();

  // Get current page to show relevant address
  const currentPath = routerLocation.pathname;
  let currentAddress = "New York, New Jersey, Connecticut";
  
  // Determine contact link: use #contact on home page for smooth scroll, /contact/ on other pages
  const contactLink = (currentPath === '/' || currentPath === '/home/' || currentPath === '/home') ? '#contact' : '/contact/';
  
  // Handle About link click - use navigate for cross-page navigation to preserve hash
  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (currentPath === '/' || currentPath === '/home/' || currentPath === '/home') {
      // On home page, let default behavior handle smooth scroll
      return;
    }
    // On other pages, navigate to home with hash using window.location for reliable hash handling
    e.preventDefault();
    const basePath = typeof __BASE_PATH__ !== 'undefined' ? __BASE_PATH__ : '/';
    window.location.href = `${basePath}#about`;
  };

  // Use detected location first, then fall back to route-based
  if (location && !currentPath.includes('/garage-door-repair-') && !currentPath.includes('/service-areas/')) {
    // Show location-aware message
    if (location.city === 'Queens' || location.city === 'Flushing') {
      currentAddress = "141-24 70th Ave, Flushing, NY 11367";
    } else if (location.city === 'Brooklyn') {
      currentAddress = "71st 12th Ave, Dyker Heights, Brooklyn, NY";
    } else if (location.city === 'Suffern') {
      currentAddress = "31 Deerwood Road, Suffern, NY";
    } else {
      currentAddress = `Serving ${locationName} | Local to Your Area`;
    }
  } else if (currentPath.includes('brooklyn')) {
    currentAddress = "71st 12th Ave, Dyker Heights, Brooklyn, NY";
  } else if (currentPath.includes('suffern')) {
    currentAddress = "31 Deerwood Road, Suffern, NY";
  } else if (currentPath.includes('queens') || currentPath.includes('flushing')) {
    currentAddress = "141-24 70th Ave, Flushing, NY 11367";
  } else if (location) {
    currentAddress = `Local to ${locationName}`;
  }

  return (
    <header className="sticky top-0 z-50 overflow-visible">
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
      <nav className="bg-white shadow-lg relative z-50" style={{ overflow: 'visible' }}>
        <div className="max-w-7xl mx-auto px-4" style={{ overflow: 'visible' }}>
          <div className="flex justify-between items-center py-3 md:py-4 relative" style={{ overflow: 'visible' }}>
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2 md:space-x-3" aria-label="Smart Garage Doors Home">
                <img 
                  src="/smart-garage-doors-logo.webp" 
                  alt="Smart Garage Doors logo"
                  className="h-8 md:h-12 w-auto"
                  loading="eager"
                  fetchPriority="high"
                  width="499"
                  height="160"
                />
                <div>
                  <h2 className="text-base md:text-xl font-bold text-gray-900">Smart Garage Doors</h2>
                  <p className="text-xs md:text-sm text-gray-600 hidden sm:block">Professional Garage Door Services</p>
                </div>
              </a>
            </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 dropdown-menu" style={{ overflow: 'visible', position: 'relative', zIndex: 50 }}>
              <a href="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Home
              </a>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button 
                  className="text-gray-700 hover:text-orange-500 font-medium flex items-center"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <i className="ri-arrow-down-s-line ml-1" aria-hidden="true"></i>
                </button>
                {isServicesOpen && (
                  <div 
                    className="absolute left-0 top-full w-64 bg-white rounded-md shadow-lg py-1 z-[100] dropdown-menu"
                    style={{ paddingTop: '4px', overflow: 'visible' }}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <a href="/emergency-garage-door-repair/" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Emergency Repairs</a>
                    <a href="/garage-door-installation/" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Installation Services</a>
                    <a href="/garage-door-repair/" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Garage Door Repair</a>
                    <a href="/opener-repair-installation/" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Opener Repair</a>
                    <a href="/spring-replacement/" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Spring Replacement</a>
                    <a href="/cable-roller-repair/" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Cable & Roller Repair</a>
                    <a href="/maintenance/" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Maintenance</a>
                    <a href="/services/installation/" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Installation</a>
                  </div>
                )}
              </div>

              {/* Service Areas Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServiceAreasOpen(true)}
                onMouseLeave={() => setIsServiceAreasOpen(false)}
              >
                <button 
                  className="text-gray-700 hover:text-orange-500 font-medium flex items-center transition-colors"
                  aria-expanded={isServiceAreasOpen}
                  aria-haspopup="true"
                  onClick={() => setIsServiceAreasOpen(!isServiceAreasOpen)}
                >
                  Service Areas
                  <i className="ri-arrow-down-s-line ml-1" aria-hidden="true"></i>
                </button>
                {isServiceAreasOpen && (
                  <div 
                    className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl z-[100] dropdown-menu"
                    style={{ paddingTop: '4px', overflow: 'visible' }}
                    onMouseEnter={() => setIsServiceAreasOpen(true)}
                    onMouseLeave={() => setIsServiceAreasOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Column 1 */}
                        <div>
                          {/* New York Cities/Towns */}
                          <div className="mb-4">
                            <h4 className="font-semibold text-blue-900 mb-2 border-b border-gray-200 pb-1">New York</h4>
                            <div className="space-y-1">
                              <a href="/brooklyn-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Brooklyn</a>
                              <a href="/queens-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Queens</a>
                              <a href="/long-island-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Long Island</a>
                              <a href="/staten-island-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Staten Island</a>
                              <a href="/suffern-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Suffern</a>
                              <a href="/white-plains-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">White Plains</a>
                              <a href="/new-rochelle-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">New Rochelle</a>
                              <a href="/scarsdale-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Scarsdale</a>
                              <a href="/hauppauge-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Hauppauge</a>
                              <a href="/smithtown-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Smithtown</a>
                            </div>
                          </div>
                          
                          {/* Connecticut */}
                          <div>
                            <h4 className="font-semibold text-blue-900 mb-2 border-b border-gray-200 pb-1">Connecticut</h4>
                            <div className="space-y-1">
                              <a href="/darien-ct/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Darien</a>
                              <a href="/greenwich-ct/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Greenwich</a>
                              <a href="/new-canaan-ct/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">New Canaan</a>
                              <a href="/newtown-ct/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Newtown</a>
                              <a href="/stamford-ct/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Stamford</a>
                              <a href="/westport-ct/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Westport</a>
                              <a href="/fairfield-ct/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Fairfield</a>
                            </div>
                          </div>
                        </div>
                        
                        {/* Column 2 */}
                        <div>
                          {/* New York Counties */}
                          <div className="mb-4">
                            <h4 className="font-semibold text-blue-900 mb-2 border-b border-gray-200 pb-1">New York Counties</h4>
                            <div className="space-y-1">
                              <a href="/nassau-county-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Nassau County</a>
                              <a href="/suffolk-county-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Suffolk County</a>
                              <a href="/westchester-county-ny/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Westchester County</a>
                            </div>
                          </div>
                          
                          {/* New Jersey */}
                          <div>
                            <h4 className="font-semibold text-blue-900 mb-2 border-b border-gray-200 pb-1">New Jersey</h4>
                            <div className="space-y-1">
                              <a href="/teaneck-nj/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Teaneck</a>
                              <a href="/elizabeth-nj/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Elizabeth</a>
                              <a href="/bergen-county-nj/" role="menuitem" className="block text-gray-700 hover:text-orange-500 transition-colors cursor-pointer focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">Bergen County</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a 
                href={currentPath === '/' || currentPath === '/home/' || currentPath === '/home' ? '#about' : '/#about'} 
                onClick={handleAboutClick}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                About
              </a>
              <a href="/blog/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Blog
              </a>
              <a href={contactLink} className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Contact
              </a>
              <a href="/book-now/" className="text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                Book Now
              </a>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <a 
                href="tel:(914) 557-6816" 
                onClick={() => trackPhoneClick('(914) 557-6816')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-3 md:px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap text-sm md:text-base"
              >
                <i className="ri-phone-fill mr-1 md:mr-2"></i>
                <span className="hidden sm:inline">(914) 557-6816</span>
                <span className="sm:hidden">Call</span>
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                    <a href="/maintenance/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Maintenance</a>
                    <a href="/services/installation/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Installation</a>
                  </div>
                </div>

                <div>
                  <div className="text-gray-700 font-medium py-2">Service Areas</div>
                  <div className="grid grid-cols-2 gap-2 pl-4">
                    {/* New York */}
                    <div>
                      <div className="text-xs font-semibold text-gray-500 mb-1">New York</div>
                      <a href="/brooklyn-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Brooklyn</a>
                      <a href="/queens-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Queens</a>
                      <a href="/long-island-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Long Island</a>
                      <a href="/staten-island-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Staten Island</a>
                      <a href="/suffern-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Suffern</a>
                      <a href="/white-plains-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">White Plains</a>
                      <a href="/new-rochelle-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">New Rochelle</a>
                      <a href="/scarsdale-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Scarsdale</a>
                      <a href="/hauppauge-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Hauppauge</a>
                      <a href="/smithtown-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Smithtown</a>
                      <a href="/nassau-county-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Nassau County</a>
                      <a href="/suffolk-county-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Suffolk County</a>
                      <a href="/westchester-county-ny/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Westchester County</a>
                    </div>
                    {/* Connecticut & New Jersey */}
                    <div>
                      <div className="text-xs font-semibold text-gray-500 mb-1">Connecticut</div>
                      <a href="/stamford-ct/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Stamford</a>
                      <a href="/greenwich-ct/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Greenwich</a>
                      <a href="/darien-ct/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Darien</a>
                      <a href="/new-canaan-ct/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">New Canaan</a>
                      <a href="/newtown-ct/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Newtown</a>
                      <a href="/westport-ct/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Westport</a>
                      <a href="/fairfield-ct/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Fairfield</a>
                      <div className="text-xs font-semibold text-gray-500 mb-1 mt-3">New Jersey</div>
                      <a href="/teaneck-nj/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Teaneck</a>
                      <a href="/elizabeth-nj/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Elizabeth</a>
                      <a href="/bergen-county-nj/" className="block py-1 text-gray-700 hover:text-orange-500 text-sm">Bergen County</a>
                    </div>
                  </div>
                </div>

                <a 
                  href={currentPath === '/' || currentPath === '/home/' || currentPath === '/home' ? '#about' : '/#about'} 
                  onClick={handleAboutClick}
                  className="block text-gray-700 hover:text-orange-500 font-medium transition-colors py-2"
                >
                  About
                </a>
                <a href="/blog/" className="block text-gray-700 hover:text-orange-500 font-medium transition-colors py-2">
                  Blog
                </a>
                <a href={contactLink} className="block text-gray-700 hover:text-orange-500 font-medium transition-colors py-2">
                  Contact
                </a>
                <a href="/book-now/" className="block text-orange-600 hover:text-orange-700 font-semibold transition-colors py-2">
                  Book Now
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
