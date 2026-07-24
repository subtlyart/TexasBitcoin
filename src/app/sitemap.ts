import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    {
      path: "/history-of-bitcoin-in-texas",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/bitcoin-mining-map-texas",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/texas-bitcoin-law-timeline",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/texas-bitcoin-case-tracker",
      priority: 0.8,
      changeFrequency: "daily" as const,
    },
    {
      path: "/rockdale-texas-bitcoin",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/doctor-bitcoin",
      priority: 0.6,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/doctor-bitcoin-interviews",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    { path: "/events", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
