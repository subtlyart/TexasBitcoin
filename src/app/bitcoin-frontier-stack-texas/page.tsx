import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";

const pageUrl = `${site.url}/bitcoin-frontier-stack-texas`;

export const metadata: Metadata = {
  title: "The Frontier Stack: Lightning, Taproot Assets, and Stablecoins That Settle to Bitcoin",
  description:
    "The programmable-money layer built on Bitcoin — Lightning for instant payments, Taproot (activated Nov 14, 2021) and Taproot Assets (mainnet Oct 18, 2023) for issuing dollars and tokens that settle to the base layer — and the Austin builders shipping it.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("The Frontier Stack: Programmable Money That Settles to Bitcoin", {
      kicker: "The frontier",
    }),
    type: "article",
    title: "The Frontier Stack: Programmable Money That Settles to Bitcoin",
    description:
      "Lightning, Taproot, and Taproot Assets turn Bitcoin into a settlement layer for instant payments and dollar-denominated stablecoins — without leaving the hardest base layer. The sourced map, and the Austin builders on it.",
    url: pageUrl,
  },
};

const LAST_VERIFIED = "October 21, 2026";

const sources = [
  { id: 1, label: "b10c — Monitoring Taproot Activation (Nov 14, 2021): the Taproot soft fork locked in and activated at block 709,632, deploying BIPs 340 (Schnorr), 341 (Taproot), and 342 (Tapscript)", url: "https://b10c.me/projects/019-taproot-activation-monitoring/" },
  { id: 2, label: "Lightning Labs — Taproot Assets on Mainnet (v0.3, October 18, 2023): the mainnet alpha of the protocol for issuing assets whose proofs are anchored in Bitcoin transactions", url: "https://lightning.engineering/posts/2023-10-18-taproot-assets-v0.3/" },
  { id: 3, label: "Bitcoin Magazine — Lightning Labs Rolls Out Taproot Assets Mainnet Alpha: bringing stablecoins and other assets to Bitcoin and, over Lightning, to instant settlement", url: "https://bitcoinmagazine.com/technical/lightning-labs-rolls-out-taproot-assets-mainnet-alpha" },
  { id: 4, label: "Lightning Labs — Announcing Taproot Assets v0.7 (December 16, 2025): the \"set-and-forget\" asset layer for Lightning, with stablecoins including USDT moving over the network", url: "https://lightning.engineering/posts/2025-12-16-tapd-0.7-launch/" },
  { id: 5, label: "CNBC — Inside Austin's Bitcoin Underground (March 24, 2024): Bitcoin Commons in the Littlefield Building at Congress Avenue and Sixth Street, where stewards including Parker Lewis fund and house Bitcoin developers", url: "https://www.cnbc.com/2024/03/24/inside-austins-bitcoin-underground.html" },
  { id: 6, label: "Zaprite (Austin, Texas) — CB Insights company profile: a Bitcoin-and-fiat payments company founded in 2021, building checkout and invoicing for non-custodial Bitcoin and Lightning payments", url: "https://www.cbinsights.com/company/zaprite" },
  { id: 7, label: "Reason — Bitcoin Doesn't Care About Your College Degree (January 6, 2022): Jimmy Song's Programming Blockchain seminar, taught from the same material as his course at the University of Texas at Austin", url: "https://reason.com/video/2022/01/06/bitcoin-doesnt-care-about-your-college-degree/" },
  { id: 8, label: "Bitcoin.org — BIP 343: the Taproot activation parameters, minimum activation height 709,632, signaling bit 2", url: "https://bitcoin.org/bip/343/" },
];

const faqs = [
  {
    q: "What does \"settles to Bitcoin\" mean?",
    a: "It means the final record of value lives on the Bitcoin base layer, not on a separate blockchain. Lightning payments and Taproot Assets both anchor their state in Bitcoin transactions: you can transact instantly off-chain, but settlement — the thing that is ultimately true — is a Bitcoin UTXO. The speed happens on layers above; the security stays on the hardest base layer.",
  },
  {
    q: "What is the Lightning Network?",
    a: "Lightning is a payment layer built on top of Bitcoin. Two parties open a channel with an on-chain Bitcoin transaction, then send value back and forth off-chain instantly and for near-zero fees, settling the final balance to Bitcoin when they close the channel. It turns Bitcoin from a settlement network into one that can also handle coffee-sized payments.",
  },
  {
    q: "What are Taproot Assets?",
    a: "Taproot Assets is a protocol from Lightning Labs, released to mainnet on October 18, 2023, for issuing assets — including dollar stablecoins — whose ownership proofs are anchored in Bitcoin transactions. Combined with Lightning, those assets can move instantly. It lets a dollar-denominated token ride Bitcoin's rails instead of a separate chain.",
  },
  {
    q: "Do stablecoins on Bitcoin compete with Bitcoin?",
    a: "On the frontier thesis, they extend it. A stablecoin issued through Taproot Assets settles to Bitcoin and moves over Lightning, so every dollar transaction strengthens the base layer's role as the neutral settlement network rather than routing around it. The dollar is the unit; Bitcoin is the rail and the final record.",
  },
  {
    q: "What is Texas's role in the Bitcoin frontier?",
    a: "Austin is a builder hub. Bitcoin Commons in the Littlefield Building houses and funds developers; Zaprite, founded in Austin in 2021, builds Bitcoin payment infrastructure; and Jimmy Song has taught Bitcoin programming from material he also used in a University of Texas at Austin course. The frontier is being written partly in Texas, next to the mines and the money law.",
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

export default function FrontierStackPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(sources),
    headline:
      "The Frontier Stack: Lightning, Taproot Assets, and Stablecoins That Settle to Bitcoin",
    description:
      "The programmable-money layer on Bitcoin — Lightning, Taproot, and Taproot Assets — and the Austin builders shipping it.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    about: [
      { "@type": "Thing", name: "Lightning Network" },
      { "@type": "Thing", name: "Taproot" },
      { "@type": "Thing", name: "Taproot Assets" },
      { "@type": "Thing", name: "Stablecoin" },
      { "@type": "Place", name: "Austin, Texas" },
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
        name: "The Bitcoin Frontier Stack in Texas",
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
          / The Bitcoin frontier stack
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Essay · The frontier
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The frontier stack, settled to Bitcoin
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Programmable money does not require a new blockchain. Lightning,
            Taproot, and Taproot Assets build instant payments and
            dollar-denominated tokens directly on the hardest base layer — and
            a cluster of Austin builders is shipping it. What the stack is, why
            &ldquo;settles to Bitcoin&rdquo; is the whole thesis, and who is
            writing it in Texas.
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
            The Bitcoin frontier stack is the set of protocols that add
            programmability and speed on top of Bitcoin without leaving it. The
            Lightning Network moves payments instantly through channels that
            settle to Bitcoin. The Taproot upgrade, activated November 14,
            2021, added the signatures and scripting that made richer
            constructions efficient. Taproot Assets, live on mainnet since
            October 18, 2023, lets issuers mint assets — including dollar
            stablecoins — whose proofs are anchored in Bitcoin transactions and
            can move over Lightning. In every case the final record of value is
            a Bitcoin transaction: the stack settles to Bitcoin.
          </p>
        </div>

        {/* Key facts */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Taproot activated on the Bitcoin network at block 709,632 on
              November 14, 2021, deploying Schnorr signatures (BIP 340),
              Taproot (BIP 341), and Tapscript (BIP 342).<C n={1} /><C n={8} />
            </li>
            <li>
              Taproot Assets reached mainnet as a v0.3 alpha on October 18,
              2023, issuing assets whose ownership proofs are anchored in
              Bitcoin transactions.<C n={2} /><C n={3} />
            </li>
            <li>
              Lightning Labs&apos; Taproot Assets v0.7, released December 16,
              2025, moves stablecoins including USDT over the Lightning
              Network.<C n={4} />
            </li>
            <li>
              Zaprite, a Bitcoin-and-fiat payments company, was founded in
              Austin, Texas in 2021.<C n={6} />
            </li>
            <li>
              Bitcoin Commons, in Austin&apos;s Littlefield Building at Congress
              Avenue and Sixth Street, houses and funds Bitcoin developers;
              Parker Lewis is among its stewards.<C n={5} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-12">
          <h2>What is the Bitcoin frontier stack?</h2>
          <p>
            It is the layered set of protocols that make Bitcoin programmable
            and fast while keeping settlement on the base layer. The base layer
            itself is deliberately conservative — slow blocks, limited
            scripting, maximal security. The frontier builds <em>on top</em>:
            the{" "}
            <Link href="/texas-bitcoin-glossary">Lightning Network</Link> for
            instant payments, the Taproot upgrade for efficient signatures and
            scripts, and Taproot Assets for issuing tokens that inherit
            Bitcoin&apos;s settlement.<C n={1} /><C n={2} /> The design rule
            that separates this from the broader &ldquo;crypto&rdquo; world is
            simple: nothing here asks you to trust a different chain. Every
            layer resolves, eventually, to a Bitcoin transaction. That is why
            this site treats stablecoins and smart contracts specifically as
            layers that <strong>settle to Bitcoin</strong>, not as a gateway to
            generic multi-chain coverage.
          </p>

          <h2>Why does &ldquo;settles to Bitcoin&rdquo; matter?</h2>
          <p>
            Because settlement is where trust actually lives. A Lightning
            payment can clear in under a second, but what makes it final is
            that either party can close the channel to a{" "}
            <strong>Bitcoin transaction</strong> that no one can reverse.
            Taproot Assets works the same way: an issued token&apos;s proof of
            ownership commits to a Bitcoin transaction, so the asset inherits
            Bitcoin&apos;s immutability instead of a smaller chain&apos;s.
            <C n={2} /><C n={3} /> The payoff is that speed and programmability
            no longer require a security trade-off. The hardest, most neutral
            ledger in the world becomes the court of final appeal for layers
            that move at the speed of a card swipe. The frontier is not an
            alternative to Bitcoin&apos;s conservatism; it is the reward for
            it.
          </p>

          <h2>How do stablecoins settle to Bitcoin?</h2>
          <p>
            Through Taproot Assets. The protocol, live on mainnet since October
            18, 2023, lets an issuer mint a dollar-denominated token whose
            proofs are anchored in Bitcoin transactions; Lightning then carries
            that token between parties instantly.<C n={2} /><C n={4} /> By the
            v0.7 release on December 16, 2025, Lightning Labs described
            stablecoins including <strong>USDT</strong> moving over the network.
            <C n={4} /> The significance is strategic: dollars are what most of
            the world transacts in, and routing them over Bitcoin&apos;s rails
            turns dollar demand into base-layer demand rather than a reason to
            leave it. A Texan paying a supplier in stablecoin dollars, settled
            to Bitcoin, is using the same base layer that secures the{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              state&apos;s own reserve
            </Link>{" "}
            — one neutral ledger under both the unit of account and the reserve
            asset.
          </p>

          <h2>Who is building the frontier in Texas?</h2>
          <p>
            Austin has become a Bitcoin builder hub, and the people on it recur
            across this site.{" "}
            <Link href="/parker-lewis-bitcoin">Parker Lewis</Link>, author of
            the <em>Gradually, Then Suddenly</em> series, works on Bitcoin
            payments at Zaprite — an Austin company founded in 2021 — and is a
            steward of <strong>Bitcoin Commons</strong>, the developer space in
            the Littlefield Building that funds and houses builders.<C n={5} />
            <C n={6} />{" "}
            <Link href="/jimmy-song-bitcoin">Jimmy Song</Link>, author of{" "}
            <em>Programming Bitcoin</em>, has taught the protocol from material
            he also used in a course at the University of Texas at Austin.
            <C n={7} /> The{" "}
            <Link href="/satoshi-nakamoto-institute">
              Satoshi Nakamoto Institute
            </Link>{" "}
            preserves the intellectual foundation the builders draw on. The
            frontier, in other words, is not happening only in San Francisco or
            online — a meaningful share of it is being written next to the{" "}
            <Link href="/bitcoin-mining-map-texas">Texas mines</Link> and the{" "}
            <Link href="/what-texas-law-says-about-bitcoin">Texas money law</Link>.
          </p>

          <h2>The honest counterweight</h2>
          <p>
            The frontier is early, and its numbers are small next to the hype.
            Taproot Assets is young — mainnet in late 2023, stablecoin support
            maturing through 2025 — and real-world stablecoin volume still runs
            overwhelmingly on other chains, not on Bitcoin.<C n={4} /> Lightning
            carries a tiny fraction of global payments, and its user experience
            still asks more of people than a custodial app does. Taproot&apos;s
            adoption among wallets and services has been gradual rather than
            sweeping.<C n={1} /> None of that is fatal to the thesis, but it is
            the honest state of play: the stack that settles to Bitcoin is a
            credible architecture with modest traction, not a finished
            displacement of the dollar rails it aims to undercut. The claim here
            is about direction and design, not about volume that has already
            arrived.
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
            Protocol record first: Lightning Labs&apos; own release notes and
            the Taproot activation parameters, then reporting on the Austin
            builder community. This is a research and reference article, not
            financial, investment, or legal advice.
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
