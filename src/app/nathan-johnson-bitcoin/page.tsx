import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  JOHNSON_LAST_VERIFIED,
  johnsonSources,
  johnsonTimeline,
  type JohnsonTimelineKind,
} from "@/lib/johnson";

const pageUrl = `${site.url}/nathan-johnson-bitcoin`;

export const metadata: Metadata = {
  title: "Nathan Johnson: The Democrat Who Wrote the Registry",
  description:
    "Nathan Johnson's Bitcoin record, sourced: the Dallas Democrat who unseated Don Huffines in 2018, authored SB 1929 - the 2023 law that makes Bitcoin mines above 75 MW register with the Public Utility Commission - argued the donation clause out of the Texas Strategic Bitcoin Reserve ('billionaire tech bros owning a branch of the state government'), then voted for the reserve on the floor while Kelly Hancock voted no. The registry, the rule, the roll call, and the attorney general race.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Nathan Johnson: The Democrat Who Wrote the Registry",
    description:
      "The bipartisan half of the Texas Bitcoin record: the senator who made the mines visible and the reserve smaller, then voted for it. Sourced, with the Senate Journal roll call.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Nathan Johnson?",
    a: "Nathan Johnson is a Democratic state senator from Dallas who has represented Senate District 16 since January 2019, after unseating Republican Don Huffines in November 2018. A business litigator with a physics degree from Arizona and a law degree from Texas, he sits on the Senate Business and Commerce Committee. In Bitcoin history he authored SB 1929, the 2023 mining-registration law, and led the opposition to private donations in the Texas Strategic Bitcoin Reserve. He is the 2026 Democratic nominee for Texas attorney general.",
  },
  {
    q: "What does Texas SB 1929 require?",
    a: "SB 1929, signed June 9, 2023 and effective September 1, 2023, requires any virtual currency mining facility in ERCOT expecting more than 75 megawatts of interruptible load to register with the Public Utility Commission within one business day of its power agreement, giving its location and five years of anticipated demand. The commission may share the data with ERCOT. The commission's implementing rule, adopted November 21, 2024, added ownership information, annual updates, and penalties of up to $25,000 per violation per day.",
  },
  {
    q: "Did Nathan Johnson vote for the Texas Bitcoin reserve?",
    a: "Yes, on the floor. In the February 18, 2025 committee hearing he attacked the bill's private-donation clause - 'I don't want billionaire tech bros owning a branch of the state government' - and the author removed it before the committee's 10–0 vote. On March 6, 2025 the Senate Journal records Johnson among the 25 yeas; the five nays were Creighton, Gutierrez, Hall, Hancock, and Nichols. When the House restored donations in May, his office said he would vote against concurring, and the conference committee removed the clause for good.",
  },
  {
    q: "What did Johnson say about Bitcoin donations to the state?",
    a: "In committee on February 18, 2025: 'If someone decides to give $10 billion to the state, they're creating a market for themselves' and could 'manipulate the market using the imprimatur of the state. I don't want the state to be a tool of an investor. I would want this to be limited to just state allocations. I don't want billionaire tech bros owning a branch of the state government.' The enacted reserve holds only appropriated state money.",
  },
  {
    q: "Is Nathan Johnson running for attorney general?",
    a: "Yes. He announced on July 15, 2025, led the March 3, 2026 Democratic primary with 48.1%, and won the May 26 runoff over Joe Jaworski with 60.5%. He faces Republican state Senator Mayes Middleton in the November 3, 2026 general election. He kept his Senate seat through the campaign.",
  },
];

const kindStyle: Record<JohnsonTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  registry: { color: "#c98a4e", label: "The registry" },
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
// Two figures - the registry as built, and the clause and the roll call -
// drawn from the dated, sourced facts on this page (Sept 2026).
// Server-rendered SVG, no client JS.
function JohnsonRegistryFigure() {
  const steps = [
    { when: "June 9, 2023", title: "SB 1929 (Johnson)", lines: ["mines over 75 MW register with the PUC", "within one business day of the power deal", "location + five years of demand", "no penalty written into the statute"], color: "#c98a4e" },
    { when: "Nov 21, 2024", title: "PUC rule", lines: ["location, ownership, annual demand", "up to $25,000 per violation per day", "data held off the public record", "seventeen months after the statute"], color: "#c98a4e" },
    { when: "June 20, 2025", title: "SB 6 (King, Schwertner)", lines: ["every large load over 75 MW", "interconnection standards", "emergency curtailment authority", "the registry, with teeth, for all loads"], color: "var(--accent)" },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 290" role="img" aria-label="The registry as built, in three steps: SB 1929 in 2023, the Public Utility Commission rule in November 2024, and SB 6 in 2025 extending the model to all large loads">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE REGISTRY, AS BUILT · FROM HIS STATUTE TO THE RULE TO THE LARGE-LOAD LAW</text>
        {steps.map((s, i) => {
          const x = 28 + i * 262;
          return (
            <g key={s.title}>
              <rect x={x} y="52" width="230" height="190" rx="10" fill="var(--surface-2)" stroke={s.color} strokeWidth="1.25" />
              <text x={x + 14} y="74" fontSize="9.5" letterSpacing="1.5" fill={s.color}>{s.when.toUpperCase()}</text>
              <text x={x + 14} y="96" fontSize="13" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{s.title}</text>
              {s.lines.map((l, j) => (
                <text key={l} x={x + 14} y={124 + j * 22} fontSize="10.5" fill="var(--muted)">{l}</text>
              ))}
              {i < 2 && (
                <>
                  <line x1={x + 232} y1="147" x2={x + 258} y2="147" stroke="var(--muted-2)" strokeWidth="1.25" />
                  <polygon points={`${x + 256},142 ${x + 262},147 ${x + 256},152`} fill="var(--muted-2)" />
                </>
              )}
            </g>
          );
        })}
        <text x="405" y="272" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">SB 1929 enrolled text; Utility Dive on the PUC rule; SB 6 (89R) history · the 75-megawatt line he drew in 2023 is the line the state still uses</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The registry, as built. Johnson&apos;s statute drew the line at 75 megawatts and asked for a location and a forecast; the commission&apos;s rule added ownership, annual updates, and a daily penalty; the 2025 large-load law kept his threshold and gave ERCOT interconnection standards and curtailment authority over everything above it. Three steps, one number.
      </figcaption>
    </figure>
  );
}

function JohnsonClauseFigure() {
  const clause: { when: string; l1: string; l2: string; alive: boolean }[] = [
    { when: "Jan 14", l1: "in SB 778", l2: "as filed", alive: true },
    { when: "Feb 18", l1: "Johnson objects;", l2: "stripped before 10–0", alive: false },
    { when: "May 21", l1: "House restores it,", l2: "101–42", alive: true },
    { when: "May 25", l1: "Senate refuses", l2: "to concur", alive: false },
    { when: "May 29", l1: "conference removes it", l2: "for good", alive: false },
  ];
  const yeas = "Alvarado · Bettencourt · Birdwell · Blanco · Campbell · Cook · Eckhardt · Flores · Hagenbuch · A. Hinojosa · J. Hinojosa · Huffman · Hughes · Johnson · King · Kolkhorst · Menéndez · Middleton · Parker · Paxton · Perry · Schwertner · Sparks · West · Zaffirini";
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 330" role="img" aria-label="The donation clause's five stops in 2025, dead three times, and the March 6 Senate roll call: 25 yeas including Johnson, 5 nays including Hancock">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE CLAUSE AND THE ROLL CALL · WHAT HE CUT, AND HOW HE VOTED</text>
        <text x="28" y="60" fontSize="11" fontWeight="600" letterSpacing="2" fill="#c98a4e">THE DONATION CLAUSE, 2025</text>
        <line x1="60" y1="98" x2="750" y2="98" stroke="var(--border)" strokeWidth="2" />
        {clause.map((c, i) => {
          const x = 80 + i * 160;
          return (
            <g key={c.when}>
              <circle cx={x} cy="98" r="7" fill={c.alive ? "#6f9e6a" : "#c98a4e"} />
              <text x={x} y="82" fontSize="10.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{c.when}</text>
              <text x={x} y="120" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">{c.l1}</text>
              <text x={x} y="133" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">{c.l2}</text>
            </g>
          );
        })}
        <text x="28" y="172" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">CSSB 21 · MARCH 6, 2025 · YEAS 25, NAYS 5</text>
        <rect x="28" y="184" width="754" height="22" rx="3" fill="#6f9e6a" />
        <rect x="656" y="184" width="126" height="22" rx="3" fill="#c98a4e" />
        <text x="36" y="199" fontSize="11" fontWeight="600" fill="var(--surface)">25 yeas · Johnson among them</text>
        <text x="774" y="199" fontSize="11" fontWeight="600" textAnchor="end" fill="var(--surface)">5 nays</text>
        <foreignObject x="28" y="214" width="600" height="60">
          <p style={{ margin: 0, fontSize: "9.5px", lineHeight: 1.4, color: "var(--muted-2)" }}>{yeas}</p>
        </foreignObject>
        <text x="656" y="230" fontSize="10.5" fontWeight="600" fill="#c98a4e">Creighton · Gutierrez · Hall</text>
        <text x="656" y="246" fontSize="10.5" fontWeight="600" fill="#c98a4e">Nichols · Hancock</text>
        <text x="656" y="262" fontSize="9.5" fill="var(--muted-2)">Hancock bought the reserve&apos;s</text>
        <text x="656" y="275" fontSize="9.5" fill="var(--muted-2)">first Bitcoin eight months later</text>
        <text x="405" y="314" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Senate Journal, 89R, 14th Day; Texas Observer, February 28 and May 21, 2025 · Miles absent-excused</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The clause and the roll call. The private-donation provision was alive twice and killed three times, the first time by Johnson in committee. On the floor he voted for the reserve he had narrowed; the senator who would later execute it, Kelly Hancock, voted no.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function NathanJohnsonBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Nathan Johnson: The Democrat Who Wrote the Registry",
    description:
      "The Bitcoin record of the Dallas senator who authored SB 1929, the 2023 mining-registration law, argued the donation clause out of the Texas Strategic Bitcoin Reserve, and voted for the reserve on the floor: the 2018 upset over Huffines, the registry and the rule that followed, the June 2024 load hearing, the February 2025 committee fight, the March 6 roll call, the conference, and the 2026 attorney general campaign.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-13",
    dateModified: "2026-09-13",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Nathan Johnson" },
      { "@type": "Legislation", name: "Texas Senate Bill 1929 (88R)" },
      { "@type": "Legislation", name: "Texas Senate Bill 21 (89R)" },
      { "@type": "Thing", name: "Texas Strategic Bitcoin Reserve" },
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
        name: "Nathan Johnson and Bitcoin",
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
          / Nathan Johnson &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The Senate
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Nathan Johnson: The Democrat Who Wrote the Registry
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The Texas Bitcoin record is usually told as a Republican story,
            and most of its names are. This is the page for the other
            half. A Dallas litigator with a physics degree took a Senate
            seat from Don Huffines in 2018, sat down on the committee that
            owns the grid, and in 2023 wrote the one mining bill the
            industry could accept – the registry that made the mines
            visible to ERCOT – on the same day his Republican colleague
            wrote the cap it could not. Two years later he argued the
            donation clause out of the state&apos;s Bitcoin reserve in
            committee, then voted for the reserve on the floor while the
            senator who would soon buy its coins voted no. He is now the
            Democratic nominee for attorney general. The registry, the
            clause, and the roll call are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 13, 2026 · Updated{" "}
            {JOHNSON_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Nathan Johnson is the Democratic state senator from Dallas who
            authored Senate Bill 1929, the 2023 Texas law requiring Bitcoin
            mining facilities above 75 megawatts to register with the
            Public Utility Commission. In Senate District 16 since 2019, he
            led the opposition to private donations in Senate Bill 21, the
            Texas Strategic Bitcoin Reserve, then voted for the bill on
            March 6, 2025. He is the 2026 Democratic nominee for Texas
            attorney general.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Nathan Johnson defeated Senator Don Huffines on November 6,
              2018 with 54.13% of the vote.<C n={2} /><C n={3} />
            </li>
            <li>
              Johnson authored SB 1929, filed March 8, 2023, signed June 9,
              2023, and effective September 1, 2023, requiring mining
              facilities over 75 megawatts to register with the Public
              Utility Commission.<C n={4} /><C n={5} />
            </li>
            <li>
              The Public Utility Commission adopted the SB 1929
              registration rule on November 21, 2024, with penalties of up
              to $25,000 per violation per day.<C n={12} />
            </li>
            <li>
              On February 18, 2025 Johnson opposed private donations to the
              reserve in committee, and the clause was removed before the
              10–0 committee vote.<C n={14} /><C n={17} />
            </li>
            <li>
              On March 6, 2025 the Senate passed SB 21 25–5 with Johnson
              voting yea; the nays were Creighton, Gutierrez, Hall, Hancock,
              and Nichols.<C n={15} />
            </li>
            <li>
              Johnson won the Democratic nomination for attorney general on
              May 26, 2026 with 60.5% in the runoff, and faces Mayes
              Middleton on November 3, 2026.<C n={2} /><C n={22} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the upset to the registry
            </h2>
            <span className="text-xs text-muted-2">2018 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {johnsonTimeline.map((e) => {
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
          <h2>Who is Nathan Johnson, and why is he in this cluster?</h2>
          <p>
            Because he is the only member of it who is a Democrat, and
            because two of the record&apos;s load-bearing facts are his.
            Johnson is a Fort Worth native – physics at Arizona, law at
            Texas, a business and bankruptcy litigator, and, in another
            life, the composer of music for the Funimation dub of Dragon
            Ball Z – who in November 2018 unseated Senator Don Huffines by
            eight points in a district Republicans had held for three
            decades.<C n={2} /><C n={3} /> He took a seat on Business and
            Commerce, the committee through which every Texas mining and
            reserve bill has since passed.<C n={1} /> The man he beat is on{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines and Bitcoin</Link>,
            holding the state&apos;s coins as comptroller; the chairman of
            the committee is on{" "}
            <Link href="/charles-schwertner-bitcoin">
              Charles Schwertner and Bitcoin
            </Link>
            . This is the member who made the mines visible and the reserve
            smaller.
          </p>

          <h2>What is SB 1929, and why did it pass when SB 1751 didn&apos;t?</h2>
          <p>
            Because it asked the industry for information, not money. The
            two bills were filed a day apart in March 2023 from the same
            committee and the same interim record: the Senate Research
            Center&apos;s analysis of Johnson&apos;s bill names the problem
            as &ldquo;ERCOT&apos;s inability to see or control the
            behavior&rdquo; of large flexible loads – data centers, crypto
            mines, hydrogen – over 75 megawatts.<C n={6} /> SB 1929 answers
            the seeing: a mining facility expecting more than 75 megawatts
            of interruptible load registers with the Public Utility
            Commission within one business day of its power agreement,
            with its location and five years of anticipated demand, and the
            commission may pass the data to ERCOT.<C n={5} /> No cap, no
            abatement ban, no penalty in the statute. Both bills cleared
            Business and Commerce 11–0 and passed the Senate on April 12;
            in the House, State Affairs reported his out 13–0 on May 3 and
            never heard hers.<C n={4} /><C n={7} /> Abbott signed SB 1929
            on June 9, 2023.<C n={4} /> CoinDesk&apos;s headline was the
            whole session: two bills passed, one halted.<C n={8} /> The bill
            that halted, and the senator who wrote it, are on{" "}
            <Link href="/lois-kolkhorst-bitcoin">Lois Kolkhorst and Bitcoin</Link>
            ; the industry that chose between them is on{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher and Bitcoin</Link>.
          </p>

          <JohnsonRegistryFigure />

          <h2>What did the registry become?</h2>
          <p>
            A rule, and then the state&apos;s large-load policy.{" "}
            <Link href="/texas-public-utility-commission-bitcoin">
              The Public Utility Commission
            </Link>{" "}
            took seventeen months to adopt the
            registration rule his statute required – November 21, 2024 –
            and made it heavier than the bill: location, ownership, and
            annual demand, penalties of up to $25,000 per violation per
            day, the filings held off the public record.<C n={12} /> The
            Texas Blockchain Council called the rule &ldquo;appropriate and
            far less invasive than what the Federal Government
            attempted,&rdquo; the federal survey it had sued to
            stop.<C n={12} /> By then the number the registry was built to
            capture had exploded: at Johnson&apos;s committee on June 12,
            2024, ERCOT&apos;s Pablo Vegas said peak demand could go from
            about 85,000 megawatts to 150,000 by 2030, with data centers
            and miners more than half of it.<C n={9} /> Johnson&apos;s
            reaction was the sentence the hearing is remembered for:
            &ldquo;huge policy implications, and every assumption
            we&apos;ve made in the last four years is now called into
            question once again&rdquo; – &ldquo;a completely new economy
            really in Texas, and certainly a new grid.&rdquo;<C n={10} />
            <C n={11} /> In 2025 the Legislature answered with SB 6, which
            kept his 75-megawatt line and gave ERCOT interconnection
            standards and emergency curtailment over every load above it;
            it passed his committee 10–0 and was signed June 20,
            2025.<C n={18} /> The mines the registry counts are on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas mining map</Link>.
          </p>

          <h2>What did Johnson do to the Texas Bitcoin reserve?</h2>
          <p>
            He cut the donation clause, and then he voted for what was
            left. Schwertner&apos;s reserve, as filed, let the public give
            Bitcoin to the state. In committee on February 18, 2025 Johnson
            went after it: &ldquo;If someone decides to give $10 billion to
            the state, they&apos;re creating a market for themselves&rdquo;
            and could &ldquo;manipulate the market using the imprimatur of
            the state. I don&apos;t want the state to be a tool of an
            investor. I would want this to be limited to just state
            allocations. I don&apos;t want billionaire tech bros owning a
            branch of the state government.&rdquo;<C n={14} /><C n={13} />{" "}
            Schwertner removed the clause; the committee voted 10–0.
            <C n={14} /><C n={17} /> On March 6 the Senate passed SB 21
            25–5, and the journal records Johnson among the yeas – with
            Eckhardt, Menéndez, and West – while the five nays were
            Creighton, Gutierrez, Hall, Nichols, and Kelly Hancock, the
            senator who eight months later, as acting comptroller, would
            buy the reserve&apos;s first Bitcoin.<C n={15} /> When the House
            restored donations on May 21, limited to Texans, his office said
            he would vote against concurring; the Senate declined the House
            version on May 25, and the conference report adopted May 29
            removed the clause for good.<C n={16} /><C n={17} /> The reserve
            as enacted holds appropriated state money and nothing else,
            which is the shape he asked for. The law as it operates is on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            ; the man who bought the coins, and voted no, is on{" "}
            <Link href="/kelly-hancock-bitcoin">Kelly Hancock and Bitcoin</Link>.
          </p>

          <JohnsonClauseFigure />

          <h2>The honest counterweight: the light registry, the yes vote, and the exit</h2>
          <p>
            Three things. First, the registry is light. Johnson&apos;s
            statute set the line at 75 megawatts, not the 10 Kolkhorst
            proposed; wrote no penalty; and left enforcement to a rule that
            took seventeen months to arrive.<C n={5} /><C n={12} /> Miners
            under 75 megawatts – most sites by count – are invisible to it.
            The Blockchain Council&apos;s endorsement of the rule is the
            tell: it was the regulation the regulated preferred. Second,
            the vote. The senator who warned against the state becoming
            &ldquo;a tool of an investor&rdquo; voted to put ten million
            dollars of general revenue into the investment, against the
            position of Texans for Fiscal Responsibility on his right and
            five of his colleagues, one of them a Democrat.<C n={15} /> He
            can say, accurately, that he fixed the bill&apos;s worst clause
            and then honored the committee&apos;s work; a critic can say
            he narrowed the reserve and then bought it. Third, the exit. He
            is leaving the chamber to run for{" "}
            <Link href="/texas-attorney-general-bitcoin">attorney general</Link>
            , an office whose consumer-protection docket – the kiosk scams the
            Legislature twice failed to regulate among them – he has not
            addressed in a campaign about restoring &ldquo;faith and
            confidence&rdquo; in the office itself.<C n={19} /><C n={20} />
            <C n={23} />
          </p>
          <p>
            The fair reading, from a site that is bullish on the industry
            he registered: the light registry was the right registry, and
            the state proved it by keeping his number when it wrote SB 6.
            A cap would have driven flexible load off the grid; a register
            let ERCOT plan for it, and the industry&apos;s willingness to
            comply is evidence the line was drawn where it should be. The
            yes vote is a legislator finishing a bill he had improved, which
            is how the chamber is supposed to work and why the reserve
            passed with Democratic votes. The open question is the one the
            attorney general&apos;s race will answer: whether the senator
            who wanted the mines visible and the donors kept out brings
            the same instinct to the office that polices the market.
          </p>

          <h2>Where does the Johnson record stand today?</h2>
          <p>
            As of September 2026: SB 1929 is law and its rule is in force,
            the reserve he narrowed holds ten million dollars of state
            money and no donations, and he is the Democratic nominee for
            attorney general – 48.1% in the March 3 primary, 60.5% in the
            May 26 runoff – against Republican Senator{" "}
            <Link href="/mayes-middleton-bitcoin">Mayes Middleton</Link>, a
            Business and Commerce colleague and SB 6 coauthor, on November
            3.<C n={21} /><C n={22} /><C n={18} /> He holds Senate District
            16 through the campaign.<C n={1} /> The 90th Legislature
            convenes January 12, 2027 with the large-load question he named
            in June 2024 as its central grid fight, and either with him
            back on Business and Commerce or in the office across the
            street. The cap that died beside his registry is on{" "}
            <Link href="/lois-kolkhorst-bitcoin">Lois Kolkhorst and Bitcoin</Link>;
            the statute-by-statute record is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            . This page is the Democrat who wrote the part that passed.
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
            Legislature Online for the bill histories, the enrolled SB 1929
            text, and the Senate Research Center analysis; the Senate
            Journal for the March 6, 2025 roll call; Utility Dive for the
            commission&apos;s rule; the Texas Observer, CBS Austin, FOX 4,
            Forbes, and the Houston Chronicle for the hearings; the Texas
            Tribune, the Dallas Morning News, CBS Texas, and Ballotpedia
            for the elections. This is a research and reference article,
            not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {johnsonSources.map((s) => (
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
