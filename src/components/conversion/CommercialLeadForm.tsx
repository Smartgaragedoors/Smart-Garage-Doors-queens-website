import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../../utils/formSubmission';
import { trackFormStart, trackFormSubmit } from '../../utils/analytics';

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
    message: '',
  });
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
        { ...formData, serviceType: 'commercial-property-management' },
        'Commercial Lead Form'
      );
      if (result.success) {
        trackFormSubmit('Commercial Lead Form', 'commercial_lead_form', {
          portfolio_size: formData.portfolioSize,
        });
        navigate('/book-now/thank-you/');
      } else {
        setErrorMsg(result.error || 'Something went wrong. Please call (914) 557-6816.');
        setIsSubmitting(false);
      }
    } catch {
      setErrorMsg('Something went wrong. Please call (914) 557-6816.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl border border-gray-200 shadow-sm bg-white p-6 md:p-8">
      <h2 className="font-newsreader font-medium text-2xl md:text-[26px] leading-tight text-gray-900">
        Set Up a Vendor Account
      </h2>
      <p className="text-sm text-gray-600 mt-1.5 mb-5">
        Tell us about your properties and we'll follow up with a point of contact, COI, and pricing — no commitment.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3.5 text-left" noValidate>
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
              placeholder="e.g. Riverside Management Co."
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
            Portfolio Size
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
              Request Vendor Info
            </>
          )}
        </button>

        {errorMsg && (
          <p className="text-sm text-red-500 text-center" role="alert">
            {errorMsg}
          </p>
        )}

        <p className="text-center text-[11px] text-gray-500">
          No commitment — a real person follows up, never a sales queue.
        </p>
      </form>
    </div>
  );
}
