import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  enforcementReport as r,
  formatUsd,
  formatDate,
  shortDistrict,
} from "@/lib/enforcement-report";
import { districtSlug } from "@/lib/case-tracker";

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
