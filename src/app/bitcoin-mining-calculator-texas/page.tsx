import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";
import { MiningCalculator } from "@/components/mining-calculator";
import {
  CALC_SOURCES,
  computeMining,
  DEFAULT_NETWORK,
  MINER_PRESETS,
  TEXAS_RATES,
} from "@/lib/mining-calculator";

const pageUrl = `${site.url}/bitcoin-mining-calculator-texas`;
const PUBLISHED = "2026-10-31";
const LAST_VERIFIED = "October 31, 2026";

export const metadata: Metadata = {
  title: "Bitcoin Mining Calculator (Texas) — Profitability with ERCOT Power Rates",
  description:
    "A sourced Bitcoin mining profitability calculator built for Texas power rates. Enter a miner's hashrate, watts, and your $/kWh; get BTC mined per day, net profit, profit per watt, break-even electricity price, and hardware payback — with the ERCOT caveats the hashprice calculators leave out.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("Bitcoin Mining Calculator — built for Texas power rates", { kicker: "The grid" }),
    type: "website",
    title: "Bitcoin Mining Calculator (Texas) — Profitability with ERCOT Power Rates",
    description:
      "Enter hashrate, watts, and your Texas $/kWh. Get BTC/day, net profit, profit per watt, break-even power price, and payback — with the demand-response caveats spelled out.",
    url: pageUrl,
  },
};

// Build-time worked example so the page reads fully without JavaScript.
// S21 XP at a typical ERCOT large-load rate, one unit, 98% uptime.
const examplePreset = MINER_PRESETS.find((m) => m.id === "s21xp")!;
const exampleRate = 0.045;
const example = computeMining({
  hashrateTh: examplePreset.hashrateTh,
  watts: examplePreset.watts,
  electricityRate: exampleRate,
  poolFeePct: 1,
  uptimePct: 98,
  hardwareCostUsd: examplePreset.priceUsd,
  quantity: 1,
  network: DEFAULT_NETWORK,
});

const usd = (n: number, dp = 2) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: dp, maximumFractionDigits: dp });
const cents = (rate: number) => `${(rate * 100).toLocaleString("en-US", { maximumFractionDigits: 1 })}¢`;

const faqs = [
  {
    q: "How do you calculate Bitcoin mining profitability?",
    a: "Take your machine's share of total network hashrate, multiply by the daily block issuance (the block subsidy times 144 blocks), and you have the Bitcoin mined per day. Multiply by the BTC price for gross revenue, then subtract pool fees and the cost of the electricity the machine draws. What remains is net operating profit.",
  },
  {
    q: "What electricity rate should I use for Texas?",
    a: `It depends who you are. A West Texas industrial flexible load contracts power around ${cents(TEXAS_RATES[0].rate)}–${cents(TEXAS_RATES[1].rate)} per kWh in the ERCOT energy-only market; a grid-tied commercial meter runs near ${cents(TEXAS_RATES[2].rate)}; and a home hobby miner pays the residential retail rate, around ${cents(TEXAS_RATES[3].rate)}. Power cost is the single variable that decides whether a rig is profitable.`,
  },
  {
    q: "What is the break-even electricity price?",
    a: "It is the power price, in cents per kWh, at which a machine's daily net profit falls to zero. Below it you mine at a profit; above it you lose money every hour you run. The break-even price is the honest way to judge a rig, because it isolates the one input a miner can most control — the power contract.",
  },
  {
    q: "Does this calculator include ERCOT demand-response payments?",
    a: "No, and that is the biggest caveat for Texas. This is a baseline operating estimate from block-subsidy revenue minus power and pool fees. Real Texas miners also earn demand-response and curtailment credits for powering down when the grid is stressed — in August 2023 Riot Platforms earned $31.7 million in such credits, more than triple its mined Bitcoin that month. Those credits are site- and contract-specific, so they are not modeled here.",
  },
  {
    q: "Why does mining profit fall over time even if the price holds?",
    a: "Because network difficulty rises. As more hashrate comes online, Bitcoin automatically retargets difficulty every 2,016 blocks so that blocks keep arriving about every ten minutes. Your fixed hashrate therefore wins a steadily smaller share of the same daily issuance. A calculator shows a snapshot; the trend under it bends down unless price or your efficiency improves.",
  },
  {
    q: "Is Bitcoin mining profitable in Texas?",
    a: `At industrial ERCOT power rates, a current-generation machine is profitable today: the worked example on this page — an ${examplePreset.name} at ${cents(exampleRate)}/kWh — nets about ${usd(example.netProfitDay)} per day with a break-even power price near ${cents(example.breakEvenRate)}/kWh. At the residential retail rate, the same machine loses money. The rig matters; the power contract matters more.`,
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

export default function MiningCalculatorPage() {
  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Bitcoin Mining Calculator (Texas)",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: pageUrl,
    description:
      "A sourced Bitcoin mining profitability calculator built for Texas power rates: BTC mined per day, net profit, profit per watt, break-even electricity price, and hardware payback.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    citation: citations(CALC_SOURCES),
    dateModified: PUBLISHED,
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
      { "@type": "ListItem", position: 2, name: "Bitcoin Mining Calculator", item: pageUrl },
    ],
  };

  return (
    <>
      {[appJsonLd, faqJsonLd, breadcrumbJsonLd].map((schema, i) => (
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
          / Bitcoin Mining Calculator
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Tool · Energy &amp; the grid
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Bitcoin mining calculator, built for Texas power
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Enter a miner&apos;s hashrate and wattage and your Texas electricity
            rate. Get Bitcoin mined per day, net profit, profit per watt, the
            break-even power price, and hardware payback — modeled straight from
            network difficulty and the block subsidy, with the{" "}
            <Link href="/bitcoin-mining-ercot">ERCOT demand-response</Link>{" "}
            caveats the generic hashprice calculators leave out.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published October 31, 2026 · Network baseline verified {LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Bitcoin mining profitability is a miner&apos;s share of total network
            hashrate times the daily block issuance, valued at the BTC price,
            minus pool fees and electricity. At a typical ERCOT industrial rate
            of {cents(exampleRate)} per kWh, one {examplePreset.name} (
            {examplePreset.hashrateTh} TH/s, {examplePreset.watts.toLocaleString()} W)
            nets about {usd(example.netProfitDay)} per day and breaks even near{" "}
            {cents(example.breakEvenRate)} per kWh. At the Texas residential rate
            of about {cents(TEXAS_RATES[3].rate)}, the same machine loses money.
          </p>
        </div>

        {/* The tool */}
        <div className="mt-8">
          <MiningCalculator />
        </div>

        {/* Key facts */}
        <div className="mt-8 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Daily Bitcoin issuance is fixed by the protocol at the block
              subsidy — {DEFAULT_NETWORK.blockSubsidyBtc} BTC since the April 20,
              2024 halving — times roughly 144 blocks per day, about{" "}
              {(DEFAULT_NETWORK.blockSubsidyBtc * DEFAULT_NETWORK.blocksPerDay).toFixed(1)}{" "}
              BTC a day split across all miners by hashrate share.<C n={1} />
            </li>
            <li>
              Electricity is the decisive input: this page&apos;s worked example
              swings from a {usd(example.netProfitDay)}-a-day profit at{" "}
              {cents(exampleRate)}/kWh to a loss at the ~{cents(TEXAS_RATES[3].rate)}
              /kWh Texas residential rate.<C n={6} />
            </li>
            <li>
              A current-generation ASIC such as the Antminer S21 XP is rated at
              about 270 TH/s drawing 3,645 W — roughly 13.5 joules per terahash.
              <C n={3} />
            </li>
            <li>
              The break-even electricity price — the ¢/kWh where net profit hits
              zero — is the cleanest single measure of a rig&apos;s margin,
              because it isolates the one cost a Texas miner most controls.
            </li>
            <li>
              This model excludes ERCOT demand-response and curtailment credits,
              which can exceed hashrate revenue outright: Riot Platforms earned
              $31.7 million in such credits in August 2023, versus 333 BTC mined.
              <C n={7} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-12">
          <h2>How is Bitcoin mining profitability calculated?</h2>
          <p>
            In one formula: your share of the network, times the daily issuance,
            valued at the price, minus your costs. A machine&apos;s{" "}
            <strong>hashrate share</strong> is its terahashes per second divided
            by the whole network&apos;s — currently around{" "}
            {DEFAULT_NETWORK.networkHashrateEh.toLocaleString()} EH/s.<C n={2} />{" "}
            The network mints a fixed <strong>daily issuance</strong> of the{" "}
            {DEFAULT_NETWORK.blockSubsidyBtc}-BTC block subsidy across about 144
            blocks, so a miner earns that issuance in proportion to its share.
            Multiply the Bitcoin mined by the <strong>BTC price</strong> for gross
            revenue, subtract the <strong>pool fee</strong> and the cost of the{" "}
            <strong>electricity</strong> drawn (watts, converted to kWh per day,
            times your rate), and what remains is net operating profit. The
            calculator above runs exactly that math, live, from the numbers you
            enter.
          </p>

          <h2>Why does the electricity rate matter more than the machine?</h2>
          <p>
            Because every competitive miner buys roughly the same ASICs, but the
            power bill is where Texas is won or lost. Hold the {examplePreset.name}{" "}
            fixed and change only the rate: at an industrial{" "}
            {cents(exampleRate)}/kWh contract it nets about {usd(example.netProfitDay)}{" "}
            a day; drag the rate up to the residential meter and the same rig runs
            at a loss. That is the whole reason the industry migrated to{" "}
            <Link href="/bitcoin-mining-map-texas">West Texas</Link>: the ERCOT{" "}
            <strong>energy-only market</strong> produces some of the cheapest
            around-the-clock power in America, and a miner that can power down in
            seconds buys it at the bottom.<C n={6} /> The break-even power price
            the calculator reports — near {cents(example.breakEvenRate)}/kWh in the
            worked example — is the number to negotiate your contract against.
          </p>

          <h2>What does the Texas calculator leave out?</h2>
          <p>
            Deliberately, the things that are site-specific and the things that
            flatter the result. It leaves out <strong>transaction-fee
            revenue</strong> (small in most blocks, but real), and it leaves out
            the costs that turn a spreadsheet profit into a thinner real one:
            cooling and immersion overhead, hosting or colocation margin,
            repairs, hardware depreciation, financing, and taxes. Most important
            for Texas, it leaves out <strong>demand-response and curtailment
            credits</strong> — the payments ERCOT and power contracts make to
            miners for shutting off when the grid is stressed. Those credits are
            the other half of a real Texas miner&apos;s income, and they are
            specific to each site&apos;s contract, so no general calculator can
            model them. In August 2023, Riot Platforms earned{" "}
            <strong>$31.7 million</strong> in power and demand-response credits —
            more than triple the value of the 333 Bitcoin it mined that month.
            <C n={7} /> Read how that market works on{" "}
            <Link href="/bitcoin-mining-ercot">Bitcoin mining and ERCOT</Link>.
          </p>

          <h2>How should I read the payback number?</h2>
          <p>
            As the most optimistic figure on the page, and the one to trust
            least. <strong>Hardware payback</strong> divides the machine&apos;s
            purchase price by today&apos;s daily profit — but today&apos;s profit
            will not hold, because <strong>network difficulty rises</strong>. As
            hashrate comes online, Bitcoin retargets difficulty every 2,016
            blocks to keep blocks ten minutes apart, so a fixed rig wins a
            shrinking slice of the same issuance over time.<C n={1} /> A payback
            of 300 days assumes the next 300 days look like today; they rarely
            do. Treat payback as a ceiling on how fast capital returns, not a
            promise — and weigh it against buying the Bitcoin directly, which
            carries none of the depreciation, downtime, or difficulty risk.
          </p>

          <h2>The honest counterweight</h2>
          <p>
            Any mining calculator, this one included, is a snapshot that looks
            like a forecast. It freezes three things that never hold still —
            price, difficulty, and your power rate — and projects them in a
            straight line out to a year. The straight line is almost always
            wrong: difficulty has trended relentlessly up, price swings violently
            in both directions, and a spot power rate is not a signed contract.
            The calculator is genuinely useful for one job — comparing machines
            and power rates against each other under identical assumptions — and
            genuinely misleading for another: predicting what you will actually
            earn. If the output talks you into a purchase, you have used it
            backwards. Use it to <em>reject</em> setups whose break-even power
            price you cannot beat, and to understand why Texas miners obsess over
            the <Link href="/bitcoin-mining-ercot">off switch</Link> instead of
            the hashrate.
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

        {/* Related */}
        <section className="mt-14 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Keep reading
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/bitcoin-mining-ercot" className="underline decoration-accent/40 underline-offset-2 hover:text-accent-soft">
                Bitcoin mining and ERCOT
              </Link>{" "}
              — the demand-response and curtailment credits this calculator leaves out.
            </li>
            <li>
              <Link href="/bitcoin-mining-map-texas" className="underline decoration-accent/40 underline-offset-2 hover:text-accent-soft">
                The Texas Bitcoin mining map
              </Link>{" "}
              — where the industrial-scale mines actually are, and who runs them.
            </li>
            <li>
              <Link href="/rented-hashrate-cloud-mining" className="underline decoration-accent/40 underline-offset-2 hover:text-accent-soft">
                Rented hashrate and cloud mining
              </Link>{" "}
              — why buying a hashrate contract is not the same bet as running the machine.
            </li>
          </ul>
        </section>

        {/* Sources */}
        <section className="mt-14 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold">Sources</h2>
          <p className="mt-2 text-sm text-muted">
            The model rests on the protocol&apos;s fixed issuance, live network
            data, manufacturer hardware specifications, and U.S. government
            electricity-price data. Network figures are a dated baseline, not a
            live feed — edit them in the calculator to match the current chain.
            This is a research and reference tool, not financial, investment, or
            tax advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {CALC_SOURCES.map((s) => (
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
