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
    "Greg Abbott's Bitcoin record, sourced: the 2014 campaign that took bitcoin donations before any state owned the asset, the 2021 legal foundation (HB 4474, HB 1576), the post-Uri miners-as-grid-asset thesis, the SB 21 signature creating the Texas Strategic Bitcoin Reserve - and the 2026 directive making large loads pay their own way.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Greg Abbott and Bitcoin: The Governor Who Took It First",
    description:
      "From a 2014 campaign accepting bitcoin donations to the 2025 signature creating the nation's first funded state Bitcoin reserve - and the 2026 ratepayer directive that shows the thesis maturing. The sourced twelve-year arc.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Is Greg Abbott pro-Bitcoin?",
    a: "Yes, and for longer than almost any American politician. Greg Abbott's gubernatorial campaign accepted bitcoin donations starting April 17, 2014, he endorsed the 2021 virtual-currency bills publicly, signed HB 4474 and HB 1576 in June 2021, recruited Bitcoin miners as grid assets after Winter Storm Uri, and signed SB 21 creating the Texas Strategic Bitcoin Reserve on June 20, 2025.",
  },
  {
    q: "Did Greg Abbott sign the Texas Bitcoin reserve into law?",
    a: "Yes. Governor Greg Abbott signed Senate Bill 21 on June 20, 2025, effective immediately, creating the Texas Strategic Bitcoin Reserve - the nation's first standalone, publicly funded state Bitcoin reserve. The same day he signed House Bill 4488, which shields the reserve from being swept into the state's general revenue fund.",
  },
  {
    q: "Did Greg Abbott's campaign really accept bitcoin in 2014?",
    a: "Yes. On April 17, 2014, then-Attorney General Abbott's campaign for governor announced it would accept bitcoin as in-kind contributions, with donors reported on campaign finance filings like any other. \"The spirit of Bitcoin embodies the free market principles that make Texas a leader in innovation and entrepreneurship,\" Abbott said. The campaign collected roughly $2,000 worth.",
  },
  {
    q: "Why does Greg Abbott want Bitcoin miners in Texas?",
    a: "Abbott's thesis, formed after Winter Storm Uri in 2021, is that Bitcoin miners are controllable load: they buy huge amounts of power when it is abundant - financing new generation - and can shut off within minutes when the grid is stressed, handing that power back to homes. He gathered crypto executives in Austin in fall 2021 to recruit exactly that behavior.",
  },
  {
    q: "Has Greg Abbott turned against Bitcoin mining?",
    a: "No - the record shows a shift in emphasis, not position. On June 10, 2026, Abbott directed the Public Utility Commission and ERCOT to make data centers, including industrial-scale Bitcoin mines, fully fund their own electric infrastructure costs rather than pass them to residential ratepayers. The directive disciplines the industry's growth; it does not restrict mining itself.",
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

// people-figs:start
// Two figures - the record and the counterweight - drawn from the dated,
// sourced facts on this page (Sept 2026). Server-rendered SVG, no client JS.
function AbbottArcFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 330" role="img" aria-label="Greg Abbott and Bitcoin: the arc from 2014 donations to the 2026 ratepayer directive">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE ARC · RECRUIT, THEN CONDITION · 2014 → 2026</text>
<line x1="66" x2="744" y1="130" y2="130" stroke="var(--muted-2)" strokeWidth="1.5"/>
<line x1="78.9" x2="78.9" y1="126" y2="134" stroke="var(--muted-2)"/>
<text x="78.9" y="148" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2014</text>
<line x1="130.0" x2="130.0" y1="126" y2="134" stroke="var(--muted-2)"/>
<text x="130.0" y="148" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2015</text>
<line x1="181.2" x2="181.2" y1="126" y2="134" stroke="var(--muted-2)"/>
<text x="181.2" y="148" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2016</text>
<line x1="232.5" x2="232.5" y1="126" y2="134" stroke="var(--muted-2)"/>
<text x="232.5" y="148" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2017</text>
<line x1="283.6" x2="283.6" y1="126" y2="134" stroke="var(--muted-2)"/>
<text x="283.6" y="148" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2018</text>
<line x1="334.7" x2="334.7" y1="126" y2="134" stroke="var(--muted-2)"/>
<text x="334.7" y="148" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2019</text>
<line x1="385.9" x2="385.9" y1="126" y2="134" stroke="var(--muted-2)"/>
<text x="385.9" y="148" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2020</text>
<line x1="437.2" x2="437.2" y1="126" y2="134" stroke="var(--muted-2)"/>
<text x="437.2" y="148" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2021</text>
<line x1="488.3" x2="488.3" y1="126" y2="134" stroke="var(--muted-2)"/>
<text x="488.3" y="148" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2022</text>
<line x1="539.4" x2="539.4" y1="126" y2="134" stroke="var(--muted-2)"/>
<text x="539.4" y="148" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2023</text>
<line x1="590.6" x2="590.6" y1="126" y2="134" stroke="var(--muted-2)"/>
<text x="590.6" y="148" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2024</text>
<line x1="641.9" x2="641.9" y1="126" y2="134" stroke="var(--muted-2)"/>
<text x="641.9" y="148" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2025</text>
<line x1="693.0" x2="693.0" y1="126" y2="134" stroke="var(--muted-2)"/>
<text x="693.0" y="148" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2026</text>
<line x1="93.7" x2="93.7" y1="124" y2="80" stroke="var(--muted-2)"/>
<circle cx="93.7" cy="130" r="5" fill="var(--star)" stroke="var(--surface)" strokeWidth="2"/>
<text x="93.7" y="54" fontSize="12" fontWeight="600" textAnchor="start" fill="var(--foreground)" fontFamily="var(--font-display)">Takes bitcoin donations</text>
<text x="93.7" y="68" fontSize="10" textAnchor="start" fill="var(--muted-2)">as Attorney General, running for governor</text>
<line x1="447.4" x2="447.4" y1="136" y2="204" stroke="var(--muted-2)"/>
<circle cx="447.4" cy="130" r="5" fill="var(--accent-soft)" stroke="var(--surface)" strokeWidth="2"/>
<text x="447.4" y="218" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">“Count me in”</text>
<text x="447.4" y="232" fontSize="10" textAnchor="middle" fill="var(--muted-2)">endorses the 87th&apos;s crypto bills</text>
<line x1="460.3" x2="460.3" y1="124" y2="116" stroke="var(--muted-2)"/>
<circle cx="460.3" cy="130" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="460.3" y="92" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Signs HB 4474, HB 1576</text>
<text x="460.3" y="106" fontSize="10" textAnchor="middle" fill="var(--muted-2)">virtual currency in the UCC; a work group</text>
<line x1="477.4" x2="477.4" y1="136" y2="164" stroke="var(--muted-2)"/>
<circle cx="477.4" cy="130" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="477.4" y="178" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Recruits the miners</text>
<text x="477.4" y="192" fontSize="10" textAnchor="middle" fill="var(--muted-2)">flexible load for ERCOT, months after Uri</text>
<line x1="665.7" x2="665.7" y1="124" y2="80" stroke="var(--muted-2)"/>
<circle cx="665.7" cy="130" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="665.7" y="54" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Signs SB 21, HB 4488</text>
<text x="665.7" y="68" fontSize="10" textAnchor="middle" fill="var(--muted-2)">the reserve, shielded from sweeps</text>
<line x1="715.4" x2="715.4" y1="136" y2="204" stroke="var(--muted-2)"/>
<circle cx="715.4" cy="130" r="5" fill="#c98a4e" stroke="var(--surface)" strokeWidth="2"/>
<text x="715.4" y="218" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">The ratepayer directive</text>
<text x="715.4" y="232" fontSize="10" textAnchor="end" fill="var(--muted-2)">data centers fund their own grid costs</text>
<rect x="715.4" y="118" width="28.6" height="24" fill="#c98a4e" fillOpacity="0.12"/>
<text x="405.0" y="320" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Abbott campaign, Texas Legislature Online, Office of the Governor · to scale by year · the second act is the pitch being held to its word</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The arc. Twelve years from taking bitcoin donations as attorney general to directing data centers to fund their own grid costs, with the recruiting years in between: the endorsement, the two 2021 laws, the miner summit, the reserve. The 2026 directive is drawn as a second act, not a reversal.
      </figcaption>
    </figure>
  );
}

function AbbottRatepayerFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 290" role="img" aria-label="The ratepayer turn: the 2021 recruiting pitch beside the 2026 directive">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE RATEPAYER TURN · THE 2021 PITCH, AND THE 2026 DIRECTIVE THAT HOLDS IT TO ITS WORD</text>
<rect x="28" y="52" width="370" height="200" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="44" y="76" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">FALL 2021 · THE PITCH</text>
<circle cx="50" cy="98" r="3.5" fill="var(--accent)"/>
<text x="62" y="102" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Miners as flexible load</text>
<text x="62" y="115" fontSize="10" fill="var(--muted-2)">power down in minutes when the grid is stressed</text>
<circle cx="50" cy="132" r="3.5" fill="var(--accent)"/>
<text x="62" y="136" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">A stronger, cheaper grid</text>
<text x="62" y="149" fontSize="10" fill="var(--muted-2)">for Texans, funded by an industry that curtails</text>
<circle cx="50" cy="166" r="3.5" fill="var(--accent)"/>
<text x="62" y="170" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Dozens of executives in Austin</text>
<text x="62" y="183" fontSize="10" fill="var(--muted-2)">months after Winter Storm Uri</text>
<rect x="412" y="52" width="370" height="200" rx="10" fill="var(--surface-2)" stroke="#c98a4e" strokeWidth="1.25"/>
<text x="428" y="76" fontSize="11" fontWeight="600" letterSpacing="2" fill="#c98a4e">JUNE 10, 2026 · THE DIRECTIVE</text>
<circle cx="434" cy="98" r="3.5" fill="#c98a4e"/>
<text x="446" y="102" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Fund your own infrastructure</text>
<text x="446" y="115" fontSize="10" fill="var(--muted-2)">no pass-through to residential ratepayers</text>
<circle cx="434" cy="132" r="3.5" fill="#c98a4e"/>
<text x="446" y="136" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">July 17 · July 31, 2026</text>
<text x="446" y="149" fontSize="10" fill="var(--muted-2)">a protective-actions memo; PUC action on transmission costs</text>
<circle cx="434" cy="166" r="3.5" fill="#c98a4e"/>
<text x="446" y="170" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">“Reduce costs for residential customers”</text>
<text x="446" y="183" fontSize="10" fill="var(--muted-2)">the directive&apos;s own words, applied to the mines he recruited</text>
<text x="405.0" y="280" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Office of the Governor, June 10, 2026 · a governor who wanted the mines gone has blunter tools than a cost-allocation memo</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The ratepayer turn. The 2021 recruiting pitch beside the 2026 directive, which holds the industry to exactly that pitch: data centers, the category that includes the mines Abbott recruited, must fund their own grid costs. The thesis maturing, not reversing.
      </figcaption>
    </figure>
  );
}

// people-figs:end
export default function GregAbbottBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Greg Abbott and Bitcoin: The Governor Who Took It First",
    description:
      "Greg Abbott's Bitcoin record, sourced: the 2014 campaign that took bitcoin donations, the 2021 legal foundation, the post-Uri miners-as-grid-asset thesis, the SB 21 signature - and the 2026 ratepayer directive.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-28",
    dateModified: "2026-09-01",
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

        {/* Direct Answer - self-contained, extractable */}
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
            Senate Bill 21 creating the Texas Strategic Bitcoin Reserve - the
            nation&apos;s first funded state Bitcoin reserve.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
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

        {/* Timeline - the arc, in order */}
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
            Yes - and the distinguishing fact is not the enthusiasm but the
            date. On April 17, 2014, Abbott&apos;s campaign for governor
            announced it would accept bitcoin as in-kind contributions,
            reported on campaign finance filings like any other donation.
            <C n={1} /> &ldquo;The spirit of Bitcoin embodies the free market
            principles that make Texas a leader in innovation and
            entrepreneurship. We welcome the Bitcoin community to join our
            team,&rdquo; Abbott said.<C n={2} /> Bitcoin traded around $500
            that spring; the campaign collected a modest ~$2,000 worth, joining
            a tiny early-adopter cohort of American politicians.<C n={15} />
            <C n={14} /> The sum was a rounding error. The signal - a statewide
            Texas official putting the asset on his own books, eleven years
            before he put it on the state&apos;s - was not.
          </p>

          <h2>What Bitcoin laws has Greg Abbott signed?</h2>
          <p>
            The 2021 session laid the legal foundation, and Abbott endorsed it
            before it reached his desk - &ldquo;Count me in as a crypto law
            proposal supporter,&rdquo; he tweeted in March 2021, pointing to
            the Texas Bullion Depository as precedent for the state leading on
            hard assets.<C n={3} /> That June he signed{" "}
            <strong>House Bill 4474</strong>, which wrote virtual currency into
            the Texas Uniform Commercial Code - defining control, ownership
            rights, and how disputes over digital assets resolve - and{" "}
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

          <AbbottArcFigure />

          <h2>Why does Abbott want Bitcoin miners on the Texas grid?</h2>
          <p>
            Because of February 2021. Winter Storm Uri broke the ERCOT grid,
            and the governor&apos;s answer to the reliability problem included
            an unlikely instrument: data centers full of mining rigs. In fall
            2021 Abbott gathered dozens of cryptocurrency dealmakers in Austin
            around the thesis that miners are{" "}
            <em>
              controllable load - buyers of last resort for abundant power who
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
            Yes - the signature the whole arc was pointing toward. On{" "}
            <strong>June 20, 2025</strong>, Abbott signed Senate Bill 21,
            effective immediately, creating the Texas Strategic Bitcoin
            Reserve: a fund held outside the treasury, managed by the
            Comptroller, restricted to assets averaging $500 billion in market
            cap over 24 months - a bar only Bitcoin clears.<C n={9} />
            <C n={10} /> The same day he signed House Bill 4488, which shields
            the reserve from the routine sweeps that pull idle balances into
            general revenue - the quiet companion bill that makes the loud one
            durable.<C n={11} /> The candidate who took bitcoin donations in
            2014 became the governor who put Bitcoin on the state balance
            sheet. The author is on{" "}
            <Link href="/charles-schwertner-bitcoin">Charles Schwertner and Bitcoin</Link>;
            the desk that executes it on{" "}
            <Link href="/kelly-hancock-bitcoin">Kelly Hancock and Bitcoin</Link>{" "}
            - the comptroller who made the first purchase - and{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines and Bitcoin</Link>,
            the comptroller who has held it since August 2026. The
            reserve&apos;s full mechanics and current status live on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            .
          </p>

          <h2>The honest counterweight: the ratepayer turn</h2>
          <p>
            The record has a second act, and this site keeps it in view. On{" "}
            <strong>June 10, 2026</strong>, Abbott directed the Public Utility
            Commission and ERCOT to require data centers - the category that
            includes the industrial-scale Bitcoin mines he recruited - to fully
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
            gigawatt-scale AI and mining load queues up - the same concern
            Lieutenant Governor Dan Patrick had pressed since 2023, told in{" "}
            <Link href="/dan-patrick-bitcoin">Dan Patrick and Bitcoin</Link>.
            A governor who wanted the mines gone has tools far blunter than a
            cost-allocation memo.
            What Abbott ordered instead is the frontier growing its
            institutions - the same story the reserve tells on the asset side.
          </p>

          <AbbottRatepayerFigure />

          <h2>Where does Greg Abbott&apos;s Bitcoin record stand today?</h2>
          <p>
            As of August 2026: every major Bitcoin statute in Texas - the UCC
            recognition, the working group, the reserve, the sweep shield  - 
            carries Abbott&apos;s signature; the reserve he signed holds $10
            million and is moving from an ETF placeholder to direct custody;
            and his open item is the ratepayer directive&apos;s rulemaking now
            working through the PUC and ERCOT. The next chapter belongs to the
            90th Legislature, convening January 2027 - and, on current form,
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
