import type { VercelRequest, VercelResponse } from '@vercel/node';

// 24h in milliseconds
const STALE_AFTER_MS = 24 * 60 * 60 * 1000;

interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description?: string;
}

interface StoredReview extends GoogleReview {
  id: string;
  review_id: string;
  created_at: string;
  updated_at: string;
}

function generateReviewId(review: GoogleReview): string {
  return `${review.author_name}-${review.time}`;
}

async function fetchFromGoogle(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.VITE_GOOGLE_PLACES_API_KEY;
  const placeId = 'ChIJucuPoePGzGMRGWWH9YOmAX4';

  if (!apiKey) {
    throw new Error('Google Places API key not configured');
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.status === 'OK' && data.result?.reviews) {
    return data.result.reviews.map((review: any) => ({
      author_name: review.author_name,
      author_url: review.author_url,
      profile_photo_url: review.profile_photo_url,
      rating: review.rating,
      text: review.text,
      time: review.time,
      relative_time_description: review.relative_time_description,
    }));
  }

  throw new Error(`Google API error: ${data.status} - ${data.error_message || 'Unknown error'}`);
}

async function saveReviewsToSupabase(reviews: GoogleReview[]): Promise<void> {
  const supabaseUrl = process.env.VITE_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase credentials not configured');
  }

  const reviewsToUpsert = reviews.map(review => ({
    review_id: generateReviewId(review),
    author_name: review.author_name,
    author_url: review.author_url || null,
    profile_photo_url: review.profile_photo_url || null,
    rating: review.rating,
    text: review.text,
    time: review.time,
    relative_time_description: review.relative_time_description || null,
  }));

  // Use POST with Prefer header for upsert (requires unique constraint on review_id)
  const response = await fetch(`${supabaseUrl}/rest/v1/google_reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': supabaseKey,
      'Prefer': 'resolution=merge-duplicates',
    },
    body: JSON.stringify(reviewsToUpsert),
  });

  if (!response.ok) {
    const errorText = await response.text();
    // If upsert fails, try individual inserts (ignore duplicates)
    if (response.status === 409 || response.status === 400) {
      console.warn('Bulk upsert failed, trying individual inserts:', errorText);
      for (const reviewData of reviewsToUpsert) {
        try {
          const insertResponse = await fetch(`${supabaseUrl}/rest/v1/google_reviews`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'apikey': supabaseKey,
              'Prefer': 'return=minimal',
            },
            body: JSON.stringify(reviewData),
          });
          // Ignore duplicate errors (409)
          if (!insertResponse.ok && insertResponse.status !== 409) {
            const errText = await insertResponse.text();
            console.error(`Failed to insert review ${reviewData.review_id}:`, errText);
          }
        } catch (err) {
          console.error(`Error inserting review ${reviewData.review_id}:`, err);
        }
      }
    } else {
      throw new Error(`Failed to save reviews: ${response.status} ${response.statusText} - ${errorText}`);
    }
  }
}

async function getStoredReviewsFromSupabase(limit?: number): Promise<StoredReview[]> {
  const supabaseUrl = process.env.VITE_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase credentials not configured');
  }

  let url = `${supabaseUrl}/rest/v1/google_reviews?select=*&order=time.desc`;
  if (limit) {
    url += `&limit=${limit}`;
  }

  const response = await fetch(url, {
    headers: {
      'apikey': supabaseKey,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch reviews: ${response.status} ${response.statusText} - ${errorText}`);
  }

  return response.json();
}

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

  try {
    const supabaseUrl = process.env.VITE_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.VITE_PUBLIC_SUPABASE_ANON_KEY;
    const supabaseReady = Boolean(supabaseUrl && supabaseKey);

    if (supabaseReady) {
      try {
        // Try to serve from Supabase first
        const stored = await getStoredReviewsFromSupabase();
        
        if (stored.length > 0) {
          const newest = stored[0];
          const newestTime = new Date(newest.updated_at || newest.created_at).getTime();
          const isStale = Date.now() - newestTime > STALE_AFTER_MS;

          if (!isStale) {
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
        }

        // Data is stale or empty, refresh from Google
        const googleReviews = await fetchFromGoogle();
        await saveReviewsToSupabase(googleReviews);
        const updated = await getStoredReviewsFromSupabase();

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
      } catch (supabaseError) {
        console.error('Supabase error, falling back to Google:', supabaseError);
        // Fall through to Google API fallback
      }
    }

    // Fallback: direct Google API (no Supabase configured or Supabase failed)
    const fallbackData = await fetchFromGoogle();
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
      message: error instanceof Error ? error.message : 'Unknown error',
      details: error instanceof Error ? error.stack : undefined,
    });
  }
}
