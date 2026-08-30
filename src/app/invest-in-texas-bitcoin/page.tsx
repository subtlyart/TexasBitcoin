import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  EXPOSURE_LAST_VERIFIED,
  exposureSources,
  exposureRoutes,
  type ExposureAccess,
} from "@/lib/exposure";

const pageUrl = `${site.url}/invest-in-texas-bitcoin`;

export const metadata: Metadata = {
  title: "How to Invest in the Texas Bitcoin Economy - The Exposure Map",
  description:
    "A reference map of every route into the Texas Bitcoin economy - public mining stocks with Texas operations, Bitcoin itself, the state reserve (closed to private money), the Texas Bitcoin bond that doesn't exist, accredited-only venture funds, and the new Texas Stock Exchange. Research, not financial advice.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Exposure Map - Who Can Own a Piece of Bitcoin Country",
    description:
      "Every route into the Texas Bitcoin economy, mapped and sourced: what's open to anyone, what's gated to accredited investors, what's closed to private money, and what doesn't exist. Reference only - no recommendations.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "How can I invest in the Texas Bitcoin economy?",
    a: "The routes open to anyone are Bitcoin itself (self-custodied or through a spot ETF) and publicly traded companies with Texas operations - miners and infrastructure firms like Riot, Core Scientific, Cipher, Galaxy, Bitdeer, MARA, and Hut 8. Venture funds like Austin's Multicoin are limited to accredited investors. The state's own Bitcoin reserve is closed to private money, and no Texas Bitcoin bond exists. This is a map of what exists, not a recommendation of any of it.",
  },
  {
    q: "Can I invest in the Texas Strategic Bitcoin Reserve?",
    a: "No. The reserve is a state fund held outside the treasury and managed by the comptroller. SB 21's enrolled text funds it only by legislative appropriation, dedicated revenue, purchases made with reserve money, forks and airdrops, and investment earnings - the private-donation provision was stripped in conference committee before passage. There is no citizen share, token, or bond tied to it.",
  },
  {
    q: "Is there a Texas Bitcoin bond?",
    a: "No. Texas state and municipal bonds are ordinary dollar-denominated debt; none are Bitcoin-linked. Any future instrument of that kind would have to come through the legislature first.",
  },
  {
    q: "Which Bitcoin mining stocks have Texas operations?",
    a: "As of August 2026: Riot Platforms (Rockdale and Corsicana), Core Scientific (Austin headquarters, with Denton and Pecos data centers), Cipher Mining (Odessa and Barber Lake), Galaxy (the Helios campus in Dickens County), and Bitdeer (Rockdale), with MARA (Matagorda County) and Hut 8 (Beacon Point) holding announced Texas campuses. Note that several are converting capacity from Bitcoin mining to AI computing, so the Bitcoin share of each business changes over time.",
  },
  {
    q: "Can regular investors put money into Multicoin Capital or other Texas crypto VC funds?",
    a: "Generally no. Venture funds raise from limited partners - institutions and accredited investors, typically with high minimums and multi-year lockups. None of the Austin crypto venture firms has a publicly traded vehicle.",
  },
  {
    q: "Is this page financial advice?",
    a: "No. TexasBitcoin is a research and reference publication, not a licensed advisor. This page maps what exists and who can access it, cites the sources, and stops there. It makes no recommendations, links to no exchanges or brokers, and takes no position on whether any route suits any person. Allocation, suitability, and tax questions belong with a licensed financial advisor.",
  },
];

const accessStyle: Record<ExposureAccess, { color: string; label: string }> = {
  public: { color: "var(--accent)", label: "Open" },
  accredited: { color: "#8a7fb5", label: "Gated" },
  "state-only": { color: "#c98a4e", label: "Closed" },
  none: { color: "var(--muted-2, #888)", label: "Doesn't exist" },
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

export default function InvestInTexasBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Exposure Map - Who Can Own a Piece of Bitcoin Country",
    description:
      "A reference map of every route into the Texas Bitcoin economy: public equities with Texas operations, Bitcoin itself, the closed state reserve, the bond that doesn't exist, gated venture funds, and the Texas Stock Exchange. Research, not financial advice.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Thing", name: "Texas Strategic Bitcoin Reserve" },
      { "@type": "Thing", name: "Bitcoin mining" },
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
      { "@type": "ListItem", position: 2, name: "The Exposure Map", item: pageUrl },
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

      <article className="mx-auto max-w-3xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / The Exposure Map
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · Not financial advice
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Exposure Map
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Who can own a piece of Bitcoin country - and through which door.
            This page maps every route into the Texas Bitcoin economy: what is
            open to anyone, what is gated, what is closed to private money,
            and what does not exist. A map, not a recommendation - the terrain
            is sourced, the walking is yours.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 30, 2026 · Facts verified{" "}
            {EXPOSURE_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Two routes into the Texas Bitcoin economy are open to anyone:
            Bitcoin itself (self-custodied or via a spot ETF) and public
            equities with Texas operations - Riot, Core Scientific, Cipher,
            Galaxy, Bitdeer, MARA, Hut 8. Venture funds like Multicoin are
            accredited-only, the state&apos;s $10M reserve is closed to
            private money, and no Texas Bitcoin bond exists.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              The Texas Strategic Bitcoin Reserve holds a $10 million position,
              bought as the iShares Bitcoin Trust starting November 20, 2025 -
              and its enrolled statute accepts no private money.<C n={1} />
              <C n={2} /><C n={3} />
            </li>
            <li>
              Core Scientific is the Texas-headquartered public Bitcoin miner:
              Austin HQ, Denton and Pecos data centers, Nasdaq ticker CORZ -
              and its shareholders rejected CoreWeave&apos;s $9 billion
              takeover on October 30, 2025, keeping it independent.
              <C n={6} /><C n={7} /><C n={8} />
            </li>
            <li>
              Riot (Rockdale, Corsicana), Cipher (Odessa, Barber Lake), Galaxy
              (Helios), and Bitdeer (Rockdale) run operating Texas sites as
              exchange-listed companies; MARA and Hut 8 hold announced Texas
              campuses.<C n={5} /><C n={9} /><C n={10} /><C n={11} />
              <C n={12} /><C n={13} />
            </li>
            <li>
              The Texas Stock Exchange began live trading in Dallas in July
              2026, with ETP listings targeted for September and corporate
              listings for October 2026.<C n={14} /><C n={15} />
            </li>
            <li>
              Austin&apos;s Multicoin Capital grew assets 56% in 2024 - but
              like all venture funds, it raises only from limited partners
              behind the SEC&apos;s accredited-investor gate.<C n={16} />
              <C n={17} />
            </li>
          </ul>
        </div>

        {/* The map itself */}
        <div className="mt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Every route, one table
          </h2>
          <div className="mt-4 space-y-4">
            {exposureRoutes.map((r) => (
              <div
                key={r.route}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold">{r.route}</p>
                  <span
                    className="rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide"
                    style={{
                      color: accessStyle[r.access].color,
                      borderColor: accessStyle[r.access].color,
                    }}
                  >
                    {accessStyle[r.access].label} · {r.accessLabel}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {r.what}{" "}
                  {r.sourceIds.map((id) => (
                    <C key={id} n={id} />
                  ))}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-2">
                  {r.caveat}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="prose-tx mt-10">
          <h2>What counts as &ldquo;the Texas Bitcoin economy&rdquo;?</h2>
          <p>
            Three layers, the same ones the front of this site documents. The
            asset - Bitcoin held or mined on Texas soil, including the
            state&apos;s own{" "}
            <Link href="/texas-strategic-bitcoin-reserve">reserve</Link>. The
            industry - the miners and infrastructure firms on{" "}
            <Link href="/bitcoin-mining-map-texas">the grid</Link>, most of
            them public companies. And the capital - the venture desks the{" "}
            <Link href="/texas-crypto-archive">archive</Link> records. Each
            layer has a different door, and the doors are not equally open.
          </p>

          <h2>Can you buy stock in Texas Bitcoin miners?</h2>
          <p>
            Yes - this is the most accessible Texas-specific route, and the
            one with the most texture. The pure Texas story is{" "}
            <strong>Core Scientific</strong>: headquartered in Austin, running
            data centers in Denton and Pecos, listed on Nasdaq as CORZ - and
            recently the subject of the sector&apos;s biggest test of
            conviction, when its shareholders rejected CoreWeave&apos;s $9
            billion all-stock takeover on October 30, 2025 and chose to stay
            independent.<C n={6} /><C n={7} /><C n={8} /> The largest
            operating footprints belong to <strong>Riot</strong> (Rockdale
            and Corsicana)<C n={5} />, <strong>Cipher</strong> (Odessa and
            Barber Lake)<C n={9} />, <strong>Galaxy</strong> (the Helios
            campus)<C n={13} />, and <strong>Bitdeer</strong> (Rockdale)
            <C n={12} />, with <strong>MARA</strong> and{" "}
            <strong>Hut 8</strong> holding announced campuses.<C n={10} />
            <C n={11} /> One honest caveat carries the whole list: a miner is
            a company, not a coin. You take on management, debt, power
            contracts, and dilution - and, increasingly, the AI rotation this
            site documents on the mining map, which means the Bitcoin share
            of each business is a moving number.
          </p>

          <h2>Is Bitcoin itself the purest exposure?</h2>
          <p>
            It is the base layer, and the state&apos;s own playbook is
            instructive: when the comptroller&apos;s office made the first
            state Bitcoin purchase in American history on November 20, 2025,
            it bought the iShares Bitcoin Trust - a spot ETF - as an explicit
            placeholder, then ran a procurement to convert the position into
            directly held, custodied Bitcoin.<C n={2} /><C n={3} /> ETF
            first, self-custody as the destination: that is the state&apos;s
            sequence, on the public record. What none of that gives you is
            anything Texas-specific - Bitcoin is Bitcoin everywhere. The
            Texas part of Bitcoin exposure is the company it keeps: the
            miners, the grid, and{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              the friendliest legal terrain in the country
            </Link>
            .
          </p>

          <h2>Can you invest in the Texas Strategic Bitcoin Reserve?</h2>
          <p>
            No - and the statute is precise about it. SB 21&apos;s enrolled
            text builds the reserve from legislative appropriations, revenue
            the legislature dedicates, purchases made with reserve money,
            forks and airdrops, and investment earnings. That is the whole
            list.<C n={1} /> A private-donation provision existed in earlier
            drafts and was stripped in conference committee<C n={18} /> - the
            donation-funded design belonged to a rival bill that{" "}
            <Link href="/texas-bitcoin-bills-that-died">died without a hearing</Link>.
            The reserve is the people of Texas&apos;s position, held by their
            comptroller, outside their treasury - there is no citizen share,
            and anyone selling you one is selling you something else.
          </p>

          <h2>Is there a Texas Bitcoin bond?</h2>
          <p>
            No. Texas state and municipal bonds are ordinary dollar
            obligations; none are linked to Bitcoin. If that instrument ever
            arrives, it will come through the legislature and show up in{" "}
            <Link href="/texas-bitcoin-law-timeline">the money law</Link>{" "}
            before it shows up in any brochure - which is the right order to
            trust.
          </p>

          <h2>What about the venture funds?</h2>
          <p>
            Austin&apos;s crypto venture story is real - Multicoin&apos;s
            assets grew 56% in 2024, among the best years of any crypto
            venture firm<C n={16} /> - but the door is narrow. Venture funds
            raise from limited partners: institutions and accredited
            investors, behind the SEC&apos;s income-and-net-worth gate, with
            high minimums and years-long lockups.<C n={17} /> No Austin
            crypto fund has a public ticker. The fuller story of that capital
            - who came, what they backed, where the theses rotated - is in{" "}
            <Link href="/texas-crypto-archive">the archive</Link>.
          </p>

          <h2>What is the Texas Stock Exchange?</h2>
          <p>
            The newest piece of the map is plumbing, not a position.{" "}
            <strong>TXSE</strong> - Dallas&apos;s national securities
            exchange, the first fully integrated one approved in decades -
            began live trading in July 2026, with ETP listings targeted for
            September and corporate listings for October.<C n={14} />
            <C n={15} /> It is not a Bitcoin venture, but it is the kind of
            homegrown market infrastructure the Texas exposure story may
            eventually run through - one to watch, not one to buy.
          </p>

          <h2>What this page is not</h2>
          <p>
            Advice. {site.name} is a research and reference publication - not
            a licensed advisor, broker, or exchange, and this page follows
            the same rule as{" "}
            <Link href="/texas-bitcoin-resources">the resources shelf</Link>:
            no exchange links, no broker links, no referral links, no
            recommendations. Bitcoin and mining equities are volatile and can
            lose value; private funds add illiquidity on top. The map shows
            you the doors. Whether to walk through any of them - how much,
            when, in what account - is a conversation for a licensed
            financial advisor who knows your situation.
          </p>

          <h2 id="faq">Frequently asked questions</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2 id="sources">Sources</h2>
          <p className="text-sm text-muted">
            Primary-first: the enrolled statute and state record, then company
            filings and official pages, then established press. Research and
            reference only - not financial, investment, legal, or tax advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {exposureSources.map((s) => (
              <li key={s.id} id={`r${s.id}`} className="scroll-mt-24">
                <span className="text-muted-2">[{s.id}]</span>{" "}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-soft underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </article>
    </>
  );
}
