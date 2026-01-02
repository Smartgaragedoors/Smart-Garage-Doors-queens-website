import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Register service worker for offline support and better performance
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        if (import.meta.env.DEV) {
          console.log('Service Worker registered:', registration);
        }
      })
      .catch((error) => {
        if (import.meta.env.DEV) {
          console.error('Service Worker registration failed:', error);
        }
      });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
