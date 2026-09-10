import { useState } from 'react';

// Real manufacturer logo marks are used here per the site owner's explicit,
// fully-informed decision (owner was told this carries trademark risk absent
// a licensing agreement and chose to proceed anyway).
//
// Logos are discovered at BUILD time: drop a file named {slug}-logo.svg into
// src/assets/brands/ and that brand switches from a text badge to its logo on
// the next deploy. Brands with no file render as text badges.
//
// Why not /public/images/brands/ with an onError fallback (the old approach):
// the files were never added, so the prerendered homepage shipped eight <img>
// tags that 404'd on every load. On a prerendered page the image can fail
// before React hydrates and attaches onError, leaving a broken-image icon the
// fallback never replaces. Build-time discovery means no request is made for
// a logo that doesn't exist.
//
// Files the owner can add to src/assets/brands/ :
//   clopay-logo.svg, amarr-logo.svg, chi-logo.svg, liftmaster-logo.svg,
//   chamberlain-logo.svg, wayne-dalton-logo.svg, raynor-logo.svg, genie-logo.svg
const LOGO_URLS = import.meta.glob('../../assets/brands/*-logo.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function logoUrlFor(slug: string): string | undefined {
  return LOGO_URLS[`../../assets/brands/${slug}-logo.svg`];
}

const BRANDS = [
  { name: 'Clopay', slug: 'clopay' },
  { name: 'Amarr', slug: 'amarr' },
  { name: 'CHI', slug: 'chi' },
  { name: 'LiftMaster', slug: 'liftmaster' },
  { name: 'Chamberlain', slug: 'chamberlain' },
  { name: 'Wayne Dalton', slug: 'wayne-dalton' },
  { name: 'Raynor', slug: 'raynor' },
  { name: 'Genie', slug: 'genie' },
];

function TextBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm md:text-base px-4 py-2 rounded-full">
      {name}
    </span>
  );
}

function BrandLogo({ name, slug }: { name: string; slug: string }) {
  const src = logoUrlFor(slug);
  const [failed, setFailed] = useState(false);

  if (!src || failed) return <TextBadge name={name} />;

  return (
    <div className="inline-flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg px-5 py-3 h-16 md:h-20 w-32 md:w-40">
      <img
        src={src}
        alt={`${name} logo`}
        className="h-10 md:h-12 max-w-full object-contain grayscale opacity-70 transition-all duration-200 hover:grayscale-0 hover:opacity-100"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function BrandsServed() {
  return (
    <section className="bg-white border-y border-gray-200 py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          We Service All Major Brands
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
          Whatever's on your garage, our technicians have trained on it — no brand steers us toward a sale.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2.5 md:gap-3">
          {BRANDS.map((brand) => (
            <BrandLogo key={brand.slug} name={brand.name} slug={brand.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
