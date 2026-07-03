import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatBlogDate } from '../../utils/blogFormat';
import { BUSINESS_INFO } from '../../config/business-info';

export interface BlogPostTemplateProps {
  title: string;
  description: string;
  content: string;
  image: string;
  imageAlt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  city?: string | null;
  service?: string | null;
  faqs?: Array<{ question: string; answer: string }>;
  relatedPosts?: Array<{ slug: string; title: string; category: string; readTime: string }>;
  helpText: React.ReactNode;
  defaultImageUrl?: string;
}

function FAQAccordion({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
          <button
            type="button"
            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-gray-900 hover:bg-white transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{faq.question}</span>
            <i
              className={`ri-arrow-down-s-line text-xl text-orange-500 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
              <p className="pt-4">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function BlogPostTemplate({
  title,
  description,
  content,
  image,
  imageAlt,
  date,
  category,
  readTime,
  author,
  city,
  service,
  faqs,
  relatedPosts,
  helpText,
  defaultImageUrl = '/hero-van-1280.webp',
}: BlogPostTemplateProps) {
  const formattedDate = formatBlogDate(date);

  return (
    <div className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-8 lg:gap-10 items-start">
          {/* Main article card */}
          <article className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Post header */}
            <header className="px-6 sm:px-8 md:px-10 pt-8 pb-6 border-b border-gray-100">
              <Link
                to="/blog/"
                className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 font-medium mb-5 transition-colors"
              >
                <i className="ri-arrow-left-line" aria-hidden="true" />
                Back to Blog
              </Link>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  {category}
                </span>
                {city && (
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    <i className="ri-map-pin-line text-orange-500" aria-hidden="true" />
                    {city}
                  </span>
                )}
                {service && (
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    <i className="ri-tools-line text-orange-500" aria-hidden="true" />
                    {service}
                  </span>
                )}
              </div>

              <h1 className="font-newsreader text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-calendar-line text-gray-400" aria-hidden="true" />
                  {formattedDate}
                </span>
                <span className="text-gray-300" aria-hidden="true">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-time-line text-gray-400" aria-hidden="true" />
                  {readTime}
                </span>
                <span className="text-gray-300" aria-hidden="true">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-user-line text-gray-400" aria-hidden="true" />
                  {author}
                </span>
              </div>
            </header>

            {/* Featured image — full article width, same 16:9 ratio as blog index cards */}
            <figure className="relative w-full aspect-[16/9] bg-gray-100">
              <img
                src={image}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={960}
                height={540}
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== defaultImageUrl) {
                    target.onerror = null;
                    target.src = defaultImageUrl;
                    target.alt = title;
                  }
                }}
              />
            </figure>

            {/* Body */}
            <div className="px-6 sm:px-8 md:px-10 py-8 md:py-10">
              <p className="text-lg text-gray-600 leading-relaxed mb-8 pb-8 border-b border-gray-100 font-medium">
                {description}
              </p>

              <div
                className="blog-content prose prose-lg prose-slate max-w-none
                  prose-headings:font-newsreader prose-headings:text-gray-900 prose-headings:font-bold
                  prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-100
                  prose-h3:text-lg prose-h3:sm:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:text-blue-800 hover:prose-a:underline
                  prose-strong:text-gray-900
                  prose-li:text-gray-700 prose-li:marker:text-orange-500
                  prose-ul:my-4 prose-ol:my-4"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {faqs && faqs.length > 0 && (
                <section className="mt-12 pt-10 border-t border-gray-200">
                  <h2 className="font-newsreader text-2xl font-bold text-gray-900 mb-2">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">Common questions about this topic.</p>
                  <FAQAccordion faqs={faqs} />
                </section>
              )}

              {/* CTA */}
              <section className="mt-12 rounded-xl bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 md:p-8">
                <h2 className="font-newsreader text-xl md:text-2xl font-bold mb-2">Need Professional Help?</h2>
                <p className="text-blue-100/90 mb-6 leading-relaxed text-sm md:text-base">{helpText}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 px-5 py-3 rounded-lg font-semibold transition-colors text-sm"
                  >
                    <i className="ri-phone-fill" aria-hidden="true" />
                    Call {BUSINESS_INFO.phone}
                  </a>
                  <a
                    href="/book-now/"
                    className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold transition-colors text-sm"
                  >
                    <i className="ri-calendar-line" aria-hidden="true" />
                    Schedule Service
                  </a>
                </div>
              </section>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-5">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-orange-600 text-xl" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Smart Garage Doors</p>
                  <p className="text-xs text-gray-500">Licensed · Insured · NY · NJ · CT</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Same-day service available. A real person answers 24/7 — usually in under 30 seconds.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-sm transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>

            {relatedPosts && relatedPosts.length > 0 && (
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Related Articles</h3>
                <ul className="space-y-4 divide-y divide-gray-100">
                  {relatedPosts.map((rp) => (
                    <li key={rp.slug} className="pt-4 first:pt-0">
                      <Link to={`/blog/${rp.slug}/`} className="group block">
                        <span className="text-xs font-medium text-orange-600 uppercase tracking-wide">
                          {rp.category}
                        </span>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug mt-1">
                          {rp.title}
                        </p>
                        <span className="text-xs text-gray-400 mt-1 block">{rp.readTime}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Popular Services</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/garage-door-repair/" className="text-gray-700 hover:text-orange-600 font-medium flex items-center gap-1 transition-colors">
                    Garage Door Repair <i className="ri-arrow-right-s-line" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="/spring-replacement/" className="text-gray-700 hover:text-orange-600 font-medium flex items-center gap-1 transition-colors">
                    Spring Replacement <i className="ri-arrow-right-s-line" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="/garage-door-installation/" className="text-gray-700 hover:text-orange-600 font-medium flex items-center gap-1 transition-colors">
                    Door Installation <i className="ri-arrow-right-s-line" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="/emergency-garage-door-repair/" className="text-gray-700 hover:text-orange-600 font-medium flex items-center gap-1 transition-colors">
                    Emergency Repair <i className="ri-arrow-right-s-line" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
