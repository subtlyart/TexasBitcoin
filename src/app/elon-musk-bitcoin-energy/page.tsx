import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  MUSK_LAST_VERIFIED,
  muskSources,
  teslaLedger,
  type LedgerKind,
} from "@/lib/musk";

const pageUrl = `${site.url}/elon-musk-bitcoin-energy`;

export const metadata: Metadata = {
  title: "Elon Musk, Tesla, and the Bitcoin Energy Question",
  description:
    "Why Tesla bought $1.5B in Bitcoin, stopped taking it over energy, and sold most of it - and how Elon Musk's AI data centers now dwarf Bitcoin on the Texas grid.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Elon Musk, Tesla, and the Bitcoin Energy Question",
    description:
      "The sourced account of Tesla's Bitcoin treasury, Musk's 2021 energy reversal (and the Cambridge index he shared), and how his AI data centers now collide with Bitcoin mining on the Texas grid.",
    url: pageUrl,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Did Tesla buy Bitcoin?",
    a: "Yes. Tesla disclosed a $1.5 billion Bitcoin purchase in its 2020 annual report, filed February 8, 2021, and briefly accepted Bitcoin for cars starting March 24, 2021. It was the highest-profile corporate treasury move into Bitcoin at the time, after MicroStrategy.",
  },
  {
    q: "Why did Elon Musk stop Tesla from accepting Bitcoin?",
    a: "On May 12, 2021, Musk suspended Bitcoin car payments over energy, citing 'rapidly increasing use of fossil fuels for Bitcoin mining... especially coal.' He then shared a chart from the Cambridge Bitcoin Electricity Consumption Index (cbeci.org), calling the trend 'insane.' Tesla has never resumed the payments.",
  },
  {
    q: "Why did Tesla sell its Bitcoin?",
    a: "Tesla sold about 10% in early 2021 'to prove liquidity,' then roughly 75% in the second quarter of 2022 for $936 million, blaming uncertainty from China's COVID lockdowns and a need to hold cash. Musk said it was not 'some verdict on bitcoin,' and Tesla kept its Dogecoin.",
  },
  {
    q: "Does Tesla still own Bitcoin?",
    a: "Yes. As of its mid-2026 filings, Tesla holds 11,509 Bitcoin bought for $386 million, unchanged since 2022 and marked at $674 million. Since January 2024 Tesla marks the coins to market each quarter, so the reported value rises and falls with Bitcoin's price.",
  },
  {
    q: "What is cbeci.org, the Cambridge Bitcoin Electricity Consumption Index?",
    a: "It is a live estimate of the electricity the Bitcoin network uses, run by the Cambridge Centre for Alternative Finance at Cambridge Judge Business School. Musk shared its chart in May 2021. Its 2025 study put Bitcoin near 138 TWh a year and 52.4% sustainable energy.",
  },
  {
    q: "Does Bitcoin or AI use more electricity?",
    a: "Bitcoin's global network draws roughly 138 to 175 TWh a year. AI is on track to dwarf it: the IEA expects data-center electricity to reach about 950 TWh by 2030, and one 2-gigawatt AI campus run continuously would use around 17.5 TWh - about an eighth of all Bitcoin mining, from a single site.",
  },
];

const kindStyle: Record<LedgerKind, { color: string; label: string }> = {
  buy: { color: "var(--accent)", label: "Buy / accept" },
  sell: { color: "#c98a4e", label: "Sale" },
  pause: { color: "#d1703f", label: "Pause" },
  rule: { color: "#7a9e6a", label: "Accounting" },
  hold: { color: "var(--star)", label: "Hold" },
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

// Bitcoin's whole global network vs. a single AI campus, drawn to scale in
// annual terawatt-hours. Static, theme-aware SVG (site is single dark theme).
function EnergyScale() {
  const max = 138; // Bitcoin network, TWh/yr (Cambridge, 2025)
  const x0 = 250;
  const track = 400; // px for the full 138 TWh
  const px = (twh: number) => (twh / max) * track;
  const campus = 17.5; // one 2 GW campus run continuously
  return (
    <figure className="mt-6 overflow-x-auto rounded-xl border border-border bg-surface p-5">
      <svg
        viewBox="0 0 680 250"
        className="h-auto w-full min-w-[560px]"
        role="img"
        aria-label="Bar chart: the entire global Bitcoin network draws about 138 terawatt-hours a year, while a single two-gigawatt AI campus run continuously would use about 17.5 terawatt-hours a year, roughly one-eighth of the whole network."
      >
        <text x="0" y="22" fill="var(--accent)" fontSize="13" fontWeight="600" letterSpacing="2">
          ANNUAL ELECTRICITY DRAW
        </text>
        <text x="0" y="44" fill="var(--muted-2)" fontSize="13">
          Terawatt-hours per year, drawn to scale
        </text>

        {/* Bitcoin network */}
        <text x="0" y="96" fill="var(--muted)" fontSize="14">
          Entire global
        </text>
        <text x="0" y="115" fill="var(--foreground)" fontSize="15" fontWeight="600">
          Bitcoin network
        </text>
        <rect x={x0} y="82" width={track} height="40" rx="6" fill="var(--surface-2)" />
        <rect x={x0} y="82" width={px(max)} height="40" rx="6" fill="var(--star)" />
        <text x={x0 + track - 14} y="107" textAnchor="end" fill="#1a1206" fontSize="15" fontWeight="700">
          ~138 TWh
        </text>

        {/* One AI campus */}
        <text x="0" y="176" fill="var(--muted)" fontSize="14">
          One 2 GW
        </text>
        <text x="0" y="195" fill="var(--foreground)" fontSize="15" fontWeight="600">
          AI campus
        </text>
        <rect x={x0} y="162" width={track} height="40" rx="6" fill="var(--surface-2)" />
        <rect x={x0} y="162" width={px(campus)} height="40" rx="6" fill="var(--accent)" />
        <text x={x0 + px(campus) + 12} y="187" fill="var(--foreground)" fontSize="15" fontWeight="600">
          ~17.5 TWh
        </text>
        <text x={x0 + px(campus) + 110} y="187" fill="var(--muted-2)" fontSize="13">
          about one-eighth of the whole network
        </text>

        <text x="0" y="238" fill="var(--muted-2)" fontSize="12">
          Bitcoin network: Cambridge, 2025. Campus: 2 GW run continuously (2 GW x 8,760 h).
        </text>
      </svg>
    </figure>
  );
}

export default function MuskBitcoinEnergyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Elon Musk, Tesla, and the Bitcoin Energy Question",
    description:
      "The sourced account of Tesla's Bitcoin treasury, Musk's 2021 energy reversal, and how his AI data centers now collide with Bitcoin mining on the Texas grid.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-19",
    dateModified: "2026-08-19",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Organization", name: "Tesla, Inc." },
      { "@type": "Person", name: "Elon Musk" },
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
        name: "Elon Musk, Tesla, and the Bitcoin Energy Question",
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
          / Elon Musk &amp; the Bitcoin Energy Question
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · Energy &amp; the grid
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Elon Musk, Tesla, and the Bitcoin Energy Question
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            How the man who called Bitcoin mining a fossil-fuel problem in 2021 -
            and shared the Cambridge index at cbeci.org to prove it - went on to
            build the biggest new electricity draw in tech. The argument he
            started is being settled on the Texas grid.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 19, 2026 · Updated{" "}
            {MUSK_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Tesla bought $1.5 billion of Bitcoin in February 2021, briefly
            accepted it for cars, then suspended payments that May over the
            energy used to mine it - citing coal and sharing the Cambridge
            Bitcoin Electricity Consumption Index (cbeci.org). Tesla later sold
            about 75% of its holdings but still owns 11,509 BTC. Today Elon
            Musk&apos;s own AI data centers draw far more power than Bitcoin, and
            the collision is playing out on the Texas grid.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Tesla disclosed a $1.5 billion Bitcoin purchase in its FY2020
              annual report, filed February 8, 2021.<C n={1} />
            </li>
            <li>
              Tesla began accepting Bitcoin for cars on March 24, 2021, and
              suspended it on May 12, 2021, citing fossil fuels &ldquo;especially
              coal.&rdquo;<C n={2} /><C n={4} />
            </li>
            <li>
              In the second quarter of 2022, Tesla converted about 75% of its
              Bitcoin to fiat for $936 million; it still held 11,509 BTC in 2026.
              <C n={6} /><C n={7} />
            </li>
            <li>
              The Cambridge index Musk shared in 2021 estimated Bitcoin mining at
              52.4% sustainable energy in 2025, up from 37.6% in 2022.<C n={12} />
            </li>
            <li>
              xAI&apos;s Colossus supercomputer in Memphis scaled to about
              200,000 GPUs and is backed by roughly 150 MW of Tesla Megapack
              batteries.<C n={20} /><C n={21} />
            </li>
            <li>
              ERCOT&apos;s large-load queue reached about 226 GW by November
              2025, up nearly fourfold in a year and roughly 77% data centers.
              <C n={24} />
            </li>
          </ul>
        </div>

        {/* Tesla's Bitcoin ledger — the moves, from the filings */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Tesla&apos;s Bitcoin ledger
            </h2>
            <span className="text-xs text-muted-2">From the SEC filings</span>
          </div>
          <ol className="mt-5 space-y-4">
            {teslaLedger.map((e) => {
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
          <h2>Did Tesla actually buy Bitcoin?</h2>
          <p>
            Yes. Tesla disclosed a <strong>$1.5 billion</strong> Bitcoin purchase
            in the annual report it filed on February 8, 2021, describing the buy
            as part of a new policy to hold &ldquo;alternative reserve
            assets&rdquo; and calling the position &ldquo;highly
            liquid.&rdquo;<C n={1} /> It was the largest, most visible corporate
            treasury move into Bitcoin since MicroStrategy started buying in 2020,
            and it pulled the idea of Bitcoin-as-reserve-asset out of the forums
            and onto the balance sheet of the world&apos;s most valuable carmaker.
            Six weeks later, on March 24, 2021, Tesla went further and began
            accepting Bitcoin for its cars in the U.S., with Musk promising the
            coins would be held as Bitcoin rather than swapped for dollars.
            <C n={2} /> For one spring, the most famous company in electric
            vehicles was also the most famous company in Bitcoin. The same
            instinct - hard money held as a reserve, not spent - would later be
            written into Texas law itself, in the state&apos;s{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              Strategic Bitcoin Reserve
            </Link>
            .
          </p>

          <h2>Why did Elon Musk stop Tesla from accepting Bitcoin?</h2>
          <p>
            Musk suspended Bitcoin car payments on <strong>May 12, 2021</strong>,
            and the reason he gave was energy. In a statement posted to what was
            then Twitter, he wrote that Tesla was &ldquo;concerned about rapidly
            increasing use of fossil fuels for Bitcoin mining and transactions,
            especially coal, which has the worst emissions of any fuel,&rdquo;
            adding that crypto &ldquo;cannot come at great cost to the
            environment.&rdquo;<C n={4} /> The next day he pressed the point,
            sharing a chart from the <strong>Cambridge Bitcoin Electricity
            Consumption Index</strong> - the cbeci.org tracker run by the
            Cambridge Centre for Alternative Finance - with a blunt verdict: the
            energy &ldquo;usage trend over past few months is insane.&rdquo;
            <C n={13} /> Bitcoin fell about 12% on the reversal.
          </p>
          <p>
            Musk left a door open. On June 13, 2021, he said Tesla would take
            Bitcoin again once there was &ldquo;confirmation of reasonable (~50%)
            clean energy usage by miners with positive future trend.&rdquo;
            <C n={5} /> Five years on, that door has never reopened - Tesla has
            not resumed Bitcoin payments. But the bar he set, roughly half of
            mining on clean power, became a number the industry would chase, and
            on some measures eventually clear.
          </p>

          <h2>Why did Tesla sell most of its Bitcoin?</h2>
          <p>
            Tesla sold in two stages, and both times it framed the move as cash
            management rather than a verdict on Bitcoin. The first sale came fast:
            in the first quarter of 2021 Tesla sold about 10% of its holdings for
            <strong> $272 million</strong>, booking a $128 million gain.<C n={2} />{" "}
            Musk said the point was &ldquo;essentially to prove liquidity of
            Bitcoin as an alternative to holding cash on balance sheet&rdquo; - a
            demonstration, not an exit.<C n={3} /> The big one came in the second
            quarter of 2022, when Tesla converted roughly <strong>75%</strong> of
            its Bitcoin to fiat for <strong>$936 million</strong>.<C n={6} /> On
            the earnings call, Musk tied it to China: with COVID lockdowns
            freezing its Shanghai factory, Tesla wanted to &ldquo;maximize our
            cash position,&rdquo; and he stressed the sale &ldquo;should not be
            taken as some verdict on bitcoin.&rdquo;<C n={9} /> Tellingly, Tesla
            sold Bitcoin but kept its Dogecoin. Musk&apos;s own crypto tastes run
            the same way: he has said he personally owns Bitcoin, Ether, and
            Dogecoin, and that SpaceX, like Tesla, holds Bitcoin too - a soft
            spot for Dogecoin he has never hidden.<C n={10} />
          </p>
          <p>
            What is left has barely moved since. As of its mid-2026 filings Tesla
            still holds <strong>11,509 Bitcoin</strong>, bought for $386 million
            and untouched since 2022.<C n={7} /> What changed is only how the
            coins are counted: starting January 1, 2024 Tesla early-adopted a new
            fair-value accounting rule and now marks its Bitcoin to market each
            quarter, a switch that added $589 million to income in 2024 as Bitcoin
            climbed.<C n={8} /> The holding that began as a treasury experiment
            has settled into something quieter - a position the company neither
            defends nor sells, just carries.
          </p>

          <h2>Was Musk right about Bitcoin&apos;s energy use?</h2>
          <p>
            He was half right, and then the picture moved under him. In early 2021
            a large share of Bitcoin mining did run on coal, much of it in China,
            and the network&apos;s energy use was climbing steeply - the trend
            Musk called &ldquo;insane.&rdquo;<C n={13} /> Then came the break he
            could not have scripted: in mid-2021 China banned Bitcoin mining
            outright, and more than half the network went looking for a new home.
            It found one on cheaper, cleaner, and more flexible power, a lot of it
            in Texas. By the time Cambridge published its 2025 mining study, it
            estimated that <strong>52.4%</strong> of Bitcoin mining ran on
            sustainable energy - renewables plus nuclear - up from 37.6% in 2022,
            while coal&apos;s share fell from 36.6% to 8.9%.<C n={12} /> On
            Cambridge&apos;s numbers the whole network draws about 138 terawatt-hours
            a year, roughly 0.5% of global electricity.<C n={12} /> Musk&apos;s own
            ~50% clean-energy bar had, on that measure, been cleared.
          </p>
          <p>
            That is the bullish read, and it deserves its skeptics. The energy
            figures are genuinely contested: independent analysts like
            Digiconomist&apos;s Alex de Vries put Bitcoin&apos;s carbon footprint
            far higher, near 98 million tonnes of CO2 a year, and flag the
            e-waste from discarded mining rigs.<C n={15} /> A 2023 study promoted
            by United Nations University added a water and land footprint most
            estimates ignore, on the order of 1.65 cubic kilometers of water
            across 2020 to 2021.<C n={16} /> And the absolute numbers still grew:
            a greener slice of a much bigger network can still burn more coal in
            total than a dirty slice of a small one. The honest summary is that
            Bitcoin&apos;s energy story got better on the metric Musk chose and
            stayed contested on the metrics he did not.
          </p>
          <p>
            The industry also organized around exactly the argument Musk started.
            Days after the suspension, on May 24, 2021, Musk and
            MicroStrategy&apos;s Michael Saylor convened the major North American
            miners to launch the <strong>Bitcoin Mining Council</strong>, built
            to standardize energy reporting and press the sustainability case.
            <C n={14} /> Its self-reported numbers should be read as self-reported.
            The stronger evidence for the &ldquo;grid asset&rdquo; case is not a
            survey but a Texas power bill: in a single month in 2023, Riot&apos;s
            Rockdale mine earned <strong>$31.7 million</strong> from ERCOT for
            powering down during a heat wave, more than triple the value of the
            Bitcoin it mined that month, as told in{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            . Miners had become a load the grid could switch off - the exact
            flexibility the next chapter would demand.
          </p>

          <h2>The reversal: from critic to the grid&apos;s biggest draw</h2>
          <p>
            The man who called Bitcoin&apos;s energy use &ldquo;insane&rdquo; now
            runs some of the most power-hungry machines ever built. Since 2024
            Musk&apos;s AI company, xAI, has raced to stand up{" "}
            <strong>Colossus</strong>, a Memphis supercomputer that scaled to
            roughly 200,000 GPUs and is backed by about 150 megawatts of Tesla
            Megapack batteries.<C n={20} /><C n={21} /> Its successor, Colossus 2,
            is pitched as the first gigawatt-plus AI training cluster, with the
            campus reaching toward two gigawatts.<C n={21} /> Put that against
            Bitcoin: the entire global Bitcoin network draws on the order of 16 to
            20 gigawatts of continuous power.<C n={11} /> A single two-gigawatt AI
            campus, run flat out, would consume around 17.5 terawatt-hours a year
            - roughly an eighth of what every Bitcoin miner on the planet uses
            combined, from one site.
          </p>

          <EnergyScale />

          <p>
            This is not one man&apos;s quirk; it is the whole industry&apos;s
            turn. The International Energy Agency projects that global data-center
            electricity use will roughly double to about 950 terawatt-hours by
            2030, near 3% of the world&apos;s power, with AI the main driver.
            <C n={18} /> In the U.S., the Department of Energy&apos;s national lab
            estimates data centers could reach 6.7% to 12% of national electricity
            by 2028.<C n={19} /> Bitcoin mining, by comparison, was about 0.6% to
            2.3% of U.S. power in 2023.<C n={17} /> The energy question Musk raised
            about Bitcoin did not go away - it moved to a bigger machine.
          </p>
          <p>
            And Colossus brought its own version of the fossil-fuel problem Musk
            once named. To power the Memphis site fast, xAI installed gas turbines
            on-site; in 2025 the Southern Environmental Law Center said aerial and
            thermal imaging showed dozens running - roughly 35 where only 15 were
            permitted - capable of some 420 megawatts and thousands of tons of
            smog-forming nitrogen oxides a year, beside the largely Black South
            Memphis neighborhood of Boxtown.<C n={23} /> In April 2026 the NAACP
            sued xAI under the Clean Air Act over turbines at a second site.
            <C n={22} /> The line Musk once aimed at Bitcoin - that this
            &ldquo;cannot come at great cost to the environment&rdquo; - had found
            its way to his own front door. There is even a loop in the hardware:
            the Tesla batteries that once stood for his clean-energy mission now
            buffer the load of his AI, holding the grid steady while the turbines
            run.
          </p>

          <h2>Where it lands: Texas, the grid, and the compute collision</h2>
          <p>
            The argument Musk started is being settled in Texas - and Musk himself
            is now a Texan. Tesla moved its headquarters to the Austin area in
            2021 and, in 2024, shareholders voted to reincorporate the company in
            Texas outright.<C n={26} /><C n={27} /> The state it moved to is the
            one place where Bitcoin mining and AI data centers are colliding
            hardest over the same wires. By late 2025, requests to plug large new
            loads into the ERCOT grid had swelled to about{" "}
            <strong>226 gigawatts</strong>, up nearly fourfold in a single year,
            roughly three-quarters of it data centers.<C n={24} /> That is more
            than double the all-time peak demand of the entire Texas grid, queued
            behind one interconnection process.
          </p>
          <p>
            Texas answered with the discipline Bitcoin miners had volunteered
            into. <strong>Senate Bill 6</strong>, signed in June 2025, gave ERCOT
            the authority to order large loads to curtail or disconnect during
            grid emergencies - codifying, for AI data centers, the very
            flexibility miners had offered up years earlier to earn their welcome.
            <C n={25} /><C n={28} /> The mines themselves are the bridge: across
            Texas, Bitcoin sites are handing their hard-won grid connections to
            AI, from Core Scientific&apos;s Denton campus turned CoreWeave hub to
            Cipher&apos;s Barber Lake site leased for Google-backed compute, all
            plotted on{" "}
            <Link href="/bitcoin-mining-map-texas">
              the Texas Bitcoin mining map
            </Link>
            . The infrastructure Musk once faulted for burning power became the
            on-ramp for the machines burning far more.
          </p>
          <p>
            That is the arc in one line. Elon Musk spent 2021 warning that Bitcoin
            used too much energy, and spent the years after building the hungriest
            computers in the world - on the Texas grid that Bitcoin taught to
            bend. The critic became the customer.
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
            Primary record first: Tesla&apos;s SEC filings for every dollar figure
            and holding, then Musk&apos;s statements as reported, the Cambridge,
            IEA, EIA and DOE energy data, and the grid record. This is a research
            and reference article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {muskSources.map((s) => (
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
