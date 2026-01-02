
import { useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Button from '../../../components/base/Button';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import FAQSchema from '../../../components/seo/FAQSchema';
import ServiceAreaLinks from '../../../components/seo/ServiceAreaLinks';
import { useLocation } from '../../../contexts/LocationContext';
import { submitForm } from '../../../utils/formSubmission';

export default function EmergencyRepairsPage() {
  const { location, locationName, isLoading } = useLocation();
  
  const displayLocation = (location?.city === 'Queens' || !location || isLoading) 
    ? 'your area' 
    : locationName;
  
  const faqs = [
    {
      question: `How quickly can you respond to emergency garage door repairs in ${displayLocation}?`,
      answer: `We offer 24/7 emergency garage door repair service with fast response times throughout NY, NJ & CT. Our technicians typically arrive within 60-90 minutes for emergency calls in most areas. We have multiple service locations strategically positioned to ensure quick response times, regardless of where you're located in our service area.`,
    },
    {
      question: 'What situations require emergency garage door repair?',
      answer: 'Emergency garage door repair is needed when your door is stuck open or closed, there\'s a safety hazard (like a broken spring that could cause injury), the door won\'t close and you\'re leaving your property unsecured, or there\'s a malfunction that prevents you from accessing or leaving your garage. We respond to all urgent situations 24/7.',
    },
    {
      question: 'Do you charge extra for emergency service calls?',
      answer: 'Our emergency service rates are competitive and transparent. While emergency calls may have slightly higher rates due to immediate dispatch and after-hours service, we always provide upfront pricing. We never surprise customers with hidden fees. Many emergency repairs can be completed quickly and affordably.',
    },
    {
      question: 'What if my garage door is stuck open and I need to leave?',
      answer: 'If your garage door is stuck open and you need immediate assistance, call us right away. Our emergency technicians can often provide a temporary solution to secure your garage door so you can leave safely, then return to complete the full repair. We understand the urgency and prioritize these situations.',
    },
    {
      question: 'Can you handle emergency repairs for all garage door brands?',
      answer: 'Yes, our technicians are trained and equipped to handle emergency repairs for all major garage door brands including LiftMaster, Chamberlain, Genie, Craftsman, and more. We carry common replacement parts in our service vehicles to address most emergency situations quickly.',
    },
    {
      question: `What areas do you serve for emergency garage door repair?`,
      answer: `We provide 24/7 emergency garage door repair throughout New York (Queens, Brooklyn, Long Island, Westchester County), New Jersey (Bergen County), and Connecticut (Fairfield County). With multiple service locations, we can quickly respond to emergencies throughout our entire coverage area.`,
    },
  ];

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    
    for (const [key, value] of formData.entries()) {
      data[key] = value.toString();
    }

    try {
      const result = await submitForm(data, 'Emergency Repairs Form');

      if (result.success) {
        alert('Emergency request submitted! We will contact you immediately.');
        (e.target as HTMLFormElement).reset();
      } else {
        alert('Failed to submit request. Please call us directly at (914) 557-6816');
      }
    } catch (error) {
      alert('Failed to submit request. Please call us directly at (914) 557-6816');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DynamicMetaTags 
        title="Emergency Garage Door Repair NYC | 24/7 Service | Same-Day Response"
        description="24/7 emergency garage door repair in NYC, Westchester, and Connecticut. Fast response, professional technicians, immediate solutions for broken garage doors. Available 24/7."
        keywords="emergency garage door repair, 24/7 garage door service, urgent garage door fix, broken garage door repair, emergency technician"
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Emergency%20garage%20door%20repair%20service%20at%20night%20with%20bright%20emergency%20lights%2C%20professional%20technician%20working%20urgent%20%20ly%20on%20broken%20garage%20door%2C%20emergency%20van%20with%20flashing%20lights%2C%20residential%20setting%2C%20dramatic%20lighting%20showing%20urgency%20and%20professionalism&width=1200&height=600&seq=emergency-hero001&orientation=landscape"
            alt="24/7 Emergency Garage Door Repair"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              24/7 Emergency Garage Door Repair
            </h1>
            <p className="text-xl mb-8">
              Garage door stuck? Won't open? We provide immediate emergency repair services across NYC, Westchester, and Connecticut. Our certified technicians are available 24/7 for urgent garage door issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+19145576816"
                className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-fill mr-2"></i>
                Call Emergency Line
              </a>
              <a 
                href="/book-now/"
                className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap cursor-pointer"
              >
                <i className="ri-calendar-line mr-2"></i>
                Schedule Emergency Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Repair Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We handle all types of emergency garage door situations with fast response times and professional solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-alarm-warning-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Door Won't Open</h3>
              <p className="text-gray-600">
                Stuck garage door preventing you from leaving? We'll get you moving again quickly with professional emergency repair.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-tools-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Broken Springs</h3>
              <p className="text-gray-600">
                Snapped garage door springs aredangerous. Our emergency technicians safely replace broken springs immediately.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-settings-3-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opener Malfunction</h3>
              <p className="text-gray-600">
                Garage door opener not responding? We diagnose and repair all opener brands for immediate restoration.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-shield-cross-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Issues</h3>
              <p className="text-gray-600">
                Door won't close properly leaving your home vulnerable? We provide immediate security restoration services.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-thunderstorms-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Storm Damage</h3>
              <p className="text-gray-600">
                Weather damaged your garage door? Our emergency team provides immediate storm damage repair and restoration.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-car-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vehicle Damage</h3>
              <p className="text-gray-600">
                Accidentally hit your garage door? We provide immediate repair to restore function and appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Emergency Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Emergency Service</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-red-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">Average 30-minute response time for emergency calls</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-24-hours-line text-3xl text-red-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Available every day, including holidays and weekends</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-3xl text-red-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed &amp; Insured</h3>
              <p className="text-gray-600">Fully licensed technicians with comprehensive insurance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-fill text-3xl text-red-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Equipped</h3>
              <p className="text-gray-600">Mobile service trucks with all necessary parts and tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Form */}
      <section id="emergency-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Emergency Service</h2>
            <p className="text-lg text-gray-600">
              Fill out this form for immediate emergency response, or call us directly at (914) 557-6816
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="bg-gray-50 rounded-lg p-8" data-readdy-form>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Service Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="emergency_type" className="block text-sm font-medium text-gray-700 mb-2">
                Type of Emergency *
              </label>
              <select
                id="emergency_type"
                name="emergency_type"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent pr-8"
              >
                <option value="">Select Emergency Type</option>
                <option value="door-wont-open">Door Won't Open</option>
                <option value="door-wont-close">Door Won't Close</option>
                <option value="broken-spring">Broken Spring</option>
                <option value="opener-malfunction">Opener Malfunction</option>
                <option value="storm-damage">Storm Damage</option>
                <option value="security-issue">Security Issue</option>
                <option value="other">Other Emergency</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Describe the Problem *
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                required
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Please describe what happened and current condition of your garage door..."
              ></textarea>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full bg-red-600 hover:bg-red-700">
              <i className="ri-alarm-warning-line mr-2"></i>
              Submit Emergency Request
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Emergency Garage Door Repair FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our 24/7 emergency garage door repair services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaLinks 
        title="Emergency Garage Door Repair Services in Your Area"
        showDescription={true}
        maxLinks={10}
      />

      <Footer />
    </div>
  );
}
