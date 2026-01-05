import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
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

// Trusted Types: create a default policy to reduce DOM-based XSS risk
if (typeof window !== 'undefined' && 'trustedTypes' in window && window.trustedTypes) {
  const sanitizeHtml = (input: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(input, 'text/html');
    doc.querySelectorAll('script, iframe, object, embed').forEach((el) => el.remove());
    doc.querySelectorAll('*').forEach((el) => {
      [...el.attributes].forEach((attr) => {
        if (attr.name.toLowerCase().startsWith('on')) {
          el.removeAttribute(attr.name);
        }
      });
    });
    return doc.body.innerHTML || '';
  };

  const getNames =
    typeof window.trustedTypes.getPolicyNames === 'function'
      ? window.trustedTypes.getPolicyNames()
      : [];

  if (!getNames.includes('default')) {
    window.trustedTypes.createPolicy('default', {
      createHTML: (input) => sanitizeHtml(String(input)),
      createScriptURL: (input) => String(input),
    });
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

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
