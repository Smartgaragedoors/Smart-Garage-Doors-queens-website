// Centralized business information for NAP consistency and SEO
import generatedReviews from '../data/googleReviews.generated.json';

// aggregateRating.reviewCount/ratingValue are kept live by syncing real Google
// reviews (see Post Automation's reviewsSyncService -> googleReviews.generated.json).
// Fall back to a fixed snapshot only if that file hasn't been populated yet.
const liveReviewCount = (generatedReviews as { reviewCount?: string | null }).reviewCount;
const rawLiveRatingValue = (generatedReviews as { ratingValue?: string | null }).ratingValue;
// Always one decimal place ("5" -> "5.0") to match existing "X.X★" display copy sitewide.
const liveRatingValue = rawLiveRatingValue ? Number(rawLiveRatingValue).toFixed(1) : null;

export const BUSINESS_INFO = {
  name: "Smart Garage Doors",
  legalName: "Smart Garage Doors",
  phone: "(914) 557-6816",
  phoneFormatted: "+19145576816",
  email: "info@smartestgaragedoors.com",
  website: "https://www.smartestgaragedoors.com",
  addresses: [
    {
      type: "primary",
      streetAddress: "141-24 70th Ave",
      addressLocality: "Flushing",
      addressRegion: "NY",
      postalCode: "11367",
      addressCountry: "US",
      latitude: 40.7282,
      longitude: -73.7949,
    },
    {
      type: "secondary",
      streetAddress: "71st 12th Ave",
      addressLocality: "Dyker Heights",
      addressRegion: "NY",
      postalCode: "11228",
      addressCountry: "US",
      latitude: 40.6189,
      longitude: -74.0126,
    },
    {
      type: "secondary",
      streetAddress: "31 Deerwood Road",
      addressLocality: "Suffern",
      addressRegion: "NY",
      postalCode: "10901",
      addressCountry: "US",
      latitude: 41.1148,
      longitude: -74.1496,
    },
  ],
  socialMedia: {
    facebook: "https://www.facebook.com/profile.php?id=61563773137785",
    instagram: "https://www.instagram.com/smartgaragedoorss/",
    googleMaps: "https://maps.app.goo.gl/GjfsFbH5kQ2smvdU8",
    googlePlaceId: "ChIJucuPoePGzGMRGWWH9YOmAX4",
    googleReviews: "https://www.google.com/maps/place/?q=place_id:ChIJucuPoePGzGMRGWWH9YOmAX4",
    googleWriteReview: "https://search.google.com/local/writereview?placeid=ChIJucuPoePGzGMRGWWH9YOmAX4",
  },
  openingHours: {
    monday: { opens: "00:00", closes: "23:59" },
    tuesday: { opens: "00:00", closes: "23:59" },
    wednesday: { opens: "00:00", closes: "23:59" },
    thursday: { opens: "00:00", closes: "23:59" },
    friday: { opens: "00:00", closes: "23:59" },
    saturday: { opens: "00:00", closes: "23:59" },
    sunday: { opens: "00:00", closes: "23:59" },
  },
  licenses: [
    { region: "NY", label: "NYC DCWP License #2130164-DCWP" },
    { region: "CT", label: "CT HIC Registration #HIC.0704479" },
  ],
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Bank Transfer", "Check"],
  aggregateRating: {
    ratingValue: liveRatingValue || "5.0",
    reviewCount: liveReviewCount || "479",
    bestRating: "5",
    worstRating: "1",
  },
  serviceAreas: [
    { type: "State", name: "New York" },
    { type: "State", name: "New Jersey" },
    { type: "State", name: "Connecticut" },
  ],

  /**
   * Concrete trust signals surfaced on location pages (dated specificity ranks
   * and converts better than generic "licensed & insured" claims).
   *
   * ⚠️ CONFIRM BEFORE RELYING ON THESE — they must be truthful for the legal
   * entity (LSA / false-advertising compliance):
   *  - establishedYear: carried over from the prior Suffern site's public claim.
   *  - jobsCompleted: leave null until you have a defensible figure; set a number
   *    (e.g. 5000) to surface a "5,000+ jobs completed" badge across location pages.
   */
  trust: {
    establishedYear: 2010,
    jobsCompleted: null as number | null,
    financingAvailable: true,
  },

  /**
   * Operational dispatch hubs (~60+ mile service radius each).
   * Used for homepage/hero messaging—honest positioning without implying a storefront in every town.
   */
  dispatchHubs: [
    {
      id: 'brooklyn',
      label: 'Brooklyn, NY',
      technician: 'Luka',
      coverageSummary: 'NYC, Long Island (Nassau & western Suffolk), and nearby North Shore communities',
    },
    {
      id: 'suffern',
      label: 'Suffern, NY',
      technician: 'Ben',
      coverageSummary: 'Rockland, Westchester, Hudson Valley corridor, Fairfield County CT, and Northern NJ',
    },
    {
      id: 'jackson-nj',
      label: 'Jackson, NJ',
      technician: 'Yitzi',
      coverageSummary: 'Monmouth, Ocean, Middlesex, and the central NJ shore markets',
    },
  ] as const,

  /**
   * High-intent, higher-income markets we explicitly serve (research: Gold Coast LI, Westchester, Fairfield CT, Monmouth shore).
   * For copy and internal linking—not a claim of physical locations in each town.
   */
  premiumServiceMarkets: {
    longIsland: ['Great Neck', 'Manhasset', 'Roslyn', 'Syosset', 'Oyster Bay'],
    westchester: ['Scarsdale', 'Rye', 'White Plains', 'Bronxville', 'Chappaqua'],
    fairfieldCounty: ['Greenwich', 'Stamford', 'Darien', 'New Canaan', 'Westport'],
    newJersey: ['Rumson', 'Holmdel', 'Colts Neck', 'Spring Lake', 'Princeton'],
  },
};

/** Customer-facing CTAs use "complimentary"; meta/FAQ copy keeps "free" for SEO. */
export const MARKETING_COPY = {
  bookEstimate: 'Request a Complimentary Estimate',
  getEstimate: 'Get a Complimentary Estimate',
  requestQuote: 'Request a Complimentary Quote',
  getQuote: 'Get a Complimentary Quote',
  getMyQuote: 'Get My Complimentary Quote',
  callForQuote: 'Call for a Complimentary Quote',
} as const;

