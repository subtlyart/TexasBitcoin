import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionsBlock } from "@/components/institutions-block";
import { site } from "@/lib/site";
import {
  LANCIUM_LAST_VERIFIED,
  lanciumCampuses,
  lanciumSources,
  lanciumTimeline,
  type LanciumTimelineKind,
} from "@/lib/lancium";

const pageUrl = `${site.url}/lancium-bitcoin`;

export const metadata: Metadata = {
  title: "Lancium: The Landlord Who Patented the Switch",
  description:
    "Lancium and Texas, 2017–2026, sourced from the Federal Circuit, ERCOT's board, the City of Abilene, the Legislature, and the company's own releases: the Houston start-up that put 120 Bitcoin miners beside a wind farm in 2018, patented the software that turns them down in five seconds, won ERCOT's first load-only Controllable Load Resource designation in 2020, sued two miners over the patents, promised Fort Stockton 325 megawatts and Abilene a $2.4 billion Bitcoin-and-computing campus - and then leased the Abilene land to Crusoe for the first Stargate site, took Blackstone's and Nvidia's money, gave ERCOT a free license after its own counsel called the patents a possible 'barrier to entry,' and announced two more gigawatt campuses in a week. Beside it: Fort Stockton at 25 of 325 megawatts, a Bitcoin tenant that never arrived, an 80% county abatement, doubled rents, and 20 gallons of water a minute.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Lancium: The Landlord Who Patented the Switch",
    description:
      "The company that taught ERCOT to count a mine as a resource, and then rented its campuses to AI instead. Lancium's Texas record, from the courts, the grid operator, and the counties. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is Lancium?",
    a: "A private Texas energy and data-center developer, founded in Houston in November 2017 by Michael McNamara and Raymond Cline Jr. and now based in The Woodlands, that began by placing Bitcoin miners next to wind farms and patenting software, Smart Response, that ramps a data center's power down in seconds when the grid needs it. It won ERCOT's first load-only Controllable Load Resource designation in June 2020, built a small mine at Fort Stockton, and owns the Abilene land under the first Stargate AI campus. Blackstone took a stake of more than $500 million in 2024 and Nvidia invested in August 2026; the company describes itself as a Blackstone portfolio company with 4 gigawatts operating and a pipeline past 15.",
  },
  {
    q: "What does Lancium have to do with Bitcoin?",
    a: "It was born in Bitcoin and left it. Its 2018 fleet was 120 miners; its patents were written for ASICs; its first Controllable Load Resource was a mining host in Big Spring; its Fort Stockton Clean Campus was built for miners and its Abilene campus was announced in December 2021 for 'hosting Bitcoin mining and other energy-intensive applications,' with CleanSpark signing for 200 megawatts in March 2022. Fort Stockton stalled at 25 megawatts of a promised 325, no CleanSpark machines were ever reported at Abilene, and when construction finally began there in June 2024 the tenant was Crusoe, building for Oracle and OpenAI. Lancium's contribution to Texas Bitcoin is the idea, and the market status, that a mine is a grid resource.",
  },
  {
    q: "What is the Abilene Clean Campus?",
    a: "About 1,100 acres in Taylor County, annexed by the City of Abilene, announced on December 21, 2021 as a $2.4 billion, 200-megawatt-to-1-gigawatt campus with 57 jobs, 'the largest project in Abilene and Taylor County history.' Nothing was built until Crusoe leased about 90 acres in 2024 for an AI data center that grew to 1.2 gigawatts, eight buildings, and about 4 million square feet, financed by Crusoe, Blue Owl, and Primary Digital Infrastructure in a joint venture that reached $15 billion; OpenAI, SoftBank, Oracle, and MGX named it Stargate's first site on January 21, 2025. Three of eight buildings were running by April 2026 with more than 8,500 construction workers on site. Lancium owns the land, the interconnection, and the power orchestration.",
  },
  {
    q: "What are Lancium's patents, and why did ERCOT license them?",
    a: "A family of patents, beginning with U.S. 10,608,433 in March 2020, on adjusting a data center's consumption under a power-option agreement. Lancium sued Layer1 over them in 2020 and settled with a license; sued US Bitcoin over seven of them in 2023 and voluntarily dismissed in January 2024 on undisclosed terms; and beat a Delaware claim by BearBox that Austin Storms had invented the method first, affirmed by the Federal Circuit in January 2025. In April 2025 ERCOT's general counsel told the board the patents 'may be acting as a barrier to entry for increased CLR participation,' and Lancium gave ERCOT a non-exclusive, perpetual, royalty-free license for the region covering every existing and future patent needed for loads to participate in its markets.",
  },
  {
    q: "What is Lancium's record with the Texas Legislature and the grid?",
    a: "McNamara testified 'on' SB 6, the 2025 large-load law, before Senate Business & Commerce on February 27, 2025, and sat on a panel at the House State Affairs interim hearing on data centers and Batch Zero on April 9, 2026. No Lancium witness appears on the 2023 SB 1751 list. The company endorsed the Governor's August 2026 data-center audit: 'Large computing load can be an asset to the grid rather than a burden on it.' Its Childress and Hall County interconnections were approved under ERCOT's pre-Batch Zero process; whether any Lancium project is caught in the August 2026 energization pause has not been reported.",
  },
  {
    q: "What has Lancium cost and earned Abilene?",
    a: "Taylor County amended its abatement in February 2025 over residents' objections; local reporting put it at 80% of value for ten years, with the city at 85% and the school district giving nothing, and county revenue at $4 to $4.5 million a year initially and about $18 million at full build. The campus draws about 20 gallons of water a minute against a 500-gallon allocation and had more than 8,500 workers on site in April 2026. Rents have doubled and tripled, residents have protested 'backroom data center deals,' and the county judge said in September 2026 that abatements are unpopular but 'the only way you're going to have any authority.' Lancium is private and reports no financials.",
  },
];

const kindStyle: Record<LanciumTimelineKind, { color: string; label: string }> = {
  patent: { color: "var(--star)", label: "The patent" },
  campus: { color: "#c98a4e", label: "The campuses" },
  court: { color: "#8a7fb5", label: "The courts" },
  stargate: { color: "#6f9e6a", label: "Stargate" },
  watch: { color: "var(--accent)", label: "The watch" },
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
// Two figures - promised against built at the four campuses, and the
// money by round - drawn from the dated, sourced facts on this page
// (Sept 2026). Server-rendered SVG, no client JS.
function LanciumCampusesFigure() {
  const x0 = 140;
  const maxW = 540;
  const scale = maxW / 1200;
  const rowH = 52;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="Lancium's Texas campuses, promised against built: Fort Stockton 325 megawatts promised, 25 built, for Bitcoin; Abilene 1.2 gigawatts promised and built, three of eight buildings live, for Stargate; Childress 1 gigawatt announced, construction from the third quarter of 2026; Hall County 1 gigawatt announced July 2026">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE CAMPUSES · PROMISED (OUTLINE) AGAINST BUILT OR UNDER WAY (FILLED), MEGAWATTS · SEPTEMBER 2026</text>
        {lanciumCampuses.map((c, i) => {
          const y = 52 + i * rowH;
          const wp = c.promised * scale;
          const wb = c.built * scale;
          const isBtc = c.name === "Fort Stockton";
          return (
            <g key={c.name}>
              <text x={x0 - 8} y={y + 13} fontSize="11" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">{c.name}</text>
              <text x={x0 - 8} y={y + 26} fontSize="8.5" textAnchor="end" fill="var(--muted-2)">{c.county}</text>
              <rect x={x0} y={y} width={wp} height="18" rx="3" fill="none" stroke={isBtc ? "#c98a4e" : "#6f9e6a"} strokeWidth="1.25" strokeDasharray={c.built === 0 ? "4 3" : undefined} />
              {wb > 0 && <rect x={x0} y={y} width={wb} height="18" rx="3" fill={isBtc ? "#c98a4e" : "#6f9e6a"} fillOpacity="0.8" />}
              <text x={x0 + wp + 8} y={y + 13} fontSize="9.5" fontWeight="700" fill="var(--foreground)">{c.builtLabel}</text>
              <text x={x0 + 4} y={y + 31} fontSize="8.5" fill="var(--muted-2)">{c.promisedLabel} · {c.tenant}</text>
            </g>
          );
        })}
        <g>
          <rect x="140" y="268" width="10" height="10" fill="#c98a4e" fillOpacity="0.8" />
          <text x="155" y="277" fontSize="9" fill="var(--muted-2)">Built for Bitcoin hosting</text>
          <rect x="300" y="268" width="10" height="10" fill="#6f9e6a" fillOpacity="0.8" />
          <text x="315" y="277" fontSize="9" fill="var(--muted-2)">Built or under way for AI tenants</text>
          <rect x="500" y="268" width="10" height="10" fill="none" stroke="var(--muted-2)" strokeDasharray="4 3" />
          <text x="515" y="277" fontSize="9" fill="var(--muted-2)">Announced, not yet broken ground</text>
        </g>
        <text x="405" y="294" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Fort Stockton Pioneer Sept 2021 · DCOA Dec 2021 · Crusoe Mar 2025 · Inside Climate News Apr 2026 · Lancium and QTS July 2026 · Compute Atlas 2026</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The campuses. The one built for Bitcoin reached a thirteenth of what was promised; the one announced for Bitcoin was built, at six times the original scale, for OpenAI; the two announced in July 2026 are for Crusoe and QTS and have not broken ground. The Abilene bar counts the 1.2-gigawatt interconnection, not the three buildings running; Crusoe&apos;s adjacent 900 megawatts are not shown.
      </figcaption>
    </figure>
  );
}

function LanciumMoneyFigure() {
  const rounds = [
    { d: "Nov 2021", who: "Hanwha and others", amt: 150, kind: "equity", note: "Hanwha $100M · board seat" },
    { d: "Nov 2024", who: "Blackstone", amt: 500, kind: "equity", note: ">$500M · later ~half the company" },
    { d: "Oct 2025", who: "Santander", amt: 600, kind: "debt", note: "debt · Abilene first" },
    { d: "Aug 2026", who: "Nvidia", amt: 3000, kind: "equity", note: "up to $3B reported · undisclosed by Lancium" },
  ];
  const x0 = 120;
  const maxW = 560;
  const scale = maxW / 3000;
  const rowH = 44;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="Lancium's financing by round: 150 million dollars led by Hanwha in November 2021, more than 500 million from Blackstone in November 2024, 600 million of debt from Santander in October 2025, and a reported up to 3 billion from Nvidia in August 2026">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE MONEY · FINANCING BY ROUND, $ MILLIONS · 2021 → 2026</text>
        {rounds.map((r, i) => {
          const y = 52 + i * rowH;
          const w = r.amt * scale;
          return (
            <g key={r.d}>
              <text x={x0 - 8} y={y + 13} fontSize="10.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">{r.d}</text>
              <rect x={x0} y={y} width={w} height="18" rx="3" fill={r.kind === "debt" ? "#8a7fb5" : "#6f9e6a"} fillOpacity={r.d === "Aug 2026" ? 0.45 : 0.8} stroke={r.d === "Aug 2026" ? "#6f9e6a" : "none"} strokeDasharray={r.d === "Aug 2026" ? "4 3" : undefined} />
              <text x={x0 + Math.min(w, 420) + 8} y={y + 13} fontSize="10" fontWeight="700" fill="var(--foreground)">{r.amt >= 1000 ? `$${r.amt / 1000}B` : `$${r.amt}M`} · {r.who}</text>
              <text x={x0 + 4} y={y + 30} fontSize="8.5" fill="var(--muted-2)">{r.note}</text>
            </g>
          );
        })}
        <text x="405" y="244" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Lancium and Hanwha releases 2021 · Bloomberg Law Nov 2024 · Lancium Oct 2025 · The Information via Forkast Aug 2026 (dashed: reported, not confirmed by the company)</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The money. A hundred and fifty million dollars raised on the Bitcoin thesis in 2021; four billion or more raised on the AI thesis since 2024, from the largest private-equity firm and the largest chipmaker in the world. Lancium is private and has never published revenue; the last bar is what The Information reported and the company&apos;s own release did not.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function LanciumBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Lancium: The Landlord Who Patented the Switch",
    description:
      "The Texas record of Lancium, from the Federal Circuit, ERCOT's board materials, the City of Abilene, the Legislature, and the company's own releases: the founding and the patents, the first Controllable Load Resource, the Layer1 and US Bitcoin suits, Fort Stockton and Abilene, the CleanSpark deal, Crusoe and Stargate, Blackstone and Nvidia, the ERCOT license, SB 6, the abatements, Childress and Hall County, and the Governor's audit.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    about: [
      { "@type": "Thing", name: "Bitcoin mining" },
      { "@type": "Thing", name: "Demand response" },
      { "@type": "Organization", name: "Lancium LLC" },
      { "@type": "Place", name: "Abilene, Texas" },
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
        name: "Lancium and Texas",
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
          / Lancium &amp; Texas
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The companies
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Lancium: The Landlord Who Patented the Switch
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The idea that made Texas the mining capital of the world - that
            a hundred megawatts of computers can be a grid resource rather
            than a grid problem, because they can be switched off faster
            than a power plant can be switched on - has a patent number,
            and the patent belongs to a company that no longer hosts
            Bitcoin. Lancium was two men and a hundred and twenty miners
            beside a wind farm in 2018. It wrote the software, got the
            patents, won ERCOT&apos;s first designation of a load as a
            controllable resource, sued the miners who copied it, and
            promised two West Texas towns the largest Bitcoin campuses ever
            built. One of those campuses stopped at twenty-five megawatts.
            The other, in Abilene, was built at six times the promised
            scale by somebody else, for OpenAI, and is called Stargate. In
            2025 ERCOT&apos;s own lawyer told its board that the patents
            might be keeping other loads out of the market, and Lancium
            gave the grid operator a free license. In 2026 Blackstone and
            Nvidia own most of it, two more gigawatt campuses have been
            announced in a week, and the county that abated its taxes is
            holding panels about the rent. The patent, the promise, and
            the landlord are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 30, 2026 · Updated{" "}
            {LANCIUM_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Lancium is the private Texas company, founded in Houston in
            November 2017 by Michael McNamara and Raymond Cline Jr., that
            patented software for ramping Bitcoin miners&apos; power
            consumption down in seconds, won ERCOT&apos;s first load-only
            Controllable Load Resource designation in June 2020, and built
            the Fort Stockton and Abilene &ldquo;Clean Campuses&rdquo; to
            host miners. Fort Stockton reached 25 of a promised 325
            megawatts; Abilene, announced in December 2021 as a $2.4
            billion Bitcoin-and-computing campus, became the 1.2-gigawatt
            first site of OpenAI&apos;s Stargate, built by Crusoe on
            Lancium&apos;s land. Blackstone and Nvidia have invested;
            Lancium licensed its patents to ERCOT royalty-free in 2025 and
            announced gigawatt campuses at Childress and in Hall County in
            July 2026.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Lancium was co-founded in November 2017 and was running 120
              cryptocurrency miners at a Texas facility by October 2018,
              according to the Federal Circuit&apos;s findings in BearBox v.
              Lancium.<C n={1} />
            </li>
            <li>
              Lancium and MP2 Energy announced ERCOT&apos;s first load-only
              Controllable Load Resource on June 19, 2020, at Compute
              North&apos;s Big Spring data center running Lancium&apos;s
              Smart Response software.<C n={3} />
            </li>
            <li>
              The City of Abilene and Taylor County announced Lancium&apos;s
              $2.4 billion, 200-megawatt-to-1-gigawatt campus on December
              21, 2021 for &ldquo;hosting Bitcoin mining and other
              energy-intensive applications,&rdquo; with 57 full-time
              jobs.<C n={10} />
            </li>
            <li>
              Crusoe announced a 200-megawatt AI data center on the Abilene
              Clean Campus on July 18, 2024, expanded to 1.2 gigawatts and
              eight buildings by March 2025; Stargate named it its first
              site on January 21, 2025.<C n={18} /><C n={25} /><C n={21} />
            </li>
            <li>
              ERCOT&apos;s board was told on April 7–8, 2025 that
              Lancium&apos;s patents &ldquo;may be acting as a barrier to
              entry for increased CLR participation,&rdquo; and Lancium
              granted ERCOT a perpetual, royalty-free license for the
              region.<C n={26} />
            </li>
            <li>
              Lancium announced 1-gigawatt campuses with QTS in Hall County
              on July 13, 2026 and with Crusoe at Childress on July 15,
              2026, and an Nvidia investment on August 24, 2026.<C n={31} />
              <C n={32} /><C n={38} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From 120 miners to Stargate
            </h2>
            <span className="text-xs text-muted-2">2017 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {lanciumTimeline.map((e) => {
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
          <h2>Where did Lancium come from?</h2>
          <p>
            From a wind farm and a courtroom&apos;s account of one. The most
            reliable history of Lancium&apos;s early years is the Federal
            Circuit&apos;s, written in January 2025 to decide who invented
            its method: Michael McNamara and Raymond Cline Jr. co-founded
            the company in November 2017; a patent application was filed in
            February 2018; by October 2018 Lancium &ldquo;was operating 120
            cryptocurrency miners at its facility in Texas&rdquo;; by May
            2019 it had software watching the wind farm, ERCOT&apos;s
            prices, and the price of bitcoin at once, which
            &ldquo;eventually became known as Lancium Smart
            Response.&rdquo;<C n={1} /> The fifth patent, U.S. 10,608,433,
            issued March 31, 2020: a method for adjusting a data
            center&apos;s consumption under a power-option agreement,
            ramping &ldquo;in as little as five seconds,&rdquo; and written,
            at that point, only for Bitcoin machines.<C n={2} /> Hanwha
            Solutions, which put in $100 million in 2021, dates the
            founding to 2017 and Houston; the company now gives its address
            as Shenandoah or The Woodlands.<C n={8} /><C n={26} />
            <C n={31} />
          </p>
          <p>
            The thing it invented, or patented, is the thing this site has
            spent a wing describing. On June 19, 2020, with Shell&apos;s MP2
            Energy, Lancium announced that a mining host&apos;s site at Big
            Spring had become the first load-only Controllable Load
            Resource in ERCOT&apos;s history - a status that had existed
            since 2004 and had never before been given to something that
            only consumed. McNamara called it &ldquo;a testament to our
            technical and IP leadership.&rdquo;<C n={3} /> A year later the
            Texas Blockchain Council would define a large flexible load to
            ERCOT&apos;s task force as one that is a CLR or interruptible;
            the miners that filled the queue in 2022 were selling the
            flexibility Lancium had first registered.<C n={46} /> The story
            from the grid&apos;s side is on{" "}
            <Link href="/ercot-bitcoin">ERCOT and Bitcoin</Link>.
          </p>

          <h2>What did Lancium promise Fort Stockton and Abilene?</h2>
          <p>
            Bitcoin mines, and big ones. On September 15, 2021 it broke
            ground on its first Clean Campus at Fort Stockton in Pecos
            County: 25 megawatts by the first quarter of 2022, 325 by the
            end of the year, &ldquo;hundreds of millions&rdquo; of dollars
            and &ldquo;dozens&rdquo; of jobs.<C n={6} /> In a sponsored
            profile McNamara called it &ldquo;one of the largest single
            Bitcoin mines ever built.&rdquo;<C n={42} /> On December 21,
            2021, three weeks after closing $150 million led by Hanwha, it
            announced Abilene with the city, Taylor County, and the
            development corporation: a $2.4 billion campus on about 800
            acres, 200 megawatts growing past a gigawatt, 57 full-time
            jobs, &ldquo;the largest project in Abilene and Taylor County
            history,&rdquo; for &ldquo;hosting Bitcoin mining and other
            energy-intensive applications.&rdquo;<C n={7} /><C n={10} />
            <C n={11} /> On March 29, 2022 CleanSpark disclosed a hosting
            agreement for 200 megawatts at Abilene with an option to
            500.<C n={12} /><C n={13} /> On November 2 Fort Stockton
            qualified as a Controllable Load Resource; on November 3
            Lancium broke ground at Abilene on more than a thousand
            acres.<C n={14} /><C n={15} />
          </p>
          <p>
            Fort Stockton is still 25 megawatts. Every facilities directory
            that lists it in 2026 gives that figure against a plan of 300
            to 325, names no tenant, and one notes there is &ldquo;no
            evidence&rdquo; the site draws carbon-free power.<C n={40} />
            <C n={41} /> No CleanSpark machine was ever reported at
            Abilene, and by the time the first building went up there the
            tenant was not a miner. The Bitcoin campuses were the pitch
            that got the land, the interconnection, and the abatement. What
            got built on them was something else.
          </p>
          <LanciumCampusesFigure />

          <h2>Who did Lancium sue, and who sued Lancium?</h2>
          <p>
            It sued the miners who did what it did. On August 14, 2020
            Lancium filed against Layer1, the Peter Thiel-backed West Texas
            miner, in the Western District of Texas for infringing the
            &apos;433 patent - &ldquo;We will also aggressively defend this
            intellectual property&rdquo; - and settled on March 5, 2021
            with Layer1 taking a license and adopting Smart
            Response.<C n={4} /><C n={5} /> On May 10, 2023 it sued U.S.
            Data Mining Group, which operated as US Bitcoin and ran about
            730 megawatts across four Texas sites, in Waco on seven
            patents, seeking an injunction and enhanced damages; on January
            12, 2024 it voluntarily dismissed the case, and the terms are
            not public.<C n={16} /><C n={17} /> It was sued once, in
            Delaware in April 2021, by BearBox, whose founder Austin Storms
            claimed to have invented the method and shared it with Lancium
            at a conference. Lancium won at trial and the Federal Circuit
            affirmed on January 13, 2025 in an opinion that opens,
            &ldquo;Lancium allegedly stole Austin Storms&apos; thunder and
            patented it,&rdquo; and concludes it did not.<C n={1} />
          </p>
          <p>
            Then the grid operator weighed in. At its April 7 and 8, 2025
            meeting ERCOT&apos;s board received a disclosure from general
            counsel Chad Seely: Lancium was registered as a market
            participant in three capacities; an oil company had filed a
            rule change arguing the patents did not apply to ordinary CLR
            participation; and &ldquo;Lancium&apos;s patents may be acting
            as a barrier to entry for increased CLR participation in the
            ERCOT market.&rdquo; The resolution was a license, agreed in a
            February term sheet: non-exclusive, perpetual, irrevocable,
            royalty-free, limited to the ERCOT region, covering every
            existing and future U.S. patent Lancium holds that a load would
            need to participate in ERCOT&apos;s markets, and releasing prior
            claims.<C n={26} /> The company that patented the switch gave
            Texas the right to use it for nothing. Whether it would have
            done so had the board not put the word &ldquo;barrier&rdquo; in
            a public document is not in the record.
          </p>

          <h2>How did a Bitcoin campus become Stargate?</h2>
          <p>
            Through a tenant who built for someone else. On July 18, 2024
            Crusoe, the Denver company that had begun in flared-gas
            Bitcoin mining and moved to AI, announced a 200-megawatt data
            center on the Abilene Clean Campus, expandable to 1.2
            gigawatts, with construction begun in June; Lancium&apos;s role,
            in its own words, was land, interconnection, site engineering,
            renewables, and power orchestration.<C n={18} /> In October
            Crusoe, Blue Owl Capital, and Primary Digital Infrastructure
            funded the first two buildings, 206 megawatts and 998,000
            square feet, for $3.4 billion.<C n={19} /> In November
            Blackstone took an equity stake of more than $500 million, and
            Bloomberg reported that Lancium intended five gigawatts at five
            West Texas sites by 2028.<C n={20} /> On January 21, 2025
            OpenAI, SoftBank, Oracle, and MGX announced Stargate at the
            White House; its first site was Abilene.<C n={21} /> In March
            Crusoe expanded to eight buildings, about 4 million square
            feet, and 1.2 gigawatts; in May the joint venture reached $15
            billion.<C n={25} /><C n={27} /> Lancium closed $600 million of
            debt with Santander in October 2025, describing Abilene as
            &ldquo;the inaugural site of Stargate.&rdquo;<C n={28} /> By
            April 2026 three of the eight buildings were running and more
            than 8,500 workers were on the site.<C n={30} />
          </p>
          <p>
            The scale then multiplied. On July 13, 2026 QTS and Lancium
            announced a campus of up to eleven buildings and a gigawatt of
            grid connection near Turkey in Hall County, more than $10
            billion; on July 15 Crusoe and Lancium announced a gigawatt at
            Childress on 270 acres Lancium owns, with Crusoe also building
            an adjacent 900 megawatts at Abilene.<C n={31} /><C n={32} />
            Both interconnections had been approved under ERCOT&apos;s
            process before Batch Zero.<C n={34} /> On August 24 Lancium
            announced an Nvidia investment it did not size - The Information
            put it at up to $3 billion for about a fifth of the company at
            about a $10 billion valuation, with Blackstone holding about
            half - and described itself as a Blackstone portfolio company
            with 4 gigawatts leased and operating and a pipeline past
            15.<C n={38} /><C n={35} />
          </p>
          <LanciumMoneyFigure />

          <h2>What is Lancium&apos;s record with the state?</h2>
          <p>
            Present at the large-load debates, absent from the Bitcoin ones.
            No Lancium witness appears on the March 2023 list for SB 1751,
            the brake on the miners, when Riot and US Bitcoin testified
            against it.<C n={43} /> McNamara did testify - &ldquo;on,&rdquo;
            neither for nor against - on SB 6, the 2025 large-load law,
            before Senate Business &amp; Commerce on February 27, 2025,
            listed from Shenandoah alongside Crusoe and the Texas
            Blockchain Council.<C n={22} /> On April 9, 2026 he sat on the
            second panel of the House State Affairs Committee&apos;s interim
            hearing on data centers, SB 6&apos;s implementation, and Batch
            Zero; Inside Climate News quoted him the next day on water:
            &ldquo;We have a water shortage, but it&apos;s a water shortage
            driven by shortages of engineering and money. We can fix all of
            those.&rdquo;<C n={29} /><C n={30} /> When the Governor paused
            new large-load energizations on August 3, 2026 pending an
            audit, Lancium endorsed it within a week: &ldquo;Large computing
            load can be an asset to the grid rather than a burden on
            it.&rdquo;<C n={37} /><C n={36} /> That is the sentence the
            company was founded on, and the one the state has now made a
            condition of connection.
          </p>

          <h2>The honest counterweight: the promise, the patents, and the town</h2>
          <p>
            Three things. First, the promise. Lancium told Fort Stockton
            325 megawatts and delivered 25; told Abilene a Bitcoin campus
            and delivered none; signed a 200-megawatt Bitcoin tenant whose
            machines never came. The campus that was built is six times
            the size of the one announced and pays taxes on a fraction of
            its value: an abatement reported at 80% for the county over ten
            years and 85% for the city, amended in February 2025 over
            residents&apos; objections, with the school district
            alone taking nothing.<C n={6} /><C n={40} /><C n={12} />
            <C n={23} /><C n={24} /> Second, the patents, which cut both
            ways. The Federal Circuit found Lancium invented what it
            claims; ERCOT&apos;s counsel found the claims may have kept
            other loads from doing what Lancium taught them to do; the
            license that resolved it is free, perpetual, and covers the
            whole region, and no other company in this wing has given the
            grid anything comparable.<C n={1} /><C n={26} /> Third, the
            town. Abilene&apos;s water is not the problem the opposition
            said it would be - the campus draws about 20 gallons a minute
            against an allocation of 500 - but its rents have doubled and
            tripled, residents have protested &ldquo;backroom data center
            deals,&rdquo; and the county judge&apos;s defense in September
            2026 was that abatements are unpopular and &ldquo;the only way
            you&apos;re going to have any authority.&rdquo;<C n={30} />
            <C n={39} /><C n={45} /> In Childress the rents doubled on the
            announcement and a workers&apos; camp is planned.<C n={33} />
            Lancium is private, has never published revenue, and has about
            eighty employees by an analyst&apos;s count; the two firms that
            own most of it are the largest private-equity manager and the
            largest chipmaker in the world.<C n={44} /><C n={35} />
          </p>
          <p>
            The fair reading is that Lancium was right about the grid and
            wrong about the tenant - that a mine really can be a resource,
            and that the resource was worth more to a company that does
            not mine - and that Texas got the idea for free, in a license,
            and is paying for the campuses in abatements.
          </p>

          <h2>Where does Lancium stand today?</h2>
          <p>
            As of September 30, 2026: 1.2 gigawatts interconnected at
            Abilene with three of eight buildings running and 900 more
            megawatts adjacent; a gigawatt each at Childress and in Hall
            County, approved before the pause and not yet built; 25
            megawatts at Fort Stockton; Blackstone and Nvidia as owners;
            a free license in ERCOT&apos;s hands; and a Governor&apos;s audit
            due December 10 that asks every large load the question
            Lancium says it answered in 2020.<C n={30} /><C n={32} />
            <C n={31} /><C n={40} /><C n={38} /><C n={26} /><C n={37} />
            The companies that still mine are on{" "}
            <Link href="/riot-platforms-bitcoin">Riot Platforms and Texas</Link>,{" "}
            <Link href="/mara-holdings-bitcoin">MARA Holdings and Texas</Link>, and{" "}
            <Link href="/bitdeer-bitcoin">Bitdeer and Texas</Link>; the
            ones that stopped are on{" "}
            <Link href="/core-scientific-bitcoin">Core Scientific and Texas</Link>{" "}
            and <Link href="/cipher-mining-bitcoin">Cipher and Texas</Link>;
            the grid is on <Link href="/ercot-bitcoin">ERCOT and Bitcoin</Link>;
            the pivot is on{" "}
            <Link href="/texas-bitcoin-miners-ai-pivot">the Texas miners&apos; AI pivot</Link>.
            This page is the landlord who patented the switch, and what he
            built once he owned the land.
          </p>
        </div>

        <InstitutionsBlock current="/lancium-bitcoin" />

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
            Primary record first: the Federal Circuit&apos;s opinion, which
            is the best account of the company&apos;s founding; ERCOT&apos;s
            board materials; the City of Abilene&apos;s and development
            corporation&apos;s releases; the Legislature&apos;s witness lists
            and agendas; counterparties&apos; SEC filings; the company&apos;s
            own releases; then CoinDesk, Bloomberg Law, Inside Climate
            News, KTXS, KTAB, KACU, the Fort Stockton Pioneer, and the trade
            press. Lancium is private; where a financing figure comes from
            press reporting rather than the company, the page says so.
            This is a research and reference article, not financial,
            investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {lanciumSources.map((s) => (
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
