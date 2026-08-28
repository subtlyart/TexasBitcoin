import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  ABBOTT_LAST_VERIFIED,
  abbottSources,
  abbottTimeline,
  type AbbottTimelineKind,
} from "@/lib/abbott";

const pageUrl = `${site.url}/greg-abbott-bitcoin`;

export const metadata: Metadata = {
  title: "Greg Abbott and Bitcoin: The Governor Who Took It First",
  description:
    "Greg Abbott's Bitcoin record, sourced: the 2014 campaign that took bitcoin donations before any state owned the asset, the 2021 legal foundation (HB 4474, HB 1576), the post-Uri miners-as-grid-asset thesis, the SB 21 signature creating the Texas Strategic Bitcoin Reserve — and the 2026 directive making large loads pay their own way.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Greg Abbott and Bitcoin: The Governor Who Took It First",
    description:
      "From a 2014 campaign accepting bitcoin donations to the 2025 signature creating the nation's first funded state Bitcoin reserve — and the 2026 ratepayer directive that shows the thesis maturing. The sourced twelve-year arc.",
    url: pageUrl,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Is Greg Abbott pro-Bitcoin?",
    a: "Yes, and for longer than almost any American politician. Greg Abbott's gubernatorial campaign accepted bitcoin donations starting April 17, 2014, he endorsed the 2021 virtual-currency bills publicly, signed HB 4474 and HB 1576 in June 2021, recruited Bitcoin miners as grid assets after Winter Storm Uri, and signed SB 21 creating the Texas Strategic Bitcoin Reserve on June 20, 2025.",
  },
  {
    q: "Did Greg Abbott sign the Texas Bitcoin reserve into law?",
    a: "Yes. Governor Greg Abbott signed Senate Bill 21 on June 20, 2025, effective immediately, creating the Texas Strategic Bitcoin Reserve — the nation's first standalone, publicly funded state Bitcoin reserve. The same day he signed House Bill 4488, which shields the reserve from being swept into the state's general revenue fund.",
  },
  {
    q: "Did Greg Abbott's campaign really accept bitcoin in 2014?",
    a: "Yes. On April 17, 2014, then-Attorney General Abbott's campaign for governor announced it would accept bitcoin as in-kind contributions, with donors reported on campaign finance filings like any other. \"The spirit of Bitcoin embodies the free market principles that make Texas a leader in innovation and entrepreneurship,\" Abbott said. The campaign collected roughly $2,000 worth.",
  },
  {
    q: "Why does Greg Abbott want Bitcoin miners in Texas?",
    a: "Abbott's thesis, formed after Winter Storm Uri in 2021, is that Bitcoin miners are controllable load: they buy huge amounts of power when it is abundant — financing new generation — and can shut off within minutes when the grid is stressed, handing that power back to homes. He gathered crypto executives in Austin in fall 2021 to recruit exactly that behavior.",
  },
  {
    q: "Has Greg Abbott turned against Bitcoin mining?",
    a: "No — the record shows a shift in emphasis, not position. On June 10, 2026, Abbott directed the Public Utility Commission and ERCOT to make data centers, including industrial-scale Bitcoin mines, fully fund their own electric infrastructure costs rather than pass them to residential ratepayers. The directive disciplines the industry's growth; it does not restrict mining itself.",
  },
  {
    q: "What Bitcoin laws has Greg Abbott signed?",
    a: "The major ones: HB 4474 (June 2021), writing virtual currency into the Texas Uniform Commercial Code; HB 1576 (June 2021), creating a statewide blockchain working group; SB 21 (June 20, 2025), creating the Texas Strategic Bitcoin Reserve; and HB 4488 (June 20, 2025), protecting the reserve from general-revenue sweeps.",
  },
];

const kindStyle: Record<AbbottTimelineKind, { color: string; label: string }> = {
  first: { color: "var(--star)", label: "The first" },
  law: { color: "var(--accent)", label: "The pen" },
  grid: { color: "#c98a4e", label: "The grid" },
  reserve: { color: "#8a7fb5", label: "The reserve" },
  steward: { color: "#7a9e6a", label: "The steward" },
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

export default function GregAbbottBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Greg Abbott and Bitcoin: The Governor Who Took It First",
    description:
      "Greg Abbott's Bitcoin record, sourced: the 2014 campaign that took bitcoin donations, the 2021 legal foundation, the post-Uri miners-as-grid-asset thesis, the SB 21 signature — and the 2026 ratepayer directive.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Greg Abbott" },
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
        name: "Greg Abbott and Bitcoin",
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
          / Greg Abbott &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The Governor&apos;s office
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Greg Abbott and Bitcoin: The Governor Who Took It First
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every Bitcoin law Texas has ever enacted carries the same signature.
            The arc behind that pen runs longer than most people know: it starts
            in 2014, when a candidate for governor took bitcoin donations a
            decade before any state owned the asset, and it runs through the
            reserve he signed into existence in 2025 – and the ratepayer
            directive of 2026 that shows what the thesis looks like grown up.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 28, 2026 · Updated{" "}
            {ABBOTT_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Greg Abbott has backed Bitcoin longer than almost any American
            politician: his gubernatorial campaign accepted bitcoin donations
            starting April 17, 2014, he signed the 2021 laws writing virtual
            currency into the Texas commercial code, recruited Bitcoin miners
            as grid assets after Winter Storm Uri, and on June 20, 2025 signed
            Senate Bill 21 creating the Texas Strategic Bitcoin Reserve — the
            nation&apos;s first funded state Bitcoin reserve.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Greg Abbott&apos;s campaign for governor began accepting bitcoin
              as in-kind contributions on April 17, 2014, while he was Texas
              Attorney General.<C n={1} /><C n={2} />
            </li>
            <li>
              Abbott tweeted &ldquo;Count me in as a crypto law proposal
              supporter&rdquo; in March 2021, endorsing the virtual-currency
              bills then before the 87th Legislature.<C n={3} />
            </li>
            <li>
              Abbott signed HB 4474 and HB 1576 in June 2021, writing virtual
              currency into the Texas Uniform Commercial Code and creating a
              blockchain working group, both effective September 1, 2021.
              <C n={4} /><C n={5} />
            </li>
            <li>
              In fall 2021, months after Winter Storm Uri, Abbott gathered
              dozens of cryptocurrency executives in Austin to recruit Bitcoin
              miners as flexible, interruptible load for the ERCOT grid.
              <C n={6} /><C n={7} />
            </li>
            <li>
              Abbott signed SB 21, creating the Texas Strategic Bitcoin
              Reserve, and HB 4488, shielding it from general-revenue sweeps,
              on June 20, 2025.<C n={9} /><C n={10} /><C n={11} />
            </li>
            <li>
              On June 10, 2026, Abbott directed the PUC and ERCOT to require
              data centers to fully fund their own electric infrastructure
              costs rather than pass them to residential ratepayers.<C n={12} />
            </li>
          </ul>
        </div>

        {/* Timeline — the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Twelve years, one signature
            </h2>
            <span className="text-xs text-muted-2">2014 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {abbottTimeline.map((e) => {
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
          <h2>Is Greg Abbott pro-Bitcoin?</h2>
          <p>
            Yes — and the distinguishing fact is not the enthusiasm but the
            date. On April 17, 2014, Abbott&apos;s campaign for governor
            announced it would accept bitcoin as in-kind contributions,
            reported on campaign finance filings like any other donation.
            <C n={1} /> &ldquo;The spirit of Bitcoin embodies the free market
            principles that make Texas a leader in innovation and
            entrepreneurship. We welcome the Bitcoin community to join our
            team,&rdquo; Abbott said.<C n={2} /> Bitcoin traded around $500
            that spring; the campaign collected a modest ~$2,000 worth, joining
            a tiny early-adopter cohort of American politicians.<C n={15} />
            <C n={14} /> The sum was a rounding error. The signal — a statewide
            Texas official putting the asset on his own books, eleven years
            before he put it on the state&apos;s — was not.
          </p>

          <h2>What Bitcoin laws has Greg Abbott signed?</h2>
          <p>
            The 2021 session laid the legal foundation, and Abbott endorsed it
            before it reached his desk — &ldquo;Count me in as a crypto law
            proposal supporter,&rdquo; he tweeted in March 2021, pointing to
            the Texas Bullion Depository as precedent for the state leading on
            hard assets.<C n={3} /> That June he signed{" "}
            <strong>House Bill 4474</strong>, which wrote virtual currency into
            the Texas Uniform Commercial Code — defining control, ownership
            rights, and how disputes over digital assets resolve — and{" "}
            <strong>House Bill 1576</strong>, creating a statewide blockchain
            working group, both effective September 1, 2021.<C n={4} />
            <C n={5} /> The UCC change sounds dry and is anything but: it is
            the difference between an asset the courts can reason about and one
            they cannot, and it is a large part of why miners and funds
            domicile in Texas. The fuller statutory record lives on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>{" "}
            and in{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law says about Bitcoin
            </Link>
            .
          </p>

          <h2>Why does Abbott want Bitcoin miners on the Texas grid?</h2>
          <p>
            Because of February 2021. Winter Storm Uri broke the ERCOT grid,
            and the governor&apos;s answer to the reliability problem included
            an unlikely instrument: data centers full of mining rigs. In fall
            2021 Abbott gathered dozens of cryptocurrency dealmakers in Austin
            around the thesis that miners are{" "}
            <em>
              controllable load — buyers of last resort for abundant power who
              can shut off within minutes when the grid is stressed
            </em>
            , financing new generation in good hours and handing electricity
            back to homes in bad ones.<C n={6} /><C n={7} /> Miners began
            agreeing to pause operations on request when demand surged.
            <C n={8} /> The thesis became physical at sites like the Rockdale
            campus told in{" "}
            <Link href="/rockdale-texas-bitcoin">the Rockdale story</Link>, and
            it is the same energy logic Senator Ted Cruz carries in Washington,
            chronicled in{" "}
            <Link href="/ted-cruz-bitcoin">Ted Cruz and Bitcoin</Link>.
          </p>

          <h2>Did Abbott sign the Texas Strategic Bitcoin Reserve?</h2>
          <p>
            Yes — the signature the whole arc was pointing toward. On{" "}
            <strong>June 20, 2025</strong>, Abbott signed Senate Bill 21,
            effective immediately, creating the Texas Strategic Bitcoin
            Reserve: a fund held outside the treasury, managed by the
            Comptroller, restricted to assets averaging $500 billion in market
            cap over 24 months — a bar only Bitcoin clears.<C n={9} />
            <C n={10} /> The same day he signed House Bill 4488, which shields
            the reserve from the routine sweeps that pull idle balances into
            general revenue — the quiet companion bill that makes the loud one
            durable.<C n={11} /> The candidate who took bitcoin donations in
            2014 became the governor who put Bitcoin on the state balance
            sheet. The reserve&apos;s full mechanics and current status live on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            .
          </p>

          <h2>The honest counterweight: the ratepayer turn</h2>
          <p>
            The record has a second act, and this site keeps it in view. On{" "}
            <strong>June 10, 2026</strong>, Abbott directed the Public Utility
            Commission and ERCOT to require data centers — the category that
            includes the industrial-scale Bitcoin mines he recruited — to fully
            fund their own electric infrastructure costs rather than pass them
            to residential ratepayers, ordering a joint protective-actions
            memorandum by July 17, 2026 and PUC action on residential
            transmission costs by July 31.<C n={12} /> &ldquo;Data centers must
            operate in ways that reduce costs for residential electricity
            customers,&rdquo; the directive reads.<C n={13} />
          </p>
          <p>
            Read the dates and the shape is clear: this is not a reversal, it
            is the thesis maturing. The 2021 recruitment pitch was that miners
            would make the grid stronger and cheaper for Texans; the 2026
            directive holds the industry to exactly that pitch as
            gigawatt-scale AI and mining load queues up — the same concern
            Lieutenant Governor Dan Patrick had pressed since 2023, told in{" "}
            <Link href="/dan-patrick-bitcoin">Dan Patrick and Bitcoin</Link>.
            A governor who wanted the mines gone has tools far blunter than a
            cost-allocation memo.
            What Abbott ordered instead is the frontier growing its
            institutions — the same story the reserve tells on the asset side.
          </p>

          <h2>Where does Greg Abbott&apos;s Bitcoin record stand today?</h2>
          <p>
            As of August 2026: every major Bitcoin statute in Texas — the UCC
            recognition, the working group, the reserve, the sweep shield —
            carries Abbott&apos;s signature; the reserve he signed holds $10
            million and is moving from an ETF placeholder to direct custody;
            and his open item is the ratepayer directive&apos;s rulemaking now
            working through the PUC and ERCOT. The next chapter belongs to the
            90th Legislature, convening January 2027 — and, on current form,
            to the same pen.
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
            Primary record first: the Governor&apos;s office and the Texas
            Legislature&apos;s bill histories for the signings and the
            directive; the Texas Tribune for the 2014 first; Bloomberg and the
            Tribune for the grid thesis; trade press for corroboration. This is
            a research and reference article, not financial, investment, or
            legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {abbottSources.map((s) => (
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
