import { APP_DOMAINS, IMAGE_FILES } from "@/data/logos";

export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

export function getImageSlug(name: string): string {
  return IMAGE_FILES[name] || name.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");
}

export function getLogoUrl(name: string): string {
  const d = APP_DOMAINS[name];
  return d ? `https://logo.clearbit.com/${d}` : "";
}

export function getFaviconUrl(name: string): string {
  const d = APP_DOMAINS[name];
  return d ? `https://www.google.com/s2/favicons?domain=${d}&sz=64` : "";
}