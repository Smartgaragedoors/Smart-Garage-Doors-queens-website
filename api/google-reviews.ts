import type { VercelRequest, VercelResponse } from '@vercel/node';
import { reviewsStorage } from '../src/lib/reviews-storage';

// 24h in milliseconds
const STALE_AFTER_MS = 24 * 60 * 60 * 1000;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const supabaseReady = Boolean(process.env.VITE_PUBLIC_SUPABASE_URL && process.env.VITE_PUBLIC_SUPABASE_ANON_KEY);
    const now = Date.now();

    if (supabaseReady) {
      // Try to serve from Supabase
      const stored = await reviewsStorage.getStoredReviews();
      const newest = stored[0];
      const isStale = !newest || now - Number(new Date(newest.updated_at)) > STALE_AFTER_MS;

      if (stored.length > 0 && !isStale) {
        return res.status(200).json({
          reviews: stored.map(r => ({
            author_name: r.author_name,
            author_url: r.author_url,
            profile_photo_url: r.profile_photo_url,
            rating: r.rating,
            text: r.text,
            time: r.time,
            relative_time_description: r.relative_time_description,
          })),
          rating: calculateAverageRating(stored),
          totalReviews: stored.length,
          source: 'supabase-cache',
        });
      }

      // Refresh from Google, upsert into Supabase, then return
      const googleReviews = await reviewsStorage.fetchFromGoogle();
      await reviewsStorage.saveReviews(googleReviews);
      const updated = await reviewsStorage.getStoredReviews();

      return res.status(200).json({
        reviews: updated.map(r => ({
          author_name: r.author_name,
          author_url: r.author_url,
          profile_photo_url: r.profile_photo_url,
          rating: r.rating,
          text: r.text,
          time: r.time,
          relative_time_description: r.relative_time_description,
        })),
        rating: calculateAverageRating(updated),
        totalReviews: updated.length,
        source: 'google-refresh',
      });
    }

    // Fallback: direct Google API (no Supabase configured)
    const fallbackData = await reviewsStorage.fetchFromGoogle();
    return res.status(200).json({
      reviews: fallbackData,
      rating: calculateAverageRating(fallbackData),
      totalReviews: fallbackData.length,
      source: 'google-direct',
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return res.status(500).json({
      error: 'Failed to fetch reviews',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

function calculateAverageRating(reviews: Array<{ rating: number }>): number {
  if (!reviews.length) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}
