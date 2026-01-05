
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ServiceLinks from '../../../components/seo/ServiceLinks';

const NassauCountyNY = () => {
  useEffect(() => {
    document.title = 'Nassau County NY Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair services in Nassau County, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Nassau County neighborhoods. Licensed technicians serving all Nassau County areas.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Nassau County NY garage door repair, garage door installation Nassau County, emergency garage door service, Smart Garage Doors');
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20residential%20garage%20door%20in%20Nassau%20County%20New%20York%20upscale%20suburban%20neighborhood%20with%20beautiful%20homes%20and%20well-maintained%20properties%2C%20service%20truck%20parked%20on%20tree-lined%20street&width=1200&height=600&seq=nassau-county-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nassau County NY Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert garage door repair and installation services throughout Nassau County, New York. 
              Smart Garage Doors provides reliable, professional solutions for all Nassau County communities and neighborhoods.
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

      {/* Nassau County Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services Throughout Nassau County Communities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors serves all Nassau County communities with comprehensive garage door repair, 
              installation, and maintenance services. Our experienced technicians understand the unique 
              needs of Nassau County's diverse neighborhoods.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Great Neck & Manhasset</h3>
              <p className="text-gray-600">
                Premium garage door services for Great Neck and Manhasset's prestigious communities. 
                We specialize in luxury installations and high-end materials that complement these upscale neighborhoods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Garden City & Mineola</h3>
              <p className="text-gray-600">
                Expert garage door repair and installation for Garden City and Mineola's established residential areas. 
                Our team provides reliable service for Nassau County's well-maintained family neighborhoods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hempstead & Uniondale</h3>
              <p className="text-gray-600">
                Comprehensive garage door services for Hempstead and Uniondale communities. 
                We provide quality repairs and installations with competitive pricing for Nassau County residents.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Levittown & Hicksville</h3>
              <p className="text-gray-600">
                Professional garage door solutions for Levittown and Hicksville's suburban neighborhoods. 
                Our technicians understand the needs of Nassau County's family-oriented residential communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Massapequa & Seaford</h3>
              <p className="text-gray-600">
                Reliable garage door repair and maintenance for Massapequa and Seaford residents. 
                We provide personalized service that reflects Nassau County's community-focused values.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Roslyn & Port Washington</h3>
              <p className="text-gray-600">
                Specialized garage door services for Roslyn and Port Washington's waterfront communities. 
                We offer solutions designed for coastal environments and luxury properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Nassau County */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in Nassau County, NY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers comprehensive garage door solutions throughout Nassau County. Our skilled 
              technicians provide everything from emergency repairs to luxury installations with professional excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-vip-crown-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Luxury Home Specialists</h3>
              <p className="text-gray-600">
                Specialized garage door services for Nassau County's luxury homes and estates. 
                Premium materials, custom designs, and advanced features for discerning homeowners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Repair Service</h3>
              <p className="text-gray-600">
                24/7 emergency garage door repair throughout Nassau County. Fast response times with 
                strategically located service vehicles across all Nassau County communities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-4-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Suburban Specialists</h3>
              <p className="text-gray-600">
                Expert garage door solutions for Nassau County's suburban neighborhoods. 
                We understand the needs of family homes and multi-car garages common in the area.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Technology</h3>
              <p className="text-gray-600">
                Advanced smart garage door systems for tech-savvy Nassau County residents. 
                WiFi connectivity, smartphone control, and home automation integration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-water-percent-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Coastal Protection</h3>
              <p className="text-gray-600">
                Specialized garage door solutions for Nassau County's coastal areas. 
                Salt-resistant materials and weatherproofing for waterfront properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance Programs</h3>
              <p className="text-gray-600">
                Comprehensive maintenance programs for Nassau County homeowners. 
                Regular service prevents costly repairs and ensures optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nassau County Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Nassau County Residents Choose Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Nassau County's premier garage door service provider, we understand the county's unique characteristics 
              and deliver exceptional solutions that meet the high standards of Nassau County communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nassau County Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Nassau County's neighborhoods, building codes, and local requirements. 
                Our technicians navigate the county efficiently for optimal service delivery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality Standards</h3>
              <p className="text-gray-600">
                High-quality materials and workmanship that meet Nassau County's upscale standards. 
                We use only the best components and superior installation techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Response</h3>
              <p className="text-gray-600">
                Fast response throughout Nassau County with multiple service locations. 
                We understand the importance of prompt service for busy Nassau County residents.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Nassau Track Record</h3>
              <p className="text-gray-600">
                Years of successful garage door service throughout Nassau County with thousands 
                of satisfied customers. Check our reviews from neighbors across all Nassau communities.
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
              Nassau County Garage Door Service FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Which Nassau County communities do you serve?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors serves all Nassau County communities including Great Neck, Garden City, 
                Hempstead, Levittown, Massapequa, Manhasset, Hicksville, Uniondale, Seaford, Roslyn, 
                Port Washington, Mineola, and all surrounding areas.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you specialize in luxury garage doors for Nassau County's upscale areas?
              </h3>
              <p className="text-gray-600">
                Yes, we specialize in luxury garage door installations for Nassau County's prestigious 
                communities. We offer premium materials, custom designs, and high-end features that 
                complement upscale properties throughout the county.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do you handle Nassau County's coastal weather conditions?
              </h3>
              <p className="text-gray-600">
                We use salt-resistant materials and protective coatings designed for Nassau County's 
                coastal environment. Our maintenance programs include specific care for salt air exposure 
                and seasonal weather challenges common in waterfront areas.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's your typical response time in Nassau County?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors typically responds to Nassau County calls within 1-2 hours. 
                Our strategically located service vehicles and knowledge of Nassau County traffic 
                patterns help us reach you quickly throughout the county.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer financing for garage door installations in Nassau County?
              </h3>
              <p className="text-gray-600">
                Yes, we offer flexible financing options for Nassau County residents. We understand 
                that garage door replacement is a significant investment and provide payment plans 
                to make quality garage doors affordable for every budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Expert Garage Door Service in Nassau County?
          </h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for professional garage door repair and installation services 
            throughout Nassau County. Our local experts are ready to provide exceptional service!
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
        title="Complete Garage Door Services in Nassau County, NY"
        showDescription={true}
        locationPath="/nassau-county-ny/"
      />
      <Footer />
    </div>
  );
};

export default NassauCountyNY;
