import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  HEGAR_LAST_VERIFIED,
  hegarSources,
  hegarTimeline,
  type HegarTimelineKind,
} from "@/lib/hegar";

const pageUrl = `${site.url}/glenn-hegar-bitcoin`;

export const metadata: Metadata = {
  title: "Glenn Hegar: The Comptroller Who Could Already Buy It",
  description:
    "Glenn Hegar's Bitcoin record, sourced: the three-term Texas Comptroller (2015–2025) whose office SB 21 addresses - the man who opened the Texas Bullion Depository in 2018 and later testified the state owned no gold; whose Fiscal Notes measured the mines at 2,717 MW; who held the authority to buy a spot Bitcoin ETF from January 2024 and never used it; who registered 'on,' not 'for,' at the February 18, 2025 hearing and told Senator Johnson 'I can do that already'; who left for Texas A&M eleven days after the statute took effect, having opened Fund 1018 and nothing else. The reserve was built by his successors. Silent since.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Glenn Hegar: The Comptroller Who Could Already Buy It",
    description:
      "For eighteen months the Texas comptroller could have bought Bitcoin without a law. He told the Senate so, registered neutral, and left. The careful custodian's record. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Glenn Hegar?",
    a: "Glenn Hegar is a Republican from a farming family at Hockley who served in the Texas House (2003–2007) and Senate (2007–2014) and was Texas Comptroller of Public Accounts from January 2, 2015 to July 1, 2025 - the state's chief financial officer, tax collector, revenue estimator, and treasurer. He has been Chancellor of the Texas A&M University System since July 1, 2025. In Bitcoin history he is the comptroller who opened the Texas Bullion Depository, whose office studied the mines, and who testified on Senate Bill 21, the Texas Strategic Bitcoin Reserve, before leaving the office the law was written for.",
  },
  {
    q: "What did Glenn Hegar say about the Texas Strategic Bitcoin Reserve?",
    a: "At the Senate Business and Commerce hearing on February 18, 2025 he registered 'on' - neutral - and testified that his office had worked with Senator Schwertner so the reserve could be run 'consistent with our prudent investment philosophy,' that the bill 'takes a measured approach to managing a potentially volatile asset, a critical requirement when investing taxpayer dollars,' and that 'pioneering a strategic bitcoin reserve is a natural step for Texas.' He declined to recommend a dollar amount, preferring 'step by step' with room to 'upscale or downscale over time.' Asked by Senator Nathan Johnson whether the bill was needed for him to buy bitcoin, he answered: 'I can do that already.'",
  },
  {
    q: "Could the Texas comptroller buy Bitcoin before SB 21?",
    a: "Yes, through funds. Existing law allowed the comptroller and the Treasury Safekeeping Trust Company, which manages more than $100 billion, to invest in SEC-regulated exchange-traded funds, and spot Bitcoin ETFs were approved in January 2024. Hegar's office never made such an investment. The first purchase - about $5 million in the iShares Bitcoin Trust on November 20, 2025 - was made by his successor, Kelly Hancock, under SB 21.",
  },
  {
    q: "What did Hegar do to implement SB 21 before leaving?",
    a: "One thing on the record. SB 21 was signed June 20, 2025 and took effect immediately; Hegar's last day was July 1. On June 25, 2025 the Comptroller's Manual of Accounts created Fund 1018, the Texas Strategic Bitcoin Reserve, held by the Treasury Safekeeping Trust Company. No purchase, rule, solicitation, or committee appointment was made under him, and his office issued no release on the reserve that month. The fiscal note his office sourced said the bill's cost could not be determined and that administration could be absorbed from the reserve's proceeds.",
  },
  {
    q: "What is the connection between the Bullion Depository and the Bitcoin reserve?",
    a: "Both are state reserves placed in the comptroller's office, and Hegar ran the first. HB 483 created the Texas Bullion Depository in 2015; he opened it on June 6, 2018 as its first customer with his own gold. At the SB 21 hearing in 2025 he testified that the state itself owned no gold. The depository holds private metal; the Bitcoin reserve, by contrast, holds state money, and its first purchase came under the next comptroller.",
  },
];

const kindStyle: Record<HegarTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  custodian: { color: "#c98a4e", label: "The custodian" },
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

// people-figs:start
// Two figures - the authority held and the actions taken, and the two
// reserves side by side - drawn from the dated, sourced facts on this
// page (Sept 2026). Server-rendered SVG, no client JS.
function HegarAuthorityFigure() {
  // Jan 2024 → Dec 2025, months 0..23 across the strip.
  const x0 = 60;
  const x1 = 760;
  const mx = (m: number) => x0 + (m / 23) * (x1 - x0);
  // ly = label baseline; up-labels sit above the band, down-labels below the axis in tiers.
  const marks = [
    { m: 0, l: "Spot ETFs approved", sub: "Jan 2024 · authority to buy", ly: 98 },
    { m: 13.6, l: "“I can do that already”", sub: "Feb 18, 2025 · registered “on”", ly: 208 },
    { m: 14.2, l: "Senate 25–5", sub: "Mar 6 · next day, A&M finalist", ly: 84 },
    { m: 17.6, l: "Signed", sub: "June 20, 2025", ly: 208 },
    { m: 17.8, l: "Fund 1018", sub: "June 25 · his one step", ly: 98 },
    { m: 18, l: "Leaves", sub: "July 1 · Hancock acting", ly: 240 },
    { m: 22.6, l: "First purchase", sub: "Nov 20 · $5M at $91,336", ly: 84 },
  ];
  const y = 150;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 290" role="img" aria-label="The authority and the action: from the SEC's approval of spot Bitcoin ETFs in January 2024, the Texas comptroller could invest state funds in one; Hegar did not through eighteen months, told the Senate 'I can do that already' on February 18, 2025, created Fund 1018 on June 25, left July 1, and the first purchase was made by Hancock on November 20, 2025">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE AUTHORITY AND THE ACTION · JANUARY 2024 → NOVEMBER 2025</text>
        {/* authority band: Jan 2024 → July 1 2025 (Hegar) */}
        <rect x={mx(0)} y={y - 22} width={mx(18) - mx(0)} height="44" rx="6" fill="#c98a4e" fillOpacity="0.14" stroke="#c98a4e" strokeWidth="1" strokeDasharray="4 3" />
        <text x={(mx(0) + mx(18)) / 2} y={y - 30} fontSize="10" textAnchor="middle" fill="#c98a4e" fontWeight="600" letterSpacing="1.5">AUTHORITY HELD, UNUSED · 18 MONTHS · HEGAR</text>
        <rect x={mx(18)} y={y - 22} width={mx(23) - mx(18)} height="44" rx="6" fill="var(--accent)" fillOpacity="0.14" stroke="var(--accent)" strokeWidth="1" />
        <text x={(mx(18) + mx(23)) / 2} y={y - 30} fontSize="10" textAnchor="middle" fill="var(--accent)" fontWeight="600" letterSpacing="1.5">HANCOCK</text>
        <line x1={x0} y1={y} x2={x1} y2={y} stroke="var(--muted-2)" strokeWidth="1.5" />
        {[0, 6, 12, 18, 23].map((m) => (
          <text key={m} x={mx(m)} y={y + 40} fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">{["Jan 2024", "Jul 2024", "Jan 2025", "Jul 2025", "Dec 2025"][[0, 6, 12, 18, 23].indexOf(m)]}</text>
        ))}
        {marks.map((k) => {
          const up = k.ly < y;
          const tick = up ? y - 22 : y + 22;
          const lineEnd = up ? k.ly + 16 : k.ly - 12;
          return (
            <g key={k.l}>
              <circle cx={mx(k.m)} cy={y} r="4.5" fill="var(--surface)" stroke={k.m < 18 ? "#c98a4e" : "var(--accent)"} strokeWidth="2" />
              <line x1={mx(k.m)} y1={tick} x2={mx(k.m)} y2={lineEnd} stroke="var(--border)" strokeWidth="1" />
              <text x={mx(k.m)} y={k.ly} fontSize="11" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{k.l}</text>
              <text x={mx(k.m)} y={k.ly + 13} fontSize="9" textAnchor="middle" fill="var(--muted-2)">{k.sub}</text>
            </g>
          );
        })}
        <text x="405" y="282" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Senate News Feb 18, 2025 · Texas Scorecard · TLO witness list and history · Manual of Accounts Fund 1018 · Texas Tribune Dec 8, 2025</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The authority and the action. From the day the SEC approved spot Bitcoin funds, the Texas comptroller could have put state money into one under existing law. Hegar held that authority for eighteen months, said so under oath, and used it once – to open an empty fund five days after the statute passed and six days before he left. The purchase belongs to the next name on the strip.
      </figcaption>
    </figure>
  );
}

function HegarTwoReservesFigure() {
  const cols = [
    {
      title: "THE BULLION DEPOSITORY",
      color: "#c98a4e",
      rows: [
        ["Statute", "HB 483 · effective June 19, 2015"],
        ["Comptroller", "Hegar, from the start"],
        ["Opened", "June 6, 2018 · Hegar first customer"],
        ["Holds", "private metal, for a fee"],
        ["State's own gold", "none · his 2025 testimony"],
      ],
    },
    {
      title: "THE BITCOIN RESERVE",
      color: "var(--accent)",
      rows: [
        ["Statute", "SB 21 · effective June 20, 2025"],
        ["Comptroller", "Hegar for 11 days, then Hancock"],
        ["Opened", "Fund 1018 · June 25, 2025"],
        ["Holds", "state money · $10M appropriated"],
        ["State's own bitcoin", "~$5M IBIT · Nov 20, 2025 · Hancock"],
      ],
    },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="Two state reserves in the comptroller's office: the Bullion Depository, opened by Hegar in 2018, holding private metal and none of the state's own gold; and the Bitcoin reserve, effective June 2025, whose fund Hegar opened and whose first purchase Hancock made">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">TWO RESERVES, ONE OFFICE · WHAT EACH ACTUALLY HOLDS</text>
        {cols.map((c, ci) => {
          const x = 28 + ci * 386;
          return (
            <g key={c.title}>
              <rect x={x} y="50" width="368" height="172" rx="10" fill="var(--surface-2)" stroke={c.color} strokeWidth="1.25" />
              <text x={x + 16} y="74" fontSize="11" fontWeight="600" letterSpacing="2" fill={c.color}>{c.title}</text>
              {c.rows.map((r, i) => {
                const y = 98 + i * 26;
                const last = i === c.rows.length - 1;
                return (
                  <g key={r[0]}>
                    <text x={x + 16} y={y} fontSize="10" fill="var(--muted-2)">{r[0]}</text>
                    <text x={x + 150} y={y} fontSize={last ? 11 : 10.5} fontWeight={last ? 600 : 400} fill={last ? c.color : "var(--foreground)"} fontFamily={last ? "var(--font-display)" : undefined}>{r[1]}</text>
                  </g>
                );
              })}
            </g>
          );
        })}
        <text x="405" y="242" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Comptroller release June 6, 2018 · Texas Observer Feb 28, 2025 · Manual of Accounts Fund 1018 · Texas Tribune Dec 8, 2025</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Two reserves, one office. The depository was a vault the state opened for other people&apos;s gold and never filled with its own; Hegar built it, deposited first, and said so. The Bitcoin reserve is the state&apos;s own money by statute. He opened its ledger line and handed the office over before the first coin was bought.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function GlennHegarBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Glenn Hegar: The Comptroller Who Could Already Buy It",
    description:
      "The Bitcoin record of the three-term Texas Comptroller whose office SB 21 addresses: the Bullion Depository he opened, the Fiscal Notes studies of the mines, the ETF authority he held from January 2024 and never used, the February 18, 2025 testimony - 'on,' not 'for'; 'I can do that already' - the fiscal note, the A&M chancellorship named the day after the Senate vote, Fund 1018, the handoff to Hancock, and the silence since.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Glenn Hegar" },
      { "@type": "Legislation", name: "Texas Senate Bill 21 (89R)" },
      { "@type": "Thing", name: "Texas Strategic Bitcoin Reserve" },
      { "@type": "Organization", name: "Texas Comptroller of Public Accounts" },
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
        name: "Glenn Hegar and Bitcoin",
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
          / Glenn Hegar &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The Comptroller&apos;s desk
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Glenn Hegar: The Comptroller Who Could Already Buy It
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Senate Bill 21 is addressed to one office, and for ten and a
            half years that office was Glenn Hegar&apos;s. He ran the
            state&apos;s books through three elections, opened the
            nation&apos;s first state bullion depository and put his own
            gold in it, published the studies that measured the Bitcoin
            mines in megawatts, and from January 2024 held the authority to
            put state money into a spot Bitcoin fund without asking anyone.
            He never did. When the Senate asked him, in February 2025,
            whether it needed to pass the bill for him to buy, he answered
            that it did not. He registered neutral, was named a university
            chancellor the morning after the Senate vote, opened the
            reserve&apos;s empty fund five days after the governor signed,
            and left. The vault, the hearing, and the handoff are the
            record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 24, 2026 · Updated{" "}
            {HEGAR_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Glenn Hegar was Texas Comptroller of Public Accounts from
            January 2015 to July 1, 2025, and is now Chancellor of the Texas
            A&amp;M University System. He testified on Senate Bill 21, the
            Texas Strategic Bitcoin Reserve, on February 18, 2025 –
            registered &ldquo;on,&rdquo; not &ldquo;for&rdquo; – telling the
            Senate the bill took &ldquo;a measured approach to managing a
            potentially volatile asset&rdquo; and that his office could
            already invest in Bitcoin funds under existing law. He created
            the reserve&apos;s fund on June 25, 2025 and left office six
            days later; the first purchase was made by his successor.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Hegar registered &ldquo;On&rdquo; – neutral – on SB 21 at the
              Senate Business and Commerce hearing of February 18, 2025.
              <C n={9} />
            </li>
            <li>
              Asked whether the bill was needed for him to buy bitcoin, he
              said: &ldquo;I can do that already.&rdquo;<C n={11} />
            </li>
            <li>
              Existing law allowed his office to invest in SEC-regulated
              ETFs; it made no Bitcoin investment during his
              tenure.<C n={10} /><C n={13} />
            </li>
            <li>
              He opened the Texas Bullion Depository on June 6, 2018 as its
              first customer, and testified in 2025 that the state owned no
              gold.<C n={3} /><C n={13} />
            </li>
            <li>
              Fund 1018, the Texas Strategic Bitcoin Reserve, was created in
              the Comptroller&apos;s Manual of Accounts on June 25, 2025; he
              left office July 1.<C n={21} /><C n={23} />
            </li>
            <li>
              The state&apos;s first purchase, about $5 million in the
              iShares Bitcoin Trust, was made November 20, 2025 under Acting
              Comptroller Kelly Hancock.<C n={24} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the vault to the handoff
            </h2>
            <span className="text-xs text-muted-2">2015 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {hegarTimeline.map((e) => {
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
          <h2>Who is Glenn Hegar, and why is the reserve his to explain?</h2>
          <p>
            Because the statute names his desk. Hegar was born in Houston
            in 1970 and raised on family land at Hockley that his people
            have farmed since the middle of the nineteenth century; Texas
            A&amp;M, then two law degrees.<C n={1} /> Two terms in the House
            for District 28, eight years in Senate District 18, and in
            November 2014 the comptroller&apos;s office with 58.4% – then
            53.2% in 2018 and 56.4% in 2022, three terms as the state&apos;s
            chief financial officer, tax collector, revenue estimator, and
            treasurer, with the Treasury Safekeeping Trust Company and its
            hundred billion dollars under him.<C n={1} /><C n={2} />
            <C n={10} /> SB 21 gives the reserve to the comptroller to
            build, buy, and custody, and every clause of it was written for
            the office as he ran it. He held that office for the hearing,
            the floor votes, the conference, and the signature, and for
            eleven days of the law. The rest of the reserve&apos;s history
            belongs to the two men who followed him, on{" "}
            <Link href="/kelly-hancock-bitcoin">Kelly Hancock and Bitcoin</Link>{" "}
            and{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines and Bitcoin</Link>.
            This page is the office before them.
          </p>

          <h2>What was his first reserve?</h2>
          <p>
            Gold, and the state never bought any. HB 483, Capriglione&apos;s
            Texas Bullion Depository, took effect June 19, 2015 and made
            the comptroller its administrator.<C n={4} /> Hegar named a
            depository administrator in 2017, chose a private operator,
            sited the headquarters in Leander, and opened the doors on June
            6, 2018 as the first customer: &ldquo;We&apos;re proud that the
            nation&apos;s first state-administered bullion depository is now
            a reality – this is a big day for Texans&rdquo;; &ldquo;I
            deposited some gold. The process was easy.&rdquo;<C n={3} /> It
            is a vault for private metal, for a fee. Seven years later,
            asked about it at the Bitcoin hearing, he testified that the
            state itself owned no gold – it had built the vault and left
            it to others to fill.<C n={13} /> The bill that created it, and
            the representative who wrote it, are on{" "}
            <Link href="/giovanni-capriglione-bitcoin">
              Giovanni Capriglione and Bitcoin
            </Link>
            .
          </p>

          <h2>What did his office say about Bitcoin before the bill?</h2>
          <p>
            It studied it, carefully, in the third person. Fiscal Notes,
            the comptroller&apos;s economic journal, asked in April 2018
            whether Bitcoin was an alternative currency or history&apos;s
            biggest bubble, and recorded that Texas did not accept it for
            taxes.<C n={5} /> In August 2022 it published a two-part study
            of the mines: Rockdale&apos;s 300 direct jobs and a thousand
            more around them, roughly 3,000 megawatts of load at four
            percent of peak, ERCOT&apos;s projection of 17,000 by 2030, Riot
            curtailing 72 times in a summer, and a recommendation that the
            Legislature renew the data-center sales-tax exemption and let
            counties keep abating.<C n={7} /> Hegar&apos;s own sentence in
            the release: &ldquo;Cryptocurrency frequently appears in the
            news, but what it is and how it is used remains a mystery to
            many Texans.&rdquo;<C n={6} /> In September 2024 the journal put
            Texas mining at 2,717 megawatts at the end of 2023, the most on
            the continent, with Riot&apos;s Rockdale site alone at 450:
            &ldquo;A 1-MW cryptocurrency mine uses more energy than 700
            households.&rdquo;<C n={8} /> The office measured the industry
            as a load and a taxpayer. It did not, in any document located,
            describe the coin as an asset the state might own. The sites it
            counted are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
          </p>

          <h2>What did he tell the Senate on February 18, 2025?</h2>
          <p>
            That he could already do it. On the witness list for Senate
            Bill 21 he is registered &ldquo;On&rdquo; – neither for nor
            against – with two members of his staff and the Trust
            Company&apos;s chief investment officer and general counsel
            beside him.<C n={9} /> He told Business and Commerce that his
            office manages more than $100 billion, that existing law
            already permits the comptroller and the state&apos;s retirement
            funds to invest in SEC-regulated exchange-traded funds and none
            had, and that a reserve would &ldquo;follow the same prudent
            investor policy.&rdquo;<C n={10} /> &ldquo;My office has worked
            with the senator,&rdquo; he said of Schwertner, &ldquo;to ensure
            that the reserve can be administered in a manner consistent
            with our prudent investment philosophy while diversifying the
            state&apos;s investment portfolio. We believe this bill takes a
            measured approach to managing a potentially volatile asset, a
            critical requirement when investing taxpayer dollars.&rdquo;
            <C n={11} /> He would not recommend a dollar figure – &ldquo;step
            by step&rdquo;; &ldquo;that flexibility allows us to do our job
            &hellip; we can upscale or downscale over time&rdquo; – wanted
            an advisory committee with &ldquo;a wider group of people who
            come with different lenses,&rdquo; and was personally uneasy
            about the donation clause without saying he would refuse a
            gift.<C n={11} /><C n={12} /> Then Senator Nathan Johnson asked
            whether the Legislature needed to pass the bill at all for the
            comptroller to buy bitcoin. &ldquo;I can do that already.
            However, with that being said, having some parameters and
            expectations about you as the policymakers is always
            good.&rdquo;<C n={11} /> The Senate&apos;s own summary gave him
            the line the press kept: &ldquo;Pioneering a strategic bitcoin
            reserve is a natural step for Texas, where innovation and ideas
            are nurtured and pursued.&rdquo;<C n={10} /> The Observer,
            reading the same hearing, called him &ldquo;officially neutral,
            generally in favor.&rdquo;<C n={13} /> The senator who asked the
            question, and cut the donors out, is on{" "}
            <Link href="/nathan-johnson-bitcoin">Nathan Johnson and Bitcoin</Link>
            ; the one who wrote the bill with his office is on{" "}
            <Link href="/charles-schwertner-bitcoin">
              Charles Schwertner and Bitcoin
            </Link>
            .
          </p>

          <HegarAuthorityFigure />

          <h2>What happened between the hearing and the handoff?</h2>
          <p>
            The Senate passed the bill on March 6, 25–5, and the next
            morning the Texas A&amp;M System&apos;s regents named Hegar the
            sole finalist to be chancellor; on March 28, after the statutory
            wait, they confirmed him unanimously.<C n={17} /><C n={18} />
            <C n={19} /><C n={29} /> The fiscal note that carries his
            office&apos;s name as source agency said the bill&apos;s
            implications &ldquo;cannot be determined,&rdquo; that
            administrative costs &ldquo;could be absorbed using proceeds
            from the reserve,&rdquo; and that a fund outside the treasury
            &ldquo;may limit the Legislature&apos;s ability to make
            appropriation decisions.&rdquo;<C n={15} /> When the House heard
            the bill on April 23, his general counsel registered
            &ldquo;on&rdquo; in his place; he did not testify
            there.<C n={16} /> On June 19 he welcomed former Senator Kelly
            Hancock into the office as chief clerk – &ldquo;a great fit to
            serve as the chief financial officer of Texas&rdquo; – so that
            Hancock could become acting comptroller on July 1 without a
            gap.<C n={20} /> On June 20 Abbott signed SB 21, effective
            immediately.<C n={17} /> On June 25 the Comptroller&apos;s Manual
            of Accounts opened Fund 1018, the Texas Strategic Bitcoin
            Reserve, held by the Trust Company, not appropriated.<C n={21} />
            That line in a ledger is the whole of his implementation: no
            purchase, no rule, no solicitation, no committee, and no press
            release on the reserve in his final month.<C n={22} /> He began
            at A&amp;M on July 1.<C n={23} /> The reserve as it now stands is
            on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            ; who holds it, and the custody award still pending, is on{" "}
            <Link href="/who-holds-the-texas-bitcoin-reserve">
              who holds the Texas Bitcoin reserve
            </Link>
            .
          </p>

          <HegarTwoReservesFigure />

          <h2>The honest counterweight: the authority, the neutrality, and the silence</h2>
          <p>
            This page is mostly counterweight, so the fair thing is to say
            what the record does not support. It does not support the
            claim that Hegar opposed the reserve: he registered neutral, his
            office helped draft the bill, and his testimony was a
            custodian&apos;s testimony – prudent-investor policy, volatility,
            taxpayer dollars, step by step – not a skeptic&apos;s.<C n={9} />
            <C n={11} /> It does not support the claim that he was for it,
            either: no sentence of his praises Bitcoin as an asset, and
            his most quoted line is about Texas innovation, not the
            coin.<C n={10} /> What the record does support is three things.
            He held the authority to buy from January 2024, said so under
            oath, and did not use it in eighteen months – the office that
            managed a hundred billion dollars and had studied the mines to
            the megawatt made no allocation until the Legislature ordered
            one, and then not under him.<C n={10} /><C n={13} />
            <C n={24} /> His prior reserve, the depository, ended his tenure
            holding none of the state&apos;s own metal.<C n={13} /> And since
            July 2025 he has said nothing located on the reserve – not on
            the first purchase, the advisory committee, the custody
            solicitation, or the primary in which his successor lost the
            office to Don Huffines, a race in which no endorsement of his
            is on record.<C n={25} /><C n={28} /> What he talks about now is
            power for the RELLIS campus: &ldquo;Reliable power is one of
            those problems.&rdquo;<C n={26} /> A&amp;M&apos;s Bitcoin course
            predates him and has no connection to him.<C n={27} />
          </p>
          <p>
            The fair reading is that Texas got, in Hegar, exactly the
            comptroller SB 21 assumes – one who would not buy without
            parameters, and who told the Legislature that parameters were
            what it was for – and then got a different comptroller to do
            the buying. The reserve the Senate designed around a cautious
            custodian was built by a successor who had voted against it and
            is held now by one who campaigned on it. The man the bill was
            written for is the one name in the chain who never touched the
            asset.
          </p>

          <h2>Where does the Hegar record stand today?</h2>
          <p>
            As of September 2026: Chancellor of the Texas A&amp;M University
            System since July 1, 2025, on no ballot, with no public position
            on the reserve since he left it.<C n={23} /> The office he ran is
            Don Huffines&apos;s until November 3 and, if the voters agree,
            after; the fund he opened holds the state&apos;s first bitcoin;
            the vault he opened holds other people&apos;s gold. The
            comptroller who bought is on{" "}
            <Link href="/kelly-hancock-bitcoin">Kelly Hancock and Bitcoin</Link>
            ; the one who holds is on{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines and Bitcoin</Link>
            ; the statute-by-statute record they all sit inside is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            . This page is the desk before the purchase.
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
            Primary record first: the Comptroller&apos;s own press releases,
            Fiscal Notes, and Manual of Accounts; Texas Legislature Online
            for the witness lists, fiscal note, and bill history; Texas
            Senate News and the committee video for the hearing; the Texas
            A&amp;M System for the chancellorship; the Texas Tribune, Texas
            Scorecard, CBS Austin, and the Texas Observer for the quotes
            and the votes. This is a research and reference article, not
            financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {hegarSources.map((s) => (
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
