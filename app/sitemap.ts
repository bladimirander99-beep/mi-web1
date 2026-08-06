import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/data/categories";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...CATEGORIES.map((c) => ({
      url: `${SITE.url}/#${c.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}