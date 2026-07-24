import rawData from "@/data/texas-cases.json";

export type TrackedCase = {
  id: string;
  title: string;
  date: string | null;
  district: string;
  summary: string | null;
  statutes: string[];
  forfeiture_usd: number;
  themes: string[];
  doj_url: string;
};

export type TrackerStats = {
  case_count: number;
  total_forfeitures_usd: number;
  districts_active: number;
  generated_at: string;
};

export const trackerStats: TrackerStats = rawData.stats;
export const trackedCases: TrackedCase[] = rawData.cases;

// "Southern District of Texas" -> "Southern Texas" for badges and filters.
export function shortDistrict(district: string): string {
  return district.replace(" District of Texas", " Texas");
}

export function themeLabel(theme: string): string {
  return theme
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function formatUsd(n: number): string {
  if (!n) return "$0";
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1).replace(/\.0$/, "")}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1e3) return `$${Math.round(n / 1e3)}K`;
  return `$${n.toLocaleString("en-US")}`;
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatDate(iso: string | null): string {
  if (!iso) return "Date unknown";
  const [y, m, d] = iso.split("-");
  return `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`;
}

// Derived, build-time figures for the page copy and Key Facts.
export const trackerDerived = (() => {
  const dates = trackedCases
    .map((c) => c.date)
    .filter((d): d is string => Boolean(d))
    .sort();
  const districtCounts = new Map<string, number>();
  let sec1960Count = 0;
  for (const c of trackedCases) {
    districtCounts.set(c.district, (districtCounts.get(c.district) ?? 0) + 1);
    if (c.statutes.some((s) => s.includes("1960"))) sec1960Count++;
  }
  const busiest = [...districtCounts.entries()].sort((a, b) => b[1] - a[1])[0];
  return {
    earliestYear: dates[0]?.slice(0, 4) ?? "",
    latestDate: dates[dates.length - 1] ?? null,
    busiestDistrict: busiest?.[0] ?? "",
    busiestDistrictCount: busiest?.[1] ?? 0,
    sec1960Count,
    lastUpdated: trackerStats.generated_at.slice(0, 10),
  };
})();
