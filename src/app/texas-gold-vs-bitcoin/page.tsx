import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

// DISCRETION: sitemap-only, like the Exposure Map, /bitcoin-mining-ercot,
// and /bitcoin-estate-planning-texas. Indexed and in llms.txt, no inbound
// links from the shell or sibling pages. Outbound links are fine.

const pageUrl = `${site.url}/texas-gold-vs-bitcoin`;

export const metadata: Metadata = {
  title: "Gold as Tender, Bitcoin as Reserve: How Texas Split Hard Money",
  description:
    "In June 2025, Texas made gold and silver legal tender (HB 1056) and created a Bitcoin reserve (SB 21) — two days apart. The sourced essay on why the state gave its two hard-money traditions opposite jobs: one to spend, one to hold.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Gold as Tender, Bitcoin as Reserve: How Texas Split Hard Money",
    description:
      "HB 1056 and SB 21 were signed two days apart. One makes metal spendable; the other makes Bitcoin a state holding. The design is the argument.",
    url: pageUrl,
  },
};

const LAST_VERIFIED = "September 30, 2026";

const sources = [
  { id: 1, label: "Texas Legislature Online — HB 1056 (89R) bill history: signed June 22, 2025; Section 2116.101 (legal tender) effective September 1, 2026; remainder effective May 1, 2027", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB1056" },
  { id: 2, label: "Texas Legislature Online — SB 21 (89R) bill history: the Strategic Bitcoin Reserve, signed June 20, 2025, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 3, label: "KXAN — Gold, silver become legal tender in Texas under new law (HB 1056: specie defined by weight and purity; depository-backed transactional currency)", url: "https://www.kxan.com/news/texas-politics/gold-silver-become-legal-tender-in-texas-under-new-law/" },
  { id: 4, label: "Texas Policy Research — HB 1056 makes gold and silver spendable: debit-card and mobile-app payments from depository holdings, targeted for May 1, 2027", url: "https://www.texaspolicyresearch.com/texas-brings-back-sound-money-hb-1056-makes-gold-and-silver-spendable/" },
  { id: 5, label: "U.S. Constitution, Article I, Section 10 — \"No State shall... coin Money... [or] make any Thing but gold and silver Coin a Tender in Payment of Debts\" (Constitution Annotated)", url: "https://constitution.congress.gov/browse/article-1/section-10/" },
  { id: 6, label: "Office of the Texas Governor — Governor Abbott Signs Legislation To Establish State Bullion Depository (HB 483, June 12, 2015)", url: "https://gov.texas.gov/news/post/governor_abbott_signs_legislation_to_establish_state_bullion_depository" },
  { id: 7, label: "Texas Comptroller, Fiscal Notes — The Texas Bullion Depository: the first state-administered precious-metals depository (September 2017)", url: "https://comptroller.texas.gov/economy/fiscal-notes/archive/2017/september/bullion-depository.php" },
  { id: 8, label: "Hunton — Texas Establishes Strategic Bitcoin Reserve (SB 21): $500B market-cap floor, held outside the treasury, biennial reporting", url: "https://www.hunton.com/blockchain-legal-resource/texas-establishes-strategic-bitcoin-reserve" },
  { id: 9, label: "Texas Legislature Online — HJR 175 (89R) bill history: proposed constitutional right to own, hold, and use a chosen medium of exchange, including digital currency; passed the House May 9, 2025, died pending in Senate committee", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HJR175" },
  { id: 10, label: "The Bond Buyer — Texas makes first purchase for state's Bitcoin reserve: ~$5M in the iShares Bitcoin Trust, November 20, 2025", url: "https://www.bondbuyer.com/news/texas-makes-first-purchase-for-states-bitcoin-reserve" },
];

const faqs = [
  {
    q: "Is gold legal tender in Texas?",
    a: "It is becoming so. House Bill 1056, signed June 22, 2025, recognizes gold and silver specie as legal tender in Texas — the recognition provision took effect September 1, 2026, and the depository-backed transactional system, letting Texans spend metal by debit card or app, is targeted for May 1, 2027. Use is voluntary: no one is required to accept specie.",
  },
  {
    q: "Is Bitcoin legal tender in Texas?",
    a: "No. Texas made Bitcoin a state reserve asset under Senate Bill 21 (signed June 20, 2025), not a tender. A proposed constitutional amendment pointing the other way — HJR 175, protecting the right to use a chosen medium of exchange including digital currency — passed the Texas House in May 2025 but died in a Senate committee. Bitcoin remains fully legal to use in Texas; the state simply has not given it tender status.",
  },
  {
    q: "Why did Texas make gold spendable but Bitcoin a reserve?",
    a: "Constitutional text and asset design. The U.S. Constitution expressly permits states to make gold and silver coin a tender, giving metal a 240-year-old legal lane Bitcoin lacks. And the statutes assign each asset the job its holders actually use it for: gold's stability suits a payment rail; Bitcoin's appreciation thesis suits a long-horizon reserve. Texas built infrastructure for both rather than declaring either the winner.",
  },
  {
    q: "What is the Texas Bullion Depository?",
    a: "The first state-administered precious-metals depository in the country, created by HB 483 in June 2015 and operational since 2018 under the Comptroller's office with a private operator. HB 1056 builds its transactional currency on depository holdings — the 2015 vault turned out to be the foundation for the 2025 tender law, a decade later.",
  },
  {
    q: "Did the same people write the gold and Bitcoin laws?",
    a: "The threads cross. Representative Giovanni Capriglione authored the 2015 Bullion Depository act, co-authored HB 1056's gold tender law, and filed his own Bitcoin reserve design (HB 1598, which died without a hearing as SB 21 advanced). The two hard-money projects share a Capitol lineage even though the Legislature gave them opposite structures.",
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

// people-figs:start

// Two figures drawn from the dated, sourced facts on this page (Sept 2026):
// the two laws' effective-date ladder, and the design split side by side.
// Server-rendered SVG, no client JS.
function GoldBitcoinLadderFigure() {
  // x from June 2015 → May 2027, compressed: the 2015 origin sits at the left
  // edge and the 2025–27 stretch takes the rest.
  const stops = [
    { x: 96, lane: "gold", date: "June 12, 2015", t: "HB 483 signed", d: "the Bullion Depository" },
    { x: 250, lane: "btc", date: "June 20, 2025", t: "SB 21 signed", d: "the reserve; effective immediately" },
    { x: 300, lane: "gold", date: "June 22, 2025", t: "HB 1056 signed", d: "gold and silver as tender" },
    { x: 440, lane: "btc", date: "Nov. 20, 2025", t: "First purchase", d: "~$5M, spot Bitcoin ETF" },
    { x: 600, lane: "gold", date: "Sept. 1, 2026", t: "Tender in force", d: "§ 2116.101 takes effect" },
    { x: 760, lane: "gold", date: "May 1, 2027", t: "Currency live", d: "spend depository metal" },
  ];
  const laneY = { gold: 96, btc: 176 } as const;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="Two lanes of dates: gold - HB 483 signed June 12, 2015; HB 1056 signed June 22, 2025; tender in force September 1, 2026; currency live May 1, 2027. Bitcoin - SB 21 signed and effective June 20, 2025; first purchase November 20, 2025.">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">TWO LANES · WHEN EACH HARD-MONEY LAW STARTS DOING SOMETHING</text>
        <text x="28" y={laneY.gold + 58} fontSize="10" fontWeight="600" letterSpacing="1.5" fill="var(--star)">GOLD · TENDER</text>
        <text x="782" y={laneY.btc - 22} fontSize="10" fontWeight="600" letterSpacing="1.5" textAnchor="end" fill="var(--accent)">BITCOIN · RESERVE</text>
        <line x1="40" y1={laneY.gold} x2="782" y2={laneY.gold} stroke="var(--border)" strokeWidth="1.5" />
        <line x1="40" y1={laneY.btc} x2="782" y2={laneY.btc} stroke="var(--border)" strokeWidth="1.5" />
        <line x1="170" y1="60" x2="170" y2="200" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 4" />
        <text x="170" y="216" fontSize="9" textAnchor="middle" fill="var(--muted-2)">ten years</text>
        {stops.map((s) => {
          const y = laneY[s.lane as "gold" | "btc"];
          const c = s.lane === "gold" ? "var(--star)" : "var(--accent)";
          const above = s.lane === "gold";
          return (
            <g key={s.date}>
              <circle cx={s.x} cy={y} r="5" fill={c} stroke="var(--surface)" strokeWidth="2" />
              <text x={s.x} y={above ? y - 30 : y + 24} fontSize="10.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{s.t}</text>
              <text x={s.x} y={above ? y - 17 : y + 37} fontSize="9" textAnchor="middle" fill="var(--muted-2)">{s.date}</text>
              <text x={s.x} y={above ? y + 20 : y + 50} fontSize="9" textAnchor="middle" fill="var(--muted)">{s.d}</text>
            </g>
          );
        })}
        <text x="405" y="242" fontSize="10" textAnchor="middle" fill="var(--muted-2)">HB 483 and HB 1056 histories · SB 21 history · The Bond Buyer, November 2025 · Texas Policy Research</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Two lanes. The Bitcoin law was in force the day it was signed and buying within five months; the gold law took fifteen months to make its first clause effective and will take twenty-two to let anyone spend. One was built to hold, so it could start at once; the other to pay, so it had to build the rail first.
      </figcaption>
    </figure>
  );
}

function GoldBitcoinSplitFigure() {
  const rows: [string, string, string][] = [
    ["The verb", "Spend", "Hold"],
    ["The statute", "HB 1056 (2025), on HB 483 (2015)", "SB 21 (2025)"],
    ["Constitutional lane", "Art. I § 10: gold and silver coin as tender", "None needed - a fund, not a currency"],
    ["Where the asset sits", "Texas Bullion Depository, private vault", "Fund 1018, outside the treasury"],
    ["What a Texan can do", "Pay by debit card or app from May 1, 2027", "Nothing - the state holds it"],
    ["What the state owns", "No gold of its own", "$10M in a spot Bitcoin ETF"],
    ["Reporting", "Depository administration", "Biennial report, first due Dec. 31, 2026"],
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 330" role="img" aria-label="The design split, side by side: gold is to spend under HB 1056, on the constitutional tender clause, from the Bullion Depository, by card or app from May 1, 2027, though the state owns no gold; Bitcoin is to hold under SB 21, in Fund 1018 outside the treasury, $10 million in a spot ETF, with a biennial report due December 31, 2026.">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE SPLIT · ONE LEGISLATURE, ONE WEEK, TWO DESTINATIONS</text>
        <text x="290" y="62" fontSize="10" fontWeight="600" letterSpacing="1.5" fill="var(--star)">GOLD AS TENDER</text>
        <text x="560" y="62" fontSize="10" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">BITCOIN AS RESERVE</text>
        <line x1="28" y1="70" x2="782" y2="70" stroke="var(--border)" strokeWidth="1" />
        {rows.map((r, i) => {
          const y = 94 + i * 32;
          return (
            <g key={r[0]}>
              {i % 2 === 1 && <rect x="28" y={y - 20} width="754" height="32" rx="3" fill="var(--surface-2)" />}
              <text x="28" y={y} fontSize="10.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{r[0]}</text>
              <text x="290" y={y} fontSize="10" fill={i === 0 ? "var(--star)" : "var(--muted)"} fontWeight={i === 0 ? 700 : 400}>{r[1]}</text>
              <text x="560" y={y} fontSize="10" fill={i === 0 ? "var(--accent)" : "var(--muted)"} fontWeight={i === 0 ? 700 : 400}>{r[2]}</text>
            </g>
          );
        })}
        <text x="405" y="322" fontSize="10" textAnchor="middle" fill="var(--muted-2)">HB 1056 · SB 21 · U.S. Const. art. I § 10 · Comptroller Fiscal Notes, Sept. 2017 · Texas Observer, Feb. 2025 · The Bond Buyer</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The split, row by row. Read the first row and the rest follow: a thing built to be spent needs a tender clause, a vault, and a rail; a thing built to be held needs a fund and a report. The last two rows are the counterweight – the state spends no gold it owns and holds Bitcoin it cannot yet touch.
      </figcaption>
    </figure>
  );
}

// people-figs:end

export default function GoldVsBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Gold as Tender, Bitcoin as Reserve: How Texas Split Hard Money",
    description:
      "HB 1056 and SB 21, signed two days apart in June 2025, gave Texas's two hard-money traditions opposite jobs: one to spend, one to hold.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-30",
    dateModified: "2026-09-30",
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
        name: "Gold as Tender, Bitcoin as Reserve",
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
          / Gold as Tender, Bitcoin as Reserve
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Essay · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Gold as tender, Bitcoin as reserve
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            In one June week of 2025, Texas passed both of its hard-money
            traditions into law – and gave them opposite jobs. Why the state
            made metal spendable and Bitcoin a holding, what the split says
            about each asset, and the decade of Capitol plumbing underneath
            it.
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
            Texas enacted its two hard-money laws two days apart: Senate Bill
            21, signed June 20, 2025, created a state Bitcoin reserve, and
            House Bill 1056, signed June 22, 2025, made gold and silver
            specie legal tender with a depository-backed payment system
            targeted for May 2027. The state deliberately split the roles –
            gold became money to spend, Bitcoin became an asset to hold –
            because the U.S. Constitution gives metal a tender lane states
            cannot extend to Bitcoin, and because each statute matches the
            asset to the job its holders actually give it.
          </p>
        </div>

        {/* Key facts */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              SB 21, creating the Texas Strategic Bitcoin Reserve, was signed
              June 20, 2025, effective immediately.<C n={2} />
            </li>
            <li>
              HB 1056, recognizing gold and silver specie as legal tender,
              was signed June 22, 2025 – its tender provision took effect
              September 1, 2026, and its transactional system is targeted for
              May 1, 2027.<C n={1} /><C n={4} />
            </li>
            <li>
              The U.S. Constitution (Article I, Section 10) forbids states to
              coin money but expressly permits making &ldquo;gold and silver
              Coin a Tender in Payment of Debts.&rdquo;<C n={5} />
            </li>
            <li>
              HB 1056 builds its spendable currency on the Texas Bullion
              Depository, the first state-administered precious-metals
              depository, created by HB 483 on June 12, 2015.<C n={6} /><C n={7} />
            </li>
            <li>
              SB 21 holds the Bitcoin reserve outside the state treasury with
              a $500 billion market-cap eligibility floor and biennial public
              reporting – a structure built for holding, not spending.
              <C n={8} />
            </li>
            <li>
              HJR 175, which would have constitutionally protected using a
              chosen medium of exchange including digital currency, passed
              the Texas House May 9, 2025 and died pending in a Senate
              committee.<C n={9} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-12">
          <h2>What did Texas actually pass in June 2025?</h2>
          <p>
            Two laws, one week, opposite verbs. <strong>Senate Bill 21</strong>{" "}
            (signed June 20, 2025) created the{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              Texas Strategic Bitcoin Reserve
            </Link>{" "}
            – a fund the Comptroller <em>holds</em>, outside the treasury,
            with a $10 million appropriation that made its first purchase
            that November.<C n={2} /><C n={10} /> <strong>House Bill
            1056</strong> (signed June 22, 2025) recognized gold and silver
            specie – bullion stamped with weight and purity – as{" "}
            <em>legal tender</em>, and directed the Comptroller to stand up a
            transactional currency Texans can <em>spend</em> from Texas
            Bullion Depository holdings by debit card or mobile app, with the
            tender provision effective September 1, 2026 and the payment
            system targeted for May 1, 2027.<C n={1} /><C n={3} /><C n={4} />{" "}
            Nothing about the pairing was accidental: the same Legislature,
            the same signing week, the same hard-money instinct – and two
            deliberately different destinations.
          </p>

          <GoldBitcoinLadderFigure />

          <h2>Why can gold be tender when Bitcoin cannot?</h2>
          <p>
            Start with the oldest money text in American law.{" "}
            <strong>Article I, Section 10</strong> of the U.S. Constitution
            strips states of the power to coin money or emit bills of credit
            – but carves out one express permission: a state may make{" "}
            <strong>&ldquo;gold and silver Coin a Tender in Payment of
            Debts.&rdquo;</strong><C n={5} /> That 1787 clause is the lane HB
            1056 drives in: Texas is not creating money, it is exercising the
            one tender power the founders left the states. Bitcoin has no
            such clause. A state that declared Bitcoin legal tender would be
            testing constitutional text with no carve-out to stand on – which
            is part of why no state has, and why the Texas Legislature&apos;s
            one gesture in that direction, <strong>HJR 175</strong>&apos;s
            proposed right to use a chosen medium of exchange, passed the
            House and quietly died in the Senate.<C n={9} /> The fuller story
            of that bill sits in{" "}
            <Link href="/texas-bitcoin-bills-that-died">the dead file</Link>.
            Constitutional plumbing explains the ceiling. It does not, by
            itself, explain the design – because Texas could have made gold a
            mere reserve too, and did not.
          </p>

          <h2>Why did the design split the way it did?</h2>
          <p>
            Because the statutes match each asset to the job its own holders
            give it. Gold&apos;s case is <strong>stability</strong>: a
            payment rail needs a unit people will actually part with, and
            metal&apos;s five-millennium track record of holding value
            without violent appreciation makes spending it psychologically
            and practically plausible. Bitcoin&apos;s case, as the
            Legislature heard it, is <strong>appreciation</strong>: SB
            21&apos;s own findings frame the reserve as a hedge acquired to
            be held, and everything in its structure – outside the treasury,
            shielded from fund sweeps, a $500 billion market-cap floor
            measured over 24 months, biennial reporting – is architecture
            for a position, not a checkout counter.<C n={8} /> A state does
            not build a vault door for money it expects citizens to hand
            across a counter, and it does not build a debit card for an
            asset it is accumulating. Texas, in effect, codified the
            behavior each community already exhibits: gold bugs who want to
            transact in metal, and Bitcoin holders who – as the saying goes
            – do not sell. The state&apos;s two hard-money laws disagree
            about nothing; they simply answer different questions.
          </p>

          <GoldBitcoinSplitFigure />

          <h2>What is the shared lineage underneath both laws?</h2>
          <p>
            A decade of quiet infrastructure, with some of the same names on
            it. The <strong>Texas Bullion Depository</strong> – created by
            HB 483, signed June 12, 2015, the first state-administered
            precious-metals depository in the country – gave the 2025 tender
            law something to build on: HB 1056&apos;s spendable currency is
            depository holdings with a payment interface.<C n={6} /><C n={7} />{" "}
            Its author, Representative{" "}
            <Link href="/giovanni-capriglione-bitcoin"><strong>Giovanni Capriglione</strong></Link>,
            co-authored HB 1056 a decade later – and filed his own Bitcoin
            reserve design, HB 1598, which died without a hearing as SB 21
            advanced.<C n={1} /><C n={9} /> The pattern repeats across the
            timeline on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            : Texas builds custody first – a vault in 2015, a{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              reserve custodian
            </Link>{" "}
            in 2026 – and only then adds functions on top. The tender law
            waited ten years for its depository. Whatever Bitcoin&apos;s
            next Texas chapter is, the reserve&apos;s custody plumbing is
            being laid the same way.
          </p>

          <h2>The honest counterweight</h2>
          <p>
            Both laws are, so far, more statement than volume. The gold
            tender system does not exist yet – its payment rails are a May
            2027 target, specie acceptance is voluntary, and federal capital
            gains tax applies to spending appreciated metal just as it does
            to spending appreciated Bitcoin, a friction no state statute can
            remove.<C n={4} /> The Bitcoin reserve is $10 million – real,
            first-in-the-nation, and small against a three-trillion-dollar
            state economy.<C n={10} /> It is fair to read June 2025 as Texas
            planting flags rather than moving money. But flags matter in
            money law precisely because money runs on expectations: the
            state that operates the first bullion depository, the first
            standalone Bitcoin reserve, and (by 2027, if the schedule holds)
            the first state-backed metal payment rail has told markets which
            direction it intends to walk, in statute, where retreat is
            expensive. The record above is the direction; the volumes are
            the part still being written.
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
            Primary record first: bill histories, the U.S. Constitution, the
            Governor&apos;s office, and the Texas Comptroller, then reporting
            and legal analysis. This is a research and reference article, not
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
