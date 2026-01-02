// Service Worker for caching and performance optimization
const CACHE_NAME = 'sgd-v2';
const RUNTIME_CACHE = 'sgd-runtime-v2';
const IMAGE_CACHE = 'sgd-images-v2';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
];

// Cache TTL in milliseconds
const CACHE_TTL = {
  STATIC: 7 * 24 * 60 * 60 * 1000, // 7 days
  IMAGES: 30 * 24 * 60 * 60 * 1000, // 30 days
  API: 60 * 60 * 1000, // 1 hour
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE && cacheName !== IMAGE_CACHE;
          })
          .map((cacheName) => caches.delete(cacheName))
      );
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

  const networkResponse = await fetch(event.request);
  if (networkResponse.status === 200) {
    cache.put(event.request, networkResponse.clone());
  }
  return networkResponse;
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
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || new Response('Network error', { status: 503 });
          });
        })
    );
  }
});

