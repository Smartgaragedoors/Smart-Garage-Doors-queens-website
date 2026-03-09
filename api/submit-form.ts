import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFICATION_EMAIL = (process.env.NOTIFICATION_EMAIL ?? '').trim();
const FROM_EMAIL = (process.env.FROM_EMAIL ?? 'Smartest Garage Doors <onboarding@resend.dev>').trim();

function buildEmailBody(data: Record<string, string | number | undefined>, formName?: string): string {
  const timestamp = new Date().toISOString();
  const entries = Object.entries(data)
    .filter(([_, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => {
      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
      return `${label}: ${value}`;
    });

  let body = entries.join('\n');
  body += `\n\n---\nSubmitted: ${timestamp}`;
  if (formName) body += `\nForm: ${formName}`;
  return body;
}

function buildHtmlEmail(data: Record<string, string | number | undefined>, formName?: string): string {
  const timestamp = new Date().toISOString();
  const rows = Object.entries(data)
    .filter(([_, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => {
      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
      return `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:600">${escapeHtml(label)}</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(String(value))}</td></tr>`;
    });

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px">
  <h2 style="color:#1e40af">New Lead: ${escapeHtml(formName ?? 'Website Form')}</h2>
  <p style="color:#666">Submitted: ${escapeHtml(timestamp)}</p>
  <table style="width:100%;border-collapse:collapse;margin-top:16px">
    ${rows.join('')}
  </table>
  <p style="margin-top:24px;font-size:12px;color:#999">Smartest Garage Doors - Form submission</p>
</body>
</html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY || !NOTIFICATION_EMAIL) {
    console.error('[submit-form] Missing RESEND_API_KEY or NOTIFICATION_EMAIL');
    return res.status(503).json({
      success: false,
      error: 'Form notification not configured. Set RESEND_API_KEY and NOTIFICATION_EMAIL in Vercel.',
    });
  }

  try {
    const body = req.body as Record<string, string | number | undefined> & { formName?: string };
    if (!body || typeof body !== 'object') {
      return res.status(400).json({ success: false, error: 'Invalid request body' });
    }

    const { formName, ...formData } = body;
    const subject = formName
      ? `${formName} - Smartest Garage Doors`
      : 'Contact Form - Smartest Garage Doors';

    const textBody = buildEmailBody(formData, formName);
    const htmlBody = buildHtmlEmail(formData, formName);

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [NOTIFICATION_EMAIL],
      subject,
      html: htmlBody,
      text: textBody,
      replyTo: (formData.email as string) || undefined,
    });

    if (error) {
      console.error('[submit-form] Resend error:', error);
      return res.status(500).json({
        success: false,
        error: error.message || 'Failed to send notification',
      });
    }

    console.log('[submit-form] Email sent:', data?.id, 'form:', formName);
    return res.status(200).json({ success: true, message: 'Notification sent' });
  } catch (err) {
    console.error('[submit-form] Unexpected error:', err);
    return res.status(500).json({
      success: false,
      error: err instanceof Error ? err.message : 'Internal server error',
    });
  }
}
