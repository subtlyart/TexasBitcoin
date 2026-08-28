import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  HANCOCK_LAST_VERIFIED,
  hancockSources,
  hancockTimeline,
  type HancockTimelineKind,
} from "@/lib/hancock";

const pageUrl = `${site.url}/kelly-hancock-bitcoin`;

export const metadata: Metadata = {
  title: "Kelly Hancock: The Man Who Bought Texas Its Bitcoin",
  description:
    "Kelly Hancock's Bitcoin record, sourced: the acting Texas Comptroller who executed the state's first Bitcoin purchase (Nov 20, 2025), built the $10M reserve position, named the advisory committee, and ran the custody RFP - then lost the March 2026 primary to Don Huffines and became a lame duck finishing the transition for a successor to inherit.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Kelly Hancock: The Man Who Bought Texas Its Bitcoin",
    description:
      "Abbott signed the reserve, Patrick prioritized it - Hancock is the man who actually bought the Bitcoin. The execution record of the acting comptroller, including the primary defeat that made him a lame-duck steward.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Kelly Hancock?",
    a: "Kelly Hancock is the acting Texas Comptroller of Public Accounts - the state's chief financial officer and, under Senate Bill 21, the manager of the Texas Strategic Bitcoin Reserve. A former state legislator (Texas House 2007–2013, Senate District 9 2013–2025), he joined the Comptroller's office in June 2025 and became acting comptroller on July 1, 2025, when Glenn Hegar left to lead the Texas A&M System.",
  },
  {
    q: "Did Kelly Hancock buy Bitcoin for Texas?",
    a: "Yes - the first state Bitcoin purchase in American history for a dedicated, publicly funded reserve. On November 20, 2025, Hancock's office deployed roughly $5 million into the iShares Bitcoin Trust, a spot Bitcoin ETF, at $51.8694 per share with Bitcoin near $91,300, as an explicit placeholder. The position reached the full $10 million appropriation by May 2026.",
  },
  {
    q: "What has Kelly Hancock done with the Texas Bitcoin Reserve?",
    a: "Everything operational so far: the first purchase (November 20, 2025), building the position to the full $10 million appropriation, naming the four outside members of the advisory committee he chairs (May 28, 2026), and issuing the custody-and-liquidity RFP that will convert the ETF placeholder into directly held Bitcoin, with contract execution targeted for late August 2026.",
  },
  {
    q: "Did Kelly Hancock win the comptroller election?",
    a: "No. Hancock lost the March 3, 2026 Republican primary to former state senator Don Huffines, who won outright with about 58% of the vote to Hancock's roughly 23% after a late Trump endorsement - overriding Governor Abbott's $2.6 million in ads backing Hancock. Hancock serves as acting comptroller until the winner of the November 2026 general election (Huffines vs. Democrat Sarah Eckhardt) takes office in January 2027.",
  },
  {
    q: "Who will manage the Texas Bitcoin Reserve after Hancock?",
    a: "Whoever wins the November 2026 general election for comptroller - Republican Don Huffines or Democrat Sarah Eckhardt - inherits the reserve when the new term begins in January 2027. By then the custody transition Hancock ran is expected to be complete, meaning the next comptroller likely inherits directly held Bitcoin rather than an ETF placeholder.",
  },
];

const kindStyle: Record<HancockTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  office: { color: "var(--accent)", label: "The office" },
  execution: { color: "#8a7fb5", label: "The execution" },
  verdict: { color: "#c98a4e", label: "The verdict" },
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

export default function KellyHancockBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kelly Hancock: The Man Who Bought Texas Its Bitcoin",
    description:
      "The execution record of the acting Texas Comptroller: the first state Bitcoin purchase (Nov 20, 2025), the $10M position, the advisory committee, the custody RFP - and the primary defeat that made him a lame-duck steward.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Kelly Hancock" },
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
        name: "Kelly Hancock and Bitcoin",
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
          / Kelly Hancock &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The Comptroller&apos;s desk
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Kelly Hancock: The Man Who Bought Texas Its Bitcoin
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Governor Abbott signed the reserve. Lieutenant Governor Patrick
            prioritized it. Senator Schwertner wrote it. But statutes
            don&apos;t buy Bitcoin – comptrollers do, and the one who executed
            the first state Bitcoin purchase in American history is a man most
            of the country has never heard of. This is the execution record of
            Kelly Hancock: the trade, the committee, the custody transition –
            and the primary defeat that means he is building it all for
            someone else to inherit.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 28, 2026 · Updated{" "}
            {HANCOCK_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Kelly Hancock is the acting Texas Comptroller who operates the
            Texas Strategic Bitcoin Reserve. His office made the first state
            Bitcoin purchase in U.S. history on November 20, 2025 - about $5
            million via a spot Bitcoin ETF - built the position to the full
            $10 million appropriation, named the reserve&apos;s advisory
            committee, and ran the custody RFP. He lost the March 3, 2026
            Republican primary to Don Huffines and serves until a successor
            takes office in January 2027.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Kelly Hancock became acting Texas Comptroller on July 1, 2025,
              eleven days after SB 21 created the Texas Strategic Bitcoin
              Reserve his office manages.<C n={2} /><C n={9} />
            </li>
            <li>
              On November 20, 2025, Hancock&apos;s office made the first state
              Bitcoin purchase in U.S. history - roughly $5 million in the
              iShares Bitcoin Trust at $51.8694 per share, with Bitcoin near
              $91,300.<C n={4} />
            </li>
            <li>
              The reserve&apos;s ETF position reached the full $10 million
              appropriation by the time the custody RFP was filed in May
              2026.<C n={7} /><C n={8} />
            </li>
            <li>
              On May 28, 2026, Hancock named the four outside members of the
              advisory committee he chairs and issued RFP 908-26-1778WS for
              custody and liquidity services, with contract execution targeted
              for late August 2026.<C n={5} /><C n={7} /><C n={8} />
            </li>
            <li>
              Hancock lost the March 3, 2026 Republican primary for
              comptroller to Don Huffines, roughly 58% to 23%, after a late
              Trump endorsement overrode Governor Abbott&apos;s $2.6 million
              in supporting ads.<C n={13} /><C n={15} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              The steward&apos;s year
            </h2>
            <span className="text-xs text-muted-2">2025 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {hancockTimeline.map((e) => {
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
          <h2>Who is Kelly Hancock, and how did he get the reserve?</h2>
          <p>
            By succession, timed almost to the day. Hancock spent eighteen
            years in the Legislature - the Texas House from 2007 to 2013, then
            Senate District 9 in Tarrant County from 2013 to 2025, including a
            stretch as president pro tempore.<C n={9} /> In March 2025,
            Comptroller Glenn Hegar was named the next chancellor of the Texas
            A&amp;M System; on June 19, 2025, Hegar welcomed Hancock into the
            Comptroller&apos;s office as chief clerk - one day before Governor
            Abbott signed SB 21 - and on July 1 Hancock became acting
            comptroller, inheriting an eleven-day-old statute directing his
            office to build a Bitcoin reserve held outside the treasury.
            <C n={3} /><C n={1} /><C n={2} /> The office, not the man, was
            handed the mandate. What Hancock did with it is the record below.
          </p>

          <h2>What did Hancock actually do with the Bitcoin reserve?</h2>
          <p>
            He executed - three moves in twelve months. First,{" "}
            <strong>the purchase</strong>: on November 20, 2025, his office
            deployed roughly $5 million into the iShares Bitcoin Trust at
            $51.8694 per share, Bitcoin near $91,300 - the first time in
            American history a state bought Bitcoin exposure for a dedicated,
            publicly funded reserve - and framed the ETF as an explicit
            placeholder.<C n={4} /> Second, <strong>the build</strong>: by the
            time the custody RFP was filed in May 2026, the position had
            reached the full $10 million appropriation.<C n={7} /><C n={8} />{" "}
            Third, <strong>the plumbing</strong>: on May 28, 2026, Hancock
            named the four outside members of the advisory committee he
            chairs - Laurie Dotter, Jamie McAvity, Carla Reyes, and Gary
            Vecchiarelli - and issued RFP 908-26-1778WS for the
            custody-and-liquidity partner that will convert the placeholder
            into Bitcoin held in the name of the State of Texas, with contract
            execution targeted for late August 2026.<C n={5} /><C n={6} />
            <C n={7} /> The full mechanics live on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            .
          </p>

          <h2>Why does the comptroller matter more than the statute?</h2>
          <p>
            Because SB 21 is deliberately thin on operations. The law sets the
            eligibility floor and the reporting duty, then hands everything
            hard - when to buy, what venue, how to custody a bearer asset in a
            state government, how to stand up controls that survive an
            administration change - to the Comptroller of Public Accounts.
            <C n={5} /> Every precedent Hancock set is one the next
            comptroller, and the next state to copy Texas, will work from: the
            ETF-first entry, the committee bench drawn from mining and
            institutional finance, custody in the state&apos;s own name. The
            reserve&apos;s political authors are chronicled in{" "}
            <Link href="/greg-abbott-bitcoin">Greg Abbott and Bitcoin</Link>{" "}
            and{" "}
            <Link href="/dan-patrick-bitcoin">Dan Patrick and Bitcoin</Link>;
            Hancock&apos;s page is what execution looked like.
          </p>

          <h2>The honest counterweight: the lame-duck steward</h2>
          <p>
            The criticism worth engaging is structural: the first state
            Bitcoin reserve in America is being built by an official nobody
            elected to the job. Hancock was appointed into the office, ran to
            keep it, and on March 3, 2026 lost the Republican primary
            decisively - Don Huffines won outright with about 58% to
            Hancock&apos;s roughly 23%, after a late Trump endorsement
            overrode Governor Abbott&apos;s $2.6 million in ads backing
            Hancock.<C n={13} /><C n={14} /><C n={15} /> Every reserve
            decision since - the committee, the RFP, the custody contract now
            at the wire - has been made by a lame duck.
          </p>
          <p>
            The fair reading cuts the other way too. A steward with no
            election to win has no incentive to time trades for headlines, and
            finishing the custody transition before the handoff is exactly
            what an orderly office does: the winner of the November 2026
            general - Huffines or Democrat Sarah Eckhardt - will likely
            inherit directly held Bitcoin rather than a half-built program.
            <C n={14} /><C n={10} /> Institutions that survive their founders
            are the whole point of writing a reserve into statute rather than
            leaving it to personality.
          </p>

          <h2>Where does the Hancock record stand today?</h2>
          <p>
            As of August 2026: the custody contract his RFP targeted for late
            August is the open item - the move that converts the $10 million
            ETF placeholder into coin the state controls; the advisory
            committee he chairs is seated; and the clock runs toward January
            2027, when a new comptroller inherits the reserve. Hancock&apos;s
            Bitcoin legacy will be measured by a strange standard for a
            politician: whether the thing he built transfers so cleanly that
            nobody notices the handoff.
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
            appointments, the committee, and the fund; the state procurement
            record for the custody RFP; the Texas Tribune and Texas press for
            the succession and the primary; trade press for the purchases.
            This is a research and reference article, not financial,
            investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {hancockSources.map((s) => (
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
