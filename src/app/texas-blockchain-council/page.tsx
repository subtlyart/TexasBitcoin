import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionsBlock } from "@/components/institutions-block";
import { site } from "@/lib/site";
import {
  TBC_LAST_VERIFIED,
  tbcBills,
  tbcMoney,
  tbcSources,
  tbcTimeline,
  type TbcTimelineKind,
} from "@/lib/tbc";

const pageUrl = `${site.url}/texas-blockchain-council`;

export const metadata: Metadata = {
  title: "The Texas Blockchain Council: The Lobby That Outgrew Its Name",
  description:
    "The Texas Blockchain Council, now the Digital Infrastructure Network, 2019–2026, sourced from its own releases, the IRS record, the Texas Ethics Commission, the Legislature's witness lists and journals, and the federal dockets: the 501(c)(6) a political-science professor founded in Richardson that spearheaded the 2021 UCC and Work Group statutes, ran the 2023 campaign against SB 1751 (which passed the Senate 31–0, not 30–1, and died in the House), stopped a federal survey of miners' power use in a day in 2024, was the lead witness for the Texas Strategic Bitcoin Reserve in 2025, named a sitting state representative its president in January 2026, and dropped 'Blockchain' from its name on August 18, 2026 as its members became data-center landlords. Funded more than half by miners; about $2 million a year; 'an enemy of transparency,' says Public Citizen.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Texas Blockchain Council: The Lobby That Outgrew Its Name",
    description:
      "The trade association that wrote the state's Bitcoin law, sued the federal government, and then renamed itself for data centers. Its record, from the witness lists, the 990s, and the dockets. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is the Texas Blockchain Council?",
    a: "A 501(c)(6) trade association, EIN 85-1019061, founded in 2019 by Lee Bratcher, then a political-science professor at Dallas Baptist University, and recognized by the IRS in February 2021 from Richardson. It grew from about twenty member companies in 2020 to 120 in 2026, funded, by CoinDesk's 2025 reporting, more than half by Bitcoin miners. It spearheaded the 2021 statutes that put virtual currency in the Texas UCC and created the Work Group on Blockchain Matters, campaigned against SB 1751 in 2023, sued the Department of Energy in 2024, and was the lead witness for the Texas Strategic Bitcoin Reserve in 2025. On August 18, 2026 it renamed itself the Digital Infrastructure Network.",
  },
  {
    q: "Who runs it, and who pays for it?",
    a: "Since January 5, 2026, Representative Giovanni Capriglione is president while still serving House District 98 through January 2027; Jessi Goostree is executive director; Carol Haines, Core Scientific's head of power and policy, chairs the board; founder Lee Bratcher remains a director while working for Cipher. Its Form 990s show revenue of $859,418 in 2021, $2.0 million in 2022, $949,488 in 2023, $2.2 million in 2024, and $2.4 million in 2025, and president's compensation rising from $153,335 to $480,012. CoinDesk reported in January 2025 that more than half its funding comes from miners, with MARA, Riot, Core Scientific, Bitmain, and Cipher the largest contributors and Coinbase, Galaxy, law firms, and banks paying dues.",
  },
  {
    q: "What laws has it passed or stopped?",
    a: "Passed, by its own account and the witness lists: HB 1576 and HB 4474 in 2021, HB 591 and HB 1666 in 2023, and SB 21, the reserve, in 2025, drafted in consultation with the council and with Bratcher as lead witness. Stopped: SB 1751, the 2023 cap on miners in demand response, which the Senate passed 31-0 on April 12, 2023 despite the council's 'Don't Mess With Texas Innovation' campaign and which then died without a hearing in House State Affairs. It testified neutrally on SB 6, the 2025 large-load law. Capriglione's own reserve bill, HB 1598, filed with the council in December 2024, never got a hearing.",
  },
  {
    q: "What was the lawsuit against the Department of Energy?",
    a: "Texas Blockchain Council v. Department of Energy, filed February 22, 2024 in the Western District of Texas with Riot Platforms, over an emergency Energy Information Administration survey of miners' power use. Judge Alan Albright granted a temporary restraining order the next day; on March 1 the government withdrew the survey, agreed to destroy the data it had collected, and paid $2,199.45 in fees. The Sierra Club had filed in support of the survey. The council also joined the Blockchain Association's suit against the IRS's DeFi broker rule in December 2024; Congress repealed the rule and the case was dismissed in April 2025.",
  },
  {
    q: "Why did it change its name?",
    a: "Because its members did. On August 18, 2026 the council became the Digital Infrastructure Network, with a mandate covering AI, data centers, energy, quantum computing, and fintech alongside digital assets, an Austin office, Galaxy Digital's chief legal officer on the board, and a quantum company as its first new member. Capriglione: 'The opportunity in front of us is bigger than any one technology or sector.' The change followed Riot's, Core Scientific's, and Cipher's leases to AI tenants and Cipher's own February 2026 rename from Cipher Mining to Cipher Digital. The North American Blockchain Summit, November 18-19, 2026 in Arlington, keeps the old word.",
  },
  {
    q: "Is a sitting legislator allowed to run a lobby group?",
    a: "The council says yes, with a condition: the Dallas Morning News reported in January 2026 that Capriglione 'will not be lobbying for at least a couple years to stay onside of Texas law' and is not a registered lobbyist. The Texas Ethics Commission's 2026 registrations list Goostree, a policy director, and, from September 9, a lobbyist under the Digital Infrastructure Network name, but not Capriglione. Public Citizen challenged the appointment the day it was announced, calling the council 'an enemy of transparency.' He leaves the House when the 90th Legislature convenes in January 2027.",
  },
];

const kindStyle: Record<TbcTimelineKind, { color: string; label: string }> = {
  founding: { color: "var(--star)", label: "The founding" },
  statute: { color: "#6f9e6a", label: "The statutes" },
  fight: { color: "#c98a4e", label: "The fights" },
  court: { color: "#8a7fb5", label: "The courts" },
  turn: { color: "var(--accent)", label: "The turn" },
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
// Two figures - the legislative ledger, and the money from the 990s -
// drawn from the dated, sourced facts on this page (Sept 2026).
// Server-rendered SVG, no client JS.
function TbcBillsFigure() {
  const rowH = 25;
  const stanceColor = { for: "#6f9e6a", against: "#c98a4e", on: "var(--muted-2)" } as const;
  const stanceLabel = { for: "FOR", against: "AGAINST", on: "ON" } as const;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 290" role="img" aria-label="The council's legislative ledger: for HB 1576 and HB 4474 in 2021, both signed; against SB 1751 in 2023, which passed the Senate 31 to 0 and died in the House; for HB 591 and HB 1666 in 2023, both signed; for HB 1598 in 2025, never heard; for SB 21 in 2025, signed; on SB 6 in 2025, signed">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE LEDGER · WHAT THE COUNCIL WANTED, AND WHAT THE LEGISLATURE DID · 2021 → 2025</text>
        <text x="40" y="52" fontSize="8.5" fontWeight="600" letterSpacing="1" fill="var(--muted-2)">SESSION</text>
        <text x="120" y="52" fontSize="8.5" fontWeight="600" letterSpacing="1" fill="var(--muted-2)">BILL</text>
        <text x="185" y="52" fontSize="8.5" fontWeight="600" letterSpacing="1" fill="var(--muted-2)">WHAT IT DID</text>
        <text x="470" y="52" fontSize="8.5" fontWeight="600" letterSpacing="1" fill="var(--muted-2)">STANCE</text>
        <text x="560" y="52" fontSize="8.5" fontWeight="600" letterSpacing="1" fill="var(--muted-2)">OUTCOME</text>
        <line x1="40" y1="58" x2="770" y2="58" stroke="var(--border)" strokeWidth="1" />
        {tbcBills.map((b, i) => {
          const y = 76 + i * rowH;
          const won = (b.stance === "for" && b.outcome === "passed") || (b.stance === "against" && b.outcome === "died");
          return (
            <g key={b.bill}>
              <text x="40" y={y} fontSize="9.5" fill="var(--muted-2)">{b.session}</text>
              <text x="120" y={y} fontSize="10.5" fontWeight="700" fill="var(--foreground)" fontFamily="var(--font-display)">{b.bill}</text>
              <text x="185" y={y} fontSize="9.5" fill="var(--muted)">{b.what}</text>
              <text x="470" y={y} fontSize="9" fontWeight="700" fill={stanceColor[b.stance]}>{stanceLabel[b.stance]}</text>
              <circle cx="566" cy={y - 3.5} r="4" fill={b.outcome === "passed" ? "#6f9e6a" : "#c98a4e"} fillOpacity="0.85" />
              <text x="576" y={y} fontSize="9.5" fill="var(--muted)">{b.outcomeLabel}</text>
              {b.stance !== "on" && <text x="762" y={y} fontSize="9" textAnchor="end" fill={won ? "#6f9e6a" : "#c98a4e"}>{won ? "✓" : "✗"}</text>}
            </g>
          );
        })}
        <text x="405" y="282" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Texas Legislature Online witness lists and bill histories · Senate Journal April 12, 2023 · the council&apos;s own releases · green dot signed, amber dot died</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The ledger. Six wins in seven contested bills over three sessions, by the council&apos;s own measure: the one loss is the reserve bill its future president filed and could not get heard, and the one fight it did not win on the floor - SB 1751, which every senator voted for - it won in a House committee that never met on it. The neutral stance on SB 6 is the tell: the large-load law put the state&apos;s brake on miners into statute, and the council let it.
      </figcaption>
    </figure>
  );
}

function TbcMoneyFigure() {
  const x0 = 100;
  const bw = 96;
  const gap = 34;
  const baseY = 222;
  const scale = 150 / 2500000; // px per $
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The council's finances from its Form 990s: revenue of 859 thousand in 2021, 2.02 million in 2022, 949 thousand in 2023, 2.25 million in 2024, and 2.37 million in 2025; expenses of 556 thousand, 2.19 million, 2.03 million, 1.79 million, and 2.25 million; president's compensation of 153 thousand rising to 480 thousand">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE MONEY · REVENUE AND EXPENSES FROM THE FORM 990S, WITH THE PRESIDENT&apos;S PAY · 2021 → 2025</text>
        <line x1={x0 - 14} y1={baseY} x2={x0 + 5 * (bw + gap)} y2={baseY} stroke="var(--muted-2)" strokeWidth="1.25" />
        {tbcMoney.map((d, i) => {
          const x = x0 + i * (bw + gap);
          const hr = d.rev * scale;
          const he = d.exp * scale;
          return (
            <g key={d.y}>
              <rect x={x} y={baseY - hr} width={bw / 2 - 2} height={hr} rx="3" fill="#6f9e6a" fillOpacity="0.8" />
              <rect x={x + bw / 2 + 2} y={baseY - he} width={bw / 2 - 2} height={he} rx="3" fill="#c98a4e" fillOpacity="0.8" />
              <text x={x + bw / 4} y={baseY - hr - 5} fontSize="9.5" fontWeight="700" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{(d.rev / 1e6).toFixed(2)}M</text>
              <text x={x + (3 * bw) / 4} y={baseY - he - 5} fontSize="9.5" fontWeight="700" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{(d.exp / 1e6).toFixed(2)}M</text>
              <text x={x + bw / 2} y="242" fontSize="10" textAnchor="middle" fill="var(--muted-2)">{d.y}</text>
              <text x={x + bw / 2} y="256" fontSize="9" textAnchor="middle" fill="var(--accent)">president ${Math.round(d.pres / 1000)}K</text>
            </g>
          );
        })}
        <rect x="560" y="46" width="10" height="10" fill="#6f9e6a" fillOpacity="0.8" />
        <text x="575" y="55" fontSize="9" fill="var(--muted-2)">Revenue</text>
        <rect x="640" y="46" width="10" height="10" fill="#c98a4e" fillOpacity="0.8" />
        <text x="655" y="55" fontSize="9" fill="var(--muted-2)">Expenses</text>
        <text x="405" y="284" fontSize="10" textAnchor="middle" fill="var(--muted-2)">ProPublica Nonprofit Explorer, EIN 85-1019061 · net assets fell to −$412,111 at the end of 2023 · more than half of 2023 revenue went to a lobbying firm (Texas Observer / American Prospect)</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The money. A trade association that spends what it raises, ran a deficit through the 2023 session it counts as its greatest victory, and pays its president about a fifth of its revenue. Two million dollars a year is what it costs to be, in the Observer&apos;s phrase, the loudest voice in the room; the companies paying for it borrowed more than ten billion dollars in the same period to build the things the room is now named for.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function TexasBlockchainCouncilPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Texas Blockchain Council: The Lobby That Outgrew Its Name",
    description:
      "The record of the Texas Blockchain Council, now the Digital Infrastructure Network, from its releases, the IRS record, the Texas Ethics Commission, the Legislature, and the federal dockets: the founding, the 2021 statutes, the SB 1751 campaign and the 31–0 Senate vote, the Department of Energy suit, the reserve, the money, the sitting-legislator presidency, and the August 2026 rename.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    about: [
      { "@type": "Organization", name: "Texas Blockchain Council", alternateName: "Digital Infrastructure Network" },
      { "@type": "Thing", name: "Bitcoin mining" },
      { "@type": "Thing", name: "Lobbying" },
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
        name: "The Texas Blockchain Council",
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
          / The Texas Blockchain Council
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The institutions
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Texas Blockchain Council: The Lobby That Outgrew Its Name
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Most of the law on this site has the same fingerprints. The
            2021 statute that put virtual currency in the Texas commercial
            code, the work group that wrote the state&apos;s blockchain
            plan, the 2023 tax break for mining flared gas, the campaign
            that kept a brake on the miners from reaching the House floor,
            the 2024 lawsuit that made the federal government withdraw a
            survey in a week, and the 2025 statute that made Texas the
            first state to buy bitcoin were each drafted, carried, or
            defended by a trade association that a political-science
            professor started in Richardson in 2019 and that has never had
            more than a handful of staff or three million dollars in a
            year. More than half of that money comes from Bitcoin miners.
            In January 2026 the council made a sitting state
            representative its president. In August it dropped the word
            &ldquo;Blockchain&rdquo; and became the Digital Infrastructure
            Network, because the miners who pay for it had become
            landlords to AI companies and wanted a lobby to match. The
            statutes, the money, and the name are the record - along with
            one number the record corrects: the brake passed the Senate
            31 to 0, not 30 to 1.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 30, 2026 · Updated{" "}
            {TBC_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            The Texas Blockchain Council is the 501(c)(6) trade association
            Lee Bratcher founded in Richardson in 2019 that spearheaded
            Texas&apos;s 2021 virtual-currency and Work Group statutes,
            campaigned against the 2023 cap on miners in demand response,
            sued the Department of Energy with Riot in 2024 to stop a
            survey of miners&apos; power use, and was the lead witness for
            Senate Bill 21, the Texas Strategic Bitcoin Reserve, in 2025.
            Funded more than half by miners and running on about $2
            million a year, it named Representative Giovanni Capriglione
            president on January 5, 2026 while he still held his seat, and
            on August 18, 2026 renamed itself the Digital Infrastructure
            Network with 120 corporate members and a mandate covering AI,
            data centers, energy, and quantum computing.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              The council was founded in 2019, launched publicly on
              November 9, 2020, and recognized by the IRS as a 501(c)(6)
              in February 2021; it reported revenue of $2,368,020 for
              2025.<C n={4} /><C n={1} /><C n={2} />
            </li>
            <li>
              Council witnesses testified for HB 1576 and HB 4474 in
              2021, and the council announced on July 14, 2021 that it
              had &ldquo;spearheaded&rdquo; both laws.<C n={7} /><C n={8} />
              <C n={3} />
            </li>
            <li>
              SB 1751 passed the Texas Senate 31–0 on April 12, 2023 on
              the local and uncontested calendar, per the Senate Journal,
              two days after the council launched its &ldquo;Don&apos;t
              Mess With Texas Innovation&rdquo; campaign; the House never
              heard it.<C n={19} /><C n={16} /><C n={20} />
            </li>
            <li>
              Texas Blockchain Council v. Department of Energy was filed
              February 22, 2024; a restraining order issued February 23
              and the survey was withdrawn March 1 with $2,199.45 in fees
              paid.<C n={27} /><C n={28} /><C n={29} />
            </li>
            <li>
              CoinDesk reported on January 15, 2025 that more than half of
              the council&apos;s funding comes from Bitcoin miners, with
              MARA, Riot, Core Scientific, Bitmain, and Cipher among its
              largest contributors.<C n={34} />
            </li>
            <li>
              Representative Giovanni Capriglione became president on
              January 5, 2026 while serving House District 98, and the
              council became the Digital Infrastructure Network on August
              18, 2026.<C n={46} /><C n={49} /><C n={53} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From a side project to the Digital Infrastructure Network
            </h2>
            <span className="text-xs text-muted-2">2019 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {tbcTimeline.map((e) => {
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
          <h2>What is the Texas Blockchain Council, and who founded it?</h2>
          <p>
            A business league - the same tax status as a chamber of
            commerce, as its founder puts it - organized in 2019 by Lee
            Bratcher, a political-science professor at Dallas Baptist
            University and an Army Reserve officer whose doctoral work was
            on blockchain land registries. It launched publicly on
            November 9, 2020 with three goals, a legislative caucus, a
            state work group, and a Uniform Commercial Code update, and a
            line for the press: &ldquo;Silicon Valley has lost its
            competitive edge, and Texas is positioning itself to lead in
            emerging technology.&rdquo;<C n={1} /><C n={6} /> The IRS
            recognized it in February 2021 from Richardson; it had about
            twenty member companies in 2020, more than fifty in 2021,
            &ldquo;over 100&rdquo; by late 2022, and 120 in
            2026.<C n={2} /><C n={5} /><C n={11} /><C n={53} /> Bratcher is
            on <Link href="/lee-bratcher-bitcoin">his own page</Link>; so is
            the man who succeeded him,{" "}
            <Link href="/giovanni-capriglione-bitcoin">Giovanni Capriglione</Link>.
          </p>
          <p>
            Its claim on the record is that it wrote it. The council&apos;s
            witnesses appear on the 2021 lists for HB 1576, which created
            the Work Group on Blockchain Matters, and HB 4474, which put
            virtual currency into the Texas UCC; when both were signed
            that June the council announced it had &ldquo;spearheaded&rdquo;
            them, and its board chair called them &ldquo;the opening salvo
            letting the world know that Texas is open for blockchain
            business.&rdquo;<C n={7} /><C n={8} /><C n={3} /> The Governor
            received it at the mansion that year; the Lieutenant Governor
            put its director Christopher Calicott on the Work Group in
            October.<C n={10} /><C n={9} /> The statutes are on{" "}
            <Link href="/texas-bitcoin-law-timeline">the law timeline</Link>{" "}
            and on the pages of the legislators who carried them,{" "}
            <Link href="/tan-parker-bitcoin">Tan Parker</Link> and{" "}
            <Link href="/angela-paxton-bitcoin">Angela Paxton</Link>, whom
            the council named Legislator of the Year in 2022.<C n={13} />
          </p>

          <h2>What did it do about SB 1751, and what actually happened in the Senate?</h2>
          <p>
            It ran a campaign, and it lost the floor vote it says it
            fought - by more than the record has shown. Senator
            Kolkhorst&apos;s 2023 bill would have capped miners at 10% of
            ERCOT&apos;s demand-response programs and ended their
            abatements. At the March 28 hearing the council&apos;s two
            witnesses testified &ldquo;on&rdquo; the bill, the
            Legislature&apos;s word for neither for nor against; Riot and US
            Bitcoin testified against it, and the Sierra Club, Public
            Citizen, and residents of Navarro County for.<C n={14} /> The
            committee sent it out 11–0 on April 4, and the council told
            Texans to &ldquo;vote against this anti-free market
            bill.&rdquo;<C n={20} /><C n={15} /> On April 10 it launched
            &ldquo;Don&apos;t Mess With Texas Innovation&rdquo; with the
            Digital Chamber and the Satoshi Action Fund; Bratcher told CBS
            Austin the senator &ldquo;is just being fed bad information on
            this particular issue.&rdquo;<C n={16} /><C n={17} /> On April
            12 the three groups wrote to the Lieutenant Governor calling
            the bill &ldquo;anti-free market and anti-bitcoin
            mining.&rdquo;<C n={18} />
          </p>
          <p>
            That morning the Senate passed it. The Senate Journal for
            April 12, 2023 records CSSB 1751 on the local and uncontested
            calendar, &ldquo;(viva voce vote) (31-0) (31-0)&rdquo; - every
            senator, including the one who was excused from the regular
            session later that day.<C n={19} /><C n={20} /> CoinDesk
            reported the vote as 30–1, corrected it the next day -
            &ldquo;An earlier version of the story said that the bill
            passed with one vote against it&rdquo; - and the wrong number
            outlived the correction; Cointelegraph&apos;s headline still
            carries it, and so did this site, on a dozen pages, until
            September 30, 2026.<C n={21} /> The correction matters for
            what it says about the campaign: not one senator was moved.
            The bill died where the council said it would, in House State
            Affairs, referred April 24 and never heard; &ldquo;a victory
            for the great state of Texas,&rdquo; Bratcher said, while a
            Navarro County activist gave the House&apos;s reason as
            &ldquo;The house just didn&apos;t prioritize it.&rdquo;
            <C n={22} /><C n={23} /> The same session passed the
            flared-gas exemption and the proof-of-reserves bill the
            council testified for, and two years later SB 6 put the
            state&apos;s own brake on large loads into statute, with the
            council testifying &ldquo;on&rdquo; it.<C n={24} /><C n={36} />
            The senator is on{" "}
            <Link href="/lois-kolkhorst-bitcoin">Lois Kolkhorst and Bitcoin</Link>.
          </p>
          <TbcBillsFigure />

          <h2>Whom has it sued?</h2>
          <p>
            The federal government, twice, and won both times without a
            ruling on the merits. On February 22, 2024 the council and
            Riot Platforms sued the Department of Energy, the Energy
            Information Administration, and the Office of Management and
            Budget in Waco over an emergency survey of miners&apos; power
            use - &ldquo;a case about sloppy government process, contrived
            and self-inflicted urgency, and invasive government data
            collection,&rdquo; the complaint said; &ldquo;an alarming
            precedent,&rdquo; Bratcher said.<C n={26} /><C n={27} /> Judge
            Albright granted a restraining order on February 23. The Sierra
            Club filed for the government on the 28th, calling the data
            &ldquo;urgently needed.&rdquo; On March 1 the government
            withdrew the survey, agreed to destroy what it had collected,
            and paid $2,199.45 in fees.<C n={28} /><C n={30} /><C n={29} />
            On December 27, 2024 the council joined the Blockchain
            Association and the DeFi Education Fund against the IRS&apos;s
            broker rule for decentralized finance in the Northern
            District; Congress repealed the rule under the Congressional
            Review Act on April 10, 2025 and the case was dismissed six
            days later.<C n={31} /><C n={27} /><C n={32} /> The
            enforcement side of the state is on{" "}
            <Link href="/texas-attorney-general-bitcoin">the Attorney General page</Link>,
            which records the same two cases from the state&apos;s vantage.
          </p>

          <h2>What did it do for the reserve?</h2>
          <p>
            More than any other body outside the Capitol. On December 12,
            2024 it announced Capriglione&apos;s HB 1598 with him - a
            reserve inside the treasury, donation-funded - and Bratcher
            called it landmark legislation.<C n={33} /> That bill never
            got a hearing.<C n={58} /> The one that passed, Senator
            Schwertner&apos;s SB 21, was drafted &ldquo;in consultation with
            the Texas Blockchain Council,&rdquo; the Observer reported, and
            on February 18, 2025 Bratcher was the lead witness before
            Senate Business &amp; Commerce with council members filling
            the room; the committee voted 10–0, the Senate passed it March
            6, the House 101–42 on May 21 with Capriglione carrying it,
            and the Governor signed it June 20 with $10 million
            appropriated.<C n={39} /><C n={35} /><C n={37} /><C n={38} />
            &ldquo;Just 0.0004% of the state&apos;s budget,&rdquo; Bratcher
            said, &ldquo;but could create an outsized
            impact.&rdquo;<C n={41} /> The reserve is on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">its own page</Link>;
            the senator who wrote it on{" "}
            <Link href="/charles-schwertner-bitcoin">Charles Schwertner and Bitcoin</Link>.
          </p>

          <h2>Who pays for it, and how much?</h2>
          <p>
            Miners, mostly. CoinDesk reported on January 15, 2025 that
            &ldquo;more than half of the TBC&apos;s funding comes from
            bitcoin miners,&rdquo; naming MARA, Riot, Core Scientific,
            Bitmain, and Cipher as the largest contributors, with
            Coinbase, Galaxy, law firms, and banks paying dues; the
            Dallas Morning News describes it as funded by dues and
            events.<C n={34} /><C n={48} /> The Form 990s put the scale at
            $859,418 of revenue in 2021, $2.02 million in 2022, $949,488
            in 2023 - a year it spent $2.03 million and ended with net
            assets of minus $412,111 - $2.25 million in 2024, and $2.37
            million in 2025. The president&apos;s compensation rose from
            $153,335 to $480,012 over the same years.<C n={2} /> The Texas
            Observer and the American Prospect reported that more than
            half of the 2023 revenue went to a lobbying firm; the Ethics
            Commission&apos;s registrations show one principal lobbyist,
            John Clay, every session from 2021 at ranges rising from about
            $18,000 to about $111,000, with Bratcher registered at zero in
            2024 and 2025.<C n={40} /><C n={43} /><C n={42} /> A political
            action committee announced around 2021 raised about two
            thousand dollars.<C n={57} /> By the standard of the
            companies it speaks for - which borrowed more than ten billion
            dollars in 2026 alone - it is a small organization with a
            large record.
          </p>
          <TbcMoneyFigure />

          <h2>Who runs it now, and what is it called?</h2>
          <p>
            A legislator, and something else. On January 5, 2026 the
            council announced that Bratcher was stepping down after six
            years, remaining on the board, and that Representative
            Giovanni Capriglione - who had carried SB 21 through the
            House and would hold House District 98 through January 2027 -
            was president, effective immediately; Jessi Goostree, a former
            Fidelity digital-assets executive, became executive director,
            and Carol Haines of Core Scientific chaired the
            board.<C n={46} /><C n={49} /> The next day Cipher named
            Bratcher its head of policy and government affairs.<C n={50} />
            Public Citizen&apos;s Texas director responded the same day the
            appointment was announced: the council &ldquo;has been an enemy
            of transparency, going so far as to sue the U.S. Department of
            Energy to stop the agency from collecting data about the
            cryptocurrency industry.&rdquo;<C n={47} /> The Dallas Morning
            News reported the council&apos;s assurance that Capriglione
            &ldquo;will not be lobbying for at least a couple years to stay
            onside of Texas law,&rdquo; and corrected an earlier line to
            note he is not a registered lobbyist; the Ethics
            Commission&apos;s 2026 list shows Goostree, a new policy
            director, and, from September 9, a lobbyist registered under a
            different client name.<C n={48} /><C n={44} /><C n={51} />
          </p>
          <p>
            The name changed on August 18, 2026. The Texas Blockchain
            Council became the Digital Infrastructure Network: 120
            corporate members, an Austin office beside the Dallas
            headquarters, Galaxy Digital&apos;s chief legal officer on the
            board, a quantum-computing company as the first new member,
            and a mandate covering AI, data centers, energy, quantum, and
            fintech &ldquo;as well as&rdquo; digital assets. Capriglione:
            &ldquo;The opportunity in front of us is bigger than any one
            technology or sector.&rdquo; Bratcher, for Cipher: it
            &ldquo;honors the organization&apos;s roots while embracing a
            broader mandate.&rdquo;<C n={53} /> The new website tells
            members, &ldquo;Same team, same benefits, new name,&rdquo; and
            lists Riot, MARA, Cipher, Bitdeer, Core Scientific, Galaxy, and
            IREN among them.<C n={54} /> Six months earlier Cipher Mining
            had become Cipher Digital; the same year Riot, Core
            Scientific, and Cipher leased their Texas megawatts to AI
            tenants.<C n={50} /> The lobby renamed itself for what its
            members had become. The North American Blockchain Summit,
            November 18 and 19 in Arlington, keeps the word.<C n={55} />
          </p>

          <h2>The honest counterweight: the record, the room, and the word</h2>
          <p>
            Three things. First, the record, which is the council&apos;s
            strongest argument and this site&apos;s: without it there is no
            UCC definition, no Work Group, no flared-gas exemption, no
            proof-of-reserves statute, no reserve, and a federal survey
            with the miners&apos; power data in it. It is the most
            effective single-state digital-asset lobby in the country by
            any count of statutes, and it did it on two million dollars a
            year. Second, the room. Its own witnesses did not oppose SB
            1751 in committee, its campaign did not move a single senator,
            and the bill died because a House chairman did not schedule
            it - a victory the council claimed and did not, on the
            record, win. It represents an industry whose interests are
            not always the public&apos;s: the Sierra Club, Public Citizen,
            and a county&apos;s residents were on the other side of the
            witness table in 2023, and the survey it stopped in 2024 was
            the one the Sierra Club said the public urgently
            needed.<C n={14} /><C n={30} /> Its president is a legislator
            whose district it will lobby for two more sessions and whose
            own reserve bill it could not get heard; its board chair works
            for one of its five largest funders; its founder speaks for
            another.<C n={46} /><C n={58} /><C n={34} /> Third, the word.
            This site is about Bitcoin; the council was never only, and in
            its own name never primarily, about Bitcoin - it covers, as
            its old name said, blockchain, and as its new name says,
            infrastructure. The state&apos;s reserve is a Bitcoin reserve
            because the council&apos;s members wanted one; the
            council&apos;s next agenda, by its own August statement, is
            AI, data centers, energy, and quantum, and the miners paying
            for it are landlords now. The reader who wants to know what
            Bitcoin&apos;s lobby in Texas will say in 2027 should note
            that, as of August 2026, Texas does not have one by that name.
          </p>
          <p>
            The fair reading is that the council was the necessary
            condition for most of the Bitcoin law on this site and was
            never as powerful as the law makes it look - that it won in
            committee rooms and lost on the one floor vote it contested -
            and that the interests it now serves, on its own account, have
            outgrown the word it was founded on.
          </p>

          <h2>Where does the council stand today?</h2>
          <p>
            As of September 30, 2026: the Digital Infrastructure Network,
            120 corporate members, offices in Dallas and Austin, a sitting
            legislator as president until January, three registered
            lobbyists, $2.4 million of revenue in its last reported year,
            a summit in November under the old name, and a 2027 session
            for which it has published no priorities.<C n={53} />
            <C n={44} /><C n={2} /><C n={55} /> The people are on{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher and Bitcoin</Link>{" "}
            and{" "}
            <Link href="/giovanni-capriglione-bitcoin">Giovanni Capriglione and Bitcoin</Link>;
            the members are on the company pages of{" "}
            <Link href="/riot-platforms-bitcoin">Riot</Link>,{" "}
            <Link href="/mara-holdings-bitcoin">MARA</Link>,{" "}
            <Link href="/core-scientific-bitcoin">Core Scientific</Link>,{" "}
            <Link href="/cipher-mining-bitcoin">Cipher</Link>, and{" "}
            <Link href="/bitdeer-bitcoin">Bitdeer</Link>; the bills are on{" "}
            <Link href="/texas-bitcoin-bills-2027">the 2027 watch</Link>.
            This page is the lobby that outgrew its name, and the record
            it leaves under the old one.
          </p>
        </div>

        <InstitutionsBlock current="/texas-blockchain-council" />

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
            websites under both names; the IRS record through
            ProPublica&apos;s Nonprofit Explorer; the Texas Ethics
            Commission&apos;s lobby lists; the Legislature&apos;s witness
            lists, bill histories, and the Senate Journal; the federal
            dockets and the parties&apos; case pages; then CoinDesk, the
            Texas Tribune, the Texas Observer, the Dallas Morning News,
            Disruption Banking, and the trade press for the quotes, the
            funding, and the rename. The SB 1751 vote is taken from the
            Senate Journal, not from the press. This is a research and
            reference article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {tbcSources.map((s) => (
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
