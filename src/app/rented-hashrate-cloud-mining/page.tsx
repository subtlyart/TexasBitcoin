import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

// DISCRETION: reader-protection reference. Vendor-neutral by design — it names
// no rented-hashrate seller and links to none. It exists because the category
// generates steady inbound pitches ("feature our proof dashboard"); this page
// is the answer we give instead. Indexed and in llms.txt; reachable from the
// mining map and the ERCOT page by body copy, not the shell nav.

const pageUrl = `${site.url}/rented-hashrate-cloud-mining`;

export const metadata: Metadata = {
  title: "Rented Hashrate and Cloud Mining: How to Evaluate the Offer",
  description:
    "A vendor-neutral guide to rented hashrate and cloud mining — what you are actually buying (delivered work vs. an uncertain mining outcome), what a buyer can and cannot verify, the warning signs, and the Texas enforcement record from BitConnect to GAW Miners. Not investment advice.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Rented Hashrate and Cloud Mining: How to Evaluate the Offer",
    description:
      "Delivered work vs. an uncertain outcome: how to read a rented-hashrate or cloud-mining contract, what you can verify, and the enforcement record. Reference only — no vendor links.",
    url: pageUrl,
  },
};

const LAST_VERIFIED = "October 5, 2026";

const sources = [
  { id: 1, label: "U.S. Securities and Exchange Commission — Complaint, SEC v. Homero Joshua Garza, GAW Miners LLC, and ZenMiner LLC (filed December 1, 2015): the \"Hashlet\" cloud-mining shares sold to more than 10,000 investors for about $20 million, where the company lacked the computing power it sold", url: "https://www.sec.gov/files/litigation/complaints/2015/comp23415.pdf" },
  { id: 2, label: "SEC — Press release 2015-271: \"SEC Charges Bitcoin Mining Companies\" (December 1, 2015), describing GAW Miners and ZenMiner as a Ponzi scheme that sold more shares of mining power than it owned", url: "https://www.sec.gov/newsroom/press-releases/2015-271" },
  { id: 3, label: "SEC — Litigation Release LR-23415, SEC v. Garza (final judgment: Garza ordered to pay $9,182,000 in disgorgement plus prejudgment interest)", url: "https://www.sec.gov/enforcement-litigation/litigation-releases/lr-23415" },
  { id: 4, label: "Texas State Securities Board — Administrative Action Report, January–March 2018: the Emergency Cease and Desist Order entered January 4, 2018 against BitConnect and its cloud-mining entity for unregistered securities promising returns of 100%+ annually", url: "https://www.ssb.texas.gov/news-publications/administrative-action-report-jan-march-2018" },
  { id: 5, label: "U.S. Commodity Futures Trading Commission — Customer Advisory: \"Beware Virtual Currency Pump-and-Dump Schemes\" (February 15, 2018), on phony hype and the unregulated cash market for virtual currencies", url: "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/beware_virtual_currency_pump_dump.html" },
  { id: 6, label: "CFTC — Investor Alert: \"Watch Out for Fraudulent Digital Asset and 'Crypto' Trading Websites,\" on sites that display fabricated balances and account activity to simulate returns", url: "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/watch_out_for_digital_fraud.html" },
  { id: 7, label: "The Block — \"Bitcoin ushers in fourth halving as miners' block subsidy reward drops to 3.125 BTC\" (April 20, 2024, block height 840,000)", url: "https://www.theblock.co/post/289875/bitcoin-ushers-in-fourth-halving-as-miners-block-subsidy-reward-drops-to-3-125-btc" },
  { id: 8, label: "Bitcoin protocol — the difficulty target recalculates every 2,016 blocks (about two weeks) to hold the average block interval near ten minutes regardless of total hashrate online", url: "https://en.bitcoin.it/wiki/Difficulty" },
];

const faqs = [
  {
    q: "What is rented hashrate?",
    a: "Rented hashrate — also sold as cloud mining, hashrate rental, or a mining \"boost\" — is a contract to pay for a block of Bitcoin mining computing power run by someone else for a set period, rather than owning the machines. You pay upfront for the capacity; any Bitcoin the capacity earns, minus fees, is credited to you. The hardware, electricity, and location are the seller's, and you typically never see them.",
  },
  {
    q: "Is cloud mining a scam?",
    a: "Not categorically, but the category has a long fraud record and demands scrutiny. The SEC charged GAW Miners and ZenMiner in December 2015 for selling about $20 million of \"Hashlet\" cloud-mining shares backed by computing power the company did not own. The structure invites fraud because the buyer rarely sees the hardware and most \"proof\" is numbers on the seller's own dashboard. Legitimate rentals exist; the burden is on the seller to prove it.",
  },
  {
    q: "What is the difference between delivered work and a mining outcome?",
    a: "Delivered work is the hashing the seller performed — accepted shares, service time, and average hashrate. A mining outcome is the Bitcoin that work earns, which depends on network difficulty, the block subsidy (3.125 BTC since the April 2024 halving), and luck. A rental can deliver exactly the work promised and still earn little or nothing. Honest sellers sell the first and promise nothing about the second.",
  },
  {
    q: "What can a buyer actually verify in a cloud-mining contract?",
    a: "Less than most dashboards suggest. Activation, accepted shares, service time, and average hashrate are almost always self-reported on the seller's own site, with no independent attestation and no way to confirm the hashrate did real work rather than display a number. The CFTC has warned that fraudulent crypto sites fabricate balances and activity outright. Treat a vendor proof page as a marketing claim, not evidence.",
  },
  {
    q: "How is rented hashrate different from a Texas Bitcoin mine?",
    a: "A Texas industrial mine is physical, metered, and on the record: Riot's Rockdale site is a roughly 700-megawatt facility, miners above 75 MW are registered with ERCOT, and their grid behavior appears in public filings. Rented hashrate is an off-site contract whose only evidence is a dashboard. The contrast is the point — the thing you can drive past and the thing you can only be shown.",
  },
  {
    q: "Has Texas acted against mining-investment schemes?",
    a: "Yes. The Texas Securities Commissioner entered an Emergency Cease and Desist Order on January 4, 2018 against BitConnect, whose offerings included a cloud-mining entity, for selling unregistered securities that promised returns above 100% a year. When a rented-hashrate deal is sold as an investment with promised profit rather than a service with a delivered-work receipt, it can cross into securities regulation.",
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

export default function RentedHashratePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rented Hashrate and Cloud Mining: How to Evaluate the Offer",
    description:
      "A vendor-neutral guide to rented hashrate and cloud mining: delivered work vs. an uncertain mining outcome, what a buyer can verify, the warning signs, and the Texas enforcement record.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
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
        name: "Rented Hashrate and Cloud Mining",
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
          / Rented Hashrate and Cloud Mining
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · Energy &amp; the grid
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Rented hashrate and cloud mining, evaluated
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            A reader&apos;s guide to a category Texas knows the physical end of
            well – the off-site cousin of{" "}
            <Link href="/bitcoin-mining-map-texas">the mines on our map</Link>:
            what a rented-hashrate or cloud-mining contract actually sells, the
            one distinction that separates an honest offer from a doomed one,
            what a buyer can and cannot verify, and the enforcement record that
            explains the caution. We name no seller and link to none – this is a
            way to read the category, not a recommendation of anyone in it.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published October 5, 2026 · Updated {LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Rented hashrate – sold as cloud mining, hashrate rental, or a mining
            &quot;boost&quot; – is a contract to pay upfront for Bitcoin mining
            power that someone else runs, and to receive whatever Bitcoin that
            power earns, minus fees. The decisive question is what you are
            buying: <strong>delivered work</strong> (accepted shares and
            measured hashrate) is something a seller can honestly provide, while
            a <strong>mining outcome</strong> (actual Bitcoin, let alone profit)
            depends on network difficulty, the 3.125 BTC block subsidy, and
            luck, and can never be promised. The category has a documented fraud
            record, and almost all of its &quot;proof&quot; is self-reported, so
            scrutiny is the default.
          </p>
        </div>

        {/* Key facts */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              The SEC charged GAW Miners and ZenMiner on December 1, 2015 for
              selling about $20 million of &quot;Hashlet&quot; cloud-mining
              shares to more than 10,000 investors while owning far less mining
              power than sold.<C n={1} /><C n={2} />
            </li>
            <li>
              Founder Homero Joshua Garza was ordered to pay $9,182,000 in
              disgorgement plus prejudgment interest in the SEC&apos;s final
              judgment.<C n={3} />
            </li>
            <li>
              The Texas Securities Commissioner entered an Emergency Cease and
              Desist Order on January 4, 2018 against BitConnect, whose
              offerings included a cloud-mining entity, for unregistered
              securities promising returns above 100% a year.<C n={4} />
            </li>
            <li>
              The Bitcoin block subsidy fell from 6.25 BTC to 3.125 BTC at the
              fourth halving on April 20, 2024 (block 840,000) – the reward any
              mining power competes for.<C n={7} />
            </li>
            <li>
              Bitcoin&apos;s difficulty retargets every 2,016 blocks (about two
              weeks), so a fixed amount of rented hashrate earns less as more
              total hashrate comes online.<C n={8} />
            </li>
            <li>
              The CFTC has warned that fraudulent crypto websites display
              fabricated balances and account activity to simulate returns –
              the same surface a rented-hashrate dashboard uses to show
              &quot;proof.&quot;<C n={6} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-12">
          <h2>What is rented hashrate, and how does a cloud-mining contract work?</h2>
          <p>
            <strong>Rented hashrate</strong> is a contract to pay for Bitcoin
            mining computing power – measured in hashes per second – that a
            provider owns and operates, instead of buying machines yourself. The
            same product is sold as <strong>cloud mining</strong>, a{" "}
            <strong>hashrate rental</strong>, or a mining <strong>&quot;boost&quot;</strong>.
            You pay upfront for a block of capacity over a fixed term; the
            provider points that capacity at a mining pool; and the Bitcoin it
            earns, after the provider&apos;s fees and the pool&apos;s cut, is
            credited to your wallet. The appeal is obvious – exposure to mining
            with no hardware, no power contract, no heat, and no West Texas
            site. The catch is structural: the machines, the electricity, and
            the location are the seller&apos;s, and you almost never see any of
            them. Everything you know about whether the capacity exists and
            works arrives through the seller&apos;s own interface. That is the
            opposite of the physical mines this publication covers, where the
            steel is on{" "}
            <Link href="/bitcoin-mining-map-texas">a map</Link> and the grid
            behavior is on{" "}
            <Link href="/bitcoin-mining-ercot">the ERCOT record</Link>.
          </p>

          <h2>What are you actually buying: delivered work or a mining outcome?</h2>
          <p>
            This is the single distinction that separates a defensible offer
            from a doomed one, and a careful seller will lead with it.{" "}
            <strong>Delivered work</strong> is what the provider did:
            activation time, accepted shares, service hours, and the measured
            average hashrate over the term. A provider can genuinely deliver
            that, and in principle show it. A <strong>mining outcome</strong> is
            what that work <em>earned</em> – and that is governed by forces no
            seller controls. The reward per block is fixed by protocol at{" "}
            <strong>3.125 BTC</strong> since the April 2024 halving.<C n={7} />{" "}
            The share of blocks your hashrate wins falls as the network&apos;s
            total hashrate rises, because{" "}
            <strong>difficulty retargets every 2,016 blocks</strong> to keep
            blocks roughly ten minutes apart.<C n={8} /> And within that, which
            blocks a pool actually finds is probabilistic. The consequence: a
            rental can deliver <em>exactly</em> the hashrate promised and still
            earn little, or nothing above cost. An honest offer sells you the
            delivered work and the measurements that prove it, and promises
            nothing about the Bitcoin. A dishonest one sells the outcome –
            implied profit, &quot;always profitable,&quot; recovery of your
            rental cost – which is the thing that cannot be promised and the
            thing the fraud cases were built on.
          </p>

          <h2>Why does &quot;pay for shares, not blocks&quot; sound legitimate?</h2>
          <p>
            Because in ordinary pooled mining it <em>is</em>. Real miners join
            pools and are paid for the <strong>accepted shares</strong> their
            machines submit – proof of work done – rather than only when the
            pool finds a block, under payout models such as FPPS
            (full-pay-per-share) and PPLNS (pay-per-last-N-shares). So a provider
            who says &quot;we pay you for delivered hashrate, not for finding a
            block&quot; is borrowing a true and reassuring fact about how mining
            compensation normally works. The sleight of hand, where it happens,
            is to use that legitimate framing to wave away the part that is
            unverifiable to you: in a pool, <em>you</em> or an operator you
            trust can see the shares hit the pool; in a rental, the shares,
            the hashrate, and the service time are all reported by the one
            party with an incentive to report them favorably. The vocabulary is
            honest; whether the numbers behind it are is the open question.
          </p>

          <h2>What can a buyer actually verify – and what can&apos;t they?</h2>
          <p>
            Far less than a polished &quot;proof center&quot; implies. The
            figures these services surface – activation, accepted shares,
            service time, average hashrate – are almost always{" "}
            <strong>self-hosted on the seller&apos;s own domain</strong>, with
            no third-party attestation and no on-chain anchor a buyer can
            independently reconstruct. There is generally no way to confirm the
            displayed hashrate performed real work on a real machine rather than
            incrementing a number in a database. The CFTC has specifically
            warned that fraudulent digital-asset sites fabricate balances and
            account activity to simulate returns – the precise surface a rental
            dashboard relies on.<C n={6} /> What a buyer <em>can</em> sometimes
            verify is thin but real: that payouts actually arrive on-chain to
            their stated wallet, in amounts and on a schedule they can check on
            a block explorer; that the provider&apos;s claimed pool membership
            shows up where pool statistics are public; and that the written
            contract&apos;s terms are specific and enforceable rather than
            aspirational. Treat a vendor proof page as a <em>marketing claim</em>
            {" "}until an on-chain payment or an independent record corroborates
            it.
          </p>

          <h2>What are the warning signs?</h2>
          <p>
            No single item is proof of fraud, but each should slow you down, and
            several together should stop you.
          </p>
        </div>

        {/* Warning signs box */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Warning signs in a rented-hashrate offer
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              <strong>A promised outcome.</strong> Any guarantee of profit,
              &quot;always profitable,&quot; fixed daily returns, or recovery of
              your rental cost – the outcome no one can promise.
            </li>
            <li>
              <strong>Proof that lives only on the seller&apos;s site.</strong>{" "}
              Dashboards, &quot;proof centers,&quot; and screenshots with no
              on-chain payment, no independent attestation, and no verifiable
              pool record.
            </li>
            <li>
              <strong>Returns that outrun mining reality.</strong> Yields that
              ignore the 3.125 BTC subsidy, rising difficulty, and fees – BitConnect
              marketed 100%+ a year before Texas shut it down.<C n={4} />
            </li>
            <li>
              <strong>Referral or recruitment rewards.</strong> Payouts for
              signing up other buyers, which shifts the economics from mining to
              recruiting – a Ponzi tell.
            </li>
            <li>
              <strong>Pressure and opacity.</strong> Urgency, limited-time
              capacity, anonymous operators, no verifiable corporate identity,
              and vague or unenforceable refund language.
            </li>
            <li>
              <strong>Investment framing.</strong> An offer sold as an
              investment with expected profit, rather than a service with a
              delivered-work receipt, may be an unregistered security.<C n={4} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-12">
          <h2>How does Texas treat mining-investment schemes?</h2>
          <p>
            Texas knows the honest end of mining intimately – the{" "}
            <Link href="/rockdale-texas-bitcoin">Rockdale</Link> and Corsicana
            megawatts, the <Link href="/bitcoin-mining-ercot">ERCOT</Link>{" "}
            curtailment economics – and it has also been one of the more
            aggressive states against the dishonest end. The{" "}
            <Link href="/texas-state-securities-board-bitcoin">
              Texas State Securities Board
            </Link>{" "}
            entered an <strong>Emergency Cease and Desist Order on January 4,
            2018</strong> against <strong>BitConnect</strong>, whose offerings
            included a cloud-mining entity, finding its lending and staking
            programs were unregistered securities sold with promises of returns
            above 100% a year; BitConnect announced days later it would stop
            taking U.S. money and shut its platform down that same month.
            <C n={4} /> At the federal level, the{" "}
            <strong>SEC charged GAW Miners and ZenMiner</strong> on December 1,
            2015 for selling about <strong>$20 million</strong> of
            &quot;Hashlet&quot; cloud-mining shares to more than 10,000
            investors while owning only a fraction of the computing power it
            sold – a Ponzi scheme, in the Commission&apos;s words – and founder
            Homero Joshua Garza was ultimately ordered to pay{" "}
            <strong>$9,182,000</strong> in disgorgement.<C n={1} /><C n={2} />
            <C n={3} /> The throughline is the same one this page opened with:
            the trouble starts when a <em>service</em> that delivers work is
            dressed up as an <em>investment</em> that promises a return.
          </p>

          <h2>The honest counterweight</h2>
          <p>
            Rented hashrate is not inherently a scam, and the fairest version of
            this page says so. A relatively disciplined offer does exist in the
            wild: it sells <em>only</em> delivered work; it states plainly that
            there is no guarantee of a block, a reward, a profit, or recovery of
            the rental cost; it returns funds in Bitcoin to a verified wallet if
            the capacity cannot be activated; and it adjusts the charge
            proportionally when the measured average hashrate falls below the
            power that was confirmed. Those are genuinely better terms than the
            fraud cases offered, and a buyer who wants mining exposure without
            hardware, understands they are buying a service and not a return,
            and can afford to lose the fee, is not being foolish to consider one.
            But note what even the disciplined version cannot fix: the
            measurements remain self-reported, the upside is still capped by
            difficulty and the subsidy, and &quot;below 75% of confirmed
            power&quot; is only as meaningful as your ability to confirm the
            power – which, off-site, you usually cannot. The honest offer
            narrows the risk; it does not remove the thing that makes the whole
            category hard, which is that you are trusting a dashboard. That is
            why our standing answer to anyone pitching their proof records is
            this page rather than a feature: we will explain the category to
            readers, and we will not lend our name to any seller in it.
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
            Primary record first: the U.S. Securities and Exchange Commission,
            the Texas State Securities Board, and the U.S. Commodity Futures
            Trading Commission, then the Bitcoin protocol and reputable
            reporting. This is a research and reference article, not financial,
            investment, or legal advice, and not a recommendation of any
            product or seller.
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
