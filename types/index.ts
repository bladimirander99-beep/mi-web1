export interface RefItem {
  name: string;
  href: string;
  badge: string;
  hot?: boolean;
  videoId?: string;
  desc?: string;
}

export interface Category {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  hot?: boolean;
  links: RefItem[];
  manualLabel: string;
  steps: { title: string; desc: string }[];
  tip: string;
}

export interface Earning { source: string; amount: string; period: string }
export interface Modulo { n: string; title: string; desc: string }
export interface Plataforma { name: string; earn: string }
export interface PlanStep { n: number; t: string; d: string }
export interface Donacion { icon: string; name: string; detail: string; href: string; color: string }

/* ── BLOG ── */
export interface PostSection {
  h2: string;
  paragraphs: string[];
  list?: string[];
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  emoji: string;
  relatedCategoryId: string;
  sections: PostSection[];
}