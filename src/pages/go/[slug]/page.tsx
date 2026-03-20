import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const SUPABASE_TRACK_BASE = 'https://xclttkzmmkphepxawosh.supabase.co/functions/v1/track';

/**
 * RedirectPage
 *  - Reads :slug from /go/:slug
 *  - Fires a tracking beacon to Supabase (non-blocking)
 *  - Redirects to /lp/whatsapp/ with campaign=slug and all original params
 */
const RedirectPage = () => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();

  const slug = paramSlug || (() => {
    const m = window.location.pathname.match(/^\/go\/([^/]+)\/?$/);
    return m ? m[1] : '';
  })();

  useEffect(() => {
    if (!slug) return;

    // Fire-and-forget beacon to Supabase track function for LinkFlow logging
    try {
      const trackUrl = new URL(`${SUPABASE_TRACK_BASE}/${encodeURIComponent(slug)}`);
      searchParams.forEach((value, key) => {
        trackUrl.searchParams.set(key, value);
      });
      navigator.sendBeacon(trackUrl.toString());
    } catch {
      // Tracking failure must not block redirect
    }

    // Build LP destination with campaign=slug + preserved params
    const lpUrl = new URL('/lp/whatsapp/', window.location.origin);
    lpUrl.searchParams.set('campaign', slug);
    searchParams.forEach((value, key) => {
      if (key !== 'campaign') {
        lpUrl.searchParams.set(key, value);
      }
    });

    window.location.replace(lpUrl.toString());
  }, [slug, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p className="text-gray-600 text-center px-4">
        Redirecting…
      </p>
    </div>
  );
};

export default RedirectPage;
