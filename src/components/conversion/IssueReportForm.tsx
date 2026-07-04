import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../../utils/formSubmission';
import { trackFormStart, trackFormSubmit } from '../../utils/analytics';

/**
 * Ultra-short issue report for on-site staff (supers, maintenance, warehouse
 * crew) at commercial properties — the person who notices a broken door
 * often isn't the property manager who has our number saved. Meant to be
 * reached via a QR code on a door placard, so it has to be fast: 3 required
 * fields, no login, one screen, no scrolling on a phone.
 */

export default function IssueReportForm() {
  const [formData, setFormData] = useState({
    location: '',
    issue: '',
    phone: '',
    name: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const formStarted = useRef(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!formStarted.current) {
      formStarted.current = true;
      trackFormStart('Issue Report Form', 'issue_report_form');
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
        { ...formData, serviceType: 'commercial-issue-report' },
        'Issue Report Form'
      );
      if (result.success) {
        trackFormSubmit('Issue Report Form', 'issue_report_form', {});
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
      <div className="w-full max-w-md mx-auto rounded-2xl border border-gray-200 shadow-sm bg-white p-6 md:p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <i className="ri-check-line text-3xl" aria-hidden="true" />
        </div>
        <h1 className="font-newsreader font-medium text-2xl text-gray-900 mb-2">
          Got it — thanks.
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          We have your report and will call you back shortly. If this is an active
          emergency, call us now instead of waiting.
        </p>
        <a
          href="tel:+19145576816"
          className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-full shadow-md transition-all"
        >
          <i className="ri-phone-fill" aria-hidden="true" />
          Call (914) 557-6816
        </a>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl border border-gray-200 shadow-sm bg-white p-6 md:p-8">
      <h1 className="font-newsreader font-medium text-2xl md:text-[26px] leading-tight text-gray-900">
        Report a Door Issue
      </h1>
      <p className="text-sm text-gray-600 mt-1.5 mb-5">
        For staff at commercial properties — tell us what's wrong and we'll call you back.
        Emergency right now? Call <a href="tel:+19145576816" className="text-orange-600 font-semibold underline">(914) 557-6816</a> instead.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3.5 text-left" noValidate>
        <div>
          <label htmlFor="irf-location" className="block text-xs font-semibold mb-1.5 text-gray-700">
            Property / Location <span className="text-orange-500">*</span>
          </label>
          <input
            id="irf-location"
            name="location"
            type="text"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="Building name, address, or door number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
          />
        </div>

        <div>
          <label htmlFor="irf-issue" className="block text-xs font-semibold mb-1.5 text-gray-700">
            What's wrong? <span className="text-orange-500">*</span>
          </label>
          <textarea
            id="irf-issue"
            name="issue"
            required
            rows={3}
            value={formData.issue}
            onChange={handleChange}
            placeholder="e.g. door won't close, stuck open, making noise"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none"
          />
        </div>

        <div>
          <label htmlFor="irf-phone" className="block text-xs font-semibold mb-1.5 text-gray-700">
            Your Phone <span className="text-orange-500">*</span>
          </label>
          <input
            id="irf-phone"
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
          <label htmlFor="irf-name" className="block text-xs font-semibold mb-1.5 text-gray-700">
            Your Name <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="irf-name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="So we know who to ask for"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
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
              Send Report
            </>
          )}
        </button>

        {errorMsg && (
          <p className="text-sm text-red-500 text-center" role="alert">
            {errorMsg}
          </p>
        )}
      </form>
    </div>
  );
}
