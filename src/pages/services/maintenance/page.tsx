import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Button from '../../../components/base/Button';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import FAQSchema from '../../../components/seo/FAQSchema';
import RelatedServices from '../../../components/seo/RelatedServices';
import { useLocation } from '../../../contexts/LocationContext';

export default function MaintenancePage() {
  const { location, locationName, isLoading } = useLocation();
  
  const displayLocation = (location?.city === 'Queens' || !location || isLoading) 
    ? 'your area' 
    : locationName;
  
  const faqs = [
    {
      question: `How much does garage door maintenance cost in ${displayLocation}?`,
      answer: `Preventive maintenance visits typically cost $100-$200 depending on the service level. Annual maintenance plans offer better value and typically cost $150-$300 per year with multiple visits included. Maintenance is much more cost-effective than waiting for expensive repairs.`,
    },
    {
      question: 'How often should I have my garage door maintained?',
      answer: 'We recommend professional garage door maintenance at least once per year, ideally before winter and after harsh weather seasons. Heavy-use doors may benefit from bi-annual maintenance. Regular maintenance can extend door life by 50% or more and prevent unexpected breakdowns.',
    },
    {
      question: 'What\'s included in a garage door maintenance service?',
      answer: 'Our comprehensive maintenance includes: inspection of all components (springs, cables, rollers, tracks), safety sensor testing, balance check, lubrication of moving parts, track alignment check, opener testing, weatherstripping inspection, and detailed report. We identify potential issues before they become expensive repairs.',
    },
    {
      question: 'Can I maintain my garage door myself?',
      answer: 'Basic maintenance like visual inspection and light lubrication can be done by homeowners, but professional maintenance is recommended. Technicians have the expertise to identify issues early, proper tools for adjustments, and safety knowledge to handle dangerous components. Professional maintenance often pays for itself by preventing major repairs.',
    },
    {
      question: `Do you offer maintenance plans in ${displayLocation}?`,
      answer: `Yes, we offer flexible maintenance plans throughout NY, NJ & CT. Plans can include annual or bi-annual visits, priority scheduling, discounted repairs, and extended warranties. Contact us to discuss a maintenance plan tailored to your needs and usage.`,
    },
    {
      question: 'What problems can regular maintenance prevent?',
      answer: 'Regular maintenance can prevent: spring failure (by detecting wear early), cable breakage, opener motor burnout, track misalignment, roller wear, and safety issues. Early detection allows for cost-effective repairs before components fail completely, saving hundreds or thousands of dollars.',
    },
    {
      question: 'When is the best time for garage door maintenance?',
      answer: 'The best times for maintenance are: before winter (to ensure smooth operation in cold weather), after severe storms, and in spring (to address any winter-related wear). However, maintenance can be scheduled anytime - the key is consistency. We can help you establish a maintenance schedule.',
    },
  ];

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = new URLSearchParams();
    
    for (const [key, value] of formData.entries()) {
      data.append(key, value.toString());
    }

    try {
      const response = await fetch('https://readdy.ai/api/form/d413rd22kqgi5a0pu880', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
      });

      if (response.ok) {
        alert('Maintenance plan request submitted! We will contact you to schedule your service.');
        (e.target as HTMLFormElement).reset();
      } else {
        alert('Failed to submit request. Please call us at (914) 557-6816');
      }
    } catch (error) {
      alert('Failed to submit request. Please call us at (914) 557-6816');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DynamicMetaTags 
        title="Garage Door Maintenance Plans NYC | Preventive Service | Smart Garage Doors"
        description="Professional garage door maintenance plans in NYC, Westchester, and Connecticut. Preventive maintenance to extend door life and prevent costly repairs."
        keywords="garage door maintenance, preventive maintenance, maintenance plans, garage door service, annual maintenance"
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20technician%20performing%20garage%20door%20maintenance%20inspection%20with%20checklist%20and%20tools%2C%20clean%20residential%20garage%20setting%2C%20preventive%20maintenance%20service%2C%20professional%20uniform%2C%20well-organized%20work%20environment%2C%20quality%20service%20demonstration&width=1200&height=600&seq=maintenance-hero001&orientation=landscape"
            alt="Professional Garage Door Maintenance"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Garage Door Maintenance Plans
            </h1>
            <p className="text-xl mb-8">
              Keep your garage door running smoothly year-round with our comprehensive maintenance plans. Prevent costly repairs and extend your door's lifespan with regular professional service across NYC, Westchester, and Connecticut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap">
                <i className="ri-phone-fill mr-2"></i>
                Call: (914) 557-6816
              </button>
              <button className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap">
                <i className="ri-calendar-line mr-2"></i>
                Schedule Maintenance
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintenance Plan Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the maintenance plan that best fits your needs and budget. All plans include professional service and priority scheduling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Plan</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$99</div>
                <p className="text-gray-600">Annual Service</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Annual safety inspection</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Lubrication of moving parts</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Hardware tightening</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Basic opener testing</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">10% discount on repairs</span>
                </li>
              </ul>
              
              <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                Choose Basic
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-green-50 rounded-lg p-8 border-2 border-green-600 relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Plan</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$179</div>
                <p className="text-gray-600">Bi-Annual Service</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Bi-annual safety inspections</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Complete lubrication service</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Hardware adjustment & tightening</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Comprehensive opener testing</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Spring tension adjustment</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Weather seal inspection</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">15% discount on repairs</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Priority scheduling</span>
                </li>
              </ul>
              
              <Button variant="primary" className="w-full bg-green-600 hover:bg-green-700">
                Choose Premium
              </Button>
            </div>

            {/* Elite Plan */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Elite Plan</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$299</div>
                <p className="text-gray-600">Quarterly Service</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Quarterly comprehensive service</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">All Premium Plan features</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Preventive parts replacement</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Remote control programming</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Track cleaning & alignment</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">20% discount on repairs</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Emergency service priority</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Extended warranty coverage</span>
                </li>
              </ul>
              
              <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                Choose Elite
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included in Our Maintenance</h2>
            <p className="text-lg text-gray-600">
              Comprehensive maintenance service to keep your garage door operating safely and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Inspection</h3>
              <p className="text-gray-600">
                Complete safety check of all components including springs, cables, rollers, and safety features to ensure secure operation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-drop-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lubrication Service</h3>
              <p className="text-gray-600">
                Professional lubrication of all moving parts including hinges, rollers, springs, and tracks for smooth, quiet operation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-tools-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hardware Adjustment</h3>
              <p className="text-gray-600">
                Tightening and adjustment of all hardware components to prevent wear and ensure proper door alignment and operation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-settings-3-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opener Testing</h3>
              <p className="text-gray-600">
                Comprehensive testing of garage door opener including safety features, force settings, and remote control functionality.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-equalizer-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Balance Check</h3>
              <p className="text-gray-600">
                Testing and adjustment of door balance to ensure even operation and prevent premature wear of components.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-file-list-3-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Report</h3>
              <p className="text-gray-600">
                Complete maintenance report with recommendations for any needed repairs or improvements to extend door life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Regular Maintenance</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-money-dollar-circle-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Savings</h3>
              <p className="text-gray-600">Prevent expensive repairs with regular maintenance and early problem detection</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Extended Lifespan</h3>
              <p className="text-gray-600">Regular maintenance can double the life of your garage door system</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Safety</h3>
              <p className="text-gray-600">Regular safety checks ensure your family's protection from accidents</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-volume-down-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quiet Operation</h3>
              <p className="text-gray-600">Proper lubrication and adjustment keep your door operating smoothly and quietly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="maintenance-form" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule Your Maintenance Service</h2>
            <p className="text-lg text-gray-600">
              Choose your maintenance plan and schedule your first service appointment.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="bg-white rounded-lg p-8" data-readdy-form>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-2">
                  Maintenance Plan *
                </label>
                <select
                  id="plan"
                  name="plan"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8"
                >
                  <option value="">Select Plan</option>
                  <option value="basic">Basic Plan - $99/year</option>
                  <option value="premium">Premium Plan - $179/year</option>
                  <option value="elite">Elite Plan - $299/year</option>
                </select>
              </div>
              <div>
                <label htmlFor="door_age" className="block text-sm font-medium text-gray-700 mb-2">
                  Door Age
                </label>
                <select
                  id="door_age"
                  name="door_age"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8"
                >
                  <option value="">Select Age</option>
                  <option value="new">Less than 1 year</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">Over 10 years</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Any specific concerns or requests for your maintenance service..."
              ></textarea>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full bg-green-600 hover:bg-green-700">
              <i className="ri-calendar-check-line mr-2"></i>
              Schedule Maintenance Service
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Maintenance FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about garage door maintenance and preventive care
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
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

      <RelatedServices />
      <Footer />
    </div>
  );
}
