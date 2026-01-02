
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import Services from '../../../components/feature/Services';
import Reviews from '../../../components/feature/Reviews';
import Contact from '../../../components/feature/Contact';

export default function FlushingNYPage() {
  useEffect(() => {
    document.title = 'Flushing NY Garage Door Repair & Installation | Smart Garage Doors';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair and installation services in Flushing, NY. Emergency repairs, new installations, spring replacement. Call (914) 557-6816 for same-day service in Flushing, Queens.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'garage door repair Flushing NY, garage door installation Flushing, emergency garage door repair Queens, garage door spring replacement Flushing');
    }

    // Geo tags for Flushing, NY
    const geoPosition = document.querySelector('meta[name="geo.position"]') || document.createElement('meta');
    geoPosition.setAttribute('name', 'geo.position');
    geoPosition.setAttribute('content', '40.7678;-73.8333');
    if (!document.querySelector('meta[name="geo.position"]')) document.head.appendChild(geoPosition);

    const geoRegion = document.querySelector('meta[name="geo.region"]') || document.createElement('meta');
    geoRegion.setAttribute('name', 'geo.region');
    geoRegion.setAttribute('content', 'US-NY');
    if (!document.querySelector('meta[name="geo.region"]')) document.head.appendChild(geoRegion);

    const geoPlacename = document.querySelector('meta[name="geo.placename"]') || document.createElement('meta');
    geoPlacename.setAttribute('name', 'geo.placename');
    geoPlacename.setAttribute('content', 'Flushing, New York');
    if (!document.querySelector('meta[name="geo.placename"]')) document.head.appendChild(geoPlacename);

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://smartestgaragedoors.com/service-areas/flushing-ny');
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical);

    // Last modified
    const lastModified = document.querySelector('meta[name="last-modified"]') || document.createElement('meta');
    lastModified.setAttribute('name', 'last-modified');
    lastModified.setAttribute('content', new Date().toISOString());
    if (!document.querySelector('meta[name="last-modified"]')) document.head.appendChild(lastModified);

    // Schema.org structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Smart Garage Doors - Flushing NY",
      "description": "Professional garage door repair and installation services in Flushing, NY",
      "url": "https://smartestgaragedoors.com/service-areas/flushing-ny",
      "telephone": "(914) 557-6816",
      "email": "info@smartestgaragedoors.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Flushing",
        "addressRegion": "NY",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.7678",
        "longitude": "-73.8333"
      },
      "areaServed": "Flushing, NY",
      "serviceType": "Garage Door Repair and Installation",
      "openingHours": "Mo-Su 06:00-22:00"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags 
        title="Flushing NY Garage Door Repair & Installation | Smart Garage Doors"
        description="Professional garage door repair and installation services in Flushing, NY. Emergency repairs, new installations, spring replacement. Same-day service in Flushing, Queens."
        keywords="garage door repair Flushing NY, garage door installation Flushing, emergency garage door repair Queens, garage door spring replacement Flushing"
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20repair%20service%20in%20Flushing%20Queens%20New%20York%20residential%20neighborhood%20with%20modern%20homes%20and%20driveways%2C%20clean%20suburban%20street%20with%20garage%20doors%20visible%2C%20professional%20service%20truck%2C%20bright%20daylight%2C%20high%20quality%20photography&width=1200&height=600&seq=flushing-hero&orientation=landscape')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Flushing NY Garage Door Repair & Installation
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Professional garage door services in Flushing, Queens. Emergency repairs, new installations, and maintenance. Serving Flushing residents with reliable, same-day service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:(914) 557-6816"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center whitespace-nowrap"
              >
                <i className="ri-phone-fill mr-2"></i>
                Call (914) 557-6816
              </a>
              <a 
                href="#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center whitespace-nowrap"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Trusted Garage Door Service in Flushing, Queens
              </h2>
              <p className="text-gray-600 mb-6">
                Smart Garage Doors has been serving Flushing, NY residents with professional garage door repair and installation services. Our experienced technicians understand the unique needs of Flushing homeowners and provide reliable solutions for all garage door issues.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-orange-500">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Service</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-orange-500">Same Day</div>
                  <div className="text-sm text-gray-600">Repairs Available</div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Licensed & insured technicians
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Serving all of Flushing and surrounding Queens areas
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Competitive pricing with upfront estimates
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20garage%20door%20installation%20in%20Flushing%20Queens%20New%20York%20residential%20home%2C%20professional%20technician%20working%20on%20garage%20door%2C%20clean%20suburban%20neighborhood%2C%20high%20quality%20service%20photography%2C%20bright%20natural%20lighting&width=600&height=400&quality=85&seq=flushing-service&orientation=landscape"
                alt="Garage door service in Flushing NY"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
