import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  PAXTON_LAST_VERIFIED,
  paxtonSources,
  paxtonTimeline,
  type PaxtonTimelineKind,
} from "@/lib/paxton";

const pageUrl = `${site.url}/angela-paxton-bitcoin`;

export const metadata: Metadata = {
  title: "Angela Paxton: The Senator Who Carried the Definition",
  description:
    "Angela Paxton's Bitcoin record, sourced: the McKinney senator who was Senate sponsor of HB 4474 and HB 1576, the 2021 laws that wrote 'virtual currency' into the Texas Uniform Commercial Code and created the Work Group on Blockchain Matters - 31–0 and 31–0, on the uncontested calendar, without a floor speech. Her own three blockchain bills that session died in committee. The Lieutenant Governor's appointee to the work group; the Texas Blockchain Council's 2022 Legislator of the Year; no digital-asset bill under her name since, and reliable yea votes on the reserve, the registry, the brake, and the kill switch.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Angela Paxton: The Senator Who Carried the Definition",
    description:
      "Texas's first two blockchain laws were House bills. They became law because a first-term senator from McKinney carried them through the upper chamber. The carrier's record, from the sandbox to the silence. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Angela Paxton?",
    a: "Angela Paxton is a Republican from McKinney who has represented Texas Senate District 8 - parts of Collin County plus Hunt and Rains counties - since January 2019, after twenty-plus years as a high-school mathematics teacher and guidance counselor. She chairs the Senate Economic Development Committee. In Bitcoin history she was the Senate sponsor of HB 4474 and HB 1576, the 2021 laws that defined virtual currency in the Texas Uniform Commercial Code and created the Work Group on Blockchain Matters.",
  },
  {
    q: "What did Angela Paxton do for HB 4474 and HB 1576?",
    a: "She carried both House bills through the Senate in May 2021. HB 1576 was substituted for her own SB 1076 in Business and Commerce on May 11 and passed the Senate May 19; HB 4474 was heard May 18, reported 9–0 on May 20, and passed May 27. Both passed on the Local and Uncontested Calendar, recorded 31–0 and 31–0, which is why no floor remarks exist. Governor Abbott signed them June 7 and June 15, 2021.",
  },
  {
    q: "Has Angela Paxton authored any Bitcoin or blockchain bills?",
    a: "Three, all in 2021 and all dead in committee: SB 344 (electronic signatures secured by blockchain, with Nathan Johnson), SB 1076 (a work group on blockchain matters, the Senate version of HB 1576), and SB 1077 (a work group on digital identity). In 2019 she filed SB 860, a financial-technology regulatory sandbox run by the Attorney General's office, which also died. She authored no digital-asset, blockchain, or mining bills in the 2023 or 2025 sessions.",
  },
  {
    q: "How did Angela Paxton vote on the Texas Strategic Bitcoin Reserve?",
    a: "Yea, twice. She was not an author or coauthor of SB 21, but voted for it when it passed the Senate 25–5 on March 6, 2025, and again when the conference report was adopted 23–8 on May 30, 2025. She also voted for SB 6, the 2025 large-load law (31–0), and was recorded yea on SB 1751 and SB 1929, the 2023 mining bills, which passed on the uncontested calendar.",
  },
  {
    q: "What has Angela Paxton said about Bitcoin?",
    a: "Nothing that has been located. Her campaign site reposted the Texas Blockchain Council's July 2021 release crediting her, with no quote of her own. She was named the council's Legislator of the Year at the November 2022 Texas Blockchain Summit. No press release, op-ed, floor remark, or interview of hers on Bitcoin, mining, or the reserve has been found since.",
  },
];

const kindStyle: Record<PaxtonTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  carried: { color: "var(--accent)", label: "The carrier" },
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
// Two figures - the two bills' Senate path in May 2021, and the sponsor's
// ledger - drawn from the dated, sourced facts on this page (Sept 2026).
// Server-rendered SVG, no client JS.
function PaxtonSenatePathFigure() {
  // May 2021, days 1..31 across the strip.
  const x0 = 60;
  const x1 = 690;
  const dx = (d: number) => x0 + ((d - 1) / 30) * (x1 - x0);
  const lanes = [
    {
      y: 118,
      color: "var(--accent)",
      name: "HB 1576 · the work group",
      stops: [
        { d: 6, l: "referred", sub: "May 6" },
        { d: 11, l: "committee 6–0", sub: "May 11 · in lieu of her SB 1076" },
        { d: 19, l: "Senate 31–0", sub: "May 19 · uncontested calendar" },
        { d: 24, l: "House concurs", sub: "May 24" },
      ],
      signed: "signed June 7",
    },
    {
      y: 218,
      color: "#c98a4e",
      name: "HB 4474 · the definition",
      stops: [
        { d: 13, l: "referred", sub: "May 13" },
        { d: 18, l: "heard", sub: "May 18 · Nichols explains" },
        { d: 20, l: "committee 9–0", sub: "May 20" },
        { d: 27, l: "Senate 31–0", sub: "May 27 · uncontested calendar" },
      ],
      signed: "signed June 15",
    },
  ];
  const ticks = [1, 6, 11, 16, 21, 26, 31];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="Three weeks in May 2021: HB 1576 referred May 6, committee May 11, Senate May 19, House concurrence May 24; HB 4474 referred May 13, heard May 18, committee May 20, Senate May 27; both on the Local and Uncontested Calendar, 31 to 0">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THREE WEEKS IN MAY 2021 · TWO HOUSE BILLS, ONE SENATE SPONSOR</text>
        {/* axis */}
        <line x1={x0} y1="62" x2={x1} y2="62" stroke="var(--border)" strokeWidth="1" />
        {ticks.map((t) => (
          <g key={t}>
            <line x1={dx(t)} y1="58" x2={dx(t)} y2="66" stroke="var(--muted-2)" strokeWidth="1" />
            <text x={dx(t)} y="52" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">May {t}</text>
          </g>
        ))}
        {lanes.map((lane) => (
          <g key={lane.name}>
            <text x="28" y={lane.y - 34} fontSize="11" fontWeight="600" letterSpacing="2" fill={lane.color}>{lane.name.toUpperCase()}</text>
            <line x1={dx(lane.stops[0].d)} y1={lane.y} x2={dx(lane.stops[lane.stops.length - 1].d)} y2={lane.y} stroke={lane.color} strokeWidth="2" />
            <line x1={dx(lane.stops[lane.stops.length - 1].d)} y1={lane.y} x2={x1 + 8} y2={lane.y} stroke={lane.color} strokeWidth="1" strokeDasharray="3 4" />
            <text x={x1 + 14} y={lane.y + 4} fontSize="9.5" fill="var(--muted-2)">{lane.signed}</text>
            {lane.stops.map((s, i) => {
              const up = i % 2 === 0;
              const ly = up ? lane.y - 14 : lane.y + 22;
              return (
                <g key={s.l}>
                  <circle cx={dx(s.d)} cy={lane.y} r="5" fill="var(--surface)" stroke={lane.color} strokeWidth="2" />
                  <text x={dx(s.d)} y={ly} fontSize="11" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{s.l}</text>
                  <text x={dx(s.d)} y={ly + 13} fontSize="9" textAnchor="middle" fill="var(--muted-2)">{s.sub}</text>
                </g>
              );
            })}
          </g>
        ))}
        <text x="405" y="288" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Texas Legislature Online bill histories · Senate Journal May 19 and May 27, 2021 · committee minutes May 11, 18, 20 · viva voce, recorded 31–0 and 31–0</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Three weeks in May. Both of Parker&apos;s bills reached the Senate late in the session and cleared it in under a month, on the calendar reserved for bills nobody objects to. The sponsor&apos;s work happens in the committee rows – the substitution on May 11, the hearing on May 18 – and the floor rows record what an uncontested calendar records: the caption, the sponsor&apos;s name, and 31–0.
      </figcaption>
    </figure>
  );
}

function PaxtonLedgerFigure() {
  const authored = [
    { bill: "SB 860 · 2019", fate: "sandbox · no hearing", ok: false },
    { bill: "SB 344 · 2021", fate: "e-signatures · no hearing", ok: false },
    { bill: "SB 1076 · 2021", fate: "work group · left pending", ok: false },
    { bill: "SB 1077 · 2021", fate: "digital identity · no hearing", ok: false },
    { bill: "88R · 2023", fate: "93 bills, none on the subject", ok: false },
    { bill: "89R · 2025", fate: "167 bills, none on the subject", ok: false },
  ];
  const carried = [
    { bill: "HB 1576 · 2021", fate: "signed June 7", ok: true },
    { bill: "HB 4474 · 2021", fate: "signed June 15", ok: true },
    { bill: "HB 2199 · 2021", fate: "pulled from calendar", ok: false },
  ];
  const voted = [
    { bill: "SB 1751 · 2023", fate: "yea · 31–0", ok: true },
    { bill: "SB 1929 · 2023", fate: "yea · 31–0", ok: true },
    { bill: "SB 21 · Mar 2025", fate: "yea · 25–5", ok: true },
    { bill: "SB 6 · Mar 2025", fate: "yea · 31–0", ok: true },
    { bill: "SB 21 · conf.", fate: "yea · 23–8", ok: true },
  ];
  const row = (r: { bill: string; fate: string; ok: boolean }, x: number, y: number, w: number) => (
    <g key={r.bill + r.fate}>
      <circle cx={x + 8} cy={y - 4} r="4" fill={r.ok ? "#6f9e6a" : "#c98a4e"} />
      <text x={x + 20} y={y} fontSize="11" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{r.bill}</text>
      <text x={x + w} y={y} fontSize="10" textAnchor="end" fill={r.ok ? "#6f9e6a" : "var(--muted-2)"}>{r.fate}</text>
    </g>
  );
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="The sponsor's ledger: four bills she authored on the subject, none enacted; three House bills she carried, two enacted; five pro-industry yea votes from 2023 to 2025">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE SPONSOR&apos;S LEDGER · WROTE, CARRIED, VOTED</text>
        <rect x="28" y="50" width="272" height="176" rx="10" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="44" y="74" fontSize="11" fontWeight="600" letterSpacing="2" fill="#c98a4e">AUTHORED · 4, 0 ENACTED</text>
        {authored.map((r, i) => row(r, 44, 98 + i * 21, 240))}
        <rect x="316" y="50" width="236" height="176" rx="10" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="332" y="74" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">CARRIED · 3, 2 ENACTED</text>
        {carried.map((r, i) => row(r, 332, 98 + i * 21, 204))}
        <text x="332" y="182" fontSize="10" fill="var(--muted-2)">Both statutes on the ledger</text>
        <text x="332" y="196" fontSize="10" fill="var(--muted-2)">are Parker&apos;s House bills</text>
        <text x="332" y="210" fontSize="10" fill="var(--muted-2)">with her name as sponsor.</text>
        <rect x="566" y="50" width="216" height="176" rx="10" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="582" y="74" fontSize="11" fontWeight="600" letterSpacing="2" fill="#6f9e6a">VOTED · 5 YEAS, 0 NAYS</text>
        {voted.map((r, i) => row(r, 582, 98 + i * 21, 184))}
        <text x="405" y="244" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Texas Legislature Online author reports 86R–89R · Senate Journals Apr 12, 2023, Mar 6, Mar 19, May 30, 2025 · green = enacted or yea, amber = not</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The sponsor&apos;s ledger. Everything she wrote on the subject died in committee; everything enacted under her name was written in the House. Since 2021 the record is votes only – five of them, all yea, including both readings of the reserve and the 2023 brake on the miners – and those are the votes of a member who has never once put her name on the front of a digital-asset bill since the session that made her the industry&apos;s legislator of the year.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function AngelaPaxtonBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Angela Paxton: The Senator Who Carried the Definition",
    description:
      "The Bitcoin record of the Texas senator who was Senate sponsor of HB 4474 and HB 1576, the 2021 statutes that defined virtual currency in the Texas UCC and created the Work Group on Blockchain Matters: the three authored bills that died, the May 2021 committee and calendar record, the work-group appointment, the Legislator of the Year award, the silence since, and the votes on the reserve, the registry, the brake, and the large-load law.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Angela Paxton" },
      { "@type": "Legislation", name: "Texas House Bill 4474 (87R)" },
      { "@type": "Legislation", name: "Texas House Bill 1576 (87R)" },
      { "@type": "Thing", name: "Texas Work Group on Blockchain Matters" },
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
        name: "Angela Paxton and Bitcoin",
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
          / Angela Paxton &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The Senate
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Angela Paxton: The Senator Who Carried the Definition
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Texas digital-asset law is written in the House and made in the
            Senate. The two 2021 statutes every later one assumes – the
            sentence that says what virtual currency is, and the work group
            that drew the agenda for the next two sessions – were Tan
            Parker&apos;s bills, and they became law because a first-term
            senator from McKinney, a math teacher who had spent two decades
            in classrooms and a counselor&apos;s office, carried them through
            the upper chamber in three weeks of May. No speech survives,
            because the calendar they passed on records none. Her own three
            blockchain bills that session died in committee. The industry
            made her its legislator of the year. She has not filed on the
            subject since. The sponsorship, the ledger, and the silence are
            the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 24, 2026 · Updated{" "}
            {PAXTON_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Angela Paxton is the Republican state senator from McKinney who
            was the Senate sponsor of HB 4474 and HB 1576, the 2021 laws
            that wrote virtual currency into the Texas Uniform Commercial
            Code and created the Work Group on Blockchain Matters, and the
            Lieutenant Governor&apos;s appointee to that work group. She has
            authored no digital-asset bill since 2021 and voted for the
            Texas Strategic Bitcoin Reserve, the 2023 mining registry and
            brake, and the 2025 large-load law.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Angela Paxton was the Senate sponsor of HB 4474, which passed
              the Senate 31–0 on May 27, 2021 and was signed June 15, 2021.
              <C n={10} /><C n={14} />
            </li>
            <li>
              She was the Senate sponsor of HB 1576, substituted for her own
              SB 1076 in committee on May 11, 2021, passed 31–0 on May 19,
              and signed June 7, 2021.<C n={7} /><C n={9} /><C n={8} />
            </li>
            <li>
              Her three authored blockchain bills of 2021 – SB 344, SB 1076,
              SB 1077 – all died in committee.<C n={17} /><C n={18} />
              <C n={19} />
            </li>
            <li>
              Lt. Gov. Patrick appointed her to the Work Group on Blockchain
              Matters on October 29, 2021; the Texas Blockchain Council
              named her Legislator of the Year on November 18, 2022.
              <C n={21} /><C n={23} />
            </li>
            <li>
              She authored no digital-asset, blockchain, or mining bill in
              the 2023 or 2025 sessions.<C n={24} /><C n={25} />
            </li>
            <li>
              She voted yea on SB 21 on March 6, 2025 (25–5) and on its
              conference report May 30, 2025 (23–8), and yea on SB 6 on
              March 19, 2025 (31–0).<C n={27} /><C n={28} /><C n={30} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the classroom to the calendar
            </h2>
            <span className="text-xs text-muted-2">2018 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {paxtonTimeline.map((e) => {
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
          <h2>Who is Angela Paxton, and why is she on this page?</h2>
          <p>
            Because two of the three statutes this site treats as the
            foundation of Texas Bitcoin law carry her name as Senate
            sponsor. Paxton is a Baylor mathematics graduate who taught
            high-school math and then counseled students for more than
            twenty years before leaving a Frisco guidance office to run for
            the open Collin County seat in 2018.<C n={1} /> She beat Phillip
            Huffines in the Republican primary, 54.3% to 45.7%, in what was
            then the most expensive state Senate race in Texas history,
            twelve million dollars between them, and took the general with
            51.18%.<C n={3} /><C n={4} /><C n={5} /> The Senate seated her on
            Business and Commerce – the committee that would hear every
            digital-asset bill of the next two sessions – and the first
            financial bill she filed there, a fintech regulatory sandbox to
            be run by the Attorney General, drew the question that follows
            her everywhere, since the Attorney General was her husband.
            &ldquo;That has literally nothing to do with why I filed the
            bill,&rdquo; she told the Texas Tribune.<C n={2} /><C n={32} />
            <C n={33} /> It never got a hearing. The rest of the family story
            – the 2023 impeachment trial at which the Senate barred her from
            voting, the 2025 divorce – is context here, not subject.
            <C n={34} /><C n={35} /> The subject is the session in between.
          </p>

          <h2>What did she carry in 2021?</h2>
          <p>
            Both of Parker&apos;s bills, and a third that did not make it.
            She had filed her own versions first: SB 344 with Nathan Johnson
            to recognize electronic signatures secured by blockchain, SB
            1076 for a work group on blockchain matters, SB 1077 for a work
            group on digital identity.<C n={17} /><C n={18} /><C n={19} /> The
            first and third were never heard; the second got a hearing on
            May 4 and was left pending, which in the Texas Senate is a way
            of waiting for the House bill. It arrived. On May 11 the
            committee laid out HB 1576 in lieu of her SB 1076, she sent up
            the substitute and moved it, and it went out 6–0.<C n={9} /> On
            May 19 it passed the Senate on the Local and Uncontested
            Calendar, viva voce, recorded 31–0 and 31–0; the House concurred
            May 24 and Abbott signed June 7.<C n={8} /><C n={7} /> HB 4474 –
            the definition – reached the committee on May 13. On May 18 the
            chair laid it out by its sponsor and recognized Senator Nichols
            to explain it; the Texas Blockchain Council&apos;s Christopher
            Calicott and Unchained Capital&apos;s Joseph Kelly testified for
            it, the bankers&apos; associations registered for it, and no one
            registered against.<C n={11} /><C n={13} /> It was reported 9–0 on
            May 20 and passed 31–0 on May 27; signed June 15, effective
            September 1, 2021.<C n={12} /><C n={14} /><C n={10} /> The
            digital-identity work group, HB 2199, cleared the same committee
            9–0 the same day and was pulled from the uncontested calendar on
            May 26; it died there.<C n={20} /> What the definition says, and
            why it matters, is on{" "}
            <Link href="/tan-parker-bitcoin">Tan Parker and Bitcoin</Link>;
            this is the page for how it got through the other chamber.
          </p>

          <PaxtonSenatePathFigure />

          <h2>What did the sponsorship earn her?</h2>
          <p>
            A seat and an award. On July 14, 2021 the Texas Blockchain
            Council announced that it had &ldquo;spearheaded&rdquo; both
            laws, drafted with the Uniform Law Commission and
            &ldquo;championed especially by Representative Tan Parker and
            Senator Angela Paxton.&rdquo;<C n={15} /> Her campaign site
            reposted the release; it is the only digital-asset item the site
            has ever carried, and it contains no sentence of hers.<C n={16} />
            On October 29, 2021 Lieutenant Governor Patrick named her the
            Senate&apos;s appointee to the sixteen-member work group her
            sponsorship had created, beside Parker, Lee Bratcher, and
            SMU&apos;s Carla Reyes in the chair; the group met monthly, held
            public hearings in May and August 2022, and delivered its
            84-page report and master plan on November 15, 2022.<C n={21} />
            <C n={22} /> Three days later, at the second Texas Blockchain
            Summit, the council named her its Legislator of the Year and
            told a thousand people she had co-authored HB 4474, which she had
            not.<C n={23} /> The organizer who handed her the award is on{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher and Bitcoin</Link>;
            the lieutenant governor who appointed her is on{" "}
            <Link href="/dan-patrick-bitcoin">Dan Patrick and Bitcoin</Link>.
          </p>

          <h2>What has she done on the subject since?</h2>
          <p>
            Voted. In 2023 she moved to Finance and State Affairs and off
            the committee that heard the mining bills; she authored 93 bills
            that session and none on digital assets, the nearest a
            data-center sales-tax exemption that died in Finance.<C n={2} />
            <C n={24} /> When Kolkhorst&apos;s brake on the miners and
            Johnson&apos;s registry passed on April 12, 2023, both went
            through on the Local and Uncontested Calendar, 31–0 and 31–0,
            every senator deemed yea, her included.<C n={29} /> In 2025, now
            chair of Economic Development, she authored 167 bills and none
            on Bitcoin, and she was not among the coauthors of SB 21.
            <C n={1} /><C n={25} /><C n={26} /> She voted for the reserve when
            it passed 25–5 on March 6, for the large-load law when it passed
            31–0 on March 19, and for the reserve again when the conference
            report was adopted 23–8 on May 30.<C n={27} /><C n={30} />
            <C n={28} /> Texans for Fiscal Responsibility scored the reserve
            and SB 6 against her.<C n={31} /> The senator who wrote the brake
            is on{" "}
            <Link href="/lois-kolkhorst-bitcoin">Lois Kolkhorst and Bitcoin</Link>
            ; the one who wrote the registry, and coauthored her 2021
            signature bill, is on{" "}
            <Link href="/nathan-johnson-bitcoin">Nathan Johnson and Bitcoin</Link>
            ; the reserve she voted for twice is on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            .
          </p>

          <PaxtonLedgerFigure />

          <h2>The honest counterweight: the ledger and the silence</h2>
          <p>
            Two things, and neither is a scandal. The ledger first: four
            bills under her own name on financial technology and blockchain
            since 2019, none enacted, none heard past a single pending
            hearing.<C n={32} /><C n={17} /><C n={18} /><C n={19} /> The two
            statutes that carry her name were written in the House, argued
            in committee by another senator, and passed on a calendar that
            requires no argument at all.<C n={11} /><C n={8} /><C n={14} />
            That is not a diminishment – the Texas Senate makes House bills
            into law this way every session, and a sponsor who gets two
            through in three weeks has done the job – but it is the whole
            of the record, and the industry&apos;s press release gave it a
            larger shape than the journal does. Second, the silence. The
            work group she sat on produced eight subcommittees&apos; worth of
            legislative recommendations in November 2022; she filed none of
            them in 2023 or 2025.<C n={22} /><C n={24} /><C n={25} /> No
            press release, floor remark, op-ed, or interview of hers on
            Bitcoin, mining, or the reserve has been located since the
            summit that gave her the award. Her interim charges this year
            are hotel taxes and project-finance zones. The votes are
            reliable and they are all the record contains.
          </p>
          <p>
            The fair reading is the one the ledger gives. Paxton was the
            right sponsor at the right moment – a Business and Commerce
            member the industry could bring its House bills to in a session
            when the chamber had no other – and she delivered both without
            a mark against them. The definition she carried is the sentence
            the reserve, the registry, and the commingling ban all assume,
            and her name is on it in the journal forever. What she has not
            done is anything since, and a page that credits the sponsorship
            has to say so.
          </p>

          <h2>Where does the Paxton record stand today?</h2>
          <p>
            As of September 2026: chair of Economic Development, vice chair
            of State Affairs, re-elected to a four-year term with 59.36% in
            November 2024, and therefore not among the sixteen Senate seats
            on the November 3, 2026 ballot.<C n={1} /><C n={5} /><C n={6} />
            <C n={36} /> The 90th Legislature convenes January 12, 2027 with
            the work group&apos;s recommendations still mostly unfiled and
            the reserve she voted for in the hands of Comptroller{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines</Link>. The
            member who wrote what she carried is on{" "}
            <Link href="/tan-parker-bitcoin">Tan Parker and Bitcoin</Link>;
            the one who carried the reserve through the House is on{" "}
            <Link href="/giovanni-capriglione-bitcoin">
              Giovanni Capriglione and Bitcoin
            </Link>
            . The statute-by-statute record they all sit inside is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            . This page is the senator whose name is on the first two lines
            of it.
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
            Primary record first: the Texas Senate and the Legislative
            Reference Library for the bio and committees; Texas Legislature
            Online for every bill history, author report, and witness list;
            the Senate Journal and committee minutes for every vote; the
            Lieutenant Governor&apos;s office for the appointment; SMU for
            the work group&apos;s report; the Texas Tribune, KERA, the
            Dallas Morning News, and Community Impact for the elections and
            the context; trade press for the rest. This is a research and
            reference article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {paxtonSources.map((s) => (
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
