import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import { LocationProvider } from './contexts/LocationContext'
import ErrorBoundary from './components/ErrorBoundary'
import MobileStickyCTA from './components/conversion/MobileStickyCTA'

function App() {
  return (
    <ErrorBoundary>
      <LocationProvider>
        <BrowserRouter basename={__BASE_PATH__}>
          <ErrorBoundary>
            <AppRoutes />
            {/* Spacer so mobile sticky CTA does not cover page bottom */}
            <div className="lg:hidden h-16 flex-shrink-0" aria-hidden="true" />
            <MobileStickyCTA />
          </ErrorBoundary>
        </BrowserRouter>
      </LocationProvider>
    </ErrorBoundary>
  )
}

export default App