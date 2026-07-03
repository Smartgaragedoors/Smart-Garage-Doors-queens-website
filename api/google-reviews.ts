import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Returns static reviews. Supabase and Google Places API have been removed.
 * Frontend components use STATIC_REVIEWS directly; this endpoint exists for
 * backwards compatibility (e.g. bookmarks, external links).
 */

const STATIC_REVIEWS = [
  {
    author_name: 'Sarah M.',
    rating: 5,
    text: 'Excellent service! They fixed my garage door spring the same day I called. Professional, fast, and reasonably priced. Highly recommend Smart Garage Doors!',
    time: Math.floor(Date.now() / 1000) - 14 * 24 * 3600,
    relative_time_description: '2 weeks ago',
  },
  {
    author_name: 'Mike R.',
    rating: 5,
    text: 'Great experience from start to finish. They installed a new garage door opener and it works perfectly. The technician was knowledgeable and explained everything clearly.',
    time: Math.floor(Date.now() / 1000) - 30 * 24 * 3600,
    relative_time_description: '1 month ago',
  },
  {
    author_name: 'Jennifer L.',
    rating: 5,
    text: 'Emergency repair service was outstanding. My garage door was stuck and they came out within 2 hours. Fixed it quickly and the price was very fair. Thank you!',
    time: Math.floor(Date.now() / 1000) - 60 * 24 * 3600,
    relative_time_description: '2 months ago',
  },
  {
    author_name: 'David K.',
    rating: 5,
    text: 'Professional installation of our new garage door. The team was punctual, clean, and did excellent work. The door looks amazing and operates smoothly.',
    time: Math.floor(Date.now() / 1000) - 60 * 24 * 3600,
    relative_time_description: '2 months ago',
  },
  {
    author_name: 'Lisa T.',
    rating: 5,
    text: 'Honest and reliable service. They diagnosed the problem accurately and fixed it without trying to sell me unnecessary parts. Will definitely use them again.',
    time: Math.floor(Date.now() / 1000) - 90 * 24 * 3600,
    relative_time_description: '3 months ago',
  },
  {
    author_name: 'Robert H.',
    rating: 5,
    text: 'Top-notch service! They replaced my garage door cables and rollers. The technician was very professional and the work was completed efficiently. Highly recommended!',
    time: Math.floor(Date.now() / 1000) - 120 * 24 * 3600,
    relative_time_description: '4 months ago',
  },
];

function calculateAverageRating(reviews: Array<{ rating: number }>): number {
  if (!reviews.length) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

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

  return res.status(200).json({
    reviews: STATIC_REVIEWS,
    rating: calculateAverageRating(STATIC_REVIEWS),
    totalReviews: STATIC_REVIEWS.length,
    source: 'static',
  });
}
