
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ServiceLinks from '../../../components/seo/ServiceLinks';

const SuffolkCountyNY = () => {
  useEffect(() => {
    document.title = 'Suffolk County NY Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair services in Suffolk County, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Suffolk County neighborhoods. Licensed technicians serving all Suffolk County areas.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Suffolk County NY garage door repair, garage door installation Suffolk County, emergency garage door service, Smart Garage Doors');
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20residential%20garage%20door%20in%20Suffolk%20County%20New%20York%20suburban%20neighborhood%20with%20beautiful%20homes%20and%20landscaped%20yards%2C%20service%20truck%20parked%20on%20quiet%20residential%20street&width=1200&height=600&seq=suffolk-county-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Suffolk County NY Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert garage door repair and installation services throughout Suffolk County, New York. 
              Smart Garage Doors provides reliable, professional solutions for all Suffolk County communities and neighborhoods.
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

      {/* Suffolk County Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services Throughout Suffolk County Communities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors serves all Suffolk County communities with comprehensive garage door repair, 
              installation, and maintenance services. Our experienced technicians understand the unique 
              needs of Suffolk County's diverse neighborhoods from suburban areas to luxury estates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Huntington & Northport</h3>
              <p className="text-gray-600">
                Premium garage door services for Huntington and Northport's upscale communities. 
                We specialize in luxury installations and high-end materials for these prestigious Suffolk County areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Babylon & Islip</h3>
              <p className="text-gray-600">
                Expert garage door repair and installation for Babylon and Islip's established neighborhoods. 
                Our team provides reliable service for Suffolk County's family-oriented residential communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Brookhaven & Riverhead</h3>
              <p className="text-gray-600">
                Comprehensive garage door services for Brookhaven and Riverhead areas. 
                We provide quality solutions for both suburban neighborhoods and rural properties throughout eastern Suffolk.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Hamptons</h3>
              <p className="text-gray-600">
                Specialized luxury garage door services for the Hamptons including East Hampton, Southampton, 
                and Montauk. We offer premium materials and custom designs for exclusive Suffolk County estates.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smithtown & Commack</h3>
              <p className="text-gray-600">
                Professional garage door solutions for Smithtown and Commack's suburban neighborhoods. 
                Our technicians understand the needs of Suffolk County's family-focused residential areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patchogue & Medford</h3>
              <p className="text-gray-600">
                Reliable garage door repair and maintenance for Patchogue and Medford residents. 
                We provide personalized service that reflects Suffolk County's community-oriented values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Suffolk County */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in Suffolk County, NY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers comprehensive garage door solutions throughout Suffolk County. Our skilled 
              technicians provide everything from emergency repairs to luxury installations with professional excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-vip-crown-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hamptons Luxury Specialists</h3>
              <p className="text-gray-600">
                Specialized garage door services for Suffolk County's luxury estates and Hamptons properties. 
                Premium materials, custom designs, and exclusive features for discerning homeowners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Round-the-clock emergency garage door repair throughout Suffolk County. 
                Our extensive coverage area ensures rapid response from Huntington to Montauk.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-water-percent-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Coastal Weather Protection</h3>
              <p className="text-gray-600">
                Specialized garage door solutions for Suffolk County's coastal environment. 
                Salt-resistant materials and weatherproofing for waterfront and beachfront properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-4-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Suburban & Rural Specialists</h3>
              <p className="text-gray-600">
                Expert garage door services for Suffolk County's diverse property types from suburban homes 
                to rural estates. We handle unique requirements across all Suffolk communities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Technology Integration</h3>
              <p className="text-gray-600">
                Advanced smart garage door systems for tech-savvy Suffolk County residents. 
                WiFi connectivity, smartphone control, and home automation for modern convenience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Seasonal Maintenance</h3>
              <p className="text-gray-600">
                Comprehensive maintenance programs designed for Suffolk County's seasonal weather changes. 
                Regular service prevents issues and ensures reliable operation year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suffolk County Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Suffolk County Residents Trust Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Suffolk County's premier garage door service provider, we understand the county's unique characteristics 
              from suburban neighborhoods to luxury estates and deliver exceptional solutions for every community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-2-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Suffolk County Coverage</h3>
              <p className="text-gray-600">
                Complete coverage across Suffolk County from western communities to the East End. 
                Our strategically located teams ensure efficient service throughout the county.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-vip-crown-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Luxury Estate Expertise</h3>
              <p className="text-gray-600">
                Specialized expertise in luxury garage door installations for Suffolk County's upscale communities 
                and Hamptons estates. Premium materials and custom solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-star-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Coastal Environment Specialists</h3>
              <p className="text-gray-600">
                Expert knowledge of coastal weather challenges and salt air protection. 
                We use materials and techniques designed for Suffolk County's marine environment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx- auto mb-4">
                <i className="ri-customer-service-2-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exceptional Service Standards</h3>
              <p className="text-gray-600">
                Premium customer service that meets Suffolk County's high expectations. 
                Professional, courteous technicians who respect your property and time.
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
              Suffolk County Garage Door Service FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Which Suffolk County areas do you serve?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors serves all Suffolk County communities including Huntington, Babylon, 
                Brookhaven, Smithtown, Islip, the Hamptons (East Hampton, Southampton, Montauk), 
                Riverhead, Patchogue, Commack, Medford, and all surrounding areas.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you specialize in luxury garage doors for the Hamptons?
              </h3>
              <p className="text-gray-600">
                Absolutely! We specialize in luxury garage door installations for Hamptons estates and 
                high-end Suffolk County properties. We offer premium materials, custom designs, and 
                advanced features that complement exclusive properties throughout Suffolk County.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do you handle Suffolk County's coastal weather conditions?
              </h3>
              <p className="text-gray-600">
                We specialize in garage doors designed for coastal environments, using salt-resistant 
                materials and protective coatings. Our maintenance programs include specific care for 
                Suffolk County's salt air exposure and seasonal weather challenges.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's your response time for emergency calls in Suffolk County?
              </h3>
              <p className="text-gray-600">
                Response times vary by location within Suffolk County, typically ranging from 1-3 hours 
                depending on your specific area. We maintain service vehicles strategically located 
                across Suffolk County for optimal coverage from west to east.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer different service levels for various Suffolk County communities?
              </h3>
              <p className="text-gray-600">
                We provide consistent high-quality service throughout Suffolk County while adapting 
                our solutions to each community's specific needs - from suburban family homes to 
                luxury Hamptons estates to rural properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Expert Garage Door Service in Suffolk County?
          </h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for professional garage door repair and installation services 
            throughout Suffolk County. Our local experts are ready to help from Huntington to Montauk!
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
        title="Complete Garage Door Services in Suffolk County, NY"
        showDescription={true}
        locationPath="/suffolk-county-ny/"
      />
      <Footer />
    </div>
  );
};

export default SuffolkCountyNY;
