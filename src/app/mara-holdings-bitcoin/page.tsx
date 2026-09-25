import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  MARA_LAST_VERIFIED,
  granburyStrip,
  maraSources,
  maraTimeline,
  type MaraTimelineKind,
} from "@/lib/mara";

const pageUrl = `${site.url}/mara-holdings-bitcoin`;

export const metadata: Metadata = {
  title: "MARA Holdings: The Mine the Neighbors Could Hear",
  description:
    "MARA Holdings and Texas, 2021–2026, sourced from its filings and the court record: the Florida patent-holding company that pivoted to mining, lent $67 million to build a 300-megawatt site behind a Granbury gas plant, and bought it in January 2024 with the $1.9 million sound wall already in the contract. TIME's forty residents, 72 decibels in a bedroom, the constable's citations and the jury's acquittal, the Hood County resolution the Legislature ignored, the Earthjustice nuisance suit seeking only an injunction, the remand, the town that tried to incorporate around the fans, MARA's suit to stop the vote and the 86-to-52 result, nine more plaintiffs in 2026 - beside 550 megawatts curtailed in Winter Storm Fern, a 53,822-bitcoin treasury sold down by a third, a $1.5 billion gas plant, and a two-gigawatt bet on Matagorda County.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "MARA Holdings: The Mine the Neighbors Could Hear",
    description:
      "The most litigated Bitcoin site in Texas, and the company that says it was unaware of the noise when it bought it. MARA's record, from the filings and the docket. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is MARA Holdings?",
    a: "A Hallandale Beach, Florida company, listed on Nasdaq as MARA, founded in 2010 as Marathon Patent Group, a patent-licensing firm; it pivoted to Bitcoin mining in November 2017, became Marathon Digital Holdings in March 2021, and MARA Holdings in August 2024. Fred Thiel has been chief executive since April 2021 and is also chairman. It ran about 70 exahash in mid-2026, among the largest miners in the world, and held 35,577 bitcoin. In Texas it owns the roughly 300-megawatt Granbury site behind Constellation's Wolf Hollow gas plant, a 200-megawatt site at Garden City, a wind farm in Hansford County, and, under agreement, a two-gigawatt site in Matagorda County.",
  },
  {
    q: "What is the Granbury noise dispute?",
    a: "Residents living within a mile of MARA's Granbury mine - built in 2022 by Compute North with MARA's loan, run by two other operators, and bought by MARA in January 2024 - reported that its cooling fans produced sound in the 80s and above 100 decibels at their homes, with sleep loss, migraines, and hypertension. TIME reported on more than forty of them in July 2024; a Hood County constable issued more than thirty-five citations above 85 decibels; a jury acquitted the site manager on twelve of them in July 2024. In October 2024 a residents' association represented by Earthjustice sued MARA for private nuisance in Hood County, seeking a permanent injunction and no damages. MARA removed the case to federal court, which sent it back in March 2025; its motion to dismiss was denied. Nine property owners filed a separate federal damages suit in May 2026. No trial date has been reported.",
  },
  {
    q: "What has MARA done about the noise?",
    a: "By its own account and the Tribune's: shut down 95 air-cooled containers, moved about 67% of the site to immersion cooling, and completed a 24-foot sound wall extended to 2,000 feet by October 2024. MARA's July 2024 survey found all eleven measured points below 63 decibels, down from 78 before it took over; a county-funded study found about 60 decibels at the fence and 35 to 53 in the neighborhoods. Texas's legal threshold under the Penal Code is 85. The neighbors say the sound remains audible and physically harmful; the litigation continues.",
  },
  {
    q: "What was the Mitchell Bend vote?",
    a: "An attempt by about 600 residents to incorporate two square miles around the mine as a city, which would have let them pass a noise ordinance that Texas counties cannot. MARA sued Hood County, its judge, its attorney, and its elections administrator in federal court on October 29, 2025, calling the election 'an intentional and unconstitutional use of local government authority to favor a small group of citizens'; Judge Reed O'Connor denied a restraining order on November 3. The vote on November 4, 2025 failed, 86 to 52. MARA said voters 'saw through the sham incorporation effort.'",
  },
  {
    q: "How is MARA doing as a business?",
    a: "Its results swing with the accounting rule that marks bitcoin to market: net income of $261 million in 2023 and $541 million in 2024, a net loss of $1.31 billion in 2025 and $611 million in the second quarter of 2026 alone. It sold $1 billion and $850 million of zero-coupon convertible notes in late 2024 to buy bitcoin under a full-hold policy, reached 53,822 coins, then sold about 20,000 in early 2026 to retire a billion dollars of that debt and fund a turn toward AI infrastructure, including a $1.5 billion gas plant in Ohio. Shares outstanding rose from 82 million in 2020 to 386 million in 2026. Thiel's compensation was about $43 million for 2024 and $27 million for 2025, including $4.3 million of security.",
  },
];

const kindStyle: Record<MaraTimelineKind, { color: string; label: string }> = {
  shell: { color: "var(--star)", label: "The shell" },
  texas: { color: "#c98a4e", label: "Texas" },
  granbury: { color: "var(--accent)", label: "Granbury" },
  treasury: { color: "#6f9e6a", label: "The treasury" },
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
// Two figures - the Granbury record as a two-sided strip, and the
// company's numbers - drawn from the dated, sourced facts on this page
// (Sept 2026). Server-rendered SVG, no client JS.
function MaraGranburyFigure() {
  const t0 = new Date("2021-03-01").getTime();
  const t1 = new Date("2026-09-01").getTime();
  const x0 = 110;
  const x1 = 750;
  const px = (d: string) => x0 + ((new Date(d).getTime() - t0) / (t1 - t0)) * (x1 - x0);
  const y = 150;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The Granbury record 2021 to 2026: above the line, the mine - the 67 million dollar loan, Compute North's bankruptcy, the half wall, MARA's purchase, the acquittal, the failed vote; below the line, the town - TIME's story, the nuisance suit, the remand, nine owners suing">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE GRANBURY RECORD · THE MINE ABOVE THE LINE, THE TOWN BELOW · 2021 → 2026</text>
        <line x1={x0} y1={y} x2={x1} y2={y} stroke="var(--muted-2)" strokeWidth="1.5" />
        {[2021, 2022, 2023, 2024, 2025, 2026].map((yr) => (
          <g key={yr}>
            <line x1={px(`${yr}-01-01`)} y1={y - 5} x2={px(`${yr}-01-01`)} y2={y + 5} stroke="var(--muted-2)" strokeWidth="1" />
            <text x={px(`${yr}-01-01`)} y={y + 4} fontSize="9" textAnchor="middle" fill="var(--muted-2)" dx="14">{yr}</text>
          </g>
        ))}
        {granburyStrip.map((k, i) => {
          const up = k.side === "mine";
          const upIdx = granburyStrip.slice(0, i).filter((q) => q.side === "mine").length;
          const dnIdx = granburyStrip.slice(0, i).filter((q) => q.side === "town").length;
          const tier = up ? upIdx % 3 : dnIdx % 3;
          const ly = up ? y - 34 - tier * 30 : y + 48 + tier * 30;
          const col = up ? "#c98a4e" : "var(--accent)";
          return (
            <g key={k.l}>
              <line x1={px(k.d)} y1={up ? y - 6 : y + 6} x2={px(k.d)} y2={up ? ly + 14 : ly - 12} stroke="var(--border)" strokeWidth="1" />
              <circle cx={px(k.d)} cy={y} r="4.5" fill="var(--surface)" stroke={col} strokeWidth="2" />
              <text x={px(k.d)} y={ly} fontSize="10.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{k.l}</text>
              <text x={px(k.d)} y={ly + 12} fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">{k.sub}</text>
            </g>
          );
        })}
        <text x="405" y="292" fontSize="10" textAnchor="middle" fill="var(--muted-2)">MARA releases and 10-Ks · verified petition C2024253 · TIME July 8, 2024 · Decrypt · GovInfo · KERA and Texas Tribune Nov 2025 · Decrypt May 2026</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The Granbury record. Amber is what the mine and its owners did; blue is what the town did back. Read left to right it is a site MARA financed before it owned, bought with the wall already written into the deal, and has been defending in three courts and one election since – with every mitigation number it publishes below the legal line, and every neighbor it publishes them to still in court.
      </figcaption>
    </figure>
  );
}

function MaraNumbersFigure() {
  const years = [
    { y: "2021", ni: -37, btc: null, eh: 3.9 },
    { y: "2022", ni: -687, btc: null, eh: 7.0 },
    { y: "2023", ni: 261, btc: null, eh: 24.7 },
    { y: "2024", ni: 541, btc: 44893, eh: 53.2 },
    { y: "2025", ni: -1312, btc: 53822, eh: 66.4 },
    { y: "H1 2026", ni: -1911, btc: 35577, eh: 70.3 },
  ];
  const x0 = 90;
  const bw = 88;
  const gap = 26;
  const zeroY = 138;
  const scale = 44 / 1000; // px per $M
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 312" role="img" aria-label="MARA's numbers by year: net income of minus 37 million in 2021, minus 687 million in 2022, plus 261 million in 2023, plus 541 million in 2024, minus 1.31 billion in 2025, and minus 1.9 billion in the first half of 2026; bitcoin held 44,893, 53,822, then 35,577; hashrate 3.9 to 70.3 exahash">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE NUMBERS · NET INCOME, $ MILLIONS, WITH BITCOIN HELD AND HASHRATE · 2021 → MID-2026</text>
        <line x1={x0 - 14} y1={zeroY} x2={x0 + 6 * (bw + gap)} y2={zeroY} stroke="var(--muted-2)" strokeWidth="1.25" />
        <text x={x0 - 18} y={zeroY + 4} fontSize="9" textAnchor="end" fill="var(--muted-2)">$0</text>
        {years.map((d, i) => {
          const x = x0 + i * (bw + gap);
          const h = Math.abs(d.ni) * scale;
          const top = d.ni >= 0 ? zeroY - h : zeroY;
          const labelY = d.ni >= 0 ? zeroY - h - 6 : zeroY + h + 13;
          return (
            <g key={d.y}>
              <rect x={x} y={top} width={bw} height={h} rx="3" fill={d.ni >= 0 ? "#6f9e6a" : "#c98a4e"} fillOpacity="0.8" />
              <text x={x + bw / 2} y={labelY} fontSize="11" fontWeight="700" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{d.ni >= 0 ? "+" : "−"}{Math.abs(d.ni).toLocaleString()}</text>
              <text x={x + bw / 2} y="258" fontSize="10" textAnchor="middle" fill="var(--muted-2)">{d.y}</text>
              <text x={x + bw / 2} y="272" fontSize="9" textAnchor="middle" fill="var(--accent)">{d.eh} EH/s</text>
              {d.btc && <text x={x + bw / 2} y="285" fontSize="9" textAnchor="middle" fill="#6f9e6a">{d.btc.toLocaleString()} BTC</text>}
            </g>
          );
        })}
        <text x="405" y="304" fontSize="10" textAnchor="middle" fill="var(--muted-2)">MARA full-year results 2022–2025 · Form 10-K 2025 · Q1 and Q2 2026 shareholder letters · 2024–25 swings are fair-value marks on bitcoin (ASU 2023-08)</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The numbers. A hashrate that grew eighteen-fold in five years, a treasury that peaked near 54,000 coins and was sold down by a third in six months, and a profit line that is mostly the bitcoin price passing through the income statement in both directions. The 2026 bar is two quarters; the mine at Granbury contributed 12.3 of the exahash.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function MaraHoldingsBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MARA Holdings: The Mine the Neighbors Could Hear",
    description:
      "The Texas record of MARA Holdings, from its filings and the court record: the patent-shell origin, the Granbury site it financed and later bought, the noise dispute in TIME and in three courts, the county's resolution, the Mitchell Bend election, the grid, the treasury, the Ohio gas plant, and the Matagorda bet.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    about: [
      { "@type": "Thing", name: "Bitcoin mining" },
      { "@type": "Corporation", name: "MARA Holdings, Inc.", tickerSymbol: "MARA" },
      { "@type": "Place", name: "Granbury, Texas" },
      { "@type": "Place", name: "Hood County, Texas" },
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
        name: "MARA Holdings and Texas",
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
          / MARA Holdings &amp; Texas
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The companies
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            MARA Holdings: The Mine the Neighbors Could Hear
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every Bitcoin mine in Texas makes a sound. One of them made a
            magazine story, a county resolution, a jury trial, three
            lawsuits, and an election. The company that owns it is a
            Florida patent-licensing firm that turned to mining in 2017,
            lent sixty-seven million dollars in 2021 to build a
            three-hundred-megawatt site behind a gas plant outside
            Granbury, watched the builder go bankrupt and two operators
            come and go, and bought the site in January 2024 with a
            $1.9 million sound wall already written into the purchase
            agreement and a statement that it had not known about the
            noise. It has since turned off ninety-five containers, sunk
            two-thirds of its rigs in oil, built the wall out to two
            thousand feet, published surveys putting every reading below
            the legal line, won an acquittal for its site manager, sued a
            county to stop a vote, and won that vote at the polls. The
            neighbors are still in court. Around Granbury the company has
            built one of the largest bitcoin treasuries in the world and
            then sold a third of it, bought a wind farm and a gas plant,
            and signed for two gigawatts on the Gulf Coast. The mine, the
            town, and the numbers are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 26, 2026 · Updated{" "}
            {MARA_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            MARA Holdings is the Nasdaq-listed Bitcoin miner, headquartered
            in Florida and led by Fred Thiel, that owns the roughly
            300-megawatt Granbury mine behind Constellation&apos;s Wolf
            Hollow gas plant in Hood County, a 200-megawatt site at Garden
            City, and a Panhandle wind farm, and has agreed to build two
            gigawatts in Matagorda County. Since buying Granbury in January
            2024 it has faced a state nuisance suit seeking an injunction,
            two federal damages suits, more than thirty-five noise
            citations, a county resolution to the Legislature, and a
            residents&apos; attempt to incorporate a city around the site,
            which MARA sued to stop and voters rejected 86 to 52 in
            November 2025. It curtailed about 550 megawatts in Winter Storm
            Fern, holds 35,577 bitcoin after selling down a 53,822-coin
            treasury, and reported a $1.31 billion net loss for 2025.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              MARA lent Compute North up to $67 million in May 2021 to build
              the 300-megawatt Granbury site, and bought it on January 12,
              2024 for $189.6 million with a Nebraska site.<C n={5} />
              <C n={11} /><C n={39} />
            </li>
            <li>
              The December 2023 purchase agreement named a $1.9 million
              sound wall; MARA said in January 2024 that &ldquo;prior to the
              purchase, we were not aware of the noise
              issues.&rdquo;<C n={17} />
            </li>
            <li>
              Citizens Concerned About Wolf Hollow sued MARA for private
              nuisance in Hood County on October 4, 2024, seeking a
              permanent injunction and no damages; the case was remanded
              from federal court March 27, 2025.<C n={24} /><C n={29} />
            </li>
            <li>
              MARA sued Hood County on October 29, 2025 to stop the Mitchell
              Bend incorporation vote; a restraining order was denied and
              the vote failed 86 to 52 on November 4, 2025.<C n={35} />
              <C n={36} /><C n={37} />
            </li>
            <li>
              MARA curtailed about 550 megawatts in ERCOT during Winter
              Storm Fern in January 2026 and states it does &ldquo;not
              receive significant compensation for curtailment.&rdquo;
              <C n={47} /><C n={39} />
            </li>
            <li>
              MARA held 53,822 bitcoin on December 31, 2025 and 35,577 on
              June 30, 2026, having sold about 15,000 in March to retire $1
              billion of convertible notes.<C n={39} /><C n={40} />
              <C n={46} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the patent shell to the Gulf Coast
            </h2>
            <span className="text-xs text-muted-2">2010 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {maraTimeline.map((e) => {
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
          <h2>Where did MARA come from?</h2>
          <p>
            From the business of suing over patents. Marathon Patent Group
            was founded in Fort Lauderdale in February 2010 and made its
            money through a subsidiary that sued Microsoft, Google, Amazon,
            and Apple – the model the industry calls a patent
            troll.<C n={1} /> On November 2, 2017 it agreed to buy a Quebec
            GPU-mining company and became a crypto stock; in February 2021
            it renamed itself Marathon Digital Holdings – &ldquo;one of the
            only pure-play Bitcoin investment options available,&rdquo; its
            chairman said – and on April 26, 2021 Fred Thiel, a director,
            became chief executive.<C n={2} /><C n={3} /><C n={4} /> The
            company disclosed an SEC subpoena that November over a Montana
            coal-plant venture and a six-million-share issuance, left the
            coal plant in 2022 &ldquo;to become carbon neutral,&rdquo;
            restated its 2021 accounts in February 2023, and was renamed
            MARA Holdings on August 29, 2024; its 2025 annual report lists
            no SEC matter among its proceedings, and the securities class
            action over its accounting was dismissed with prejudice in
            2026.<C n={6} /><C n={7} /><C n={9} /><C n={22} /><C n={39} />
            <C n={50} /> Its principal office is in Hallandale Beach,
            Florida; it employed about 266 people at the end of
            2025.<C n={39} /> Its largest owned region, by its own
            description, is Central Texas.
          </p>

          <h2>How did MARA come to own Granbury?</h2>
          <p>
            It paid for the site twice – once to build it, once to buy it.
            On May 24, 2021 Marathon signed a letter of intent with Compute
            North for a new 300-megawatt facility in Texas to host some
            73,000 of its miners, and lent the builder up to $67 million
            over eighteen months to construct it.<C n={5} /> The site was
            Granbury, behind Constellation&apos;s 1,115-megawatt Wolf
            Hollow II gas plant in Hood County, and it began operating in
            the summer of 2022 with, by TIME&apos;s count, 163 containers
            and more than 30,000 machines.<C n={17} /> Compute North filed
            for bankruptcy on September 22, 2022, and MARA reported about
            $80 million of exposure – preferred stock, a note, and some $50
            million of deposits at Granbury and King Mountain, of which it
            recovered most.<C n={8} /> US Bitcoin Corp operated the site
            from late 2022, built a 24-foot wall around about 46% of its
            perimeter in November 2023, and merged into Hut 8; on December
            19, 2023 MARA agreed to buy Granbury and a Nebraska site, 390
            megawatts in all, for $178.6 million from Generate Capital, and
            closed on January 12, 2024 at $189.6 million.<C n={24} />
            <C n={11} /><C n={39} /> On February 1 it announced it would
            take over operations from Hut 8 for a $13.5 million fee –
            &ldquo;fully recognize the operational and economic benefits of
            owning these assets,&rdquo; Thiel said – and on April 1 it
            bought Garden City, 200 megawatts in Glasscock County, from
            Applied Digital for $96.8 million.<C n={14} /><C n={15} />
            <C n={39} /> Its 2025 report describes Granbury at
            &ldquo;approximately 300 megawatt,&rdquo; 12.3 exahash,
            &ldquo;among the first of our sites where we have begun
            integrating inference capabilities,&rdquo; and its other
            Central Texas sites at about 250 megawatts, with a wind farm
            in the Panhandle it bought in February 2025 to run old rigs on
            power &ldquo;that would have otherwise been
            curtailed.&rdquo;<C n={39} /><C n={27} /> Where Granbury sits
            among the state&apos;s mines is on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
          </p>

          <h2>What did the neighbors hear?</h2>
          <p>
            Fans, from a quarter-mile away, at night. The verified
            petition later filed against MARA records what three residents
            heard and when: a sound first noticed in the spring of 2023 at
            &ldquo;a 4 of 10,&rdquo; worsening through the fall and winter
            to 9 or 10, with phone readings of 88 decibels at 4:58 in the
            morning; one of them began calling the constable, the sheriff,
            and her commissioner in December 2023, and the press in
            February.<C n={24} /> TIME reported in February 2024 on a
            reading of 103 decibels and MARA&apos;s statement that it had
            been unaware of the noise at purchase and had commissioned a
            study; DL News that month quoted the company&apos;s
            spokesman: &ldquo;I&apos;m not aware of anyone ever having
            medical issues from a Bitcoin mining site,&rdquo; and
            &ldquo;There are people who are upset by this, and we need to
            go fix it.&rdquo;<C n={12} /><C n={13} /> On July 8, 2024 TIME
            published &ldquo;We&apos;re Living in a Nightmare&rdquo;: more
            than forty residents interviewed, 72 decibels measured in a
            child&apos;s bedroom, a 77-year-old retired pastor with heart
            failure and a pacemaker, two ear specialists describing
            patients, and a constable who had recorded more than 85
            decibels over thirty-five times that year and written $17,500
            in citations under the Penal Code&apos;s disorderly-conduct
            provision, which presumes noise above 85 unreasonable after an
            officer&apos;s warning and caps each fine at $500. The story
            also reported that MARA&apos;s December 2023 purchase agreement
            &ldquo;clearly mentions the existence of the $1.9 million
            &lsquo;sound wall,&rsquo;&rdquo; beside the company&apos;s line:
            &ldquo;Prior to the purchase, we were not aware of the noise
            issues.&rdquo;<C n={17} /> &ldquo;Nobody in their right mind
            would live here,&rdquo; Cheryl Shadden told the Tribune two
            days later. &ldquo;My windows rattle.&rdquo;<C n={18} /> On July
            11 a Hood County jury acquitted MARA&apos;s site manager, David
            Fischer, on twelve of the citations; the county attorney said
            jurors &ldquo;had trouble connecting it to Fischer
            personally.&rdquo;<C n={19} /> On July 23 the commissioners
            court passed a resolution asking the Legislature to make noise
            a statutory nuisance, to allow escalating penalties, and to
            reintroduce Kolkhorst&apos;s SB 1751, with copies to the
            county&apos;s senator and representative. Texas counties cannot
            pass noise ordinances; the Legislature did nothing with the
            request in 2025.<C n={20} /><C n={34} /> The senator whose bill
            the county wanted back is on{" "}
            <Link href="/lois-kolkhorst-bitcoin">Lois Kolkhorst and Bitcoin</Link>.
          </p>

          <MaraGranburyFigure />

          <h2>What did MARA do, and what did the neighbors do?</h2>
          <p>
            MARA turned things off and built things up; the neighbors
            sued, and then tried to become a city. By the company&apos;s
            own survey of July 18, 2024, all eleven measured points were
            below 63 decibels, down from 78 before it took over; it reported
            70 to 90 air-cooled containers deactivated by July and more than
            a hundred by December, immersion cooling rising from 20% to
            50%, a sound wall begun in August and finished in October, and
            trees planted in November – &ldquo;well below the state and
            county law sound limit of 85 decibels.&rdquo;<C n={21} /> By
            October 2025 the Tribune counted 95 containers off, a wall
            2,000 feet long, and 67% of the site in oil, and a county-funded
            study found about 60 decibels at the fence and 35 to 53 in the
            neighborhoods.<C n={34} /> On October 4, 2024 the Citizens
            Concerned About Wolf Hollow – an association of more than two
            dozen residents founded that year by Shadden – filed a verified
            petition in Hood County district court, represented by
            Earthjustice, for a single cause of private nuisance and a
            single remedy: a permanent injunction against &ldquo;any
            unreasonable noise and vibrations,&rdquo; with no money
            damages, a jury demanded. The petition describes homes
            &ldquo;turning their refuge into a prison&rdquo; and a partial
            wall that &ldquo;actually causes the sound to be
            amplified.&rdquo;<C n={24} /> &ldquo;No corporation has the right
            to subject their neighbors to conditions that jeopardize their
            health and well-being,&rdquo; Earthjustice&apos;s Rebecca
            Ramirez said; Shadden: &ldquo;Day and night, we are subjected
            to relentless noise that is physically harming us.&rdquo;
            <C n={25} /> MARA removed the case to federal court on
            diversity grounds; the court remanded it on March 27, 2025;
            MARA&apos;s motion to dismiss was denied that summer, and on
            September 3, 2025 the plaintiffs moved to compel its equipment
            lists, mitigation records, and noise data.<C n={29} />
            <C n={33} /> Then the city. About 600 residents petitioned to
            incorporate two square miles around the mine as Mitchell Bend
            – a city could pass the noise ordinance the county could not;
            on October 29, 2025 MARA sued Hood County, its judge, its
            attorney, and its elections administrator, calling the vote
            &ldquo;an intentional and unconstitutional use of local
            government authority to favor a small group of citizens&rdquo;
            that &ldquo;seeks only to target specific businesses – including
            MARA – with punitive taxes and restrictive
            ordinances.&rdquo;<C n={32} /><C n={35} /> Judge Reed
            O&apos;Connor denied a restraining order on November 3 – no
            &ldquo;substantial threat of irreparable harm&rdquo; – and
            Shadden said, &ldquo;We just want to sleep in our beds in peace
            at night.&rdquo;<C n={36} /> On November 4 the incorporation
            failed, 86 votes to 52. MARA: voters &ldquo;saw through the sham
            incorporation effort and rejected it at the ballot box.&rdquo;
            Thomas Weeks, a plaintiff: &ldquo;What we want to do is get back
            and preserve the peace we had, it&apos;s that simple.&rdquo;
            <C n={37} /> On May 1, 2026 nine property owners living from a
            hundredth of a mile to nine-tenths of a mile from the fence
            filed a second federal suit, for nuisance, negligence, and
            emotional distress, seeking up to $10 million; MARA: &ldquo;We
            are committed to being thoughtful and considerate members of
            our new community.&rdquo;<C n={43} /> Its 2025 annual report,
            filed in March 2026, lists none of the Granbury cases among its
            legal proceedings.<C n={39} />
          </p>

          <h2>What is MARA&apos;s record with the grid and the state?</h2>
          <p>
            Curtailment without compensation, by its own account, and
            politics at arm&apos;s length. When Kolkhorst&apos;s brake on the
            miners passed the Senate in April 2023, Thiel told Decrypt it
            &ldquo;won&apos;t change our minds about Texas&rdquo; and that
            &ldquo;I don&apos;t think it&apos;s going to make it out of the
            House intact&rdquo; – the House being &ldquo;much more aligned
            with the positive aspects and the benefits of bitcoin
            mining.&rdquo; It did not.<C n={10} /> A company representative
            said then that MARA &ldquo;voluntarily curtails operations to
            support the grid&rdquo; with revenue that was
            &ldquo;immaterial,&rdquo; and its 2025 annual report keeps the
            line: &ldquo;Although we do not receive significant compensation
            for curtailment, the dispatchable load of our Bitcoin mining
            operations helps balance the grid,&rdquo; at an average energy
            cost of four cents per kilowatt-hour at owned sites.<C n={39} />
            In Winter Storm Fern in January 2026 it &ldquo;voluntarily
            curtailed approximately 550 MW&rdquo; in ERCOT, out of the
            4,100 the operator reported mines shedding.<C n={47} /> The
            company is among the Texas Blockchain Council&apos;s largest
            funders; no testimony by it on SB 1751 or SB 6 has been located,
            nor any Texas lobbyist registration.<C n={49} /> On the
            state&apos;s reserve Thiel has been arch rather than opposed –
            a reserve is &ldquo;an empty statement unless you start putting
            stuff into it,&rdquo; he said of the federal one, suggesting the
            government mine its own.<C n={31} /> When the Governor ordered
            his audit of the queue in August 2026 MARA committed to his
            standards within a week – &ldquo;These are not new commitments
            we are making in response to this review&rdquo; – and Thiel
            told analysts the audit would flush out phantom requests to his
            company&apos;s benefit; ERCOT&apos;s Batch Zero then classed
            Granbury&apos;s 280 megawatts and Garden City&apos;s 200 as base
            load and the two gigawatts MARA signed for in Matagorda County
            on July 9 – a gigawatt by October 2027, two by April 2028, up
            to $600 million contingent on approval – as
            studied.<C n={47} /><C n={45} /><C n={48} /> The operator that
            counts those megawatts is on{" "}
            <Link href="/ercot-bitcoin">ERCOT and Bitcoin</Link>; the
            regulator running the audit is on{" "}
            <Link href="/texas-public-utility-commission-bitcoin">
              the Public Utility Commission and Bitcoin
            </Link>
            .
          </p>

          <MaraNumbersFigure />

          <h2>What are the numbers?</h2>
          <p>
            Large, and moving both ways. MARA&apos;s energized hashrate
            went from 7 exahash at the end of 2022 to 24.7, 53.2, and 66.4
            at the ends of the next three years, and 70.3 in mid-2026 –
            about eight percent of the network.<C n={28} /><C n={39} />
            <C n={46} /> Its treasury went the other way. In November 2024
            it adopted a full-hold policy and sold $1 billion of
            zero-coupon convertible notes, then $850 million more, to buy
            bitcoin, reaching 44,893 coins at the end of 2024 and 53,822,
            worth $4.7 billion, at the end of 2025.<C n={26} /><C n={28} />
            <C n={39} /> In March 2026 it sold 15,133 of them to buy back a
            billion dollars of those notes at a discount – &ldquo;we
            captured approximately $88 million in value,&rdquo; Thiel said –
            and by June 30 held 35,577, about $2.1 billion, having sold some
            $1.5 billion of bitcoin in six months as it turned toward AI
            infrastructure: &ldquo;a redefining quarter, not an incremental
            one.&rdquo;<C n={40} /><C n={46} /><C n={44} /> In April it
            agreed to buy Long Ridge Energy, a 505-megawatt gas plant in
            Ohio, for about $1.5 billion including assumed debt – the
            strategy Thiel had stated in November 2025: &ldquo;By 2028,
            you&apos;ll either be a power generator, be owned by one, or be
            partnered with one.&rdquo;<C n={42} /><C n={38} /> The income
            statement follows the bitcoin price through the fair-value
            rule: a net loss of $687 million in 2022, income of $261
            million in 2023 and $541 million in 2024, a loss of $1.31
            billion in 2025 on revenue of $907 million, and a loss of
            $611 million in the second quarter of 2026.<C n={28} />
            <C n={39} /><C n={46} /> Shares outstanding went from 82 million
            at the end of 2020 to 386 million in July 2026.<C n={46} /> Thiel
            was paid about $43 million for 2024, with performance units at
            their 200% maximum, and about $27 million for 2025, including
            $4.3 million of personal security.<C n={30} /><C n={41} /> The
            miner whose numbers make the closest comparison is on{" "}
            <Link href="/riot-platforms-bitcoin">Riot Platforms and Texas</Link>.
          </p>

          <h2>The honest counterweight: the wall in the contract, the readings, and the ledger</h2>
          <p>
            Three things, and the first is a document. MARA&apos;s
            purchase agreement of December 2023 named a $1.9 million sound
            wall; MARA&apos;s statement of January 2024 was that it had not
            known about the noise. Both are in TIME&apos;s reporting, and
            the page leaves them side by side.<C n={17} /> Second, the
            readings, which cut the other way. Every number MARA has
            published since it took over is below the state&apos;s 85-decibel
            line, and the county&apos;s own study put the fence at about 60
            and the neighborhoods in the 35-to-53 range – ordinary suburban
            sound levels – after 95 containers were shut, two-thirds of the
            site went to immersion, and the wall reached 2,000
            feet.<C n={21} /><C n={34} /> The jury that heard the citations
            acquitted the man charged; the federal judge who heard
            MARA&apos;s case against the election found no irreparable harm
            to MARA, and the voters found no majority for the city. The
            neighbors&apos; case is that a mine audible at a quarter-mile at
            four in the morning is a nuisance whatever the meter says, and
            no court has yet ruled on it; the nuisance suit has survived
            dismissal and is in discovery, the damages suit is new, and
            MARA&apos;s annual report treats all of it as immaterial. Third,
            the ledger. The company&apos;s profits are the bitcoin
            price&apos;s; its treasury was built with borrowed money and
            sold down a third when the price fell; its shares have been
            multiplied nearly five-fold; its chief executive&apos;s pay in
            two years exceeds seventy million dollars; and the Granbury
            mine, at 12.3 of its 70 exahash, is a fraction of a company
            whose future, on its own telling, is gas plants and
            data centers rather than fans.<C n={39} /><C n={46} />
            <C n={41} /> Two things this page does not say: Riot&apos;s
            Rockdale is not MARA&apos;s, and the Constellation peaker
            proposed next to the mine is Constellation&apos;s, barred by its
            own account from serving the mine.<C n={23} />
          </p>
          <p>
            The fair reading is that MARA inherited a noise problem it had
            financed, fixed it to the standard the law sets, and has not
            fixed it to the standard the neighbors live by – and that the
            gap between those two standards is what a Hood County jury will
            eventually be asked to measure. Until then the mine runs, the
            wall stands, and the company has already decided it would
            rather own a power plant.
          </p>

          <h2>Where does MARA stand today?</h2>
          <p>
            As of September 2026: about 300 megawatts at Granbury and 200
            at Garden City classed as base load, two gigawatts in Matagorda
            County classed as studied, a gas plant in Ohio awaiting
            closing, 35,577 bitcoin, 70 exahash, a state nuisance suit in
            discovery with no trial date, a federal damages suit four
            months old, a $138.8 million contract verdict on appeal, and a
            chief executive who says the miner that survives 2028 will be
            a power company.<C n={48} /><C n={45} /><C n={42} /><C n={46} />
            <C n={33} /><C n={43} /><C n={39} /><C n={38} /> The other
            company in the wing is on{" "}
            <Link href="/riot-platforms-bitcoin">Riot Platforms and Texas</Link>;
            the county&apos;s senator is on{" "}
            <Link href="/lois-kolkhorst-bitcoin">Lois Kolkhorst and Bitcoin</Link>;
            the sites are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
            This page is the mine the neighbors could hear, and what has
            been done about it in two years by everyone but the
            Legislature.
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
            Primary record first: the company&apos;s own SEC filings,
            releases, shareholder letters, and proxy statements; the
            verified petition and the Earthjustice filings; the Hood County
            commissioners&apos; resolution; the federal docket as
            published; ERCOT&apos;s notices; then TIME, the Texas Tribune,
            KERA, DL News, Decrypt, CoinDesk, and the trade press for the
            quotes, the readings, and the vote. Machine counts at Granbury
            differ by source and are attributed where used. This is a
            research and reference article, not financial, investment, or
            legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {maraSources.map((s) => (
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
