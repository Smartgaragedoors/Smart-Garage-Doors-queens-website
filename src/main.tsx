import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initAnalytics } from './utils/analytics'

// #region agent log
const basePath = typeof __BASE_PATH__ !== 'undefined' ? __BASE_PATH__ : '/';
console.log('[DEBUG] App initialization', { basePath, location: window.location.href, rootExists: !!document.getElementById('root') });
fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:8',message:'App initialization started',data:{basePath,location:typeof window!=='undefined'?window.location.href:'N/A',rootExists:!!(typeof document!=='undefined'?document.getElementById('root'):null)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
// #endregion agent log

// Register service worker for caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        // #region agent log
        console.log('[DEBUG] Service Worker registered:', registration.scope);
        fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:16',message:'Service Worker registered',data:{scope:registration.scope},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
        // #endregion agent log
        console.log('Service Worker registered:', registration.scope);
      })
      .catch((error) => {
        // #region agent log
        console.log('[DEBUG] Service Worker registration failed:', error);
        fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:21',message:'Service Worker registration failed',data:{error:error?.message||String(error)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
        // #endregion agent log
        console.log('Service Worker registration failed:', error);
      });
  });
}

// Initialize analytics
initAnalytics();

// #region agent log
try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:33',message:'Root element not found - CRITICAL ERROR',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    throw new Error('Root element not found');
  }
  fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:38',message:'Rendering React app',data:{basePath},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
} catch (error) {
  fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:41',message:'Error before render',data:{error:error instanceof Error?error.message:String(error)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
}
// #endregion agent log

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
