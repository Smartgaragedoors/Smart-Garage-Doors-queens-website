import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Button from '../../../components/base/Button';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import FAQSchema from '../../../components/seo/FAQSchema';
import ServiceAreaLinks from '../../../components/seo/ServiceAreaLinks';
import { useLocation } from '../../../contexts/LocationContext';
import { submitForm } from '../../../utils/formSubmission';
import { getCFImageUrl } from '../../../data/cloudflareImages';

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
        if (result.usedFallback) {
          alert('Your email client should open to send your request. If it didn\'t open, please call us at (914) 557-6816.');
        } else {
          alert('Installation quote request submitted! We will contact you within 24 hours.');
        }
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
        title="Free Garage Door Installation Quote | Plan Your Project | Smartest Garage Doors"
        description="Get a free quote for your garage door project. Explore styles, materials, openers. Residential & commercial. NY, NJ & CT. 5.0★, 475 reviews. Licensed & insured."
        keywords="garage door installation services, free garage door quote, residential commercial garage doors, installation planning"
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0">
          <img 
            src="/images/garage-door-installation-team-on-site.jpg"
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
              Get Your Free Garage Door Installation Quote
            </h1>
            <p className="text-xl mb-4">
              Plan your new garage door project. Get a free quote, explore styles and materials, and schedule installation across NY, NJ & CT.
            </p>
            <p className="text-lg mb-8 text-blue-100">
              For New York–focused installation details, see our <a href="/garage-door-installation/" className="underline font-semibold">Garage Door Installation New York</a> page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+19145576816" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap">
                <i className="ri-phone-fill mr-2"></i>
                Call: (914) 557-6816
              </a>
              <a href="/book-now/" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap">
                <i className="ri-calendar-line mr-2"></i>
                Request Free Quote
              </a>
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
                src="/images/sectional-garage-door-installation-smart-garage-doors.jpg"
                alt="Sectional garage door installation — raised panel double door on residential home"
                className="w-full h-52 object-cover object-center"
                width={600} height={400} loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sectional Doors</h3>
                <p className="text-gray-600 mb-4">
                  The most popular style — raised panels, excellent insulation, and smooth operation. Works on nearly every home.
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
                src="/images/carriage-house-garage-door-installation-smart-garage-doors.jpg"
                alt="Carriage house garage door installation — white door with decorative windows and hardware on stone home"
                className="w-full h-52 object-cover object-center"
                width={600} height={400} loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Carriage House</h3>
                <p className="text-gray-600 mb-4">
                  Classic curb appeal with decorative hardware and window inserts. Traditional look, modern operation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Traditional aesthetic</li>
                  <li>• Decorative hardware options</li>
                  <li>• Wood and steel materials</li>
                  <li>• Custom color choices</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/images/contemporary-garage-door-installation-smart-garage-doors.jpg"
                alt="Contemporary garage door installation — wood grain finish with offset glass panels on modern home"
                className="w-full h-52 object-cover object-center"
                width={600} height={400} loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contemporary</h3>
                <p className="text-gray-600 mb-4">
                  Clean horizontal lines, wood-grain finishes, and glass accents. Designed for modern and upscale homes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Glass panel options</li>
                  <li>• Wood-grain & aluminum finishes</li>
                  <li>• Modern aesthetic</li>
                  <li>• Natural light integration</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/images/commercial-glass-garage-door-installation-smart-garage-doors.jpg"
                alt="Commercial glass garage door installation — full-view aluminum and glass door at industrial facility"
                className="w-full h-52 object-cover object-center"
                width={600} height={400} loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial</h3>
                <p className="text-gray-600 mb-4">
                  Heavy-duty doors built for businesses, warehouses, and industrial properties with high-cycle use.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Heavy-duty construction</li>
                  <li>• Full-view glass available</li>
                  <li>• High-cycle operation</li>
                  <li>• Custom sizing available</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/images/insulated-garage-door-installation-smart-garage-doors.jpg"
                alt="Insulated garage door installation — white raised panel door on brick home"
                className="w-full h-52 object-cover object-top"
                width={600} height={400} loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Insulated</h3>
                <p className="text-gray-600 mb-4">
                  Steel doors with multi-layer insulation. Quieter, more energy-efficient, and better for attached garages.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lower energy costs</li>
                  <li>• Noise reduction</li>
                  <li>• Temperature control</li>
                  <li>• Durable steel construction</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/images/custom-garage-door-installation-smart-garage-doors.jpg"
                alt="Custom garage door installation — dark sectional doors on rustic wood barn garage"
                className="w-full h-52 object-cover object-center"
                width={600} height={400} loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Design</h3>
                <p className="text-gray-600 mb-4">
                  Match your home's exact architecture. We source and install doors built to your specifications and style.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Personalized sizing and finish</li>
                  <li>• Premium materials</li>
                  <li>• Unique window configurations</li>
                  <li>• Architectural matching</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finished work showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={getCFImageUrl('45d417a3-6fc3-4605-668e-f2742f2f4100', 'card')}
                alt="Interior view of a newly installed contemporary garage door with full-length glass panels and polished epoxy floor — Smart Garage Doors installation"
                className="w-full h-auto object-cover"
                width={800}
                height={1000}
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What a Finished Installation Looks Like</h2>
              <p className="text-lg text-gray-700 mb-4">
                Every installation we complete is tested, balanced, and cleaned before we leave. This is a contemporary glass-panel door we installed for a customer — the kind of finish you can expect when the job is done right.
              </p>
              <p className="text-gray-700 mb-6">
                We work with all door styles, materials, and opener brands. Before we start, you get a full quote. After we finish, we walk you through operation and leave you with our service number in case anything ever needs attention.
              </p>
              <a
                href="tel:+19145576816"
                className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
              >
                <i className="ri-phone-line mr-2"></i>
                Call to Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
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

      <ServiceAreaLinks 
        serviceType="installation"
        title="Installation Services in Your Area"
        showDescription={true}
        maxLinks={10}
      />

      <Footer />
    </div>
  );
}
