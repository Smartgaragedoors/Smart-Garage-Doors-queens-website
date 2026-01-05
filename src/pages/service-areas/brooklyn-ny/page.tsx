import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import FAQSchema from '../../../components/seo/FAQSchema';
import RelatedServices from '../../../components/seo/RelatedServices';
import ServiceLinks from '../../../components/seo/ServiceLinks';

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

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://smartestgaragedoors.com'}/garage-door-repair-brooklyn-ny/`);
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical);

    // Add Schema.org JSON-LD for Brooklyn NY page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Smart Garage Doors - Brooklyn NY",
      "description": "Professional garage door repair and installation services in Brooklyn, New York",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://smartestgaragedoors.com'}/service-areas/brooklyn-ny`,
      "telephone": "(914) 557-6816",
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


    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  
  const brooklynFaqs = [
    {
      question: "Do you service garage doors in all Brooklyn neighborhoods?",
      answer: "Yes, Smart Garage Doors provides garage door repair and installation services throughout all Brooklyn neighborhoods, including Park Slope, Williamsburg, Dyker Heights, Bay Ridge, Sheepshead Bay, Brooklyn Heights, Carroll Gardens, Greenpoint, Crown Heights, Bed-Stuy, Sunset Park, Bensonhurst, Coney Island, Brighton Beach, and many more. Our technicians are familiar with Brooklyn's diverse housing stock and building requirements."
    },
    {
      question: "How do you handle parking and access in Brooklyn?",
      answer: "Our Brooklyn technicians are experienced with urban parking challenges and building access requirements. We coordinate with building management when needed, understand alternate-side parking regulations, and work efficiently to minimize disruption to your neighbors and traffic. We're equipped to work in tight spaces and can bring all necessary equipment to complete repairs."
    },
    {
      question: "Can you work on garage doors in Brooklyn brownstones?",
      answer: "Absolutely! We specialize in garage door services for Brooklyn's historic brownstones. Our technicians understand the unique challenges of older buildings including space constraints, structural considerations, historical preservation requirements, and narrow driveway access. We provide solutions that respect architectural character while ensuring modern functionality, safety, and security."
    },
    {
      question: "What's your response time for emergency calls in Brooklyn?",
      answer: "Smart Garage Doors typically responds to Brooklyn emergency calls within 60-90 minutes throughout most Brooklyn neighborhoods. Our strategically located service vehicles and extensive knowledge of Brooklyn traffic patterns, alternate-side parking schedules, and street layouts help us reach you quickly even during peak traffic times or rush hour."
    },
    {
      question: "Do you offer garage door maintenance plans for Brooklyn residents?",
      answer: "Yes, we offer comprehensive maintenance plans specifically designed for Brooklyn's urban environment. Regular maintenance is especially important in the city due to increased usage, environmental factors like salt air, pollution, extreme weather, and the wear from frequent opening and closing. Our maintenance plans include inspections, lubrication, adjustment, and priority service."
    },
    {
      question: "What makes your Brooklyn service different from other companies?",
      answer: "We specialize in serving Brooklyn communities with local expertise, faster response times, and personalized service. Our technicians understand Brooklyn's diverse neighborhoods, building types, parking challenges, and specific challenges like weather, traffic patterns, and parking. We offer transparent pricing with no hidden fees, comprehensive warranties, and a proven track record serving thousands of Brooklyn homeowners."
    },
    {
      question: "Do you work on garage doors in Brooklyn apartment buildings?",
      answer: "Yes, we provide garage door services for both single-family homes and multi-unit buildings throughout Brooklyn. Our technicians are experienced with building management requirements, access coordination, and working within building regulations. We coordinate with superintendents and property managers to ensure smooth service delivery."
    },
    {
      question: "What garage door brands do you install and service in Brooklyn?",
      answer: "We install and service all major garage door brands in Brooklyn including Clopay, Wayne Dalton, Amarr, Raynor, CHI, LiftMaster, Chamberlain, Genie, and more. Our technicians are trained on residential and commercial systems from all leading manufacturers, and we can source specific brands if you have a preference."
    },
    {
      question: "Do you offer financing for garage door installation in Brooklyn?",
      answer: "Yes, Smart Garage Doors offers flexible financing options for Brooklyn residents. We understand that garage door replacement is a significant investment and provide payment plans to make quality garage doors affordable for every budget. Options include low monthly payments and interest-free plans for qualified customers. Contact us to discuss financing options."
    },
    {
      question: "How much does garage door repair cost in Brooklyn?",
      answer: "Garage door repair costs in Brooklyn vary depending on the issue, door type, and parts needed. Basic repairs start at $150-$300, spring replacement costs $200-$400, opener repairs range from $150-$350, and new installations start around $800. We provide free, no-obligation estimates with detailed pricing breakdowns before any work begins."
    },
  ];


  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags 
        title="Brooklyn NY Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service"
        description="Professional garage door repair services in Brooklyn, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Brooklyn neighborhoods. Licensed technicians serving all Brooklyn areas."
        keywords="Brooklyn NY garage door repair, garage door installation Brooklyn, emergency garage door service, Smart Garage Doors"
      />
      <FAQSchema faqs={brooklynFaqs} />
      <Header />
      <Breadcrumbs />
      
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

      {/* Pricing CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Accurate Pricing for Your Brooklyn Location
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Pricing varies based on your specific Brooklyn neighborhood, garage door type, and service needed. 
            We provide free, no-obligation estimates with transparent, upfront pricing for all Brooklyn customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+19145576816" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap inline-flex items-center justify-center"
            >
              <i className="ri-phone-fill mr-2"></i>
              Call for Brooklyn Pricing
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

      {/* Brooklyn Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Brooklyn Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real reviews from Brooklyn homeowners who've trusted Smart Garage Doors
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
                "Excellent service in Park Slope! They replaced my broken spring quickly and professionally. 
                The technician was knowledgeable and explained everything clearly. Great value and I'll definitely call again."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  J.M.
                </div>
                <div>
                  <div className="font-semibold text-gray-900">James M.</div>
                  <div className="text-sm text-gray-500">Park Slope, Brooklyn</div>
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
                "Fast response in Williamsburg! My garage door wouldn't close on a Sunday afternoon. 
                They had someone out within 90 minutes and fixed it quickly. Professional, courteous, and reasonably priced."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  A.R.
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Amanda R.</div>
                  <div className="text-sm text-gray-500">Williamsburg, Brooklyn</div>
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
                "Great work in Dyker Heights! They installed a new smart opener and did an excellent job. 
                The technician was patient, clean, and very professional. Highly recommend for Brooklyn residents!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  R.T.
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Robert T.</div>
                  <div className="text-sm text-gray-500">Dyker Heights, Brooklyn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us vs Competitors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Smart Garage Doors Stands Out in Brooklyn
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When choosing a garage door service provider in Brooklyn, experience, reliability, and local knowledge matter. 
              Here's why Brooklyn residents trust Smart Garage Doors.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
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
                    <td className="px-6 py-4 font-medium text-gray-900">Brooklyn Coverage</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        <i className="ri-check-line mr-1"></i> All Neighborhoods
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Limited Areas</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Brownstone Experience</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        <i className="ri-check-line mr-1"></i> Specialized
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Varies</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Parking Expertise</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        <i className="ri-check-line mr-1"></i> Urban Experts
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Limited</td>
                  </tr>
                </tbody>
              </table>
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
            {brooklynFaqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices />

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

      <ServiceLinks 
        title="Complete Garage Door Services in Brooklyn, NY"
        showDescription={true}
        locationPath="/garage-door-repair-brooklyn-ny/"
      />
      <Footer />
    </div>
  );
};

export default BrooklynNY;
