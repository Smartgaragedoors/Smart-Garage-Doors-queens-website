import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = 'ChIJucuPoePGzGMRGWWH9YOmAX4';

  if (!apiKey) {
    return res.status(500).json({ error: 'GOOGLE_PLACES_API_KEY not configured' });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK' && data.result) {
      return res.status(200).json({
        reviews: data.result.reviews || [],
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total,
      });
    }

    return res.status(400).json({
      error: data.error_message || 'Failed to fetch reviews',
      status: data.status,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

