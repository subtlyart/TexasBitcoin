import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  BRATCHER_LAST_VERIFIED,
  bratcherSources,
  bratcherTimeline,
  type BratcherTimelineKind,
} from "@/lib/bratcher";

const pageUrl = `${site.url}/lee-bratcher-bitcoin`;

export const metadata: Metadata = {
  title: "Lee Bratcher: The Man Who Put the Industry in the Room",
  description:
    "Lee Bratcher's Bitcoin record, sourced: the Army officer and political-science professor who founded the Texas Blockchain Council in 2019, spearheaded HB 4474 and HB 1576 in 2021, sat on the state's Blockchain Work Group, ran the campaign that helped kill SB 1751, sued the Energy Department over the 2024 miner survey and won in a week, testified for the Strategic Bitcoin Reserve - then left in January 2026 to run policy for the miner Cipher. The statutes, the fights, and the turn.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Lee Bratcher: The Man Who Put the Industry in the Room",
    description:
      "Officeholders signed Texas's Bitcoin laws. Lee Bratcher built the trade association that was in the room for every one of them - and then went to work for a miner.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Lee Bratcher?",
    a: "Lee Bratcher is the founder of the Texas Blockchain Council, the trade association he ran from 2019 to January 2026, and since January 6, 2026 the Head of Policy and Government Affairs at the Bitcoin miner Cipher. A U.S. Army officer who found the Bitcoin whitepaper while working on property rights at the Army's Peacekeeping and Stability Operations Institute, he taught political science and blockchain at Dallas Baptist University, holds a master's in international relations from St. Mary's University, and is a Ph.D. candidate at UT Dallas researching blockchain land registries. He remains a captain in the Army Reserve and lives in Richardson, Texas.",
  },
  {
    q: "What is the Texas Blockchain Council?",
    a: "The Texas Blockchain Council is an industry association founded by Bratcher in 2019 with the stated goal of making Texas 'the jurisdiction of choice' for Bitcoin and blockchain. It counts more than 100 member companies, hosts the North American Blockchain Summit (successor to the Texas Blockchain Summit first held in Austin on October 8, 2021), lobbies the Legislature, and has litigated against the federal government. Since January 5, 2026 its president has been State Representative Giovanni Capriglione, author of the Texas Strategic Bitcoin Reserve statute; Bratcher stays on its board.",
  },
  {
    q: "Which Texas laws did Lee Bratcher help pass?",
    a: "In the 2021 session the council says it spearheaded HB 4474, which wrote virtual currency into the Texas Uniform Commercial Code, and HB 1576, which created the Work Group on Blockchain Matters that Bratcher then served on by appointment of Speaker Dade Phelan. In 2023 the industry's two priority bills passed, SB 1929 (registration of loads above 75 megawatts) and HB 591 (a tax exemption for otherwise-flared gas), while the bill it campaigned against, SB 1751, died in a House committee. In 2025 Bratcher testified for SB 21, the Strategic Bitcoin Reserve, which the governor signed in June.",
  },
  {
    q: "What was the Texas Blockchain Council's lawsuit against the Department of Energy?",
    a: "On February 23, 2024, the council and Riot Platforms sued the Department of Energy, the Energy Information Administration, and the Office of Management and Budget in federal court in Waco over an 'emergency' survey that demanded miners' electricity data on a compressed deadline without the notice period the Paperwork Reduction Act requires. Judge Alan Albright pushed the government into suspending the survey that day; by March 1 the EIA had withdrawn it and agreed to destroy every response it had received and to give 60 days' public notice before any revised collection.",
  },
  {
    q: "Why did Lee Bratcher leave the Texas Blockchain Council?",
    a: "The council's January 5, 2026 announcement said its founder was stepping down after six years 'to pursue another professional opportunity' and would remain on the board. The next day Cipher, a publicly traded Bitcoin miner and data-center developer, announced him as Head of Policy and Government Affairs, responsible for energy-policy strategy, representing the company inside ERCOT, and regulatory and community engagement.",
  },
];

const kindStyle: Record<BratcherTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  law: { color: "var(--accent)", label: "The statute" },
  fight: { color: "#c98a4e", label: "The fight" },
  turn: { color: "#8a7fb5", label: "The turn" },
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
function BratcherMachineFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 260" role="img" aria-label="Lee Bratcher's record in five tiles: statutes, member companies, summit attendance, the Work Group seat, and the federal case">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE MACHINE · WHAT SIX YEARS OF THE COUNCIL PRODUCED, COUNTED</text>
<rect x="28.0" y="52" width="142.8" height="150" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="99.4" y="104" fontSize="30" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">4</text>
<text x="99.4" y="126" fontSize="11" fontWeight="600" letterSpacing="1.5" textAnchor="middle" fill="var(--accent)">STATUTES</text>
<text x="99.4" y="150" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">HB 4474 · HB 1576</text>
<text x="99.4" y="163" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">SB 1929 · HB 591</text>
<rect x="180.8" y="52" width="142.8" height="150" rx="10" fill="var(--surface-2)" stroke="var(--accent-soft)" strokeWidth="1.25"/>
<text x="252.2" y="104" fontSize="30" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">100+</text>
<text x="252.2" y="126" fontSize="11" fontWeight="600" letterSpacing="1.5" textAnchor="middle" fill="var(--accent-soft)">MEMBERS</text>
<text x="252.2" y="150" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">companies, from a</text>
<text x="252.2" y="163" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">2019 side project</text>
<rect x="333.6" y="52" width="142.8" height="150" rx="10" fill="var(--surface-2)" stroke="var(--star)" strokeWidth="1.25"/>
<text x="405.0" y="104" fontSize="30" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">1,300</text>
<text x="405.0" y="126" fontSize="11" fontWeight="600" letterSpacing="1.5" textAnchor="middle" fill="var(--star)">SUMMIT</text>
<text x="405.0" y="150" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">700 in Austin, Oct 2021</text>
<text x="405.0" y="163" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">→ 1,300 at the 2023 peak</text>
<rect x="486.4" y="52" width="142.8" height="150" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="557.8" y="104" fontSize="30" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">1 of 16</text>
<text x="557.8" y="126" fontSize="11" fontWeight="600" letterSpacing="1.5" textAnchor="middle" fill="var(--accent)">WORK GROUP</text>
<text x="557.8" y="150" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">seat on the body his</text>
<text x="557.8" y="163" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">own bill created</text>
<rect x="639.2" y="52" width="142.8" height="150" rx="10" fill="var(--surface-2)" stroke="var(--accent-soft)" strokeWidth="1.25"/>
<text x="710.6" y="104" fontSize="30" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">7 days</text>
<text x="710.6" y="126" fontSize="11" fontWeight="600" letterSpacing="1.5" textAnchor="middle" fill="var(--accent-soft)">V. ENERGY DEPT.</text>
<text x="710.6" y="150" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">filed Feb 23, 2024 →</text>
<text x="710.6" y="163" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">survey withdrawn Mar 1</text>
<text x="405.0" y="250" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">TBC; Texas Legislature Online; SMU Law; the Tribune; NCLA · the instrument is the room, not the vote</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The machine, counted. Four statutes across two sessions with the council&apos;s fingerprints on them, more than a hundred member companies from a side project, a summit that nearly doubled in two years, a seat on the Work Group his own bill created, and a federal case won in a week. None of it is a vote. All of it decided votes.
      </figcaption>
    </figure>
  );
}

function BratcherLedgerFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 280" role="img" aria-label="The organizer's ledger: three claims and what the record says about each">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE ORGANIZER’S LEDGER · THREE CLAIMS, AND WHAT THE RECORD SAYS</text>
<rect x="28" y="48" width="754" height="56" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
<rect x="28" y="48" width="6" height="56" rx="3" fill="#c98a4e"/>
<text x="48" y="68" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">“Miners stabilize the grid”</text>
<text x="48" y="86" fontSize="10" fill="var(--muted-2)">the flexibility case, from the 2021 summit stage to SB 1751</text>
<text x="766" y="77" fontSize="10.5" fontWeight="600" textAnchor="end" fill="#c98a4e">true – and the same programs pay the miners to do it</text>
<rect x="28" y="114" width="754" height="56" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
<rect x="28" y="114" width="6" height="56" rx="3" fill="var(--star)"/>
<text x="48" y="134" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">“An industry association”</text>
<text x="48" y="152" fontSize="10" fill="var(--muted-2)">2023 revenue $949,488, per the Prospect&apos;s reading of the filings</text>
<text x="766" y="143" fontSize="10.5" fontWeight="600" textAnchor="end" fill="var(--star)">more than half of it to a lobbying firm · a lobby, plainly</text>
<rect x="28" y="180" width="754" height="56" rx="8" fill="var(--surface-2)" stroke="var(--border)"/>
<rect x="28" y="180" width="6" height="56" rx="3" fill="#8a7fb5"/>
<text x="48" y="200" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">“Another professional opportunity”</text>
<text x="48" y="218" fontSize="10" fill="var(--muted-2)">the council&apos;s January 5, 2026 farewell</text>
<text x="766" y="209" fontSize="10.5" fontWeight="600" textAnchor="end" fill="#8a7fb5">January 6: Head of Policy at Cipher, a miner · ERCOT representation</text>
<text x="405.0" y="270" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">The Texas Tribune; The American Prospect (May 2025); TBC; Cipher (Jan 2026) · the argument was honest; it was also the members&apos; business model</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The organizer&apos;s ledger. Three claims and what the record says about each: a grid argument that is true and also a subsidy argument, an association whose revenue mostly bought lobbyists, and a farewell whose &ldquo;opportunity&rdquo; was a miner&apos;s policy desk the next morning. None of it is hidden. All of it belongs on the page.
      </figcaption>
    </figure>
  );
}

// people-figs:end
export default function LeeBratcherBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Lee Bratcher: The Man Who Put the Industry in the Room",
    description:
      "The Bitcoin record of the Texas Blockchain Council's founder: the 2021 statutes, the Work Group seat, the SB 1751 campaign, the 2024 case against the Energy Department, the Strategic Bitcoin Reserve testimony, and the January 2026 move to the miner Cipher.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Lee Bratcher" },
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
        name: "Lee Bratcher and Bitcoin",
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
          / Lee Bratcher &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The organizers
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Lee Bratcher: The Man Who Put the Industry in the Room
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The officeholder pages in this cluster record who signed what.
            This page is about the man who made sure the industry was
            standing there when they did. Lee Bratcher, an Army officer
            turned political-science professor, founded the Texas Blockchain
            Council as a side project in 2019 and ran it for six years – two
            sessions of statutes, a seat on the state&apos;s own Work Group, a
            named campaign against the one bill the miners feared, a federal
            case won in a week, and the testimony that opened the Strategic
            Bitcoin Reserve hearing. Then, in January 2026, he went to work
            for a miner. Both halves are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 10, 2026 · Updated{" "}
            {BRATCHER_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Lee Bratcher is the founder and, from 2019 to January 2026, the
            president of the Texas Blockchain Council, the trade association
            behind Texas&apos;s 2021 virtual-currency and Work Group statutes,
            the 2023 campaign that helped kill SB 1751, the 2024 lawsuit that
            forced the Energy Department to withdraw its emergency survey of
            Bitcoin miners, and the testimony for the 2025 Strategic Bitcoin
            Reserve. A Dallas Baptist University professor and Army Reserve
            captain from Richardson, he stepped down on January 5, 2026 and
            joined the miner Cipher as Head of Policy and Government Affairs
            the next day.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Bratcher founded the Texas Blockchain Council in 2019 while
              teaching at Dallas Baptist University, and went full-time in
              2021.<C n={2} /><C n={3} />
            </li>
            <li>
              Governor Abbott signed HB 4474 and HB 1576 in June 2021; the
              council&apos;s release of July 14, 2021 says it spearheaded both.
              <C n={4} />
            </li>
            <li>
              Speaker Dade Phelan appointed Bratcher to the 16-member Work
              Group on Blockchain Matters, whose 84-page report was released
              November 15, 2022.<C n={6} />
            </li>
            <li>
              The first Texas Blockchain Summit drew 700 people to Austin on
              October 8, 2021, with Senators Cruz, Cornyn, and Lummis on the
              program.<C n={7} />
            </li>
            <li>
              The council and Riot Platforms sued the Department of Energy
              on February 23, 2024; the EIA withdrew its survey by March 1
              and agreed to destroy the responses.<C n={11} /><C n={13} />
              <C n={14} />
            </li>
            <li>
              Bratcher testified for SB 21 before Senate Business &amp;
              Commerce on February 18, 2025, listed as President, Texas
              Blockchain Council, Richardson.<C n={15} />
            </li>
            <li>
              He stepped down on January 5, 2026 and was announced as
              Cipher&apos;s Head of Policy and Government Affairs on January
              6.<C n={17} /><C n={18} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the whitepaper to the witness table
            </h2>
            <span className="text-xs text-muted-2">2016 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {bratcherTimeline.map((e) => {
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
          <h2>Who is Lee Bratcher, and why does a Texas site cover him?</h2>
          <p>
            Because every statute in{" "}
            <Link href="/texas-bitcoin-law-timeline">the law timeline</Link>{" "}
            has a sponsor&apos;s name on it, and almost none of them has the
            name of the person who wrote the first draft, found the witness,
            booked the room, and called the members. In Texas, for six years,
            that was usually Bratcher. The path in is not the usual one. He
            was an Army officer working on property rights at the
            Army&apos;s Peacekeeping and Stability Operations Institute when
            he read the Bitcoin whitepaper, and what he saw in it was a land
            registry – &ldquo;the biggest thing in property rights since the
            invention of double-entry accounting,&rdquo; as he put it later.
            <C n={2} /> The whitepaper became a dissertation on
            blockchain-based land administration, the dissertation a Ph.D.
            track at UT Dallas, and the day job a political-science
            professorship at Dallas Baptist University, where he taught
            international relations and, eventually, blockchain.<C n={1} />{" "}
            He kept the uniform: a captain in the Army Reserve, Tech Scout
            for the 75th Innovation Command that supports Army Futures
            Command in Austin.<C n={1} /> He lives in Richardson with his
            wife and three daughters, and it is Richardson, not Austin, that
            appears next to his name on the Senate witness list.<C n={1} />
            <C n={15} />
          </p>
          <p>
            The council started in 2019 as a side project, on a read of the
            market that turned out to be exactly right: Texas had miners,
            developers, and a Legislature that met for 140 days every two
            years, and nobody whose job was to connect them.<C n={2} />{" "}
            By 2021 he had left the classroom to run it full-time, and by
            the time he left it counted more than a hundred member
            companies, a five-person staff, and a summit that had drawn
            1,300 people at its 2023 peak.<C n={2} /><C n={3} /> The
            broader Austin scene he built alongside is in{" "}
            <Link href="/texas-crypto-archive">the Texas crypto archive</Link>;
            this page is the policy machine.
          </p>

          <h2>What did the Texas Blockchain Council actually pass?</h2>
          <p>
            The 2021 session first. The council&apos;s own account of the
            87th Legislature, released July 14, 2021, claims two statutes:{" "}
            <strong>HB 4474</strong>, which wrote &ldquo;virtual
            currency&rdquo; into the Texas Uniform Commercial Code – what
            control means, how a purchaser takes it free of adverse claims,
            how a security interest is perfected – and{" "}
            <strong>HB 1576</strong>, which created the Work Group on
            Blockchain Matters. Rep. Tan Parker and Sen. Angela Paxton
            carried them; the release says the TBC &ldquo;spearheaded&rdquo;
            both, drafted with the Uniform Law Commission, and
            &ldquo;ensured blockchain remained a priority.&rdquo;<C n={4} />
            <C n={5} /> The UCC statute is the quiet one, and the more
            durable: it is the reason a Texas bank could custody Bitcoin
            with legal clarity, and the Department of Banking said so four
            days after the governor&apos;s signature.<C n={4} /> The Work
            Group is the clever one. It created a 16-member body of
            legislators and appointees to tell the Legislature what to do
            about blockchain – and Speaker Phelan then appointed Bratcher to
            it, so that the man who lobbied for the body sat on the body.
            Its 84-page report and master plan, eight subcommittees deep,
            landed November 15, 2022, in time to be the 2023 session&apos;s
            reading list.<C n={6} />
          </p>
          <p>
            The 2023 session is where the money was. Two industry bills
            passed – <strong>SB 1929</strong>, requiring loads above 75
            megawatts to register with the Public Utility Commission and
            share data with ERCOT, and <strong>HB 591</strong>, a tax
            exemption for using gas that would otherwise be flared – and
            Bratcher greeted both with the line the council was built to
            deliver: &ldquo;Texas remains the jurisdiction of
            choice.&rdquo;<C n={9} /> The bill that did not pass is the one
            that mattered more, and it gets its own section below. In 2025
            the council&apos;s name led the witness list for{" "}
            <strong>SB 21</strong>, the Texas Strategic Bitcoin Reserve:
            Bratcher, &ldquo;President (Self; Texas Blockchain
            Council),&rdquo; Richardson, <em>for</em>, before Senate
            Business &amp; Commerce on February 18, 2025.<C n={15} /> The
            statute, the appropriation, and the Comptroller&apos;s first
            purchase are told in{" "}
            <Link href="/texas-strategic-bitcoin-reserve">the reserve reference</Link>{" "}
            and{" "}
            <Link href="/who-holds-the-texas-bitcoin-reserve">
              who holds the Texas Bitcoin reserve
            </Link>
            ; Bratcher&apos;s part was to congratulate the state on buying
            at about $87,000 a coin.<C n={16} />
          </p>

          <BratcherMachineFigure />

          <h2>What fights did Bratcher pick, and how did they end?</h2>
          <p>
            Two, and he won both. The first was <strong>SB 1751</strong> in
            2023, Senator Lois Kolkhorst&apos;s bill to cap miners at ten
            percent of any ERCOT demand-response program, lower the
            registration threshold to ten megawatts, and strip their tax
            abatements. The council answered with a named campaign –
            &ldquo;Don&apos;t Mess With Texas Innovation&rdquo; – and
            Bratcher supplied the frame on Austin television: the bill would
            raise ratepayers&apos; costs, cost rural counties jobs, and was
            &ldquo;sort of a targeted bill against a single
            industry.&rdquo;<C n={8} /> It passed the Senate and died in a
            House committee. Bratcher said he was thrilled; a Navarro County
            activist on the other side said, more plainly, that the House
            never prioritized it and the clock ran out.<C n={10} /> Both
            are true, and the second is how most bills die in Texas – the
            full roll is in{" "}
            <Link href="/texas-bitcoin-bills-that-died">
              the bills that died
            </Link>
            . The argument Bratcher made was the one he had made from the
            first summit stage in October 2021: mining is a load that buys
            power around the clock but can turn off in the hours the grid is
            short, and ERCOT pays it to do so.<C n={7} /> The context for
            that claim, and its limits, is in{" "}
            <Link href="/bitcoin-mining-ercot">Bitcoin mining and ERCOT</Link>.
          </p>
          <p>
            The second fight was federal and took a week. On January 24,
            2024, the U.S. Energy Information Administration got emergency
            clearance to demand monthly electricity data from every
            cryptocurrency miner in the country, with a first deadline of
            February 23 and none of the 60-day public notice the Paperwork
            Reduction Act normally requires.<C n={11} /> On February 23 the
            council and Riot Platforms sued the Department of Energy, the
            EIA, and the Office of Management and Budget in federal court in
            Waco – &ldquo;an alarming precedent of government intrusion into
            private industry operations without just cause or proper
            process,&rdquo; in Bratcher&apos;s words – and Judge Alan
            Albright told the government that morning to stand the survey
            down or be enjoined by three o&apos;clock.<C n={11} />
            <C n={12} /> It stood down. By March 1 the EIA had withdrawn the
            survey outright, and the stipulated filing that closed the case
            has the government agreeing to &ldquo;destroy any information
            that it has already received&rdquo; and to give 60 days&apos;
            notice before trying again.<C n={13} /><C n={14} /> For a
            state trade association, it is an unusually complete federal
            win, and it is the case the rest of the industry cites.
          </p>

          <h2>The honest counterweight: the organizer&apos;s ledger</h2>
          <p>
            The criticism worth engaging is not that Bratcher was wrong
            about Texas – this site shares the thesis – but that the council
            is a lobby, and the record should say so plainly. The
            Prospect&apos;s reading of the filings put the TBC&apos;s 2023
            revenue at $949,488, with more than half of it going to a
            lobbying firm, and its advisory board carrying the Texas
            director of Americans for Prosperity and Riot&apos;s
            communications chief.<C n={19} /> That is what an industry
            association is; the word &ldquo;association&rdquo; should not
            soften it. The grid argument cuts the same way. It is true that
            flexible load helps ERCOT, and it is also true that the
            demand-response programs SB 1751 targeted are the ones that pay
            miners for turning off – the flexibility case and the subsidy
            case are the same case, argued from two sides.<C n={7} />
            <C n={10} /> And the EIA suit, celebrated as a win for due
            process, was read from the grid&apos;s side as an industry
            refusing to tell the people who keep the lights on how much
            power it draws – a column in the Houston Chronicle made exactly
            that argument the week the survey fell.<C n={20} />
          </p>
          <p>
            Then the turn. The council&apos;s January 5, 2026 announcement
            thanked its founder for six years and said he was leaving
            &ldquo;to pursue another professional opportunity,&rdquo; staying
            on the board; the next morning Cipher, a publicly traded miner
            and data-center developer, named him Head of Policy and
            Government Affairs, with a brief that includes representing the
            company inside ERCOT.<C n={17} /><C n={18} /> The man who spent
            six years arguing the miners&apos; case to the state now argues
            it for one miner, and the association he built is run by
            Giovanni Capriglione, the legislator who wrote the reserve
            statute the association testified for.<C n={17} /> None of this
            is hidden; all of it is the ordinary circuit of a state capital.
            The fair reading is that the work is on the books either way –
            a UCC chapter, a Work Group report, four statutes, a federal
            stipulation – and that the reader should know who paid for the
            room.
          </p>

          <BratcherLedgerFigure />

          <h2>Where does the Bratcher record stand today?</h2>
          <p>
            As of September 2026: eight months into the Cipher role, a board
            seat at the council he founded, the Ph.D. still in progress, and
            a Legislature that will not meet again until January 2027 – the
            docket for which is in{" "}
            <Link href="/texas-bitcoin-bills-2027">the 2027 bills preview</Link>.
            <C n={17} /><C n={18} /> The officeholders he lobbied are on{" "}
            <Link href="/greg-abbott-bitcoin">Greg Abbott and Bitcoin</Link>,{" "}
            <Link href="/dan-patrick-bitcoin">Dan Patrick and Bitcoin</Link>,{" "}
            <Link href="/charles-schwertner-bitcoin">
              Charles Schwertner and Bitcoin
            </Link>
            , and <Link href="/ted-cruz-bitcoin">Ted Cruz and Bitcoin</Link>;
            the builder who shared his first summit stage is on{" "}
            <Link href="/jimmy-song-bitcoin">Jimmy Song and Bitcoin</Link>.
            This page opens a third wing: the Texans who organized the
            room.
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
            Primary record first: the council&apos;s own releases and
            announcement; Texas Legislature Online for the bills and the
            witness list; SMU Law for the Work Group; the New Civil
            Liberties Alliance case page and the trade press for the federal
            case; Cipher&apos;s investor release for the current role; the
            Tribune, CoinDesk, Decrypt, the Prospect, and the Chronicle for
            the rest. This is a research and reference article, not
            financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {bratcherSources.map((s) => (
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
