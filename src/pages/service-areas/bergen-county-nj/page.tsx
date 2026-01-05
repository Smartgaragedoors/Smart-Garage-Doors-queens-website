
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ServiceLinks from '../../../components/seo/ServiceLinks';

const BergenCountyNJ = () => {
  useEffect(() => {
    document.title = 'Bergen County NJ Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair services in Bergen County, NJ. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Bergen County neighborhoods. Licensed technicians serving all Bergen County areas.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Bergen County NJ garage door repair, garage door installation Bergen County, emergency garage door service, Smart Garage Doors');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20residential%20garage%20door%20in%20Bergen%20County%20New%20Jersey%20upscale%20suburban%20neighborhood%20with%20beautiful%20homes%20and%20well-maintained%20properties%2C%20service%20truck%20parked%20on%20tree-lined%20street&width=1200&height=600&seq=bergen-county-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bergen County NJ Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert garage door repair and installation services throughout Bergen County, New Jersey. 
              Smart Garage Doors provides reliable, professional solutions for all Bergen County communities and neighborhoods.
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

      {/* Bergen County Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Bergen County Service Coverage Area
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors serves all Bergen County communities with comprehensive garage door services. 
              Explore our service area map and the communities we serve throughout the county.
            </p>
          </div>
          
          {/* Service Area Map */}
          <div className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Bergen County Service Area Map</h3>
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193821.47!2d-74.1532!3d40.9264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5c671192d75%3A0x7d1c1b1c1b1c1b1c!2sBergen%20County%2C%20NJ!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bergen County NJ Service Area Map"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our service area covers all Bergen County communities and surrounding areas. Click and drag to explore the map.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Paramus & Ridgewood</h3>
              <p className="text-gray-600">
                Premium garage door services for Paramus and Ridgewood's upscale communities. 
                We specialize in luxury installations and high-end materials for these prestigious Bergen County areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hackensack & Teaneck</h3>
              <p className="text-gray-600">
                Expert garage door repair and installation for Hackensack and Teaneck's established neighborhoods. 
                Our team provides reliable service for Bergen County's diverse residential communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fort Lee & Englewood</h3>
              <p className="text-gray-600">
                Comprehensive garage door services for Fort Lee and Englewood communities. 
                We provide quality solutions for both high-rise buildings and suburban neighborhoods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bergenfield & Dumont</h3>
              <p className="text-gray-600">
                Professional garage door solutions for Bergenfield and Dumont's family neighborhoods. 
                Our technicians provide personalized service for Bergen County's residential communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mahwah & Ramsey</h3>
              <p className="text-gray-600">
                Specialized garage door services for Mahwah and Ramsey's suburban areas. 
                We offer reliable solutions that meet the needs of Bergen County's family-oriented communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Closter & Cresskill</h3>
              <p className="text-gray-600">
                Reliable garage door repair and maintenance for Closter and Cresskill residents. 
                We provide quality service that reflects Bergen County's high standards and community values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Bergen County */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in Bergen County, NJ
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers comprehensive garage door solutions throughout Bergen County. Our skilled 
              technicians provide everything from emergency repairs to luxury installations with professional excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-heart-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Luxury Home Specialists</h3>
              <p className="text-gray-600">
                Specialized garage door services for Bergen County's luxury homes and upscale properties. 
                Premium materials, custom designs, and advanced features for discerning homeowners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Round-the-clock emergency garage door repair throughout Bergen County. 
                Our strategically located teams ensure rapid response across all Bergen County communities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-2-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial Services</h3>
              <p className="text-gray-600">
                Professional commercial garage door services for Bergen County businesses. 
                From office complexes to retail centers, we provide reliable solutions for commercial properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Technology</h3>
              <p className="text-gray-600">
                Advanced smart garage door systems for tech-savvy Bergen County residents. 
                WiFi connectivity, smartphone control, and home automation integration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-car-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Car Garage Experts</h3>
              <p className="text-gray-600">
                Expert installation and repair for Bergen County's multi-car garages. 
                We handle large doors, multiple openers, and complex systems common in suburban properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Seasonal Maintenance</h3>
              <p className="text-gray-600">
                Comprehensive maintenance programs designed for New Jersey's seasonal weather changes. 
                Regular service prevents issues and ensures reliable operation year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bergen County Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Bergen County Residents Trust Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Bergen County's premier garage door service provider, we understand the county's unique characteristics 
              and deliver exceptional solutions that meet the high standards of Bergen County communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bergen County Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Bergen County's neighborhoods, building codes, and local requirements. 
                Our technicians navigate the county efficiently for optimal service delivery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality Standards</h3>
              <p className="text-gray-600">
                High-quality materials and workmanship that meet Bergen County's upscale standards. 
                We use only the best components and superior installation techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Response</h3>
              <p className="text-gray-600">
                Fast response throughout Bergen County with strategically located service vehicles. 
                We understand the importance of prompt service for busy Bergen County residents.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exceptional Customer Service</h3>
              <p className="text-gray-600">
                Professional, courteous service that reflects Bergen County's high standards. 
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
              Bergen County Garage Door Service FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Which Bergen County communities do you serve?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors serves all Bergen County communities including Paramus, Ridgewood, 
                Hackensack, Teaneck, Fort Lee, Englewood, Bergenfield, Dumont, Mahwah, Ramsey, 
                Closter, Cresskill, and all surrounding areas throughout the county.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you work on both residential and commercial properties in Bergen County?
              </h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive garage door services for both residential and commercial 
                properties throughout Bergen County. From luxury homes to office buildings and retail 
                centers, we handle all types of garage door installations and repairs.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do you handle Bergen County's diverse property types?
              </h3>
              <p className="text-gray-600">
                Our technicians are experienced with Bergen County's diverse property types from luxury 
                estates to suburban homes to high-rise buildings. We tailor our solutions to each 
                property's specific requirements and architectural style.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's your response time for emergency calls in Bergen County?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors typically responds to Bergen County emergency calls within 1-2 hours. 
                Our strategically located service vehicles and knowledge of Bergen County traffic patterns 
                help us reach you quickly throughout the county.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer warranties on garage door installations in Bergen County?
              </h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive warranties on all garage door installations and major 
                repairs in Bergen County. Our warranties cover both parts and labor, giving you peace 
                of mind and protection for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Expert Garage Door Service in Bergen County?
          </h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for professional garage door repair and installation services 
            throughout Bergen County. Our local experts are ready to provide exceptional service!
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
        title="Complete Garage Door Services in Bergen County, NJ"
        showDescription={true}
        locationPath="/bergen-county-nj/"
      />
      <Footer />
    </div>
  );
};

export default BergenCountyNJ;
