import { memo, useMemo, useState } from 'react';
import { CF_IMAGE_BASE, type CFVariant } from '../../data/cloudflareImages';

interface CFImageProps {
  id: string;
  variant?: CFVariant;
  alt: string;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
  /**
   * Optional migration fallback while switching old hardcoded URLs.
   * Remove once all Cloudflare IDs are confirmed.
   */
  fallbackSrc?: string;
}

const CFImage = memo(function CFImage({
  id,
  variant = 'card',
  alt,
  className,
  sizes = '100vw',
  width,
  height,
  fallbackSrc,
}: CFImageProps) {
  const [useFallback, setUseFallback] = useState(false);

  const src = useMemo(() => {
    if (useFallback && fallbackSrc) return fallbackSrc;
    return `${CF_IMAGE_BASE}/${encodeURIComponent(id)}/${variant}`;
  }, [id, variant, useFallback, fallbackSrc]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      sizes={sizes}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (fallbackSrc) setUseFallback(true);
      }}
    />
  );
});

export default CFImage;
