import { PRICING_NOTE, PRICING_NOTE_ES } from '../../config/pricing';

interface PricingNoteProps {
  /** Spanish pages pass "es". */
  lang?: 'en' | 'es';
  className?: string;
  /** Centered under a table or card grid; left-aligned inside prose. */
  align?: 'left' | 'center';
}

/**
 * The one sentence that must sit under any price shown on the site
 * (owner rule, 2026-11-02): prices are starting prices; the total is confirmed
 * before work begins. Keep it small and quiet — it qualifies, it doesn't sell.
 */
export default function PricingNote({ lang = 'en', className = '', align = 'left' }: PricingNoteProps) {
  return (
    <p
      className={`text-xs sm:text-sm text-gray-500 leading-relaxed ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''} ${className}`}
      data-pricing-note
    >
      {lang === 'es' ? PRICING_NOTE_ES : PRICING_NOTE}
    </p>
  );
}
