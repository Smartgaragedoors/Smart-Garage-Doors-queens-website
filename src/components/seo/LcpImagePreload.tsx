import { useEffect } from 'react';

/**
 * Puts one high-priority image preload at the top of <head> for this page's
 * LCP hero image.
 *
 * Why: the heroes on this site are CSS backgrounds, which the browser cannot
 * discover until CSS has loaded and layout has run. Lighthouse (mobile,
 * 2026-09-10) measured 4-7 seconds of LCP "load delay" on the homepage,
 * /garage-door-repair/ and /queens-ny/ for exactly that reason.
 *
 * The prerender snapshots <head>, so this link ships in the static HTML and the
 * browser's preload scanner starts the request while it is still parsing.
 * Pass the exact URL the hero renders, or the browser downloads it twice.
 */
export default function LcpImagePreload({ href }: { href?: string }) {
  useEffect(() => {
    if (!href) return;
    document.head.querySelectorAll('link[data-lcp-preload]').forEach((el) => el.remove());
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = href;
    link.setAttribute('fetchpriority', 'high');
    link.setAttribute('data-lcp-preload', '');
    document.head.prepend(link);
    return () => {
      link.remove();
    };
  }, [href]);

  return null;
}
