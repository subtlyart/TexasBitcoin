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
    "Kelly Hancock's Bitcoin record, sourced: the acting Texas Comptroller who executed the state's first Bitcoin purchase (Nov 20, 2025), built the $10M reserve position, named the advisory committee, and ran the custody RFP - then lost the March 2026 primary to Don Huffines, resigned effective July 31, 2026, and handed the reserve to the man who beat him with the custodian still unnamed.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Kelly Hancock: The Man Who Bought Texas Its Bitcoin",
    description:
      "Abbott signed the reserve, Patrick prioritized it - Hancock is the man who actually bought the Bitcoin. The execution record of the acting comptroller (July 2025 – July 2026), including the primary defeat and the resignation that handed the reserve to Don Huffines.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Kelly Hancock?",
    a: "Kelly Hancock was the acting Texas Comptroller of Public Accounts from July 1, 2025 to July 31, 2026 - the state's chief financial officer and, under Senate Bill 21, the manager of the Texas Strategic Bitcoin Reserve. A former state legislator (Texas House 2007–2013, Senate District 9 2013–2025), he joined the Comptroller's office in June 2025, became acting comptroller when Glenn Hegar left to lead the Texas A&M System, and resigned after losing the 2026 primary. Don Huffines succeeded him on August 1, 2026.",
  },
  {
    q: "Did Kelly Hancock buy Bitcoin for Texas?",
    a: "Yes - the first state Bitcoin purchase in American history for a dedicated, publicly funded reserve. On November 20, 2025, Hancock's office deployed roughly $5 million into the iShares Bitcoin Trust, a spot Bitcoin ETF, at $51.8694 per share with Bitcoin near $91,300, as an explicit placeholder. The position reached the full $10 million appropriation by May 2026.",
  },
  {
    q: "What has Kelly Hancock done with the Texas Bitcoin Reserve?",
    a: "Everything operational so far: the first purchase (November 20, 2025), building the position to the full $10 million appropriation, naming the four outside members of the advisory committee he chairs (May 28, 2026), and issuing the custody-and-liquidity RFP meant to convert the ETF placeholder into directly held Bitcoin. The contract execution it targeted for late August 2026 had not happened when he left office on July 31, 2026.",
  },
  {
    q: "Did Kelly Hancock win the comptroller election?",
    a: "No. Hancock lost the March 3, 2026 Republican primary to former state senator Don Huffines, who won outright with about 58% of the vote to Hancock's roughly 23% after a late Trump endorsement - overriding Governor Abbott's $2.6 million in ads backing Hancock. Hancock announced his resignation on July 1, 2026, effective July 31; Governor Abbott appointed Huffines to the unexpired term, and Huffines was sworn in on August 1, 2026.",
  },
  {
    q: "Who manages the Texas Bitcoin Reserve after Hancock?",
    a: "Don Huffines, sworn in as Texas Comptroller on August 1, 2026 after Governor Abbott appointed him to Hancock's unexpired term. Under Senate Bill 21, custody of the reserve and the comptroller's seat on its advisory committee pass with the office. Huffines inherited the $10 million ETF position with the custodian still unnamed, and faces Democrat Sarah Eckhardt on November 3, 2026 for the full term.",
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
      "The execution record of the acting Texas Comptroller: the first state Bitcoin purchase (Nov 20, 2025), the $10M position, the advisory committee, the custody RFP, the primary defeat - and the July 2026 resignation that handed the reserve to Don Huffines with the custodian still unnamed.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-28",
    dateModified: "2026-09-01",
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
            prioritized it.{" "}
            <Link href="/charles-schwertner-bitcoin">Senator Schwertner</Link>{" "}
            wrote it. But statutes
            don&apos;t buy Bitcoin – comptrollers do, and the one who executed
            the first state Bitcoin purchase in American history is a man most
            of the country has never heard of. This is the execution record of
            Kelly Hancock: the trade, the committee, the custody transition –
            and the primary defeat and resignation that handed it all,
            mid-transition, to the man who beat him.
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
            Kelly Hancock was the acting Texas Comptroller who operated the
            Texas Strategic Bitcoin Reserve from July 1, 2025 to July 31,
            2026. His office made the first state Bitcoin purchase in U.S.
            history on November 20, 2025 - about $5 million via a spot
            Bitcoin ETF - built the position to the full $10 million
            appropriation, named the reserve&apos;s advisory committee, and
            ran the custody RFP. He lost the March 3, 2026 Republican primary
            to Don Huffines, resigned, and handed Huffines the reserve on
            August 1, 2026 with the custodian still unnamed.
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
            <li>
              Hancock resigned effective July 31, 2026, one year after taking
              office; Don Huffines was sworn in as his successor on August 1,
              2026 and inherited the reserve with no custodian named.
              <C n={16} /><C n={18} />
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
            <C n={5} /> Every precedent Hancock set is one his successor,
            Don Huffines, and the next state to copy Texas will work from: the
            ETF-first entry, the committee bench drawn from mining and
            institutional finance, custody in the state&apos;s own name. The
            reserve&apos;s political authors are chronicled in{" "}
            <Link href="/greg-abbott-bitcoin">Greg Abbott and Bitcoin</Link>{" "}
            and{" "}
            <Link href="/dan-patrick-bitcoin">Dan Patrick and Bitcoin</Link>;
            Hancock&apos;s page is what execution looked like, and{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines and Bitcoin</Link>{" "}
            is what inheriting it looks like.
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
            decision from then until his July 31, 2026 exit - the committee,
            the RFP, the evaluation of the bids - was made by a lame duck.
          </p>
          <p>
            The fair reading cuts the other way too. A steward with no
            election to win has no incentive to time trades for headlines, and
            finishing the custody transition before the handoff is exactly
            what an orderly office does. Here the record is mixed: Hancock
            resigned on July 1, effective July 31 - four months after the
            primary - and the custody contract targeted for late August had
            not executed when Huffines took the oath on August 1, so the
            successor inherited a seated committee, a closed solicitation,
            and an ETF placeholder rather than coin in the state&apos;s name.
            <C n={16} /><C n={17} /><C n={18} /> Institutions that survive their founders
            are the whole point of writing a reserve into statute rather than
            leaving it to personality.
          </p>

          <h2>Where does the Hancock record stand today?</h2>
          <p>
            As of September 1, 2026: closed. Hancock left office on July 31,
            2026, one year to the day after taking it, with the first state
            Bitcoin purchase, the full $10 million position, a seated
            advisory committee, and a closed custody solicitation to his name
            - and no custodian.<C n={16} /><C n={18} /> The award he targeted
            for late August is now{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines</Link>&apos;s to
            make, tracked on{" "}
            <Link href="/who-holds-the-texas-bitcoin-reserve">
              the custody watch
            </Link>
            . Hancock&apos;s Bitcoin legacy will be measured by a strange
            standard for a politician: whether the thing he built transfers
            so cleanly that nobody notices the handoff. The structure
            transferred on the day. The substance is still in procurement.
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
