import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";

const pageUrl = `${site.url}/bitcoin-energy-engineering-texas`;

export const metadata: Metadata = {
  title: "Bitcoin as a Thermodynamic Battery: Heat Reuse, Flare Capture, and Off-Grid Mining in Texas",
  description:
    "The engineer's view of Bitcoin mining in Texas: an ASIC converts ~100% of its electricity to heat, flare-gas miners like Giga Energy burn methane that would otherwise vent, and miners act as a buyer of last resort for stranded power. The sourced physics, not the noise.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("Bitcoin as a Thermodynamic Battery: The Engineering of Texas Mining", {
      kicker: "The grid",
    }),
    type: "article",
    title: "Bitcoin as a Thermodynamic Battery",
    description:
      "An ASIC turns electricity into heat and a flexible load. Heat reuse, flare capture, and off-grid solar make Texas mining an energy-engineering problem — here is the sourced physics.",
    url: pageUrl,
  },
};

const LAST_VERIFIED = "October 21, 2026";

const sources = [
  { id: 1, label: "D-Central — Heat Reuse Applications: a Bitcoin ASIC converts essentially 100% of the electricity it draws into heat; 1,000 W of draw is about 3,412 BTU/h of delivered heat when the exhaust stays in the conditioned space", url: "https://d-central.tech/heat-reuse-applications/" },
  { id: 2, label: "Braiins — ASICs Optimized for Heat, Not Efficiency, Will Decentralize Mining: the case for heat-first ASIC design and distributed, heat-reusing miners", url: "https://braiins.com/blog/asics-optimized-for-heat-not-efficiency-will-decentralize-mining" },
  { id: 3, label: "Crusoe — Digital Flare Mitigation: open flares combust roughly 93% of methane, while Crusoe's on-site generators combust about 99.89%, for an estimated 63% reduction in CO2-equivalent emissions versus continued flaring", url: "https://www.crusoe.ai/resources/blog/understanding-the-problem-crusoe-solves" },
  { id: 4, label: "CNBC — Texan Bitcoin Miner Giga Partners With Phoenix Global in Argentina (March 26, 2024): Giga Energy, founded by Texas A&M graduates Brent Whitehead and Matt Lohstroh, began mining on East Texas oil fields in 2019 using flared gas; Crusoe-cited research estimates ~63% CO2e reduction versus flaring", url: "https://www.cnbc.com/2024/03/26/texan-bitcoin-miner-giga-partners-with-phoenix-global-in-argentina.html" },
  { id: 5, label: "Railroad Commission of Texas — Flaring in Texas: official monthly series of total gas flared (billion cubic feet) and flaring as a share of production, June 2019 to May 2025", url: "https://www.rrc.texas.gov/media/3sebsfvs/flaring.pdf" },
  { id: 6, label: "The Texas Tribune — Texan Bitcoin miners profit by using less electricity (January 3, 2024): industrial miners earn from curtailment and demand response that residential customers cannot access", url: "https://www.texastribune.org/2024/01/03/texas-bitcoin-profit-electricity/" },
];

const faqs = [
  {
    q: "Is a Bitcoin miner just a space heater?",
    a: "Thermodynamically, nearly. A Bitcoin ASIC converts essentially 100% of the electricity it draws into heat, the same as an electric resistance heater — about 3,412 BTU/h per 1,000 watts when the exhaust stays in the room. The difference is that the miner also earns bitcoin for the same electricity. It is a heater that pays you back, though a heat pump still delivers more warmth per watt.",
  },
  {
    q: "How does flare-gas Bitcoin mining reduce emissions?",
    a: "An open flare combusts only about 93% of its methane; on-site generators used by miners like Crusoe combust roughly 99.89%, and methane is a far stronger greenhouse gas than the CO2 it burns into. Crusoe estimates about a 63% reduction in CO2-equivalent emissions versus continued flaring, while turning otherwise-wasted gas into computation.",
  },
  {
    q: "Who mines Bitcoin with flared gas in Texas?",
    a: "Giga Energy is a Texas example. Founded by Texas A&M graduates Brent Whitehead and Matt Lohstroh, it began mining on East Texas oil fields in 2019, placing modular data centers at well sites that burn gas which would otherwise be flared. The model pairs a stranded fuel with a portable buyer that can sit at the wellhead.",
  },
  {
    q: "Can you mine Bitcoin off-grid with solar in Texas?",
    a: "Yes, and the economics favor it where power is otherwise stranded. A solar or wind site that overproduces has no one to sell surplus to at certain hours; a miner is a buyer of last resort that monetizes that surplus on-site and switches off when the grid pays more. It converts intermittent, unsellable generation into a steady revenue stream without a transmission line.",
  },
  {
    q: "Why can't home miners earn what industrial miners do?",
    a: "Two gaps. Industrial miners buy power at a few cents per kilowatt-hour and sell flexibility into ERCOT's demand-response and ancillary-service markets; residential customers pay retail rates and cannot access those programs. A home miner's edge is different: reusing the heat it produces, so the electricity does double duty as warmth and as mined bitcoin.",
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

export default function EnergyEngineeringPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(sources),
    headline:
      "Bitcoin as a Thermodynamic Battery: Heat Reuse, Flare Capture, and Off-Grid Mining in Texas",
    description:
      "The engineering view of Texas Bitcoin mining: heat reuse, flare capture, off-grid solar, and miners as a flexible, interruptible load.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    about: [
      { "@type": "Thing", name: "Bitcoin mining" },
      { "@type": "Thing", name: "Waste heat recovery" },
      { "@type": "Thing", name: "Gas flaring" },
      { "@type": "Thing", name: "Demand response" },
      { "@type": "Place", name: "Texas, United States" },
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
        name: "The Energy Engineering of Texas Bitcoin Mining",
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
          / The energy engineering of Texas mining
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Essay · The grid
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Bitcoin as a thermodynamic battery
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Strip away the noise complaints and the big-number headlines and a
            Bitcoin miner is a precise piece of energy engineering: a device
            that turns electricity into heat and a bitcoin reward at the same
            time, and that can sit anywhere power is otherwise wasted. The
            physics of heat reuse, flare capture, and off-grid mining — the
            engineer&apos;s view of the Texas grid story.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published October 21, 2026 · Updated {LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            A Bitcoin ASIC converts essentially 100% of the electricity it
            draws into heat — about 3,412 BTU per hour for every 1,000 watts —
            while also earning bitcoin, which makes it usable as a heater that
            pays for itself and as an interruptible load that can be placed
            wherever energy would otherwise be wasted. In Texas that means three
            things: reusing miner heat instead of venting it, burning flared
            natural gas that would otherwise be lit off at the wellhead, and
            acting as a buyer of last resort for stranded solar, wind, and
            off-peak grid power. The miner is less a consumer of energy than a
            flexible, relocatable sink for energy that has no better use.
          </p>
        </div>

        {/* Key facts */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              A Bitcoin ASIC converts essentially 100% of its electricity into
              heat; 1,000 watts of draw is about 3,412 BTU/h of usable heat when
              the exhaust stays in the conditioned space.<C n={1} />
            </li>
            <li>
              An open gas flare combusts roughly 93% of its methane, while
              on-site generators used for mining combust about 99.89% — an
              estimated 63% reduction in CO2-equivalent emissions versus
              flaring.<C n={3} />
            </li>
            <li>
              Giga Energy, founded by Texas A&amp;M graduates Brent Whitehead
              and Matt Lohstroh, began mining on East Texas oil fields in 2019
              using gas that would otherwise be flared.<C n={4} />
            </li>
            <li>
              The Railroad Commission of Texas publishes monthly totals of gas
              flared in the state (billion cubic feet) from June 2019 through
              May 2025.<C n={5} />
            </li>
            <li>
              Industrial miners earn from ERCOT curtailment and demand-response
              programs that residential customers cannot access — the structural
              reason home mining competes on heat, not on power price.<C n={6} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-12">
          <h2>Why is a Bitcoin miner a heater?</h2>
          <p>
            Because the computation does no mechanical work and stores no
            energy, so almost all the electricity a miner draws leaves it as
            heat. A Bitcoin ASIC converts essentially <strong>100%</strong> of
            its input power into heat — the same conversion as an electric
            resistance heater — which works out to roughly{" "}
            <strong>3,412 BTU per hour for every 1,000 watts</strong> when the
            exhaust stays in the room.<C n={1} /> The engineering insight is
            that this heat is not a waste product to be dumped; it is a second
            product. A miner ducted into a workshop, a greenhouse, a swimming
            pool loop, or a home&apos;s ventilation air delivers warmth that
            would otherwise cost electricity or gas, <em>and</em> earns bitcoin
            for the same kilowatt-hour.<C n={2} /> A heat pump still delivers
            more warmth per watt, so mining heat is not free heating — but where
            heat is needed anyway, the marginal cost of the bitcoin is close to
            zero.
          </p>

          <h2>How does flare capture turn waste gas into computation?</h2>
          <p>
            By putting a generator and a container of miners where gas is being
            burned for nothing. Oil wells often produce natural gas with no
            pipeline to carry it, so operators <strong>flare</strong> it —
            lighting it off at the wellhead. An open flare combusts only about{" "}
            <strong>93%</strong> of its methane; the on-site generators miners
            use combust about <strong>99.89%</strong>, and because methane is a
            far stronger greenhouse gas than the carbon dioxide it burns into,
            the result is an estimated <strong>63% reduction</strong> in
            CO2-equivalent emissions versus continued flaring.<C n={3} /> Texas
            is the natural home for this: the{" "}
            <Link href="/bitcoin-mining-map-texas">Permian Basin</Link> flares
            more gas than any other U.S. field, and the Railroad Commission
            tracks the volumes.<C n={5} /> <strong>Giga Energy</strong>,
            founded by Texas A&amp;M graduates who started on East Texas oil
            fields in 2019, is one operator that places
            modular data centers at well sites to mine on the gas instead of
            burning it.<C n={4} />
          </p>

          <h2>Why does off-grid solar and wind pair with mining?</h2>
          <p>
            Because a miner is a <strong>buyer of last resort</strong> for power
            no one else will take. Solar and wind overproduce at certain hours
            and have nowhere to sell the surplus; without storage or a
            transmission line, that energy is simply lost. A miner placed at the
            generation site monetizes the surplus on-site, runs hardest when
            power is cheapest or free, and switches off within minutes when the
            grid will pay more for the electricity than the bitcoin is worth.
            That same flexibility is what makes miners valuable to the Texas
            grid at large:{" "}
            <Link href="/bitcoin-mining-ercot">
              demand response
            </Link>{" "}
            pays them to power down in a crunch, and operators like{" "}
            <Link href="/lancium-bitcoin">Lancium</Link> are built around
            pairing flexible mining load with renewable generation. The miner
            turns intermittent, unsellable generation into a steady revenue
            stream — a battery that stores value in bitcoin instead of
            electrons.
          </p>

          <h2>What can a home miner actually do in Texas?</h2>
          <p>
            Compete on heat, not on power price. Industrial miners buy
            electricity at a few cents per kilowatt-hour and sell their
            flexibility into ERCOT&apos;s demand-response and ancillary-service
            markets — revenue a residential customer paying retail rates simply
            cannot reach.<C n={6} /> So a home miner that treats bitcoin as the
            only product will usually lose to the industrial scale. The edge
            that survives is thermodynamic: run the miner where you need the
            heat — a garage in a Panhandle winter, a workshop, a hot-water
            pre-heat — and the electricity does double duty, offsetting a
            heating bill you would have paid anyway while mining on the side.
            The honest version of home mining in Texas is not &ldquo;get rich on
            cheap power.&rdquo; It is &ldquo;heat the room you were going to heat,
            and keep the bitcoin.&rdquo;
          </p>

          <h2>The honest counterweight</h2>
          <p>
            The engineering case has real limits. A heat pump delivers roughly
            twice the warmth per watt of any resistance heater, miner included,
            so mining heat only pencils out where you would otherwise use
            resistance heating or where the bitcoin revenue covers the gap.
            <C n={1} /> Flare-gas mining reduces emissions relative to flaring,
            but it still burns fossil gas and can prolong the economics of wells
            that might otherwise be shut in — a genuine objection, not a
            rounding error.<C n={3} /> And the demand-response revenue that makes
            industrial Texas mining profitable is a product of ERCOT&apos;s
            market design, not a law of nature; rules change, and critics argue
            the benefits flow disproportionately to miners.<C n={6} /> The
            thermodynamics are real and the stranded-energy logic is sound. The
            caveats are that &ldquo;wasted energy&rdquo; is a narrower category
            than boosters claim, and that being a buyer of last resort still
            means buying.
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
            Primary and operator record first: the Railroad Commission&apos;s
            flaring data and Crusoe&apos;s combustion figures, then reporting and
            the thermodynamics of heat reuse. This is a research and reference
            article, not financial, investment, or engineering advice — size and
            site any real installation with a licensed professional.
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
