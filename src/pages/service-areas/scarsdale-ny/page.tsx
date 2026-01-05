
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Reviews from '../../../components/feature/Reviews';
import ServiceLinks from '../../../components/seo/ServiceLinks';

const ScarsdaleNY = () => {
  useEffect(() => {
    document.title = 'Scarsdale NY Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair services in Scarsdale, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Scarsdale neighborhoods. Licensed technicians serving all Scarsdale areas.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Scarsdale NY garage door repair, garage door installation Scarsdale, emergency garage door service, Smart Garage Doors');
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20residential%20garage%20door%20in%20Scarsdale%20New%20York%20luxury%20neighborhood%20with%20beautiful%20estate%20homes%20and%20manicured%20landscapes%2C%20service%20truck%20parked%20on%20tree-lined%20street&width=1200&height=600&seq=scarsdale-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Scarsdale NY Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert garage door repair and installation services throughout Scarsdale, New York. 
              Smart Garage Doors provides reliable, professional solutions for all Scarsdale neighborhoods and luxury estates.
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

      {/* Scarsdale Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services Throughout Scarsdale Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors serves all Scarsdale neighborhoods with comprehensive garage door repair, 
              installation, and maintenance services. Our experienced technicians understand the unique 
              needs of Scarsdale's prestigious residential communities and luxury estates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scarsdale Village</h3>
              <p className="text-gray-600">
                Premium garage door services for Scarsdale Village's historic and luxury homes. 
                We specialize in high-end installations that complement the area's prestigious architecture and maintain property values.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Heathcote</h3>
              <p className="text-gray-600">
                Expert garage door repair and installation for Heathcote's upscale residential area. 
                Our team provides luxury solutions that meet the high standards of this exclusive Scarsdale neighborhood.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quaker Ridge</h3>
              <p className="text-gray-600">
                Comprehensive garage door services for Quaker Ridge's luxury estates. 
                We provide premium materials and custom designs that complement this prestigious area's architectural standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Edgewood</h3>
              <p className="text-gray-600">
                Professional garage door solutions for Edgewood's established neighborhoods. 
                Our technicians provide reliable service that reflects Scarsdale's commitment to quality and excellence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Greenacres</h3>
              <p className="text-gray-600">
                Specialized garage door services for Greenacres' luxury properties. 
                We offer high-end features and premium installations that enhance these beautiful Scarsdale homes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fox Meadow</h3>
              <p className="text-gray-600">
                Reliable garage door repair and maintenance for Fox Meadow residents. 
                We provide personalized service that meets the sophisticated standards of this exclusive Scarsdale area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Scarsdale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in Scarsdale, NY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers comprehensive garage door solutions throughout Scarsdale. Our skilled 
              technicians provide everything from emergency repairs to luxury installations with the highest level of professional excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-vip-crown-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Luxury Estate Specialists</h3>
              <p className="text-gray-600">
                Specialized garage door services for Scarsdale's luxury estates and high-end properties. 
                Premium materials, custom designs, and exclusive features for the most discerning homeowners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Priority Emergency Service</h3>
              <p className="text-gray-600">
                24/7 priority emergency garage door repair throughout Scarsdale. 
                Rapid response with white-glove service that meets Scarsdale's exceptional standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-palette-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Design Solutions</h3>
              <p className="text-gray-600">
                Bespoke garage door designs that complement Scarsdale's architectural heritage. 
                Custom materials, colors, and features that enhance your property's unique character.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Smart Technology</h3>
              <p className="text-gray-600">
                State-of-the-art smart garage door systems for Scarsdale's tech-savvy residents. 
                Advanced automation, security features, and seamless home integration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-star-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Security Systems</h3>
              <p className="text-gray-600">
                Advanced garage door security solutions for Scarsdale's luxury properties. 
                Premium locking systems, reinforced panels, and integrated security features.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Concierge Maintenance</h3>
              <p className="text-gray-600">
                White-glove maintenance programs designed for Scarsdale's luxury properties. 
                Scheduled service that protects your investment and ensures flawless operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scarsdale Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Scarsdale Residents Choose Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Scarsdale's premier garage door service provider, we understand the village's exceptional standards 
              and deliver luxury solutions that meet the sophisticated expectations of Scarsdale homeowners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-smile-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scarsdale Luxury Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of Scarsdale's luxury market, architectural standards, and homeowner expectations. 
                We deliver solutions that enhance property values and complement estate-quality homes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exceptional Quality Standards</h3>
              <p className="text-gray-600">
                Premium materials and craftsmanship that exceed Scarsdale's high standards. 
                We use only the finest components and employ master-level installation techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Priority Response</h3>
              <p className="text-gray-600">
                Expedited service for Scarsdale residents with guaranteed rapid response times. 
                We understand the importance of immediate attention for luxury properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">White-Glove Service</h3>
              <p className="text-gray-600">
                Concierge-level customer service that reflects Scarsdale's sophisticated lifestyle. 
                Professional, discreet technicians who respect your property and privacy.
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
              Scarsdale Garage Door Service FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you specialize in luxury garage doors for Scarsdale estates?
              </h3>
              <p className="text-gray-600">
                Absolutely! We specialize in luxury garage door installations for Scarsdale's prestigious 
                estates and high-end properties. We offer premium materials, custom designs, and exclusive 
                features that complement the village's exceptional architectural standards.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do you ensure your work meets Scarsdale's high standards?
              </h3>
              <p className="text-gray-600">
                We maintain the highest quality standards through premium materials, master-level craftsmanship, 
                and rigorous quality control. Our technicians are specially trained to work on luxury properties 
                and understand Scarsdale's expectations for excellence.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer custom garage door designs for Scarsdale homes?
              </h3>
              <p className="text-gray-600">
                Yes, we offer completely custom garage door designs that complement Scarsdale's diverse 
                architectural styles. From traditional to contemporary, we create bespoke solutions that 
                enhance your property's unique character and maintain its luxury appeal.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's your response time for emergency calls in Scarsdale?
              </h3>
              <p className="text-gray-600">
                Scarsdale residents receive priority emergency service with typical response times of 
                1 hour or less. We understand that luxury properties require immediate attention and 
                maintain dedicated resources for rapid response throughout the village.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you provide ongoing maintenance for luxury garage doors?
              </h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive concierge maintenance programs specifically designed for 
                Scarsdale's luxury properties. These programs include scheduled inspections, preventive 
                maintenance, and priority service to ensure your garage door system operates flawlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Contact CTA */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for professional garage door services in Scarsdale, NY
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
        title="Complete Garage Door Services in Scarsdale, NY"
        showDescription={true}
        locationPath="/scarsdale-ny/"
      />
      <Footer />
    </div>
  );
};

export default ScarsdaleNY;
