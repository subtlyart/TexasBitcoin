import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  KOLKHORST_LAST_VERIFIED,
  kolkhorstSources,
  kolkhorstTimeline,
  type KolkhorstTimelineKind,
} from "@/lib/kolkhorst";

const pageUrl = `${site.url}/lois-kolkhorst-bitcoin`;

export const metadata: Metadata = {
  title: "Lois Kolkhorst: The Senator Who Wrote the Brake",
  description:
    "Lois Kolkhorst's Bitcoin record, sourced: the Brenham senator who authored Senate Bill 1751 - the 2023 bill to register Bitcoin mines above 10 MW, cap them at 10% of ERCOT demand response, and end their tax abatements. The 37-gigawatt hearing, 'part of their business model,' the 11–0 committee and 30–1 Senate votes, the open letter and the industry campaign, the death in House State Affairs, Riot's $31.7 million August, and the half of her design that became law anyway. She was also the Senate sponsor of the 2015 Texas Bullion Depository.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Lois Kolkhorst: The Senator Who Wrote the Brake",
    description:
      "Every other page in the cluster moved the asset or the industry forward. Hers is the one bill the industry organized to kill - and the half of it that became law anyway. Bullish on gold, wary of the load. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Lois Kolkhorst?",
    a: "Lois Kolkhorst is a Republican state senator from Brenham, Texas, who has represented Senate District 18 since a December 2014 special election after seven terms in the Texas House. She chairs the Senate Health and Human Services Committee and sits on Business and Commerce and Finance. In Bitcoin history she is the author of Senate Bill 1751, the 2023 bill to limit Bitcoin miners' grid incentives, and the Senate sponsor of the 2015 law that created the Texas Bullion Depository.",
  },
  {
    q: "What was Texas Senate Bill 1751?",
    a: "SB 1751 was Kolkhorst's 2023 bill on large-load Bitcoin mining in ERCOT. It had three parts: mining facilities over 10 megawatts would register with the Public Utility Commission within one business day; miners could join ERCOT's paid demand-response programs only while they made up less than 10% of program load; and local governments could not grant Chapter 312 property-tax abatements to mining facilities. It passed the Senate 30–1 on April 12, 2023 and died without a hearing in the House State Affairs Committee.",
  },
  {
    q: "Is Lois Kolkhorst against Bitcoin?",
    a: "Her record is against subsidizing the load, not against the asset. She carried the 2015 Bullion Depository through the Senate and called it 'a golden idea.' On SB 1751 she said the bill 'rightsizes' an industry that no longer needs incentives and that 'it's not a punitive bill.' Her objection was to paying miners to power down: 'we're going to pay them to go off the grid at different times, which I believe is a part of their business model.'",
  },
  {
    q: "Why did SB 1751 fail?",
    a: "The House never heard it. After the 30–1 Senate vote, the bill was referred to House State Affairs on April 24, 2023 and sat there until the session ended May 29. The Texas Blockchain Council's 'Don't Mess With Texas Innovation' campaign, Riot Platforms' testimony on Rockdale jobs, and an open letter from Parker Lewis and Will Cole framed it as discrimination against one industry, and the House preferred Senator Johnson's registration-only SB 1929, which the governor signed June 9, 2023.",
  },
  {
    q: "Did any of SB 1751 become law?",
    a: "The registration idea did, twice, under other authors. SB 1929 (2023) required mining facilities above 75 megawatts to register with the Public Utility Commission, and SB 6 (2025) set interconnection standards and emergency curtailment for all large loads above 75 megawatts. The 10% demand-response cap and the abatement ban have not passed. Riot's record $31.7 million in credits for August 2023 kept the cap argument alive on both sides.",
  },
];

const kindStyle: Record<KolkhorstTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  gold: { color: "#d4a94a", label: "The gold" },
  brake: { color: "#c98a4e", label: "The brake" },
  after: { color: "#8a7fb5", label: "The after" },
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
// Two figures - the three parts and their fates, and the vote ledger -
// drawn from the dated, sourced facts on this page (Sept 2026).
// Server-rendered SVG, no client JS.
function KolkhorstThreePartsFigure() {
  const cols = [
    {
      title: "Register the load",
      what: "mines over 10 MW register with the PUC within one business day, five years of demand projections",
      fate: "BECAME LAW, TWICE",
      fateColor: "#6f9e6a",
      lines: ["SB 1929 · June 9, 2023 · above 75 MW", "SB 6 · June 20, 2025 · above 75 MW"],
    },
    {
      title: "Cap the demand response",
      what: "miners admitted to paid curtailment programs only while under 10% of program load",
      fate: "DIED",
      fateColor: "#c98a4e",
      lines: ["no House hearing · May 29, 2023", "Riot's $31.7M August 2023 kept it alive"],
    },
    {
      title: "End the abatements",
      what: "no Chapter 312 property-tax abatements for virtual currency mining facilities",
      fate: "DIED",
      fateColor: "#c98a4e",
      lines: ["no House hearing · May 29, 2023", "Milam County kept abating Rockdale"],
    },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="SB 1751 in three parts and what became of each: registration became law twice under other authors, the 10 percent demand-response cap died, the abatement ban died">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THREE PARTS, THREE FATES · SB 1751 (2023) AND WHAT THE LEGISLATURE DID WITH EACH</text>
        {cols.map((c, i) => {
          const x = 28 + i * 256;
          return (
            <g key={c.title}>
              <rect x={x} y="52" width="242" height="216" rx="10" fill="var(--surface-2)" stroke={c.fateColor} strokeWidth="1.25" />
              <text x={x + 16} y="78" fontSize="13" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{c.title}</text>
              <foreignObject x={x + 16} y="88" width="210" height="60">
                <p style={{ margin: 0, fontSize: "10.5px", lineHeight: 1.35, color: "var(--muted-2)" }}>{c.what}</p>
              </foreignObject>
              <rect x={x + 16} y="156" width={c.fate.length * 7.2 + 16} height="20" rx="10" fill={c.fateColor} />
              <text x={x + 24} y="170" fontSize="10" fontWeight="700" letterSpacing="1.2" fill="var(--surface)">{c.fate}</text>
              {c.lines.map((l, j) => (
                <text key={l} x={x + 16} y={200 + j * 22} fontSize="10.5" fill="var(--muted)">{l}</text>
              ))}
            </g>
          );
        })}
        <text x="405" y="290" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">SB 1751 engrossed text; SB 1929 (88R) and SB 6 (89R) histories · the state kept the registry and the curtailment, and declined the cap and the abatement ban</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Three parts, three fates. The bill that died was one-third enacted: the registration requirement returned as Senator Johnson&apos;s SB 1929 eleven days after the session ended, and again as the 2025 large-load law. The cap on paid curtailment and the ban on abatements have not returned.
      </figcaption>
    </figure>
  );
}

function KolkhorstVotesFigure() {
  const rows = [
    { label: "Senate Business & Commerce", date: "Apr 4, 2023", yes: 11, no: 0, note: "11–0" },
    { label: "Texas Senate", date: "Apr 12, 2023", yes: 30, no: 1, note: "30–1" },
    { label: "House State Affairs", date: "Apr 24 → May 29, 2023", yes: 0, no: 0, note: "no hearing" },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 230" role="img" aria-label="The vote ledger for SB 1751: committee 11 to 0, Senate 30 to 1, House State Affairs no hearing">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE VOTE LEDGER · SB 1751 AT EVERY STOP, THEN THE STOP THAT NEVER CAME</text>
        {rows.map((r, i) => {
          const y = 62 + i * 52;
          const total = r.yes + r.no;
          const w = 480;
          const yesW = total ? (r.yes / total) * w : 0;
          const noW = total ? (r.no / total) * w : 0;
          return (
            <g key={r.label}>
              <text x="258" y={y + 12} fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">{r.label}</text>
              <text x="258" y={y + 26} fontSize="9.5" textAnchor="end" fill="var(--muted-2)">{r.date}</text>
              {total ? (
                <>
                  <rect x="270" y={y} width={yesW} height="22" rx="3" fill="#6f9e6a" />
                  {noW > 0 && <rect x={270 + yesW} y={y} width={noW} height="22" rx="3" fill="#c98a4e" />}
                  <text x="278" y={y + 15} fontSize="11" fontWeight="600" fill="var(--surface)">{r.yes} yes</text>
                  {r.no > 0 && <text x={270 + w - 8} y={y + 15} fontSize="11" fontWeight="600" textAnchor="end" fill="var(--surface)">{r.no} no</text>}
                </>
              ) : (
                <>
                  <rect x="270" y={y} width={w} height="22" rx="3" fill="none" stroke="var(--border)" strokeWidth="1.25" strokeDasharray="5 4" />
                  <text x={270 + w / 2} y={y + 15} fontSize="11" fontWeight="600" textAnchor="middle" fill="var(--muted-2)">never called</text>
                </>
              )}
              <text x="758" y={y + 15} fontSize="10" fill="var(--muted-2)">{r.note}</text>
            </g>
          );
        })}
        <text x="405" y="220" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Legislature Online, SB 1751 (88R) · the Senate near-unanimous, the House silent; the session ended May 29, 2023</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The vote ledger. Unanimous out of her committee, 30 to 1 on the Senate floor, and then a dashed line: House State Affairs received the bill on April 24 and never set a hearing. In Texas a bill that is not heard does not lose; it expires.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function LoisKolkhorstBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Lois Kolkhorst: The Senator Who Wrote the Brake",
    description:
      "The Bitcoin record of the Texas senator who authored Senate Bill 1751: the 2022 interim hearing, the three-part bill, the committee quotes, the 11–0 and 30–1 votes, the industry campaign and the open letter, the death in House State Affairs, Riot's $31.7 million August, the registration half that became law under other names, and the 2015 Bullion Depository she sponsored.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-13",
    dateModified: "2026-09-13",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Lois Kolkhorst" },
      { "@type": "Legislation", name: "Texas Senate Bill 1751 (88R)" },
      { "@type": "Thing", name: "ERCOT demand response" },
      { "@type": "Thing", name: "Texas Bullion Depository" },
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
        name: "Lois Kolkhorst and Bitcoin",
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
          / Lois Kolkhorst &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The Senate
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Lois Kolkhorst: The Senator Who Wrote the Brake
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every other page in this cluster is someone who moved the asset
            or the industry forward: a governor who signed, a senator who
            wrote, a chairman who carried, a comptroller who bought. This is
            the page for the one bill the industry organized to kill. In
            2023 a Brenham senator on the committee that owns the grid
            filed the only serious Texas attempt to constrain Bitcoin
            mining – register it, cap its paid curtailment, end its tax
            abatements – and got it through the Senate 30 to 1 before the
            House let it expire unheard. She had also, eight years earlier,
            carried the Texas Bullion Depository through the same chamber
            and called it a golden idea. Bullish on gold, wary of the load.
            What she argued, what the industry answered, and which third of
            her bill became law anyway are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 13, 2026 · Updated{" "}
            {KOLKHORST_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Lois Kolkhorst is the Republican state senator from Brenham who
            authored Senate Bill 1751, the 2023 Texas bill to register
            Bitcoin mines above 10 megawatts, cap them at 10% of ERCOT
            demand-response programs, and end their property-tax
            abatements. SB 1751 passed the Texas Senate 30–1 on April 12,
            2023 and died without a hearing in House State Affairs.
            Kolkhorst was also the Senate sponsor of the 2015 law creating
            the Texas Bullion Depository.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Lois Kolkhorst filed SB 1751 on March 7, 2023 with Senators
              Donna Campbell and Robert Nichols as joint authors.<C n={6} />
            </li>
            <li>
              SB 1751 would have registered mining facilities over 10
              megawatts, limited miners to under 10% of ERCOT
              demand-response program load, and barred Chapter 312 tax
              abatements for mining facilities.<C n={7} />
            </li>
            <li>
              The Senate Business and Commerce Committee passed SB 1751 11–0
              on April 4, 2023, and the Texas Senate passed it 30–1 on April
              12, 2023.<C n={6} /><C n={16} />
            </li>
            <li>
              SB 1751 was referred to the House State Affairs Committee on
              April 24, 2023 and never received a hearing before the
              session ended May 29, 2023.<C n={6} /><C n={17} />
            </li>
            <li>
              Kolkhorst was the Senate sponsor of HB 483, the Texas Bullion
              Depository act, signed June 19, 2015.<C n={4} />
            </li>
            <li>
              Riot Platforms reported $31.7 million in power and
              demand-response credits for August 2023, more than all of
              2022.<C n={19} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the depository to the brake
            </h2>
            <span className="text-xs text-muted-2">2001 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {kolkhorstTimeline.map((e) => {
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
          <h2>Who is Lois Kolkhorst, and why does she have a Bitcoin page?</h2>
          <p>
            Because she wrote the only Texas bill the Bitcoin mining industry
            has ever had to organize against. Kolkhorst is a Brenham native
            – Texas Christian University, a collegiate golfer, president of
            the Washington County Chamber of Commerce – who served seven
            terms in the House from 2001 and won Senate District 18 in a
            December 2014 special election.<C n={2} /><C n={1} /> Texas
            Monthly put her on its Best Legislators list in 2007 and its
            Worst in 2017, for the bathroom bill; the magazine called her
            one of the smartest members of the chamber both
            times.<C n={22} /> She chairs Health and Human Services and sits
            on Business and Commerce, the committee that owns the grid and
            through which every Texas mining and reserve bill has
            passed.<C n={1} /><C n={3} /> The chairman of that committee,
            who wrote the reserve, is on{" "}
            <Link href="/charles-schwertner-bitcoin">
              Charles Schwertner and Bitcoin
            </Link>
            ; this is the member of it who wrote the brake.
          </p>

          <h2>What did Kolkhorst do with gold before she touched Bitcoin?</h2>
          <p>
            She put Texas in the vault business. In 2015 Kolkhorst was the
            Senate sponsor of Representative Giovanni Capriglione&apos;s
            HB 483, the Texas Bullion Depository – the first state-run
            precious-metals depository in America.<C n={4} /> Her case was a
            storage bill: the University of Texas endowment held 5,610 gold
            bars in a Manhattan vault, paying New York for the
            privilege.<C n={5} /> &ldquo;New York will hate this,&rdquo; she
            said. &ldquo;To me, that and the fact that it will save Texas
            money makes it a golden idea.&rdquo;<C n={5} /> Abbott signed it
            June 19, 2015.<C n={4} /> The point matters for what follows:
            the senator the industry would later cast as anti-Bitcoin is a
            hard-money legislator by record, one who wants the state to
            own the asset and keep it at home. Her quarrel was never with
            the coin. The depository&apos;s author, and his own reserve
            record, is on{" "}
            <Link href="/giovanni-capriglione-bitcoin">
              Giovanni Capriglione and Bitcoin
            </Link>
            ; the two hard monies are compared on{" "}
            <Link href="/texas-gold-vs-bitcoin">Texas gold vs. Bitcoin</Link>.
          </p>

          <h2>What was SB 1751, and where did it come from?</h2>
          <p>
            From the committee&apos;s own interim hearing. In 2022, between
            sessions, Business and Commerce took up its charge on
            blockchain and the electricity market and heard testimony that
            new mining load could reach 37 gigawatts, with no requirement
            that large flexible loads register with ERCOT at
            all.<C n={8} /> Kolkhorst filed the answer on March 7, 2023, in
            three parts.<C n={6} /> <strong>Register:</strong> any facility
            expecting more than 10 megawatts within two years registers
            with the Public Utility Commission within one business day of
            its power agreement, with five years of demand
            projections.<C n={7} /> <strong>Cap:</strong> registered mines
            may join ERCOT&apos;s paid demand-response programs – the ones
            that compensate large loads for powering down when the grid is
            stressed – only while all such mines together are under 10% of
            program load.<C n={7} /> <strong>End the abatements:</strong>{" "}
            no taxing unit may grant a Chapter 312 property-tax abatement
            on a mining facility.<C n={7} /> The statute-by-statute context
            is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            ; the mines it was aimed at are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas mining map</Link>.
          </p>

          <KolkhorstThreePartsFigure />

          <h2>How did Kolkhorst argue for it?</h2>
          <p>
            As a subsidy question, in her own committee, on March 28, 2023.
            &ldquo;We&apos;re trying to produce all this new power.
            We&apos;re going to have a lot of this new power taken up by
            virtual currency mining. And then we&apos;re going to pay them
            to go off the grid at different times, which I believe is a
            part of their business model.&rdquo;<C n={10} /> The abatement
            ban, she said, follows from growth that is &ldquo;already
            projected&rdquo; without help; the bill
            &ldquo;rightsizes&rdquo; and &ldquo;it&apos;s not a punitive
            bill.&rdquo;<C n={10} /><C n={11} /><C n={12} /> The witness
            list was the whole Texas argument in one room: the Sierra Club,
            Public Citizen, and Concerned Citizens of Navarro County for;
            Riot Platforms and US Bitcoin Corp against; the Texas Blockchain
            Council, ERCOT, and the electric cooperatives registered
            &ldquo;on.&rdquo;<C n={9} /> Riot&apos;s Pierre Rochard answered
            the abatement clause with Rockdale: miners are the town&apos;s
            largest employer and the largest taxpayer to its school
            district.<C n={10} /> The cooperatives asked for something
            harder than her cap – a rule that mines shed before any
            residential customer in an emergency.<C n={10} /> The committee
            sent it out 11–0 on April 4; the Senate passed it 30–1 on April
            12.<C n={6} /><C n={13} /><C n={16} />
          </p>

          <KolkhorstVotesFigure />

          <h2>Why did SB 1751 die?</h2>
          <p>
            Because the House was the industry&apos;s chamber and the bill
            was never called. Between the committee vote and the floor
            vote, the opposition organized: Parker Lewis and Will Cole
            published an open letter to Kolkhorst on April 7 calling the
            bill &ldquo;misinformed, discriminatory, anti-competitive,
            harmful to grid stability, bad for consumers and a strategic
            setback for Texas,&rdquo; and the Texas Blockchain Council
            launched &ldquo;Don&apos;t Mess With Texas
            Innovation.&rdquo;<C n={15} /><C n={14} /> Lee Bratcher&apos;s
            line was the one the industry kept: the senator was
            &ldquo;well-intentioned, has the best interest of her
            constituents at heart, but is just being fed bad
            information.&rdquo;<C n={14} /> Marathon&apos;s chief executive
            said out loud what everyone knew – the House was &ldquo;much
            more aligned with the positive aspects and the benefits of
            bitcoin mining.&rdquo;<C n={16} /> The bill reached House State
            Affairs on April 24 and sat; the session ended May 29 with no
            hearing.<C n={6} /><C n={17} /> Eleven days later the governor
            signed the two bills the industry could live with: Senator
            <Link href="/nathan-johnson-bitcoin">Johnson</Link>&apos;s SB 1929,
            registration above 75 megawatts, and
            Capriglione&apos;s HB 591, the flared-gas
            exemption.<C n={18} /> The people who beat her are on{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher and Bitcoin</Link>{" "}
            and{" "}
            <Link href="/parker-lewis-bitcoin">Parker Lewis and Bitcoin</Link>
            ; the bill sits with the session&apos;s other casualties on{" "}
            <Link href="/texas-bitcoin-bills-that-died">the bills that died</Link>.
          </p>

          <h2>The honest counterweight: the number, the neighbors, and the half that passed</h2>
          <p>
            On this site the counterweight usually runs against the
            subject. Here it runs the other way, because the record after
            the bill died is not kind to the case against it. Five months
            after sine die, Riot reported $31.7 million in power and
            demand-response credits for August 2023 alone – more than all
            of 2022 – for curtailing Rockdale through the heat
            wave.<C n={19} /> The industry read the number as the grid
            working; the senator&apos;s side read it as the subsidy she had
            named in March, at scale. Both readings are on the record and
            the sentence &ldquo;part of their business model&rdquo; fits
            either.<C n={10} /> Then the neighbors: by 2025, residents of
            Granbury living beside a 300-megawatt mine were lobbying the
            Legislature to resurrect SB 1751, and went home with
            nothing.<C n={21} /> And the half that passed: the registration
            requirement she wrote for 10 megawatts became law at 75 under
            Johnson&apos;s name in 2023, and in 2025 the large-load law
            authored by King and Schwertner – interconnection standards and
            emergency curtailment for every load above 75 megawatts – put
            the register-and-curtail architecture of her bill at the
            center of state policy, with her name nowhere on
            it.<C n={18} /><C n={20} /> Her own 2025 session was SB 17 and
            SB 25; she filed nothing on mining.<C n={23} />
          </p>
          <p>
            The fair reading, from a site that is bullish on the industry
            she tried to constrain: the cap was the wrong instrument and
            the registry was the right one, and the Legislature sorted
            them correctly. A 10% ceiling on the most flexible load in
            ERCOT would have thrown away the grid&apos;s cheapest
            emergency reserve to make a point about who gets paid; the
            open letter was right about that, and so were the
            cooperatives, who wanted the mines shed first, not shut out.
            But the registry, the projections, and the curtailment
            authority she asked for in 2023 are exactly what the state
            reached for when the data centers arrived, and the abatement
            question she raised is now being asked about loads ten times
            the size of any mine. The senator who wrote the brake lost the
            vote that mattered and set the terms of the one that followed.
          </p>

          <h2>Where does the Kolkhorst record stand today?</h2>
          <p>
            As of September 2026: SB 1751 is dead, SB 1929 and SB 6 are law,
            and the large-load question has outgrown Bitcoin. Kolkhorst
            advanced from the March 3, 2026 Republican primary and faces
            Democrat Erica Gillum for Senate District 18 on November
            3.<C n={24} /> The 90th Legislature convenes January 12, 2027
            with AI data centers, not miners, as the load the grid is
            arguing about, and with the one senator who tried to cap a load
            in 2023 still seated on Business and Commerce.<C n={1} /> The
            state that declined her cap now owns the coin: the reserve her
            committee later passed is on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            , and the lieutenant governor who shares her position – bullish
            on the asset, tough on the load – is on{" "}
            <Link href="/dan-patrick-bitcoin">Dan Patrick and Bitcoin</Link>.
            This page is the senator who wrote it down first.
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
            Primary record first: the Texas Senate for the bio; Texas
            Legislature Online for the bill histories, the engrossed text,
            the Senate Research Center analysis, and the witness list; CBS
            Austin, the Houston Chronicle, and Decrypt for the hearing
            quotes; the open letter and the council&apos;s campaign in their
            own words; CoinDesk, Cointelegraph, CNBC, and The Nation for
            the votes, the death, and the aftermath. This is a research and
            reference article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {kolkhorstSources.map((s) => (
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
