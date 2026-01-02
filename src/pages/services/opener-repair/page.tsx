import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import FAQSchema from '../../../components/seo/FAQSchema';
import RelatedServices from '../../../components/seo/RelatedServices';
import ServiceAreaLinks from '../../../components/seo/ServiceAreaLinks';
import { useLocation } from '../../../contexts/LocationContext';

export default function OpenerRepair() {
  const { location, locationName, isLoading } = useLocation();
  
  const displayLocation = (location?.city === 'Queens' || !location || isLoading) 
    ? 'your area' 
    : locationName;
  
  const faqs = [
    {
      question: `How much does garage door opener repair cost in ${displayLocation}?`,
      answer: `Garage door opener repair costs typically range from $150-$350, depending on the issue. Simple repairs like sensor alignment or remote programming cost $150-$200. Motor repairs or circuit board replacement cost $250-$350. We provide free estimates and upfront pricing before starting any work.`,
    },
    {
      question: 'What types of garage door openers do you repair?',
      answer: 'We repair all types of garage door openers including chain drive, belt drive, screw drive, and wall mount openers. We service all major brands including LiftMaster, Chamberlain, Genie, Craftsman, Linear, and more. Our technicians are trained on both residential and commercial opener systems.',
    },
    {
      question: 'How do I know if my garage door opener needs repair?',
      answer: 'Signs that your opener needs repair include: the door won\'t open or close, the opener motor runs but the door doesn\'t move, the door reverses immediately after closing, the opener makes unusual noises, the remote control doesn\'t work, or the opener doesn\'t respond to the wall switch. If you notice any of these issues, call us for a diagnostic.',
    },
    {
      question: 'Can you fix my opener or do I need a new one?',
      answer: 'Most opener issues can be repaired. Common repairs include sensor alignment, motor capacitor replacement, gear and sprocket replacement, circuit board repair, and remote programming. However, if your opener is very old (15+ years), severely damaged, or the cost of repair approaches a new unit, we may recommend replacement. We\'ll always provide options and help you make the best decision.',
    },
    {
      question: `How quickly can you repair my opener in ${displayLocation}?`,
      answer: `We offer same-day garage door opener repair service throughout NY, NJ & CT. Most opener repairs can be completed within 1-2 hours. We carry common replacement parts in our service vehicles, so many repairs can be finished on the first visit.`,
    },
    {
      question: 'Do you install new garage door openers?',
      answer: 'Yes, we install new garage door openers of all types and brands. We can help you choose the right opener for your door size and needs, install it professionally, and program all remotes and keypads. Installation typically takes 2-3 hours and includes warranty coverage.',
    },
    {
      question: 'What\'s the difference between chain, belt, and screw drive openers?',
      answer: 'Chain drive openers use a metal chain and are the most common, durable, and affordable. Belt drive openers use a rubber belt and are quieter but more expensive. Screw drive openers use a threaded steel rod and are low-maintenance. Wall mount openers are installed beside the door and are ideal for high-ceiling garages. Our technicians can recommend the best type for your needs.',
    },
  ];

  return (
    <div className="min-h-screen">
      <DynamicMetaTags 
        title="Garage Door Opener Repair NY NJ CT | Same-Day Service | Smart Garage Doors"
        description="Professional garage door opener repair services in NY, NJ & CT. Chain drive, belt drive, and wall mount torsion systems. Fast, reliable service with warranty."
        keywords="garage door opener repair, chain drive, belt drive, wall mount torsion, NY, NJ, CT"
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <Breadcrumbs />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Garage Door Opener Repair
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Expert repair services for all opener types in NY, NJ & CT
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(914) 557-6816" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
                Call: (914) 557-6816
              </a>
              <a href="#pricing" className="bg-white text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Opener Repair Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our certified technicians repair all types of garage door openers with fast, reliable service and warranty protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="ri-tools-line text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Diagnosis</h3>
                <p className="text-gray-600">Complete inspection to identify the exact problem with your opener system.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Fast response times with most repairs completed the same day.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Warranty Protection</h3>
                <p className="text-gray-600">All repairs backed by comprehensive warranty for your peace of mind.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Opener Types & Pricing */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Opener Types & Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Professional installation and repair for all opener systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="ri-home-line text-3xl text-purple-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Chain Drive</h3>
                  <p className="text-gray-600">Reliable and cost-effective</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-3"></i>
                    <span className="text-gray-700">Durable chain mechanism</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-3"></i>
                    <span className="text-gray-700">Affordable installation</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-3"></i>
                    <span className="text-gray-700">Ideal for detached garages</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600">$349+</span>
                  <p className="text-sm text-gray-600">Installation included</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="ri-sound-module-line text-3xl text-purple-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Belt Drive</h3>
                  <p className="text-gray-600">Quiet and durable performance</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-3"></i>
                    <span className="text-gray-700">Smooth, quiet operation</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-3"></i>
                    <span className="text-gray-700">Low maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-3"></i>
                    <span className="text-gray-700">Great for attached garages</span>
                  </li>
                </ul>
                
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">$399+</span>
                  <p className="text-sm text-gray-600">Installation included</p>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Available Add-on:</h4>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-blue-900">Security Camera</p>
                        <p className="text-sm text-blue-700">Built-in monitoring & alerts</p>
                      </div>
                      <span className="text-lg font-bold text-blue-600">+$150</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="ri-tools-line text-3xl text-purple-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Wall Mount Torsion</h3>
                  <p className="text-gray-600">Premium space-saving solution</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-3"></i>
                    <span className="text-gray-700">Space-saving wall mount</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-3"></i>
                    <span className="text-gray-700">Advanced torsion system</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-3"></i>
                    <span className="text-gray-700">Premium performance</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-3"></i>
                    <span className="text-gray-700">Professional grade</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600">$749+</span>
                  <p className="text-sm text-gray-600">Installation included</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Common Opener Problems We Fix
              </h2>
              <p className="text-xl text-gray-600">
                Expert solutions for all garage door opener issues
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-error-warning-line text-2xl text-red-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Opener Won't Start</h3>
                <p className="text-gray-600">Power issues, remote problems, or motor failure diagnosis and repair.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-volume-up-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Noisy Operation</h3>
                <p className="text-gray-600">Chain, belt, or gear problems causing excessive noise during operation.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-remote-control-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Remote Issues</h3>
                <p className="text-gray-600">Programming, battery, or signal problems with garage door remotes.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-settings-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Limit Switch Problems</h3>
                <p className="text-gray-600">Door not opening/closing completely due to limit switch issues.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-eye-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Safety Sensor Issues</h3>
                <p className="text-gray-600">Misaligned or faulty safety sensors preventing proper door operation.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-flashlight-line text-2xl text-yellow-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Light Problems</h3>
                <p className="text-gray-600">Opener light not working or staying on constantly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Opener Repair Today?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Fast, professional service with same-day availability
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap">
                <i className="ri-phone-fill mr-2"></i>
                Call: (914) 557-6816
              </button>
              <button className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap">
                <i className="ri-calendar-line mr-2"></i>
                Schedule Repair
              </button>
            </div>
          </div>
        </section>
      </main>

      <RelatedServices />
      <ServiceAreaLinks 
        title="Opener Repair Services in Your Area"
        showDescription={true}
        maxLinks={10}
      />
      <Footer />
    </div>
  );
}
