/**
 * WhatsApp URL helper for prefilled messages with optional tracking params.
 * Preserves UTM, platform, campaign, and custom params for attribution.
 */

const WHATSAPP_NUMBER = '19145576816';
const DEFAULT_MESSAGE = 'Hi, I need help with my garage door.';
const MESSAGE_WITH_SOURCE = 'Hi, I need help with my garage door. I came from your website.';

export interface WhatsAppOptions {
  /** Base message. Default varies by hasTrackingParams. */
  message?: string;
  /** If true, append source/campaign info when available. */
  appendSource?: boolean;
  /** Override: campaign/source slug (e.g. from /go/:slug). */
  campaign?: string;
  /** Override: platform (e.g. instagram, facebook). */
  platform?: string;
}

/**
 * Build WhatsApp wa.me URL with prefilled message and preserved tracking params.
 * Reads utm_*, platform, campaign from current URL search params.
 */
export function buildWhatsAppUrl(options: WhatsAppOptions = {}): string {
  const { message, appendSource = true, campaign, platform } = options;

  const params = new URLSearchParams(window.location.search);
  const hasUtm = params.has('utm_source') || params.has('utm_campaign') || params.has('utm_medium');
  const hasTracking = hasUtm || params.has('platform') || params.has('campaign');

  let text = message ?? (hasTracking && appendSource ? MESSAGE_WITH_SOURCE : DEFAULT_MESSAGE);

  if (campaign) {
    text += ` | Referral: ${campaign.toUpperCase()}`;
  }
  if (platform) {
    text += ` | Platform: ${platform}`;
  }
  if (!campaign && !platform && hasTracking) {
    const p = params.get('platform');
    const c = params.get('campaign');
    if (p) text += ` | Platform: ${p}`;
    if (c) text += ` | Campaign: ${c}`;
  }

  const url = new URL(`https://wa.me/${WHATSAPP_NUMBER}`);
  url.searchParams.set('text', text);
  return url.toString();
}

/**
 * Get WhatsApp href for use in <a href={...}>.
 * Call from component with optional overrides.
 */
export function getWhatsAppHref(overrides?: Partial<WhatsAppOptions>): string {
  return buildWhatsAppUrl(overrides ?? {});
}
