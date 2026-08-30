import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

// DISCRETION: sitemap-only, like the Exposure Map. Indexed and in llms.txt,
// but no inbound links from the shell or sibling pages — this page builds
// search authority for the mining map quietly. Outbound links are fine.

const pageUrl = `${site.url}/bitcoin-mining-ercot`;

export const metadata: Metadata = {
  title: "Bitcoin Mining and ERCOT: How the Texas Grid Treats Miners",
  description:
    "How ERCOT actually treats Bitcoin miners — the energy-only market, demand response and ancillary services, 4CP, the Large Flexible Load rules, SB 6's kill switch, and the honest fights over it. The market companion to the Texas mining map.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Bitcoin Mining and ERCOT: How the Texas Grid Treats Miners",
    description:
      "The sourced explainer on miners as flexible load: real-time prices, curtailment economics, the Riot August 2023 numbers, LFL rules, and SB 6.",
    url: pageUrl,
  },
};

const LAST_VERIFIED = "August 30, 2026";

const sources = [
  { id: 1, label: "Husch Blackwell — Integrating Bitcoin Miners into ERCOT: the Large Flexible Load Task Force, first meeting April 14, 2022", url: "https://www.huschblackwell.com/newsandinsights/integrating-bitcoin-miners-into-ercot-critical-issues-come-into-focus-for-large-flexible-load-task-force" },
  { id: 2, label: "McGuireWoods — Crypto-Miners, Large Loads Subject to New Interim Interconnection Process in ERCOT (March 25, 2022 notice)", url: "https://www.mcguirewoods.com/client-resources/alerts/2022/4/crypto-miners-large-loads-subject-new-interim-interconnection-process-ercot/" },
  { id: 3, label: "ERCOT — Large Flexible Load Task Force deck (September 2022): LFL defined at ≥75 MW expected peak demand", url: "https://www.ercot.com/files/docs/2022/09/23/LFLTF%20Deck%20Sept%2026.pdf" },
  { id: 4, label: "U.S. Energy Information Administration — Data centers and cryptocurrency mining in Texas drive strong power demand growth (October 3, 2024): 54 billion kWh LFL forecast for 2025, ~10% of ERCOT consumption; 5,479 MW approved, 26,500 MW in the pipeline", url: "https://www.eia.gov/todayinenergy/detail.php?id=63344" },
  { id: 5, label: "Riot Platforms — August 2023 Production and Operations Update: $31.7M in power and demand-response credits ($24.2M curtailment, $7.4M demand response) vs. 333 BTC mined", url: "https://www.riotplatforms.com/riot-announces-august-2023-production-and-operations-updates/" },
  { id: 6, label: "CNBC — Texas paid Bitcoin miner Riot $31.7 million to shut down during August 2023 heat wave (September 6, 2023)", url: "https://www.cnbc.com/2023/09/06/texas-paid-bitcoin-miner-riot-31point7-million-to-shut-down-in-august.html" },
  { id: 7, label: "Hashrate Index — Bitcoin Mining and Demand Response: why mining fleets fit ERCOT's flexibility programs (curtailment speed, ancillary services, 4CP)", url: "https://hashrateindex.com/blog/bitcoin-mining-and-demand-response-why-mining-fleets-are-well-suited-for-ercots-flexibility-programs/" },
  { id: 8, label: "Texas Legislature Online — SB 6 (89R) bill history: signed June 20, 2025, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB6" },
  { id: 9, label: "Utility Dive — Texas law gives grid operator power to disconnect data centers during crisis (SB 6's remote-disconnection authority)", url: "https://www.utilitydive.com/news/texas-law-gives-grid-operator-power-to-disconnect-data-centers-during-crisi/751587/" },
  { id: 10, label: "Pillsbury — Texas SB 6 establishes new transmission fees and interconnection standards for large load customers and co-located loads", url: "https://www.pillsburylaw.com/en/news-and-insights/texas-sb6-transmission-fees-interconnected-standards-large-load-customers-colocated-loads.html" },
  { id: 11, label: "Texas Legislature Online — SB 1751 (88R) bill history: passed the Senate April 2023, died in House committee", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1751" },
  { id: 12, label: "Office of the Texas Governor — Governor Abbott Directs PUC and ERCOT to Shield Texans From Data Center Infrastructure Costs (June 10, 2026)", url: "https://gov.texas.gov/news/post/governor-abbott-directs-puc-and-ercot-to-shield-texans-from-data-center-infrastructure-costs" },
  { id: 13, label: "CryptoSlate — Bitcoin miners saved the Texas power grid, but the pivot to AI is stripping away the emergency brake (on the flexibility trade-off as miners convert capacity to AI compute)", url: "https://cryptoslate.com/bitcoin-miners-saved-the-texas-power-grid-from-collapse-but-their-lucrative-pivot-to-ai-is-stripping-away-the-emergency-brake/" },
];

const faqs = [
  {
    q: "How does ERCOT treat Bitcoin miners?",
    a: "As large flexible loads. ERCOT classifies facilities with an expected peak demand of 75 megawatts or more as Large Flexible Loads, runs them through a dedicated interconnection process created in March 2022, and integrates them through demand-response and ancillary-service programs that pay them to curtail. Since Senate Bill 6 (June 2025), new large loads also face firm financial commitments and an ERCOT-controlled disconnection switch for grid emergencies.",
  },
  {
    q: "Why do Bitcoin miners get paid to shut down in Texas?",
    a: "Because flexibility is a service the grid buys. In ERCOT's energy-only market, miners curtail when real-time prices spike, and they sell that responsiveness through demand-response and ancillary-service programs. In August 2023, Riot Platforms earned $31.7 million in power and demand-response credits during the heat wave — more than triple the value of the 333 Bitcoin it mined that month.",
  },
  {
    q: "How much power does Bitcoin mining use in Texas?",
    a: "Large flexible loads — primarily cryptocurrency miners, plus data centers — were forecast by the U.S. Energy Information Administration to consume about 54 billion kWh in 2025, roughly 10% of all electricity used on the ERCOT grid. Approved large-load capacity stood at 5,479 MW in late 2024, with about 26,500 MW more in the application pipeline.",
  },
  {
    q: "What is 4CP and why do miners care?",
    a: "Four Coincident Peak: ERCOT allocates transmission costs to large consumers based on their usage during the single highest 15-minute demand interval in each of June, July, August, and September. A miner that powers down during those four peaks avoids a year of transmission charges — one more reason mining load reliably disappears exactly when the Texas grid is most stressed.",
  },
  {
    q: "Can ERCOT turn off Bitcoin mines?",
    a: "For new facilities, yes. Senate Bill 6, signed June 20, 2025 and effective immediately, requires large loads interconnecting after December 31, 2025 to install equipment letting ERCOT remotely disconnect them during grid emergencies, with 24-hour notice provisions. Existing mines participate through voluntary curtailment programs rather than a mandatory switch.",
  },
  {
    q: "Did Texas try to limit Bitcoin miners' grid payments?",
    a: "Once, and it failed. Senate Bill 1751 (2023) would have capped miners' share of ERCOT demand-response programs at 10% and rolled back tax abatements. It passed the Texas Senate 30–1 in April 2023 but died in a House committee that May. The scrutiny returned in different form: SB 6 (2025) and Governor Abbott's June 2026 ratepayer directive regulate all large loads, miners included.",
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

export default function ErcotMiningPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bitcoin Mining and ERCOT: How the Texas Grid Treats Miners",
    description:
      "How ERCOT treats Bitcoin miners — the energy-only market, demand response, 4CP, Large Flexible Load rules, and SB 6's kill switch.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
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
        name: "Bitcoin Mining and ERCOT",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="mx-auto max-w-4xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / Bitcoin Mining and ERCOT
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · Energy &amp; the grid
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Bitcoin mining and ERCOT, in one page
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The market companion to{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas mining map</Link>:
            how the grid operator actually treats the mines – the energy-only
            market that made Texas the destination, the programs that pay
            miners to disappear, the rules that now bind them, and the honest
            fights over all of it.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 30, 2026 · Updated {LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            ERCOT, the Texas grid operator, treats Bitcoin miners as Large
            Flexible Loads – facilities of 75 megawatts or more that can shut
            off almost instantly. Miners buy cheap power in ERCOT&apos;s
            energy-only market, curtail when prices spike, and earn payments
            through demand-response and ancillary-service programs for doing
            so. Since Senate Bill 6 (signed June 20, 2025), new large loads
            must also accept remote disconnection by ERCOT during grid
            emergencies.
          </p>
        </div>

        {/* Key facts */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              ERCOT created a dedicated interim interconnection process for
              crypto miners and other large loads on March 25, 2022, and its
              Large Flexible Load Task Force first met April 14, 2022.
              <C n={2} /><C n={1} />
            </li>
            <li>
              ERCOT defines a Large Flexible Load as a facility with an
              expected peak demand of 75 MW or more.<C n={3} />
            </li>
            <li>
              The U.S. Energy Information Administration forecast large
              flexible loads – primarily crypto miners – would consume about
              54 billion kWh in 2025, roughly 10% of ERCOT consumption.
              <C n={4} />
            </li>
            <li>
              In August 2023, Riot Platforms earned $31.7 million in power and
              demand-response credits for curtailing during the heat wave –
              versus about $8.9 million worth of Bitcoin mined that month.
              <C n={5} /><C n={6} />
            </li>
            <li>
              Senate Bill 6 was signed June 20, 2025, effective immediately –
              the same day as SB 21, the reserve law – imposing financial
              commitments, disclosure, and an ERCOT-controlled disconnection
              switch on new large loads.<C n={8} /><C n={9} />
            </li>
            <li>
              Senate Bill 1751, which would have capped miners at 10% of
              ERCOT demand-response programs, passed the Senate 30–1 in April
              2023 and died in a House committee.<C n={11} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-12">
          <h2>Why did Bitcoin mining move to the ERCOT grid?</h2>
          <p>
            Because ERCOT runs the only major <strong>energy-only
            market</strong> in the country: generators are paid for the power
            they actually sell, prices float in real time, and scarcity –
            not a capacity auction – does the signaling. That design produces
            some of the cheapest around-the-clock power in America
            punctuated by short, violent price spikes, and it is close to a
            purpose-built habitat for a load with Bitcoin mining&apos;s one
            strange property: it can stop. A mining fleet can curtail to near
            zero in seconds, with no minimum runtime and no restart penalty –
            faster than almost any industrial load on the grid.<C n={7} />{" "}
            Cheap power when the grid is long, instant retreat when it is
            short. The migration that followed – Rockdale, Corsicana, the
            West Texas wind belt – is mapped on{" "}
            <Link href="/bitcoin-mining-map-texas">the mining map</Link> and
            told in{" "}
            <Link href="/history-of-bitcoin-in-texas">the history</Link>.
          </p>

          <h2>What is demand response, and how do miners get paid to turn off?</h2>
          <p>
            <strong>Demand response</strong> – programs that pay large
            electricity consumers to power down when the grid is stressed –
            is the formal version of what miners already do for free. The
            economics come in layers. First, self-interest: when real-time
            prices climb past the value of the Bitcoin a machine would mine,
            shutting off is simply the better trade. Second, contracted
            flexibility: miners sell their responsiveness into ERCOT&apos;s
            ancillary-service and demand-response programs, where the grid
            pays for standby curtailment the way it pays generators for
            standby capacity.<C n={7} /> Third, power-contract credits: a
            miner with fixed-price power can sell energy back into a spiking
            market rather than consume it. August 2023 showed the full stack
            at once: during the record heat wave,{" "}
            <strong>Riot Platforms</strong> collected $24.2 million in power
            credits and $7.4 million in demand-response payments –{" "}
            <strong>$31.7 million total</strong>, against 333 mined Bitcoin
            worth roughly $8.9 million.<C n={5} /><C n={6} /> For that month,
            the flexibility was worth more than triple the hashrate.
          </p>

          <h2>What is 4CP?</h2>
          <p>
            <strong>Four Coincident Peak</strong> – the mechanism ERCOT uses
            to allocate transmission costs. A large consumer&apos;s share of
            the grid&apos;s wires bill is set by its usage during the single
            highest 15-minute demand interval in each of June, July, August,
            and September.<C n={7} /> Guess the peak right and power down
            through it, and a facility avoids a year of transmission charges.
            Miners, who can shut off for an hour at negligible cost, are the
            best 4CP players on the grid – which means mining load reliably
            vanishes at the exact moments Texas demand crests. Critics call
            it cost-shifting; the market calls it the incentive working. Both
            descriptions are true, which is why 4CP reform is a perennial
            regulatory conversation.
          </p>

          <h2>How big is mining load on the Texas grid?</h2>
          <p>
            Big enough that ERCOT built institutions for it. The{" "}
            <strong>interim large-load interconnection process</strong>{" "}
            (March 2022) and the <strong>Large Flexible Load Task
            Force</strong> (first meeting April 14, 2022) exist substantially
            because crypto miners were arriving faster than the study process
            could handle.<C n={2} /><C n={1} /> ERCOT defines the class at{" "}
            <strong>75 MW or more of expected peak demand</strong><C n={3} /> –
            a single modern mine can draw what a small city does. By late
            2024, the EIA counted <strong>5,479 MW</strong> of approved
            large-flexible-load capacity, expected to reach ~9,500 MW by the
            end of 2025, with roughly <strong>26,500 MW</strong> more in the
            application pipeline, and forecast the class – primarily
            cryptocurrency miners – to consume about{" "}
            <strong>54 billion kWh in 2025, near 10% of everything ERCOT
            serves</strong>.<C n={4} /> Those are forecasts, not meters, and
            the pipeline always overstates what gets built – but the order of
            magnitude is the point.
          </p>

          <h2>What rules govern miners on ERCOT now?</h2>
          <p>
            The frontier era ended in June 2025. <strong>Senate Bill 6</strong>,
            signed June 20, 2025 and effective immediately – the same day
            Governor Abbott signed SB 21, the{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              Strategic Bitcoin Reserve
            </Link>{" "}
            law – rebuilt the rules for every large load on the grid, mines
            included.<C n={8} /> New interconnections after December 31, 2025
            face upfront financial commitments, proof of site control,
            disclosure of backup generation, new transmission-fee treatment,
            and the provision that made headlines: equipment letting ERCOT{" "}
            <strong>remotely disconnect the facility</strong> during grid
            emergencies, with 24-hour notice provisions.<C n={9} /><C n={10} />{" "}
            A year later, Governor Abbott&apos;s{" "}
            <strong>June 10, 2026 directive</strong> ordered the PUC and
            ERCOT to make data centers – the category that includes
            industrial-scale mines – fully fund their own infrastructure
            costs rather than pass them to residential ratepayers.<C n={12} />{" "}
            Texas did not stop welcoming the mines; it started charging them
            rent. The fuller legal arc lives on{" "}
            <Link href="/texas-bitcoin-law-timeline">the law timeline</Link>{" "}
            and{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law says about Bitcoin
            </Link>
            .
          </p>

          <h2>The honest counterweight</h2>
          <p>
            Two, kept in full view. First, the political one:{" "}
            <strong>Senate Bill 1751</strong> (2023) would have capped
            miners&apos; share of demand-response programs at 10% and rolled
            back their tax abatements – and it passed the Texas Senate
            30–1 before dying in a House committee.<C n={11} /> The upper
            chamber&apos;s message was that paying miners to turn off sits
            uneasily with voters who remember blackouts, and that argument
            has not gone away; it resurfaced, generalized to all large loads,
            in SB 6 and the 2026 ratepayer directive. Second, the structural
            one: the flexibility case for mining only holds{" "}
            <strong>while the load stays flexible</strong>. As miners convert
            capacity to AI and high-performance computing – tenants who pay
            more and tolerate zero downtime – the megawatts stay but the
            willingness to curtail goes with the ASICs.<C n={13} /> The
            emergency brake Texas bought with its mining boom is only as
            large as the fleet still running Bitcoin workloads. That tension
            – miner economics pulling toward AI, grid economics prizing the
            off switch – is the next chapter of this story, and this page
            will keep tracking it.
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
            Primary record first: ERCOT, the Texas Legislature, the Governor&apos;s
            office, company filings and releases, and the U.S. Energy
            Information Administration, then trade and legal analysis. This is
            a research and reference article, not financial, investment, or
            legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {sources.map((s) => (
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
