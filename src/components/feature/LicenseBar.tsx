import { BUSINESS_INFO } from '../../config/business-info';

/**
 * Thin, site-wide strip with the real license and registration numbers.
 * Sits under the dark AnnouncementBar and above the sticky nav, in normal
 * flow (scrolls away). Numbers come only from BUSINESS_INFO.licenses.
 *
 * Why: competitors say "licensed" with no number; a number a visitor can look
 * up is the one trust signal a fake listing can't copy. On desktop each number
 * links to the state's lookup page; on phones it is plain text (tiny links
 * would break the 44px tap-target rule — the footer carries the same links).
 */
const ORDER = ['NY', 'NJ', 'CT'];

export default function LicenseBar() {
  const licenses = [...BUSINESS_INFO.licenses].sort(
    (a, b) => ORDER.indexOf(a.region) - ORDER.indexOf(b.region),
  );

  return (
    <div className="bg-gray-50 border-b border-gray-200 text-gray-600" role="note" aria-label="License numbers">
      <p className="max-w-7xl mx-auto px-3 sm:px-4 py-1 text-[11px] sm:text-xs leading-snug text-center">
        <i className="ri-shield-check-fill text-green-600 mr-1 align-[-1px]" aria-hidden="true" />
        <span className="font-semibold text-gray-700">Licensed &amp; insured</span>
        {licenses.map((l) => (
          <span key={l.region}>
            <span className="text-gray-400" aria-hidden="true"> · </span>
            <span className="sm:hidden">{l.shortLabel}</span>
            <a
              href={l.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline underline underline-offset-2 decoration-gray-300 hover:text-gray-900 hover:decoration-gray-500"
              title={`Look up this number on the official ${l.region === 'NY' ? 'NYC' : l.region} lookup`}
            >
              {l.label}
            </a>
          </span>
        ))}
      </p>
    </div>
  );
}
