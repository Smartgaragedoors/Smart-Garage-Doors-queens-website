import { useLayoutEffect } from 'react';

/**
 * Minimal head tags for utility routes (e.g. /go/:slug SPA fallback).
 * Does not set canonical — avoids advertising a tracking URL as canonical.
 * Service and city pages are unchanged.
 */
const TRACKING_ROBOTS = 'noindex, nofollow, noarchive';

export default function TrackingRouteMeta() {
  useLayoutEffect(() => {
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', TRACKING_ROBOTS);

    return () => {
      const currentRobots = document.querySelector('meta[name="robots"]');
      if (currentRobots?.getAttribute('content') === TRACKING_ROBOTS) {
        currentRobots.remove();
      }
    };
  }, []);

  return null;
}
