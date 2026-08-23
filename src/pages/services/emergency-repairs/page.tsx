import { useRef, useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Breadcrumbs from '../../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../../components/seo/DynamicMetaTags';
import FAQSchema from '../../../components/seo/FAQSchema';
import ServiceAreaLinks from '../../../components/seo/ServiceAreaLinks';
import { useLocation } from '../../../contexts/LocationContext';
import { submitForm } from '../../../utils/formSubmission';
import { BUSINESS_INFO } from '../../../config/business-info';
import { getWhatsAppHref } from '../../../utils/whatsapp';
import {
  trackPhoneClick,
  trackWhatsAppClick,
  trackFormStart,
  trackFormSubmit,
} from '../../../utils/analytics';

const PHONE = BUSINESS_INFO.phone;
const PHONE_TEL = BUSINESS_INFO.phoneFormatted;
const SRC = 'emergency_garage_door_repair';

// Symptom → immediate action → what we do. Written to answer the
// "what do I do right now" intent that the dedicated page gets 60k+
// impressions for, and to be quotable by AI answers.
const EMERGENCIES = [
  {
    icon: 'ri-alarm-warning-line',
    title: 'Door won’t open — car trapped inside',
    now: 'Don’t keep hitting the opener button. If the spring above the door is snapped in two, do not pull the red release cord — the door can drop.',
    fix: 'Broken spring, snapped cable, or failed opener. We carry springs, cables, and opener parts on the truck and usually fix it in one visit.',
  },
  {
    icon: 'ri-shield-cross-line',
    title: 'Door won’t close — house is open',
    now: 'Check that nothing is blocking the photo-eye sensors near the floor. If it still won’t close, pull the release cord and lower the door by hand, then lock it.',
    fix: 'Misaligned sensors, a bent track, or a cable off the drum. We re-secure the opening first, then repair.',
  },
  {
    icon: 'ri-flashlight-line',
    title: 'Loud bang — broken spring',
    now: 'A torsion spring breaking sounds like a gunshot. The door is now far heavier than it looks. Don’t try to lift it by hand.',
    fix: 'We replace both springs, rebalance the door, and check cables and bearings that the break may have damaged.',
  },
  {
    icon: 'ri-car-line',
    title: 'Backed into the door',
    now: 'Leave the door where it is — forcing a bent panel through the track makes it worse. Unplug the opener so nobody tries.',
    fix: 'Panel replacement or straightening, track realignment, and a full safety check of rollers and hinges.',
  },
  {
    icon: 'ri-links-line',
    title: 'Door crooked, hanging, or off the track',
    now: 'Do not run the opener. A door off its track can fall. Keep people and pets out of the garage until it’s secured.',
    fix: 'We reseat the door, replace damaged rollers or cables, and find the cause so it doesn’t happen again.',
  },
  {
    icon: 'ri-thunderstorms-line',
    title: 'Storm or wind damage',
    now: 'If the door is buckled or panels are loose, secure the opening as best you can and photograph the damage for insurance.',
    fix: 'Emergency board-up or temporary securing if needed, then repair or full replacement with documentation for your claim.',
  },
];

const AREAS = [
  { label: 'Queens', href: '/queens-ny/' },
  { label: 'Brooklyn', href: '/brooklyn-ny/' },
  { label: 'Bronx', href: '/bronx-ny/' },
  { label: 'Long Island', href: '/long-island-ny/' },
  { label: 'Nassau County', href: '/nassau-county-ny/' },
  { label: 'Suffolk County', href: '/suffolk-county-ny/' },
  { label: 'Westchester County', href: '/westchester-county-ny/' },
  { label: 'Bergen County, NJ', href: '/bergen-county-nj/' },
  { label: 'Fairfield County, CT', href: '/fairfield-ct/' },
];

export default function EmergencyRepairsPage() {
  const { location, locationName, isLoading } = useLocation();
  const [smsConsent, setSmsConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');
  const formStarted = useRef(false);

  const displayLocation =
    location?.city === 'Queens' || !location || isLoading ? 'your area' : locationName;
  const reviewCount = BUSINESS_INFO.aggregateRating.reviewCount;
  const rating = BUSINESS_INFO.aggregateRating.ratingValue;

  const faqs = [
    {
      question: 'What counts as a garage door emergency?',
      answer:
        'Anything that leaves your home or business open, traps a vehicle, or creates a safety risk: a door that won’t close, a door stuck open or half-open, a broken spring or snapped cable, a door that has come off its track, or damage from a vehicle or storm. If you’re not sure, call — we’ll tell you honestly whether it needs an emergency visit or can wait for a normal appointment.',
    },
    {
      question: `How does emergency scheduling work in ${displayLocation}?`,
      answer:
        `Call the emergency line at ${PHONE} and our dispatcher checks current technician availability near you across Queens, Brooklyn, the Bronx, Long Island, Westchester, northern New Jersey, and Fairfield County, CT. Arrival depends on the technician’s current job, traffic, and distance — we confirm your window with you on the call, before you commit to anything.`,
    },
    {
      question: 'How soon can a technician come out for an emergency repair?',
      answer:
        'That depends on current technician availability — call and the dispatcher will check who is near you and confirm a window. Most emergency calls are completed in a single visit because our trucks carry springs, cables, rollers, and common opener parts.',
    },
    {
      question: 'Do you charge extra for emergency or after-hours service?',
      answer:
        'After-hours and holiday appointments may carry a higher rate than a scheduled daytime appointment. Either way, the quote you receive is the total price, inclusive of any fees, surcharges, and applicable taxes, and you get it before any work starts. If a repair can safely wait until morning and save you money, we’ll tell you that too.',
    },
    {
      question: 'My garage door won’t close and I have to leave. What do I do?',
      answer:
        'First check that nothing is blocking the two small sensors near the floor on each side of the door. If it still won’t close, pull the red emergency release cord, lower the door by hand, and lock it with the manual slide lock or a padlock through the track. Then call us — our technicians can often secure the opening on the first visit and complete the full repair.',
    },
    {
      question: 'The spring broke. Can I still open the door manually?',
      answer:
        'We strongly recommend against it. The springs carry most of the door’s weight — a typical double door weighs 200 to 300 pounds — and with a broken spring that weight is on you. Doors have dropped and injured people this way. Leave it, keep the opener unplugged so nobody tries, and call us.',
    },
    {
      question: 'Do you handle emergency repairs on all garage door brands and openers?',
      answer:
        'Yes. Our technicians service all major residential and commercial doors and openers, including LiftMaster, Chamberlain, Genie, Craftsman, Clopay, Amarr, and Wayne Dalton. We carry common replacement parts so most emergency repairs are finished in one visit.',
    },
    {
      question: 'Do you offer emergency commercial garage door and loading dock repair?',
      answer:
        'Yes. We take emergency calls for warehouses, auto shops, parking garages, and property-managed buildings, including rolling steel doors and loading dock doors. Commercial accounts can be set up with priority dispatch — see our commercial garage door repair page.',
    },
    {
      question: 'What areas do you serve for emergency garage door repair?',
      answer:
        'Queens, Brooklyn, and the Bronx; Nassau and Suffolk County on Long Island; Westchester and Rockland County; Bergen, Passaic, Essex, and Union County in northern New Jersey; and Fairfield County, Connecticut. If you’re near one of these, call and we’ll confirm.',
    },
  ];

  const handleChange = () => {
    if (!formStarted.current) {
      formStarted.current = true;
      trackFormStart('Emergency Repairs Form', SRC);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) data[key] = value.toString();
    data.smsConsent = smsConsent ? 'Yes (opted in to SMS)' : 'No';
    data.serviceType = 'emergency-repair';

    try {
      const result = await submitForm(data, 'Emergency Repairs Form');
      if (result.success) {
        trackFormSubmit('Emergency Repairs Form', SRC, { emergency_type: data.emergency_type });
        setStatus('ok');
        (e.target as HTMLFormElement).reset();
        setSmsConsent(false);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        title="Emergency Garage Door Repair NY, NJ & CT | Call Now"
        description={`Garage door stuck, won't close, or spring snapped? Emergency garage door repair in Queens, Brooklyn, Long Island, Westchester, NJ & CT. Call ${PHONE}.`}
        keywords="emergency garage door repair, urgent garage door repair, emergency garage door service, garage door won't close, broken garage door spring emergency, emergency garage door repair near me"
        canonical="https://www.smartestgaragedoors.com/emergency-garage-door-repair/"
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <Breadcrumbs />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#161D29] text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(rgba(22,29,41,0.9), rgba(11,15,23,0.85))' }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-20 text-center">
          <p className="flex items-center justify-center gap-2.5 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#E8915A] mb-5">
            <span
              className="inline-block w-[7px] h-[7px] rounded-full bg-[#3FAE72]"
              style={{ boxShadow: '0 0 0 4px rgba(63,174,114,0.25)' }}
              aria-hidden="true"
            />
            Emergency line · Call to check availability
          </p>
          <h1 className="font-newsreader font-medium text-4xl md:text-5xl lg:text-6xl mb-5 leading-[1.05] tracking-[-0.02em]">
            Emergency Garage Door Repair
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-3 max-w-2xl mx-auto leading-relaxed">
            Door stuck open, won’t close, or spring just snapped? Emergency garage door repair across
            Queens, Brooklyn, the Bronx, Long Island, Westchester, northern NJ, and Fairfield County, CT.
          </p>
          <p className="text-base text-gray-300 mb-8">
            Call to check current availability. Total price, tax included, before any work starts.
          </p>
          <div data-hero-cta className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackPhoneClick(PHONE, `${SRC}_hero`)}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              Call {PHONE}
            </a>
            <a
              href={getWhatsAppHref({
                message: 'Emergency: my garage door is stuck/broken. Sending photos now — can you check availability?',
              })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`${SRC}_hero`)}
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <i className="ri-whatsapp-line" aria-hidden="true" />
              Text Us a Photo
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-7 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <span className="text-[#F2B98C]" aria-hidden="true">★★★★★</span>
              <strong className="text-white">{rating}</strong> · {reviewCount}+ reviews
            </span>
            <span aria-hidden="true">·</span>
            <span>Licensed &amp; Insured</span>
            <span aria-hidden="true">·</span>
            <span>Parts on the truck</span>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────── */}
      <section className="bg-[#16335B] text-white border-t-[3px] border-orange-500 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
          <span className="inline-flex items-center gap-2">
            <i className="ri-phone-line text-orange-400 text-base" aria-hidden="true" />
            Emergency Line · Prioritized Dispatch
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="ri-star-fill text-yellow-400 text-base" aria-hidden="true" />
            {reviewCount}+ Five-Star Reviews
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="ri-price-tag-3-line text-orange-400 text-base" aria-hidden="true" />
            Price Before Work Starts
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="ri-verified-badge-line text-orange-400 text-base" aria-hidden="true" />
            1-Year Parts &amp; Labor Warranty
          </span>
        </div>
      </section>

      {/* ── WHAT TO DO RIGHT NOW ─────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              What’s Wrong, and What to Do Right Now
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your situation below. The first line is what to do right away; the second is how we fix it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EMERGENCIES.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="w-11 h-11 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-xl`} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-800 leading-relaxed mb-3">
                  <span className="font-semibold text-orange-600">Right now: </span>
                  {item.now}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-900">Our fix: </span>
                  {item.fix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW AN EMERGENCY CALL WORKS ──────────────────────────── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How an Emergency Call Works</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              You call {PHONE} or text us a photo on WhatsApp. A real person answers, asks what the door
              is doing, and tells you whether it’s safe to touch. If a vehicle is trapped or the house is
              open, the call is prioritized in our dispatch queue.
            </p>
            <p>
              The dispatcher checks which technician is available near you and confirms a window with you on
              the call — arrival depends on their current job, traffic, and distance. The technician diagnoses
              the door, quotes the total price including tax, and only starts work once you’ve approved it.
            </p>
            <p>
              Our trucks carry torsion and extension springs, cables, rollers, hinges, photo-eye sensors, and
              common opener parts, so most emergency repairs are finished in the same visit. If a part has to be
              ordered — a full panel, for example — we secure the opening so your home is locked until it arrives.
            </p>
          </div>
          <ul className="mt-6 space-y-3">
            {[
              'Broken torsion and extension springs — replaced in pairs and rebalanced',
              'Snapped or frayed cables, doors off the track, bent or crooked doors',
              'Openers that won’t respond, sensors that won’t align, remotes and keypads',
              'Panel damage from vehicles, wind, or break-in attempts',
              'Emergency lock-up and securing when a repair has to wait for parts',
              'Commercial rolling steel doors, sectional doors, and loading dock doors',
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-gray-700">
                <i className="ri-check-line text-orange-500 text-lg flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SERVICE AREA ─────────────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Emergency Garage Door Repair Across NY, NJ &amp; CT
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            We dispatch emergency technicians across the tri-state: the five boroughs, Long Island, the Hudson
            Valley, northern and central New Jersey, and southwestern Connecticut. Tap your area for local
            details, or just call — we’ll confirm coverage for your address on the phone.
          </p>
          <div className="flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-lg border border-gray-300 text-gray-800 hover:border-orange-500 hover:text-orange-600 transition-colors text-sm font-medium"
              >
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY FORM ───────────────────────────────────────── */}
      <section id="emergency-form" className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Request Emergency Service</h2>
            <p className="text-gray-600">
              The quickest way to reach us is to call{' '}
              <a
                href={`tel:${PHONE_TEL}`}
                onClick={() => trackPhoneClick(PHONE, `${SRC}_form_intro`)}
                className="font-semibold text-orange-600"
              >
                {PHONE}
              </a>
              . If you can’t talk right now, send this and we’ll call you back.
            </p>
          </div>

          <form onSubmit={handleSubmit} onChange={handleChange} className="bg-white rounded-xl border border-gray-200 p-6 md:p-8" data-readdy-form>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input type="text" id="name" name="name" required autoComplete="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required autoComplete="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Service Address *</label>
              <input type="text" id="address" name="address" required autoComplete="street-address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
            </div>
            <div className="mb-5">
              <label htmlFor="emergency_type" className="block text-sm font-medium text-gray-700 mb-2">What’s happening? *</label>
              <select id="emergency_type" name="emergency_type" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-8">
                <option value="">Select one</option>
                <option value="door-wont-open">Door won’t open</option>
                <option value="door-wont-close">Door won’t close</option>
                <option value="broken-spring">Broken spring / loud bang</option>
                <option value="off-track">Door off track or crooked</option>
                <option value="opener-malfunction">Opener not responding</option>
                <option value="vehicle-damage">Hit by a vehicle</option>
                <option value="storm-damage">Storm damage</option>
                <option value="commercial">Commercial / loading dock door</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Anything else we should know?</label>
              <textarea id="description" name="description" rows={3} maxLength={500} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Is a car stuck inside? Is the house open? Gate code?" />
            </div>

            <label className="flex items-start gap-3 text-xs text-gray-600 leading-relaxed mb-5">
              <input
                type="checkbox"
                required
                checked={smsConsent}
                onChange={(e) => setSmsConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-400 text-orange-500 focus:ring-orange-500"
              />
              <span>
                By checking this box, I agree to receive text messages from Smartest Garage
                Doors about my service request at the number provided. Message frequency varies.
                Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help. Consent is
                not a condition of purchase.
              </span>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              <i className="ri-alarm-warning-line" aria-hidden="true" />
              {submitting ? 'Sending…' : 'Send Emergency Request'}
            </button>

            {status === 'ok' && (
              <p className="mt-4 text-sm text-green-700 font-medium" role="status">
                Got it — we’ll call you back as soon as possible. If you need help right away, call {PHONE}.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-700 font-medium" role="alert">
                That didn’t go through. Please call {PHONE} directly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Emergency Garage Door Repair FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED ──────────────────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Related Services &amp; Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Garage Door Spring Replacement', href: '/spring-replacement/' },
              { label: 'Cable & Roller Repair', href: '/cable-roller-repair/' },
              { label: 'Opener Repair & Installation', href: '/opener-repair-installation/' },
              { label: 'Commercial Garage Door Repair', href: '/commercial-garage-door-repair/' },
              { label: 'Loading Dock Door Repair', href: '/loading-dock-door-repair/' },
              { label: 'Emergency Repair Guide (Blog)', href: '/blog/emergency-garage-door-repair-guide/' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="flex items-center justify-between min-h-[44px] px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-orange-500 text-gray-800 hover:text-orange-600 transition-colors font-medium">
                {l.label}
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaLinks
        serviceType="emergency"
        title="Emergency Garage Door Repair Near You"
        showDescription={true}
        maxLinks={10}
      />

      <Footer />
    </div>
  );
}
