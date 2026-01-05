import { useEffect, useState } from 'react';
import { useLocation } from '../../contexts/LocationContext';
import { trackPhoneClick, trackEvent } from '../../utils/analytics';

export default function Hero() {
  const { location, locationName, responseTime, isLoading } = useLocation();
  
  // For Queens, use generic regional language. For other cities, use specific city name.
  const serviceAreaText = location && location.city !== 'Queens' && !isLoading
    ? `Serving ${locationName} and Surrounding Areas • Multiple Locations Across NY, NJ & CT`
    : 'Serving NY, NJ & CT with Fast, Reliable Service • Multiple Service Locations';
  
  const responseTimeText = location && location.city !== 'Queens' && !isLoading
    ? `Average ${responseTime} response in ${location.city} • Available throughout the tri-state area`
    : '24/7 Emergency Repairs • Expert Installation • Maintenance Plans';
  
  const ctaText = location && location.city !== 'Queens' && !isLoading
    ? `Call for ${location.city} Garage Door Service`
    : 'Call (914) 557-6816';

  // Get base path from vite config for proper image paths
  const basePath = typeof __BASE_PATH__ !== 'undefined' ? __BASE_PATH__ : '/';
  
  // Use smaller default image for mobile-first approach
  const [imageSize, setImageSize] = useState<'800' | '1280' | '1920'>('800');
  const [isMobile, setIsMobile] = useState(true);
  
  useEffect(() => {
    const updateImageSize = () => {
      const width = window.innerWidth;
      const mobile = width <= 800;
      setIsMobile(mobile);
      const newSize = mobile ? '800' : width >= 1920 ? '1920' : '1280';
      if (newSize !== imageSize) {
        setImageSize(newSize);
      }
    };
    
    // Set initial size immediately to prevent layout shift
    updateImageSize();
    
    // Debounce resize to avoid excessive updates
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateImageSize, 150);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [imageSize]);
  
  // Use WebP with JPG fallback for better compression
  const heroImageWebP = `${basePath}hero-van-${imageSize}.webp`;
  const heroImageJpg = `${basePath}hero-van-${imageSize}.jpg`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized responsive background image with WebP support */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-van-bg z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.75), rgba(30, 58, 138, 0.65)), 
            image-set(
              url('${heroImageWebP}') type('image/webp'),
              url('${heroImageJpg}') type('image/jpeg')
            ),
            url('${heroImageJpg}')`
        }}
      />
      {/* Hidden image for SEO with proper format */}
      <picture className="hidden" aria-hidden="true">
        <source srcSet={heroImageWebP} type="image/webp" />
        <img 
          src={heroImageJpg}
          alt="Smart Garage Doors service van parked in front of a residential garage. Professional garage door repair and installation services with branded white service vehicle."
          width="1280"
          height="720"
          loading="eager"
          fetchPriority="high"
        />
      </picture>
      
      <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Professional <span className="text-orange-400">Garage Door</span> Services
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            {responseTimeText}
          </p>
          {location && !isLoading && (
            <p className="text-lg md:text-xl mb-8 text-orange-300 max-w-3xl mx-auto font-semibold">
              {serviceAreaText}
            </p>
          )}
          {!location && !isLoading && (
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              {serviceAreaText}
            </p>
          )}
          
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>
                <a 
                  href="tel:914-557-6816"
                  onClick={() => {
                    trackPhoneClick('914-557-6816');
                    trackEvent('cta_click', { category: 'Hero', action: 'phone_click', label: 'Hero CTA' });
                  }}
                  aria-label="Call Smart Garage Doors from hero section"
                  className="inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white shadow-2xl hover:shadow-3xl px-8 py-4 text-lg rounded-full transform hover:scale-105"
                  style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}
                >
                  <i className="ri-phone-line mr-3 text-xl" aria-hidden="true" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}></i>
                  <span style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>{ctaText}</span>
                </a>
                <a 
                  href="#contact"
                  onClick={() => trackEvent('cta_click', { category: 'Hero', action: 'schedule_click', label: 'Hero Schedule' })}
                  className="inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer whitespace-nowrap bg-white hover:bg-gray-100 text-blue-900 shadow-2xl hover:shadow-3xl px-8 py-4 text-lg rounded-full transform hover:scale-105"
                  style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}
                >
                  <i className="ri-calendar-line mr-3 text-xl" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}></i>
                  <span style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>Schedule Service</span>
                </a>
              </div>

          {/* Trust Indicators - optimized for performance */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>
            <div className="bg-white/10 rounded-lg p-4" style={{ backdropFilter: 'blur(4px)', willChange: 'transform', transform: 'translateZ(0)', overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>
              <div className="text-3xl font-bold text-orange-400" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>24/7</div>
              <div className="text-sm text-gray-100" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>Emergency Service</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4" style={{ backdropFilter: 'blur(4px)', willChange: 'transform', transform: 'translateZ(0)', overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>
              <div className="text-3xl font-bold text-orange-400" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>15+</div>
              <div className="text-sm text-gray-100" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>Years Experience</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4" style={{ backdropFilter: 'blur(4px)', willChange: 'transform', transform: 'translateZ(0)', overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>
              <div className="text-3xl font-bold text-orange-400" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>1000+</div>
              <div className="text-sm text-gray-100" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>Happy Customers</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4" style={{ backdropFilter: 'blur(4px)', willChange: 'transform', transform: 'translateZ(0)', overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>
              <div className="text-3xl font-bold text-orange-400" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>100%</div>
              <div className="text-sm text-gray-100" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' }}>Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - optimized for composited animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ willChange: 'transform', transform: 'translateZ(0) translateX(-50%)' }}>
        <i className="ri-arrow-down-line text-white text-2xl animate-bounce" style={{ willChange: 'transform', transform: 'translateZ(0)' }}></i>
      </div>
    </section>
  );
}
