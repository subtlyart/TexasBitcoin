import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  CRUZ_LAST_VERIFIED,
  cruzSources,
  cruzTimeline,
  type CruzTimelineKind,
} from "@/lib/cruz";

const pageUrl = `${site.url}/ted-cruz-bitcoin`;

export const metadata: Metadata = {
  title: "Ted Cruz and Bitcoin: From Skeptic to the Senate's Loudest Champion",
  description:
    "Did Ted Cruz fall out of Bitcoin, or sell out? The sourced record: the self-described skeptic, the August 2021 infrastructure-bill floor fight, his disclosed bitcoin purchases, the CBDC ban that became law July 11, 2026 - and the industry money that followed.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Ted Cruz and Bitcoin: From Skeptic to the Senate's Loudest Champion",
    description:
      "Ted Cruz admits he 'didn't understand' bitcoin, leads the 2021 floor fight, buys up to $150,000 of it, chairs the Commerce Committee, and pushes the CBDC ban into law - then votes no because it isn't permanent. The sourced arc, kept honest about the money.",
    url: pageUrl,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Did Ted Cruz sell out on Bitcoin?",
    a: "There is no record of a reversal. Ted Cruz went from admitting he 'didn't understand' bitcoin to chairing the Senate Commerce Committee and pushing the CBDC ban that became law on July 11, 2026. The fair criticism is that crypto-linked donors and PACs backed his 2024 reelection - but those contributions followed positions he had already taken, starting with his August 2021 floor fight.",
  },
  {
    q: "Does Ted Cruz own Bitcoin?",
    a: "Yes. Senate financial disclosures show Ted Cruz bought between $15,001 and $50,000 of bitcoin through the brokerage River on January 25, 2022, and disclosed another $50,001 to $100,000 in purchases in 2023. Trade press described him as a bitcoin investor who purchases BTC on a weekly basis.",
  },
  {
    q: "Why did Ted Cruz become a Bitcoin supporter?",
    a: "Ted Cruz frames his conversion in three terms: freedom (bitcoin is decentralized and cannot be switched off by a government), Texas energy economics (mining can use the Permian's flared gas and act as interruptible demand response for the grid), and geopolitics (China banned mining, and he argued Washington should not hand the industry to Beijing).",
  },
  {
    q: "What did Ted Cruz do about the CBDC?",
    a: "Ted Cruz introduced Senate legislation to ban a retail central bank digital currency in March 2022, reintroduced it in 2023, and again as the CBDC Anti-Surveillance State Act (S. 3801) in February 2024. A four-year version of that ban became law on July 11, 2026, inside the 21st Century ROAD to Housing Act - and Cruz voted against the package because the ban was not permanent.",
  },
  {
    q: "How much did the crypto industry spend on Ted Cruz's 2024 race?",
    a: "Ted Cruz's 2024 race against Colin Allred was the most expensive Senate race ever, with over $192 million raised by the candidates alone. Crypto-linked support included a $350,000 contribution from the Jeff Yass-funded Bitcoin Freedom PAC to a pro-Cruz super PAC and $3,300 individual maximums from Coinbase's Brian Armstrong and the Winklevoss twins.",
  },
  {
    q: "Where does Ted Cruz stand on Bitcoin today?",
    a: "As of August 2026, Ted Cruz chairs the Senate Committee on Commerce, Science, and Transportation, holds a CBDC ban on the books through December 31, 2030, has the FLARE Act (full expensing for flared-gas bitcoin mining) pending in the Finance Committee, and sits at the center of the CLARITY Act market-structure negotiation, with a cloture vote scheduled for September 15, 2026.",
  },
];

const kindStyle: Record<CruzTimelineKind, { color: string; label: string }> = {
  origin: { color: "var(--star)", label: "The skeptic" },
  fight: { color: "var(--accent)", label: "The fight" },
  skin: { color: "#c98a4e", label: "Skin in the game" },
  power: { color: "#7a9e6a", label: "The gavel" },
  law: { color: "#8a7fb5", label: "The law" },
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

export default function TedCruzBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Ted Cruz and Bitcoin: From Skeptic to the Senate's Loudest Champion",
    description:
      "Did Ted Cruz fall out of Bitcoin, or sell out? The sourced record: the self-described skeptic, the August 2021 infrastructure-bill floor fight, his disclosed bitcoin purchases, the CBDC ban that became law July 11, 2026 - and the industry money that followed.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-28",
    dateModified: "2026-09-01",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Ted Cruz" },
      { "@type": "Thing", name: "Central bank digital currency" },
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
        name: "Ted Cruz and Bitcoin",
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
          / Ted Cruz &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · Washington &amp; the base layer
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Ted Cruz and Bitcoin: From Skeptic to the Senate&apos;s Loudest
            Champion
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The question arrives in every comment section: did Ted Cruz fall out
            of Bitcoin, or did he sell out? The sourced record answers the
            opposite way he&apos;s assumed to have moved. Cruz went from a
            senator who admitted he &ldquo;didn&apos;t understand&rdquo; the
            coin to the committee chairman who put a CBDC ban on the books -
            and then voted against his own victory because it wasn&apos;t
            permanent enough. This page keeps the whole arc, including the
            money.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 28, 2026 · Updated{" "}
            {CRUZ_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Ted Cruz did not fall out of Bitcoin. He went from self-described
            skeptic - &ldquo;I didn&apos;t understand it very much&rdquo; - to
            one of the Senate&apos;s loudest Bitcoin champions: he disclosed up
            to $150,000 in bitcoin purchases, chairs the Senate Commerce
            Committee, and pushed the central-bank-digital-currency ban that
            became law on July 11, 2026. Crypto-industry money backed his 2024
            reelection, but it followed positions he had already taken.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Ted Cruz bought between $15,001 and $50,000 of bitcoin through
              the brokerage River on January 25, 2022, in a market dip, per a
              Senate financial disclosure.<C n={13} /><C n={14} /><C n={15} />
            </li>
            <li>
              On August 9, 2021, Cruz told the Senate that of 100 senators,
              &ldquo;you would not get greater than five who could&rdquo;
              define a cryptocurrency, and his amendment to strike crypto
              provisions from the infrastructure bill failed by a single
              objection.<C n={1} /><C n={9} />
            </li>
            <li>
              Cruz disclosed another $50,001 to $100,000 in bitcoin purchases
              made in 2023, and trade press described him as a bitcoin investor
              who buys weekly.<C n={16} /><C n={22} />
            </li>
            <li>
              Cruz introduced the CBDC Anti-Surveillance State Act (S. 3801) on
              February 26, 2024, the third version of his Senate bill banning a
              retail digital dollar.<C n={4} />
            </li>
            <li>
              A four-year CBDC ban became law on July 11, 2026, as Section 1101
              of Public Law 119-101 - and Cruz voted against the housing
              package carrying it because the ban was not permanent.<C n={6} />
              <C n={25} /><C n={3} />
            </li>
            <li>
              Cruz became Chairman of the Senate Committee on Commerce,
              Science, and Transportation in January 2025, giving him
              jurisdiction over digital-asset market structure.<C n={8} />
            </li>
          </ul>
        </div>

        {/* Timeline — the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              The arc, in order
            </h2>
            <span className="text-xs text-muted-2">2021 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {cruzTimeline.map((e) => {
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
          <h2>Did Ted Cruz fall out of Bitcoin?</h2>
          <p>
            No - and that is the surprising part of the record, because Cruz
            started from open skepticism. At the Texas Blockchain Summit in
            Austin on October 8, 2021, he described his own starting point
            without spin: he had known bitcoin existed because a friend
            invested in it, but he &ldquo;didn&apos;t understand it very
            much,&rdquo; and he joked that Peter Thiel - a major backer of his
            2012 presidential run and an early Bitcoin investor - never told
            him about it.<C n={26} /> The questioner was Austin Bitcoin
            educator{" "}
            <Link href="/jimmy-song-bitcoin">Jimmy Song</Link>, whose own
            record is on this site. Five years later the same senator chairs
            the committee that oversees digital-asset market structure, holds a
            CBDC ban on the books, and discloses six figures of bitcoin in
            personal holdings.<C n={8} /><C n={25} /> There is no reversal in
            between - only acceleration.
          </p>
          <p>
            The &ldquo;sell out&rdquo; question gets its own section below,
            because it deserves the honest treatment rather than a wave-off.
            But the directional claim stands on the primary record: Cruz&apos;s
            public positions on Bitcoin hardened <em>before</em> the industry
            money arrived in his races, and every legislative move since has
            pushed in the same direction.
          </p>

          <h2>What turned Ted Cruz into a Bitcoin advocate?</h2>
          <p>
            The conversion was legislative, not speculative. In August 2021 the
            $1.2 trillion infrastructure bill carried a provision - aimed at
            raising an estimated $28 billion - that would have treated broad
            swaths of the crypto economy as tax-reporting &ldquo;brokers.&rdquo;
            Cruz took the Senate floor on August 9, 2021, offered an amendment
            to strike it, and delivered the line that went viral: &ldquo;if we
            gathered all 100 senators in this chamber and asked them to stand
            up and articulate two sentences defining what in the hell a
            cryptocurrency is, that you would not get greater than five who
            could answer that question.&rdquo;<C n={1} /><C n={21} /> His
            amendment failed on a single objection, the bill advanced
            unamended, and Cruz walked out of that fight as the industry&apos;s
            most visible Senate defender.<C n={9} />
          </p>
          <p>
            His stated motivations since then run in three strands. The first
            is freedom: bitcoin is decentralized, and Cruz argues Washington
            should not regulate - or ban - what it cannot control. The second
            is Texas energy economics: he points out that half of the natural
            gas flared in America is flared in the Permian Basin, and that
            bitcoin mining can turn that waste into power while acting as
            interruptible load that hands energy back to the grid in a
            crisis.<C n={12} /><C n={11} /> The third is geopolitics: China
            banned mining in 2021, and Cruz warned that over-regulation would
            make Washington &ldquo;the number one economic developer for the
            Communist Party of China.&rdquo;<C n={1} /> All three strands land
            in Texas, which is why Cruz told the same summit he wanted the
            state to be &ldquo;the center of the universe for bitcoin and
            crypto.&rdquo;<C n={10} />
          </p>

          <h2>Does Ted Cruz own Bitcoin?</h2>
          <p>
            Yes, and the disclosures are specific. Cruz bought between $15,001
            and $50,000 of bitcoin on January 25, 2022 - a market dip, timed
            like a trader&apos;s entry - paying through the bitcoin brokerage
            River, according to the Senate financial disclosure first reported
            in early February 2022.<C n={13} /><C n={15} /> In 2023 he disclosed
            another $50,001 to $100,000 in purchases made that year.<C n={16} />{" "}
            By March 2023, trade press was describing Cruz as &ldquo;a bitcoin
            investor who purchases $BTC on a weekly basis.&rdquo;<C n={22} />{" "}
            The purchases matter for one reason: they show the advocacy is
            backed by the senator&apos;s own treasury, not just his speeches.
          </p>

          <h2>What has Ted Cruz done for Bitcoin in the Senate?</h2>
          <p>
            Three items carry the record. First, the CBDC crusade: Cruz
            introduced Senate legislation to prohibit a direct-to-consumer
            central bank digital currency in March 2022, reintroduced it in
            March 2023, and filed it a third time as the CBDC
            Anti-Surveillance State Act (S. 3801) on February 26, 2024, calling
            a CBDC a potential &ldquo;financial surveillance tool.&rdquo;
            <C n={22} /><C n={4} /> Second, the FLARE Act (S. 1188), introduced
            March 27, 2025: permanent full expensing for equipment that
            captures natural gas otherwise flared or vented - pitched squarely
            at bitcoin miners and barred to entities owned by China, Iran,
            North Korea, or Russia. &ldquo;I am committed to making Texas the
            number one place for Bitcoin mining,&rdquo; Cruz said at
            introduction.<C n={5} /><C n={2} /> Third, the gavel itself: in
            January 2025 the Republican Conference ratified Cruz as Chairman of
            Commerce, Science, and Transportation, the committee with
            jurisdiction over digital-asset market structure.<C n={8} />
          </p>
          <p>
            The CBDC fight crossed the finish line in a strange way. A
            four-year ban on a Federal Reserve digital dollar - through
            December 31, 2030 - became law on July 11, 2026, as Section 1101 of
            the 21st Century ROAD to Housing Act, adding a new section 16A to
            the Federal Reserve Act. The package cleared the Senate 85-5 and
            the House 358-32 and lapsed into law without the president&apos;s
            signature.<C n={6} /><C n={25} /> Cruz voted <em>against</em> the
            package carrying his own priority - because the ban was only four
            years, not permanent.<C n={3} /> It is the most revealing vote in
            the whole arc: a senator turning down his own win on principle.
          </p>

          <h2>The honest counterweight: the money question</h2>
          <p>
            The strongest criticism of Cruz&apos;s Bitcoin record is not that
            he reversed himself - the record shows no reversal - but that the
            industry pays for access to a true believer. His 2024 race against
            Colin Allred was the most expensive Senate race in history, with
            over $192 million raised by the candidates alone.<C n={19} />
            Crypto-linked money was part of that tide: the Bitcoin Freedom PAC,
            funded with $3.9 million from trading-firm founder Jeff Yass,
            contributed $350,000 to a pro-Cruz super PAC; Coinbase chief Brian
            Armstrong and the Winklevoss twins each gave the $3,300 individual
            maximum.<C n={17} /><C n={18} />
          </p>
          <p>
            The sequencing is what separates scrutiny from a hit job. Cruz led
            the infrastructure-bill floor fight in August 2021, disclosed his
            first bitcoin purchase in January 2022, and filed his CBDC ban in
            2022-2024 - all before the 2024 PAC money arrived. What the money
            bought was reinforcement, not conversion. Whether a senator whose
            donors are the industry should also chair the committee regulating
            it is a fair question for voters; pretending Cruz flipped his
            position for it is not supported by the dates.
          </p>

          <h2>Where does Ted Cruz stand on Bitcoin today?</h2>
          <p>
            As of August 2026: Cruz chairs the Senate Commerce Committee; a
            four-year CBDC ban he spent four years pushing is on the books
            through 2030; his FLARE Act awaits action in the Finance Committee;
            and the next showdown is scheduled - a September 15, 2026 cloture
            vote on the CLARITY Act, the market-structure bill that passed the
            House 294-134 in July 2025, with Forbes noting that the 2021
            infrastructure standoff Cruz starred in is the cautionary precedent
            hanging over it.<C n={24} /> The skeptic of 2021 now sets the terms
            of the fight.
          </p>
          <p>
            The Texas end of the arc is physical rather than legislative: the
            mines that Cruz&apos;s energy thesis describes are real places,
            none more so than the Rockdale facility that rose on the bones of
            the old Alcoa plant, told in{" "}
            <Link href="/rockdale-texas-bitcoin">the Rockdale story</Link>, and
            the grid relationship behind them runs through the mining
            migration chronicled in{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            . Cruz&apos;s record is the Washington counterpart to that story -
            the seam where the state&apos;s energy base layer meets federal
            law - and its Austin counterpart is the governor who signed every
            piece of it, told in{" "}
            <Link href="/greg-abbott-bitcoin">Greg Abbott and Bitcoin</Link>.
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
            Primary record first: Cruz&apos;s own office and the congressional
            record for the floor fight, the bills, the chairmanship, and the
            votes; Senate financial disclosures as reported by reputable outlets
            for the purchases; FEC-tracked reporting for the 2024 money; and
            the primary video of Cruz&apos;s own words. This is a research and
            reference article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {cruzSources.map((s) => (
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
