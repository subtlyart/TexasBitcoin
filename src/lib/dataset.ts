import { site } from "@/lib/site";
import {
  trackedCasesWithSlug,
  trackerStats,
  trackerDerived,
} from "@/lib/case-tracker";

// Canonical, machine-readable export of the case-tracker dataset.
//
// This is the `distribution` behind the Dataset structured data on
// /texas-bitcoin-case-tracker: a stable, downloadable, CC BY-SA 4.0 file that
// search engines (Google Dataset Search), researchers, and LLM answer engines
// can cite. It is built from the same filtered set that drives the pages
// (`trackedCasesWithSlug`), so the download never disagrees with the site.
//
// Field order is fixed and the records are sorted newest-first by date so the
// output is deterministic across builds (a stable file is a citable file).

export const DATASET_LICENSE = "https://creativecommons.org/licenses/by-sa/4.0/";
export const DATASET_PATH = "/texas-bitcoin-case-tracker";

export type DatasetRecord = {
  id: string;
  title: string;
  date: string | null;
  district: string;
  statutes: string[];
  forfeiture_usd: number;
  themes: string[];
  doj_url: string;
  page_url: string;
};

export function datasetRecords(): DatasetRecord[] {
  return trackedCasesWithSlug
    .map((c) => ({
      id: c.id,
      title: c.title,
      date: c.date,
      district: c.district,
      statutes: c.statutes,
      forfeiture_usd: c.forfeiture_usd,
      themes: c.themes,
      doj_url: c.doj_url,
      page_url: `${site.url}${DATASET_PATH}/${c.slug}`,
    }))
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

/** The JSON distribution: metadata envelope plus the records. */
export function datasetJson() {
  return {
    name: "Texas Federal Crypto & § 1960 Prosecutions",
    description:
      "Federal money-transmission (18 U.S.C. § 1960) and cryptocurrency prosecutions across Texas's four federal districts, extracted from public U.S. Department of Justice press releases.",
    source: "U.S. Department of Justice press releases",
    license: DATASET_LICENSE,
    attribution: `${site.name} (${site.domain})`,
    homepage: `${site.url}${DATASET_PATH}`,
    generated_at: trackerStats.generated_at,
    temporal_coverage: `${trackerDerived.earliestYear}/..`,
    spatial_coverage: "Texas, United States",
    record_count: trackedCasesWithSlug.length,
    fields: [
      "id",
      "title",
      "date",
      "district",
      "statutes",
      "forfeiture_usd",
      "themes",
      "doj_url",
      "page_url",
    ],
    records: datasetRecords(),
  };
}

// Minimal RFC 4180 CSV cell: quote when the value contains a comma, quote,
// or newline, doubling any embedded quotes.
function csvCell(value: string): string {
  return /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}

/** The CSV distribution: one row per case; list fields are "; "-joined. */
export function datasetCsv(): string {
  const header = [
    "id",
    "title",
    "date",
    "district",
    "statutes",
    "forfeiture_usd",
    "themes",
    "doj_url",
    "page_url",
  ];
  const rows = datasetRecords().map((r) =>
    [
      r.id,
      r.title,
      r.date ?? "",
      r.district,
      r.statutes.join("; "),
      String(r.forfeiture_usd),
      r.themes.join("; "),
      r.doj_url,
      r.page_url,
    ]
      .map(csvCell)
      .join(","),
  );
  return [header.join(","), ...rows].join("\n") + "\n";
}
