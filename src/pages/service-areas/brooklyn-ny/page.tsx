import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const BrooklynNY = () => {
  useEffect(() => {
    document.title = 'Brooklyn NY Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert garage door repair services in Brooklyn, NY. Smart Garage Doors provides emergency repairs, spring replacement, opener installation, and maintenance throughout Brooklyn. Licensed technicians serving all Brooklyn neighborhoods.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Brooklyn NY garage door repair, garage door installation Brooklyn, emergency garage door service, Smart Garage Doors');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/service-areas/brooklyn-ny`);
    }

    // Add Schema.org JSON-LD for Brooklyn NY page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Smart Garage Doors - Brooklyn NY",
      "description": "Professional garage door repair and installation services in Brooklyn, New York",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/service-areas/brooklyn-ny`,
      "telephone": "(123) 456-7890",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "71st 12th Ave",
        "addressLocality": "Dyker Heights, Brooklyn",
        "addressRegion": "NY",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.6782",
        "longitude": "-73.9442"
      },
      "serviceArea": {
        "@type": "City",
        "name": "Brooklyn",
        "containedInPlace": {
          "@type": "State",
          "name": "New York"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Brooklyn Garage Door Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Garage Door Repair Brooklyn NY",
              "description": "24/7 emergency garage door repair services in Brooklyn"
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    // Add FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you service garage doors in all Brooklyn neighborhoods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Smart Garage Doors provides garage door repair and installation services throughout all Brooklyn neighborhoods, from Park Slope to Sheepshead Bay. Our technicians are familiar with Brooklyn's diverse housing stock and building requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can you work on garage doors in Brooklyn brownstones?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We specialize in garage door services for Brooklyn's historic brownstones. Our technicians understand the unique challenges of older buildings and provide solutions that respect architectural character while ensuring modern functionality."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(faqScript);
    };
  }, []);


  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20residential%20garage%20door%20in%20Brooklyn%20New%20York%20urban%20neighborhood%20with%20brownstone%20houses%20and%20city%20skyline%2C%20modern%20garage%20doors%2C%20service%20truck%20parked%20on%20street&width=1200&height=600&seq=brooklyn-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Brooklyn NY Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional garage door repair and installation services throughout Brooklyn, New York. 
              Smart Garage Doors delivers reliable, fast, and affordable solutions for all Brooklyn neighborhoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+19145576816" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Call Now: (914) 557-6816
              </a>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brooklyn Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Brooklyn Service Coverage Area
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors covers all of Brooklyn with our comprehensive garage door services. 
              See our service area map below and the neighborhoods we serve throughout the borough.
            </p>
          </div>
          
          {/* Service Area Map */}
          <div className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Brooklyn Service Area Map</h3>
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10733629354!2d-74.03927096718748!3d40.67818494999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brooklyn NY Service Area Map"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our service area covers all Brooklyn neighborhoods. Click and drag to explore the map.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Park Slope & Prospect Heights</h3>
              <p className="text-gray-600">
                Expert garage door services for historic brownstones and modern condos in Park Slope and 
                Prospect Heights. We specialize in space-efficient solutions for Brooklyn's premium neighborhoods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Williamsburg & Greenpoint</h3>
              <p className="text-gray-600">
                Modern garage door installation and repair for Williamsburg and Greenpoint's trendy residential 
                developments. From industrial lofts to new construction, we handle all garage door needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bay Ridge & Dyker Heights</h3>
              <p className="text-gray-600">
                Comprehensive garage door services for Bay Ridge and Dyker Heights family homes. Our team 
                provides reliable repairs and installations for Brooklyn's established residential communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bensonhurst & Gravesend</h3>
              <p className="text-gray-600">
                Professional garage door repair and maintenance for Bensonhurst and Gravesend neighborhoods. 
                We understand the needs of Brooklyn's diverse communities and provide personalized service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Carroll Gardens & Cobble Hill</h3>
              <p className="text-gray-600">
                Specialized garage door solutions for Carroll Gardens and Cobble Hill's charming brownstones. 
                We preserve architectural character while ensuring modern functionality and security.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sheepshead Bay & Marine Park</h3>
              <p className="text-gray-600">
                Reliable garage door services for Sheepshead Bay and Marine Park residential areas. Our 
                technicians provide prompt, professional service with competitive pricing for Brooklyn families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Brooklyn */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in Brooklyn, NY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers comprehensive garage door services throughout Brooklyn. Our experienced 
              technicians handle everything from emergency repairs to new installations with professional expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Repairs</h3>
              <p className="text-gray-600">
                Round-the-clock emergency garage door repair services throughout Brooklyn. Broken springs, 
                damaged panels, or malfunctioning openers - we respond quickly to restore your security.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Brownstone Specialists</h3>
              <p className="text-gray-600">
                Specialized garage door services for Brooklyn's historic brownstones. We understand the unique 
                requirements of older buildings and provide solutions that respect architectural integrity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Opener Installation</h3>
              <p className="text-gray-600">
                Modern smart garage door opener installation in Brooklyn. WiFi-enabled systems with smartphone 
                control, perfect for busy Brooklyn residents who value convenience and security.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Upgrades</h3>
              <p className="text-gray-600">
                Enhanced garage door security solutions for Brooklyn homes. From reinforced panels to advanced 
                locking systems, we help protect your property in urban environments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-fill text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring & Cable Repair</h3>
              <p className="text-gray-600">
                Professional spring and cable repair services throughout Brooklyn. We use high-quality parts 
                and proper installation techniques to ensure safe, reliable garage door operation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preventive Maintenance</h3>
              <p className="text-gray-600">
                Regular garage door maintenance programs for Brooklyn residents. Scheduled service prevents 
                costly repairs and ensures your garage door operates smoothly through all seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brooklyn Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Brooklyn Residents Trust Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Brooklyn's trusted garage door specialists, we understand the unique challenges of urban 
              garage door service and provide solutions tailored to Brooklyn's diverse neighborhoods.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-subway-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Brooklyn Local Experts</h3>
              <p className="text-gray-600">
                Our technicians know Brooklyn's neighborhoods, building types, and local regulations. 
                We navigate Brooklyn's streets efficiently for faster service response times.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-truck-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Service Fleet</h3>
              <p className="text-gray-600">
                Fully equipped service vehicles stationed throughout Brooklyn for rapid response. 
                We stock common parts and tools to complete most repairs on the first visit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-price-tag-3-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">
                Upfront, honest pricing with no hidden fees. We provide detailed estimates before 
                starting work and offer competitive rates for all Brooklyn garage door services.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5-Star Brooklyn Reviews</h3>
              <p className="text-gray-600">
                Hundreds of satisfied Brooklyn customers rate our garage door services 5 stars. 
                Read reviews from your neighbors and see why Brooklyn trusts Smart Garage Doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Brooklyn Garage Door Service FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you service garage doors in all Brooklyn neighborhoods?
              </h3>
              <p className="text-gray-600">
                Yes, Smart Garage Doors provides garage door repair and installation services throughout 
                all Brooklyn neighborhoods, from Park Slope to Sheepshead Bay. Our technicians are familiar 
                with Brooklyn's diverse housing stock and building requirements.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do you handle parking and access in Brooklyn?
              </h3>
              <p className="text-gray-600">
                Our Brooklyn technicians are experienced with urban parking challenges and building access. 
                We coordinate with building management when needed and work efficiently to minimize disruption 
                to your neighbors and traffic.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can you work on garage doors in Brooklyn brownstones?
              </h3>
              <p className="text-gray-600">
                Absolutely! We specialize in garage door services for Brooklyn's historic brownstones. 
                Our technicians understand the unique challenges of older buildings and provide solutions 
                that respect architectural character while ensuring modern functionality.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's your response time for emergency calls in Brooklyn?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors typically responds to Brooklyn emergency calls within 1-2 hours. 
                Our strategically located service vehicles and knowledge of Brooklyn traffic patterns 
                help us reach you quickly when you need urgent garage door repairs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer garage door maintenance plans for Brooklyn residents?
              </h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive maintenance plans specifically designed for Brooklyn's urban 
                environment. Regular maintenance is especially important in the city due to increased 
                usage and environmental factors like salt air and pollution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Garage Door Service in Brooklyn, NY?
          </h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for expert garage door repair and installation services 
            throughout Brooklyn. Our local technicians are ready to help with all your garage door needs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+19145576816" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Call (914) 557-6816
            </a>
            <a href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Schedule Service Online
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrooklynNY;
