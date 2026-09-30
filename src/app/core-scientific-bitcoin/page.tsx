import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionsBlock } from "@/components/institutions-block";
import { site } from "@/lib/site";
import {
  CORESCIENTIFIC_LAST_VERIFIED,
  dentonStrip,
  coreSources,
  coreTimeline,
  type CoreTimelineKind,
} from "@/lib/corescientific";

const pageUrl = `${site.url}/core-scientific-bitcoin`;

export const metadata: Metadata = {
  title: "Core Scientific: The Dimmer Switch That Became a Data Center",
  description:
    "Core Scientific and Texas, 2021–2026, sourced from its filings, the bankruptcy docket, and the City of Denton's record: the Seattle-born miner that moved to Austin, signed a partly redacted power contract with a city utility carrying $140 million of Winter Storm Uri debt, listed at a $4.3 billion valuation, filed for Chapter 11 in Houston eleven months later, and came out with its shareholders holding sixty percent. Then the AI turn: CoreWeave's $8.7 billion of leases, Denton's unanimous vote to convert the mine into a 394-megawatt supercomputer that no longer acts as a dimmer switch for the grid, the $9 billion sale the stockholders refused, a restatement, a $233 million county, a 1.5-gigawatt Pecos, AMD, $4.3 billion of debt - and, in September 2026, the same city's first hearing on a data-center moratorium.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Core Scientific: The Dimmer Switch That Became a Data Center",
    description:
      "Denton bought a flexible load to pay down its storm debt. The load became a base-load AI campus. Core Scientific's Texas record, from the filings, the docket, and the council minutes. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is Core Scientific?",
    a: "A Nasdaq-listed data-center company, ticker CORZ, founded in the Seattle suburbs in 2017, headquartered in Austin when it went public in January 2022, and led since August 2023 by Adam Sullivan. It began as one of the largest Bitcoin miners in North America and now earns most of its revenue leasing power and buildings to AI tenants, chiefly CoreWeave and, from 2027, AMD. It runs four Texas sites: Denton, Pecos, Austin, and a Hunt County campus under construction. Its 2025 annual report lists a Delaware registered office as its principal executive office, with leased offices in Texas and Florida.",
  },
  {
    q: "What happened in Denton?",
    a: "In August 2021 the Denton City Council, whose municipal utility was carrying about $140 million of debt from Winter Storm Uri, approved a partly redacted power contract and a land lease for a 300-megawatt Bitcoin mine beside the city's gas plant; council members were at first not allowed to name the company. In November 2024 the council voted unanimously to expand the lease to 78.85 acres and 394 megawatts for a $6.1 billion conversion to GPU computing, with $194 million in property tax to the city over ten years and no incentives. The utility said the site would no longer act as a 'dimmer switch' for the grid. In September 2026 the city held the first hearing on a ninety-day moratorium on new data centers.",
  },
  {
    q: "Did Core Scientific go bankrupt?",
    a: "Yes. It filed for Chapter 11 in the Southern District of Texas in Houston on December 21, 2022, with about $513 million of convertible notes outstanding, after a hosting customer, Celsius Mining, stopped paying and the bitcoin price fell toward $16,000. It emerged on January 23, 2024 under a plan confirmed by Judge Christopher Lopez that paid creditors in full or in stock and left existing shareholders with about 60% of the new equity, an unusual outcome; the judge called it 'a tremendous recovery for both unsecured creditors and also equity holders.' The shares relisted on Nasdaq the next day.",
  },
  {
    q: "What is the CoreWeave relationship?",
    a: "CoreWeave is Core Scientific's anchor tenant and once its would-be owner. In June 2024 Core Scientific turned down a $5.75-a-share takeover offer and instead signed twelve-year hosting leases that grew to about 590 megawatts and $10.2 billion of contracted revenue by February 2025, with the Denton site as the showcase. In July 2025 CoreWeave agreed to buy the whole company for about $9 billion in stock; the implied price fell with CoreWeave's shares, Two Seas Capital and the proxy advisers opposed it, and stockholders voted it down on October 30, 2025. The leases continue.",
  },
  {
    q: "How does Core Scientific handle the Texas grid?",
    a: "Its Denton contract let the city utility open the breaker when the grid was short, and industry trackers list the company among miners that routinely curtail in ERCOT programs; in Winter Storm Fern in January 2026 tracked miners' output fell by more than half. The AI conversion changes that: the utility told KERA in 2024 the Denton site would no longer act as a dimmer switch. In September 2026 the company reported that Denton's original 297 megawatts sit outside ERCOT's Batch Zero as pre-2022 base load, that Pecos's 300 existing and 300 new megawatts are conditionally approved inside it, and that Hunt County's 431 are advancing. It committed to the Governor's data-center standards on August 10, 2026.",
  },
  {
    q: "Is Core Scientific profitable?",
    a: "Rarely on a net basis. It earned $47.3 million in 2021, then lost $2.15 billion in 2022, $246.5 million in 2023, a restated $1.44 billion in 2024, $288.6 million in 2025, and $1.5 billion in the first half of 2026, most of the recent losses being non-cash marks on warrants issued in the bankruptcy. Colocation revenue was $136.7 million in the second quarter of 2026 against $21.5 million from mining. Long-term debt reached $4.3 billion in June 2026 after a $3.3 billion note sale. Sullivan's compensation was $6.4 million for 2024 and $9.0 million for 2025.",
  },
];

const kindStyle: Record<CoreTimelineKind, { color: string; label: string }> = {
  seattle: { color: "var(--star)", label: "The miner" },
  denton: { color: "var(--accent)", label: "Denton" },
  houston: { color: "#c98a4e", label: "Houston" },
  landlord: { color: "#6f9e6a", label: "The landlord" },
  watch: { color: "#8a7fb5", label: "The watch" },
};

function C({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#r${n}`} aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

// people-figs:start
// Two figures - the Denton record as a two-sided strip, and the revenue
// mix by year - drawn from the dated, sourced facts on this page
// (Sept 2026). Server-rendered SVG, no client JS.
function CoreDentonFigure() {
  const t0 = new Date("2020-12-01").getTime();
  const t1 = new Date("2026-12-01").getTime();
  const x0 = 110;
  const x1 = 750;
  const px = (d: string) => x0 + ((new Date(d).getTime() - t0) / (t1 - t0)) * (x1 - x0);
  const y = 150;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The Denton record 2021 to 2026: above the line, the city - Uri's debt, the 2021 contract, the unanimous 2024 vote, the 2026 moratorium hearing; below the line, the company - the listing, Chapter 11, emergence, CoreWeave, the rejected sale, base-load status">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE DENTON RECORD · THE CITY ABOVE THE LINE, THE COMPANY BELOW · 2021 → 2026</text>
        <line x1={x0} y1={y} x2={x1} y2={y} stroke="var(--muted-2)" strokeWidth="1.5" />
        {[2021, 2022, 2023, 2024, 2025, 2026].map((yr) => (
          <g key={yr}>
            <line x1={px(`${yr}-01-01`)} y1={y - 5} x2={px(`${yr}-01-01`)} y2={y + 5} stroke="var(--muted-2)" strokeWidth="1" />
            <text x={px(`${yr}-01-01`)} y={y + 4} fontSize="9" textAnchor="middle" fill="var(--muted-2)" dx="14">{yr}</text>
          </g>
        ))}
        {dentonStrip.map((k, i) => {
          const up = k.side === "city";
          const upIdx = dentonStrip.slice(0, i).filter((q) => q.side === "city").length;
          const dnIdx = dentonStrip.slice(0, i).filter((q) => q.side === "company").length;
          const tier = up ? upIdx % 2 : dnIdx % 3;
          const ly = up ? y - 34 - tier * 30 : y + 48 + tier * 30;
          const col = up ? "var(--accent)" : "#6f9e6a";
          return (
            <g key={k.l}>
              <line x1={px(k.d)} y1={up ? y - 6 : y + 6} x2={px(k.d)} y2={up ? ly + 14 : ly - 12} stroke="var(--border)" strokeWidth="1" />
              <circle cx={px(k.d)} cy={y} r="4.5" fill="var(--surface)" stroke={col} strokeWidth="2" />
              <text x={px(k.d)} y={ly} fontSize="10.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{k.l}</text>
              <text x={px(k.d)} y={ly + 12} fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">{k.sub}</text>
            </g>
          );
        })}
        <text x="405" y="292" fontSize="10" textAnchor="middle" fill="var(--muted-2)">BuzzFeed News Mar 2022 · Core Scientific 8-Ks and releases · Stretto docket · City of Denton Nov 2024 · KERA Nov 2024 and Sept 2026 · CoreWeave Oct 2025</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The Denton record. Blue is what the city did; green is what the company did. Read left to right it is a utility that signed a flexible-load contract to pay down a storm, a company that went through a Houston courtroom and came out owned by the same shareholders, and a site that was voted from a dimmer switch into base load – with the city now holding hearings on whether to let the next one in.
      </figcaption>
    </figure>
  );
}

function CoreRevenueFigure() {
  const years = [
    { y: "2021", mining: 544.5, colo: 0, ni: 47.3 },
    { y: "2022", mining: 640.3, colo: 0, ni: -2150 },
    { y: "2023", mining: 502.4, colo: 0, ni: -246.5 },
    { y: "2024", mining: 486.3, colo: 24.4, ni: -1437.9 },
    { y: "2025", mining: 253.6, colo: 65.4, ni: -288.6 },
    { y: "H1 2026", mining: 65.2, colo: 214.2, ni: -1502.5 },
  ];
  const x0 = 90;
  const bw = 88;
  const gap = 26;
  const baseY = 232;
  const scale = 170 / 700; // px per $M
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 312" role="img" aria-label="Core Scientific revenue by year, split between mining and colocation: 544 million in 2021, 640 million in 2022, 502 million in 2023, 511 million in 2024 of which 24 million colocation, 319 million in 2025 of which 65 million colocation, and 279 million in the first half of 2026 of which 214 million colocation; net income of plus 47 million, minus 2.15 billion, minus 247 million, minus 1.44 billion, minus 289 million, and minus 1.5 billion">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE MIX · REVENUE, $ MILLIONS, MINING AND HOSTING VS. COLOCATION · 2021 → MID-2026</text>
        <line x1={x0 - 14} y1={baseY} x2={x0 + 6 * (bw + gap)} y2={baseY} stroke="var(--muted-2)" strokeWidth="1.25" />
        {years.map((d, i) => {
          const x = x0 + i * (bw + gap);
          const hm = d.mining * scale;
          const hc = d.colo * scale;
          const total = d.mining + d.colo;
          return (
            <g key={d.y}>
              <rect x={x} y={baseY - hm} width={bw} height={hm} rx="3" fill="#c98a4e" fillOpacity="0.8" />
              {hc > 0 && <rect x={x} y={baseY - hm - hc} width={bw} height={hc} rx="3" fill="#6f9e6a" fillOpacity="0.85" />}
              <text x={x + bw / 2} y={baseY - hm - hc - 6} fontSize="11" fontWeight="700" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{Math.round(total).toLocaleString()}</text>
              <text x={x + bw / 2} y="252" fontSize="10" textAnchor="middle" fill="var(--muted-2)">{d.y}</text>
              <text x={x + bw / 2} y="266" fontSize="9" textAnchor="middle" fill={d.ni >= 0 ? "#6f9e6a" : "#c98a4e"}>{d.ni >= 0 ? "+" : "−"}{Math.abs(d.ni).toLocaleString()} net</text>
              {d.colo > 0 && <text x={x + bw / 2} y="279" fontSize="9" textAnchor="middle" fill="#6f9e6a">{Math.round((d.colo / total) * 100)}% colocation</text>}
            </g>
          );
        })}
        <rect x="560" y="46" width="10" height="10" fill="#c98a4e" fillOpacity="0.8" />
        <text x="575" y="55" fontSize="9" fill="var(--muted-2)">Mining and hosted mining</text>
        <rect x="560" y="62" width="10" height="10" fill="#6f9e6a" fillOpacity="0.85" />
        <text x="575" y="71" fontSize="9" fill="var(--muted-2)">Colocation (AI tenants)</text>
        <text x="405" y="304" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Core Scientific annual and quarterly releases 2022–2026 · Form 10-K 2025 · 2024 net loss as restated March 2026 · warrant marks drive the 2024–26 net figures</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The mix. A mining business that peaked at $640 million of revenue in the year it went bankrupt, and a colocation business that went from nothing in 2023 to three-quarters of revenue in the first half of 2026. The net line beneath is mostly the fair value of warrants issued in the bankruptcy passing through the income statement as the stock rises; the 2026 bar is two quarters.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function CoreScientificBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Core Scientific: The Dimmer Switch That Became a Data Center",
    description:
      "The Texas record of Core Scientific, from its filings, the bankruptcy docket, and the City of Denton's record: the Austin headquarters, the Denton power contract, the Houston Chapter 11, the emergence, CoreWeave, the conversion, the rejected sale, Pecos and Hunt County, AMD, the Governor's standards, Batch Zero, and the Denton moratorium.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    about: [
      { "@type": "Thing", name: "Bitcoin mining" },
      { "@type": "Corporation", name: "Core Scientific, Inc.", tickerSymbol: "CORZ" },
      { "@type": "Place", name: "Denton, Texas" },
      { "@type": "Place", name: "Pecos, Texas" },
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
        name: "Core Scientific and Texas",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {[articleJsonLd, faqJsonLd, breadcrumbJsonLd].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
        />
      ))}

      <article className="mx-auto max-w-4xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / Core Scientific &amp; Texas
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The companies
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Core Scientific: The Dimmer Switch That Became a Data Center
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            In August 2021 a city-owned utility in North Texas, carrying
            about a hundred and forty million dollars of debt from buying
            power at nine thousand dollars a megawatt-hour during Winter
            Storm Uri, signed a contract with a Bitcoin miner it was not at
            first allowed to name. The pitch was flexibility: a
            three-hundred-megawatt load that would pay the utility&apos;s
            bills and switch itself off when the grid was short. The
            company was a Seattle start-up that had moved its headquarters
            to Austin, and within sixteen months of the vote it had listed
            on Nasdaq at a $4.3 billion valuation and filed for bankruptcy
            in Houston. It came out of that courtroom with its
            shareholders still holding sixty percent, signed nine billion
            dollars of leases with an AI company, and went back to the
            same council to ask that the mine be made into a
            supercomputer. The council said yes without a dissenting
            vote. The utility said the site would no longer act as a
            dimmer switch. Two years on the company has four Texas sites,
            $4.3 billion of debt, a second tenant in AMD, and a city that
            has begun hearings on whether to let another data center in.
            The contract, the courtroom, and the conversion are the
            record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 30, 2026 · Updated{" "}
            {CORESCIENTIFIC_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Core Scientific is the Nasdaq-listed company, founded near
            Seattle in 2017 and headquartered in Austin when it went public
            in January 2022, that built one of the largest Bitcoin mining
            fleets in North America, filed for Chapter 11 in Houston in
            December 2022, emerged in January 2024 with shareholders
            holding 60%, and has since converted its Denton mine into a
            394-megawatt AI campus for CoreWeave, set Pecos on a path to
            1.5 gigawatts, bought a 431-megawatt site in Hunt County, and
            leased more than 500 megawatts to AMD. Its stockholders
            rejected a $9 billion sale to CoreWeave in October 2025. Its
            Texas load is now classed as base load, not flexible.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              The Denton City Council approved a power purchase agreement
              and lease for Core Scientific&apos;s 300-megawatt mine on
              August 24, 2021, with a 138-page contract partly redacted and
              the utility carrying about $140 million of Winter Storm Uri
              debt.<C n={6} /><C n={7} />
            </li>
            <li>
              Core Scientific filed for Chapter 11 in the Southern District
              of Texas on December 21, 2022 with about $513 million of
              convertible notes outstanding, and emerged January 23, 2024
              with existing shareholders holding about 60% of the new
              equity.<C n={8} /><C n={17} /><C n={20} />
            </li>
            <li>
              On November 19, 2024 Denton voted unanimously to expand the
              site to 78.85 acres and 394 megawatts for a $6.1 billion AI
              conversion, with $194 million in city property tax over ten
              years and no incentives; the utility said it would no longer
              act as a &ldquo;dimmer switch.&rdquo;<C n={23} /><C n={24} />
              <C n={25} />
            </li>
            <li>
              Core Scientific&apos;s stockholders voted down CoreWeave&apos;s
              roughly $9 billion all-stock acquisition on October 30, 2025,
              after turning down a $5.75-a-share offer in June
              2024.<C n={31} /><C n={34} /><C n={35} />
            </li>
            <li>
              AMD agreed on July 28, 2026 to lease more than 500 megawatts
              from 2027, including 185 at Pecos and 110 in Hunt County,
              expandable to 2.5 gigawatts.<C n={45} />
            </li>
            <li>
              On September 10, 2026 the company reported Denton&apos;s 297
              megawatts as base load outside ERCOT&apos;s Batch Zero,
              Pecos&apos;s 300 existing and 300 new megawatts conditionally
              approved within it, and Hunt County&apos;s 431 advancing with
              construction begun.<C n={50} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From a Seattle start-up to a Texas landlord
            </h2>
            <span className="text-xs text-muted-2">2017 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {coreTimeline.map((e) => {
              const s = kindStyle[e.kind];
              return (
                <li
                  key={e.date}
                  className="relative rounded-xl border border-border bg-surface p-5 pl-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
                    style={{ background: s.color }}
                  />
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <time dateTime={e.date} className="text-xs tabular-nums text-muted-2">
                      {e.dateLabel}
                    </time>
                    <span
                      className="rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        color: s.color,
                        borderColor: `color-mix(in srgb, ${s.color} 50%, transparent)`,
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                    {e.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {e.detail}{" "}
                    {e.sourceIds.map((n) => (
                      <C key={n} n={n} />
                    ))}
                  </p>
                </li>
              );
            })}
          </ol>
        </section>

        <div className="prose-tx mt-12">
          <h2>Where did Core Scientific come from?</h2>
          <p>
            From Bellevue, Washington, in 2017, and from Austin by the time
            anyone outside the industry had heard of it. The company moved
            its headquarters to Barton Springs Road before its merger with
            a special-purpose acquisition company, and when it listed on
            January 20, 2022 it called itself an Austin company with about
            $222 million of fresh trust money and a valuation of $4.3
            billion.<C n={3} /><C n={1} /> The business behind the valuation
            was real: $544.5 million of revenue in 2021, a $47.3 million
            profit, 5,769 bitcoin mined for its own account and 13.5
            exahash of machines, about half of them hosted for other
            people.<C n={4} /> The hosting half is what would put it in a
            Houston courtroom.
          </p>
          <p>
            Its first Texas site was Denton, announced in October 2021 as
            a 300-megawatt &ldquo;blockchain data center&rdquo; at 8171 Jim
            Christal Road beside the city&apos;s own gas-fired Denton Energy
            Center, and promised carbon-neutral through renewable
            certificates.<C n={5} /> A second, at Pecos in the Permian
            Basin, ran on real-time power prices through MP2
            Energy.<C n={11} /> The 2022 annual report lists Denton at up to
            297 megawatts, about 234,000 machines across the fleet, and
            235 employees.<C n={11} />
          </p>

          <h2>What did Denton sign, and why?</h2>
          <p>
            Denton Municipal Electric came out of Winter Storm Uri in
            February 2021 having spent about $210 million on emergency
            power at $9,000 a megawatt-hour and owing about $140 million
            it did not have. That summer a company approached it with a
            proposal to buy $9 to $11 million a year of power at full
            build-out, invest $200 million, and create sixteen permanent
            jobs; the council approved the power purchase agreement and a
            seven-year land lease on August 24, 2021, near-unanimously,
            with one member, Deb Armintor, opposed.<C n={7} /><C n={6} />
            BuzzFeed News reconstructed the process the following March:
            a 138-page contract with pages redacted, council members told
            they could not name the counterparty, a confidential
            curtailment agreement with ERCOT, and a clause letting the
            utility open the breaker when the grid was short while owing
            the company nothing if it did not. A resident: &ldquo;It&apos;s
            so weird the way everything was done so
            secretively.&rdquo;<C n={7} />
          </p>
          <p>
            The argument for the deal was the one Texas miners make
            everywhere: a large, interruptible load that pays for
            transmission and gets out of the way in a crunch. The
            utility&apos;s general manager would later tell KERA that since
            Uri there had been zero forced outages.<C n={25} /> Whether
            the mine deserves any of the credit is not in the record; the
            contract&apos;s curtailment terms are.
          </p>
          <CoreDentonFigure />

          <h2>Why did it go bankrupt, and what came out the other side?</h2>
          <p>
            Because its customers stopped paying. Celsius Mining, the
            mining arm of a lender that collapsed in July 2022, was the
            largest hosting customer and stopped meeting its power bills;
            the bitcoin price fell toward $16,000; and the company had
            about $513 million of convertible notes sold in 2021 at the
            top. On December 21, 2022 eleven Core Scientific entities
            filed for Chapter 11 in Houston, case 22-90341, with a
            noteholder group holding more than 70% of the paper agreed to
            take most of the new equity. The company&apos;s own list of
            causes was the price, the power, and &ldquo;failure by certain
            of its hosting customers to honor their payment
            obligations.&rdquo;<C n={8} /><C n={9} /><C n={10} /> The 2022
            net loss was $2.15 billion.<C n={15} />
          </p>
          <p>
            The Celsius fight ran on inside two bankruptcies. On January 3,
            2023 Core Scientific powered down more than 37,000 Celsius
            machines under a court order, saying it had absorbed about
            $7.8 million of Celsius&apos;s power costs; Celsius claimed $312
            million in damages and moved for contempt.<C n={12} />
            <C n={14} /> They settled on September 15, 2023: Core sold
            Celsius its Cedarvale site in Ward County, 215 megawatts of
            available power, for $14 million in cash against a $45 million
            agreed value, and both sides walked away from every
            claim.<C n={13} /> In August Adam Sullivan, a banker who had
            been the company&apos;s president, replaced Mike Levitt as chief
            executive; Levitt stayed as chairman.<C n={16} />
          </p>
          <p>
            What came out on January 23, 2024 is the unusual part.
            Judge Christopher Lopez confirmed a plan that paid creditors in
            full or in stock, removed about $1 billion of debt assuming the
            new warrants were exercised, funded a $55 million rights
            offering that was oversubscribed, and left the existing
            shareholders with about 60% of the reorganized
            company.<C n={17} /> &ldquo;A tremendous recovery for both
            unsecured creditors and also equity holders,&rdquo; the judge
            said; more than 240 jobs were preserved.<C n={18} /> The stock
            relisted on January 24 with bitcoin near $43,000, nearly three
            times the price on the day of the filing.<C n={19} />
            <C n={20} /> A page that said Core Scientific&apos;s bankruptcy
            wiped out its shareholders would be wrong. What it wiped out
            was the 2021 valuation, and what it created was a class of
            warrants whose fair value has driven the company&apos;s reported
            losses ever since.
          </p>

          <h2>How did the mine become a data center?</h2>
          <p>
            By way of a tenant that wanted to be an owner. CoreWeave, the
            GPU cloud company, offered $5.75 a share for Core Scientific in
            June 2024, about $1.02 billion; the board declined.<C n={34} />
            What it accepted instead, on June 3, was a set of twelve-year
            hosting contracts: 200 megawatts of CoreWeave&apos;s computing
            in Core Scientific&apos;s buildings, more than $3.5 billion of
            cumulative revenue, the tenant paying for the
            construction.<C n={21} /> CoreWeave exercised option after
            option; by October 22, 2024 the contracts covered about 500
            megawatts and $8.7 billion, and by February 2025, with a $1.2
            billion expansion at Denton, about 590 megawatts and $10.2
            billion.<C n={22} /><C n={27} />
          </p>
          <p>
            Denton had to agree, and did. On November 19, 2024 the council
            voted unanimously to expand the lease from about 31 acres to
            78.85 and the contracted power from 297 megawatts to 394, for
            what the company and the city both called a $6.1 billion
            investment: $194 million in property tax to the city over ten
            years, 300 on-site jobs, no incentives, two new substations,
            transmission by 2029.<C n={23} /><C n={24} /><C n={26} />
            Sullivan: &ldquo;Denton has been home to one of our most
            advanced data centers, and now we expect it will host one of
            the largest GPU supercomputers in North America.&rdquo;
            <C n={23} /> A council member said the change &ldquo;gets rid of
            the problematic associations that crypto has.&rdquo;<C n={25} />
            The utility&apos;s planners put the harder truth on the record
            the same week: peak load up 73% by 2044, energy served up from
            1.8 to 4.8 million megawatt-hours, the city&apos;s share of any
            statewide load shed roughly doubling, and a site that would no
            longer act as a &ldquo;dimmer switch.&rdquo;<C n={25} /> The
            flexibility that sold the mine in 2021 was the thing the
            conversion removed.
          </p>
          <p>
            Then CoreWeave tried again. On July 7, 2025 the two companies
            announced an all-stock merger: 0.1235 CoreWeave shares per
            Core Scientific share, about $9 billion, a 66% premium to the
            June price, and more than $10 billion of lease payments
            eliminated.<C n={31} /> CoreWeave&apos;s stock fell through the
            summer and took the offer down with it; by September 25 the
            implied price was about $15.64.<C n={34} /> Two Seas Capital,
            the largest active shareholder, published its case against the
            deal on October 13: &ldquo;inadequate value to Core Scientific
            shareholders, who own one of the best high-performance
            computing assets in the world.&rdquo;<C n={33} /> On October 30
            the stockholders voted it down. CoreWeave: &ldquo;We respect the
            views of Core Scientific stockholders and look forward to
            continuing our commercial partnership.&rdquo;<C n={35} /> The
            company that had been through Chapter 11 two years earlier had
            just refused nine billion dollars.
          </p>

          <h2>What has it built since?</h2>
          <p>
            Debt, land, and a second tenant. On March 2, 2026 it reported
            2025: revenue of $319 million, of which $65.4 million from
            colocation; a net loss of $288.6 million; about 350 megawatts
            energized for CoreWeave; and a restatement of 2024 and most of
            2025, because mining equipment slated for demolition in the
            conversions had stayed on the balance sheet instead of being
            written down. The auditor&apos;s opinion on 2024&apos;s internal
            controls was revised to adverse.<C n={36} /><C n={37} /> The
            same day it announced Hunt County: about 264 acres near Wieland
            that a solar developer had bought in 2023 and brought to the
            company late in 2025, and which the county&apos;s commissioners
            learned about from a local newspaper.<C n={40} /> The purchase
            closed in the first quarter for about $233 million.<C n={42} />
            At the May town hall in Lone Oak the company promised under
            6,750 gallons of water a day, closed-loop cooling, and that it
            would pay all of its own power costs; residents asked about
            runoff, bills, light, and noise, and the paper noted promotional
            material claiming $135 million a year in tax revenue for a city
            the site is not in.<C n={43} />
          </p>
          <p>
            In April it set Pecos, its 300-megawatt Permian mine, on a
            path to 1.5 gigawatts of gross power through a
            &ldquo;scalable behind-the-meter solution,&rdquo; with the first
            data hall&apos;s footings already poured.<C n={41} /> In May it
            sold $3.3 billion of 7.75% senior secured notes and 2,385
            bitcoin, and took a $266.5 million impairment on mining
            assets.<C n={42} /> On July 28 AMD agreed to lease more than
            500 megawatts from 2027, with 185 at Pecos and 110 in Hunt
            County, expandable to 2.5 gigawatts, and received warrants in
            return.<C n={45} /> The second-quarter results the same day
            showed what the company now is: $136.7 million of colocation
            revenue against $21.5 million from mining, 437 megawatts
            billing, about 1.1 gigawatts leased, long-term debt of $4.3
            billion, and a net loss of $1.16 billion on a $1.05 billion
            warrant mark.<C n={46} />
          </p>
          <CoreRevenueFigure />

          <h2>What is its record with the grid and the state?</h2>
          <p>
            Thinner than the other companies in this wing, and mostly
            about what its load is classed as rather than what it says.
            No Core Scientific witness appears on the 2023 SB 1751 list or
            the 2025 SB 6 list; the company&apos;s policy voice in Austin is
            Carol Haines, its head of power and policy, who told a Tribune
            event in February 2025 that SB 6&apos;s backup-generation language
            needed clarity - &ldquo;If the rules aren&apos;t clear, people
            won&apos;t come and they won&apos;t build.&rdquo;<C n={29} /> It is
            among the Texas Blockchain Council&apos;s largest financial
            contributors, and Senator Cruz accepted the council&apos;s
            endorsement at the Denton facility in August 2024.<C n={55} />
            <C n={56} /> Industry trackers list it among the miners that
            routinely curtail in ERCOT programs; in Winter Storm Fern in
            January 2026 tracked miners&apos; output fell by more than
            half, though no Core Scientific figure has been
            published.<C n={54} />
          </p>
          <p>
            The Governor&apos;s August 2026 directive put the company on the
            record. It committed to his standards on August 10 - pay for
            its own power and infrastructure, cool with little water, work
            with communities - and the Governor announced the commitment
            on the 12th: &ldquo;guardrails to ensure data centers protect
            our electric grid, conserve our water, respect our
            neighborhoods, and pay their own way.&rdquo;<C n={47} />
            <C n={48} /> ERCOT&apos;s audit of the roughly 300 projects in
            Batch Zero is due December 10.<C n={49} /> The company&apos;s
            September 10 filing is the clearest statement any Texas miner
            has made of where it sits: Denton&apos;s original 297 megawatts
            are base load under pathway (a), energized before March 2022,
            and outside Batch Zero entirely; 74 more were validated in
            2025; Pecos&apos;s 300 existing and 300 new are conditionally
            approved inside the batch with collateral posted; Hunt
            County&apos;s 431 are advancing, with a stability study passed,
            collateral posted, long-lead equipment ordered, and
            construction begun.<C n={50} /> Base load is the word. The
            dimmer switch is not.
          </p>

          <h2>The honest counterweight: the ledger, the tax base, and the moratorium</h2>
          <p>
            Three things. First, the ledger. This is a company that went
            bankrupt once on customer defaults and has since borrowed $4.3
            billion to build buildings for two tenants; its net income has
            been negative in five of the last six years, its 2024 accounts
            were restated, its auditor found a material weakness, and its
            chief executive&apos;s pay rose from $6.4 million to $9.0 million
            in the year the shareholders refused to be bought and
            registered, in the company&apos;s own words, &ldquo;lower
            support&rdquo; for the pay than it expected.<C n={37} />
            <C n={39} /> Second, the tax base, which cuts the other way.
            Denton got what it was promised and more: the conversion added
            about $3 billion of certified assessed value, enough for the
            city to cut its tax rate from $0.595420 to $0.548485 per
            hundred dollars, and a council member said in September 2026
            that the company was &ldquo;carrying their weight&rdquo;; the
            site has never had a noise case made against it, the closed
            cooling loop uses about what a large grocery store does, the
            company pays all of its own energy costs, and it has not asked
            for a megawatt beyond its contract.<C n={51} /><C n={44} />
            <C n={53} /> Third, the moratorium. On September 22 and 23,
            2026 the same council that voted unanimously for the conversion
            held its first hearing on a ninety-day pause on new data
            centers, and all twenty residents who spoke supported it; the
            company has asked the utility about leasing more land to the
            south without saying what for - &ldquo;They did not tell us
            what it&apos;s for&rdquo; - and a council member observed that
            &ldquo;we don&apos;t have longitudinal studies.&rdquo;<C n={51} />
            <C n={52} /><C n={53} /> The second hearing is October 27 and a
            vote may come December 1.
          </p>
          <p>
            The fair reading is that Denton made a good financial deal
            twice, first with a mine and then with its replacement, and
            gave up in the second deal the grid flexibility that had
            justified the first - and that the company, which has been
            through a bankruptcy, a restatement, and a shareholder revolt
            in four years, is now the most heavily indebted landlord in
            the Texas wing, with base-load status the state has yet to
            audit.
          </p>

          <h2>Where does Core Scientific stand today?</h2>
          <p>
            As of September 30, 2026: four Texas sites - Denton at 394
            megawatts and outside Batch Zero, Pecos at 600 conditionally
            approved and pointed at 1.5 gigawatts, Austin at 20, Hunt
            County at 431 under construction; about 1.1 gigawatts leased
            to CoreWeave and AMD; $4.3 billion of debt; a net loss of $1.5
            billion for the half-year on warrant marks; and a city council
            in Denton weighing a moratorium.<C n={50} /><C n={46} />
            <C n={51} /> The mine at Denton is gone; the sound the company
            makes now is a filing. The other companies in the wing are on{" "}
            <Link href="/riot-platforms-bitcoin">Riot Platforms and Texas</Link>{" "}
            and <Link href="/mara-holdings-bitcoin">MARA Holdings and Texas</Link>;
            the pivot itself is on{" "}
            <Link href="/texas-bitcoin-miners-ai-pivot">the Texas miners&apos; AI pivot</Link>;
            the grid&apos;s side is on{" "}
            <Link href="/ercot-bitcoin">ERCOT and Bitcoin</Link>; the sites
            are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
            This page is the dimmer switch Denton bought, and what it
            became.
          </p>
        </div>

        <InstitutionsBlock current="/core-scientific-bitcoin" />

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
            Primary record first: the company&apos;s own SEC filings,
            releases, and proxy statements; the bankruptcy court&apos;s
            claims agent; the City of Denton&apos;s agenda and releases;
            the Governor&apos;s office; then BuzzFeed News, KERA, the Denton
            Record-Chronicle, the Texas Tribune, CoinDesk, Cointelegraph,
            Utility Dive, and the local press in Hunt and Denton Counties
            for the quotes and the hearings. Where a figure was restated,
            the restated number is used and the original noted. This is a
            research and reference article, not financial, investment, or
            legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {coreSources.map((s) => (
              <li key={s.id} id={`r${s.id}`} className="flex scroll-mt-24 gap-2">
                <span className="shrink-0 text-muted-2">[{s.id}]</span>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words underline decoration-accent/40 underline-offset-2 hover:text-accent-soft"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </>
  );
}
