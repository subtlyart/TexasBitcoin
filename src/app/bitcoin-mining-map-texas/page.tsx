import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  MAP_LAST_VERIFIED,
  STATUS_LABELS,
  developedMw,
  miningSites,
  miningSources,
} from "@/lib/mining-sites";
import { MiningMap } from "@/components/mining-map";
import { SeamMark } from "@/components/seam-mark";

export const metadata: Metadata = {
  title: "Texas Bitcoin Mining Map — Every Major Mine",
  description:
    "The interactive, sourced map of industrial Bitcoin mining in Texas — Riot Rockdale, Corsicana, MARA Granbury, and the West Texas sites now turning to AI.",
  alternates: { canonical: `${site.url}/bitcoin-mining-map-texas` },
  openGraph: {
    type: "article",
    title: "Texas Bitcoin Mining Map",
    description:
      "Every major Bitcoin mine in Texas, mapped and sourced — from Rockdale's 700 MW flagship to the former mines becoming AI data centers.",
    url: `${site.url}/bitcoin-mining-map-texas`,
  },
};

const faqs = [
  {
    q: "What is the largest Bitcoin mine in Texas?",
    a: "Riot's Rockdale facility in Milam County is the largest Bitcoin mine in Texas, with 700 MW of developed capacity — the largest single Bitcoin mining facility in North America. It was built by Whinstone on the site of Alcoa's former aluminum smelter and acquired by Riot in May 2021 for roughly $651 million.",
  },
  {
    q: "Where are Bitcoin mines located in Texas?",
    a: "Texas Bitcoin mines cluster in two zones: central Texas industrial towns like Rockdale (Riot, Bitdeer), Corsicana (Riot), Granbury (MARA), and Denton (Core Scientific), and the wind- and gas-rich west — Odessa and Wink (Cipher), McCamey (Hut 8), and Dickens County (Galaxy Helios).",
  },
  {
    q: "Why are Texas Bitcoin mines becoming AI data centers?",
    a: "Because miners already hold what AI needs most: hundreds of megawatts of grid-approved power. Galaxy's Helios campus signed a 15-year CoreWeave lease and delivered its first 133 MW in July 2026, Core Scientific is converting Denton in a $6.1 billion buildout, and Cipher leased its new Black Pearl site to Amazon.",
  },
  {
    q: "Why is so much Bitcoin mining in West Texas?",
    a: "West Texas has abundant wind and solar generation, cheap land, and transmission that often carries more power than local demand can absorb. Miners act as flexible buyers of that stranded energy — Hut 8's 280 MW King Mountain site sits directly beside a wind farm — and power down when the grid needs the electrons back.",
  },
  {
    q: "Do Bitcoin mines strain the Texas grid?",
    a: "Large miners enroll with ERCOT as interruptible load and are paid to shut off during scarcity. In August 2023, Riot earned $31.7 million in power credits for curtailing during the heat wave. The real local friction has been noise, not power: MARA's Granbury mine faces nuisance lawsuits from neighbors over its cooling fans.",
  },
  {
    q: "What is the Texas data-center queue freeze?",
    a: "On August 4, 2026, Governor Abbott directed the Public Utility Commission and ERCOT to audit every data-center project in the state's interconnection queue, and ERCOT paused its 'Batch Zero' classification of large new loads. Data-center requests had reached roughly 90% of a 474 GW queue. The practical effect is to make already-approved power — including the Bitcoin miners' — more valuable.",
  },
];

function C({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#ms${n}`} aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

export default function MiningMapPage() {
  const pageUrl = `${site.url}/bitcoin-mining-map-texas`;

  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Texas Bitcoin Mining Map",
    description:
      "Sourced dataset of major industrial Bitcoin mining facilities in Texas: operator, location, capacity, year online, and current status including AI/HPC conversions.",
    url: pageUrl,
    creator: { "@type": "Organization", name: site.name, url: site.url },
    license: "https://creativecommons.org/licenses/by/4.0/",
    temporalCoverage: "2019/2026",
    spatialCoverage: { "@type": "Place", name: "Texas, United States" },
    variableMeasured: [
      "operator",
      "location",
      "capacity (MW)",
      "year online",
      "status",
    ],
    dateModified: "2026-08-30",
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Texas Bitcoin Mining Map — Every Major Mine, Mapped",
    description:
      "The interactive, sourced map of industrial Bitcoin mining in Texas, from Rockdale's 700 MW flagship to the former mines becoming AI data centers.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-07-22",
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
        name: "Texas Bitcoin Mining Map",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {[datasetJsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd].map(
        (schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )
      )}

      <article className="mx-auto max-w-4xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / Texas Bitcoin Mining Map
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Data asset · Interactive
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Texas Bitcoin Mining Map
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every major industrial Bitcoin mine in Texas — where it is, how big
            it is, when it switched on, and what it&apos;s becoming. Drag the
            timeline and watch the buildout since 2019.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published July 22, 2026 · Updated{" "}
            {MAP_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Texas hosts the largest concentration of industrial Bitcoin mining
            in the United States. The biggest sites are Riot&apos;s 700 MW
            Rockdale facility in Milam County — the largest in North America —
            Riot&apos;s Corsicana campus, MARA&apos;s Granbury mine, and Hut
            8&apos;s 280 MW King Mountain site. Several former Bitcoin mines,
            led by Galaxy&apos;s Helios campus, are now converting to AI data
            centers, and the same operators are building AI-native campuses like
            Hut 8&apos;s 1 GW Beacon Point beside them.
          </p>
        </div>

        {/* Key facts */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Riot&apos;s Rockdale facility has 700 MW of developed capacity —
              the largest single Bitcoin mining facility in North America.
              <C n={1} />
            </li>
            <li>
              Riot&apos;s Corsicana campus has a full gigawatt approved by
              ERCOT, with 400 MW mining Bitcoin and the remaining 600 MW under
              AI/HPC evaluation since 2025.<C n={2} />
            </li>
            <li>
              On July 6, 2026, Galaxy delivered the first 133 MW of its former
              Helios Bitcoin mine to CoreWeave under a 15-year, 526 MW AI
              lease.<C n={11} />
            </li>
            <li>
              MARA bought its Granbury mine in January 2024 as part of a $178.6
              million, 390 MW two-site acquisition from Generate Capital.
              <C n={6} />
            </li>
            <li>
              In August 2023, ERCOT paid Riot $31.7 million in power credits to
              curtail mining during the Texas heat wave.<C n={17} />
            </li>
            <li>
              By August 2026, ERCOT&apos;s interconnection queue had reached
              about 474 GW — roughly 90% data centers — and the state ordered an
              audit that paused new large-load classifications.<C n={20} />
            </li>
          </ul>
        </div>

        {/* The map */}
        <div className="mt-10">
          <MiningMap />
        </div>

        <div className="prose-tx mt-10">
          <h2>What does this map show?</h2>
          <p>
            This map tracks {miningSites.length} of the most consequential
            industrial sites in Texas&apos;s Bitcoin-and-AI power story — the
            operating mines, roughly{" "}
            <strong>{Math.round(developedMw / 100) / 10} GW of developed
            capacity</strong> and more than 4 GW counting ERCOT-approved
            expansion, plus the miner-built AI campuses now rising beside them.
            Every capacity figure is the operator&apos;s own
            published number or reputable trade-press reporting, cited below.
            Smaller and off-grid operations — including the flare-gas miners of
            the Permian Basin — aren&apos;t pinned here, so treat this as the
            industrial backbone, not a census. The dataset was last verified{" "}
            {MAP_LAST_VERIFIED}, and we re-verify it quarterly alongside{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            .
          </p>

          <h2>Where are the biggest Bitcoin mines in Texas?</h2>
          <p>
            The biggest Bitcoin mines in Texas are Riot&apos;s Rockdale
            facility (700 MW developed) and Corsicana campus (400 MW mining, 1
            GW approved), MARA&apos;s Granbury site (~300 MW), Cipher&apos;s
            Black Pearl (300 MW) and Odessa (207 MW), and Hut 8&apos;s King
            Mountain (280 MW).<C n={1} /><C n={2} /><C n={9} /><C n={12} />{" "}
            Rockdale is where the industrial era began: Bitmain broke ground on
            the former Alcoa aluminum smelter land in 2019, Whinstone built the
            giant next door, and Riot bought it in May 2021 for roughly $651
            million.<C n={3} /><C n={4} /> One town in Milam County — hollowed
            out when the smelter closed — became the mining capital of the
            Western Hemisphere.
          </p>

          <h2>Why is Bitcoin mining concentrated in West Texas?</h2>
          <p>
            Because that&apos;s where the stranded power is. West Texas
            generates enormous wind and solar output that transmission lines
            can&apos;t always carry to the cities, and miners are the buyers of
            last resort for those electrons. Hut 8&apos;s King Mountain site
            sits directly beside a wind farm on a mesa outside McCamey.
            <C n={12} /> Layer1 proved the model first: in February 2020 —
            before Riot, before China&apos;s ban — the Peter Thiel-backed
            startup was mining in liquid-cooled containers off its own 100 MW
            substation in Ward County, powering down to sell energy back when
            prices spiked.<C n={15} /><C n={16} /> That playbook — mine cheap,
            curtail high — became standard practice through ERCOT&apos;s{" "}
            <strong>demand response</strong> programs, which pay large loads to
            power down when the grid is stressed.<C n={17} />
          </p>

          <h2>Why are Bitcoin mines turning into AI data centers?</h2>
          <p>
            Because the scarcest resource in computing is no longer chips —
            it&apos;s connected power, and miners spent a decade accumulating
            it. Galaxy bought the distressed Argo Helios mine in Dickens County
            for $65 million in December 2022; on July 6, 2026, it delivered the
            first 133 MW to CoreWeave under a 15-year lease projected to
            generate over $1 billion a year at full buildout.<C n={11} /> Core
            Scientific is converting its Denton campus in a $6.1 billion
            buildout.<C n={13} /><C n={14} /> Cipher&apos;s brand-new Black
            Pearl site leased straight to Amazon.<C n={10} /> ERCOT&apos;s
            interconnection queue swelled from roughly 226 GW in early 2026 to
            about 474 GW by that August — most of it AI — enough to force the
            state&apos;s hand.<C n={19} /><C n={20} /> This is not Bitcoin losing
            to AI — it&apos;s the
            infrastructure Bitcoin built becoming the on-ramp for the next
            compute frontier, while mining stays the anchor tenant at sites
            like Rockdale.
          </p>

          <h2>What did Texas&apos;s August 2026 data-center audit change?</h2>
          <p>
            On August 4, 2026, Governor Greg Abbott ordered the Public Utility
            Commission and ERCOT to audit every data-center project in the
            state&apos;s interconnection queue, and ERCOT paused &ldquo;Batch
            Zero,&rdquo; the first classification of its largest new loads.
            <C n={20} /> The queue had swelled to roughly 474 gigawatts of
            requests — about 90% of it data centers — a figure no grid can
            physically build, so the audit is Texas sorting the real projects
            from the speculative ones. For the sites already on this map, that
            reframes the whole board: an ERCOT-approved interconnection stops
            being paperwork and becomes the moat. As Bernstein put it,
            &ldquo;if MWs are scarce, it makes sense to earn more per MW&rdquo;
            — and the operators with power already in hand, Riot&apos;s 700 MW
            at Rockdale and its approved gigawatt at Corsicana among them, are
            the ones holding it.<C n={20} />
          </p>
          <p>
            What the audit is now screening is a Texas land-grab for
            miner-built AI capacity. Hut 8 has fully contracted its 1-gigawatt{" "}
            <strong>Beacon Point</strong> campus in Nueces County to a single
            high-grade tenant — reported to be Nvidia — across two 15-year, 352
            MW leases worth $19.6 billion.<C n={21} /> Cipher leased the
            entirety of its 300 MW <strong>Barber Lake</strong> site in Mitchell
            County to Fluidstack in a roughly $3 billion deal that Google agreed
            to backstop.<C n={23} /> MARA signed to acquire a{" "}
            <strong>Matagorda County</strong> site carrying up to 2 GW of power
            for a campus that will blend high-performance computing with
            flexible Bitcoin mining, paying out as milestones — grid
            authorization among them — are met.<C n={22} /> Even Bitdeer has
            flagged its Rockdale campus as a candidate for AI/HPC conversion in
            its operations updates.<C n={24} /> This is why we keep the mining
            map and the grid in the same frame: the machines Bitcoin installed
            are why Texas is now the front line of the AI power crunch — and why
            the state just hit pause to take inventory.
          </p>

          <h2>The counterweight: Granbury&apos;s noise fight</h2>
          <p>
            The record isn&apos;t all triumph, and we keep the hard parts in.
            MARA&apos;s Granbury mine runs behind-the-meter at the 1,115 MW
            Wolf Hollow gas plant, and its cooling fans have made it the most
            litigated Bitcoin site in Texas: neighbors report sleep disruption
            and hearing problems, a Hood County constable issued 37 noise
            citations, and residents have filed nuisance suits in both state
            and federal court.<C n={7} /><C n={8} /> How MARA answers — with
            sound walls, immersion cooling, or a settlement — will shape how
            close to homes the next generation of sites gets built.
          </p>

          <h2>How to cite this map</h2>
          <p>
            This dataset is free to cite with attribution (CC BY 4.0):{" "}
            <em>
              TexasBitcoin, &ldquo;Texas Bitcoin Mining Map,&rdquo;
              texasbitcoin.com/bitcoin-mining-map-texas, updated{" "}
              {MAP_LAST_VERIFIED}.
            </em>{" "}
            Corrections and additions are welcome — reach us via{" "}
            <Link href="/about">the about page</Link>. Looking for the people
            behind the machines? Start with{" "}
            <Link href="/events">Texas Bitcoin meetups and conferences</Link>.
            <SeamMark to="/rockdale-texas-bitcoin" step={3} />
          </p>
        </div>

        {/* Server-rendered dataset — readable without JS */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            The dataset
          </h2>
          <p className="mt-2 text-sm text-muted-2">
            All {miningSites.length} tracked sites, verified{" "}
            {MAP_LAST_VERIFIED}.
          </p>
          <div className="mt-5 space-y-3">
            {miningSites.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold">
                    {s.name}{" "}
                    <span className="font-normal text-muted-2">
                      · {s.operator}
                    </span>
                  </p>
                  <p className="text-xs text-muted-2">
                    {s.location} · online {s.yearOnline}
                  </p>
                </div>
                <p className="mt-1 text-sm font-medium text-accent-soft">
                  {s.mwLabel} · {STATUS_LABELS[s.status]}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.story}{" "}
                  {s.sourceIds.map((n) => (
                    <C key={n} n={n} />
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>

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
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {miningSources.map((s) => (
              <li key={s.id} id={`ms${s.id}`} className="flex gap-2">
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
