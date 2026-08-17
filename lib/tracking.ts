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

/** Acepta texto simple ("paypal") u objeto ({ event_category, event_label }) */
export function trackEvent(name: string, params?: TrackParams | string): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  const normalized = typeof params === "string" ? { event_label: params } : params;
  window.gtag("event", name, normalized);
}

export function trackReferralClick(platform: string, categoryId?: string): void {
  trackEvent("referral_click", { event_category: categoryId, event_label: platform });
}

export function trackSearch(term: string, results?: number): void {
  trackEvent("search", { event_category: "buscador", event_label: term, value: results });
}

export function trackDonationCopy(method: string, detail?: string): void {
  trackEvent("donation_copy", { event_category: "donaciones", event_label: method, detail });
}

export function trackDonationClick(method: string, detail?: string): void {
  trackEvent("donation_click", { event_category: "donaciones", event_label: method, detail });
}