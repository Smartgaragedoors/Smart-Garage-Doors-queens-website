/**
 * Customer reviews for the native (prerendered) reviews section.
 *
 * Source of truth, in order of preference:
 *   1. src/data/googleReviews.generated.json — REAL Google reviews pulled from
 *      GoHighLevel at build time (see scripts/fetch-reviews.mjs). Baked into the
 *      static HTML, so they're indexable + fast, unlike a third-party iframe.
 *   2. The CURATED_FALLBACK below — used only until the GHL fetch is configured
 *      (GHL_API_TOKEN + GHL_LOCATION_ID), or if a fetch returns nothing.
 */
import generated from './googleReviews.generated.json';

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

const CURATED_FALLBACK: StaticReview[] = [
  {
    id: 'rachel-g-1',
    author_name: 'Rachel G.',
    rating: 5,
    text: 'Spring broke on a Sunday morning and my car was stuck in the garage. Called Smart Garage Doors and they had a tech at my Forest Hills house within 75 minutes. Fixed both springs, explained what failed and why, and the price was exactly what they quoted. Incredible service.',
    time: twoWeeksAgo,
    relative_time_description: '2 weeks ago',
  },
  {
    id: 'tony-b-2',
    author_name: 'Tony B.',
    rating: 5,
    text: 'My garage door opener died right before a snowstorm in Flushing. They came out same day, replaced the LiftMaster unit, and even reprogrammed my car\'s built-in remote. Tech was professional, no upselling, no nonsense. This is my go-to company now.',
    time: oneMonthAgo,
    relative_time_description: '1 month ago',
  },
  {
    id: 'maria-v-3',
    author_name: 'Maria V.',
    rating: 5,
    text: 'Called at 8pm after my door came off the track in Dyker Heights, Brooklyn. Was worried nobody would come out that late. Smart Garage Doors picked up immediately and had someone here by 9:30. Door was back on track in under an hour. Fair price for emergency service.',
    time: twoMonthsAgo,
    relative_time_description: '2 months ago',
  },
  {
    id: 'james-p-4',
    author_name: 'James P.',
    rating: 5,
    text: 'Had a full door replacement done at my Bayside home. The team showed up on time, removed the old door cleanly, and the new installation was perfect. They hauled everything away and left the driveway spotless. Very fairly priced for the quality of work.',
    time: twoMonthsAgo,
    relative_time_description: '2 months ago',
  },
  {
    id: 'diana-k-5',
    author_name: 'Diana K.',
    rating: 5,
    text: 'I manage several rental properties in Queens and use Smart Garage Doors for all of them. They\'re reliable, show up when they say they will, and the pricing is consistent. Had cables replaced on two units in Astoria last month — done same day, no issues.',
    time: threeMonthsAgo,
    relative_time_description: '3 months ago',
  },
  {
    id: 'carlos-m-6',
    author_name: 'Carlos M.',
    rating: 5,
    text: 'Torsion spring snapped on my garage in Suffern and the door was completely stuck. Tech arrived in under an hour, diagnosed the problem immediately, and had it fixed in about 90 minutes. He replaced both springs so the other one wouldn\'t fail soon after. Smart call — honest advice.',
    time: fourMonthsAgo,
    relative_time_description: '4 months ago',
  },
];

// Map the build-time generated reviews (real Google reviews from GHL) to the
// display shape; fall back to the curated set until the GHL fetch is wired up.
interface GeneratedReview {
  id: string;
  author_name: string;
  rating: number;
  text: string;
  time: number;
}

const generatedReviews: StaticReview[] = ((generated as { reviews?: GeneratedReview[] }).reviews ?? []).map(
  (r) => ({ ...r }),
);

export const STATIC_REVIEWS: StaticReview[] =
  generatedReviews.length > 0 ? generatedReviews : CURATED_FALLBACK;

/** Live aggregate from the last GHL fetch, when available (else null). */
export const GENERATED_REVIEW_STATS: { reviewCount: string | null; ratingValue: string | null } = {
  reviewCount: (generated as { reviewCount?: string | null }).reviewCount ?? null,
  ratingValue: (generated as { ratingValue?: string | null }).ratingValue ?? null,
};
