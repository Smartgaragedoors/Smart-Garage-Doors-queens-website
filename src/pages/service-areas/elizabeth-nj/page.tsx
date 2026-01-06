
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import ServiceLinks from '../../../components/seo/ServiceLinks';

const ElizabethNJ = () => {
  useEffect(() => {
    document.title = 'Elizabeth NJ Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair services in Elizabeth, NJ. Smart Garage Doors offers 24/7 emergency repairs, spring replacement, opener installation, and maintenance. Serving Union County with expert technicians and guaranteed satisfaction.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Elizabeth NJ garage door repair, garage door installation Elizabeth, emergency garage door service, Smart Garage Doors');
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://www.smartestgaragedoors.com'}/elizabeth-nj/`);
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical);

    // Add Schema.org JSON-LD for Elizabeth NJ page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Smart Garage Doors - Elizabeth NJ",
      "description": "Professional garage door repair and installation services in Elizabeth, New Jersey",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://www.smartestgaragedoors.com'}/elizabeth-nj/`,
      "telephone": "(914) 557-6816",
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
        "latitude": "40.6639",
        "longitude": "-74.2107"
      },
      "serviceArea": {
        "@type": "City",
        "name": "Elizabeth",
        "containedInPlace": {
          "@type": "State",
          "name": "New Jersey"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Elizabeth Garage Door Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Garage Door Repair Elizabeth NJ",
              "description": "24/7 emergency garage door repair services in Elizabeth"
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
          "name": "How quickly can you respond to garage door emergencies in Elizabeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smart Garage Doors provides 24/7 emergency garage door repair services in Elizabeth, NJ. Our local technicians typically respond within 1-2 hours for urgent repairs, ensuring your home's security and your family's safety are quickly restored."
          }
        },
        {
          "@type": "Question",
          "name": "What garage door brands do you service in Union County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We service all major garage door brands in Elizabeth including Clopay, Wayne Dalton, Amarr, Raynor, and more. Our technicians are trained on residential and commercial systems, ensuring expert repair and maintenance regardless of your door's manufacturer."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(faqScript)) {
        document.head.removeChild(faqScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags 
        title="Elizabeth NJ Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service"
        description="Professional garage door repair services in Elizabeth, NJ. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Elizabeth neighborhoods. Licensed technicians serving all Elizabeth areas."
        keywords="Elizabeth NJ garage door repair, garage door installation Elizabeth, emergency garage door service, Smart Garage Doors"
        canonical={`${import.meta.env.VITE_SITE_URL || 'https://www.smartestgaragedoors.com'}/elizabeth-nj/`}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20residential%20garage%20door%20in%20Elizabeth%20New%20Jersey%20diverse%20neighborhood%20with%20single%20family%20homes%20and%20apartment%20buildings%2C%20modern%20garage%20doors%2C%20service%20vehicle%20on%20residential%20street&width=1200&height=600&seq=elizabeth-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 w-full">
              Elizabeth NJ Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert garage door repair and installation services throughout Elizabeth, New Jersey. 
              Smart Garage Doors provides reliable, professional solutions for all Elizabeth neighborhoods and communities.
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

      {/* Elizabeth Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services Throughout Elizabeth Communities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors serves all Elizabeth neighborhoods with comprehensive garage door repair, 
              installation, and maintenance services. Our experienced technicians understand the diverse 
              housing needs across Elizabeth's many communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Downtown Elizabeth</h3>
              <p className="text-gray-600">
                Modern garage door solutions for downtown Elizabeth's residential and commercial properties. 
                From historic homes to new developments, we handle all types of garage door installations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Elmora & Westminster</h3>
              <p className="text-gray-600">
                Comprehensive garage door services for Elmora and Westminster family neighborhoods. 
                Our technicians provide reliable repairs and maintenance for Elizabeth's established communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">North Elizabeth</h3>
              <p className="text-gray-600">
                Professional garage door solutions for North Elizabeth's residential areas. 
                We specialize in quality installations that complement these well-maintained neighborhoods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bayway & Port Area</h3>
              <p className="text-gray-600">
                Expert garage door services for Bayway and Port area properties. 
                Our team provides dependable solutions for Elizabeth's industrial and residential mix.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Peterstown</h3>
              <p className="text-gray-600">
                Professional garage door repair and maintenance for Peterstown's diverse housing stock. 
                We serve Elizabeth's multicultural communities with personalized, respectful service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Midtown & South Elizabeth</h3>
              <p className="text-gray-600">
                Reliable garage door services for Midtown and South Elizabeth neighborhoods. 
                We provide quality solutions that meet the needs of Elizabeth's growing residential areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Elizabeth */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in Elizabeth, NJ
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers full-service garage door solutions throughout Elizabeth. Our skilled 
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
                Fast same-day garage door repair service throughout Elizabeth. Our local technicians respond 
                quickly to minimize disruption to your daily routine and restore your garage door functionality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-gear-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Residential Specialists</h3>
              <p className="text-gray-600">
                Specialized garage door services for Elizabeth's diverse residential properties. From single-family 
                homes to multi-unit buildings, we provide tailored solutions for every property type.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-settings-4-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring &amp; Hardware Repair</h3>
              <p className="text-gray-600">
                Professional spring replacement and hardware repair services in Elizabeth. We use premium parts 
                and proper installation techniques to ensure long-lasting, safe garage door operation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-door-open-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Door Installation</h3>
              <p className="text-gray-600">
                Custom garage door installation services throughout Elizabeth. We offer a wide selection of 
                styles, materials, and colors to match your home's architecture and personal preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-wifi-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Technology Integration</h3>
              <p className="text-gray-600">
                Modern smart garage door opener installation in Elizabeth. WiFi-enabled systems with smartphone 
                control, security cameras, and home automation integration for tech-savvy homeowners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Inspections</h3>
              <p className="text-gray-600">
                Comprehensive garage door safety inspections for Elizabeth homeowners. We check all components, 
                test safety features, and provide detailed reports to ensure your family's protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elizabeth Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Elizabeth Residents Choose Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Elizabeth's preferred garage door service provider, we understand the city's unique characteristics 
              and deliver personalized solutions that meet the diverse needs of Elizabeth communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-community-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Elizabeth Community Focus</h3>
              <p className="text-gray-600">
                Our technicians understand local building codes, weather patterns, 
                and the unique needs of each neighborhood from downtown to residential areas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-translate-2 text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multilingual Service</h3>
              <p className="text-gray-600">
                Our diverse team speaks multiple languages to better serve Elizabeth's multicultural communities. 
                We provide clear communication in the language you're most comfortable with.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-money-dollar-circle-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Elizabeth Pricing</h3>
              <p className="text-gray-600">
                Fair, transparent pricing designed for Elizabeth residents. We offer competitive rates without 
                compromising on quality, with flexible payment options and no hidden fees.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-medal-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Elizabeth Track Record</h3>
              <p className="text-gray-600">
                Years of successful garage door service throughout Elizabeth with thousands of satisfied customers. 
                Check our reviews from neighbors across all Elizabeth neighborhoods.
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
              Elizabeth Garage Door Service FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Which Elizabeth neighborhoods do you serve?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors serves all Elizabeth neighborhoods including Downtown, Elmora, Westminster, 
                North Elizabeth, Bayway, Port Area, Peterstown, Midtown, South Elizabeth, and many more throughout 
                the city. No matter where you are in Elizabeth, we can provide fast, reliable garage door service.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How quickly can you respond to garage door emergencies in Elizabeth?
              </h3>
              <p className="text-gray-600">
                Our Elizabeth-based technicians typically respond to emergency garage door calls within 60-90 minutes 
                throughout most Elizabeth neighborhoods. We maintain service vehicles strategically positioned and our 
                technicians know the best routes to avoid traffic and reach you quickly, even during peak traffic times. 
                For non-emergency repairs, same-day service is available most days.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you work on garage doors in Elizabeth apartment buildings?
              </h3>
              <p className="text-gray-600">
                Yes, we provide garage door services for both single-family homes and multi-unit buildings 
                throughout Elizabeth. Our technicians are experienced with building management requirements and 
                coordinate access as needed for apartment complex garage doors. We work with property managers 
                to ensure minimal disruption to residents while maintaining security protocols.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What garage door brands do you install and service in Elizabeth?
              </h3>
              <p className="text-gray-600">
                We install and service all major garage door brands in Elizabeth including Clopay, Wayne Dalton, 
                Amarr, Raynor, CHI, LiftMaster, Chamberlain, Genie, Craftsman, and more. Our technicians are 
                trained on residential and commercial systems from all leading manufacturers. If you have a 
                specific brand preference, we can source and install it for you.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer financing for garage door installation in Elizabeth?
              </h3>
              <p className="text-gray-600">
                Yes, Smart Garage Doors offers flexible financing options for Elizabeth residents. We understand 
                that garage door replacement is a significant investment and provide payment plans to make 
                quality garage doors affordable for every budget. Options include low monthly payments and 
                interest-free plans for qualified customers. Contact us to discuss financing options.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What makes your Elizabeth service different from other garage door companies?
              </h3>
              <p className="text-gray-600">
                We specialize in serving Elizabeth communities with local expertise, faster response times, and 
                personalized service. Our technicians understand Elizabeth's diverse neighborhoods, building types, 
                and specific challenges like weather, traffic patterns, and parking. We offer multilingual service, 
                transparent pricing with no hidden fees, comprehensive warranties, and a proven track record 
                serving thousands of Elizabeth homeowners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <ServiceLinks 
        title="Complete Garage Door Services in Elizabeth, NJ"
        showDescription={true}
        locationPath="/elizabeth-nj/"
      />

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Expert Garage Door Service in Elizabeth, NJ?
          </h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for professional garage door repair and installation services 
            throughout Elizabeth. Our local experts are standing by to help with all your garage door needs!
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

export default ElizabethNJ;

