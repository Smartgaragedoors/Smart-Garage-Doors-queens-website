import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Button from '../../../components/base/Button';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import FAQSchema from '../../../components/seo/FAQSchema';
import RelatedServices from '../../../components/seo/RelatedServices';
import { useLocation } from '../../../contexts/LocationContext';

export default function CableRollerRepairPage() {
  const { location, locationName, isLoading } = useLocation();
  
  const displayLocation = (location?.city === 'Queens' || !location || isLoading) 
    ? 'your area' 
    : locationName;
  
  const faqs = [
    {
      question: `How much does cable and roller repair cost in ${displayLocation}?`,
      answer: `Cable replacement typically costs $150-$300, depending on the number of cables (single or double door) and door size. Roller replacement costs $100-$250 depending on quantity (usually 8-12 rollers) and type (nylon vs. steel). Track repair costs $150-$400 depending on severity - minor straightening vs. full track section replacement. We provide free estimates and upfront pricing before starting work with no hidden fees.`,
    },
    {
      question: 'How do I know if my garage door cables or rollers need replacement?',
      answer: 'Signs that cables or rollers need replacement include: frayed or broken cables (cables look worn or have broken strands), noisy operation (grinding, squeaking, or scraping sounds), door moves unevenly or jerks when opening/closing, rollers are worn, cracked, or missing, door doesn\'t move smoothly along the track, visible damage to cables or rollers, door sags on one side, or cables are visibly stretched or loose. Regular inspection can catch these issues early before they cause bigger problems.',
    },
    {
      question: 'What\'s the difference between nylon and steel rollers?',
      answer: 'Nylon rollers are quieter (ideal for attached garages), don\'t require lubrication, are less likely to damage tracks, and provide smoother operation, but may not last as long under extremely heavy use (typically 7-10 years). Steel rollers are more durable, longer-lasting (10-15 years), and better for heavy commercial doors, but can be noisier and may need periodic lubrication. Premium nylon rollers with steel cores offer a good balance. Our technicians can recommend the best type based on your door\'s usage, weight, and your noise preferences.',
    },
    {
      question: 'Can I replace cables and rollers myself?',
      answer: 'Cable replacement should NEVER be attempted by homeowners - cables work with springs under extreme tension (hundreds of pounds) and can cause serious injury or death if mishandled. Cable replacement requires special tools, knowledge of spring systems, and safety procedures. Roller replacement can be done by experienced DIYers, but professional installation ensures proper alignment, prevents track damage, and guarantees optimal performance. We strongly recommend professional service for both safety and proper operation.',
    },
    {
      question: `How quickly can you repair cables and rollers in ${displayLocation}?`,
      answer: `We offer same-day cable and roller repair service throughout NY, NJ & CT. Most repairs can be completed within 1-2 hours of arrival. We stock common cable sizes and roller types in our service vehicles for quick turnaround. For specialty sizes or types, we can often source parts quickly and return the same day or next day to complete the repair.`,
    },
    {
      question: 'How often should garage door rollers be replaced?',
      answer: 'Rollers typically last 7-10 years with normal use (3-4 cycles per day). Heavy use, lack of maintenance, harsh weather, or poor track alignment can shorten their lifespan to 5-7 years. We recommend having rollers inspected annually during maintenance visits and replaced when signs of wear appear (cracking, flattening, visible wear). Replacing all rollers at once ensures even operation, prevents premature wear, and maintains proper door balance.',
    },
    {
      question: 'Can damaged tracks be repaired or do they need replacement?',
      answer: 'Minor track damage like small dents or slight bends can often be straightened and repaired professionally using specialized tools. However, severely damaged tracks (large dents, major bends, rusted sections, or warped areas) typically need replacement for proper door operation and safety. Our technicians will inspect your tracks thoroughly, check alignment, and recommend the best solution - repair if possible and cost-effective, replacement if necessary for safety and performance.',
    },
    {
      question: 'What causes garage door cables to break?',
      answer: 'Common causes of cable breakage include: worn or frayed cables from age and use, improper spring tension causing excessive stress, rust or corrosion weakening the cable, poor cable routing or installation, door imbalance putting uneven stress on cables, lack of maintenance and lubrication, or physical damage from objects or impact. Regular maintenance and proper spring tension can significantly extend cable lifespan.',
    },
    {
      question: 'Should I replace all cables and rollers at once?',
      answer: 'Yes, we recommend replacing all cables and rollers at once, even if only one is damaged. Cables and rollers age together, so if one fails, others are likely near the end of their lifespan. Replacing them all at once ensures balanced operation, prevents future emergency repairs, and often costs less than multiple separate service calls. We can discuss options and timing during our inspection.',
    },
    {
      question: 'Can worn rollers damage my garage door tracks?',
      answer: 'Yes, worn or damaged rollers can cause significant track damage over time. Worn rollers don\'t roll smoothly, causing friction and scraping that wears down tracks. Flat or cracked rollers can gouge tracks, and misaligned rollers from worn bearings can cause tracks to bend. This creates a cycle of damage - bad rollers damage tracks, which then damage new rollers. We recommend addressing roller issues promptly to prevent expensive track replacement.',
    },
    {
      question: 'Do you offer warranty on cable and roller repairs?',
      answer: 'Yes, all our cable and roller repairs come with warranty coverage. Labor is typically covered for 90 days to 1 year, and parts come with manufacturer warranties (usually 1-2 years depending on type). We use high-quality cables and rollers from trusted manufacturers and stand behind our workmanship. We\'ll return to fix any issues related to our repair at no additional charge during the warranty period.',
    },
    {
      question: `What areas do you serve for cable and roller repair services?`,
      answer: `We provide garage door cable and roller repair services throughout New York (including Queens, Brooklyn, Long Island, Westchester County), New Jersey (Bergen County), and Connecticut (Fairfield County). We serve all areas within a 50-mile radius with same-day service available in most locations.`,
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
        alert('Cable and roller repair request submitted! We will contact you to schedule service.');
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
        title="Garage Door Cable & Roller Repair NYC | Track Repair | Same-Day Service"
        description="Professional garage door cable and roller repair in NYC, Westchester, and Connecticut. Track alignment, cable replacement, roller installation. Same-day service."
        keywords="garage door cable repair, roller replacement, track repair, cable replacement, garage door tracks, roller installation"
        canonical={`${import.meta.env.VITE_SITE_URL || 'https://smartestgaragedoors.com'}/cable-roller-repair/`}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20technician%20working%20on%20garage%20door%20track%20systems%20installing%20high-quality%20steel%20cables%20and%20smooth%20rollers%2C%20clean%20garage%20environment%2C%20professional%20tools%20and%20equipment%2C%20skilled%20installation%20work%2C%20modern%20track%20system%2C%20quality%20hardware%20components&width=1280&height=640&quality=85&seq=cable-hero001&orientation=landscape"
            alt="Professional Cable and Roller Repair"
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
              Cable & Roller Repair Service
            </h1>
            <p className="text-xl mb-8">
              Professional replacement of frayed cables, worn rollers, and track repair for smooth garage door operation. We service all types of garage door hardware across NYC, Westchester, and Connecticut with same-day availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap">
                <i className="ri-phone-fill mr-2"></i>
                Call: (914) 557-6816
              </button>
              <button className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap">
                <i className="ri-calendar-line mr-2"></i>
                Schedule Repair
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cable & Roller Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete hardware repair and replacement services to keep your garage door operating smoothly and safely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-links-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cable Replacement</h3>
              <p className="text-gray-600">
                Professional replacement of frayed, broken, or worn garage door cables with high-quality galvanized steel cables.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-record-circle-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Roller Installation</h3>
              <p className="text-gray-600">
                Installation of new nylon or steel rollers for smooth, quiet operation and extended track life.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-road-map-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Repair</h3>
              <p className="text-gray-600">
                Track straightening, alignment, and replacement to ensure proper door movement and prevent binding.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-hammer-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hardware Replacement</h3>
              <p className="text-gray-600">
                Replacement of hinges, brackets, and other hardware components that support cable and roller systems.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-tools-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Repair</h3>
              <p className="text-gray-600">
                24/7 emergency service for broken cables or jammed rollers that prevent door operation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-settings-3-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">System Adjustment</h3>
              <p className="text-gray-600">
                Complete system adjustment and calibration after cable and roller replacement for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Signs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Signs You Need Cable & Roller Repair</h2>
            <p className="text-lg text-gray-600">
              Don't ignore these warning signs that indicate your cables and rollers need professional attention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-volume-up-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Noisy Operation</h3>
              <p className="text-gray-600">
                Grinding, squeaking, or rattling sounds indicate worn rollers or misaligned tracks that need attention.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-arrow-left-right-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Jerky Movement</h3>
              <p className="text-gray-600">
                Door moves unevenly or jerks during operation, suggesting cable or roller problems affecting smooth movement.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-eye-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visible Damage</h3>
              <p className="text-gray-600">
                Frayed cables, cracked rollers, or bent tracks are clear signs that immediate repair is needed.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-door-open-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Door Off Track</h3>
              <p className="text-gray-600">
                Door comes off the tracks or appears crooked, indicating serious cable or roller failure requiring immediate service.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-speed-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Slow Operation</h3>
              <p className="text-gray-600">
                Door moves slower than normal or struggles to open/close, often due to worn rollers or cable tension issues.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-error-warning-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gaps in Door</h3>
              <p className="text-gray-600">
                Uneven gaps along the sides or bottom of the door indicate track misalignment or roller problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roller Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Roller Types We Install</h2>
            <p className="text-lg text-gray-600">
              Choose the right rollers for your garage door based on your needs for durability, noise level, and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="ri-record-circle-line text-3xl text-teal-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Steel Rollers</h3>
                <p className="text-gray-600">Most economical option</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Lowest cost option</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Durable construction</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Good for light use</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-close-line text-red-600 mr-3"></i>
                  <span className="text-gray-700">Noisier operation</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-close-line text-red-600 mr-3"></i>
                  <span className="text-gray-700">Requires more maintenance</span>
                </li>
              </ul>
              
              <div className="text-center">
                <span className="text-2xl font-bold text-teal-600">$8-12</span>
                <p className="text-sm text-gray-600">Per roller</p>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-8 border-2 border-teal-600 relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Recommended</span>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="ri-record-circle-line text-3xl text-teal-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nylon Rollers</h3>
                <p className="text-gray-600">Best value and performance</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Quiet operation</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Self-lubricating</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Corrosion resistant</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Long lasting</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Low maintenance</span>
                </li>
              </ul>
              
              <div className="text-center">
                <span className="text-2xl font-bold text-teal-600">$15-25</span>
                <p className="text-sm text-gray-600">Per roller</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="ri-record-circle-line text-3xl text-teal-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ball Bearing</h3>
                <p className="text-gray-600">Premium performance</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Ultra-smooth operation</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Longest lifespan</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Heavy-duty construction</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Sealed bearings</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-close-line text-red-600 mr-3"></i>
                  <span className="text-gray-700">Higher initial cost</span>
                </li>
              </ul>
              
              <div className="text-center">
                <span className="text-2xl font-bold text-teal-600">$25-40</span>
                <p className="text-sm text-gray-600">Per roller</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="repair-form" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule Cable & Roller Repair</h2>
            <p className="text-lg text-gray-600">
              Get professional cable and roller repair service from experienced technicians.
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="problem_type" className="block text-sm font-medium text-gray-700 mb-2">
                  Problem Type *
                </label>
                <select
                  id="problem_type"
                  name="problem_type"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-8"
                >
                  <option value="">Select Problem</option>
                  <option value="cable-repair">Cable Repair/Replacement</option>
                  <option value="roller-replacement">Roller Replacement</option>
                  <option value="track-repair">Track Repair/Alignment</option>
                  <option value="hardware-replacement">Hardware Replacement</option>
                  <option value="multiple-issues">Multiple Issues</option>
                  <option value="not-sure">Not Sure - Need Inspection</option>
                </select>
              </div>
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Urgency
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-8"
                >
                  <option value="">Select Urgency</option>
                  <option value="emergency">Emergency - Door Not Working</option>
                  <option value="urgent">Urgent - Within 24 Hours</option>
                  <option value="normal">Normal - Within 2-3 Days</option>
                  <option value="maintenance">Preventive Maintenance</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Problem Description *
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                required
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Describe the issues you're experiencing with the garage door (noises, movement problems, visible damage, etc.)..."
              ></textarea>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
              <i className="ri-tools-line mr-2"></i>
              Schedule Cable & Roller Repair
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cable & Roller Repair FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about garage door cable and roller repair
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

      <FAQSchema faqs={faqs} />
      <RelatedServices />
      <Footer />
    </div>
  );
}
