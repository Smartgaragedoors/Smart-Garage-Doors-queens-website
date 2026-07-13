import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import DynamicMetaTags from '../../components/seo/DynamicMetaTags';
import FAQSchema from '../../components/seo/FAQSchema';
import CareersApplicationForm from '../../components/conversion/CareersApplicationForm';
import { buildCanonical, CANONICAL_BASE } from '../../config/canonical';
import { BUSINESS_INFO } from '../../config/business-info';
import { trackPhoneClick } from '../../utils/analytics';

/**
 * /careers/ — recruiting page for technicians and installers.
 *
 * Deliberately NOT built on GuidePageTemplate: that template's CTAs sell
 * service (estimates, book-now, service links), which is the wrong ask for a
 * job applicant. This page keeps the same visual system (ink hero, py-8
 * md:py-12 rhythm, flat bordered cards) with recruiting-specific CTAs.
 *
 * JobPosting JSON-LD makes openings eligible for Google's job search
 * experience. datePosted is maintained by hand — bump it when the openings
 * genuinely change, don't fake freshness.
 */

const DATE_POSTED = '2026-07-13';

const HIRING_REGIONS = [
  'Queens, Brooklyn & the Bronx',
  'Long Island (Nassau & Suffolk)',
  'Westchester & Rockland County',
  'Northern & Central New Jersey',
  'Fairfield County, CT',
  'Eastern Pennsylvania (expanding)',
];

const OPEN_ROLES = [
  {
    title: 'Garage Door Technician — Residential',
    icon: 'ri-tools-line',
    description:
      'Diagnose and repair residential garage doors: springs, cables, rollers, tracks, panels, and opener systems from LiftMaster, Chamberlain, and Genie. Same-day service calls across your assigned region.',
    schemaDescription:
      'Diagnose and repair residential garage doors — torsion and extension springs, cables, rollers, tracks, panels, and opener systems (LiftMaster, Chamberlain, Genie). Same-day service calls across an assigned region in the NY/NJ/CT tri-state area or eastern Pennsylvania. Company van and dispatch provided. Valid driver’s license required.',
  },
  {
    title: 'Commercial Door / Rolling Gate Technician',
    icon: 'ri-building-2-line',
    description:
      'Service commercial overhead doors, rolling steel gates and grilles, and loading-dock equipment for warehouses, storefronts, and property-management accounts. High-cycle spring and operator experience valued.',
    schemaDescription:
      'Service commercial overhead doors, rolling steel gates and grilles, storefront gates, and loading-dock doors for warehouse, retail, and property-management accounts in the NY/NJ/CT tri-state area and eastern Pennsylvania. Experience with high-cycle springs and commercial operators valued. Valid driver’s license required.',
  },
  {
    title: 'Installer / Installer Helper',
    icon: 'ri-door-open-line',
    description:
      'Install new residential and commercial garage doors and openers. Helpers with a general trade background who want to learn the door trade are welcome — you’ll work alongside an experienced installer.',
    schemaDescription:
      'Install new residential and commercial garage doors and opener systems in the NY/NJ/CT tri-state area and eastern Pennsylvania. Entry-level helpers with a general trade or construction background are considered — training provided alongside an experienced installer. Valid driver’s license required.',
  },
];

const WHAT_WE_LOOK_FOR = [
  'Hands-on mechanical aptitude — door experience is a big plus, but a solid trade background (construction, HVAC, electrical, locksmith) counts',
  'A valid driver’s license and a clean enough record to drive a company vehicle',
  'Comfortable talking to homeowners and facility managers — you are the company on every job site',
  'Reliability: showing up when dispatch says you will is the whole business',
  'For commercial roles: experience with rolling steel, dock equipment, or high-cycle springs',
];

const CAREERS_FAQS = [
  {
    question: 'Do I need garage door experience to apply?',
    answer:
      'Not for every role. Technician positions need hands-on door or closely related trade experience, but installer helpers with a general construction or mechanical background are considered — you’ll train alongside an experienced installer.',
  },
  {
    question: 'What areas are you hiring in?',
    answer:
      'Across our tri-state service area — Queens, Brooklyn, the Bronx, Long Island, Westchester and Rockland, northern and central New Jersey, and Fairfield County CT — and we’re expanding into eastern Pennsylvania.',
  },
  {
    question: 'Is this full-time work?',
    answer:
      'Yes — these are full-time positions with year-round work. Garage doors break in every season, and our commercial maintenance accounts keep schedules full between service calls.',
  },
  {
    question: 'What happens after I apply?',
    answer:
      'A real person reviews every application — no recruiting agency, no automated screening. If your background fits an open role, we’ll call or text you to set up a conversation.',
  },
];

function buildJobPostingSchema() {
  const hiringOrganization = {
    '@type': 'Organization',
    name: BUSINESS_INFO.name,
    sameAs: CANONICAL_BASE,
    telephone: BUSINESS_INFO.phoneFormatted,
  };
  const jobLocations = ['NY', 'NJ', 'CT', 'PA'].map((region) => ({
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressRegion: region,
      addressCountry: 'US',
    },
  }));
  return OPEN_ROLES.map((role) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: role.title,
    description: `<p>${role.schemaDescription}</p>`,
    datePosted: DATE_POSTED,
    employmentType: 'FULL_TIME',
    hiringOrganization,
    jobLocation: jobLocations,
    directApply: true,
  }));
}

export default function CareersPage() {
  const jobPostingSchemas = buildJobPostingSchema();

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        title="Garage Door Technician Jobs | NY, NJ, CT & PA | Smart Garage Doors"
        description="Now hiring garage door technicians, commercial/rolling gate techs, and installers across the NY/NJ/CT tri-state and eastern PA. Full-time, year-round work. Apply in 2 minutes."
        keywords="garage door technician jobs, garage door installer jobs, rolling gate technician jobs NYC, garage door jobs NJ, overhead door technician hiring"
        canonical={buildCanonical('/careers')}
      />
      {jobPostingSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <FAQSchema faqs={CAREERS_FAQS} />
      <Header />
      <Breadcrumbs />

      {/* ── HERO (ink/serif — matches the sitewide premium hero) ── */}
      <section className="relative bg-[#161D29] text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(rgba(22,29,41,0.92), rgba(11,15,23,0.88))' }}
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
            Now Hiring
          </p>
          <h1 className="font-newsreader font-medium text-4xl md:text-5xl lg:text-6xl mb-5 leading-[1.05] tracking-[-0.02em]">
            Build Your Career in the Door Trade
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;re hiring technicians and installers across NY, NJ, CT — and expanding into
            Pennsylvania. Full-time, year-round work with a company that answers its own phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <i className="ri-file-list-3-line" aria-hidden="true" />
              Apply in 2 Minutes
            </a>
          </div>
          <p className="mt-7 text-sm text-gray-300">
            Questions first? Call{' '}
            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              onClick={() => trackPhoneClick(BUSINESS_INFO.phone, 'careers_hero')}
              className="font-semibold text-white underline decoration-orange-500 underline-offset-4"
            >
              {BUSINESS_INFO.phone}
            </a>{' '}
            and ask for the owner.
          </p>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Open Roles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three ways in, depending on your experience — from seasoned door tech to
              trade-background helper learning the craft.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPEN_ROLES.map((role, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="w-11 h-11 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <i className={`${role.icon} text-xl`} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE WE'RE HIRING ── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            Where We&apos;re Hiring
          </h2>
          <p className="text-gray-700 leading-relaxed text-center mb-6">
            Our technicians work regionally — you&apos;re dispatched to jobs near where you live,
            not across three boroughs a day.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {HIRING_REGIONS.map((region, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 bg-white rounded-lg border border-gray-200 px-4 py-3">
                <i className="ri-map-pin-2-line text-orange-500 text-lg flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{region}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHAT WE LOOK FOR ── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Look For</h2>
          <ul className="space-y-3">
            {WHAT_WE_LOOK_FOR.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <i className="ri-check-line text-orange-500 text-lg flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CareersApplicationForm />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Questions About Working Here
            </h2>
          </div>
          <div className="space-y-6">
            {CAREERS_FAQS.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
