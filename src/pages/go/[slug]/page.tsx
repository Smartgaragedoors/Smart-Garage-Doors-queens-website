import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import TrackingRouteMeta from '../../../components/seo/TrackingRouteMeta';

/**
 * /go/:slug — SPA fallback only (e.g. `vite` without Vercel rewrites).
 *
 * Production on Vercel: requests to /go/:slug are rewritten to api/go/[slug].ts
 * before the SPA loads, so tracking happens server-side with no duplicate events.
 *
 * This component performs a full navigation to /api/go/:slug so clicks are still
 * recorded by the server handler — no sendBeacon / client-side primary tracking.
 */
export default function GoRedirectFallbackPage() {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const slug =
      paramSlug?.trim() ||
      (typeof window !== 'undefined'
        ? window.location.pathname.match(/^\/go\/([^/]+)\/?$/)?.[1]?.trim() ?? ''
        : '');

    if (!slug) return;

    const qs = searchParams.toString();
    const suffix = qs ? `?${qs}` : '';
    window.location.replace(`/api/go/${encodeURIComponent(slug)}${suffix}`);
  }, [paramSlug, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <TrackingRouteMeta />
      <p className="text-gray-600 text-center px-4">Redirecting…</p>
    </div>
  );
}
