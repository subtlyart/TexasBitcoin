import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  LEWIS_LAST_VERIFIED,
  lewisSources,
  lewisTimeline,
  type LewisTimelineKind,
} from "@/lib/lewis";

const pageUrl = `${site.url}/parker-lewis-bitcoin`;

export const metadata: Metadata = {
  title: "Parker Lewis: The Man Who Wrote Why Bitcoin Is Money",
  description:
    "Parker Lewis's Bitcoin record, sourced: the Deutsche Bank and Hayman Capital analyst who wrote the seventeen 'Gradually, Then Suddenly' essays from Unchained's Austin office (July 2019 to December 2020), published them as a book in 2023, wrote to Senator Kolkhorst against SB 1751, moved to Zaprite to work on payments, and stewards the Bitcoin Commons and the off-SXSW Bitcoin Takeover. The essays, the room, and the honest counterweight.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Parker Lewis: The Man Who Wrote Why Bitcoin Is Money",
    description:
      "Jimmy Song taught Austin how to build Bitcoin. Parker Lewis wrote the seventeen essays that tell everyone else why it is money, then built the room where the city's builders meet.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Parker Lewis?",
    a: "Parker Lewis is an Austin-based Bitcoin writer and operator, the author of the 'Gradually, Then Suddenly' essay series and the 2023 book of the same name. A Deutsche Bank analyst through the 2008 crisis and later an associate at Kyle Bass's Hayman Capital in Dallas, he found Bitcoin in 2016, joined the Austin lender Unchained Capital as Head of Business Development in September 2018, stepped back in November 2022, and since August 2023 has been Head of Business Development at Zaprite, an Austin bitcoin-payments company. He is a steward of the Bitcoin Commons and an organizer of the annual Bitcoin Takeover.",
  },
  {
    q: "What is 'Gradually, Then Suddenly'?",
    a: "A series of seventeen essays Lewis published on Unchained's blog between July 26, 2019 and December 19, 2020, each a first principle or a rebuttal: Bitcoin Can't Be Copied, Bitcoin Does Not Waste Energy, Bitcoin Is Not Backed by Nothing, Bitcoin Obsoletes All Other Money, Bitcoin Is the Great Definancialization. The title describes how fiat currencies fail and how people come to understand Bitcoin. The Saif House published the essays as a hardcover in November 2023, and the Satoshi Nakamoto Institute carries the web edition.",
  },
  {
    q: "What is Parker Lewis's connection to Texas?",
    a: "He is a Texan who describes himself as 'Texas hedged,' and his entire Bitcoin career has run through the state: the Dallas hedge fund where he found it, the Austin lender where he wrote the essays, the Austin payments company where he works now, the Old Parkland campus in Dallas where he gives his major talks, and the Bitcoin Commons on Congress Avenue that he helps steward. In April 2023 he and Will Cole wrote an open letter to Senator Lois Kolkhorst opposing SB 1751, the bill that would have capped miners' role in ERCOT demand-response programs.",
  },
  {
    q: "What is the Bitcoin Commons?",
    a: "A coworking and gathering space for Bitcoin builders on the second floor of the Littlefield Building at Congress Avenue and Sixth Street in Austin, described by CNBC in March 2024 as a daytime office for operators and a nighttime venue for developer meetups, BitDevs, and hackathons, with funding for open-source developers underneath. Lewis is one of its stewards. It hosts the Bitcoin Takeover, the off-SXSW event he organizes each March, which in 2026 ran March 12 and 13 with Bitcoin Park under the theme 'Power of Payments.'",
  },
  {
    q: "What is the strongest criticism of Parker Lewis's work?",
    a: "That the case is made in the register of inevitability rather than probability, and that the closing essay's thesis of 'definancialization' was written from inside a lender whose business is bitcoin-backed loans, which passed $1 billion in originations in July 2025. Sympathetic readers such as Myles Snider have noted the tension: Bitcoin may definancialize savings while the industry around it financializes everything else. Lewis's own 'Texas hedge' essay concedes the position is concentrated by design.",
  },
];

const kindStyle: Record<LewisTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  essay: { color: "var(--accent)", label: "The essays" },
  room: { color: "#8a7fb5", label: "The room" },
  fight: { color: "#c98a4e", label: "The argument" },
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
function LewisSeriesFigure() {
  // Seventeen essays, July 26, 2019 → December 19, 2020, as a strip: one
  // tick per essay on a 513-day axis (SNI dates). The cadence is the point.
  const days = [0, 7, 14, 21, 28, 35, 42, 63, 84, 105, 126, 182, 244, 280, 398, 512];
  const x0 = 60, x1 = 750;
  const span = 512;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="Sixteen essay publication dates from July 2019 to December 2020 as ticks on a timeline, plus three count tiles">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE SERIES · SEVENTEEN ESSAYS, EIGHTEEN MONTHS, ONE LENDER’S BLOG</text>
<line x1={x0} y1="96" x2={x1} y2="96" stroke="var(--border)" strokeWidth="1.5"/>
{days.map((d, i) => {
  const x = x0 + (d / span) * (x1 - x0);
  const tall = i === 0 || i === days.length - 1;
  return (
    <g key={d}>
      <line x1={x} y1={tall ? 74 : 84} x2={x} y2={tall ? 118 : 108} stroke={i < 7 ? "var(--accent)" : "var(--star)"} strokeWidth="2.25" strokeLinecap="round"/>
    </g>
  );
})}
<text x={x0} y="66" fontSize="10" fontWeight="600" fill="var(--accent)">Jul 26, 2019</text>
<text x={x1} y="66" fontSize="10" fontWeight="600" textAnchor="end" fill="var(--star)">Dec 19, 2020</text>
<text x={x0 + (42 / span) * (x1 - x0) / 2} y="134" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">seven essays in seven weeks</text>
<text x={x0 + (280 / span) * (x1 - x0)} y="134" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Obsoletes All Other Money · Rally Cry · Common Sense</text>
<text x={x1} y="134" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">Great Definancialization</text>
<rect x="60" y="156" width="210" height="62" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="165" y="183" fontSize="24" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">17</text>
<text x="165" y="205" fontSize="9.5" letterSpacing="1.2" textAnchor="middle" fill="var(--accent)">ESSAYS · 2019–2020</text>
<rect x="300" y="156" width="210" height="62" rx="10" fill="var(--surface-2)" stroke="var(--star)" strokeWidth="1.25"/>
<text x="405" y="183" fontSize="24" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">1 book</text>
<text x="405" y="205" fontSize="9.5" letterSpacing="1.2" textAnchor="middle" fill="var(--star)">THE SAIF HOUSE · NOV 2023</text>
<rect x="540" y="156" width="210" height="62" rx="10" fill="var(--surface-2)" stroke="#8a7fb5" strokeWidth="1.25"/>
<text x="645" y="183" fontSize="24" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">1 letter</text>
<text x="645" y="205" fontSize="9.5" letterSpacing="1.2" textAnchor="middle" fill="#8a7fb5">TO SEN. KOLKHORST · APR 7, 2023</text>
<text x="405" y="240" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Satoshi Nakamoto Institute dates; The Saif House; graduallythensuddenly.xyz · the cadence, not the volume, is the tell</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The series, on a clock. Seven essays in seven weeks from July 2019, then the long-form pieces spaced across 2020, closing on the Great Definancialization – sixteen carry dates at the Satoshi Nakamoto Institute; Lewis counts seventeen. One book and one open letter to the Texas Senate followed. The record is small enough to read in a weekend and has been read that way by a great many people.
      </figcaption>
    </figure>
  );
}

function LewisLedgerFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 280" role="img" aria-label="The essayist's ledger: three claims and what the record says about each">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE ESSAYIST’S LEDGER · THREE CLAIMS, AND WHAT THE RECORD SAYS</text>
<rect x="28" y="48" width="754" height="56" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
<rect x="28" y="48" width="6" height="56" rx="3" fill="var(--accent)"/>
<text x="48" y="68" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">“Bitcoin is the Great Definancialization”</text>
<text x="48" y="86" fontSize="10" fill="var(--muted-2)">the closing essay, December 19, 2020, on a lender&apos;s blog</text>
<text x="766" y="77" fontSize="10.5" fontWeight="600" textAnchor="end" fill="var(--accent)">that lender passed $1B in bitcoin-backed loans · July 2025</text>
<rect x="28" y="114" width="754" height="56" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
<rect x="28" y="114" width="6" height="56" rx="3" fill="var(--star)"/>
<text x="48" y="134" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">“Bitcoin obsoletes all other money”</text>
<text x="48" y="152" fontSize="10" fill="var(--muted-2)">the register of inevitability, January 2020 → “Greatest Asymmetry,” December 2025</text>
<text x="766" y="143" fontSize="10.5" fontWeight="600" textAnchor="end" fill="var(--star)">a claim argued from first principles · not yet a fact</text>
<rect x="28" y="180" width="754" height="56" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
<rect x="28" y="180" width="6" height="56" rx="3" fill="#c98a4e"/>
<text x="48" y="200" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">“Texas hedged”</text>
<text x="48" y="218" fontSize="10" fill="var(--muted-2)">November 18, 2022: bitcoin and Unchained stock, doubled down</text>
<text x="766" y="209" fontSize="10.5" fontWeight="600" textAnchor="end" fill="#c98a4e">a concentrated position, named as a virtue · by its owner</text>
<text x="405" y="270" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Unchained (2020, 2022); Nasdaq (July 2025); graduallythensuddenly.xyz · every claim is signed, dated, and still online</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The essayist&apos;s ledger. Three claims and what the record says about each: a definancialization thesis written inside a lender that later crossed a billion dollars in loans, a case for inevitability that remains a case, and a self-described non-hedge. None of it is hidden. He signed all of it.
      </figcaption>
    </figure>
  );
}

// people-figs:end
export default function ParkerLewisBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Parker Lewis: The Man Who Wrote Why Bitcoin Is Money",
    description:
      "The Bitcoin record of the Austin essayist and operator behind 'Gradually, Then Suddenly': the seventeen Unchained essays, the 2023 book, the open letter against SB 1751, the move to Zaprite, the Bitcoin Commons, and the Bitcoin Takeover.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Parker Lewis" },
      { "@type": "Book", name: "Gradually, Then Suddenly" },
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
        name: "Parker Lewis and Bitcoin",
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
          / Parker Lewis &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The builders
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Parker Lewis: The Man Who Wrote Why Bitcoin Is Money
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Jimmy Song taught Austin how to build Bitcoin. Parker Lewis
            wrote the seventeen essays that tell everyone else why it is
            money – from a Dallas hedge fund&apos;s alumni list, on an Austin
            lender&apos;s blog, at a weekly cadence through the summer of
            2019 – and then built the room on Congress Avenue where the
            city&apos;s builders meet. He also wrote to the Texas Senate
            once, signed a position he calls a Texas hedge, and now works
            on the unglamorous problem of spending the thing. Both halves
            are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 11, 2026 · Updated{" "}
            {LEWIS_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Parker Lewis is an Austin-based Bitcoin writer and operator,
            author of the &ldquo;Gradually, Then Suddenly&rdquo; essays
            (Unchained, July 2019 to December 2020) and the 2023 book of the
            same name. A Deutsche Bank analyst through the 2008 crisis and a
            Hayman Capital associate in Dallas, he joined Unchained Capital
            in September 2018, stepped back in November 2022, wrote an open
            letter against SB 1751 in April 2023, and joined the payments
            company Zaprite that August. He stewards the Bitcoin Commons and
            organizes the off-SXSW Bitcoin Takeover each March.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Seventeen &ldquo;Gradually, Then Suddenly&rdquo; essays ran on
              Unchained&apos;s blog between July 26, 2019 and December 19,
              2020.<C n={1} /><C n={3} />
            </li>
            <li>
              Lewis was Unchained Capital&apos;s Head of Business
              Development from September 2018, and stepped back from
              management with the &ldquo;Texas hedged&rdquo; essay of
              November 18, 2022.<C n={4} /><C n={5} />
            </li>
            <li>
              He and Will Cole published an open letter to Senator Lois
              Kolkhorst opposing SB 1751 on April 7, 2023.<C n={9} />
            </li>
            <li>
              Zaprite announced Lewis as Head of Business Development on
              August 17, 2023.<C n={10} />
            </li>
            <li>
              The Saif House published the essays as a hardcover in
              November 2023.<C n={7} /><C n={8} />
            </li>
            <li>
              CNBC identified him as a steward of the Bitcoin Commons in the
              Littlefield Building on March 24, 2024; the Bitcoin Takeover
              ran there on March 15, 2024, March 11–15, 2025, and March
              12–13, 2026.<C n={13} /><C n={14} /><C n={15} /><C n={16} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the trading floor to Congress Avenue
            </h2>
            <span className="text-xs text-muted-2">2006 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {lewisTimeline.map((e) => {
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
          <h2>Who is Parker Lewis, and why does a Texas site cover him?</h2>
          <p>
            Because the builders wing opened by{" "}
            <Link href="/jimmy-song-bitcoin">Jimmy Song</Link> has two
            kinds of teacher in it, and the second kind is the one most
            Texans actually met. Song&apos;s textbook makes an engineer build
            a transaction from a blank file. Lewis&apos;s essays make a
            finance professional, a rancher, or a state senator understand
            why anyone would want to. The path in is the fiat system from
            inside: a Deutsche Bank analyst from 2006 through the crash,
            restructuring work at FTI Consulting, then four years as an
            associate at Kyle Bass&apos;s Hayman Capital in Dallas, where in
            2016 he fell down the rabbit hole and concluded, in his own
            phrase, that bitcoin would be the world&apos;s reserve
            currency.<C n={3} /><C n={4} /><C n={5} /> In September 2018 he
            joined Unchained Capital, the Austin lender and collaborative
            custody firm, as Head of Business Development – a sales job
            that came with a blog.<C n={4} /> He is a Texan and says so at
            every opportunity; the state is where he found it, wrote it,
            spoke it, and built for it.<C n={5} />
          </p>

          <h2>What did Lewis write, and why did it travel?</h2>
          <p>
            The first essay, &ldquo;Gradually, Then Suddenly,&rdquo; went up
            on July 26, 2019 and framed bitcoin as &ldquo;a solution to the
            money problem that is global QE.&rdquo;<C n={2} /> Then the
            cadence: a new essay every Friday through the summer – Bitcoin
            Can&apos;t Be Copied, Is Not Too Volatile, Does Not Waste Energy,
            Is Not Too Slow, Fixes This, Bitcoin Not Blockchain – each one a
            rebuttal to a specific objection, written for a reader who has
            heard the objection at dinner.<C n={1} /> The long-form pieces
            came in 2020: Bitcoin Obsoletes All Other Money in January,
            Rally Cry in March, Common Sense in May, One for All in August,
            and on December 19 the closer, Bitcoin is the Great
            Definancialization – savings are money, investment is savings
            put at risk, and bitcoin will unblur the two.<C n={1} />
            <C n={6} /> Seventeen essays in eighteen months, by his own
            count.<C n={3} />
          </p>
          <p>
            They traveled because they were free, short, and unhedged. The
            Satoshi Nakamoto Institute – the Austin archive told on{" "}
            <Link href="/satoshi-nakamoto-institute">its own page</Link> –
            took the series into its library alongside the cypherpunk canon,
            and in November 2023 Saifedean Ammous&apos;s Saif House published
            the essays as a hardcover, Gradually, Then Suddenly, &ldquo;a
            framework for understanding bitcoin as money.&rdquo;<C n={1} />
            <C n={7} /><C n={8} /> The talks carry the same argument to
            rooms that do not read blogs: &ldquo;Bitcoin is Not a
            Hedge&rdquo; at Dallas&apos;s Old Parkland campus on October 18,
            2023, the standard answer to a bad year, and &ldquo;Bitcoin is
            the Greatest Asymmetry&rdquo; in the same room on December 10,
            2025.<C n={12} /><C n={18} />
          </p>

          <LewisSeriesFigure />

          <h2>What did Lewis build, and what did he argue to the state?</h2>
          <p>
            The room first. When CNBC went looking for &ldquo;Austin&apos;s
            bitcoin underground&rdquo; in March 2024 it found the Bitcoin
            Commons on the second floor of the Littlefield Building at
            Congress Avenue and Sixth Street – coworking for operators by
            day, BitDevs and hackathons under Chatham House rules by night,
            and, underneath, money for open-source developers – with Lewis
            as one of its stewards.<C n={13} /> The Commons is where the
            Bitcoin Takeover lives: off-SXSW counter-programming that ran as
            a single Friday on March 15, 2024, stretched to five days across
            the Commons and Bitcoin Park in March 2025, and returned March
            12–13, 2026 as &ldquo;Power of Payments&rdquo; for about two
            hundred invited builders, with Zaprite, Block, ZBD, and
            Unchained behind it.<C n={14} /><C n={15} /><C n={16} /> His
            case for it is blunt: fiat incentives &ldquo;have killed the
            soul of SXSW,&rdquo; and bitcoin is always left off its
            schedule.<C n={15} />
          </p>
          <p>
            The state second, and only once. Two days after SB 1751 cleared
            Senate Business &amp; Commerce in April 2023, Lewis and Will
            Cole published an open letter to Senator Lois Kolkhorst, signed
            as private Texans representing no company or lobby, calling the
            bill &ldquo;misinformed, discriminatory, anti-competitive,
            harmful to grid stability, bad for consumers and a strategic
            setback for Texas,&rdquo; and closing with Sam Houston: govern
            wisely and as little as possible.<C n={9} /> The organized
            campaign against the same bill is on{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher and Bitcoin</Link>;
            the bill&apos;s death in a House committee is in{" "}
            <Link href="/texas-bitcoin-bills-that-died">the bills that died</Link>.
            Then, in August 2023, the turn from custody to payments: Lewis
            and Cole joined Zaprite, the Austin non-custodial
            bitcoin-payments platform, as Head of Business Development and
            Head of Product, and the argument moved from why to hold the
            asset to how to spend it.<C n={10} /><C n={11} /> In July 2025
            he added Center of Hash, a podcast on bitcoin, energy, and
            mining with TFTC – the terrain this site maps in{" "}
            <Link href="/bitcoin-mining-map-texas">the mining map</Link>.
            <C n={17} />
          </p>

          <h2>The honest counterweight: the essayist&apos;s ledger</h2>
          <p>
            The criticism worth engaging is not that Lewis is wrong about
            bitcoin – this site shares the thesis – but that the essays are
            written in the register of inevitability, and inevitability is
            a claim, not a proof. &ldquo;Bitcoin obsoletes all other
            money&rdquo; is argued from first principles, elegantly, and
            remains an argument; the market has not finished
            voting.<C n={1} /> The sharper point is structural. The closing
            essay, the Great Definancialization, was written from inside a
            lender whose business is bitcoin-backed loans – a business that
            passed a billion dollars in originations in July 2025 – and a
            sympathetic reader like Myles Snider has noted the tension:
            bitcoin may definancialize savings while the industry built on
            it financializes everything else.<C n={6} /><C n={19} />
            <C n={20} /> And the &ldquo;Texas hedge&rdquo; essay, for all
            its charm, describes a concentrated position in one asset and
            one employer&apos;s stock and names it a virtue.<C n={5} />
          </p>
          <p>
            The fair reading is that every one of those claims is signed,
            dated, and still online, which is more than most of the genre
            can say. The Kolkhorst letter was written after he had left
            Unchained&apos;s management and before he joined Zaprite, which
            makes its &ldquo;no company or lobby&rdquo; line true on the
            day.<C n={4} /><C n={9} /><C n={10} /> The essays did the thing
            they set out to do: a great many Texans who could not read a
            transaction can now explain why the supply is fixed, and a
            state that wrote a{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              Bitcoin reserve into law
            </Link>{" "}
            did so with legislators who had, somewhere along the way, read
            them.
          </p>

          <LewisLedgerFigure />

          <h2>Where does the Lewis record stand today?</h2>
          <p>
            As of September 2026: Head of Business Development at Zaprite,
            a steward of the Commons, three editions of the Takeover behind
            him, a podcast on the energy side of the network, and the book
            in print.<C n={10} /><C n={16} /><C n={17} /> The other Austin
            teacher is on{" "}
            <Link href="/jimmy-song-bitcoin">Jimmy Song and Bitcoin</Link>;
            the organizer who booked the state&apos;s summit stages is on{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher and Bitcoin</Link>;
            the wider scene is in{" "}
            <Link href="/texas-crypto-archive">the Texas crypto archive</Link>.
            The builders wing now has its engineer and its essayist.
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
            Primary record first: the essays themselves on Unchained and at
            the Satoshi Nakamoto Institute, which carries the dates;
            Lewis&apos;s own site for the letter, the podcast, and the
            talks; Zaprite&apos;s and Unchained&apos;s announcements; CNBC
            for the Commons; Bitcoin Park and Bitcoin News for the
            Takeover. This is a research and reference article, not
            financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {lewisSources.map((s) => (
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
