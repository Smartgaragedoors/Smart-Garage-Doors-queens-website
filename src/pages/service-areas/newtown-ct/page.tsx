import { useEffect } from 'react';
import { buildCanonical } from '../../../config/canonical';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Services from '../../../components/feature/Services';
import Reviews from '../../../components/feature/Reviews';
import Contact from '../../../components/feature/Contact';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import ServiceLinks from '../../../components/seo/ServiceLinks';
import NearbyAreasSection from '../../../components/seo/NearbyAreasSection';

export default function NewtownCTPage() {
  useEffect(() => {
    // Schema.org structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Smart Garage Doors - Newtown CT",
      "description": "Professional garage door repair and installation services in Newtown, CT",
      "url": "https://www.smartestgaragedoors.com/newtown-ct/",
      "telephone": "(914) 557-6816",
      "email": "info@smartestgaragedoors.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "141-24 70th Ave",
        "addressLocality": "Flushing",
        "addressRegion": "NY",
        "postalCode": "11367",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.4148",
        "longitude": "-73.3026"
      },
      "areaServed": "Newtown, CT",
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
        title="Newtown CT Garage Door Repair & Installation | Smartest Garage Doors"
        description="Garage door repair in Newtown, CT. 5.0★, 392 reviews. Same-day service, emergency repairs. Licensed & insured."
        keywords="garage door repair Newtown CT, garage door installation Newtown, emergency garage door repair Connecticut"
        canonical={buildCanonical('/newtown-ct')}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/images/garage-door-panel-repair-dan-hammer-smart-garage-doors.jpg')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Newtown CT Garage Door Repair & Installation
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Reliable garage door services in Newtown, Connecticut. Emergency repairs, quality installations, and maintenance for Newtown families. Serving the community with trusted, professional garage door solutions.
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
                href="/book-now/"
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
                Trusted Garage Door Service in Newtown, CT
              </h2>
              <p className="text-gray-600 mb-6">
                Smart Garage Doors proudly serves Newtown, Connecticut families with reliable <a href="/garage-door-repair/" className="text-blue-600 hover:text-blue-700 font-medium">garage door repair</a> and <a href="/garage-door-installation/" className="text-blue-600 hover:text-blue-700 font-medium">installation</a> services. We understand the importance of home security and convenience for Newtown residents and provide dependable solutions that keep your family safe and your garage door operating smoothly year-round. For urgent issues, our <a href="/emergency-garage-door-repair/" className="text-blue-600 hover:text-blue-700 font-medium">24/7 emergency service</a> is available.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-orange-500">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Service</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-orange-500">Family</div>
                  <div className="text-sm text-gray-600">Owned & Operated</div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Family-focused garage door solutions
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Serving Newtown and surrounding communities
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Safety-first installation and repair approach
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/garage-door-panel-repair-dan-hammer-smart-garage-doors.jpg"
                alt="Garage door service in Newtown CT"
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
      <NearbyAreasSection currentPath="/newtown-ct/" cityName="Newtown" />
      <ServiceLinks 
        title="Complete Garage Door Services in Newtown, CT"
        showDescription={true}
        locationPath="/newtown-ct/"
      />
      <Footer />
    </div>
  );
}
