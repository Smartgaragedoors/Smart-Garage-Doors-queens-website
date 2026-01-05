
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Reviews from '../../../components/feature/Reviews';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import ServiceLinks from '../../../components/seo/ServiceLinks';

const WhitePlainsNY = () => {
  const location = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://smartestgaragedoors.com';
  
  useEffect(() => {
    // Determine canonical URL - always point to repair URL
    const canonicalUrl = `${siteUrl}/white-plains-ny/`;
    
    // Update canonical tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
    
    document.title = 'White Plains NY Garage Door Repair | Smart Garage Doors | Licensed Technicians';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair services in White Plains, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout White Plains and surrounding Westchester County areas.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'White Plains NY garage door repair, garage door installation White Plains, emergency garage door service Westchester, Smart Garage Doors');
    }
  }, [location.pathname, siteUrl]);

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags 
        title="White Plains NY Garage Door Repair | Smart Garage Doors | Licensed Technicians"
        description="Professional garage door repair services in White Plains, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout White Plains and surrounding Westchester County areas."
        keywords="White Plains NY garage door repair, garage door installation White Plains, emergency garage door service Westchester, Smart Garage Doors"
        canonical={`${siteUrl}/white-plains-ny/`}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20modern%20residential%20garage%20door%20in%20White%20Plains%20New%20York%20upscale%20suburban%20neighborhood%20with%20well-maintained%20homes%20and%20manicured%20lawns%2C%20service%20van%20parked%20on%20tree-lined%20street&width=1200&height=600&seq=white-plains-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              White Plains NY Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert garage door repair and installation services in White Plains, New York. 
              Smart Garage Doors provides reliable, professional solutions for Westchester County's premier city.
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

      {/* White Plains Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services Throughout White Plains Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors serves all White Plains neighborhoods with comprehensive garage door repair, 
              installation, and maintenance services. Our experienced technicians understand the unique 
              needs of White Plains' diverse residential and commercial communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Downtown White Plains</h3>
              <p className="text-gray-600">
                Professional garage door services for downtown White Plains' high-rise condominiums and commercial buildings. 
                We provide specialized solutions for urban residential and business properties.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ridgeway</h3>
              <p className="text-gray-600">
                Expert garage door repair and installation for Ridgeway's upscale residential neighborhoods. 
                Our team provides premium service for White Plains' prestigious community areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gedney Farms</h3>
              <p className="text-gray-600">
                Comprehensive garage door services for Gedney Farms' luxury homes and estates. 
                We provide high-end solutions for White Plains' most exclusive residential area.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Battle Hill</h3>
              <p className="text-gray-600">
                Professional garage door solutions for Battle Hill's established neighborhoods. 
                Our technicians provide reliable service for White Plains' historic residential communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Highlands</h3>
              <p className="text-gray-600">
                Specialized garage door services for Highlands' family neighborhoods. 
                We offer dependable solutions that meet the needs of White Plains' suburban communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ferris Avenue Area</h3>
              <p className="text-gray-600">
                Reliable garage door repair and maintenance for Ferris Avenue area properties. 
                We provide comprehensive solutions for White Plains' diverse residential neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for White Plains */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in White Plains, NY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers comprehensive garage door solutions throughout White Plains. Our skilled 
              technicians provide everything from emergency repairs to luxury installations with professional excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Urban Property Specialists</h3>
              <p className="text-gray-600">
                Expert garage door services for White Plains' urban properties including condominiums, 
                townhomes, and commercial buildings in the downtown area.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-vip-crown-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Luxury Home Solutions</h3>
              <p className="text-gray-600">
                Premium garage door installations and services for White Plains' upscale neighborhoods. 
                High-end materials and custom solutions for luxury properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Round-the-clock emergency garage door repair throughout White Plains and surrounding areas. 
                Our local service teams ensure rapid response across Westchester County.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-briefcase-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial Services</h3>
              <p className="text-gray-600">
                Professional commercial garage door solutions for White Plains businesses. 
                Loading dock doors, overhead doors, and security solutions for commercial properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Technology Integration</h3>
              <p className="text-gray-600">
                Advanced smart garage door systems for tech-savvy White Plains residents. 
                WiFi connectivity, smartphone control, and home automation integration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Solutions</h3>
              <p className="text-gray-600">
                Enhanced security garage door systems for White Plains properties. 
                Advanced locking mechanisms and security features for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White Plains Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why White Plains Residents Choose Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As White Plains' trusted garage door service provider, we understand the city's unique characteristics 
              and deliver premium solutions that meet the high standards of Westchester County's premier community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">White Plains Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of White Plains' neighborhoods, building codes, and community standards. 
                Our technicians navigate the city efficiently and understand local requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Service Quality</h3>
              <p className="text-gray-600">
                High-quality service that meets White Plains' elevated standards. 
                We provide premium solutions with attention to detail and professional excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-automatically mb-4">
                <i className="ri-time-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prompt Response Times</h3>
              <p className="text-gray-600">
                Reliable, timely service with quick response throughout White Plains and Westchester County. 
                We understand the importance of efficient service for busy professionals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed &amp; Insured</h3>
              <p className="text-gray-600">
                Fully licensed and insured technicians providing peace of mind for White Plains property owners. 
                Professional credentials and comprehensive insurance coverage.
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
              White Plains Garage Door Service FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you service both residential and commercial properties in White Plains?
              </h3>
              <p className="text-gray-600">
                Yes, Smart Garage Doors provides comprehensive garage door services for both residential and 
                commercial properties throughout White Plains. From luxury homes to downtown office buildings, 
                we handle all types of garage door installations and repairs.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What makes your service different for White Plains' upscale properties?
              </h3>
              <p className="text-gray-600">
                We specialize in premium garage door solutions that match White Plains' high standards. 
                Our technicians are experienced with luxury installations, custom designs, and high-end 
                materials that complement upscale properties throughout the city.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How quickly can you respond to emergency calls in White Plains?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors typically responds to White Plains emergency calls within 1-2 hours. 
                Our strategic location and knowledge of Westchester County traffic patterns help us reach 
                you quickly throughout the White Plains area.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer smart garage door technology for White Plains homes?
              </h3>
              <p className="text-gray-600">
                Yes, we specialize in smart garage door technology including WiFi-enabled openers, 
                smartphone control systems, and home automation integration. These advanced features 
                are popular with White Plains' tech-savvy residents.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Are you familiar with White Plains building codes and regulations?
              </h3>
              <p className="text-gray-600">
                Absolutely. Our technicians are well-versed in White Plains building codes and regulations. 
                We ensure all installations and repairs meet local requirements and obtain necessary permits 
                when required for your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA (Updated) */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for professional garage door services in White Plains, NY
          </p>
          <a
            href="tel:(914) 557-6816"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-block whitespace-nowrap"
          >
            Call Now: (914) 557-6816
          </a>
        </div>
      </div>

      <Reviews />
      <ServiceLinks 
        title="Complete Garage Door Services in White Plains, NY"
        showDescription={true}
        locationPath="/white-plains-ny/"
      />
      <Footer />
    </div>
  );
};

export default WhitePlainsNY;
