// Service Worker for caching and performance optimization
const CACHE_VERSION = 'v3';
const CACHE_NAME = `sgd-${CACHE_VERSION}`;
const RUNTIME_CACHE = `sgd-runtime-${CACHE_VERSION}`;
const IMAGE_CACHE = `sgd-images-${CACHE_VERSION}`;

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  OFFLINE_FALLBACK,
];

// Cache TTL in milliseconds
const CACHE_TTL = {
  STATIC: 7 * 24 * 60 * 60 * 1000, // 7 days
  IMAGES: 30 * 24 * 60 * 60 * 1000, // 30 days
  API: 60 * 60 * 1000, // 1 hour
};

// Cache size limits (in MB)
const CACHE_SIZE_LIMITS = {
  IMAGE: 50, // 50MB for images
  RUNTIME: 20, // 20MB for runtime cache
  STATIC: 10, // 10MB for static assets
};

// Offline fallback page
const OFFLINE_FALLBACK = '/offline.html';

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Helper function to calculate cache size
async function getCacheSize(cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    let totalSize = 0;
    
    for (const key of keys) {
      const response = await cache.match(key);
      if (response) {
        const blob = await response.blob();
        totalSize += blob.size;
      }
    }
    
    return totalSize / (1024 * 1024); // Return size in MB
  } catch (error) {
    console.error('Error calculating cache size:', error);
    return 0;
  }
}

// Helper function to clean cache if it exceeds size limit
async function cleanCacheIfNeeded(cacheName, sizeLimit) {
  const currentSize = await getCacheSize(cacheName);
  
  if (currentSize > sizeLimit) {
    try {
      const cache = await caches.open(cacheName);
      const keys = await cache.keys();
      
      // Delete oldest entries first (simple FIFO strategy)
      // In a production app, you might want to use a more sophisticated LRU strategy
      const keysToDelete = keys.slice(0, Math.floor(keys.length * 0.3)); // Delete 30% of entries
      
      await Promise.all(keysToDelete.map(key => cache.delete(key)));
      
      if (import.meta.env?.DEV) {
        console.log(`Cleaned ${keysToDelete.length} entries from ${cacheName}`);
      }
    } catch (error) {
      console.error('Error cleaning cache:', error);
    }
  }
}

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all([
        // Delete old caches
        Promise.all(
          cacheNames
            .filter((cacheName) => {
              return !cacheName.includes(CACHE_VERSION);
            })
            .map((cacheName) => {
              if (import.meta.env?.DEV) {
                console.log('Deleting old cache:', cacheName);
              }
              return caches.delete(cacheName);
            })
        ),
        // Clean caches if they exceed size limits
        cleanCacheIfNeeded(IMAGE_CACHE, CACHE_SIZE_LIMITS.IMAGE),
        cleanCacheIfNeeded(RUNTIME_CACHE, CACHE_SIZE_LIMITS.RUNTIME),
        cleanCacheIfNeeded(CACHE_NAME, CACHE_SIZE_LIMITS.STATIC),
      ]);
    })
  );
  return self.clients.claim();
});

// Helper function to check if request is for an image
function isImageRequest(request) {
  return request.destination === 'image' || 
         /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i.test(request.url);
}

// Helper function to check if request is for an external API image
function isExternalImage(request) {
  return isImageRequest(request) && 
         (request.url.includes('readdy.ai/api/search-image') || 
          request.url.includes('static.readdy.ai'));
}

// Stale-while-revalidate strategy for images
async function staleWhileRevalidate(event, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(event.request);
  
  const fetchPromise = fetch(event.request).then((response) => {
    if (response.status === 200) {
      cache.put(event.request, response.clone());
    }
    return response;
  }).catch(() => {
    // Network failed, return cached if available
    return cachedResponse || new Response('Network error', { status: 503 });
  });

  // Return cached immediately if available, otherwise wait for network
  return cachedResponse || fetchPromise;
}

// Cache-first strategy for static assets
async function cacheFirst(event, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(event.request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(event.request);
    if (networkResponse.status === 200) {
      // Check cache size before adding
      await cleanCacheIfNeeded(cacheName, 
        cacheName === IMAGE_CACHE ? CACHE_SIZE_LIMITS.IMAGE :
        cacheName === RUNTIME_CACHE ? CACHE_SIZE_LIMITS.RUNTIME :
        CACHE_SIZE_LIMITS.STATIC
      );
      cache.put(event.request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // If network fails and it's a navigation request, return offline page
    if (event.request.mode === 'navigate') {
      const offlinePage = await cache.match(OFFLINE_FALLBACK);
      if (offlinePage) {
        return offlinePage;
      }
    }
    throw error;
  }
}

// Fetch event - serve from cache with optimized strategies
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // External images - stale-while-revalidate for better performance
  if (isExternalImage(event.request)) {
    event.respondWith(staleWhileRevalidate(event, IMAGE_CACHE));
    return;
  }

  // Same-origin images - stale-while-revalidate
  if (isImageRequest(event.request) && url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(event, IMAGE_CACHE));
    return;
  }

  // Static assets (HTML, CSS, JS) - cache first
  if (url.origin === self.location.origin) {
    if (event.request.destination === 'document' || 
        event.request.destination === 'script' || 
        event.request.destination === 'style') {
      event.respondWith(cacheFirst(event, CACHE_NAME));
      return;
    }
  }

  // All other requests - network first with runtime cache
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(event.request)
        .then(async (response) => {
          if (response.status === 200) {
            // Check cache size before adding
            await cleanCacheIfNeeded(RUNTIME_CACHE, CACHE_SIZE_LIMITS.RUNTIME);
            const responseClone = response.clone();
            const cache = await caches.open(RUNTIME_CACHE);
            cache.put(event.request, responseClone);
          }
          return response;
        })
        .catch(async () => {
          // Try to get from cache
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // If it's a navigation request and we have an offline page, return it
          if (event.request.mode === 'navigate') {
            const offlinePage = await caches.match(OFFLINE_FALLBACK);
            if (offlinePage) {
              return offlinePage;
            }
          }
          
          return new Response('Network error', { 
            status: 503,
            headers: { 'Content-Type': 'text/plain' }
          });
        })
    );
  }
});

