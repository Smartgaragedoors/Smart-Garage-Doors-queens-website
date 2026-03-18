import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

/**
 * RedirectPage
 *  - Reads :slug from /go/:slug
 *  - Reads optional ?platform=&campaign= query params
 *  - Sends POST to Supabase edge function to track click
 *  - Redirects user to WhatsApp with a prefilled message
 */
const RedirectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!slug) return;

    const controller = new AbortController();

    const platform = searchParams.get('platform') || '';
    const campaign = searchParams.get('campaign') || '';

    const trackAndRedirect = async () => {
      try {
        await fetch('https://xclttkzmmkphepxawosh.supabase.co/functions/v1/track/${slug}', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            slug,
            platform: platform || undefined,
            campaign: campaign || undefined,
          }),
          signal: controller.signal,
        });
      } catch {
        // Tracking failure should not block redirect
      } finally {
        const params = new URLSearchParams();

        const upperSlug = slug.toUpperCase();

        let message = `Hi, I need garage door service. I was given referral code ${upperSlug}`;

        if (platform) {
          message += ` | Platform: ${platform}`;
        }
        if (campaign) {
          message += ` | Campaign: ${campaign}`;
        }

        params.set('text', message);

        const whatsappNumber = '19145576816';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?${params.toString()}`;

        window.location.replace(whatsappUrl);
      }
    };

    trackAndRedirect();

    return () => {
      controller.abort();
    };
  }, [slug, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p className="text-gray-600 text-center px-4">
        Redirecting you to WhatsApp…
      </p>
    </div>
  );
};

export default RedirectPage;

