declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, category: string, label?: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, { event_category: category, event_label: label });
  }
}

export const trackReferralClick = (platform: string, categoryId: string) =>
  trackEvent("referral_click", categoryId, platform);

export const trackDonationCopy = (method: string) =>
  trackEvent("donation_copy", "donaciones", method);

export const trackSearch = (query: string, results: number) =>
  trackEvent("search", "buscador", `${query} (${results} resultados)`);