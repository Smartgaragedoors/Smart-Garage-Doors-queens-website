// Trust badge row shown right above form submit buttons — risk-reversal at the
// moment of highest hesitation.
import { BUSINESS_INFO } from '../../config/business-info';

export default function FormTrustBadges() {
  return (
    <div className="mt-6 mb-2">
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-700">
        <span className="inline-flex items-center gap-1.5">
          <i className="ri-shield-check-fill text-green-600" aria-hidden="true" />
          Licensed &amp; Insured
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="ri-price-tag-3-fill text-green-600" aria-hidden="true" />
          Upfront Pricing — No Hidden Fees
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="ri-refresh-fill text-green-600" aria-hidden="true" />
          1-Year Parts &amp; Labor Warranty
        </span>
      </div>
      <p className="text-center text-xs text-gray-500 mt-2">
        No obligation — we confirm the price with you before any work starts.
      </p>
      <p className="text-center text-xs text-gray-400 mt-1">
        {BUSINESS_INFO.licenses.map((l) => l.label).join(' · ')}
      </p>
    </div>
  );
}
