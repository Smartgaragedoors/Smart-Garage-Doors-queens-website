import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = 'ChIJucuPoePGzGMRGWWH9YOmAX4';

  if (!apiKey) {
    console.error('GOOGLE_PLACES_API_KEY not configured');
    return res.status(500).json({ 
      error: 'API key not configured',
      message: 'GOOGLE_PLACES_API_KEY environment variable is missing'
    });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`Google API returned status: ${response.status}`);
      return res.status(502).json({ 
        error: 'Google API error',
        status: response.status
      });
    }

    const data = await response.json();

    if (data.status === 'OK' && data.result) {
      return res.status(200).json({
        reviews: data.result.reviews || [],
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total,
      });
    }

    // Handle Google API errors
    if (data.status === 'REQUEST_DENIED' || data.status === 'INVALID_REQUEST') {
      console.error(`Google API error: ${data.status} - ${data.error_message}`);
      return res.status(400).json({
        error: data.error_message || 'Invalid request to Google API',
        status: data.status,
      });
    }

    return res.status(400).json({
      error: data.error_message || 'Failed to fetch reviews',
      status: data.status,
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
