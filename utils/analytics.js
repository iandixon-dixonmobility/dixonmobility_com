import { analytics } from '../lib/firebase';
import { logEvent } from 'firebase/analytics';

export const trackEvent = async (eventName, eventParams = {}) => {
  const analyticsInstance = await analytics;
  if (analyticsInstance) {
    logEvent(analyticsInstance, eventName, eventParams);
  }
}; 