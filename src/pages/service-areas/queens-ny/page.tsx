
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import ServiceLinks from '../../../components/seo/ServiceLinks';

const QueensNY = () => {
  useEffect(() => {
    document.title = 'Queens NY Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair services in Queens, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Queens neighborhoods. Licensed technicians serving all Queens areas.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Queens NY garage door repair, garage door installation Queens, emergency garage door service, Smart Garage Doors');
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://www.smartestgaragedoors.com'}/queens-ny/`);
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical);

    // Add Schema.org JSON-LD for Queens NY page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Smart Garage Doors - Queens NY",
      "description": "Professional garage door repair and installation services in Queens, New York",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://www.smartestgaragedoors.com'}/queens-ny/`,
      "telephone": "(914) 557-6816",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "141-24 70th Ave",
        "addressLocality": "Queens",
        "addressRegion": "NY",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.7282",
        "longitude": "-73.7949"
      },
      "serviceArea": {
        "@type": "City",
        "name": "Queens",
        "containedInPlace": {
          "@type": "State",
          "name": "New York"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Queens Garage Door Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Garage Door Repair Queens NY",
              "description": "24/7 emergency garage door repair services in Queens"
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
    <div className="min-h-screen bg-white">
      <DynamicMetaTags 
        title="Queens NY Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service"
        description="Professional garage door repair services in Queens, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Queens neighborhoods. Licensed technicians serving all Queens areas."
        keywords="Queens NY garage door repair, garage door installation Queens, emergency garage door service, Smart Garage Doors"
        canonical={`${import.meta.env.VITE_SITE_URL || 'https://www.smartestgaragedoors.com'}/queens-ny/`}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20residential%20garage%20door%20in%20Queens%20New%20York%20diverse%20neighborhood%20with%20single%20family%20homes%20and%20apartment%20buildings%2C%20modern%20garage%20doors%2C%20service%20vehicle%20on%20residential%20street&width=1200&height=600&seq=queens-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 w-full">
              Queens NY Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert garage door repair and installation services throughout Queens, New York. 
              Smart Garage Doors provides reliable, professional solutions for all Queens neighborhoods and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
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

      {/* Queens Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services Throughout Queens Communities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors serves all Queens neighborhoods with comprehensive garage door repair, 
              installation, and maintenance services. Our experienced technicians understand the diverse 
              housing needs across Queens' many communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Astoria & Long Island City</h3>
              <p className="text-gray-600">
                Modern garage door solutions for Astoria and Long Island City's growing residential developments. 
                From luxury condos to converted warehouses, we handle all types of garage door installations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flushing & Whitestone</h3>
              <p className="text-gray-600">
                Comprehensive garage door services for Flushing and Whitestone family neighborhoods. 
                Our technicians provide reliable repairs and maintenance for Queens' established communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Forest Hills & Kew Gardens</h3>
              <p className="text-gray-600">
                Premium garage door services for Forest Hills and Kew Gardens upscale residential areas. 
                We specialize for high-quality installations that complement these prestigious neighborhoods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Jamaica & St. Albans</h3>
              <p className="text-gray-600">
                Affordable, reliable garage door repair and installation for Jamaica and St. Albans residents. 
                We provide quality service with competitive pricing for Queens' diverse communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bayside & Little Neck</h3>
              <p className="text-gray-600">
                Expert garage door services for Bayside and Little Neck's suburban-style homes. 
                Our team understands the needs of Queens' quieter residential neighborhoods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Elmhurst & Corona</h3>
              <p className="text-gray-600">
                Professional garage door repair and maintenance for Elmhurst and Corona's diverse housing stock. 
                We serve Queens' multicultural communities with personalized, respectful service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Queens */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in Queens, NY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers full-service garage door solutions throughout Queens. Our skilled 
              technicians provide everything from emergency repairs to custom installations with professional excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service</h3>
              <p className="text-gray-600">
                Fast same-day garage door repair service throughout Queens. Our local technicians respond 
                quickly to minimize disruption to your daily routine and restore your garage door functionality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-gear-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Residential Specialists</h3>
              <p className="text-gray-600">
                Specialized garage door services for Queens' diverse residential properties. From single-family 
                homes to multi-unit buildings, we provide tailored solutions for every property type.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-settings-4-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring &amp; Hardware Repair</h3>
              <p className="text-gray-600">
                Professional spring replacement and hardware repair services in Queens. We use premium parts 
                and proper installation techniques to ensure long-lasting, safe garage door operation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-door-open-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Door Installation</h3>
              <p className="text-gray-600">
                Custom garage door installation services throughout Queens. We offer a wide selection of 
                styles, materials, and colors to match your home's architecture and personal preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-wifi-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Technology Integration</h3>
              <p className="text-gray-600">
                Modern smart garage door opener installation in Queens. WiFi-enabled systems with smartphone 
                control, security cameras, and home automation integration for tech-savvy homeowners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Inspections</h3>
              <p className="text-gray-600">
                Comprehensive garage door safety inspections for Queens homeowners. We check all components, 
                test safety features, and provide detailed reports to ensure your family's protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Queens Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Queens Residents Choose Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Queens' preferred garage door service provider, we understand the borough's unique characteristics 
              and deliver personalized solutions that meet the diverse needs of Queens communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-community-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Queens Community Focus</h3>
              <p className="text-gray-600">
                Our technicians live and work in Queens, understanding local building codes, weather patterns, 
                and the unique needs of each neighborhood from Astoria to Jamaica.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-translate-2 text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multilingual Service</h3>
              <p className="text-gray-600">
                Our diverse team speaks multiple languages to better serve Queens' multicultural communities. 
                We provide clear communication in the language you're most comfortable with.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-money-dollar-circle-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Queens Pricing</h3>
              <p className="text-gray-600">
                Fair, transparent pricing designed for Queens residents. We offer competitive rates without 
                compromising on quality, with flexible payment options and no hidden fees.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-medal-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Queens Track Record</h3>
              <p className="text-gray-600">
                Years of successful garage door service throughout Queens with thousands of satisfied customers. 
                Check our reviews from neighbors across all Queens neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Accurate Pricing for Your Queens Location
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Pricing varies based on your specific Queens neighborhood, garage door type, and service needed. 
            We provide free, no-obligation estimates with transparent, upfront pricing for all Queens customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+19145576816" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center"
            >
              <i className="ri-phone-fill mr-2"></i>
              Call for Queens Pricing
            </a>
            <a 
              href="/book-now/" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center"
            >
              <i className="ri-calendar-line mr-2"></i>
              Schedule Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us vs Competitors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Smart Garage Doors Stands Out in Queens
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When choosing a garage door service provider in Queens, experience, reliability, and local knowledge matter. 
              Here's why Queens residents trust Smart Garage Doors.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="overflow-x-auto" style={{ scrollbarGutter: 'stable' }}>
              <table className="w-full">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Smart Garage Doors</th>
                    <th className="px-6 py-4 text-center font-semibold bg-gray-700">Typical Competitors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Response Time</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        <i className="ri-check-line mr-1"></i> 60-90 min
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">2-4 hours</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Same-Day Service</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        <i className="ri-check-line mr-1"></i> Available
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Limited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Queens Coverage</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        <i className="ri-check-line mr-1"></i> All Neighborhoods
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Limited Areas</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Customer Reviews</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        <i className="ri-star-fill text-yellow-400 mr-1"></i> 4.9/5 (150+)
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Queens Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real reviews from Queens homeowners who've trusted Smart Garage Doors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Fast service in Forest Hills! My garage door spring broke on a Sunday morning, and they had someone 
                out within 90 minutes. Professional work, fair price, and very knowledgeable technician."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  M.K.
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria K.</div>
                  <div className="text-sm text-gray-500">Forest Hills, Queens</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Excellent work in Flushing! They replaced my old garage door opener with a new smart system. 
                The technician was patient explaining how everything works. Highly recommend for Queens residents!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  J.C.
                </div>
                <div>
                  <div className="font-semibold text-gray-900">James C.</div>
                  <div className="text-sm text-gray-500">Flushing, Queens</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Great experience in Astoria! They fixed my garage door track alignment issue quickly. Fair pricing, 
                no upselling, and the technician even cleaned up after himself. Will definitely call again."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  S.L.
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah L.</div>
                  <div className="text-sm text-gray-500">Astoria, Queens</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Queens Garage Door Service FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Which Queens neighborhoods do you serve?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors serves all Queens neighborhoods including Astoria, Flushing, Forest Hills, 
                Jamaica, Bayside, Elmhurst, Corona, Long Island City, Whitestone, Kew Gardens, Little Neck, 
                St. Albans, Rego Park, Woodside, Sunnyside, Jackson Heights, Fresh Meadows, and many more throughout 
                the borough. No matter where you are in Queens, we can provide fast, reliable garage door service.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How quickly can you respond to garage door emergencies in Queens?
              </h3>
              <p className="text-gray-600">
                Our Queens-based technicians typically respond to emergency garage door calls within 60-90 minutes 
                throughout most Queens neighborhoods. We maintain service vehicles strategically positioned throughout 
                the borough and our technicians know the best routes to avoid traffic and reach you quickly, even 
                during peak traffic times. For non-emergency repairs, same-day service is available most days.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you work on garage doors in Queens apartment buildings?
              </h3>
              <p className="text-gray-600">
                Yes, we provide garage door services for both single-family homes and multi-unit buildings 
                throughout Queens. Our technicians are experienced with building management requirements and 
                coordinate access as needed for apartment complex garage doors. We work with property managers 
                to ensure minimal disruption to residents while maintaining security protocols.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What garage door brands do you install and service in Queens?
              </h3>
              <p className="text-gray-600">
                We install and service all major garage door brands in Queens including Clopay, Wayne Dalton, 
                Amarr, Raynor, CHI, LiftMaster, Chamberlain, Genie, Craftsman, and more. Our technicians are 
                trained on residential and commercial systems from all leading manufacturers. If you have a 
                specific brand preference, we can source and install it for you.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer financing for garage door installation in Queens?
              </h3>
              <p className="text-gray-600">
                Yes, Smart Garage Doors offers flexible financing options for Queens residents. We understand 
                that garage door replacement is a significant investment and provide payment plans to make 
                quality garage doors affordable for every budget. Options include low monthly payments and 
                interest-free plans for qualified customers. Contact us to discuss financing options.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What makes your Queens service different from other garage door companies?
              </h3>
              <p className="text-gray-600">
                We specialize in serving Queens communities with local expertise, faster response times, and 
                personalized service. Our technicians understand Queens' diverse neighborhoods, building types, 
                and specific challenges like weather, traffic patterns, and parking. We offer multilingual service, 
                transparent pricing with no hidden fees, comprehensive warranties, and a proven track record 
                serving thousands of Queens homeowners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Links - Creates incoming internal links to service pages */}
      <ServiceLinks 
        title="Complete Garage Door Services in Queens, NY"
        showDescription={true}
        locationPath="/queens-ny/"
      />

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Expert Garage Door Service in Queens, NY?
          </h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for professional garage door repair and installation services 
            throughout Queens. Our local experts are standing by to help with all your garage door needs!
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

      <Footer />
    </div>
  );
};

export default QueensNY;
