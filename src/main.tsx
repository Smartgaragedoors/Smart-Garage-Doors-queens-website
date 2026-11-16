import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import routes from './router/config'
import { preloadRoute } from './router/lazyWithPreload'
import { initAnalytics } from './utils/analytics'
import { initWebVitals } from './utils/webVitals'

// Disable service worker to avoid stale/cached bundles causing runtime errors
// If you need offline support, re-enable after resolving cache issues.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(regs => {
    regs.forEach(reg => reg.unregister().catch(() => {}));
  }).catch(() => {});
}

// Initialize analytics and performance monitoring
if (import.meta.env.PROD) {
  initAnalytics();
  // Initialize Web Vitals after a short delay to ensure GA is loaded
  setTimeout(() => {
    initWebVitals();
  }, 2000);
}

const container = document.getElementById('root')!;

const mount = () => {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
};

if (container.firstElementChild) {
  // Prerendered page: its HTML is already painted. createRoot is a client render,
  // so the first commit replaces that HTML — and if the page chunk is not loaded
  // yet, what it puts there is the "Loading page..." spinner (measured on a
  // throttled phone 2026-11-16: page visible at ~2 s, spinner from ~4.7 s to ~7 s,
  // and the browser's LCP was the hero painted after the spinner). So fetch the
  // page chunk first and mount once: prerendered HTML -> real page, one commit.
  // The timeout only guards against a hung request; then the old path applies.
  const ROUTE_PRELOAD_TIMEOUT_MS = 10000;
  Promise.race([
    preloadRoute(routes, window.location.pathname, __BASE_PATH__),
    new Promise((resolve) => setTimeout(resolve, ROUTE_PRELOAD_TIMEOUT_MS)),
  ]).then(mount, mount);
} else {
  // Empty shell (prerender run, /lp/ and /go/ routes, local dev): mount right away.
  mount();
}


// Global error logging for runtime evidence (development only)
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  const logEndpoint = 'http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a';
  window.addEventListener('error', (event) => {
    try {
      fetch(logEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: 'window:error',
          message: event.message || 'window error',
          data: {
            source: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            error: event.error ? event.error.toString() : undefined,
            stack: event.error ? event.error.stack : undefined,
            pathname: window.location.pathname
          },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'post-fix',
          hypothesisId: 'ERR'
        })
      }).catch(() => {});
    } catch {
      // ignore
    }
  });

  window.addEventListener('unhandledrejection', (event) => {
    try {
      fetch(logEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: 'window:unhandledrejection',
          message: 'Unhandled promise rejection',
          data: {
            reason: event.reason ? event.reason.toString() : undefined,
            stack: event.reason?.stack,
            pathname: window.location.pathname
          },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'post-fix',
          hypothesisId: 'ERR'
        })
      }).catch(() => {});
    } catch {
      // ignore
    }
  });
}
