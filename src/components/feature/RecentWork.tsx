import { useState, memo, useCallback, useRef, useEffect } from 'react';
import { getCFImageUrl } from '../../data/cloudflareImages';

interface Photo {
  image: string;
  alt: string;
  title: string;
  position?: string;
}

const VISIBLE = 3;
const GAP = 16; // px between cards

const photos: Photo[] = [
  {
    image: getCFImageUrl('7afb363e-9199-4fb7-599f-c037e1439b00', 'card'),
    alt: 'Dan, Smart Garage Doors technician, smiling while installing a garage door opener',
    title: 'Opener Install — Queens',
    position: 'object-center',
  },
  {
    image: '/images/garage-door-repair-team-job-site-smart-garage-doors.webp',
    alt: 'Smart Garage Doors two-man team at a residential brick home installing a garage door',
    title: 'Door Installation — Westchester',
    position: 'object-bottom',
  },
  {
    image: getCFImageUrl('1fcc6a3f-d3c8-4177-beca-3346198edb00', 'card'),
    alt: 'Ben, Smart Garage Doors technician, smiling while working on cable and roller system',
    title: 'Cable & Roller Repair',
    position: 'object-center',
  },
  {
    image: '/images/garage-door-repair-technician-dan-smart-garage-doors.jpg',
    alt: 'Smart Garage Doors technician Dan repairing a garage door panel on-site',
    title: 'Panel Repair — Queens, NY',
    position: 'object-center',
  },
  {
    image: getCFImageUrl('850dffb2-5b15-48d3-f2a5-0d4d1c95a200', 'card'),
    alt: 'Smart Garage Doors technician drilling into garage door track hardware',
    title: 'Track Installation',
    position: 'object-center',
  },
  {
    image: '/images/garage-door-panel-repair-dan-hammer-smart-garage-doors.jpg',
    alt: 'Smart Garage Doors technician working on garage door panel',
    title: 'Panel Replacement',
    position: 'object-center',
  },
  {
    image: '/images/commercial-garage-door-repair-nyc-smart-garage-doors.jpg',
    alt: 'Smart Garage Doors technician servicing large commercial garage doors',
    title: 'Commercial Repair — NYC',
    position: 'object-center',
  },
  {
    image: '/images/satisfied-customer-new-garage-door-smart-garage-doors.jpg',
    alt: 'Happy homeowner with Smart Garage Doors technician after installation',
    title: 'Happy Customer — Bronx',
    position: 'object-top',
  },
  {
    image: getCFImageUrl('45d417a3-6fc3-4605-668e-f2742f2f4100', 'card'),
    alt: 'Interior view of a newly installed contemporary glass-panel garage door',
    title: 'Glass Door Install — CT',
    position: 'object-center',
  },
  {
    image: '/images/garage-door-repair-technician-ben-smart-garage-doors.jpg',
    alt: 'Smart Garage Doors technician Ben working on garage door installation',
    title: 'Spring & Track Service',
    position: 'object-center',
  },
];

const MAX_SLIDE = photos.length - VISIBLE;

function RecentWork() {
  const [slide, setSlide] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const clipRef = useRef<HTMLDivElement>(null);

  // Measure container and recompute card width on resize
  useEffect(() => {
    const measure = () => {
      if (!clipRef.current) return;
      const total = clipRef.current.offsetWidth;
      // card width = (container - gaps between visible cards) / visible count
      setCardWidth((total - GAP * (VISIBLE - 1)) / VISIBLE);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (clipRef.current) ro.observe(clipRef.current);
    return () => ro.disconnect();
  }, []);

  const prev = useCallback(() => setSlide((s) => Math.max(0, s - 1)), []);
  const next = useCallback(() => setSlide((s) => Math.min(MAX_SLIDE, s + 1)), []);

  const canPrev = slide > 0;
  const canNext = slide < MAX_SLIDE;

  // Pixel offset per slide = one card + one gap
  const offset = slide * (cardWidth + GAP);

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header row with arrows */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Recent <span className="text-orange-500">Jobs</span>
            </h2>
            <p className="text-gray-500 mt-1 text-sm md:text-base">
              Real work, real customers — no stock photos.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all ${
                canPrev
                  ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Previous"
              type="button"
            >
              <i className="ri-arrow-left-line text-lg" aria-hidden="true" />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all ${
                canNext
                  ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Next"
              type="button"
            >
              <i className="ri-arrow-right-line text-lg" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Desktop carousel — pixel-based, no percentage math */}
        <div ref={clipRef} className="hidden md:block overflow-hidden w-full">
          {cardWidth > 0 && (
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(-${offset}px)`,
              }}
            >
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md bg-white"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="overflow-hidden" style={{ height: `${Math.round(cardWidth * 0.75)}px` }}>
                    <img
                      src={photo.image}
                      alt={photo.alt}
                      className={`w-full h-full object-cover ${photo.position ?? 'object-center'} hover:scale-105 transition-transform duration-500`}
                      width={600}
                      height={450}
                      loading={i < VISIBLE ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="px-4 py-3 flex items-center gap-2">
                    <i className="ri-map-pin-2-line text-orange-500 text-sm flex-shrink-0" aria-hidden="true" />
                    <p className="text-sm font-semibold text-gray-800 truncate">{photo.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dot indicators */}
        <div className="hidden md:flex justify-center gap-2 mt-5">
          {Array.from({ length: MAX_SLIDE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === slide ? 'bg-orange-500 w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Slide ${i + 1}`}
              type="button"
            />
          ))}
        </div>

        {/* Mobile — 2-col grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {photos.map((photo, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className={`w-full h-full object-cover ${photo.position ?? 'object-center'}`}
                  width={400}
                  height={300}
                  loading="lazy"
                />
              </div>
              <div className="px-3 py-2 flex items-center gap-1.5">
                <i className="ri-map-pin-2-line text-orange-500 text-xs flex-shrink-0" aria-hidden="true" />
                <p className="text-xs font-semibold text-gray-700 truncate">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default memo(RecentWork);
