import { useId, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../../utils/formSubmission';
import { trackFormStart, trackFormSubmit } from '../../utils/analytics';
import { classifyLeadType } from '../../utils/leadType';

/**
 * Compact lead-capture form: the homepage hero's quote card, reused (with props)
 * as the on-page quote form on the installation and opener pages.
 *
 * Additive to (never a replacement for) the dominant phone CTA. Reuses the
 * shared submitForm() pipeline (Web3Forms → Formspree → Resend → mailto, plus
 * CRM mirror) and fires GA4 form_start/form_submit under its own form type so
 * each placement can be measured separately. A new `formType` must also be in
 * LEAD_FORM_TYPES (utils/analytics.ts) or it won't count as a lead.
 *
 * Fields kept short on purpose (fewer fields = higher completion): Name, Phone,
 * Service, optional ZIP, plus the TCPA SMS-consent checkbox. The consent text is
 * owner-approved legal wording and lives ONLY here — reuse this component
 * rather than copying it.
 *
 * `variant` controls the card treatment:
 *   - 'glass' (default): dark blurred glass panel, blends with the hero photo
 *   - 'light': solid white card, maximum contrast
 */

type Variant = 'light' | 'glass';

export interface QuoteServiceOption {
  value: string;
  label: string;
}

interface HeroQuoteFormProps {
  variant?: Variant;
  heading?: string;
  subheading?: string;
  /** Name sent with the submission and shown in the CRM note ("Form: …"). */
  formName?: string;
  /** GA4 form type / source label. */
  formType?: string;
  serviceOptions?: QuoteServiceOption[];
  /** Preselected service value (must be one of serviceOptions). */
  defaultService?: string;
  /** Door style picked in the installation gallery; sent with the request. */
  doorStyle?: string;
  onClearDoorStyle?: () => void;
}

const SERVICE_OPTIONS: QuoteServiceOption[] = [
  { value: 'emergency', label: 'Emergency Repair (urgent)' },
  { value: 'garage-door-repair', label: 'Garage Door Repair' },
  { value: 'spring-replacement', label: 'Spring Replacement' },
  { value: 'opener-repair', label: 'Opener Repair / Installation' },
  { value: 'cable-roller-repair', label: 'Cable & Roller Repair' },
  { value: 'installation', label: 'New Door Installation' },
  { value: 'maintenance', label: 'Maintenance Service' },
  { value: 'other', label: 'Not sure / Other' },
];

export default function HeroQuoteForm({
  variant = 'glass',
  heading = 'Get Your Free Estimate',
  subheading = "Tell us what's wrong — we'll text or call you back with a total-price quote, fees and taxes included.",
  formName = 'Hero Quote Form',
  formType = 'hero_quote_form',
  serviceOptions = SERVICE_OPTIONS,
  defaultService = '',
  doorStyle = '',
  onClearDoorStyle,
}: HeroQuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: defaultService,
    zip: '',
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const formStarted = useRef(false);
  const navigate = useNavigate();
  // The homepage renders this form twice (mobile + desktop slots); unique ids
  // keep each label tied to its own input.
  const uid = useId();

  const isLight = variant === 'light';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (!formStarted.current) {
      formStarted.current = true;
      trackFormStart(formName, formType);
    }
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    // The form is noValidate (the consent box must never block a request), so
    // check the two fields we cannot call back without.
    if (!formData.name.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please add your name and a 10-digit phone number so we can reach you.');
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await submitForm(
        {
          ...formData,
          doorStyle: doorStyle || undefined,
          smsConsent: smsConsent ? 'Yes (opted in to SMS)' : 'No',
        },
        formName
      );
      if (result.success) {
        const leadType = classifyLeadType({ formName, formType, serviceType: formData.serviceType });
        trackFormSubmit(formName, formType, {
          service_type: formData.serviceType,
          lead_type: leadType,
        });
        navigate('/book-now/thank-you/', { state: { leadType } });
      } else {
        setErrorMsg(result.error || 'Something went wrong. Please call (914) 557-6816.');
        setIsSubmitting(false);
      }
    } catch {
      setErrorMsg('Something went wrong. Please call (914) 557-6816.');
      setIsSubmitting(false);
    }
  };

  // --- variant-dependent styling ---------------------------------------
  const cardClass = isLight
    ? 'bg-white border border-gray-200 shadow-2xl'
    : 'bg-white/[0.07] border border-white/15 shadow-2xl backdrop-blur-md';

  const headingClass = isLight ? 'text-gray-900' : 'text-white';
  const subClass = isLight ? 'text-gray-600' : 'text-gray-300';

  const labelClass = isLight ? 'text-gray-700' : 'text-gray-200';

  const inputClass = isLight
    ? 'w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm'
    : 'w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm';

  const consentText = isLight ? 'text-gray-500' : 'text-white/60';
  const microClass = isLight ? 'text-gray-500' : 'text-white/60';
  const errorClass = isLight ? 'text-red-600' : 'text-red-400';

  return (
    <div className={`w-full max-w-md mx-auto rounded-2xl p-6 md:p-7 ${cardClass}`}>
      {/* h2 — never an h1 (page keeps exactly one h1 in the hero headline) */}
      <h2 className={`font-newsreader font-medium text-2xl md:text-[26px] leading-tight ${headingClass}`}>
        {heading}
      </h2>
      <p className={`text-sm mt-1.5 mb-5 ${subClass}`}>{subheading}</p>

      <form onSubmit={handleSubmit} className="space-y-3.5 text-left" noValidate>
        {doorStyle && (
          <p
            className={`flex items-start justify-between gap-3 rounded-lg px-3 py-2 text-sm ${
              isLight ? 'bg-orange-50 text-gray-800 border border-orange-200' : 'bg-white/10 text-white border border-white/20'
            }`}
          >
            <span>
              <span className="font-semibold">Door style:</span> {doorStyle}
            </span>
            {onClearDoorStyle && (
              <button
                type="button"
                onClick={onClearDoorStyle}
                className="shrink-0 underline text-xs font-semibold min-h-[24px]"
                aria-label={`Remove selected door style ${doorStyle}`}
              >
                Remove
              </button>
            )}
          </p>
        )}

        <div>
          <label htmlFor={`${uid}-name`} className={`block text-xs font-semibold mb-1.5 ${labelClass}`}>
            Name <span className="text-orange-400">*</span>
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="First and last name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${uid}-phone`} className={`block text-xs font-semibold mb-1.5 ${labelClass}`}>
            Phone <span className="text-orange-400">*</span>
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${uid}-service`} className={`block text-xs font-semibold mb-1.5 ${labelClass}`}>
            What do you need? <span className="text-orange-400">*</span>
          </label>
          <select
            id={`${uid}-service`}
            name="serviceType"
            required
            value={formData.serviceType}
            onChange={handleChange}
            className={`${inputClass} pr-8`}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-gray-900">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={`${uid}-zip`} className={`block text-xs font-semibold mb-1.5 ${labelClass}`}>
            ZIP or City <span className={isLight ? 'text-gray-400 font-normal' : 'text-white/40 font-normal'}>(optional)</span>
          </label>
          <input
            id={`${uid}-zip`}
            name="zip"
            type="text"
            autoComplete="postal-code"
            value={formData.zip}
            onChange={handleChange}
            placeholder="Helps us route the closest tech"
            className={inputClass}
          />
        </div>

        {/* TCPA SMS consent — required. Wording owner-approved 2026-06-23. */}
        <label className={`flex items-start gap-2.5 text-[11px] leading-snug ${consentText}`}>
          <input
            type="checkbox"
            required
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
          className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold px-6 py-3.5 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          {isSubmitting ? (
            <>
              <i className="ri-loader-4-line animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              <i className="ri-send-plane-fill" aria-hidden="true" />
              Get My Complimentary Quote
            </>
          )}
        </button>

        {errorMsg && (
          <p className={`text-sm text-center ${errorClass}`} role="alert">
            {errorMsg}
          </p>
        )}

        <p className={`text-center text-[11px] ${microClass}`}>
          No obligation · upfront price before any work begins
        </p>
      </form>
    </div>
  );
}
