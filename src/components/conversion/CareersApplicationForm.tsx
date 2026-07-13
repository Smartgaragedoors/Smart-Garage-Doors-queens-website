import { useState, useRef } from 'react';
import { submitForm } from '../../utils/formSubmission';
import { trackFormStart, trackFormSubmit } from '../../utils/analytics';

/**
 * Job application form for /careers/. Deliberately separate from the lead
 * forms: different fields (experience, role), no portfolio/service framing,
 * and an inline success state instead of the service thank-you page (which
 * reads as "your repair is booked").
 *
 * Submissions flow through the same submitForm pipeline (email + CRM mirror)
 * with serviceType 'careers-application' so applications are distinguishable
 * from customer leads in the inbox and CRM.
 */

const ROLE_OPTIONS = [
  { value: '', label: 'Select the role you’re applying for' },
  { value: 'Garage Door Technician (Residential)', label: 'Garage Door Technician — Residential' },
  { value: 'Commercial Door / Rolling Gate Technician', label: 'Commercial Door / Rolling Gate Technician' },
  { value: 'Installer / Installer Helper', label: 'Installer / Installer Helper' },
  { value: 'Other', label: 'Other / not sure yet' },
];

const EXPERIENCE_OPTIONS = [
  { value: '', label: 'Select years of experience' },
  { value: 'No door experience (trade background)', label: 'No door experience — other trade background' },
  { value: '1-2 years', label: '1–2 years' },
  { value: '3-5 years', label: '3–5 years' },
  { value: '5+ years', label: '5+ years' },
];

export default function CareersApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    role: '',
    experience: '',
    message: '',
  });
  const [contactConsent, setContactConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const formStarted = useRef(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (!formStarted.current) {
      formStarted.current = true;
      trackFormStart('Careers Application Form', 'careers_application_form');
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
          serviceType: 'careers-application',
          contactConsent: contactConsent ? 'Yes (agreed to be contacted about application)' : 'No',
        },
        'Careers Application Form'
      );
      if (result.success) {
        trackFormSubmit('Careers Application Form', 'careers_application_form', {
          role: formData.role,
          experience: formData.experience,
        });
        setSubmitted(true);
      } else {
        setErrorMsg(result.error || 'Something went wrong. Please call (914) 557-6816.');
        setIsSubmitting(false);
      }
    } catch {
      setErrorMsg('Something went wrong. Please call (914) 557-6816.');
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-lg mx-auto rounded-2xl border border-gray-200 shadow-sm bg-white p-6 md:p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <i className="ri-check-line text-2xl" aria-hidden="true" />
        </div>
        <h2 className="font-newsreader font-medium text-2xl text-gray-900 mb-2">
          Application Received
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Thanks for applying. A real person reviews every application — if your background
          fits an open role, we&apos;ll reach out to set up a conversation.
        </p>
      </div>
    );
  }

  return (
    <div id="apply" className="w-full max-w-lg mx-auto rounded-2xl border border-gray-200 shadow-sm bg-white p-6 md:p-8">
      <h2 className="font-newsreader font-medium text-2xl md:text-[26px] leading-tight text-gray-900">
        Apply Now
      </h2>
      <p className="text-sm text-gray-600 mt-1.5 mb-5">
        Two minutes, no resume required to start — tell us your experience and where you&apos;re based, and we&apos;ll take it from there.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3.5 text-left" noValidate>
        <div className="grid sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="caf-name" className="block text-xs font-semibold mb-1.5 text-gray-700">
              Your Name <span className="text-orange-500">*</span>
            </label>
            <input
              id="caf-name"
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
          <div>
            <label htmlFor="caf-phone" className="block text-xs font-semibold mb-1.5 text-gray-700">
              Phone <span className="text-orange-500">*</span>
            </label>
            <input
              id="caf-phone"
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
        </div>

        <div className="grid sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="caf-email" className="block text-xs font-semibold mb-1.5 text-gray-700">
              Email <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="caf-email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
          </div>
          <div>
            <label htmlFor="caf-area" className="block text-xs font-semibold mb-1.5 text-gray-700">
              Where You&apos;re Based <span className="text-orange-500">*</span>
            </label>
            <input
              id="caf-area"
              name="area"
              type="text"
              required
              value={formData.area}
              onChange={handleChange}
              placeholder="e.g. Queens NY, Bergen County NJ"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="caf-role" className="block text-xs font-semibold mb-1.5 text-gray-700">
              Role <span className="text-orange-500">*</span>
            </label>
            <select
              id="caf-role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm pr-8"
            >
              {ROLE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="caf-experience" className="block text-xs font-semibold mb-1.5 text-gray-700">
              Experience <span className="text-orange-500">*</span>
            </label>
            <select
              id="caf-experience"
              name="experience"
              required
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm pr-8"
            >
              {EXPERIENCE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="caf-message" className="block text-xs font-semibold mb-1.5 text-gray-700">
            Anything else? <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="caf-message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Brands you've worked on, certifications, current situation, when you can start…"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none"
          />
        </div>

        {/* Recruitment contact consent — this is an application form, not a service
            lead, so the owner-approved TCPA service-request wording doesn't apply.
            TODO(owner): review this wording before enabling automated SMS to applicants. */}
        <label className="flex items-start gap-2.5 text-[11px] leading-snug text-gray-500">
          <input
            type="checkbox"
            required
            checked={contactConsent}
            onChange={(e) => setContactConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-400 text-orange-500 focus:ring-orange-500"
          />
          <span>
            I agree that Smart Garage Doors may contact me about my application by phone,
            text message, or email at the contact details provided. Msg &amp; data rates may
            apply. Reply STOP to opt out.
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
              Submit Application
            </>
          )}
        </button>

        {errorMsg && (
          <p className="text-sm text-red-500 text-center" role="alert">
            {errorMsg}
          </p>
        )}

        <p className="text-center text-[11px] text-gray-500">
          Your application goes straight to the owner — not a recruiting agency.
        </p>
      </form>
    </div>
  );
}
