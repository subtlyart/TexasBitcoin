import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  KENKING_LAST_VERIFIED,
  kenKingSources,
  kenKingTimeline,
  type KenKingTimelineKind,
} from "@/lib/kenking";

const pageUrl = `${site.url}/ken-king-bitcoin`;

export const metadata: Metadata = {
  title: "Ken King: The Chairman Who Rewrote the Load Law",
  description:
    "Ken King's Bitcoin record, sourced: the Canadian, Texas oilfield-service contractor who chairs House State Affairs and was House sponsor of SB 6, the 2025 large-load law - substituted in committee in two minutes, rewritten on the floor with a seventeen-item amendment adopted 136–3 that narrowed the kill switch to customers with backup generation and moved co-location decisions to the PUC, passed 103–25. Zero digital-asset bills authored, zero words on Bitcoin on the record, yea on every crypto bill that reached the floor including the reserve twice. The 2026 data-center hearings he chairs, the 410 gigawatts in the queue, and the primary he won with 53.9%.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Ken King: The Chairman Who Rewrote the Load Law",
    description:
      "Senate Bill 6 left the Senate 31–0 and left the House a different bill. The chairman who rewrote it in a seventeen-item amendment, who has never said bitcoin on the record and never voted against it. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Ken King?",
    a: "Ken King is a Republican from Canadian, Texas who has represented House District 88 - nineteen counties in the Panhandle and South Plains - since January 2013. He is a third-generation oilfield well-servicing contractor, president of Black Gold Pump and Supply, and since January 2025 chair of the House State Affairs Committee. In Bitcoin history he was the House sponsor of Senate Bill 6, the 2025 large-load law that governs how data centers and Bitcoin mines interconnect with the ERCOT grid and when they can be curtailed. He is not Senator Phil King, the bill's Senate author.",
  },
  {
    q: "What did Ken King change in SB 6?",
    a: "As House sponsor he substituted the Senate bill in committee on May 23, 2025 and then, on May 26, carried a seventeen-item floor amendment adopted 136–3. It narrowed ERCOT's emergency directive to large customers with on-site backup generation, who may be told to deploy it or curtail; struck the Senate's expedited-interconnection program; replaced ERCOT's power to approve co-location arrangements with an ERCOT 120-day study and a PUC 60-day decision; and required customers to be held harmless. He also put the legislative intent in the House Journal: the law was not meant to slow projects already in the works.",
  },
  {
    q: "How has Ken King voted on Bitcoin bills?",
    a: "Yea every time one reached the floor: HB 1576 and HB 4474 in 2021 (the blockchain work group and the UCC definition of virtual currency), HB 1666 in 2023 (the commingling ban, 148–0), SB 1929 in 2023 (mining-facility registration, 140–5), HB 1056 in 2025 (gold and silver specie, through his committee, 89–45), HJR 175 in 2025 (a right to a medium of exchange, 126–13), and SB 21, the Texas Strategic Bitcoin Reserve, both on May 21, 2025 (101–42) and on the conference report May 29 (110–25). He has never authored a digital-asset bill.",
  },
  {
    q: "What has Ken King said about data centers and the grid?",
    a: "On the House floor in May 2025: 'We have single customers coming to Texas with an electric demand that surpasses the size of cities' needs,' comparing the Rio Grande Valley's three-gigawatt peak with Stargate Abilene's projected six. At his committee's April 9, 2026 hearing, where ERCOT reported about 410 gigawatts of large loads in the queue: 'This hearing is only the beginning of a larger conversation.' In August 2026 he called the transmission-line application process flawed and asked ERCOT and the PUC to help write 'legislative guardrails' for data centers so that West Texas power is 'not built on the backs of thousands of farmers and ranchers.' No statement of his on Bitcoin or mining specifically has been located.",
  },
  {
    q: "Is Ken King on the November 2026 ballot?",
    a: "Yes. He won the March 3, 2026 Republican primary over Plainview rancher John Browning, 53.9% to 46.1%, after two House colleagues filmed ads against him and Speaker Burrows campaigned for him, and faces Democrat Heather Wallace on November 3, 2026.",
  },
];

const kindStyle: Record<KenKingTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  load: { color: "var(--accent)", label: "The load law" },
  vote: { color: "#c98a4e", label: "The record" },
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
// Two figures - what the House amendment changed, and the chairman's
// ledger - drawn from the dated, sourced facts on this page (Sept 2026).
// Server-rendered SVG, no client JS.
function KenKingAmendmentFigure() {
  const rows = [
    {
      k: "The kill switch",
      senate: "ERCOT may direct large loads to curtail in an emergency",
      house: "only customers with on-site backup: deploy it, or curtail",
    },
    {
      k: "Fast-track interconnection",
      senate: "an expedited program for flexible loads (10-year contracts)",
      house: "struck in full",
    },
    {
      k: "Co-location review",
      senate: "ERCOT approves or denies within 180 days",
      house: "ERCOT studies 120 days; the PUC decides within 60",
    },
    {
      k: "Who bears the risk",
      senate: "generator liability language",
      house: "“requiring customers to be held harmless”",
    },
  ];
  const y0 = 92;
  const rh = 46;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 330" role="img" aria-label="What the House amendment changed in SB 6: the kill switch narrowed to customers with backup generation, the fast-track struck, co-location decisions moved from ERCOT to the PUC, customers held harmless; adopted 136 to 3 on May 26, 2025">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">SENATE BILL 6 · WHAT THE HOUSE AMENDMENT CHANGED · MAY 26, 2025</text>
        <text x="200" y="66" fontSize="11" fontWeight="600" letterSpacing="2" textAnchor="middle" fill="#c98a4e">AS THE SENATE PASSED IT · 31–0</text>
        <text x="600" y="66" fontSize="11" fontWeight="600" letterSpacing="2" textAnchor="middle" fill="var(--accent)">AS KING AMENDED IT · 136–3</text>
        <line x1="405" y1="76" x2="405" y2={y0 + rows.length * rh - 8} stroke="var(--border)" strokeWidth="1" />
        {rows.map((r, i) => {
          const y = y0 + i * rh;
          return (
            <g key={r.k}>
              <rect x="28" y={y - 16} width="754" height={rh - 6} rx="8" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1" />
              <text x="44" y={y} fontSize="11.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{r.k}</text>
              <text x="44" y={y + 15} fontSize="10" fill="var(--muted-2)">{r.senate}</text>
              <polygon points={`398,${y + 2} 412,${y + 2} 405,${y + 10}`} fill="var(--muted-2)" />
              <text x="420" y={y + 8} fontSize="10.5" fontWeight="600" fill="var(--foreground)">{r.house}</text>
            </g>
          );
        })}
        <text x="28" y="286" fontSize="10" fill="var(--muted)">Unchanged by the House: the 75 MW threshold, the $100,000 study fee, site control, backup-generation disclosure,</text>
        <text x="28" y="300" fontSize="10" fill="var(--muted)">curtailment equipment for loads interconnected after Dec. 31, 2025, and the 4CP transmission-cost review.</text>
        <text x="405" y="318" fontSize="10" textAnchor="middle" fill="var(--muted-2)">House floor amendment 1 by King (SB00006H21) · House Journal May 26, 2025 pp. 6221–27 · HRO analysis CSSB 6 · Senate 31–0 Mar 19, House 103–25 May 27</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        What the House changed. Phil King&apos;s bill gave ERCOT a switch and a fast lane; Ken King&apos;s amendment kept the switch, aimed it at the customers who can answer it with their own generators, took the fast lane out, and moved the decision on who may plug into an existing plant from the grid operator to the commission. The seventeen items passed 136–3. The floor of the law – threshold, fee, site control, disclosure – is the Senate&apos;s; the shape of its enforcement is his.
      </figcaption>
    </figure>
  );
}

function KenKingLedgerFigure() {
  const voted = [
    { bill: "HB 1576 · 2021", fate: "yea · 126–20" },
    { bill: "HB 4474 · 2021", fate: "yea · 126–17" },
    { bill: "HB 1666 · 2023", fate: "yea · 148–0" },
    { bill: "SB 1929 · 2023", fate: "yea · 140–5" },
    { bill: "HB 1056 · 2025", fate: "yea · 89–45" },
    { bill: "HJR 175 · 2025", fate: "yea · 126–13" },
    { bill: "SB 21 · May 21", fate: "yea · 101–42" },
    { bill: "SB 21 · conf.", fate: "yea · 110–25" },
  ];
  const carried = [
    { bill: "SB 6 · 2025", fate: "sponsor · 103–25 · signed" },
  ];
  const authored = [
    { bill: "HB 143 · 2025", fate: "well-site power lines" },
    { bill: "HB 144 · 2025", fate: "pole inspections" },
    { bill: "HB 145 · 2025", fate: "mitigation plans" },
    { bill: "HB 3824 · 2025", fate: "battery fire safety" },
    { bill: "HB 5323 · 2025", fate: "energy waste" },
  ];
  const row = (r: { bill: string; fate: string }, x: number, y: number, w: number, color: string) => (
    <g key={r.bill + r.fate}>
      <circle cx={x + 8} cy={y - 4} r="4" fill={color} />
      <text x={x + 20} y={y} fontSize="11" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{r.bill}</text>
      <text x={x + w} y={y} fontSize="10" textAnchor="end" fill="var(--muted-2)">{r.fate}</text>
    </g>
  );
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The chairman's ledger: eight yea votes on every Bitcoin bill that reached the House floor, one large-load law carried, zero digital-asset bills authored beside five grid and wildfire bills">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE CHAIRMAN&apos;S LEDGER · VOTED, CARRIED, WROTE</text>
        <rect x="28" y="50" width="240" height="222" rx="10" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="44" y="74" fontSize="11" fontWeight="600" letterSpacing="2" fill="#6f9e6a">VOTED · 8 YEAS, 0 NAYS</text>
        {voted.map((r, i) => row(r, 44, 98 + i * 21, 208, "#6f9e6a"))}
        <rect x="284" y="50" width="246" height="222" rx="10" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="300" y="74" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">CARRIED · THE LOAD LAW</text>
        {carried.map((r, i) => row(r, 300, 98 + i * 21, 218, "var(--accent)"))}
        <text x="300" y="130" fontSize="10" fill="var(--muted-2)">Committee substitute May 23 (12–0),</text>
        <text x="300" y="144" fontSize="10" fill="var(--muted-2)">seventeen-item floor amendment</text>
        <text x="300" y="158" fontSize="10" fill="var(--muted-2)">May 26 (136–3), third reading May 27</text>
        <text x="300" y="172" fontSize="10" fill="var(--muted-2)">(103–25), Senate concurrence May 29,</text>
        <text x="300" y="186" fontSize="10" fill="var(--muted-2)">signed June 20, 2025 - the same day</text>
        <text x="300" y="200" fontSize="10" fill="var(--muted-2)">as the reserve. The only digital-asset</text>
        <text x="300" y="214" fontSize="10" fill="var(--muted-2)">statute with his name on it is the one</text>
        <text x="300" y="228" fontSize="10" fill="var(--muted-2)">that never says the words.</text>
        <rect x="546" y="50" width="236" height="222" rx="10" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="562" y="74" fontSize="11" fontWeight="600" letterSpacing="2" fill="#c98a4e">WROTE · 0 ON THE SUBJECT</text>
        {authored.map((r, i) => row(r, 562, 98 + i * 21, 208, "#c98a4e"))}
        <text x="562" y="214" fontSize="10" fill="var(--muted-2)">His 2025 filings are the grid he</text>
        <text x="562" y="228" fontSize="10" fill="var(--muted-2)">watched burn in February 2024.</text>
        <text x="405" y="290" fontSize="10" textAnchor="middle" fill="var(--muted-2)">House Journals 87R–89R record votes · Texas Legislature Online author and sponsor reports, 89R, code A2455</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The chairman&apos;s ledger. Eight Bitcoin and hard-money votes since 2021, eight yeas, including the reserve on both passages; one statute carried, which governs the industry&apos;s power without naming it; nothing authored on the subject in seven sessions. What he writes is wildfire and wellhead law. What he decides, as chair, is which bills the committee hears – and in 2025 the gold bill got its hearing and the reserve got its vote.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function KenKingBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ken King: The Chairman Who Rewrote the Load Law",
    description:
      "The Bitcoin record of the Texas House State Affairs chairman who was House sponsor of SB 6, the 2025 large-load law: the committee substitute, the seventeen-item floor amendment adopted 136–3, the journal exchange on legislative intent, the floor quotes, the eight yea votes on every Bitcoin bill to reach the floor, the 2026 data-center hearings and the 410-gigawatt queue, the letter on transmission and landowners, the oilfield business, and the primary.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Ken King" },
      { "@type": "Legislation", name: "Texas Senate Bill 6 (89R)" },
      { "@type": "Thing", name: "ERCOT large-load interconnection" },
      { "@type": "Organization", name: "Texas House Committee on State Affairs" },
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
        name: "Ken King and Bitcoin",
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
          / Ken King &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The House
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Ken King: The Chairman Who Rewrote the Load Law
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            There are two Kings in the Texas Legislature and the large-load
            law belongs to both. Senator Phil King wrote Senate Bill 6 and
            sent it to the House 31–0. Representative Ken King – a
            third-generation well-servicing contractor from Canadian, in
            the northeast corner of the Panhandle, chairing State Affairs
            in his first session with the gavel – substituted it in a
            two-minute committee meeting, rewrote it on the floor with a
            seventeen-item amendment that passed 136–3, and put the
            legislative intent into the journal himself. The statute Texas
            has, the one that decides when a Bitcoin mine or a data center
            can be told to shed load, is the Senate&apos;s floor and the
            House&apos;s shape. He has never said the word bitcoin on the
            record and never voted against it. The amendment, the ledger,
            and the hearings are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 24, 2026 · Updated{" "}
            {KENKING_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Ken King is the Republican state representative from Canadian,
            Texas who chairs the House State Affairs Committee and was the
            House sponsor of Senate Bill 6, the 2025 large-load law that
            sets the interconnection rules and emergency curtailment
            authority for data centers and Bitcoin mines on the ERCOT grid.
            He rewrote the Senate&apos;s bill with a floor amendment adopted
            136–3 on May 26, 2025, has never authored a digital-asset bill,
            and has voted yea on every Bitcoin bill to reach the House
            floor, including the Texas Strategic Bitcoin Reserve.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Ken King was the House sponsor of SB 6, reported from his
              committee 12–0 on May 23, 2025, passed by the House 103–25 on
              May 27, and signed June 20, 2025.<C n={7} /><C n={8} />
              <C n={12} />
            </li>
            <li>
              His seventeen-item floor amendment, adopted 136–3 on May 26,
              2025, narrowed ERCOT&apos;s curtailment directive to customers
              with on-site backup generation and struck the Senate&apos;s
              expedited-interconnection program.<C n={10} /><C n={11} />
            </li>
            <li>
              He voted yea on SB 21, the Texas Strategic Bitcoin Reserve, on
              May 21, 2025 (101–42) and on its conference report May 29
              (110–25).<C n={22} /><C n={23} />
            </li>
            <li>
              He has authored no bill on digital assets, blockchain, mining,
              or data centers in seven sessions; his 2025 filings are grid
              and wildfire bills.<C n={15} />
            </li>
            <li>
              On April 9, 2026 he chaired the State Affairs hearing at which
              ERCOT reported about 410 gigawatts of large loads seeking
              interconnection, roughly 87% of them data centers.<C n={26} />
              <C n={27} />
            </li>
            <li>
              He won the March 3, 2026 Republican primary 53.9% to 46.1% and
              faces Heather Wallace on November 3, 2026.<C n={4} />
              <C n={35} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the wellhead to the gavel
            </h2>
            <span className="text-xs text-muted-2">2012 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {kenKingTimeline.map((e) => {
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
          <h2>Who is Ken King, and which King is he?</h2>
          <p>
            The House one. Ken King was born in Canadian in 1971 into a
            well-servicing family and runs the third generation of it –
            Black Gold Pump and Supply, King Well Service, a leasing company,
            a cattle operation – with the trade memberships to match:
            the American Petroleum Institute, the Independent Petroleum
            Association, the Panhandle Producers and Royalty
            Owners.<C n={3} /><C n={5} /> He served on the Canadian school
            board and chaired the county appraisal district before beating
            an incumbent in the 2012 Republican runoff, 54–46, for a
            district that now covers nineteen counties from the Oklahoma
            line to the New Mexico line.<C n={1} /><C n={4} /><C n={5} /> His
            first decade in the House was Public Education and a series of
            chairs – Culture, Recreation and Tourism in 2021, Licensing in
            2023, the investigation into the February 2024 Panhandle
            wildfires that burned a million acres, some of them
            his.<C n={2} /> &ldquo;The Panhandle doesn&apos;t have a new wind
            problem; we have an 80-year-old infrastructure problem,&rdquo;
            he said of what that investigation found.<C n={36} /> In January
            2025 he was one of the Panhandle bloc behind Dustin Burrows for
            Speaker, and Burrows gave him State Affairs – the committee that
            hears the grid.<C n={6} /><C n={1} /> The senator who wrote the
            bill he carried is on{" "}
            <Link href="/phil-king-bitcoin">Phil King and Bitcoin</Link>; the
            two are not related, and this page is the other one.
          </p>

          <h2>What did he do to Senate Bill 6?</h2>
          <p>
            Rewrote its enforcement. The bill arrived from the Senate on
            April 22, 2025, thirty-one votes to none, and sat in his
            committee for a month.<C n={7} /> On May 23, at a formal meeting
            called to order at 3:45 p.m., he laid it out, offered a complete
            committee substitute, had it adopted without objection, and
            moved it favorably, 12–0 with three absent; the committee
            adjourned at 3:47.<C n={8} /> The House Research
            Organization&apos;s digest describes the substitute: the 75
            megawatt threshold, the $100,000 study fee, site control and
            financial commitment, disclosure of on-site backup generation,
            <Link href="/ercot-bitcoin">ERCOT</Link>&apos;s authority to
            direct large loads to deploy backup or
            curtail once other services are exhausted, mandatory
            curtailment equipment for transmission-voltage loads
            interconnected after December 31, 2025, and a demand-reduction
            service ERCOT would procure.<C n={9} /> Then, on May 26, the
            floor amendment. Seventeen items: the emergency directive is
            narrowed to customers &ldquo;with on-site backup generating
            facilities,&rdquo; who &ldquo;may be directed to either
            deploy&rdquo; that backup or curtail; the Senate&apos;s
            expedited-interconnection program for flexible loads is struck
            in full; ERCOT&apos;s 180-day power to approve or deny
            co-location arrangements becomes an ERCOT study of 120 days and
            a Public Utility Commission decision within 60, with the
            decision moved from the grid operator to the commission;
            &ldquo;dispatchable&rdquo; is inserted before the capacity the
            arrangements must not impair; and generator liability language
            becomes a requirement that customers be held
            harmless.<C n={10} /> Anchía amended it 108–19, the House adopted
            it 136–3, Raymond added a provision letting excess power be sold
            to lower water bills, and the bill passed to third reading
            117–24.<C n={11} /> What the finished statute does, clause by
            clause, is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            ; the loads it governs are on{" "}
            <Link href="/bitcoin-mining-map-texas">the mining map</Link>.
          </p>

          <KenKingAmendmentFigure />

          <h2>How did he explain it?</h2>
          <p>
            In gigawatts and in the journal. &ldquo;We have single customers
            coming to Texas with an electric demand that surpasses the size
            of cities&apos; needs,&rdquo; he told the House; the whole Rio
            Grande Valley peaks at three gigawatts, and Stargate in Abilene
            was projected at twice that by 2030. &ldquo;We certainly
            don&apos;t want large-load customers that sometimes are data
            centers for military operations to just be without
            power.&rdquo;<C n={13} /> To the Tribune: &ldquo;I think what
            this bill is seeking to do is set out clear rules where large
            load customers that want to come to Texas know what they&apos;re
            getting when they get here.&rdquo;<C n={14} /> Then the part that
            lawyers will read for a decade. In a printed exchange with
            Representative Ashby on May 26, King affirmed for the record
            that the bill &ldquo;is not to slow down large load projects
            that are currently in the works,&rdquo; that a load co-locating
            with an existing generator under a contract signed before
            September 1 faces no new process, and that ERCOT and the
            commission may begin the review &ldquo;immediately upon
            enactment.&rdquo;<C n={11} /> The House passed the bill 103–25 on
            May 27, the Senate concurred May 29, and Abbott signed it June
            20 – the same day as the reserve.<C n={12} /><C n={23} />
            <C n={7} /> The word bitcoin does not appear in any of it. The
            senator whose committee wrote the Senate&apos;s version is on{" "}
            <Link href="/charles-schwertner-bitcoin">
              Charles Schwertner and Bitcoin
            </Link>
            .
          </p>

          <h2>What is his record on the Bitcoin bills themselves?</h2>
          <p>
            Eight votes, eight yeas, nothing authored. He was not among the
            noes when Parker&apos;s HB 1576 and HB 4474 passed on Local and
            Consent in 2021, 126–20 and 126–17.<C n={17} /><C n={18} /> He
            voted for Capriglione&apos;s commingling ban in April 2023,
            148–0, and for Johnson&apos;s mining registry that May,
            140–5.<C n={19} /><C n={20} /> Kolkhorst&apos;s SB 1751, the
            brake on the miners, died unheard in House State Affairs that
            session – a committee he was not on; the chair who let it sit
            was someone else.<C n={21} /><C n={2} /> In 2025 the gold-and-
            silver specie bill came through his own committee – referred
            March 7, heard March 26, reported April 23 – and he voted for
            it on the floor, 89–45; he voted for HJR 175, the right to a
            mutually agreed medium of exchange, 126–13; and he voted for
            SB 21 on May 21, 101–42, and for its conference report on May
            29, 110–25.<C n={24} /><C n={25} /><C n={22} /><C n={23} /> His
            own 2025 filings are the wildfire package the investigation
            produced – power lines at well sites, pole inspections, utility
            mitigation plans, battery-storage fire safety – and a
            committee on energy waste.<C n={15} /> The representative who
            carried the reserve through his chamber is on{" "}
            <Link href="/giovanni-capriglione-bitcoin">
              Giovanni Capriglione and Bitcoin
            </Link>
            ; the reserve is on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            ; the brake that died in his committee before he had it is on{" "}
            <Link href="/lois-kolkhorst-bitcoin">Lois Kolkhorst and Bitcoin</Link>.
          </p>

          <KenKingLedgerFigure />

          <h2>What is he doing with the law now?</h2>
          <p>
            Holding the hearings. On March 26, 2026 the Speaker charged
            State Affairs to study data centers – their place in
            competitiveness and national security, the workforce, how to
            &ldquo;streamline regulations while enabling communities to plan
            and manage growth responsibly&rdquo; – and &ldquo;the
            implementation of SB 6 and the Large Load Batch Study Process
            proposed by ERCOT.&rdquo;<C n={26} /> On April 9 King chaired the
            first hearing, invited witnesses only: ERCOT&apos;s chief
            executive reported approximately 410 gigawatts of large loads
            seeking interconnection, about 87% of them data centers, to be
            studied in batches roughly every six months.<C n={27} />
            &ldquo;This hearing is only the beginning of a larger
            conversation as the Legislature prepares to develop a policy
            approach to incorporating the expanding data center industry
            into the state,&rdquo; he said.<C n={28} /> On August 19 the
            committee took public testimony for a full day on data centers
            and the 765-kilovolt transmission lines being routed across the
            Panhandle and the Permian; King called it &ldquo;really a
            routing issue&rdquo; and said many of the proposals reaching him
            &ldquo;kind of erode private property rights.&rdquo;<C n={29} />
            <C n={30} /> Five days later he wrote ERCOT and the commission
            that the transmission application process was flawed, that
            landowners were being noticed late, and that he wanted their
            help drafting &ldquo;legislative guardrails&rdquo; for data
            centers: &ldquo;West Texas and the Permian Basin need power, but
            not built on the backs of thousands of farmers and
            ranchers.&rdquo;<C n={31} /> The loads in that queue, and the miners turning into them, are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining map</Link>.
          </p>

          <h2>The honest counterweight: the thin record, the business, and the primary</h2>
          <p>
            Three things. The thin record first: the only digital-asset
            statute with his name on it never mentions the asset, and the
            rest of his Bitcoin record is eight floor votes cast the way
            the House majority cast them.<C n={15} /><C n={16} /> No
            statement of his on Bitcoin, mining, or the reserve has been
            located – no press release, no op-ed, no floor remark – and his
            words on the load law are about data centers and cities and
            gigawatts. That is the honest measure of a chairman whose
            subject is the grid, not the coin; the coin is on this page
            because the grid is where Texas decides what the coin may
            consume. Second, the business. He chairs the committee that
            oversees the grid and large loads while running oilfield-service
            companies and authoring well-site power-line law, and no
            reporter has framed that as a conflict; the record here is that
            no one has asked, not that anyone has answered.<C n={3} />
            <C n={15} /> Third, the primary. The chairman who let more than a
            hundred bills die in State Affairs, by his critics&apos; count,
            drew a Plainview rancher, two House colleagues filming ads
            against him, a seventh consecutive failing grade from Texans for
            Fiscal Responsibility, and a casino-funded PAC spending $246,000
            to defend him, and won on March 3, 2026 with 53.9%.<C n={32} />
            <C n={34} /><C n={33} /><C n={4} />
          </p>
          <p>
            The fair reading keeps the amendment in the middle of the page.
            The Senate wrote a bill that gave the grid operator a switch and
            a fast lane; the House, through him, kept the switch and aimed
            it at the customers who can answer it with their own generators,
            took the fast lane out, and moved the co-location decision to a
            commission that answers to the Legislature. Whether that made
            the law better or slower is a question the 410-gigawatt queue
            will answer before the 90th session does. What is not in
            question is whose hand shaped it.
          </p>

          <h2>Where does the Ken King record stand today?</h2>
          <p>
            As of September 2026: chair of State Affairs, on the November 3
            ballot against Heather Wallace, with an interim report on data
            centers and SB 6 implementation due before the 90th Legislature
            convenes January 12, 2027.<C n={1} /><C n={35} /><C n={26} /> The
            transmission-cost review the law ordered is due from the
            commission by December 31, 2026.<C n={9} /> The senator who
            wrote the bill is on{" "}
            <Link href="/phil-king-bitcoin">Phil King and Bitcoin</Link>; the
            reserve he voted for twice is in the hands of Comptroller{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines</Link>; the
            statute-by-statute record they all sit inside is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            . This page is the chairman who gave the load law its shape.
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
            Primary record first: the Texas House and the Legislative
            Reference Library for the bio and committees; Texas Legislature
            Online for every bill history, author and sponsor report, and
            the amendment text; the House Journal for every record vote and
            the legislative-intent exchange; the House Research Organization
            for the analysis; the committee&apos;s minutes and notices;
            ERCOT for the queue; the Texas Tribune, Community Impact, and
            Ballotpedia for the quotes, the elections, and the terms; the
            watchdogs for the counterweight. This is a research and
            reference article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {kenKingSources.map((s) => (
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
