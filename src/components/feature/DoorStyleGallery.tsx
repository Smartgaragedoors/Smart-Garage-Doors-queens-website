import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { trackBookNowClick, trackEvent, trackPhoneClick } from '../../utils/analytics';

/**
 * "Choose your door" gallery for /garage-door-installation/.
 *
 * EVERY photo here is a door Smart Garage Doors installed (owner Drive / job
 * photos). Do not add stock photos, manufacturer renders, or screenshots —
 * the section promises "real doors we've installed". Two images that used to
 * sit in /public/images (a Google Images screenshot of a carriage-house door
 * and a manufacturer-style render) were deliberately left out for that reason.
 *
 * Price examples are real invoice totals (QuickBooks), shown as what the
 * customer paid — never as a quote. Colours are approximate CSS swatches of
 * common factory colours, not a manufacturer chart.
 */

type StyleTag = 'traditional' | 'modern' | 'wood' | 'windows' | 'commercial';
type FilterId = 'all' | StyleTag;

interface DoorPhoto {
  id: string;
  title: string;
  src: string;
  src480: string;
  width: number;
  height: number;
  alt: string;
  description: string;
  details: string[];
  tags: StyleTag[];
  /** object-position for the 4:3 card crop (the viewer always shows the full photo) */
  position?: string;
}

const DOORS: DoorPhoto[] = [
  {
    id: 'modern-flush-wood-grain',
    title: 'Modern flush panel, wood-grain finish',
    src: '/images/gallery/modern-flush-wood-grain-garage-door-side-windows-900.webp',
    src480: '/images/gallery/modern-flush-wood-grain-garage-door-side-windows-480.webp',
    width: 900, height: 506,
    alt: 'Modern flush-panel garage door in a wood-grain finish with a column of long windows on one side and black trim — installed by Smart Garage Doors',
    description: 'Smooth, flat panels in a warm wood-grain steel finish, with a stacked column of long windows off to one side. Clean lines that suit modern and renovated homes.',
    details: ['Flush (flat) panels', 'Wood-grain steel finish', 'Offset long windows', 'Black trim surround', 'Double-car width'],
    tags: ['modern', 'wood', 'windows'],
    position: 'object-left',
  },
  {
    id: 'full-view-glass',
    title: 'Full-view aluminum & glass',
    src: '/images/gallery/full-view-aluminum-glass-garage-door-900.webp',
    src480: '/images/gallery/full-view-aluminum-glass-garage-door-480.webp',
    width: 900, height: 1200,
    alt: 'Full-view garage door with a black aluminum frame and glass panels, torsion springs above and a wall-mounted opener — installed by Smart Garage Doors',
    description: 'A black aluminum frame with glass lites and a solid bottom section. Fills the space with daylight — popular for showrooms, workshops, and modern homes.',
    details: ['Aluminum frame', 'Glass lites + solid bottom panel', 'Torsion spring system', 'Wall-mounted opener saves ceiling space'],
    tags: ['modern', 'windows', 'commercial'],
  },
  {
    id: 'almond-arched-windows',
    title: 'Short raised panel with arched windows',
    src: '/images/gallery/almond-short-raised-panel-garage-door-arched-windows-900.webp',
    src480: '/images/gallery/almond-short-raised-panel-garage-door-arched-windows-480.webp',
    width: 900, height: 1195,
    alt: 'Almond short raised-panel double garage door with a row of arched window inserts under a brick facade — installed by Smart Garage Doors',
    description: 'Classic short raised panels in almond with a row of arched window inserts. The most requested look on brick attached homes.',
    details: ['Short raised panels', 'Almond color', 'Arched window inserts', 'Double-car width'],
    tags: ['traditional', 'windows'],
    position: 'object-top',
  },
  {
    id: 'wood-grain-long-panel-windows',
    title: 'Long raised panel, wood-grain with windows',
    src: '/images/jobs/wood-grain-raised-panel-garage-door-install.webp',
    src480: '/images/jobs/wood-grain-raised-panel-garage-door-install-480.webp',
    width: 900, height: 1250,
    alt: 'Wood-grain long raised-panel garage door with a row of windows on new construction — installed by Smart Garage Doors',
    description: 'Long raised panels in a wood-grain finish with a window row on top. The warmth of wood without the upkeep.',
    details: ['Long raised panels', 'Wood-grain steel finish', 'Top window row', 'Single-car width'],
    tags: ['traditional', 'wood', 'windows'],
  },
  {
    id: 'brown-long-panel-clear-windows',
    title: 'Long raised panel in brown, clear top row',
    src: '/images/jobs/brown-raised-panel-double-garage-doors-brick-home.webp',
    src480: '/images/jobs/brown-raised-panel-double-garage-doors-brick-home-480.webp',
    width: 900, height: 506,
    alt: 'Brown long raised-panel garage door with clear-glass top windows on a brick home — installed by Smart Garage Doors',
    description: 'Long raised panels in brown with a clear-glass top section. Pairs well with red brick and dark trim.',
    details: ['Long raised panels', 'Brown color', 'Clear-glass top windows', 'Single-car width'],
    tags: ['traditional', 'windows'],
  },
  {
    id: 'dark-wood-grain-short-panel',
    title: 'Short raised panel, dark wood-grain',
    src: '/images/jobs/mahogany-wood-grain-raised-panel-garage-door.webp',
    src480: '/images/jobs/mahogany-wood-grain-raised-panel-garage-door-480.webp',
    width: 900, height: 1364,
    alt: 'Dark wood-grain short raised-panel garage door with no windows — installed by Smart Garage Doors',
    description: 'Short raised panels in a deep wood-grain finish, no windows — for privacy and a rich, traditional look.',
    details: ['Short raised panels', 'Dark wood-grain finish', 'No windows (privacy)', 'Single-car width'],
    tags: ['traditional', 'wood'],
  },
  {
    id: 'white-flush-plain',
    title: 'Flush panel in white',
    src: '/images/jobs/flush-panel-garage-door-new-install.webp',
    src480: '/images/jobs/flush-panel-garage-door-new-install-480.webp',
    width: 900, height: 1200,
    alt: 'White flush-panel garage door with a keypad on the frame, freshly installed — Smart Garage Doors',
    description: 'Plain, flat white panels. Simple, modern, and easy to keep clean — shown here with a wireless keypad on the frame.',
    details: ['Flush (flat) panels', 'White', 'No windows', 'Wireless keypad'],
    tags: ['modern'],
  },
  {
    id: 'white-flush-square-windows',
    title: 'Flush panel with square window grid',
    src: '/images/jobs/wide-double-garage-door-window-inserts.webp',
    src480: '/images/jobs/wide-double-garage-door-window-inserts-480.webp',
    width: 900, height: 675,
    alt: 'Extra-wide white flush-panel garage door with a row of square grid windows — installed by Smart Garage Doors',
    description: 'Flat white panels with a row of square grid windows across the top. A crisp look on an extra-wide double opening.',
    details: ['Flush (flat) panels', 'White', 'Square grid window row', 'Extra-wide double'],
    tags: ['modern', 'windows'],
  },
  {
    id: 'white-raised-decorative-windows',
    title: 'Raised panel pair with decorative windows',
    src: '/images/jobs/white-garage-doors-decorative-windows-brick-building.webp',
    src480: '/images/jobs/white-garage-doors-decorative-windows-brick-building-480.webp',
    width: 900, height: 678,
    alt: 'Two white raised-panel garage doors with decorative windows on an attached brick home — installed by Smart Garage Doors',
    description: 'Two single doors in white with decorative window inserts on an attached brick home — a very common setup across Queens and Brooklyn.',
    details: ['Raised panels', 'White', 'Decorative window inserts', 'Two single-car doors'],
    tags: ['traditional', 'windows'],
  },
  {
    id: 'commercial-dock-door',
    title: 'Commercial insulated dock door',
    src: '/images/jobs/commercial-loading-dock-door-installation.webp',
    src480: '/images/jobs/commercial-loading-dock-door-installation-480.webp',
    width: 900, height: 1200,
    alt: 'White insulated commercial loading-dock door installed at a warehouse — Smart Garage Doors',
    description: 'An insulated sectional door for a warehouse loading dock, built for high daily cycles.',
    details: ['Insulated sectional', 'High-cycle hardware', 'Loading-dock opening'],
    tags: ['commercial'],
  },
];

const FILTERS: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All doors' },
  { id: 'traditional', label: 'Raised panel' },
  { id: 'modern', label: 'Modern & flush' },
  { id: 'wood', label: 'Wood-look' },
  { id: 'windows', label: 'With windows' },
  { id: 'commercial', label: 'Commercial' },
];

// Approximate on-screen swatches of common factory colours — names and shades vary by brand.
const COLORS: { name: string; swatch: string }[] = [
  { name: 'White', swatch: '#F4F4F1' },
  { name: 'Almond', swatch: '#E6D9BF' },
  { name: 'Sandtone', swatch: '#D2C1A0' },
  { name: 'Gray', swatch: '#8A8E92' },
  { name: 'Brown', swatch: '#5B4331' },
  { name: 'Black', swatch: '#1E1E1E' },
  { name: 'Wood-grain', swatch: 'linear-gradient(135deg,#6B3F22 0%,#A2653A 45%,#7A4A28 70%,#5E361D 100%)' },
];

// Real invoice totals (QuickBooks). What the customer actually paid — not quotes.
const RECENT_PRICES: { job: string; total: string; when: string }[] = [
  { job: '8×7 insulated door with a complete new spring and track system, installed', total: '$1,900', when: 'Staten Island · Aug 2026' },
  { job: '9×6′6″ white insulated colonial door — springs, cables, rollers and lock included', total: '$2,041', when: 'Aug 2025' },
  { job: '8×7 colonial door with windows, Wi-Fi opener and keypad, old door hauled away', total: '$3,198', when: 'Aug 2026' },
  { job: '15×6′6″ double door with windows, quiet Wi-Fi belt opener, low-headroom tracks, molding, old door removed', total: '$3,587', when: 'Apr 2025' },
  { job: '7′6″×6′6″ white insulated flush door with new white capping and molding plus a Genie opener', total: '$5,050', when: 'Bronx · Aug 2026' },
];

const PHONE_DISPLAY = '(914) 557-6816';
const PHONE_TEL = '+19145576816';

function DoorStyleGallery() {
  const [filter, setFilter] = useState<FilterId>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const visible = useMemo(
    () => (filter === 'all' ? DOORS : DOORS.filter((d) => d.tags.includes(filter as StyleTag))),
    [filter],
  );
  const counts = useMemo(() => {
    const c: Record<FilterId, number> = { all: DOORS.length, traditional: 0, modern: 0, wood: 0, windows: 0, commercial: 0 };
    DOORS.forEach((d) => d.tags.forEach((t) => { c[t] += 1; }));
    return c;
  }, []);

  const open = openIndex !== null ? visible[openIndex] : null;

  const openAt = useCallback((i: number, el: HTMLElement) => {
    triggerRef.current = el;
    setOpenIndex(i);
    trackEvent('door_style_view', { category: 'Installation Gallery', label: visible[i]?.id });
  }, [visible]);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    setOpenIndex((i) => (i === null ? i : (i + dir + visible.length) % visible.length));
  }, [visible.length]);

  // Deep links (/garage-door-installation/#door-styles) land before this lazily
  // loaded section exists, so the browser's own hash scroll can miss it.
  useEffect(() => {
    if (window.location.hash !== '#door-styles') return;
    const id = requestAnimationFrame(() => document.getElementById('door-styles')?.scrollIntoView());
    return () => cancelAnimationFrame(id);
  }, []);

  // Viewer: Esc / arrows, body scroll lock, focus the close button on open.
  useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, step]);

  return (
    <section id="door-styles" className="py-12 md:py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-600 mb-2">Choose your door</p>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
            Real Doors We've Installed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Every photo below is a door our crew put in — no stock images. Tap one to see it full size,
            then get a quote for the style you like.
          </p>
        </div>

        {/* Filter chips — one scrollable row on phones */}
        <div
          className="flex gap-2 overflow-x-auto pb-2 mb-5 md:mb-6 md:flex-wrap md:justify-center md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0"
          role="group"
          aria-label="Filter doors by style"
        >
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => { setFilter(f.id); setOpenIndex(null); }}
                aria-pressed={active}
                className={`shrink-0 inline-flex items-center gap-1.5 rounded-full border px-4 py-2 min-h-[44px] text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
                  active
                    ? 'bg-blue-900 border-blue-900 text-white'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-orange-400 hover:text-orange-700'
                }`}
              >
                {f.label}
                <span className={`text-xs font-medium ${active ? 'text-blue-100' : 'text-gray-500'}`}>{counts[f.id]}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {visible.map((door, i) => (
            <li key={door.id} className="flex">
              <button
                type="button"
                onClick={(e) => openAt(i, e.currentTarget)}
                className="group w-full h-full flex flex-col text-left rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-orange-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                aria-label={`${door.title} — view full size`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={door.src}
                    srcSet={`${door.src480} 480w, ${door.src} 900w`}
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 31vw, 240px"
                    alt={door.alt}
                    width={door.width}
                    height={door.height}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover ${door.position ?? 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                  />
                </div>
                <div className="px-3 py-2.5 flex-1 flex flex-col">
                  <p className="text-sm font-semibold text-gray-900 leading-snug">{door.title}</p>
                  <p className="hidden md:flex items-center gap-1 text-xs text-orange-700 mt-auto pt-1 font-medium">
                    View &amp; get a quote <i className="ri-arrow-right-line" aria-hidden="true" />
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* Colours + "don't see it" */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-1">Common colors</h3>
            <p className="text-sm text-gray-600 mb-4">
              Most doors come in these factory colors. Names and exact shades vary by brand, so we bring real samples to your free estimate.
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-3">
              {COLORS.map((c) => (
                <li key={c.name} className="flex items-center gap-2 text-sm text-gray-700">
                  <span
                    className="inline-block w-8 h-8 rounded-full border border-gray-300 shadow-inner"
                    style={{ background: c.swatch }}
                    aria-hidden="true"
                  />
                  {c.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 md:p-6 flex flex-col">
            <h3 className="text-lg font-bold text-blue-900 mb-1">Don't see your style?</h3>
            <p className="text-sm text-gray-700 mb-4">
              Carriage-house, custom wood, extra-wide or low-headroom openings — we install those too.
              Send us a photo of your garage and a picture of a door you like, and we'll quote it.
            </p>
            <div className="mt-auto flex flex-wrap gap-3">
              <a
                href="/photo-estimate/"
                onClick={() => trackEvent('cta_click', { category: 'Installation Gallery', action: 'photo_estimate', label: 'installation_gallery' })}
                className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-3 min-h-[44px] transition-colors"
              >
                <i className="ri-camera-line" aria-hidden="true" />
                Send a photo for a quote
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                onClick={() => trackPhoneClick(PHONE_DISPLAY, 'installation_gallery')}
                className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-blue-900 text-blue-900 hover:bg-white font-semibold px-5 py-3 min-h-[44px] transition-colors"
              >
                <i className="ri-phone-fill" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* Real invoice totals */}
        <div className="mt-10">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-1">What recent installs actually cost</h3>
          <p className="text-sm text-gray-600 mb-4 max-w-3xl">
            Totals from our own invoices — what the customer paid, with tax and fees included where they applied.
            Every opening is different, so your exact total is quoted before any work starts.
          </p>
          <ul className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
            {RECENT_PRICES.map((p) => (
              <li key={p.job} className="flex items-start justify-between gap-4 px-4 md:px-5 py-3">
                <div>
                  <p className="text-sm md:text-base text-gray-800">{p.job}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{p.when}</p>
                </div>
                <p className="text-base md:text-lg font-bold text-gray-900 tabular-nums whitespace-nowrap">{p.total}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Full-size viewer */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-3 md:p-6"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="door-viewer-title"
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white shadow-2xl grid md:grid-cols-[1.35fr_1fr]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-gray-900 flex items-center justify-center min-h-[240px]">
              <img
                src={open.src}
                alt={open.alt}
                width={open.width}
                height={open.height}
                className="w-full h-auto max-h-[60vh] md:max-h-[88vh] object-contain"
              />
              {visible.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous door"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  >
                    <i className="ri-arrow-left-s-line text-2xl" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next door"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  >
                    <i className="ri-arrow-right-s-line text-2xl" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            <div className="p-5 md:p-6 flex flex-col">
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute top-2 right-2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <i className="ri-close-line text-2xl" aria-hidden="true" />
              </button>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-600 mb-1">
                Installed by our crew{visible.length > 1 && openIndex !== null ? ` · ${openIndex + 1} of ${visible.length}` : ''}
              </p>
              <h3 id="door-viewer-title" className="text-xl md:text-2xl font-bold text-blue-900 mb-2 pr-10">{open.title}</h3>
              <p className="text-gray-700 mb-4">{open.description}</p>
              <ul className="space-y-1.5 mb-6">
                {open.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                    <i className="ri-checkbox-circle-fill text-green-600 mt-0.5" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={`/book-now/?style=${encodeURIComponent(open.title)}`}
                  onClick={() => trackBookNowClick('installation_gallery')}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-3.5 min-h-[48px] transition-colors"
                >
                  <i className="ri-price-tag-3-line" aria-hidden="true" />
                  Get a quote for this style
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  onClick={() => trackPhoneClick(PHONE_DISPLAY, 'installation_gallery')}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-900 text-blue-900 hover:bg-blue-50 font-semibold px-5 py-3 min-h-[44px] transition-colors"
                >
                  <i className="ri-phone-fill" aria-hidden="true" />
                  Call {PHONE_DISPLAY}
                </a>
                <p className="text-xs text-gray-500 text-center">
                  Free estimate — we measure your opening and quote the total before any work.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(DoorStyleGallery);
