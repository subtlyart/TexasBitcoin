import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  PATRICK_LAST_VERIFIED,
  patrickSources,
  patrickTimeline,
  type PatrickTimelineKind,
} from "@/lib/patrick";

const pageUrl = `${site.url}/dan-patrick-bitcoin`;

export const metadata: Metadata = {
  title: "Dan Patrick and Bitcoin: The Asset, Not the Megawatts",
  description:
    "Dan Patrick's Bitcoin record looks contradictory until you read the dates: the lieutenant governor whose Senate passed the anti-mining SB 1751 (2023) and who warned of a 'Wild Wild West' on the grid (2024) is the same man who made the Texas Bitcoin Reserve a Top 40 priority and called Bitcoin 'digital gold' (2025). One position, sourced.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Dan Patrick and Bitcoin: The Asset, Not the Megawatts",
    description:
      "Is Dan Patrick pro-Bitcoin or anti-mining? Both — and it's one coherent position. The SB 1751 brake, the 'Wild Wild West' warning, the reserve priority, and the 'digital gold' statement, with dates and sources.",
    url: pageUrl,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Is Dan Patrick pro-Bitcoin?",
    a: "Yes — on the asset. Dan Patrick named the Texas Bitcoin Reserve among his Top 40 legislative priorities for 2025, and when SB 21 passed the Senate on March 6, 2025 he said Bitcoin's \"limited supply and decentralized nature make it a critical asset,\" endorsing the \"digital gold\" framing. His skepticism has been aimed at mining's grid load, not at Bitcoin itself.",
  },
  {
    q: "Is Dan Patrick against Bitcoin mining?",
    a: "He has pushed to discipline it, not ban it. The Senate Patrick presides over passed SB 1751 in April 2023, which would have capped miners' share of ERCOT demand-response programs at 10% and rolled back tax abatements; it died in a House committee. In June 2024 he warned Texas \"can't be the Wild Wild West of data centers and crypto miners crashing our grid.\"",
  },
  {
    q: "What was Dan Patrick's role in the Texas Bitcoin Reserve?",
    a: "Prioritizer and floor manager. As lieutenant governor, Patrick presides over the Texas Senate and sets its agenda; he announced the Texas Bitcoin Reserve as a legislative priority on January 30, 2025, placed SB 21 on his Top 40 priority-bill list, and shepherded it to bipartisan Senate passage on March 6, 2025. Governor Abbott signed it June 20, 2025.",
  },
  {
    q: "What did Dan Patrick say about Bitcoin?",
    a: "His fullest statement came on March 6, 2025: \"Some have called Bitcoin 'digital gold,' and I believe its limited supply and decentralized nature make it a critical asset\" for Texas' future — framed alongside President Trump's stated intent to make the United States \"the cryptocurrency capital.\" He had promised to make a Texas Bitcoin Reserve a priority to solidify Texas' leadership in the digital age.",
  },
  {
    q: "Did Dan Patrick flip on Bitcoin?",
    a: "No — the record shows one consistent position with two faces. Patrick's 2023–2024 moves (SB 1751, the \"Wild Wild West\" warning) targeted the electricity economics of industrial mining on the ERCOT grid. His 2025 moves (the reserve priority, \"digital gold\") concern the state owning the asset. Being tough on the megawatts and bullish on the coin are compatible, and Patrick has held both throughout.",
  },
];

const kindStyle: Record<PatrickTimelineKind, { color: string; label: string }> = {
  brake: { color: "#c98a4e", label: "The brake" },
  warning: { color: "var(--star)", label: "The warning" },
  priority: { color: "var(--accent)", label: "The priority" },
  delivery: { color: "#8a7fb5", label: "The delivery" },
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

export default function DanPatrickBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dan Patrick and Bitcoin: The Asset, Not the Megawatts",
    description:
      "Dan Patrick's Bitcoin record, sourced: the SB 1751 brake on miners (2023), the 'Wild Wild West' grid warning (2024), the Texas Bitcoin Reserve priority and 'digital gold' statement (2025) — one coherent position.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Dan Patrick" },
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
        name: "Dan Patrick and Bitcoin",
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
          / Dan Patrick &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The Senate&apos;s gavel
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Dan Patrick and Bitcoin: The Asset, Not the Megawatts
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Read the headlines alone and Dan Patrick looks like a
            contradiction: the lieutenant governor whose Senate passed the
            toughest anti-mining bill in Texas history also put the Texas
            Bitcoin Reserve at the top of his agenda and called the coin
            &ldquo;digital gold.&rdquo; Read the dates and it resolves into one
            position, held throughout – bullish on Bitcoin the asset, tough on
            mining the load. This page keeps both halves in view.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 28, 2026 · Updated{" "}
            {PATRICK_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Texas Lieutenant Governor Dan Patrick supports Bitcoin as an asset
            and is a skeptic of unrestrained mining load on the ERCOT grid. He
            made the Texas Bitcoin Reserve a Top 40 legislative priority for
            2025 and called Bitcoin &ldquo;digital gold&rdquo; when SB 21
            passed the Senate on March 6, 2025 — after his Senate passed SB
            1751 in 2023 to cap miners&apos; grid-program benefits and he
            warned in 2024 against a &ldquo;Wild Wild West&rdquo; of data
            centers.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              The Texas Senate under Patrick passed SB 1751 by a 30&ndash;1
              vote on April 12, 2023, to cap Bitcoin miners&apos; share of
              ERCOT demand-response programs at 10%; the bill died in a House
              committee in May 2023.<C n={3} /><C n={4} /><C n={5} />
            </li>
            <li>
              In June 2024, Patrick posted that Texas &ldquo;can&apos;t be the
              Wild Wild West of data centers and crypto miners crashing our
              grid and turning the lights off,&rdquo; with ERCOT mining load
              near 2,600 megawatts — roughly Austin&apos;s draw.<C n={6} />
              <C n={8} />
            </li>
            <li>
              Patrick announced the Texas Bitcoin Reserve among his
              legislative priorities on January 30, 2025, and placed SB 21 on
              his Top 40 priority-bill list.<C n={9} /><C n={2} />
            </li>
            <li>
              SB 21 passed the Texas Senate with bipartisan votes on March 6,
              2025, and Patrick said Bitcoin&apos;s &ldquo;limited supply and
              decentralized nature make it a critical asset.&rdquo;<C n={1} />
              <C n={10} />
            </li>
            <li>
              SB 21 became law on June 20, 2025, creating the nation&apos;s
              first standalone, publicly funded state Bitcoin reserve.
              <C n={10} /><C n={12} />
            </li>
          </ul>
        </div>

        {/* Timeline — the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              The brake, the warning, the priority
            </h2>
            <span className="text-xs text-muted-2">2023 → 2025</span>
          </div>
          <ol className="mt-5 space-y-4">
            {patrickTimeline.map((e) => {
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
          <h2>Is Dan Patrick pro-Bitcoin or anti-Bitcoin?</h2>
          <p>
            He is pro-Bitcoin and mining-skeptical, and the two are not in
            tension — they are the same worldview applied to two different
            things. As lieutenant governor, Patrick presides over the Texas
            Senate and sets its agenda, which makes his priorities unusually
            consequential: a bill he elevates moves, and a bill he shelves
            does not. He elevated the Texas Bitcoin Reserve — announced as a
            priority on January 30, 2025, placed on his Top 40 list, passed
            with bipartisan votes on March 6, 2025 — and gave the asset its
            plainest endorsement from any Texas official: &ldquo;Some have
            called Bitcoin &lsquo;digital gold,&rsquo; and I believe its
            limited supply and decentralized nature make it a critical
            asset.&rdquo;<C n={9} /><C n={2} /><C n={1} /> The same man spent
            2023 and 2024 applying the brake to the industry&apos;s grid
            economics. Both halves are real, and the dates show they were held
            simultaneously.
          </p>

          <h2>What was SB 1751, and what did Patrick&apos;s Senate do?</h2>
          <p>
            Senate Bill 1751 was the 88th session&apos;s attempt to discipline
            the mines&apos; relationship with ERCOT: it would have capped
            miners&apos; participation in demand response — the programs that
            pay large loads to power down when the grid is stressed — at 10%
            of any program, and rolled back tax abatements for the industry.
            <C n={4} /> The Chamber of Digital Commerce, the Texas Blockchain
            Council, and the Satoshi Action Fund wrote jointly urging Patrick
            to oppose it; the Senate he presides over passed it 30&ndash;1 on
            April 12, 2023.<C n={11} /><C n={3} /> It died that May in a House
            committee — the closest call the Texas mining industry has had in
            a legislature, chronicled with the full statutory record on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            .<C n={5} />
          </p>

          <h2>What did Patrick mean by the &ldquo;Wild Wild West&rdquo;?</h2>
          <p>
            By June 2024 the numbers had caught up with the 2023 instinct.
            After ERCOT testimony on load growth, Patrick posted that Texas
            wants data centers, &ldquo;but it can&apos;t be the Wild Wild West
            of data centers and crypto miners crashing our grid and turning
            the lights off.&rdquo;<C n={6} /><C n={8} /> Mining load on ERCOT
            was running near 2,600 megawatts — roughly the draw of Austin —
            with about as much again approved to connect, and AI data centers
            queuing behind them.<C n={6} /> The warning reads differently now
            than it did then: two years later, Governor Abbott&apos;s June
            2026 ratepayer directive ordered large loads to fund their own
            grid costs — the Patrick concern, translated into executive
            policy, told in{" "}
            <Link href="/greg-abbott-bitcoin">Greg Abbott and Bitcoin</Link>.
          </p>

          <h2>What was Patrick&apos;s role in the Texas Bitcoin Reserve?</h2>
          <p>
            Prioritizer, floor manager, and closer. The reserve was authored
            by Senator Charles Schwertner, but it moved because Patrick put it
            among his session priorities and onto the Top 40 list that
            organizes the Senate&apos;s calendar.<C n={9} /><C n={2} /> His
            March 6, 2025 statement framed the stakes nationally — President
            Trump &ldquo;has stated unequivocally that he intends to make the
            United States the cryptocurrency capital&rdquo; — and staked the
            Texas claim inside that race: he had &ldquo;promised to make a
            Texas Bitcoin Reserve a priority to solidify Texas&apos;
            leadership in the digital age.&rdquo;<C n={1} /> Governor Abbott
            signed SB 21 on June 20, 2025.<C n={10} /> The fund&apos;s
            mechanics and current status — the $10 million, the custody
            transition, the advisory committee — live on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            .
          </p>

          <h2>The honest counterweight: the industry&apos;s case against him</h2>
          <p>
            The mining industry&apos;s criticism of Patrick is straightforward
            and worth stating plainly: demand response is not a subsidy but a
            service — miners are paid because turning off two gigawatts in
            minutes is genuinely valuable to a stressed grid — and SB 1751
            would have punished the one industry that shows up voluntarily for
            curtailment.<C n={4} /><C n={11} /> The counter-counterpoint is
            also real: when a single industry collects outsized credits for
            powering down, residential ratepayers notice, and a
            presiding officer who ignored that would not be doing his job.
            Texas ended up splitting the difference — SB 1751 died, the mines
            kept growing, and the cost-allocation question moved to the PUC.
            That is not a loose end; it is federalism&apos;s version of a
            negotiated settlement.
          </p>

          <h2>Where does Dan Patrick&apos;s Bitcoin record stand today?</h2>
          <p>
            As of August 2026: the reserve Patrick prioritized holds $10
            million and is moving to direct custody; the mining discipline he
            wanted arrived not through SB 1751 but through the June 2026
            executive directive on large-load costs; and the 90th Legislature,
            convening January 2027, will test which face of the record leads —
            more coin for the reserve, more rules for the megawatts, or, on
            current form, both at once. The two-sided record is the story, and
            this page will keep tracking both sides of it.
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
            Primary record first: the Lieutenant Governor&apos;s office for his
            own statements and priority lists, the Texas Legislature&apos;s
            bill histories for SB 1751 and SB 21, then Texas press and trade
            press. This is a research and reference article, not financial,
            investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {patrickSources.map((s) => (
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
