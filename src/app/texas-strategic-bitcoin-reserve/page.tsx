import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  RESERVE_LAST_VERIFIED,
  reserveSources,
  reserveStatus,
  reserveTimeline,
} from "@/lib/reserve";

const pageUrl = `${site.url}/texas-strategic-bitcoin-reserve`;

export const metadata: Metadata = {
  title: "The Texas Strategic Bitcoin Reserve",
  description:
    "How the Texas Strategic Bitcoin Reserve works and where it stands — SB 21, the $10M appropriation, the $500B floor, and the road to direct custody.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Texas Strategic Bitcoin Reserve",
    description:
      "The sourced reference on Texas's state Bitcoin reserve — SB 21, funding, the $500B floor, the first purchase, and the road to direct custody. Tracked and updated.",
    url: pageUrl,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Does Texas own Bitcoin?",
    a: "Yes, though indirectly so far. The reserve holds $10 million in the iShares Bitcoin Trust — a spot Bitcoin ETF — as an explicit placeholder, a position begun with a ~$5 million purchase on November 20, 2025 and built to the full appropriation by May 2026. A custody contract targeted for late August 2026 will move the state from that ETF proxy into directly held Bitcoin.",
  },
  {
    q: "How much money is in the Texas Bitcoin Reserve?",
    a: "The Legislature appropriated $10 million for the reserve (a $21 million Senate rider was trimmed to $10 million), and the full amount is now deployed into a spot Bitcoin ETF, beginning with a roughly $5 million purchase in November 2025. SB 21 also lets the reserve grow through open-market purchases, forks, and airdrops.",
  },
  {
    q: "Who manages the Texas Strategic Bitcoin Reserve?",
    a: "The Texas Comptroller of Public Accounts manages the reserve, holding it outside the state treasury. A five-member advisory committee guides administration — the Comptroller chairs it, joined by four outside experts named on May 28, 2026. The Comptroller must publish biennial reports on the fund's value and management.",
  },
  {
    q: "What can the Texas reserve hold besides Bitcoin?",
    a: "Only digital assets averaging at least $500 billion in market capitalization over the most recent 24 months. That threshold is a bar only Bitcoin currently clears, so in practice the reserve is Bitcoin-only — though the door is left open if another asset ever qualifies.",
  },
  {
    q: "Is Texas the only state with a Bitcoin reserve?",
    a: "No. Arizona and New Hampshire also enacted cryptocurrency-reserve laws. Texas's is distinguished as the first standalone, publicly funded Bitcoin reserve held outside the state treasury in a dedicated vehicle, rather than as a line item inside an existing fund.",
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

export default function ReservePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Texas Strategic Bitcoin Reserve",
    description:
      "How Texas's state Bitcoin reserve works and where it stands — SB 21, funding, the $500B market-cap floor, the first purchase, and the move to direct custody.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-09",
    dateModified: "2026-08-30",
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
          / Texas Strategic Bitcoin Reserve
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Texas Strategic Bitcoin Reserve
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The nation&apos;s first standalone, publicly funded state Bitcoin
            reserve — what the law built, what the state has actually bought, and
            where it goes next. Tracked against the primary record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 9, 2026 · Updated{" "}
            {RESERVE_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            The Texas Strategic Bitcoin Reserve is a state-owned Bitcoin fund
            created by Senate Bill 21, signed June 20, 2025. The Comptroller
            manages it outside the treasury and may hold only digital assets
            averaging at least $500 billion in market cap over 24 months — a bar
            only Bitcoin clears. The Legislature appropriated $10 million, all of
            it now deployed into a spot Bitcoin ETF as a placeholder — a position
            begun November 20, 2025 — with a custody contract targeted for late
            August 2026 to convert it to directly held Bitcoin.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Senate Bill 21 was signed June 20, 2025 and took effect
              immediately, creating the first standalone, publicly funded state
              Bitcoin reserve.<C n={1} /><C n={3} />
            </li>
            <li>
              The reserve may hold only digital assets averaging at least $500
              billion in market capitalization over 24 months — a threshold only
              Bitcoin currently clears.<C n={2} />
            </li>
            <li>
              The Legislature appropriated $10 million for the reserve.<C n={7} />
            </li>
            <li>
              On November 20, 2025, the reserve made its first purchase — about
              $5 million in the iShares Bitcoin Trust, held as a placeholder.
              <C n={4} />
            </li>
            <li>
              The ETF position has reached the full $10 million appropriation,
              per the custody RFP filed in May 2026.<C n={8} /><C n={9} />
            </li>
            <li>
              On May 28, 2026, the Comptroller completed the five-seat advisory
              committee and opened a custody-and-liquidity RFP; contract
              execution is targeted for late August 2026.<C n={5} /><C n={9} />
            </li>
          </ul>
        </div>

        {/* Status tracker — where the reserve stands right now */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Reserve status
            </h2>
            <span className="text-xs text-muted-2">
              As of {RESERVE_LAST_VERIFIED}
            </span>
          </div>
          <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {reserveStatus.map((row) => (
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

        {/* Reserve timeline */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            From statute to ledger
          </h2>
          <ol className="mt-5 space-y-4">
            {reserveTimeline.map((e) => (
              <li
                key={e.date}
                className="relative rounded-xl border border-border bg-surface p-5 pl-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
                  style={{
                    background: e.done ? "var(--accent)" : "#6f9e6a",
                  }}
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
                    {e.done ? "Done" : "In progress"}
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
            ))}
          </ol>
        </section>

        <div className="prose-tx mt-12">
          <h2>What is the Texas Strategic Bitcoin Reserve?</h2>
          <p>
            It is a state-owned Bitcoin fund created by{" "}
            <strong>Senate Bill 21</strong>, authored by Senator Charles
            Schwertner and signed by{" "}
            <Link href="/greg-abbott-bitcoin">Governor Greg Abbott</Link> on
            June 20, 2025, effective immediately.<C n={1} /><C n={3} /> Its defining trait is
            structural: the reserve sits <em>outside</em> the state treasury,
            managed by the Texas Comptroller as a dedicated vehicle rather than a
            line item in an existing fund, and shielded from the routine sweeps
            that pull idle balances back into general revenue.<C n={2} /> Texas
            did not merely permit the state to own Bitcoin — it built a strategic
            reserve and named it one. The fuller legislative arc, from the 2014
            &ldquo;not money&rdquo; memo forward, lives on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            .
          </p>

          <h2>How much Bitcoin does Texas actually own?</h2>
          <p>
            As of its first move, Texas holds Bitcoin <em>exposure</em>, not yet
            self-custodied coin. On <strong>November 20, 2025</strong>, the
            Comptroller&apos;s office bought roughly $5 million of the{" "}
            <strong>iShares Bitcoin Trust</strong> — a spot Bitcoin ETF — at
            $51.8694 a share, with Bitcoin near $91,300, and described the
            position as a temporary placeholder.<C n={4} /> By the time the
            custody RFP was filed in May 2026, the position had grown to the
            full <strong>$10 million appropriation</strong>, all of it in
            IBIT.<C n={8} /><C n={9} /> The state deliberately started with an
            ETF to establish a position while it built the plumbing to hold the
            asset itself. That plumbing is the custody question below — and it
            is the difference between owning a claim on Bitcoin and owning the
            keys.
          </p>

          <h2>How is the reserve funded?</h2>
          <p>
            The Legislature appropriated <strong>$10 million</strong> to seed the
            reserve. The number is its own small piece of Capitol history: a
            Senate budget rider had floated $21 million to &ldquo;kick
            start&rdquo; the fund before the final figure settled at $10
            million.<C n={7} /> Beyond that appropriation, SB 21 lets the reserve
            grow three more ways — open-market purchases by the state, and any{" "}
            <strong>forks or airdrops</strong> that land in the state&apos;s
            cryptocurrency addresses.<C n={2} /> It is a fund designed to
            accumulate, not just to hold a one-time allocation.
          </p>

          <h2>What can the reserve hold?</h2>
          <p>
            Only a digital asset averaging at least{" "}
            <strong>$500 billion in market capitalization over the most recent
            24 months</strong> is eligible.<C n={2} /> The threshold is the
            policy in miniature: it is high enough that, today, only Bitcoin
            clears it, so the &ldquo;reserve&rdquo; is Bitcoin in all but the
            statute&apos;s careful, asset-neutral wording. The 24-month averaging
            window is deliberate too — it screens out anything that spikes to a
            half-trillion for a week, demanding durability, not a moment. It is
            the same hard-money instinct that runs through{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law says about Bitcoin
            </Link>
            .
          </p>

          <h2>Who runs it, and who is on the advisory committee?</h2>
          <p>
            The <strong>Texas Comptroller of Public Accounts</strong> manages the
            reserve, and must publish <strong>biennial reports</strong> on its
            value and administration.<C n={2} /> A five-member advisory committee
            guides that work, and it is complete: on{" "}
            <strong>May 28, 2026</strong>, Acting Comptroller{" "}
            <Link href="/kelly-hancock-bitcoin">Kelly Hancock</Link> —
            who chairs the committee himself — named the four outside seats:
            Laurie Dotter, Cormint CEO Jamie McAvity, SMU law professor Carla
            Reyes, and CleanSpark CFO Gary Vecchiarelli — a bench that pairs
            institutional investment experience with people who mine and account
            for Bitcoin for a living.<C n={5} /> The same announcement opened the
            request for proposals for the custody-and-liquidity partner.
            <C n={5} />
          </p>

          <h2>How does Texas compare to other states?</h2>
          <p>
            Texas is not alone in law — <strong>Arizona</strong> and{" "}
            <strong>New Hampshire</strong> also enacted cryptocurrency-reserve
            statutes — but it is first in structure.<C n={4} /> Where others
            authorized crypto exposure inside existing funds, Texas stood up a
            standalone, publicly funded reserve held outside the treasury, with
            its own committee, its own reporting cadence, and its own line in the
            Comptroller&apos;s manual of accounts.<C n={6} /> The design is the
            statement: a reserve is something a state builds on purpose and
            reports on, not a position it happens to carry.
          </p>

          <h2>What comes next for the reserve?</h2>
          <p>
            The near-term story is <strong>custody</strong> — and it is at the
            wire. The RFP for a custody-and-liquidity firm closed July 10, 2026
            (extended from June 15), with{" "}
            <strong>contract execution targeted for late August 2026</strong>;
            the selected partner will retire the $10 million ETF placeholder for
            Bitcoin held directly in the name of the State of Texas — the move
            from a claim to the keys.<C n={8} /><C n={9} /> That handoff now has
            its own living record:{" "}
            <Link href="/who-holds-the-texas-bitcoin-reserve">
              who holds the Texas Bitcoin reserve
            </Link>{" "}
            tracks the custodian search, the 60-day conversion clock, and the
            coming public holdings website. After that come the questions both
            pages keep tracking: what the first biennial report shows, and
            whether the 90th Legislature, convening January 2027, adds to the
            fund. None of these are threats to the record above — they are its
            next entries, and we update against the primary record as they
            land.
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
            Primary record first: the SB 21 bill history and the Texas
            Comptroller, then legal analysis and trade press. This is a research
            and reference article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {reserveSources.map((s) => (
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
