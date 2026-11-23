import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";
import { aboutGraph } from "@/lib/same-as";
import {
  ECKHARDT_LAST_VERIFIED,
  eckhardtSources,
  eckhardtTimeline,
  type EckhardtTimelineKind,
} from "@/lib/eckhardt";

const pageUrl = `${site.url}/sarah-eckhardt-bitcoin`;
const PAGE_TITLE = "Sarah Eckhardt and Bitcoin: The Senator Who Voted for the Reserve";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    "Sarah Eckhardt's Bitcoin record, sourced: the Texas senator from District 14 who voted yea on Senate Bill 21 (March 6, 2025) creating the Texas Strategic Bitcoin Reserve, then told the Star-Telegram that state funds should go to traditional infrastructure rather than high-risk speculative assets. On November 3, 2026 she defeated Comptroller Don Huffines to become comptroller-elect; county canvasses are complete, with statewide certification due by December 7.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages(PAGE_TITLE, { kicker: "People" }),
    type: "article",
    title: PAGE_TITLE,
    description:
      "A yea on the Texas Strategic Bitcoin Reserve, then a voter-guide answer that treats crypto as a speculative asset for state funds. On November 3, 2026 she won the office that holds it. Sourced.",
    url: pageUrl,
  },
};

const faqs = [
  {
    q: "Who is Sarah Eckhardt?",
    a: "Sarah Eckhardt is the Democratic Texas senator from District 14, sworn in July 31, 2020. She is from Austin. She was a Travis County attorney, commissioner, and county judge before the Senate. On November 3, 2026 she defeated Comptroller Don Huffines for the term beginning January 2027, making her comptroller-elect; the result awaits statewide certification, due by December 7.",
  },
  {
    q: "Did Sarah Eckhardt vote for the Texas Bitcoin reserve?",
    a: "Yes. On March 6, 2025, she voted yea on CSSB 21 on third reading. The Senate passed the bill 25–5. Governor Abbott signed Senate Bill 21 on June 20, 2025. The enrolled text creates the Texas Strategic Bitcoin Reserve and gives the comptroller custody of it.",
  },
  {
    q: "Does Sarah Eckhardt support investing state money in Bitcoin?",
    a: "The two sourced sentences point different ways. She voted yea on the bill that created the state reserve. In a February 14, 2026 Star-Telegram questionnaire, running for comptroller, she said Texas should prioritize traditional infrastructure and human capital rather than high-risk speculative assets. She has not taken the comptroller's oath, so there is not yet a record of what she does with the reserve.",
  },
  {
    q: "Did Sarah Eckhardt win the 2026 Texas comptroller election?",
    a: "Yes. On November 3, 2026, at 100% of polling locations reporting, Sarah Eckhardt (D) defeated Don Huffines (R) 5,014,496 (51.30%) to 4,511,185 (46.15%); The Texan called the race election night. County canvasses are complete; the statewide canvass that certifies the result runs November 21–December 7, 2026. Huffines remains the appointed comptroller until the January 2027 term.",
  },
  {
    q: "Will Sarah Eckhardt control the Texas Bitcoin reserve?",
    a: "If she takes the office, yes, by statute. Senate Bill 21 says the comptroller has custody of the reserve and sits on its five-member advisory committee. Both pass with the office. She is not yet comptroller. Don Huffines holds the office by appointment until the January 2027 term.",
  },
];

const kindStyle: Record<EckhardtTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  vote: { color: "var(--accent)", label: "The vote" },
  words: { color: "#8a7fb5", label: "The words" },
  watch: { color: "#c98a4e", label: "The watch" },
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
function EckhardtTensionFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg
        className="h-auto w-full min-w-[640px]"
        viewBox="0 0 810 280"
        role="img"
        aria-label="Two sourced acts: Eckhardt's March 6, 2025 yea on CSSB 21, and her February 14, 2026 Star-Telegram answer on state crypto investment"
      >
        <text
          x="28"
          y="30"
          fontSize="11"
          fontWeight="600"
          letterSpacing="2"
          fill="var(--accent)"
        >
          TWO ACTS · THE VOTE AND THE QUESTIONNAIRE
        </text>
        <rect
          x="28"
          y="52"
          width="366"
          height="176"
          rx="8"
          fill="var(--surface-2)"
          stroke="var(--border)"
        />
        <text x="48" y="78" fontSize="10" fontWeight="600" letterSpacing="1.5" fill="#6f9e6a">
          MARCH 6, 2025 · SENATE JOURNAL P. 423
        </text>
        <text
          x="48"
          y="108"
          fontSize="18"
          fontWeight="600"
          fill="var(--foreground)"
          fontFamily="var(--font-display)"
        >
          Yea on CSSB 21
        </text>
        <text x="48" y="132" fontSize="12" fill="var(--muted)">
          Third reading · Yeas 25, Nays 5
        </text>
        <text x="48" y="154" fontSize="12" fill="var(--muted)">
          Eckhardt in the yeas
        </text>
        <text x="48" y="186" fontSize="11" fill="var(--muted-2)">
          The bill that created the Texas
        </text>
        <text x="48" y="202" fontSize="11" fill="var(--muted-2)">
          Strategic Bitcoin Reserve
        </text>
        <rect
          x="416"
          y="52"
          width="366"
          height="176"
          rx="8"
          fill="var(--surface-2)"
          stroke="var(--border)"
        />
        <text x="436" y="78" fontSize="10" fontWeight="600" letterSpacing="1.5" fill="#c98a4e">
          FEBRUARY 14, 2026 · STAR-TELEGRAM
        </text>
        <text
          x="436"
          y="108"
          fontSize="18"
          fontWeight="600"
          fill="var(--foreground)"
          fontFamily="var(--font-display)"
        >
          Not speculation
        </text>
        <text x="436" y="132" fontSize="12" fill="var(--muted)">
          Asked: should Texas invest in
        </text>
        <text x="436" y="150" fontSize="12" fill="var(--muted)">
          cryptocurrency?
        </text>
        <text x="436" y="178" fontSize="11" fill="var(--muted-2)">
          “traditional infrastructure and
        </text>
        <text x="436" y="194" fontSize="11" fill="var(--muted-2)">
          human capital” — not “high-risk
        </text>
        <text x="436" y="210" fontSize="11" fill="var(--muted-2)">
          speculative assets.”
        </text>
        <text
          x="405"
          y="258"
          fontSize="10.5"
          textAnchor="middle"
          fill="var(--muted-2)"
        >
          Senate Journal, March 6, 2025 · Star-Telegram questionnaire, February 14, 2026, under her heading
        </text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Two sourced acts, eleven months apart. A yea on the bill that built the
        reserve, then a voter-guide answer that treats crypto as the wrong
        place for state money. They are both on the record. Neither is yet a
        decision in the comptroller&apos;s chair.
      </figcaption>
    </figure>
  );
}

function EckhardtReturnsFigure() {
  const eckW = 280;
  const huffW = 252;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg
        className="h-auto w-full min-w-[640px]"
        viewBox="0 0 810 250"
        role="img"
        aria-label="November 3, 2026 Secretary of State returns for Texas comptroller at 100 percent of polling locations reporting; county canvasses complete, statewide certification pending"
      >
        <text
          x="28"
          y="30"
          fontSize="11"
          fontWeight="600"
          letterSpacing="2"
          fill="var(--accent)"
        >
          ELECTION RETURNS · COMPTROLLER OF PUBLIC ACCOUNTS · NOV. 3, 2026
        </text>
        <text
          x="278"
          y="72"
          fontSize="12"
          fontWeight="600"
          textAnchor="end"
          fill="var(--foreground)"
          fontFamily="var(--font-display)"
        >
          Sarah Eckhardt (D)
        </text>
        <rect x="290" y="58" width={eckW} height="18" rx="3" fill="var(--accent)" />
        <text x="578" y="72" fontSize="11" fontWeight="600" fill="var(--foreground)">
          5,014,496
        </text>
        <text x="670" y="72" fontSize="9.5" fill="var(--muted-2)">
          51.30%
        </text>
        <text
          x="278"
          y="102"
          fontSize="12"
          fontWeight="600"
          textAnchor="end"
          fill="var(--foreground)"
          fontFamily="var(--font-display)"
        >
          Don Huffines (R)
        </text>
        <rect x="290" y="88" width={huffW} height="18" rx="3" fill="var(--muted-2)" />
        <text x="550" y="102" fontSize="11" fontWeight="600" fill="var(--foreground)">
          4,511,185
        </text>
        <text x="670" y="102" fontSize="9.5" fill="var(--muted-2)">
          46.15%
        </text>
        <text
          x="278"
          y="132"
          fontSize="12"
          fontWeight="600"
          textAnchor="end"
          fill="var(--foreground)"
          fontFamily="var(--font-display)"
        >
          Echavarria-Garza (L)
        </text>
        <rect x="290" y="118" width="18" height="18" rx="3" fill="var(--border)" />
        <text x="318" y="132" fontSize="11" fontWeight="600" fill="var(--foreground)">
          185,187
        </text>
        <text x="670" y="132" fontSize="9.5" fill="var(--muted-2)">
          1.89%
        </text>
        <text
          x="278"
          y="162"
          fontSize="12"
          fontWeight="600"
          textAnchor="end"
          fill="var(--foreground)"
          fontFamily="var(--font-display)"
        >
          Shehla Faizi (G)
        </text>
        <rect x="290" y="148" width="10" height="18" rx="3" fill="var(--border)" />
        <text x="310" y="162" fontSize="11" fontWeight="600" fill="var(--foreground)">
          63,817
        </text>
        <text x="670" y="162" fontSize="9.5" fill="var(--muted-2)">
          0.65%
        </text>
        <text
          x="405"
          y="202"
          fontSize="10.5"
          textAnchor="middle"
          fill="var(--muted-2)"
        >
          Texas Secretary of State, 100% of polling locations reporting. County
          canvasses complete; statewide certification due by December 7, 2026.
        </text>
        <text
          x="405"
          y="220"
          fontSize="10.5"
          textAnchor="middle"
          fill="var(--muted-2)"
        >
          Shares computed from those four totals (9,774,685 ballots). The Texan called the
          race; the table is the figure.
        </text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        County-canvassed returns, pending the statewide canvass. The names and
        totals are the Secretary of State&apos;s table. The percentages are
        computed from those four numbers. Huffines remains in office by
        appointment until January 2027.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function SarahEckhardtBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(eckhardtSources),
    headline: PAGE_TITLE,
    description:
      "The sourced Bitcoin record of Sarah Eckhardt: a yea on Senate Bill 21, a voter-guide answer that treats crypto as a speculative asset for state funds, and the November 3, 2026 election she won for the office that holds the Texas Strategic Bitcoin Reserve.",
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: site.logo },
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: site.logo },
    },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-11-22",
    dateModified: "2026-11-23",
    about: aboutGraph([
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Sarah Eckhardt" },
      { "@type": "Thing", name: "Texas Strategic Bitcoin Reserve" },
    ]),
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
        name: "Sarah Eckhardt and Bitcoin",
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
          / Sarah Eckhardt &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The Comptroller&apos;s desk
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Sarah Eckhardt and Bitcoin: The Senator Who Voted for the Reserve
          </h1>
          <aside className="mt-5 rounded-xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted">
            <strong>November 3, 2026 general election.</strong>{" "}
            Sarah Eckhardt (D) defeated Don Huffines (R) 5,014,496 (51.30%) to 4,511,185
            (46.15%); V. Alonzo Echavarria-Garza (L) received 185,187 (1.89%) and
            Shehla Faizi (G) 63,817 (0.65%) (100% of polling locations reporting).
            County canvasses are complete; the statewide canvass that certifies the result runs November 21–December 7, 2026.{" "}
            <a
              href="https://electionresults.sos.state.tx.us/results.html"
              className="underline"
            >
              Texas Secretary of State results
            </a>
            .<C n={7} />
          </aside>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            A senator voted yea on the bill that built a state Bitcoin reserve.
            Eleven months later the same person, running for the office that
            holds it, told a voter guide that Texas should put public money in
            roads and people, not high-risk speculative assets. On November 3,
            2026 she won that office. This is the
            sourced record of Sarah Eckhardt and Bitcoin — the vote, the
            sentence, and the handover that has not happened yet.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published November 22, 2026 · Updated{" "}
            {ECKHARDT_LAST_VERIFIED}
          </p>
        </header>

        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Sarah Eckhardt is the Texas senator from District 14. She voted yea
            on Senate Bill 21 on March 6, 2025, creating the Texas Strategic
            Bitcoin Reserve. In February 2026 she told the Star-Telegram that
            state funds should go to traditional infrastructure rather than
            high-risk speculative assets. On November 3, 2026 she defeated
            Comptroller Don Huffines 5,014,496 to 4,511,185; county canvasses are
            complete, with statewide certification due by December 7.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Sarah Eckhardt, a Democrat from Austin, has represented Texas
              Senate District 14 since July 31, 2020.<C n={4} />
              <C n={5} />
            </li>
            <li>
              On March 6, 2025, Eckhardt voted yea on CSSB 21 on third reading.
              The Senate passed the Texas Strategic Bitcoin Reserve 25–5.<C n={1} />
            </li>
            <li>
              Governor Abbott signed Senate Bill 21 on June 20, 2025. The
              enrolled text gives the comptroller custody of the reserve and a
              seat on its five-member advisory committee.<C n={2} />
              <C n={3} />
            </li>
            <li>
              In a February 14, 2026 Star-Telegram questionnaire, Eckhardt said
              Texas should prioritize &ldquo;traditional infrastructure and
              human capital&rdquo; over &ldquo;high-risk speculative
              assets.&rdquo;<C n={6} />
            </li>
            <li>
              November 3, 2026 Secretary of State returns at 100% of
              polling locations reporting: Eckhardt 5,014,496 (51.30%), Huffines
              4,511,185 (46.15%). County canvasses complete; statewide certification due by December 7.<C n={7} />
            </li>
            <li>
              The Texan called the race election night and wrote that Eckhardt
              will be sworn in as comptroller in January 2027. Huffines remains
              in office by appointment until that term.<C n={8} />
            </li>
          </ul>
        </div>

        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the vote to the desk
            </h2>
            <span className="text-xs text-muted-2">2020 → 2027</span>
          </div>
          <ol className="mt-5 space-y-4">
            {eckhardtTimeline.map((e) => {
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
          <h2>Who is Sarah Eckhardt, and why does the reserve care?</h2>
          <p>
            Because Senate Bill 21 names the comptroller, not a party. Eckhardt
            is the Democratic senator from Austin&apos;s District 14, sworn in
            July 31, 2020 after Kirk Watson left the seat. The Senate&apos;s
            own page records a Travis County attorney, a commissioner
            representing about 300,000 people, and a county judge representing
            about 1.3 million before that oath.<C n={4} />
            <C n={5} /> On November 3, 2026 she defeated{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines</Link> for the
            full term beginning January 2027 (certification due by December 7). The office that would then hold
            the reserve is on{" "}
            <Link href="/texas-comptroller-bitcoin">
              the Texas Comptroller and Bitcoin
            </Link>
            ; the living custody watch is on{" "}
            <Link href="/who-holds-the-texas-bitcoin-reserve">
              who holds the Texas Bitcoin reserve
            </Link>
            .
          </p>

          <h2>Did Sarah Eckhardt vote for the Texas Bitcoin reserve?</h2>
          <p>
            Yes. On March 6, 2025, CSSB 21 came up on third reading. The Senate
            Journal records Yeas 25, Nays 5, with Eckhardt in the yeas —
            Alvarado, Cook, Johnson, Menéndez, West, and Zaffirini among the
            other Democrats in that column. The nays were Creighton, Gutierrez,
            Hall, Hancock, and Nichols. Miles was absent-excused.<C n={1} />{" "}
            Hancock, then a senator, would later buy the state&apos;s first
            Bitcoin as acting comptroller; that record is on{" "}
            <Link href="/kelly-hancock-bitcoin">Kelly Hancock and Bitcoin</Link>
            . Johnson, who voted yea after cutting the donation clause in
            committee, is on{" "}
            <Link href="/nathan-johnson-bitcoin">Nathan Johnson and Bitcoin</Link>
            .
          </p>
          <p>
            The enrolled text is the thing she voted to send forward. Section
            403.703 establishes the Texas Strategic Bitcoin Reserve as a
            special fund outside the state treasury and says &ldquo;the
            comptroller has custody of and shall administer and manage the
            reserve.&rdquo; Section 403.707 puts the comptroller on the
            five-member advisory committee. Section 403.708 requires a public
            report by December 31 of each even-numbered year. Governor Abbott
            signed the bill June 20, 2025, effective immediately.<C n={2} />
            <C n={3} /> How the fund was built is on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve
            </Link>{" "}
            and in{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the History of Bitcoin in Texas
            </Link>
            .
          </p>

          <h2>
            What did Sarah Eckhardt say about investing state money in
            cryptocurrency?
          </h2>
          <p>
            One sentence, in her own name, on a questionnaire. The Fort Worth
            Star-Telegram asked the Democratic comptroller candidates, in
            February 2026, whether Texas should be investing in
            cryptocurrency. Under the heading Sarah Eckhardt — not Savant
            Moore, not Michael Lange, who answered the same prompt
            differently — she wrote: &ldquo;Texas must prioritize stability
            and the long-term security of our state funds. While innovation is
            vital, our primary focus should be on traditional infrastructure
            and human capital—investments that provide guaranteed returns for
            the public good rather than high-risk speculative
            assets.&rdquo;<C n={6} />
          </p>
          <p>
            That is not a vote to repeal SB 21. It is not a promise to sell
            the $10 million iShares Bitcoin Trust position the office already
            holds. It is the only sourced sentence from her, located for this
            page, about putting state money in crypto. A yea on the reserve
            and a questionnaire that calls crypto a high-risk speculative
            asset can sit on the same record. They should not be collapsed
            into one position.
          </p>

          <EckhardtTensionFigure />

          <h2>The honest counterweight: the yea, then the caution</h2>
          <p>
            The tempting read is a flip. The fairer read is two jobs. In March
            2025 she was one vote in a 25–5 Senate, not the fiduciary of the
            reserve. In February 2026 she was asking voters to make her that
            fiduciary, and she answered in the language of public-finance
            caution — infrastructure, human capital, guaranteed returns — not
            in the language of{" "}
            <Link href="/don-huffines-bitcoin">Huffines&apos;s 2022
            &ldquo;citadel for Bitcoin&rdquo; plan</Link>
            . The counterweight is that the steward in line to hold the
            reserve has not said, on this record, that she wants to grow it.
            The matching counterweight the other way: she did not vote no.
          </p>
          <p>
            What she has not done is take the oath. County canvasses are
            complete, but the statewide canvass that certifies the result is
            still pending. The Texan called the race on election night and
            wrote that she will be sworn in in January 2027.<C n={8} /> Until
            that day,{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines</Link> remains
            the appointed comptroller, and the first SB 21 report is due
            December 31, 2026 under the sitting office.<C n={2} /> This page
            does not invent a 2027 investment policy from a 2026
            questionnaire.
          </p>

          <h2>Where does the Eckhardt record stand today?</h2>
          <p>
            Two sourced acts and a win at the polls. The vote is in the
            Journal. The sentence is in the voter guide. The totals are on
            the Secretary of State&apos;s table, 100% of polling locations
            reporting; county canvasses complete, statewide certification
            pending.<C n={7} /> The next entry is the oath, the certifying
            canvass, or the first word she speaks as comptroller about the reserve. Until then she
            is the senator who voted for the fund she may soon have to
            manage — and the candidate who told voters not to treat that
            kind of asset as the place for state money.
          </p>

          <EckhardtReturnsFigure />
        </div>

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

        <section className="mt-14 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold">Sources</h2>
          <p className="mt-2 text-sm text-muted">
            Primary record first: the Senate Journal for the roll call; the
            enrolled text of SB 21 for what the comptroller&apos;s office
            controls; the Texas Senate and the Legislative Reference Library
            for the bio; the Star-Telegram questionnaire, body re-read, for
            her own words; the Secretary of State returns for the
            November 3 totals; The Texan for the election-night call. This is
            a research and reference article, not financial, investment, or
            legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {eckhardtSources.map((s) => (
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
