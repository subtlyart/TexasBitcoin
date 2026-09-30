import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionsBlock } from "@/components/institutions-block";
import { site } from "@/lib/site";
import {
  BITDEER_LAST_VERIFIED,
  rockdaleStrip,
  bitdeerSources,
  bitdeerTimeline,
  type BitdeerTimelineKind,
} from "@/lib/bitdeer";

const pageUrl = `${site.url}/bitdeer-bitcoin`;

export const metadata: Metadata = {
  title: "Bitdeer: The Mine Next Door",
  description:
    "Bitdeer Technologies Group and Texas, 2018–2026, sourced from its SEC filings, Bitmain's releases, the county record, and the press: the Singapore company spun out of Bitmain in January 2021, controlled by Jihan Wu with 69.5% of the votes, that operates the 563-megawatt Rockdale mine four-tenths of a mile from Riot's on the same former Alcoa land. Bitmain's $500 million, 400-job promise of August 2018, the abatement lost when the crew fell to five, the 25 megawatts launched anyway in October 2019, the CNBC dispatch that called it 'aloof, steeped in mystery,' the 'nearly $50 million' from the grid, the Chinese-ownership question, Tether's stake, the first profitable year since 2021, 310 megawatts shed in Winter Storm Fern, 200 acres bought for $100 million in September 2026 - beside a 300-million-gallon water bill the Tribune had to find and an AI conversion that after two years is still 'in active evaluation' while the neighbor signs for $9.1 billion.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Bitdeer: The Mine Next Door",
    description:
      "Where industrial Texas mining began, and the company that built it without saying much. Bitdeer's Rockdale record, from the filings, the county, and the press. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is Bitdeer?",
    a: "A Singapore-headquartered, Cayman-incorporated Bitcoin miner and mining-rig designer listed on Nasdaq as BTDR. It was spun out of Bitmain, the Chinese rig maker, on January 26, 2021, went public through the Blue Safari SPAC on April 13, 2023, and is chaired and run by Bitmain's co-founder Jihan Wu, who held 19.5% of the shares and 69.5% of the votes in April 2026 through ten-vote Class V stock. Tether's affiliates hold about 19% of the Class A shares. It reported $620.3 million of revenue and $65.6 million of net income for 2025, ran 79.9 exahash of its own SEALMINER rigs in August 2026, and had 471 employees at the end of 2025.",
  },
  {
    q: "What does Bitdeer own in Rockdale?",
    a: "The other half of the former Alcoa smelter site. Its subsidiary Dory Creek leased the land from Alcoa in June 2018, the mine became operational in February 2019, Bitmain launched it publicly at 25 megawatts in October 2019, and by December 2024 it was 563 megawatts online with a 179-megawatt expansion planned for 2026. On September 1, 2026 Bitdeer bought about 200 acres of adjoining land for about $100 million in cash, giving it about 255 acres and 742 megawatts existing and planned in Milam County. It has said since February 2026 that it is evaluating converting the site to AI or colocation use but has named no tenant, megawatts, or price.",
  },
  {
    q: "What happened to Bitmain's 400 jobs?",
    a: "They did not arrive. Bitmain announced a $500 million data center with 400 jobs on August 6, 2018, and Milam County approved a ten-year phased tax abatement on August 13 conditioned on 350 of them. Bitcoin fell below $4,000 that winter; in January 2019 Bitmain suspended the project with a crew of five, and the abatement was halted for missing the job count. The mine was built anyway, more slowly and without the abatement, by Bitmain and then Bitdeer. In August 2026 Bitdeer said it employs more than a hundred people locally at an average of about $80,000 and has received no real-estate tax abatement.",
  },
  {
    q: "How does Bitdeer interact with the Texas grid?",
    a: "By curtailing, on its own account. Its filings describe software for automated curtailment and demand-response participation but do not break out ERCOT revenue; the Dallas Morning News reported in 2023 that the Rockdale mine had been awarded 'nearly $50 million' for grid-balancing participation. The company powered down ahead of Winter Storm Elliott in December 2022 and, by its August 2026 statement, cut 310 megawatts in Winter Storm Fern in January 2026 and has logged more than 194 hours of curtailment since 2025. It has not testified at the Legislature on SB 1751, SB 6, or the 2026 interim hearings, and it endorsed the Governor's August 2026 data-center audit.",
  },
  {
    q: "Is Bitdeer a Chinese company?",
    a: "Not in law: it is incorporated in the Cayman Islands, headquartered in Singapore, and listed in New York. Its founder and controlling shareholder, Jihan Wu, co-founded Bitmain in Beijing and lives in Singapore; the company was carved out of Bitmain in 2021. The Dallas Morning News raised the ownership question in 2023, noting that Texas's 2021 Lone Star Infrastructure Protection Act, aimed at Chinese and other adversary interests on the grid, may not reach a load on the Attorney General's reading. A 2025 federal probe of Bitmain rigs, reported by Bloomberg, did not name Bitdeer, which now builds its own chips. No Texas or federal action against Bitdeer's ownership has been reported.",
  },
  {
    q: "Is Bitdeer profitable?",
    a: "Once in five years. Net profit of $82.6 million in 2021, then losses of $60.4 million in 2022, $56.7 million in 2023, and $599.2 million in 2024, most of the last a fair-value charge on convertible notes and warrants; a profit of $65.6 million in 2025 on $620.3 million of revenue as its own rigs came online; then losses of $159.5 million and $92.3 million in the first two quarters of 2026. Its bitcoin holdings fell from 2,017 at the end of 2025 to 61 in August 2026 as it sold to fund rigs and land.",
  },
];

const kindStyle: Record<BitdeerTimelineKind, { color: string; label: string }> = {
  bitmain: { color: "var(--star)", label: "Bitmain" },
  rockdale: { color: "var(--accent)", label: "Rockdale" },
  singapore: { color: "#c98a4e", label: "Singapore" },
  grid: { color: "#6f9e6a", label: "The grid" },
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
// Two figures - Rockdale's two neighbors as a two-sided strip, and the
// numbers - drawn from the dated, sourced facts on this page (Sept
// 2026). Server-rendered SVG, no client JS.
function BitdeerRockdaleFigure() {
  const t0 = new Date("2018-05-01").getTime();
  const t1 = new Date("2026-12-01").getTime();
  const x0 = 110;
  const x1 = 750;
  const px = (d: string) => x0 + ((new Date(d).getTime() - t0) / (t1 - t0)) * (x1 - x0);
  const y = 150;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="Rockdale's two neighbors 2018 to 2026: above the line, Bitmain and Bitdeer - the 2018 promise, the 2019 suspension and the 25-megawatt launch, the 2021 spin-off, CNBC's aloof, 563 megawatts, 200 acres bought; below the line, Whinstone and Riot - the 300-megawatt site, Riot's purchase, the 31.7 million dollar August, the 9.1 billion dollar AI lease">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">ROCKDALE&apos;S TWO NEIGHBORS · BITMAIN AND BITDEER ABOVE THE LINE, WHINSTONE AND RIOT BELOW · 2018 → 2026</text>
        <line x1={x0} y1={y} x2={x1} y2={y} stroke="var(--muted-2)" strokeWidth="1.5" />
        {[2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].map((yr) => (
          <g key={yr}>
            <line x1={px(`${yr}-01-01`)} y1={y - 5} x2={px(`${yr}-01-01`)} y2={y + 5} stroke="var(--muted-2)" strokeWidth="1" />
            <text x={px(`${yr}-01-01`)} y={y + 4} fontSize="9" textAnchor="middle" fill="var(--muted-2)" dx="14">{yr}</text>
          </g>
        ))}
        {rockdaleStrip.map((k, i) => {
          const up = k.side === "bitdeer";
          const upIdx = rockdaleStrip.slice(0, i).filter((q) => q.side === "bitdeer").length;
          const dnIdx = rockdaleStrip.slice(0, i).filter((q) => q.side === "riot").length;
          const tier = up ? upIdx % 3 : dnIdx % 2;
          const ly = up ? y - 34 - tier * 30 : y + 48 + tier * 30;
          const col = up ? "#c98a4e" : "var(--accent)";
          return (
            <g key={k.l + k.d}>
              <line x1={px(k.d)} y1={up ? y - 6 : y + 6} x2={px(k.d)} y2={up ? ly + 14 : ly - 12} stroke="var(--border)" strokeWidth="1" />
              <circle cx={px(k.d)} cy={y} r="4.5" fill="var(--surface)" stroke={col} strokeWidth="2" />
              <text x={px(k.d)} y={ly} fontSize="10.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{k.l}</text>
              <text x={px(k.d)} y={ly + 12} fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">{k.sub}</text>
            </g>
          );
        })}
        <text x="405" y="292" fontSize="10" textAnchor="middle" fill="var(--muted-2)">KWTX 2018–19 · Bitmain Oct 2019 · Bitdeer 20-F 2025 and 6-Ks · CNBC Oct 2021 · Riot 8-Ks and the Riot Platforms page on this site</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Two neighbors. Amber is the company that came first, promised the most, and said the least; blue is the one that came second and has been in the papers ever since. Read left to right it is the same land, the same county, the same grid, and two different ideas of what a mine owes the public – ending with one neighbor holding a $9.1 billion lease and the other holding 200 more acres and a plan it has not described.
      </figcaption>
    </figure>
  );
}

function BitdeerNumbersFigure() {
  const years = [
    { y: "2021", rev: 394.7, ni: 82.6, eh: null as number | null, btc: null as number | null },
    { y: "2022", rev: 333.3, ni: -60.4, eh: null, btc: null },
    { y: "2023", rev: 368.6, ni: -56.7, eh: null, btc: null },
    { y: "2024", rev: 349.8, ni: -599.2, eh: 8.7, btc: 594 },
    { y: "2025", rev: 620.3, ni: 65.6, eh: 55.2, btc: 2017 },
    { y: "H1 2026", rev: 417.7, ni: -251.8, eh: 73.0, btc: 150 },
  ];
  const x0 = 90;
  const bw = 88;
  const gap = 26;
  const zeroY = 160;
  const scale = 105 / 650; // px per $M
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 312" role="img" aria-label="Bitdeer's numbers by year: revenue of 395 million in 2021, 333 million in 2022, 369 million in 2023, 350 million in 2024, 620 million in 2025, and 418 million in the first half of 2026; net income of plus 83 million, minus 60, minus 57, minus 599, plus 66, and minus 252 million; self-mining hashrate 8.7 exahash at the start of 2025, 55.2 at the end, 73 in June 2026">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE NUMBERS · REVENUE ABOVE, NET INCOME BELOW, $ MILLIONS, WITH SELF-MINING HASHRATE · 2021 → MID-2026</text>
        <line x1={x0 - 14} y1={zeroY} x2={x0 + 6 * (bw + gap)} y2={zeroY} stroke="var(--muted-2)" strokeWidth="1.25" />
        <text x={x0 - 18} y={zeroY + 4} fontSize="9" textAnchor="end" fill="var(--muted-2)">$0</text>
        {years.map((d, i) => {
          const x = x0 + i * (bw + gap);
          const hr = d.rev * scale;
          const hn = Math.abs(d.ni) * scale;
          return (
            <g key={d.y}>
              <rect x={x} y={zeroY - hr} width={bw} height={hr} rx="3" fill="var(--muted-2)" fillOpacity="0.35" />
              <text x={x + bw / 2} y={zeroY - hr - 5} fontSize="10" textAnchor="middle" fill="var(--muted)">{d.rev.toLocaleString()} rev</text>
              <rect x={x} y={zeroY} width={bw} height={hn} rx="3" fill={d.ni >= 0 ? "#6f9e6a" : "#c98a4e"} fillOpacity="0.85" />
              <text x={x + bw / 2} y={zeroY + hn + 12} fontSize="10.5" fontWeight="700" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{d.ni >= 0 ? "+" : "−"}{Math.abs(d.ni).toLocaleString()}</text>
              <text x={x + bw / 2} y="272" fontSize="10" textAnchor="middle" fill="var(--muted-2)">{d.y}</text>
              {d.eh && <text x={x + bw / 2} y="286" fontSize="9" textAnchor="middle" fill="var(--accent)">{d.eh} EH/s</text>}
              {d.btc !== null && <text x={x + bw / 2} y="299" fontSize="9" textAnchor="middle" fill="#6f9e6a">{d.btc.toLocaleString()} BTC</text>}
            </g>
          );
        })}
        <text x="405" y="310" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Bitdeer 20-Fs 2022–2025 · Q1 and Q2 2026 results · profit bars green, loss bars amber; net income drawn below the line for legibility · 2024 loss is mostly fair-value marks on notes and warrants</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The numbers. A company whose revenue was flat for four years and nearly doubled in the fifth, when its own rigs replaced other people&apos;s; a hashrate that went from under nine exahash to eighty in twenty months; and a profit line that has been positive twice, in the first year and the last, with a 2024 loss made mostly of accounting on its own securities. The 2026 bars are two quarters. The treasury was spent on the rigs and the land.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function BitdeerBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bitdeer: The Mine Next Door",
    description:
      "The Texas record of Bitdeer Technologies Group, from its filings, Bitmain's releases, the county record, and the press: Bitmain's Rockdale promise and abatement, the suspension and the quiet build, the spin-off and the SPAC, the CNBC dispatch, the grid payments and the ownership question, Tether, the first profit since 2021, Winter Storm Fern, the Governor's audit, the 200 acres, the water, and the AI plan not yet described.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    about: [
      { "@type": "Thing", name: "Bitcoin mining" },
      { "@type": "Corporation", name: "Bitdeer Technologies Group", tickerSymbol: "BTDR" },
      { "@type": "Place", name: "Rockdale, Texas" },
      { "@type": "Place", name: "Milam County, Texas" },
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
        name: "Bitdeer and Texas",
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
          / Bitdeer &amp; Texas
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The companies
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Bitdeer: The Mine Next Door
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Industrial Bitcoin mining in Texas began on a piece of
            aluminum-company land outside Rockdale in the summer of 2018,
            when a Chinese hardware maker promised Milam County five
            hundred million dollars and four hundred jobs, took a tax
            abatement, and five months later left five people on site.
            The company that built the mine anyway, at twenty-five
            megawatts and then five hundred and sixty-three, is the one
            this site has said least about, because it says least about
            itself: a Singapore firm spun out of Bitmain in 2021, run by
            Bitmain&apos;s co-founder with seven votes in ten, that would
            not tell a CNBC crew how many machines it had while the
            neighbor four-tenths of a mile away gave tours. The neighbor
            has since sued the federal government, testified in Austin,
            been paid $31.7 million to switch off in a single August, and
            signed a nine-billion-dollar AI lease. Bitdeer has cut 310
            megawatts in a winter storm, turned its first profit in four
            years, bought two hundred more acres for a hundred million
            dollars, and said for two years that it is evaluating what to
            build. Bitmain&apos;s promise, the quiet build, the grid, and
            the land are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 30, 2026 · Updated{" "}
            {BITDEER_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Bitdeer Technologies Group is the Singapore-based,
            Nasdaq-listed Bitcoin miner and rig maker, spun out of Bitmain
            in January 2021 and controlled by Jihan Wu with 69.5% of the
            votes, that operates the 563-megawatt Rockdale mine in Milam
            County on the former Alcoa smelter land next to Riot&apos;s.
            Bitmain began the site in 2018 with a $500 million, 400-job
            promise that was suspended in 2019 and built more slowly
            afterward. Bitdeer reported $620.3 million of revenue and a
            $65.6 million profit for 2025, ran 79.9 exahash of its own
            SEALMINER rigs in August 2026, bought 200 more acres at
            Rockdale for $100 million in September 2026, and says it is
            evaluating an AI conversion it has not yet described.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Bitmain announced a $500 million, 400-job data center at
              Rockdale on August 6, 2018 and won a ten-year Milam County
              tax abatement on August 13; it suspended the project in
              January 2019 with a crew of five and the abatement was halted
              for missing the 350-job minimum.<C n={11} /><C n={13} />
              <C n={14} />
            </li>
            <li>
              Bitdeer&apos;s Rockdale data center became operational in
              February 2019 and had 563 megawatts in use at March 31, 2026,
              per its 2025 annual report, which says the company &ldquo;is
              evaluating converting this site for colocation or AI cloud
              use.&rdquo;<C n={1} />
            </li>
            <li>
              Bitmain distributed Bitdeer&apos;s shares to its own
              shareholders on January 26, 2021; Jihan Wu held 19.5% of the
              shares and 69.5% of the voting power at April 21, 2026.
              <C n={1} /><C n={10} />
            </li>
            <li>
              Bitdeer curtailed 310 megawatts at Rockdale in Winter Storm
              Fern in January 2026 and has logged more than 194 hours of
              curtailment since 2025, by its own August 14, 2026 statement.
              <C n={37} />
            </li>
            <li>
              Bitdeer bought about 200 acres beside its Rockdale site for
              about $100 million in cash on September 1, 2026, for a Milam
              County footprint of about 255 acres and 742 megawatts existing
              and planned.<C n={39} /><C n={42} />
            </li>
            <li>
              The Texas Tribune identified Bitdeer&apos;s Rockdale facility
              on September 14, 2026 as one of the state&apos;s largest
              data-center water users at more than 300 million gallons a
              year.<C n={40} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From Bitmain&apos;s promise to the land next door
            </h2>
            <span className="text-xs text-muted-2">2018 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {bitdeerTimeline.map((e) => {
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
          <h2>Where did Bitdeer come from?</h2>
          <p>
            From Bitmain, and from Rockdale. Bitmain, the Beijing company
            that makes most of the world&apos;s mining machines, leased part
            of the 33,000-acre Alcoa site through a subsidiary called Dory
            Creek in June 2018 and announced the project that August; the
            mine, by Bitdeer&apos;s own filings, became operational in
            February 2019.<C n={1} /><C n={11} /> On January 26, 2021
            Bitmain distributed the shares of its mining subsidiary to its
            own shareholders as a dividend in kind, and Bitdeer became a
            separate company with a Singapore headquarters, Jihan Wu -
            Bitmain&apos;s co-founder - as chairman, and Linghui Kong as
            chief executive.<C n={1} /><C n={4} /> It agreed to merge with
            the Blue Safari SPAC in November 2021 at about a $4 billion
            enterprise value; the deal took seventeen months and two
            deadline extensions, funded by Bitdeer&apos;s own interest-free
            loans to the shell, and closed April 13, 2023.<C n={4} />
            <C n={5} /><C n={6} /> Wu took over as chief executive on
            March 1, 2024.<C n={7} />
          </p>
          <p>
            The company is controlled in a way none of the others in this
            wing are. Its Class V shares carry ten votes each and may be
            held only by the founder and his affiliates; at April 21,
            2026 Wu owned 19.5% of the stock and 69.5% of the votes, and
            the shelf registration filed that August says plainly that he
            &ldquo;currently controls a majority of the voting
            power.&rdquo;<C n={1} /><C n={10} /> Tether bought $100 million
            of shares and a warrant in May 2024 and its affiliates hold
            about 19% of the Class A.<C n={8} /><C n={9} /><C n={1} /> Since
            2024 the company has designed its own rigs, the SEALMINER
            line, reaching 9.45 joules a terahash in April 2026, which is
            the main reason its revenue nearly doubled in 2025.<C n={32} />
            <C n={31} />
          </p>

          <h2>What did Bitmain promise Rockdale, and what did it deliver?</h2>
          <p>
            The promise was the biggest thing to happen to Milam County
            since Alcoa left. The smelter and Luminant&apos;s Sandow plant
            had closed in 2017 and 2018, taking about 1,700 jobs and 30% of
            the county&apos;s tax revenue. On August 6, 2018 Bitmain
            announced a $500 million data center with 400 jobs and 137
            more in spin-offs; on August 13 the commissioners court
            approved a ten-year phased tax abatement conditioned on 350 of
            them. &ldquo;This is a great day for all the citizens of Milam
            County,&rdquo; the development district&apos;s chairman said;
            &ldquo;We welcome our newest employer,&rdquo; said the county
            judge.<C n={11} /><C n={12} /><C n={14} />
          </p>
          <p>
            Bitcoin fell below $4,000 that winter. In January 2019 Bitmain
            suspended Rockdale, leaving a crew of five and seven or eight
            thousand idle servers, and the abatement was halted for want
            of the jobs. The new county judge, Steve Young: &ldquo;Whether
            you&apos;re selling feed for cattle or mining cryptocurrency, if
            the market goes sour you&apos;re just up the
            creek.&rdquo;<C n={13} /><C n={14} /> Then, without the
            abatement and without the headlines, the mine got built. On
            October 21, 2019 Bitmain announced the launch of a 25-megawatt
            farm, a 50-megawatt target, and 300 megawatts of potential,
            with DMG Blockchain operating it; CoinDesk reported fewer than
            fifty staff and a build cost of $80 to $100 million. A Bitmain
            executive: &ldquo;Our investment is not so sensitive to the
            bitcoin price.&rdquo; A former Alcoa worker: &ldquo;People are
            a little skeptical.&rdquo;<C n={15} /><C n={16} /> By 2020 the
            site had three lines built, two under construction, and plans
            for sixteen; by December 2024 it was 563 megawatts, with 179
            more planned.<C n={17} /><C n={25} /> In August 2026 the
            company said it employs more than a hundred people locally at
            an average of about $80,000, has received no real-estate tax
            abatement, and gives to the school district and the volunteer
            fire department.<C n={37} /> The four hundred jobs were never
            the point; the megawatts were.
          </p>
          <BitdeerRockdaleFigure />

          <h2>Why has the site said so little about the largest mine at Rockdale?</h2>
          <p>
            Because the company does. CNBC sent a crew to Rockdale in
            October 2021 and came back with a comparison the town has
            lived with since: Riot&apos;s Whinstone, four-tenths of a mile
            away, &ldquo;throws open its doors to media,&rdquo; while
            Bitdeer is &ldquo;aloof, steeped in mystery, and definitely not
            keen on visitors,&rdquo; and would not answer questions about
            its rig count, headcount, or output.<C n={18} /><C n={24} />
            The pattern holds in the public record. Riot testified against
            SB 1751 in March 2023; Bitdeer did not appear. Riot sued the
            Department of Energy over its emergency survey in 2024;
            Bitdeer&apos;s name is on Senator Warren&apos;s 2022 letter to
            six miners and nowhere in the Waco docket. Riot reports its
            power credits to the dollar; Bitdeer&apos;s annual reports do
            not contain the word ERCOT.<C n={20} /><C n={19} /><C n={1} />
            <C n={2} /> Riot is on{" "}
            <Link href="/riot-platforms-bitcoin">its own page</Link> and
            the town on <Link href="/rockdale-texas-bitcoin">its own</Link>;
            this page exists because the other half of the land deserved
            one.
          </p>

          <h2>What is Bitdeer&apos;s record with the grid and the state?</h2>
          <p>
            Mostly what others have found out. The Dallas Morning
            News&apos;s watchdog column reported in the fall of 2023 that
            the Rockdale mine draws power equal to more than 300,000
            homes and &ldquo;has been awarded nearly $50 million for
            participating in these programs that help balance the
            grid&rdquo; - the only public figure for the site&apos;s
            demand-response earnings, and not the company&apos;s.<C n={22} />
            <C n={23} /> The company powered down with the rest of Texas
            ahead of Winter Storm Elliott in December 2022 and, in Winter
            Storm Fern in January 2026, told the press it &ldquo;stands
            ready to fully support the grid should supply constraints
            occur.&rdquo;<C n={45} /><C n={44} /> Its own numbers came
            seven months later, in the statement it issued supporting the
            Governor&apos;s audit: &ldquo;194+ hours of curtailment since
            2025,&rdquo; about 55 million kilowatt-hours of demand reduced,
            and a &ldquo;310 MW load reduction during Winter Storm
            Fern.&rdquo; &ldquo;Greater industry disclosure encourages
            responsible, sustainable growth that puts Texans
            first.&rdquo;<C n={37} /> The Governor&apos;s directive of
            August 3, 2026 asks ERCOT to audit each large load&apos;s tax
            incentives, water, cooling, community impact, and
            &ldquo;project ownership structures&rdquo;; the audit of roughly
            300 projects is due December 10, and no source yet says how
            Rockdale&apos;s planned 179 megawatts are classed.<C n={34} />
            <C n={38} />
          </p>
          <p>
            The ownership question has been asked once, in the same
            Dallas Morning News reporting. Texas&apos;s Lone Star
            Infrastructure Protection Act of 2021 bars companies owned by
            citizens of China, Russia, Iran, and North Korea from the
            state&apos;s critical infrastructure; the Attorney General has
            read it to reach generators, not loads. Bitdeer is a Cayman
            company run from Singapore by a founder born in China and
            resident in Singapore, spun out of a Beijing company whose
            rigs the federal government examined for security risks in
            2025 - a probe that did not name Bitdeer, which now makes its
            own.<C n={22} /><C n={30} /><C n={1} /> No Texas or federal
            action against Bitdeer&apos;s ownership has been reported, and
            its 2025 annual report does not contain the words national
            security, CFIUS, or foreign adversary.<C n={1} />
          </p>
          <BitdeerNumbersFigure />

          <h2>The honest counterweight: the quiet mine, the water, and the plan</h2>
          <p>
            Three things, and the first cuts in Bitdeer&apos;s favor. The
            mine next door has none of the neighbor&apos;s troubles: no
            nuisance suit, no county resolution, no jury trial, no
            incorporation vote. It took no abatement after 2019, pays more
            than a hundred people about $80,000, has cut load in every
            storm anyone has checked, and has said it welcomes the
            Governor&apos;s scrutiny.<C n={37} /> Rockdale&apos;s noise
            coverage is about Riot; Granbury&apos;s is about MARA; Bitdeer
            has never been the subject of either. The second thing is what
            the quiet costs. The Texas Tribune found in September 2026,
            reporting on a water survey that only 28% of the state&apos;s
            data centers had answered, that the Rockdale facility uses more
            than 300 million gallons a year, a town of 3,500&apos;s worth -
            a figure the company had not published and the public learned
            from a reporter.<C n={40} /> The grid payments were the same:
            &ldquo;nearly $50 million,&rdquo; from a newspaper, not a
            filing.<C n={22} /> The third is the plan. Rockdale has been
            &ldquo;Evaluating AI&rdquo; since February 2026 and &ldquo;in
            active evaluation of AI transition&rdquo; since May, through
            two quarterly reports, a $100 million land purchase, and a
            statement that the site is &ldquo;well positioned to receive
            additional power allocations,&rdquo; without a tenant, a
            megawatt, or a dollar attached.<C n={31} /><C n={33} />
            <C n={35} /><C n={39} /><C n={41} /> In the same weeks the
            neighbor named a frontier AI lab, 191 megawatts, twenty years,
            and $9.1 billion.<C n={36} /> A company controlled by one man
            with seven votes in ten, whose treasury went from 2,017
            bitcoin to 61 in eight months to pay for rigs and land, is
            asking Milam County to trust an evaluation.<C n={1} />
            <C n={31} /><C n={41} />
          </p>
          <p>
            The fair reading is that Bitdeer has been a better neighbor
            than its reputation and a worse witness than its neighbor -
            that the town got a mine that works and pays without ever
            getting the company that would explain it - and that the
            Governor&apos;s audit, which asks about ownership and water by
            name, is the first time the state has asked the questions the
            press has been asking since 2021.
          </p>

          <h2>Where does Bitdeer stand today?</h2>
          <p>
            As of September 30, 2026: 563 megawatts online at Rockdale,
            179 planned, 255 acres owned or leased, about 80 exahash of
            its own rigs, 61 bitcoin, a $92.3 million second-quarter loss,
            a founder with 69.5% of the votes, an AI conversion under
            evaluation, a water survey the state is now enforcing, and an
            audit due in December.<C n={39} /><C n={41} /><C n={35} />
            <C n={1} /><C n={40} /> The other companies in the wing are
            on{" "}
            <Link href="/riot-platforms-bitcoin">Riot Platforms and Texas</Link>,{" "}
            <Link href="/mara-holdings-bitcoin">MARA Holdings and Texas</Link>,{" "}
            <Link href="/core-scientific-bitcoin">Core Scientific and Texas</Link>, and{" "}
            <Link href="/cipher-mining-bitcoin">Cipher and Texas</Link>;
            the town is on{" "}
            <Link href="/rockdale-texas-bitcoin">Rockdale, Texas</Link>;
            the sites are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
            This page is the mine next door, and what the public has been
            able to find out about it.
          </p>
        </div>

        <InstitutionsBlock current="/bitdeer-bitcoin" />

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
            Primary record first: the company&apos;s own SEC filings (Form
            20-F and 6-K), releases, and statements; the Blue Safari SPAC
            filings; Bitmain&apos;s release; the Legislature&apos;s witness
            lists; the Senate letter; then KWTX, Texas Standard, the Dallas
            Morning News, the Texas Tribune, CoinDesk, CNBC, The Block, and
            the trade press for the quotes, the county record, the grid
            payments, and the water figure. Where a number is the
            company&apos;s own and unaudited, the page says so. This is a
            research and reference article, not financial, investment, or
            legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {bitdeerSources.map((s) => (
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
