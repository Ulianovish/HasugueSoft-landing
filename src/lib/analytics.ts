import { track } from '@vercel/analytics/server';

export type AnalyticsEventName = 'form.submit';

export type AnalyticsPayload = Record<string, string | number | boolean | null>;

export async function trackEvent(eventName: AnalyticsEventName, payload: AnalyticsPayload = {}) {
  try {
    const sanitized = Object.fromEntries(
      Object.entries(payload).filter(([, value]) => value !== undefined)
    );
    await track(eventName, sanitized);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn('[analytics] Failed to track event', error);
    }
  }
}
