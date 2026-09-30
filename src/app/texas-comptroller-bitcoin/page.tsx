import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { InstitutionsBlock } from "@/components/institutions-block";
import {
  COMPTROLLER_LAST_VERIFIED,
  comptrollerSources,
  comptrollerStatus,
  comptrollerTimeline,
  type ComptrollerTimelineKind,
} from "@/lib/comptroller";

const pageUrl = `${site.url}/texas-comptroller-bitcoin`;

export const metadata: Metadata = {
  title: "The Texas Comptroller and Bitcoin: The Office That Holds It",
  description:
    "The Texas Comptroller of Public Accounts and Bitcoin, 2015–2026, sourced: the bullion depository (HB 483, 2015), the Fiscal Notes studies, the 'I can do that already' testimony, SB 21's custody, committee, and reporting duties, Fund 1018, the two $5 million ETF purchases, the unawarded custody RFP, the June 2025 franchise-tax ruling, and the December 31, 2026 report.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Texas Comptroller and Bitcoin: The Office That Holds It",
    description:
      "One Texas office holds the state's Bitcoin by statute, chairs the committee, signs the custodian, and writes the report. It ran the state's gold vault first. The Comptroller's record, across three holders. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What does the Texas Comptroller have to do with Bitcoin?",
    a: "Senate Bill 21 (2025) places the Texas Strategic Bitcoin Reserve in the Comptroller's custody, outside the state treasury, and makes the Comptroller the chair of its five-member advisory committee, the signer of its custody contract, and the author of a biennial report due by December 31 of each even-numbered year. The office made the state's first purchases - $10 million in a spot Bitcoin ETF in November and December 2025 - and is still choosing a custodian to convert that position into directly held Bitcoin.",
  },
  {
    q: "Who is the Texas Comptroller now?",
    a: "Don Huffines, sworn in August 1, 2026 after Governor Abbott appointed him to the unexpired term of Kelly Hancock, who had served as acting comptroller since Glenn Hegar left for Texas A&M on July 1, 2025. Huffines faces Democrat Sarah Eckhardt on November 3, 2026 for the full four-year term. Custody of the reserve passes with the office under SB 21.",
  },
  {
    q: "Does Texas accept Bitcoin for taxes?",
    a: "No. The Comptroller's Fiscal Notes stated in April 2018 that Texas does not accept Bitcoin or any currency other than U.S. dollars in payment of taxes, and nothing since has changed that. A June 3, 2025 letter ruling (202506007L) treats bitcoin as intangible property - not tangible personal property, a security, or currency - for franchise tax, so a seller cannot deduct its acquisition cost as cost of goods sold.",
  },
  {
    q: "What is the connection between the Bullion Depository and the Bitcoin reserve?",
    a: "The same office runs both. HB 483 (2015) made the Comptroller the administrator of the Texas Bullion Depository, which opened at Leander on June 6, 2018 under a private operator; SB 21 (2025) gave the Comptroller custody of the Bitcoin reserve; and HB 1056 (2025) directs the Comptroller to stand up a transactional currency backed by depository gold by May 1, 2027. The state itself holds no gold in the depository; it does hold $10 million of Bitcoin exposure in the reserve.",
  },
  {
    q: "Could the Comptroller have bought Bitcoin without SB 21?",
    a: "Yes, indirectly. Under existing law the office could already invest in SEC-regulated exchange-traded funds, which included spot Bitcoin ETFs from January 2024. Comptroller Hegar told the Senate on February 18, 2025, 'I can do that already,' but the office made no such investment until the reserve statute and its $10 million appropriation gave it a mandate. SB 21 added what existing law lacked: a dedicated fund, a committee, custody rules, and a reporting duty.",
  },
];

const kindStyle: Record<ComptrollerTimelineKind, { color: string; label: string }> = {
  depository: { color: "var(--star)", label: "The depository" },
  study: { color: "#6f9e6a", label: "The studies" },
  statute: { color: "#c98a4e", label: "The statute" },
  reserve: { color: "var(--accent)", label: "The reserve" },
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
// Two figures - the office's Bitcoin duties under SB 21, and the two
// hard-asset reserves the same desk runs - drawn from the dated, sourced
// facts on this page (Sept 2026). Server-rendered SVG, no client JS.
function ComptrollerDutiesFigure() {
  const duties = [
    { s: "§ 403.703", t: "Custody", d: "Holds the reserve outside the treasury, as Fund 1018", st: "Held - as an ETF placeholder", c: "#c98a4e" },
    { s: "§ 403.705", t: "Contracts", d: "May hire a custodian; audits", st: "RFP closed July 10; no award", c: "var(--star)" },
    { s: "§ 403.707", t: "Committee", d: "Chairs the five seats; appoints four", st: "Complete - May 28, 2026", c: "#6f9e6a" },
    { s: "§ 403.708", t: "Report", d: "Biennial, on the website and to the Legislature", st: "Due December 31, 2026", c: "#8a7fb5" },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="The Comptroller's four Bitcoin duties under SB 21 and their status in September 2026: custody held as an ETF placeholder; the custody contract unawarded after the RFP closed July 10; the advisory committee complete since May 28, 2026; the first biennial report due December 31, 2026.">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE DESK · WHAT SB 21 MAKES THE COMPTROLLER DO, AND WHERE EACH DUTY STANDS</text>
        {duties.map((d, i) => {
          const x = 28 + i * 190;
          return (
            <g key={d.s}>
              <rect x={x} y="52" width="174" height="160" rx="10" fill="var(--surface-2)" stroke={d.c} strokeWidth="1.25" />
              <text x={x + 14} y="76" fontSize="10" fontWeight="600" letterSpacing="1.5" fill={d.c}>{d.s}</text>
              <text x={x + 14} y="100" fontSize="15" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{d.t}</text>
              <foreignObject x={x + 14} y="110" width="150" height="56">
                <p style={{ margin: 0, fontSize: 10, lineHeight: "14px", color: "var(--muted)" }}>{d.d}</p>
              </foreignObject>
              <line x1={x + 14} y1="172" x2={x + 160} y2="172" stroke="var(--border)" strokeWidth="1" />
              <text x={x + 14} y="192" fontSize="10" fontWeight="600" fill={d.c}>{d.st}</text>
            </g>
          );
        })}
        <text x="405" y="240" fontSize="10" textAnchor="middle" fill="var(--muted-2)">SB 21 enrolled text · Manual of Accounts, Fund 1018 · ESBD 908-26-1778WS · Comptroller release, May 28, 2026 · as of September 30, 2026</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The desk. Four sections of one statute, addressed to one office. Two are done, one is half-done, and the one the Legislature will read first is due in three months. The holder&apos;s name changed once in the middle; the duties did not.
      </figcaption>
    </figure>
  );
}

function ComptrollerTwoReservesFigure() {
  const rows: [string, string, string][] = [
    ["Statute", "HB 483 (2015) · HB 1056 (2025)", "SB 21 (2025)"],
    ["Comptroller's role", "Administers; appoints the administrator", "Custody; chairs the committee; reports"],
    ["Where it sits", "Private vault at Leander, private operator", "Fund 1018, outside the treasury, Trust Company"],
    ["What the state owns", "No gold of its own (Hegar, Feb. 2025)", "$10M in a spot Bitcoin ETF, two tranches"],
    ["The custodian", "Lone Star Tangible Assets, since 2018", "Unawarded - RFP closed July 10, 2026"],
    ["Next", "Gold-backed currency live May 1, 2027", "Report due Dec. 31, 2026; coin in the state's name"],
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The two hard-asset reserves the Comptroller runs, compared: the Bullion Depository (HB 483 and HB 1056, a private vault at Leander, no state gold, currency due May 2027) and the Strategic Bitcoin Reserve (SB 21, Fund 1018 outside the treasury, $10 million in a spot ETF, custodian unawarded, report due December 31, 2026).">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">TWO RESERVES, ONE DESK · THE DEPOSITORY AND THE BITCOIN RESERVE</text>
        <text x="300" y="62" fontSize="10" fontWeight="600" letterSpacing="1.5" fill="var(--star)">THE BULLION DEPOSITORY</text>
        <text x="560" y="62" fontSize="10" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">THE BITCOIN RESERVE</text>
        <line x1="28" y1="70" x2="782" y2="70" stroke="var(--border)" strokeWidth="1" />
        {rows.map((r, i) => {
          const y = 94 + i * 32;
          return (
            <g key={r[0]}>
              {i % 2 === 1 && <rect x="28" y={y - 20} width="754" height="32" rx="3" fill="var(--surface-2)" />}
              <text x="28" y={y} fontSize="10.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{r[0]}</text>
              <text x="300" y={y} fontSize="10" fill="var(--muted)">{r[1]}</text>
              <text x="560" y={y} fontSize="10" fill="var(--muted)">{r[2]}</text>
            </g>
          );
        })}
        <text x="405" y="292" fontSize="10" textAnchor="middle" fill="var(--muted-2)">HB 483 summary · Comptroller release, June 6, 2018 · Texas Observer, Feb. 28, 2025 · SB 21 · HB 1056 history · Bond Buyer · Dallas Morning News, March 2, 2026 · ESBD</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Two reserves. The office built the country&apos;s first state vault for a hard asset and then, seven years later, its first state fund for a digital one. In the vault the state keeps other people&apos;s gold; in the fund it keeps its own claim on Bitcoin. Neither yet holds the thing itself in the state&apos;s name.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function TexasComptrollerBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Texas Comptroller and Bitcoin: The Office That Holds It",
    description:
      "The institutional record of the Texas Comptroller of Public Accounts and Bitcoin, 2015–2026: the bullion depository, the Fiscal Notes studies, the SB 21 testimony and fiscal note, custody of the Strategic Bitcoin Reserve, Fund 1018, the two ETF purchases, the advisory committee, the unawarded custody RFP, the franchise-tax ruling, HB 1056's gold-backed currency, and the first biennial report due December 31, 2026.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "GovernmentOrganization", name: "Texas Comptroller of Public Accounts" },
      { "@type": "Thing", name: "Texas Strategic Bitcoin Reserve" },
      { "@type": "Legislation", name: "Texas Senate Bill 21 (2025)" },
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
        name: "The Texas Comptroller and Bitcoin",
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
          / The Texas Comptroller &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The institutions
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Texas Comptroller and Bitcoin: The Office That Holds It
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every other institution on this site regulates, studies, sues,
            or switches off the asset. One holds it. The Comptroller of
            Public Accounts – the state&apos;s chief financial officer, tax
            collector, revenue estimator, and treasurer – is the office
            Senate Bill 21 addresses by name: it has custody of the
            Strategic Bitcoin Reserve, chairs the committee that advises
            on it, signs the contract that will put the coin in the
            state&apos;s name, and owes the Legislature a report on it by
            December 31, 2026. It came to that role with practice. A decade
            earlier the same office was handed the country&apos;s first
            state bullion depository, and it built that vault, opened it,
            and never put the state&apos;s own gold in it. Three people
            have sat at the desk since the reserve was proposed: one who
            could already buy and did not, one who voted no and bought,
            and one who campaigned on a citadel and inherited a
            placeholder. The office is the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 30, 2026 · Updated{" "}
            {COMPTROLLER_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            The Texas Comptroller of Public Accounts holds the Texas
            Strategic Bitcoin Reserve. Senate Bill 21, signed June 20,
            2025, places the reserve in the Comptroller&apos;s custody
            outside the state treasury, makes the Comptroller chair of its
            five-member advisory committee, authorizes a custody contract,
            and requires a public report by December 31 of each
            even-numbered year. The office bought $10 million of a spot
            Bitcoin ETF in November and December 2025 as a placeholder,
            named the committee on May 28, 2026, and has not yet awarded
            the custody contract it solicited. The same office administers
            the Texas Bullion Depository and, under HB 1056, will issue a
            gold-backed transactional currency by May 1, 2027. Texas does
            not accept Bitcoin for taxes.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              SB 21 § 403.703 places the Strategic Bitcoin Reserve in the
              comptroller&apos;s custody, outside the treasury; Fund 1018
              was opened in the Manual of Accounts on June 25, 2025.
              <C n={1} /><C n={3} />
            </li>
            <li>
              The Comptroller&apos;s office bought about $5 million of the
              iShares Bitcoin Trust on November 20, 2025 and about $5
              million more on December 15, 2025, the full appropriation.
              <C n={8} /><C n={9} />
            </li>
            <li>
              Comptroller Glenn Hegar told the Senate on February 18, 2025
              that the office could already invest in Bitcoin ETFs: &ldquo;I
              can do that already.&rdquo;<C n={6} /><C n={5} />
            </li>
            <li>
              RFP 908-26-1778WS for custody and liquidity services closed
              July 10, 2026 with contract execution targeted for late
              August; no award is posted as of September 30, 2026.
              <C n={11} /><C n={13} />
            </li>
            <li>
              Letter ruling 202506007L, June 3, 2025, holds that bitcoin is
              intangible property, not tangible personal property, a
              security, or currency, for Texas franchise tax.<C n={26} />
            </li>
            <li>
              The Comptroller has administered the Texas Bullion Depository
              since HB 483 took effect June 19, 2015; it opened at Leander
              on June 6, 2018, and the state itself holds no gold there.
              <C n={18} /><C n={19} /><C n={21} />
            </li>
          </ul>
        </div>

        {/* Status panel */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              The office&apos;s Bitcoin duties, today
            </h2>
            <span className="text-xs text-muted-2">
              As of {COMPTROLLER_LAST_VERIFIED}
            </span>
          </div>
          <dl className="mt-5 divide-y divide-border rounded-xl border border-border bg-surface">
            {comptrollerStatus.map((row) => (
              <div key={row.label} className="grid gap-1 p-4 sm:grid-cols-[180px_1fr] sm:gap-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-2">
                  {row.label}
                </dt>
                <dd className="text-sm leading-relaxed text-muted">
                  {row.value}
                  {row.sourceIds.map((n) => (
                    <C key={n} n={n} />
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <ComptrollerDutiesFigure />

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the vault to the fund
            </h2>
            <span className="text-xs text-muted-2">2015 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {comptrollerTimeline.map((e) => {
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
          <h2>What is the Comptroller, and why does it hold the reserve?</h2>
          <p>
            Because Texas has no treasurer. Voters abolished the office of
            State Treasurer in November 1995, effective August 31, 1996,
            and its duties passed to the Comptroller of Public Accounts,
            which already collected the taxes and certified the budget;
            the Comptroller now runs the Texas Treasury Safekeeping Trust
            Company, manages more than $100 billion, and is the desk any
            statute about state money lands on.<C n={32} /><C n={5} /> When the Legislature wanted a reserve of
            a hard asset in 2015 – gold, in a vault – it addressed the
            bill to the Comptroller. When it wanted one of a digital asset
            in 2025, it did the same. Senate Bill 21 is written to the
            office, not to a person: § 403.703 gives &ldquo;the
            comptroller&rdquo; custody of the reserve and keeps it outside
            the treasury; § 403.705 lets the comptroller contract with a
            custodian and requires audits; § 403.707 seats the comptroller
            on the five-member advisory committee and has the comptroller
            appoint the other four; § 403.708 makes the comptroller publish
            a report by December 31 of each even-numbered year.<C n={1} />
            The fund itself is a line in the Comptroller&apos;s own Manual
            of Accounts – Fund 1018, opened June 25, 2025, held by the
            Trust Company, &ldquo;not appropriated.&rdquo;<C n={3} /> The
            reserve those sections describe is on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve
            </Link>
            ; the search for the custodian is on{" "}
            <Link href="/who-holds-the-texas-bitcoin-reserve">
              who holds the Texas Bitcoin reserve
            </Link>
            . This page is the office both of them run through.
          </p>

          <h2>What did the office say when the bill was proposed?</h2>
          <p>
            That it could already do it, and that the Legislature should
            set the terms. The fiscal note the Comptroller&apos;s office
            sourced for SB 21 said the cost &ldquo;cannot be
            determined,&rdquo; that administration &ldquo;could be absorbed
            using proceeds from the reserve,&rdquo; and – the sentence the
            office wrote against its own future fund – that holding the
            reserve outside the treasury &ldquo;may limit the
            Legislature&apos;s ability to make appropriation
            decisions.&rdquo;<C n={4} /> On February 18, 2025 Comptroller
            Glenn Hegar registered &ldquo;on,&rdquo; not &ldquo;for,&rdquo;
            and told Business and Commerce that the office &ldquo;takes a
            measured approach to managing a potentially volatile asset, a
            critical requirement when investing taxpayer dollars,&rdquo;
            that it would not recommend a dollar figure, and, asked by
            Senator Nathan Johnson whether it needed the bill to buy
            bitcoin: &ldquo;I can do that already.&rdquo; Existing law let
            the office invest in SEC-regulated exchange-traded funds, spot
            Bitcoin ETFs included since January 2024. It had made no such
            investment.<C n={6} /><C n={5} /><C n={7} /> The comptroller
            who said it is on{" "}
            <Link href="/glenn-hegar-bitcoin">Glenn Hegar and Bitcoin</Link>;
            the senator who asked is on{" "}
            <Link href="/nathan-johnson-bitcoin">Nathan Johnson and Bitcoin</Link>
            ; the author whose bill the office &ldquo;worked with&rdquo; is on{" "}
            <Link href="/charles-schwertner-bitcoin">
              Charles Schwertner and Bitcoin
            </Link>
            .
          </p>

          <h2>What has the office done with the reserve?</h2>
          <p>
            Bought, appointed, solicited – and not yet contracted. The
            purchases came under Kelly Hancock, the acting comptroller who
            had voted against the bill as a senator: about $5 million of
            the iShares Bitcoin Trust at $51.8694 a share on November 20,
            2025, the first purchase for a dedicated state Bitcoin reserve
            in American history, and about $5 million more on December 15,
            the full appropriation, held as what the office called a
            placeholder until a custodian could hold coin in the
            state&apos;s name.<C n={8} /><C n={9} /><C n={31} /> On May 7,
            2026 the office posted RFP 908-26-1778WS, on behalf of the
            Trust Company, for a firm to acquire, hold, and report the
            state&apos;s Bitcoin – cold storage, key management, a 60-day
            conversion of the ETF position, a public holdings website –
            and on May 28 Hancock named the four outside members of the
            committee he chaired by office: Laurie Dotter, Jamie McAvity,
            Carla Reyes, Gary Vecchiarelli.<C n={11} /><C n={12} />
            <C n={10} /> The deadline moved from June 15 to July 10; the
            award was targeted for late August.<C n={13} /> On August 1
            Don Huffines was sworn in to Hancock&apos;s unexpired term, and
            custody, the chair, and the pending award passed to him with
            the office.<C n={14} /><C n={15} /><C n={1} /> The window
            closed. As of September 30, 2026 the ESBD shows no award, and
            the office&apos;s releases since August – sales tax, property
            tax, school-district audits – do not mention the
            reserve.<C n={11} /><C n={17} /> The two holders are on{" "}
            <Link href="/kelly-hancock-bitcoin">Kelly Hancock and Bitcoin</Link>{" "}
            and{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines and Bitcoin</Link>.
          </p>

          <h2>How does the office treat Bitcoin as a tax matter?</h2>
          <p>
            As property it will not take and will not let you expense. The
            Comptroller&apos;s Fiscal Notes, in April 2018: &ldquo;The state
            of Texas doesn&apos;t accept Bitcoin (or any other currency
            other than U.S. dollars) in payment for its taxes.&rdquo;
            <C n={23} /> On June 3, 2025 – seventeen days before the state
            created a fund to hold the asset – the office&apos;s tax
            division answered a bitcoin ATM operator that had asked
            whether selling bitcoin was the sale of tangible personal
            property or of a security. Neither, in letter ruling
            202506007L: &ldquo;bitcoin is intangible property, not tangible
            personal property,&rdquo; not a security under the franchise
            tax, and not currency under either the IRS&apos;s reading or the
            Department of Banking&apos;s – so its acquisition cost cannot be
            deducted as cost of goods sold.<C n={26} /> The ruling sits
            beside the office&apos;s own studies of the industry: Fiscal
            Notes in August 2022 counted Rockdale&apos;s 300 direct jobs and
            roughly 3,000 megawatts of mining load and recommended
            renewing the data-center exemption; in September 2024 it put
            the state&apos;s mines at 2,717 megawatts, the most in North
            America.<C n={24} /><C n={25} /> The regulator whose
            &ldquo;not money&rdquo; memo the ruling leans on is on{" "}
            <Link href="/texas-department-of-banking-bitcoin">
              the Department of Banking and Bitcoin
            </Link>
            ; the mines the office counted are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
          </p>

          <h2>What does the Bullion Depository have to do with it?</h2>
          <p>
            It is the office&apos;s first reserve, and the rehearsal. HB 483,
            Giovanni Capriglione&apos;s bill, was signed June 12, 2015 and
            made the Comptroller the administrator of a Texas Bullion
            Depository – the first state-run precious-metals depository in
            the country – with an administrator the comptroller appoints
            and an operator the comptroller selects.<C n={18} /><C n={20} />
            Hegar named the administrator, chose Lone Star Tangible Assets,
            and opened the depository on June 6, 2018 as its first
            depositor: &ldquo;the nation&apos;s first state-administered
            bullion depository is now a reality.&rdquo;<C n={19} /> Seven
            years later he told the Senate, in the SB 21 hearing, that the
            state itself owned no gold in it.<C n={21} /> HB 1056, signed
            two days after SB 21, now directs the same office to stand up a
            transactional currency backed by depository metal – gold and
            silver recognized as legal tender from September 1, 2026, the
            currency by May 1, 2027.<C n={22} /> The pattern is the
            page&apos;s thesis: the Legislature hands the Comptroller a hard
            asset and a mandate, and the office builds the container
            carefully and fills it slowly. The 2015 vault holds other
            people&apos;s gold; the 2025 fund holds the state&apos;s claim on
            Bitcoin; neither yet holds the thing itself in the state&apos;s
            name. The split between the two reserves is the essay on{" "}
            <Link href="/texas-gold-vs-bitcoin">gold as tender, Bitcoin as reserve</Link>;
            the representative who wrote the depository is on{" "}
            <Link href="/giovanni-capriglione-bitcoin">
              Giovanni Capriglione and Bitcoin
            </Link>
            .
          </p>

          <ComptrollerTwoReservesFigure />

          <h2>The honest counterweight: the caution, the placeholder, and the bills that would have asked more</h2>
          <p>
            Three things. First, the office&apos;s caution is the record.
            It held the authority to buy a Bitcoin ETF for eighteen months
            and did not; it registered &ldquo;on&rdquo; a bill it had helped
            write; its fiscal note warned that the fund would sit beyond
            the Legislature&apos;s appropriation power; and when it did buy,
            it bought a claim on Bitcoin held by a fund manager&apos;s
            custodian, not Bitcoin, and called it a placeholder. Fifteen
            months after the statute took effect the placeholder still
            stands, the award that would retire it is past its own target,
            and the office has said nothing public about why.<C n={4} />
            <C n={7} /><C n={8} /><C n={11} /><C n={17} /> Second, the
            price. The Dallas Morning News marked the $10 million position
            at about $7.8 million on March 2, 2026 – the first public
            accounting of the reserve was a loss, reported by a newspaper
            rather than the office, nine months before the statute
            requires one.<C n={9} /> Third, what the Legislature would
            have given the office and did not. HB 4258 would have let the
            comptroller and local governments invest in cryptocurrency at
            real scale; it was referred April 1, 2025 and never
            heard.<C n={29} /> SB 1244, Schwertner&apos;s bill sponsored by
            Capriglione, would have made the Comptroller the custodian of
            abandoned virtual currency – a holder with the keys would
            report it, the office could contract a custodian and hold it
            outside the treasury, and deduct its costs before selling; it
            passed the Senate April 24, cleared the House committee May
            21, was placed on the calendar May 27, and went no
            further.<C n={27} /><C n={28} /> Against all of it: the office
            executed the first state Bitcoin purchase in the country
            within five months of the statute, seated a committee of
            people who mine and account for the asset for a living, and
            wrote a custody mandate – coin in the state&apos;s name, a
            public holdings website – stricter than the statute
            required.<C n={8} /><C n={10} /><C n={12} />
          </p>
          <p>
            The fair reading is that the Comptroller is a custodian by
            temperament as well as by statute. It has built two reserves
            of hard assets in ten years and has been in no hurry to fill
            either with the state&apos;s own holdings, and the Bitcoin
            record so far – a fund, a placeholder, a committee, an open
            solicitation – is that temperament applied to a new asset by
            three different people in eighteen months. What changes that
            record is a signature on a custody contract and a report. Both
            are the office&apos;s to give, and both are due.
          </p>

          <h2>Where does the office stand today?</h2>
          <p>
            As of September 30, 2026: $10 million in an ETF, a committee of
            five, a custody solicitation closed twelve weeks with no
            award, a legal-tender clause for gold in force, a report due
            in three months, and a comptroller on the ballot in five
            weeks.<C n={9} /><C n={10} /><C n={11} /><C n={22} /><C n={30} />
            The 90th Legislature convenes January 12, 2027 with the
            office&apos;s first report on its desk and the question the
            appropriation left open – whether $10 million was the seed or
            the size – previewed on{" "}
            <Link href="/texas-bitcoin-bills-that-died">the bills that died</Link>{" "}
            and tracked on{" "}
            <Link href="/texas-bitcoin-bills-2027">the 90th Legislature tracker</Link>.
            The statute-by-statute record the office sits inside is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            ; the cornerstone is{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            . This page is the office that holds it, and what holding has
            meant so far.
          </p>
        </div>

        <InstitutionsBlock current="/texas-comptroller-bitcoin" />

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
            Primary record first: the enrolled texts of SB 21, HB 483, and
            HB 1056 and their histories; the Legislative Budget
            Board&apos;s fiscal notes; the Comptroller&apos;s own releases,
            Fiscal Notes, Manual of Accounts, and procurement postings;
            the Senate journal and witness lists; then the Bond Buyer, the
            Dallas Morning News, the Texas Tribune, the Texas Observer,
            and the tax and trade press for the ruling, the purchases, and
            the quotes. This is a research and reference article, not
            financial, investment, legal, or tax advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {comptrollerSources.map((s) => (
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
