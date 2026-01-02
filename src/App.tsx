import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import { LocationProvider } from './contexts/LocationContext'
import { useEffect } from 'react'

// #region agent log
const basePath = typeof __BASE_PATH__ !== 'undefined' ? __BASE_PATH__ : '/';
console.log('[DEBUG] App component rendering', { basePath, location: typeof window !== 'undefined' ? window.location.href : 'N/A' });
fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:9',message:'App component rendering',data:{basePath,currentLocation:typeof window!=='undefined'?window.location.href:'N/A'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
// #endregion agent log

function App() {
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7243/ingest/6c3bdf5c-af68-469f-9337-ff93e6c01d2a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:16',message:'App component mounted',data:{basePath},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  }, []);
  // #endregion agent log

  return (
    <LocationProvider>
      <BrowserRouter basename={__BASE_PATH__}>
        <AppRoutes />
      </BrowserRouter>
    </LocationProvider>
  )
}

export default App