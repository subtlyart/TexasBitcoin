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

// Editorial exclusions. The pipeline (project1960) casts a deliberately wide
// net over the DOJ press-release archive; a handful of matches get tagged with
// the "cryptocurrency" theme but fall below this tracker's bar of a genuine
// § 1960 or cryptocurrency prosecution. We drop them here, at the site layer,
// so the raw dataset stays the pipeline's untouched source of truth and a
// nightly re-sync can't silently reintroduce them. Re-verify against the linked
// DOJ release before adding to — or removing from — this set.
const EXCLUDED_DOJ_URLS = new Set<string>([
  // Tax-evasion sentence (W.D. Tex.): no crypto nexus in the DOJ summary, no
  // statutes extracted, and $0 forfeiture — a false positive on the crypto theme.
  "https://www.justice.gov/opa/pr/expatriated-hedge-fund-manager-sentenced-prison-tax-evasion",
]);

export const trackedCases: TrackedCase[] = rawData.cases.filter(
  (c) => !EXCLUDED_DOJ_URLS.has(c.doj_url),
);

// Page figures derive from the filtered set so every number is self-consistent.
// The excluded case carries $0 forfeiture in an already-active district, so the
// pipeline's forfeiture and district-count totals still hold; only the case
// count changes.
export const trackerStats: TrackerStats = {
  ...rawData.stats,
  case_count: trackedCases.length,
};

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

// --- Per-case page slugs -----------------------------------------------------
// Slug = the final segment of the DOJ press-release URL: descriptive of the
// case/conduct (not a person), stable, and SEO-legible. A few releases are
// cross-posted by two USAO offices and share that final segment; we keep the
// lowest-id case's slug clean and suffix the rest with an id fragment, so an
// existing case's URL never shifts as the dataset grows. Lives here (not in
// case-detail) so it needs only the small index dataset, keeping the slug map
// out of the client bundle's detail payload.
function baseSlug(dojUrl: string): string {
  const clean = dojUrl.replace(/[?#].*$/, "").replace(/\/+$/, "");
  return clean.slice(clean.lastIndexOf("/") + 1);
}

const idToSlug = new Map<string, string>();
const slugToId = new Map<string, string>();
{
  const groups = new Map<string, TrackedCase[]>();
  for (const c of trackedCases) {
    const b = baseSlug(c.doj_url);
    const g = groups.get(b);
    if (g) g.push(c);
    else groups.set(b, [c]);
  }
  for (const [base, group] of groups) {
    group
      .slice()
      .sort((a, b) => a.id.localeCompare(b.id))
      .forEach((c, i) => {
        const slug = i === 0 ? base : `${base}-${c.id.slice(0, 8)}`;
        idToSlug.set(c.id, slug);
        slugToId.set(slug, c.id);
      });
  }
}

export function slugForCase(c: TrackedCase): string {
  return idToSlug.get(c.id) ?? baseSlug(c.doj_url);
}

export function caseIdForSlug(slug: string): string | undefined {
  return slugToId.get(slug);
}

export function allCaseSlugs(): string[] {
  return [...slugToId.keys()];
}

export type TrackedCaseWithSlug = TrackedCase & { slug: string };

export const trackedCasesWithSlug: TrackedCaseWithSlug[] = trackedCases.map(
  (c) => ({ ...c, slug: slugForCase(c) }),
);

// --- District hubs -----------------------------------------------------------
export const DISTRICTS = [
  { name: "Northern District of Texas", slug: "northern", short: "Northern", cities: "Dallas and Fort Worth" },
  { name: "Southern District of Texas", slug: "southern", short: "Southern", cities: "Houston, Corpus Christi, and the Gulf Coast" },
  { name: "Eastern District of Texas", slug: "eastern", short: "Eastern", cities: "Sherman, Plano, Tyler, and Beaumont" },
  { name: "Western District of Texas", slug: "western", short: "Western", cities: "Austin, San Antonio, El Paso, and Waco" },
] as const;

export function districtSlug(district: string): string {
  return (
    DISTRICTS.find((d) => d.name === district)?.slug ??
    district.toLowerCase().replace(/[^a-z]+/g, "-")
  );
}

export function districtBySlug(slug: string) {
  return DISTRICTS.find((d) => d.slug === slug);
}
