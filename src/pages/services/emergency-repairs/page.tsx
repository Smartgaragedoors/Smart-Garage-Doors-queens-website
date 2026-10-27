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

// "Call now" vs "can wait" — the same triage the dispatcher does on the phone.
// Framing reused from the emergency guide blog post ("Is it a true emergency,
// or can it wait until morning?"). No arrival-time promises anywhere.
const CALL_NOW = [
  'The door is stuck open and the house or garage can’t be secured',
  'A vehicle is trapped inside and you need it',
  'The door is off its track, hanging crooked, or looks like it could fall',
  'A spring or cable snapped while the door was up — nothing is holding its weight',
  'The door won’t close after a break-in attempt, a vehicle hit, or storm damage',
  'A commercial door is down with a truck, bay, or tenant entrance blocked',
];

const CAN_WAIT = [
  'The door is closed and locked, even if the opener won’t lift it',
  'The opener is dead after a power outage, but the door lifts by hand and stays up',
  'The door is noisy, slow, or shaky but still opens and closes',
  'A remote, keypad, or wall button stopped working',
  'A dented panel or torn weather seal with the door still running',
];

// Published price ranges reused from the borough and service pages — see the
// PR body for the source file of every figure. These are total prices
// (parts, labor, fees, surcharges, tax) given before work starts.
// TODO(owner): confirm the after-hours / weekend / holiday rate. A legacy
// spring-cost blog post lists "+$75–$150" but the current pages only say
// "can carry a higher rate", so no number is shown here until confirmed.
const COSTS = [
  {
    job: 'Basic repairs — sensor realignment, door reseated on its track, hinges, bottom brackets',
    range: '$150–$300',
    href: '/garage-door-repair/',
    label: 'Garage door repair',
  },
  {
    job: 'Spring replacement — torsion or extension, replaced in pairs and rebalanced',
    range: '$175–$350',
    href: '/spring-replacement/',
    label: 'Spring replacement',
  },
  {
    job: 'Cable & roller repair — cables replaced in pairs, worn rollers swapped, door rebalanced',
    range: '$150–$300',
    href: '/cable-roller-repair/',
    label: 'Cable & roller repair',
  },
  {
    job: 'Opener repair — photo-eyes, logic board, drive gear, motor, travel limits',
    range: '$150–$350',
    href: '/opener-repair-installation/',
    label: 'Opener repair',
  },
  {
    job: 'New opener installed, if the old unit isn’t worth fixing — chain or belt drive; wall-mount units run $749–$1,200',
    range: '$349–$650',
    href: '/opener-repair-installation/',
    label: 'Opener installation',
  },
];

// Real completed jobs already published on the borough pages (Queens, Brooklyn).
// Past jobs, never quotes. Never add an entry that isn't on a location page.
const REAL_CALLS = [
  {
    area: 'Midwood, Brooklyn',
    href: '/brooklyn-ny/',
    what: 'Door hanging crooked and straining on the way up. Replaced the springs, two pulleys and a bent hinge, and re-ran a commercial-grade cable.',
    came_to: 'About $530, finished in one visit.',
  },
  {
    area: 'Kew Gardens, Queens',
    href: '/queens-ny/',
    what: 'Property manager called after a cheap quick fix on a bent top panel failed. Replaced the commercial spring pair and added a heavy-duty reinforcement bracket.',
    came_to: 'About $1,460 for the pair plus reinforcement.',
  },
  {
    area: 'Queens Village, Queens',
    href: '/queens-ny/',
    what: 'Door reportedly wouldn’t close. It worked fine when our tech arrived and tested it, so he said exactly that instead of inventing a repair.',
    came_to: 'The $115 service visit and nothing else.',
  },
];

// The eight strongest location pages, with natural anchors. Neighborhood and
// town names are the ones each location page already lists. No hub cities,
// no drive times (owner rule).
const DISPATCH_AREAS = [
  {
    anchor: 'Emergency garage door repair in Queens',
    href: '/queens-ny/',
    blurb: 'Astoria, Flushing, Forest Hills, Jamaica, Bayside, Elmhurst and every Queens neighborhood — attached garages, apartment-building garages and commercial doors.',
  },
  {
    anchor: 'Emergency garage door repair in Brooklyn',
    href: '/brooklyn-ny/',
    blurb: 'Park Slope, Williamsburg, Bay Ridge, Dyker Heights, Bensonhurst, Carroll Gardens, Sheepshead Bay — brownstone garages, driveways and building garages.',
  },
  {
    anchor: 'Emergency garage door repair in the Bronx',
    href: '/bronx-ny/',
    blurb: 'Riverdale, Pelham Bay, Throgs Neck, Fordham, Morris Park, City Island, Mott Haven and the rest of the borough.',
  },
  {
    anchor: 'Emergency garage door repair on Long Island',
    href: '/long-island-ny/',
    blurb: 'Nassau and western and central Suffolk — Great Neck, Garden City, Rockville Centre, Huntington, Commack, Smithtown.',
  },
  {
    anchor: 'Emergency garage door repair in Nassau County',
    href: '/nassau-county-ny/',
    blurb: 'Great Neck, Manhasset, Garden City, Hempstead, Rockville Centre, Hicksville, Plainview, Syosset, Valley Stream, Mineola and more.',
  },
  {
    anchor: 'Emergency garage door repair in Westchester County',
    href: '/westchester-county-ny/',
    blurb: 'Yonkers, White Plains, Scarsdale, New Rochelle, Rye, Port Chester, Chappaqua, Tarrytown, Mount Vernon, Bronxville, Larchmont.',
  },
  {
    anchor: 'Emergency garage door repair in Bergen County, NJ',
    href: '/bergen-county-nj/',
    blurb: 'Paramus, Hackensack, Teaneck, Englewood, Ridgewood, Fort Lee, Edgewater, Ramsey, Mahwah, Westwood, Wyckoff and all of Bergen.',
  },
  {
    anchor: 'Emergency garage door repair in Fairfield, CT',
    href: '/fairfield-ct/',
    blurb: 'Fairfield Center, Southport, Greenfield Hill, Stratfield, Tunxis Hill and the surrounding Fairfield County shoreline.',
  },
];

const ALSO_SERVING = [
  { label: 'Suffolk County', href: '/suffolk-county-ny/' },
  { label: 'Staten Island', href: '/staten-island-ny/' },
  { label: 'Manhattan', href: '/manhattan-ny/' },
  { label: 'Suffern & Rockland County', href: '/suffern-ny/' },
  { label: 'Greenwich', href: '/greenwich-ct/' },
  { label: 'Stamford', href: '/stamford-ct/' },
  { label: 'Norwalk', href: '/norwalk-ct/' },
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
      question: 'How much does emergency garage door repair cost?',
      answer:
        'The repair itself is priced the same as a scheduled one. Basic repairs such as sensor realignment or reseating a door on its track run $150–$300, spring replacement $175–$350, cable and roller repair $150–$300, and opener repair $150–$350 — each a total price including parts, labor, fees, and tax, quoted before work starts. If the technician finds nothing wrong, you pay the $115 service visit and nothing more.',
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
      question: 'My car is trapped behind a door with a broken spring. What happens when you come out?',
      answer:
        'The technician replaces the spring pair, rebalances the door, and checks the cables, drums, and bearings the break may have damaged, so the door can be opened safely — usually in the same visit, because springs are carried on the truck. Until then, don’t lift the door or pull the release cord. Spring replacement runs $175–$350 as a total price quoted before any work starts. Call for an exact ETA; the dispatcher confirms a window with you on the phone.',
    },
    {
      question: 'The power is out and my opener is dead. Can I open the door by hand?',
      answer:
        'Usually, yes — as long as the springs are intact. With the door fully closed, pull the red emergency-release cord so the trolley disconnects, then lift the door with both hands. A balanced door lifts with moderate effort and stays put at waist height; if it feels like dead weight or wants to slam down, a spring is broken — stop and call. When power returns, pull the cord again or run the opener to re-engage. Many newer openers have a battery backup for short outages. If the opener still won’t run once the power is back, that’s an opener repair, typically $150–$350.',
    },
    {
      question: 'Is a garage door that has come off its track dangerous?',
      answer:
        'Yes. The rollers and cables are what keep a 200-to-300-pound door in line; once it’s off, the door can jam, twist, or drop. Don’t run the opener and don’t try to force it back into the track. Keep people and pets out of the garage, unplug the opener, and call. Reseating a door and replacing damaged rollers is usually a basic repair ($150–$300) if it’s caught before the panels bend.',
    },
    {
      question: 'Do you do emergency garage door opener repair?',
      answer:
        'Yes. A dead motor, stripped drive gear, failed logic board, misaligned photo-eyes, or a wall button or remote that stopped working are same-visit repairs in most cases. Opener repair runs $150–$350. If the unit is old enough that a new opener makes more sense, a chain or belt drive installed runs $349–$650 — and we tell you which case you’re in before quoting, not after.',
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
        trackFormSubmit('Emergency Repairs Form', SRC, { service_type: String(data.emergency_type || 'emergency-repair'), urgency: 'emergency' });
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

      {/* ── EMERGENCY OR WAIT UNTIL MORNING ──────────────────────── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Is This a Garage Door Emergency, or Can It Wait Until Morning?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            Honest answer: many calls can wait, and waiting can save you the after-hours rate. The question
            is whether the house can be secured, whether anyone could get hurt, and whether you need the car.
            This is the same triage our dispatcher does on the phone.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border-2 border-orange-500 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-alarm-warning-fill text-orange-600 text-xl" aria-hidden="true" />
                Call now if…
              </h3>
              <ul className="space-y-3">
                {CALL_NOW.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-gray-800 text-sm leading-relaxed">
                    <i className="ri-arrow-right-s-line text-orange-500 text-lg flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-moon-line text-gray-500 text-xl" aria-hidden="true" />
                It can usually wait until morning if…
              </h3>
              <ul className="space-y-3">
                {CAN_WAIT.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                    <i className="ri-check-line text-gray-400 text-lg flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                In these cases a scheduled daytime visit costs less, and the repair is identical. Book it for
                the morning and keep the door closed and unplugged overnight.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-700 text-sm sm:flex-1">
              Not sure which one you have? Call and describe what the door is doing — we’d rather book you a
              morning visit than charge you for a late-night one you didn’t need.
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackPhoneClick(PHONE, `${SRC}_triage`)}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-xl font-bold transition-colors whitespace-nowrap min-h-[44px]"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW AN EMERGENCY CALL WORKS ──────────────────────────── */}
      <section className="py-8 md:py-12 bg-white">
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

      {/* ── WHAT THE TECHNICIAN DOES ON ARRIVAL ──────────────────── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What Does the Technician Do When They Arrive?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The order matters: make it safe, find the real cause, give you one total number, then fix it. A
            door that “won’t open” is a broken spring far more often than a dead opener, and a door that
            “won’t close” is usually a sensor or a cable — the diagnosis is what you’re paying for first.
          </p>
          <ol className="space-y-4">
            {[
              {
                title: 'Make it safe first',
                body: 'Disconnect the opener, support or secure a door that is off its track or hanging, and if the house is open, get the door closed and locked before anything else.',
              },
              {
                title: 'Find the actual cause',
                body: 'Springs (a visible gap in the coil), cables and drums, rollers and tracks, hinges and bottom brackets, the opener’s drive gear, logic board and travel limits, and the photo-eyes. The symptom you called about is often not the only problem.',
              },
              {
                title: 'Quote the total price before touching anything',
                body: 'Parts, labor, any fees or surcharges, and tax — one number, in writing, before work starts. You approve it or you don’t. If the repair can safely wait for a cheaper scheduled visit, the technician says so.',
              },
              {
                title: 'Repair from the truck',
                body: 'Springs are replaced in pairs and the door rebalanced; cables are replaced in pairs; worn rollers, hinges and brackets swapped; sensors realigned; opener gears and boards replaced where the unit is worth keeping.',
              },
              {
                title: 'Test, then hand it back',
                body: 'Balance test (the door should hold at half height), photo-eye reversal test, opener force and limits, lubrication. The 1-year parts and labor warranty goes on the invoice.',
              },
              {
                title: 'If a part has to be ordered',
                body: 'A discontinued panel or an unusual spring size can mean a second visit. We secure the opening so it locks until the part is in, and you’re told the timing before you decide.',
              },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-8 mb-3">
            What you can safely do while you wait
          </h3>
          <ul className="space-y-3">
            {[
              'Unplug the opener from the ceiling outlet so nobody in the house hits the button.',
              'Keep people, pets and cars out from under the door.',
              'If the door is closed, leave it closed. If it is open and the springs are intact, you can pull the red release cord and lower it slowly by hand with a second person, then lock the slide lock.',
              'Do not pull the release cord if a spring is snapped and the door is up — the door can drop.',
              'Never loosen, wind, unhook or “re-tension” a spring or cable yourself. A torsion spring stores enough force to break bones; this is the one repair that needs the technician’s winding bars and tools.',
              'Photograph the damage (for insurance if a vehicle or storm caused it) and text us the photo on WhatsApp so the technician brings the right parts.',
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                <i className="ri-shield-check-line text-orange-500 text-lg flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHAT IT COSTS ────────────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What Does Emergency Garage Door Repair Cost?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            The repair itself is priced the same as a scheduled one; after-hours, weekend and holiday
            appointments can carry a higher rate than a daytime slot, and we tell you that on the phone. Every
            quote is the total price — parts, labor, any fees or surcharges, and tax — given before work
            starts. There is no “we’ll see once we open it up.” These are the ranges we publish across our
            service and borough pages:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-900">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Repair</th>
                  <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">Total price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {COSTS.map((row) => (
                  <tr key={row.job}>
                    <td className="px-4 py-3 text-gray-700 leading-relaxed">
                      {row.job}{' '}
                      <a href={row.href} className="text-orange-600 font-medium hover:underline whitespace-nowrap">
                        {row.label} →
                      </a>
                    </td>
                    <td className="px-4 py-3 font-bold text-gray-900 whitespace-nowrap">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            If the technician finds nothing wrong, you pay the $115 service visit and nothing more. Every
            repair carries our 1-year parts and labor warranty. Panel and section damage is quoted per door
            because it depends on whether the manufacturer still makes a matching section.
          </p>

          <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-8 mb-3">
            Three real calls from our job log
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Past jobs published on our borough pages, not quotes — your door and your price will differ.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {REAL_CALLS.map((job) => (
              <div key={job.area} className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                <a href={job.href} className="font-bold text-gray-900 hover:text-orange-600">
                  {job.area}
                </a>
                <p className="text-sm text-gray-700 leading-relaxed mt-2">{job.what}</p>
                <p className="text-sm font-semibold text-gray-900 mt-2">{job.came_to}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700">
            Want a number for your door before a truck rolls? Call{' '}
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackPhoneClick(PHONE, `${SRC}_cost`)}
              className="font-semibold text-orange-600"
            >
              {PHONE}
            </a>{' '}
            or{' '}
            <a
              href={getWhatsAppHref({
                message: 'Emergency: my garage door is stuck/broken. Sending a photo — can you tell me what it likely costs?',
              })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`${SRC}_cost`)}
              className="font-semibold text-orange-600"
            >
              text us a photo
            </a>
            — we can often tell you what it likely is and what it costs from the picture.
          </p>
        </div>
      </section>

      {/* ── WHERE WE DISPATCH ────────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Where Do We Send Emergency Technicians?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            Regional technicians cover the five boroughs, Long Island, the Hudson Valley, northern and central
            New Jersey, and southwestern Connecticut. If you’re in one of these areas, call now to check tonight’s
            availability; each page below has local details, real jobs and neighborhood coverage.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {DISPATCH_AREAS.map((a) => (
              <div key={a.href} className="bg-white rounded-xl border border-gray-200 p-5 hover:border-orange-500 transition-colors">
                <a
                  href={a.href}
                  className="inline-flex items-center gap-2 min-h-[44px] font-bold text-gray-900 hover:text-orange-600"
                >
                  <i className="ri-map-pin-2-line text-orange-500" aria-hidden="true" />
                  {a.anchor}
                </a>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">{a.blurb}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-700 leading-relaxed">
            Also serving{' '}
            {ALSO_SERVING.map((a, i) => (
              <span key={a.href}>
                <a href={a.href} className="text-orange-600 font-medium hover:underline">
                  {a.label}
                </a>
                {i < ALSO_SERVING.length - 2 ? ', ' : i === ALSO_SERVING.length - 2 ? ' and ' : ''}
              </span>
            ))}
            . Not listed? Call anyway — we confirm coverage for your address on the phone.
          </p>
          <div className="mt-6">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackPhoneClick(PHONE, `${SRC}_dispatch`)}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-xl font-bold transition-colors min-h-[44px]"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              Check tonight’s availability · {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY FORM ───────────────────────────────────────── */}
      <section id="emergency-form" className="py-8 md:py-12 bg-white">
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

          <form onSubmit={handleSubmit} onChange={handleChange} className="bg-gray-50 rounded-xl border border-gray-200 p-6 md:p-8" data-readdy-form>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input type="text" id="name" name="name" required autoComplete="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required autoComplete="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white" />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Service Address *</label>
              <input type="text" id="address" name="address" required autoComplete="street-address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white" />
            </div>
            <div className="mb-5">
              <label htmlFor="emergency_type" className="block text-sm font-medium text-gray-700 mb-2">What’s happening? *</label>
              <select id="emergency_type" name="emergency_type" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-8 bg-white">
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
              <textarea id="description" name="description" rows={3} maxLength={500} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white" placeholder="Is a car stuck inside? Is the house open? Gate code?" />
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
      <section className="py-8 md:py-12 bg-gray-50">
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
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Related Services &amp; Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Garage Door Spring Replacement', href: '/spring-replacement/' },
              { label: 'Cable & Roller Repair', href: '/cable-roller-repair/' },
              { label: 'Opener Repair & Installation', href: '/opener-repair-installation/' },
              { label: 'Garage Door Repair (all services)', href: '/garage-door-repair/' },
              { label: 'Commercial Garage Door Repair', href: '/commercial-garage-door-repair/' },
              { label: 'Loading Dock Door Repair', href: '/loading-dock-door-repair/' },
              { label: 'Emergency Repair Guide (Blog)', href: '/blog/emergency-garage-door-repair-guide/' },
              { label: 'Snapped Cable vs. Broken Spring (Blog)', href: '/blog/snapped-cable-vs-broken-spring/' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="flex items-center justify-between min-h-[44px] px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-orange-500 text-gray-800 hover:text-orange-600 transition-colors font-medium">
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
        maxLinks={12}
      />

      <Footer />
    </div>
  );
}
