
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ServiceLinks from '../../../components/seo/ServiceLinks';

const SmithtownNY = () => {
  useEffect(() => {
    document.title = 'Smithtown NY Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair services in Smithtown, NY. Smart Garage Doors offers 24/7 emergency repairs, spring replacement, opener installation, and maintenance. Serving Smithtown and Suffolk County with expert technicians and guaranteed satisfaction.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Smithtown NY garage door repair, garage door installation Smithtown, emergency garage door service, Smart Garage Doors');
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://www.smartestgaragedoors.com'}/smithtown-ny/`);
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical);

    // Add Schema.org JSON-LD for Smithtown NY page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Smart Garage Doors - Smithtown NY",
      "description": "Professional garage door repair and installation services in Smithtown, New York",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://www.smartestgaragedoors.com'}/smithtown-ny/`,
      "telephone": "(123) 456-7890",
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
        "latitude": "40.8559",
        "longitude": "-73.2007"
      },
      "serviceArea": {
        "@type": "City",
        "name": "Smithtown",
        "containedInPlace": {
          "@type": "State",
          "name": "New York"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Smithtown Garage Door Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Garage Door Repair Smithtown NY",
              "description": "24/7 emergency garage door repair services in Smithtown"
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
          "name": "How quickly can you respond to garage door emergencies in Smithtown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smart Garage Doors provides 24/7 emergency garage door repair services in Smithtown, NY. Our local technicians typically respond within 1-2 hours for urgent repairs, ensuring your home's security and your family's safety are quickly restored."
          }
        },
        {
          "@type": "Question",
          "name": "What garage door brands do you service in Smithtown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We service all major garage door brands in Smithtown including Clopay, Wayne Dalton, Amarr, Raynor, and more. Our technicians are trained on residential and commercial systems, ensuring expert repair and maintenance regardless of your door's manufacturer."
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20residential%20garage%20door%20in%20Smithtown%20New%20York%20suburban%20neighborhood%20with%20beautiful%20homes%20and%20tree-lined%20streets%2C%20modern%20garage%20doors%2C%20clean%20professional%20service%20truck%2C%20high%20quality%20residential%20area&width=1200&height=600&seq=smithtown-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Smithtown NY Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional garage door repair and installation services in Smithtown, New York. 
              Smart Garage Doors provides reliable, fast, and affordable solutions for all your garage door needs.
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

      {/* Service Areas in Smithtown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services Throughout Smithtown and Suffolk County
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors proudly serves Smithtown, New York and surrounding areas with comprehensive 
              garage door repair, installation, and maintenance services. Our local technicians understand the 
              unique needs of Suffolk County homeowners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smithtown Main Street</h3>
              <p className="text-gray-600">
                Serving Smithtown's historic downtown area with expert garage door repair services for traditional and 
                modern homes. Our technicians are experienced with older garage door systems and modern upgrades.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commack Area</h3>
              <p className="text-gray-600">
                Specialized garage door services for Commack and surrounding Smithtown neighborhoods. We understand the unique 
                needs of suburban properties and provide appropriate solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kings Park</h3>
              <p className="text-gray-600">
                Premium garage door services for homes in Kings Park and nearby Smithtown areas. From custom installations 
                to high-end opener systems, we provide top-quality solutions for homeowners.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">St. James</h3>
              <p className="text-gray-600">
                Expert garage door repair and maintenance for St. James and Smithtown's beautiful residential communities. 
                We maintain the aesthetic appeal while ensuring optimal functionality and security.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nesconset</h3>
              <p className="text-gray-600">
                Reliable garage door services for Nesconset and Smithtown residents. Our team provides prompt, professional 
                service with a focus on quality workmanship and customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hauppauge</h3>
              <p className="text-gray-600">
                Comprehensive garage door solutions for Hauppauge and Smithtown area homes. From emergency repairs to 
                scheduled maintenance, we keep your garage door operating smoothly year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in Smithtown, NY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers a full range of garage door services to Smithtown residents. 
              Our experienced technicians provide quality workmanship with every service call.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Repairs</h3>
              <p className="text-gray-600">
                24/7 emergency garage door repair services in Smithtown. Broken springs, damaged panels, 
                or malfunctioning openers - we fix it fast to restore your home's security and convenience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-settings-3-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring Replacement</h3>
              <p className="text-gray-600">
                Professional garage door spring replacement in Smithtown, NY. We use high-quality torsion 
                and extension springs with proper tension adjustment for safe, reliable operation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-remote-control-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opener Installation</h3>
              <p className="text-gray-600">
                Smart garage door opener installation and repair in Smithtown. From basic chain drives to 
                smart WiFi-enabled openers, we install and service all major brands.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-hammer-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Panel Replacement</h3>
              <p className="text-gray-600">
                Garage door panel replacement and repair services in Smithtown. We match existing 
                panels or upgrade to new designs while maintaining structural integrity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Inspections</h3>
              <p className="text-gray-600">
                Comprehensive garage door safety inspections for Smithtown homes. We check springs, cables, 
                rollers, and safety features to ensure your family's protection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance Plans</h3>
              <p className="text-gray-600">
                Regular garage door maintenance services in Smithtown, NY. Preventive care extends door life, 
                prevents costly repairs, and ensures smooth, quiet operation year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Smithtown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Smithtown Residents Choose Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a trusted garage door company serving Smithtown, New York, we understand the local market 
              and provide personalized service that meets the unique needs of our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Smithtown Experts</h3>
              <p className="text-gray-600">
                Our technicians live and work in Suffolk County, providing fast response times and 
                understanding of local building codes and weather conditions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-Day Service</h3>
              <p className="text-gray-600">
                Most garage door repairs in Smithtown completed the same day. We stock common parts 
                and arrive prepared to fix your door on the first visit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed &amp; Insured</h3>
              <p className="text-gray-600">
                Fully licensed garage door contractors in New York with comprehensive insurance 
                coverage for your protection and peace of mind.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                100% satisfaction guarantee on all garage door services in Smithtown. We stand behind 
                our work with comprehensive warranties and ongoing support.
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
              Frequently Asked Questions - Smithtown Garage Door Service
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How quickly can you respond to garage door emergencies in Smithtown?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors provides 24/7 emergency garage door repair services in Smithtown, NY. 
                Our local technicians typically respond within 1-2 hours for urgent repairs, ensuring your 
                home's security and your family's safety are quickly restored.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What garage door brands do you service in Smithtown?
              </h3>
              <p className="text-gray-600">
                We service all major garage door brands in Smithtown including Clopay, Wayne Dalton, 
                Amarr, Raynor, and more. Our technicians are trained on residential and commercial 
                systems, ensuring expert repair and maintenance regardless of your door's manufacturer.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer garage door maintenance plans for Smithtown residents?
              </h3>
              <p className="text-gray-600">
                Yes, Smart Garage Doors offers comprehensive maintenance plans for Smithtown homeowners. 
                Regular maintenance extends your garage door's lifespan, prevents costly emergency repairs, 
                and ensures safe operation throughout New York's changing seasons.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Are your garage door technicians licensed in New York?
              </h3>
              <p className="text-gray-600">
                All Smart Garage Doors technicians are fully licensed and insured to work in New York. 
                We maintain current certifications, follow state building codes, and carry comprehensive 
                insurance for your protection during all garage door services in Smithtown.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's the average cost of garage door repair in Smithtown, NY?
              </h3>
              <p className="text-gray-600">
                Garage door repair costs in Smithtown vary depending on the issue. Spring replacement 
                typically ranges from $150-$300, while opener repairs average $100-$250. We provide 
                upfront pricing with no hidden fees and offer free estimates for all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Fix Your Garage Door in Smithtown, NY?
          </h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for fast, reliable garage door repair and installation 
            services in Smithtown, New York. Our local experts are ready to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+19145576816" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Call (914) 557-6816
            </a>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Schedule Service Online
            </button>
          </div>
        </div>
      </section>

      <ServiceLinks 
        title="Complete Garage Door Services in Smithtown, NY"
        showDescription={true}
        locationPath="/smithtown-ny/"
      />
      <Footer />
    </div>
  );
};

export default SmithtownNY;

