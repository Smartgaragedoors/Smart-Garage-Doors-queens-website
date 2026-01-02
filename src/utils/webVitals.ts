// Web Vitals tracking for performance monitoring
import { onCLS, onINP, onLCP, onFCP, onTTFB, Metric } from 'web-vitals';

interface WebVitalsMetric extends Metric {
  value: number;
  id: string;
  name: string;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Send metrics to Google Analytics
function sendToAnalytics(metric: WebVitalsMetric) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  // Send to Google Analytics
  window.gtag('event', metric.name, {
    event_category: 'Web Vitals',
    event_label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    non_interaction: true,
    metric_rating: metric.rating,
    metric_value: metric.value,
    metric_delta: metric.delta,
  });
}

// Initialize Web Vitals tracking
export function initWebVitals() {
  if (typeof window === 'undefined') {
    return;
  }

  // Track Core Web Vitals
  onCLS((metric) => {
    sendToAnalytics(metric as WebVitalsMetric);
  });

  // onINP replaces onFID in newer versions of web-vitals
  onINP((metric) => {
    sendToAnalytics(metric as WebVitalsMetric);
  });

  onLCP((metric) => {
    sendToAnalytics(metric as WebVitalsMetric);
  });

  // Track additional metrics
  onFCP((metric) => {
    sendToAnalytics(metric as WebVitalsMetric);
  });

  onTTFB((metric) => {
    sendToAnalytics(metric as WebVitalsMetric);
  });
}

