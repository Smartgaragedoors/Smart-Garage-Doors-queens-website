
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';

const LongIslandNY = () => {
  useEffect(() => {
    document.title = 'Long Island NY Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional garage door repair services in Long Island, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Nassau and Suffolk Counties. Licensed technicians serving all Long Island areas.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Long Island NY garage door repair, garage door installation Long Island, emergency garage door service, Smart Garage Doors');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags 
        title="Long Island NY Garage Door Repair | Smart Garage Doors | 24/7 Emergency Service"
        description="Professional garage door repair services in Long Island, NY. Smart Garage Doors offers emergency repairs, spring replacement, opener installation throughout Nassau and Suffolk Counties. Licensed technicians serving all Long Island areas."
        keywords="Long Island NY garage door repair, garage door installation Long Island, emergency garage door service Nassau Suffolk, Smart Garage Doors"
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20garage%20door%20technician%20working%20on%20residential%20garage%20door%20in%20Long%20Island%20New%20York%20suburban%20neighborhood%20with%20beautiful%20homes%20and%20manicured%20lawns%2C%20service%20truck%20parked%20on%20tree-lined%20street&width=1200&height=600&seq=long-island-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Long Island NY Garage Door Repair Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert garage door repair and installation services throughout Long Island, New York. 
              Smart Garage Doors provides reliable, professional solutions for Nassau and Suffolk County communities.
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

      {/* Long Island Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Services Throughout Long Island Communities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors serves all Long Island communities with comprehensive garage door repair, 
              installation, and maintenance services. Our experienced technicians understand the unique 
              needs of Nassau and Suffolk County neighborhoods.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nassau County North Shore</h3>
              <p className="text-gray-600">
                Premium garage door services for Nassau County's prestigious North Shore communities including 
                Great Neck, Manhasset, and Port Washington. We specialize in luxury installations for upscale homes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nassau County South Shore</h3>
              <p className="text-gray-600">
                Comprehensive garage door repair and installation for Nassau's South Shore including Hempstead, 
                Oceanside, and Massapequa. Our team provides reliable service for Long Island's family neighborhoods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Suffolk County West</h3>
              <p className="text-gray-600">
                Expert garage door services for western Suffolk County including Huntington, Babylon, and Islip. 
                We understand the diverse housing needs across these established Long Island communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Suffolk County East</h3>
              <p className="text-gray-600">
                Professional garage door solutions for eastern Suffolk County including Brookhaven, Riverhead, 
                and the Hamptons. We provide quality service from suburban neighborhoods to luxury estates.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Hamptons</h3>
              <p className="text-gray-600">
                Specialized luxury garage door services for the Hamptons including East Hampton, Southampton, 
                and Montauk. We offer premium materials and custom designs for exclusive properties.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Central Long Island</h3>
              <p className="text-gray-600">
                Reliable garage door repair and maintenance for central Long Island communities including 
                Levittown, Hicksville, and Plainview. We serve Long Island's suburban family neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Long Island */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Garage Door Services in Long Island, NY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors offers comprehensive garage door solutions throughout Long Island. Our skilled 
              technicians provide everything from emergency repairs to luxury installations with professional excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-heart-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Luxury Estate Services</h3>
              <p className="text-gray-600">
                Specialized garage door services for Long Island's luxury estates and high-end properties. 
                We offer premium materials, custom designs, and advanced features for exclusive homes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Round-the-clock emergency garage door repair throughout Nassau and Suffolk Counties. 
                Our strategically located teams ensure rapid response across all Long Island areas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-water-percent-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Coastal Weather Protection</h3>
              <p className="text-gray-600">
                Specialized garage door solutions designed for Long Island's coastal environment. 
                Salt-resistant materials and weatherproofing to withstand ocean air and seasonal storms.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Technology Integration</h3>
              <p className="text-gray-600">
                Advanced smart garage door systems for tech-savvy Long Island residents. WiFi connectivity, 
                smartphone control, and home automation integration for modern convenience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-car-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Car Garage Specialists</h3>
              <p className="text-gray-600">
                Expert installation and repair for Long Island's multi-car garages. We handle large doors, 
                multiple openers, and complex systems common in suburban and luxury properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Seasonal Maintenance</h3>
              <p className="text-gray-600">
                Comprehensive maintenance programs designed for Long Island's seasonal weather changes. 
                Regular service prevents issues and ensures reliable operation year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long Island Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Long Island Residents Trust Smart Garage Doors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Long Island's premier garage door service provider, we understand the region's unique characteristics 
              and deliver exceptional solutions that meet the diverse needs of Nassau and Suffolk County communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-2-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Long Island Coverage</h3>
              <p className="text-gray-600">
                Complete coverage across Nassau and Suffolk Counties with strategically located service teams. 
                We know Long Island's geography and traffic patterns for efficient service delivery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-vip-crown-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Luxury Specialists</h3>
              <p className="text-gray-600">
                Specialized expertise in luxury garage door installations for Long Island's upscale communities. 
                Premium materials and custom solutions for discerning homeowners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-star-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Coastal Expertise</h3>
              <p className="text-gray-600">
                Specialized knowledge of coastal weather challenges and salt air protection. 
                We use materials and techniques designed for Long Island's marine environment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Service Standards</h3>
              <p className="text-gray-600">
                Exceptional customer service that meets Long Island's high expectations. 
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
              Long Island Garage Door Service FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you service both Nassau and Suffolk Counties?
              </h3>
              <p className="text-gray-600">
                Yes, Smart Garage Doors provides comprehensive garage door services throughout both Nassau 
                and Suffolk Counties, from the North Shore to the South Shore, and from western communities 
                to the East End including the Hamptons.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do you handle Long Island's coastal weather conditions?
              </h3>
              <p className="text-gray-600">
                We specialize in garage doors designed for coastal environments, using salt-resistant materials 
                and protective coatings. Our maintenance programs include specific care for Long Island's 
                salt air exposure and seasonal weather challenges.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you work on luxury homes and estates in the Hamptons?
              </h3>
              <p className="text-gray-600">
                Absolutely! We specialize in luxury garage door installations for high-end properties throughout 
                Long Island, including the Hamptons. We offer premium materials, custom designs, and advanced 
                features that complement exclusive estates.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's your response time for emergency calls on Long Island?
              </h3>
              <p className="text-gray-600">
                Our response time varies by location but typically ranges from 1-3 hours depending on your 
                specific area in Nassau or Suffolk County. We maintain service vehicles strategically located 
                across Long Island for optimal coverage.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer seasonal maintenance programs for Long Island homes?
              </h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive seasonal maintenance programs specifically designed for Long Island's 
                climate. These programs include spring and fall inspections, lubrication, weather seal checks, 
                and salt air protection measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Expert Garage Door Service on Long Island?
          </h2>
          <p className="text-xl mb-8">
            Contact Smart Garage Doors today for professional garage door repair and installation services 
            throughout Nassau and Suffolk Counties. Our Long Island experts are ready to help!
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

export default LongIslandNY;
