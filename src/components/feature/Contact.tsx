import { useState } from 'react';
import { trackFormSubmit } from '../../utils/analytics';
import { submitForm } from '../../utils/formSubmission';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitForm(formData, 'Contact Form');

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        trackFormSubmit('Contact Form', 'contact');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-lg">Contact Us</span>
          <h2 className="text-4xl font-bold text-blue-900 mt-2 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Need garage door service? Contact us today for fast, reliable service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info & Image */}
          <div>
            {/* Real photo */}
            <div className="mb-8 relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/9f70538874f046536c17d5849a06e8ef.jpeg"
                alt="Professional garage door service team"
                className="w-full h-80 object-cover object-top"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Professional Service You Can Trust</h3>
                <p className="text-gray-200">Licensed, insured, and ready to help 24/7</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-white text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">Phone</h3>
                  <a href="tel:914-557-6816" className="text-gray-600 hover:text-orange-500 transition-colors">
                    (914) 557-6816
                  </a>
                  <p className="text-sm text-gray-500 mt-1">24/7 Emergency Service</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-white text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">Email</h3>
                  <a href="mailto:info@smartgaragedoors.com" className="text-gray-600 hover:text-orange-500 transition-colors">
                    info@smartgaragedoors.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-white text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">Service Areas</h3>
                  <p className="text-gray-600">
                    New York, New Jersey & Connecticut
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">Hours</h3>
                  <p className="text-gray-600">24/7 Emergency Service Available</p>
                  <p className="text-sm text-gray-500 mt-1">Regular Hours: Mon-Sun 7AM-9PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-blue-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-blue-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-blue-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-blue-900 mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm cursor-pointer"
                >
                  <option value="">Select a service</option>
                  <option value="Emergency Repair">Emergency Repair</option>
                  <option value="Spring Replacement">Spring Replacement</option>
                  <option value="Opener Repair">Opener Repair/Installation</option>
                  <option value="Cable/Roller Repair">Cable/Roller Repair</option>
                  <option value="New Installation">New Installation</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-blue-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none text-sm"
                  placeholder="Tell us about your garage door issue..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">Maximum 500 characters</p>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <p className="font-semibold">Thank you for contacting us!</p>
                  <p className="text-sm">We'll get back to you as soon as possible.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  <p className="font-semibold">Oops! Something went wrong.</p>
                  <p className="text-sm">Please try again or call us directly.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <i className="ri-send-plane-line mr-2"></i>
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}