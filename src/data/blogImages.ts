import manifest from './blogImages.manifest.json';

export interface BlogImage { image: string; imageAlt: string; kind?: string }

// One distinct asset per article; cards, posts and metadata share this registry.
export const BLOG_IMAGES: Record<string, BlogImage> = manifest;

export function getBlogImage(slug: string, fallback?: BlogImage): BlogImage {
  return BLOG_IMAGES[slug] || fallback || {
    image: '/hero-van-1280.webp',
    imageAlt: 'Smart Garage Doors service van',
  };
}
