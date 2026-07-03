import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from '../seo/Breadcrumbs';
import DynamicMetaTags from '../seo/DynamicMetaTags';
import FAQSchema from '../seo/FAQSchema';
import ServiceLinks from '../seo/ServiceLinks';
import { buildCanonical } from '../../config/canonical';
import { BUSINESS_INFO } from '../../config/business-info';
import { trackPhoneClick, trackBookNowClick } from '../../utils/analytics';

export interface ComparisonRow {
  feature: string;
  ours: string;
  theirs: string;
}

export interface ComparisonFAQ {
  question: string;
  answer: string;
}

export interface ComparisonPageTemplateProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  slug: string; // e.g. '/vs-precision-garage-door/'

  // Content
  competitorName: string;        // e.g. 'Precision Garage Door'
  headline: string;              // H1
  intro: string[];               // intro paragraphs
  rows: ComparisonRow[];
  faqs: ComparisonFAQ[];
  bottomLine: string;            // honest closing summary paragraph
}

const PHONE     = BUSINESS_INFO.phone;
const PHONE_TEL = BUSINESS_INFO.phoneFormatted;

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="text-yellow-400 text-lg leading-none" aria-label={`${count} stars`}>
      {'★'.repeat(count)}
    </span>
  );
}

function FAQAccordion({ faqs }: { faqs: ComparisonFAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{faq.question}</span>
            <i className={`ri-arrow-down-s-line text-xl text-orange-500 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100">
              <p className="pt-4">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ComparisonPageTemplate(props: ComparisonPageTemplateProps) {
  const {
    metaTitle, metaDescription, keywords, slug,
    competitorName, headline, intro, rows, faqs, bottomLine,
  } = props;

  const reviewCount = BUSINESS_INFO.aggregateRating.reviewCount;

  return (
    <div className="min-h-screen bg-white">
      <DynamicMetaTags
        title={metaTitle}
        description={metaDescription}
        keywords={keywords}
        canonical={buildCanonical(slug.replace(/\/$/, ''))}
      />
      <FAQSchema faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
      <Header />
      <Breadcrumbs />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Stars />
            <span className="text-blue-200 text-sm font-medium">{reviewCount} verified reviews</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            {headline}
          </h1>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            An honest, side-by-side look at how Smart Garage Doors stacks up against {competitorName} —
            so you can choose with confidence.
          </p>
          <div data-hero-cta className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackPhoneClick(PHONE, `comparison_hero_${competitorName}`)}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              {PHONE}
            </a>
            <a
              href="/book-now/"
              onClick={() => trackBookNowClick(`comparison_hero_${competitorName}`)}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <i className="ri-calendar-line" aria-hidden="true" />
              Book Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {intro.map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed text-lg">{para}</p>
          ))}
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Smart Garage Doors vs. {competitorName}
            </h2>
            <p className="text-gray-600">How we compare on the things homeowners care about most.</p>
          </div>
          <div className="rounded-2xl overflow-x-auto border border-gray-200 shadow-sm bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-900 text-white text-sm">
                  <th className="px-4 sm:px-6 py-4 text-left font-semibold">What Matters</th>
                  <th className="px-4 sm:px-6 py-4 text-center font-semibold">Smart Garage Doors</th>
                  <th className="px-4 sm:px-6 py-4 text-center font-semibold text-gray-300">{competitorName}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 sm:px-6 py-4 font-medium text-gray-900 text-sm">{row.feature}</td>
                    <td className="px-4 sm:px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        <i className="ri-check-line" aria-hidden="true" />
                        {row.ours}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-center text-gray-500 text-sm">{row.theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Comparison reflects our standard service. {competitorName} offerings vary by location and franchise;
            confirm details directly with them.
          </p>
        </div>
      </section>

      {/* ── BOTTOM LINE ───────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Bottom Line</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{bottomLine}</p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {competitorName} vs. Us — Common Questions
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Get an Honest Quote Today</h2>
          <p className="text-orange-100 text-lg mb-8">
            Same-day service, upfront pricing, and a 1-year warranty. Call now or book online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackPhoneClick(PHONE, `comparison_final_${competitorName}`)}
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              {PHONE}
            </a>
            <a
              href="/book-now/"
              onClick={() => trackBookNowClick(`comparison_final_${competitorName}`)}
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg border border-orange-400"
            >
              <i className="ri-calendar-line" aria-hidden="true" />
              Book Online
            </a>
          </div>
        </div>
      </section>

      <ServiceLinks
        title="Our Garage Door Services"
        showDescription={true}
        locationPath={slug}
      />
      <Footer />
    </div>
  );
}
