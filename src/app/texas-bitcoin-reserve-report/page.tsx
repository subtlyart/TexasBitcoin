import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";
import {
  REPORT_LAST_VERIFIED,
  reportSources,
  reportClauses,
  reportStatus,
  reportWatch,
} from "@/lib/reserve-report";

const pageUrl = `${site.url}/texas-bitcoin-reserve-report`;

export const metadata: Metadata = {
  title: "The First Texas Bitcoin Reserve Report (Due December 31, 2026)",
  description:
    "What the first Texas Strategic Bitcoin Reserve report must contain, when it is due, and what it will and will not show — SB 21 § 403.708, clause by clause.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("The First Texas Bitcoin Reserve Report"),
    type: "article",
    title: "The First Texas Bitcoin Reserve Report (Due December 31, 2026)",
    description:
      "The sourced breakdown of the first biennial report on Texas's state Bitcoin reserve — the SB 21 § 403.708 duty, the August 31, 2025 measuring date, and what to watch when it posts.",
    url: pageUrl,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "When is the first Texas Bitcoin reserve report due?",
    a: "By December 31, 2026. SB 21 § 403.708 requires the Texas Comptroller to publish on the office's website, and submit to the Legislature, a report by December 31 of each even-numbered year. As of November 19, 2026, no report had been posted.",
  },
  {
    q: "What must the Texas Bitcoin reserve report contain?",
    a: "Four things: the amount of Bitcoin held on the last day of the preceding state fiscal biennium; an estimate of its value on that day; the changes in amount and value over the period the assets have been held, disaggregated by cryptocurrency type; and a description of the Comptroller's actions to administer the reserve.",
  },
  {
    q: "Why might the first report show zero Bitcoin?",
    a: "The statute measures holdings 'on the last day of the preceding state fiscal biennium.' For a December 2026 report that date is August 31, 2025 — twelve weeks before the first purchase on November 20, 2025. Read literally, the snapshot clause reports a reserve that held nothing on its measuring date; the 'changes over the period held' clause carries the $10 million story.",
  },
  {
    q: "Who has to file the first report?",
    a: "Comptroller Don Huffines, sworn in August 1, 2026. Sarah Eckhardt (D) defeated him on November 3, 2026 for the term beginning January 2027 (certification due by December 7), so the first report falls in a lame-duck window before any handover.",
  },
  {
    q: "Where is the Texas Bitcoin reserve report published?",
    a: "On the Texas Comptroller's website and submitted to the Legislature, which convenes January 12, 2027 — about two weeks after the December 31 deadline. This page links the filing the day it posts.",
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

// A single figure: the four § 403.708 clauses, each paired with what the record
// says that clause will show for the first report. Server-rendered SVG, site
// tokens, no client JS.
function ReportClauseFigure() {
  const rows = [
    { tag: "§ 403.708(1)", req: "Amount held on the last day of the", req2: "preceding biennium (Aug 31, 2025)", show: "Zero — twelve weeks before the first buy", accent: "var(--star)" },
    { tag: "§ 403.708(2)", req: "Estimated value on that same day", req2: "", show: "~$0 — the value of nothing held", accent: "var(--star)" },
    { tag: "§ 403.708(3)", req: "Changes over the period held,", req2: "disaggregated by cryptocurrency type", show: "The real story: two ~$5M buys → $10M", accent: "var(--accent)" },
    { tag: "§ 403.708(4)", req: "Actions taken to administer the", req2: "reserve", show: "ETF, committee, unawarded custody RFP", accent: "var(--accent)" },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 340" role="img" aria-label="The four clauses of SB 21 Section 403.708 and what the first report will show for each: clause 1, amount held on August 31, 2025, zero; clause 2, value on that day, about zero; clause 3, changes over the period held, the two purchases building to ten million dollars; clause 4, actions taken, the ETF placeholder, the advisory committee, and the unawarded custody RFP.">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">WHAT THE FIRST REPORT MUST SAY · SB 21 § 403.708, CLAUSE BY CLAUSE</text>
        <text x="40" y="58" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">THE STATUTE REQUIRES</text>
        <text x="430" y="58" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">WHAT THE RECORD WILL SHOW</text>
        {rows.map((r, i) => {
          const y = 76 + i * 62;
          return (
            <g key={r.tag}>
              <rect x="28" y={y} width="372" height="52" rx="8" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1" />
              <text x="44" y={y + 20} fontSize="10.5" fontWeight="600" fill={r.accent} fontFamily="var(--font-display)">{r.tag}</text>
              <text x="44" y={y + 36} fontSize="10.5" fill="var(--muted)">{r.req}</text>
              {r.req2 ? <text x="44" y={y + 49} fontSize="10.5" fill="var(--muted)">{r.req2}</text> : null}
              <path d={`M402,${y + 26} L418,${y + 26}`} stroke="var(--muted-2)" strokeWidth="1.5" />
              <path d={`M414,${y + 22} L418,${y + 26} L414,${y + 30}`} fill="none" stroke="var(--muted-2)" strokeWidth="1.5" />
              <rect x="420" y={y} width="362" height="52" rx="8" fill="var(--surface-2)" stroke={r.accent} strokeWidth="1.25" />
              <text x="436" y={y + 31} fontSize="11" fill="var(--foreground)">{r.show}</text>
            </g>
          );
        })}
        <text x="405" y="332" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">SB 21 enrolled text; the Bond Buyer and Dallas Morning News on the position · the measuring date predates the fund</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        What the first report must say, clause by clause. Two of the four duties point at August 31, 2025, when the reserve held nothing; the other two — changes over the period held, and actions taken — carry the whole $10 million record. The statute&apos;s measuring date predates the fund&apos;s first purchase.
      </figcaption>
    </figure>
  );
}

export default function ReserveReportPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(reportSources),
    headline: "The First Texas Bitcoin Reserve Report (Due December 31, 2026)",
    description:
      "What the first biennial report on the Texas Strategic Bitcoin Reserve must contain under SB 21 § 403.708, when it is due, and what it will and will not show.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-11-19",
    dateModified: "2026-11-23",
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
        name: "Texas Strategic Bitcoin Reserve",
        item: `${site.url}/texas-strategic-bitcoin-reserve`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "The First Reserve Report",
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
          /{" "}
          <Link href="/texas-strategic-bitcoin-reserve" className="hover:text-accent-soft">
            Texas Strategic Bitcoin Reserve
          </Link>{" "}
          / The First Reserve Report
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The first Texas Bitcoin reserve report
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The first statutory account of the Texas Strategic Bitcoin Reserve is
            due December 31, 2026. Here is what SB 21 § 403.708 requires it to
            say, what the primary record shows it will and will not contain, and
            what to read for the day it posts.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published November 19, 2026 · Updated{" "}
            {REPORT_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            The first report on the Texas Strategic Bitcoin Reserve is due by
            December 31, 2026 under Senate Bill 21 § 403.708, which directs the
            Texas Comptroller to publish on the office&apos;s website and submit
            to the Legislature a biennial account of the reserve&apos;s holdings,
            value, changes, and administration. Because the statute measures
            holdings as of the last day of the preceding state fiscal biennium —
            August 31, 2025, before the first purchase on November 20, 2025 — the
            first report&apos;s snapshot clause reports a reserve that held no
            Bitcoin, while its &ldquo;changes over the period held&rdquo; clause
            carries the full $10 million record. As of November 19, 2026, no
            report had been posted.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              SB 21 § 403.708 requires a report by December 31 of each
              even-numbered year; the first is due December 31, 2026.<C n={1} />
            </li>
            <li>
              The report must state holdings and value as of the last day of the
              preceding state fiscal biennium — August 31, 2025.<C n={1} /><C n={3} />
            </li>
            <li>
              The reserve made its first purchase on November 20, 2025, twelve
              weeks after that measuring date, so a literal snapshot reads zero.
              <C n={4} />
            </li>
            <li>
              A separate clause requires the changes over the whole period the
              assets have been held — the two ~$5 million purchases that built the
              $10 million position.<C n={1} /><C n={5} />
            </li>
            <li>
              Comptroller Don Huffines, sworn in August 1, 2026, owes the first
              report; Sarah Eckhardt defeated him on November 3, 2026 for
              the term beginning January 2027, with certification due by December 7.<C n={9} /><C n={10} />
            </li>
            <li>
              As of November 19, 2026, the Comptroller&apos;s newsroom has posted
              no reserve report.<C n={11} />
            </li>
          </ul>
        </div>

        <ReportClauseFigure />

        {/* Status panel — where the report stands right now */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Report status
            </h2>
            <span className="text-xs text-muted-2">As of {REPORT_LAST_VERIFIED}</span>
          </div>
          <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {reportStatus.map((row) => (
              <div key={row.label} className="bg-surface p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {row.label}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted">
                  {row.value}{" "}
                  {row.sourceIds.map((n) => (
                    <C key={n} n={n} />
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="prose-tx mt-12">
          <h2>What is the Texas Bitcoin reserve report?</h2>
          <p>
            It is the statutory account the Texas Comptroller must publish on the
            reserve. Section 403.708 of the Government Code, added by{" "}
            <Link href="/texas-strategic-bitcoin-reserve">Senate Bill 21</Link>,
            directs the Comptroller — not later than{" "}
            <strong>December 31 of each even-numbered year</strong> — to publish
            on the office&apos;s website and submit to the Legislature a report on
            the <Link href="/texas-strategic-bitcoin-reserve">Texas Strategic Bitcoin Reserve</Link>.<C n={1} />{" "}
            The first one in the statute&apos;s life is due{" "}
            <strong>December 31, 2026</strong>. It is the first time the state is
            required to put the reserve&apos;s holdings, value, and management on
            the public record in one document — the accountability half of a law
            whose spending half, the $10 million appropriation, is already spent.
          </p>

          <h2>What must the report contain?</h2>
          <p>
            Four things, by the text of § 403.708: the amount of Bitcoin and
            other cryptocurrency held in the reserve{" "}
            <strong>on the last day of the preceding state fiscal biennium</strong>;
            an estimate of its monetary value on that day; the changes, if any, in
            amount and value over the period the cryptocurrency has been held,
            disaggregated by cryptocurrency type; and a description of the actions
            the Comptroller took to administer and manage the reserve.<C n={1} />{" "}
            The figure above pairs each clause with what the primary record shows
            it will carry. Two of the four point at a single date; the other two
            point at the whole history.
          </p>

          <h2>Why might the first report show zero Bitcoin?</h2>
          <p>
            Because of the measuring date. A Texas fiscal year runs September 1
            through August 31, and the <strong>2024–25 biennium ended August 31,
            2025</strong>.<C n={3} /> That is the &ldquo;last day of the preceding
            state fiscal biennium&rdquo; for a report due in December 2026 — and
            it falls <strong>twelve weeks before</strong> the reserve&apos;s first
            purchase on November 20, 2025.<C n={4} /> Read literally, the first
            two clauses report a reserve that held nothing on its measuring date:
            zero coin, zero value. SB 21 was already law by then — signed June 20,
            2025 — so the fund existed; it simply had not been funded with Bitcoin
            yet.<C n={2} /> The substance lands in the third and fourth clauses,
            which are not bounded to the preceding biennium: the two ~$5 million
            IBIT purchases that built the $10 million position, the mark near $7.8
            million by March 2, 2026, the advisory committee, and the custody
            procurement.<C n={5} /><C n={7} /> Whether the Comptroller reports the
            literal zero snapshot or a present-day figure is the first thing this
            page will check when the report posts.
          </p>

          <h2>Who has to file it, and when?</h2>
          <p>
            The duty runs with the office. <Link href="/don-huffines-bitcoin">Don Huffines</Link>,
            sworn in as Comptroller on <strong>August 1, 2026</strong>, owes the
            first report.<C n={9} /> The timing is unusual: on November 3,
            2026, at 100% of polling locations reporting,{" "}
            <strong>Sarah Eckhardt (D) defeated Huffines</strong> for the full
            term that begins in January 2027 — county canvasses complete, statewide certification due by December 7.<C n={10} />{" "}
            So the first statutory account of the reserve is due in a{" "}
            <strong>lame-duck window</strong>, from an appointed incumbent who
            appears to have lost the office, roughly two weeks before the{" "}
            <Link href="/texas-bitcoin-bills-2027">90th Legislature</Link>{" "}
            convenes on January 12, 2027 to weigh whether to add to the fund.<C n={12} />{" "}
            Who holds the coin while that plays out is tracked on{" "}
            <Link href="/who-holds-the-texas-bitcoin-reserve">
              who holds the Texas Bitcoin reserve
            </Link>
            .
          </p>

          <h2>The honest counterweight: an anticlimax by design</h2>
          <p>
            The temptation is to read the first report as a verdict on the
            reserve. It is not built to be one. By the letter of § 403.708 its
            headline figures — holdings and value on August 31, 2025 — are zero,
            not because the program failed but because the statute&apos;s clock
            started before the fund bought anything.<C n={1} /><C n={4} /> A
            reader looking for a win or a loss in the top-line number will find
            neither. And the report arrives with the operational story still
            unfinished: the custody contract that would move the $10 million from
            an ETF proxy into coin held in the state&apos;s own name was{" "}
            <strong>still unawarded on November 19, 2026</strong>, so the actions
            clause most likely describes a reserve that, more than a year after
            its first purchase, still holds a claim rather than the keys.<C n={8} /><C n={11} />{" "}
            The document to watch is not this one but the next — the December 2028
            report, whose measuring date, August 31, 2027, will finally fall
            inside a biennium the reserve spent fully invested.
          </p>

          <h2>What to watch when the report posts</h2>
          <p>
            This page flips the moment the report lands on the Comptroller&apos;s
            site. These are the questions it answers first, each read against the
            primary record:
          </p>
          <ul>
            {reportWatch.map((w) => (
              <li key={w.question}>
                <strong>{w.question}</strong> {w.why}
              </li>
            ))}
          </ul>
          <p>
            For the law that created the duty and the position behind it, see{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve
            </Link>{" "}
            and{" "}
            <Link href="/texas-comptroller-bitcoin">
              the Texas Comptroller and Bitcoin
            </Link>
            .
          </p>
        </div>

        {/* The clause table in text form, for extraction */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            § 403.708, clause by clause
          </h2>
          <div className="mt-5 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {reportClauses.map((c) => (
              <div key={c.n} className="bg-surface p-5">
                <p className="font-display text-sm font-semibold text-accent">{c.n}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                  {c.requirement}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                    What the record shows ·{" "}
                  </span>
                  {c.willShow}{" "}
                  {c.sourceIds.map((n) => (
                    <C key={n} n={n} />
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>

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
            Primary record first: the SB 21 enrolled text and the Texas
            Comptroller, then the fiscal calendar and reporting on the position
            and the transition. This is a research and reference article, not
            financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {reportSources.map((s) => (
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
