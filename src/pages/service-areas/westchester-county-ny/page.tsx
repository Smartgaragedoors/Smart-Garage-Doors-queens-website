
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ServiceLinks from '../../../components/seo/ServiceLinks';

const WestchesterCountyNY = () => {
  useEffect(() => {
    document.title = 'Westchester County NY Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair services in Westchester County, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Westchester County neighborhoods. Licensed technicians serving all Westchester County areas.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Westchester County NY garage door repair, garage door installation Westchester County, emergency garage door service, Smart Garage Doors');
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20residential%20garage%20door%20in%20Westchester%20County%20New%20York%20upscale%20suburban%20neighborhood%20with%20luxury%20homes%20and%20manicured%20landscapes%2C%20service%20truck%20parked%20on%20tree-lined%20street&width=1200&height=600&seq=westchester-county-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Westchester County NY Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert garage door repair and installation services throughout Westchester County, New York. 
              Smart Garage Doors provides reliable, professional solutions for all Westchester County communities and neighborhoods.
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

      {/* Westchester County Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services Throughout Westchester County Communities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors serves all Westchester County communities with comprehensive garage door repair, 
              installation, and maintenance services. Our experienced technicians understand the unique 
              needs of Westchester County's prestigious neighborhoods and diverse communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">White Plains & Harrison</h3>
              <p className="text-gray-600">
                Premium garage door services for White Plains and Harrison's upscale communities. 
                We specialize in luxury installations and high-end materials for these prestigious Westchester areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scarsdale & Eastchester</h3>
              <p className="text-gray-600">
                Expert garage door repair and installation for Scarsdale and Eastchester's luxury neighborhoods. 
                Our team provides premium service for Westchester County's most exclusive residential areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">New Rochelle & Mamaroneck</h3>
              <p className="text-gray-600">
                Comprehensive garage door services for New Rochelle and Mamaroneck communities. 
                We provide quality solutions for both waterfront properties and suburban neighborhoods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Yonkers & Mount Vernon</h3>
              <p className="text-gray-600">
                Professional garage door solutions for Yonkers and Mount Vernon's diverse neighborhoods. 
                Our technicians provide reliable service for Westchester County's urban and suburban areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rye & Larchmont</h3>
              <p className="text-gray-600">
                Specialized garage door services for Rye and Larchmont's waterfront communities. 
                We offer coastal-resistant solutions and luxury features for these prestigious areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bronxville & Tuckahoe</h3>
              <p className="text-gray-600">
                Reliable garage door repair and maintenance for Bronxville and Tuckahoe residents. 
                We provide personalized service that reflects Westchester County's high standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Westchester County */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in Westchester County, NY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers comprehensive garage door solutions throughout Westchester County. Our skilled 
              technicians provide everything from emergency repairs to luxury installations with professional excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-vip-crown-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Luxury Estate Specialists</h3>
              <p className="text-gray-600">
                Specialized garage door services for Westchester County's luxury estates and high-end properties. 
                Premium materials, custom designs, and exclusive features for discerning homeowners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Round-the-clock emergency garage door repair throughout Westchester County. 
                Our strategically located teams ensure rapid response across all Westchester communities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-2-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial Services</h3>
              <p className="text-gray-600">
                Professional commercial garage door services for Westchester County businesses. 
                From office buildings to retail centers, we provide reliable solutions for commercial properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Technology Integration</h3>
              <p className="text-gray-600">
                Advanced smart garage door systems for tech-savvy Westchester County residents. 
                WiFi connectivity, smartphone control, and home automation for modern convenience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-water-percent-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Waterfront Property Solutions</h3>
              <p className="text-gray-600">
                Specialized garage door solutions for Westchester County's waterfront properties. 
                Salt-resistant materials and weatherproofing for coastal and lakefront homes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Maintenance</h3>
              <p className="text-gray-600">
                Comprehensive maintenance programs designed for Westchester County's high-end properties. 
                Regular service ensures optimal performance and protects your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Westchester County Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Westchester County Residents Choose Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Westchester County's premier garage door service provider, we understand the county's prestigious 
              character and deliver exceptional solutions that meet the high standards of Westchester communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Westchester County Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Westchester County's neighborhoods, building codes, and luxury standards. 
                Our technicians understand the county's unique requirements and expectations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality Standards</h3>
              <p className="text-gray-600">
                Exceptional quality materials and workmanship that meet Westchester County's luxury standards. 
                We use only the finest components and superior installation techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Response</h3>
              <p className="text-gray-600">
                Fast response throughout Westchester County with strategically located service teams. 
                We understand the importance of prompt, professional service for busy residents.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">White-Glove Service</h3>
              <p className="text-gray-600">
                Exceptional customer service that reflects Westchester County's sophisticated standards. 
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
              Westchester County Garage Door Service FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Which Westchester County communities do you serve?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors serves all Westchester County communities including White Plains, Scarsdale, 
                New Rochelle, Yonkers, Harrison, Eastchester, Mamaroneck, Rye, Larchmont, Bronxville, 
                Tuckahoe, Mount Vernon, and all surrounding areas.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you specialize in luxury garage doors for Westchester's upscale communities?
              </h3>
              <p className="text-gray-600">
                Absolutely! We specialize in luxury garage door installations for Westchester County's 
                prestigious communities. We offer premium materials, custom designs, and high-end features 
                that complement the county's luxury properties and estates.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do you handle Westchester County's diverse property types?
              </h3>
              <p className="text-gray-600">
                Our technicians are experienced with Westchester County's diverse property types from 
                luxury estates to waterfront homes to urban residences. We tailor our solutions to 
                each property's specific requirements and architectural style.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's your response time for emergency calls in Westchester County?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors typically responds to Westchester County emergency calls within 1-2 hours. 
                Our strategically located service vehicles and knowledge of Westchester traffic patterns 
                help us reach you quickly throughout the county.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer commercial garage door services in Westchester County?
              </h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive commercial garage door services throughout Westchester County. 
                From office buildings to retail centers, we handle commercial installations, repairs, 
                and maintenance with the same high standards as our residential services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Expert Garage Door Service in Westchester County?
          </h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for professional garage door repair and installation services 
            throughout Westchester County. Our local experts deliver premium service for discerning homeowners!
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
        title="Complete Garage Door Services in Westchester County, NY"
        showDescription={true}
        locationPath="/garage-door-repair-westchester-county-ny/"
      />
      <Footer />
    </div>
  );
};

export default WestchesterCountyNY;
