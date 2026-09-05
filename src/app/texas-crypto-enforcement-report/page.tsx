import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  enforcementReport as r,
  formatUsd,
  formatDate,
  shortDistrict,
  themeLabel,
} from "@/lib/enforcement-report";
import { districtSlug, trackedCases } from "@/lib/case-tracker";

const pageUrl = `${site.url}/texas-crypto-enforcement-report`;

export const metadata: Metadata = {
  title: "The Enforcement Ledger: Crypto Prosecutions in Texas",
  description: `What ${r.caseCount} DOJ cases say about federal crypto enforcement in Texas: the acceleration from ${r.firstYear} to a ${r.peakYear.year} peak of ${r.peakYear.cases} announced cases, ${formatUsd(r.totalForfeituresUsd)} in announced forfeitures, the money-laundering and unlicensed-transmission core, and which of the four federal districts carries the docket. Computed from the case tracker's dataset on every refresh.`,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Enforcement Ledger: Crypto Prosecutions in Texas",
    description:
      "The narrative layer on the Texas § 1960 case tracker: the acceleration, the forfeiture spikes, the charge mix, and the district map - every number computed from the dataset at build time.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "How many crypto prosecutions have there been in Texas?",
    a: `The tracker holds ${r.caseCount} Department of Justice press releases announcing cryptocurrency-related federal cases across Texas's four federal districts, from ${r.firstYear} through the present, with ${formatUsd(r.totalForfeituresUsd)} in announced forfeitures. The count reflects DOJ announcements - charges, convictions, sentences, and seizures - not a docket census.`,
  },
  {
    q: "Is federal crypto enforcement in Texas increasing?",
    a: `Yes, steadily. Announced cases climbed from ${r.years[0].cases} in ${r.firstYear} to ${r.peakYear.cases} in ${r.peakYear.year}, the busiest completed year in the dataset${r.currentYear ? `, and ${r.currentYear.year} had already logged ${r.currentYear.cases} announcements by the dataset's latest refresh` : ""}. The growth tracks the asset class itself: more users, more value, more fraud targeting both - and more prosecutions following.`,
  },
  {
    q: "What is 18 U.S.C. § 1960?",
    a: "Section 1960 is the federal statute criminalizing operation of an unlicensed money transmitting business. It is a registration offense - no fraud or victim loss is required - which is why it functions as federal prosecutors' workhorse charge against unregistered crypto exchangers, from industrial laundering operations to individual peer-to-peer traders.",
  },
  {
    q: "Which Texas federal district prosecutes the most crypto cases?",
    a: `The ${r.districts[0].district} leads the dataset with ${r.districts[0].count} announced cases, followed by the ${r.districts[1].district} with ${r.districts[1].count}. All four Texas districts are active; the Dallas-Fort Worth and Houston metros anchor the docket, matching where the state's population, money flows, and field offices concentrate.`,
  },
  {
    q: "What are the biggest crypto forfeitures in Texas?",
    a: `The largest announced forfeiture in the dataset is ${formatUsd(r.largestCase.forfeitureUsd)} (${r.largestCase.district}, ${r.largestCase.date ? r.largestCase.date.slice(0, 4) : ""}). Forfeiture totals are lumpy: a single landmark case can dominate a year, which is why the report reads case counts as the trend line and forfeitures as spikes.`,
  },
];

function C({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#r${n}`} aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

// Build-time SVG: announced cases per year. Pure geometry from the dataset -
// no client JS. Theme-aware via CSS variables.
function CasesPerYearChart() {
  const W = 720;
  const H = 240;
  const padL = 34;
  const padB = 28;
  const padT = 18;
  const chartW = W - padL - 12;
  const chartH = H - padT - padB;
  const max = Math.max(...r.years.map((y) => y.cases));
  const step = chartW / r.years.length;
  const barW = Math.min(34, step * 0.62);
  const nowYear = r.generatedAt.slice(0, 4);

  return (
    <figure className="mt-6 overflow-x-auto rounded-2xl border border-border bg-surface p-5">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Bar chart of announced crypto cases in Texas per year, ${r.firstYear} to ${nowYear}, rising from ${r.years[0].cases} to a peak of ${r.peakYear.cases} in ${r.peakYear.year}.`}
        className="min-w-[560px]"
      >
        {[0.25, 0.5, 0.75, 1].map((f) => {
          const v = Math.round(max * f);
          const y = padT + chartH - chartH * f;
          return (
            <g key={f}>
              <line
                x1={padL}
                x2={W - 12}
                y1={y}
                y2={y}
                stroke="var(--border)"
                strokeWidth="1"
              />
              <text
                x={padL - 6}
                y={y + 4}
                textAnchor="end"
                fontSize="11"
                fill="var(--muted-2, #888)"
              >
                {v}
              </text>
            </g>
          );
        })}
        {r.years.map((yr, i) => {
          const h = (yr.cases / max) * chartH;
          const x = padL + i * step + (step - barW) / 2;
          const y = padT + chartH - h;
          const partial = yr.year === nowYear;
          return (
            <g key={yr.year}>
              <rect
                x={x}
                y={y}
                width={barW}
                height={h}
                rx="3"
                fill={partial ? "color-mix(in srgb, var(--accent) 45%, transparent)" : "var(--accent)"}
              />
              <text
                x={x + barW / 2}
                y={y - 5}
                textAnchor="middle"
                fontSize="11"
                fill="var(--muted, #666)"
              >
                {yr.cases}
              </text>
              <text
                x={x + barW / 2}
                y={H - 10}
                textAnchor="middle"
                fontSize="10"
                fill="var(--muted-2, #888)"
              >
                {"’" + yr.year.slice(2)}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-3 text-xs text-muted-2">
        DOJ-announced cryptocurrency cases in Texas per year, {r.firstYear}
        &ndash;{nowYear}. The {nowYear} bar is a partial year (dataset
        refreshed {formatDate(r.generatedAt)}). Announcement dates, not filing
        dates. Source: the {site.name} case tracker dataset.
      </figcaption>
    </figure>
  );
}

// enforcement-figs:start
// Four figures, one per chapter. Unlike the static figures elsewhere on the
// site these compute from the report object at build time, so the weekly
// dataset refresh redraws them. Server-rendered SVG, no client JS.
const FIG_FRAME =
  "mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6";
const KICKER = { fontSize: 11, fontWeight: 600, letterSpacing: 2, fill: "var(--accent)" } as const;

function ChargeMixFigure() {
  const W = 810;
  const rows = r.topThemes;
  const H = 70 + rows.length * 30 + 36;
  const max = Math.max(...rows.map((t) => t.count));
  const bx = 300;
  const wpc = (W - bx - 70) / max;
  const hot = new Set(["money_laundering", "unlicensed_money_transmitting_business"]);
  return (
    <figure className={FIG_FRAME}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`What prosecutors charge: the ${rows.length} most common themes across ${r.caseCount} Texas cases`} className="h-auto w-full min-w-[640px]">
        <text x="28" y="30" {...KICKER}>THE CHARGE MIX · THEMES ACROSS {r.caseCount} ANNOUNCED CASES · A CASE CAN CARRY SEVERAL</text>
        {rows.map((t, i) => {
          const y = 56 + i * 30;
          const isHot = hot.has(t.theme);
          return (
            <g key={t.theme}>
              <text x={bx - 12} y={y + 14} fontSize="11.5" fontWeight="600" textAnchor="end" fill={isHot ? "var(--foreground)" : "var(--muted)"} fontFamily="var(--font-display)">{themeLabel(t.theme)}</text>
              <rect x={bx} y={y} width={t.count * wpc} height="20" rx="3" fill={isHot ? "var(--accent)" : "var(--muted-2)"} />
              <text x={bx + t.count * wpc + 8} y={y + 14} fontSize="11" fill="var(--muted)">{t.count}</text>
            </g>
          );
        })}
        <text x={W / 2} y={H - 10} fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">the two in orange are the movement of money – laundering and § 1960 – not the asset · computed from the dataset, {formatDate(r.generatedAt)}</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The charge mix. Themes across every announced case, a case counting once per theme it carries. Money laundering and unlicensed money transmission lead: the federal caseload is about who moves money and whether they registered, not about the asset. Recomputed from the dataset on every refresh.
      </figcaption>
    </figure>
  );
}

function ForfeitureWeatherFigure() {
  const W = 810;
  const H = 300;
  const x0 = 64, x1 = 790, base = 236, top = 76;
  const max = Math.max(...r.years.map((y) => y.forfeituresUsd), 1);
  const slot = (x1 - x0) / r.years.length;
  const bw = Math.min(30, slot * 0.6);
  const sc = (base - top) / max;
  const yearOf = (d: string | null) => (d ? d.slice(0, 4) : "");
  const callouts = r.topForfeitures.slice(0, 3);
  return (
    <figure className={FIG_FRAME}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Announced forfeitures by year, ${r.firstYear} to ${r.generatedAt.slice(0, 4)}, with the largest cases marked`} className="h-auto w-full min-w-[640px]">
        <text x="28" y="30" {...KICKER}>FORFEITURES AS WEATHER · {formatUsd(r.totalForfeituresUsd)} ANNOUNCED, BY YEAR</text>
        <line x1={x0} x2={x1} y1={base} y2={base} stroke="var(--muted-2)" />
        {r.years.map((y, i) => {
          const cx = x0 + slot * (i + 0.5);
          const h = y.forfeituresUsd * sc;
          return (
            <g key={y.year}>
              <rect x={cx - bw / 2} y={base - h} width={bw} height={h} rx="3" fill={y.forfeituresUsd > 0 ? "var(--accent)" : "var(--border)"} fillOpacity={y.forfeituresUsd > 0 ? 0.85 : 1} />
              {y.forfeituresUsd === 0 && <rect x={cx - bw / 2} y={base - 3} width={bw} height="3" fill="var(--border)" />}
              <text x={cx} y={base + 16} fontSize="10" textAnchor="middle" fill="var(--muted-2)">{y.year.slice(2)}</text>
              {y.forfeituresUsd > 0 && <text x={cx} y={base - h - 6} fontSize="9.5" textAnchor="middle" fill="var(--muted)">{formatUsd(y.forfeituresUsd)}</text>}
            </g>
          );
        })}
        {callouts.map((c, i) => {
          const idx = r.years.findIndex((y) => y.year === yearOf(c.date));
          if (idx < 0) return null;
          const cx = x0 + slot * (idx + 0.5);
          const h = r.years[idx].forfeituresUsd * sc;
          const ly = 52 + i * 15;
          return (
            <g key={c.slug}>
              <circle cx={cx} cy={base - h - 22} r="7" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.25" />
              <text x={cx} y={base - h - 18.5} fontSize="9" fontWeight="600" textAnchor="middle" fill="var(--accent)">{i + 1}</text>
              <circle cx={x0 + 8} cy={ly - 3.5} r="7" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.25" />
              <text x={x0 + 8} y={ly} fontSize="9" fontWeight="600" textAnchor="middle" fill="var(--accent)">{i + 1}</text>
              <text x={x0 + 22} y={ly} fontSize="10" fill="var(--foreground)">{formatUsd(c.forfeitureUsd)} · {shortDistrict(c.district)} · {yearOf(c.date)}</text>
            </g>
          );
        })}
        <text x={W / 2} y={H - 10} fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">the three largest single matters, marked · years with no announced forfeiture shown flat · forfeitures as announced, not as collected</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Forfeitures as weather. Announced forfeitures by year, to scale, with the three largest single matters marked. One case accounts for roughly half the all-time total, which is why the report reads case counts as the trend and forfeitures as weather. Recomputed on every refresh.
      </figcaption>
    </figure>
  );
}

function DistrictFigure() {
  const W = 810;
  const H = 60 + r.districts.length * 40 + 44;
  const bx = 250;
  const max = r.districts[0]?.count ?? 1;
  const wpc = (W - bx - 110) / max;
  const total = r.districts.reduce((s, d) => s + d.count, 0);
  return (
    <figure className={FIG_FRAME}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Cases by federal district: ${r.districts.map((d) => `${shortDistrict(d.district)} ${d.count}`).join(", ")}`} className="h-auto w-full min-w-[640px]">
        <text x="28" y="30" {...KICKER}>THE DOCKET BY DISTRICT · {total} CASES ACROSS TEXAS&apos;S FOUR FEDERAL DISTRICTS</text>
        {r.districts.map((d, i) => {
          const y = 56 + i * 40;
          const pct = Math.round((d.count / total) * 100);
          return (
            <g key={d.district}>
              <text x={bx - 12} y={y + 12} fontSize="12.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">{shortDistrict(d.district)}</text>
              <text x={bx - 12} y={y + 26} fontSize="9.5" textAnchor="end" fill="var(--muted-2)">{i === 0 ? "Dallas–Fort Worth" : d.district.startsWith("Southern") ? "Houston" : d.district.startsWith("Eastern") ? "Sherman–Plano" : "Austin–San Antonio–El Paso"}</text>
              <rect x={bx} y={y} width={d.count * wpc} height="24" rx="4" fill={i === 0 ? "var(--accent)" : i === 1 ? "var(--accent-soft)" : "var(--star)"} fillOpacity={1 - i * 0.15} />
              <text x={bx + d.count * wpc + 8} y={y + 16} fontSize="11.5" fontWeight="600" fill="var(--foreground)">{d.count}</text>
              <text x={bx + d.count * wpc + 8 + 24} y={y + 16} fontSize="10.5" fill="var(--muted-2)">{pct}%</text>
            </g>
          );
        })}
        <text x={W / 2} y={H - 10} fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">a population-and-infrastructure map, with the Eastern District as the overperformer · computed from the dataset</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The docket by district. Announced cases in each of Texas&apos;s four federal districts, with each district&apos;s share of the whole. The ranking tracks population and field offices; the Eastern District&apos;s outsized share reflects the Sherman–Plano corridor&apos;s fraud and botnet matters. Recomputed on every refresh.
      </figcaption>
    </figure>
  );
}

function CoverageFigure() {
  const W = 810;
  const H = 230;
  const n = r.caseCount;
  const dated = n - r.undatedCount;
  const withForfeiture = trackedCases.filter((c) => (c.forfeiture_usd || 0) > 0).length;
  const withThemes = trackedCases.filter((c) => c.themes.length > 0).length;
  const rows: [string, number, string][] = [
    ["Carry an announcement date", dated, "the year charts count these"],
    ["Carry at least one theme", withThemes, "the charge mix counts these"],
    ["Announce a forfeiture", withForfeiture, "the rest report $0 – often because none was announced"],
  ];
  const bx = 280;
  const wpc = (W - bx - 60) / n;
  return (
    <figure className={FIG_FRAME}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`What the dataset measures: of ${n} DOJ press releases, ${dated} carry a date, ${withThemes} carry a theme, ${withForfeiture} announce a forfeiture`} className="h-auto w-full min-w-[640px]">
        <text x="28" y="30" {...KICKER}>WHAT THE LEDGER MEASURES · OF {n} DOJ PRESS RELEASES, HOW MANY…</text>
        <rect x={bx} y="52" width={n * wpc} height="10" rx="2" fill="var(--surface-2)" stroke="var(--border)" />
        <text x={bx + n * wpc} y="48" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">all {n}</text>
        {rows.map(([label, v, note], i) => {
          const y = 78 + i * 44;
          return (
            <g key={label}>
              <text x={bx - 12} y={y + 14} fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">{label}</text>
              <rect x={bx} y={y} width={n * wpc} height="20" rx="3" fill="var(--surface-2)" stroke="var(--border)" />
              <rect x={bx} y={y} width={v * wpc} height="20" rx="3" fill={i === 2 ? "var(--star)" : "var(--accent)"} fillOpacity={i === 2 ? 0.9 : 0.75} />
              {v * wpc > (W - bx) * 0.6 ? (
                <text x={bx + 10} y={y + 14} fontSize="10.5" fontWeight="600" fill="var(--surface)">{v} · {note}</text>
              ) : (
                <>
                  <text x={bx + Math.max(v * wpc, 30) + 8} y={y + 14} fontSize="11" fontWeight="600" fill="var(--foreground)">{v}</text>
                  <text x={bx + Math.max(v * wpc, 30) + 8 + 28} y={y + 14} fontSize="10" fill="var(--muted-2)">{note}</text>
                </>
              )}
            </g>
          );
        })}
        <text x={W / 2} y={H - 10} fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">press releases, not dockets: announcement dates, prosecutor summaries, forfeitures as announced · counts recompute on every refresh</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        What the ledger measures. The unit of count is a DOJ press release. Most carry a date and a theme; only a minority announce a forfeiture, so the dollar figures describe what prosecutors chose to say, not what courts collected. Every bar recomputes from the dataset on each refresh.
      </figcaption>
    </figure>
  );
}
// enforcement-figs:end

export default function EnforcementReportPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Enforcement Ledger: Crypto Prosecutions in Texas",
    description: `What ${r.caseCount} DOJ cases say about federal crypto enforcement in Texas - the acceleration, the forfeiture spikes, the charge mix, and the district map.`,
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-29",
    dateModified: r.generatedAt,
    about: [
      { "@type": "Thing", name: "Cryptocurrency" },
      { "@type": "Thing", name: "18 U.S.C. § 1960" },
      { "@type": "Thing", name: "Asset forfeiture" },
    ],
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
        name: "Texas Crypto Enforcement Report",
        item: pageUrl,
      },
    ],
  };

  const nowYear = r.generatedAt.slice(0, 4);

  return (
    <>
      {[articleJsonLd, faqJsonLd, breadcrumbJsonLd].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="mx-auto max-w-4xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          /{" "}
          <Link
            href="/texas-bitcoin-case-tracker"
            className="hover:text-accent-soft"
          >
            Case Tracker
          </Link>{" "}
          / Enforcement Report
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Analysis · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Enforcement Ledger: What {r.caseCount} Cases Say About Crypto
            Prosecutions in Texas
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            <Link href="/texas-bitcoin-case-tracker">The case tracker</Link>{" "}
            holds the rows; this page reads them. Every number below is
            computed from the tracker&apos;s dataset at build time and
            re-derives itself on each data refresh - the acceleration curve,
            the forfeiture spikes, the charge mix, and which of Texas&apos;s
            four federal districts carries the docket. It is the narrative
            layer on a data asset, not a frozen snapshot.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 29, 2026 · Data refreshed{" "}
            {formatDate(r.generatedAt)}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Federal crypto enforcement in Texas is growing, professionalized,
            and concentrated: {r.caseCount} DOJ-announced cases since{" "}
            {r.firstYear} across all four Texas federal districts, rising from{" "}
            {r.years[0].cases} announcements in {r.firstYear} to{" "}
            {r.peakYear.cases} in {r.peakYear.year}, with{" "}
            {formatUsd(r.totalForfeituresUsd)} in announced forfeitures. Money
            laundering and unlicensed money transmission (18 U.S.C. § 1960)
            anchor the charge mix, and the{" "}
            {shortDistrict(r.districts[0].district)} district leads the docket.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each computed from the dataset */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key figures · computed from the dataset
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              The tracker holds {r.caseCount} DOJ-announced cryptocurrency
              cases in Texas, {r.firstYear}&ndash;{nowYear}, with{" "}
              {formatUsd(r.totalForfeituresUsd)} in announced forfeitures.
              <C n={1} />
            </li>
            <li>
              {r.peakYear.year} is the busiest completed year with{" "}
              {r.peakYear.cases} announced cases
              {r.currentYear
                ? `; ${r.currentYear.year} had logged ${r.currentYear.cases} by ${formatDate(r.generatedAt)}`
                : ""}
              .<C n={1} />
            </li>
            <li>
              Money laundering appears in {r.launderingCount} cases and
              unlicensed money transmission - the § 1960 offense - in{" "}
              {r.umtbCount}, the two most common substantive themes.<C n={1} />
            </li>
            <li>
              The {r.districts[0].district} leads with {r.districts[0].count}{" "}
              cases; the {r.districts[1].district} follows with{" "}
              {r.districts[1].count}; all four Texas districts are active.
              <C n={1} />
            </li>
            <li>
              The largest announced forfeiture is{" "}
              {formatUsd(r.largestCase.forfeitureUsd)}, from a{" "}
              {r.largestCase.date ? r.largestCase.date.slice(0, 4) : ""}{" "}
              {shortDistrict(r.largestCase.district)} case - a single matter
              that dominates its year&apos;s total.<C n={1} /><C n={2} />
            </li>
          </ul>
        </div>

        {/* The chart - visual-first */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            The acceleration, drawn
          </h2>
          <CasesPerYearChart />
        </section>

        <div className="prose-tx mt-12">
          <h2>Is federal crypto enforcement in Texas increasing?</h2>
          <p>
            Unambiguously. The dataset opens in {r.firstYear} with{" "}
            {r.years[0].cases} announced cases - the Silk Road era, when a
            crypto prosecution was still an exotic event - and climbs nearly
            every year since, reaching {r.peakYear.cases} announcements in{" "}
            {r.peakYear.year}.
            {r.currentYear &&
              ` The current year is tracking the same curve: ${r.currentYear.cases} announcements by ${formatDate(r.generatedAt)}, with a third of the calendar left.`}{" "}
            The growth is not a crackdown story so much as a maturation story:
            enforcement volume tracks the asset class&apos;s own growth in
            users, value, and - inevitably - the fraud that targets both. A
            bigger, more legitimate crypto economy produces more cases the
            same way a bigger banking system does.<C n={1} />
          </p>

          <h2>What do prosecutors actually charge?</h2>
          <p>
            Two themes tower over the rest: <strong>money laundering</strong>{" "}
            ({r.launderingCount} cases) and{" "}
            <strong>unlicensed money transmission</strong> ({r.umtbCount}{" "}
            cases) - the latter being 18 U.S.C. § 1960, the registration
            offense this tracker is named for. The pattern matters for how
            Texans should read the docket: the federal government&apos;s
            crypto caseload is mostly about the <em>movement</em> of money -
            who transmits it, whether they registered, what predicate crime
            the funds trace to - rather than about the asset itself. Wire
            fraud, darknet drug trafficking, and cryptocurrency-investment
            fraud fill out the mix.<C n={1} /> Nothing in the dataset
            prosecutes owning, mining, or transacting Bitcoin lawfully - the
            legal baseline surveyed in{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law says about Bitcoin
            </Link>
            .
          </p>
          <p>
            The § 1960 count deserves its asterisk, and this site keeps it
            attached: a registration offense requires no fraud and no victim.
            The statute catches industrial laundering operations and
            unregistered peer-to-peer exchangers alike, and the distance
            between those two defendants is the distance the law does not
            measure - the seam explored through one Texan&apos;s case in{" "}
            <Link href="/doctor-bitcoin">Doctor Bitcoin</Link> and{" "}
            <Link href="/doctor-bitcoin-interviews">
              the Doctor Bitcoin Tapes
            </Link>
            .
          </p>

          <ChargeMixFigure />

          <h2>Where does the money go? Reading the forfeiture spikes</h2>
          <p>
            Announced forfeitures total{" "}
            <strong>{formatUsd(r.totalForfeituresUsd)}</strong>, but the
            total is the least informative number on this page - forfeitures
            are lumpy, and single cases dominate whole years. The largest
            matter in the dataset,{" "}
            <Link
              href={`/texas-bitcoin-case-tracker/${r.topForfeitures[0].slug}`}
            >
              a {formatUsd(r.topForfeitures[0].forfeitureUsd)}{" "}
              {shortDistrict(r.topForfeitures[0].district)} case announced in{" "}
              {formatDate(r.topForfeitures[0].date)}
            </Link>
            , accounts for roughly half the all-time total by itself.
            <C n={2} /> The next tier runs through{" "}
            {r.topForfeitures.slice(1, 3).map((c, i) => (
              <span key={c.slug}>
                {i > 0 ? " and " : ""}
                <Link href={`/texas-bitcoin-case-tracker/${c.slug}`}>
                  a {formatUsd(c.forfeitureUsd)}{" "}
                  {shortDistrict(c.district)} matter (
                  {c.date ? c.date.slice(0, 4) : ""})
                </Link>
              </span>
            ))}
            .<C n={1} /> Read case counts as the trend line and forfeitures
            as weather.
          </p>

          <ForfeitureWeatherFigure />

          <h2>Which district carries the docket?</h2>
          <p>
            All four, but not equally.{" "}
            {r.districts.map((d, i) => (
              <span key={d.district}>
                {i > 0 ? (i === r.districts.length - 1 ? ", and " : ", ") : ""}
                <Link
                  href={`/texas-bitcoin-case-tracker/district/${districtSlug(d.district)}`}
                >
                  the {shortDistrict(d.district)} district
                </Link>{" "}
                holds {d.count}
              </span>
            ))}
            .<C n={1} /> The ranking is a population-and-infrastructure map
            more than a policy map: Dallas&ndash;Fort Worth and Houston
            anchor the money flows, the field offices, and therefore the
            cases. The notable overperformer is the Eastern District -
            smaller metros, outsized docket - reflecting the
            Sherman&ndash;Plano corridor&apos;s role in fraud and botnet
            matters, including the dataset&apos;s largest forfeiture.
            <C n={2} />
          </p>

          <DistrictFigure />

          <h2>What this dataset is - and is not</h2>
          <p>
            The honest counterweight, stated plainly. The unit of count here
            is a <strong>DOJ press release</strong>, not a docket entry:
            announcement dates rather than filing dates, prosecutor-written
            summaries rather than court findings, and forfeitures as
            announced rather than as ultimately collected. Quiet cases that
            never earn a release are invisible to it; splashy ones can appear
            twice when two offices cross-post (the tracker de-duplicates
            these).<C n={1} /> It is, deliberately, a measure of what federal
            prosecutors <em>choose to say</em> about crypto enforcement in
            Texas - which is itself a signal worth tracking, and precisely
            why every number on this page recomputes from the dataset on each
            refresh instead of freezing into prose.
          </p>

          <CoverageFigure />

          <h2>What should Texans take from the ledger?</h2>
          <p>
            Three things. First, the enforcement curve is a legitimacy curve:
            prosecutions scale with adoption, and the state carrying
            America&apos;s largest mining fleet and its first funded Bitcoin
            reserve - told in{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the reserve reference
            </Link>{" "}
            - will naturally carry a thick federal docket too. Second, the
            charge mix says the perimeter is registration and provenance, not
            possession: know what § 1960 is before moving money for others.
            Third, the gap between the fraud the docket shows and the
            consumer protections the Legislature has not yet passed - the
            kiosk bills chronicled in{" "}
            <Link href="/texas-bitcoin-bills-that-died">the dead file</Link> -
            is where the next chapter of this report will likely be written.
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

        {/* Sources */}
        <section className="mt-14 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold">Sources</h2>
          <p className="mt-2 text-sm text-muted">
            Every figure on this page is computed at build time from the case
            tracker&apos;s dataset - itself assembled from Department of
            Justice press releases, each row linking its primary source. This
            is a research and reference article, not financial, investment, or
            legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            <li id="r1" className="flex scroll-mt-24 gap-2">
              <span className="shrink-0 text-muted-2">[1]</span>
              <span>
                {site.name} -{" "}
                <Link
                  href="/texas-bitcoin-case-tracker"
                  className="underline decoration-accent/40 underline-offset-2 hover:text-accent-soft"
                >
                  Texas Bitcoin &amp; Crypto Case Tracker
                </Link>{" "}
                dataset ({r.caseCount} cases, refreshed{" "}
                {formatDate(r.generatedAt)}); every case row links its DOJ
                press release.
              </span>
            </li>
            <li id="r2" className="flex scroll-mt-24 gap-2">
              <span className="shrink-0 text-muted-2">[2]</span>
              <span>
                U.S. Department of Justice -{" "}
                <Link
                  href={`/texas-bitcoin-case-tracker/${r.largestCase.slug}`}
                  className="underline decoration-accent/40 underline-offset-2 hover:text-accent-soft"
                >
                  {r.largestCase.title}
                </Link>{" "}
                ({shortDistrict(r.largestCase.district)},{" "}
                {formatDate(r.largestCase.date)};{" "}
                {formatUsd(r.largestCase.forfeitureUsd)} announced
                forfeiture).
              </span>
            </li>
          </ol>
        </section>
      </article>
    </>
  );
}
