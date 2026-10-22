import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";

const pageUrl = `${site.url}/run-a-bitcoin-node-texas`;

export const metadata: Metadata = {
  title: "Run a Bitcoin Node: Why, When, and What Your Uptime Actually Does",
  description:
    "A full Bitcoin node earns nothing and doesn't mine — so why run one? The sourced case: verify your own money, gain wallet privacy, and become an economic node that enforces the rules (the 2017 UASF lesson). What uptime really contributes, and when the buy-in is worth it.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("Run a Bitcoin Node: Why, When, and What Your Uptime Does", {
      kicker: "The base layer",
    }),
    type: "article",
    title: "Run a Bitcoin Node: Why, When, and What Your Uptime Does",
    description:
      "A node doesn't mine and isn't paid for uptime. Its power is enforcing the rules — verify-don't-trust, privacy, and economic-node leverage. The honest case for when it's worth running.",
    url: pageUrl,
  },
};

const LAST_VERIFIED = "October 22, 2026";

const sources = [
  { id: 1, label: "Bitnodes — Bitcoin Network Snapshot: approximately 22,992 reachable nodes (about 20,536 of them full nodes) as of April 27, 2026, with far more unreachable nodes behind firewalls and NAT", url: "https://bitnodes.io/nodes/" },
  { id: 2, label: "Bitcoin.org — Running A Full Node: what a full node validates, the initial block download, listening on port 8333 to accept inbound connections, and pruning to cut disk use", url: "https://bitcoin.org/en/full-node" },
  { id: 3, label: "UASF Working Group — BIP 148: the August 1, 2017 user-activated soft fork, where nodes were configured to reject blocks that did not signal SegWit support", url: "https://www.uasf.org/" },
  { id: 4, label: "D-Central — Bitcoin Independence Day: UASF's Impact on Bitcoin's Evolution: how economic full nodes shifted activation leverage toward node operators in 2017", url: "https://d-central.tech/bitcoin-independence-day-uasfs-impact-on-bitcoins-evolution/" },
  { id: 5, label: "Spark — Bitcoin Network Statistics: reachable node counts and the ~500–600 GB working size of the fully validated chain", url: "https://www.spark.money/tools/bitcoin-network-statistics-dashboard" },
];

const faqs = [
  {
    q: "Do you get paid to run a Bitcoin node?",
    a: "No. Unlike mining, which earns the block subsidy and fees, or proof-of-stake validating, which pays (and penalizes) for uptime, running a Bitcoin full node has no reward and no slashing. You spend a little electricity and disk to gain verification, privacy, and a vote-by-enforcement in the rules. The payoff is sovereignty, not income.",
  },
  {
    q: "Does running a full node secure the Bitcoin network?",
    a: "Partly, and not the way mining does. A node cannot produce blocks or add proof-of-work — that is the miners' job. What a node does is validate and reject: it independently checks every consensus rule and refuses invalid blocks and transactions. The network's security budget is hash power; the network's rule-set is defended by the nodes that enforce it.",
  },
  {
    q: "What does a node's uptime actually contribute?",
    a: "If your node only serves you, uptime just means your wallet can verify whenever you need it. If it is reachable — listening on port 8333 — then good uptime helps the peer-to-peer network: it serves blocks and headers to nodes syncing for the first time, relays transactions, and adds one more honest, censorship-resistant path through the gossip network. Any single node's share is small; the resilience is in the aggregate.",
  },
  {
    q: "When is running a node worth the buy-in?",
    a: "When you self-custody a meaningful amount and want to verify your own coins instead of trusting someone else's server; when you want wallet privacy; when you run Lightning or build on Bitcoin; or when you want to be an economic node that enforces the rules. It is not worth it if you expect income, don't self-custody, or can't commit to the disk, bandwidth, and occasional maintenance.",
  },
  {
    q: "How much does a Bitcoin node cost to run?",
    a: "Modestly. The fully validated chain is roughly 500–600 GB, though pruning drops that to a few gigabytes after the initial download. Hardware can be a $150–400 single-board computer or any spare machine, drawing only a few watts — trivial next to a mining rig. The real costs are the one-time initial block download, ongoing bandwidth, and the discipline to keep it updated.",
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

export default function RunANodePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(sources),
    headline:
      "Run a Bitcoin Node: Why, When, and What Your Uptime Actually Does",
    description:
      "The sourced case for running a full Bitcoin node — verification, privacy, and economic-node rule enforcement — and the honest limits of what one node's uptime contributes.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-10-22",
    dateModified: "2026-10-22",
    about: [
      { "@type": "Thing", name: "Bitcoin full node" },
      { "@type": "Thing", name: "Self-custody" },
      { "@type": "Thing", name: "Consensus rules" },
      { "@type": "Thing", name: "User-activated soft fork" },
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
        name: "Run a Bitcoin Node",
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
          / Run a Bitcoin node
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Essay · The base layer
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Run a node: why, when, and what your uptime does
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            A full Bitcoin node pays nothing, mines nothing, and no one tracks
            your uptime. So the honest question is not &ldquo;how&rdquo; but
            &ldquo;why&rdquo; — and the answer is sovereignty, privacy, and a
            specific kind of leverage over the rules. What a node actually
            contributes to the network, and the point at which the buy-in earns
            its keep.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published October 22, 2026 · Updated {LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Running a Bitcoin full node is worth the buy-in when you self-custody
            a meaningful amount, want wallet privacy, run Lightning, or want to
            help enforce Bitcoin&apos;s rules — not when you expect income, which
            a node never provides. A node validates every consensus rule and
            rejects invalid blocks and transactions, so it lets you verify your
            own money instead of trusting a third party. It does not mine or add
            proof-of-work, so it does not secure the chain the way hash power
            does. Its contribution to the network is enforcement and relay: a
            reachable node with good uptime serves blocks to peers syncing for
            the first time and adds one more honest, censorship-resistant path
            through the network — a small individual share of a resilience that
            only exists in the aggregate of roughly 20,000-plus reachable nodes.
          </p>
        </div>

        {/* Key facts */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Bitnodes counted about 22,992 reachable nodes — roughly 20,536 of
              them full nodes — on April 27, 2026, with far more unreachable
              nodes behind firewalls.<C n={1} />
            </li>
            <li>
              A full node independently validates every consensus rule and
              rejects invalid blocks and transactions; it does not produce
              blocks or add proof-of-work.<C n={2} />
            </li>
            <li>
              The fully validated chain is roughly 500–600 GB, but pruning cuts
              ongoing disk use to a few gigabytes after the initial block
              download.<C n={2} /><C n={5} />
            </li>
            <li>
              A node that listens on port 8333 accepts inbound connections and
              serves blocks and headers to peers syncing for the first time.
              <C n={2} />
            </li>
            <li>
              In the August 1, 2017 user-activated soft fork (BIP 148),
              economic full nodes were set to reject blocks that did not signal
              SegWit — a demonstration that nodes, not miners, decide which
              chain is valid.<C n={3} /><C n={4} />
            </li>
            <li>
              Running a node has no block reward and no uptime payment — unlike
              mining or proof-of-stake validating.<C n={2} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-12">
          <h2>Why run a node if it pays nothing?</h2>
          <p>
            Because the payoff is verification, not income. The{" "}
            <Link href="/texas-bitcoin-glossary">full node</Link> you run
            independently checks every rule that defines Bitcoin — the 21
            million cap, the ban on double-spends, the validity of every
            signature — against the entire history of the chain.<C n={2} /> That
            is the literal content of &ldquo;don&apos;t trust, verify&rdquo;:
            with your own node, you no longer take an exchange&apos;s, a block
            explorer&apos;s, or a wallet company&apos;s word that you were paid,
            that your balance is real, or that the supply hasn&apos;t changed —
            you confirm it yourself. For anyone practicing{" "}
            <Link href="/bitcoin-estate-planning-texas">self-custody</Link> of a
            meaningful amount, that is the difference between owning Bitcoin and
            owning a claim that someone else is honest. The node is the tool that
            makes self-custody actually self-sovereign.
          </p>

          <h2>What does a node contribute to the network?</h2>
          <p>
            Enforcement and relay — not security in the mining sense. A node
            cannot add proof-of-work, so it does not defend the chain against a
            51% attack; that is the{" "}
            <Link href="/bitcoin-mining-ercot">miners&apos;</Link> job, paid for
            in hash power. What a node does is <strong>validate and reject</strong>:
            it refuses any block or transaction that breaks the rules, no matter
            who produced it.<C n={2} /> A node that is <em>reachable</em> —
            listening on port 8333 — does more: it serves the chain to new nodes
            performing their initial download, relays transactions across the
            gossip network, and adds one more independent, hard-to-censor path
            for data to travel.<C n={1} /><C n={2} /> No single node is decisive,
            and Bitcoin neither tracks nor rewards your particular uptime. The
            value is statistical: the more well-distributed, reliably reachable
            nodes there are — across jurisdictions, ISPs, and operators — the
            harder the network is to partition, censor, or capture. Your uptime
            is a small, unpaid, additive contribution to that collective
            resilience.
          </p>

          <h2>When is your node&apos;s rule-enforcement actually significant?</h2>
          <p>
            When it is an <strong>economic node</strong> — one that backs real
            activity you or others rely on. The clearest proof is{" "}
            <strong>August 1, 2017</strong>. In the user-activated soft fork
            (BIP 148), users ran nodes configured to reject any block that did
            not signal SegWit, after miners had stalled the upgrade for
            months.<C n={3} /><C n={4} /> The lesson was not that one hobbyist&apos;s
            node mattered; it was that the <em>aggregate</em> of nodes backing
            the economy — exchanges, wallets, merchants, and individual holders
            who verify their own receipts — determines which chain the word
            &ldquo;Bitcoin&rdquo; refers to. Miners produce blocks, but a block
            the economic nodes reject is worth nothing. Running a node makes you
            one of those enforcers: a miner who changes the rules you enforce
            needs you to accept the change, and you can simply decline. That is
            real leverage, and it is why the <em>count and distribution</em> of
            enforcing nodes is a measure of how decentralized Bitcoin&apos;s
            governance actually is. One node is a rounding error; the principle
            that any user can be a full peer is the thing that has teeth.
          </p>

          <h2>When is the buy-in worth it — and when is it not?</h2>
          <p>
            It is worth it when you have something to verify or protect: you{" "}
            <Link href="/what-texas-law-says-about-bitcoin">self-custody</Link>{" "}
            a meaningful amount and want to confirm your own coins; you want
            wallet privacy — querying your balance against your own node instead
            of leaking your addresses to a third-party server; you run{" "}
            <Link href="/bitcoin-frontier-stack-texas">Lightning</Link> or build
            on Bitcoin, both of which want a full node as their trust anchor; or
            you want to be a working part of the rule-set rather than a
            spectator. It is <em>not</em> worth it if you are chasing yield —
            there is none — or if you don&apos;t self-custody and don&apos;t
            transact, in which case the sovereignty is abstract and the
            maintenance is real. The honest break-even is low but not zero: the
            chain is ~500–600 GB (a few gigabytes if you prune), the hardware can
            be a cheap single-board computer drawing a few watts, and the ongoing
            cost is bandwidth and the discipline to keep the software
            current.<C n={2} /><C n={5} /> If you hold your own keys, the node is
            the cheapest sovereignty you can buy. If you don&apos;t, it is a
            hobby — a worthwhile one, but a hobby.
          </p>

          <h2>Why does this fit the Texas frame?</h2>
          <p>
            Because a node is the self-reliance version of Bitcoin, and it owes
            nothing to the grid story the state is famous for. The{" "}
            <Link href="/bitcoin-mining-map-texas">industrial mines</Link> that
            put Texas on the Bitcoin map need cheap megawatts; a node needs a few
            watts and a home internet line, which makes it the one piece of
            Bitcoin infrastructure anyone in the state can run regardless of
            their power deal. It is the same &ldquo;verify, don&apos;t
            trust&rdquo; instinct that runs through{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law says about Bitcoin
            </Link>{" "}
            and that the Austin builder community on the{" "}
            <Link href="/bitcoin-frontier-stack-texas">frontier stack</Link>{" "}
            depends on — and it is the individual-scale complement to the{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              state&apos;s own reserve
            </Link>
            : the state verifies its holdings; you can verify yours the same way,
            on the same base layer, from a box on a shelf.
          </p>

          <h2>The honest counterweight</h2>
          <p>
            The case for running a node is routinely oversold. A single node does
            not &ldquo;secure the network,&rdquo; does not make Bitcoin go up, and
            is not a civic duty — the network ran fine before yours and will run
            fine without it. Uptime is unrewarded and, for a node that serves
            only you, largely irrelevant; the aggregate benefits, not your
            particular machine. The initial block download can take a day or
            more, drives and SD cards fail, and an abandoned node running old
            software is worse than none. And the strongest argument — economic-node
            leverage — only accrues to nodes that back real economic weight;
            a node attached to no coins and no activity carries the principle but
            little of the force. The accurate claim is narrow: if you self-custody
            and transact, a node converts trust into verification cheaply and is
            clearly worth it; if you don&apos;t, run one to learn, but don&apos;t
            mistake it for a contribution the network was waiting on.
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
            Network data and protocol docs first: the Bitnodes snapshot and
            Bitcoin.org&apos;s full-node guide, then the UASF record for the
            economic-node argument. This is a research and reference article, not
            financial or security advice — follow current Bitcoin Core
            documentation when setting up a node.
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
