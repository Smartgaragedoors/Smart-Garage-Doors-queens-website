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

class ReviewsStorage {
  private supabaseUrl: string;
  private supabaseKey: string;

  constructor() {
    this.supabaseUrl = process.env.VITE_PUBLIC_SUPABASE_URL || '';
    this.supabaseKey = process.env.VITE_PUBLIC_SUPABASE_ANON_KEY || '';
  }

  private generateReviewId(review: GoogleReview): string {
    return `${review.author_name}-${review.time}`;
  }

  async fetchFromGoogle(): Promise<GoogleReview[]> {
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

  async saveReviews(reviews: GoogleReview[]): Promise<void> {
    if (!this.supabaseUrl || !this.supabaseKey) {
      throw new Error('Supabase credentials not configured');
    }

    const reviewsToInsert = reviews.map(review => ({
      review_id: this.generateReviewId(review),
      author_name: review.author_name,
      author_url: review.author_url || null,
      profile_photo_url: review.profile_photo_url || null,
      rating: review.rating,
      text: review.text,
      time: review.time,
      relative_time_description: review.relative_time_description || null,
    }));

    const response = await fetch(`${this.supabaseUrl}/rest/v1/google_reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': this.supabaseKey,
        'Prefer': 'resolution=merge-duplicates',
      },
      body: JSON.stringify(reviewsToInsert),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to save reviews: ${response.status} ${response.statusText} - ${errorText}`);
    }
  }

  async getStoredReviews(limit?: number): Promise<StoredReview[]> {
    if (!this.supabaseUrl || !this.supabaseKey) {
      throw new Error('Supabase credentials not configured');
    }

    let url = `${this.supabaseUrl}/rest/v1/google_reviews?select=*&order=time.desc`;
    if (limit) {
      url += `&limit=${limit}`;
    }

    const response = await fetch(url, {
      headers: {
        'apikey': this.supabaseKey,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch reviews: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return response.json();
  }

  async updateReviews(): Promise<{ added: number; total: number }> {
    const googleReviews = await this.fetchFromGoogle();
    const existingReviews = await this.getStoredReviews();
    const existingIds = new Set(existingReviews.map(r => r.review_id));

    await this.saveReviews(googleReviews);

    const newReviews = googleReviews.filter(
      r => !existingIds.has(this.generateReviewId(r))
    );

    const updatedReviews = await this.getStoredReviews();

    return {
      added: newReviews.length,
      total: updatedReviews.length,
    };
  }
}

export const reviewsStorage = new ReviewsStorage();
export type { GoogleReview, StoredReview };

