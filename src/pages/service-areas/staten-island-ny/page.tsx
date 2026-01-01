import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const StatenIslandNY = () => {
  useEffect(() => {
    document.title = 'Staten Island NY Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair services in Staten Island, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Staten Island neighborhoods. Licensed technicians serving all Staten Island areas.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Staten Island NY garage door repair, garage door installation Staten Island, emergency garage door service, Smart Garage Doors');
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20residential%20garage%20door%20in%20Staten%20Island%20New%20York%20suburban%20neighborhood%20with%20single%20family%20homes%20and%20tree-lined%20streets%2C%20service%20truck%20parked%20on%20residential%20street&width=1200&height=600&seq=staten-island-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Staten Island NY Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert garage door repair and installation services throughout Staten Island, New York. 
              Smart Garage Doors provides reliable, professional solutions for all Staten Island neighborhoods and communities.
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

      {/* Staten Island Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services Throughout Staten Island Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors serves all Staten Island neighborhoods with comprehensive garage door repair, 
              installation, and maintenance services. Our experienced technicians understand the unique 
              needs of Staten Island's diverse residential communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">St. George</h3>
              <p className="text-gray-600">
                Professional garage door services for St. George's historic and waterfront areas. 
                We provide solutions for Staten Island's government district and ferry terminal neighborhoods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">New Dorp</h3>
              <p className="text-gray-600">
                Expert garage door repair and installation for New Dorp's established residential neighborhoods. 
                Our team provides reliable service for Staten Island's central community areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tottenville</h3>
              <p className="text-gray-600">
                Comprehensive garage door services for Tottenville's suburban residential area. 
                We provide quality solutions for Staten Island's southernmost community.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Great Kills</h3>
              <p className="text-gray-600">
                Professional garage door solutions for Great Kills' family neighborhoods. 
                Our technicians provide personalized service for Staten Island's beach community areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Stapleton</h3>
              <p className="text-gray-600">
                Specialized garage door services for Stapleton's diverse neighborhoods. 
                We offer reliable solutions that meet the needs of Staten Island's historic communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Annadale</h3>
              <p className="text-gray-600">
                Reliable garage door repair and maintenance for Annadale's residential properties. 
                We provide comprehensive solutions for Staten Island's mid-island communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Staten Island */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in Staten Island, NY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers comprehensive garage door solutions throughout Staten Island. Our skilled 
              technicians provide everything from emergency repairs to new installations with professional excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-4-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Suburban Home Specialists</h3>
              <p className="text-gray-600">
                Expert garage door services for Staten Island's suburban communities. 
                We understand the unique needs of single-family homes and residential properties throughout the borough.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Round-the-clock emergency garage door repair throughout Staten Island. 
                Our local service teams ensure rapid response across all Staten Island neighborhoods.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-ship-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Coastal Property Solutions</h3>
              <p className="text-gray-600">
                Specialized garage door solutions for Staten Island's coastal properties. 
                Salt-resistant materials and weatherproofing for homes near the waterfront areas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-history-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Historic Home Expertise</h3>
              <p className="text-gray-600">
                Professional garage door services for Staten Island's historic properties. 
                We handle older homes with care while providing modern garage door solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Technology Integration</h3>
              <p className="text-gray-600">
                Advanced smart garage door systems for tech-savvy Staten Island residents. 
                WiFi connectivity, smartphone control, and home automation for modern convenience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Maintenance</h3>
              <p className="text-gray-600">
                Regular maintenance programs designed for Staten Island's climate and property types. 
                Scheduled service prevents issues and ensures reliable operation year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staten Island Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Staten Island Residents Trust Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Staten Island's trusted garage door service provider, we understand the borough's unique characteristics 
              and deliver reliable solutions that meet the diverse needs of Staten Island's communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Staten Island Local Knowledge</h3>
              <p className="text-gray-600">
                Deep understanding of Staten Island's neighborhoods, building codes, and community needs. 
                Our technicians navigate the borough efficiently and understand local requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-group-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community-Focused Service</h3>
              <p className="text-gray-600">
                Personalized service that reflects Staten Island's tight-knit community spirit. 
                We treat every customer with respect and provide solutions tailored to their needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-price-tag-3-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fair, Transparent Pricing</h3>
              <p className="text-gray-600">
                Honest, competitive pricing designed for Staten Island families and businesses. 
                We provide excellent value without hidden fees and offer flexible payment options.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable Response Times</h3>
              <p className="text-gray-600">
                Consistent, dependable service with prompt response times throughout Staten Island. 
                We understand the importance of reliable garage door operation for busy residents.
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
              Staten Island Garage Door Service FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you service all areas of Staten Island?
              </h3>
              <p className="text-gray-600">
                Yes, Smart Garage Doors provides comprehensive garage door services throughout all Staten Island 
                neighborhoods including St. George, New Dorp, Tottenville, Great Kills, Stapleton, Annadale, 
                and all other communities throughout the borough.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do you handle Staten Island's unique property types?
              </h3>
              <p className="text-gray-600">
                Our technicians are experienced with Staten Island's diverse property types from historic homes 
                to modern suburban houses to coastal properties. We tailor our solutions to each property's 
                specific requirements and architectural style.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer special solutions for coastal properties in Staten Island?
              </h3>
              <p className="text-gray-600">
                Yes, we specialize in garage door solutions for Staten Island's coastal properties. 
                We use salt-resistant materials and protective coatings designed for coastal environments 
                and provide maintenance programs that address salt air exposure.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's your response time for emergency calls in Staten Island?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors typically responds to Staten Island emergency calls within 1-2 hours. 
                Our local service teams and knowledge of Staten Island traffic patterns help us reach 
                you quickly throughout the borough.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you work on both residential and commercial properties in Staten Island?
              </h3>
              <p className="text-gray-600">
                Yes, we provide garage door services for both residential and commercial properties 
                throughout Staten Island. From family homes to business facilities, we handle all 
                types of garage door installations, repairs, and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Garage Door Service in Staten Island?
          </h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for professional garage door repair and installation services 
            throughout Staten Island. Our local experts are ready to help with all your garage door needs!
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

export default StatenIslandNY;
