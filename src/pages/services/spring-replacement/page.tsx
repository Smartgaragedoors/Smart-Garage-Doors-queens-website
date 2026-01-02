import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Button from '../../../components/base/Button';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import FAQSchema from '../../../components/seo/FAQSchema';
import ServiceAreaLinks from '../../../components/seo/ServiceAreaLinks';
import { useLocation } from '../../../contexts/LocationContext';
import { submitForm } from '../../../utils/formSubmission';

export default function SpringReplacementPage() {
  const { location, locationName, isLoading } = useLocation();
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  
  const displayLocation = (location?.city === 'Queens' || !location || isLoading) 
    ? 'your area' 
    : locationName;
  
  const faqs = [
    {
      question: `How much does garage door spring replacement cost in ${displayLocation}?`,
      answer: `Garage door spring replacement typically costs between $200-$400, depending on whether you have torsion or extension springs, the size and weight of your door, and accessibility. Torsion springs are usually more expensive ($250-$400) but last longer. Extension spring replacement costs $200-$300. Double car doors may cost $300-$500. We provide free estimates and upfront pricing with no hidden fees.`,
    },
    {
      question: 'How do I know if my garage door spring is broken?',
      answer: 'Signs of a broken garage door spring include: the door won\'t open or opens only a few inches, the door slams shut when you try to open it, you hear a loud bang or snapping noise, one side of the door is higher than the other, or the door feels much heavier than normal. You may also see a visible gap in the spring or notice the spring looks stretched or damaged. If you suspect a broken spring, don\'t try to open the door - call a professional immediately.',
    },
    {
      question: 'What\'s the difference between torsion and extension springs?',
      answer: 'Torsion springs are mounted above the door on a metal bar and use torque to lift the door. They\'re typically more durable, last 7-10 years (about 10,000 cycles), provide smoother operation, and are safer if they fail. Extension springs are mounted on either side of the door and stretch as the door closes. They\'re less expensive but typically last 5-7 years. Our technicians can determine which type your door uses and recommend the best replacement option based on your specific needs.',
    },
    {
      question: 'Is it dangerous to replace garage door springs myself?',
      answer: 'Yes, replacing garage door springs is extremely dangerous and should NEVER be attempted by homeowners. Springs are under extreme tension (hundreds of pounds) and can cause serious injury or death if mishandled. The spring can snap with tremendous force, causing severe cuts, broken bones, or worse. Always hire a licensed, experienced professional with proper tools, training, and safety equipment.',
    },
    {
      question: `How quickly can you replace broken springs in ${displayLocation}?`,
      answer: `We offer same-day garage door spring replacement service throughout NY, NJ & CT. Most spring replacements can be completed within 1-2 hours of arrival. We stock common spring sizes in our service vehicles, so repairs can often be completed on the first visit without additional trips. Emergency spring replacement is available 24/7.`,
    },
    {
      question: 'How long do new garage door springs last?',
      answer: 'Torsion springs typically last 7-10 years (about 10,000 cycles), while extension springs last 5-7 years (about 10,000 cycles). Lifespan depends on usage frequency, door weight, spring quality, and maintenance. We use high-quality springs from trusted manufacturers and provide maintenance tips to extend their lifespan. Regular lubrication and balance checks can help prolong spring life.',
    },
    {
      question: 'Should I replace both springs even if only one is broken?',
      answer: 'If you have a two-spring system, yes, you should replace both springs even if only one is broken. Springs age together and wear at similar rates, so if one breaks, the other is likely to fail soon. Replacing both ensures balanced operation, prevents another emergency repair, and extends the overall lifespan. We can discuss this during our estimate and explain the benefits.',
    },
    {
      question: 'What brands of springs do you use for replacement?',
      answer: 'We use high-quality springs from trusted manufacturers including LiftMaster, Chamberlain, and other industry-leading brands. We match the spring specifications to your door\'s weight and size to ensure proper operation. All springs come with a manufacturer warranty, and our installation work is backed by our service warranty.',
    },
    {
      question: 'Do you offer warranty on spring replacement?',
      answer: 'Yes, all our spring replacements come with a comprehensive warranty. Parts (springs) are typically covered for 1-2 years depending on the manufacturer, and our labor is covered for 90 days to 1 year. We stand behind our workmanship and will return to fix any issues related to our installation at no additional charge.',
    },
    {
      question: `What areas do you serve for spring replacement services?`,
      answer: `We provide garage door spring replacement services throughout New York (including Queens, Brooklyn, Long Island, Westchester County), New Jersey (Bergen County), and Connecticut (Fairfield County). We serve all areas within a 50-mile radius and offer same-day service in most locations.`,
    },
    {
      question: 'Can you replace springs on any brand of garage door?',
      answer: 'Yes, we can replace springs on all major garage door brands including Clopay, Wayne Dalton, Amarr, Raynor, CHI, LiftMaster, Chamberlain, and more. Our technicians are trained on all types of spring systems and can source the correct replacement springs for your specific door model and size.',
    },
    {
      question: 'What should I do if my garage door spring breaks?',
      answer: 'First, do NOT attempt to open or close the door manually - this is dangerous. Secure the door in its current position if possible, and immediately call a professional. Keep children and pets away from the garage. We offer 24/7 emergency spring replacement service and can typically have a technician to you within 60-90 minutes. Don\'t delay - a broken spring can lead to further damage to other components.',
    },
    {
      question: 'How do I maintain my garage door springs to extend their life?',
      answer: 'Regular maintenance can extend spring life significantly. Have your springs professionally inspected and lubricated annually. Avoid excessive opening and closing, and ensure the door is properly balanced. Keep the door tracks clean and aligned, and address any issues with cables or rollers promptly. We offer maintenance plans that include spring inspections and lubrication.',
    },
    {
      question: 'Are there different quality levels of springs?',
      answer: 'Yes, spring quality varies by manufacturer and materials used. We use high-quality, industry-grade springs from trusted manufacturers. While lower-quality springs may be cheaper initially, they fail more frequently and can cause damage to other components. Investing in quality springs saves money in the long run through longer lifespan and fewer repairs.',
    },
    {
      question: 'Can weather affect garage door springs?',
      answer: 'Yes, extreme temperature changes, humidity, and weather conditions can affect spring lifespan and performance. Springs can become more brittle in extreme cold and may experience increased wear in hot, humid conditions. Regular maintenance and proper lubrication help protect springs from weather-related damage. We can provide weather-specific maintenance recommendations for your area.',
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
      const result = await submitForm(data, 'Spring Replacement Form');

      if (result.success) {
        setNotification({ type: 'success', message: 'Spring replacement request submitted! We will contact you to schedule service.' });
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setNotification(null), 5000);
      } else {
        setNotification({ type: 'error', message: 'Failed to submit request. Please call us at (914) 557-6816' });
        setTimeout(() => setNotification(null), 5000);
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'Failed to submit request. Please call us at (914) 557-6816' });
      setTimeout(() => setNotification(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DynamicMetaTags 
        title="Garage Door Spring Replacement NYC | Torsion & Extension Springs | Same-Day Service"
        description="Professional garage door spring replacement in NYC, Westchester, and Connecticut. Safe installation of torsion and extension springs. Same-day service available."
        keywords="garage door spring replacement, torsion spring repair, extension spring replacement, broken spring repair, spring installation"
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <Breadcrumbs />
      
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md ${
          notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`} role="alert" aria-live="polite">
          <div className="flex items-center justify-between">
            <p>{notification.message}</p>
            <button 
              onClick={() => setNotification(null)}
              className="ml-4 text-white hover:text-gray-200"
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20technician%20safely%20installing%20high-quality%20garage%20door%20torsion%20springs%20in%20clean%20workshop%20environment%2C%20precision%20tools%20and%20safety%20equipment%20visible%2C%20skilled%20workmanship%20demonstration%2C%20modern%20garage%20door%20mechanism%2C%20professional%20uniform%2C%20well-lit%20workspace&width=1280&height=640&quality=85&seq=spring-hero001&orientation=landscape"
            alt="Professional Garage Door Spring Replacement"
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
              Garage Door Spring Replacement
            </h1>
            <p className="text-xl mb-8">
              Safe and professional replacement of broken garage door springs. We handle both torsion and extension springs with same-day service across NYC, Westchester, and Connecticut. Don't risk injury - call the professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap">
                <i className="ri-phone-fill mr-2"></i>
                Call: (914) 557-6816
              </button>
              <button className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap">
                <i className="ri-calendar-line mr-2"></i>
                Schedule Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <i className="ri-alarm-warning-fill text-3xl text-red-600"></i>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ SAFETY WARNING</h3>
              <p className="text-red-700">
                <strong>Never attempt to replace garage door springs yourself!</strong> Garage door springs are under extreme tension and can cause serious injury or death if handled improperly. Always call professional technicians for spring replacement. Our certified technicians have the proper tools and training to safely replace springs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Spring Replacement Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent, upfront pricing for all spring replacement services. All prices include parts, labor, and warranty.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border-2 border-blue-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Torsion Spring Replacement</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$250 - $400</div>
              <p className="text-gray-600 mb-4">Starting price for single spring</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Professional installation
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  High-quality springs
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  1-2 year parts warranty
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  90-day labor warranty
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                Double car doors may cost $300-$500. Price varies by door weight, spring size, and accessibility.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 border-2 border-orange-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Extension Spring Replacement</h3>
              <div className="text-4xl font-bold text-orange-600 mb-2">$200 - $300</div>
              <p className="text-gray-600 mb-4">Starting price per pair</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Professional installation
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  Safety cables included
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  1-2 year parts warranty
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  90-day labor warranty
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                Both springs typically replaced together. Price includes safety cables and professional installation.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3">What Affects Spring Replacement Cost?</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <strong className="text-gray-900">Door Size & Weight:</strong> Larger, heavier doors require stronger (more expensive) springs.
              </div>
              <div>
                <strong className="text-gray-900">Spring Type:</strong> Torsion springs cost more than extension springs but last longer.
              </div>
              <div>
                <strong className="text-gray-900">Number of Springs:</strong> Double car doors typically require two springs, increasing cost.
              </div>
              <div>
                <strong className="text-gray-900">Accessibility:</strong> Hard-to-reach installations may include additional labor charges.
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              <strong>Free Estimates:</strong> We provide detailed, no-obligation estimates before any work begins. 
              Call <a href="tel:914-557-6816" className="text-blue-600 font-semibold hover:text-blue-700">(914) 557-6816</a> for accurate pricing for your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* Spring Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Garage Door Springs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We service and replace all types of garage door springs with high-quality components and professional installation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Torsion Springs */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Garage%20door%20torsion%20spring%20system%20mounted%20above%20door%20opening%2C%20professional%20installation%20showing%20spring%20mechanism%2C%20clean%20garage%20environment%2C%20modern%20torsion%20spring%20assembly%2C%20quality%20hardware%20components&width=500&height=300&seq=torsion001&orientation=landscape"
                  alt="Torsion Spring System"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width="500"
                  height="300"
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Torsion Springs</h3>
                <p className="text-gray-600">Mounted above the door opening</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Longer Lifespan</h4>
                    <p className="text-gray-600 text-sm">Typically last 15,000-20,000 cycles vs 10,000 for extension springs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Better Balance</h4>
                    <p className="text-gray-600 text-sm">Provides more even lifting force and smoother operation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Safer Design</h4>
                    <p className="text-gray-600 text-sm">Contained system reduces risk if spring breaks</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Space Efficient</h4>
                    <p className="text-gray-600 text-sm">Doesn't take up ceiling space like extension springs</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-orange-100 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Best for:</strong> Heavy doors, frequent use, and when maximum safety and longevity are priorities.
                </p>
              </div>
            </div>

            {/* Extension Springs */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Garage%20door%20extension%20spring%20system%20along%20ceiling%20tracks%2C%20professional%20installation%20showing%20spring%20and%20cable%20assembly%2C%20residential%20garage%20setting%2C%20extension%20spring%20mechanism%2C%20safety%20cables%20visible&width=500&height=300&seq=extension001&orientation=landscape"
                  alt="Extension Spring System"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width="500"
                  height="300"
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Extension Springs</h3>
                <p className="text-gray-600">Mounted along the ceiling tracks</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lower Cost</h4>
                    <p className="text-gray-600 text-sm">More affordable initial installation and replacement cost</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Easier Installation</h4>
                    <p className="text-gray-600 text-sm">Simpler installation process in most garage configurations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Good for Light Doors</h4>
                    <p className="text-gray-600 text-sm">Adequate for lighter residential garage doors</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="ri-information-line text-blue-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Safety Cables Required</h4>
                    <p className="text-gray-600 text-sm">Must include safety cables to prevent spring from flying if broken</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Best for:</strong> Budget-conscious installations, lighter doors, and garages with limited headroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs of Spring Problems */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Signs Your Springs Need Replacement</h2>
            <p className="text-lg text-gray-600">
              Don't wait for complete failure. Watch for these warning signs and call for professional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-volume-up-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Loud Bang</h3>
              <p className="text-gray-600">
                A loud bang from your garage often indicates a spring has snapped. Stop using the door immediately.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-arrow-down-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Door Won't Open</h3>
              <p className="text-gray-600">
                If your door won't open or feels extremely heavy, the springs may be broken or losing tension.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-speed-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Door Slams Shut</h3>
              <p className="text-gray-600">
                A door that closes too quickly or slams shut indicates spring failure and is dangerous.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-contrast-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visible Gap</h3>
              <p className="text-gray-600">
                A visible gap or separation in the torsion spring indicates it has broken and needs replacement.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-scales-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Uneven Movement</h3>
              <p className="text-gray-600">
                Door opens unevenly or one side higher than the other suggests spring imbalance or failure.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-rust-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rust & Wear</h3>
              <p className="text-gray-600">
                Visible rust, corrosion, or wear on springs indicates they're nearing end of life and should be replaced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Safe Spring Replacement Process</h2>
            <p className="text-lg text-gray-600">
              Professional, safe, and efficient spring replacement with proper tools and techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Assessment</h3>
              <p className="text-gray-600">Complete safety evaluation and proper equipment setup before beginning work</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tension Release</h3>
              <p className="text-gray-600">Safe release of spring tension using professional winding bars and techniques</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Spring Installation</h3>
              <p className="text-gray-600">Installation of high-quality replacement springs with proper specifications</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing & Adjustment</h3>
              <p className="text-gray-600">Complete testing and fine-tuning to ensure perfect balance and operation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Warranty */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Springs & Warranty</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">High-tensile steel springs from trusted manufacturers with superior durability</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Warranty Coverage</h3>
              <p className="text-gray-600">Comprehensive warranty on parts and labor for complete peace of mind</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-fill text-3xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Installation</h3>
              <p className="text-gray-600">Certified technicians with specialized tools and safety training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="spring-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule Spring Replacement Service</h2>
            <p className="text-lg text-gray-600">
              Don't risk injury with DIY spring replacement. Get professional service from certified technicians.
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="spring_type" className="block text-sm font-medium text-gray-700 mb-2">
                  Spring Type *
                </label>
                <select
                  id="spring_type"
                  name="spring_type"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-8"
                >
                  <option value="">Select Spring Type</option>
                  <option value="torsion">Torsion Springs</option>
                  <option value="extension">Extension Springs</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Urgency
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-8"
                >
                  <option value="">Select Urgency</option>
                  <option value="emergency">Emergency - Door Not Working</option>
                  <option value="urgent">Urgent - Within 24 Hours</option>
                  <option value="normal">Normal - Within 2-3 Days</option>
                  <option value="preventive">Preventive - Planning Ahead</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="problem_description" className="block text-sm font-medium text-gray-700 mb-2">
                Problem Description *
              </label>
              <textarea
                id="problem_description"
                name="problem_description"
                rows={4}
                required
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Describe what happened with your springs (loud bang, door won't open, visible damage, etc.)..."
              ></textarea>
            </div>

            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start">
                <i className="ri-alarm-warning-line text-red-600 mr-3 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-red-800 mb-1">Safety Reminder</h4>
                  <p className="text-red-700 text-sm">
                    If your springs are broken, do not attempt to operate your garage door manually or with the opener. This can cause serious injury or further damage.
                  </p>
                </div>
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
              <i className="ri-tools-line mr-2"></i>
              Schedule Spring Replacement
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garage Door Spring Replacement FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about garage door spring replacement
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
        title="Spring Replacement Services in Your Area"
        showDescription={true}
        maxLinks={10}
      />

      <Footer />
    </div>
  );
}
