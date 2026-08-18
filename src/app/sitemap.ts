import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { DISTRICTS, trackerDerived } from "@/lib/case-tracker";
import { indexedCasePages } from "@/lib/case-detail";

export default function sitemap(): MetadataRoute.Sitemap {
  // Real per-page modification dates. A truthful freshness signal beats
  // stamping every route with the current build time (which teaches crawlers
  // to ignore the field). Bump a page's date here when its content materially
  // changes; the case tracker inherits its dataset's generation date.
  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const, lastMod: "2026-08-09" },
    { path: "/history-of-bitcoin-in-texas", priority: 0.9, changeFrequency: "monthly" as const, lastMod: "2026-08-09" },
    { path: "/bitcoin-mining-map-texas", priority: 0.9, changeFrequency: "monthly" as const, lastMod: "2026-08-09" },
    { path: "/texas-bitcoin-law-timeline", priority: 0.8, changeFrequency: "monthly" as const, lastMod: "2026-08-09" },
    { path: "/texas-strategic-bitcoin-reserve", priority: 0.8, changeFrequency: "monthly" as const, lastMod: "2026-08-09" },
    { path: "/texas-bitcoin-case-tracker", priority: 0.8, changeFrequency: "daily" as const, lastMod: trackerDerived.lastUpdated },
    { path: "/what-texas-law-says-about-bitcoin", priority: 0.8, changeFrequency: "monthly" as const, lastMod: "2026-07-25" },
    { path: "/rockdale-texas-bitcoin", priority: 0.7, changeFrequency: "monthly" as const, lastMod: "2026-07-22" },
    { path: "/doctor-bitcoin", priority: 0.6, changeFrequency: "yearly" as const, lastMod: "2026-07-22" },
    { path: "/doctor-bitcoin-interviews", priority: 0.6, changeFrequency: "monthly" as const, lastMod: "2026-07-22" },
    { path: "/events", priority: 0.8, changeFrequency: "weekly" as const, lastMod: "2026-07-27" },
    { path: "/texas-bitcoin-resources", priority: 0.7, changeFrequency: "monthly" as const, lastMod: "2026-07-27" },
    // Direct-link only: indexed but never linked from the shell nav.
    { path: "/texas-crypto-archive", priority: 0.5, changeFrequency: "monthly" as const, lastMod: "2026-07-27" },
    { path: "/about", priority: 0.5, changeFrequency: "yearly" as const, lastMod: "2026-07-22" },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" as const, lastMod: "2026-07-22" },
  ];

  const staticEntries = routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(r.lastMod),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // District hubs — inherit the dataset's generation date, like the tracker.
  const districtEntries = DISTRICTS.map((d) => ({
    url: `${site.url}/texas-bitcoin-case-tracker/district/${d.slug}`,
    lastModified: new Date(trackerDerived.lastUpdated),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  // Per-case pages — only the search-indexed (adjudicated) ones; each carries
  // its DOJ announcement date as a truthful lastModified.
  const caseEntries = indexedCasePages().map((c) => ({
    url: `${site.url}/texas-bitcoin-case-tracker/${c.slug}`,
    lastModified: new Date(c.date ?? trackerDerived.lastUpdated),
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...staticEntries, ...districtEntries, ...caseEntries];
}
