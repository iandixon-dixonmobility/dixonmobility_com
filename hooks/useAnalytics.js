import { useEffect } from 'react';
import { analytics } from '../lib/firebase';
import { logEvent } from 'firebase/analytics';

export const useAnalytics = () => {
  useEffect(() => {
    const initAnalytics = async () => {
      const analyticsInstance = await analytics;
      if (analyticsInstance) {
        // Log page view
        logEvent(analyticsInstance, 'page_view');
      }
    };

    initAnalytics();
  }, []);
}; 