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
  
  // Determine which image size to use based on screen size
  const [imageSize, setImageSize] = useState<'800' | '1280' | '1920'>('1280');
  
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:28',message:'Hero component rendered',data:{hasLocation:!!location,locationName,basePath,imageSize},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'A'})}).catch(()=>{});
    // #endregion agent log
    
    // #region agent log
    const updateImageSize = () => {
      const width = window.innerWidth;
      const newSize = width <= 800 ? '800' : width >= 1920 ? '1920' : '1280';
      if (newSize !== imageSize) {
        setImageSize(newSize);
        fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:35',message:'Image size changed',data:{oldSize:imageSize,newSize,windowWidth:width},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'H'})}).catch(()=>{});
      }
    };
    // #endregion agent log
    
    updateImageSize();
    window.addEventListener('resize', updateImageSize);
    return () => window.removeEventListener('resize', updateImageSize);
  }, [location, locationName, imageSize]);
  
  const heroImageUrl = `${basePath}hero-van-${imageSize}.jpg`;
  
  // #region agent log
  useEffect(() => {
    const testImg = new Image();
    testImg.onload = () => {
      fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:51',message:'Background image loaded successfully',data:{src:heroImageUrl,width:testImg.width,height:testImg.height},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'E'})}).catch(()=>{});
    };
    testImg.onerror = () => {
      fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:56',message:'Background image failed to load',data:{src:heroImageUrl,fullUrl:typeof window!=='undefined'?new URL(heroImageUrl,window.location.origin).href:'N/A'},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'F'})}).catch(()=>{});
    };
    testImg.src = heroImageUrl;
  }, [heroImageUrl]);
  // #endregion agent log

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Preload critical background image */}
      <link 
        rel="preload" 
        as="image" 
        href={heroImageUrl}
        fetchPriority="high"
      />
      {/* Optimized responsive background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-van-bg z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.75), rgba(30, 58, 138, 0.65)), url('${heroImageUrl}')`
        }}
      />
      {/* Hidden image for SEO */}
      <img 
        src={heroImageUrl}
        alt="Smart Garage Doors service van parked in front of a residential garage. Professional garage door repair and installation services with branded white service vehicle."
        className="hidden"
        aria-hidden="true"
        width="1280"
        height="720"
        onError={(e) => {
          // #region agent log
          fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:82',message:'SEO img load error',data:{src:e.currentTarget.src,basePath,imageSize},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'C'})}).catch(()=>{});
          // #endregion agent log
        }}
        onLoad={() => {
          // #region agent log
          fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:87',message:'SEO img loaded successfully',data:{src:heroImageUrl},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'D'})}).catch(()=>{});
          // #endregion agent log
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Professional <span className="text-orange-400">Garage Door</span> Services
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {responseTimeText}
          </p>
          {location && !isLoading && (
            <p className="text-lg md:text-xl mb-8 text-orange-300 max-w-3xl mx-auto font-semibold">
              {serviceAreaText}
            </p>
          )}
          {!location && !isLoading && (
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              {serviceAreaText}
            </p>
          )}
          
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a 
                  href="tel:914-557-6816"
                  onClick={() => {
                    trackPhoneClick('914-557-6816');
                    trackEvent('cta_click', { category: 'Hero', action: 'phone_click', label: 'Hero CTA' });
                  }}
                  className="inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white shadow-2xl hover:shadow-3xl px-8 py-4 text-lg rounded-full transform hover:scale-105"
                >
                  <i className="ri-phone-line mr-3 text-xl"></i>
                  {ctaText}
                </a>
                <a 
                  href="#contact"
                  onClick={() => trackEvent('cta_click', { category: 'Hero', action: 'schedule_click', label: 'Hero Schedule' })}
                  className="inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer whitespace-nowrap bg-white hover:bg-gray-100 text-blue-900 shadow-2xl hover:shadow-3xl px-8 py-4 text-lg rounded-full transform hover:scale-105"
                >
                  <i className="ri-calendar-line mr-3 text-xl"></i>
                  Schedule Service
                </a>
              </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-400">24/7</div>
              <div className="text-sm text-gray-200">Emergency Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-400">15+</div>
              <div className="text-sm text-gray-200">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-400">1000+</div>
              <div className="text-sm text-gray-200">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-400">100%</div>
              <div className="text-sm text-gray-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl"></i>
      </div>
    </section>
  );
}
