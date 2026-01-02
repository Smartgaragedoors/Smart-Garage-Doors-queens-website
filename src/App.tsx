import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import { LocationProvider } from './contexts/LocationContext'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <LocationProvider>
        <BrowserRouter basename={__BASE_PATH__}>
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </BrowserRouter>
      </LocationProvider>
    </ErrorBoundary>
  )
}

export default App