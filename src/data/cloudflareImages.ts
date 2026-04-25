export type CFVariant = 'thumbnail' | 'card' | 'hero';

export interface CloudflareImageItem {
  id: string;
  alt: string;
  variant?: CFVariant;
  category?: string;
  fallbackSrc?: string;
}

export const CF_IMAGE_BASE = 'https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg';

// Centralized image mapping — all Cloudflare Images IDs
export const cloudflareImages: Record<string, CloudflareImageItem> = {

  // ── Homepage ────────────────────────────────────────────────────────────────
  homeHero: {
    id: '54256736-9e5d-48d2-7b33-3bab7fd66900',
    alt: 'Smart Garage Doors service van parked in front of a residential garage in Queens NY',
    variant: 'hero',
    category: 'homepage',
    fallbackSrc: '/hero-van-1280.jpg',
  },

  // ── Team / Technician ───────────────────────────────────────────────────────
  teamPhoto: {
    id: '99840baa-bff1-4582-34f0-95ee312ac800',
    alt: 'Smart Garage Doors technician team in uniform — professional garage door repair and installation crew',
    variant: 'card',
    category: 'team',
    fallbackSrc: '/images/garage-door-repair-team-job-site-smart-garage-doors.webp',
  },
  techDanSmiling: {
    id: '7afb363e-9199-4fb7-599f-c037e1439b00',
    alt: 'Dan, Smart Garage Doors technician, smiling while installing a garage door opener — friendly, professional service',
    variant: 'card',
    category: 'team',
    fallbackSrc: '/images/garage-door-repair-technician-dan-smart-garage-doors.jpg',
  },
  techBenCable: {
    id: '1fcc6a3f-d3c8-4177-beca-3346198edb00',
    alt: 'Ben, Smart Garage Doors technician, working on garage door cable and roller system — expert cable repair service',
    variant: 'card',
    category: 'team',
    fallbackSrc: '/images/garage-door-repair-technician-ben-smart-garage-doors.jpg',
  },
  techDanDrilling: {
    id: '850dffb2-5b15-48d3-f2a5-0d4d1c95a200',
    alt: 'Dan, Smart Garage Doors technician, installing garage door track hardware at a residential property',
    variant: 'card',
    category: 'team',
    fallbackSrc: '/images/garage-door-panel-repair-dan-hammer-smart-garage-doors.jpg',
  },

  // ── Service images ──────────────────────────────────────────────────────────
  doorInteriorWindows: {
    id: '45d417a3-6fc3-4605-668e-f2742f2f4100',
    alt: 'Interior view of a newly installed contemporary garage door with glass panels and epoxy floor — Smart Garage Doors installation',
    variant: 'card',
    category: 'service',
    fallbackSrc: '/images/garage-door-installation-team-on-site.jpg',
  },
  openerRepairHero: {
    id: '9c8e2d0e-321d-4470-ba7c-5c1ee803d700',
    alt: 'Smart Garage Doors technician performing garage door opener repair in Queens NY',
    variant: 'hero',
    category: 'service',
    fallbackSrc: '/images/garage-door-opener-repair-queens-ny-technician.jpg',
  },
  paintJobBefore: {
    id: 'f83213e9-a94b-4094-0314-ec7474796000',
    alt: 'Garage door painting and refinishing service — technician painting door frame on upscale white home',
    variant: 'card',
    category: 'service',
    fallbackSrc: '/images/garage-door-repair-on-site-2.jpg',
  },

  // ── Location heroes ─────────────────────────────────────────────────────────
  queensHero: {
    id: '251bb224-5425-49d4-7ab9-6fceaf7a3b00',
    alt: 'Smart Garage Doors technician performing garage door repair in Queens NY',
    variant: 'hero',
    category: 'location',
    fallbackSrc: '/images/garage-door-repair-queens-ny-technician.jpg',
  },
  brooklynHero: {
    id: '98b4a7fc-77e3-433e-65c9-c5c7be8bc000',
    alt: 'Smart Garage Doors technician performing garage door repair in Brooklyn NY',
    variant: 'hero',
    category: 'location',
    fallbackSrc: '/images/garage-door-repair-brooklyn-ny-technician.jpg',
  },
  suffernHero: {
    id: '72cf9dc6-b05d-489e-29d5-16ea0a77d200',
    alt: 'Smart Garage Doors technician fixing a garage door in Suffern NY',
    variant: 'hero',
    category: 'location',
    fallbackSrc: '/images/garage-door-repair-suffern-ny-technician.jpg',
  },
  westchesterHero: {
    id: '69d26d48-0700-425b-bfcd-980ccc4bbf00',
    alt: 'Smart Garage Doors technician performing garage door opener installation in Westchester County NY',
    variant: 'hero',
    category: 'location',
    fallbackSrc: '/images/garage-door-repair-westchester-ny-technician.jpg',
  },

  // ── Landing page ────────────────────────────────────────────────────────────
  lpWhatsappHero: {
    id: '99840baa-bff1-4582-34f0-95ee312ac800',
    alt: 'Smart Garage Doors professional technician team',
    variant: 'hero',
    category: 'landing',
    fallbackSrc: '/images/smart-garage-doors-team-queens-ny-technicians.jpg',
  },
};

export function getCFImageUrl(id: string, variant: CFVariant = 'card'): string {
  return `${CF_IMAGE_BASE}/${encodeURIComponent(id)}/${variant}`;
}

export function getCloudflareImage(key: keyof typeof cloudflareImages): CloudflareImageItem {
  return cloudflareImages[key]!;
}

export function getCFBackgroundImage(
  id: string,
  variant: CFVariant = 'hero',
  fallbackSrc?: string
): string {
  const primary = `url('${getCFImageUrl(id, variant)}')`;
  return fallbackSrc ? `${primary}, url('${fallbackSrc}')` : primary;
}
