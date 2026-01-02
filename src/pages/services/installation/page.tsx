import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Button from '../../../components/base/Button';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import FAQSchema from '../../../components/seo/FAQSchema';
import { useLocation } from '../../../contexts/LocationContext';
import { submitForm } from '../../../utils/formSubmission';

export default function InstallationPage() {
  const { location, locationName, isLoading } = useLocation();
  
  const displayLocation = (location?.city === 'Queens' || !location || isLoading) 
    ? 'your area' 
    : locationName;
  
  const faqs = [
    {
      question: `How much does garage door installation cost in ${displayLocation}?`,
      answer: `New garage door installation typically costs $800-$2,500 depending on door size, material, style, and features. Basic single-car steel doors start around $800-$1,200, while premium double-car doors with windows, insulation, and custom features can cost $1,800-$2,500. Wood doors typically cost $1,500-$5,000+. We provide free estimates with detailed pricing breakdowns for all installation projects.`,
    },
    {
      question: 'How long does garage door installation take?',
      answer: 'Most garage door installations take 3-5 hours to complete from start to finish. This includes removing the old door (if applicable), installing the new door and tracks, setting up springs and cables, installing the opener (if included), and comprehensive testing. For complex installations or custom doors, the process may take 5-7 hours. We work efficiently to minimize disruption to your day and ensure everything operates perfectly.',
    },
    {
      question: 'Do you install all types and brands of garage doors?',
      answer: 'Yes, we install all types of garage doors including sectional (most common), roll-up, side-hinged, and custom designs. We work with all major brands including Clopay, Wayne Dalton, Amarr, Raynor, CHI, LiftMaster, Chamberlain, and more. If you have a specific brand preference, we can source and install it. We can also help you choose the right door style, material, and features for your home based on your needs, budget, and aesthetic preferences.',
    },
    {
      question: 'What garage door materials do you install?',
      answer: 'We install garage doors in steel, aluminum, wood, fiberglass, and vinyl materials. Steel is the most popular choice for durability, value, and low maintenance - available in various gauges and insulation levels. Wood doors offer premium aesthetics and can be stained or painted but require more maintenance. Aluminum is lightweight and corrosion-resistant, ideal for coastal areas. Fiberglass and vinyl offer low maintenance and weather resistance. We can help you choose based on your budget, style preferences, climate, and maintenance expectations.',
    },
    {
      question: `Do you offer installation warranty in ${displayLocation}?`,
      answer: `Yes, all our installations include comprehensive warranty coverage. We warranty our installation workmanship for 1 year, ensuring proper installation and function. Doors come with manufacturer warranties (typically 3-20 years depending on material and brand). Springs typically have 1-2 year warranties, and openers have 1-5 year warranties. We stand behind our work and will address any installation-related issues promptly at no additional charge during the warranty period.`,
    },
    {
      question: 'Can you install a new door without replacing the opener?',
      answer: 'Yes, if your existing opener is in good condition, compatible with the new door, and less than 10-15 years old, we can often reuse it. However, we\'ll inspect it thoroughly first and may recommend replacement if it\'s old, incompatible, showing signs of wear, or lacks modern safety features. New doors often work best with new openers for optimal performance, better safety features, and warranty coverage. We can discuss options during your estimate.',
    },
    {
      question: 'Do you remove and dispose of old garage doors?',
      answer: 'Yes, we handle complete removal and disposal of old garage doors as part of our installation service. We\'ll safely remove the old door, tracks, springs, cables, and all hardware, and properly dispose of all materials. There\'s no extra charge for this service - it\'s included in the installation price. We ensure proper disposal in accordance with local regulations and recycling when possible.',
    },
    {
      question: 'What styles of garage doors do you install?',
      answer: 'We install all popular garage door styles including traditional raised panel, contemporary flush designs, carriage-house style (with decorative hardware), and custom designs. We offer doors with windows (decorative or full-view), different panel configurations, various color and finish options, and architectural details. Whether you want a traditional look that matches your home\'s architecture or a modern statement piece, we can help you find the perfect style.',
    },
    {
      question: 'Do you install insulated garage doors?',
      answer: 'Yes, we install insulated garage doors which provide significant energy savings, noise reduction, and better climate control. Insulated doors have R-values ranging from R-6 to R-18+, with higher R-values providing better insulation. This is especially important for attached garages or if you use your garage as a workspace. We can explain the benefits and costs of different insulation levels to help you choose the best option.',
    },
    {
      question: `How quickly can you install a new garage door in ${displayLocation}?`,
      answer: `We typically can schedule new garage door installations within 1-2 weeks, depending on door selection and current schedule. For standard doors in stock, we can often install within 3-7 days. Custom doors may take 2-4 weeks for ordering and delivery. Emergency installations are available when possible. We\'ll provide a timeline during your estimate and work to accommodate your schedule needs.`,
    },
    {
      question: 'What measurements do you need for installation?',
      answer: 'We\'ll take precise measurements during our free estimate visit, including door opening width and height, headroom (ceiling clearance), backroom (space behind door when open), and side room (space on either side). We also check for obstructions, electrical requirements for openers, and structural considerations. You don\'t need to measure yourself - our technicians handle all measurements professionally to ensure perfect fit.',
    },
    {
      question: 'Do you install smart garage door openers?',
      answer: 'Yes, we install modern smart garage door openers with WiFi connectivity, smartphone control, security cameras, and home automation integration. Smart openers allow you to control your door remotely, receive notifications, monitor activity, and integrate with systems like Amazon Alexa, Google Home, and Apple HomeKit. We can explain features and help you choose the best smart opener for your needs and home automation setup.',
    },
    {
      question: 'Will installation disrupt my daily routine?',
      answer: 'We work efficiently to minimize disruption. Most installations take 3-5 hours and can often be scheduled at your convenience. We\'ll coordinate timing with you and keep you informed throughout the process. You\'ll need to ensure your vehicles are moved from the garage, but otherwise you can continue your normal routine. We clean up thoroughly after installation, leaving your garage clean and organized.',
    },
    {
      question: `What areas do you serve for garage door installation?`,
      answer: `We provide garage door installation services throughout New York (including Queens, Brooklyn, Long Island, Westchester County), New Jersey (Bergen County), and Connecticut (Fairfield County). We serve all areas within a 50-mile radius with professional installation service and can typically reach you within the scheduled timeframe.`,
    },
    {
      question: 'Do you offer financing for garage door installation?',
      answer: 'Yes, we offer flexible financing options for garage door installation projects. We understand that a new garage door is a significant investment and offer payment plans to make quality doors affordable. Options include low monthly payments and interest-free plans for qualified customers. Contact us to discuss financing options and see what plans you qualify for.',
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
      const result = await submitForm(data, 'Installation Form');

      if (result.success) {
        alert('Installation quote request submitted! We will contact you within 24 hours.');
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
        title="Garage Door Installation NYC | Professional Installation | Same-Day Service"
        description="Professional garage door installation in NYC, Westchester, and Connecticut. Expert installation of residential and commercial garage doors with warranty."
        keywords="garage door installation, new garage door, professional installation, residential garage doors, commercial installation"
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20garage%20door%20installation%20showing%20modern%20residential%20garage%20with%20new%20stylish%20garage%20door%20being%20installed%20by%20skilled%20technicians%2C%20clean%20suburban%20setting%2C%20bright%20daylight%2C%20installation%20equipment%20and%20tools%20visible%2C%20professional%20work%20environment&width=1280&height=640&quality=85&seq=install-hero001&orientation=landscape"
            alt="Professional Garage Door Installation"
            className="w-full h-full object-cover opacity-20"
            width="1280"
            height="640"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Garage Door Installation
            </h1>
            <p className="text-xl mb-8">
              Transform your home with a new garage door installation. We provide expert installation services for residential and commercial properties across NYC, Westchester, and Connecticut with full warranty coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap">
                <i className="ri-phone-fill mr-2"></i>
                Call: (914) 557-6816
              </button>
              <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap">
                <i className="ri-calendar-line mr-2"></i>
                Schedule Installation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Garage Door Types We Install</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from a wide selection of high-quality garage doors to match your home's style and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20sectional%20garage%20door%20with%20clean%20lines%20and%20contemporary%20design%2C%20residential%20setting%2C%20neutral%20colors%2C%20professional%20installation%2C%20high-quality%20materials%2C%20sleek%20appearance&width=400&height=300&seq=sectional001&orientation=landscape"
                alt="Sectional Garage Doors"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sectional Doors</h3>
                <p className="text-gray-600 mb-4">
                  Most popular choice offering excellent insulation, security, and smooth operation with various design options.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Energy efficient insulation</li>
                  <li>• Multiple panel designs</li>
                  <li>• Weather-resistant materials</li>
                  <li>• Quiet operation</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Traditional%20carriage%20house%20style%20garage%20door%20with%20decorative%20hardware%20and%20classic%20design%2C%20upscale%20residential%20setting%2C%20warm%20wood%20tones%2C%20elegant%20appearance%2C%20professional%20craftsmanship&width=400&height=300&seq=carriage001&orientation=landscape"
                alt="Carriage House Doors"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Carriage House</h3>
                <p className="text-gray-600 mb-4">
                  Classic style doors that add charm and curb appeal with traditional swing-out appearance but modern convenience.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Traditional aesthetic appeal</li>
                  <li>• Decorative hardware options</li>
                  <li>• Wood and steel materials</li>
                  <li>• Custom color choices</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Contemporary%20garage%20door%20with%20glass%20panels%20and%20aluminum%20frame%2C%20modern%20architectural%20setting%2C%20sleek%20design%2C%20natural%20light%2C%20minimalist%20style%2C%20high-end%20residential%20property&width=400&height=300&seq=contemporary001&orientation=landscape"
                alt="Contemporary Doors"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contemporary</h3>
                <p className="text-gray-600 mb-4">
                  Modern designs with clean lines, glass panels, and aluminum frames perfect for contemporary homes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Glass panel options</li>
                  <li>• Aluminum construction</li>
                  <li>• Modern aesthetic</li>
                  <li>• Natural light integration</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Heavy-duty%20commercial%20garage%20door%20installation%20at%20business%20facility%2C%20industrial%20setting%2C%20large%20door%20opening%2C%20professional%20installation%20team%2C%20commercial%20grade%20materials%2C%20security%20features&width=400&height=300&seq=commercial001&orientation=landscape"
                alt="Commercial Doors"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial</h3>
                <p className="text-gray-600 mb-4">
                  Heavy-duty doors designed for commercial and industrial applications with enhanced security and durability.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Heavy-duty construction</li>
                  <li>• Enhanced security features</li>
                  <li>• High-cycle operation</li>
                  <li>• Custom sizing available</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Insulated%20garage%20door%20cross-section%20showing%20energy%20efficient%20layers%2C%20thermal%20barrier%2C%20weather%20sealing%2C%20professional%20installation%2C%20energy%20savings%20demonstration%2C%20quality%20construction&width=400&height=300&seq=insulated001&orientation=landscape"
                alt="Insulated Doors"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Insulated</h3>
                <p className="text-gray-600 mb-4">
                  Energy-efficient doors with superior insulation to reduce energy costs and provide quieter operation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Energy cost savings</li>
                  <li>• Noise reduction</li>
                  <li>• Temperature control</li>
                  <li>• Durable construction</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Custom%20designed%20garage%20door%20with%20unique%20architectural%20details%2C%20luxury%20residential%20setting%2C%20personalized%20design%20elements%2C%20high-end%20materials%2C%20bespoke%20craftsmanship%2C%20elegant%20appearance&width=400&height=300&seq=custom001&orientation=landscape"
                alt="Custom Doors"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Design</h3>
                <p className="text-gray-600 mb-4">
                  Fully customized doors designed to match your specific architectural requirements and personal preferences.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Personalized design</li>
                  <li>• Premium materials</li>
                  <li>• Unique specifications</li>
                  <li>• Architectural matching</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-lg text-gray-600">
              Professional installation process ensuring perfect fit, operation, and long-lasting performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Free in-home consultation to assess your needs and provide detailed quote</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Measurement</h3>
              <p className="text-gray-600">Precise measurements and custom ordering to ensure perfect fit</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">Professional installation by certified technicians with quality guarantee</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600">Complete testing and adjustment to ensure smooth, safe operation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Installation Quote</h2>
            <p className="text-lg text-gray-600">
              Contact us for a free consultation and detailed quote for your garage door installation project.
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Installation Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="door_type" className="block text-sm font-medium text-gray-700 mb-2">
                  Door Type Interest
                </label>
                <select
                  id="door_type"
                  name="door_type"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                >
                  <option value="">Select Door Type</option>
                  <option value="sectional">Sectional</option>
                  <option value="carriage-house">Carriage House</option>
                  <option value="contemporary">Contemporary</option>
                  <option value="commercial">Commercial</option>
                  <option value="insulated">Insulated</option>
                  <option value="custom">Custom Design</option>
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                >
                  <option value="">Select Timeline</option>
                  <option value="asap">As Soon As Possible</option>
                  <option value="1-2-weeks">1-2 Weeks</option>
                  <option value="1-month">Within 1 Month</option>
                  <option value="2-3-months">2-3 Months</option>
                  <option value="planning">Just Planning</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                Project Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your project, style preferences, special requirements..."
              ></textarea>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              <i className="ri-mail-send-line mr-2"></i>
              Request Free Quote
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Installation FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about new garage door installation
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

      <Footer />
    </div>
  );
}
