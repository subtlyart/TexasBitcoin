import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  HUFFINES_LAST_VERIFIED,
  huffinesSources,
  huffinesTimeline,
  type HuffinesTimelineKind,
} from "@/lib/huffines";

const pageUrl = `${site.url}/don-huffines-bitcoin`;

export const metadata: Metadata = {
  title: "Don Huffines: The Citadel Candidate Gets the Keys",
  description:
    "Don Huffines's Bitcoin record, sourced: the Texas Comptroller sworn in August 1, 2026 who now has statutory custody of the Texas Strategic Bitcoin Reserve - and the only statewide official who proposed a state Bitcoin reserve (January 2022) before the Legislature built one. The 2022 plan, the appointment, the custody window that closed on his watch, and the November ballot.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Don Huffines: The Citadel Candidate Gets the Keys",
    description:
      "He ran for governor in 2022 on making Texas 'the citadel for Bitcoin' and holding state reserves in it. In August 2026 he became the comptroller who holds the reserve - and has yet to say a word about it.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Don Huffines?",
    a: "Don Huffines is the Texas Comptroller of Public Accounts, sworn in on August 1, 2026 after Governor Greg Abbott appointed him to the term Kelly Hancock resigned. A Dallas real-estate developer, he served one term in the Texas Senate (District 16, 2015–2019), ran third in the 2022 Republican primary for governor, and won the March 3, 2026 comptroller primary with about 58%. Under Senate Bill 21 the comptroller has custody of the Texas Strategic Bitcoin Reserve.",
  },
  {
    q: "Does Don Huffines support Bitcoin?",
    a: "On the record, yes. His January 2022 campaign for governor published a Bitcoin plan to make Texas 'the citadel for Bitcoin': declare Bitcoin legal tender, create a Bitcoin & Cryptocurrency Policy Commission, hold a portion of state reserves in Bitcoin, pair miners with flared gas, and shield holders and miners from federal and local regulation. 'I have owned Bitcoin for years,' the plan said. He has not spoken publicly about Bitcoin since taking office.",
  },
  {
    q: "Does Don Huffines control the Texas Bitcoin Reserve?",
    a: "Yes, by statute. Senate Bill 21 says the comptroller 'has custody of and shall administer and manage the reserve' and makes the comptroller one of the five members of its advisory committee. Both passed to Huffines with the office on August 1, 2026, along with the $10 million iShares Bitcoin Trust position and the open custody-and-liquidity procurement, RFP 908-26-1778WS.",
  },
  {
    q: "Has Huffines named a custodian for the Texas Bitcoin reserve?",
    a: "Not as of September 1, 2026. The custody RFP closed July 10, 2026 with contract execution targeted for late August; that window passed with no award posted on the state procurement site and no announcement from the Comptroller's office. The award - and the 60-day conversion of the ETF position into directly held Bitcoin - is the first decision the reserve will record under his name.",
  },
  {
    q: "Was Don Huffines elected comptroller?",
    a: "Not yet. He holds the office by gubernatorial appointment to an unexpired term, the same way Kelly Hancock did. He is the Republican nominee for the full four-year term and faces Democratic state Senator Sarah Eckhardt on November 3, 2026. Either way, the first SB 21 report on the reserve, due by December 31, 2026, is published under his administration.",
  },
];

const kindStyle: Record<HuffinesTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  plan: { color: "#8a7fb5", label: "The plan" },
  office: { color: "var(--accent)", label: "The office" },
  watch: { color: "#c98a4e", label: "The watch" },
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
// Two figures - the record and the counterweight - drawn from the dated,
// sourced facts on this page (Sept 2026). Server-rendered SVG, no client JS.
function HuffinesPlanFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 320" role="img" aria-label="Don Huffines's 2022 Bitcoin plan against what Texas law did by 2025">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE 2022 PLAN AGAINST THE 2025 STATUTE · SIX PLANKS, WHAT BECAME OF EACH</text>
<rect x="28" y="48" width="754" height="30" rx="6" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="48" y="68" fontSize="14" fontWeight="600" fill="#6f9e6a">✓</text>
<text x="72" y="67" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Hold state reserves in Bitcoin</text>
<text x="766" y="67" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">SB 21 built it – by the Legislature, without him · June 20, 2025</text>
<rect x="28" y="86" width="754" height="30" rx="6" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="48" y="106" fontSize="14" fontWeight="600" fill="#c98a4e">✕</text>
<text x="72" y="105" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Declare Bitcoin legal tender</text>
<text x="766" y="105" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">Article I, Section 10 closes that lane; Texas chose gold and silver instead</text>
<rect x="28" y="124" width="754" height="30" rx="6" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="48" y="144" fontSize="14" fontWeight="600" fill="#c98a4e">✕</text>
<text x="72" y="143" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">A Bitcoin &amp; Cryptocurrency Policy Commission</text>
<text x="766" y="143" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">never created; SB 21 seated a five-member reserve committee instead</text>
<rect x="28" y="162" width="754" height="30" rx="6" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="48" y="182" fontSize="14" fontWeight="600" fill="#6f9e6a">✓</text>
<text x="72" y="181" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Pair miners with flared gas</text>
<text x="766" y="181" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">HB 591 exempted wellhead-consumed gas from severance tax · 2023</text>
<rect x="28" y="200" width="754" height="30" rx="6" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="48" y="220" fontSize="14" fontWeight="600" fill="#c98a4e">✕</text>
<text x="72" y="219" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Shield holders and miners from federal rules</text>
<text x="766" y="219" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">no such statute; the federal map is Washington&apos;s</text>
<rect x="28" y="238" width="754" height="30" rx="6" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="48" y="258" fontSize="14" fontWeight="600" fill="#c98a4e">✕</text>
<text x="72" y="257" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Bar cities from regulating them</text>
<text x="766" y="257" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">not enacted; the 2025 large-load law went the other way</text>
<text x="405.0" y="310" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">donhuffines.com/issues (Jan 28, 2022, since removed), via Slashdot and BTC Times; Texas Legislature Online · the reserve plank was the one ahead of its time</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The 2022 plan against the 2025 statute. Six planks from a losing campaign for governor, and what became of each: the state reserve was built three years later without him; the flared-gas plank arrived by another bill; legal tender, a commission, a federal shield, and local preemption did not. The one plank ahead of its time is the one he now operates.
      </figcaption>
    </figure>
  );
}

function HuffinesSilenceFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The silence, itemized: the Comptroller's releases in Huffines's first month by topic, none on the reserve">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE SILENCE, ITEMIZED · THE OFFICE’S RELEASES, AUGUST 1 – SEPTEMBER 1, 2026, BY TOPIC</text>
<text x="278" y="73" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Sales tax collections</text>
<rect x="290" y="60" width="280.0" height="18" rx="3" fill="var(--muted-2)"/>
<text x="578.0" y="73" fontSize="11" fontWeight="600" fill="var(--foreground)">4</text>
<text x="610.0" y="73" fontSize="9.5" fill="var(--muted-2)">Aug 3, Aug 6, Aug 12, Sept 1</text>
<text x="278" y="103" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Property tax relief</text>
<rect x="290" y="90" width="140.0" height="18" rx="3" fill="var(--muted-2)"/>
<text x="438.0" y="103" fontSize="11" fontWeight="600" fill="var(--foreground)">2</text>
<text x="610.0" y="103" fontSize="9.5" fill="var(--muted-2)">Aug 18, Aug 27</text>
<text x="278" y="133" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Education Freedom Accounts</text>
<rect x="290" y="120" width="140.0" height="18" rx="3" fill="var(--muted-2)"/>
<text x="438.0" y="133" fontSize="11" fontWeight="600" fill="var(--foreground)">2</text>
<text x="610.0" y="133" fontSize="9.5" fill="var(--muted-2)">Aug 3, Aug 13</text>
<text x="278" y="163" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Audits and performance reviews</text>
<rect x="290" y="150" width="140.0" height="18" rx="3" fill="var(--muted-2)"/>
<text x="438.0" y="163" fontSize="11" fontWeight="600" fill="var(--foreground)">2</text>
<text x="610.0" y="163" fontSize="9.5" fill="var(--muted-2)">Aug 4, Aug 19</text>
<text x="278" y="193" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Sworn in; salary refused</text>
<rect x="290" y="180" width="70.0" height="18" rx="3" fill="var(--muted-2)"/>
<text x="368.0" y="193" fontSize="11" fontWeight="600" fill="var(--foreground)">1</text>
<text x="610.0" y="193" fontSize="9.5" fill="var(--muted-2)">Aug 1</text>
<text x="278" y="223" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Job growth</text>
<rect x="290" y="210" width="70.0" height="18" rx="3" fill="var(--muted-2)"/>
<text x="368.0" y="223" fontSize="11" fontWeight="600" fill="var(--foreground)">1</text>
<text x="610.0" y="223" fontSize="9.5" fill="var(--muted-2)">Aug 22</text>
<text x="278" y="253" fontSize="12" fontWeight="600" textAnchor="end" fill="#c98a4e" fontFamily="var(--font-display)">The Strategic Bitcoin Reserve</text>
<rect x="290" y="240" width="280.0" height="18" rx="3" fill="none" stroke="#c98a4e" strokeDasharray="4 4"/>
<text x="298" y="253" fontSize="11" fontWeight="600" fill="#c98a4e">0</text>
<text x="610.0" y="253" fontSize="9.5" fill="var(--muted-2)">no release · custody award overdue</text>
<text x="405.0" y="290" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Comptroller newsroom, Aug 1 – Sept 1, 2026 · twelve releases; silence on a live solicitation is procedure, not policy – but the reader should see it</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The silence, itemized. Every release from the Comptroller&apos;s office in Huffines&apos;s first month, by topic: sales tax, property tax, education accounts, audits, job growth. The reserve, the custodian, and the overdue award appear in none of them. Silence on a live solicitation is procedure; the record still has not started.
      </figcaption>
    </figure>
  );
}

// people-figs:end
export default function DonHuffinesBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Don Huffines: The Citadel Candidate Gets the Keys",
    description:
      "The Bitcoin record of the Texas Comptroller who inherited the Strategic Bitcoin Reserve on August 1, 2026: the 2022 'citadel for Bitcoin' plan that proposed a state reserve three years before SB 21, the appointment, the custody window that closed with no award, and the November ballot.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Don Huffines" },
      { "@type": "Thing", name: "Texas Strategic Bitcoin Reserve" },
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
        name: "Don Huffines and Bitcoin",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="mx-auto max-w-4xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / Don Huffines &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The Comptroller&apos;s desk
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Don Huffines: The Citadel Candidate Gets the Keys
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            In January 2022 a long-shot candidate for governor published a
            plan to make Texas &ldquo;the citadel for Bitcoin&rdquo; – legal
            tender, a policy commission, and a portion of the state&apos;s
            reserves held in Bitcoin. He lost. Three years later the
            Legislature built the reserve without him. Then, on August 1,
            2026, the same man was sworn in as the comptroller who holds it.
            This is the record of Don Huffines: the plan, the office, and the
            one thing the citadel candidate has not yet done with the keys –
            which is say anything at all.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 1, 2026 · Updated{" "}
            {HUFFINES_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Don Huffines is the Texas Comptroller of Public Accounts, sworn in
            on August 1, 2026 after Governor Greg Abbott appointed him to
            finish Kelly Hancock&apos;s term. Under Senate Bill 21 the
            comptroller has custody of the Texas Strategic Bitcoin Reserve, so
            Huffines now manages the state&apos;s $10 million position and the
            open custodian search. In 2022 he ran for governor on making Texas
            &ldquo;the citadel for Bitcoin,&rdquo; including holding state
            reserves in Bitcoin.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Don Huffines was sworn in as Texas Comptroller on August 1,
              2026, after Governor Abbott appointed him on July 2 to the term
              Kelly Hancock resigned effective July 31.<C n={1} /><C n={6} />
              <C n={7} />
            </li>
            <li>
              Huffines&apos;s January 28, 2022 campaign plan for governor
              proposed holding a portion of Texas&apos;s reserves in Bitcoin –
              three years before SB 21 created the Strategic Bitcoin Reserve
              on June 20, 2025.<C n={10} /><C n={11} />
            </li>
            <li>
              Senate Bill 21 gives the comptroller custody of the reserve and
              a seat on its five-member advisory committee, so both passed to
              Huffines with the office.<C n={5} />
            </li>
            <li>
              Custody RFP 908-26-1778WS closed July 10, 2026 with contract
              execution targeted for late August; as of September 1, 2026, no
              award is posted and the Comptroller&apos;s office has issued no
              statement on the reserve.<C n={3} /><C n={4} />
            </li>
            <li>
              The first SB 21 report on the reserve&apos;s holdings and
              administration is due by December 31, 2026.<C n={5} />
            </li>
            <li>
              Huffines faces Democrat Sarah Eckhardt on November 3, 2026 for
              the full four-year term beginning January 2027.<C n={19} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the plan to the desk
            </h2>
            <span className="text-xs text-muted-2">2015 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {huffinesTimeline.map((e) => {
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
          <h2>Who is Don Huffines, and how did he get the reserve?</h2>
          <p>
            By appointment – from the governor he once ran against. Huffines
            is a Dallas developer who co-founded Huffines Communities with his
            twin brother in 1985, served one term in Senate District 16 from
            2015 to 2019, and lost the seat to Democrat Nathan Johnson as
            Dallas County turned in 2018.<C n={14} /> In 2022 he challenged
            Greg Abbott from the right in the Republican primary for governor
            and finished third with about 12%.<C n={14} /> In 2026 he ran for
            comptroller against the acting incumbent, Kelly Hancock, and won
            the way Texas primaries are won now: a Trump endorsement four days
            out, over Abbott&apos;s roughly $2.6 million in ads for Hancock,
            then 58% to 23% on March 3 with no runoff.<C n={15} /><C n={16} />
          </p>
          <p>
            The office came early. On July 1, 2026, Hancock – who had just
            shipped the state&apos;s $1 billion education-savings-account
            program and had nothing left to run for – resigned effective July
            31, one year to the day after he took the job.<C n={6} /> On July
            2, Abbott appointed his 2022 challenger to the unexpired term.
            &ldquo;Don Huffines brings the right mix of business experience
            and conservative principles to this vital office,&rdquo; the
            governor said; the appointee promised to &ldquo;DOGE Texas
            government.&rdquo;<C n={7} /> Huffines took the oath on August 1
            and declined the salary.<C n={1} /><C n={9} /> Everything the
            comptroller holds – the books, the revenue estimate, the vouchers,
            and the first funded state Bitcoin reserve in America – was his
            by lunchtime. The predecessor&apos;s record is on{" "}
            <Link href="/kelly-hancock-bitcoin">Kelly Hancock and Bitcoin</Link>
            .
          </p>

          <h2>What did Huffines say about Bitcoin before he held the reserve?</h2>
          <p>
            More than any other statewide official in Texas, and earlier. On
            December 16, 2021, mid-campaign for governor, he posted that his
            team was reviewing the state&apos;s Bitcoin policy: &ldquo;I want
            to make Texas the citadel for Bitcoin.&rdquo;<C n={12} /> Six
            weeks later, on January 28, 2022, the campaign published the
            plan.<C n={10} /> Six planks: declare Bitcoin legal tender in
            Texas; establish a Bitcoin &amp; Cryptocurrency Policy Commission
            to identify currencies the state could recognize alongside the
            dollar; <strong>hold a portion of state reserves in Bitcoin</strong>{" "}
            to shield Texas from federal monetary policy; pair miners with
            flared gas and grid reliability; extend state protection to
            holders and miners against federal regulation; and bar cities
            from regulating either.<C n={11} /><C n={13} /> &ldquo;I have
            owned Bitcoin for years and am a strong believer in both its value
            as an asset and potential as a currency,&rdquo; the plan
            said.<C n={11} />
          </p>
          <p>
            Read that third plank against the calendar. In January 2022 no
            state held Bitcoin, the federal reserve order was three years off,
            and{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              Senate Bill 21
            </Link>{" "}
            – authored by{" "}
            <Link href="/charles-schwertner-bitcoin">Charles Schwertner</Link>{" "}
            and signed June 20, 2025 – did not exist. The candidate who finished
            third proposed the thing the Legislature later built, and the
            Legislature built it in a form he can now operate. The rest of the
            plan aged less well: legal tender is a lane Article I, Section 10
            of the U.S. Constitution closes to anything but gold and silver
            coin, which is why Texas recognized specie instead – the split
            told on{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law says about Bitcoin
            </Link>
            . The miner-protection planks, meanwhile, became the mainstream
            Texas position by 2023 without him. Only the reserve plank was
            ahead of its time and within his eventual reach.
          </p>

          <HuffinesPlanFigure />

          <h2>What does the comptroller actually control?</h2>
          <p>
            The whole operating layer. SB 21 is thin on operations by design:
            it sets the eligibility floor and the reporting duty, then says
            the comptroller &ldquo;has custody of and shall administer and
            manage the reserve&rdquo; and seats the comptroller on the
            five-member advisory committee by office – so the chair Hancock
            held passed to Huffines automatically on August 1, alongside
            Laurie Dotter, Jamie McAvity, Carla Reyes, and Gary
            Vecchiarelli.<C n={5} /><C n={18} /> Concretely, three decisions
            now carry his signature. First, <strong>the custodian</strong>:
            RFP 908-26-1778WS, issued by the Comptroller on behalf of the
            Texas Treasury Safekeeping Trust Company, closed July 10, 2026,
            and the award converts the $10 million iShares Bitcoin Trust
            placeholder into coin held in the name of the State of Texas
            within 60 days of contract.<C n={4} /> Second,{" "}
            <strong>the public ledger</strong>: the RFP requires the winning
            firm to build a website showing the reserve&apos;s holdings and
            valuations. Third, <strong>the report</strong>: by December 31,
            2026, the comptroller must publish what the reserve holds, what it
            is worth, and what the office did to manage it – the first such
            report in the statute&apos;s life.<C n={5} /> The live status of
            all three is kept on{" "}
            <Link href="/who-holds-the-texas-bitcoin-reserve">
              the custody watch
            </Link>
            .
          </p>

          <h2>The honest counterweight: the silence</h2>
          <p>
            The criticism worth engaging is not that Huffines is hostile to
            the reserve – nothing in the record suggests it – but that the
            most Bitcoin-fluent officeholder Texas has ever had has not
            mentioned it. His first month produced a dozen releases: sales-tax
            collections, property-tax relief, a performance review of the
            agency, school-district spending audits, the education-account
            rollout. The reserve, the custodian, and the ETF-to-keys
            conversion appear in none of them.<C n={3} /> His April sit-down
            with the Texas Tribune as nominee ran through DEI, vouchers, and
            his reconciliation with Abbott without a word on
            Bitcoin.<C n={17} /> And the procurement&apos;s late-August
            target for contract execution came and went in his first thirty
            days with no award posted.<C n={4} /> He is also, like Hancock
            before him, an appointee running the reserve ahead of an election
            he has not yet won.<C n={8} /><C n={19} />
          </p>
          <p>
            The fair reading cuts the other way. A new comptroller inheriting
            a $1 billion voucher program mid-rollout has a first month spoken
            for, state procurement routinely runs past its target window, and
            an award under evaluation is precisely the thing an office does
            not talk about. Silence on a live solicitation is procedure, not
            policy. And the structural point holds: the man who put a state
            Bitcoin reserve in a campaign platform in January 2022 has less
            reason than any Texan to slow-walk one. The record simply has not
            started. When it does, the first entry will be a custodian&apos;s
            name.
          </p>

          <HuffinesSilenceFigure />

          <h2>Where does the Huffines record stand today?</h2>
          <p>
            As of September 1, 2026: one month in office, zero public words
            on the reserve, three clocks running. The custody award, overdue
            against its own target, is the near one. November 3 – Huffines
            against Sarah Eckhardt for the full term – decides whether the
            citadel candidate keeps the desk. December 31 is the statutory
            report, due under his name either way. The political authors of
            the reserve are chronicled in{" "}
            <Link href="/greg-abbott-bitcoin">Greg Abbott and Bitcoin</Link>{" "}
            and{" "}
            <Link href="/dan-patrick-bitcoin">Dan Patrick and Bitcoin</Link>;
            its builder on{" "}
            <Link href="/kelly-hancock-bitcoin">Kelly Hancock and Bitcoin</Link>
            . This page is what the holder does with it.
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
            Primary record first: the Comptroller&apos;s office for the
            swearing-in and the office&apos;s output since; the enrolled text
            of SB 21 for what the office controls; the state procurement
            record for the custody RFP; the Texas Tribune and Texas press for
            the succession and the race; the 2022 trade press for the Bitcoin
            plan, whose original campaign page has since been taken down. This
            is a research and reference article, not financial, investment,
            or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {huffinesSources.map((s) => (
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
