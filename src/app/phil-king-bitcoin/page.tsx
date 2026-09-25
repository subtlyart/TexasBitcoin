import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  KING_LAST_VERIFIED,
  kingSources,
  kingTimeline,
  type KingTimelineKind,
} from "@/lib/king";

const pageUrl = `${site.url}/phil-king-bitcoin`;

export const metadata: Metadata = {
  title: "Phil King: The Man Who Wrote the Kill Switch",
  description:
    "Phil King's Bitcoin record, sourced: the Weatherford senator who helped deregulate the Texas grid as a House freshman in 1999, chaired Regulated Industries, coauthored the 2015 Bullion Depository and the 2019 blockchain work group, voted both 2023 mining bills out of Business and Commerce as vice chair, and authored SB 6 - the 2025 large-load law that made registration, backup-generation disclosure, and ERCOT curtailment the rule for every load over 75 MW. The kill switch, the rules, and the queue that grew from 63 to 474 gigawatts anyway.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Phil King: The Man Who Wrote the Kill Switch",
    description:
      "He has never given a speech about Bitcoin. He wrote the rules every Texas mine runs under. The grid author's record, from the 1999 deregulation vote to SB 6 and the 474-gigawatt queue. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Phil King?",
    a: "Phil King is a Republican state senator from Weatherford who represented Texas House District 61 from 1999 to 2023 and has held Senate District 10 since January 2023. A former Fort Worth police captain and attorney, he helped pass the 1999 electricity deregulation law as a freshman, chaired the House Regulated Industries Committee for three sessions, and is vice chair of the Senate Business and Commerce Committee. In Bitcoin history he is the author of Senate Bill 6, the 2025 large-load law that governs every mine and data center over 75 megawatts in ERCOT.",
  },
  {
    q: "What does Texas SB 6 do?",
    a: "SB 6, signed June 20, 2025, sets interconnection standards for any load over 75 megawatts in ERCOT: a study fee of at least $100,000, proof of site control, disclosure of duplicate requests elsewhere in Texas, and disclosure of on-site backup generation able to serve half the load. It lets ERCOT, after exhausting market tools, order a large load to run its backup or curtail during an emergency; requires loads interconnected after December 31, 2025 to install equipment for remote curtailment during firm load shed - the 'kill switch'; creates a competitively procured reliability service for large loads that excludes price-responsive ones; and orders a transmission-cost study by December 31, 2026.",
  },
  {
    q: "Does SB 6 apply to Bitcoin mines?",
    a: "Yes. The threshold is 75 megawatts at a single site, the same line Senator Johnson's 2023 registration law drew for mining facilities, and it applies to data centers, mines, and industrial loads alike. Mines interconnected after December 31, 2025 must be remotely curtailable during firm load shed, and the new reliability service the law creates excludes loads that curtail in response to price, which is how most mines already operate.",
  },
  {
    q: "How did SB 6 pass?",
    a: "Filed February 12, 2025 by King with Charles Schwertner as joint author. The Senate Business and Commerce Committee passed it 10–0 on March 13, the Senate 31–0 on March 19, the House State Affairs Committee 12–0 on May 23, and the House 103–25 on May 27, with Representative Ken King as House sponsor. No conference was needed. Governor Abbott signed it June 20, 2025, effective immediately, the same day he signed the Texas Strategic Bitcoin Reserve.",
  },
  {
    q: "Has Phil King said anything about Bitcoin?",
    a: "Not directly. His record on the asset is as a grid author: he coauthored the 2015 Bullion Depository act and the 2019 blockchain work-group bill, and as Business and Commerce vice chair he voted both 2023 mining bills out of committee unanimously. His public statements concern the grid and its costs; in April 2026 he told regulators, 'Everywhere we go, people are asking us about data centers and electricity costs and all these things. We need to be able to tell our constituents it's getting done.'",
  },
];

const kindStyle: Record<KingTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  grid: { color: "#c98a4e", label: "The grid" },
  law: { color: "var(--accent)", label: "The law" },
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
// Two figures - SB 6 as a mechanism, and the queue that outran it - drawn
// from the dated, sourced facts on this page (Sept 2026). Server-rendered
// SVG, no client JS.
function KingMechanismFigure() {
  const tools = [
    { title: "Prove you are real", lines: ["$100,000 study fee", "site control", "disclose duplicate requests"], note: "§ 37.0561(d),(f),(g)" },
    { title: "Show your backup", lines: ["on-site generation able to", "carry 50% of the load,", "disclosed to ERCOT"], note: "§ 37.0561(e)" },
    { title: "Run it or cut it", lines: ["in an emergency, after market", "tools: deploy backup or curtail,", "at ERCOT's direction"], note: "§ 37.0561(e)" },
    { title: "The kill switch", lines: ["loads connecting after", "Dec 31, 2025: remote cutoff", "during firm load shed"], note: "§ 39.170(a)" },
    { title: "Pay for the wires", lines: ["a new reliability service,", "no price-responsive loads;", "cost study by Dec 31, 2026"], note: "§ 39.170(b), § 6" },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="SB 6 as a mechanism in five tools for every load over 75 megawatts: prove you are real, show your backup, run it or cut it, the kill switch, and pay for the wires">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">SB 6 AS A MECHANISM · FIVE TOOLS FOR EVERY LOAD OVER 75 MEGAWATTS</text>
        {tools.map((t, i) => {
          const x = 28 + i * 152;
          const hot = i === 3;
          return (
            <g key={t.title}>
              <rect x={x} y="52" width="146" height="160" rx="10" fill="var(--surface-2)" stroke={hot ? "var(--accent)" : "#c98a4e"} strokeWidth="1.25" />
              <text x={x + 12} y="76" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{t.title}</text>
              {t.lines.map((l, j) => (
                <text key={l} x={x + 12} y={100 + j * 17} fontSize="10" fill="var(--muted)">{l}</text>
              ))}
              <text x={x + 12} y="198" fontSize="9" fill={hot ? "var(--accent)" : "var(--muted-2)"}>{t.note}</text>
            </g>
          );
        })}
        <text x="405" y="238" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">SB 6 (89R) enrolled text · the threshold is 75 MW unless the commission sets it lower; the same line as the 2023 mining registry</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        SB 6 as a mechanism. Five tools for any load over 75 megawatts: prove the project is real, disclose the backup generation, accept an emergency order to run it or curtail, install the remote cutoff if you connect after 2025, and pay for the transmission you cause. The fourth is the one the industry named.
      </figcaption>
    </figure>
  );
}

function KingQueueFigure() {
  const bars = [
    { label: "Dec 2024", gw: 63, note: "before the bill" },
    { label: "Oct 2025", gw: 189, note: "PUC to NASEO" },
    { label: "Dec 2025", gw: 230, note: "kill switch takes effect Dec 31" },
    { label: "Jun 2026", gw: 418, note: "the Governor's directive" },
    { label: "Aug 2026", gw: 474, note: "the audit freeze" },
  ];
  const max = 500;
  const w = 480;
  const peak = 91.1;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The ERCOT large-load queue from 63 gigawatts in December 2024 to 474 in August 2026, against a record peak demand of about 91 gigawatts">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE QUEUE THAT OUTRAN THE LAW · ERCOT LARGE-LOAD REQUESTS, GIGAWATTS</text>
        {bars.map((b, i) => {
          const y = 58 + i * 40;
          const bw = (b.gw / max) * w;
          return (
            <g key={b.label}>
              <text x="200" y={y + 15} fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">{b.label}</text>
              <rect x="212" y={y} width={bw} height="22" rx="3" fill={i === 0 ? "#6f9e6a" : "#c98a4e"} />
              <text x={212 + bw + 8} y={y + 15} fontSize="11" fontWeight="600" fill="var(--foreground)">{b.gw} GW</text>
              <text x={212 + bw + 8 + (b.gw >= 100 ? 52 : 44)} y={y + 15} fontSize="9.5" fill="var(--muted-2)">{b.note}</text>
            </g>
          );
        })}
        <line x1={212 + (peak / max) * w} y1="52" x2={212 + (peak / max) * w} y2="248" stroke="var(--accent)" strokeWidth="1.25" strokeDasharray="5 4" />
        <text x={212 + (peak / max) * w + 6} y="262" fontSize="9.5" fill="var(--accent)">record peak demand · 91.1 GW · July 22, 2026</text>
        <text x="405" y="290" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Introl, PUC, Houston Chronicle, Office of the Governor · requests, not connections: 7.5 GW connected as of Dec 2025</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The queue that outran the law. Large-load requests in ERCOT&apos;s queue grew from 63 gigawatts the December before SB 6 to 474 the August after its kill switch took effect – more than five times the grid&apos;s record peak. Most of it is data centers, and most of it is paper; the law was written to tell the difference, and the Governor froze the queue to find out.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function PhilKingBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Phil King: The Man Who Wrote the Kill Switch",
    description:
      "The Bitcoin record of the Texas senator who authored SB 6, the 2025 large-load law: the 1999 deregulation vote, the Regulated Industries chair, the 2015 and 2019 coauthorships, the 2023 committee votes on both mining bills, the 150-gigawatt hearing, the bill's five tools and its 31–0 and 103–25 votes, the PUC rulemakings, and the queue that grew from 63 to 474 gigawatts before the Governor froze it.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-13",
    dateModified: "2026-09-13",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Phil King" },
      { "@type": "Legislation", name: "Texas Senate Bill 6 (89R)" },
      { "@type": "Organization", name: "ERCOT" },
      { "@type": "Thing", name: "Bitcoin mining in Texas" },
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
        name: "Phil King and Bitcoin",
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
          / Phil King &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The Senate
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Phil King: The Man Who Wrote the Kill Switch
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            He has never given a speech about Bitcoin, and he wrote the
            rules every Texas mine runs under. A former Fort Worth police
            captain from Weatherford voted as a House freshman for the 1999
            law that deregulated the Texas grid, spent three sessions
            chairing the committee that regulated it, put his name on the
            Bullion Depository and the first blockchain work-group bill,
            and, as vice chair of the Senate committee that owns the grid,
            voted both 2023 mining bills out unanimously – the cap and the
            registry. Then in 2025 he wrote the bill that decided what to
            do with them: Senate Bill 6, the large-load law that made
            registration, backup-generation disclosure, and an ERCOT cutoff
            the rule for every load the size of a mine. The industry gave
            its central clause a name. Twenty months later the queue it was
            written to discipline had grown seven-fold and the Governor
            froze it. The tools, the votes, and the queue are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 13, 2026 · Updated{" "}
            {KING_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Phil King is the Republican state senator from Weatherford who
            authored Senate Bill 6, the 2025 Texas law that sets
            interconnection standards, backup-generation disclosure, and
            ERCOT emergency curtailment for every electric load over 75
            megawatts, including Bitcoin mines and data centers. In the
            Texas House from 1999 to 2023 and the Senate since, he is vice
            chair of the Business and Commerce Committee. SB 6 passed the
            Senate 31–0 and the House 103–25 and was signed June 20, 2025.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Phil King filed SB 6 on February 12, 2025 with Charles
              Schwertner as joint author; the Senate passed it 31–0 on March
              19 and the House 103–25 on May 27, 2025.<C n={10} />
              <C n={14} /><C n={15} />
            </li>
            <li>
              SB 6 sets a 75-megawatt threshold, a study fee of at least
              $100,000, and disclosure of on-site backup generation able to
              serve half the load.<C n={11} />
            </li>
            <li>
              Under SB 6, loads interconnected after December 31, 2025 must
              be remotely curtailable during firm load shed, and ERCOT may
              order any large load to run backup or curtail in an
              emergency.<C n={11} />
            </li>
            <li>
              As vice chair of Senate Business and Commerce, King voted both
              SB 1751 and SB 1929 out of committee 11–0 on April 4,
              2023.<C n={6} /><C n={7} /><C n={8} />
            </li>
            <li>
              King coauthored HB 483, the 2015 Texas Bullion Depository act,
              and HB 4517, the 2019 blockchain work-group bill.<C n={4} />
              <C n={5} />
            </li>
            <li>
              ERCOT&apos;s large-load queue grew from 63 gigawatts in
              December 2024 to about 474 gigawatts by August 3, 2026, when
              Governor Abbott ordered an audit of every project in
              it.<C n={17} /><C n={21} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From deregulation to the kill switch
            </h2>
            <span className="text-xs text-muted-2">1999 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {kingTimeline.map((e) => {
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
          <h2>Who is Phil King, and why does the grid author get a Bitcoin page?</h2>
          <p>
            Because in Texas the grid author is the mining author, whether
            or not he ever says the word. King is a Weatherford native –
            fifteen years a Fort Worth police officer, rising to captain, a
            Parker County justice of the peace, a Dallas Baptist MBA and a
            law degree – who entered the House in 1999 and, as a freshman,
            helped pass the deregulation law that built the market ERCOT
            runs.<C n={2} /><C n={1} /><C n={3} /> He chaired Regulated
            Industries, the House committee over that market, for three
            sessions.<C n={3} /> Along the way he put his name on the two
            lines of Texas hard-money law before he wrote one of his own:
            a coauthor of Capriglione&apos;s 2015 Bullion Depository and a
            joint author of Parker&apos;s 2019 blockchain work-group bill,
            the one that died in Calendars.<C n={4} /><C n={5} /> In
            January 2023 he moved to the Senate and Schwertner made him
            vice chair of Business and Commerce – the committee every
            mining and reserve bill of the last two sessions has passed
            through.<C n={1} /><C n={6} /> The chairman is on{" "}
            <Link href="/charles-schwertner-bitcoin">
              Charles Schwertner and Bitcoin
            </Link>
            ; the authors of the two coauthorships are on{" "}
            <Link href="/giovanni-capriglione-bitcoin">Giovanni Capriglione</Link>{" "}
            and <Link href="/tan-parker-bitcoin">Tan Parker</Link>. This is
            the vice chair who wrote the law the mines live under.
          </p>

          <h2>What did King do with the 2023 mining fight?</h2>
          <p>
            He voted both sides out and waited two years. On April 4, 2023
            his committee sent Kolkhorst&apos;s SB 1751 – the 10% cap on
            miners in paid demand response and the abatement ban – and
            Johnson&apos;s SB 1929 – the 75-megawatt registry – to the floor
            on the same day, both 11–0.<C n={7} /><C n={8} /> The Senate
            passed both on April 12; the House kept the registry and let
            the cap die.<C n={7} /><C n={8} /> Fourteen months later, on
            June 12, 2024, ERCOT&apos;s Pablo Vegas told the committee that
            peak demand could go from about 85,000 megawatts to 150,000 by
            2030, more than half of it data centers and miners, and the
            Lieutenant Governor said within days there would be no
            &ldquo;Wild Wild West of data centers and crypto
            miners.&rdquo;<C n={9} /> The Senate Research Center&apos;s
            brief for the bill that followed put the number at 130 to 150
            gigawatts of new load against a 2024 peak of 86, and its four
            goals in order: make large loads pay their interconnection
            costs, protect reliability, make the forecast credible, and
            make large loads share load shed with everyone
            else.<C n={12} /> The two 2023 bills, and their authors, are on{" "}
            <Link href="/lois-kolkhorst-bitcoin">Lois Kolkhorst and Bitcoin</Link>{" "}
            and{" "}
            <Link href="/nathan-johnson-bitcoin">Nathan Johnson and Bitcoin</Link>.
          </p>

          <h2>What does SB 6 actually do?</h2>
          <p>
            Five things, to every load over 75 megawatts at a single site –
            the same line the 2023 registry drew for mines, now applied to
            everyone.<C n={11} /> <strong>Prove the project is real:</strong>{" "}
            a flat study fee of at least $100,000, proof of site control,
            and disclosure of any duplicate request elsewhere in Texas that
            would change or withdraw this one.<C n={11} /> <strong>Show the
            backup:</strong> disclose on-site generation that cannot export
            to the grid but can carry at least half the load, and let the
            utility pass that to ERCOT.<C n={11} /> <strong>Run it or cut
            it:</strong> before or during an energy emergency, after every
            market tool but frequency response is deployed, ERCOT may direct
            the utility to require the load to run its backup or
            curtail.<C n={11} /><C n={14} /> <strong>The kill switch:</strong>{" "}
            a transmission-voltage load interconnected after December 31,
            2025 must have equipment that lets it be curtailed remotely
            during firm load shed.<C n={11} /><C n={15} /> <strong>Pay for
            the wires:</strong> ERCOT builds a competitively procured
            reliability service for large loads – with 24 hours&apos;
            notice, and closed to any load that curtails in response to
            price or already sells another ancillary service – and the PUC
            re-examines how transmission costs are allocated, with a study
            due December 31, 2026.<C n={11} /><C n={16} /> A load can jump
            the queue by bringing its own generation within 180 days or by
            signing a ten-year contract with ERCOT to be a flexible load
            that curtails on command.<C n={14} /> The law as a mechanism is
            drawn below; how it fits the state&apos;s statute-by-statute
            record is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            .
          </p>

          <KingMechanismFigure />

          <h2>How did SB 6 pass?</h2>
          <p>
            With a low number and almost no opposition. King filed it
            February 12, 2025 with Schwertner as joint author and eight
            coauthors from both parties, including Eckhardt and Alvarado on
            the left and Creighton and Middleton on the
            right.<C n={10} /> At the February 27 hearing the Sierra Club
            testified for, one witness against, and the Texas Blockchain
            Council, ERCOT, the PUC, the utilities, the Data Center
            Coalition, and Lancium registered &ldquo;on&rdquo; – the
            industry that had organized to kill the 2023 cap did not
            organize against this.<C n={13} /> Business and Commerce passed
            it 10–0 on March 13, the Senate 31–0 on March 19; House State
            Affairs, with Representative{" "}
            <Link href="/ken-king-bitcoin">Ken King</Link> as sponsor, 12–0 on May
            23; the House 103–25 on May 27, no conference
            required.<C n={10} /><C n={14} /><C n={15} /> Abbott signed it
            June 20, 2025, effective immediately – the same afternoon he
            signed the Texas Strategic Bitcoin Reserve, so that the state
            took a position in the asset and a leash on the load in one
            sitting.<C n={10} /> The reserve is on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            ; the mines the law now governs are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas mining map</Link>.
          </p>

          <h2>What happened after it passed?</h2>
          <p>
            The rules came, and the queue exploded. The Public Utility
            Commission opened four rulemakings in the fall of 2025 –
            forecasting criteria to strip &ldquo;phantom&rdquo; load from
            ERCOT&apos;s models, interconnection standards, net-metering
            review for loads pairing with existing generators, and the
            demand-management service – and told a national audience in
            October that the queue held 189 gigawatts of requests, 69% of
            them data centers, about 40% of the nation&apos;s electricity
            use, and that the Texas Reliability Entity had upgraded
            &ldquo;Disorganized Integration of Large Loads&rdquo; from
            unlikely to Likely/Major.<C n={16} /> By December it was 230
            gigawatts against 7.5 connected; by June 2026, 418; by August,
            474 – more than five times the record peak of 91,089 megawatts
            set on July 22.<C n={17} /><C n={18} /><C n={21} /> In April
            King told regulators to hurry: &ldquo;Everywhere we go, people
            are asking us about data centers and (electricity) costs and
            all these things. We need to be able to tell our constituents
            it&apos;s getting done.&rdquo;<C n={18} /> On June 10 the
            Governor directed{" "}
            <Link href="/texas-public-utility-commission-bitcoin">the PUC</Link>{" "}
            and ERCOT to make data centers pay
            their full infrastructure cost and to lower residential bills,
            with memoranda due July 17 and 31; King posted the next day
            that SB 6 was &ldquo;the nation&apos;s first comprehensive
            legislation regarding data centers&rdquo; and that he
            agreed.<C n={19} /><C n={20} /> On August 3 Abbott ordered every
            project in the queue audited before it could move
            forward.<C n={21} /><C n={22} />
          </p>

          <KingQueueFigure />

          <h2>The honest counterweight: the switch, the service, and the seven-fold queue</h2>
          <p>
            Three things, and the first is the one the industry names. The
            kill switch is the constraint the miners spent 2023 fighting,
            enacted for everyone: a mine that interconnects after 2025 can
            be cut remotely during load shed whether or not it is being
            paid to power down, and the cooperatives&apos; 2023 ask – shed
            the mines before any household – is what ERCOT now says it will
            recommend as a condition on net-metered loads.<C n={11} />
            <C n={16} /> Second, the service. The reliability
            product SB 6 creates for large loads excludes any load that
            curtails in response to the wholesale price or already sells
            an ancillary service – which is to say, it excludes the way
            most Texas mines make their curtailment money – and the
            industry&apos;s own trade press reads the law as the state
            replacing a voluntary emergency brake with an enforceable one
            just as miners pivot their sites to AI tenants who cannot
            flex.<C n={11} /><C n={23} /> Third, the queue. The law was
            written to make the forecast credible; in the twenty months
            after it passed, requests grew from 63 gigawatts to 474, most
            of them paper, and the Governor had to freeze the queue to sort
            the real from the phantom – with a directive that credited SB 6 with
            &ldquo;meaningful steps&rdquo; and then asked for
            more.<C n={17} /><C n={21} /><C n={19} /> The data does not even
            count the mines: ERCOT&apos;s large-load reporting excludes
            cryptocurrency facilities, which sit in the registry Johnson
            built instead.<C n={18} />
          </p>
          <p>
            The fair reading, from a site that is bullish on the load he
            leashed: SB 6 is the best thing that could have happened to
            Texas mining short of being left alone, because the
            alternative on the table in 2023 was a cap. A register-and-
            curtail regime treats a mine as what it is – the most flexible
            large load on the grid – and asks it to prove that flexibility
            on command rather than only when the price is right; a mine
            that cannot do that was never the grid asset the industry
            claimed. The exclusion from the new service is a real cost and
            an open question for the 90th Legislature. The queue is not
            the law&apos;s failure but its diagnosis: a $100,000 fee and a
            site-control requirement are exactly the tools that separate
            474 gigawatts of requests from the fraction that will ever draw
            power, and the audit is those tools being used. The man who
            deregulated the grid in 1999 wrote its first large-load
            constitution in 2025. It is not finished, and he has said so.
          </p>

          <h2>Where does the King record stand today?</h2>
          <p>
            As of September 2026: SB 6 is law and its four rulemakings are
            in force or pending, the kill switch has applied to every new
            large interconnection since January 1, the queue is frozen
            under audit at about 474 gigawatts, and the PUC&apos;s
            transmission-cost study and the agencies&apos; legislative
            recommendations are due before the 90th Legislature convenes
            on January 12, 2027.<C n={16} /><C n={21} /><C n={19} /> King
            was re-elected in November 2024 with 61.71% and holds Senate
            District 10 until January 2029, still vice chair of the
            committee that will write the next large-load
            bill.<C n={24} /><C n={1} /> The senator who tried to cap the
            mines is on{" "}
            <Link href="/lois-kolkhorst-bitcoin">Lois Kolkhorst and Bitcoin</Link>;
            the one who wrote the registry he extended is on{" "}
            <Link href="/nathan-johnson-bitcoin">Nathan Johnson and Bitcoin</Link>;
            the lieutenant governor whose position his bill enacted –
            bullish on the asset, tough on the load – is on{" "}
            <Link href="/dan-patrick-bitcoin">Dan Patrick and Bitcoin</Link>.
            This page is the man who wrote the leash.
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
            Primary record first: the Texas Senate for the bio; Texas
            Legislature Online for the bill histories, the enrolled SB 6
            text, the committee membership, and the witness list; the
            Senate Research Center and House Research Organization
            analyses; the Public Utility Commission&apos;s own
            implementation briefing; the Office of the Governor for the
            2026 directives; the Dallas Morning News, the Houston
            Chronicle, FOX 4, Community Impact, and the Texas Tribune for
            the quotes and the numbers; law-firm and trade analyses for the
            votes and the industry&apos;s reading. This is a research and
            reference article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {kingSources.map((s) => (
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
