import { memo } from 'react';

/**
 * Compact "Common problems we fix today" strip.
 *
 * Customer-language symptoms (the words people actually search/say) that double
 * as crawlable internal links to the matching service pages. Kept deliberately
 * small — a single wrap of tappable pills, no images, no JS — so it reassures
 * "yes, they fix MY problem" high on the page without adding vertical bulk.
 */
const PROBLEMS = [
  { label: 'Door off track', icon: 'ri-git-merge-line', href: '/emergency-garage-door-repair/' },
  { label: 'Broken spring', icon: 'ri-git-commit-line', href: '/spring-replacement/' },
  { label: 'Snapped cable', icon: 'ri-scissors-cut-line', href: '/cable-roller-repair/' },
  { label: 'Opener not working', icon: 'ri-remote-control-line', href: '/opener-repair-installation/' },
  { label: 'Door stuck open or closed', icon: 'ri-lock-line', href: '/emergency-garage-door-repair/' },
  { label: 'Noisy or uneven door', icon: 'ri-volume-up-line', href: '/maintenance/' },
];

function CommonProblems() {
  return (
    <section className="bg-white py-8 md:py-12 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-1.5">
          Common problems we fix today
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-5 md:mb-7">
          Tell us what it's doing — we've fixed it a thousand times.
        </p>
        <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
          {PROBLEMS.map(({ label, icon, href }) => (
            <li key={label}>
              <a
                href={href}
                className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-800 text-sm font-medium px-3.5 py-2 rounded-full hover:border-orange-300 hover:text-orange-600 transition-colors"
              >
                <i className={`${icon} text-orange-500`} aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default memo(CommonProblems);
