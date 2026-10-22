import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";

const pageUrl = `${site.url}/texas-bitcoin-reserve-game-theory`;

export const metadata: Metadata = {
  title: "The Game Theory of the Texas Strategic Bitcoin Reserve",
  description:
    "Why a US state holding Bitcoin is a strategic move, not just a budget line. The sourced read on SB 21 as a credible commitment, the $500B floor as a Schelling point, and the cascade when the second and third states follow — with the honest limits.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("The Game Theory of the Texas Strategic Bitcoin Reserve", {
      kicker: "The money law",
    }),
    type: "article",
    title: "The Game Theory of the Texas Strategic Bitcoin Reserve",
    description:
      "SB 21 as a credible commitment, the $500B eligibility floor as a Schelling point, and the state-by-state cascade it sets up. The strategic read on the first standalone, publicly funded state Bitcoin reserve.",
    url: pageUrl,
  },
};

const LAST_VERIFIED = "October 22, 2026";

const sources = [
  { id: 1, label: "Texas Legislature Online — SB 21 (89R) bill history: the Strategic Bitcoin Reserve, signed June 20, 2025, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 2, label: "The Block — Texas Governor Greg Abbott signs strategic Bitcoin reserve bill into law (June 2025): Texas follows Arizona and New Hampshire but is the first to create a standalone, publicly funded reserve held outside the treasury; HB 4488 shields it from fund sweeps; a five-member advisory committee guides custody and valuation", url: "https://www.theblock.co/post/359089/texas-governor-greg-abbott-signs-strategic-bitcoin-reserve-bill-into-law" },
  { id: 3, label: "Hunton — Texas Establishes Strategic Bitcoin Reserve (SB 21): $500 billion market-cap eligibility floor, held outside the state treasury, biennial public reporting", url: "https://www.hunton.com/blockchain-legal-resource/texas-establishes-strategic-bitcoin-reserve" },
  { id: 4, label: "The Bond Buyer — Texas makes first purchase for state's Bitcoin reserve: about $5 million in the iShares Bitcoin Trust, November 20, 2025", url: "https://www.bondbuyer.com/news/texas-makes-first-purchase-for-states-bitcoin-reserve" },
  { id: 5, label: "Executive Order 14233 — Establishment of the Strategic Bitcoin Reserve and United States Digital Asset Stockpile (signed March 6, 2025), Compilation of Presidential Documents (govinfo.gov)", url: "https://www.govinfo.gov/app/details/DCPD-202500335" },
  { id: 6, label: "Bitcoin Magazine — New Hampshire Becomes First State To Pass Strategic Bitcoin Reserve Bill Into Law (HB 302, signed May 6, 2025): a 5% cap and a $500 billion market-cap eligibility floor that in practice admits only Bitcoin", url: "https://bitcoinmagazine.com/news/new-hampshire-becomes-first-state-to-pass-strategic-bitcoin-reserve-bill-into-law" },
  { id: 7, label: "Blockworks — State bitcoin reserve plans proliferate: dozens of states have introduced reserve legislation; a handful have enacted it", url: "https://blockworks.com/news/us-states-btc-reserve-plans" },
];

const faqs = [
  {
    q: "Why is the Texas Bitcoin reserve a game-theory move?",
    a: "Because its design is built to change other players' behavior, not just to hold an asset. By funding the reserve with a dedicated appropriation, holding it outside the treasury, and shielding it from budget sweeps (HB 4488), Texas made its commitment costly to reverse — a credible signal to markets and to other states that the position is durable. That credibility is the strategic product, more than the $10 million itself.",
  },
  {
    q: "Is Texas the first state with a Bitcoin reserve?",
    a: "No — and the precise claim matters. New Hampshire (HB 302, signed May 6, 2025) and Arizona enacted reserve authority before Texas. Texas's SB 21, signed June 20, 2025, is described as the first standalone, publicly funded state Bitcoin reserve: a dedicated fund with its own appropriation, held outside the general treasury, rather than permission to allocate existing funds.",
  },
  {
    q: "What is the $500 billion market-cap floor, and why does it matter strategically?",
    a: "SB 21 limits the reserve to digital assets above a $500 billion market capitalization — a threshold that, in practice, admits only Bitcoin. New Hampshire's law uses the same $500 billion screen. When independent legislatures converge on the identical threshold, that shared number becomes a Schelling point: a focal rule states can coordinate around without coordinating, each confident the others will land on Bitcoin too.",
  },
  {
    q: "Does one state's reserve make other states more likely to follow?",
    a: "The structure points that way. Each state that adopts lowers the political cost for the next — a working model to copy, a floor of peers — while raising the cost of being last if Bitcoin appreciates. That is the logic of a coordination cascade. Dozens of states have introduced reserve bills; whether the cascade continues depends on price, politics, and the first movers' results.",
  },
  {
    q: "What is the honest case against the game-theory reading?",
    a: "That it over-reads intention into imitation. The Texas reserve is $10 million against a multitrillion-dollar economy — small enough to be a flag, not a position. A cascade that runs on Bitcoin's appreciation can reverse in a drawdown, and anti-sweep statutes can be repealed by a later legislature. The strategic frame describes real incentives, but incentives are not outcomes.",
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

export default function ReserveGameTheoryPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(sources),
    headline: "The Game Theory of the Texas Strategic Bitcoin Reserve",
    description:
      "SB 21 as a credible commitment, the $500B eligibility floor as a Schelling point, and the state-by-state cascade it sets up.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-10-22",
    dateModified: "2026-10-22",
    about: [
      { "@type": "Thing", name: "Texas Strategic Bitcoin Reserve" },
      { "@type": "Thing", name: "Game theory" },
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Legislation", name: "Texas Senate Bill 21 (89R)" },
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
        name: "The Game Theory of the Texas Bitcoin Reserve",
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
          / The game theory of the Texas Bitcoin reserve
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Essay · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The game theory of the Texas Bitcoin reserve
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The headlines counted the dollars — $10 million, a rounding error in
            a state budget. The more interesting object is the design. SB 21 is
            built like a move in a game with other players: a credible
            commitment, a focal threshold other states are already copying, and
            a structure that makes being last expensive. The strategic read, and
            where it overreaches.
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
            The Texas Strategic Bitcoin Reserve, created by Senate Bill 21 and
            signed June 20, 2025, is best understood as a strategic commitment,
            not just a treasury allocation. Texas funded it with a dedicated
            appropriation, placed it outside the general treasury, and shielded
            it from budget sweeps through House Bill 4488 — making the position
            costly to reverse and therefore credible. Its $500 billion
            market-cap eligibility floor, the same threshold New Hampshire wrote,
            in practice admits only Bitcoin, turning that number into a focal
            point other states can coordinate around. The reserve&apos;s size is
            small; its value as a signal, and as a template for the next state,
            is the point.
          </p>
        </div>

        {/* Key facts */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              SB 21 created the Texas Strategic Bitcoin Reserve and was signed
              June 20, 2025, effective immediately.<C n={1} />
            </li>
            <li>
              Texas is described as the first <strong>standalone, publicly
              funded</strong> state Bitcoin reserve — held outside the treasury —
              following Arizona and New Hampshire, which enacted reserve
              authority earlier.<C n={2} /><C n={6} />
            </li>
            <li>
              SB 21 limits the reserve to digital assets above a{" "}
              <strong>$500 billion market capitalization</strong>, a threshold
              that in practice admits only Bitcoin; New Hampshire&apos;s HB 302
              uses the same $500 billion screen.<C n={3} /><C n={6} />
            </li>
            <li>
              House Bill 4488 shields the reserve from being swept into the
              state&apos;s general revenue fund — a commitment device that makes
              retreat costly.<C n={2} />
            </li>
            <li>
              Texas made its first purchase — about $5 million via the iShares
              Bitcoin Trust — on November 20, 2025.<C n={4} />
            </li>
            <li>
              The federal government established its own Strategic Bitcoin
              Reserve by Executive Order 14233, signed March 6, 2025 — the
              backdrop against which the states are moving.<C n={5} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-12">
          <h2>Why read a budget line as a strategic move?</h2>
          <p>
            Because the design does work that a simple holding would not. A state
            that merely wanted Bitcoin exposure could have told an existing fund
            to buy some. Texas instead built a{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              dedicated reserve
            </Link>
            , appropriated money to it, placed it <em>outside</em> the general
            treasury, and passed a second law — <strong>HB 4488</strong> — to
            stop a future budget from sweeping it back in.<C n={1} /><C n={2} />{" "}
            In game-theoretic terms, that is a <strong>commitment device</strong>:
            an action whose value comes from being hard to undo. A promise you
            can costlessly break is cheap talk; a promise wrapped in statute,
            segregated accounting, and an anti-sweep law is a{" "}
            <strong>credible commitment</strong> — and credibility is what moves
            other players. The $10 million is the ante. The architecture around
            it is the signal that Texas intends to stay at the table.
          </p>

          <h2>What makes the $500 billion floor a Schelling point?</h2>
          <p>
            A Schelling point is a choice people converge on without
            communicating, because it is the obvious focal option. SB 21 does
            not name Bitcoin; it sets a rule — only assets above a{" "}
            <strong>$500 billion market cap</strong> qualify — that in practice
            admits only Bitcoin.<C n={3} /> The tell is that{" "}
            <strong>New Hampshire&apos;s</strong> separate law reached for the{" "}
            <em>same</em> $500 billion threshold.<C n={6} /> When independent
            legislatures, drafting on their own, land on the identical number,
            that number has become focal: a rule the next state can adopt
            confident its peers will read it the same way, pointing at the same
            asset. The threshold launders a politically fraught choice
            (&ldquo;buy Bitcoin&rdquo;) into a neutral-sounding standard
            (&ldquo;only the most established digital asset&rdquo;) that
            coordinates behavior precisely because everyone can see where it
            points. The honest-money instinct that runs through{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law says about Bitcoin
            </Link>{" "}
            is, here, encoded as a coordination rule.
          </p>

          <h2>Does this set up a cascade among the states?</h2>
          <p>
            The incentives are shaped like one. Adoption is a{" "}
            <strong>coordination game</strong>, not a zero-sum fight: each state
            that establishes a reserve lowers the cost for the next — a working
            legal template, a committee model, a floor of peers that makes the
            move look prudent rather than fringe — while raising the cost of
            being last, because a latecomer that eventually follows buys a
            scarce, appreciating asset at a higher price. Arizona and New
            Hampshire went first on authority; Texas went first on a funded,
            standalone fund; dozens of states have introduced their own bills.
            <C n={2} /><C n={6} /><C n={7} /> That is the signature of an
            <strong> information cascade</strong>: early movers convert a
            contested idea into a default, and each subsequent yes makes the next
            one easier. The federal{" "}
            <strong>Strategic Bitcoin Reserve</strong>, established by Executive
            Order 14233 in March 2025, raised the ceiling of respectability the
            states are now building under.<C n={5} /> None of this guarantees the
            cascade completes — but the payoff structure rewards moving before
            the crowd, which is exactly what a first mover like Texas is
            counting on.
          </p>

          <h2>What game are the states actually playing?</h2>
          <p>
            Against the federal backdrop, the subnational move reads as a{" "}
            <strong>hedge against a policy they do not control</strong>. States
            cannot set monetary policy; they bear the consequences of dollar
            debasement without a vote on it. Holding a reserve asset whose supply
            no government can expand is a way to opt partway out of that
            exposure — a hedge a state <em>can</em> execute. Seen this way, the
            reserves are less a bet that Bitcoin goes up and more insurance
            against the dollar&apos;s purchasing power going down, bought by the
            governments furthest from the printing press. It is the same logic
            that led Texas to build a{" "}
            <Link href="/texas-gold-vs-bitcoin">
              gold-and-silver tender system alongside the Bitcoin reserve
            </Link>
            : two hard-money hedges, one to spend and one to hold, both chosen by
            a state that cannot issue its own money and would rather not be fully
            long the one it is handed.
          </p>

          <h2>The honest counterweight</h2>
          <p>
            The strategic frame can prove too much. A tidy story about Schelling
            points and credible commitments risks reading <em>intention</em> into
            what may be plain <strong>imitation</strong> — legislators copying a
            popular bill, not executing a coordinated strategy. The numbers
            invite that skepticism: $10 million is a flag planted in a
            multitrillion-dollar economy, not a position sized to matter, and the
            first purchase was a ~$5 million{" "}
            <Link href="/who-holds-the-texas-bitcoin-reserve">
              ETF holding, not yet coin the state controls
            </Link>
            .<C n={4} /> A cascade that runs on appreciation can run in reverse:
            a deep drawdown turns &ldquo;prudent peer&rdquo; back into
            &ldquo;reckless outlier,&rdquo; and the anti-sweep statute that makes
            the commitment credible can be repealed by a later legislature that
            reads the politics differently. Game theory describes the incentives
            accurately; it does not promise the players will follow them. The
            defensible claim is narrow and real: Texas structured its reserve to
            be a credible, copyable signal, and the early evidence — a shared
            $500 billion threshold, a growing list of state bills — is consistent
            with that signal being received. Whether it compounds into a cascade
            is the part still being played.
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
            Primary record first: the SB 21 bill history, then legal analysis and
            reporting on the reserve&apos;s structure, the other states, and the
            federal order. The game-theory framing is this publication&apos;s
            analysis, labeled as such and kept separate from the sourced facts.
            This is a research and reference article, not financial, investment,
            or legal advice.
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
