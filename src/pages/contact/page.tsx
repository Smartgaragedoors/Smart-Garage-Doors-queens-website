
import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import { submitForm } from '../../utils/formSubmission';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    urgency: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    document.title = 'Contact & Schedule Service | Smart Garage Doors | Professional Garage Door Repair';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Smart Garage Doors to schedule professional garage door repair, installation, and maintenance services. Easy online scheduling for all your garage door needs in NY, NJ, and CT.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'contact garage door repair, schedule garage door service, garage door appointment, Smart Garage Doors contact');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://smartestgaragedoors.com'}/contact`);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const result = await submitForm(formData, 'Contact Page Form');

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          serviceType: '',
          urgency: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags 
        title="Contact Us | Garage Door Repair NY NJ CT | Smartest Garage Doors"
        description="Contact Smartest Garage Doors for fast, professional garage door repair and installation services. Serving NY, NJ & CT. Call (914) 557-6816 or schedule online."
      />
      <Header />
      <Breadcrumbs />
      
      {/* Schema.org structured data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Smart Garage Doors",
            "description": "Get in touch with Smart Garage Doors for professional garage door services in NY, NJ & CT",
            "url": `${import.meta.env.VITE_SITE_URL || "https://smartestgaragedoors.com"}/contact/`,
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Smart Garage Doors",
              "telephone": "+19145576816",
              "email": "info@smartestgaragedoors.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "White Plains",
                "addressRegion": "NY",
                "postalCode": "10601",
                "addressCountry": "US"
              }
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20customer%20service%20representative%20helping%20customer%20schedule%20garage%20door%20repair%20appointment%2C%20modern%20office%20setting%20with%20computers%20and%20phones%2C%20friendly%20staff%20providing%20excellent%20customer%20service&width=1200&height=600&seq=contact-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact & Schedule Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Ready to schedule your garage door service? Contact Smart Garage Doors today for professional 
              repair, installation, and maintenance services throughout NY, NJ, and CT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+19145576816" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Call Now: (914) 557-6816
              </a>
              <a href="#schedule-form" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Schedule Online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to contact Smart Garage Doors. We're here to help with 
              all your garage door needs, from emergency repairs to scheduled maintenance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team for immediate assistance or to schedule service.
              </p>
              <a href="tel:+19145576816" className="text-orange-600 font-semibold hover:text-orange-700">
                (914) 557-6816
              </a>
              <p className="text-sm text-gray-500 mt-2">Available 24/7 for emergencies</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Schedule Online</h3>
              <p className="text-gray-600 mb-4">
                Use our convenient online form to schedule service at your preferred time.
              </p>
              <a href="#schedule-form" className="text-blue-600 font-semibold hover:text-blue-700">
                Schedule Now
              </a>
              <p className="text-sm text-gray-500 mt-2">Response within 2 hours</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Service</h3>
              <p className="text-gray-600 mb-4">
                Need immediate help? Our emergency team is available 24/7 for urgent repairs.
              </p>
              <a href="tel:+19145576816" className="text-green-600 font-semibold hover:text-green-700">
                Emergency Line
              </a>
              <p className="text-sm text-gray-500 mt-2">1-2 hour response time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Form */}
      <section id="schedule-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Schedule Your Service
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to schedule your garage door service. We'll contact you within 
              2 hours to confirm your appointment and provide a free estimate.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg" data-readdy-form>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Enter your full name"
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
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="123 Main St, City, State"
                />
              </div>
              
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                >
                  <option value="">Select a service</option>
                  <option value="repair">Garage Door Repair</option>
                  <option value="installation">New Installation</option>
                  <option value="maintenance">Maintenance Service</option>
                  <option value="opener-repair">Opener Repair</option>
                  <option value="spring-replacement">Spring Replacement</option>
                  <option value="emergency">Emergency Repair</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency Level *
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                >
                  <option value="">Select urgency</option>
                  <option value="emergency">Emergency (Same Day)</option>
                  <option value="urgent">Urgent (Within 24 hours)</option>
                  <option value="normal">Normal (Within 3 days)</option>
                  <option value="flexible">Flexible (Within a week)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                >
                  <option value="">Select time preference</option>
                  <option value="morning">Morning (8 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Please describe your garage door issue or any specific requirements..."
              />
              <p className="text-sm text-gray-500 mt-1">{formData.message.length}/500 characters</p>
            </div>
            
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you! Your service request has been submitted. We'll contact you within 2 hours to confirm your appointment.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                Sorry, there was an error submitting your request. Please try again or call us directly at (914) 557-6816.
              </div>
            )}
            
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Service'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Garage Doors proudly serves customers throughout New York, New Jersey, and Connecticut. 
              Find your area below or contact us to confirm service availability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">New York</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Brooklyn</li>
                <li>• Queens</li>
                <li>• Staten Island</li>
                <li>• Long Island</li>
                <li>• Nassau County</li>
                <li>• Suffolk County</li>
                <li>• Westchester County</li>
                <li>• Scarsdale</li>
                <li>• New Rochelle</li>
                <li>• White Plains</li>
                <li>• Suffern</li>
                <li>• Flushing</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connecticut</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Stamford</li>
                <li>• Fairfield</li>
                <li>• Greenwich</li>
                <li>• Darien</li>
                <li>• New Canaan</li>
                <li>• Westport</li>
                <li>• Newtown</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">New Jersey</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Bergen County</li>
                <li>• Paramus</li>
                <li>• Ridgewood</li>
                <li>• Hackensack</li>
                <li>• Teaneck</li>
                <li>• Fort Lee</li>
                <li>• Englewood</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
