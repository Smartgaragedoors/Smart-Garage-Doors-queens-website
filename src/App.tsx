import { BrowserRouter, useLocation } from 'react-router-dom'
import { AppRoutes } from './router'
import { LocationProvider } from './contexts/LocationContext'
import ErrorBoundary from './components/ErrorBoundary'
import MobileStickyCTA from './components/conversion/MobileStickyCTA'
import LandingPageStickyCTA from './components/conversion/LandingPageStickyCTA'

function StickyCTA() {
  const { pathname } = useLocation()
  const isLP = pathname.startsWith('/lp/')
  return isLP ? <LandingPageStickyCTA /> : <MobileStickyCTA />
}

function App() {
  return (
    <ErrorBoundary>
      <LocationProvider>
        <BrowserRouter basename={__BASE_PATH__}>
          <ErrorBoundary>
            <AppRoutes />
            {/* Spacer so mobile sticky CTA does not cover page bottom */}
            <div className="lg:hidden h-16 flex-shrink-0" aria-hidden="true" />
            <StickyCTA />
          </ErrorBoundary>
        </BrowserRouter>
      </LocationProvider>
    </ErrorBoundary>
  )
}

export default App