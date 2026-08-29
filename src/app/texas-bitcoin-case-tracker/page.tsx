import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  DISTRICTS,
  formatDate,
  formatUsd,
  trackedCases,
  trackedCasesWithSlug,
  trackerDerived,
  trackerStats,
} from "@/lib/case-tracker";
import { CaseTracker } from "@/components/case-tracker";
import { SeamMark } from "@/components/seam-mark";

const pageUrl = `${site.url}/texas-bitcoin-case-tracker`;

export const metadata: Metadata = {
  title: "Texas Bitcoin Case Tracker — § 1960 Cases",
  description: `Every federal § 1960 and crypto prosecution in Texas's four federal districts — ${trackerStats.case_count} cases from public DOJ releases, updated nightly.`,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Texas Bitcoin Case Tracker",
    description: `Every federal § 1960 and crypto prosecution in Texas on one filterable page — ${trackerStats.case_count} cases across all four federal districts, sourced to the DOJ record and updated nightly.`,
    url: pageUrl,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is 18 U.S.C. § 1960?",
    a: "18 U.S.C. § 1960 is the federal statute criminalizing operation of an unlicensed money transmitting business. It is a registration offense: the crime is transmitting money without the required federal (FinCEN) registration or state license, independent of any fraud. Many crypto prosecutions in Texas include a § 1960 count alongside other charges.",
  },
  {
    q: "Does this tracker mean Bitcoin is illegal in Texas?",
    a: "No — the opposite. Bitcoin is legal to buy, sell, hold, and mine in Texas. These cases involve specific conduct the federal government prosecutes — unlicensed money transmission, laundering, fraud, darknet markets — in which cryptocurrency happened to be the rail. The Texas Bitcoin Law Timeline covers the affirmative legal framework.",
  },
  {
    q: "Where does the case data come from?",
    a: `Every case is built from public U.S. Department of Justice press releases — public-domain government records — collected via the open-source project1960 pipeline and filtered to Texas's four federal districts. Each row links to its original DOJ release. The dataset regenerates nightly; this page was last built from data generated ${formatDate(trackerDerived.lastUpdated)}.`,
  },
  {
    q: "Which Texas federal district brings the most crypto cases?",
    a: `As of the current dataset, the ${trackerDerived.busiestDistrict} leads with ${trackerDerived.busiestDistrictCount} of the ${trackerStats.case_count} tracked cases. All four Texas federal districts — Northern (Dallas), Southern (Houston), Eastern (Sherman/Plano), and Western (Austin/San Antonio) — appear in the dataset.`,
  },
];

export default function CaseTrackerPage() {
  const largest = trackedCases.reduce((a, c) =>
    c.forfeiture_usd > a.forfeiture_usd ? c : a
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Texas Bitcoin Case Tracker",
    description: `The living dataset of federal § 1960 and crypto prosecutions in Texas — ${trackerStats.case_count} cases from public DOJ press releases, updated nightly.`,
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-07-24",
    dateModified: trackerDerived.lastUpdated,
  };

  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Texas Federal Crypto & § 1960 Prosecutions",
    description: `Structured dataset of ${trackerStats.case_count} federal money-transmission and cryptocurrency prosecutions in Texas's four federal districts, extracted from public U.S. Department of Justice press releases: case title, date, district, statutes cited, themes, and forfeiture amounts.`,
    url: pageUrl,
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
    creator: { "@type": "Organization", name: site.name, url: site.url },
    dateModified: trackerDerived.lastUpdated,
    temporalCoverage: `${trackerDerived.earliestYear}/..`,
    spatialCoverage: { "@type": "Place", name: "Texas, United States" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Texas Bitcoin Case Tracker",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {[articleJsonLd, datasetJsonLd, faqJsonLd, breadcrumbJsonLd].map(
        (schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )
      )}

      <article className="mx-auto max-w-4xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / Texas Bitcoin Case Tracker
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Living dataset · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Texas Bitcoin Case Tracker
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every federal money-transmission and crypto prosecution announced
            in Texas&apos;s four federal districts, extracted from the public
            DOJ record and rebuilt nightly. Where{" "}
            <Link
              href="/texas-bitcoin-law-timeline"
              className="underline decoration-accent/40 underline-offset-2 hover:text-accent-soft"
            >
              the law timeline
            </Link>{" "}
            tracks what the law says, this page tracks how it gets enforced.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published July 24, 2026 · Updated{" "}
            {formatDate(trackerDerived.lastUpdated)}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Federal prosecutors in Texas have announced{" "}
            {trackerStats.case_count} cryptocurrency and money-transmission
            prosecutions since {trackerDerived.earliestYear}, with{" "}
            {formatUsd(trackerStats.total_forfeitures_usd)} in announced
            forfeitures across all four federal districts. The{" "}
            {trackerDerived.busiestDistrict} leads in volume. Every case below
            is sourced to its original Department of Justice press release.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              The dataset tracks {trackerStats.case_count} federal
              prosecutions in Texas districts, from{" "}
              {trackerDerived.earliestYear} through{" "}
              {formatDate(trackerDerived.latestDate)}, each linked to its DOJ
              press release.
            </li>
            <li>
              Announced forfeitures across tracked cases total{" "}
              {formatUsd(trackerStats.total_forfeitures_usd)}; the largest
              single case is &ldquo;{largest.title}&rdquo; at{" "}
              {formatUsd(largest.forfeiture_usd)}.
            </li>
            <li>
              The {trackerDerived.busiestDistrict} accounts for{" "}
              {trackerDerived.busiestDistrictCount} tracked cases — the most
              of the four Texas federal districts.
            </li>
            <li>
              Case data regenerates nightly from the Department of
              Justice&apos;s public press-release archive; this build reflects
              data generated {formatDate(trackerDerived.lastUpdated)}.
            </li>
          </ul>
        </div>

        {/* The tracker */}
        <section className="mt-10" aria-label="Case tracker">
          <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            The tracked cases
          </h2>
          <CaseTracker cases={trackedCasesWithSlug} />
          <p className="mt-4 text-xs leading-relaxed text-muted-2">
            Case titles open a full case page built from the DOJ record;
            details reflect DOJ announcements, which describe allegations and
            outcomes as of publication. Defendants are presumed innocent unless
            and until proven guilty. Nothing here is legal advice.
          </p>
        </section>

        {/* Browse by district */}
        <section className="mt-10" aria-label="Browse by district">
          <h2 className="mb-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Browse by federal district
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {DISTRICTS.map((d) => {
              const count = trackedCases.filter(
                (c) => c.district === d.name
              ).length;
              return (
                <Link
                  key={d.slug}
                  href={`/texas-bitcoin-case-tracker/district/${d.slug}`}
                  className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/40"
                >
                  <p className="font-display text-lg font-semibold">
                    {d.short}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-2">
                    {d.cities}
                  </p>
                  <p className="mt-2 text-sm text-accent-soft">
                    {count} case{count === 1 ? "" : "s"} →
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <div className="prose-tx mt-12">
          <p>
            The rows above are the record; the reading of them - the
            acceleration curve, the forfeiture spikes, the charge mix, the
            district map - lives in{" "}
            <Link href="/texas-crypto-enforcement-report">
              the enforcement report
            </Link>
            , recomputed from this dataset on every refresh.
          </p>

          <h2>What is 18 U.S.C. § 1960?</h2>
          <p>
            Section 1960 of Title 18 makes it a federal crime to operate an{" "}
            <strong>unlicensed money transmitting business</strong>. It is a
            registration offense: the crime is moving money for others without
            the required FinCEN registration or state license — no fraud, no
            victim, and no bad intent beyond the missing paperwork is required
            for the core offense. That structure is why § 1960 became federal
            prosecutors&apos; workhorse statute for early peer-to-peer bitcoin
            sellers, and why it sits at the center of the case of{" "}
            <Link href="/doctor-bitcoin">
              Mark &ldquo;Doctor Bitcoin&rdquo; Hopkins
            </Link>{" "}
            — the Dallas-area educator whose prosecution is this site&apos;s
            deepest study of the statute&apos;s human cost. Texas state law
            points the other way: under Supervisory Memorandum 1037, selling
            your own bitcoin requires no state license — the seam between
            those two maps is exactly where § 1960 cases live, and it&apos;s
            traced in full on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            .
            <SeamMark to="/bitcoin-mining-map-texas" step={2} />
          </p>

          <h2>How is this tracker built?</h2>
          <p>
            The pipeline starts with the Department of Justice&apos;s public
            press-release archive — government works in the public domain. An
            open-source collector (
            <a
              href="https://github.com/actuallyrizzn/project1960"
              target="_blank"
              rel="noopener noreferrer"
            >
              project1960
            </a>
            , CC BY-SA 4.0) scrapes the full archive, filters for § 1960 and
            cryptocurrency cases, and extracts structured fields — district,
            charges, forfeiture amounts, themes — which we then narrow to
            Texas&apos;s four federal districts with strict relevance checks.
            The dataset regenerates nightly, so new prosecutions appear here
            within a day of the DOJ announcing them. The tracker shows nothing
            about any defendant beyond what the government itself published,
            and every row links back to its primary source.
          </p>

          <h2>What kinds of cases appear here?</h2>
          <p>
            The docket is a map of how crypto actually meets the criminal
            law in Texas: money-laundering conspiracies where crypto was the
            rail, darknet-market prosecutions out of Houston and Dallas,
            romance- and investment-scam cases with crypto off-ramps,
            unlicensed exchange operations, and seizure-and-forfeiture actions
            recovering stolen or laundered funds. Filter by theme above to
            slice the docket; filter by year to watch enforcement volume track
            the market cycle. What the dataset does <em>not</em> show is any
            prosecution for simply owning, mining, or trading bitcoin — that
            conduct is legal, as{" "}
            <Link href="/texas-bitcoin-law-timeline">the law timeline</Link>{" "}
            documents in detail.
          </p>
        </div>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources & licensing */}
        <section className="mt-14 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold">
            Sources &amp; licensing
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Case data is sourced from public U.S. Department of Justice press
            releases via{" "}
            <a
              href="https://www.justice.gov/news"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent/40 underline-offset-2 hover:text-accent-soft"
            >
              justice.gov/news
            </a>{" "}
            (public domain), collected and structured with the open-source{" "}
            <a
              href="https://github.com/actuallyrizzn/project1960"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent/40 underline-offset-2 hover:text-accent-soft"
            >
              project1960
            </a>{" "}
            pipeline (
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent/40 underline-offset-2 hover:text-accent-soft"
            >
              CC BY-SA 4.0
            </a>
            ), which we&apos;ve extended for Texas-district filtering. The
            resulting dataset is shared under the same license. This is a
            research and reference page, not legal advice; per district
            conventions, cases are attributed to the districts named in DOJ
            announcements. Every district count, forfeiture figure, and date
            on this page is computed directly from the dataset at build time
            — nothing is hand-maintained.
          </p>
        </section>
      </article>
    </>
  );
}
