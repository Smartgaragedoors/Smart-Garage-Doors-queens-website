import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from '../seo/Breadcrumbs';
import DynamicMetaTags from '../seo/DynamicMetaTags';
import FAQSchema from '../seo/FAQSchema';
import ServiceLinks from '../seo/ServiceLinks';
import { buildCanonical } from '../../config/canonical';
import { BUSINESS_INFO } from '../../config/business-info';
import { cloudflareImages, getCFBackgroundImage } from '../../data/cloudflareImages';
import { getWhatsAppHref } from '../../utils/whatsapp';
import { trackPhoneClick, trackBookNowClick, trackWhatsAppClick } from '../../utils/analytics';
import CommercialLeadForm from '../conversion/CommercialLeadForm';

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface CostTableRow {
  item: string;
  range: string;
  notes: string;
}

export interface CriteriaCard {
  title: string;
  description: string;
  icon?: string; // remixicon class, e.g. 'ri-shield-check-line'
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface GuideLink {
  label: string;
  href: string;
}

export interface GuidePageTemplateProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  slug: string; // e.g. '/second-opinion/'

  // Hero
  badge?: string;            // small eyebrow text above H1
  headline: string;          // H1
  subheadline: string;
  heroImage?: keyof typeof cloudflareImages; // background photo behind the hero
  showWhatsAppHero?: boolean;
  whatsAppMessage?: string;  // prefilled WhatsApp text

  // Content
  intro: string[];
  sections: GuideSection[];
  costTable?: { title: string; caption: string; rows: CostTableRow[] };
  criteria?: { title: string; intro?: string; cards: CriteriaCard[] };
  faqs: GuideFAQ[];
  bottomLine?: string;

  // Internal links
  relatedLinks?: { title: string; links: GuideLink[] };

  // Final CTA
  ctaHeadline?: string;
  ctaText?: string;

  // B2B lead capture — shows a company/portfolio-aware form below the trust
  // bar instead of funneling commercial visitors through the residential
  // book-now form (no company/portfolio fields, reads as "book my house call").
  showCommercialLeadForm?: boolean;
}

const PHONE = BUSINESS_INFO.phone;
const PHONE_TEL = BUSINESS_INFO.phoneFormatted;

function FAQAccordion({ faqs }: { faqs: GuideFAQ[] }) {
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

export default function GuidePageTemplate(props: GuidePageTemplateProps) {
  const {
    metaTitle, metaDescription, keywords, slug,
    badge, headline, subheadline, heroImage, showWhatsAppHero, whatsAppMessage,
    intro, sections, costTable, criteria, faqs, bottomLine,
    relatedLinks, ctaHeadline, ctaText, showCommercialLeadForm,
  } = props;

  const trackSource = slug.replace(/\//g, '') || 'guide';
  const heroImg = heroImage ? cloudflareImages[heroImage] : null;
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

      {/* ── HERO (premium ink/serif — matches homepage + LocationPageTemplate) ── */}
      <section className="relative bg-[#161D29] text-white overflow-hidden">
        {heroImg && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: getCFBackgroundImage(heroImg.id, 'hero', heroImg.fallbackSrc) }}
            aria-hidden="true"
          />
        )}
        {/* Ink scrim keeps the background photo legible */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(rgba(22,29,41,0.86), rgba(11,15,23,0.82))' }}
          aria-hidden="true"
        />
        {/* Decorative amber corner glow */}
        <div
          className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none hidden md:block"
          style={{ background: 'radial-gradient(circle at 75% 25%, rgba(217,100,31,0.16), transparent 64%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-24 text-center">
          {badge && (
            <p className="flex items-center justify-center gap-2.5 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#E8915A] mb-5">
              <span
                className="inline-block w-[7px] h-[7px] rounded-full bg-[#3FAE72]"
                style={{ boxShadow: '0 0 0 4px rgba(63,174,114,0.25)' }}
                aria-hidden="true"
              />
              {badge}
            </p>
          )}
          <h1 className="font-newsreader font-medium text-4xl md:text-5xl lg:text-6xl mb-5 leading-[1.05] tracking-[-0.02em]">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>
          <div data-hero-cta className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackPhoneClick(PHONE, `guide_hero_${trackSource}`)}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              {PHONE}
            </a>
            {showWhatsAppHero ? (
              <a
                href={getWhatsAppHref({ message: whatsAppMessage })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`guide_hero_${trackSource}`)}
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                <i className="ri-whatsapp-line" aria-hidden="true" />
                Text Us Photos
              </a>
            ) : (
              <a
                href="/book-now/"
                onClick={() => trackBookNowClick(`guide_hero_${trackSource}`)}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <i className="ri-calendar-line" aria-hidden="true" />
                Request a Complimentary Estimate
              </a>
            )}
          </div>
          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-7 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <span className="text-[#F2B98C]" aria-hidden="true">★★★★★</span>
              <strong className="text-white">{BUSINESS_INFO.aggregateRating.ratingValue}</strong> · {reviewCount}+ reviews
            </span>
            <span aria-hidden="true">·</span>
            <span>Licensed &amp; Insured</span>
            <span aria-hidden="true">·</span>
            <span>24/7 Emergency Line</span>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────── */}
      {/* Same ink-navy + orange-accent treatment as the homepage TrustBar.tsx band */}
      <section className="bg-[#16335B] text-white border-t-[3px] border-orange-500 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
          <span className="inline-flex items-center gap-2">
            <i className="ri-shield-check-line text-orange-400 text-base" aria-hidden="true" />
            Licensed &amp; Insured
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="ri-star-fill text-yellow-400 text-base" aria-hidden="true" />
            {reviewCount}+ Five-Star Reviews
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="ri-time-line text-orange-400 text-base" aria-hidden="true" />
            24/7 Emergency Line
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="ri-verified-badge-line text-orange-400 text-base" aria-hidden="true" />
            1-Year Parts &amp; Labor Warranty
          </span>
        </div>
      </section>

      {/* ── B2B LEAD FORM ─────────────────────────────────────────── */}
      {showCommercialLeadForm && (
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <CommercialLeadForm />
          </div>
        </section>
      )}

      {/* ── INTRO ─────────────────────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {intro.map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed text-lg">{para}</p>
          ))}
        </div>
      </section>

      {/* ── COST TABLE ────────────────────────────────────────────── */}
      {costTable && (
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{costTable.title}</h2>
            </div>
            <div className="rounded-2xl overflow-x-auto border border-gray-200 shadow-sm bg-white">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-900 text-white text-sm">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold">Project</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold">Typical Range</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold hidden sm:table-cell">What Affects It</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {costTable.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 sm:px-6 py-4 font-medium text-gray-900 text-sm">{row.item}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-blue-900 whitespace-nowrap">{row.range}</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-500 text-sm hidden sm:table-cell">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">{costTable.caption}</p>
          </div>
        </section>
      )}

      {/* ── CRITERIA CARDS ────────────────────────────────────────── */}
      {criteria && (
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{criteria.title}</h2>
              {criteria.intro && <p className="text-gray-600 max-w-2xl mx-auto">{criteria.intro}</p>}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {criteria.cards.map((card, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="w-11 h-11 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                    <i className={`${card.icon ?? 'ri-check-double-line'} text-xl`} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROSE SECTIONS ────────────────────────────────────────── */}
      {sections.map((section, i) => (
        <section key={i} className={`py-8 md:py-12 ${i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
            <div className="space-y-4">
              {section.paragraphs.map((para, j) => (
                <p key={j} className="text-gray-700 leading-relaxed">{para}</p>
              ))}
            </div>
            {section.bullets && (
              <ul className="mt-5 space-y-3">
                {section.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-700">
                    <i className="ri-check-line text-orange-500 text-lg flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {/* ── BOTTOM LINE ───────────────────────────────────────────── */}
      {bottomLine && (
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Bottom Line</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{bottomLine}</p>
          </div>
        </section>
      )}

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Common Questions</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── RELATED LINKS ─────────────────────────────────────────── */}
      {relatedLinks && relatedLinks.links.length > 0 && (
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{relatedLinks.title}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedLinks.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 text-gray-700 hover:text-blue-900 text-sm font-medium transition-colors"
                >
                  <i className="ri-map-pin-2-line text-orange-500" aria-hidden="true" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-orange-500 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{ctaHeadline ?? 'Get an Honest Quote Today'}</h2>
          <p className="text-orange-100 text-lg mb-8">
            {ctaText ?? 'Same-day availability, upfront pricing, and a 1-year warranty. Call now or book online.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackPhoneClick(PHONE, `guide_final_${trackSource}`)}
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              <i className="ri-phone-fill" aria-hidden="true" />
              {PHONE}
            </a>
            {showWhatsAppHero ? (
              <a
                href={getWhatsAppHref({ message: whatsAppMessage })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`guide_final_${trackSource}`)}
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                <i className="ri-whatsapp-line" aria-hidden="true" />
                Text Us Photos
              </a>
            ) : (
              <a
                href="/book-now/"
                onClick={() => trackBookNowClick(`guide_final_${trackSource}`)}
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg border border-orange-400"
              >
                <i className="ri-calendar-line" aria-hidden="true" />
                Request a Complimentary Estimate
              </a>
            )}
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
