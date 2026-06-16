import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { AppRoutes } from './router'
import { LocationProvider } from './contexts/LocationContext'
import ErrorBoundary from './components/ErrorBoundary'
import MobileStickyCTA from './components/conversion/MobileStickyCTA'
import LandingPageStickyCTA from './components/conversion/LandingPageStickyCTA'
import ChatWidget from './components/feature/ChatWidget'
import { trackEvent } from './utils/analytics'

function StickyCTA() {
  const { pathname } = useLocation()
  const isLP = pathname.startsWith('/lp/')
  return isLP ? <LandingPageStickyCTA /> : <MobileStickyCTA />
}

// Site-wide scroll-depth tracking → GA4 shows how far visitors get on each page
// (a session that never passes 25% is effectively a bounce). Resets per route.
function ScrollDepthTracker() {
  const { pathname } = useLocation()
  useEffect(() => {
    const fired = new Set<number>()
    const milestones = [25, 50, 75, 90]
    const onScroll = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      if (max <= 0) return
      const pct = (el.scrollTop / max) * 100
      for (const m of milestones) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m)
          trackEvent('scroll_depth', { category: 'Engagement', label: pathname, value: m, percent: m })
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])
  return null
}

function App() {
  return (
    <ErrorBoundary>
      <LocationProvider>
        <BrowserRouter basename={__BASE_PATH__}>
          <ErrorBoundary>
            <ScrollDepthTracker />
            <AppRoutes />
            {/* Spacer so mobile sticky CTA does not cover page bottom */}
            <div className="lg:hidden h-16 flex-shrink-0" aria-hidden="true" />
            <StickyCTA />
            <ChatWidget />
          </ErrorBoundary>
        </BrowserRouter>
      </LocationProvider>
    </ErrorBoundary>
  )
}

export default App