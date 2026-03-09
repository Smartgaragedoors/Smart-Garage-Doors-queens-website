/**
 * Topic-relevant blog images: houses with garage doors, garage interiors, and winter homes.
 * All from Unsplash (free to use). Each post gets a different but on-theme image.
 */
const U = "https://images.unsplash.com/photo-";
const Q = "?w=1200&h=600&fit=crop&q=80";

// Curated Unsplash IDs: garage doors, house exteriors, winter house, garage interior
const WHITE_HOUSE_GARAGE = `${U}1722247523663-09f0325ef054${Q}`;
const TWO_GARAGE_DOORS = `${U}1635108200386-b3ee405ed124${Q}`;
const MODERN_GARAGE_WHITE = `${U}1770756051811-1612ac8bedfa${Q}`;
const MODERN_HOUSE_BALCONY = `${U}1759355787121-eaef014a501d${Q}`;
const RED_BRICK_GARAGE = `${U}1694170314258-50abf46ddc16${Q}`;
const WINTER_SNOW_HOUSE = `${U}1599846801418-41948504b405${Q}`;
const GARAGE_INTERIOR = `${U}1726929219819-b90904f9d329${Q}`;
const HOUSE_GARAGE_DRIVEWAY = `${U}1692133188474-8c5591e6a6a8${Q}`;

export const BLOG_IMAGES: Record<
  string,
  { image: string; imageAlt: string }
> = {
  "signs-you-need-new-garage-door": {
    image: HOUSE_GARAGE_DRIVEWAY,
    imageAlt:
      "Residential home with garage door; when to replace vs repair for curb appeal.",
  },
  "cost-of-garage-door-spring-replacement": {
    image: GARAGE_INTERIOR,
    imageAlt:
      "Garage interior and door mechanism; spring replacement and pricing.",
  },
  "how-to-fix-garage-door-opener": {
    image: GARAGE_INTERIOR,
    imageAlt:
      "Garage interior; opener and motor troubleshooting.",
  },
  "signs-your-garage-door-spring-needs-replacement": {
    image: GARAGE_INTERIOR,
    imageAlt:
      "Garage interior and door mechanism; signs your garage door spring needs replacement.",
  },
  "how-to-fix-garage-door-wont-close": {
    image: TWO_GARAGE_DOORS,
    imageAlt:
      "Residential garage doors; troubleshooting when the door won't close.",
  },
  "winter-garage-door-maintenance-tips": {
    image: WINTER_SNOW_HOUSE,
    imageAlt:
      "House in winter with snow; winter garage door maintenance tips.",
  },
  "emergency-garage-door-repair-guide": {
    image: RED_BRICK_GARAGE,
    imageAlt:
      "Residential garage door; what to do when your door breaks in an emergency.",
  },
  "professional-vs-diy-garage-door-repair": {
    image: GARAGE_INTERIOR,
    imageAlt:
      "Garage and workshop; when to choose DIY vs professional repair.",
  },
  "garage-door-repair-cost-guide-2025": {
    image: WHITE_HOUSE_GARAGE,
    imageAlt:
      "Home with garage; garage door repair cost guide 2025.",
  },
  "garage-door-safety-tips-homeowner": {
    image: WHITE_HOUSE_GARAGE,
    imageAlt:
      "Home with visible garage door; safety tips every homeowner should know.",
  },
  "how-to-choose-right-garage-door": {
    image: MODERN_GARAGE_WHITE,
    imageAlt:
      "Modern garage doors on a white house; how to choose the right style.",
  },
  "garage-door-roller-replacement-cost": {
    image: GARAGE_INTERIOR,
    imageAlt:
      "Garage door and hardware; roller replacement cost guide 2025.",
  },
  "chain-drive-vs-belt-drive-opener": {
    image: GARAGE_INTERIOR,
    imageAlt:
      "Garage interior; chain drive vs belt drive opener comparison.",
  },
  "queens-garage-door-repair-cost": {
    image: HOUSE_GARAGE_DRIVEWAY,
    imageAlt:
      "Residential garage; garage door repair cost in Queens NY 2025.",
  },
  "brooklyn-garage-door-repair-cost": {
    image: WHITE_HOUSE_GARAGE,
    imageAlt:
      "House with garage; garage door repair cost in Brooklyn NY 2025.",
  },
  "stamford-ct-garage-door-repair": {
    image: MODERN_HOUSE_BALCONY,
    imageAlt:
      "Suburban home with garage; professional garage door repair in Stamford CT.",
  },
  "white-plains-ny-garage-door-service": {
    image: TWO_GARAGE_DOORS,
    imageAlt:
      "Home with garage doors; garage door service in White Plains NY.",
  },
  "long-island-garage-door-repair": {
    image: MODERN_GARAGE_WHITE,
    imageAlt:
      "Residential garage; garage door repair serving Nassau and Suffolk.",
  },
  "westchester-county-garage-door-service": {
    image: WHITE_HOUSE_GARAGE,
    imageAlt:
      "Westchester home; expert garage door repair and installation.",
  },
  "greenwich-ct-garage-door-repair": {
    image: MODERN_HOUSE_BALCONY,
    imageAlt:
      "Home with garage; garage door repair in Greenwich CT.",
  },
  "staten-island-garage-door-repair": {
    image: RED_BRICK_GARAGE,
    imageAlt:
      "Residential garage door; garage door repair in Staten Island NY.",
  },
  "flushing-ny-garage-door-repair": {
    image: HOUSE_GARAGE_DRIVEWAY,
    imageAlt:
      "Residential garage; garage door repair in Flushing NY.",
  },
  "fairfield-ct-garage-door-service": {
    image: MODERN_GARAGE_WHITE,
    imageAlt:
      "Home with garage; garage door service in Fairfield CT.",
  },
  "darien-ct-garage-door-repair": {
    image: TWO_GARAGE_DOORS,
    imageAlt:
      "Suburban home; garage door repair in Darien CT.",
  },
  "suffern-ny-garage-door-service": {
    image: RED_BRICK_GARAGE,
    imageAlt:
      "Residential garage; garage door service in Suffern NY.",
  },
};

const DEFAULT_IMAGE = "/hero-van-1280.webp";
const DEFAULT_ALT =
  "Smart Garage Doors – professional garage door repair and installation.";

export function getBlogImage(slug: string): {
  image: string;
  imageAlt: string;
} {
  const entry = BLOG_IMAGES[slug];
  if (entry) return entry;
  return { image: DEFAULT_IMAGE, imageAlt: DEFAULT_ALT };
}
