import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  CUSTODY_LAST_VERIFIED,
  custodyMandate,
  custodySources,
  custodyStatus,
  custodyTimeline,
} from "@/lib/custody";

const pageUrl = `${site.url}/who-holds-the-texas-bitcoin-reserve`;

export const metadata: Metadata = {
  title: "Who Holds the Texas Bitcoin Reserve?",
  description:
    "The custody watch on the Texas Strategic Bitcoin Reserve — who actually holds the state's $10M, the custodian search, the 60-day ETF-to-keys conversion, and what Texas owns vs. what it controls. Updated against the primary record.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Who Holds the Texas Bitcoin Reserve?",
    description:
      "The living record of the reserve's custody: RFP 908-26-1778WS, the unnamed custodian, the 60-day conversion clock, and the coming public holdings website.",
    url: pageUrl,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is the custodian of the Texas Bitcoin reserve?",
    a: "No custodian has been named yet. As of September 1, 2026, the Texas Comptroller's custody-and-liquidity RFP (908-26-1778WS) shows no award, and the late-August 2026 target for contract execution has passed. Until a contract executes, the reserve's $10 million sits in the iShares Bitcoin Trust, where BlackRock's ETF custodian holds the underlying coin.",
  },
  {
    q: "Does Texas hold its own Bitcoin keys?",
    a: "Not yet. Texas currently holds $10 million of Bitcoin exposure through a spot ETF, meaning the underlying coin is held by the fund's custodian, not the state. The custody contract now in procurement requires the winning firm to hold Bitcoin directly in the name of the State of Texas, converting the ETF position within 60 days of execution.",
  },
  {
    q: "Who legally controls the Texas Strategic Bitcoin Reserve?",
    a: "The Texas Comptroller of Public Accounts manages the reserve as a dedicated fund (Fund 1018) held outside the state treasury, guided by a five-member advisory committee the Comptroller chairs. Since August 1, 2026 that Comptroller is Don Huffines, appointed after Kelly Hancock resigned. The custody procurement runs through the Comptroller on behalf of the Texas Treasury Safekeeping Trust Company, the state's investment arm.",
  },
  {
    q: "How will the public see what the reserve holds?",
    a: "Two ways. The custody RFP requires the winning firm to build a dedicated public website displaying the reserve's holdings and valuations, and Senate Bill 21 separately requires the Comptroller to publish biennial reports on the fund's value and administration. Neither the website nor the first report exists yet.",
  },
  {
    q: "When does the Texas reserve convert its ETF to real Bitcoin?",
    a: "Within 60 days of the custody contract executing. The procurement targeted execution for late August 2026, so on that schedule the $10 million iShares Bitcoin Trust position would convert to directly held Bitcoin by roughly late October 2026. No award had been posted as of September 1, 2026, so the clock has not started.",
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

export default function CustodyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Who Holds the Texas Bitcoin Reserve?",
    description:
      "The custody watch on the Texas Strategic Bitcoin Reserve — the custodian search, the 60-day ETF-to-keys conversion, and what Texas owns vs. what it controls.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-30",
    dateModified: "2026-09-01",
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
        name: "Who Holds the Texas Bitcoin Reserve?",
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
          /{" "}
          <Link
            href="/texas-strategic-bitcoin-reserve"
            className="hover:text-accent-soft"
          >
            Texas Strategic Bitcoin Reserve
          </Link>{" "}
          / Custody
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Living record · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Who holds the Texas Bitcoin reserve?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The operational sequel to{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the reserve explainer
            </Link>
            : not what the law built, but whose hands the coin sits in – the
            custodian search, the conversion clock, and the difference between
            what Texas owns and what Texas controls. Updated as the record
            moves.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 30, 2026 · Updated{" "}
            {CUSTODY_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            No one holds Bitcoin for Texas yet – not directly. The Texas
            Strategic Bitcoin Reserve&apos;s $10 million sits in the iShares
            Bitcoin Trust, a spot ETF whose custodian holds the underlying
            coin. The Texas Comptroller&apos;s custody RFP closed July 10,
            2026, with contract execution targeted for late August 2026; the
            winning firm, still unannounced, must convert the ETF position to
            Bitcoin held in the name of the State of Texas within 60 days.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              As of August 30, 2026, no custodian for the Texas Strategic
              Bitcoin Reserve has been announced and no award appears on the
              state&apos;s procurement site.<C n={1} />
            </li>
            <li>
              RFP 908-26-1778WS – custody and liquidity services for the
              reserve – was posted May 7, 2026, and its response deadline,
              first set for June 15, closed July 10, 2026.<C n={1} />
            </li>
            <li>
              The procurement runs through the Comptroller of Public Accounts
              on behalf of the Texas Treasury Safekeeping Trust Company, the
              state&apos;s investment arm.<C n={1} /><C n={5} />
            </li>
            <li>
              The winning custodian must convert the reserve&apos;s $10
              million iShares Bitcoin Trust position into directly held
              Bitcoin within 60 days of contract execution.<C n={3} />
            </li>
            <li>
              The custodian must hold the Bitcoin in the name of the State of
              Texas and build a public website displaying the reserve&apos;s
              holdings and valuations.<C n={3} /><C n={5} />
            </li>
            <li>
              Contract execution was targeted for late August 2026 – the
              window open as this page is written.<C n={4} />
            </li>
          </ul>
        </div>

        {/* The custody watch — who holds what, right now */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              The custody watch
            </h2>
            <span className="text-xs text-muted-2">
              As of {CUSTODY_LAST_VERIFIED}
            </span>
          </div>
          <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {custodyStatus.map((row) => (
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

        {/* Procurement timeline */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            From placeholder to keys
          </h2>
          <ol className="mt-5 space-y-4">
            {custodyTimeline.map((e) => (
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
                    {e.done ? "Done" : "Watching"}
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
          <h2>What does Texas actually own today?</h2>
          <p>
            A claim, not coin. The reserve&apos;s full{" "}
            <strong>$10 million appropriation</strong> is deployed into the{" "}
            <strong>iShares Bitcoin Trust</strong> – a position begun with a
            roughly $5 million purchase on November 20, 2025 and described by
            the Comptroller&apos;s office from day one as a placeholder.
            <C n={7} /><C n={4} /> An ETF share is real Bitcoin exposure, but
            the underlying coin sits with the fund&apos;s custodian, in the
            fund&apos;s structure, governed by the fund&apos;s rules. The
            state owns shares the way any brokerage account does. The entire
            point of the procurement this page tracks is to close that gap –
            to move from owning a claim on Bitcoin to controlling Bitcoin held
            in the name of the State of Texas.<C n={3} />
          </p>

          <h2>Who is Texas hiring, and to do what?</h2>
          <p>
            A single <strong>custody-and-liquidity partner</strong>, selected
            through <strong>RFP 908-26-1778WS</strong> – posted to the Texas
            SmartBuy ESBD on May 7, 2026 by the Comptroller of Public
            Accounts on behalf of the{" "}
            <strong>Texas Treasury Safekeeping Trust Company</strong>, the
            special-purpose entity that invests state funds.<C n={1} /><C n={5} />{" "}
            The mandate is broader than vaulting keys. The winner acquires,
            holds, manages, and reports the state&apos;s Bitcoin; runs the
            trading desk for purchases and sales; and stands up the public
            window into the fund. The full scope:
          </p>
          <ul>
            {custodyMandate.map((m) => (
              <li key={m.title}>
                <strong>{m.title}.</strong> {m.detail}{" "}
                {m.sourceIds.map((n) => (
                  <C key={n} n={n} />
                ))}
              </li>
            ))}
          </ul>

          <h2>Why has no custodian been announced yet?</h2>
          <p>
            The procurement is simply still inside its own window – with the
            caveat that the window is closing. Proposals came due{" "}
            <strong>July 10, 2026</strong> (the deadline was extended from the
            original June 15), and the state targeted{" "}
            <strong>contract execution for late August 2026</strong>.
            <C n={1} /><C n={4} /> As of September 1, the target window has
            closed: the ESBD lists the solicitation as closed with no award
            posted, and the
            Comptroller&apos;s office has issued no custodian announcement
            since the May 28 release that opened the search.<C n={1} /><C n={2} />{" "}
            None of that is a red flag – state procurement routinely runs to
            the end of its target window and past it – but it means the most
            important fact about the reserve&apos;s next chapter is still
            blank. When the award posts, it becomes the first entry this page
            adds.
          </p>

          <h2>Who decides, and who watches the decision?</h2>
          <p>
            The <strong>Comptroller</strong> runs the fund and the
            procurement – and the Comptroller changed mid-procurement. Acting
            Comptroller <Link href="/kelly-hancock-bitcoin">Kelly Hancock</Link>{" "}
            opened the custody search on May 28, 2026 – the same day he
            completed the reserve&apos;s five-member{" "}
            <strong>advisory committee</strong>, which counts custody
            standards squarely in its portfolio.<C n={2} /> The committee
            pairs institutional investment experience (Laurie Dotter) with
            people who mine, teach, and account for Bitcoin for a living
            (Cormint&apos;s Jamie McAvity, SMU law professor Carla Reyes,
            CleanSpark&apos;s Gary Vecchiarelli).<C n={2} /> Hancock resigned
            effective July 31, 2026, and{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines</Link> – who put a
            state Bitcoin reserve in his 2022 campaign platform for governor –
            was sworn in on August 1; under SB 21 custody of the reserve and
            the comptroller&apos;s committee seat pass with the office, so the
            award is his to sign.<C n={10} /><C n={11} /><C n={12} /> Statute
            adds the second layer of watching: SB 21 requires{" "}
            <strong>biennial public reports</strong> on the fund&apos;s value
            and administration, and the reserve lives as its own line – Fund
            1018 – in the Comptroller&apos;s manual of accounts.<C n={6} /><C n={9} /><C n={8} />
          </p>

          <h2>What happens after the contract executes?</h2>
          <p>
            Two clocks start. The first is the{" "}
            <strong>60-day conversion window</strong>: the custodian must
            retire the $10 million IBIT placeholder for directly held Bitcoin
            within 60 days of execution – on the late-August target, that
            would have landed the conversion by roughly late October 2026, and
            every week without an award pushes it back.<C n={3} /> The
            second is transparency: the RFP requires a{" "}
            <strong>dedicated public website</strong> showing the
            reserve&apos;s holdings and valuations, which would make Texas the
            first state whose Bitcoin position is publicly visible as a matter
            of contract, not just biennial report.<C n={3} /><C n={5} /> And
            behind both sits the 90th Legislature, convening January 2027,
            which will decide whether $10 million was the seed or the size –
            the appropriations fight previewed in{" "}
            <Link href="/texas-bitcoin-bills-that-died">
              the bills that died
            </Link>
            .
          </p>

          <h2>The honest counterweight</h2>
          <p>
            Direct custody is the stronger form of ownership, and it carries
            the stronger form of responsibility. In the ETF, key management,
            security engineering, and operational failure are BlackRock&apos;s
            problems; after conversion, they are Texas&apos;s problems,
            outsourced to a contractor the state must supervise. That is
            precisely why the RFP reads the way it does – cold storage,
            encryption, multifactor authentication, reporting, a named public
            window<C n={5} /> – and why the committee seated to watch it
            includes people who handle keys professionally. The state is not
            underestimating the job. But it is worth saying plainly: the move
            from claim to keys trades away a custodian of last resort with a
            $10 trillion balance sheet, and the record on this page is how
            Texans will be able to check that the trade is being managed well.
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
            Primary record first: the ESBD solicitation and the Texas
            Comptroller, then trade press and legal analysis. This is a
            research and reference article, not financial, investment, or
            legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {custodySources.map((s) => (
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
