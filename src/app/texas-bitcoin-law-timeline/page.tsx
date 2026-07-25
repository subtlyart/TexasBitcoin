import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { LAW_LAST_VERIFIED, lawMilestones, lawSources } from "@/lib/law-timeline";
import { LawTimeline } from "@/components/law-timeline";
import { SeamMark } from "@/components/seam-mark";

export const metadata: Metadata = {
  title: "The Texas Bitcoin Law Timeline — Every Law, Sourced",
  description:
    "The interactive timeline of Bitcoin law in Texas: from Supervisory Memorandum 1037 in 2014 to the Strategic Bitcoin Reserve in 2025 — every bill, memo, and vote verified against the primary record.",
  alternates: { canonical: `${site.url}/texas-bitcoin-law-timeline` },
  openGraph: {
    type: "article",
    title: "The Texas Bitcoin Law Timeline",
    description:
      "Every Bitcoin law, memo, and failed bill in Texas on one interactive timeline — from the 2014 'not money' memo to the 2025 Strategic Bitcoin Reserve, sourced end to end.",
    url: `${site.url}/texas-bitcoin-law-timeline`,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Is Bitcoin legal in Texas?",
    a: "Yes. Bitcoin is legal to buy, sell, hold, and mine in Texas. Supervisory Memorandum 1037, issued April 3, 2014, holds that Bitcoin is not 'money' under the Texas Money Services Act, so selling your own bitcoin does not by itself require a state license. Federal FinCEN registration still applies to exchange businesses.",
  },
  {
    q: "Does Texas have a Strategic Bitcoin Reserve?",
    a: "Yes. Senate Bill 21, signed by Governor Greg Abbott on June 20, 2025 and effective immediately, created the Texas Strategic Bitcoin Reserve — the first standalone, publicly funded state Bitcoin reserve. The Texas Comptroller manages it outside the state treasury, and its $500 billion market-cap floor means only Bitcoin currently qualifies.",
  },
  {
    q: "What is the Texas proof-of-reserves law?",
    a: "House Bill 1666, signed June 9, 2023 and effective September 1, 2023, requires digital asset service providers operating in Texas to segregate customer funds from company assets and to file auditor-attested proof-of-reserves reports with the Texas Department of Banking.",
  },
  {
    q: "What Bitcoin bills have failed in Texas?",
    a: "The biggest was Senate Bill 1751 in 2023, which would have capped Bitcoin miners' participation in ERCOT demand-response programs at 10% and stripped their tax abatements. It passed the Texas Senate 30–1 on April 12, 2023, then died in a Texas House committee in May 2023 without reaching a floor vote.",
  },
  {
    q: "Is Bitcoin legal tender in Texas?",
    a: "No. Bitcoin is legal to own and use in Texas, but it is not legal tender. House Bill 1056, signed June 22, 2025, recognizes gold and silver specie as legal tender and directs a metal-backed transactional currency — while Senate Bill 21 holds Bitcoin as a state reserve asset instead.",
  },
  {
    q: "Can Texas banks hold Bitcoin for customers?",
    a: "Yes. Industry Notice 2021-03, issued by the Texas Department of Banking on June 10, 2021, confirmed that Texas state-chartered banks may provide virtual currency custody services under existing authority in Texas Finance Code § 32.001, provided they manage the risks and comply with applicable law.",
  },
];

function C({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#lt${n}`} aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

export default function LawTimelinePage() {
  const pageUrl = `${site.url}/texas-bitcoin-law-timeline`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Texas Bitcoin Law Timeline",
    description:
      "The interactive, sourced timeline of Bitcoin law in Texas — every bill, memo, and failed vote from Supervisory Memorandum 1037 (2014) to the Strategic Bitcoin Reserve (2025).",
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
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
        name: "Texas Bitcoin Law Timeline",
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
          / Texas Bitcoin Law Timeline
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Interactive · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Texas Bitcoin Law Timeline
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every law, memo, and failed bill that shaped Bitcoin in Texas —
            from a 2014 banking memo to the nation&apos;s first publicly funded
            state Bitcoin reserve. Scroll the spine; every node is verified
            against the primary record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published July 22, 2026 · Updated July 22, 2026
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Bitcoin is legal in Texas, and the law keeps compounding in its
            favor. Supervisory Memorandum 1037 (April 2014) holds that Bitcoin
            is not &ldquo;money&rdquo; under the Texas Money Services Act, so
            selling your own bitcoin requires no state license. HB 4474 (2021)
            wrote virtual currency into the Texas UCC, HB 1666 (2023) required
            proof of reserves, and Senate Bill 21 (June 2025) created the first
            publicly funded state Bitcoin reserve.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              On April 3, 2014, the Texas Department of Banking issued
              Supervisory Memorandum 1037, holding that Bitcoin is not
              &ldquo;money&rdquo; under the Texas Money Services Act.
              <C n={10} />
            </li>
            <li>
              House Bill 4474, effective September 1, 2021, made Texas one of
              the first states to write virtual currency into its Uniform
              Commercial Code.<C n={3} /><C n={17} />
            </li>
            <li>
              Senate Bill 1751 passed the Texas Senate 30&ndash;1 on April 12,
              2023, then died in a Texas House committee in May 2023.
              <C n={14} /><C n={15} />
            </li>
            <li>
              House Bill 1666, signed June 9, 2023, requires digital asset
              providers in Texas to file auditor-attested proof-of-reserves
              reports, effective September 1, 2023.<C n={8} /><C n={20} />
            </li>
            <li>
              On June 20, 2025, Governor Greg Abbott signed Senate Bill 21 —
              effective immediately — making Texas the first state with a
              standalone, publicly funded Strategic Bitcoin Reserve.<C n={1} />
              <C n={21} />
            </li>
          </ul>
        </div>

        {/* The timeline */}
        <div className="mt-10">
          <LawTimeline />
        </div>

        <div className="prose-tx mt-10">
          <h2>Is Bitcoin legal in Texas?</h2>
          <p>
            Yes — Bitcoin is legal to buy, sell, hold, and mine in Texas, and
            it always has been. The full legal-status reference — licensing,
            custody, legal tender, taxes, and the federal seam in one place —
            is{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law actually says about Bitcoin
            </Link>
            . The clearest statement is the oldest document
            on this timeline: <strong>Supervisory Memorandum 1037</strong>,
            issued by the Texas Department of Banking on April 3, 2014, which
            holds that cryptocurrency is not &ldquo;money&rdquo; under the
            Texas Money Services Act because it is not government-issued legal
            tender.<C n={10} /> Banking Commissioner Charles G. Cooper framed
            it at the time as &ldquo;best viewed like a speculative investment,
            not as money.&rdquo;<C n={11} /> The practical consequence: selling
            your own bitcoin, or exchanging crypto for crypto, does not by
            itself trigger a state money-transmission license — the license
            attaches only when sovereign currency moves in a transmitting
            capacity.<C n={13} /> Federal law is a separate map — a business
            converting cash to bitcoin for customers must still register with
            FinCEN — a seam explored in depth in{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            , our cornerstone account of how the 2014 memo set everything else
            in motion. To watch that federal map get enforced in practice, see{" "}
            <Link href="/texas-bitcoin-case-tracker">
              the Texas Bitcoin case tracker
            </Link>{" "}
            — every § 1960 and crypto prosecution announced in Texas&apos;s
            four federal districts, rebuilt nightly from the DOJ record.
            <SeamMark to="/texas-bitcoin-case-tracker" step={1} />
          </p>

          <h2>How did Texas law make room for Bitcoin?</h2>
          <p>
            Texas made room for Bitcoin in one remarkable June: three moves in
            eight days of 2021. On June 7, Governor Greg Abbott signed{" "}
            <strong>House Bill 1576</strong>, creating the 16-member Work Group
            on Blockchain Matters to draft a master plan for the industry.
            <C n={4} /> On June 10, the Department of Banking issued{" "}
            <strong>Industry Notice 2021-03</strong>, confirming that
            state-chartered banks may custody virtual currency under existing
            authority in Texas Finance Code § 32.001.<C n={12} /><C n={16} />{" "}
            And on June 15, Abbott signed <strong>House Bill 4474</strong>,
            which wrote virtual currency into the Texas Uniform Commercial Code
            — defining the asset, establishing what &ldquo;control&rdquo; of it
            means, and giving lenders and purchasers commercial-law certainty
            no handshake could.<C n={3} /><C n={17} /> The timing was not a
            coincidence: China banned Bitcoin mining that same spring, and
            Texas was writing the welcome mat into statute just as the
            world&apos;s hashrate went looking for a home — the migration
            mapped site by site on{" "}
            <Link href="/bitcoin-mining-map-texas">
              the Texas Bitcoin mining map
            </Link>
            .
          </p>

          <h2>What did the 2023 session change?</h2>
          <p>
            The 88th Legislature in 2023 built the consumer-protection and
            energy layers. <strong>Senate Bill 895</strong>, signed May 29,
            2023, replaced the state&apos;s aging money-transmission statute
            with the multistate <strong>Money Services Modernization Act</strong>{" "}
            framework, effective September 1, 2023.<C n={6} /><C n={18} />{" "}
            <strong>House Bill 591</strong>, signed June 2, 2023, exempted
            otherwise-flared natural gas from severance tax when consumed near
            the wellhead — a tailored invitation to the Permian Basin&apos;s
            off-grid miners.<C n={7} /><C n={19} /> And{" "}
            <strong>House Bill 1666</strong>, signed June 9, 2023, made Texas an
            early proof-of-reserves state: digital asset providers must
            segregate customer funds and file auditor-attested reserve reports
            with the Department of Banking.<C n={8} /><C n={20} /> Written
            months after FTX&apos;s collapse, HB 1666 is the Texas posture in
            one law — pro-Bitcoin and anti-trust-me, demanding the receipts
            that self-custody never needed.
          </p>

          <h2>What Bitcoin bills failed in Texas?</h2>
          <p>
            The most consequential failure — and the honest counterweight on
            this timeline — is <strong>Senate Bill 1751</strong>. Authored by
            Senator Lois Kolkhorst in 2023, it would have capped Bitcoin
            miners&apos; participation in ERCOT demand-response programs —
            which pay large loads to power down when the grid is stressed — at
            10%, and stripped miners&apos; tax abatements. It was no fringe
            effort: SB 1751 passed the Texas Senate <strong>30&ndash;1</strong>{" "}
            on April 12, 2023.<C n={14} /> A lopsided Senate vote against the
            industry&apos;s interests is part of the record, and it stays on
            the spine. The bill then stalled in a Texas House committee in May
            2023 and died without a floor vote.<C n={5} /><C n={15} /> The
            episode marks the real boundary of Texas friendliness: the state
            embraces miners as flexible grid assets, but a majority of its
            senators were willing to cap the subsidy — and only the House kept
            the cap from becoming law.
          </p>

          <h2>What is the Texas Strategic Bitcoin Reserve?</h2>
          <p>
            The Texas Strategic Bitcoin Reserve is a state-owned Bitcoin fund
            created by <strong>Senate Bill 21</strong>, authored by Senator
            Charles Schwertner and signed by Governor Greg Abbott on June 20,
            2025, effective immediately.<C n={1} /><C n={21} /> It made Texas
            the first state to establish a standalone, publicly funded Bitcoin
            reserve — held outside the state treasury, managed by the Texas
            Comptroller, and restricted to digital assets averaging at least
            $500 billion in market capitalization over the trailing 24 months,
            a threshold only Bitcoin clears.<C n={21} /><C n={22} /> The
            structure is the message: Texas did not add Bitcoin to a pension
            allocation or an ETF line item; it built a dedicated vehicle,
            shielded from routine fund sweeps, and named it strategic. Eleven
            years separate the reserve from Supervisory Memorandum 1037 —
            Texas spent them moving from &ldquo;Bitcoin is not money&rdquo; to
            Bitcoin as a reserve asset of the state itself.
          </p>

          <h2>Does Texas have its own digital currency?</h2>
          <p>
            Not a central bank digital currency — Texas chose older collateral.{" "}
            <strong>House Bill 1056</strong>, carried in the Senate by Senator
            Bryan Hughes and signed June 22, 2025, recognizes gold and silver
            specie as legal tender in Texas and directs the Comptroller to
            stand up a transactional currency fully backed by metal in the
            Texas Bullion Depository.<C n={2} /><C n={9} /> The rollout is
            deliberate: the act takes effect May 1, 2027, with its Section
            2116.101 arriving September 1, 2026.<C n={2} /> Set beside SB 21,
            the pattern is unmistakable — in the same June, Texas wrote both of
            hard money&apos;s traditions into law: the digital-native kind
            secured by proof-of-work, and the ancient kind secured by bullion
            in a vault. Bitcoin is not legal tender in Texas; it holds the
            arguably stronger position of reserve asset.
          </p>

          <h2>What comes next for Bitcoin law in Texas?</h2>
          <p>
            The pattern on this spine points forward. Every regular session
            since 2021 has moved Bitcoin law further than the one before —
            recognition in 2021, protection in 2023, reserve in 2025 — and the
            90th Legislature convenes in January 2027 with live questions
            queued: how the reserve accumulates, how the Bullion
            Depository&apos;s transactional currency launches by its May 2027
            deadline, and how a grid absorbing AI data centers treats its
            original flexible load. The frontier framing matters here: none of
            these are threats to the record above — they are its next entries.
            We re-verify this timeline after every session, the same cadence as{" "}
            <Link href="/bitcoin-mining-map-texas">
              the Texas Bitcoin mining map
            </Link>{" "}
            and{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            . Dataset last verified {LAW_LAST_VERIFIED}, covering{" "}
            {lawMilestones.length} milestones across twelve years of Texas law.
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
            Primary record first: Texas Legislature Online bill histories and
            Texas Department of Banking documents, then trade and legal press.
            This is a research and reference article, not financial or legal
            advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {lawSources.map((s) => (
              <li key={s.id} id={`lt${s.id}`} className="flex scroll-mt-24 gap-2">
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
