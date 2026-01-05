
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Reviews from '../../../components/feature/Reviews';
import ServiceLinks from '../../../components/seo/ServiceLinks';

const NewRochelleNY = () => {
  useEffect(() => {
    document.title = 'New Rochelle NY Garage Door Repair | Smart Garage Doors | Professional Service';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair services in New Rochelle, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout New Rochelle and surrounding Westchester County areas.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'New Rochelle NY garage door repair, garage door installation New Rochelle, emergency garage door service Westchester, Smart Garage Doors');
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20residential%20garage%20door%20in%20New%20Rochelle%20New%20York%20coastal%20suburban%20neighborhood%20with%20beautiful%20homes%20near%20Long%20Island%20Sound%2C%20service%20truck%20parked%20on%20residential%20street&width=1200&height=600&seq=new-rochelle-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              New Rochelle NY Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert garage door repair and installation services in New Rochelle, New York. 
              Smart Garage Doors provides reliable, professional solutions for this beautiful coastal Westchester community.
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

      {/* New Rochelle Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services Throughout New Rochelle Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors serves all New Rochelle neighborhoods with comprehensive garage door repair, 
              installation, and maintenance services. Our experienced technicians understand the unique 
              needs of New Rochelle's diverse coastal and inland communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Downtown New Rochelle</h3>
              <p className="text-gray-600">
                Professional garage door services for downtown New Rochelle's urban residential and commercial properties. 
                We provide specialized solutions for the city's revitalized downtown area.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wykagyl</h3>
              <p className="text-gray-600">
                Expert garage door repair and installation for Wykagyl's prestigious residential neighborhoods. 
                Our team provides premium service for New Rochelle's upscale community areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beechmont</h3>
              <p className="text-gray-600">
                Comprehensive garage door services for Beechmont's established family neighborhoods. 
                We provide reliable solutions for New Rochelle's suburban residential communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Davenport Neck</h3>
              <p className="text-gray-600">
                Professional garage door solutions for Davenport Neck's waterfront properties. 
                Our technicians provide specialized service for New Rochelle's coastal residential areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Forest Heights</h3>
              <p className="text-gray-600">
                Specialized garage door services for Forest Heights' hillside neighborhoods. 
                We offer dependable solutions that meet the needs of New Rochelle's elevated communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rochelle Park</h3>
              <p className="text-gray-600">
                Reliable garage door repair and maintenance for Rochelle Park area properties. 
                We provide comprehensive solutions for New Rochelle's diverse residential neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for New Rochelle */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in New Rochelle, NY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers comprehensive garage door solutions throughout New Rochelle. Our skilled 
              technicians provide everything from emergency repairs to coastal-resistant installations with professional excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-ship-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Coastal Property Specialists</h3>
              <p className="text-gray-600">
                Expert garage door services for New Rochelle's waterfront properties. 
                Salt-resistant materials and weatherproofing for homes near Long Island Sound.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-4-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Historic Home Expertise</h3>
              <p className="text-gray-600">
                Professional garage door services for New Rochelle's historic properties. 
                We handle older homes with care while providing modern garage door solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Round-the-clock emergency garage door repair throughout New Rochelle and surrounding areas. 
                Our local service teams ensure rapid response across Westchester County.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-2-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Urban Development Solutions</h3>
              <p className="text-gray-600">
                Modern garage door solutions for New Rochelle's new developments and condominiums. 
                Contemporary designs that complement the city's ongoing revitalization.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Technology Integration</h3>
              <p className="text-gray-600">
                Advanced smart garage door systems for tech-savvy New Rochelle residents. 
                WiFi connectivity, smartphone control, and home automation integration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Coastal Maintenance Programs</h3>
              <p className="text-gray-600">
                Specialized maintenance programs designed for New Rochelle's coastal climate. 
                Regular service prevents salt air damage and ensures reliable operation year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Rochelle Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why New Rochelle Residents Trust Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As New Rochelle's trusted garage door service provider, we understand the city's unique coastal characteristics 
              and deliver reliable solutions that meet the diverse needs of this vibrant Westchester community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">New Rochelle Local Knowledge</h3>
              <p className="text-gray-600">
                Deep understanding of New Rochelle's neighborhoods, coastal conditions, and building requirements. 
                Our technicians navigate the city efficiently and understand local challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-water-percent-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Coastal Environment Expertise</h3>
              <p className="text-gray-600">
                Specialized knowledge of coastal garage door challenges including salt air exposure, 
                humidity, and weather protection for Long Island Sound area properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-community-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community-Focused Service</h3>
              <p className="text-gray-600">
                Personalized service that reflects New Rochelle's diverse community spirit. 
                We treat every customer with respect and provide solutions tailored to their needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable Response Times</h3>
              <p className="text-gray-600">
                Consistent, dependable service with prompt response times throughout New Rochelle. 
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
              New Rochelle Garage Door Service FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you provide special solutions for New Rochelle's coastal properties?
              </h3>
              <p className="text-gray-600">
                Yes, we specialize in garage door solutions for New Rochelle's coastal properties near Long Island Sound. 
                We use salt-resistant materials, protective coatings, and provide maintenance programs designed 
                for coastal environments and salt air exposure.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do you handle New Rochelle's mix of historic and modern properties?
              </h3>
              <p className="text-gray-600">
                Our technicians are experienced with both New Rochelle's historic homes and modern developments. 
                We provide appropriate solutions for each property type, from traditional designs for historic 
                homes to contemporary systems for new constructions.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's your response time for emergency calls in New Rochelle?
              </h3>
              <p className="text-gray-600">
                Smart Garage Doors typically responds to New Rochelle emergency calls within 1-2 hours. 
                Our strategic location and knowledge of Westchester County traffic patterns help us reach 
                you quickly throughout the New Rochelle area.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you service both waterfront and inland areas of New Rochelle?
              </h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive garage door services throughout all areas of New Rochelle, 
                from waterfront properties in Davenport Neck to inland neighborhoods like Wykagyl and Forest Heights. 
                We tailor our solutions to each area's specific needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Are you familiar with New Rochelle building codes and coastal regulations?
              </h3>
              <p className="text-gray-600">
                Absolutely. Our technicians are well-versed in New Rochelle building codes and coastal regulations. 
                We ensure all installations meet local requirements and coastal building standards, obtaining 
                necessary permits when required for your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for professional garage door services in New Rochelle, NY
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
        title="Complete Garage Door Services in New Rochelle, NY"
        showDescription={true}
        locationPath="/new-rochelle-ny/"
      />
      <Footer />
    </div>
  );
};

export default NewRochelleNY;
