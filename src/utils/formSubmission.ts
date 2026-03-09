/**
 * Form submission utility – delivers Book Now & Contact forms to your inbox.
 *
 * To receive submissions by email you must set up one of these (see FORM_SETUP.md):
 *
 * 1. Web3Forms (free): VITE_WEB3FORMS_ACCESS_KEY
 * 2. Formspree (free tier): VITE_FORMSPREE_FORM_ID
 *
 * Without either, the form falls back to opening the visitor’s email client (you won’t get an email unless they send it).
 */

const WEB3FORMS_ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '').trim();
const FORMSPREE_FORM_ID = (import.meta.env.VITE_FORMSPREE_FORM_ID ?? '').trim();
const SITE_URL = (import.meta.env.VITE_SITE_URL ?? 'https://www.smartestgaragedoors.com').trim();

export interface FormSubmissionResult {
  success: boolean;
  message?: string;
  error?: string;
  usedFallback?: boolean;
}

function buildMessageBody(data: Record<string, string | number | undefined>): string {
  const entries = Object.entries(data)
    .filter(([_, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}: ${value}`);
  entries.push(`Submitted: ${new Date().toISOString()}`);
  return entries.join('\n');
}

/**
 * Submit form via our Vercel API (uses Resend). Works when deployed to Vercel with RESEND_API_KEY + NOTIFICATION_EMAIL.
 */
async function submitFormApi(
  data: Record<string, string | number | undefined>,
  formName?: string
): Promise<FormSubmissionResult | null> {
  try {
    const payload = { ...data, formName };
    const apiUrl = typeof window !== 'undefined' && window.location?.origin
      ? `${window.location.origin}/api/submit-form`
      : `${SITE_URL}/api/submit-form`;
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    let result: { success?: boolean; error?: string };
    try {
      result = await response.json();
    } catch {
      return null;
    }

    if (response.ok && result.success) {
      return { success: true, message: 'Thank you! Your message has been sent successfully.' };
    }
    if (response.status === 503) {
      if (import.meta.env.DEV) console.warn('[formSubmission] API not configured:', result.error);
      return null;
    }
    return {
      success: false,
      error: result.error || 'Failed to submit. Please try again or call (914) 557-6816.',
    };
  } catch (err) {
    if (import.meta.env.DEV) console.warn('[formSubmission] API request failed:', err);
    return null;
  }
}

/**
 * Submit form via Web3Forms (sends email to the address you set at web3forms.com).
 */
async function submitWeb3Forms(
  data: Record<string, string | number | undefined>,
  formName?: string
): Promise<FormSubmissionResult> {
  const formData = new FormData();
  formData.append('access_key', WEB3FORMS_ACCESS_KEY);
  formData.append('subject', formName ? `${formName} - Smartest Garage Doors` : 'Contact Form - Smartest Garage Doors');
  formData.append('from_name', 'Smartest Garage Doors Website');
  formData.append('message', buildMessageBody(data));

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      formData.append(key, String(value));
    }
  });

  const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
  const result = await response.json();

  if (result.success) {
    return { success: true, message: 'Thank you! Your message has been sent successfully.' };
  }
  return {
    success: false,
    error: result.message || 'Failed to submit. Please try again or call (914) 557-6816.',
  };
}

/**
 * Submit form via Formspree (sends email to the address linked to your Formspree form).
 */
async function submitFormspree(
  data: Record<string, string | number | undefined>,
  formName?: string
): Promise<FormSubmissionResult> {
  const payload: Record<string, string> = {
    _subject: formName ? `${formName} - Smartest Garage Doors` : 'Contact Form - Smartest Garage Doors',
    _format: 'plain',
    message: buildMessageBody(data),
  };
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      payload[key] = String(value);
    }
  });

  const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (response.ok && (result.ok === true || result.success === true)) {
    return { success: true, message: 'Thank you! Your message has been sent successfully.' };
  }
  return {
    success: false,
    error: result.error || result.message || 'Failed to submit. Please try again or call (914) 557-6816.',
  };
}

/**
 * Fallback: open mailto (visitor must send the email; you won’t get it automatically).
 */
function submitFormMailto(
  data: Record<string, string | number | undefined>,
  formName?: string
): FormSubmissionResult {
  const email = 'info@smartestgaragedoors.com';
  const subject = encodeURIComponent(formName ? `${formName} - Smartest Garage Doors` : 'Contact Form - Smartest Garage Doors');
  const body = encodeURIComponent(buildMessageBody(data));
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
  return {
    success: true,
    message: 'Your email client should open. If it doesn’t, please call us at (914) 557-6816 to book.',
    usedFallback: true,
  };
}

/**
 * Submit form data. Tries Web3Forms / Formspree first (simplest), then Resend API, then mailto.
 */
export async function submitForm(
  data: Record<string, string | number | undefined>,
  formName?: string
): Promise<FormSubmissionResult> {
  // 1. Web3Forms (simplest: one key, no backend – add VITE_WEB3FORMS_ACCESS_KEY to .env)
  if (WEB3FORMS_ACCESS_KEY) {
    try {
      return await submitWeb3Forms(data, formName);
    } catch (err) {
      if (import.meta.env.DEV) console.error('[formSubmission] Web3Forms error:', err);
      if (FORMSPREE_FORM_ID) {
        try {
          return await submitFormspree(data, formName);
        } catch (_) {}
      }
      return submitFormMailto(data, formName);
    }
  }

  // 2. Formspree (one form ID – add VITE_FORMSPREE_FORM_ID to .env)
  if (FORMSPREE_FORM_ID) {
    try {
      return await submitFormspree(data, formName);
    } catch (err) {
      if (import.meta.env.DEV) console.error('[formSubmission] Formspree error:', err);
      return submitFormMailto(data, formName);
    }
  }

  // 3. Resend API (Vercel only – set RESEND_API_KEY + NOTIFICATION_EMAIL in Vercel)
  const apiResult = await submitFormApi(data, formName);
  if (apiResult !== null) return apiResult;

  // 4. No provider – mailto (visitor must send; you won't get it automatically)
  if (import.meta.env.DEV) {
    console.warn(
      '[formSubmission] No email provider. Add VITE_WEB3FORMS_ACCESS_KEY to .env – see GET_EMAIL_WORKING.md'
    );
  }
  return submitFormMailto(data, formName);
}



