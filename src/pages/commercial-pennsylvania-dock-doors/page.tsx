import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import FAQSchema from '../../components/seo/FAQSchema';
import { buildCanonical } from '../../config/canonical';
import { BUSINESS_INFO } from '../../config/business-info';
import { trackPhoneClick, trackEvent } from '../../utils/analytics';

/**
 * /commercial-pennsylvania-dock-doors/ — gateway page for Valley Dock Doors,
 * the Eastern Pennsylvania commercial dock and overhead-door division of
 * Smart Garage Doors.
 *
 * Purpose: pass real, crawlable trust from the established Smart site to the
 * Valley brand without duplicating content or competing with either site's
 * existing pages. All CTAs use the PENNSYLVANIA line (610) 839-8817 and send
 * visitors to valleydockdoors.com — never the NY number.
 *
 * Follows the flat /commercial-{region}/ URL pattern established by
 * /commercial-northern-nj/ and /commercial-long-island-ny/. Styled with the
 * same ink/serif hero language as GuidePageTemplate, but bespoke because the
 * template hardcodes the NY phone and an unqualified review-count trust row
 * (Smart's reviews are from its NY/NJ/CT market and must be clearly qualified
 * on a PA page — never implied to be Valley customers).
 *
 * Compliance note (Google Ads Advanced Verification, 2026-08): no
 * response-time promises ("24/7", "same-day", minute counts) and no
 * service-call/starting prices anywhere on this page.
 */

const PA_PHONE = '(610) 839-8817';
const PA_PHONE_TEL = '+16108398817';
const VALLEY_URL = 'https://www.valleydockdoors.com/';
const VALLEY_REQUEST_URL = 'https://www.valleydockdoors.com/#request';
const VALLEY_LOCATIONS = [
  { city: 'Allentown', href: 'https://www.valleydockdoors.com/locations/dock-door-repair-allentown-pa.html' },
  { city: 'Bethlehem', href: 'https://www.valleydockdoors.com/locations/dock-door-repair-bethlehem-pa.html' },
  { city: 'Easton', href: 'https://www.valleydockdoors.com/locations/dock-door-repair-easton-pa.html' },
];

const SERVICES = [
  {
    icon: 'ri-truck-line',
    title: 'Loading Dock Door Repair',
    description: 'Sectional and panel dock doors kept cycling — spring and cable replacement, track and roller service, and forklift-damage repair for warehouse and distribution bays.',
  },
  {
    icon: 'ri-door-line',
    title: 'Commercial Overhead Doors',
    description: 'Sectional and rolling commercial doors for light-industrial, flex, and retail buildings — panel, hinge, cable, spring, and operator work.',
  },
  {
    icon: 'ri-shield-flash-line',
    title: 'Rolling Steel & Fire Doors',
    description: 'Heavy rolling steel service doors, counter shutters, and fire-rated assemblies — including slat, guide, and barrel-spring repair and fire-door drop testing.',
  },
  {
    icon: 'ri-speed-up-line',
    title: 'High-Speed Doors',
    description: 'High-speed roll-up doors that keep climate, traffic, and security under control — repair and replacement for high-cycle openings.',
  },
  {
    icon: 'ri-tools-line',
    title: 'Dock Levelers, Seals, Bumpers & Restraints',
    description: 'The equipment around the door matters as much as the door — leveler repair, seal and bumper replacement, and vehicle-restraint service.',
  },
  {
    icon: 'ri-calendar-check-line',
    title: 'Preventive-Maintenance Agreements',
    description: 'Scheduled inspections across every door and every building on one agreement, with documented condition reports and priority dispatch for contract accounts.',
  },
  {
    icon: 'ri-alarm-warning-line',
    title: 'Emergency Commercial Service',
    description: 'A dedicated Pennsylvania emergency line for down doors and stuck gates — a dispatcher confirms current technician availability when you call.',
  },
];

const FAQS = [
  {
    question: 'Who is Valley Dock Doors?',
    answer: 'Valley Dock Doors is the Eastern Pennsylvania commercial dock and overhead-door division of Smart Garage Doors. It focuses exclusively on commercial work — loading docks, rolling steel and fire doors, high-speed doors, and preventive maintenance — for warehouses, distribution centers, and commercial buildings across the Lehigh Valley.',
  },
  {
    question: 'What areas does Valley Dock Doors cover?',
    answer: 'Allentown, Bethlehem, Easton, the wider Lehigh Valley, and Eastern Pennsylvania — including the I-78 and Route 22 logistics corridor that carries much of the region\'s warehouse and distribution traffic.',
  },
  {
    question: 'Is this the same team as Smart Garage Doors?',
    answer: 'Valley Dock Doors runs its own dedicated Pennsylvania commercial dispatch on (610) 839-8817, backed by the service systems, documentation standards, and overhead-door experience of the Smart Garage Doors organization.',
  },
  {
    question: 'How do I request service in Pennsylvania?',
    answer: 'Call the Pennsylvania line at (610) 839-8817, or submit the service-request form on valleydockdoors.com. A dispatcher confirms your facility details and current technician availability, and every job gets a written total-price quote before work starts.',
  },
];

export default function CommercialPennsylvaniaDockDoorsPage() {
  // Page-level JSON-LD: Valley Dock Doors as a division (subOrganization) of
  // Smart Garage Doors. Only verifiable facts — no invented address, ratings,
  // coordinates, or employee data. The sitewide OrganizationSchema mirrors
  // this relationship from the parent side via subOrganization.
  const relationshipSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.valleydockdoors.com/#organization',
    name: 'Valley Dock Doors',
    url: 'https://www.valleydockdoors.com',
    telephone: PA_PHONE_TEL,
    description:
      'Valley Dock Doors is the Eastern Pennsylvania commercial dock and overhead-door division of Smart Garage Doors, serving Allentown, Bethlehem, Easton, and the Lehigh Valley.',
    parentOrganization: {
      '@type': 'Organization',
      '@id': `${BUSINESS_INFO.website}/#organization`,
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.website,
      telephone: BUSINESS_INFO.phoneFormatted,
    },
    areaServed: [
      { '@type': 'City', name: 'Allentown' },
      { '@type': 'City', name: 'Bethlehem' },
      { '@type': 'City', name: 'Easton' },
      { '@type': 'AdministrativeArea', name: 'Lehigh Valley' },
      { '@type': 'AdministrativeArea', name: 'Eastern Pennsylvania' },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        title="Pennsylvania Commercial Dock Door Service | Valley Dock Doors"
        description="Valley Dock Doors, the Eastern Pennsylvania commercial division of Smart Garage Doors, provides loading dock, rolling steel and overhead door service throughout the Lehigh Valley."
        keywords="Pennsylvania commercial dock door service, Valley Dock Doors, loading dock repair Lehigh Valley, commercial overhead door Allentown, rolling steel door Bethlehem, dock door Easton"
        canonical={buildCanonical('/commercial-pennsylvania-dock-doors')}
      />
      <FAQSchema faqs={FAQS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(relationshipSchema) }}
      />
      <Header />
      <Breadcrumbs />

      {/* ── HERO (ink/serif — matches GuidePageTemplate design language) ── */}
      <section className="relative bg-[#161D29] text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(rgba(22,29,41,0.9), rgba(11,15,23,0.85))' }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none hidden md:block"
          style={{ background: 'radial-gradient(circle at 75% 25%, rgba(217,100,31,0.16), transparent 64%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-24 text-center">
          <p className="flex items-center justify-center gap-2.5 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#E8915A] mb-5">
            <span
              className="inline-block w-[7px] h-[7px] rounded-full bg-[#3FAE72]"
              style={{ boxShadow: '0 0 0 4px rgba(63,174,114,0.25)' }}
              aria-hidden="true"
            />
            Valley Dock Doors — Lehigh Valley &amp; Eastern Pennsylvania
          </p>
          <h1 className="font-newsreader font-medium text-4xl md:text-5xl lg:text-6xl mb-5 leading-[1.05] tracking-[-0.02em]">
            Commercial Dock Door Service in Eastern Pennsylvania
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-2xl mx-auto leading-relaxed">
            Valley Dock Doors is the Eastern Pennsylvania commercial dock and overhead-door
            division of Smart Garage Doors — loading docks, rolling steel, fire doors, and
            high-speed doors for warehouses, distribution centers, and commercial buildings
            across the Lehigh Valley.
          </p>
          <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto">
            Built for warehouse owners, property managers, and facility managers who need one
            accountable vendor — with a dedicated Pennsylvania dispatch line.
          </p>
          <div data-hero-cta className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PA_PHONE_TEL}`}
              onClick={() => trackPhoneClick(PA_PHONE, 'pa_dock_doors_hero')}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              PA Line: {PA_PHONE}
            </a>
            <a
              href={VALLEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_click', { category: 'PA Dock Doors', action: 'valley_site_click', label: 'hero' })}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <i className="ri-external-link-line" aria-hidden="true" />
              Visit ValleyDockDoors.com
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-7 text-sm text-gray-300">
            <span>Licensed &amp; Insured</span>
            <span aria-hidden="true">·</span>
            <span>Dedicated PA Commercial Dispatch</span>
            <span aria-hidden="true">·</span>
            <span>Part of the Smart Garage Doors Family</span>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Commercial Door Services in the Lehigh Valley
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A jammed dock door stops trucks, freight, and revenue. Valley Dock Doors handles
              the full range of commercial door systems — and arrives stocked to fix most
              problems on the first visit.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="w-11 h-11 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <i className={`${svc.icon} text-xl`} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PENNSYLVANIA SERVICE AREAS ───────────────────────────── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Where Valley Dock Doors Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Coverage is built around Eastern Pennsylvania's warehouse and distribution belt —
              the I-78 and Route 22 logistics corridor that moves freight through the Lehigh
              Valley every day.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {VALLEY_LOCATIONS.map((loc) => (
              <a
                key={loc.city}
                href={loc.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('cta_click', { category: 'PA Dock Doors', action: 'valley_location_click', label: loc.city })}
                className="group bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-xl p-6 text-center transition-colors"
              >
                <i className="ri-map-pin-2-fill text-2xl text-orange-500 mb-2 block" aria-hidden="true" />
                <span className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors block">
                  {loc.city}, PA
                </span>
                <span className="text-sm text-gray-500 mt-1 block">Dock door repair in {loc.city} →</span>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Allentown', 'Bethlehem', 'Easton', 'Lehigh Valley', 'Eastern Pennsylvania', 'I-78 & Route 22 Corridor'].map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium"
              >
                <i className="ri-map-pin-2-line text-orange-500" aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANY RELATIONSHIP / TRUST ─────────────────────────── */}
      <section className="py-8 md:py-12 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-3">
            Part of the Smart Garage Doors Family
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            Focused Pennsylvania Service, Established Company Behind It
          </h2>
          <p className="text-blue-100 leading-relaxed mb-4">
            Valley Dock Doors is the Eastern Pennsylvania commercial dock and overhead-door
            division of Smart Garage Doors. The division combines dedicated Lehigh Valley
            commercial dispatch with the experience, service systems, documentation standards,
            and overhead-door knowledge of an established regional door company.
          </p>
          <p className="text-blue-100 leading-relaxed mb-8">
            Backed by the Smart Garage Doors team, which has earned hundreds of five-star
            customer reviews in its established New York, New Jersey, and Connecticut service
            market. Pennsylvania commercial customers get that same standard of work — with a
            local PA line and technicians focused entirely on commercial door systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/reviews/"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <i className="ri-star-line text-yellow-400" aria-hidden="true" />
              See Smart Garage Doors Reviews
            </a>
            <a
              href={BUSINESS_INFO.socialMedia.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <i className="ri-google-fill" aria-hidden="true" />
              Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 font-semibold text-gray-900 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span>{faq.question}</span>
                  <i
                    className="ri-arrow-down-s-line text-xl text-orange-500 flex-shrink-0 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED TRI-STATE COMMERCIAL LINKS ───────────────────── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Commercial Door Service in Other Regions
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Commercial Garage Door Repair (NY/NJ/CT)', href: '/commercial-garage-door-repair/' },
              { label: 'Commercial — Northern NJ', href: '/commercial-northern-nj/' },
              { label: 'Commercial — Long Island', href: '/commercial-long-island-ny/' },
              { label: 'Loading Dock Door Repair', href: '/loading-dock-door-repair/' },
              { label: 'Commercial Maintenance Contracts', href: '/commercial-maintenance-contracts/' },
              { label: 'For Property Managers', href: '/property-managers/' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 text-gray-700 hover:text-blue-900 text-sm font-medium transition-colors"
              >
                <i className="ri-building-2-line text-orange-500" aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-orange-500 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Request Pennsylvania Commercial Service
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Call the Pennsylvania line or send your facility details through the Valley Dock
            Doors service-request form — a dispatcher confirms current availability, and every
            job gets a written total-price quote before work starts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PA_PHONE_TEL}`}
              onClick={() => trackPhoneClick(PA_PHONE, 'pa_dock_doors_final')}
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              {PA_PHONE}
            </a>
            <a
              href={VALLEY_REQUEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_click', { category: 'PA Dock Doors', action: 'valley_request_click', label: 'final_cta' })}
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg border border-orange-400"
            >
              <i className="ri-file-list-3-line" aria-hidden="true" />
              Request Service Online
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
