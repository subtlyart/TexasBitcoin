import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  PUC_LAST_VERIFIED,
  pucSources,
  pucTimeline,
  type PucTimelineKind,
} from "@/lib/puc";

const pageUrl = `${site.url}/texas-public-utility-commission-bitcoin`;

export const metadata: Metadata = {
  title: "The Public Utility Commission and Bitcoin: The List It Keeps",
  description:
    "The Public Utility Commission of Texas and Bitcoin, 2021–2026, sourced: the post-Uri five-seat commission; ERCOT's March 2022 interim process and December 2022 curtailment program for the mines; Gleeson registered 'on' at the 2023 SB 1751 and SB 1929 hearing; seventeen months to adopt the mining registry, 16 TAC § 25.114, on November 21, 2024; the Attorney General's May 2025 order to release the registrations and the commission's June 27, 2025 suit to keep them secret; SB 6's five projects - forecasting and co-location rules adopted, interconnection standards still proposed, 12CP replacing 4CP with a December 2026 decision; staff naming crypto mines as loads that avoid transmission costs; Batch Zero, the Governor's 474-gigawatt letter, and the August 2026 audit sweeping in every crypto site over 25 MW.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Public Utility Commission and Bitcoin: The List It Keeps",
    description:
      "The regulator took seventeen months to write the mining registry, sued to keep it secret, then asked the Legislature to register every data center and audited every mine over 25 megawatts. The commission's record with the load. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is the Public Utility Commission of Texas, and how is it different from ERCOT?",
    a: "The commission is the state regulator: five members appointed by the governor - three until SB 2154 in 2021 - who write rules under the Public Utility Regulatory Act, approve ERCOT's protocols, and answer to the Legislature and the Governor. Thomas Gleeson, its executive director from December 2020, has chaired it since January 2024. ERCOT is the grid operator the commission oversees: it runs the market, the interconnection queue, and the curtailment programs. In the Bitcoin record ERCOT moved first, in 2022; the commission's own actions are the 2024 registration rule, the 2025 records suit, and the SB 6 rules of 2026.",
  },
  {
    q: "What is the Texas Bitcoin mining registry?",
    a: "SB 1929, Nathan Johnson's 2023 law, requires any virtual-currency mining facility in ERCOT expecting more than 75 megawatts to register with the commission within one business day of its power agreement, with a five-year demand forecast. The commission adopted the implementing rule, 16 TAC § 25.114, on November 21, 2024 - fourteen months after the statute took effect - requiring location, ownership, demand, and consumption, with annual renewal and penalties up to $25,000 per violation per day. Existing facilities had to register by February 1, 2025. The commission has never said how many did.",
  },
  {
    q: "Why did the commission sue the Attorney General?",
    a: "To keep the registry secret. Reporters requested the SB 1929 registrations; the commission refused under the critical-infrastructure exception; on May 15, 2025 the Attorney General's office ruled the commission had not shown the data revealed particular vulnerabilities and ordered it released. On June 27, 2025 the commission sued, arguing that 'in the wrong hands, this information could be used by terrorists to plan attacks on Texas's energy grid.' It had spent about $13,000 on the case by November 2025. No ruling has been reported.",
  },
  {
    q: "What has the commission done under SB 6?",
    a: "Mapped the 2025 large-load law into five projects. Adopted: the forecasting rule (§ 25.370, effective March 1, 2026) and the co-location rule (§ 25.205, March 26, 2026 - ERCOT studies 120 days, the commission decides in 60; the first case, an AI data center at a Hutto wind farm, was approved in July with full curtailment within 30 minutes on ERCOT's direction). Proposed and pending: the interconnection standards (§ 25.194, published March 12, 2026 - $50,000 per megawatt in security, $100,000 to $300,000 study fees) and the demand-management service. The 4CP transmission-cost review became a proposal to move to twelve coincident peaks, published July 9, 2026, with a decision targeted for December. It also approved ERCOT's Batch Zero process on June 18, 2026 and the ride-through rule in July.",
  },
  {
    q: "Does the commission think Bitcoin mines help or hurt the grid?",
    a: "It has said both things in different documents. ERCOT's report on Winter Storm Elliott recorded the mines cutting 91.5% of their load at the peak, and Chairman Gleeson has said 'the megawatt we don't use is just as important as the megawatt that we generate' and that 'a Bitcoin miner is different from a hyperscaler.' The commission's own staff report of March 2026 named 'crypto mines and certain types of data centers' as loads that avoid transmission costs 'without commensurate system cost reductions,' which is the basis of the 12CP proposal. Commissioner Glotfelty in 2024 compared the miners' grid-hero story to teenagers praised for fighting a fire their fireworks started.",
  },
];

const kindStyle: Record<PucTimelineKind, { color: string; label: string }> = {
  agency: { color: "var(--star)", label: "The commission" },
  mines: { color: "#c98a4e", label: "The mines" },
  list: { color: "var(--accent)", label: "The list" },
  load: { color: "#6f9e6a", label: "The load" },
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
// Two figures - the SB 6 rule board, and the queue the rules chased -
// drawn from the dated, sourced facts on this page (Sept 2026).
// Server-rendered SVG, no client JS.
function PucRuleBoardFigure() {
  const rows = [
    { p: "58480", rule: "§ 25.370 · large-load forecasting", status: "adopted · effective Mar 1, 2026", ok: true },
    { p: "58479", rule: "§ 25.205 · co-location and net metering", status: "adopted Mar 26, 2026 · first case July 23", ok: true },
    { p: "58481", rule: "§ 25.194 · interconnection standards", status: "proposed Mar 12, 2026 · pending", ok: false },
    { p: "58482", rule: "demand-management reliability service", status: "scoped Jan 2026 · pending", ok: false },
    { p: "58484 → 58000", rule: "4CP review → 12CP proposal", status: "published July 9, 2026 · decision Dec 2026", ok: false },
    { p: "NPRR1325", rule: "ERCOT Batch Zero study process", status: "approved June 18, 2026 · paused for audit Aug 20", ok: true },
    { p: "NOGRR282", rule: "ride-through for large computational loads", status: "adopted July 2026 · unanimous", ok: true },
    { p: "56962", rule: "§ 25.114 · mining-facility registration (SB 1929)", status: "adopted Nov 21, 2024 · list withheld", ok: true },
  ];
  const y0 = 84;
  const rh = 24;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The rule board: the commission's SB 6 projects and the 2024 mining registry - forecasting and co-location adopted, interconnection and demand management pending, the 12CP proposal due December 2026, Batch Zero approved then paused, ride-through adopted">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE RULE BOARD · WHAT THE COMMISSION HAS WRITTEN FOR THE LOAD · SEPTEMBER 2026</text>
        <text x="28" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">PROJECT</text>
        <text x="150" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">RULE</text>
        <text x="782" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" textAnchor="end" fill="var(--muted-2)">STATUS</text>
        <line x1="28" y1="70" x2="782" y2="70" stroke="var(--border)" strokeWidth="1" />
        {rows.map((r, i) => {
          const y = y0 + i * rh;
          return (
            <g key={r.p}>
              {i % 2 === 1 && <rect x="28" y={y - 15} width="754" height={rh} rx="4" fill="var(--surface-2)" />}
              <circle cx="34" cy={y - 4} r="3.5" fill={r.ok ? "#6f9e6a" : "#c98a4e"} />
              <text x="46" y={y} fontSize="10" fill="var(--muted-2)">{r.p}</text>
              <text x="150" y={y} fontSize="11" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{r.rule}</text>
              <text x="782" y={y} fontSize="9.5" textAnchor="end" fill={r.ok ? "#6f9e6a" : "var(--muted-2)"}>{r.status}</text>
            </g>
          );
        })}
        <text x="28" y="282" fontSize="10" fill="var(--muted)">SB 6 gave the commission until December 31, 2026 for the 4CP review. The interconnection standards, the rule the industry files under, are the one still open.</text>
        <text x="405" y="296" fontSize="10" textAnchor="middle" fill="var(--muted-2)">PUCT staff deck Oct 17, 2025 · Interchange 58481, 58000 · ERCOT June 18, 2026 · Utility Dive July 2026 · Texas Tribune Nov 25, 2024</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The rule board. Green is adopted; amber is proposed or pending. The commission has finished the rules that tell ERCOT what to count and who may plug in behind a plant, approved the grid operator&apos;s batching, and imposed ride-through – and has not yet adopted the interconnection standards that every load in the queue is waiting on, or decided how the cost of the wires will be split.
      </figcaption>
    </figure>
  );
}

function PucQueueFigure() {
  const pts = [
    { l: "Dec 2024", gw: 63, sub: "end of 2024" },
    { l: "Oct 2025", gw: 189, sub: "PUC deck · 69% DC" },
    { l: "Nov 2025", gw: 226, sub: "77% DC" },
    { l: "Dec 2025", gw: 233, sub: "“outgrown the process”" },
    { l: "Apr 2026", gw: 410, sub: "House hearing · 87% DC" },
    { l: "Jun 2026", gw: 438, sub: "Batch Zero · 89% DC" },
    { l: "Aug 2026", gw: 474, sub: "Governor’s letter · audit" },
  ];
  const x0 = 100;
  const x1 = 760;
  const baseY = 210;
  const h = 140;
  const max = 500;
  const dx = (i: number) => x0 + (i / (pts.length - 1)) * (x1 - x0);
  const dy = (gw: number) => baseY - (gw / max) * h;
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${dx(i)},${dy(p.gw)}`).join(" ");
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 290" role="img" aria-label="The ERCOT large-load queue while the rules were written: 63 gigawatts at the end of 2024, 189 in October 2025, 226 in November, 233 in December, 410 in April 2026, 438 in June, 474 in August 2026 - against a record peak of about 91 gigawatts">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE QUEUE THE RULES CHASED · LARGE LOADS SEEKING INTERCONNECTION, GIGAWATTS</text>
        {[100, 200, 300, 400, 500].map((g) => (
          <g key={g}>
            <line x1={x0 - 10} y1={dy(g)} x2={x1 + 10} y2={dy(g)} stroke="var(--border)" strokeWidth="0.75" strokeDasharray="3 4" />
            {g !== 100 && <text x={x0 - 16} y={dy(g) + 4} fontSize="9.5" textAnchor="end" fill="var(--muted-2)">{g}</text>}
          </g>
        ))}
        <line x1={x0 - 10} y1={dy(91)} x2={x1 + 10} y2={dy(91)} stroke="#c98a4e" strokeWidth="1.25" />
        <text x={x1 + 8} y={dy(91) - 5} fontSize="9" textAnchor="end" fill="#c98a4e">record peak ≈ 91 GW · July 2026</text>
        <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2.5" />
        {pts.map((p, i) => {
          const up = i % 2 === 0;
          const ly = up ? dy(p.gw) - 18 : dy(p.gw) + 30;
          return (
            <g key={p.l}>
              <circle cx={dx(i)} cy={dy(p.gw)} r="4.5" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
              <text x={dx(i)} y={ly} fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{p.gw}</text>
              <text x={dx(i)} y={ly + 12} fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">{p.sub}</text>
              <text x={dx(i)} y={baseY + 22} fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">{p.l}</text>
            </g>
          );
        })}
        <text x="28" y="262" fontSize="10" fill="var(--muted)">Mining on the grid through it all: about 2,600 MW at the 2024 rule, some 54 billion kWh in 2025, roughly a tenth of ERCOT&apos;s consumption. The queue is data centers.</text>
        <text x="405" y="282" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Utility Dive Jan 6, 2026 · PUCT deck Oct 17, 2025 · ERCOT Apr 9 and June 18, 2026 · Governor&apos;s letter Aug 3, 2026 · EIA</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The queue the rules chased. Between the registration rule and the audit, the load asking to connect grew seven-fold to five times the grid&apos;s record peak, and the share that was Bitcoin mining shrank to a rounding error. The commission wrote its mining registry for a two-and-a-half-gigawatt industry and is now writing its large-load rules for a four-hundred-gigawatt one.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function TexasPublicUtilityCommissionBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Public Utility Commission and Bitcoin: The List It Keeps",
    description:
      "The institutional record of the Public Utility Commission of Texas and Bitcoin mining, 2021–2026: the post-Uri commission, ERCOT's 2022 interim process and curtailment program, the 2023 hearings, the seventeen-month registration rule, the records suit against the Attorney General, SB 6's five projects and their status, the 12CP proposal, Batch Zero, the Governor's directives, the August 2026 audit, and the commission's own words on the mines.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    about: [
      { "@type": "Thing", name: "Bitcoin mining" },
      { "@type": "GovernmentOrganization", name: "Public Utility Commission of Texas" },
      { "@type": "Organization", name: "ERCOT" },
      { "@type": "Legislation", name: "Texas Senate Bill 6 (89R)" },
      { "@type": "Legislation", name: "Texas Senate Bill 1929 (88R)" },
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
        name: "The Public Utility Commission and Bitcoin",
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
          / The Public Utility Commission &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The institutions
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Public Utility Commission and Bitcoin: The List It Keeps
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every megawatt a Bitcoin mine draws in Texas runs through a
            grid operator the Legislature rebuilt after the 2021 freeze and
            a five-member commission that writes the operator&apos;s rules.
            The commission did not meet the mines first – ERCOT did, in
            March 2022, with an interim process it called temporary and
            never replaced. What the commission has done on its own is a
            short list. It took seventeen months to write the registry the
            Legislature ordered in 2023, made the registry heavier than
            the statute, and then sued the Attorney General to keep the
            registrations secret. It has spent 2026 writing the rules for a
            load that grew seven-fold while it wrote them – four hundred
            and seventy-four gigawatts asking to connect to a grid whose
            record peak is ninety-one – and in July it asked the
            Legislature to make every data center register too. The
            registry, the suit, the rule board, and the queue are the
            record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 25, 2026 · Updated{" "}
            {PUC_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            The Public Utility Commission of Texas is the five-member,
            governor-appointed regulator that oversees ERCOT and writes the
            rules the state&apos;s grid statutes require. On Bitcoin its own
            record is the mining registry – 16 TAC § 25.114, adopted
            November 21, 2024 under SB 1929 – the June 27, 2025 lawsuit
            against the Attorney General to keep those registrations
            secret, and the 2026 rules under SB 6: forecasting and
            co-location adopted, interconnection standards still proposed,
            a 12CP replacement for the 4CP transmission charge due in
            December, Batch Zero approved in June and paused in August for
            an audit that includes every crypto facility over 25
            megawatts.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              The commission adopted the SB 1929 mining registration rule,
              16 TAC § 25.114, on November 21, 2024, with penalties up to
              $25,000 per violation per day.<C n={12} /><C n={11} />
            </li>
            <li>
              On June 27, 2025 the commission sued the Attorney General to
              block release of the registrations after a May 15, 2025
              ruling ordered them disclosed.<C n={15} /><C n={16} />
            </li>
            <li>
              ERCOT, not the commission, created the interim large-load
              process on March 25, 2022 and the voluntary curtailment
              program for &ldquo;bitcoin mining facilities&rdquo; on
              December 6, 2022.<C n={4} /><C n={6} />
            </li>
            <li>
              Under SB 6 the commission adopted the forecasting rule
              (effective March 1, 2026) and the co-location rule (March 26,
              2026); the interconnection standards proposed March 12, 2026
              remain pending.<C n={20} /><C n={22} /><C n={21} />
            </li>
            <li>
              Commission staff&apos;s March 2026 report named &ldquo;crypto
              mines and certain types of data centers&rdquo; as loads that
              avoid transmission costs &ldquo;without commensurate system
              cost reductions.&rdquo;<C n={24} />
            </li>
            <li>
              On August 20, 2026 the commission paused Batch Zero for an
              audit of 250 to 300 projects, including crypto facilities of
              25 MW or more, after the Governor cited a 474-gigawatt
              queue.<C n={30} /><C n={32} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the freeze to the audit
            </h2>
            <span className="text-xs text-muted-2">2021 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {pucTimeline.map((e) => {
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
          <h2>What is the commission, and what is ERCOT?</h2>
          <p>
            Two bodies the press calls one. The Public Utility Commission
            of Texas is the regulator: created by the Public Utility
            Regulatory Act in 1975, three members until the Legislature
            made it five in SB 2154 after Winter Storm Uri, each appointed
            by the governor, required since 2021 to live in Texas and to
            stay out of lobbying for a year after leaving.<C n={1} /> It
            writes rules in the Texas Administrative Code, approves or
            rejects the grid operator&apos;s protocol changes, decides
            contested cases, and answers to the Legislature and the
            Governor. Peter Lake chaired it from April 2021 until July
            2023; Thomas Gleeson, its executive director since December
            2020 and fifteen years at the agency, has chaired it since
            January 23, 2024.<C n={2} /><C n={3} />{" "}
            <Link href="/ercot-bitcoin">ERCOT</Link> is the grid
            operator the commission oversees: the nonprofit that runs the
            market, the interconnection queue, the ancillary services, and
            the curtailment programs, under a board the same 2021 session
            rebuilt. When a Bitcoin mine sells its load back to the grid,
            it sells to ERCOT under ERCOT&apos;s rules; when the state
            decides what a large load must do to connect, the commission
            writes the rule and ERCOT applies it. This page keeps them
            apart, because on the mines the operator moved first and the
            commission followed. The senator who wrote the commission&apos;s
            large-load statute is on{" "}
            <Link href="/phil-king-bitcoin">Phil King and Bitcoin</Link>; the
            sites the rules govern are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
          </p>

          <h2>How did the grid meet the mines?</h2>
          <p>
            Through ERCOT, in 2022, with instruments the operator called
            temporary. On March 25, 2022 ERCOT issued an interim
            interconnection process for standalone loads of 75 megawatts
            or more and co-located loads of 20, effective immediately –
            a market notice that never says the word crypto and was
            written for nothing else.<C n={4} /> A Large Flexible Load
            Task Force met from April 14, was chartered in May, and is now
            inactive, succeeded by a working group.<C n={5} /> On December
            6, 2022 ERCOT opened a voluntary curtailment program for
            &ldquo;large flexible customers, such as bitcoin mining
            facilities,&rdquo; to run &ldquo;until ERCOT establishes a
            long-term set of rules.&rdquo;<C n={6} /> Two weeks later Winter
            Storm Elliott arrived, and ERCOT&apos;s report recorded the
            mines doing what the industry says they do: the large flexible
            loads &ldquo;curtailed their consumption from 1,530 MW to 130 MW
            (a 91.5% reduction) during the peak,&rdquo; all twenty known
            sites, most of them once prices passed $70 to $110 a
            megawatt-hour.<C n={7} /> In August 2023 Riot Platforms
            reported $31.7 million for standing down at Rockdale – $7.4
            million of it ERCOT&apos;s ancillary-service payments, $24.2
            million power credits under its contract with TXU – and the
            number became the industry&apos;s argument and its critics&apos;
            in the same week.<C n={8} /> The commission&apos;s role in all
            of it was oversight: no rule of its own, no statement on the
            mines in Elliott or in the August heat that has been located,
            and when the Legislature took up the question in March 2023,
            its executive director registered &ldquo;on&rdquo; – a resource
            for the committee, not a witness for either side – while Riot
            and US Bitcoin testified against Kolkhorst&apos;s brake and the
            Sierra Club for it.<C n={10} /> The brake is on{" "}
            <Link href="/lois-kolkhorst-bitcoin">Lois Kolkhorst and Bitcoin</Link>;
            the Rockdale site is on{" "}
            <Link href="/rockdale-texas-bitcoin">Rockdale, Texas and Bitcoin</Link>.
          </p>

          <h2>What is the registry, and why did it take seventeen months?</h2>
          <p>
            The one rule the commission wrote for the mines alone. SB 1929,
            Nathan Johnson&apos;s 2023 statute, requires any
            virtual-currency mining facility in ERCOT expecting more than
            75 megawatts to register with the commission within one
            business day of its power agreement, with a five-year demand
            forecast, and lets the commission share the data with
            ERCOT.<C n={9} /> It took effect September 1, 2023. The
            commission opened Project 56962, published a proposed rule in
            September 2024, and adopted 16 TAC § 25.114 on November 21,
            2024 – fourteen months after the statute, seventeen after it
            was signed – and made it heavier than the bill: location,
            owners, business form, electricity demand, a five-year peak
            forecast, prior-year consumption, annual renewal, existing
            facilities registered by February 1, 2025, and a Class A
            violation of up to $25,000 per day for failing to, all
            collected through an internal tool the public cannot
            see.<C n={11} /><C n={12} /> Gleeson: &ldquo;To ensure the ERCOT
            grid is reliable and meets the electricity needs of all Texans,
            the PUCT and ERCOT need to know the location and power needs
            of virtual currency miners.&rdquo; Lee Bratcher, for the
            Blockchain Council: &ldquo;The information that the PUC is
            requesting is appropriate and far less invasive than what the
            Federal Government attempted under the Biden Administration
            earlier this year.&rdquo;<C n={13} /> About 2,600 megawatts of
            mining was on the grid at adoption, with as much again
            approved; by 2025 the mines drew some 54 billion kilowatt-hours,
            roughly a tenth of ERCOT&apos;s consumption.<C n={12} />
            <C n={14} /> The commission has never said how many facilities
            registered. The senator who wrote the statute, and waited for
            the rule, is on{" "}
            <Link href="/nathan-johnson-bitcoin">Nathan Johnson and Bitcoin</Link>.
          </p>

          <h2>Why did it sue the Attorney General?</h2>
          <p>
            To keep the list. Reporters for Straight Arrow News and the
            Texas Tribune requested the registrations – names, locations,
            owners, megawatts, demand-response enrollment. The commission
            refused, citing the Public Information Act&apos;s exception for
            critical infrastructure, and asked the Attorney General to
            agree. On May 15, 2025 an assistant attorney general ruled the
            commission &ldquo;failed to demonstrate the information at issue
            identifies the technical details of particular vulnerabilities
            of critical infrastructure to an act of terrorism&rdquo; and
            ordered release.<C n={15} /> On June 27, 2025 the commission
            sued the Attorney General: &ldquo;In the wrong hands, this
            information could be used by terrorists to plan attacks on
            Texas&apos;s energy grid and critical infrastructure&rdquo;
            through &ldquo;manipulation of the volume of available reliable
            electricity.&rdquo; Its press officer declined to comment on
            pending litigation; Riot and Marathon declined to comment at
            all.<C n={16} /> By November it had spent about $13,000 of the
            $56,000 in outside counsel it paid that year fighting three
            records rulings, and the case was still pending; no ruling has
            been reported since.<C n={17} /> Two things sit beside the suit.
            In July 2026 the same commission asked the Legislature for
            mandatory registration of every data center and large load –
            more of the data it is litigating to keep – and in August its
            audit swept in every crypto facility of 25 megawatts or more,
            a third of the registry&apos;s threshold.<C n={31} /><C n={32} />
            The office it sued, and the ruling it is fighting, are on{" "}
            <Link href="/texas-attorney-general-bitcoin">
              the Texas Attorney General and Bitcoin
            </Link>
            .
          </p>

          <PucRuleBoardFigure />

          <h2>What has it written under SB 6?</h2>
          <p>
            Two rules, two proposals, and a replacement for the charge the
            mines learned to dodge. The large-load law of June 20, 2025 set
            a 75-megawatt threshold the commission may lower, a $100,000
            minimum study fee, site control, disclosure of backup
            generation, mandatory curtailment for loads interconnecting
            after December 31, 2025, ERCOT&apos;s emergency authority, and a
            deadline of December 31, 2026 for the commission to re-examine
            how transmission costs are allocated.<C n={18} /> Staff mapped
            it into five projects that October, with the queue at 189
            gigawatts and a line that would matter: &ldquo;Diverse types of
            large loads may warrant different treatment.&rdquo;<C n={19} />
            The forecasting rule, § 25.370, took effect March 1, 2026:
            after this year only loads with a compliant interconnection
            agreement count in ERCOT&apos;s forecast.<C n={20} /> The
            co-location rule, § 25.205, was adopted March 26: no
            net-metering arrangement behind an existing generator without
            the commission&apos;s approval after ERCOT&apos;s 120-day study
            and a 60-day decision, and the first case – Crusoe&apos;s
            260-megawatt AI data center at a wind farm in Hutto – was
            approved July 23 on condition of full curtailment within thirty
            minutes of ERCOT&apos;s direction, breaker disconnection
            authorized, no compensation.<C n={22} /><C n={23} /> The
            interconnection standards, § 25.194, were proposed March 12 –
            $50,000 per megawatt in security, study fees of $100,000 to
            $300,000, an 80% forfeiture on withdrawal – and had not been
            adopted in September; the demand-management service, which by
            its terms excludes loads already selling flexibility, is
            pending too.<C n={21} /><C n={22} /> The 4CP review became
            something larger. Staff&apos;s March draft named &ldquo;crypto
            mines and certain types of data centers&rdquo; as flexible
            loads that cut consumption at the four summer peaks
            &ldquo;without commensurate system cost reductions&rdquo;;
            on July 9 the commission published staff&apos;s replacement –
            twelve coincident peaks on thirty-minute intervals, a minimum
            billing demand, ERCOT access to large-load meters – modeled to
            move three points of transmission cost off residential
            customers, with a decision targeted for December.<C n={24} />
            <C n={25} /> The chairman&apos;s formulation, in June:
            &ldquo;A Bitcoin miner is different from a hyperscaler, is
            different from a steel mill or a chemical plant.&rdquo;
            &ldquo;The megawatt we don&apos;t use is just as important as the
            megawatt that we generate.&rdquo;<C n={26} /> The House chairman
            who reshaped the law the rules implement is on{" "}
            <Link href="/ken-king-bitcoin">Ken King and Bitcoin</Link>.
          </p>

          <PucQueueFigure />

          <h2>What happened to the queue?</h2>
          <p>
            It outran the rules. Large loads seeking interconnection stood
            at 63 gigawatts at the end of 2024; 189 in the commission&apos;s
            October 2025 deck; 233 at the end of 2025 – &ldquo;We have
            outgrown the process,&rdquo; ERCOT&apos;s Kristi Hobbs said in
            January – 410 when ERCOT briefed the House on April 9, 2026,
            87% of it data centers; 438 when the commission approved
            ERCOT&apos;s Batch Zero process on June 18, under which every
            request is studied with every other every six months.
            <C n={35} /><C n={19} /><C n={20} /><C n={28} /> On June 10 the
            Governor had written Gleeson and ERCOT&apos;s Pablo Vegas to
            make data centers pay &ldquo;all of their electric
            infrastructure costs&rdquo; and to see that their
            interconnections &ldquo;result in reduced residential electrical
            bills&rdquo;; on July 17 the commission and ERCOT answered with
            a joint memo asking the Legislature for direct emergency
            communication with data centers and mandatory registration of
            all of them – &ldquo;Texas should welcome responsible economic
            development,&rdquo; Gleeson said, &ldquo;but it must do so in a
            manner that prioritizes affordability, reliability, and the
            interests of the residents who depend on the
            grid.&rdquo;<C n={29} /><C n={31} /> On August 3 the Governor
            cited &ldquo;approximately 474 gigawatts &hellip; more than five
            times Texas&apos; record peak&rdquo; and ordered a
            &ldquo;comprehensive verification and audit of all data centers
            advancing through ERCOT&apos;s interconnection process before
            any additional data centers are approved.&rdquo;<C n={30} /> On
            August 20 the commission granted ERCOT&apos;s request to pause
            Batch Zero&apos;s classification; the audit covers 250 to 300
            projects and, by ERCOT&apos;s notice, every crypto facility of 25
            megawatts or more, with a filing targeted for December
            10.<C n={32} /> In between, the commission adopted unanimously a
            ride-through rule requiring large computational loads to stay
            connected through voltage and frequency disturbances – 28 trips
            of 100 megawatts or more since 2023 – over the Blockchain
            Council&apos;s objection that battery mitigation would cost
            &ldquo;more than $1.6 million per MW,&rdquo; and on August 28
            approved the first 765-kilovolt lines of the Permian Basin plan
            over the objection of 43 legislators and Ken King&apos;s letter,
            Commissioner Hjaltman telling the landowners, &ldquo;I understand
            the proceedings are not just about infrastructure to you.
            They&apos;re about your land.&rdquo;<C n={33} /><C n={34} /> The
            governor who wrote both letters is on{" "}
            <Link href="/greg-abbott-bitcoin">Greg Abbott and Bitcoin</Link>.
          </p>

          <h2>The honest counterweight: the slowness, the loophole, and the secrecy</h2>
          <p>
            Three things, and the commission&apos;s own documents supply
            two of them. First, slowness. ERCOT&apos;s 2022 process was
            interim and its program &ldquo;temporary&rdquo;; the task force
            went inactive without a permanent large-flexible-load rule; the
            durable framework arrived only with a statute in 2025 and a
            batching process in 2026, by which time the operator&apos;s own
            vice president said it had outgrown the process.<C n={6} />
            <C n={5} /><C n={35} /> The registry took seventeen months; the
            interconnection standards, proposed in March, are the rule the
            industry files under and the one still open.<C n={12} />
            <C n={21} /> Second, the loophole, in staff&apos;s words: the
            four-coincident-peak charge let &ldquo;crypto mines and certain
            types of data centers&rdquo; shed load at the peaks and avoid
            transmission costs &ldquo;without commensurate system cost
            reductions,&rdquo; and the commission is only now, under
            statutory deadline and gubernatorial letter, replacing it – a
            decade after the mines arrived and a year and a half after
            Commissioner Glotfelty likened their grid-hero reputation to
            teenagers praised for putting out a grass fire their fireworks
            had started.<C n={24} /><C n={36} /> Third, secrecy. An agency
            that wants the Legislature to make every data center register,
            and that is auditing every mine over 25 megawatts, is in court
            to keep the public from seeing which mines over 75 registered,
            on a terrorism theory the Attorney General found unproven; the
            two positions can be reconciled – the agency wants the data,
            not the public to have it – but the reconciliation is the
            point.<C n={16} /><C n={31} /> What cuts the other way is real.
            The mines did cut 91.5% at Elliott&apos;s peak; the ride-through
            rule and the co-location conditions put the reliability risk on
            the load, as the chairman says, &ldquo;on the private company,
            not on the citizens&rdquo;; and the industry itself has called
            the registry &ldquo;appropriate&rdquo; and the large-load law a
            fix for the &ldquo;phantom load.&rdquo;<C n={7} /><C n={26} />
            <C n={13} /><C n={18} />
          </p>
          <p>
            The fair reading is that the commission has treated Bitcoin
            mining as a load problem and not a policy one – it has never
            said the mines should or should not be in Texas, only that it
            needs to know where they are and that they should pay their
            share of the wires – and that both of those positions were
            reached late and are still being written into rule. The
            question the commission has not answered, and the one its
            audit will force, is whether a miner that sells its
            flexibility is a benefit the grid should pay for or a cost it
            should recover, and its staff and its chairman have now said
            both.
          </p>

          <h2>Where does the commission stand today?</h2>
          <p>
            As of September 2026: two SB 6 rules adopted and two pending,
            a 12CP decision due in December, Batch Zero paused for an audit
            due December 10, a records suit against the Attorney General
            with no ruling, a registry whose count it has not disclosed,
            and a chairman with a term to 2029.<C n={21} /><C n={25} />
            <C n={32} /><C n={17} /><C n={3} /> The 90th Legislature convenes
            January 12, 2027 with the commission&apos;s own request for
            data-center registration on its desk and the House chairman
            who will hear it on{" "}
            <Link href="/ken-king-bitcoin">Ken King and Bitcoin</Link>. The
            regulator next door, which has never taken a position on the
            asset, is on{" "}
            <Link href="/texas-attorney-general-bitcoin">
              the Texas Attorney General and Bitcoin
            </Link>
            ; the statute-by-statute record the commission implements is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            . This page is the list the commission keeps, and will not
            show.
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
            Primary record first: the commission&apos;s proposed rules,
            project filings, and staff deck; ERCOT&apos;s market notices,
            reports, and releases; the Governor&apos;s directive letters;
            the Legislature&apos;s bill analyses and witness lists; Riot&apos;s
            SEC filing; the Energy Information Administration; then Utility
            Dive, the Texas Tribune, Straight Arrow News, Inside Climate
            News, and Texas Monthly for the quotes, the suit, and the
            counterweight. The commission&apos;s own press-release server
            refused automated requests, so its releases are cited as
            reported. This is a research and reference article, not
            financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {pucSources.map((s) => (
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
