import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  CAPRIGLIONE_LAST_VERIFIED,
  capriglioneSources,
  capriglioneTimeline,
  type CapriglioneTimelineKind,
} from "@/lib/capriglione";

const pageUrl = `${site.url}/giovanni-capriglione-bitcoin`;

export const metadata: Metadata = {
  title: "Giovanni Capriglione: The Chairman Who Carried the Reserve",
  description:
    "Giovanni Capriglione's Bitcoin record, sourced: the Southlake engineer-investor and seven-term Texas House member who authored the 2015 Bullion Depository, joint-authored the 2021 UCC virtual-currency definition, wrote the 2023 flared-gas mining exemption, filed the first Texas reserve bill (HB 1598, Dec 12, 2024), heard SB 21 in his own DOGE committee, carried it 101–42, chaired the conference - and became president of the Texas Blockchain Council in January 2026 while still in office.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Giovanni Capriglione: The Chairman Who Carried the Reserve",
    description:
      "Schwertner wrote the reserve. Capriglione filed one first, heard the Senate's in his own committee, carried it 101–42, and chaired the conference - after a decade of the statutes underneath it. The House's record, sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Giovanni Capriglione?",
    a: "Giovanni Capriglione is a Republican member of the Texas House from Southlake who has represented House District 98 in northeast Tarrant County since January 2013. A physics graduate with a background in semiconductor design and private equity, he chaired the House Pensions, Investments and Financial Services Committee in 2023 and the new Delivery of Government Efficiency Committee in 2025, and was the House sponsor of Senate Bill 21, the law that created the Texas Strategic Bitcoin Reserve. He is not seeking re-election in 2026 and has been president of the Texas Blockchain Council since January 5, 2026.",
  },
  {
    q: "Did Capriglione write the Texas Bitcoin reserve law?",
    a: "He filed the first one and carried the one that passed. His HB 1598, filed December 12, 2024, would have put a Bitcoin reserve inside the state treasury with a five-year minimum hold and a donation channel; it was referred to his own committee and never heard. Senate Bill 21, authored by Senator Charles Schwertner, was heard in that same committee, reported out 8–4 on May 7, 2025, carried by Capriglione through a 101–42 House vote on May 21, and finished by a conference committee he chaired. Governor Abbott signed it June 20, 2025.",
  },
  {
    q: "What Bitcoin laws has Capriglione authored?",
    a: "The statutes underneath the reserve. He authored HB 483 (2015), which created the Texas Bullion Depository; joint-authored HB 1576 and HB 4474 (2021), which created the Work Group on Blockchain Matters and wrote virtual currency into the Texas Uniform Commercial Code; and authored HB 591 (2023), the severance-tax exemption for flared gas consumed at the wellhead, and HB 1666 (2023), the ban on digital-asset service providers commingling customer funds. In 2025 he also authored HB 149, the Texas AI governance act, and HB 150, the Texas Cyber Command, and joint-authored HB 1056, the gold-and-silver legal-tender law.",
  },
  {
    q: "What did Capriglione say about a Texas Bitcoin reserve?",
    a: "At the Texas Blockchain Summit in Dallas on November 20, 2024: 'It's destined to happen somewhere. I'd rather it happen here first.' Filing HB 1598 on December 12, 2024: 'Probably the biggest enemy of our investments is inflation.' On the House floor on May 21, 2025: 'This reserve not only strengthens our fiscal sovereignty, but positions Texas as a forward-thinking state prepared for the evolution of global finance.'",
  },
  {
    q: "Is Capriglione still in the Texas House?",
    a: "Through January 2027. He announced on July 23, 2025 that he would not seek an eighth term, and on January 5, 2026 became president of the Texas Blockchain Council, the industry association that lobbied for the reserve, while continuing to hold his seat. Keller Mayor Armin Mizani won the March 3, 2026 Republican primary for House District 98 with 53.5%; the general election is November 3, 2026.",
  },
];

const kindStyle: Record<CapriglioneTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  statute: { color: "#c98a4e", label: "The statutes" },
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
// Two figures - the decade of statutes and the two designs - drawn from
// the dated, sourced facts on this page (Sept 2026). Server-rendered SVG,
// no client JS.
function CapriglioneStatutesFigure() {
  // x(year) = 60 + (year - 2014.5) * 62  → 2015 ≈ 91, 2025 ≈ 711
  // Each tick carries its own label anchor so neighbours never collide:
  // 2015 / 2021 / 2025 above the line, 2023 / Dec 2024 below.
  const ticks: { x: number; tx: number; anchor: "start" | "middle" | "end"; up: boolean; bill: string; what: string; when: string; color: string }[] = [
    { x: 91, tx: 85, anchor: "start", up: true, bill: "HB 483", what: "Texas Bullion Depository", when: "June 19, 2015", color: "#c98a4e" },
    { x: 463, tx: 463, anchor: "middle", up: true, bill: "HB 1576 · HB 4474", what: "blockchain work group · virtual currency in the UCC", when: "June 2021", color: "#c98a4e" },
    { x: 711, tx: 770, anchor: "end", up: true, bill: "SB 21 · carried", what: "101–42 · conference chair", when: "May–June 2025", color: "var(--accent)" },
    { x: 587, tx: 600, anchor: "end", up: false, bill: "HB 591 · HB 1666", what: "flared-gas exemption · commingling ban", when: "June 2023", color: "#c98a4e" },
    { x: 680, tx: 770, anchor: "end", up: false, bill: "HB 1598", what: "the first reserve bill, filed", when: "Dec 12, 2024", color: "var(--accent)" },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="Ten years of Capriglione statutes on a timeline: the Bullion Depository in 2015, the blockchain work group and UCC definition in 2021, the flared-gas exemption and commingling ban in 2023, HB 1598 filed December 2024, and SB 21 carried in 2025">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE STATUTES UNDERNEATH · TEN YEARS OF ONE REPRESENTATIVE&apos;S HARD-MONEY BILLS</text>
        <line x1="60" y1="118" x2="760" y2="118" stroke="var(--border)" strokeWidth="2" />
        {[2015, 2017, 2019, 2021, 2023, 2025].map((yr) => {
          const x = 60 + (yr - 2014.5) * 62;
          return (
            <g key={yr}>
              <line x1={x} y1="112" x2={x} y2="124" stroke="var(--muted-2)" strokeWidth="1" />
              <text x={x} y="140" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">{yr}</text>
            </g>
          );
        })}
        {ticks.map((t) => {
          const labelY = t.up ? 62 : 176;
          const subY = t.up ? 76 : 190;
          const whenY = t.up ? 90 : 204;
          const lineY1 = t.up ? 96 : 118;
          const lineY2 = t.up ? 118 : 162;
          const { anchor, tx } = t;
          return (
            <g key={t.bill}>
              <line x1={t.x} y1={lineY1} x2={t.x} y2={lineY2} stroke={t.color} strokeWidth="1.25" />
              <circle cx={t.x} cy="118" r="5" fill={t.color} />
              <text x={tx} y={labelY} fontSize="12" fontWeight="600" textAnchor={anchor} fill="var(--foreground)" fontFamily="var(--font-display)">{t.bill}</text>
              <text x={tx} y={subY} fontSize="10" textAnchor={anchor} fill="var(--muted-2)">{t.what}</text>
              <text x={tx} y={whenY} fontSize="9.5" textAnchor={anchor} fill={t.color}>{t.when}</text>
            </g>
          );
        })}
        <text x="405" y="238" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Legislature Online, bill histories 84R–89R · custody first (2015), definitions next (2021), the load and the custodians (2023), then the reserve (2024–25)</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The statutes underneath. Ten years of one representative&apos;s hard-money bills, in the order Texas builds: a vault in 2015, a definition of the asset in 2021, the miners&apos; gas exemption and the custodians&apos; commingling ban in 2023, and only then a reserve – filed by him in December 2024, carried by him in May 2025.
      </figcaption>
    </figure>
  );
}

function CapriglioneTwoDesignsFigure() {
  const rows = [
    { k: "Where it sits", a: "special fund inside the treasury", b: "outside the treasury, comptroller custody" },
    { k: "Hold period", a: "five years minimum", b: "none written" },
    { k: "Donations", a: "residents and governmental entities", b: "stripped in conference" },
    { k: "Eligibility", a: "Bitcoin, by name", b: "$500B market cap for 24 months" },
    { k: "Money", a: "no appropriation", b: "$10 million" },
    { k: "Fate", a: "no hearing in his committee", b: "8–4 out of his committee; 101–42; signed" },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 310" role="img" aria-label="Two reserve designs side by side: Capriglione's HB 1598 against Schwertner's SB 21 on location, hold period, donations, eligibility, money, and fate">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">TWO DESIGNS · THE BILL HE FILED AGAINST THE BILL HE CARRIED</text>
        <text x="300" y="66" fontSize="12" fontWeight="600" letterSpacing="1.5" fill="#c98a4e" fontFamily="var(--font-display)">HB 1598 · Dec 12, 2024</text>
        <text x="550" y="66" fontSize="12" fontWeight="600" letterSpacing="1.5" fill="var(--accent)" fontFamily="var(--font-display)">SB 21 · signed June 20, 2025</text>
        {rows.map((r, i) => {
          const y = 96 + i * 34;
          return (
            <g key={r.k}>
              <rect x="28" y={y - 20} width="754" height="30" rx="4" fill={i % 2 === 0 ? "var(--surface-2)" : "transparent"} />
              <text x="44" y={y} fontSize="11" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{r.k}</text>
              <text x="300" y={y} fontSize="10.5" fill="var(--muted)">{r.a}</text>
              <text x="550" y={y} fontSize="10.5" fill="var(--muted)">{r.b}</text>
            </g>
          );
        })}
        <text x="405" y="298" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">HB 1598 introduced text; SB 21 enrolled text and history · both referred to the House committee he chaired</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Two designs. HB 1598 was custody-first – inside the treasury, a five-year hold, funded by donation, no appropriation. SB 21 was investment-first – outside the treasury, no hold, a market-cap floor, $10 million of general revenue. Both landed in the committee Capriglione chaired. He heard the Senate&apos;s.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function GiovanniCapriglioneBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Giovanni Capriglione: The Chairman Who Carried the Reserve",
    description:
      "The Bitcoin record of the Texas House member who sponsored Senate Bill 21: the 2015 Bullion Depository, the 2021 UCC definition, the 2023 flared-gas exemption and commingling ban, HB 1598 filed first and never heard, SB 21 through his own committee 8–4 and the floor 101–42, the conference he chaired, the retirement, and the turn to the Texas Blockchain Council.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-13",
    dateModified: "2026-09-13",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Giovanni Capriglione" },
      { "@type": "Thing", name: "Texas Strategic Bitcoin Reserve" },
      { "@type": "Legislation", name: "Texas Senate Bill 21 (89R)" },
      { "@type": "Legislation", name: "Texas House Bill 1598 (89R)" },
      { "@type": "Organization", name: "Texas Blockchain Council" },
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
        name: "Giovanni Capriglione and Bitcoin",
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
          / Giovanni Capriglione &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The House
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Giovanni Capriglione: The Chairman Who Carried the Reserve
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The Senate page of this cluster ends on one sentence: Schwertner
            wrote it. This is the House page, and it starts a decade
            earlier. A physics graduate from Southlake who designed
            semiconductors before he ran a private-equity firm put the
            Bullion Depository into law in 2015, the definition of virtual
            currency into the Texas commercial code in 2021, and the
            miners&apos; flared-gas exemption on the books in 2023 – then
            filed the first Texas Bitcoin reserve bill before the 2025
            session opened, heard the Senate&apos;s version in the committee
            he chaired instead of his own, carried it 101–42, and chaired
            the conference that finished it. Seven months later he was
            president of the industry council that lobbied for it, with
            his House seat still warm. The statutes, the two designs, and
            the turn are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 13, 2026 · Updated{" "}
            {CAPRIGLIONE_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Giovanni Capriglione is the Republican Texas House member from
            Southlake who was the House sponsor of Senate Bill 21, the law
            that created the Texas Strategic Bitcoin Reserve. In House
            District 98 since 2013, he filed the first Texas reserve bill,
            HB 1598, on December 12, 2024, carried SB 21 through a 101–42
            House vote on May 21, 2025, and became president of the Texas
            Blockchain Council on January 5, 2026.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Giovanni Capriglione filed HB 1598, the first Texas Bitcoin
              reserve bill, on December 12, 2024; it was referred to his own
              committee on March 12, 2025 and never heard.<C n={12} />
            </li>
            <li>
              Capriglione&apos;s House Committee on Delivery of Government
              Efficiency reported Senate Bill 21 out 8–4 on May 7, 2025, and
              he carried it through the House 101–42 on May 21, 2025.
              <C n={18} /><C n={20} />
            </li>
            <li>
              Capriglione chaired the House conferees on SB 21, appointed
              May 27, 2025; Governor Abbott signed the law June 20, 2025 with
              a $10 million appropriation.<C n={18} /><C n={20} />
            </li>
            <li>
              Capriglione authored HB 483, the 2015 Texas Bullion Depository
              act, and joint-authored HB 4474, the 2021 law that wrote
              virtual currency into the Texas Uniform Commercial Code.
              <C n={5} /><C n={7} />
            </li>
            <li>
              Capriglione authored HB 591, the 2023 severance-tax exemption
              for flared gas consumed at the wellhead, signed June 2, 2023.
              <C n={8} />
            </li>
            <li>
              Capriglione announced on July 23, 2025 that he would not seek
              re-election, and was named president of the Texas Blockchain
              Council on January 5, 2026 while still holding his seat.
              <C n={25} /><C n={26} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the vault to the council
            </h2>
            <span className="text-xs text-muted-2">2013 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {capriglioneTimeline.map((e) => {
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
          <h2>Who is Giovanni Capriglione, and why is he the House of this story?</h2>
          <p>
            Because every Texas Bitcoin statute that predates the reserve
            has his name on it. Capriglione is a Southlake businessman –
            physics at Worcester Polytechnic, an MBA from Santa Clara, a
            career in semiconductor design and then private equity – who won
            House District 98, northeast Tarrant County from Keller to
            Grapevine, by beating a sitting Republican in the 2012
            primary.<C n={4} /><C n={2} /><C n={1} /> Speaker Phelan made
            him chair of Pensions, Investments and Financial Services in
            February 2023; Speaker Burrows made him the first chair of the
            House Committee on Delivery of Government Efficiency in February
            2025, a 13-member panel built around technology and
            contracting.<C n={10} /><C n={17} /> He chairs the
            bipartisan Innovation and Technology Caucus.<C n={26} /> Where
            the rest of the cluster came to the asset as governors,
            lieutenant governors, comptrollers, and a surgeon, Capriglione
            came to it as an engineer who had already spent a decade
            writing the plumbing. The senator who wrote the reserve is on{" "}
            <Link href="/charles-schwertner-bitcoin">
              Charles Schwertner and Bitcoin
            </Link>
            ; this is the representative who built what it sits on.
          </p>

          <h2>What Bitcoin laws did Capriglione write before the reserve?</h2>
          <p>
            Four, in the order Texas builds things: custody, definition,
            load, custodians. <strong>HB 483</strong>, filed December 10,
            2014 and signed June 19, 2015, created the Texas Bullion
            Depository – the first state-run precious-metals depository in
            the country, and the template for everything after it: build
            the vault, add the functions later.<C n={5} /> In 2021 he
            joint-authored two bills with Representative{" "}
            <Link href="/tan-parker-bitcoin">Tan Parker</Link> that
            became law eight days apart: <strong>HB 1576</strong>, the Work
            Group on Blockchain Matters, and <strong>HB 4474</strong>, which
            wrote &ldquo;virtual currency&rdquo; into the Texas Uniform
            Commercial Code and gave a buyer who takes control of it clean
            title – the statute this site&apos;s legal reference calls the
            moment Texas defined the asset before it owned
            any.<C n={6} /><C n={7} /> In 2023, as chairman, he authored{" "}
            <strong>HB 591</strong>, the severance-tax exemption for gas
            that would otherwise be flared and is instead burned at the
            wellhead – the miners&apos; bill, signed June 2, 2023 – and{" "}
            <strong>HB 1666</strong>, the post-FTX ban on digital-asset
            service providers commingling customer funds, signed a week
            later.<C n={8} /><C n={9} /> The full statute-by-statute record
            is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            ; the depository&apos;s 2025 sequel, the gold-and-silver tender
            law he joint-authored, is on{" "}
            <Link href="/texas-gold-vs-bitcoin">Texas gold vs. Bitcoin</Link>.
          </p>

          <CapriglioneStatutesFigure />

          <h2>What was Capriglione&apos;s reserve bill, and why didn&apos;t it pass?</h2>
          <p>
            HB 1598 was the custody-first design, and it lost to the
            investment-first one in his own committee. Two weeks after the
            2024 election, on stage at the Texas Blockchain Summit in Dallas,
            he said a state reserve was &ldquo;destined to happen somewhere.
            I&apos;d rather it happen here first,&rdquo; and that &ldquo;it
            would be great if the community itself would participate in
            creating this.&rdquo;<C n={11} /> On December 12, 2024, before
            the session opened, he filed it: a special fund inside the
            treasury under the comptroller, a five-year minimum hold on
            every coin, donations from Texans and governmental entities,
            state agencies converting any cryptocurrency they accept into
            Bitcoin, a biennial report, and a 2035 sunset – no
            appropriation.<C n={12} /><C n={13} /> &ldquo;Probably the
            biggest enemy of our investments is inflation,&rdquo; he said
            that day; the Texas Blockchain Council announced it as
            &ldquo;our partnership with Chairman
            Capriglione.&rdquo;<C n={14} /><C n={15} /> The Statesman set it
            against Senator Schwertner&apos;s outside-the-treasury design in
            January.<C n={16} /> Then the calendar decided: HB 1598 was
            referred to Delivery of Government Efficiency on March 12, 2025
            and never heard; SB 21 was referred to the same committee on
            April 9 and reported out 8–4 on May 7.<C n={12} /><C n={18} />{" "}
            The chairman chose the bill the Lieutenant Governor had
            prioritized over the bill that was his. His hold period and his
            donation channel are catalogued with the session&apos;s other
            unbuilt wings on{" "}
            <Link href="/texas-bitcoin-bills-that-died">the bills that died</Link>.
          </p>

          <h2>How did Capriglione carry SB 21 through the House?</h2>
          <p>
            As sponsor, floor manager, and conference chair. On May 21, 2025
            he moved SB 21 through the House 101–42 – 21 Republicans and 21
            Democrats opposed – with an amendment restoring the donation
            clause the Senate had stripped.<C n={19} /><C n={20} />{" "}
            &ldquo;This reserve not only strengthens our fiscal sovereignty,
            but positions Texas as a forward-thinking state prepared for the
            evolution of global finance,&rdquo; he told the
            chamber.<C n={19} /><C n={21} /> On May 27 he was named chair of
            the House conferees; the conference removed the donation clause
            again and trimmed the Senate&apos;s $21 million rider to $10
            million, and both chambers adopted the report on May
            29.<C n={18} /><C n={20} /> Abbott signed it June 20, effective
            immediately.<C n={18} /> The same June, the governor signed
            three more of his: <strong>HB 150</strong>, the Texas Cyber
            Command, on June 2; <strong>HB 149</strong>, the Texas
            Responsible Artificial Intelligence Governance Act, on June 22 –
            Capriglione&apos;s bill with Schwertner as Senate sponsor, the
            mirror image of SB 21; and <strong>HB 1056</strong>, gold and
            silver as legal tender, the same day.<C n={23} /><C n={22} />
            <C n={24} /> The law as it operates is on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            ; the man who bought the coins is on{" "}
            <Link href="/kelly-hancock-bitcoin">Kelly Hancock and Bitcoin</Link>.
          </p>

          <CapriglioneTwoDesignsFigure />

          <h2>The honest counterweight: the unheard bill, the council, and the red ink</h2>
          <p>
            Three things cut against the record, and each is in it. First,
            the chairman did not hear his own bill. HB 1598&apos;s five-year
            hold and donation channel were the discipline the enacted
            reserve lacks, and the committee that could have heard them was
            his; he gave its calendar to the Senate&apos;s design
            instead.<C n={12} /><C n={18} /> Second, the turn. On July 23,
            2025, a month after saying he would run again, he announced he
            would not seek an eighth term – &ldquo;I also feel in my heart
            that I&apos;ve accomplished what I set out to do&rdquo; – and on
            January 5, 2026 became president of the Texas Blockchain
            Council, the association that announced his reserve bill as a
            partnership, while still holding House District 98 until
            January 2027.<C n={25} /><C n={26} /> Public Citizen answered
            the same day, calling the council &ldquo;an enemy of
            transparency&rdquo; for suing the U.S. Department of Energy to
            stop it collecting data on miners, and asking the new president
            to reverse the position.<C n={27} /> Third, the ledger: the
            $10 million he carried was deployed in November and December
            2025 near $91,000 and $87,000 a coin, and by March 2, 2026 was
            worth about $7.8 million.<C n={29} />
          </p>
          <p>
            The fair reading keeps all three and weighs them. A chairman
            who kills his own bill to pass the Lieutenant Governor&apos;s is
            doing the job the House exists to do; the reserve is law because
            the House had a sponsor who preferred a statute to a credit.
            The council presidency is a sitting legislator running the
            industry that lobbied his committee, and the seven-month gap
            between the retirement notice and the appointment is the
            record&apos;s own answer to whether it was planned – the
            question Public Citizen asked is the right one, and it is his to
            answer at the November summit. The ledger is month four of a
            ten-year argument he made in December 2024 with the word
            &ldquo;inflation.&rdquo; What the record establishes beyond
            dispute is narrower and more durable: for ten years, when Texas
            needed a Bitcoin statute drafted, the House member who drafted
            it was Capriglione.
          </p>

          <h2>Where does the Capriglione record stand today?</h2>
          <p>
            As of September 2026: he holds House District 98 until the 90th
            Legislature convenes on January 12, 2027, and will not be in it.
            Keller Mayor Armin Mizani, whom he beat in the 2018 primary,
            won the March 3, 2026 Republican primary for the seat with
            53.5%; Cate Brennan is the Democratic nominee; the general is
            November 3.<C n={28} /><C n={25} /> Two weeks after that, on
            November 18–19, he hosts his first North American Blockchain
            Summit as the council&apos;s president, at the National Medal of
            Honor Museum in Arlington.<C n={30} /> The reserve he carried is
            in the hands of Comptroller{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines</Link>, its
            custodian still unawarded, its first biennial report due
            December 31 – tracked on{" "}
            <Link href="/who-holds-the-texas-bitcoin-reserve">
              the custody watch
            </Link>
            . The organizer who ran the council before him is on{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher and Bitcoin</Link>;
            the senator whose bill he chose is on{" "}
            <Link href="/charles-schwertner-bitcoin">
              Charles Schwertner and Bitcoin
            </Link>
            . When the 90th Legislature takes up the expansions drafted in
            2025&apos;s dead bills, the House will be looking for the
            member who used to write them – and he will be in the gallery,
            lobbying.
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
            Primary record first: Texas Legislature Online for every bill
            history and the HB 1598 text; the Texas House and the Texas
            Tribune directory for the bio; the Texas Blockchain Council for
            the 2026 appointment; the Tribune, KERA, the Observer, the
            Statesman, and the Dallas Morning News for the debate and the
            aftermath; trade press for the filing and the interviews. This
            is a research and reference article, not financial, investment,
            or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {capriglioneSources.map((s) => (
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
