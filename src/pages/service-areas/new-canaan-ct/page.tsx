
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Services from '../../../components/feature/Services';
import Reviews from '../../../components/feature/Reviews';
import Contact from '../../../components/feature/Contact';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import ServiceLinks from '../../../components/seo/ServiceLinks';

export default function NewCanaanCTPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://www.smartestgaragedoors.com';

  useEffect(() => {
    // Schema.org structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Smart Garage Doors - New Canaan CT",
      "description": "Professional garage door repair and installation services in New Canaan, CT",
      "url": "https://www.smartestgaragedoors.com/new-canaan-ct/",
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
        "latitude": "41.1468",
        "longitude": "-73.4948"
      },
      "areaServed": "New Canaan, CT",
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
        title="New Canaan CT Garage Door Repair & Installation | Smartest Garage Doors"
        description="Garage door repair in New Canaan, CT. 5.0★, 392 reviews. Same-day service, emergency repairs. Licensed & insured."
        keywords="garage door repair New Canaan CT, garage door installation New Canaan, emergency garage door repair Connecticut"
        canonical={`${siteUrl}/new-canaan-ct/`}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Charming%20residential%20neighborhood%20in%20New%20Canaan%20Connecticut%20with%20traditional%20colonial%20homes%20and%20garage%20doors%2C%20tree-lined%20streets%2C%20professional%20garage%20door%20service%2C%20classic%20New%20England%20architecture&width=1200&height=600&seq=newcanaan-hero&orientation=landscape')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              New Canaan CT Garage Door Repair & Installation
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Professional garage door services in New Canaan, Connecticut. Emergency repairs, quality installations, and maintenance for New Canaan's distinctive homes. Serving the community with reliable, expert service.
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
                Expert Garage Door Service in New Canaan, CT
              </h2>
              <p className="text-gray-600 mb-6">
                Smart Garage Doors provides exceptional garage door services to New Canaan, Connecticut residents. We appreciate the classic charm and architectural beauty of New Canaan homes and offer garage door solutions that complement your property's unique character while providing modern functionality and security.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-orange-500">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Service</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-orange-500">Custom</div>
                  <div className="text-sm text-gray-600">Design Solutions</div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Traditional and modern garage door styles
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Serving New Canaan and surrounding areas
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Architectural compatibility expertise
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Traditional%20garage%20door%20installation%20on%20colonial%20home%20in%20New%20Canaan%20Connecticut%2C%20professional%20technician%20working%2C%20classic%20New%20England%20residential%20architecture%2C%20quality%20craftsmanship%20photography&width=600&height=400&quality=85&seq=newcanaan-service&orientation=landscape"
                alt="Garage door service in New Canaan CT"
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
      <ServiceLinks 
        title="Complete Garage Door Services in New Canaan, CT"
        showDescription={true}
        locationPath="/new-canaan-ct/"
      />
      <Footer />
    </div>
  );
}
