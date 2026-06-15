
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import { buildCanonical } from '../../config/canonical';
import { submitForm } from '../../utils/formSubmission';
import { trackFormStart, trackFormSubmit } from '../../utils/analytics';
import FormTrustBadges from '../../components/conversion/FormTrustBadges';

export default function BookNowPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    urgency: '',
    description: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const formStarted = useRef(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // Fire form_start once on the visitor's first interaction (enables abandonment measurement)
    if (!formStarted.current) {
      formStarted.current = true;
      trackFormStart('Book Now Form', 'book_now_page');
    }
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitForm(formData, 'Book Now Form');

      if (result.success) {
        trackFormSubmit('Book Now Form', 'book_now', {
          service_type: formData.serviceType,
          urgency: formData.urgency,
        });
        navigate('/book-now/thank-you/');
        setSubmitStatus(result.usedFallback ? 'fallback' : 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          serviceType: '',
          urgency: '',
          description: '',
          preferredDate: '',
          preferredTime: ''
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
        title="Book Garage Door Service | Repair & Installation | Smartest Garage Doors"
        description="Book your garage door repair or installation online in under 60 seconds. Fast response — emergency appointments often available across NY, NJ & CT with a 5-star rated local team."
        canonical={buildCanonical('/book-now')}
      />
      <Header />
      
      {/* Hero Section — premium ink/serif (matches homepage & location pages) */}
      <section className="relative bg-[#161D29] text-white py-20 overflow-hidden">
        {/* Decorative amber corner glow */}
        <div
          className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none hidden md:block"
          style={{ background: 'radial-gradient(circle at 75% 25%, rgba(217,100,31,0.16), transparent 64%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Eyebrow — green live dot */}
            <p className="flex items-center justify-center gap-2.5 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#E8915A] mb-5">
              <span
                className="inline-block w-[7px] h-[7px] rounded-full bg-[#3FAE72]"
                style={{ boxShadow: '0 0 0 4px rgba(63,174,114,0.25)' }}
                aria-hidden="true"
              />
              Tri-State · Licensed &amp; Insured · 24/7 Live Answer
            </p>
            <h1 className="font-newsreader font-medium text-4xl md:text-6xl mb-6 leading-[1.05] tracking-[-0.02em]">
              Book Your Garage Door Service
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto text-gray-200">
              Schedule your garage door repair or installation with Smart Garage Doors.
              Fast, reliable service across NY, NJ, and CT.
            </p>
            {/* Featured offer — $0 service call with any repair */}
            <div className="inline-flex items-center gap-3 mb-7 px-5 py-2.5 rounded-full bg-[rgba(217,100,31,0.14)] border border-[rgba(232,145,90,0.45)]">
              <span className="font-newsreader italic text-xl text-[#F2B98C] leading-none">$0</span>
              <span className="text-sm font-semibold text-white">service call with any repair</span>
            </div>
            <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto text-gray-300 flex flex-wrap items-center justify-center gap-x-2">
              <span className="text-[#F2B98C]" aria-hidden="true">★★★★★</span>
              <strong className="text-white">5.0</strong>
              <span>· 479 Google Reviews · Same-day slots available</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19145576816"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-fill mr-2"></i>
                Call Now: (914) 557-6816
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Schedule Your Service
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll contact you to confirm your appointment
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="book-now-form">
              {/* Core fields — 4 required fields only */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="First and last name"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    What do you need? *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Select a service</option>
                    <option value="emergency">Emergency Repair (ASAP)</option>
                    <option value="garage-door-repair">Garage Door Repair</option>
                    <option value="spring-replacement">Spring Replacement</option>
                    <option value="opener-repair">Opener Repair / Installation</option>
                    <option value="cable-roller-repair">Cable &amp; Roller Repair</option>
                    <option value="installation">New Door Installation</option>
                    <option value="maintenance">Maintenance Service</option>
                    <option value="other">Not sure / Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    How soon do you need service? *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Select urgency</option>
                    <option value="emergency">Right now — emergency</option>
                    <option value="urgent">Today or tomorrow</option>
                    <option value="normal">Within 2–3 days</option>
                    <option value="flexible">This week, flexible</option>
                  </select>
                </div>
              </div>

              {/* Optional details */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Anything else we should know? <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none"
                  placeholder="e.g. door won't open, spring snapped, opener making noise..."
                ></textarea>
              </div>

              <FormTrustBadges />

              <p className="text-center text-sm text-gray-600 flex flex-wrap items-center justify-center gap-x-2">
                <i className="ri-checkbox-circle-fill text-green-600" aria-hidden="true"></i>
                <span><strong className="text-gray-900">$0 service call</strong> with any repair · upfront price before we start · no obligation</span>
              </p>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? "Submitting service request" : "Book service now"}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <i className="ri-calendar-check-line mr-2"></i>
                      Book Service Now
                    </>
                  )}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <i className="ri-check-circle-line text-green-600 text-xl mr-2"></i>
                  <span className="text-green-800 font-medium">
                    Thank you! Your service request has been submitted. We'll contact you shortly to confirm your appointment.
                  </span>
                </div>
              )}

              {submitStatus === 'fallback' && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                  <i className="ri-mail-send-line text-amber-600 text-xl mr-2"></i>
                  <span className="text-amber-800 font-medium">
                    Your email client should open to send your request. If it didn’t open or you prefer to speak with us, please call <a href="tel:+19145576816" className="underline font-semibold">(914) 557-6816</a> to book.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                  <i className="ri-error-warning-line text-red-600 text-xl mr-2"></i>
                  <span className="text-red-800 font-medium">
                    There was an error submitting your request. Please try again or call us directly.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Service These Areas
            </h2>
            <p className="text-lg text-gray-600">
              Professional garage door services across New York, New Jersey, and Connecticut
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">New York</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Brooklyn</li>
                <li>Queens</li>
                <li>Staten Island</li>
                <li>Flushing</li>
                <li>Long Island</li>
                <li>Nassau County</li>
                <li>Suffolk County</li>
                <li>Westchester County</li>
                <li>White Plains</li>
                <li>New Rochelle</li>
                <li>Scarsdale</li>
                <li>Suffern</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connecticut</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Stamford</li>
                <li>Greenwich</li>
                <li>Darien</li>
                <li>Fairfield</li>
                <li>Westport</li>
                <li>New Canaan</li>
                <li>Newtown</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">New Jersey</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Bergen County</li>
                <li>Teaneck</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
