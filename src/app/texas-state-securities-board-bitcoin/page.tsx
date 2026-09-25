import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  TSSB_LAST_VERIFIED,
  tssbOrdersByYear,
  tssbSources,
  tssbTimeline,
  type TssbTimelineKind,
} from "@/lib/tssb";

const pageUrl = `${site.url}/texas-state-securities-board-bitcoin`;

export const metadata: Metadata = {
  title: "The Texas State Securities Board and Bitcoin: The First State to Act",
  description:
    "The Texas State Securities Board and Bitcoin, 2014–2026, sourced: the first Bitcoin investor alert (February 2014); USI-Tech, December 20, 2017, the first order by any state securities regulator against a crypto scheme; BitConnect two days before its top; the 2018 sweep of 32 offerings and the forty-regulator Operation Cryptosweep Texas led; the BlockFi, Celsius, and Voyager notices five to sixteen months before the collapses; the FTX declaration in the enforcement director's own name three weeks before FTX failed; the Bankman-Fried jurisdiction loss; Nexo, Abra, GS Partners; the Apertum order set aside; TEXITcoin's 2026 hearing; more than seventy orders; and the Board's own limit - it regulates the investments, not the coins.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Texas State Securities Board and Bitcoin: The First State to Act",
    description:
      "On December 20, 2017 a Texas agency with 27 enforcement staff entered the first state order against a crypto scheme, and has entered seventy more since. What it caught, what it missed, and what it says it does not regulate. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is the Texas State Securities Board?",
    a: "An independent state agency created in 1957, governed by five members the governor appoints, who in turn appoint the Securities Commissioner - Travis Iles from September 2017 to June 2026, Jeramy Heintz since. It registers securities and dealers and enforces the Texas Securities Act, now Title 12 of the Government Code, with about 75 staff and an Enforcement Division of about 27, on a budget near $9 million while returning roughly $160 million a year to the state. It is not the Attorney General, which is the state's litigator, and not the Department of Banking, which licenses money transmitters and kiosks.",
  },
  {
    q: "Was Texas really the first state to take enforcement action against a crypto scheme?",
    a: "By the Board's account and NASAA's, yes. On December 20, 2017 the Board entered an emergency cease-and-desist order against USI-Tech, a Dubai company selling Bitcoin-mining contracts with a promised 'daily return of 1%' through Craigslist and YouTube. The Board's annual reports since describe it as 'the first state securities regulator to enter an enforcement action against a cryptocurrency firm,' and NASAA cites the January 4, 2018 BitConnect order to Congress as the model state crypto antifraud case. Texas then organized and led Operation Cryptosweep, the forty-regulator sweep announced May 21, 2018.",
  },
  {
    q: "What did the Board do about BlockFi, Celsius, Voyager, and FTX?",
    a: "It put all three lenders on notice before they failed - BlockFi on July 22, 2021, Celsius on September 17, 2021, Voyager on April 12, 2022 - through notices of hearing that left existing accounts untouched. BlockFi settled for $100 million with the states and the SEC in February 2022, Texas's share $943,396. Celsius and Voyager went bankrupt and were resolved by consent orders in 2024 and 2026 with no fines. On October 14, 2022 enforcement director Joe Rotunda filed a sworn declaration that he had opened an FTX account in his own name and been shown an 8% yield - 'This appears to be an investment contract' - disclosing an investigation of FTX three weeks before it collapsed. The Board's later case against Sam Bankman-Fried personally was dismissed for lack of jurisdiction in February 2023.",
  },
  {
    q: "How many crypto enforcement orders has the Board entered?",
    a: "The Board's own enforcement index says more than seventy administrative orders since December 2017, listed by year: one in 2017, fifteen in 2018, nine in 2019, eighteen in 2020, fifteen in 2021, five in 2022, eleven in 2023, five in 2024, one in 2025 - the Apertum order it later set aside - and five in 2026 through September. Most are emergency cease-and-desist orders against offshore or anonymous promoters, and the Board publishes no figure for how much any of them recovered.",
  },
  {
    q: "What does the Board not do?",
    a: "In its own words from the 2018 sweep report, 'the TSSB is not regulating the cryptocurrencies themselves, only the investments that claim to use virtual currencies in an investment program.' It does not license exchanges, money transmitters, or crypto kiosks - those are the Department of Banking's - and it appears in bankruptcy court through the Attorney General as counsel. It joined neither the ten-state Coinbase staking action nor any case against Kraken, and it has taken no position on the Texas Strategic Bitcoin Reserve that has been located.",
  },
];

const kindStyle: Record<TssbTimelineKind, { color: string; label: string }> = {
  first: { color: "var(--accent)", label: "The first" },
  lenders: { color: "#c98a4e", label: "The lenders" },
  cases: { color: "#6f9e6a", label: "The cases" },
  gap: { color: "var(--star)", label: "The gap" },
  watch: { color: "#8a7fb5", label: "The watch" },
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

// people-figs:start
// Two figures - orders by year from the Board's own index, and the big
// cases board - drawn from the dated, sourced facts on this page (Sept
// 2026). Server-rendered SVG, no client JS.
function TssbOrdersFigure() {
  const max = 18;
  const x0 = 60;
  const bw = 58;
  const gap = 16;
  const baseY = 210;
  const h = 140;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="Crypto enforcement orders by year from the Board's own index: 1 in 2017, 15 in 2018, 9 in 2019, 18 in 2020, 15 in 2021, 5 in 2022, 11 in 2023, 5 in 2024, 1 in 2025, 5 in 2026 through September">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE ORDERS · CRYPTO ENFORCEMENT ACTIONS BY YEAR · THE BOARD&apos;S OWN INDEX</text>
        <line x1={x0 - 10} y1={baseY} x2={x0 + 10 * (bw + gap)} y2={baseY} stroke="var(--border)" strokeWidth="1" />
        {tssbOrdersByYear.map((d, i) => {
          const x = x0 + i * (bw + gap);
          const bh = (d.n / max) * h;
          const dim = d.year === 2025;
          return (
            <g key={d.year}>
              <rect x={x} y={baseY - bh} width={bw} height={bh} rx="4" fill={dim ? "var(--star)" : "var(--accent)"} fillOpacity={dim ? 0.55 : 0.8} />
              <text x={x + bw / 2} y={baseY - bh - 6} fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{d.n}</text>
              <text x={x + bw / 2} y={baseY + 16} fontSize="10" textAnchor="middle" fill="var(--muted-2)">{d.year}</text>
            </g>
          );
        })}
        <text x="28" y="250" fontSize="10" fill="var(--muted)">2017: USI-Tech, Dec 20, the first · 2018: BitConnect, the sweep · 2020: the pandemic peak · 2021: BlockFi, Celsius · 2022: Voyager, the casinos, FTX</text>
        <text x="28" y="264" fontSize="10" fill="var(--muted)">2023: Nexo, Abra, GS Partners · 2024: Celsius, Abra consents · 2025: Apertum, set aside in July · 2026: TEXITcoin, Voyager consent, three more, to Sept.</text>
        <text x="405" y="290" fontSize="10" textAnchor="middle" fill="var(--muted-2)">ssb.state.tx.us/cryptocurrency-enforcement, tallied September 2026 · the 2023 page header says 11 · the index says &ldquo;more than 70&rdquo;</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The orders. Eighty-odd entries on the Board&apos;s own index in nine years, most of them emergency cease-and-desists against promoters who never answered. The shape is the market&apos;s: the 2018 rush, the 2020 lockdown boom, the 2021 lenders, then a working-group era of fewer, larger, multistate cases – and 2025&apos;s single entry, which the Board vacated itself.
      </figcaption>
    </figure>
  );
}

function TssbCasesFigure() {
  const rows = [
    { who: "BlockFi", when: "notice Jul 22, 2021", tx: "36,443 Texans · $688M", out: "settled Feb 2022 · $100M · TX $943K", ok: true },
    { who: "Celsius", when: "notice Sept 17, 2021", tx: "9,000 Texans · $344M", out: "froze June 2022 · consent 2024, no fine", ok: false },
    { who: "Voyager", when: "notice Apr 12, 2022", tx: "170,000 Texans · $500M", out: "bankrupt July 2022 · consent Mar 2026, no fine", ok: false },
    { who: "FTX / Bankman-Fried", when: "declaration Oct 14, 2022", tx: "the 8% yield, in his own name", out: "SBF case dismissed Feb 2023 · no jurisdiction", ok: false },
    { who: "Nexo", when: "settled Jan 19, 2023", tx: "Texas share $420K", out: "$45M total with the SEC", ok: true },
    { who: "Abra", when: "ex parte June 15, 2023", tx: "1,600 Texans · $1.8M", out: "assets returned Jan 2024 · Texas-led", ok: true },
    { who: "GS Partners / Heit", when: "emergency Nov 16, 2023", tx: "800,000 customers worldwide", out: "full refunds Sept 2024 · Texas-led", ok: true },
    { who: "Apertum / Heit", when: "emergency Apr 2025", tx: "APTM token", out: "set aside July 31, 2025 · no explanation", ok: false },
    { who: "TEXITcoin / Gray", when: "emergency Feb 11, 2026", tx: "55,000 people · $147M", out: "4-day hearing Aug 2026 · pending", ok: false },
  ];
  const y0 = 84;
  const rh = 22;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 310" role="img" aria-label="The big cases: BlockFi, Celsius, Voyager, FTX, Nexo, Abra, GS Partners, Apertum, and TEXITcoin - when the Board acted, the Texans exposed, and the outcome">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE CASES · WHEN THE BOARD ACTED, WHO WAS EXPOSED, HOW IT ENDED</text>
        <text x="28" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">RESPONDENT</text>
        <text x="190" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">ACTION</text>
        <text x="352" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">EXPOSURE</text>
        <text x="782" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" textAnchor="end" fill="var(--muted-2)">OUTCOME</text>
        <line x1="28" y1="70" x2="782" y2="70" stroke="var(--border)" strokeWidth="1" />
        {rows.map((r, i) => {
          const y = y0 + i * rh;
          return (
            <g key={r.who}>
              {i % 2 === 1 && <rect x="28" y={y - 14} width="754" height={rh} rx="4" fill="var(--surface-2)" />}
              <circle cx="34" cy={y - 4} r="3.5" fill={r.ok ? "#6f9e6a" : "#c98a4e"} />
              <text x="46" y={y} fontSize="11" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{r.who}</text>
              <text x="190" y={y} fontSize="9.5" fill="var(--muted-2)">{r.when}</text>
              <text x="352" y={y} fontSize="9.5" fill="var(--muted)">{r.tx}</text>
              <text x="782" y={y} fontSize="9.5" textAnchor="end" fill={r.ok ? "#6f9e6a" : "var(--muted-2)"}>{r.out}</text>
            </g>
          );
        })}
        <text x="28" y="292" fontSize="10" fill="var(--muted)">Not joined: the ten-state Coinbase staking action (June 2023); any Kraken case. Green = money returned or recovered; amber = no recovery, loss, set-aside, or pending.</text>
        <text x="405" y="306" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Board notices, orders, and releases 2021–2026 · Dallas Morning News Feb 2, 2023 · Texas Public Radio Aug 17, 2026</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The cases. The lenders were noticed early and settled or collapsed anyway; the recoveries that reached Texans came from the multistate working groups the Board led or joined after. The two amber rows at the bottom are the counterweight in miniature – an order the Board withdrew without explanation, and one it is defending in a four-day hearing against a Texas company that says the SEC no longer thinks mining seats are securities.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function TexasStateSecuritiesBoardBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Texas State Securities Board and Bitcoin: The First State to Act",
    description:
      "The institutional record of the Texas State Securities Board and digital assets, 2014–2026: the first state order against a crypto scheme, the 2018 sweep and Operation Cryptosweep, the BlockFi, Celsius, and Voyager notices, the FTX declaration, the Bankman-Fried loss, the working-group settlements, the Apertum set-aside, TEXITcoin, the order count, and the Board's own stated limit.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "GovernmentOrganization", name: "Texas State Securities Board" },
      { "@type": "Thing", name: "Operation Cryptosweep" },
      { "@type": "Legislation", name: "Texas Securities Act" },
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
        name: "The Texas State Securities Board and Bitcoin",
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
          / The Securities Board &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The institutions
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Texas State Securities Board and Bitcoin: The First State to Act
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Twelve weeks after a new commissioner took over an agency of
            seventy-five people in a building off the Capitol, it entered
            the first order any state securities regulator had ever
            entered against a cryptocurrency scheme – a Dubai outfit
            selling Bitcoin-mining contracts on Craigslist at one percent
            a day. Fifteen days later it halted BitConnect, two days before
            the top. By spring it had opened thirty-two files in four
            weeks, and by summer it was running a sweep of forty regulators
            across two countries. It put BlockFi, Celsius, and Voyager on
            notice five to sixteen months before they failed, and its
            enforcement director opened an FTX account under his own name
            to prove the yield was a security three weeks before FTX was
            gone. It has entered more than seventy crypto orders since, and
            it says, in its own report, that it does not regulate the
            coins – only the people who sell investments in them. What it
            caught, what it lost, and what it leaves to others is the
            record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 25, 2026 · Updated{" "}
            {TSSB_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            The Texas State Securities Board is the independent state
            agency that enforces the Texas Securities Act. On December 20,
            2017 it entered the first enforcement order by any state
            securities regulator against a cryptocurrency-linked
            investment, led the forty-regulator Operation Cryptosweep in
            2018, filed notices against BlockFi, Celsius, and Voyager in
            2021 and 2022 before each collapsed, disclosed its FTX
            investigation three weeks before FTX failed, and has entered
            more than seventy crypto enforcement orders. It regulates
            investments that use the asset, not the asset itself, and
            leaves exchanges, money transmission, and kiosks to{" "}
            <Link href="/texas-department-of-banking-bitcoin">
              the Department of Banking
            </Link>
            .
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              The Board entered ENF-17-CDO-1753 against USI-Tech on
              December 20, 2017, the first state securities order against a
              crypto investment scheme.<C n={2} /><C n={32} />
            </li>
            <li>
              Its April 10, 2018 sweep report found none of 32 crypto
              offerings registered and five guaranteeing returns &ldquo;as
              high as 40% per month.&rdquo;<C n={4} />
            </li>
            <li>
              Texas organized and led Operation Cryptosweep, announced by
              NASAA on May 21, 2018 with more than forty
              regulators.<C n={5} /><C n={6} />
            </li>
            <li>
              The Board noticed BlockFi on July 22, 2021, Celsius on
              September 17, 2021, and Voyager on April 12, 2022; BlockFi
              settled for $100 million, Texas&apos;s share
              $943,396.<C n={9} /><C n={11} /><C n={16} /><C n={10} />
            </li>
            <li>
              Enforcement director Joe Rotunda&apos;s October 14, 2022
              declaration disclosed an investigation of FTX; the Board&apos;s
              case against Bankman-Fried was dismissed for lack of
              jurisdiction on February 2, 2023.<C n={17} /><C n={19} />
            </li>
            <li>
              The Board&apos;s index lists more than seventy crypto orders
              since 2017; it set aside its own 2025 Apertum order on July
              31, 2025.<C n={31} /><C n={30} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the alert to the hearing room
            </h2>
            <span className="text-xs text-muted-2">2014 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {tssbTimeline.map((e) => {
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
          <h2>What is the Board, and what does it say it regulates?</h2>
          <p>
            A small agency with an old statute and a narrow claim. The
            Legislature created the State Securities Board in 1957; the
            governor appoints its five members, they appoint the
            Securities Commissioner, and the Commissioner runs about
            seventy-five people in Austin, Dallas, Houston, and Corpus
            Christi – twenty-seven of them in the Enforcement Division – on
            a budget near nine million dollars, while the fees it collects
            send roughly a hundred and sixty million a year back to the
            treasury.<C n={34} /><C n={33} /> Travis Iles, a career
            enforcement lawyer at the agency since 2001, became its eighth
            commissioner on September 1, 2017; Jeramy Heintz, who ran
            enforcement after Joe Rotunda, became its ninth on June 18,
            2026.<C n={35} /><C n={36} /> Its law is the Texas Securities
            Act, recodified in 2022 as Title 12 of the Government Code,
            and its test for what counts as a security is the Supreme
            Court of Texas&apos;s in Life Partners v. Arnold – the
            investment-contract test the Board&apos;s 2025 annual report
            warns a pending federal bill &ldquo;threatens.&rdquo;<C n={37} />
            <C n={32} /> The claim it makes for itself is precise. From the
            2018 sweep report: &ldquo;It is important to note that the TSSB
            is not regulating the cryptocurrencies themselves, only the
            investments that claim to use virtual currencies in an
            investment program.&rdquo;<C n={4} /> It does not license
            exchanges, wallets, money transmitters, or the kiosks that took
            $56.8 million from Texans last year; that is the Department of
            Banking. It does not sue in the state&apos;s name; when it goes
            to bankruptcy court it goes through{" "}
            <Link href="/texas-attorney-general-bitcoin">
              the Attorney General
            </Link>{" "}
            as its counsel.<C n={38} /><C n={17} /> What it does is enter
            orders, and it entered the first.
          </p>

          <h2>What was the first order?</h2>
          <p>
            USI-Tech, December 20, 2017. The Board&apos;s first word on the
            asset had been a warning – Commissioner John Morgan&apos;s
            February 25, 2014 investor alert on digital currencies, Mt. Gox
            and volatility and anonymity, issued five weeks before the
            Department of Banking&apos;s Memo 1037 and while a South Austin
            gun store was running the state&apos;s second Bitcoin
            ATM.<C n={1} /> Its first order came nearly four years later,
            twelve weeks into Iles&apos;s tenure: an emergency cease-and-
            desist, ENF-17-CDO-1753, against USI-Tech Limited of Dubai and
            two American agents selling Bitcoin-mining contracts through
            &ldquo;targeted craigslist advertisements, YouTube videos, and
            standalone websites&rdquo; – a &ldquo;daily return of 1%,&rdquo;
            thirty-five percent referral commissions, and no disclosure of
            &ldquo;the facilities used to mine bitcoins, the costs of mining
            bitcoins.&rdquo; USI-Tech announced it was leaving the U.S. and
            Canadian markets within three weeks.<C n={2} /> The Board&apos;s
            annual reports have described it every year since as
            &ldquo;the first state securities regulator to enter an
            enforcement action against a cryptocurrency firm,&rdquo; and
            NASAA, the association of state regulators, told Congress in
            September 2025 that the order that followed – BitConnect,
            January 4, 2018, a lending program promising up to forty
            percent a month from a company that &ldquo;has disclosed
            virtually nothing about its principals, financial condition,
            or strategies&rdquo; – is the model of what a state can
            do.<C n={32} /><C n={3} /><C n={40} /> BitConnect&apos;s coin
            peaked at $2.6 billion two days after the order and lost 98% of
            it within weeks.<C n={4} /> The state that defined the asset in
            2021 and bought it in 2025 had already, in 2017, been the first
            to police the people selling it. The sequence is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            ; the merchant era the 2014 alert belongs to is on{" "}
            <Link href="/early-bitcoin-merchants-texas">
              the grassroots era
            </Link>
            .
          </p>

          <h2>What did the 2018 sweep find?</h2>
          <p>
            That almost nothing being sold was registered and much of it
            was fiction. Enforcement opened thirty-two crypto
            investigations in the four weeks from December 18, 2017 and
            published the tally on April 10, 2018: nineteen of the
            thirty-two claimed to use Bitcoin, none of the promoters was
            registered to sell securities in Texas, thirty of thirty-two
            sold through online ads and social media, at least five
            guaranteed returns &ldquo;some as high as 40% per month,&rdquo;
            six paid recruitment commissions, and only eleven disclosed a
            physical address.<C n={4} /> Seven orders came out of it,
            including LeadInvest, which advertised Justice Ruth Bader
            Ginsburg and two former Solicitors General as its advisers and
            staffed its website with stock photographs.<C n={3} /> On May 21
            NASAA announced Operation Cryptosweep – more than forty U.S.
            and Canadian regulators, roughly seventy investigations,
            thirty-five actions taken or pending – and the Board&apos;s
            release said Texas &ldquo;took the lead in organizing,
            managing, and coordinating&rdquo; it, with Rotunda serving as
            vice-chair of NASAA&apos;s enforcement section.<C n={5} />
            <C n={6} /> By August the continent-wide count was
            forty-seven actions and two hundred investigations, sixteen of
            the actions Texas&apos;s; Iles: &ldquo;We have learned that bad
            actors are leveraging widespread interest in cryptocurrencies
            to defraud the investing public.&rdquo;<C n={7} /> Rotunda, that
            November, gave the agency&apos;s theory of the thing:
            &ldquo;Bitcoin, not surprisingly, lit the spark&rdquo;;
            &ldquo;cryptocurrencies reflect an exciting new market and their
            technologies present new opportunities&rdquo;; and &ldquo;It&apos;s
            not the product. It&apos;s the people.&rdquo;<C n={8} /> The
            organizer who has called the Board&apos;s work
            &ldquo;impeccable&rdquo; is on{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher and Bitcoin</Link>.
            <C n={39} />
          </p>

          <TssbOrdersFigure />

          <h2>What did it do about the lenders?</h2>
          <p>
            Notice them, early, and without freezing anything. On July 22,
            2021 the Board filed a notice of hearing against BlockFi over
            its interest accounts, the third state to do so – &ldquo;This
            legal action affords BlockFi and its affiliates the opportunity
            to respond to our allegations and present admissible
            evidence,&rdquo; Rotunda said – and on September 17, one of four
            states acting the same day, against Celsius: &ldquo;more than
            $344,000,000 in assets under management from more than 9,000
            Texas residents,&rdquo; sold on after regulators had warned the
            company privately in May.<C n={9} /><C n={11} /> &ldquo;I am not
            trying to put the company out of business or shutter its
            doors,&rdquo; Rotunda told CoinDesk. &ldquo;Instead, I recognize
            digital assets and blockchain technology are paving the way for
            exciting new opportunities &hellip; We are simply trying to get
            Celsius in compliance.&rdquo;<C n={12} /> The notices were not
            emergency orders; each said in terms that existing accounts
            could go on earning interest. BlockFi settled on February 14,
            2022 – fifty million dollars to the states split equally and
            fifty to the SEC, Texas&apos;s share $943,396.22 against the
            roughly $688 million that 36,443 Texans had deposited; Iles:
            &ldquo;Complying with existing laws and regulations promotes
            continued investor protection.&rdquo;<C n={10} /> On April 12,
            2022 the Board noticed Voyager: &ldquo;more than $500 million
            held in more than 170,000 Voyager Interest Accounts belonging
            to Texans.&rdquo;<C n={16} /> Then the summer. Celsius froze
            withdrawals in June and the Board learned of it on social
            media – &ldquo;very concerned that clients – including many
            retail investors – may need to immediately access their assets
            yet are unable to&rdquo; – and Voyager filed for bankruptcy on
            July 5.<C n={13} /> In the bankruptcy court the Board and the
            Department of Banking, through the Attorney General, objected
            to Celsius selling its stablecoins and were overruled in a
            forty-five-page opinion; Celsius was closed by a multistate
            consent order in July 2024 in which the states forwent a fine
            so the assets would go to account holders, and Voyager by a
            consent order with its plan administrator on March 20, 2026,
            with no fine, finding that the earn program &ldquo;generally
            operated at a deficit.&rdquo;<C n={14} /><C n={15} /><C n={20} />
          </p>

          <h2>What is the FTX declaration?</h2>
          <p>
            The most consequential document the agency has filed on the
            asset, and it was a sworn statement about a test account. When
            FTX US won the auction for Voyager&apos;s customers in
            September 2022, the Board objected – through the Attorney
            General, its counsel – and attached the declaration of Joseph
            Jason Rotunda, dated October 14. He had opened an account on
            the FTX app under his own name and an Austin address, moved
            ether into it, and watched: &ldquo;Despite the fact I identified
            myself by name and address, the FTX Trading App now shows that
            I am earning yield on the ETH. The yield is valued at 8% APR.
            &hellip; This appears to be an investment contract.&rdquo; The
            declaration disclosed an open, self-initiated investigation of
            FTX Trading, FTX US, and Sam Bankman-Fried.<C n={17} />
            <C n={18} /> &ldquo;We want Texans to have the opportunity to
            invest in what they want to invest in,&rdquo; Rotunda told the
            Tribune. &ldquo;We want to make sure they&apos;re
            protected.&rdquo;<C n={18} /> FTX collapsed three weeks later.
            In November the Board noticed Bankman-Fried personally, seeking
            refunds to Texans ahead of any fine and up to $250,000 more per
            act against Texans over sixty-five; on February 2, 2023 an
            administrative law judge found the Board had no personal
            jurisdiction over a non-resident and cancelled the
            hearing.<C n={17} /><C n={19} /> The federal case that finished
            what the state one could not is on{" "}
            <Link href="/texas-bitcoin-case-tracker">the case tracker</Link>.
          </p>

          <TssbCasesFigure />

          <h2>What has it done since?</h2>
          <p>
            Led working groups, and returned some money. Nexo settled in
            January 2023 for $45 million, half to the states, Texas&apos;s
            share $420,000 – &ldquo;our work does not begin and end with
            traditional products and established markets.&rdquo;<C n={21} />
            In June 2023 a Texas-led group moved ex parte against Abra and
            its chief executive, alleging the company had been insolvent
            since March, had defaulted on loans, and was moving customer
            funds to Binance while holding $1.8 million for 1,600 Texans;
            the January 2024 settlement opened a withdrawal window and
            converted what was left to dollars sent to Texans – &ldquo;we
            prioritized returning money to retail investors.&rdquo;<C n={22} />
            In November 2023 Texas led five states against GS Partners,
            Swiss Valorem Bank, and Josip Heit – a metaverse staking pool,
            skyscraper vouchers, a token, seven layers of commissions – four
            weeks after opening the file; the September 2024 settlement
            returned deposits to about 800,000 customers in more than 170
            countries, with claims run at the respondents&apos; expense.
            Iles, unusually candid: &ldquo;In my experience, regulatory
            actions that materially benefit many investors are
            unfortunately rare &hellip; Today&apos;s settlement is
            different.&rdquo;<C n={24} /><C n={23} /> Between those, the
            metaverse casinos of 2022 – &ldquo;Virtual reality can leave you
            virtually broke&rdquo; – and the AI-trading-bot orders of 2023,
            in which Texas again led the states.<C n={26} /><C n={27} /> In
            2026 the Board has entered five crypto orders through
            September, all issued by Deputy Commissioner Cristi Ochoa:
            TEXITcoin&apos;s mining seats in February, a tokenized-real-estate
            scheme and an &ldquo;AI-enabled&rdquo; Bitcoin-signals MLM in
            June, among them.<C n={28} /><C n={31} /> The TEXITcoin case is
            the one that went to trial: Robert J. Gray demanded a hearing,
            his counsel argued the SEC&apos;s March 2026 guidance on mining
            pools takes the seats outside securities law, and the State
            Office of Administrative Hearings took four days of testimony
            in August, with the Board argued by Heintz two months into his
            commissionership and briefs due in October.<C n={29} />
            <C n={36} /> The mines the seats claimed to be in are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
          </p>

          <h2>The honest counterweight: the losses, the offshore orders, and the line it draws</h2>
          <p>
            Four things. First, the cases it lost or withdrew: the
            Bankman-Fried notice dismissed for jurisdiction, the Celsius
            objection overruled, and Apertum – an April 2025 emergency
            order against a Heit token that Iles set aside himself on July
            31, 2025, the only crypto order the Board has vacated on its
            own motion, against a respondent it had settled with the year
            before, with no public explanation; the respondents&apos;
            lawyers said the case &ldquo;should never have been
            brought.&rdquo;<C n={19} /><C n={14} /><C n={30} /> Second,
            what the orders are. Most of the seventy-odd are emergency
            cease-and-desists against promoters in Dubai, England, Hong
            Kong, Russia, and Estonia who never requested a hearing and
            never paid; the Board publishes no collection figures, and its
            own commissioner conceded in 2024 that actions which
            &ldquo;materially benefit many investors are unfortunately
            rare.&rdquo;<C n={31} /><C n={23} /> The recoveries it can name
            are modest against the exposures it cited: $943,396 from
            BlockFi against $688 million deposited, $420,000 from Nexo,
            nothing from Celsius or Voyager.<C n={10} /><C n={21} />
            <C n={15} /><C n={20} /> Third, timing. The lender notices came
            five to sixteen months before the failures and left every
            existing account earning; no source quantifies whether a
            single Texan withdrew because of them. Fourth, the line. The
            Board did not join the ten-state Coinbase staking action or any
            Kraken case, and has said nothing about why; it has taken no
            located position on the state&apos;s own Bitcoin reserve; and
            the fraud that cost Texans most last year, the kiosks, is
            outside its statute by its own reading.<C n={25} /><C n={4} />
            <C n={38} /> Against all of that stands the one thing no other
            state can say: it went first, on December 20, 2017, and it has
            not stopped.
          </p>
          <p>
            The fair reading is that the Board is the most active and least
            powerful institution in the Texas Bitcoin record – an agency of
            twenty-seven enforcement lawyers that has entered more orders
            against crypto promoters than any other state, drawn its
            authority as narrowly as it can be drawn, and told the
            industry it regulates, in its enforcement director&apos;s words,
            that the problem was never the product. What it cannot reach –
            the exchange, the kiosk, the non-resident – it names, and
            leaves to the agencies and the courts that can.
          </p>

          <h2>Where does the Board stand today?</h2>
          <p>
            As of September 2026: a new commissioner three months in, a
            TEXITcoin decision pending after the August hearing, five 2026
            orders on the index, and an annual report warning that a
            federal bill could narrow the Texas definition of an investment
            contract that every one of its crypto orders rests
            on.<C n={36} /><C n={29} /><C n={32} /> The office that
            represents it in court, and has done far less on its own, is on{" "}
            <Link href="/texas-attorney-general-bitcoin">
              the Texas Attorney General and Bitcoin
            </Link>
            ; the federal prosecutions that reached the people its orders
            could not are on{" "}
            <Link href="/texas-crypto-enforcement-report">
              the Texas crypto enforcement report
            </Link>
            ; the statute-by-statute record it enforces the edges of is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            . This page is the first order, and the seventy after it.
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
            Primary record first: the Board&apos;s own orders, notices of
            hearing, sweep report, releases, annual financial reports,
            appropriations request, and enforcement index, read directly;
            the bankruptcy court&apos;s opinion; NASAA&apos;s releases and
            its 2025 letter to Congress; the Supreme Court of Texas for the
            investment-contract test; the Texas Tribune, the Dallas Morning
            News, Texas Public Radio, CoinDesk, and trade press for the
            quotes, the loss, and the hearing. This is a research and
            reference article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {tssbSources.map((s) => (
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
