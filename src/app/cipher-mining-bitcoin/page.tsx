import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionsBlock } from "@/components/institutions-block";
import { site } from "@/lib/site";
import {
  CIPHER_LAST_VERIFIED,
  cipherSites,
  cipherSources,
  cipherTimeline,
  type CipherTimelineKind,
} from "@/lib/cipher";

const pageUrl = `${site.url}/cipher-mining-bitcoin`;

export const metadata: Metadata = {
  title: "Cipher: The Miner That Dropped the Word",
  description:
    "Cipher Mining, now Cipher Digital, and Texas, 2021–2026, sourced from its SEC filings and the county record: the Bitfury spin-out that listed with its parent holding 83%, built Odessa on a 2.7-cent Luminant contract it was sued over before the site was finished, and earned more in its first year by not running the mine than by running it. Then fourteen months that remade it: Barber Lake to Fluidstack with Google's backstop, Black Pearl to Amazon for $5.5 billion, Stingray to Amazon again, a twenty-year lease past $9 billion, $6 billion of debt, the Texas Blockchain Council's founder hired, the word Mining dropped from the name, 3.2 gigawatts conditionally classed by ERCOT - beside an $822 million loss, a hashrate cut in half, a Waco-area commissioner on its transparency, and a town whose water the company is now paying to fix.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Cipher: The Miner That Dropped the Word",
    description:
      "From a Bitfury subsidiary with one 2.7-cent power contract to the landlord of Amazon, Google's tenant, and an AI lab across eleven Texas sites. Cipher's record, from the filings and the counties. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is Cipher Digital?",
    a: "The company formerly called Cipher Mining, listed on Nasdaq as CIFR, headquartered in New York and led by Tyler Page. It was formed out of the mining-hardware firm Bitfury and went public through a SPAC on August 27, 2021 with Bitfury holding about 83% of the stock. It built Bitcoin mines in Texas at Odessa, Black Pearl, and three wind-farm joint ventures, then from September 2025 leased its West Texas sites to AI tenants - Fluidstack with Google's backing, Amazon Web Services twice, and an unnamed AI lab - and renamed itself Cipher Digital on February 20, 2026. Odessa is its last operating mine.",
  },
  {
    q: "What does Cipher own in Texas?",
    a: "As of September 2026, eleven sites and about 5.3 gigawatts of pipeline, all but one in Texas. Operating: Odessa (207 MW, Ector County, still mining), Black Pearl (300 MW, Winkler County, leased to AWS), and Barber Lake (300 MW, Mitchell County, leased to Fluidstack and an AI lab). Under construction or conditionally approved by ERCOT: Stingray near Andrews (100 MW, AWS), Colchis in Tom Green County (1 GW), Apollo near San Antonio (900 MW), McLennan at Riesel (500 MW), Mikeska (500 MW), a second Stingray phase (200 MW), plus Reveille at Cotulla and Milsing in East Texas. Ulysses, 200 MW, is in Ohio.",
  },
  {
    q: "What was the Odessa power contract fight?",
    a: "Cipher's Odessa mine runs on a fixed-price contract with Luminant, a Vistra subsidiary, at about 2.7 cents a kilowatt-hour, signed in June 2021. Luminant sued Cipher in Dallas County on November 18, 2022, eleven days before the mine started, over about $6.7 million in payments. They settled on August 23, 2023: Cipher's required notice before curtailing dropped from two hours to ten minutes, and the lease was extended through July 2027. The contract lets Cipher resell the power instead of mining; in 2022 it earned $5.06 million that way against $3.0 million from mining.",
  },
  {
    q: "Who are Cipher's AI tenants?",
    a: "Fluidstack, at Barber Lake, on a lease signed September 25, 2025 and expanded November 20, with Google backstopping $1.73 billion of Fluidstack's obligations and holding warrants for about 5.4% of Cipher; the lease was extended to twenty years on September 25, 2026 with a follow-on from an unnamed 'leading AI lab,' taking the site past $9 billion. Amazon Web Services, at Black Pearl for fifteen years and about $5.5 billion from November 2025, and at Stingray near Andrews from a lease disclosed in June 2026 with an Amazon.com guarantee. The company counted about $11.4 billion of contracted revenue in August 2026.",
  },
  {
    q: "What is Cipher's record with the Texas grid and the state?",
    a: "It never testified against SB 1751 in 2023 or on SB 6 in 2025; its Texas policy voice arrived in January 2026 when it hired Lee Bratcher, founder of the Texas Blockchain Council, to represent it at ERCOT. In September 2026 ERCOT conditionally classed 3.2 gigawatts of its projects in Batch Zero - Colchis and Stingray as base load, Apollo, McLennan, Mikeska, and a second Stingray phase as studied load - pending the Governor's audit due December 10. It paid a $17 million interconnection fee for AEP's Red Creek substation, asked Tom Green County for no abatement, and joined Fluidstack and Anthropic in a $10 million fund for Colorado City's water system.",
  },
  {
    q: "Is Cipher profitable?",
    a: "No. Net losses of $72.2 million in 2021, $39.1 million in 2022, $25.8 million in 2023, $44.6 million in 2024, $822.2 million in 2025, and $381.8 million in the first half of 2026. Revenue peaked at $223.9 million in 2025 and fell to $24.8 million in the second quarter of 2026 as the mines were shut for conversion and before most rent began. Total debt was $6.0 billion at June 30, 2026, against about $11.4 billion of contracted lease revenue. Page's compensation was $17.3 million for 2024 and $15.0 million for 2025. Bitfury's affiliates sold down from 83% to 15.1%.",
  },
];

const kindStyle: Record<CipherTimelineKind, { color: string; label: string }> = {
  bitfury: { color: "var(--star)", label: "Bitfury" },
  odessa: { color: "#c98a4e", label: "Odessa" },
  hyperscaler: { color: "#6f9e6a", label: "The tenants" },
  texas: { color: "var(--accent)", label: "Texas" },
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
// Two figures - the Texas portfolio by site and use, and the numbers -
// drawn from the dated, sourced facts on this page (Sept 2026).
// Server-rendered SVG, no client JS.
function CipherSitesFigure() {
  const x0 = 150;
  const maxW = 560;
  const scale = maxW / 1000;
  const rowH = 27;
  const useColor = { mining: "#c98a4e", ai: "#6f9e6a", conditional: "#8a7fb5" } as const;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="Cipher's Texas sites by megawatts: Odessa 207 still mining; Black Pearl 300, Barber Lake 300, and Stingray 100 leased to AI tenants; Colchis 1,000, Apollo 900, McLennan 500, and Mikeska 500 conditionally classed by ERCOT">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE PORTFOLIO · TEXAS SITES BY MEGAWATTS AND WHAT EACH IS FOR · SEPTEMBER 2026</text>
        {cipherSites.map((s, i) => {
          const y = 52 + i * rowH;
          const w = s.mw * scale;
          return (
            <g key={s.name}>
              <text x={x0 - 8} y={y + 13} fontSize="10.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">{s.name}</text>
              <rect x={x0} y={y} width={w} height="18" rx="3" fill={useColor[s.use]} fillOpacity="0.8" />
              <text x={x0 + w + 6} y={y + 13} fontSize="10" fontWeight="700" fill="var(--foreground)">{s.mw.toLocaleString()} MW</text>
              <text x={x0 + w + 60 + (s.mw >= 1000 ? -0 : 0)} y={y + 13} fontSize="8.5" fill="var(--muted-2)">{s.mw >= 700 ? "" : s.note}</text>
            </g>
          );
        })}
        <g>
          <rect x="150" y="272" width="10" height="10" fill="#c98a4e" fillOpacity="0.8" />
          <text x="165" y="281" fontSize="9" fill="var(--muted-2)">Still mining</text>
          <rect x="240" y="272" width="10" height="10" fill="#6f9e6a" fillOpacity="0.8" />
          <text x="255" y="281" fontSize="9" fill="var(--muted-2)">Leased to AI tenants</text>
          <rect x="380" y="272" width="10" height="10" fill="#8a7fb5" fillOpacity="0.8" />
          <text x="395" y="281" fontSize="9" fill="var(--muted-2)">ERCOT conditional (Batch Zero, audit pending)</text>
        </g>
        <text x="405" y="296" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Cipher 10-K 2025 · Q2 2026 presentation · Stingray offering materials · ERCOT designations as reported Sept 2026 · gross MW</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The portfolio. Amber is the one mine left; green is what has been leased to Amazon, Fluidstack, and an AI lab; purple is what ERCOT has conditionally classed and the Governor&apos;s audit has yet to confirm. Reveille at Cotulla, Milsing in East Texas, and a second Stingray phase are omitted for want of a stated megawatt figure or a designation. The 807 operating megawatts are less than a fifth of the 5.3 gigawatts the company now counts as its portfolio.
      </figcaption>
    </figure>
  );
}

function CipherNumbersFigure() {
  const years = [
    { y: "2021", rev: 0, ni: -72.2, eh: null as number | null, debt: null as number | null },
    { y: "2022", rev: 3.0, ni: -39.1, eh: 5.2, debt: null },
    { y: "2023", rev: 126.8, ni: -25.8, eh: 7.4, debt: null },
    { y: "2024", rev: 151.3, ni: -44.6, eh: 13.5, debt: null },
    { y: "2025", rev: 223.9, ni: -822.2, eh: 23.6, debt: 2.71 },
    { y: "H1 2026", rev: 59.7, ni: -381.8, eh: 11.6, debt: 6.0 },
  ];
  const x0 = 90;
  const bw = 88;
  const gap = 26;
  const zeroY = 150;
  const scale = 100 / 850; // px per $M
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 312" role="img" aria-label="Cipher's numbers by year: revenue of 3 million in 2022, 127 million in 2023, 151 million in 2024, 224 million in 2025, and 60 million in the first half of 2026; net losses of 72, 39, 26, 45, 822, and 382 million; hashrate 5.2 to 23.6 exahash, then 11.6; total debt 2.7 billion at the end of 2025 and 6.0 billion in June 2026">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE NUMBERS · REVENUE ABOVE, NET LOSS BELOW, $ MILLIONS · 2021 → MID-2026</text>
        <line x1={x0 - 14} y1={zeroY} x2={x0 + 6 * (bw + gap)} y2={zeroY} stroke="var(--muted-2)" strokeWidth="1.25" />
        <text x={x0 - 18} y={zeroY + 4} fontSize="9" textAnchor="end" fill="var(--muted-2)">$0</text>
        {years.map((d, i) => {
          const x = x0 + i * (bw + gap);
          const hr = d.rev * scale;
          const hn = Math.abs(d.ni) * scale;
          return (
            <g key={d.y}>
              <rect x={x} y={zeroY - hr} width={bw} height={hr} rx="3" fill="#6f9e6a" fillOpacity="0.8" />
              <rect x={x} y={zeroY} width={bw} height={hn} rx="3" fill="#c98a4e" fillOpacity="0.8" />
              {d.rev > 0 && <text x={x + bw / 2} y={zeroY - hr - 5} fontSize="10.5" fontWeight="700" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{d.rev.toLocaleString()}</text>}
              <text x={x + bw / 2} y={zeroY + hn + 12} fontSize="10.5" fontWeight="700" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">−{Math.abs(d.ni).toLocaleString()}</text>
              <text x={x + bw / 2} y="270" fontSize="10" textAnchor="middle" fill="var(--muted-2)">{d.y}</text>
              {d.eh && <text x={x + bw / 2} y="284" fontSize="9" textAnchor="middle" fill="var(--accent)">{d.eh} EH/s</text>}
              {d.debt && <text x={x + bw / 2} y="297" fontSize="9" textAnchor="middle" fill="#8a7fb5">${d.debt}B debt</text>}
            </g>
          );
        })}
        <text x="405" y="309" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Cipher annual and quarterly business updates 2023–2026 · Form 10-K 2025 · Form 10-Q Q2 2026 · 2025 loss includes fair-value marks on warrants and derivatives</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The numbers. Five years of losses that were small while the company mined and became large the year it stopped, a hashrate that peaked at 23.6 exahash and was cut in half by the conversions, and six billion dollars of debt taken on in nine months to build what the tenants will pay $11.4 billion to occupy. The 2026 bars are two quarters, before most of the rent.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function CipherMiningBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cipher: The Miner That Dropped the Word",
    description:
      "The Texas record of Cipher Mining, now Cipher Digital, from its filings and the county record: the Bitfury origin, the Odessa power contract and the Luminant suit, the wind-farm joint ventures, Black Pearl and Barber Lake, the Fluidstack, Google, and Amazon leases, the debt, the Bratcher hire, the rename, the Batch Zero designations, and the counties.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    about: [
      { "@type": "Thing", name: "Bitcoin mining" },
      { "@type": "Corporation", name: "Cipher Digital Inc.", alternateName: "Cipher Mining Inc.", tickerSymbol: "CIFR" },
      { "@type": "Place", name: "Odessa, Texas" },
      { "@type": "Place", name: "Colorado City, Texas" },
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
        name: "Cipher and Texas",
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
          / Cipher &amp; Texas
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The companies
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Cipher: The Miner That Dropped the Word
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            On February 20, 2026 a Nasdaq company that had spent four and a
            half years as Cipher Mining amended its charter and became
            Cipher Digital. The ticker did not change and neither did the
            chief executive, the New York address, or the last mine, a
            207-megawatt site in Odessa running on a power contract signed
            in 2021 at two and seven-tenths cents. What had changed was
            everything around it. In the fourteen months before the
            rename the company had leased a West Texas site it bought as a
            mine to an AI company with Google standing behind the rent,
            leased a second site that had been hashing at ten exahash to
            Amazon for five and a half billion dollars, leased a third to
            Amazon again, borrowed six billion dollars, hired the founder
            of the state&apos;s Bitcoin lobby to speak for it at ERCOT, and
            sold its wind-farm mines to a Chinese rig maker for stock. In
            September 2026 ERCOT conditionally classed three more
            gigawatts of its Texas projects, a Waco-area county
            commissioner said its transparency was not very good, and a
            town on the Colorado River accepted its money to fix the
            water. The contract, the tenants, and the counties are the
            record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 30, 2026 · Updated{" "}
            {CIPHER_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Cipher Digital, formerly Cipher Mining, is the New York-based,
            Nasdaq-listed company spun out of Bitfury in 2021 that built
            Bitcoin mines in Texas at Odessa, Black Pearl, and three
            wind-farm joint ventures, and from September 2025 leased its
            West Texas sites to AI tenants: Barber Lake to Fluidstack with
            Google&apos;s backstop and an AI lab for more than $9 billion
            over twenty years, and Black Pearl and Stingray to Amazon Web
            Services. It renamed itself in February 2026, carries $6
            billion of debt against $11.4 billion of contracted rent, and
            holds ERCOT&apos;s conditional Batch Zero designation on 3.2
            gigawatts more, pending the Governor&apos;s audit. Odessa is
            its last mine and is up for conversion.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Cipher Mining went public on August 27, 2021 through Good
              Works Acquisition Corp. with Bitfury holding about 83.4% of
              the stock; Bitfury&apos;s affiliates held 15.1% by April
              2026.<C n={2} /><C n={32} />
            </li>
            <li>
              Odessa, 207 megawatts in Ector County on a Luminant contract
              at about 2.7 cents a kilowatt-hour, began mining November 29,
              2022, eleven days after Luminant sued Cipher over $6.7 million
              in payments; the settlement of August 23, 2023 cut curtailment
              notice to ten minutes.<C n={6} /><C n={4} /><C n={8} />
            </li>
            <li>
              Cipher leased Barber Lake to Fluidstack on September 25, 2025
              for about $3.0 billion with Google backstopping $1.4 billion,
              and extended the lease to twenty years and more than $9
              billion on September 25, 2026.<C n={19} /><C n={49} />
            </li>
            <li>
              Amazon Web Services leased Black Pearl for fifteen years and
              about $5.5 billion on November 3, 2025 and was revealed in June
              2026 as the tenant at Stingray near Andrews.<C n={21} />
              <C n={35} /><C n={36} />
            </li>
            <li>
              Cipher hired Lee Bratcher, founder of the Texas Blockchain
              Council, as head of policy and government affairs on January
              6, 2026 and renamed itself Cipher Digital on February 20,
              2026.<C n={25} /><C n={27} />
            </li>
            <li>
              Cipher lost $822.2 million in 2025 and $381.8 million in the
              first half of 2026, and carried $6.0 billion of debt at June
              30, 2026; ERCOT conditionally classed 3.2 gigawatts of its
              projects in September 2026.<C n={29} /><C n={38} />
              <C n={41} /><C n={43} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From Bitfury&apos;s child to Amazon&apos;s landlord
            </h2>
            <span className="text-xs text-muted-2">2021 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {cipherTimeline.map((e) => {
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
          <h2>Where did Cipher come from?</h2>
          <p>
            From Bitfury, the Amsterdam maker of mining hardware, which in
            March 2021 announced it would take a newly formed mining
            subsidiary public through a special-purpose acquisition company
            at a $2 billion enterprise value with $595 million of expected
            proceeds, including a $425 million private placement to which
            Bitfury contributed $50 million in kind.<C n={1} /> The deal
            closed August 27, 2021. Cipher listed with no operating mine,
            a New York headquarters, Tyler Page as chief executive, a
            seven-year services agreement with its parent that barred
            Bitfury from mining in the United States, and Bitfury holding
            about 83% of the shares - a &ldquo;controlled company&rdquo;
            under Nasdaq&apos;s rules, as every annual report through 2023
            said.<C n={2} /><C n={4} /><C n={3} /> Twenty-six people
            worked there at the end of 2022.<C n={4} />
          </p>
          <p>
            Its Texas began in the wind. Alborz, 40 megawatts near Happy in
            the Panhandle, drew its entire supply from an adjacent wind
            project under a joint venture with WindHQ on a five-year
            contract at 2.73 cents; Page put the effective price at
            &ldquo;roughly $17 per megawatt-hour.&rdquo; Bear and Chief,
            near Andrews, followed in October 2022, each 49% Cipher&apos;s.
            <C n={7} /><C n={4} /> The company sold its share of all three
            to Canaan, the Chinese rig maker, for $39.75 million of Canaan
            stock in February 2026.<C n={28} />
          </p>

          <h2>What is the Odessa contract, and why was it worth more unused?</h2>
          <p>
            Odessa is 207 megawatts in Ector County on a fixed-price power
            purchase agreement with Luminant, a Vistra subsidiary, signed
            June 23, 2021 at about 2.7 cents a kilowatt-hour. The mine
            began hashing on November 29, 2022, &ldquo;just 10 months after
            we broke ground,&rdquo; and the company valued the contract on
            its balance sheet at $78.9 million because, in its own words,
            it had the flexibility &ldquo;to either mine bitcoin or resell
            power.&rdquo;<C n={6} /> Eleven days before the first block,
            Luminant had sued it in the 95th District Court in Dallas
            County over two payments totalling about $6.7
            million.<C n={4} />
          </p>
          <p>
            The 2022 numbers explain the contract better than any
            prospectus. Mining revenue was $3.0 million. Money from the
            &ldquo;reduction of scheduled power&rdquo; - selling the cheap
            electricity back when the market paid more than the hashrate
            did - was $5.06 million.<C n={5} /> The suit settled on August
            23, 2023 with a fourth amendment that cut the notice Cipher
            must give before curtailing from two hours to &ldquo;at most,
            ten minutes&rdquo; and extended the Odessa lease through July
            2027.<C n={8} /> Power sales were $9.9 million in
            2023.<C n={11} /> By 2025 Odessa was 11.3 exahash and 56% of
            production, running at 17.6 joules a terahash, and the 10-K
            describes the contract as take-or-pay on two-thirds of the
            site at about 2.8 cents after an October 2025
            adjustment.<C n={22} /><C n={31} /> In August 2026 Page told
            analysts he was &ldquo;encouraged by the level of interest
            we&apos;re seeing in conversion of Odessa to an HPC
            site.&rdquo;<C n={40} /> The last mine is for lease.
          </p>

          <h2>How did a miner become Amazon&apos;s landlord?</h2>
          <p>
            By buying substations. Black Pearl, at least fifty acres in
            Winkler County with ERCOT approval for 300 megawatts, was
            bought in December 2023 for about 2.4 million shares, worth
            about $7 million.<C n={10} /> Barber Lake, 250 acres at
            Colorado City in Mitchell County with an energized substation,
            closed September 24, 2024 for $67.5 million and $3 a
            megawatt-hour for five years; the release announcing a
            300-megawatt Bitcoin site said in the same breath that
            &ldquo;we have already received interest in the site from
            multiple hyperscalers.&rdquo;<C n={13} /><C n={14} /> Options
            were taken in October 2024 on three more 500-megawatt sites, in
            McLennan County, West Texas, and East Texas.<C n={31} />
          </p>
          <p>
            Then the tenants came, in an order the company had not
            planned. On September 25, 2025 Fluidstack leased 168 megawatts
            of IT load at Barber Lake for ten years and about $3.0 billion,
            with Google backstopping $1.4 billion of the rent and taking
            warrants for about 5.4% of Cipher; five days later Cipher sold
            $1.3 billion of zero-coupon convertible notes.<C n={19} />
            <C n={20} /> On November 3 Amazon Web Services took Black Pearl
            - a site that had been hashing at 10.1 exahash - for fifteen
            years and about $5.5 billion, and the stock rose 19%. Page: the
            hyperscalers &ldquo;would turn to Cipher and to non-traditional
            areas in Texas.&rdquo;<C n={21} /><C n={22} /><C n={23} /> On
            November 20 Fluidstack took the rest of Barber Lake for $830
            million more, with Google&apos;s backstop raised to $1.73
            billion.<C n={24} /> A third lease disclosed in May 2026 to an
            &ldquo;investment-grade hyperscale tenant&rdquo; turned out, in
            June offering documents, to be Amazon again, at Stingray near
            Andrews, with an Amazon.com guarantee of the rent.<C n={33} />
            <C n={35} /><C n={36} /> On September 25, 2026 the Barber Lake
            term was extended to twenty years with a binding follow-on from
            an unnamed &ldquo;leading AI lab,&rdquo; and the one site&apos;s
            contracted revenue passed $9 billion.<C n={49} /> The company
            counts about $11.4 billion in all.<C n={39} />
          </p>
          <p>
            The buildings were paid for with debt: $1.3 billion of
            converts in September 2025, $2.0 billion of 6.125% notes in
            February 2026 to finish Black Pearl, $810 million of 6% notes
            in June for Stingray, $6.0 billion of principal by June 30,
            2026.<C n={20} /><C n={26} /><C n={36} /><C n={41} /> The
            first Black Pearl capacity was delivered to Amazon in August
            2026, two months early, and the rent began.<C n={38} />
          </p>
          <CipherSitesFigure />

          <h2>What is Cipher&apos;s record with the grid and the state?</h2>
          <p>
            Until 2026, almost none in public. No Cipher witness appears on
            the Senate list for SB 1751 in March 2023, when Riot and US
            Bitcoin testified against the brake and the Texas Blockchain
            Council testified on it; the company&apos;s grid record was the
            Odessa contract&apos;s curtailment clause and the industry-wide
            curtailment in Winter Storm Fern in January 2026, for which it
            published no figure.<C n={50} /><C n={51} /> That changed on
            January 6, 2026, when it hired Lee Bratcher, who had founded
            the council in 2019 and run it for six years, as head of policy
            and government affairs, to &ldquo;represent Cipher in its ERCOT
            membership.&rdquo;<C n={25} /> Bratcher is on{" "}
            <Link href="/lee-bratcher-bitcoin">his own page</Link>; the
            council is on{" "}
            <Link href="/texas-blockchain-council">its own</Link>.
          </p>
          <p>
            The Governor&apos;s August 3, 2026 directive paused
            ERCOT&apos;s Batch Zero - the batch of roughly 300 large loads
            awaiting classification - pending &ldquo;a verification process
            before advancing any data center Large Loads.&rdquo;<C n={37} />
            <C n={42} /> Page, the next day: &ldquo;Whatever the finalized
            process and timeline looks like here, Cipher is going to be at
            the front of it.&rdquo;<C n={40} /> The conditional
            designations arrived in mid-September: base load for
            Colchis&apos;s gigawatt in Tom Green County and Stingray&apos;s 100
            megawatts, studied load for Apollo&apos;s 900 near San Antonio,
            McLennan&apos;s and Mikeska&apos;s 500 each, and a second
            Stingray phase - 3.2 gigawatts conditionally classed, on top of
            807 operating.<C n={43} /><C n={45} /><C n={46} /> Bratcher
            briefed Tom Green County&apos;s commissioners on September 22:
            300 acres owned with options to 600, a $17 million fee paid
            toward AEP&apos;s Red Creek 345-kilovolt substation, no
            abatement requested, and a promise that &ldquo;you won&apos;t be
            able to hear this data center from the property
            line.&rdquo;<C n={47} /><C n={48} /> The substation&apos;s
            construction is in what the local paper called
            &ldquo;regulatory limbo pending Governor Abbott&apos;s
            large-load audit.&rdquo;<C n={48} /> The audit is due December
            10.
          </p>
          <CipherNumbersFigure />

          <h2>The honest counterweight: the ledger, the parent, and the neighbors</h2>
          <p>
            Three things. First, the ledger. Cipher has never had a
            profitable year. It lost $822.2 million in 2025 and $381.8
            million in the first half of 2026, its fourth-quarter revenue
            missed estimates by a quarter and sent the stock down with 19%
            of the float sold short, its hashrate was cut in half by the
            conversions, its bitcoin holdings fell from 1,433 to 646 in six
            months, and it owes $6 billion on buildings whose rent has
            mostly not yet begun.<C n={29} /><C n={30} /><C n={38} />
            <C n={41} /> Its chief executive was paid $17.3 million for
            2024 and $15.0 million for 2025 at a company that reported 49
            employees for the pay-ratio calculation and a median employee
            at $608,805.<C n={18} /><C n={32} /> Second, the parent.
            Bitfury controlled the company for its first three years and
            sold down from 83% to 15% as the stock rose, in block sales,
            a distribution to its own staff, and open-market sales through
            2025; the board observer agreement it held was terminated in
            July 2025.<C n={9} /><C n={15} /><C n={32} /> The filings say
            the company is no longer controlled. They also say Google
            holds warrants that expire in 2030 and an option to become a
            shareholder of a company whose largest tenant it backstops.
            <C n={19} /><C n={31} /> Third, the neighbors. The Waco Bridge
            reported in May 2026 that the McLennan site is 300 acres at
            Riesel bought seven months earlier, that a page called
            &ldquo;Stop the Riesel Data Center&rdquo; exists, and that a
            county commissioner rated the company&apos;s transparency
            &ldquo;not very good right now.&rdquo;<C n={34} /> Colorado
            City&apos;s well pump failed in July; in September Cipher,
            Fluidstack, and Anthropic put $10 million into a fund to fix
            the town&apos;s water system, and the mayor confirmed the site
            is not a city water customer. Page: &ldquo;Being a good neighbor
            means showing up for the issues that matter most to the
            communities where we operate, even when those issues predate
            us.&rdquo; A reader of the local paper called it &ldquo;the good
            old art of bribery.&rdquo;<C n={44} /><C n={45} /> The other
            side of the counterweight is real: the company asked Tom Green
            County for no abatement, paid its own interconnection, and is
            the only company in this wing whose Texas sites have no
            nuisance suit, no county resolution, and no material litigation
            in its filings.<C n={47} /><C n={31} />
          </p>
          <p>
            The fair reading is that Cipher was never really a Bitcoin
            company so much as a power-contract company that mined while
            it waited for a better tenant, found three, and dropped the
            word when it no longer described the business - and that the
            state has yet to decide whether the three gigawatts it has been
            promised belong on the grid.
          </p>

          <h2>Where does Cipher stand today?</h2>
          <p>
            As of September 30, 2026: 807 megawatts operating at Odessa,
            Black Pearl, and Barber Lake; 3.2 gigawatts conditionally
            classed and awaiting the December 10 audit; $11.4 billion of
            contracted rent against $6.0 billion of debt; about 11.6
            exahash at one mine whose power contract ends in July 2027;
            646 bitcoin; a twenty-year lease signed five days ago; and the
            founder of the Texas Blockchain Council briefing county
            commissioners on its behalf.<C n={46} /><C n={43} />
            <C n={39} /><C n={41} /><C n={49} /><C n={47} /> The other
            companies in the wing are on{" "}
            <Link href="/riot-platforms-bitcoin">Riot Platforms and Texas</Link>,{" "}
            <Link href="/mara-holdings-bitcoin">MARA Holdings and Texas</Link>, and{" "}
            <Link href="/core-scientific-bitcoin">Core Scientific and Texas</Link>;
            the pivot is on{" "}
            <Link href="/texas-bitcoin-miners-ai-pivot">the Texas miners&apos; AI pivot</Link>;
            the sites are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
            This page is the miner that dropped the word, and what it kept.
          </p>
        </div>

        <InstitutionsBlock current="/cipher-mining-bitcoin" />

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
            business updates, presentations, proxy statements, and note
            offering materials; the Legislature&apos;s witness lists;
            ERCOT&apos;s market notices; then CoinDesk, The Block, the Waco
            Bridge, San Angelo LIVE, KLST, Utility Dive, and the trade
            press for the quotes, the county meetings, and the ERCOT
            designations as reported. Megawatts are gross where the company
            reports gross and are attributed where used. This is a research
            and reference article, not financial, investment, or legal
            advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {cipherSources.map((s) => (
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
