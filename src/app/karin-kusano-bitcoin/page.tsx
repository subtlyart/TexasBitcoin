import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  KUSANO_LAST_VERIFIED,
  kusanoSources,
  kusanoTimeline,
  type KusanoTimelineKind,
} from "@/lib/kusano";

const pageUrl = `${site.url}/karin-kusano-bitcoin`;

export const metadata: Metadata = {
  title: "Karin Kusano: Teaching Self-Custody as Financial Sovereignty",
  description:
    "Karin Kusano's Bitcoin record, sourced and hedged: the Dallas-Fort Worth self-custody educator known as Cryptomommi who turned a lockout from conventional banking into a practice teaching cold storage and key ownership, chiefly to women and survivors. What the record confirms, what rests on her own account, and why a Bitcoin-centric site covers a self-custody teacher.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Karin Kusano: Teaching Self-Custody as Financial Sovereignty",
    description:
      "The self-custody educator of the builders wing: Cryptomommi's case that holding your own keys is a form of safety a bank account is not — and an honest accounting of what the record does and does not confirm.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Karin Kusano?",
    a: "Karin Kusano, known as 'Cryptomommi,' is a Dallas-Fort Worth-based digital-asset strategist and self-custody educator. She runs Cryptomommi, an education platform teaching cold storage and key ownership to everyday people, chiefly women and survivors, and describes herself as Texas Chapter President of the Association for Women in Cryptocurrency. Her entry point, by her account, was losing access to conventional banking and finding that cryptocurrency held in self-custody could not be frozen or withheld.",
  },
  {
    q: "Why does a Bitcoin-centric site cover a crypto educator?",
    a: "Because the part of her work that matters here is self-custody and financial sovereignty — holding your own keys, cold storage, and the idea that no intermediary can freeze what you alone control. Those are Bitcoin base-layer principles, the same ones this site is built on. Her broader digital-asset, DeFi, and AI work sits outside the site's Bitcoin thesis, and this page says so rather than folding it in.",
  },
  {
    q: "Was Karin Kusano really 'the first female retail crypto trader honored' at NASDAQ?",
    a: "That line appears on her own site and in her introductions, but it is not tied to a primary record this site could locate, so we carry it as her account rather than established fact. The same caution applies to her stated U.S. Congress involvement, which reads as advocacy outreach — sharing how self-custody changes lives — rather than formal testimony.",
  },
  {
    q: "What is Karin Kusano's connection to Texas?",
    a: "She is based in the Dallas-Fort Worth metroplex and presents herself as the Texas chapter lead of the Association for Women in Cryptocurrency. Her public work is education and advocacy rather than Texas legislation or mining; she has not, on the record here, engaged a specific Texas Bitcoin bill the way Parker Lewis or Lee Bratcher did.",
  },
  {
    q: "What is the honest counterweight on Karin Kusano?",
    a: "Her record is substantially self-reported: the NASDAQ 'first,' the Congress line, and even the Texas chapter title rest on her own site rather than a primary source, and the Association for Women in Cryptocurrency's own page names neither a Texas chapter nor her. Her practice also ranges well beyond Bitcoin into DeFi, prediction markets, and AI trading — the generic 'crypto' territory this site does not cover.",
  },
];

const kindStyle: Record<KusanoTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  teach: { color: "var(--accent)", label: "The platform" },
  advocacy: { color: "#8a7fb5", label: "Advocacy" },
  claim: { color: "#c98a4e", label: "Her account" },
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
// One figure - the ledger of what the record confirms versus what rests on
// Kusano's own account - drawn from the dated, sourced facts on this page
// (Oct 2026). Server-rendered SVG, no client JS. The honesty is the point.
function KusanoLedgerFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 280" role="img" aria-label="The Cryptomommi ledger: three claims and how well the record supports each">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE CRYPTOMOMMI LEDGER · WHAT THE RECORD CONFIRMS, AND WHAT RESTS ON HER ACCOUNT</text>
<rect x="28" y="48" width="754" height="56" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
<rect x="28" y="48" width="6" height="56" rx="3" fill="var(--accent)"/>
<text x="48" y="68" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Self-custody educator, on a public stage</text>
<text x="48" y="86" fontSize="10" fill="var(--muted-2)">Eve Wealth Summit, Phoenix, April 21, 2026 · &ldquo;Crypto Market Strategist, Cryptomommi&rdquo;</text>
<text x="766" y="77" fontSize="10.5" fontWeight="600" textAnchor="end" fill="var(--accent)">confirmed · independently dated listing</text>
<rect x="28" y="114" width="754" height="56" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
<rect x="28" y="114" width="6" height="56" rx="3" fill="#8a7fb5"/>
<text x="48" y="134" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Texas Chapter President, Women in Cryptocurrency</text>
<text x="48" y="152" fontSize="10" fill="var(--muted-2)">her title, on her site · the association lists regional ambassadors, not state chapters</text>
<text x="766" y="143" fontSize="10.5" fontWeight="600" textAnchor="end" fill="#8a7fb5">self-reported · not on the org&apos;s page</text>
<rect x="28" y="180" width="754" height="56" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
<rect x="28" y="180" width="6" height="56" rx="3" fill="#c98a4e"/>
<text x="48" y="200" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">&ldquo;First female retail crypto trader honored&rdquo; · NASDAQ; U.S. Congress</text>
<text x="48" y="218" fontSize="10" fill="var(--muted-2)">recurring lines in her introductions · the Congress item reads as outreach, not testimony</text>
<text x="766" y="209" fontSize="10.5" fontWeight="600" textAnchor="end" fill="#c98a4e">her account · no primary record located</text>
<text x="405" y="270" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">karinkusano.com; womenincrypto.org; Eve Wealth Summit (Luma) · the site carries each claim at the weight the record gives it</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The ledger. One line is independently confirmed, one rests on her own
        site against an association that lists no state chapters, and one — the
        NASDAQ &ldquo;first&rdquo; and the congressional line — has no primary
        record this site could find. That is not a verdict on the person; it is
        the standard the rest of the site is held to, applied here in the open.
      </figcaption>
    </figure>
  );
}

// people-figs:end
export default function KarinKusanoBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Karin Kusano: Teaching Self-Custody as Financial Sovereignty",
    description:
      "The Bitcoin-relevant record of the Dallas-Fort Worth self-custody educator known as Cryptomommi: the lockout that led her to key ownership, the Cryptomommi education platform, her women-in-crypto advocacy, and an honest accounting of the claims the record cannot yet confirm.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-10-04",
    dateModified: "2026-10-04",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Thing", name: "Self-custody" },
      { "@type": "Person", name: "Karin Kusano" },
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
        name: "Karin Kusano and Bitcoin",
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
          dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
        />
      ))}

      <article className="mx-auto max-w-4xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / Karin Kusano &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The builders
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Karin Kusano: Teaching Self-Custody as Financial Sovereignty
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Jimmy Song teaches engineers to build Bitcoin and Parker Lewis
            wrote the case for why it is money. Karin Kusano &ndash; the
            Dallas-Fort Worth educator who goes by Cryptomommi &ndash; works
            the human end of the same principle: that holding your own keys is
            a form of safety a bank account is not. By her account she learned
            it the hard way, locked out of conventional finance, and now
            teaches cold storage and self-custody to people the system failed.
            It is a genuine Bitcoin-base-layer message &ndash; and her record,
            unlike the rest of this wing, is one this site has to hedge.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published October 4, 2026 · Updated{" "}
            {KUSANO_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Karin Kusano, known as &ldquo;Cryptomommi,&rdquo; is a Dallas-Fort
            Worth self-custody educator and digital-asset strategist. She runs
            the Cryptomommi education platform &ndash; a site, a YouTube
            channel, and a Substack &ndash; teaching cold storage and key
            ownership chiefly to women and survivors, and presents herself as
            Texas Chapter President of the Association for Women in
            Cryptocurrency. Her Bitcoin-relevant message is self-custody as
            financial sovereignty. Much of her stated record, including a
            NASDAQ &ldquo;first&rdquo; and congressional involvement, is
            self-reported and not independently confirmed here.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Kusano teaches self-custody and cold storage through Cryptomommi,
              describing financial sovereignty as &ldquo;safety, dignity, and
              freedom.&rdquo;<C n={1} /><C n={2} />
            </li>
            <li>
              She presents herself as Texas Chapter President of the
              Association for Women in Cryptocurrency, the global group founded
              by former federal prosecutor Amanda Wick.<C n={1} /><C n={6} />
            </li>
            <li>
              She spoke at the Eve Wealth Annual Summit in Phoenix on April 21,
              2026, billed as &ldquo;Crypto Market Strategist,
              Cryptomommi.&rdquo;<C n={7} />
            </li>
            <li>
              Her site lists SXSW, Money 20/20, BTC Vegas, and Fast Company
              among her stages, without firm dates on the page.<C n={1} />
            </li>
            <li>
              Her &ldquo;first female retail crypto trader honored&rdquo; at
              NASDAQ line and her U.S. Congress involvement are self-reported
              and not tied to a primary record here.<C n={1} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From a lockout to a lectern
            </h2>
            <span className="text-xs text-muted-2">the arc</span>
          </div>
          <ol className="mt-5 space-y-4">
            {kusanoTimeline.map((e) => {
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
          <h2>Who is Karin Kusano, and why does a Texas Bitcoin site cover her?</h2>
          <p>
            Because the builders wing has room for the teacher who starts
            where most people actually start: not with a block header or a
            monetary thesis, but with the fear of losing access to their own
            money. The two teachers already here come at Bitcoin from the top
            down &ndash; <Link href="/jimmy-song-bitcoin">Jimmy Song</Link>{" "}
            makes an engineer build a transaction from a blank file, and{" "}
            <Link href="/parker-lewis-bitcoin">Parker Lewis</Link> makes a
            finance professional understand why the supply is fixed. Kusano
            comes at it from the bottom up. By her own account she lost access
            to conventional banking and discovered that cryptocurrency held in
            self-custody was the one asset no one could freeze or withhold; the
            lesson she drew &ndash; that holding your own keys is a form of
            safety a bank account is not &ndash; is the lesson she now
            teaches.<C n={1} />
          </p>
          <p>
            That lesson is Bitcoin at the base layer. Self-custody,
            proof of ownership without a custodian, and the refusal to let an
            intermediary stand between a person and their savings are the
            principles the <Link href="/history-of-bitcoin-in-texas">history of Bitcoin in Texas</Link>{" "}
            is written around. Kusano&apos;s register is survivor advocacy and
            plain-language literacy &ndash; cold storage, seed-phrase hygiene,
            &ldquo;financial sovereignty is a human right&rdquo; &ndash;
            delivered through Cryptomommi, &ldquo;where Karin turns complex
            crypto, blockchain, and self-custody concepts into practical and
            actionable financial concepts.&rdquo;<C n={2} /><C n={4} />
            <C n={5} />
          </p>

          <h2>What does Kusano actually do, and where is it on the record?</h2>
          <p>
            The confirmable part is the teaching and the stage. Cryptomommi
            runs as a site, a YouTube channel, and a Substack, all pointed at
            the same audience: people &ndash; often women, often survivors of
            financial coercion &ndash; who were never the target market for a
            hardware wallet.<C n={2} /><C n={4} /><C n={5} /> She turns up on
            conference stages framed around access: the one with a firm,
            independently published date is the Eve Wealth Annual Summit in
            Phoenix, where on April 21, 2026 she spoke in a session called
            &ldquo;Crypto Changed Everything,&rdquo; billed as &ldquo;Crypto
            Market Strategist, Cryptomommi.&rdquo;<C n={7} /> Her own site adds
            SXSW, Money 20/20, BTC Vegas, and Fast Company to the wall, though
            the page carries no dates for them.<C n={1} />
          </p>
          <p>
            The advocacy is where the record thins. Kusano presents herself as
            Texas Chapter President of the Association for Women in
            Cryptocurrency, the global education-and-advocacy group founded by
            former federal prosecutor Amanda Wick, which by its own account
            reached more than 750 members across 22 countries.<C n={1} />
            <C n={6} /> But the
            association&apos;s own page describes regional ambassadors rather
            than state chapters and does not name her, so the title rests on
            her account rather than the organization&apos;s. The pattern &ndash;
            a real and sympathetic mission, stated by its subject, ahead of the
            paper trail &ndash; is the one this page has to handle carefully.
          </p>

          <KusanoLedgerFigure />

          <h2>The honest counterweight: a thin, self-reported record</h2>
          <p>
            This site&apos;s standard is that every datable claim is cited to a
            primary source, and where the record cuts against the story the
            page says so. Held to that standard, the Kusano record is the
            weakest in the builders wing &ndash; not because the mission is
            doubtful but because the evidence is mostly her own. Two lines in
            particular travel with her: that she was &ldquo;the first female
            retail crypto trader honored&rdquo; at NASDAQ, and that she has
            taken the message to U.S. lawmakers. Neither is tied to a primary
            record this site could locate; the congressional line reads as
            advocacy outreach, not testimony, and the NASDAQ &ldquo;first&rdquo;
            is the kind of superlative that a primary source would settle and
            none here does.<C n={1} /> We carry both as her account.
          </p>
          <p>
            The second counterweight is one of scope. Kusano&apos;s practice
            ranges well beyond Bitcoin &ndash; digital-asset strategy
            generally, decentralized exchanges, prediction markets, AI trading
            &ndash; which is the generic multi-chain territory this site does
            not cover.<C n={1} /><C n={3} /> The reason she belongs here anyway
            is narrow and real: the self-custody and financial-sovereignty
            thread is Bitcoin&apos;s own, and a teacher who carries it to people
            the financial system locked out is doing base-layer work whatever
            else sits on her business card. The page keeps the thread and
            leaves the rest where it belongs.
          </p>

          <h2>Where does the Kusano record stand today?</h2>
          <p>
            As of October 2026: an active self-custody educator and speaker
            working the access-and-sovereignty beat from the Dallas-Fort Worth
            area, with a confirmed 2026 summit stage, a stated Texas role in a
            women-in-crypto association, and a set of headline claims the record
            has not yet caught up to.<C n={1} /><C n={7} /> The engineer of the
            builders wing is on{" "}
            <Link href="/jimmy-song-bitcoin">Jimmy Song and Bitcoin</Link>, the
            essayist on{" "}
            <Link href="/parker-lewis-bitcoin">Parker Lewis and Bitcoin</Link>,
            and the organizer who built the state&apos;s advocacy apparatus on{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher and Bitcoin</Link>.
            Kusano is the wing&apos;s teacher of the first and most personal
            lesson: your keys, your coins, your way out.
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
            This record is substantially self-reported: Kusano&apos;s own site
            and platforms carry most of it, the Association for Women in
            Cryptocurrency is cited for what the organization is, and the Eve
            Wealth Summit listing is the one independently dated engagement.
            Claims that could not be tied to a primary source are marked as her
            account on the page. This is a research and reference article, not
            financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {kusanoSources.map((s) => (
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
