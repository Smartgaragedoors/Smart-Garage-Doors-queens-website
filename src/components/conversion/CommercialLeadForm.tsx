import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../../utils/formSubmission';
import { trackEvent, trackFormStart, trackFormSubmit, trackPhoneClick } from '../../utils/analytics';
import { BUSINESS_INFO } from '../../config/business-info';

/**
 * Low-friction B2B lead form for the commercial + property-manager pages.
 *
 * Property/facilities managers researching a vendor often want to submit
 * details and get a callback rather than cold-call a company first — this
 * form gives them that path instead of funneling every commercial visitor
 * through the residential book-now form (which has no portfolio/company
 * fields and reads as "book my house call").
 */

const PORTFOLIO_OPTIONS = [
  { value: '', label: 'Select portfolio size (optional)' },
  { value: '1 property', label: '1 property' },
  { value: '2-5 properties', label: '2–5 properties' },
  { value: '6-20 properties', label: '6–20 properties' },
  { value: '20+ properties', label: '20+ properties / multi-site' },
];

export default function CommercialLeadForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    portfolioSize: '',
    requestType: 'vendor-account',
    address: '',
    message: '',
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const formStarted = useRef(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (!formStarted.current) {
      formStarted.current = true;
      trackFormStart('Commercial Lead Form', 'commercial_lead_form');
    }
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);
    try {
      const result = await submitForm(
        {
          ...formData,
          serviceType: 'commercial-property-management',
          smsConsent: smsConsent ? 'Yes (opted in to SMS)' : 'No',
        },
        'Commercial Lead Form'
      );
      if (result.usedFallback) {
        setErrorMsg('Your request has not been sent yet. Please send the email draft that opened, or call (914) 557-6816.');
      } else if (result.success) {
        trackFormSubmit('Commercial Lead Form', 'commercial_lead_form', {
          service_type: formData.requestType,
          urgency: formData.requestType === 'urgent-repair' ? 'urgent' : 'normal',
        });
        navigate('/book-now/thank-you/');
      } else {
        setErrorMsg(result.error || 'Something went wrong. Please call (914) 557-6816.');
      }
    } catch {
      setErrorMsg('Something went wrong. Please call (914) 557-6816.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl border border-gray-200 shadow-sm bg-white p-6 md:p-8">
      <h2 className="font-newsreader font-medium text-2xl md:text-[26px] leading-tight text-gray-900">
        Commercial Service & Vendor Accounts
      </h2>
      <p className="text-sm text-gray-600 mt-1.5 mb-5">
        Request a repair, maintenance plan, or backup vendor for your warehouse, service bays, or multiple locations.
      </p>
      <p className="text-sm text-gray-700 mb-4">
        Door down now? <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} onClick={() => trackPhoneClick('commercial_lead_form_urgent')} className="font-semibold underline">Call {BUSINESS_INFO.phone}</a> for current dispatch availability.
      </p>
      <a href="/downloads/smart-garage-doors-commercial-capabilities.pdf" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('commercial_capability_download', { category: 'Lead Generation', label: window.location.pathname })} className="inline-flex items-center min-h-11 text-sm font-semibold text-gray-700 underline mb-4">
        Download our commercial service overview (PDF)
      </a>

      <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
        <div>
          <label htmlFor="clf-request-type" className="block text-xs font-semibold mb-1.5 text-gray-700">How can we help?</label>
          <select id="clf-request-type" name="requestType" value={formData.requestType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 text-sm">
            <option value="vendor-account">Vendor / backup vendor account</option>
            <option value="urgent-repair">Urgent door or gate repair</option>
            <option value="scheduled-repair">Schedule a repair</option>
            <option value="maintenance-plan">Door maintenance plan</option>
          </select>
        </div>
        <div className="grid sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="clf-company" className="block text-xs font-semibold mb-1.5 text-gray-700">
              Company / Property Name <span className="text-orange-500">*</span>
            </label>
            <input
              id="clf-company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="Company or warehouse name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
          </div>
          <div>
            <label htmlFor="clf-name" className="block text-xs font-semibold mb-1.5 text-gray-700">
              Your Name <span className="text-orange-500">*</span>
            </label>
            <input
              id="clf-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="First and last name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="clf-phone" className="block text-xs font-semibold mb-1.5 text-gray-700">
              Phone <span className="text-orange-500">*</span>
            </label>
            <input
              id="clf-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
          </div>
          <div>
            <label htmlFor="clf-email" className="block text-xs font-semibold mb-1.5 text-gray-700">
              Email <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="clf-email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="clf-portfolio" className="block text-xs font-semibold mb-1.5 text-gray-700">
            Number of Locations
          </label>
          <select
            id="clf-portfolio"
            name="portfolioSize"
            value={formData.portfolioSize}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm pr-8"
          >
            {PORTFOLIO_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="clf-address" className="block text-xs font-semibold mb-1.5 text-gray-700">Site City / ZIP <span className="text-gray-400 font-normal">(optional)</span></label>
          <input id="clf-address" name="address" value={formData.address} onChange={handleChange} placeholder="e.g. Avenel, NJ 07001" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-orange-500 text-sm" />
        </div>

        <div>
          <label htmlFor="clf-message" className="block text-xs font-semibold mb-1.5 text-gray-700">
            What do you need? <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="clf-message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Number of doors, current vendor situation, urgent issues, COI requirements, etc."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none"
          />
        </div>

        {/* Optional SMS consent; preserve the owner-approved wording. */}
        <label className="flex items-start gap-2.5 text-[11px] leading-snug text-gray-500">
          <input
            type="checkbox"
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
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold px-6 py-3.5 rounded-full shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          {isSubmitting ? (
            <>
              <i className="ri-loader-4-line animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              <i className="ri-send-plane-fill" aria-hidden="true" />
              Request a Commercial Callback
            </>
          )}
        </button>

        {errorMsg && (
          <p className="text-sm text-red-500 text-center" role="alert">
            {errorMsg}
          </p>
        )}

        <p className="text-center text-[11px] text-gray-500">
          We will confirm service scope, scheduling, and any vendor requirements with you.
        </p>
      </form>
    </div>
  );
}
