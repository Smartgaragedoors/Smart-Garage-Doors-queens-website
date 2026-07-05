// Text-only "brands serviced" trust row. Deliberately NOT a logo wall — using
// real manufacturer logo marks without a licensing agreement is a trademark
// risk, so brand names are rendered as styled text badges (typography only,
// no imagery). These are the same brands already named in FAQ answers across
// the site (see src/config/locations.ts, commercial-garage-door-repair,
// queens-ny service-area page).
const BRANDS = [
  'Clopay',
  'Amarr',
  'CHI',
  'LiftMaster',
  'Chamberlain',
  'Wayne Dalton',
  'Raynor',
  'Genie',
];

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
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="inline-flex items-center bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm md:text-base px-4 py-2 rounded-full"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
