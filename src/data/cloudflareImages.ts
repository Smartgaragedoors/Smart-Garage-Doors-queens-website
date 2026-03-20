export type CFVariant = 'thumbnail' | 'card' | 'hero';

export interface CloudflareImageItem {
  id: string;
  alt: string;
  variant?: CFVariant;
  category?: string;
  fallbackSrc?: string;
}

export const CF_IMAGE_BASE = 'https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg';

// Centralized image mapping. Replace placeholder ids with real Cloudflare IDs.
export const cloudflareImages: Record<string, CloudflareImageItem> = {
  homeHero: {
    id: '54256736-9e5d-48d2-7b33-3bab7fd66900',
    alt: 'Smart Garage Doors service van parked in front of a residential garage. Professional garage door repair and installation services with branded white service vehicle.',
    variant: 'hero',
    category: 'homepage',
    fallbackSrc: '/hero-van-1280.jpg',
  },
  lpWhatsappHero: {
    id: '99840baa-bff1-4582-34f0-95ee312ac800',
    alt: 'Professional garage door technician at work',
    variant: 'hero',
    category: 'landing',
    fallbackSrc: 'https://www.smartestgaragedoors.com/wp-content/uploads/2025/06/Ben-fixing-door-scaled.jpg',
  },
  whyChooseUs: {
    id: '99840baa-bff1-4582-34f0-95ee312ac800',
    alt: 'Professional garage door technicians',
    variant: 'card',
    category: 'feature',
    fallbackSrc: 'https://imagedelivery.net/qHBP5gILWOpC78ZgZPcRpg/99840baa-bff1-4582-34f0-95ee312ac800/card',
  },
};

export function getCFImageUrl(id: string, variant: CFVariant = 'card'): string {
  return `${CF_IMAGE_BASE}/${encodeURIComponent(id)}/${variant}`;
}

export function getCloudflareImage(key: keyof typeof cloudflareImages): CloudflareImageItem {
  return cloudflareImages[key];
}

export function getCFBackgroundImage(
  id: string,
  variant: CFVariant = 'hero',
  fallbackSrc?: string
): string {
  const primary = `url('${getCFImageUrl(id, variant)}')`;
  return fallbackSrc ? `${primary}, url('${fallbackSrc}')` : primary;
}
