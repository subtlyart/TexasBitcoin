import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  SCHWERTNER_LAST_VERIFIED,
  schwertnerSources,
  schwertnerTimeline,
  type SchwertnerTimelineKind,
} from "@/lib/schwertner";

const pageUrl = `${site.url}/charles-schwertner-bitcoin`;

export const metadata: Metadata = {
  title: "Charles Schwertner: The Surgeon Who Wrote the Reserve",
  description:
    "Charles Schwertner's Bitcoin record, sourced: the Georgetown orthopedic surgeon and Texas Senate Business and Commerce chair who authored Senate Bill 21, the law that created the Texas Strategic Bitcoin Reserve - from SB 778 (Jan 14, 2025) through the 25–5 Senate vote, the 101–42 House vote, and the June 20, 2025 signing. The design, the floor quotes, the grid bills he wrote alongside it, the fiscal-right opposition, and the red ink.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Charles Schwertner: The Surgeon Who Wrote the Reserve",
    description:
      "Abbott signed it, Patrick prioritized it, Hancock bought it, Huffines holds it - Schwertner wrote it. The author's record on the Texas Strategic Bitcoin Reserve, and on the grid bills miners read as a leash.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Charles Schwertner?",
    a: "Charles Schwertner is a Republican state senator from Georgetown, Texas, an orthopedic surgeon who has represented Senate District 5 since January 2013 after one term in the Texas House. He chairs the Senate Business and Commerce Committee, carried the 2021 post-Uri electricity-market overhaul, and authored Senate Bill 21, the 2025 law that created the Texas Strategic Bitcoin Reserve.",
  },
  {
    q: "Did Charles Schwertner write the Texas Bitcoin reserve law?",
    a: "Yes. Schwertner filed the first draft as SB 778 on January 14, 2025, then refiled the design as Senate Bill 21 on February 12, 2025 with Senators Hinojosa, Parker, and West as coauthors. He carried it through his own committee 10–0, the Senate 25–5 on March 6, and, with Representative Giovanni Capriglione sponsoring in the House, a 101–42 House vote on May 21. Governor Abbott signed it June 20, 2025, effective immediately.",
  },
  {
    q: "What did Schwertner say about Bitcoin?",
    a: "In committee on February 18, 2025: 'We can buy land, we can buy gold; I think the state of Texas should have the option of evaluating the best performing asset over the last 10 years.' On the Senate floor on March 6: 'Texas cannot expect to put its money in a one-percent savings account and keep up with inflation.' In October 2025: 'We're the only state that actually put sovereign money, taxpayer money, toward the reserve.'",
  },
  {
    q: "Is Charles Schwertner against Bitcoin mining?",
    a: "His record is on the grid, not the miners. Schwertner authored the Senate's 2023 grid package, including a 10,000-megawatt natural-gas 'energy insurance' program, and SB 1751 - the 10% cap on miners in demand response - passed the Senate out of the committee he chairs. In 2025 he joint-authored SB 6, the large-load interconnection and curtailment law, signed the same day as his reserve. The position matches Lieutenant Governor Patrick's: bullish on the asset, tough on the load.",
  },
  {
    q: "Could the Texas reserve hold Ethereum?",
    a: "Only if it clears the floor Schwertner wrote. SB 21 admits any cryptocurrency with an average market capitalization of at least $500 billion over the prior 24 months, which today only Bitcoin meets. In October 2025 Schwertner said that if ether sustained that cap for two years, it would be 'reasonable and prudent to give direction that Ethereum could be added' - a statutory door, not a plan.",
  },
];

const kindStyle: Record<SchwertnerTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  grid: { color: "#c98a4e", label: "The grid" },
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

export default function CharlesSchwertnerBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Charles Schwertner: The Surgeon Who Wrote the Reserve",
    description:
      "The Bitcoin record of the Texas senator who authored Senate Bill 21: SB 778 to SB 21, the committee and floor quotes, the 25–5 and 101–42 votes, the conference cuts, the grid bills written alongside it, the fiscal-right opposition, and the reserve's first drawdown.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Charles Schwertner" },
      { "@type": "Thing", name: "Texas Strategic Bitcoin Reserve" },
      { "@type": "Legislation", name: "Texas Senate Bill 21 (89R)" },
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
        name: "Charles Schwertner and Bitcoin",
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
          / Charles Schwertner &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The Senate
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Charles Schwertner: The Surgeon Who Wrote the Reserve
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every other page in this cluster leans on one sentence: Abbott
            signed the reserve, Patrick prioritized it, Hancock bought it,
            Huffines holds it – and Senator Schwertner wrote it. This is the
            page that sentence was owed. An orthopedic surgeon from
            Georgetown who chairs the committee that owns the Texas grid
            drafted the first funded state Bitcoin reserve in America twice,
            argued it through both chambers with a savings-account analogy,
            and signed off on the same day as the law that put a leash on
            the loads that mine it. The design, the debate, and the first
            drawdown are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 1, 2026 · Updated{" "}
            {SCHWERTNER_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Charles Schwertner is the Republican state senator from
            Georgetown who authored Senate Bill 21, the law that created the
            Texas Strategic Bitcoin Reserve. An orthopedic surgeon in the
            Texas Senate since 2013 and chair of its Business and Commerce
            Committee, he filed the first reserve bill on January 14, 2025,
            carried SB 21 through a 25–5 Senate vote on March 6, and saw it
            signed on June 20, 2025 with $10 million behind it.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Charles Schwertner filed SB 778, the first Texas Strategic
              Bitcoin Reserve bill, on January 14, 2025, and refiled the
              design as Senate Bill 21 on February 12, 2025.<C n={23} />
              <C n={2} />
            </li>
            <li>
              SB 21 passed the Texas Senate 25–5 on March 6, 2025 and the
              Texas House 101–42 on May 21, 2025.<C n={6} /><C n={10} />
            </li>
            <li>
              Governor Abbott signed SB 21 on June 20, 2025, effective
              immediately, with a $10 million appropriation trimmed from
              Schwertner&apos;s proposed $21 million.<C n={2} /><C n={12} />
            </li>
            <li>
              Schwertner has chaired the Senate Business and Commerce
              Committee, which heard SB 21 and passed it 10–0, and through
              which SB 1751&apos;s mining cap cleared the Senate 30–1 in
              April 2023.<C n={1} /><C n={2} /><C n={14} />
            </li>
            <li>
              On June 20, 2025, Abbott also signed SB 6, the large-load
              interconnection and curtailment law Schwertner joint-authored
              with Senator Phil King.<C n={15} />
            </li>
            <li>
              By March 2, 2026 the reserve&apos;s $10 million position,
              deployed in two purchases in November and December 2025, was
              worth roughly $7.8 million.<C n={18} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the grid to the reserve
            </h2>
            <span className="text-xs text-muted-2">2013 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {schwertnerTimeline.map((e) => {
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
          <h2>Who is Charles Schwertner, and why is he the reserve&apos;s author?</h2>
          <p>
            Because the reserve is, at bottom, a Business and Commerce bill,
            and he chairs Business and Commerce. Schwertner is a Georgetown
            orthopedic surgeon – pharmacy at UT Austin, medicine at UTMB –
            who served one term in the Texas House and has held Senate
            District 5, eleven counties from Williamson to Brazos, since
            January 2013.<C n={1} /><C n={19} /> His committee owns the grid,
            which made him the author of the 2021 post-Uri electricity
            overhaul and the 2023 grid package before he ever touched a
            digital asset.<C n={19} /><C n={13} /> When the reserve idea
            arrived in the 89th Legislature, it needed a chairman who could
            hear his own bill, a fiscal argument that would survive the
            Finance Committee, and the Lieutenant Governor&apos;s priority
            list. Schwertner supplied the first two; the third is told on{" "}
            <Link href="/dan-patrick-bitcoin">Dan Patrick and Bitcoin</Link>.
          </p>

          <h2>What did Schwertner&apos;s reserve bill actually do?</h2>
          <p>
            Two drafts, one architecture. <strong>SB 778</strong>, filed
            January 14, 2025, was the opening bid: public donations, an
            appropriation ceiling of 1% of general revenue, cold storage,
            regular audits, and Bitcoin named a &ldquo;valuable digital
            asset&rdquo; for hedging inflation.<C n={23} /><C n={7} /> The
            Austin American-Statesman set it against Representative Giovanni
            Capriglione&apos;s in-treasury House design two weeks
            later.<C n={8} /> <strong>SB 21</strong>, filed February 12, kept
            Schwertner&apos;s architecture and added the priority number:
            a reserve held <em>outside</em> the treasury, custody and
            management vested in the comptroller, a five-member advisory
            committee, a biennial public report, and the clause that defines
            the fund – eligibility only for a cryptocurrency averaging at
            least $500 billion in market capitalization over 24 months,
            which today admits Bitcoin alone.<C n={2} /><C n={3} /> What the
            process cut is as telling as what it kept: the donation clause
            was stripped by the Senate, restored by the House, and removed
            again in conference; staking authority left before the final
            vote; and the $21 million seed Schwertner proposed in committee
            became the $10 million that funded the first purchase.<C n={4} />
            <C n={10} /><C n={12} /> The competing designs that died are
            catalogued in{" "}
            <Link href="/texas-bitcoin-bills-that-died">
              the bills that died
            </Link>
            ; the law as it operates is on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            .
          </p>

          <h2>How did Schwertner argue for it?</h2>
          <p>
            As a balance-sheet question, never as a technology pitch. In
            committee on February 18, 2025: &ldquo;We can buy land, we can
            buy gold; I think the state of Texas should have the option of
            evaluating the best performing asset over the last 10
            years&rdquo; – and the bill is &ldquo;a specific signal to our
            federal government that is being echoed by many other
            states.&rdquo;<C n={4} /> Comptroller Glenn Hegar testified that
            the bill &ldquo;takes a measured approach to managing a
            potentially volatile asset.&rdquo;<C n={4} /> On the floor on
            March 6: &ldquo;Texas cannot expect to put its money in a
            one-percent savings account and keep up with inflation
            &hellip; I want Texas to lead in this.&rdquo;<C n={5} /> To the
            Texas Observer, the maximalist line he otherwise avoided:
            &ldquo;All fiat currency eventually goes to its natural worth,
            which is the paper it&apos;s printed on.&rdquo;<C n={9} /> The
            Senate passed it 25–5 with Democratic votes; the House, carried
            by Capriglione, 101–42.<C n={6} /><C n={10} /> And after the
            purchases, to Cointelegraph in October 2025: &ldquo;We&apos;re
            the only state that actually put sovereign money, taxpayer
            money, toward the reserve &hellip; We took the full
            punch.&rdquo;<C n={17} />
          </p>

          <h2>Why is the grid author also the reserve author?</h2>
          <p>
            Because in Texas they are the same job. Schwertner wrote SB 3 in
            2021, the weatherization-and-governance rewrite that followed
            Winter Storm Uri.<C n={19} /> In April 2023 he authored the
            Senate&apos;s grid package – SB 6, a 10,000-megawatt natural-gas
            &ldquo;Texas Energy Insurance Program&rdquo; with zero-interest
            loans for dispatchable plants, SB 7, and four market-power bills
            – and six days later SB 1751, Senator Kolkhorst&apos;s 10% cap
            on miners in demand response, passed the Senate 30–1 out of his
            committee.<C n={13} /><C n={14} /> In 2025 he joint-authored
            SB 6 with Senator Phil King: the large-load law that sets
            interconnection standards for facilities over 75 megawatts and
            lets ERCOT curtail them in an emergency, signed the same June 20
            afternoon as the reserve.<C n={15} /><C n={16} /> Read together,
            the record is not a contradiction but a position – the one the
            Lieutenant Governor holds and this site has called{" "}
            <em>bullish on the coin, tough on the load</em>. The senator who
            wants the state to own Bitcoin is the senator who wants the
            grid that mines it to answer to ERCOT. The mines themselves are
            mapped on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas mining map</Link>.
          </p>

          <h2>The honest counterweight: the fiscal right, the whales, and the red ink</h2>
          <p>
            The opposition to Schwertner&apos;s bill came from both flanks,
            and both deserve the record. From the right, Texans for Fiscal
            Responsibility urged a no vote the day before Senate passage:
            &ldquo;Using taxpayer dollars to gamble on cryptocurrency is an
            unnecessary financial risk that undermines fiscal responsibility
            and limited government principles,&rdquo; and moving the fund
            outside the treasury &ldquo;limits legislative
            oversight.&rdquo;<C n={11} /> From the left, law professor
            Hilary Allen told the Observer &ldquo;there is simply nothing
            behind Bitcoin,&rdquo; and Senator Nathan Johnson warned that the
            donation clause would let a donor &ldquo;manipulate the market
            using the imprimatur of the state&rdquo; – &ldquo;I don&apos;t
            want billionaire tech bros owning a branch of the state
            government.&rdquo;<C n={9} /><C n={10} /> Then the market
            answered the savings-account analogy: about $5 million bought
            on November 20, 2025 near $91,000 and $5 million on December 15
            near $87,000 were worth roughly $7.8 million by March 2, 2026 –
            the &ldquo;best performing asset over the last 10 years&rdquo;
            spent its first four months in the state&apos;s hands under
            water.<C n={18} /> And the grid record cuts against him with a
            different audience: the mining industry that lobbied for the
            reserve read SB 1751 and 2025&apos;s SB 6 as a leash, and both
            ran through his chair.<C n={14} /><C n={15} />
          </p>
          <p>
            The fair reading is that the design absorbed the criticism
            before the vote. The donation clause Johnson attacked is gone.
            Staking is gone. The floor is $500 billion, the fund is
            ring-fenced outside the treasury, the comptroller reports every
            two years, and $10 million is a rounding error against a
            two-year state budget – a position sized to be wrong without
            consequence and right with it. A drawdown in month four is what
            a ten-year argument looks like in month four. As for the grid,
            a legislator who wanted the miners gone had blunter tools than
            interconnection standards; what Schwertner wrote instead made
            the industry a regulated large load and gave the state a claim
            on the asset it produces. The fair criticism is narrower and
            still open: whether the reserve ever grows past the seed, which
            is a question for the 90th Legislature and the author&apos;s
            next bill.
          </p>

          <h2>Where does the Schwertner record stand today?</h2>
          <p>
            As of September 2026: the law is in force, the $10 million is
            deployed, the custody contract his statute requires is still
            unawarded under Comptroller{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines</Link>, and the
            first biennial report the author wrote into § 403.708 is due by
            December 31 – all tracked on{" "}
            <Link href="/who-holds-the-texas-bitcoin-reserve">
              the custody watch
            </Link>
            .<C n={3} /> Schwertner is on the November 3, 2026 ballot for
            another term in Senate District 5.<C n={20} /> The 90th
            Legislature convenes January 12, 2027, with the expansions
            drafted in 2025&apos;s dead bills waiting for a sponsor and the
            statute&apos;s own door – ether at $500 billion for 24 months –
            standing where he built it.<C n={17} /> The man who bought the
            Bitcoin is on{" "}
            <Link href="/kelly-hancock-bitcoin">Kelly Hancock and Bitcoin</Link>;
            the governor who signed it on{" "}
            <Link href="/greg-abbott-bitcoin">Greg Abbott and Bitcoin</Link>.
            This page is the man who wrote it.
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
            Primary record first: the Texas Senate for the bio and the
            committee and floor reporting; Texas Legislature Online for the
            bill history and enrolled text; the Lieutenant Governor&apos;s
            office for the grid package; the Texas Observer, the Statesman,
            and the Dallas Morning News for the debate and the aftermath;
            trade press for the votes and the interviews. This is a research
            and reference article, not financial, investment, or legal
            advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {schwertnerSources.map((s) => (
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
