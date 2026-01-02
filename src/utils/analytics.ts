// Google Analytics 4 and event tracking utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

// Initialize Google Analytics - deferred for better performance
export const initAnalytics = () => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) {
    return;
  }

  // Defer GA loading until after page is interactive
  const loadGA = () => {
    // Load gtag script asynchronously
    const script1 = document.createElement('script');
    script1.async = true;
    script1.defer = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    // Add error handling for script loading
    script1.onerror = () => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Failed to load Google Analytics script');
      }
    };
    document.head.appendChild(script1);
  };

  // Wait for page to be interactive before loading GA
  if (document.readyState === 'complete') {
    // Use requestIdleCallback if available, otherwise delay
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadGA, { timeout: 2000 });
    } else {
      setTimeout(loadGA, 2000);
    }
  } else {
    window.addEventListener('load', () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadGA, { timeout: 2000 });
      } else {
        setTimeout(loadGA, 2000);
      }
    });
  }

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(...args: any[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title || document.title,
  });
};

// Track events
export const trackEvent = (
  eventName: string,
  eventParams?: {
    action?: string;
    category?: string;
    label?: string;
    value?: number;
    [key: string]: any;
  }
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', eventName, eventParams);
};

// Track phone clicks
export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent('phone_click', {
    category: 'Contact',
    label: phoneNumber,
    value: 1,
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string, formType: string) => {
  trackEvent('form_submit', {
    category: 'Lead Generation',
    label: formName,
    value: 1,
    form_type: formType,
  });
};

// Track service page views
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    category: 'Service Pages',
    label: serviceName,
    value: 1,
  });
};

// Track location detection
export const trackLocationDetection = (location: string) => {
  trackEvent('location_detected', {
    category: 'User Behavior',
    label: location,
    value: 1,
  });
};

