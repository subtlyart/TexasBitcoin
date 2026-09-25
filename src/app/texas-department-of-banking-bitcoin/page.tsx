import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  BANKING_LAST_VERIFIED,
  bankingOrders,
  bankingSources,
  bankingTimeline,
  type BankingTimelineKind,
} from "@/lib/banking";

const pageUrl = `${site.url}/texas-department-of-banking-bitcoin`;

export const metadata: Metadata = {
  title: "The Department of Banking and Bitcoin: The Memo That Said It Wasn't Money",
  description:
    "The Texas Department of Banking and Bitcoin, 2014–2026, sourced: Supervisory Memorandum 1037 (April 3, 2014), the first state guidance on virtual currency - 'cannot be considered money or monetary value under the Money Services Act' - and its three lives: the 2019 revision that made fiat-backed stablecoins money, the 2023 statute that codified it, the 2025 rewrite that dropped the five safe harbors for 'case-by-case.' Industry Notice 2021-03 letting state banks custody crypto. Thirteen crypto money-services orders from Bitstamp to OKX, FTX's emergency order, Kraken's $250,000, Block's $1.65 million. The Celsius objection overruled. And the gap the memo built: by the commissioner's 2026 testimony, a kiosk selling bitcoin for cash is 'not subject to Chapter 152,' while Texans lost $56.8 million to kiosk scams and the bill that would have changed it died on the House calendar.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Department of Banking and Bitcoin: The Memo That Said It Wasn't Money",
    description:
      "In April 2014 a Texas bank regulator wrote that Bitcoin is not money, and it still says so. Stablecoins became money; Bitcoin never did. That sentence let the exchanges in and the kiosks loose. The Department's record. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is Supervisory Memorandum 1037?",
    a: "The Texas Department of Banking's guidance on virtual currency under the state's money-services law, first issued April 3, 2014 by Commissioner Charles Cooper - by the Department's account the first such guidance from any state. It holds that a cryptocurrency 'cannot be considered money or monetary value under the Money Services Act,' so that selling your own bitcoin, exchanging crypto for crypto, or merely transferring or custodying it is not money transmission, while an exchange that escrows dollars or a kiosk that routes through a third party generally is. It was revised in January 2019 to treat fiat-backed, redeemable stablecoins as money, and rewritten January 28, 2025 for the Money Services Modernization Act, dropping the activity list for case-by-case analysis. Bitcoin itself has never been money under it.",
  },
  {
    q: "Does Texas require a BitLicense?",
    a: "No. New York opened BitLicense applications on March 11, 2014; Texas issued Memo 1037 three weeks later and chose the opposite path, applying its existing money-transmission statute only where dollars or, since 2019, stablecoins are handled. Exchanges that hold customers' dollars need a Texas money-transmitter license under Finance Code Chapter 152 - Coinbase, Kraken, and Block hold them - and since 2023 those custodying digital assets must file attested reports under Chapter 160. The Department has never created a crypto-specific license, and told the Legislature in 2022 that New York's and Wyoming's special charters would still need a Texas money-transmission license to operate here.",
  },
  {
    q: "What is Industry Notice 2021-03?",
    a: "A June 10, 2021 notice affirming that 'Texas state-chartered banks may provide customers with virtual currency custody services, so long as the bank has adequate protocols in place to effectively manage the risks and comply with applicable law.' The Department found the authority 'already exists pursuant to Texas Finance Code § 32.001.' A bank may store a customer's private keys or take the assets under keys of its own, as a fiduciary with trust powers or as a bailee. It was issued five days before HB 4474 was signed. The Department has said it drew many industry inquiries; no Texas bank offering the service under it has been publicly identified.",
  },
  {
    q: "What enforcement has the Department of Banking taken against crypto companies?",
    a: "Thirteen money-services orders since 2020, all for unlicensed money transmission of dollars or stablecoins, none for Bitcoin itself: Bitstamp ($120,708, 2020), the kiosk operators Coin Cloud (2021) and CoinFlip (2023 and 2026), FTX US and Voyager (emergency and consent orders in late 2022, no penalty), Nexo ($212,264), Kraken ($250,000, 2024), River Financial and Crypto.com (2025), OKX ($95,000, September 2026), plus Texas's $1.65 million share of Block's multistate Bank Secrecy Act settlement and the 2024 Abra settlement that returned customers' assets with the penalty forgone. Most orders let the company keep operating while its license application is reviewed.",
  },
  {
    q: "Why doesn't the Department regulate Bitcoin kiosks?",
    a: "Because of the memo's own logic. Commissioner Cooper told the Senate in June 2026 that 'unless the kiosk supports stablecoin and/or involves a third party ... the transaction between the kiosk operator and customer is not subject to Chapter 152,' since bitcoin is not money and a two-party sale is a sale of goods. Two 2025 bills would have registered kiosks with the Department; SB 1705 passed the Senate and a House committee and died on the House calendar at sine die. The Department said it 'was prepared to supervise and regulate the activity as required.' Texans lost $56.8 million to kiosk scams in 2025, the most of any state.",
  },
];

const kindStyle: Record<BankingTimelineKind, { color: string; label: string }> = {
  memo: { color: "var(--accent)", label: "The memo" },
  notice: { color: "#6f9e6a", label: "The notice" },
  orders: { color: "#c98a4e", label: "The orders" },
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
// Two figures - what is money, in the memo's three lives; and the
// enforcement ledger - drawn from the dated, sourced facts on this page
// (Sept 2026). Server-rendered SVG, no client JS.
function BankingMemoFigure() {
  const cols = [
    { y: 2014, t: "APRIL 3, 2014", c: "var(--star)", rows: ["not money", "n/a - the term does not appear", "five activities enumerated", "“usually but not always” transmission"] },
    { y: 2019, t: "JANUARY 2, 2019", c: "#c98a4e", rows: ["not money", "money, if pegged, backed, redeemable", "five activities kept", "same"] },
    { y: 2025, t: "JANUARY 28, 2025", c: "var(--accent)", rows: ["not money", "money, by statute (§ 152.003)", "“case-by-case” - list removed", "two-party: not Chapter 152"] },
  ];
  const labels = ["Bitcoin", "Fiat-backed stablecoin", "Safe harbors", "Kiosks"];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 260" role="img" aria-label="What is money under the Texas Money Services Act, in the memo's three lives: Bitcoin not money in 2014, 2019, and 2025; fiat-backed stablecoins money from 2019 and by statute from 2023; the five safe harbors kept in 2019 and removed in 2025; kiosks usually transmission in 2014, and two-party bitcoin-for-cash outside Chapter 152 by 2026">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">WHAT IS MONEY · SUPERVISORY MEMORANDUM 1037 IN ITS THREE LIVES</text>
        {labels.map((l, i) => (
          <text key={l} x="28" y={96 + i * 36} fontSize="11" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{l}</text>
        ))}
        {cols.map((col, ci) => {
          const x = 200 + ci * 200;
          return (
            <g key={col.y}>
              <rect x={x - 6} y="48" width="192" height="196" rx="10" fill="var(--surface-2)" stroke={col.c} strokeWidth="1.25" />
              <text x={x + 90} y="70" fontSize="10" fontWeight="600" letterSpacing="1.5" textAnchor="middle" fill={col.c}>{col.t}</text>
              {col.rows.map((r, i) => (
                <text key={i} x={x + 90} y={96 + i * 36} fontSize="10" textAnchor="middle" fill={i === 0 ? col.c : "var(--muted)"} fontWeight={i === 0 ? 700 : 400}>{r}</text>
              ))}
            </g>
          );
        })}
        <text x="405" y="256" fontSize="10" textAnchor="middle" fill="var(--muted-2)">SM 1037 texts of April 3, 2014, April 1, 2019 (superseding Jan 2), and Jan 28, 2025 · Finance Code § 152.003(19) · Cooper testimony June 24, 2026</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        What is money. Three texts, twelve years, one constant: the first row. Everything the Department regulates in crypto flows from the second row, which it wrote in 2019 and the Legislature codified in 2023. Everything it cannot reach – the two-party bitcoin sale, at a counter or a kiosk – flows from the first, which it wrote in 2014 and has never changed.
      </figcaption>
    </figure>
  );
}

function BankingLedgerFigure() {
  const y0 = 84;
  const rh = 17;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 356" role="img" aria-label="The enforcement ledger: thirteen crypto money-services orders 2020 to 2026, from Bitstamp's $120,708 to OKX's $95,000, with Block's $1.65 million share the largest and the three kiosk orders all resting on stablecoin">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE LEDGER · CRYPTO MONEY-SERVICES ORDERS 2020–2026 · DOLLARS OR STABLECOIN, NEVER BITCOIN</text>
        <text x="28" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">DATE</text>
        <text x="130" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">RESPONDENT</text>
        <text x="300" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">WHAT</text>
        <text x="782" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" textAnchor="end" fill="var(--muted-2)">PENALTY</text>
        <line x1="28" y1="70" x2="782" y2="70" stroke="var(--border)" strokeWidth="1" />
        {bankingOrders.map((o, i) => {
          const y = y0 + i * rh;
          return (
            <g key={o.date + o.who}>
              {i % 2 === 1 && <rect x="28" y={y - 12} width="754" height={rh} rx="3" fill="var(--surface-2)" />}
              <text x="28" y={y} fontSize="9" fill="var(--muted-2)">{o.date}</text>
              <text x="130" y={y} fontSize="10" fontWeight="600" fill={o.kiosk ? "var(--star)" : "var(--foreground)"} fontFamily="var(--font-display)">{o.who}</text>
              <text x="300" y={y} fontSize="9" fill="var(--muted)">{o.what}</text>
              <text x="782" y={y} fontSize="9.5" textAnchor="end" fontWeight={o.penalty.startsWith("$1,6") ? 700 : 400} fill={o.penalty.startsWith("$1,6") ? "var(--accent)" : "var(--muted-2)"}>{o.penalty}</text>
            </g>
          );
        })}
        <text x="28" y="310" fontSize="10" fill="var(--muted)">Gold = kiosk operators, each for stablecoin. Not on the ledger: Bitcoin Depot, Coinme, Binance (“abandoned its Texas license application”).</text>
        <text x="28" y="326" fontSize="10" fill="var(--muted)">Licensed money-services volume through Texas, March 2026: $440 billion a year.</text>
        <text x="405" y="350" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Department of Banking enforcement-orders index and releases, 2020–2026 · CSBS June 26, 2024 · Cooper and Saucillo testimony, June 24 and July 30, 2026</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The ledger. Thirteen orders in six years, and the theory of every one is the memo&apos;s second row: someone held dollars, or a stablecoin, and needed a license. The largest sum on it came from a payments app&apos;s anti-money-laundering failures, not from crypto. The kiosk operators appear three times, each for stablecoin – never for the bitcoin-for-cash sale the fraud runs on.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function TexasDepartmentOfBankingBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Department of Banking and Bitcoin: The Memo That Said It Wasn't Money",
    description:
      "The institutional record of the Texas Department of Banking and virtual currency, 2014–2026: Supervisory Memorandum 1037 in its three lives, Industry Notice 2021-03, the Money Services Modernization Act and Chapter 160, the thirteen crypto money-services orders, the bankruptcy objections, the kiosk gap and the bill that died, and the GENIUS Act framework Texas does not yet have.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "GovernmentOrganization", name: "Texas Department of Banking" },
      { "@type": "Thing", name: "Supervisory Memorandum 1037" },
      { "@type": "Legislation", name: "Texas Finance Code Chapter 152" },
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
        name: "The Department of Banking and Bitcoin",
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
          / The Department of Banking &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The institutions
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Department of Banking and Bitcoin: The Memo That Said It Wasn&apos;t Money
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Three weeks after New York opened applications for a
            crypto-specific license, a Texas bank regulator answered with
            a memorandum saying the state needed none, because the thing
            being licensed was not money. Supervisory Memorandum 1037 is
            the oldest document on this site and the one everything else
            on it assumes: it is why the exchanges came to Texas, why the
            Legislature had to write its own definition of the asset in
            2021, and why the mines and the reserve were legal before
            anyone voted on them. The Department has rewritten it twice –
            to make stablecoins money in 2019, to meet a new statute in
            2025 – and never changed its first line. That constancy is the
            Department&apos;s whole record: thirteen orders against
            companies that held dollars, a notice letting banks hold keys,
            and a kiosk industry that takes cash for bitcoin from the old
            and the frightened outside the reach of a rule that says
            bitcoin is a good, not a payment. The memo, the notice, the
            ledger, and the gap are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 25, 2026 · Updated{" "}
            {BANKING_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            The Texas Department of Banking is the state&apos;s bank and
            money-services regulator, under the Finance Commission and
            Commissioner Charles Cooper since 2008. On April 3, 2014 it
            issued Supervisory Memorandum 1037, the first state guidance on
            virtual currency, holding that a cryptocurrency &ldquo;cannot
            be considered money or monetary value under the Money Services
            Act&rdquo; and that only transactions handling dollars are
            money transmission. It revised the memo in 2019 to treat
            fiat-backed stablecoins as money, affirmed in 2021 that state
            banks may custody crypto, and has entered thirteen crypto
            money-services orders since 2020, all for unlicensed handling
            of dollars or stablecoins. Under its own reading, a two-party
            bitcoin-for-cash kiosk sale is outside its statute.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Supervisory Memorandum 1037, issued April 3, 2014, holds that
              cryptocurrency &ldquo;cannot be considered money or monetary
              value under the Money Services Act.&rdquo;<C n={1} />
            </li>
            <li>
              The January 2019 revision treats a fiat-pegged, reserve-backed,
              redeemable stablecoin as money or monetary value; the 2023
              Money Services Modernization Act wrote that into
              statute.<C n={5} /><C n={11} />
            </li>
            <li>
              Industry Notice 2021-03, June 10, 2021, affirmed that Texas
              state-chartered banks may provide virtual-currency custody
              under existing law.<C n={8} />
            </li>
            <li>
              The Department has entered thirteen crypto money-services
              orders since 2020, including FTX US (December 1, 2022, no
              penalty), Kraken ($250,000, October 2024), and OKX ($95,000,
              September 11, 2026).<C n={14} /><C n={18} /><C n={25} />
            </li>
            <li>
              Commissioner Cooper testified June 24, 2026 that a two-party
              bitcoin-for-cash kiosk transaction is &ldquo;not subject to
              Chapter 152.&rdquo;<C n={30} />
            </li>
            <li>
              SB 1705, which would have registered kiosks with the
              Department, passed the Senate May 15, 2025 and died on the
              House calendar; Texans lost $56.8 million to kiosk scams in
              2025.<C n={35} /><C n={34} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the memo to the kiosks
            </h2>
            <span className="text-xs text-muted-2">2014 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {bankingTimeline.map((e) => {
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
          <h2>What is the Department, and what does it regulate?</h2>
          <p>
            Banks, trust companies, and the businesses that move other
            people&apos;s money – not securities, and not, by its own
            definition, bitcoin. The Department of Banking dates to 1905,
            reports to the eleven-member Finance Commission the governor
            appoints, funds itself from the institutions it supervises at
            no cost to general revenue, and was last continued by the
            Sunset process to 2031.<C n={30} /><C n={37} /> It charters and
            examines 196 state banks holding $350 billion, forty trust
            companies, and 197 money-services businesses moving $440
            billion a year through Texas – among them Coinbase, at $15.2
            billion, Block, and Kraken – with about two hundred staff under
            a commissioner, Charles Cooper, whom the Finance Commission
            appointed on December 1, 2008 and who has signed every crypto
            order the agency has entered.<C n={30} /><C n={32} />
            <C n={36} /> Its statute for this page is the Money Services
            Act of 2005, Finance Code Chapter 151, replaced on September 1,
            2023 by the Money Services Modernization Act, Chapter 152,
            which the Department helped write as the model law of the
            Conference of State Bank Supervisors, and since 2023 the
            digital-asset custody chapter, Chapter 160.<C n={11} />
            <C n={10} /><C n={12} /> The regulator next door that polices
            the people selling crypto investments is on{" "}
            <Link href="/texas-state-securities-board-bitcoin">
              the Texas State Securities Board and Bitcoin
            </Link>
            ; the lawyer who files the Department&apos;s objections in
            bankruptcy court is on{" "}
            <Link href="/texas-attorney-general-bitcoin">
              the Texas Attorney General and Bitcoin
            </Link>
            . This page is the agency that decided, first, what the asset
            was not.
          </p>

          <h2>What did Memo 1037 say in 2014?</h2>
          <p>
            That the question of licensing turns on dollars, and bitcoin
            is not one. Supervisory Memorandum 1037, addressed on April 3,
            2014 to &ldquo;All Virtual Currency Companies Operating or
            Desiring to Operate in Texas,&rdquo; walked through the Money
            Services Act&apos;s two definitions and found the asset outside
            both. Not currency, &ldquo;because neither centralized virtual
            currencies nor cryptocurrencies are coin and paper money issued
            by the government of a country.&rdquo; Not money: &ldquo;A unit
            of cryptocurrency is also not a claim. It does not entitle its
            owner to anything, and creates no duties or obligations in a
            person who gives, sells, or transfers it. There is no entity
            that must honor the value of a cryptocurrency &hellip;
            Therefore cryptocurrencies as currently implemented cannot be
            considered money or monetary value under the Money Services
            Act.&rdquo;<C n={1} /> From that, five cases. A sale of
            cryptocurrency for dollars between two parties &ldquo;is
            essentially a sale of goods.&rdquo; Crypto for crypto:
            &ldquo;Regardless of how many parties are involved, there is no
            receipt of money.&rdquo; Transfer and custody of the coin
            alone: not transmission, &ldquo;including intermediaries who
            receive cryptocurrency for transfer to a third party, and
            entities who, akin to depositories, hold cryptocurrency on
            behalf of customers.&rdquo; An exchange that escrows dollars,
            &ldquo;such as the failed Mt. Gox,&rdquo; &ldquo;is generally
            money transmission.&rdquo; And a machine: &ldquo;usually but not
            always&rdquo; – because &ldquo;at least some Bitcoin ATMs can be
            configured to conduct transactions only between the customer
            and the machine&apos;s operator, with no third parties involved.
            If the machine never involves a third party &hellip; there is
            no money transmission.&rdquo;<C n={1} /> Cooper&apos;s release
            called bitcoin &ldquo;best viewed like a speculative
            investment, not as money.&rdquo;<C n={2} /> The Department&apos;s
            Daniel Wood told the Tribune it was &ldquo;the first memorandum
            to offer specific guidance on how Bitcoin and cryptocurrency
            fit into the current regulatory scheme from a state,&rdquo;
            written with &ldquo;some motivation to get out there quickly
            and help guide the national discussion&rdquo; – New York having
            opened BitLicense applications on March 11.<C n={3} />
            <C n={4} /> Cooper, to the Legislature in 2022: &ldquo;Texas was
            the first state to publish such guidance and the Memorandum
            served as a template for guidance published in other
            states.&rdquo;<C n={9} /> The merchants and the machines the
            memo arrived after are on{" "}
            <Link href="/early-bitcoin-merchants-texas">the grassroots era</Link>;
            what the memo means for a Texan today is on{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law actually says about Bitcoin
            </Link>
            .
          </p>

          <h2>How did the memo change?</h2>
          <p>
            Twice, and never on bitcoin. In January 2019, to meet
            &ldquo;the widespread introduction of stablecoins to the
            market,&rdquo; the Department added a category: a stablecoin
            pegged to a sovereign currency, backed by a reserve, and
            redeemable &ldquo;may be considered a claim that can be
            converted into currency and thus fall within the definition of
            money or monetary value,&rdquo; and receiving one for
            transmission &ldquo;may be money transmission &hellip;
            regardless whether the redemption right is expressly granted or
            implied by the issuer.&rdquo; It named Tether.<C n={5} />
            CoinDesk called Texas, the same week, &ldquo;one of the
            nation&apos;s most permissive&rdquo; jurisdictions – and now the
            one where a stablecoin issuer needed a license.<C n={6} /> The
            Legislature wrote that reading into the Money Services
            Modernization Act in 2023: money or monetary value
            &ldquo;includes stablecoin&rdquo; that is pegged, fully backed,
            and redeemable.<C n={11} /> On January 28, 2025 the memo was
            rewritten for the new chapter. The five-activity list – the
            safe harbors of 2014, including the paragraph on machines – was
            removed in favor of &ldquo;case-by-case&rdquo; analysis; the
            statutory definition was adopted; and a new sentence closed a
            door Tether had walked through: an issuer that &ldquo;does not
            in fact hold sufficient sovereign currency in reserve&rdquo;
            &ldquo;does not remove that stablecoin from the regulatory
            ambit.&rdquo; The first row did not move: &ldquo;non-stablecoin
            virtual currency is not money or monetary value under the
            MSMA.&rdquo;<C n={7} /> The statute that gave the asset a
            definition the Department&apos;s never did – HB 4474, the
            Uniform Commercial Code chapter – is on{" "}
            <Link href="/tan-parker-bitcoin">Tan Parker and Bitcoin</Link>.
          </p>

          <BankingMemoFigure />

          <h2>What is Industry Notice 2021-03?</h2>
          <p>
            The Department&apos;s one affirmative act for the asset. On June
            10, 2021 – five days before Abbott signed HB 4474, and in the
            same week the national bank regulators were pulling back the
            custody permissions of the year before – the Department issued
            a notice that &ldquo;affirms that Texas state-chartered banks
            may provide customers with virtual currency custody services,
            so long as the bank has adequate protocols in place to
            effectively manage the risks and comply with applicable
            law.&rdquo; It found no new law was needed: the authority
            &ldquo;already exists pursuant to Texas Finance Code
            § 32.001.&rdquo; A bank may &ldquo;merely store copies of the
            customer&apos;s private keys&rdquo; or &ldquo;cause the customer
            to transfer their virtual currency directly to the control of
            the bank, creating new private keys that are then held by the
            bank on behalf of the customer,&rdquo; as a fiduciary with trust
            powers or, without them, as a bailee; it must have
            administrative, technical, and physical controls, confirm its
            insurance, and oversee any vendor.<C n={8} /> The Department
            told the Legislature in 2022 that the notice applied to trust
            companies too and that it &ldquo;fielded a significant number
            of inquiries from the industry.&rdquo;<C n={9} /> It has never
            named a bank that took the offer, and none has been publicly
            identified. What the custody notice does for the lender who
            wants to perfect against the asset is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            .
          </p>

          <h2>What has the Department enforced?</h2>
          <p>
            The second row of the memo, thirteen times. Every crypto order
            the Department has entered rests on the same theory – someone
            received dollars, or since 2019 a stablecoin, for transmission
            without a license – and none on bitcoin. Bitstamp paid $120,708
            in November 2020 for fiat stored value.<C n={26} /> Coin Cloud, a
            kiosk operator, paid $5,925 in October 2021 for exchanging
            stablecoin for cash at its machines.<C n={13} /> In the autumn of
            2022, with the Securities Board and through the Attorney
            General, the Department objected in the Celsius bankruptcy to
            the sale of stablecoins on &ldquo;troublingly broad
            permission&rdquo; – overruled in January – and to Voyager&apos;s
            disclosure statement; on November 18 it entered an emergency
            order against FTX US for unlicensed money transmission,
            converted on December 1 into a consent order requiring FTX to
            &ldquo;refuse transfers of money, stablecoin, or other monetary
            value from any customers located in Texas&rdquo; and to post
            the order on its claims site, and on December 20 gave Voyager
            the same, neither with a penalty.<C n={27} /><C n={28} />
            <C n={14} /><C n={15} /> Nexo paid $212,264 in March 2023; the
            Department and the Securities Board told the Voyager court that
            month that Binance.US had &ldquo;abandoned its Texas license
            application after failing to provide sufficient financial
            documentation.&rdquo;<C n={16} /><C n={29} /> CoinFlip, another
            kiosk operator, paid $31,600 in July 2023 for stablecoin at its
            machines, and $40,840 in February 2026 for a stablecoin order
            desk, its license application of May 2024 still
            pending.<C n={17} /><C n={24} /> Kraken paid $250,000 in October
            2024, kept a $48 million capital injection in place, and kept
            operating while its application was reviewed.<C n={18} /> In
            2025: $1,647,396 as Texas&apos;s share of Block&apos;s $79 million
            multistate anti-money-laundering settlement over Cash App, the
            largest sum on the ledger and not a crypto case; the Abra
            settlement, in which Texas sat on the working group of a
            25-state agreement that returned up to $82 million in customer
            assets and forwent each state&apos;s $250,000 penalty, Abra
            having never been licensed in Texas after a 2020 no-action
            letter; River Financial, a Bitcoin brokerage that had applied
            on its own after Chapter 160, $56,545 for holding customers&apos;
            dollars while it bought their bitcoin; Crypto.com,
            $87,109.<C n={19} /><C n={21} /><C n={20} /><C n={22} />
            <C n={23} /> And on September 11, 2026, OKX: six years of
            receiving &ldquo;sovereign currency and stablecoin for
            transmission&rdquo; that the company &ldquo;asserts &hellip; was
            inadvertent,&rdquo; $95,000, application pending.<C n={25} />
            Chapter 160&apos;s attested custody reports have produced no
            enforcement and no published count. The lenders whose
            collapses the orders followed are on{" "}
            <Link href="/texas-state-securities-board-bitcoin">
              the Texas State Securities Board and Bitcoin
            </Link>
            ; the representative who wrote the commingling ban is on{" "}
            <Link href="/giovanni-capriglione-bitcoin">
              Giovanni Capriglione and Bitcoin
            </Link>
            .
          </p>

          <BankingLedgerFigure />

          <h2>What about the kiosks?</h2>
          <p>
            They are the memo&apos;s first row, standing on a sidewalk. A
            kiosk that sells bitcoin for cash to one customer, with no
            stablecoin and no exchange in the middle, is a two-party sale
            of goods under the 2014 reading, and Cooper told the Senate on
            June 24, 2026 that it still is: &ldquo;The Department does not
            regulate two party transactions involving the exchange of fiat
            currency for non-stablecoin virtual currency. As a result,
            unless the kiosk supports stablecoin and/or involves a third
            party &hellip; the transaction between the kiosk operator and
            customer is not subject to Chapter 152.&rdquo;<C n={30} /> Two
            bills in 2025 would have changed that. SB 1705, Tan
            Parker&apos;s, would have registered every kiosk with the
            Department under a new Chapter 161 – quarterly reports,
            blockchain analytics, $5,000 a violation – and passed the
            Senate May 15, cleared the House committee 8–0 on May 22, was
            placed on the calendar May 27, and died at sine die; the House
            companion passed the House and died in the Senate. No
            Department testimony on either has been located. Cooper:
            &ldquo;While neither bill was ultimately enacted, the Department
            was prepared to supervise and regulate the activity as
            required. If a similar bill is filed in the upcoming session,
            the Department will be prepared.&rdquo;<C n={35} /><C n={30} />
            The cost of the year between: $56.8 million lost by Texans to
            kiosk scams in 2025 across 1,179 complaints, the most of any
            state, on some 4,000 machines, seven in ten users over sixty –
            &ldquo;Texas regulators currently have no oversight over the
            kiosks,&rdquo; the Tribune wrote, and AARP&apos;s Andrea Earl:
            &ldquo;The state of Texas is behind other states on this, and
            then really lost momentum last session.&rdquo;<C n={34} />
            Deputy Commissioner Saucillo, to a House committee on July 30,
            on why the money does not come back: &ldquo;typically,
            they&apos;re sending it to an unhosted wallet &hellip; it gets
            into a mixer, it gets into all these other things, and
            it&apos;s very hard to get any of that back.&rdquo;<C n={33} />
            The senator whose kiosk bill died is on{" "}
            <Link href="/tan-parker-bitcoin">Tan Parker and Bitcoin</Link>;
            the bill itself is on{" "}
            <Link href="/texas-bitcoin-bills-that-died">the bills that died</Link>.
          </p>

          <h2>The honest counterweight: the constancy, the ledger, and the framework</h2>
          <p>
            Three things, and the first is the page&apos;s thesis turned
            over. The memo&apos;s constancy on bitcoin is the reason Texas
            became what it became – no special license, no BitLicense
            exodus, the exchanges and the miners and eventually the state
            itself holding an asset no regulator called money – and it is
            also the reason the Department cannot reach the fraud that
            costs Texans most. Both are the same sentence. The Department
            did not choose the second consequence, but it has chosen, three
            times, not to revise the sentence, and it did not ask the
            Legislature for the kiosk bill; it was &ldquo;prepared.&rdquo;
            <C n={1} /><C n={7} /><C n={30} /> Second, the ledger. Against
            $440 billion in licensed volume, the Department&apos;s crypto
            penalties sum to well under a million dollars once Block&apos;s
            anti-money-laundering share is set aside – Kraken&apos;s
            $250,000 for years of activity, OKX&apos;s $95,000 for six, the
            kiosk operators&apos; tens of thousands – and most orders let the
            respondent keep operating while the application it should have
            filed years earlier is reviewed; its one contested position in
            court, the Celsius stablecoin objection, was
            overruled.<C n={32} /><C n={18} /><C n={25} /><C n={28} /> What
            the ledger does show is a regulator that returns money when it
            can – Abra&apos;s customers got their assets and the Department
            waived its fine to make it so – and that has never once been
            found wrong on what the statute covers.<C n={21} /> Third, the
            framework. The Department told the Senate in June that under
            the federal GENIUS Act &ldquo;Texas does not currently have a
            substantially similar framework in place&rdquo; to keep
            regulating stablecoin issuers itself, and that it &ldquo;looks
            forward to working with the Legislature&rdquo; – the second
            time in two sessions it has been ready to enforce a regime it
            has not asked for.<C n={30} /><C n={31} /> Against all of it: the
            Department wrote the first state guidance in the country, it
            has never lost a licensing case, and the industry it regulates
            has called its rules appropriate and its state permissive in
            the same breath.<C n={9} /><C n={6} />
          </p>
          <p>
            The fair reading is that the Department of Banking decided in
            2014 what bitcoin was not and has spent twelve years regulating
            everything around it – the dollars, the stablecoins, the banks
            that hold keys, the exchanges that hold cash – with a precision
            that made Texas the easiest state in the country to build a
            crypto business in and one of the hardest to police a kiosk in.
            The memo is the seam of Texas Bitcoin law. The Department cut
            it, and has kept it exactly where it was.
          </p>

          <h2>Where does the Department stand today?</h2>
          <p>
            As of September 2026: the memo in its third text, the custody
            notice unused by any named bank, thirteen orders, a commissioner
            in his eighteenth year, a kiosk bill it will be
            &ldquo;prepared&rdquo; for again in January, and a stablecoin
            framework it has told the Legislature Texas does not
            have.<C n={7} /><C n={36} /><C n={30} /> The 90th Legislature
            convenes January 12, 2027 with both on its desk and the
            registry-keeping regulator across the hall on{" "}
            <Link href="/texas-public-utility-commission-bitcoin">
              the Public Utility Commission and Bitcoin
            </Link>
            . The cornerstone this page is the first stone of is{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            ; the statute-by-statute record that begins with the memo is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            . This page is the sentence that said it wasn&apos;t money, and
            everything that followed from it.
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
            Primary record first: the memorandum in each of its three
            texts and the custody notice, read directly; the
            Department&apos;s enforcement orders, releases, and written
            testimony to the Legislature in 2022, 2025, and 2026; the
            Legislature&apos;s bill texts and analyses; the Conference of
            State Bank Supervisors; the bankruptcy court&apos;s ruling as
            reported; then the Texas Tribune, KXAN, CoinDesk, and Decrypt
            for the quotes, the objections, and the kiosk figures. This is
            a research and reference article, not financial, investment,
            or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {bankingSources.map((s) => (
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
