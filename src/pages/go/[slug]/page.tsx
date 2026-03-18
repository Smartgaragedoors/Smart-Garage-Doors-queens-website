import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const SUPABASE_TRACK_BASE = 'https://xclttkzmmkphepxawosh.supabase.co/functions/v1/track';

/**
 * RedirectPage
 *  - Reads :slug from /go/:slug
 *  - Preserves query params (platform, campaign, etc.)
 *  - Redirects to Supabase track function, which handles tracking + WhatsApp redirect
 */
const RedirectPage = () => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();

  // Use param first; fallback to pathname if param missing (e.g. Vercel redirect edge case)
  const slug = paramSlug || (() => {
    const m = window.location.pathname.match(/^\/go\/([^/]+)\/?$/);
    return m ? m[1] : '';
  })();

  useEffect(() => {
    if (!slug) return;

    const trackUrl = new URL(`${SUPABASE_TRACK_BASE}/${encodeURIComponent(slug)}`);
    searchParams.forEach((value, key) => {
      trackUrl.searchParams.set(key, value);
    });

    window.location.replace(trackUrl.toString());
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
