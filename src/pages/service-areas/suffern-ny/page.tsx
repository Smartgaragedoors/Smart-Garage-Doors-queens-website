import { useEffect } from 'react';
import { buildCanonical } from '../../../config/canonical';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import ServiceLinks from '../../../components/seo/ServiceLinks';
import NearbyAreasSection from '../../../components/seo/NearbyAreasSection';

export default function SuffernNY() {
  useEffect(() => {
    // Add geo tags for Suffern, NY
    const geoPosition = document.querySelector('meta[name="geo.position"]') || document.createElement('meta');
    geoPosition.setAttribute('name', 'geo.position');
    geoPosition.setAttribute('content', '41.1148;-74.1496');
    if (!document.querySelector('meta[name="geo.position"]')) {
      document.head.appendChild(geoPosition);
    }

    const geoRegion = document.querySelector('meta[name="geo.region"]') || document.createElement('meta');
    geoRegion.setAttribute('name', 'geo.region');
    geoRegion.setAttribute('content', 'US-NY');
    if (!document.querySelector('meta[name="geo.region"]')) {
      document.head.appendChild(geoRegion);
    }

    const geoPlacename = document.querySelector('meta[name="geo.placename"]') || document.createElement('meta');
    geoPlacename.setAttribute('name', 'geo.placename');
    geoPlacename.setAttribute('content', 'Suffern, New York');
    if (!document.querySelector('meta[name="geo.placename"]')) {
      document.head.appendChild(geoPlacename);
    }

    // Add Schema.org JSON-LD for Suffern service area
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Smart Garage Doors - Suffern NY",
      "description": "Professional garage door repair and installation services in Suffern, New York",
      "url": buildCanonical('/suffern-ny'),
      "telephone": "(914) 557-6816",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "31 Deerwood Road",
        "addressLocality": "Suffern",
        "addressRegion": "NY",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.1148",
        "longitude": "-74.1496"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "serviceArea": {
        "@type": "City",
        "name": "Suffern, NY"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Garage Door Services in Suffern NY",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Garage Door Repair Suffern NY",
              "description": "24/7 emergency garage door repair services in Suffern"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Garage Door Installation Suffern NY",
              "description": "Professional garage door installation services in Suffern"
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <DynamicMetaTags 
        title="Suffern NY Garage Door Repair & Installation | Smartest Garage Doors"
        description="Garage door repair in Suffern, NY. 5.0?, 392 reviews. 24/7 emergency, same-day service. Licensed & insured."
        keywords="garage door repair Suffern NY, garage door installation Suffern, emergency garage door service Suffern"
        canonical={buildCanonical('/suffern-ny')}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/72cf9dc6-b05d-489e-29d5-16ea0a77d200/hero')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <strong>Garage Door Repair Suffern NY</strong>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Professional garage door repair and installation services in Suffern, New York. 24/7 emergency repairs available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9145576816" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap"
              >
                Call Now: (914) 557-6816
              </a>
              <a 
                href="/book-now/" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <strong>Garage Door Services in Suffern NY</strong>
            </h2>
            <p className="text-xl text-gray-600">
              Complete garage door solutions for Suffern residents and businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-tools-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Repairs</h3>
              <p className="text-gray-600">
                24/7 emergency garage door repair services in Suffern. Broken springs, cables, or opener issues fixed fast.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-home-gear-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">New Installations</h3>
              <p className="text-gray-600">
                Professional garage door installation in Suffern with top-quality doors and openers from leading brands.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-settings-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Spring Replacement</h3>
              <p className="text-gray-600">
                Expert garage door spring replacement and repair services in Suffern. Safe and reliable spring solutions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-remote-control-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Opener Service</h3>
              <p className="text-gray-600">
                Garage door opener repair and installation in Suffern. Smart openers with smartphone connectivity available.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
              <p className="text-gray-600">
                Regular garage door maintenance services in Suffern to prevent costly repairs and extend door life.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-customer-service-2-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial Service</h3>
              <p className="text-gray-600">
                Commercial garage door services in Suffern for businesses, warehouses, and industrial facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <strong>Serving Suffern, NY & Surrounding Areas</strong>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Smart Garage Doors proudly serves Suffern, New York and the greater Rockland County area. Our local technicians understand the unique needs of Suffern homeowners and businesses, from the historic downtown area to the newer residential developments.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're dealing with a garage door emergency in the Village of Suffern or need a new installation for your home near Ramapo College, our team is ready to help with fast, professional service.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="ri-check-line text-orange-500 text-xl mr-3"></i>
                  <span className="text-gray-700">Same-day service available in Suffern</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-orange-500 text-xl mr-3"></i>
                  <span className="text-gray-700">Free estimates for all Suffern residents</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-orange-500 text-xl mr-3"></i>
                  <span className="text-gray-700">Warranty on all parts and labor</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/garage-door-repair-suffern-ny-technician.jpg"
                alt="Suffern NY neighborhood with garage doors"
                className="rounded-lg shadow-lg w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Garage Door Service in Suffern, NY?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Call now for fast, professional garage door repair and installation services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9145576816" 
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap"
            >
              Call (914) 557-6816
            </a>
            <a 
              href="/book-now/" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap"
            >
              Schedule Service
            </a>
          </div>
        </div>
      </section>

      <NearbyAreasSection currentPath="/suffern-ny/" cityName="Suffern" />
      <ServiceLinks 
        title="Complete Garage Door Services in Suffern, NY"
        showDescription={true}
        locationPath="/suffern-ny/"
      />
      <Footer />
    </div>
  );
}
