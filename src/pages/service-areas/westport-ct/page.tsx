
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Services from '../../../components/feature/Services';
import Reviews from '../../../components/feature/Reviews';
import Contact from '../../../components/feature/Contact';

export default function WestportCTPage() {
  useEffect(() => {
    document.title = 'Westport CT Garage Door Repair & Installation | Smart Garage Doors';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair and installation services in Westport, CT. Emergency repairs, new installations, spring replacement. Call (914) 557-6816 for same-day service in Westport, Connecticut.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'garage door repair Westport CT, garage door installation Westport, emergency garage door repair Connecticut, garage door spring replacement Westport');
    }

    // Geo tags for Westport, CT
    const geoPosition = document.querySelector('meta[name="geo.position"]') || document.createElement('meta');
    geoPosition.setAttribute('name', 'geo.position');
    geoPosition.setAttribute('content', '41.1415;-73.3579');
    if (!document.querySelector('meta[name="geo.position"]')) document.head.appendChild(geoPosition);

    const geoRegion = document.querySelector('meta[name="geo.region"]') || document.createElement('meta');
    geoRegion.setAttribute('name', 'geo.region');
    geoRegion.setAttribute('content', 'US-CT');
    if (!document.querySelector('meta[name="geo.region"]')) document.head.appendChild(geoRegion);

    const geoPlacename = document.querySelector('meta[name="geo.placename"]') || document.createElement('meta');
    geoPlacename.setAttribute('name', 'geo.placename');
    geoPlacename.setAttribute('content', 'Westport, Connecticut');
    if (!document.querySelector('meta[name="geo.placename"]')) document.head.appendChild(geoPlacename);

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://smartestgaragedoors.com/service-areas/westport-ct');
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
      "name": "Smart Garage Doors - Westport CT",
      "description": "Professional garage door repair and installation services in Westport, CT",
      "url": "https://smartestgaragedoors.com/service-areas/westport-ct",
      "telephone": "(914) 557-6816",
      "email": "info@smartestgaragedoors.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Westport",
        "addressRegion": "CT",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.1415",
        "longitude": "-73.3579"
      },
      "areaServed": "Westport, CT",
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
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20coastal%20homes%20in%20Westport%20Connecticut%20with%20beautiful%20garage%20doors%2C%20upscale%20waterfront%20neighborhood%2C%20professional%20garage%20door%20service%2C%20sophisticated%20residential%20architecture%20near%20Long%20Island%20Sound&width=1200&height=600&seq=westport-hero&orientation=landscape')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Westport CT Garage Door Repair & Installation
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Premium garage door services in Westport, Connecticut. Emergency repairs, luxury installations, and maintenance for Westport's coastal homes. Trusted by Westport residents for exceptional quality and service.
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
                Premium Garage Door Service in Westport, CT
              </h2>
              <p className="text-gray-600 mb-6">
                Smart Garage Doors serves Westport, Connecticut with premium garage door services tailored to coastal living. Our expertise in salt-air resistant materials and luxury installations makes us the preferred choice for Westport's discerning homeowners who demand both beauty and durability.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-orange-500">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Service</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-orange-500">Coastal</div>
                  <div className="text-sm text-gray-600">Resistant Materials</div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Salt-air resistant garage door solutions
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Serving Westport and Fairfield County
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Luxury installations for coastal homes
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Luxury%20garage%20door%20installation%20on%20coastal%20home%20in%20Westport%20Connecticut%2C%20professional%20technician%20working%20near%20waterfront%20property%2C%20salt-resistant%20materials%2C%20high-end%20residential%20service%20photography&width=600&height=400&quality=85&seq=westport-service&orientation=landscape"
                alt="Premium garage door service in Westport CT"
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
