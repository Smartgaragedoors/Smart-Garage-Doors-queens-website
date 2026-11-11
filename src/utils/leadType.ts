/**
 * Lead-type classification shared by the form pipeline and analytics.
 *
 * One label per inquiry so the CRM, the notification email and GA4 can separate
 * commercial work, new installations and repairs without reading free text.
 * Pure functions, no browser APIs: safe to import anywhere.
 */

export type LeadType = 'commercial' | 'installation' | 'repair' | 'careers' | 'other';

export const LEAD_TYPE_LABEL: Record<LeadType, string> = {
  commercial: 'Commercial',
  installation: 'Installation',
  repair: 'Repair / service',
  careers: 'Job application (not a customer)',
  other: 'Not specified',
};

export interface LeadTypeInput {
  /** Human form name passed to submitForm(), e.g. "Commercial Lead Form". */
  formName?: string;
  /** Analytics form type, e.g. "installation_quote_form". */
  formType?: string;
  /** The form's service value, e.g. "spring-replacement" or "installation". */
  serviceType?: string;
  /** Company / property name — only commercial forms collect it. */
  company?: string;
}

// "spring-replacement" is a repair, so match the door-replacement slug exactly
// instead of any "replacement".
const INSTALL_PATTERN = /(^|[-_ ])install|door-replacement|new-door|door-and-opener|smart-opener/;

export function classifyLeadType(input: LeadTypeInput): LeadType {
  const service = (input.serviceType || '').toLowerCase().trim();
  const form = `${input.formName || ''} ${input.formType || ''}`.toLowerCase();

  if (/career|application/.test(service) || /technician application|careers/.test(form)) return 'careers';
  if (service.includes('commercial') || form.includes('commercial') || form.includes('issue report') || (input.company || '').trim()) {
    return 'commercial';
  }
  if (INSTALL_PATTERN.test(service)) return 'installation';
  if (!service || service === 'other') {
    // No usable service value: the form the visitor chose is the best signal.
    if (/installation[ _]quote/.test(form)) return 'installation';
    if (/emergency/.test(form)) return 'repair';
    return 'other';
  }
  return 'repair';
}
