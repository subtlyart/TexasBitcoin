// The enforcement report - build-time analysis over the case tracker's data.
//
// PHILOSOPHY: same rule as the tracker page - every number on the report is
// computed here, at build time, from the same filtered dataset the tracker
// renders. The weekly pipeline refresh (project1960 -> texas-cases.json)
// re-derives everything on the next build; no hand-frozen statistic can go
// stale. Editorial framing lives in the page; arithmetic lives here.
//
// The dataset is DOJ press releases, not court dockets - announcement dates,
// prosecutor-written summaries, forfeitures as announced. The page carries
// that caveat prominently; keep it when extending.

import {
  trackedCases,
  trackedCasesWithSlug,
  trackerStats,
  trackerDerived,
  type TrackedCase,
} from "@/lib/case-tracker";

export interface YearRow {
  year: string;
  cases: number;
  forfeituresUsd: number;
}

export interface ThemeRow {
  theme: string;
  count: number;
}

export interface DistrictRow {
  district: string;
  count: number;
}

export interface TopCase {
  slug: string;
  title: string;
  date: string | null;
  district: string;
  forfeitureUsd: number;
}

export interface EnforcementReport {
  caseCount: number;
  totalForfeituresUsd: number;
  generatedAt: string; // ISO date of the dataset generation
  years: YearRow[]; // dated cases only, ascending year
  undatedCount: number;
  peakYear: YearRow;
  currentYear: YearRow | null; // partial year to date
  firstYear: string;
  topThemes: ThemeRow[];
  umtbCount: number; // unlicensed money transmitting business - the § 1960 proxy
  launderingCount: number;
  districts: DistrictRow[]; // descending by count
  topForfeitures: TopCase[]; // deduped by title similarity, descending
  largestCase: TopCase;
}

function computeReport(): EnforcementReport {
  const byYear = new Map<string, { cases: number; forf: number }>();
  const themes = new Map<string, number>();
  const districts = new Map<string, number>();
  let undated = 0;

  for (const c of trackedCases) {
    if (c.date) {
      const y = c.date.slice(0, 4);
      const row = byYear.get(y) ?? { cases: 0, forf: 0 };
      row.cases += 1;
      row.forf += c.forfeiture_usd || 0;
      byYear.set(y, row);
    } else {
      undated += 1;
    }
    for (const t of c.themes) themes.set(t, (themes.get(t) ?? 0) + 1);
    districts.set(c.district, (districts.get(c.district) ?? 0) + 1);
  }

  const years: YearRow[] = [...byYear.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([year, v]) => ({ year, cases: v.cases, forfeituresUsd: v.forf }));

  const nowYear = trackerStats.generated_at.slice(0, 4);
  const currentYear = years.find((y) => y.year === nowYear) ?? null;
  const completedYears = years.filter((y) => y.year !== nowYear);
  const peakYear = completedYears.reduce((a, b) =>
    b.cases >= a.cases ? b : a,
  );

  // Dedup cross-posted releases (same case announced by two USAO offices on
  // adjacent days) by normalized title before ranking forfeitures.
  const seenTitles = new Set<string>();
  const topForfeitures: TopCase[] = trackedCasesWithSlug
    .slice()
    .sort((a, b) => (b.forfeiture_usd || 0) - (a.forfeiture_usd || 0))
    .filter((c) => {
      const key = c.title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      if (seenTitles.has(key)) return false;
      seenTitles.add(key);
      return (c.forfeiture_usd || 0) > 0;
    })
    .slice(0, 5)
    .map((c) => ({
      slug: c.slug,
      title: c.title,
      date: c.date,
      district: c.district,
      forfeitureUsd: c.forfeiture_usd || 0,
    }));

  return {
    caseCount: trackerStats.case_count,
    totalForfeituresUsd: trackerStats.total_forfeitures_usd,
    generatedAt: trackerDerived.lastUpdated,
    years,
    undatedCount: undated,
    peakYear,
    currentYear,
    firstYear: years[0]?.year ?? "",
    topThemes: [...themes.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([theme, count]) => ({ theme, count })),
    umtbCount: themes.get("unlicensed_money_transmitting_business") ?? 0,
    launderingCount: themes.get("money_laundering") ?? 0,
    districts: [...districts.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([district, count]) => ({ district, count })),
    topForfeitures,
    largestCase: topForfeitures[0],
  };
}

export const enforcementReport: EnforcementReport = computeReport();

// Re-exported for the page's convenience.
export { formatUsd, formatDate, shortDistrict, themeLabel } from "@/lib/case-tracker";
export type { TrackedCase };
