declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export type TrackParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
} & Record<string, string | number | undefined>;

export function trackEvent(name: string, params?: TrackParams): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export function trackReferralClick(platform: string, categoryId: string): void {
  trackEvent("referral_click", { event_category: categoryId, event_label: platform });
}

export function trackSearch(term: string): void {
  trackEvent("search", { event_category: "buscador", event_label: term });
}

export function trackDonationCopy(method: string): void {
  trackEvent("donation_copy", { event_category: "donaciones", event_label: method });
}

export function trackDonationClick(method: string): void {
  trackEvent("donation_click", { event_category: "donaciones", event_label: method });
}