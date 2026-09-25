import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  MIDDLETON_LAST_VERIFIED,
  middletonSources,
  middletonTimeline,
  type MiddletonTimelineKind,
} from "@/lib/middleton";

const pageUrl = `${site.url}/mayes-middleton-bitcoin`;

export const metadata: Metadata = {
  title: "Mayes Middleton: The Votes Without the Words",
  description:
    "Mayes Middleton's Bitcoin record, sourced: the Wallisville oilman, former House Freedom Caucus chair, Senate District 11 senator, and 2026 Republican nominee for Texas Attorney General - the office that prosecutes crypto fraud - who has never authored a bill or said a word on digital assets, and whose record is votes alone: yea on the Texas Strategic Bitcoin Reserve twice, yea on the gold bill he co-sponsored, yea on the large-load law he coauthored, yea on the 2023 mining and custody bills and the 2021 definition, and a recorded no on the 2021 blockchain work group. A self-funded campaign of more than $15 million, a tied race against Nathan Johnson, and a kiosk-fraud problem neither nominee has addressed.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Mayes Middleton: The Votes Without the Words",
    description:
      "The man who may prosecute crypto fraud in Texas for four years has voted on Bitcoin ten times and spoken about it never. The record, from the Freedom Caucus no to the reserve yea. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Mayes Middleton?",
    a: "Mayes Middleton is a Republican from Wallisville in Chambers County, president of Middleton Oil Company, who served in the Texas House for District 23 from 2019 to 2023, chaired the Texas Freedom Caucus from January 2020, and has represented Senate District 11 - Galveston, Chambers, and part of Harris County - since January 2023, sitting on Business and Commerce and State Affairs. He is the 2026 Republican nominee for Texas Attorney General against Democrat Nathan Johnson.",
  },
  {
    q: "How has Mayes Middleton voted on Bitcoin bills?",
    a: "Yea on nearly all of them. In the House in 2021 he voted for HB 4474, the UCC definition of virtual currency, and was recorded voting no on HB 1576, the Work Group on Blockchain Matters. In the Senate: yea on SB 1751 and SB 1929, the 2023 mining bills; yea on HB 1666, the commingling ban; yea on SB 21, the Texas Strategic Bitcoin Reserve, on March 6, 2025 (25–5) and on its conference report May 30 (23–8); yea on SB 6, the large-load law, which he coauthored; and yea at every stage on HB 1056, gold and silver specie as legal tender, which he co-sponsored.",
  },
  {
    q: "Has Mayes Middleton authored any Bitcoin, crypto, or gold legislation?",
    a: "No. Across four sessions - 79 and 87 bills in the House, 222 and 255 in the Senate - none concerns digital assets, blockchain, mining, central bank digital currencies, or specie. He was a coauthor of SB 6 (2025) and a Senate co-sponsor of HB 1056 (2025). He was not a coauthor of SB 21, of the anti-CBDC resolution SCR 25, or of the medium-of-exchange amendments SJR 67 and HJR 175, which died in his committee.",
  },
  {
    q: "What has Mayes Middleton said about Bitcoin or cryptocurrency?",
    a: "Nothing that has been located. His Senate press room, his campaign site's issues and news pages, his April 2025 announcement, the February 2026 debate, and the Texas Tribune's coverage of his campaign contain no statement on Bitcoin, crypto, blockchain, mining, CBDCs, or gold. His campaign platform addresses consumer protection, foreign threats, ESG, and 'DOGE Texas.' No blockchain or crypto organization appears among his endorsements, and no crypto PAC spent on his race.",
  },
  {
    q: "What is the state of the 2026 attorney general race?",
    a: "Middleton won the March 3, 2026 Republican primary with 39.1% and the May 26 runoff over Chip Roy with 55.2%, funded by more than $15 million of his own money by the primary and $5.2 million more in loans by July. He faces Nathan Johnson, who won the Democratic runoff with 60.5%, on November 3, 2026. ReconMR's September poll had Middleton 45, Johnson 44. Neither nominee has taken a position on the crypto-kiosk scams that cost Texans $56.8 million in 2025.",
  },
];

const kindStyle: Record<MiddletonTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  vote: { color: "#c98a4e", label: "The votes" },
  campaign: { color: "var(--accent)", label: "The campaign" },
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
// Two figures - the ten votes, and the self-funded campaign - drawn from
// the dated, sourced facts on this page (Sept 2026). Server-rendered SVG,
// no client JS.
function MiddletonVotesFigure() {
  const votes = [
    { d: "Apr 23, 2021", bill: "HB 1576 · work group", chamber: "House", how: "NO", tally: "recorded no · 146–0 L&C", ok: false },
    { d: "May 11, 2021", bill: "HB 4474 · the definition", chamber: "House", how: "YEA", tally: "143–0 L&C", ok: true },
    { d: "Apr 12, 2023", bill: "SB 1751 · the brake", chamber: "Senate", how: "YEA", tally: "31–0 calendar", ok: true },
    { d: "Apr 12, 2023", bill: "SB 1929 · the registry", chamber: "Senate", how: "YEA", tally: "31–0 calendar", ok: true },
    { d: "May 15, 2023", bill: "HB 1666 · commingling", chamber: "Senate", how: "YEA", tally: "31–0", ok: true },
    { d: "Mar 6, 2025", bill: "SB 21 · the reserve", chamber: "Senate", how: "YEA", tally: "25–5", ok: true },
    { d: "Mar 19, 2025", bill: "SB 6 · the load law", chamber: "Senate", how: "YEA", tally: "31–0 · coauthor", ok: true },
    { d: "May 28, 2025", bill: "HB 1056 · gold & silver", chamber: "Senate", how: "YEA", tally: "18–12 · co-sponsor", ok: true },
    { d: "May 30, 2025", bill: "SB 21 · conference", chamber: "Senate", how: "YEA", tally: "23–8", ok: true },
  ];
  const y0 = 84;
  const rh = 24;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 330" role="img" aria-label="The votes: nine Bitcoin, mining, and hard-money roll calls from 2021 to 2025, eight yeas and one recorded no on the 2021 blockchain work group">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE VOTES · NINE ROLL CALLS, EIGHT YEAS, ONE NO · 2021 → 2025</text>
        <text x="28" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">DATE</text>
        <text x="150" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">BILL</text>
        <text x="420" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">CHAMBER</text>
        <text x="520" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">VOTE</text>
        <text x="782" y="62" fontSize="9.5" fontWeight="600" letterSpacing="1.5" textAnchor="end" fill="var(--muted-2)">TALLY</text>
        <line x1="28" y1="70" x2="782" y2="70" stroke="var(--border)" strokeWidth="1" />
        {votes.map((v, i) => {
          const y = y0 + i * rh;
          return (
            <g key={v.d + v.bill}>
              {i % 2 === 1 && <rect x="28" y={y - 15} width="754" height={rh} rx="4" fill="var(--surface-2)" />}
              <text x="28" y={y} fontSize="10" fill="var(--muted-2)">{v.d}</text>
              <text x="150" y={y} fontSize="11" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{v.bill}</text>
              <text x="420" y={y} fontSize="10" fill="var(--muted-2)">{v.chamber}</text>
              <rect x="520" y={y - 11} width="40" height="15" rx="7" fill={v.ok ? "#6f9e6a" : "#c98a4e"} />
              <text x="540" y={y} fontSize="9.5" fontWeight="700" textAnchor="middle" fill="var(--background)">{v.how}</text>
              <text x="782" y={y} fontSize="10" textAnchor="end" fill="var(--muted-2)">{v.tally}</text>
            </g>
          );
        })}
        <text x="28" y="312" fontSize="10" fill="var(--muted)">Authored on the subject, 86R–89R: none of 643 bills. Died in his committee unheard: SJR 67 (2023), HJR 175 (2025) - the medium-of-exchange amendment.</text>
        <text x="405" y="326" fontSize="10" textAnchor="middle" fill="var(--muted-2)">House Journals Apr 23 and May 11, 2021 · Senate Journals Apr 12 and May 15, 2023; Mar 6, Mar 19, May 28, May 30, 2025 · TLO author reports A3645 and A1350</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The votes. Nine roll calls in four sessions, and the only no is the first – a Freedom Caucus chairman&apos;s objection to a study committee, not to the asset. From the definition onward he has voted with the industry every time, including on the two bills his own fiscal-conservative scorecard marked against him. What the record does not contain is a single sentence explaining any of it.
      </figcaption>
    </figure>
  );
}

function MiddletonMoneyFigure() {
  // Apr 2025 → Sept 2026, months 0..17.
  const x0 = 90;
  const x1 = 740;
  const mx = (m: number) => x0 + (m / 17) * (x1 - x0);
  const y = 150;
  const marks = [
    { m: 0, l: "Announces", sub: "Apr 15, 2025 · “at least $10M”", ly: 98 },
    { m: 3, l: "$10M loan", sub: "July 2025 report", ly: 208 },
    { m: 10.6, l: "Primary · 39.1%", sub: "Mar 3, 2026 · ~$15M own money", ly: 84 },
    { m: 13.4, l: "Runoff · 55.2%", sub: "May 26 · over Chip Roy", ly: 208 },
    { m: 15, l: "+$5.2M loans", sub: "July 2026 · $118K on hand", ly: 98 },
    { m: 17, l: "45–44", sub: "Sept 17 · ReconMR", ly: 208 },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 260" role="img" aria-label="The self-funded campaign: announced April 15, 2025 with a $10 million pledge, a $10 million loan by July, about $15 million of his own money by the March 3, 2026 primary, the May 26 runoff win, $5.2 million in new loans by July 2026, and a 45 to 44 poll in September">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE CAMPAIGN · SEVENTEEN MONTHS, MOSTLY HIS OWN MONEY, NO POSITION ON THE ASSET</text>
        <rect x={mx(0)} y={y - 22} width={mx(17) - mx(0)} height="44" rx="6" fill="var(--accent)" fillOpacity="0.10" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 3" />
        <text x={(mx(0) + mx(17)) / 2} y={y - 30} fontSize="10" textAnchor="middle" fill="var(--accent)" fontWeight="600" letterSpacing="1.5">STATEMENTS ON BITCOIN, CRYPTO, OR GOLD LOCATED: 0</text>
        <line x1={x0} y1={y} x2={x1} y2={y} stroke="var(--muted-2)" strokeWidth="1.5" />
        {[0, 6, 12, 17].map((m, i) => (
          <text key={m} x={mx(m)} y={y + 40} fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">{["Apr 2025", "Oct 2025", "Apr 2026", "Sept 2026"][i]}</text>
        ))}
        {marks.map((k) => {
          const up = k.ly < y;
          const tick = up ? y - 22 : y + 22;
          const lineEnd = up ? k.ly + 16 : k.ly - 12;
          return (
            <g key={k.l}>
              <circle cx={mx(k.m)} cy={y} r="4.5" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
              <line x1={mx(k.m)} y1={tick} x2={mx(k.m)} y2={lineEnd} stroke="var(--border)" strokeWidth="1" />
              <text x={mx(k.m)} y={k.ly} fontSize="11" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{k.l}</text>
              <text x={mx(k.m)} y={k.ly + 13} fontSize="9" textAnchor="middle" fill="var(--muted-2)">{k.sub}</text>
            </g>
          );
        })}
        <text x="405" y="252" fontSize="10" textAnchor="middle" fill="var(--muted-2)">mayesmiddleton.com · Texas Scorecard July 23, 2025 · Texas Tribune Mar 12 and May 22, 2026 · Ballotpedia · The Texan July 2026 · ReconMR Sept 17, 2026</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The campaign. Seventeen months, a nomination bought largely with his own money, and a race within the margin of error – for an office that will decide whether Texas sues the kiosk operators its peers have sued. Across all of it, on the asset this site covers, the candidate has said nothing that anyone has recorded.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function MayesMiddletonBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mayes Middleton: The Votes Without the Words",
    description:
      "The Bitcoin record of the 2026 Republican nominee for Texas Attorney General: the Freedom Caucus no on the 2021 blockchain work group, the yea on the 2021 definition, the 2023 mining and custody votes, the reserve twice, the large-load law he coauthored, the gold bill he co-sponsored, zero authored bills and zero located statements, the self-funded campaign, and the kiosk-fraud question the office he seeks has not answered.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Mayes Middleton" },
      { "@type": "Legislation", name: "Texas Senate Bill 21 (89R)" },
      { "@type": "Legislation", name: "Texas House Bill 1056 (89R)" },
      { "@type": "Event", name: "2026 Texas Attorney General election" },
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
        name: "Mayes Middleton and Bitcoin",
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
          / Mayes Middleton &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The Senate
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Mayes Middleton: The Votes Without the Words
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            On November 3 Texas will choose the lawyer who decides whether
            the state sues the crypto-kiosk operators its neighbors have
            sued, who defends the reserve if it is challenged, and who
            speaks for Texas when the states take on the federal
            regulators. The Republican nominee is a Wallisville oilman who
            chaired the House Freedom Caucus, sits on the Senate committee
            that hears every digital-asset bill, and has voted on the
            subject nine times – yea on the reserve twice, yea on the gold
            bill he co-sponsored, yea on the load law he coauthored, yea on
            the mines and the custodians and the definition, and one
            recorded no, on a study committee, in 2021. In four sessions
            and a seventeen-month campaign paid for mostly by himself he has
            authored nothing on it and said nothing about it that anyone
            wrote down. The votes, the silence, and the office are the
            record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 25, 2026 · Updated{" "}
            {MIDDLETON_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Mayes Middleton is the Republican state senator from Galveston
            and Chambers counties, a former Texas House member and Freedom
            Caucus chair, and the 2026 Republican nominee for Texas
            Attorney General. He has never authored a bill on Bitcoin,
            digital assets, or gold and has no located public statement on
            them, but has voted for the Texas Strategic Bitcoin Reserve
            twice, coauthored the 2025 large-load law, co-sponsored the
            2025 gold-and-silver specie law, and voted for the 2023 mining
            and custody bills. His one vote against a Bitcoin-adjacent bill
            was a recorded no on the 2021 Work Group on Blockchain Matters.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Middleton voted yea on SB 21 on March 6, 2025 (25–5) and on
              its conference report May 30, 2025 (23–8); he was not a
              coauthor.<C n={14} /><C n={15} /><C n={13} />
            </li>
            <li>
              He was recorded voting no on HB 1576, the Work Group on
              Blockchain Matters, on April 23, 2021, and did not vote no on
              HB 4474, the UCC definition, on May 11, 2021.<C n={8} />
              <C n={9} />
            </li>
            <li>
              He was a coauthor of SB 6, signed June 20, 2025, and a Senate
              co-sponsor of HB 1056, gold and silver specie as legal tender,
              voting yea on both.<C n={16} /><C n={17} /><C n={18} />
              <C n={19} />
            </li>
            <li>
              Of 643 bills he authored across four sessions, none concerns
              digital assets, blockchain, mining, or specie.<C n={21} />
              <C n={22} /><C n={23} />
            </li>
            <li>
              No statement of his on Bitcoin, cryptocurrency, or gold has
              been located in his Senate press room, campaign site, or
              press coverage.<C n={26} /><C n={27} />
            </li>
            <li>
              He won the May 26, 2026 runoff 55.2% to 44.8% after lending
              his campaign more than $15 million, and faces Nathan Johnson
              on November 3, 2026.<C n={30} /><C n={29} /><C n={32} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the caucus to the ballot
            </h2>
            <span className="text-xs text-muted-2">2018 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {middletonTimeline.map((e) => {
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
          <h2>Who is Mayes Middleton, and why is he on this page?</h2>
          <p>
            Because of the office he is running for. Middleton was born in
            Wallisville in 1981, took finance and Plan II at the University
            of Texas and a law degree there in 2008, and became president
            of Middleton Oil Company – independent oil and gas on the Gulf
            Coast and in South Texas, with ranching in five counties and a
            seat on the board of First Liberty National Bank – when his
            father died in 2013.<C n={1} /> For fifteen years before he ran
            he was one of the state&apos;s largest Republican donors, more
            than $300,000 of it to Empower Texans, and when he ran he paid
            for it: about two million dollars to unseat Representative
            Wayne Faircloth in March 2018, a primary he lost in Galveston
            County by 83 votes and won on Chambers.<C n={2} /><C n={3} /> In
            the House he chaired the Texas Freedom Caucus from January
            2020; in the Senate, from January 2023, he has sat on Business
            and Commerce and State Affairs, the two committees through which
            every mining, custody, gold, and reserve bill in this
            site&apos;s record has passed.<C n={4} /><C n={5} /><C n={6} />
            <C n={7} /> The Attorney General of Texas is the state&apos;s
            chief civil litigator and its consumer-protection enforcer, and
            the office&apos;s own record on the asset is on{" "}
            <Link href="/texas-attorney-general-bitcoin">
              the Texas Attorney General and Bitcoin
            </Link>
            . This page is the man who wants it.
          </p>

          <h2>How has he voted?</h2>
          <p>
            With the industry, nine times out of ten, and the exception is
            instructive. On April 23, 2021, Parker&apos;s HB 1576 – a
            sixteen-member Work Group on Blockchain Matters to study the
            technology and report – passed the House on the Local and
            Consent Calendar, and the journal lists Middleton, then chairman
            of the Freedom Caucus, among twenty members &ldquo;recorded
            voting no.&rdquo;<C n={8} /> Eighteen days later HB 4474, the
            bill that actually changed the law by writing virtual currency
            into the Uniform Commercial Code, passed on the same calendar
            with seventeen recorded noes; he was not among them.<C n={9} />
            The pattern held in the Senate. On April 12, 2023 he was deemed
            yea with the whole chamber on Kolkhorst&apos;s brake on the
            miners and Johnson&apos;s registry, and on May 15 voted for the
            commingling ban, 31–0.<C n={10} /><C n={11} /> On March 6, 2025
            he voted yea on SB 21 as it passed 25–5, and on March 19 yea on
            SB 6, the large-load law, of which he was one of eight
            bipartisan coauthors.<C n={14} /><C n={16} /><C n={17} /> In the
            last week of the session he signed on as a co-sponsor of HB
            1056, gold and silver specie as legal tender, and voted yea at
            every stage as it passed 18–12 in a session that ended before
            one in the morning of May 28; on May 30 he voted yea on the
            reserve&apos;s conference report, 23–8.<C n={18} /><C n={19} />
            <C n={15} /> Texans for Fiscal Responsibility, which opposed
            both the reserve and SB 6, scored both votes against a senator
            who otherwise earns a 92.<C n={34} /> The bills, and the
            members who wrote them, are on{" "}
            <Link href="/tan-parker-bitcoin">Tan Parker and Bitcoin</Link>,{" "}
            <Link href="/charles-schwertner-bitcoin">Charles Schwertner and Bitcoin</Link>,{" "}
            <Link href="/phil-king-bitcoin">Phil King and Bitcoin</Link>, and{" "}
            <Link href="/lois-kolkhorst-bitcoin">Lois Kolkhorst and Bitcoin</Link>.
          </p>

          <MiddletonVotesFigure />

          <h2>What has he written or said?</h2>
          <p>
            Nothing, on this subject. The author reports for four sessions
            list 79 and 87 bills under his name in the House and 222 and
            255 in the Senate, and none concerns digital assets,
            blockchain, mining, central bank digital currencies, or specie;
            the nearest are two 2025 bills on how governmental entities may
            invest.<C n={21} /><C n={22} /><C n={23} /> He was not a coauthor
            of SB 21 or of its January precursor, not a coauthor of the
            Senate&apos;s 2023 anti-CBDC resolution, and not a coauthor of
            Parker&apos;s SJR 67 or of HJR 175 – the constitutional right to
            a mutually agreed medium of exchange – both of which died in
            Business and Commerce, his committee, without a
            hearing.<C n={13} /><C n={12} /><C n={20} /> Of thirty bills he
            co-sponsored in 2025, HB 1056 is the only one on
            money.<C n={24} /> His Senate press room holds one release, on an
            unrelated bill.<C n={27} /> His campaign site&apos;s issues page
            addresses consumer protection, foreign threats, ESG, and
            &ldquo;DOGE Texas&rdquo;; its news page holds three posts; its
            endorsements list no blockchain or crypto organization; and his
            April 15, 2025 announcement – &ldquo;I believe in public
            service, not self-service&rdquo; – does not mention the
            asset.<C n={25} /><C n={26} /> Nor does any debate transcript,
            candidate guide, or Tribune profile located. A senator on the
            committee of jurisdiction for six years, running for the
            state&apos;s chief legal office in the year the state bought
            its first bitcoin, has left no sentence on the subject in the
            public record.
          </p>

          <h2>What is the campaign?</h2>
          <p>
            Largely his own money, and a coin flip. He announced one week
            after Ken Paxton entered the U.S. Senate race, pledging
            &ldquo;at least $10 million&rdquo;; the first finance report
            showed the ten-million-dollar personal loan and $156,000 from
            others.<C n={25} /><C n={28} /> By the March 3 primary it was
            about fifteen million of his own, and he led Chip Roy 39.1% to
            31.6% into a runoff in which Roy said of the money flowing
            &ldquo;into groups that then endorse him&rdquo; that &ldquo;it
            just don&apos;t smell right to me.&rdquo;<C n={29} /><C n={2} />
            He won the runoff on May 26, 55.2% to 44.8%; Dan Patrick and
            Angela Paxton endorsed him, Ken Paxton did not formally, and
            Trump did not at all.<C n={30} /><C n={31} /> The July report
            showed $5.2 million in new loans, $3.25 million spent, and
            $118,000 on hand against Johnson&apos;s $291,000; ReconMR&apos;s
            September poll had it 45 to 44.<C n={32} /><C n={33} /> Crypto
            political committees spent nine million dollars in Texas this
            cycle, in federal runoffs; none of it touched this race, and no
            crypto or fintech donor appears in his reports.<C n={36} /> The
            Democrat across the ballot, who wrote the mining registry and
            cut the donors out of the reserve, is on{" "}
            <Link href="/nathan-johnson-bitcoin">Nathan Johnson and Bitcoin</Link>.
          </p>

          <MiddletonMoneyFigure />

          <h2>The honest counterweight: the silence, the money, and the kiosks</h2>
          <p>
            Three things, and the first is the page. A voting record with
            no words behind it can be read two ways – as a legislator who
            follows his caucus and his committee chair on a subject he has
            not studied, or as one who has a view and sees no advantage in
            stating it – and nothing located distinguishes them. The 2021
            no is the only vote that suggests a disposition, and it was cast
            against a study group by the leader of a caucus that voted
            against many. Second, the money. A nomination financed by more
            than twenty million dollars of the candidate&apos;s own funds is
            legal and, in Texas, not unusual; what it removes is the
            ordinary evidence of who wants him in the office, and on this
            subject that evidence is nil in both directions – no crypto
            money for him, none against.<C n={2} /><C n={36} /> Third, the
            kiosks. In July the Tribune reported that Texans lost $56.8
            million to crypto-kiosk scams in 2025, roughly 1,200 victims,
            that the largest operator had gone bankrupt citing litigation
            and enforcement, and that the 2027 session would fight over
            it; the story quoted the Lieutenant Governor, the Speaker, and
            two representatives, and neither nominee for the office that
            enforces the Deceptive Trade Practices Act.<C n={35} /> A page
            about the candidate has to say that the question he will be
            asked first, if he wins, is one he has not been asked yet.
          </p>
          <p>
            The fair reading is that Middleton&apos;s Bitcoin record is a
            reliable yea and an empty page, and that the yea is real: the
            reserve, the definition, the custodians, the mines, the gold,
            and the grid all have his vote, and on two of them his vote
            cost him with the scorekeepers he otherwise satisfies. What
            Texas would get in an Attorney General Middleton, on this
            subject, is whatever he decides once he is asked. The record
            says only that he has not been.
          </p>

          <h2>Where does the Middleton record stand today?</h2>
          <p>
            As of September 2026: the Republican nominee for Attorney
            General, on the November 3 ballot against Nathan Johnson in a
            race polling within one point, holding Senate District 11
            through the campaign.<C n={33} /><C n={7} /> The reserve he
            voted for twice is in the hands of Comptroller{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines</Link>, on the
            same ballot. The office he seeks, and what it has and has not
            done with the asset in eleven years, is on{" "}
            <Link href="/texas-attorney-general-bitcoin">
              the Texas Attorney General and Bitcoin
            </Link>
            ; the statute-by-statute record they all sit inside is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            . This page is the vote without the speech.
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
            history and the author, coauthor, and co-sponsor reports in
            both chambers; the House and Senate Journals for every roll
            call; the senator&apos;s own Senate press room and campaign site
            for what he has said; the Texas Tribune, The Texan, Community
            Impact, Ballotpedia, and ReconMR for the campaign; the
            watchdogs for the counterweight. This is a research and
            reference article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {middletonSources.map((s) => (
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
