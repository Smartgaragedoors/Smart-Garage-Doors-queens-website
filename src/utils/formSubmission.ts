/**
 * Form submission utility
 * 
 * Setup Instructions:
 * 1. Go to https://web3forms.com/
 * 2. Enter your email: info@smartestgaragedoors.com
 * 3. Get your access key
 * 4. Add it to Vercel environment variables as: VITE_WEB3FORMS_ACCESS_KEY
 * 
 * Or use any other form submission service by updating this utility.
 */

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

export interface FormSubmissionResult {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Submit form data using Web3Forms
 */
export async function submitForm(data: Record<string, string | number | undefined>, formName?: string): Promise<FormSubmissionResult> {
  // If no access key is configured, fall back to mailto (not ideal but works)
  if (!WEB3FORMS_ACCESS_KEY) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('VITE_WEB3FORMS_ACCESS_KEY not configured. Forms will use mailto fallback.');
    }
    return submitFormMailto(data, formName);
  }

  try {
    // Prepare form data for Web3Forms
    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', formName ? `${formName} - Smartest Garage Doors` : 'Contact Form - Smartest Garage Doors');
    formData.append('from_name', 'Smartest Garage Doors Website');
    
    // Add all form fields
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        formData.append(key, String(value));
      }
    });

    // Add a formatted message body
    const messageBody = Object.entries(data)
      .filter(([_, value]) => value !== undefined && value !== null && value !== '')
      .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
      .join('\n');
    
    formData.append('message', messageBody);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      };
    } else {
      return {
        success: false,
        error: result.message || 'Failed to submit form. Please try again or call us at (914) 557-6816.'
      };
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Form submission error:', error);
    }
    // Fallback to mailto if API fails
    return submitFormMailto(data, formName);
  }
}

/**
 * Fallback: Submit form via mailto (opens email client)
 * This is a temporary fallback until Web3Forms is configured
 */
function submitFormMailto(data: Record<string, string | number | undefined>, formName?: string): FormSubmissionResult {
  const email = 'info@smartestgaragedoors.com';
  const subject = encodeURIComponent(formName ? `${formName} - Smartest Garage Doors` : 'Contact Form - Smartest Garage Doors');
  
  const body = Object.entries(data)
    .filter(([_, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
    .join('%0D%0A'); // URL-encoded newline

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  
  // Open mailto link
  window.location.href = mailtoLink;
  
  return {
    success: true,
    message: 'Your email client should open. If it doesn\'t, please email us at info@smartestgaragedoors.com'
  };
}



