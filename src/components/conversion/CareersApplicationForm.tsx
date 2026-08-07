import { useRef, useState } from 'react';
import { submitForm } from '../../utils/formSubmission';
import { trackFormStart, trackFormSubmit } from '../../utils/analytics';

const ROLE_OPTIONS = [
  'Garage Door Service Technician',
  'Garage Door Installer',
  'Commercial Door / Rolling Gate Technician',
  'Installer Helper',
  'Not sure — match me to the right role',
];

const EXPERIENCE_OPTIONS = ['Less than 1 year', '1–2 years', '3–5 years', '5+ years'];
const WORK_OPTIONS = ['Full-time', 'Per job / subcontractor', 'Commission-based', 'Open to different options'];
const SKILL_OPTIONS = [
  'Torsion & extension springs',
  'Cables, rollers & tracks',
  'Garage door openers',
  'Residential door installation',
  'Commercial overhead doors',
  'Rolling gates / grilles',
  'Dock equipment',
  'Sales / estimates',
];

type FormData = {
  name: string;
  phone: string;
  email: string;
  cityState: string;
  role: string;
  experience: string;
  workPreference: string;
  skills: string[];
  driversLicense: string;
  ownVehicle: string;
  availability: string;
  onCall: string;
  startDate: string;
  earningsExpectation: string;
  referenceOne: string;
  referenceTwo: string;
  interviewDay: string;
  interviewTime: string;
  message: string;
};

const initialData: FormData = {
  name: '', phone: '', email: '', cityState: '', role: '', experience: '', workPreference: '',
  skills: [], driversLicense: '', ownVehicle: '', availability: '', onCall: '', startDate: '',
  earningsExpectation: '', referenceOne: '', referenceTwo: '', interviewDay: '', interviewTime: '', message: '',
};

const inputClass = 'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-orange-500';

export default function CareersApplicationForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [contactConsent, setContactConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const formStarted = useRef(false);

  const markStarted = () => {
    if (!formStarted.current) {
      formStarted.current = true;
      trackFormStart('Careers Application Form', 'careers_application_form');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    markStarted();
    const { name, value } = e.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const toggleSkill = (skill: string) => {
    markStarted();
    setFormData((previous) => ({
      ...previous,
      skills: previous.skills.includes(skill)
        ? previous.skills.filter((item) => item !== skill)
        : [...previous.skills, skill],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!formData.skills.length) {
      setErrorMsg('Please select at least one skill or experience area.');
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await submitForm({
        ...formData,
        skills: formData.skills.join(', '),
        serviceType: 'careers-application',
        applicationStatus: 'New technician applicant',
        contactConsent: contactConsent ? 'Yes — application contact consent provided' : 'No',
      }, 'Garage Door Technician Application');
      if (!result.success) throw new Error(result.error);
      trackFormSubmit('Careers Application Form', 'careers_application_form', {
        role: formData.role,
        experience: formData.experience,
        region: formData.cityState,
      });
      setSubmitted(true);
    } catch (error) {
      setErrorMsg(error instanceof Error && error.message
        ? error.message
        : 'We could not send your application. Please call (914) 557-6816.');
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-green-200 bg-white p-7 text-center shadow-sm md:p-10" role="status">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
          <i className="ri-check-line text-3xl" aria-hidden="true" />
        </div>
        <h2 className="font-newsreader text-3xl font-medium text-gray-900">Application received</h2>
        <p className="mx-auto mt-3 max-w-lg text-gray-600">
          Thanks, {formData.name.split(' ')[0]}. We will review your experience and service area. If there is a fit, we will contact you to confirm a 15-minute phone interview; your selected time is a preference, not a confirmed appointment yet.
        </p>
      </div>
    );
  }

  return (
    <div id="apply" className="mx-auto w-full max-w-3xl scroll-mt-28 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-9">
      <div className="mb-7">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-600">Technician application</p>
        <h2 className="font-newsreader text-3xl font-medium text-gray-900">Tell us what you can do</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">No resume is required. The form takes about 4 minutes and goes directly to our hiring team.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <fieldset>
          <legend className="mb-4 text-lg font-bold text-gray-900">1. Contact information</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" required><input name="name" required autoComplete="name" value={formData.name} onChange={handleChange} className={inputClass} /></Field>
            <Field label="Phone" required><input name="phone" type="tel" required autoComplete="tel" value={formData.phone} onChange={handleChange} className={inputClass} /></Field>
            <Field label="Email" required><input name="email" type="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass} /></Field>
            <Field label="City and state" required><input name="cityState" required autoComplete="address-level2" placeholder="Queens, NY" value={formData.cityState} onChange={handleChange} className={inputClass} /></Field>
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-4 text-lg font-bold text-gray-900">2. Role and experience</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Role" required>
              <select name="role" required value={formData.role} onChange={handleChange} className={inputClass}><option value="">Select a role</option>{ROLE_OPTIONS.map((option) => <option key={option}>{option}</option>)}</select>
            </Field>
            <Field label="Garage door experience" required>
              <select name="experience" required value={formData.experience} onChange={handleChange} className={inputClass}><option value="">Select experience</option>{EXPERIENCE_OPTIONS.map((option) => <option key={option}>{option}</option>)}</select>
            </Field>
            <Field label="Work arrangement" required>
              <select name="workPreference" required value={formData.workPreference} onChange={handleChange} className={inputClass}><option value="">Select preference</option>{WORK_OPTIONS.map((option) => <option key={option}>{option}</option>)}</select>
            </Field>
            <Field label="Earnings expectation" required><input name="earningsExpectation" required placeholder="Weekly, hourly, or percentage" value={formData.earningsExpectation} onChange={handleChange} className={inputClass} /></Field>
          </div>
          <div className="mt-5">
            <p className="mb-3 text-sm font-semibold text-gray-800">Skills — select all that apply <span className="text-orange-500">*</span></p>
            <div className="grid gap-2 sm:grid-cols-2">
              {SKILL_OPTIONS.map((skill) => (
                <label key={skill} className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-3 text-sm text-gray-700 hover:border-orange-300">
                  <input type="checkbox" checked={formData.skills.includes(skill)} onChange={() => toggleSkill(skill)} className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                  {skill}
                </label>
              ))}
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-4 text-lg font-bold text-gray-900">3. Driving and availability</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Valid driver's license?" required><SelectYesNo name="driversLicense" value={formData.driversLicense} onChange={handleChange} /></Field>
            <Field label="Reliable vehicle available?" required><SelectYesNo name="ownVehicle" value={formData.ownVehicle} onChange={handleChange} /></Field>
            <Field label="Current availability" required><input name="availability" required placeholder="Days and hours you can work" value={formData.availability} onChange={handleChange} className={inputClass} /></Field>
            <Field label="Available for some on-call work?" required><SelectYesNo name="onCall" value={formData.onCall} onChange={handleChange} /></Field>
            <Field label="Earliest start date" required><input name="startDate" type="date" required value={formData.startDate} onChange={handleChange} className={inputClass} /></Field>
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-1 text-lg font-bold text-gray-900">4. References</legend>
          <p className="mb-4 text-sm text-gray-500">We only contact references if your application moves forward.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Reference 1" required><input name="referenceOne" required placeholder="Name, relationship, phone" value={formData.referenceOne} onChange={handleChange} className={inputClass} /></Field>
            <Field label="Reference 2" required><input name="referenceTwo" required placeholder="Name, relationship, phone" value={formData.referenceTwo} onChange={handleChange} className={inputClass} /></Field>
          </div>
        </fieldset>

        <fieldset className="rounded-xl border border-orange-200 bg-orange-50 p-5">
          <legend className="px-2 text-lg font-bold text-gray-900">5. Preferred phone-interview time</legend>
          <p className="mb-4 text-sm text-gray-600">Choose a time that usually works. We will confirm it with you after reviewing your application.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Preferred day" required><input name="interviewDay" type="date" required value={formData.interviewDay} onChange={handleChange} className={inputClass} /></Field>
            <Field label="Preferred time" required><select name="interviewTime" required value={formData.interviewTime} onChange={handleChange} className={inputClass}><option value="">Select a time</option><option>8:00–11:00 AM</option><option>11:00 AM–2:00 PM</option><option>2:00–5:00 PM</option><option>5:00–7:00 PM</option></select></Field>
          </div>
          <Field label="Anything else we should know?" className="mt-4"><textarea name="message" rows={3} placeholder="Brands, certifications, commercial experience, or anything that helps us understand your background" value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} /></Field>
        </fieldset>

        <label className="flex items-start gap-3 text-xs leading-relaxed text-gray-600">
          <input type="checkbox" required checked={contactConsent} onChange={(event) => setContactConsent(event.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-400 text-orange-500 focus:ring-orange-500" />
          <span>I agree that Smart Garage Doors may contact me about this application by phone, text, or email. Message and data rates may apply. Reply STOP to opt out.</span>
        </label>

        {errorMsg && <p className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-700" role="alert">{errorMsg}</p>}
        <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-base font-bold text-white shadow-md transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50">
          <i className={isSubmitting ? 'ri-loader-4-line animate-spin' : 'ri-send-plane-fill'} aria-hidden="true" />
          {isSubmitting ? 'Sending application…' : 'Submit Application'}
        </button>
        <p className="text-center text-xs text-gray-500">Equal opportunity employer. Your information is used only for recruiting and hiring.</p>
      </form>
    </div>
  );
}

function Field({ label, required, className = '', children }: { label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return <label className={`block text-sm font-semibold text-gray-800 ${className}`}>{label}{required && <span className="text-orange-500"> *</span>}<span className="mt-1.5 block">{children}</span></label>;
}

function SelectYesNo({ name, value, onChange }: { name: string; value: string; onChange: React.ChangeEventHandler<HTMLSelectElement> }) {
  return <select name={name} required value={value} onChange={onChange} className={inputClass}><option value="">Select one</option><option>Yes</option><option>No</option></select>;
}
