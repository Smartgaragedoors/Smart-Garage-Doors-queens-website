import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import ServiceLinks from '../../../components/seo/ServiceLinks';

const StamfordCT = () => {
  const location = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://www.smartestgaragedoors.com';
  
  useEffect(() => {
    // Determine canonical URL - always point to repair URL
    const canonicalUrl = `${siteUrl}/stamford-ct/`;
    
    // Update canonical tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [location.pathname, siteUrl]);
  
  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags 
        title="Stamford CT Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service"
        description="Professional garage door repair services in Stamford, CT. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Stamford neighborhoods. Licensed technicians serving all Stamford areas."
        keywords="Stamford CT garage door repair, garage door installation Stamford, emergency garage door service, Smart Garage Doors"
        canonical={`${siteUrl}/stamford-ct/`}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20residential%20garage%20door%20in%20Stamford%20Connecticut%20upscale%20neighborhood%20with%20modern%20homes%20and%20well-maintained%20properties%2C%20service%20truck%20parked%20on%20tree-lined%20street&width=1200&height=600&seq=stamford-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Stamford CT Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert garage door repair and installation services throughout Stamford, Connecticut. 
              Smart Garage Doors provides reliable, professional solutions for all Stamford neighborhoods and communities.
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

      {/* Stamford Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Stamford Service Coverage Area
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors provides comprehensive garage door services throughout Stamford, Connecticut. 
              View our service area map and the neighborhoods we serve across the city.
            </p>
          </div>
          
          {/* Service Area Map */}
          <div className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Stamford Service Area Map</h3>
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48372.558!2d-73.5387341!3d41.0534302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2a1e368b5a0e5%3A0x5479d2aa0cf8fe52!2sStamford%2C%20CT!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stamford CT Service Area Map"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our service area covers all Stamford neighborhoods and surrounding areas. Click and drag to explore the map.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Downtown Stamford</h3>
              <p className="text-gray-600">
                Modern garage door solutions for downtown Stamford's luxury condominiums and high-rise buildings. 
                We specialize in commercial-grade systems and smart technology integration for urban living.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">North Stamford</h3>
              <p className="text-gray-600">
                Premium garage door services for North Stamford's upscale residential neighborhoods. 
                Our team provides high-end installations that complement the area's luxury homes and estates.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Springdale</h3>
              <p className="text-gray-600">
                Comprehensive garage door repair and maintenance for Springdale's established family neighborhoods. 
                We provide reliable service with competitive pricing for Stamford's residential communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Glenbrook</h3>
              <p className="text-gray-600">
                Expert garage door services for Glenbrook's diverse housing stock. From historic homes to 
                modern developments, we provide tailored solutions for every property type in this vibrant area.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Turn of River</h3>
              <p className="text-gray-600">
                Professional garage door installation and repair for Turn of River's suburban neighborhoods. 
                Our technicians understand the needs of Stamford's family-oriented residential areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Newfield</h3>
              <p className="text-gray-600">
                Reliable garage door services for Newfield residents. We provide quality repairs and installations 
                with personalized service that reflects Stamford's community-focused values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Stamford */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in Stamford, CT
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers full-service garage door solutions throughout Stamford. Our skilled 
              technicians provide everything from emergency repairs to luxury installations with professional excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Round-the-clock emergency garage door repair throughout Stamford. Broken springs, damaged panels, 
                or malfunctioning openers - we respond quickly to restore your security and convenience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-heart-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Luxury Home Specialists</h3>
              <p className="text-gray-600">
                Specialized garage door services for Stamford's luxury homes and estates. We offer premium 
                materials, custom designs, and high-end features that complement upscale properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Technology Integration</h3>
              <p className="text-gray-600">
                Advanced smart garage door systems for tech-savvy Stamford residents. WiFi connectivity, 
                smartphone control, and home automation integration for modern convenience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-2-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial Services</h3>
              <p className="text-gray-600">
                Professional commercial garage door services for Stamford businesses. From office buildings 
                to retail centers, we provide reliable solutions for commercial properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-fill text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring & Hardware Repair</h3>
              <p className="text-gray-600">
                Expert spring replacement and hardware repair services in Stamford. We use premium components 
                and professional installation techniques for long-lasting, safe operation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance Programs</h3>
              <p className="text-gray-600">
                Comprehensive maintenance programs for Stamford homeowners. Regular service prevents costly 
                repairs and ensures optimal performance through Connecticut's changing seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stamford Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Stamford Residents Trust Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Stamford's premier garage door service provider, we understand the city's unique characteristics 
              and deliver exceptional solutions that meet the high standards of Stamford communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Stamford Expertise</h3>
              <p className="text-gray-600">
                Our technicians know Stamford's neighborhoods, building codes, and local requirements. 
                We navigate the city efficiently for faster response times and better service.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality Standards</h3>
              <p className="text-gray-600">
                High-quality materials and workmanship that meet Stamford's upscale standards. 
                We use only the best components and provide superior installation techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Response Time</h3>
              <p className="text-gray-600">
                Fast response throughout Stamford with strategically located service vehicles. 
                We understand the importance of prompt service for busy Stamford residents.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exceptional Customer Service</h3>
              <p className="text-gray-600">
                Professional, courteous service that reflects Stamford's high standards. 
                We treat every customer with respect and deliver results that exceed expectations.
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
              Stamford Garage Door Service FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you service all areas of Stamford, CT?
              </h3>
              <p className="text-gray-600">
                Yes, Smart Garage Doors provides comprehensive garage door services throughout all Stamford 
                neighborhoods including Downtown, North Stamford, Springdale, Glenbrook, Turn of River, 
                Newfield, and surrounding areas.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What types of garage doors work best in Stamford's climate?
              </h3>
              <p className="text-gray-600">
                For Connecticut's climate, we recommend insulated steel or composite garage doors that 
                withstand temperature fluctuations and moisture. These materials provide durability 
                and energy efficiency for Stamford's seasonal weather changes.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you work on luxury and custom garage doors in Stamford?
              </h3>
              <p className="text-gray-600">
                Absolutely! We specialize in luxury garage door installation and repair for Stamford's 
                upscale homes. Our team works with premium materials, custom designs, and high-end 
                features that complement luxury properties.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How quickly can you respond to emergency calls in Stamford?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors typically responds to Stamford emergency calls within 1-2 hours. 
                Our local service vehicles and knowledge of Stamford traffic patterns help us reach 
                you quickly when you need urgent garage door repairs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer warranties on garage door installations in Stamford?
              </h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive warranties on all garage door installations and major 
                repairs in Stamford. Our warranties cover both parts and labor, giving you peace of 
                mind and protection for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Expert Garage Door Service in Stamford, CT?
          </h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for professional garage door repair and installation services 
            throughout Stamford. Our local experts are ready to provide exceptional service for your home!
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
        title="Complete Garage Door Services in Stamford, CT"
        showDescription={true}
        locationPath="/stamford-ct/"
      />
      <Footer />
    </div>
  );
};

export default StamfordCT;
