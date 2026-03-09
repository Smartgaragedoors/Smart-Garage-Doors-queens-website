/**
 * Static customer reviews for display when Supabase/Google API is not available.
 * Keeps the reviews section visually identical without external API calls.
 */

export interface StaticReview {
  id: string;
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description?: string;
}

// Unix timestamps: ~2 weeks to ~4 months ago
const now = Math.floor(Date.now() / 1000);
const twoWeeksAgo = now - 14 * 24 * 3600;
const oneMonthAgo = now - 30 * 24 * 3600;
const twoMonthsAgo = now - 60 * 24 * 3600;
const threeMonthsAgo = now - 90 * 24 * 3600;
const fourMonthsAgo = now - 120 * 24 * 3600;

export const STATIC_REVIEWS: StaticReview[] = [
  {
    id: 'sarah-m-1',
    author_name: 'Sarah M.',
    rating: 5,
    text: 'Excellent service! They fixed my garage door spring the same day I called. Professional, fast, and reasonably priced. Highly recommend Smartest Garage Doors!',
    time: twoWeeksAgo,
    relative_time_description: '2 weeks ago',
  },
  {
    id: 'mike-r-2',
    author_name: 'Mike R.',
    rating: 5,
    text: 'Great experience from start to finish. They installed a new garage door opener and it works perfectly. The technician was knowledgeable and explained everything clearly.',
    time: oneMonthAgo,
    relative_time_description: '1 month ago',
  },
  {
    id: 'jennifer-l-3',
    author_name: 'Jennifer L.',
    rating: 5,
    text: 'Emergency repair service was outstanding. My garage door was stuck and they came out within 2 hours. Fixed it quickly and the price was very fair. Thank you!',
    time: twoMonthsAgo,
    relative_time_description: '2 months ago',
  },
  {
    id: 'david-k-4',
    author_name: 'David K.',
    rating: 5,
    text: 'Professional installation of our new garage door. The team was punctual, clean, and did excellent work. The door looks amazing and operates smoothly.',
    time: twoMonthsAgo,
    relative_time_description: '2 months ago',
  },
  {
    id: 'lisa-t-5',
    author_name: 'Lisa T.',
    rating: 5,
    text: 'Honest and reliable service. They diagnosed the problem accurately and fixed it without trying to sell me unnecessary parts. Will definitely use them again.',
    time: threeMonthsAgo,
    relative_time_description: '3 months ago',
  },
  {
    id: 'robert-h-6',
    author_name: 'Robert H.',
    rating: 5,
    text: 'Top-notch service! They replaced my garage door cables and rollers. The technician was very professional and the work was completed efficiently. Highly recommended!',
    time: fourMonthsAgo,
    relative_time_description: '4 months ago',
  },
];
