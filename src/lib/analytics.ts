/**
 * Analytics utility for pushing events to GTM dataLayer.
 * All events are picked up by Google Tag Manager and forwarded to GA4.
 */

/**
 * Push an event to the GTM dataLayer.
 * Safe to call even if GTM hasn't loaded yet.
 */
function pushEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}

/**
 * Track when a user clicks a phone link.
 * @param location - Where on the site the click happened (e.g., 'navbar', 'footer', 'hero')
 */
export function trackPhoneClick(location: string): void {
  pushEvent('phone_click', { location });
}

/**
 * Track when a user successfully submits the quote form.
 * @param service - The service they requested (e.g., 'Tree Removal')
 * @param urgency - How urgent their request is (e.g., 'Emergency', 'This Week')
 */
export function trackFormSubmission(service: string, urgency: string): void {
  pushEvent('form_submission', { service, urgency });
}

/**
 * Track when a user opens the chat widget.
 */
export function trackChatOpen(): void {
  pushEvent('chat_open');
}
