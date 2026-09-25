import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  RIOT_LAST_VERIFIED,
  riotCreditsByYear,
  riotSources,
  riotTimeline,
  type RiotTimelineKind,
} from "@/lib/riot";

const pageUrl = `${site.url}/riot-platforms-bitcoin`;

export const metadata: Metadata = {
  title: "Riot Platforms: The Miner That Became a Landlord",
  description:
    "Riot Platforms and Texas, 2017–2026, sourced from its own filings: the Colorado shell that renamed itself Riot Blockchain in 2017 and drew an SEC subpoena; Jason Les and the $651 million Whinstone deal that made Rockdale the largest mine in North America; Corsicana's gigawatt, the county that refused the abatement and then passed it 3–2; the August 2023 month it earned $31.7 million for switching off - $24.2 million from its TXU contract, $7.4 million from ERCOT; power credits of $71.2 million in 2023 and $56.7 million in 2025; Rochard against SB 1751 and for SB 21; the DOE survey suit; the 2025 pivot to AI, AMD's 50 megawatts, and the August 2026 twenty-year, $9.1 billion lease of 191 megawatts to a frontier AI lab. And the shareholder's ledger: four and a half times the shares, losses in four of five years, an $83.5 million pay year, and seven thousand bitcoin sold to build.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Riot Platforms: The Miner That Became a Landlord",
    description:
      "The company that learned in Texas that a mine earns most when it switches off, and in 2026 rented the switch to an AI lab for $9.1 billion. Riot's record, from its filings. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is Riot Platforms?",
    a: "A Castle Rock, Colorado company, listed on Nasdaq as RIOT, that renamed itself from Bioptix to Riot Blockchain in October 2017, became Riot Platforms in January 2023, and is the largest Bitcoin miner in Texas: 700 developed megawatts at Rockdale in Milam County, bought with Whinstone in May 2021, and 400 of a planned 1,000 megawatts at Corsicana in Navarro County, energized in April 2024, plus sites in Kentucky. Jason Les has been chief executive since February 2021 and Benjamin Yi executive chairman since May 2021. It employed 816 people at the end of 2025, about 63% of them in Texas, and ran 44.4 exahash, about 4.6% of the Bitcoin network, in mid-2026.",
  },
  {
    q: "How much does Riot earn for switching off?",
    a: "By its own reporting, $6.5 million in power credits in 2021, $27.3 million in 2022, $71.2 million in 2023, $33.7 million in 2024, and $56.7 million in 2025 - 'nearly $10,000 per Bitcoin mined' that year. The credits combine two things: resale of power it has bought at a fixed price under its contract with TXU, and ERCOT's payments for ancillary services and demand response. In August 2023 it booked $31.7 million against 333 bitcoin mined; $24.2 million of that was TXU resale and $7.4 million ERCOT money, which Riot called 'less than one percent of the program.' In 2023 the credits were about 38% of mining revenue; in 2025 about 10%.",
  },
  {
    q: "What is Riot's AI pivot?",
    a: "A conversion of its power sites from mining to data-center leasing. In January 2025 it began evaluating about 600 megawatts at Corsicana for AI and high-performance computing and halted the second mining phase there, after pressure from Starboard Value and D. E. Shaw, which then helped seat three directors. In January 2026 it signed AMD for 25 megawatts at Rockdale, expanded to 50 in April, about $636 million over ten years. In April 2026 it signed a non-binding letter of intent for all 756 megawatts of Corsicana's planned capacity with one tenant. On August 10, 2026 it announced a twenty-year, 191-megawatt lease at Rockdale with 'one of the world's leading frontier AI labs,' about $9.1 billion in base rent; Bloomberg identified the tenant as Anthropic, which neither company has confirmed.",
  },
  {
    q: "What is Riot's record with Texas counties and the Legislature?",
    a: "Navarro County's commissioners unanimously refused its Corsicana reinvestment zone in March 2024 - 'They created a lot of controversy' - then passed a ten-year abatement 3–2 that October on a pledge of $640 million and 140 jobs; Milam County approved a 75% ten-year abatement for the Rockdale data center in February 2026, 4–1. At the Legislature, Riot's Pierre Rochard testified against Kolkhorst's 2023 mining brake ('Bitcoin miners are the number 1 employer in Rockdale') and for the Strategic Bitcoin Reserve in 2025. With the Texas Blockchain Council it sued the Department of Energy over an emergency survey in February 2024 and won in a week. Its federal lobbying rose from $280,000 in 2022 to $1.16 million in 2024.",
  },
  {
    q: "Is Riot profitable?",
    a: "Rarely. Net losses of $509.6 million in 2022, $49.5 million in 2023, and $663.2 million in 2025, and $237.2 million in the second quarter of 2026; the one profitable year, 2024's $109.4 million, came from a new accounting rule that marks bitcoin holdings to market. Shares outstanding rose from about 84 million in 2021 to about 378 million in 2026. Bitcoin held fell from 18,005 at the end of 2025 to 11,380 by June 2026 as the company sold to fund data-center construction. Chief executive pay was $83.5 million in 2024, a ratio of 1,419 to one against the median employee, and $3.46 million in 2025 after shareholders objected.",
  },
];

const kindStyle: Record<RiotTimelineKind, { color: string; label: string }> = {
  shell: { color: "var(--star)", label: "The shell" },
  miner: { color: "#c98a4e", label: "The miner" },
  grid: { color: "#6f9e6a", label: "The grid" },
  county: { color: "#8a7fb5", label: "The counties" },
  landlord: { color: "var(--accent)", label: "The landlord" },
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
// Two figures - credits beside coins by year, and the landlord's ledger -
// drawn from the dated, sourced facts on this page (Sept 2026).
// Server-rendered SVG, no client JS.
function RiotCreditsFigure() {
  const x0 = 80;
  const bw = 100;
  const gap = 34;
  const baseY = 200;
  const h = 130;
  const maxM = 80;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="Riot's power credits by year beside bitcoin mined: 6.5 million dollars and 3,812 bitcoin in 2021; 27.3 million and 5,554 in 2022; 71.2 million and 6,626 in 2023; 33.7 million and 4,828 in 2024; 56.7 million and 5,686 in 2025">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE SWITCH · POWER CREDITS, $ MILLIONS, BESIDE BITCOIN MINED, BY YEAR</text>
        <line x1={x0 - 10} y1={baseY} x2={x0 + 5 * (bw + gap)} y2={baseY} stroke="var(--border)" strokeWidth="1" />
        {riotCreditsByYear.map((d, i) => {
          const x = x0 + i * (bw + gap);
          const bh = (d.creditsM / maxM) * h;
          return (
            <g key={d.year}>
              <rect x={x} y={baseY - bh} width={bw} height={bh} rx="4" fill="#6f9e6a" fillOpacity="0.8" />
              <text x={x + bw / 2} y={baseY - bh - 6} fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">${d.creditsM}M</text>
              <text x={x + bw / 2} y={baseY + 16} fontSize="10" textAnchor="middle" fill="var(--muted-2)">{d.year}</text>
              <text x={x + bw / 2} y={baseY + 30} fontSize="9.5" textAnchor="middle" fill="#c98a4e">{d.btc.toLocaleString()} BTC</text>
              <text x={x + bw / 2} y={baseY + 43} fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">{d.note}</text>
            </g>
          );
        })}
        <text x="28" y="268" fontSize="10" fill="var(--muted)">Credits = resale of fixed-price TXU power plus ERCOT ancillary and demand-response payments, as Riot reports them · 2023: ~38% of mining revenue · 2025: ~10%</text>
        <text x="405" y="290" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Riot full-year results 2022–2025 · Form 8-K Sept 6, 2023 · Riot response Sept 8, 2023 · Dallas Morning News Oct 5, 2023</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The switch. Five years of the two things a Texas mine sells – hashes and the promise to stop – in the company&apos;s own accounting. The 2023 bar is the year the second product briefly rivaled the first, and the year the state noticed. Most of every bar is not ERCOT&apos;s money but Riot&apos;s own cheap contract power, sold back into a hot market.
      </figcaption>
    </figure>
  );
}

function RiotLedgerFigure() {
  const cols = [
    {
      t: "THE MINER", c: "#c98a4e",
      rows: ["Rockdale 700 MW · Corsicana 400 of 1,000", "Hashrate 12.4 → 44.4 EH/s (2023 → mid-2026)", "Bitcoin mined 5,686 (2025)", "All-in power 3.0¢/kWh (Q1 2026)"],
    },
    {
      t: "THE LANDLORD", c: "var(--accent)",
      rows: ["AMD · 50 MW · ~$636M · 10 yrs", "Frontier AI lab · 191 MW · ~$9.1B · 20 yrs", "Corsicana · 756 MW · non-binding LOI", "Rockdale land bought · $96M · Jan 2026"],
    },
    {
      t: "THE SHAREHOLDER", c: "var(--star)",
      rows: ["Shares 84M (2021) → ~378M (2026)", "Net loss $663M (2025) · $237M (Q2 2026)", "BTC held 18,005 → 11,380 (six months)", "CEO pay $83.5M (2024) → $3.46M (2025)"],
    },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="The three ledgers: the miner with 700 megawatts at Rockdale and 44 exahash; the landlord with AMD's 50 megawatts, a 191-megawatt 9.1 billion dollar frontier-lab lease, and a 756-megawatt letter of intent; the shareholder with four and a half times the shares, a 663 million dollar loss, bitcoin holdings down from 18,005 to 11,380, and chief executive pay of 83.5 million in 2024">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE LEDGERS · THE MINER, THE LANDLORD, THE SHAREHOLDER · SEPTEMBER 2026</text>
        {cols.map((col, ci) => {
          const x = 28 + ci * 256;
          return (
            <g key={col.t}>
              <rect x={x} y="48" width="242" height="172" rx="10" fill="var(--surface-2)" stroke={col.c} strokeWidth="1.25" />
              <text x={x + 14} y="72" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill={col.c}>{col.t}</text>
              {col.rows.map((r, i) => (
                <g key={r}>
                  <circle cx={x + 20} cy={98 + i * 32 - 4} r="3.5" fill={col.c} />
                  <text x={x + 32} y={98 + i * 32} fontSize="10" fill="var(--foreground)">{r}</text>
                </g>
              ))}
            </g>
          );
        })}
        <text x="405" y="244" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Form 10-K 2025 · 8-Ks Jan 16, Apr 30, Aug 10, 2026 · proxies 2025 and 2026 · Data Center Dynamics Aug 2026 (tenant unconfirmed)</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The ledgers. The same company read three ways. The miner is the largest in Texas and still growing its hashrate; the landlord has ten billion dollars of rent under contract and a gigawatt more under letter; the shareholder has paid for both with dilution, losses, and the sale of a third of the treasury in six months. Which ledger the company is running on will be settled at Corsicana.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function RiotPlatformsBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Riot Platforms: The Miner That Became a Landlord",
    description:
      "The Texas record of Riot Platforms, from its own filings: the 2017 rename and SEC subpoena, the Whinstone acquisition, Corsicana and its counties, the power credits and the August 2023 month, the Legislature and the DOE suit, the 2025 AI pivot, the AMD and frontier-lab leases, and the shareholder's ledger of dilution, losses, pay, and bitcoin sold.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    about: [
      { "@type": "Thing", name: "Bitcoin mining" },
      { "@type": "Corporation", name: "Riot Platforms, Inc.", tickerSymbol: "RIOT" },
      { "@type": "Place", name: "Rockdale, Texas" },
      { "@type": "Place", name: "Corsicana, Texas" },
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
        name: "Riot Platforms and Texas",
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
          / Riot Platforms &amp; Texas
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The companies
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Riot Platforms: The Miner That Became a Landlord
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The largest Bitcoin miner in Texas is a Colorado company that
            was a veterinary-diagnostics shell until October 2017, when it
            changed its name and its share price rose by half in a week.
            It bought its way into the state four years later, taking the
            old Alcoa site at Rockdale for six hundred and fifty million
            dollars in stock and cash, and it learned there what no other
            miner has proved so publicly: that in a Texas August the most
            profitable thing a seven-hundred-megawatt mine can do is stop.
            It fought the Legislature&apos;s brake, sued the federal
            government over a survey, was refused by one county and
            approved by another, and in 2026 rented a hundred and
            ninety-one megawatts of Rockdale to an AI lab for twenty years
            and nine billion dollars, selling seven thousand bitcoin in six
            months to pour the concrete. The company&apos;s filings tell
            three stories about the same site – the miner&apos;s, the
            landlord&apos;s, and the shareholder&apos;s – and this page is all
            three.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 26, 2026 · Updated{" "}
            {RIOT_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Riot Platforms is the Nasdaq-listed Bitcoin miner, headquartered
            in Castle Rock, Colorado, that owns the largest mine in North
            America at Rockdale, Texas – 700 developed megawatts, acquired
            with Whinstone in May 2021 – and a 400-megawatt first phase of
            a planned gigawatt at Corsicana. It earned $71.2 million in
            power credits for curtailing in 2023 and $56.7 million in 2025,
            testified against the 2023 mining brake and for the 2025
            Bitcoin reserve, and since January 2025 has been converting its
            Texas sites to data centers: AMD leases 50 megawatts at
            Rockdale, and on August 10, 2026 Riot announced a twenty-year,
            191-megawatt, $9.1 billion lease with an unnamed frontier AI
            lab.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Riot agreed to buy Whinstone on April 8, 2021 for $80 million
              cash and 11.8 million shares, about $651 million at
              announcement, closing May 26, 2021.<C n={6} /><C n={7} />
            </li>
            <li>
              In August 2023 Riot booked $31.7 million in credits against
              333 bitcoin mined - $24.2 million from power sold under its
              TXU contract and $7.4 million from ERCOT demand
              response.<C n={14} />
            </li>
            <li>
              Riot&apos;s power credits were $71.2 million in 2023, $33.7
              million in 2024, and $56.7 million in 2025.<C n={17} />
              <C n={29} /><C n={33} />
            </li>
            <li>
              Navarro County refused Riot&apos;s reinvestment zone on March
              11, 2024 and approved a ten-year abatement 3–2 on October 15,
              2024.<C n={20} /><C n={26} />
            </li>
            <li>
              On August 10, 2026 Riot announced a twenty-year, 191-megawatt
              lease at Rockdale with a frontier AI lab, about $9.1 billion
              in base rent.<C n={39} />
            </li>
            <li>
              Riot reported a net loss of $663.2 million for 2025 and held
              11,380 bitcoin on June 30, 2026, down from 18,005 at
              year-end.<C n={33} /><C n={39} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the shell to the lease
            </h2>
            <span className="text-xs text-muted-2">2017 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {riotTimeline.map((e) => {
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
          <h2>Where did Riot come from?</h2>
          <p>
            A rename. Bioptix, Inc., a Castle Rock, Colorado maker of
            veterinary diagnostics, became Riot Blockchain, Inc. on October
            4, 2017, and its shares rose by half within the week and
            several-fold within three months; CNBC&apos;s investigation the
            following February found a company whose principal asset was
            the word in its name.<C n={1} /><C n={2} /> The SEC issued a
            subpoena on April 9, 2018; that September the chief executive,
            John O&apos;Rourke, resigned after being named in an unrelated
            $27 million market-manipulation case; a shareholder suit
            followed.<C n={3} /><C n={4} /> The investigation closed on
            January 29, 2020 with no enforcement recommended, and the suit
            was dismissed with prejudice in August 2023.<C n={3} />
            <C n={18} /> The company&apos;s principal office is still in
            Castle Rock; its executive chairman since May 2021 is Benjamin
            Yi, and its chief executive since February 8, 2021 is Jason
            Les, a director since 2017 and a former professional poker
            player – &ldquo;Bitcoin positioned to disrupt the global
            financial system,&rdquo; he said on appointment.<C n={32} />
            <C n={5} /> Ten weeks later he bought Texas.
          </p>

          <h2>What did Riot buy, and where?</h2>
          <p>
            Rockdale first, then Corsicana, then whatever was next to them.
            On April 8, 2021 Riot agreed to acquire Whinstone US, the
            operator of the old Alcoa smelter site in Milam County, for
            $80 million in cash and 11.8 million shares – about $651
            million at that day&apos;s price – and closed on May 26: &ldquo;the
            most significant milestone in Riot&apos;s history.&rdquo;<C n={6} />
            <C n={7} /> Expanded to 700 developed megawatts by 2023,
            Rockdale is, in the company&apos;s filings, &ldquo;believed to be
            the largest single Bitcoin mining facility in North
            America&rdquo;; the ground it stands on Riot bought outright in
            January 2026 for $96 million, funded by selling about 1,080
            bitcoin.<C n={18} /><C n={34} /> On April 27, 2022 it announced
            a second campus in Navarro County: a gigawatt on 265 acres
            outside Corsicana, immersion-cooled, 400 megawatts in the first
            phase; the substation was energized April 18, 2024.<C n={8} />
            <C n={21} /> Around them it bought what it had inherited: $185
            million for Rhodium&apos;s 125 megawatts at Rockdale in April
            2025, ending a hosting contract that &ldquo;generated a gross
            loss of approximately $15 million&rdquo; in 2024, and $20
            million to settle a Japanese client&apos;s claim from the
            Whinstone era.<C n={30} /><C n={36} /> It also bought Block
            Mining&apos;s Kentucky sites for $92.5 million in July 2024, and
            in 2024 tried and failed to buy Bitfarms, building a stake near
            a fifth of the company before settling for a board
            seat.<C n={24} /><C n={23} /><C n={25} /> The site&apos;s own
            history, from Alcoa to Bitmain to Whinstone, is on{" "}
            <Link href="/rockdale-texas-bitcoin">Rockdale, Texas and Bitcoin</Link>;
            where it sits among the state&apos;s mines is on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
          </p>

          <h2>How does Riot make money from the grid?</h2>
          <p>
            By buying power at a fixed price and selling it back when the
            price is not. Riot&apos;s 10-K describes three blocks of power
            under long-term contract with TXU Energy at Rockdale – 130, 65,
            and 150 megawatts, fixed-price, running to 2027 and 2030 – with
            the right to &ldquo;elect to sell that power in exchange for
            credits against future power costs,&rdquo; beside participation
            in ERCOT&apos;s ancillary services and the four-coincident-peak
            program that sets its transmission bill.<C n={32} /> The
            company reports the results as &ldquo;power credits&rdquo;: $6.5
            million in 2021, $27.3 million in 2022, $71.2 million in 2023 –
            about 38% of that year&apos;s mining revenue, or the equivalent
            of 2,497 bitcoin – $33.7 million in 2024 after the halving, and
            $56.7 million in 2025, &ldquo;nearly $10,000 per Bitcoin
            mined.&rdquo;<C n={10} /><C n={17} /><C n={29} /><C n={33} />
            August 2023 is the month everyone cites. Riot curtailed Rockdale
            by more than 95% at the peaks and booked $31.7 million against
            333 bitcoin mined – &ldquo;a landmark month,&rdquo; Les said –
            and CNBC reported that Texas had paid it more to stop than it
            earned by mining.<C n={14} /> The filing itself gives the split
            the headline lost: $24.2 million was power sold under the TXU
            agreement, $7.4 million ERCOT demand response; Riot&apos;s
            response two days later called its ERCOT share &ldquo;less than
            one percent of the program, which administered nearly $1
            billion&rdquo;; the Dallas Morning News put ERCOT&apos;s
            payments to Riot that summer at about $13 million.<C n={14} />
            <C n={15} /><C n={16} /> The grid operator&apos;s side of the
            arrangement – what it buys from the mines, and what its monitor
            thinks of the price – is on{" "}
            <Link href="/ercot-bitcoin">ERCOT and Bitcoin</Link>.
          </p>

          <RiotCreditsFigure />

          <h2>What is Riot&apos;s record with the counties and the Capitol?</h2>
          <p>
            One refusal, two abatements, one lawsuit won, two bills argued.
            Navarro County&apos;s commissioners voted unanimously on March
            11, 2024 to deny Riot&apos;s reinvestment zone – it had sought
            50% for ten years – with Commissioner David Brewer saying,
            &ldquo;I don&apos;t think it&apos;s a good investment. They
            created a lot of controversy&rdquo;; the Concerned Citizens of
            Navarro County had been protesting since June 2022 over water
            and noise, and Riot&apos;s David Schatz had told the town that
            &ldquo;the only thing that we do as far as water consumption is
            just topping off our retention pond.&rdquo;<C n={20} /><C n={9} />
            <C n={22} /> On October 15, 2024 the same court passed the
            abatement 3–2: ten years on new value, against a pledge of $640
            million and 140 jobs.<C n={26} /> Milam County followed in
            February 2026 with 75% for ten years from 2028, 4–1, the
            dissenter calling it &ldquo;too steep.&rdquo;<C n={35} /> At the
            Capitol, Riot&apos;s research chief Pierre Rochard testified
            against Kolkhorst&apos;s SB 1751 on March 28, 2023 – &ldquo;Bitcoin
            miners are the number 1 employer in Rockdale. Bitcoin miners are
            also the number 1 taxpayer to Rockdale ISD&rdquo; – and for the
            Strategic Bitcoin Reserve in February 2025: &ldquo;now is the
            perfect time to make a strategic investment.&rdquo;<C n={12} />
            <C n={13} /><C n={44} /> In February 2024 Riot and the Texas
            Blockchain Council sued the Department of Energy over an
            emergency survey of miners&apos; power use and had it withdrawn
            within a week.<C n={19} /> Its federal lobbying rose from
            $280,000 in 2022 to $1.16 million in 2024, led by Brian
            Morgenstern, a former White House deputy press secretary who
            sits on the council&apos;s board.<C n={43} /> In August 2026,
            when the Governor ordered an audit of every data center in the
            queue, Riot was the first company he announced had committed to
            comply, and Les published an open letter: &ldquo;We support your
            commonsense principles of ratepayer protection, water
            stewardship.&rdquo;<C n={41} /><C n={42} /> The senator whose
            brake it fought is on{" "}
            <Link href="/lois-kolkhorst-bitcoin">Lois Kolkhorst and Bitcoin</Link>;
            the council it sued beside is on{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher and Bitcoin</Link>;
            the reserve it argued for is on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            .
          </p>

          <h2>What is the pivot?</h2>
          <p>
            The conversion of a miner&apos;s power into a landlord&apos;s.
            On January 21, 2025 Riot announced a formal evaluation of about
            600 megawatts at Corsicana for AI and high-performance
            computing, halted the second mining phase there, cut its
            hashrate target from 46.7 to 38.4 exahash, and trimmed $245
            million of capital spending – &ldquo;maximizing the potential of
            our assets,&rdquo; Les said.<C n={27} /> On February 13 it seated
            three new directors &ldquo;with constructive, independent input
            from each of Starboard Value LP and The D. E. Shaw Group,&rdquo;
            the activist investors who had pushed for the turn.<C n={28} />
            The tenants came a year later. On January 16, 2026 AMD signed
            for 25 megawatts at Rockdale over ten years with options, about
            $311 million; the second 25 followed in April, about $636
            million in all.<C n={34} /><C n={37} /> In April Riot signed a
            non-binding letter of intent for all 756 megawatts of
            Corsicana&apos;s planned data-center capacity with a single
            undisclosed tenant.<C n={37} /> And on August 10, 2026 it
            announced a twenty-year lease of 191 megawatts at Rockdale to
            &ldquo;one of the world&apos;s leading frontier AI labs&rdquo; –
            about $9.1 billion in base rent to June 2048, $16.1 billion with
            extensions, 96 megawatts by December 2027 and the rest by June
            2028, financed in part by a $573 million bridge from Morgan
            Stanley. &ldquo;A defining moment in our evolution into a
            leading developer of large-scale data centers,&rdquo; Les
            said.<C n={39} /> Bloomberg identified the tenant as Anthropic;
            &ldquo;Riot declined to comment and Anthropic didn&apos;t
            respond.&rdquo;<C n={40} /> The company is still a miner – 44.4
            exahash in mid-2026, about 4.6% of the network, 5,686 bitcoin
            mined in 2025 – but the hashrate grows in Kentucky now, and the
            Texas megawatts are being leased.<C n={39} /><C n={32} /> The
            industry-wide version of the same turn is on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
          </p>

          <RiotLedgerFigure />

          <h2>The honest counterweight: the shareholder&apos;s ledger</h2>
          <p>
            The third story the filings tell. Riot has reported a net loss
            in four of its last five years – $509.6 million in 2022, $49.5
            million in 2023, $663.2 million in 2025, and $237.2 million in
            the second quarter of 2026 alone – and its one profitable year,
            2024&apos;s $109.4 million, came from a new accounting rule that
            marks bitcoin to market rather than from
            operations.<C n={10} /><C n={17} /><C n={33} /><C n={39} />
            <C n={29} /> It has paid for its growth with paper: about 84
            million shares in 2021 became about 378 million by 2026, four
            and a half times as many.<C n={38} /> It paid its chief
            executive $83,532,328 for 2024, most of it a $75.2 million
            performance-share grant, against a median employee&apos;s
            $58,875 – 1,419 to one – and cut him to $3.46 million with no
            long-term grant the next year &ldquo;in direct response to 2025
            Say-on-Pay feedback.&rdquo;<C n={31} /><C n={38} /> And it has
            sold the asset it exists to accumulate: 18,005 bitcoin at the
            end of 2025 became 11,380 by June 30, 2026, some 7,000 coins
            sold in six months to buy the Rockdale land and pour the
            frontier lab&apos;s foundations, with 5,821 of the remainder
            pledged against a loan.<C n={32} /><C n={39} /> Set against it,
            the miner&apos;s case: the largest site on the continent,
            hashrate up nearly four-fold in three years, power at three
            cents, ten billion dollars of rent under contract, and a
            county that said no in March and yes in October.<C n={18} />
            <C n={37} /><C n={26} /> Two things this page does not say:
            the Granbury noise litigation is{" "}
            <Link href="/mara-holdings-bitcoin">Marathon&apos;s</Link>, not
            Riot&apos;s, and the Core Scientific shareholders who rejected
            CoreWeave in October 2025 were not voting on anything of
            Riot&apos;s.<C n={45} />
          </p>
          <p>
            The fair reading is that Riot&apos;s Texas decade has been a
            single bet made three times – on cheap power at Rockdale, on
            the state paying for flexibility, and now on AI paying for
            capacity – and that the third bet is the first one whose
            counterparty is not the Texas grid or the Bitcoin price but a
            tenant with a twenty-year lease. Whether that makes Riot a
            better company or a different one, the shareholder who has
            been diluted four and a half times to fund it will find out at
            Corsicana.
          </p>

          <h2>Where does Riot stand today?</h2>
          <p>
            As of September 2026: 700 megawatts developed at Rockdale and
            400 at Corsicana, 44.4 exahash, 11,380 bitcoin, 50 megawatts
            leased to AMD and 191 to a lab no one will name, a 756-megawatt
            letter of intent it has said converting to a lease is &ldquo;a
            priority for the balance of 2026,&rdquo; a market value near
            nine billion dollars, and a place in the Governor&apos;s audit
            it has volunteered for.<C n={32} /><C n={39} /><C n={37} />
            <C n={41} /> The place it made is on{" "}
            <Link href="/rockdale-texas-bitcoin">Rockdale, Texas and Bitcoin</Link>;
            the grid that pays it is on{" "}
            <Link href="/ercot-bitcoin">ERCOT and Bitcoin</Link>; the
            regulator writing the rules for the load it is becoming is on{" "}
            <Link href="/texas-public-utility-commission-bitcoin">
              the Public Utility Commission and Bitcoin
            </Link>
            . This page is the miner that learned to stop, and what it is
            building where the mine was.
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
            Primary record first: the company&apos;s own SEC filings –
            annual reports, current reports, and proxy statements – and its
            press releases and responses; the Legislature&apos;s witness
            lists; the Navarro County commissioners&apos; resolution; the
            Governor&apos;s releases; then CNBC, the Dallas Morning News,
            the Corsicana Daily Sun, KXXV, CoinDesk, Data Center Dynamics,
            and OpenSecrets for the quotes, the votes, and the reporting.
            Where the identity of a tenant is reported but unconfirmed by
            either party, the page says so. This is a research and reference
            article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {riotSources.map((s) => (
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
