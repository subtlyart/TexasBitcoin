import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  ERCOT_LAST_VERIFIED,
  ercotMiningByYear,
  ercotSources,
  ercotTimeline,
  type ErcotTimelineKind,
} from "@/lib/ercot";

const pageUrl = `${site.url}/ercot-bitcoin`;

export const metadata: Metadata = {
  title: "ERCOT and Bitcoin: The Load It Counts as a Resource",
  description:
    "ERCOT and Bitcoin mining, 2020–2026, sourced from the grid operator's own reports and its market monitor: the first controllable load in 2020; the 2022 queue that ran from 17 to 35 gigawatts in four months; the December 2022 curtailment program and Winter Storm Elliott's 91.5% cut; the planning documents that count every large flexible load - 'typically a crypto-currency mining site' - as non-firm; mining at 1,530 megawatts in 2022, 3,600 in 2024, 4,600 in 2025, and 4,100 shed in Winter Storm Fern; all twelve registered controllable loads crypto mines; 64% of the emergency reserve service, which the monitor says 'essentially pays them to do what they would already do'; Riot's $31.7 million month, of which ERCOT's share was $7 million; the queue that outgrew the process, Batch Zero, and the audit.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "ERCOT and Bitcoin: The Load It Counts as a Resource",
    description:
      "The grid operator writes the mines into its plans as load it can switch off, and its own monitor says it pays them to do what they'd do anyway. ERCOT's record with Bitcoin, in ERCOT's numbers. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is ERCOT, and how is it different from the Public Utility Commission?",
    a: "ERCOT, the Electric Reliability Council of Texas, is the nonprofit grid operator for about 90 percent of the state's load - 27 million customers - running the wholesale market, the interconnection queue, the reserve services, and the curtailment programs, outside federal jurisdiction because its grid does not cross state lines. Its board was rebuilt by SB 2 in 2021 after Winter Storm Uri, with eight of eleven members chosen by a committee the governor, lieutenant governor, and speaker appoint. Pablo Vegas has been its chief executive since October 1, 2022. The Public Utility Commission is the five-member state agency that oversees ERCOT, approves its rule changes, and writes the rules the Legislature's statutes require; it has its own page.",
  },
  {
    q: "How does ERCOT treat Bitcoin mines?",
    a: "As a load it can switch off. ERCOT's capacity report states that 'all Loads other than Large Flexible Loads (i.e., crypto-currency mining) are considered Firm Loads' and that 'an LFL is typically a crypto-currency mining site'; its long-term forecast carries a 'Crypto' category. Mines can register as Controllable Load Resources - all twelve registered in 2025 were crypto mines - and sell their flexibility into the responsive and emergency reserve services. In Winter Storm Elliott the registered mines cut from 1,530 to 130 megawatts at the peak; in Winter Storm Fern in January 2026 ERCOT reported 'cryptocurrency mining began reducing ~4,100 MW.'",
  },
  {
    q: "How much does ERCOT pay Bitcoin miners?",
    a: "Less than the headlines say, and ERCOT publishes no total. When Riot reported $31.7 million in credits for August 2023, about $24 million were resale credits under its retail power contract with TXU and about $7 million were ERCOT ancillary-service payments - 'less than one percent of the program, which administered nearly $1 billion,' Riot said. The Independent Market Monitor's 2025 report found crypto mines held more than 64% of the emergency reserve service's capacity, inside a fixed $75 million annual budget, and concluded that 'allowing them to provide ERS essentially pays them to do what they would already do.' ERCOT filed NPRR1337 in May 2026 to exclude price-responsive loads from that service.",
  },
  {
    q: "How much Bitcoin mining is on the ERCOT grid?",
    a: "By ERCOT's and its monitor's figures: about 1,530 megawatts registered at the December 2022 peak, up to 2,300 across some twenty industrial mines by late 2023, more than 3,600 megawatts of non-coincident demand by the end of 2024, and about 4,600 megawatts in 2025. The Energy Information Administration put large flexible loads at 54 billion kilowatt-hours in 2025, roughly a tenth of ERCOT's consumption. By late 2025 crypto was about nine percent of a 226-gigawatt queue that was 73% data centers; by August 2026 the queue was 474 gigawatts, 90% data centers.",
  },
  {
    q: "What is Batch Zero?",
    a: "ERCOT's replacement for studying large loads one at a time. Kristi Hobbs told the board in December 2025 that 'we have outgrown the process,' which had been designed for forty or fifty loads in 2022. Under NPRR1325 and PGRR145, approved by the commission on June 18, 2026, all pending requests are studied together every six months; loads energized before July 10, 2026 are base load, the rest studied. It was the first batch process at any U.S. grid operator. On August 3 the Governor ordered an audit of every data center in the queue before more are approved; the commission granted ERCOT an extension on August 20, and the audit includes a community-impact review of every crypto facility of 25 megawatts or more, with a filing targeted for December 10.",
  },
];

const kindStyle: Record<ErcotTimelineKind, { color: string; label: string }> = {
  operator: { color: "var(--star)", label: "The operator" },
  load: { color: "#c98a4e", label: "The load" },
  resource: { color: "#6f9e6a", label: "The resource" },
  queue: { color: "var(--accent)", label: "The queue" },
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
// Two figures - mining as an ERCOT load by year, and the reserve-service
// board - drawn from the dated, sourced facts on this page (Sept 2026).
// Server-rendered SVG, no client JS.
function ErcotMiningFigure() {
  const max = 5000;
  const x0 = 70;
  const bw = 90;
  const gap = 26;
  const baseY = 200;
  const h = 130;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="Bitcoin mining as an ERCOT load by year: about 850 megawatts in 2021, 1,530 registered at the 2022 winter peak, about 2,300 in 2023, 3,600 in 2024, 4,600 in 2025, and 4,100 shed in Winter Storm Fern in January 2026">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE LOAD · BITCOIN MINING ON THE ERCOT GRID, MEGAWATTS, BY YEAR</text>
        <line x1={x0 - 10} y1={baseY} x2={x0 + 6 * (bw + gap)} y2={baseY} stroke="var(--border)" strokeWidth="1" />
        {ercotMiningByYear.map((d, i) => {
          const x = x0 + i * (bw + gap);
          const bh = (d.mw / max) * h;
          const fern = d.year === 2026;
          return (
            <g key={d.year}>
              <rect x={x} y={baseY - bh} width={bw} height={bh} rx="4" fill={fern ? "#c98a4e" : "var(--accent)"} fillOpacity="0.8" />
              <text x={x + bw / 2} y={baseY - bh - 6} fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{d.mw.toLocaleString()}</text>
              <text x={x + bw / 2} y={baseY + 16} fontSize="10" textAnchor="middle" fill="var(--muted-2)">{d.year}</text>
              <text x={x + bw / 2} y={baseY + 29} fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">{d.who}</text>
            </g>
          );
        })}
        <text x="28" y="256" fontSize="10" fill="var(--muted)">2021: industry estimate, 700–1,000 MW · 2022: registered at Elliott&apos;s peak, cut to 130 · 2023: ~20 mines, up to 2,300 · 2024: IMM non-coincident peak</text>
        <text x="28" y="270" fontSize="10" fill="var(--muted)">2025: IMM peak crypto demand · 2026 (amber): not capacity but the ~4,100 MW ERCOT reported mines shedding in Winter Storm Fern</text>
        <text x="405" y="292" fontSize="10" textAnchor="middle" fill="var(--muted-2)">TBC deck Sept 2022 · ERCOT Elliott report Mar 2023 · Texas Tribune Jan 2024 · Potomac Economics 2024 and 2025 SOM · ERCOT board Feb 2026</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The load. Five years of the same industry, counted by the operator and its monitor: a doubling every two years, to something near five gigawatts, of a load that ERCOT&apos;s own report treats as the only non-firm class on the grid. The amber bar is the proof of the classification – in the January 2026 storm the mines gave back almost all of it in a weekend.
      </figcaption>
    </figure>
  );
}

function ErcotReserveFigure() {
  const tiles = [
    { big: "12 of 12", l: "registered controllable loads", sub: "all crypto mines · 2025 SOM", c: "#6f9e6a" },
    { big: "64%", l: "of emergency reserve capacity", sub: "Dec 2025–Mar 2026 · ERCOT deck", c: "#6f9e6a" },
    { big: "9 → 75", l: "crypto resources in ERS", sub: "late 2023 → winter 2025–26", c: "#6f9e6a" },
    { big: "$75M", l: "fixed annual ERS budget", sub: "ERCOT · Jan 7, 2026", c: "var(--muted-2)" },
    { big: "~60%", l: "self-deployed before instruction", sub: "Sept 6, 2023 · ERCOT deck", c: "#c98a4e" },
    { big: "~$7M", l: "ERCOT's share of Riot's $31.7M", sub: "Aug 2023 · the rest was TXU", c: "#c98a4e" },
    { big: "$12B", l: "the ECRS critique", sub: "IMM Dec 2023 · mines not named", c: "var(--muted-2)" },
    { big: "NPRR1337", l: "to exclude price-responsive loads", sub: "filed May 26, 2026", c: "var(--accent)" },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 270" role="img" aria-label="The reserve board: all twelve registered controllable load resources are crypto mines; crypto holds 64 percent of emergency reserve service capacity, up from nine resources to 75, inside a fixed 75 million dollar budget; about 60 percent self-deployed before instruction in September 2023; ERCOT's share of Riot's 31.7 million dollar month was about 7 million; the 12 billion dollar ECRS critique did not name the mines; NPRR1337 would exclude price-responsive loads">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE RESERVE · THE MINES INSIDE ERCOT&apos;S SERVICES, AND WHAT THE MONITOR SAID</text>
        {tiles.map((t, i) => {
          const col = i % 4;
          const rowI = Math.floor(i / 4);
          const x = 28 + col * 190;
          const y = 50 + rowI * 92;
          return (
            <g key={t.l}>
              <rect x={x} y={y} width="176" height="80" rx="10" fill="var(--surface-2)" stroke={t.c} strokeWidth="1.25" />
              <text x={x + 14} y={y + 34} fontSize="21" fontWeight="700" fill={t.c} fontFamily="var(--font-display)">{t.big}</text>
              <text x={x + 14} y={y + 52} fontSize="10" fontWeight="600" fill="var(--foreground)">{t.l}</text>
              <text x={x + 14} y={y + 67} fontSize="9" fill="var(--muted-2)">{t.sub}</text>
            </g>
          );
        })}
        <text x="405" y="246" fontSize="10.5" textAnchor="middle" fill="var(--muted)" fontStyle="italic">&ldquo;allowing them to provide ERS essentially pays them to do what they would already do&rdquo; – Independent Market Monitor, 2025 State of the Market</text>
        <text x="405" y="264" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Potomac Economics 2025 SOM · ERCOT ERS crypto-mining presentation Jan 7, 2026 · Riot Sept 8, 2023 · IMM board report Dec 11, 2023 · OBM on NPRR1337</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The reserve. Green is the mines&apos; position inside ERCOT&apos;s services; amber is the evidence that the position pays for behavior the price already buys. The two grey tiles are the corrections the record requires – the operator&apos;s money in Riot&apos;s famous month was a fifth of the headline, and the monitor&apos;s twelve-billion-dollar complaint was about how much reserve ERCOT bought, not who sold it.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function ErcotBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ERCOT and Bitcoin: The Load It Counts as a Resource",
    description:
      "The institutional record of the Electric Reliability Council of Texas and Bitcoin mining, 2020–2026: the first controllable load, the 2022 queue and task force, the curtailment program, Elliott, Heather, and Fern in ERCOT's numbers, the planning documents that treat mines as non-firm, the reserve services and the market monitor's verdict, Riot's month corrected, the queue that outgrew the process, Batch Zero, and the audit.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    about: [
      { "@type": "Thing", name: "Bitcoin mining" },
      { "@type": "Organization", name: "Electric Reliability Council of Texas" },
      { "@type": "Thing", name: "Large flexible load" },
      { "@type": "Thing", name: "Emergency Response Service" },
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
        name: "ERCOT and Bitcoin",
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
          / ERCOT &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The institutions
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            ERCOT and Bitcoin: The Load It Counts as a Resource
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The grid operator for ninety percent of Texas has never had a
            policy on Bitcoin, and does not need one. It has a category.
            In its capacity report every load on the system is firm except
            one class, the large flexible load, which its glossary says
            &ldquo;is typically a crypto-currency mining site&rdquo;; in its
            storm reports that class is the one that gave back 91.5% of
            its power at the December 2022 peak and four thousand
            megawatts on a January weekend in 2026; in its reserve
            services it is all twelve of the loads registered as
            controllable and sixty-four percent of the capacity it buys
            for emergencies. The mines came to ERCOT because it would pay
            them to be flexible, and ERCOT planned around them because they
            were – and its own market monitor now says the paying was for
            behavior the price already bought. The load, the storms, the
            reserve, and the queue that buried the mines under data
            centers are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 26, 2026 · Updated{" "}
            {ERCOT_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            ERCOT, the nonprofit grid operator for about 90 percent of
            Texas, treats Bitcoin mines as large flexible loads – the one
            class of load its planning counts as non-firm – and lets them
            sell their ability to switch off into its reserve services. Its
            own reports record the mines cutting from 1,530 to 130
            megawatts in Winter Storm Elliott and about 4,100 megawatts in
            Winter Storm Fern, put mining demand near 4,600 megawatts in
            2025, and show crypto holding 64% of the emergency reserve
            service. Its Independent Market Monitor concluded in 2026 that
            paying mines for that service &ldquo;essentially pays them to do
            what they would already do,&rdquo; and ERCOT has proposed
            excluding price-responsive loads. Since 2024 the mines have
            been a shrinking share of a queue that grew from 63 to 474
            gigawatts of mostly data centers.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              ERCOT&apos;s capacity report assumes all loads other than large
              flexible loads &ldquo;(i.e., crypto-currency mining)&rdquo; are
              firm.<C n={26} />
            </li>
            <li>
              In Winter Storm Elliott, registered large flexible loads
              &ldquo;curtailed their consumption from 1,530 MW to 130 MW (a
              91.5% reduction)&rdquo; at the peak.<C n={14} />
            </li>
            <li>
              In Winter Storm Fern, January 2026, ERCOT reported
              &ldquo;cryptocurrency mining began reducing ~4,100
              MW.&rdquo;<C n={33} />
            </li>
            <li>
              All twelve Controllable Load Resources registered in 2025
              were cryptocurrency mines, and crypto held more than 64% of
              emergency reserve capacity.<C n={34} /><C n={32} />
            </li>
            <li>
              Of Riot&apos;s $31.7 million in August 2023 credits, about $7
              million was ERCOT ancillary-service money; the rest was
              resale credits under its TXU contract.<C n={16} /><C n={17} />
            </li>
            <li>
              The commission approved ERCOT&apos;s Batch Zero process on June
              18, 2026 with 438 gigawatts in the queue, 89% data
              centers.<C n={36} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the first controllable load to the audit
            </h2>
            <span className="text-xs text-muted-2">2020 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {ercotTimeline.map((e) => {
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
          <h2>What is ERCOT, and what is it not?</h2>
          <p>
            The operator, not the regulator, and not a utility. The
            Electric Reliability Council of Texas is a membership-based
            nonprofit that &ldquo;manages the flow of electric power to 27
            million Texas customers – representing about 90 percent of the
            state&apos;s electric load,&rdquo; running the wholesale market,
            the interconnection queue, the reserve services, and the
            programs that ask big customers to stand down; because its
            wires do not cross a state line, the Federal Energy Regulatory
            Commission has no jurisdiction over them.<C n={1} /><C n={2} />
            It answers to a board the Legislature rebuilt after Winter
            Storm Uri – SB 2 of 2021 cut it to eleven members, eight of
            them chosen by a committee the governor, lieutenant governor,
            and speaker appoint, all Texans – and to the Public Utility
            Commission, which approves its rule changes and writes the
            rules the statutes require.<C n={3} /> The board fired Bill
            Magness in March 2021; Brad Jones ran the operator on an
            interim basis; Pablo Vegas, from NiSource, was chosen in August
            2022 after the governor vetoed at least one candidate, and
            started October 1.<C n={4} /><C n={5} /> The grid he runs set
            its record, 91,089 megawatts, on July 22, 2026.<C n={6} /> The
            regulator that approved everything on this page, and sued to
            keep the mines&apos; registrations secret, is on{" "}
            <Link href="/texas-public-utility-commission-bitcoin">
              the Public Utility Commission and Bitcoin
            </Link>
            ; the sites are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
            This page is the operator&apos;s account of the load.
          </p>

          <h2>How did the mines arrive in ERCOT&apos;s queue?</h2>
          <p>
            All at once, and mostly on paper. The market status they would
            use predates them: in June 2020 ERCOT granted the first
            load-only Controllable Load Resource designation to a
            Lancium-run computing site at Big Spring, the registration
            through which a mine can bid its flexibility into the reserve
            services like a generator.<C n={7} /> After China&apos;s ban in
            2021 the mines came for the cheap West Texas power and the
            interim chief executive told Bloomberg that a world mining
            center was &ldquo;what we are planning.&rdquo;<C n={8} /> On
            March 25, 2022 ERCOT issued an interim interconnection process
            for loads of 75 megawatts or more, effective immediately and
            silent on what they were for; a Large Flexible Load Task Force
            met from April 14; and the tracked queue ran from 17,376
            megawatts on April 26 to 35,142 on August 22, against a summer
            peak of 80,148.<C n={9} /><C n={10} /><C n={11} /><C n={6} /> The
            industry itself told the task force in September that
            &ldquo;33,000 MWs is not possible&rdquo; and that perhaps two
            gigawatts were actually running – the first sign of the
            duplicate, speculative requests the Legislature would later
            call phantom load.<C n={12} /> By January 2023 the queue held
            38,143 megawatts &ldquo;predominantly bitcoin mining&rdquo;;
            by April 2024, 40,808, with 4,479 approved to energize and an
            observed simultaneous mining peak of 2,538.<C n={15} />
            <C n={21} /> In October 2022 seven U.S. senators wrote Vegas,
            a month into the job, naming seven miners drawing more than a
            gigawatt and quoting an economist who called them a
            &ldquo;tapeworm.&rdquo;<C n={8} /> The organizer who briefed
            the task force is on{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher and Bitcoin</Link>.
          </p>

          <ErcotMiningFigure />

          <h2>What did the mines do in the storms?</h2>
          <p>
            What ERCOT&apos;s program asked, mostly before it asked. On
            December 6, 2022 ERCOT opened a voluntary curtailment program
            for &ldquo;large flexible customers, such as bitcoin mining
            facilities&rdquo; – an automated request to cut load after
            non-spinning reserves are deployed and before emergency
            service is called – with Woody Rickerson&apos;s explanation:
            &ldquo;These customers are large power users but have the
            flexibility and willingness to reduce their energy use
            quickly, if needed.&rdquo;<C n={13} /> Winter Storm Elliott
            arrived before the program went live, and ERCOT&apos;s report
            recorded the mines doing it on price alone: registered large
            flexible loads &ldquo;curtailed their consumption from 1,530 MW
            to 130 MW (a 91.5% reduction) during the peak demand,&rdquo;
            all twenty known sites, most once prices passed $70 to $110 a
            megawatt-hour, with 75 megawatts held as responsive
            reserve.<C n={14} /> In Winter Storm Heather a year later the
            mines curtailed &ldquo;on several occasions,&rdquo; the
            operations chief reported, &ldquo;but the magnitude of
            response was not consistent day to day.&rdquo;<C n={20} /> In
            Winter Storm Fern, in January 2026, the same officer reported
            that &ldquo;cryptocurrency mining began reducing ~4,100 MW
            Saturday&rdquo; – beside 4,200 from oil and gas and 170 from
            data centers – and that adding the reductions back would have
            put Monday&apos;s peak at 84,558 megawatts; no emergency was
            declared and no conservation call was made.<C n={33} /> In the
            summers the story is the same and the money is the argument:
            in August 2023 Riot curtailed Rockdale by more than 95% at the
            peaks and booked $31.7 million in credits against 333 bitcoin
            mined, and the press wrote that ERCOT had paid it. Riot&apos;s
            answer: about $24 million were resale credits under its retail
            contract with TXU, and about $7 million ERCOT&apos;s
            ancillary-service payments, &ldquo;less than one percent of
            the program, which administered nearly $1 billion.&rdquo;
            <C n={16} /><C n={17} /> Vegas, asked about the miners that
            fall: &ldquo;I&apos;m interested in their operating
            characteristics.&rdquo;<C n={19} /> The site that curtailed is
            on{" "}
            <Link href="/rockdale-texas-bitcoin">Rockdale, Texas and Bitcoin</Link>.
          </p>

          <h2>How does ERCOT plan around them?</h2>
          <p>
            By definition. The May 2025 Capacity, Demand and Reserves
            report – the document that says whether Texas has enough
            power – states: &ldquo;ERCOT assumes all Loads other than Large
            Flexible Loads (i.e., crypto-currency mining) are considered
            Firm Loads &hellip; Large Flexible Loads are responsive to real
            time prices and can reduce consumption or turn off quickly
            before emergency conditions&rdquo;; its glossary: &ldquo;An LFL
            is typically a crypto-currency mining site.&rdquo;<C n={26} />
            The long-term load forecast carries a &ldquo;Crypto&rdquo;
            category and applies a 49.8% peak-to-request factor to the data
            centers but not to it; the operations division has built a
            crypto demand-forecasting model, though it &ldquo;does not
            explicitly model expected price response.&rdquo;<C n={25} />
            <C n={33} /> The Independent Market Monitor&apos;s count: more
            than 2,000 megawatts of mines identified by spring 2023,
            &ldquo;more than 3,600 MW of non-coincident demand and more
            than 3,200 MW of simultaneous demand&rdquo; by the end of 2024,
            about 4,600 megawatts in 2025 – &ldquo;the vast majority of LFLs
            in ERCOT are cryptocurrency mines.&rdquo;<C n={27} />
            <C n={34} /> The Energy Information Administration put the
            class at 54 billion kilowatt-hours in 2025, a tenth of the
            grid&apos;s consumption.<C n={24} /> And in June 2025 ERCOT
            surveyed every data-center and crypto load over 75 megawatts
            and set 2,600 megawatts as the most the grid can lose in an
            instant without breaching its frequency limits – the number
            that became the ride-through rule the commission adopted in
            July 2026, after twelve large-load trip events in
            2025.<C n={28} /><C n={33} /> Rickerson, in July 2024: mining
            &ldquo;can draw up to 2,600 megawatts&rdquo; and
            &ldquo;represents the largest share of large flexible
            loads.&rdquo;<C n={22} /> The statute that made the
            planning binding is on{" "}
            <Link href="/phil-king-bitcoin">Phil King and Bitcoin</Link>.
          </p>

          <h2>What do the mines sell ERCOT, and what did the monitor say?</h2>
          <p>
            Their off switch, and that the price was already buying it.
            Mines participate three ways: as Controllable Load Resources
            bidding into the responsive and non-spinning reserves, as
            price-responsive load that shuts off when the four coincident
            summer peaks set their transmission bill, and as providers of
            the Emergency Response Service, a fixed-budget program that
            pays customers to stand ready to curtail on ERCOT&apos;s call.
            ERCOT&apos;s own presentation on January 7, 2026 showed the
            third: crypto mining &ldquo;increased to 64% of the total
            capacity procured&rdquo; for the winter term, from nine
            resources in late 2023 to seventy-five, inside a $75 million
            annual budget – and on September 6, 2023, about 60% of the
            reserve had switched itself off before ERCOT instructed
            it.<C n={32} /> The market monitor&apos;s 2025 report, published
            in June 2026, drew the conclusion: &ldquo;all 12 registered
            CLRs are cryptocurrency mines&rdquo;; crypto exceeds 64% of
            emergency reserve capacity; and because those mines &ldquo;are
            responsive to real time prices,&rdquo; &ldquo;allowing them to
            provide ERS essentially pays them to do what they would already
            do&rdquo; – with a recommendation to move them out of the
            service, and a warning that flexible loads &ldquo;can shift a
            disproportionate share of transmission costs onto other
            consumers.&rdquo;<C n={34} /> ERCOT filed NPRR1337 on May 26,
            2026 to add a baseline test excluding price-responsive loads
            from the service, and the demand-management service SB 6
            requires must, by ERCOT&apos;s own reading, exclude any
            customer &ldquo;that curtails in response to the wholesale
            price of electricity.&rdquo;<C n={40} /><C n={39} /> Two
            corrections the record requires. The monitor&apos;s complaint
            that ERCOT&apos;s contingency reserve service &ldquo;generated
            artificial shortages that produced massive inefficient market
            costs, totaling more than $12 Billion in 2023&rdquo; was about
            how much reserve ERCOT chose to hold; the mines are not named
            in it.<C n={18} /> And the Senate committee that heard
            Vegas in June 2024 recommended, in its interim report,
            evaluating miners &ldquo;acting as &lsquo;energy
            traders&rsquo;&rdquo; – the frame the Legislature has since
            adopted.<C n={23} /> The senator who wrote the registry the
            commission enforces is on{" "}
            <Link href="/nathan-johnson-bitcoin">Nathan Johnson and Bitcoin</Link>.
          </p>

          <ErcotReserveFigure />

          <h2>What happened to the queue?</h2>
          <p>
            It stopped being about mines. Kristi Hobbs told the commission
            in October 2025 that the first wave was &ldquo;mostly
            crypto-mining&rdquo; with a &ldquo;much shorter timeline to
            interconnect (months rather than years)&rdquo; and that the
            current wave was AI data centers; in December she told the
            board the queue held about 226 gigawatts against 63 a year
            earlier, 73% data centers, with 225 new requests in 2025
            against 152 in the three years before: &ldquo;We have outgrown
            the process that was established for reviewing these large
            loads. It was originally set up for, we were thinking about 40
            to 50 loads back in the 2022 time frame.&rdquo;<C n={29} />
            <C n={30} /><C n={31} /> The Congressional Research Service
            read the same deck as about 20 gigawatts of crypto – nine
            percent.<C n={2} /> ERCOT created an Interconnection and Grid
            Analysis division and hired McKinsey.<C n={42} /> By April 2026
            the queue was 410 gigawatts, 87% data centers; on June 18 the
            commission approved Batch Zero – NPRR1325 and PGRR145, every
            request studied with every other twice a year, loads energized
            before July 10 counted as base – with 438 gigawatts pending,
            &ldquo;the first time any U.S. ISO has implemented a batch
            assessment process.&rdquo; Vegas: &ldquo;This new process
            represents a fundamental shift in how ERCOT manages the
            significant growth of large load interconnection.&rdquo;
            <C n={35} /><C n={36} /> On July 22 the grid set its record;
            Vegas, a week later: &ldquo;The ease at which we got through
            last week&apos;s peaks would not be the way I would characterize
            the future in two to three years. I think it will be much more
            difficult.&rdquo;<C n={6} /><C n={41} /> On August 3 the
            Governor cited 474 gigawatts and ordered an audit of every data
            center before more are approved; ERCOT missed its August 7
            classification deadline, the commission granted an exception
            on August 20, and the audit covers 250 to 300 projects with a
            community-impact review of every crypto facility of 25
            megawatts or more. Chad Seely: &ldquo;Our goal is to head
            toward a December 10 filing.&rdquo;<C n={37} /><C n={38} /> The
            chairman who will hear the results is on{" "}
            <Link href="/ken-king-bitcoin">Ken King and Bitcoin</Link>.
          </p>

          <h2>The honest counterweight: the monitor, the money, and the process</h2>
          <p>
            Three things, and the operator&apos;s own documents supply all
            of them. First, the monitor. ERCOT built the market status the
            mines use, wrote them into its plans as the grid&apos;s only
            non-firm load, and let them fill two-thirds of an emergency
            service – and the analyst it pays to watch its market
            concluded that the service pays them for what the price
            already buys, and that their flexibility shifts transmission
            costs onto everyone else.<C n={7} /><C n={26} /><C n={34} />
            ERCOT&apos;s response, NPRR1337, came the month before the
            report. Second, the money, which cuts the other way. The
            headline figures – Riot&apos;s $31.7 million month, the
            monitor&apos;s twelve billion – are not ERCOT paying miners: a
            fifth of the first was ERCOT&apos;s and none of the second was
            about them, and ERCOT has never published what its services
            pay the mines in total.<C n={17} /><C n={18} /> What it has
            published is what the mines did when it mattered: 91.5% in
            Elliott, four gigawatts in Fern, on price, before any
            instruction.<C n={14} /><C n={33} /> Third, the process. The
            interim interconnection rule of March 2022 was still the rule
            in 2026; the curtailment program was &ldquo;temporary&rdquo;
            and never replaced; the task force went inactive; and the
            operator&apos;s own planning chief said it had outgrown a
            process built for fifty loads while it held requests for four
            hundred gigawatts.<C n={9} /><C n={13} /><C n={10} />
            <C n={31} /> The mines were the first to show ERCOT that its
            queue could be gamed and the first to show it that load could
            be a resource. Both lessons arrived in 2022. The rules for the
            first came in 2026.
          </p>
          <p>
            The fair reading is that ERCOT has been the mines&apos; most
            useful institution and their most honest one: it built the
            product they sell, counted them accurately when no one else
            would, credited them in every storm report, and then published
            the analysis that says it has been overpaying them. The
            question its own monitor has put to it – whether a load that
            switches off for the price should also be paid to promise to –
            is the question the Legislature&apos;s demand-management
            service answers no, and ERCOT&apos;s rule change would answer
            no, and the mines&apos; business model needs answered yes.
          </p>

          <h2>Where does ERCOT stand today?</h2>
          <p>
            As of September 2026: a record peak three months old, a queue
            of 474 gigawatts under audit with a December 10 filing
            targeted, Batch Zero paused at classification, NPRR1337
            pending, a demand-management service being designed to exclude
            the mines, and a chief executive telling Texans the next two
            or three summers will be harder.<C n={6} /><C n={38} />
            <C n={40} /><C n={39} /><C n={41} /> The mines that sit inside
            it – about 4,600 megawatts, less than a tenth of what is
            waiting behind them – are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>;
            the regulator that oversees the operator is on{" "}
            <Link href="/texas-public-utility-commission-bitcoin">
              the Public Utility Commission and Bitcoin
            </Link>
            ; the statute-by-statute record ERCOT implements is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            . This page is the load the operator counts as a resource, and
            the price it has decided that resource is worth.
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
            Primary record first: ERCOT&apos;s own reports, board decks,
            market notices, releases, and legislative presentations, read
            directly; the Independent Market Monitor&apos;s State of the
            Market reports; the Senate committee&apos;s interim report;
            Riot&apos;s SEC filing and response; the Energy Information
            Administration and the Congressional Research Service; then
            the Texas Tribune and Utility Dive for the quotes and the
            audit. This is a research and reference article, not
            financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {ercotSources.map((s) => (
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
