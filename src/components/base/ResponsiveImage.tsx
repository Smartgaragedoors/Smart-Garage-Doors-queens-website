import { useState, useEffect, useRef, memo, ImgHTMLAttributes } from 'react';

interface ResponsiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'loading'> {
  src: string;
  srcSet?: string;
  webpSrc?: string;
  webpSrcSet?: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean; // If true, load immediately without lazy loading
  className?: string;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

/**
 * Optimized responsive image component with:
 * - Intersection Observer for lazy loading
 * - WebP support with fallback
 * - Proper width/height to prevent CLS
 * - Blur placeholder support
 */
const ResponsiveImage = memo(function ResponsiveImage({
  src,
  srcSet,
  webpSrc,
  webpSrcSet,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes,
  placeholder = 'empty',
  blurDataURL,
  ...props
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If priority, skip lazy loading
    if (priority) {
      setIsInView(true);
      return;
    }

    // Skip if browser doesn't support IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const imgElement = imgRef.current;
    if (!imgElement) return;

    // Create IntersectionObserver with root margin for early loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Disconnect observer once image is in view
            if (observerRef.current && imgElement) {
              observerRef.current.unobserve(imgElement);
            }
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01,
      }
    );

    observerRef.current.observe(imgElement);

    return () => {
      if (observerRef.current && imgElement) {
        observerRef.current.unobserve(imgElement);
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Generate srcset if not provided
  const finalSrcSet = srcSet || (width && height ? `${src} 1x` : undefined);
  const finalWebpSrcSet = webpSrcSet || (webpSrc && width && height ? `${webpSrc} 1x` : undefined);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
        width: width ? `${width}px` : '100%',
        height: height && !width ? `${height}px` : undefined,
      }}
    >
      {/* Blur placeholder */}
      {placeholder === 'blur' && blurDataURL && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{
            backgroundImage: `url(${blurDataURL})`,
            transition: 'opacity 0.3s',
            opacity: isLoaded ? 0 : 1,
          }}
          aria-hidden="true"
        />
      )}

      {/* WebP source with fallback */}
      {isInView && (
        <picture>
          {webpSrc && (
            <source
              srcSet={finalWebpSrcSet || webpSrc}
              type="image/webp"
              sizes={sizes}
            />
          )}
          <img
            ref={imgRef}
            src={isInView ? src : undefined}
            srcSet={isInView ? finalSrcSet : undefined}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'low'}
            onLoad={handleLoad}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            style={{
              objectFit: 'cover',
            }}
            {...props}
          />
        </picture>
      )}

      {/* Placeholder while not in view */}
      {!isInView && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}
    </div>
  );
});

ResponsiveImage.displayName = 'ResponsiveImage';

export default ResponsiveImage;

