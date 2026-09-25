import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  AG_LAST_VERIFIED,
  agSources,
  agTimeline,
  type AgTimelineKind,
} from "@/lib/ag";

const pageUrl = `${site.url}/texas-attorney-general-bitcoin`;

export const metadata: Metadata = {
  title: "The Texas Attorney General and Bitcoin: One Suit, No Opinions",
  description:
    "The Texas Attorney General's office and Bitcoin, 2015–2026, sourced: the eighteen-state suit against the SEC filed November 14, 2024 and stayed since April 2025; the Celsius, Voyager, and Binance.US bankruptcy objections signed for the State Securities Board; the May 2025 ruling ordering the PUC to release the miners' registration data, and the PUC's suit against the office; the one coalition letter signed and the ones skipped; zero formal opinions on virtual currency in eleven years; zero enforcement actions or kiosk suits while Texans lost $56.8 million to kiosk fraud in 2025 and peer states sued; and the November 3, 2026 handover.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Texas Attorney General and Bitcoin: One Suit, No Opinions",
    description:
      "In eleven years the office sued Washington once over crypto, ruled once for disclosure against the miners, and never once construed the asset or sued a kiosk. The institutional record, before it changes hands. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What has the Texas Attorney General done about Bitcoin and cryptocurrency?",
    a: "One affirmative lawsuit: on November 14, 2024 Texas joined seventeen other states and the DeFi Education Fund in Kentucky v. SEC, arguing the Commission's enforcement campaign against the digital-asset industry exceeded its authority and usurped state regulators. The case was stayed in April 2025 and has produced no ruling. Beyond that, the office's lawyers have represented the State Securities Board and Department of Banking in the Celsius, Voyager, and Binance.US bankruptcies, signed one 2025 multistate letter to the SEC, and in May 2025 ordered the Public Utility Commission to release Bitcoin miners' registration data, for which the PUC sued the office.",
  },
  {
    q: "Has the Texas Attorney General issued an opinion on Bitcoin or virtual currency?",
    a: "No. Since 2015 the office has issued no formal opinion on virtual currency, cryptocurrency, blockchain, central bank digital currencies, or whether the state or a county may accept crypto. Texas's legal treatment of the asset comes from the Legislature (HB 4474 in 2021, SB 21 in 2025), the Department of Banking's guidance, and the State Securities Board's enforcement orders. A 2023 statute assigned the Attorney General a study of a bullion-depository debit card, due May 2024; the report has not been located.",
  },
  {
    q: "Has the Texas Attorney General sued crypto scammers or kiosk operators?",
    a: "No enforcement action, Deceptive Trade Practices Act suit, or kiosk lawsuit by the Texas Attorney General against a cryptocurrency company or kiosk operator has been located. Texans lost about $56.8 million to crypto-kiosk scams in 2025, roughly 1,200 victims, and more than a billion dollars to crypto fraud of all kinds. The attorneys general of Iowa and the District of Columbia have sued kiosk operators. Crypto-fraud enforcement in Texas has come from the State Securities Board, a separate agency with more than seventy crypto orders, and from the Department of Banking.",
  },
  {
    q: "What is the difference between the Attorney General and the State Securities Board?",
    a: "The Texas State Securities Board is an independent agency under the Securities Commissioner that registers securities and issues cease-and-desist orders; it was the first state securities regulator to act against a crypto firm and led the 2017 and 2019 sweeps and the FTX and Voyager investigations. The Attorney General is the state's chief civil litigator and consumer-protection enforcer, and represents state agencies in court. When 'Texas' objected in the Celsius and Voyager bankruptcies, the objection was the Securities Board's and the Department of Banking's, filed by Attorney General lawyers as counsel.",
  },
  {
    q: "Does the Attorney General have a role in the Texas Strategic Bitcoin Reserve?",
    a: "No statutory role. SB 21 places custody, administration, and management of the reserve with the Comptroller of Public Accounts and creates an advisory committee the comptroller appoints; the enrolled text does not mention the Attorney General, and no opinion request about the reserve has been located. HB 4474, the 2021 virtual-currency statute, likewise assigns no role to the office.",
  },
];

const kindStyle: Record<AgTimelineKind, { color: string; label: string }> = {
  counsel: { color: "#c98a4e", label: "Counsel for the regulators" },
  suit: { color: "var(--accent)", label: "The suit" },
  records: { color: "#6f9e6a", label: "The records" },
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
// Two figures - the docket board, and the consumer ledger - drawn from
// the dated, sourced facts on this page (Sept 2026). Server-rendered SVG,
// no client JS.
function AgDocketFigure() {
  const acted = [
    { l: "Kentucky v. SEC", sub: "Nov 14, 2024 · plaintiff · stayed Apr 2025", c: "var(--accent)" },
    { l: "Celsius, Voyager, Binance.US", sub: "2022–23 · counsel for TSSB and DOB", c: "#c98a4e" },
    { l: "PUC miners' data", sub: "May 15, 2025 · ordered release · sued June 27", c: "#6f9e6a" },
    { l: "21-state SEC letter", sub: "Oct 21, 2025 · signed", c: "var(--accent)" },
  ];
  const skipped = [
    { l: "TBC v. DOE (Waco)", sub: "Feb 2024 · no party, no amicus" },
    { l: "Lejilex v. SEC (Fort Worth)", sub: "Jul 2024 · 7 states filed; not Texas" },
    { l: "IRS DeFi broker rule", sub: "Dec 2024 · industry only" },
    { l: "Kiosk operators", sub: "Iowa and D.C. sued; Texas has not" },
    { l: "Prediction-market coalitions", sub: "2025 · 34, 44, and 38 states; not Texas" },
    { l: "Any KP opinion on the asset", sub: "2015–2026 · none issued" },
  ];
  const row = (r: { l: string; sub: string; c?: string }, x: number, y: number) => (
    <g key={r.l}>
      <circle cx={x + 8} cy={y - 4} r="4" fill={r.c ?? "var(--muted-2)"} />
      <text x={x + 20} y={y} fontSize="11" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{r.l}</text>
      <text x={x + 20} y={y + 14} fontSize="9.5" fill="var(--muted-2)">{r.sub}</text>
    </g>
  );
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The docket board: four matters the office acted in - the SEC suit, the bankruptcy objections as counsel, the miners' records ruling, one coalition letter - beside six it sat out, including every kiosk suit and any opinion on the asset">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE DOCKET · WHAT THE OFFICE DID, AND WHAT IT SAT OUT · 2015 → 2026</text>
        <rect x="28" y="50" width="366" height="228" rx="10" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="44" y="74" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">ACTED · 4</text>
        {acted.map((r, i) => row(r, 44, 100 + i * 38))}
        <rect x="416" y="50" width="366" height="228" rx="10" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="432" y="74" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--star)">SAT OUT · 6</text>
        {skipped.map((r, i) => row(r, 432, 100 + i * 30))}
        <text x="405" y="294" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Complaint 3:24-cv-00069 E.D. Ky. · CourtListener · Texas Lawbook · SAN and Texas Tribune Aug 2025 · Iowa AG Oct 2025 · Texas Tribune July 8, 2026</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The docket. On the left, everything the office has done with the asset in eleven years, including the two things it did as another agency&apos;s lawyer. On the right, the fights it could have joined and did not – two of them brought by Texas plaintiffs in Texas courts – and the two consumer-side actions its peers took. The one ruling it made on its own initiative went against the miners&apos; interest in secrecy.
      </figcaption>
    </figure>
  );
}

function AgLedgerFigure() {
  const tiles = [
    { big: "$56.8M", l: "lost to kiosk scams", sub: "Texas, 2025 · FBI via Tribune", c: "#c98a4e" },
    { big: "~1,200", l: "kiosk victims", sub: "about 4,000 machines", c: "#c98a4e" },
    { big: "$1B+", l: "all crypto fraud", sub: "2025 · second to California", c: "#c98a4e" },
    { big: "0", l: "AG kiosk suits", sub: "Iowa, D.C. have sued", c: "var(--star)" },
    { big: "0", l: "AG enforcement actions", sub: "DTPA, any crypto firm", c: "var(--star)" },
    { big: "0", l: "AG opinions on the asset", sub: "2015–2026", c: "var(--star)" },
    { big: "70+", l: "Securities Board orders", sub: "a separate agency", c: "#6f9e6a" },
    { big: "1", l: "affirmative AG suit", sub: "v. SEC · stayed", c: "var(--accent)" },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="The consumer ledger: $56.8 million lost to kiosk scams by about 1,200 Texans in 2025, more than a billion to all crypto fraud; zero Attorney General kiosk suits, enforcement actions, or opinions; more than seventy Securities Board orders; one affirmative suit, against the SEC, stayed">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE CONSUMER LEDGER · THE LOSSES, AND THE OFFICE&apos;S RESPONSE</text>
        {tiles.map((t, i) => {
          const col = i % 4;
          const rowI = Math.floor(i / 4);
          const x = 28 + col * 190;
          const y = 52 + rowI * 92;
          return (
            <g key={t.l}>
              <rect x={x} y={y} width="176" height="80" rx="10" fill="var(--surface-2)" stroke={t.c} strokeWidth="1.25" />
              <text x={x + 14} y={y + 34} fontSize="24" fontWeight="700" fill={t.c} fontFamily="var(--font-display)">{t.big}</text>
              <text x={x + 14} y={y + 52} fontSize="10.5" fontWeight="600" fill="var(--foreground)">{t.l}</text>
              <text x={x + 14} y={y + 67} fontSize="9" fill="var(--muted-2)">{t.sub}</text>
            </g>
          );
        })}
        <text x="405" y="244" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Texas Tribune July 8, 2026 (two reports) · State Bar of Texas · D.C. Attorney General · Kentucky v. SEC docket</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The consumer ledger. The top row is what Texans lost in one year; the bottom row is what the office has done about it in eleven. The zeros are not a claim that the office ignored the asset – it sued Washington over it – but a record that the consumer-protection enforcer of the second-largest crypto-fraud state has not, so far, used the Deceptive Trade Practices Act on a single crypto company.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function TexasAttorneyGeneralBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Texas Attorney General and Bitcoin: One Suit, No Opinions",
    description:
      "The institutional record of the Texas Attorney General's office and digital assets, 2015–2026: the eighteen-state SEC suit and its stay, the bankruptcy objections signed for the state's regulators, the miners' records ruling and the PUC's suit, the coalition letters, the absence of any formal opinion or consumer enforcement, the kiosk-fraud losses, and the November 2026 handover.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "GovernmentOrganization", name: "Office of the Attorney General of Texas" },
      { "@type": "Thing", name: "Kentucky v. Securities and Exchange Commission" },
      { "@type": "GovernmentOrganization", name: "Texas State Securities Board" },
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
        name: "The Texas Attorney General and Bitcoin",
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
          / The Attorney General &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The institutions
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Texas Attorney General and Bitcoin: One Suit, No Opinions
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every other institution on this site has a position on the
            asset. The Legislature defined it, registered its mines, and
            bought it. The Comptroller custodies it. The Public Utility
            Commission curtails it and fights to keep its registrations
            secret. The State Securities Board has issued more than seventy
            orders against people selling it fraudulently. The Attorney
            General – the state&apos;s chief civil litigator, its
            consumer-protection enforcer, and the lawyer for every agency
            just named – has, in eleven years under one occupant, filed one
            lawsuit about it, signed one letter, ruled once for disclosure
            against the miners, and never issued an opinion on what it is
            or sued anyone for stealing it. In a state that lost more than
            a billion dollars to crypto fraud last year, that is the
            record, and on November 3 it passes to someone new.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 25, 2026 · Updated{" "}
            {AG_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            The Texas Attorney General&apos;s office has taken one
            affirmative action on cryptocurrency: joining the eighteen-state
            suit against the SEC filed November 14, 2024, which was stayed
            in April 2025 and has produced no ruling. Its lawyers
            represented the State Securities Board and Department of
            Banking in the Celsius, Voyager, and Binance.US bankruptcies;
            it signed a 2025 multistate letter to the SEC; and in May 2025
            it ordered the Public Utility Commission to release Bitcoin
            miners&apos; registration data, for which the PUC sued it. It
            has issued no formal opinion on virtual currency and brought no
            consumer-protection action against any crypto company or kiosk
            operator.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Texas is a named plaintiff in Kentucky et al. v. SEC, filed
              November 14, 2024 in the Eastern District of Kentucky by
              eighteen states and the DeFi Education Fund.<C n={1} />
            </li>
            <li>
              The case was stayed for sixty days on April 16, 2025 at the
              parties&apos; joint request; no ruling or dismissal has been
              reported since.<C n={4} /><C n={5} />
            </li>
            <li>
              On May 15, 2025 the office ruled the PUC must release
              miners&apos; SB 1929 registration data; the PUC sued the
              office on June 27, 2025.<C n={13} /><C n={14} />
            </li>
            <li>
              The office has issued no formal opinion on virtual currency,
              cryptocurrency, blockchain, or a central bank digital currency
              since 2015.<C n={18} /><C n={21} />
            </li>
            <li>
              No Attorney General enforcement action against a
              cryptocurrency company or kiosk operator has been located;
              Texans lost about $56.8 million to kiosk scams in
              2025.<C n={22} /><C n={24} />
            </li>
            <li>
              SB 21 assigns custody and administration of the reserve to
              the Comptroller and no role to the Attorney
              General.<C n={26} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the bankruptcy courts to the handover
            </h2>
            <span className="text-xs text-muted-2">2015 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {agTimeline.map((e) => {
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
          <h2>What is the office, and what is it not?</h2>
          <p>
            The Attorney General of Texas is the state&apos;s chief civil
            lawyer: it sues on the state&apos;s behalf, defends its agencies
            and statutes, enforces the Deceptive Trade Practices Act
            against businesses that cheat consumers, issues formal opinions
            construing Texas law when officials ask, and rules on public
            records requests when agencies refuse them. It is not the
            state&apos;s securities regulator. That is{" "}
            <Link href="/texas-state-securities-board-bitcoin">
              the Texas State Securities Board
            </Link>
            , an independent agency under the Securities Commissioner,
            which was the first state securities regulator in the country
            to act against a crypto firm, led the 2018 sweep, has entered
            more than seventy crypto orders, and has named the asset its
            top investor threat; nor is it the Department of
            Banking, which licenses money transmitters and issued the 2021
            guidance letting banks custody virtual currency.<C n={21} />
            <C n={20} /><C n={27} /> When those agencies go to court, the
            Attorney General&apos;s lawyers go with them as counsel of
            record, and much of what the press has called
            &ldquo;Texas&rdquo; acting on crypto is that. This page keeps
            the distinction, because the question it answers – what has the
            office itself done with the asset – depends on it. The
            enforcement the state&apos;s federal prosecutors have done is a
            different record, on{" "}
            <Link href="/texas-crypto-enforcement-report">
              the Texas crypto enforcement report
            </Link>{" "}
            and{" "}
            <Link href="/texas-bitcoin-case-tracker">the case tracker</Link>.
          </p>

          <h2>What did the office do as the regulators&apos; lawyer?</h2>
          <p>
            Object, in New York, three times, and lose once. When Celsius
            failed in the summer of 2022,{" "}
            <Link href="/texas-state-securities-board-bitcoin">
              the Securities Board
            </Link>{" "}
            and the
            Department of Banking objected to its plan to sell stablecoins
            to fund operations – &ldquo;troublingly broad permission to sell
            assets insufficiently defined for purposes that are also
            insufficiently defined&rdquo; – and Attorney General lawyers
            argued it; at the November hearing on the examiner&apos;s scope
            an assistant attorney general told the court, &ldquo;Sometimes
            sunlight is the best disinfectant.&rdquo;<C n={11} /><C n={12} />
            On October 14, 2022 the office objected to Voyager&apos;s sale to
            FTX, stating that the two &ldquo;are not in compliance with
            Texas law&rdquo; and attaching the Securities Board&apos;s
            declaration that it was investigating FTX and its founder for
            unregistered yield accounts – three weeks before FTX
            collapsed, the first public disclosure by any regulator that
            it was looking.<C n={9} /> In early 2023 the same agencies,
            through the same counsel, objected twice to Voyager&apos;s
            replacement sale to Binance.US over its ties to Binance.com;
            the court approved the sale anyway.<C n={10} /> That is the
            whole of the office&apos;s enforcement-side crypto docket, and
            none of it was initiated by the office. The exchange whose
            founder that declaration named, and the Texas cases that
            followed, are in{" "}
            <Link href="/texas-crypto-archive">the Texas crypto archive</Link>.
          </p>

          <h2>What is the one suit?</h2>
          <p>
            Kentucky et al. v. SEC, filed November 14, 2024 in the Eastern
            District of Kentucky by eighteen states and the DeFi Education
            Fund, with three lawyers from the office&apos;s Special
            Litigation Division signing for Texas. The complaint&apos;s
            theory is federalism: the SEC &ldquo;has sought to unilaterally
            wrest regulatory authority away from the States through an
            ongoing series of enforcement actions targeting the digital
            asset industry,&rdquo; without congressional authorization,
            treating assets as investment contracts when they &ldquo;are
            just that – assets&rdquo;; it counts Texas among the states that
            offer tax breaks to miners, and it asks for declaratory and
            injunctive relief under the Administrative Procedure
            Act.<C n={1} /> Paxton&apos;s release: &ldquo;Federal bureaucrats
            in Washington have no authority to dictate to States how they
            should interact with cryptocurrency nor do they have the power
            to crush this new field with a regulatory framework that
            Congress never intended&rdquo; – and the securities acts, he
            added, are &ldquo;almost 100 years old and in no way apply to
            cryptocurrency exchanges.&rdquo;<C n={2} /><C n={3} /> Then the
            administration changed, the SEC&apos;s leadership changed, and
            on April 16, 2025 the parties jointly asked for a pause; the
            court granted sixty days, quoting the Commission&apos;s view
            that the case &ldquo;could potentially be resolved.&rdquo;
            <C n={4} /> Nothing has been reported on the docket
            since.<C n={5} /> The office&apos;s one affirmative case on the
            asset was filed in the last weeks of one administration and
            went quiet in the first weeks of the next, and it has made no
            law.
          </p>

          <AgDocketFigure />

          <h2>What did it sit out?</h2>
          <p>
            The fights on its own ground. In February 2024 the Texas
            Blockchain Council and Riot Platforms sued the Department of
            Energy in Waco over an emergency survey of miners&apos; power
            use, won a temporary restraining order the next day, and by
            March 1 had the survey withdrawn and its data destroyed; the
            only amicus was the Sierra Club, and the state was not a
            party.<C n={7} /> In July 2024 seven states – Iowa, Arkansas,
            Indiana, Kansas, Montana, Nebraska, Oklahoma – filed an amicus
            for two Texas plaintiffs suing the SEC in Fort Worth; Texas did
            not.<C n={6} /> In December 2024 the same council sued the IRS
            over the DeFi broker rule in the Northern District of Texas,
            without the state.<C n={8} /> No Texas amicus has been located
            in Coinbase&apos;s or Ripple&apos;s cases, no Texas suit against
            the bank regulators over debanking, and no multistate letter on
            a central bank digital currency, the GENIUS Act, or a federal
            Bitcoin reserve with Texas on it – the state&apos;s CBDC
            opposition ran through the Legislature. What it did sign, on
            October 21, 2025, was Iowa&apos;s twenty-one-state letter asking
            the SEC&apos;s Crypto Task Force for definitions clear enough not
            to preempt state fraud and money-transmitter law; what it did
            not sign, in September 2026, was New York&apos;s eighteen-state
            letter against the CLARITY Act, whose every signatory was a
            Democratic office.<C n={16} /><C n={17} /> The pattern is
            partisan-coalition litigation and nothing bespoke: the office
            joined the multistate suit that every Republican attorney
            general joined, and no case that was Texas&apos;s alone. The
            council that brought the Texas cases is on{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher and Bitcoin</Link>.
          </p>

          <h2>What did it do about the miners&apos; data?</h2>
          <p>
            Rule for the public, and get sued for it. Under SB 1929,
            Johnson&apos;s 2023 registry, mines drawing more than 75
            megawatts registered with{" "}
            <Link href="/texas-public-utility-commission-bitcoin">
              the Public Utility Commission
            </Link>{" "}
            by
            February 2025. Reporters for Straight Arrow News and the Texas
            Tribune asked for the registrations; the commission refused,
            citing the critical-infrastructure exception. On May 15, 2025
            an assistant attorney general ruled that the PUC &ldquo;failed
            to demonstrate the information at issue identifies the
            technical details of particular vulnerabilities of critical
            infrastructure to an act of terrorism&rdquo; and ordered
            release.<C n={13} /> On June 27 the commission sued the Attorney
            General in Travis County district court: &ldquo;In the wrong
            hands, this information could be used by terrorists to plan
            attacks on Texas&apos;s energy grid and critical
            infrastructure.&rdquo;<C n={14} /> By November the PUC had
            spent tens of thousands of dollars keeping the list secret, and
            the case was still pending; no ruling has been found
            since.<C n={15} /> It is the one matter on the asset the office
            decided on its own, and it decided against the industry&apos;s
            preference and for the record. The registry itself, and the
            senator who wrote it, are on{" "}
            <Link href="/nathan-johnson-bitcoin">Nathan Johnson and Bitcoin</Link>;
            the sites the list would name are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
          </p>

          <h2>What has it never done?</h2>
          <p>
            Construe the asset, or protect a consumer from it. In eleven
            years the office has issued no formal opinion – the KP series –
            on virtual currency, cryptocurrency, blockchain, a central bank
            digital currency, the bullion depository, or whether a county
            may accept crypto; its nearest approach to digital money is
            KP-0057 of January 2016, which found paid daily fantasy sports
            to be illegal gambling where the house takes a cut.<C n={18} />
            <C n={21} /> A 2023 statute assigned it a study of a
            bullion-depository debit card, due May 31, 2024; the report has
            not been located.<C n={19} /> The 2021 virtual-currency statute
            and the 2025 reserve assign it no role at all: SB 21 gives
            custody, administration, and management to the Comptroller,
            and no opinion request about the reserve has
            surfaced.<C n={26} /><C n={27} /> On the consumer side, no
            enforcement action under the Deceptive Trade Practices Act
            against a cryptocurrency company, no lawsuit against a kiosk
            operator, and no consumer alert specific to the machines have
            been found – while the Securities Board, next door, has entered
            more than seventy orders and runs the state&apos;s crypto-scam
            education page.<C n={20} /><C n={21} /> The number the absence
            sits beside: Texans lost about $56.8 million to crypto-kiosk
            scams in 2025, roughly 1,200 victims across some 4,000
            machines, and more than a billion dollars to crypto fraud of
            all kinds, second only to California; the largest kiosk
            operator, with about 900 Texas machines, filed for bankruptcy
            in May 2026 citing &ldquo;increasing litigation and regulatory
            enforcement&rdquo; – in other states, by other attorneys
            general.<C n={22} /><C n={25} /><C n={23} /><C n={24} /> The
            Tribune&apos;s July report on the kiosks names the FBI, the
            Department of Banking, and a county district attorney. It does
            not name the office.<C n={22} />
          </p>

          <AgLedgerFigure />

          <h2>The honest counterweight: what the ledger does and does not show</h2>
          <p>
            Two things cut the other way, and both belong on the page.
            First, the office is not indifferent to the asset; it put the
            state&apos;s name on the most consequential crypto federalism
            suit of the decade, with a release that read like an industry
            brief, and it did so before the federal posture changed and
            made the position costless.<C n={1} /><C n={2} /> Second, the
            one call it made alone was the harder one: it ordered a
            regulator to publish the miners&apos; power registrations over
            the regulator&apos;s terrorism objection, and has spent a year
            in court defending that.<C n={13} /><C n={14} /> The
            counterweight to the counterweight is timing and selection.
            The crypto plank on the Attorney General&apos;s own Senate
            platform was added &ldquo;in recent months,&rdquo; the
            Statesman found, and names one bill; the office&apos;s
            record did not change with it, and the burst of technology
            suits it filed in the runoff&apos;s last days contained no
            crypto case.<C n={29} /><C n={30} /> The office joined none of
            the 2025 multistate prediction-market efforts – thirty-four,
            forty-four, and thirty-eight states – after contributions from
            a prediction-market operator, though its own 2016 opinion had
            found the analogous product to be gambling; that is not a
            crypto matter, but it is the same office deciding which
            coalitions to join, and it is the nearest thing to an
            explanation the record offers for the pattern.<C n={28} />
            <C n={18} />
          </p>
          <p>
            The fair reading is that the Texas Attorney General&apos;s
            office has treated Bitcoin as a federalism question and not a
            consumer one: it has fought Washington&apos;s right to regulate
            the asset and left Texans who were robbed of it to the
            Securities Board, the Banking Department, the FBI, and the
            county prosecutors. Whether that is a policy or an omission is
            the question the next Attorney General inherits, along with a
            stayed case in Kentucky and a pending one in Travis County.
          </p>

          <h2>Where does the office stand today?</h2>
          <p>
            As of September 2026: one crypto suit stayed since April 2025,
            one records case pending since June 2025, one coalition letter
            signed, no opinion, no enforcement action, and an occupant
            leaving for a U.S. Senate race.<C n={5} /><C n={15} />
            <C n={16} /><C n={29} /> On November 3 the office changes hands
            for the first time since January 2015, between two state
            senators who both voted for the reserve and neither of whom has
            stated a position on the kiosks, the SEC suit, or the
            miners&apos; data.<C n={31} /><C n={32} /> They are on{" "}
            <Link href="/mayes-middleton-bitcoin">Mayes Middleton and Bitcoin</Link>{" "}
            and{" "}
            <Link href="/nathan-johnson-bitcoin">Nathan Johnson and Bitcoin</Link>.
            The reserve the office has no role in is on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            ; the statute-by-statute record it has never construed is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            . This page is the lawyer&apos;s office, and the brief it has
            not written.
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
            Primary record first: the multistate complaint itself and the
            office&apos;s own release; the court dockets; the reporting on
            the bankruptcy objections the office signed as counsel; the
            Public Utility Commission&apos;s suit as reported by Straight
            Arrow News and the Texas Tribune; the coalition letters from
            the offices that led them; the State Bar&apos;s survey and the
            Securities Board&apos;s own pages for the distinction between
            agencies; the Texas Tribune for the fraud figures; the Texas
            Legislature for the statutes. The office&apos;s website refused
            automated requests during verification, so its release text is
            cited as syndicated. This is a research and reference article,
            not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {agSources.map((s) => (
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
