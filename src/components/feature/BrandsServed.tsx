import { useState } from 'react';

// Real manufacturer logo marks are used here per the site owner's explicit,
// fully-informed decision (owner was told this carries trademark risk absent
// a licensing agreement and chose to proceed anyway). Logo files must live at
// /public/images/brands/{slug}-logo.svg. If a file is missing/404s, the
// onError handler below swaps that brand back to the original text-badge
// style so the section never renders broken.
//
// Files the owner needs to add to public/images/brands/ :
//   clopay-logo.svg        (Clopay)
//   amarr-logo.svg          (Amarr)
//   chi-logo.svg            (CHI)
//   liftmaster-logo.svg     (LiftMaster)
//   chamberlain-logo.svg    (Chamberlain)
//   wayne-dalton-logo.svg   (Wayne Dalton)
//   raynor-logo.svg         (Raynor)
//   genie-logo.svg          (Genie)
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

function BrandLogo({ name, slug }: { name: string; slug: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="inline-flex items-center bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm md:text-base px-4 py-2 rounded-full">
        {name}
      </span>
    );
  }

  return (
    <div className="inline-flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg px-5 py-3 h-16 md:h-20 w-32 md:w-40">
      <img
        src={`/images/brands/${slug}-logo.svg`}
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
