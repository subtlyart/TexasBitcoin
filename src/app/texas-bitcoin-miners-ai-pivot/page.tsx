import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

// DISCRETION: sitemap-only, like the Exposure Map, /bitcoin-mining-ercot,
// /bitcoin-estate-planning-texas, and /texas-gold-vs-bitcoin. Indexed and in
// llms.txt, no inbound links from the shell or sibling pages.

const pageUrl = `${site.url}/texas-bitcoin-miners-ai-pivot`;

export const metadata: Metadata = {
  title: "The Second Life of the Texas Mines: Bitcoin's AI Pivot",
  description:
    "Why Texas Bitcoin miners are converting to AI data centers — Riot's $9.1B Rockdale lease, Galaxy Helios, Core Scientific Denton, Cipher, Hut 8 — what powered land is now worth, and what the grid loses when the most flexible load stops flexing. The sourced longform.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Second Life of the Texas Mines: Bitcoin's AI Pivot",
    description:
      "The mines were never the asset. The interconnection was. The sourced account of the miners-to-AI conversion remaking the Texas grid map.",
    url: pageUrl,
  },
};

const LAST_VERIFIED = "August 30, 2026";

const sources = [
  { id: 1, label: "Riot Platforms — Q2 2026 results (August 10, 2026): 20-year, 191 MW data center lease at Rockdale with \"one of the world's leading frontier AI labs\" — $9.1B initial term through June 2048, up to ~$16.1B with extensions; AMD as second tenant (50 MW contracted); 1,587 BTC still mined in Q2", url: "https://www.riotplatforms.com/riot-platforms-reports-second-quarter-2026-financial-results-and-strategic-highlights/" },
  { id: 2, label: "Blockspace — Riot signs $9.1B AI lease at Rockdale and an LOI covering the full 1 GW Corsicana site; analysts (KBW) identify the frontier-lab tenant as Anthropic", url: "https://blockspace.media/insight/riot-corsicana-loi-756mw-ai-data-center/" },
  { id: 3, label: "Riot Platforms — January 2025 Production and Operations Update (SEC exhibit): Corsicana mining expansion halted to evaluate AI/HPC for the remaining 600 MW", url: "https://www.sec.gov/Archives/edgar/data/1167419/000155837025000282/riot-20250121xex99d1.htm" },
  { id: 4, label: "CoStar — Core Scientific converts its Denton Bitcoin campus into a $6.1 billion high-performance computing hub for CoreWeave", url: "https://www.costar.com/article/394849102/core-scientific-converts-texas-bitcoin-campus-to-61-billion-data-center-hub-as-ai-industry-surges" },
  { id: 5, label: "CNBC — Core Scientific shareholders reject CoreWeave's $9 billion all-stock acquisition; deal terminated (October 30, 2025)", url: "https://www.cnbc.com/2025/10/30/core-scientific-shareholders-reject-9-billion-coreweave-offer-deal-terminated.html" },
  { id: 6, label: "The Block — Galaxy delivers its first 133 MW of critical IT load to CoreWeave as the Helios Bitcoin mine turns AI hub under a 15-year, 526 MW lease (July 2026)", url: "https://www.theblock.co/post/407396/galaxy-delivers-133-mw-of-critical-it-load-to-coreweave-as-helios-bitcoin-mine-turns-ai-hub" },
  { id: 7, label: "Data Center Dynamics — Cipher's Black Pearl site (Winkler County): online mining Bitcoin in 2025, now leased to Amazon for AI infrastructure", url: "https://www.datacenterdynamics.com/en/news/cipher-mining-launches-150mw-black-pearl-bitcoin-mining-site-in-texas/" },
  { id: 8, label: "Cipher Mining — Form 8-K: Barber Lake (Mitchell County), 300 MW built straight for AI, leased to Fluidstack for ~$3B with a Google backstop", url: "https://www.sec.gov/Archives/edgar/data/1819989/000095010325012168/dp234624_8k.htm" },
  { id: 9, label: "Hut 8 — Beacon Point (Nueces County): 1 GW purpose-built AI campus fully contracted across two 15-year, 352 MW leases, $19.6B base-term value", url: "https://www.prnewswire.com/news-releases/hut-8-fully-commercializes-1-gw-beacon-point-ai-data-center-campus-with-second-352-mw-it-lease-bringing-campus-level-base-term-contract-value-to-19-6-billion-302829514.html" },
  { id: 10, label: "MARA (8-K via StockTitan) — agreement with HIF for a Matagorda County powered-land site, up to 2 GW, milestone payments up to $600M (July 2026)", url: "https://www.stocktitan.net/news/MARA/mara-signs-agreement-with-hif-to-acquire-strategic-powered-land-site-nqvuby8e4d46.html" },
  { id: 11, label: "Bitdeer — September 2025 Production and Operations Update: AI/HPC conversion pipeline including the Rockdale campus", url: "https://ir.bitdeer.com/news-releases/news-release-details/bitdeer-announces-september-2025-production-and-operations" },
  { id: 12, label: "The Block — Texas orders an audit of every data center in ERCOT's interconnection queue; \"Batch Zero\" paused, queue ~474 GW, ~90% data centers (August 4, 2026)", url: "https://www.theblock.co/news/ecosystems/2026-08-04-bernstein-texas-data-center-audit-410545" },
  { id: 13, label: "Texas Standard — the Abilene megasite: Lancium's campus, originally planned around Bitcoin mining, became the Crusoe-built flagship of OpenAI's Stargate project", url: "https://texasstandard.org/stories/abilene-texas-ai-artificial-intelligence-data-center-lancium-crusoe-clean-compute-campus/" },
  { id: 14, label: "CryptoSlate — Bitcoin miners saved the Texas grid, but the pivot to AI is stripping away the emergency brake (the flexibility trade-off)", url: "https://cryptoslate.com/bitcoin-miners-saved-the-texas-power-grid-from-collapse-but-their-lucrative-pivot-to-ai-is-stripping-away-the-emergency-brake/" },
  { id: 15, label: "CNBC — Texas paid Riot $31.7 million to curtail during the August 2023 heat wave: the flexibility value the AI era puts at risk", url: "https://www.cnbc.com/2023/09/06/texas-paid-bitcoin-miner-riot-31point7-million-to-shut-down-in-august.html" },
];

const faqs = [
  {
    q: "Why are Bitcoin miners becoming AI data centers?",
    a: "Because the scarce asset in the AI buildout is energized grid capacity, and miners already hold it. A Texas Bitcoin mine is powered land: an approved interconnection, substations, transformers, and cooling on cheap power. AI tenants pay far more per megawatt for that infrastructure than mining earns — Riot's 191 MW Rockdale lease alone is worth $9.1 billion over 20 years, signed August 2026 — so miners are converting or leasing capacity to AI at every major Texas site.",
  },
  {
    q: "Is Riot's Rockdale mine becoming an AI data center?",
    a: "Partly, and the part is enormous. In January 2026 Riot signed AMD as Rockdale's first data-center tenant (50 MW contracted), and on August 10, 2026 it announced a 20-year, 191 MW lease with an unnamed \"leading frontier AI lab\" — $9.1 billion over the initial term, up to $16.1 billion with extensions, with full delivery by June 2028. Riot still mined 1,587 Bitcoin in Q2 2026; the campus is becoming both.",
  },
  {
    q: "Which Texas Bitcoin mines have pivoted to AI?",
    a: "The roll call spans every major operator: Core Scientific's Denton campus ($6.1B CoreWeave conversion), Galaxy's Helios in Dickens County (15-year, 526 MW CoreWeave lease, first 133 MW live July 2026), Cipher's Black Pearl (leased to Amazon) and purpose-built Barber Lake (~$3B Fluidstack deal, Google backstop), Riot's Rockdale (AMD plus a frontier AI lab) and Corsicana (full-campus LOI), Hut 8's purpose-built Beacon Point ($19.6B contracted), and Bitdeer's Rockdale conversion pipeline.",
  },
  {
    q: "Did CoreWeave buy Core Scientific?",
    a: "No — it tried twice and failed twice. Core Scientific rejected an all-cash offer in June 2024, and on October 30, 2025 its shareholders voted down CoreWeave's $9 billion all-stock acquisition, terminating the deal. Core Scientific continues independently on Nasdaq — a signal that the market now prices former Bitcoin mining companies as data-center platforms too valuable to sell.",
  },
  {
    q: "What does the AI pivot mean for the Texas grid?",
    a: "A trade of flexibility for firmness. Bitcoin mines curtail in seconds and earned their keep as ERCOT's emergency brake — Riot alone collected $31.7 million for curtailing in August 2023. AI tenants pay more but tolerate near-zero downtime, so converted megawatts stop flexing. Texas is responding structurally: SB 6's remote-disconnection requirements and the August 2026 audit of a ~474 GW interconnection queue that is roughly 90% data centers.",
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

export default function AiPivotPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Second Life of the Texas Mines: Bitcoin's AI Pivot",
    description:
      "Why Texas Bitcoin miners are converting to AI data centers, deal by deal — and what the grid loses when the most flexible load stops flexing.",
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
        name: "The Second Life of the Texas Mines",
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
          / The Second Life of the Texas Mines
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Longform · Energy &amp; the grid
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The second life of the Texas mines
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Rockdale&apos;s story ran smelter, then mine. It now has a third
            act – and so does nearly every gigasite on{" "}
            <Link href="/bitcoin-mining-map-texas">the mining map</Link>. The
            sourced account of the miners-to-AI conversion: the deals, the
            reason powered land became the prize, and the honest question of
            what the grid loses when its most flexible load stops flexing.
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
            Texas Bitcoin miners are converting their sites into AI data
            centers because the scarce asset of the AI era is energized grid
            capacity, which miners already hold. Every major Texas operator
            has now signed AI deals – Riot&apos;s $9.1 billion, 20-year
            Rockdale lease (August 2026), Galaxy&apos;s 526 MW CoreWeave
            lease at Helios, Core Scientific&apos;s $6.1 billion Denton
            conversion, Cipher&apos;s Amazon and Fluidstack leases, Hut
            8&apos;s $19.6 billion Beacon Point – trading Bitcoin
            mining&apos;s flexible, interruptible economics for AI
            tenancy&apos;s firm, long-term rent.
          </p>
        </div>

        {/* Key facts */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              On August 10, 2026, Riot announced a 20-year, 191 MW data
              center lease at Rockdale with &ldquo;one of the world&apos;s
              leading frontier AI labs&rdquo; – $9.1 billion over the
              initial term, up to ~$16.1 billion with extensions.<C n={1} />
            </li>
            <li>
              AMD became Rockdale&apos;s first data-center tenant in January
              2026, with 50 MW contracted.<C n={1} />
            </li>
            <li>
              Galaxy delivered its first 133 MW to CoreWeave at the former
              Helios Bitcoin mine in July 2026, under a 15-year, 526 MW
              lease.<C n={6} />
            </li>
            <li>
              Core Scientific converted its Denton Bitcoin campus into a
              $6.1 billion CoreWeave computing hub – then its shareholders
              rejected CoreWeave&apos;s $9 billion acquisition on October 30,
              2025.<C n={4} /><C n={5} />
            </li>
            <li>
              Hut 8 fully contracted its purpose-built 1 GW Beacon Point AI
              campus at $19.6 billion in base-term value – capacity developed
              with a miner&apos;s playbook that never mined a block.<C n={9} />
            </li>
            <li>
              ERCOT&apos;s interconnection queue reached roughly 474 GW –
              about 90% of it data centers – prompting Texas to order an
              audit and pause &ldquo;Batch Zero&rdquo; in August 2026.
              <C n={12} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-12">
          <h2>What is actually happening to the Texas mines?</h2>
          <p>
            The largest repricing of industrial land in modern Texas, running
            through the Bitcoin industry&apos;s balance sheets. Between 2019
            and 2024, miners did something nobody else bothered to do: they
            secured grid interconnections in places nobody wanted them,
            energized gigawatts of capacity on cheap power, and built the
            substations, switchyards, and cooling to run computers at
            industrial scale. Then frontier AI arrived needing exactly that –
            immediately, in quantities the normal development cycle cannot
            deliver. A hyperscaler starting from raw land faces years in an
            interconnection queue that reached roughly{" "}
            <strong>474 gigawatts</strong> by mid-2026, so congested that
            Texas ordered an audit of every data center in it.<C n={12} /> A
            miner already through the queue holds the one asset money cannot
            quickly buy. The result, visible across{" "}
            <Link href="/bitcoin-mining-map-texas">the mining map</Link>: the
            mines were never the asset. The interconnection was.
          </p>

          <h2>Rockdale&apos;s third act</h2>
          <p>
            No site tells it better than the town where Texas mining began.{" "}
            <Link href="/rockdale-texas-bitcoin">Rockdale&apos;s</Link> arc
            already ran once from smelter to mine: Alcoa&apos;s shuttered
            aluminum works left behind stranded power infrastructure, and
            Whinstone – later Riot – built North America&apos;s largest
            Bitcoin mine on the grounds. The third act began in{" "}
            <strong>January 2026</strong>, when Riot signed <strong>AMD</strong>{" "}
            as Rockdale&apos;s first data-center tenant, and arrived in full
            on <strong>August 10, 2026</strong>: a{" "}
            <strong>20-year lease for 191 MW of critical IT capacity</strong>{" "}
            with an unnamed &ldquo;leading frontier AI lab,&rdquo; worth{" "}
            <strong>$9.1 billion</strong> over the initial term through June
            2048 – up to $16.1 billion if extensions are exercised – with
            the first 96 MW due by December 2027.<C n={1} /> (Analyst notes
            identify the tenant as Anthropic; Riot&apos;s filings do not name
            it.<C n={2} />) The same week, reporting put Riot&apos;s entire
            1 GW <strong>Corsicana</strong> campus – where mining expansion
            was halted back in January 2025 to evaluate AI uses – under a
            letter of intent to a single tenant.<C n={2} /><C n={3} /> The
            same land has now anchored three successive American industries:
            aluminum, Bitcoin, and frontier AI, each drawn by the same thing –
            power that is already there.
          </p>

          <h2>The deal ledger</h2>
          <p>
            The pattern is industry-wide, and the numbers deserve to sit in
            one place. <strong>Core Scientific Denton</strong> wrote the
            template: a city-partnered Bitcoin campus converted into a{" "}
            <strong>$6.1 billion</strong> high-performance computing hub for
            CoreWeave.<C n={4} /> CoreWeave then tried to buy the whole
            company – twice – and on <strong>October 30, 2025</strong> Core
            Scientific&apos;s shareholders voted down the $9 billion
            all-stock deal, choosing to stay independent.<C n={5} /> The
            market had started pricing a former Bitcoin miner as a
            data-center platform too valuable to sell.{" "}
            <strong>Galaxy Helios</strong> in Dickens County, bought out of
            Argo&apos;s distress for $65 million in 2022, delivered its
            first <strong>133 MW to CoreWeave in July 2026</strong> under a
            15-year, 526 MW lease.<C n={6} /> <strong>Cipher</strong> runs the
            pivot at both speeds: Black Pearl came online mining in 2025 and
            was promptly leased to <strong>Amazon</strong>,<C n={7} /> while{" "}
            <strong>Barber Lake</strong> skipped mining entirely – 300 MW
            built straight for AI, leased to Fluidstack for roughly{" "}
            <strong>$3 billion with Google backstopping</strong> the deal.
            <C n={8} /> <strong>Hut 8</strong> went furthest:{" "}
            <strong>Beacon Point</strong>, a purpose-built 1 GW campus fully
            contracted across two 15-year leases at{" "}
            <strong>$19.6 billion</strong> in base-term value, developed with
            a miner&apos;s energy playbook and no intention of ever hashing.
            <C n={9} /> <strong>MARA</strong> is assembling the next one – up
            to 2 GW of powered land in Matagorda County<C n={10} /> – and{" "}
            <strong>Bitdeer</strong> has its original Rockdale campus in an
            AI/HPC conversion pipeline.<C n={11} /> Every operator on the
            map, without exception, is now in the powered-land business.
          </p>

          <h2>The lineage runs deeper than the miners</h2>
          <p>
            Even the flagship of the national AI buildout carries Bitcoin
            mining in its ancestry. The Abilene megasite that became{" "}
            <strong>Stargate&apos;s</strong> first campus – the
            OpenAI–Oracle–SoftBank project announced from the White House in
            January 2025 – began as <strong>Lancium&apos;s</strong> clean
            campus, originally planned around Bitcoin mining on cheap West
            Texas renewables; <strong>Crusoe</strong>, the developer that
            built it, started life mitigating gas flares with Bitcoin mining
            as the first workload.<C n={13} /> The through-line is the thesis
            this site has tracked from the start: Bitcoin mining was the
            first industry willing to go where the power was and monetize it
            instantly, and in doing so it scouted, energized, and de-risked
            the sites the AI era is now bidding for. The scouts got there
            first. The settlers pay rent.
          </p>

          <h2>The honest counterweight: what the grid loses</h2>
          <p>
            Every converted megawatt changes character. A Bitcoin mine is
            the most flexible industrial load ERCOT has ever had – able to
            curtail to near zero in seconds, and paid well for it:{" "}
            <Link href="/bitcoin-mining-ercot">
              the grid&apos;s demand-response machinery
            </Link>{" "}
            once handed Riot <strong>$31.7 million in a single August</strong>{" "}
            for powering down through a heat wave.<C n={15} /> An AI tenant
            signs a 20-year lease precisely because its workloads cannot
            stop; the megawatts stay, but the off switch – the emergency
            brake miners handed the grid – goes with the ASICs.<C n={14} />{" "}
            Texas saw this coming from both directions: SB 6 now requires new
            large loads to accept remote disconnection during emergencies,
            and the August 2026 queue audit exists to sort real gigawatts
            from speculative ones.<C n={12} /> Nor is the hashrate simply
            vanishing – Riot mined 1,587 Bitcoin in Q2 2026 even as it signed
            the AI leases, and mining remains the highest-value use for
            capacity AI tenants have not claimed.<C n={1} /> But the honest
            reading of the ledger above is that the marginal Texas megawatt
            has a new highest bidder, and the flexibility Texas bought with
            its mining boom is now a diminishing asset – one the 90th
            Legislature, and every ERCOT summer, will be pricing from here.
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
            Primary record first: company releases and SEC filings, ERCOT and
            state actions, then trade press and analysis. This is a research
            and reference article, not financial, investment, or legal
            advice.
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
