import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";
import {
  LEGE90_LAST_VERIFIED,
  lege90Sources,
  sessionDates,
  trackedBills90,
  watchlist,
} from "@/lib/lege-90";

const pageUrl = `${site.url}/texas-bitcoin-bills-2027`;

export const metadata: Metadata = {
  title: "Texas Bitcoin Bills 2027: The 90th Legislature Tracker",
  description:
    "Eight bills filed November 9 for the 90th Texas Legislature: three direct cryptocurrency proposals and five broader data-center and computational-load measures, with bill histories and introduced texts.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("Texas Bitcoin Bills 2027: The 90th Legislature Tracker"),
    type: "article",
    title: "Texas Bitcoin Bills 2027: The 90th Legislature Tracker",
    description:
      "Eight filed bills of the 90th Texas Legislature, tracked against histories and introduced texts.",
    url: pageUrl,
  },
};

const faqs = [
  {
    q: "When does the Texas Legislature meet next?",
    a: "The 90th Texas Legislature convenes in Regular Session on January 12, 2027. Bill pre-filing opened November 9, 2026, the bill-filing deadline is March 12, 2027, and the session ends sine die on May 31, 2027. Texas legislatures meet in regular session only in odd-numbered years.",
  },
  {
    q: "What Bitcoin bills have been filed for the 2027 Texas session?",
    a: "Eight tracked bills were filed November 9, 2026: HB 815 on local cryptocurrency investment; HB 271 and SB 181 on virtual-currency kiosks; and HB 734, HB 374, SB 32, SB 33 and SB 34 on broader data-center and computational-load issues that include mining or distributed-ledger activity. All remain proposals, not law.",
  },
  {
    q: "Will Texas add money to its Bitcoin reserve in 2027?",
    a: "That is the session's headline Bitcoin question, and it is genuinely open. The 89th Legislature seeded the Strategic Bitcoin Reserve with $10 million after trimming a $21 million rider, and a rival design proposing roughly $250 million died without a hearing. The 90th convenes with the reserve's custody contract executed or pending and its first biennial report due — the record that will frame any top-up.",
  },
  {
    q: "What happened to the Texas crypto kiosk bills?",
    a: "Both died in 2025 despite majorities: SB 1705 passed the Senate and died on the House calendar, while HB 2798 passed the House and died in Senate committee. HB 271 and SB 181 were filed November 9, 2026 with distinct proposed prohibitions: a criminal misdemeanor and a revenue-based civil penalty, respectively. Neither has passed.",
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

export default function Lege90Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(lege90Sources),
    headline: "Texas Bitcoin Bills 2027: The 90th Legislature Tracker",
    description:
      "The living tracker of Bitcoin and digital-asset bills in the 90th Texas Legislature, verified against capitol.texas.gov.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-30",
    dateModified: "2026-11-09",
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
        name: "Texas Bitcoin Bills 2027",
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
          / Texas Bitcoin Bills 2027
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Living tracker · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The 90th Legislature Bitcoin watch
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every Bitcoin and digital-asset bill of the 2027 session, tracked
            against the primary record from pre-filing to sine die – the
            forward-looking twin of{" "}
            <Link href="/texas-bitcoin-bills-that-died">the dead file</Link>{" "}
            and the next chapter of{" "}
            <Link href="/texas-bitcoin-law-timeline">the law timeline</Link>.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 30, 2026 · Updated{" "}
            {LEGE90_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Pre-filing opened November 9, 2026. Eight tracked bills were filed
            that day: three direct cryptocurrency proposals (HB 815, HB 271 and
            SB 181) and five broader data-center or computational-load bills
            (HB 734, HB 374, SB 32, SB 33 and SB 34) whose definitions include
            mining or distributed-ledger activity. All are filed proposals,
            not enacted law.<C n={9} /><C n={10} /><C n={11} /><C n={12} />
            <C n={13} /><C n={14} /><C n={15} /><C n={16} />
          </p>
        </div>

        {/* Tracker status */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Bills tracked
            </h2>
            <span className="text-xs text-muted-2">
              As of {LEGE90_LAST_VERIFIED}
            </span>
          </div>
          <p className="mt-3 text-sm text-muted">
            {trackedBills90.length} filed proposals · 3 direct cryptocurrency · 5 broader computational load.
            All statuses are as of {LEGE90_LAST_VERIFIED}.
          </p>
          <div className="mt-5 space-y-4">
            {trackedBills90.map((b, i) => (
              <div key={b.bill} className="rounded-xl border border-border bg-surface p-5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-semibold">{b.bill} — {b.title}</h3>
                  <span className="rounded-full border border-accent/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">{b.status}</span>
                </div>
                <p className="mt-1 text-xs text-muted-2">{b.scope} · {b.chamber} · {b.author} · last action {b.lastAction}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.summary} {b.statusDetail}<C n={9 + i} /><C n={17 + i} /></p>
                <p className="mt-2 text-xs">
                  <a className="underline decoration-accent/40 underline-offset-2" href={b.historyUrl}>Bill history</a>{" · "}
                  <a className="underline decoration-accent/40 underline-offset-2" href={b.textUrl}>Introduced text</a>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Session clock */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            The session clock
          </h2>
          <ol className="mt-5 space-y-4">
            {sessionDates.map((e) => (
              <li
                key={e.date}
                className="relative rounded-xl border border-border bg-surface p-5 pl-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
                  style={{ background: e.done ? "var(--accent)" : "#6f9e6a" }}
                />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <time dateTime={e.date} className="text-xs tabular-nums text-muted-2">
                    {e.dateLabel}
                  </time>
                  <span
                    className="rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      color: e.done ? "var(--accent)" : "#6f9e6a",
                      borderColor: e.done
                        ? "color-mix(in srgb, var(--accent) 45%, transparent)"
                        : "color-mix(in srgb, #6f9e6a 55%, transparent)",
                    }}
                  >
                    {e.done ? "Done" : "Ahead"}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                  {e.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {e.detail}
                  {e.done ? <C n={9} /> : <C n={2} />}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Watchlist */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Open questions beyond the filed bills
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            These are questions to watch, not additional filed measures. Each is
            grounded in the prior record or a statutory deadline. The fuller stories live in{" "}
            <Link
              href="/texas-bitcoin-bills-that-died"
              className="underline decoration-accent/40 underline-offset-2 hover:text-accent-soft"
            >
              the dead file
            </Link>{" "}
            and on{" "}
            <Link
              href="/texas-strategic-bitcoin-reserve"
              className="underline decoration-accent/40 underline-offset-2 hover:text-accent-soft"
            >
              the reserve page
            </Link>
            .
          </p>
          <div className="mt-5 space-y-4">
            {watchlist.map((w) => (
              <div
                key={w.title}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {w.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {w.detail}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-2">
                  <span className="font-semibold uppercase tracking-[0.14em] text-accent">
                    The precedent:
                  </span>{" "}
                  {w.precedent}
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
            Primary record first: the Legislative Reference Library, the
            session timetable, and capitol.texas.gov bill histories. This is a
            research and reference article, not financial, investment, or
            legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {lege90Sources.map((s) => (
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
