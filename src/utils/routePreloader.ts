/**
 * Preloads a route module when user hovers over or focuses on a link
 * This improves perceived performance by loading code before navigation
 */

// Cache of preloaded modules to avoid duplicate loads
const preloadedModules = new Set<string>();

/**
 * Preloads a route module
 * @param importFn - The dynamic import function for the route
 */
export function preloadRoute(importFn: () => Promise<unknown>): void {
  const moduleId = importFn.toString();
  
  // Skip if already preloaded or currently loading
  if (preloadedModules.has(moduleId)) {
    return;
  }
  
  preloadedModules.add(moduleId);
  
  // Preload the module
  importFn().catch((error) => {
    // Remove from cache on error so it can be retried
    preloadedModules.delete(moduleId);
    if (import.meta.env.DEV) {
      console.warn('Failed to preload route:', error);
    }
  });
}

/**
 * Sets up preloading for a link element
 * @param linkElement - The link element to attach preload handlers to
 * @param importFn - The dynamic import function for the route
 */
export function setupLinkPreloading(
  linkElement: HTMLElement,
  importFn: () => Promise<unknown>
): () => void {
  const handleMouseEnter = () => preloadRoute(importFn);
  const handleFocus = () => preloadRoute(importFn);
  
  linkElement.addEventListener('mouseenter', handleMouseEnter);
  linkElement.addEventListener('focus', handleFocus);
  
  // Return cleanup function
  return () => {
    linkElement.removeEventListener('mouseenter', handleMouseEnter);
    linkElement.removeEventListener('focus', handleFocus);
  };
}

