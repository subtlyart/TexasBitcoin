import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  PARKER_LAST_VERIFIED,
  parkerSources,
  parkerTimeline,
  type ParkerTimelineKind,
} from "@/lib/parker";

const pageUrl = `${site.url}/tan-parker-bitcoin`;

export const metadata: Metadata = {
  title: "Tan Parker: The Man Who Defined the Asset",
  description:
    "Tan Parker's Bitcoin record, sourced: the Flower Mound legislator who wrote HB 4474, the 2021 law that put 'virtual currency' into the Texas Uniform Commercial Code, and HB 1576, the Work Group on Blockchain Matters - after his 2019 version died in Calendars. In the Senate since 2023 and Majority Leader since January 2025: coauthor of the reserve, sponsor of the commingling ban and the Cyber Command, and author of eight digital-asset bills that never left committee, including an oil-backed stablecoin filed a year before he appeared on the advisory board of a company selling one.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Tan Parker: The Man Who Defined the Asset",
    description:
      "Before Texas could own Bitcoin, register the mines, or ban commingling, it needed a legal definition of the thing. Parker wrote it in 2021. The definer's record, from the dead 2019 bill to the Senate ledger. Sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Tan Parker?",
    a: "Tan Parker is a Republican from Flower Mound who served in the Texas House for District 63 from 2007 to 2023, chaired the House Republican Caucus from 2015 to 2018, and has represented Senate District 12 since January 2023. He became Senate Majority Leader on January 14, 2025. In Bitcoin history he is the lead author of HB 4474 (2021), which wrote virtual currency into the Texas Uniform Commercial Code, and HB 1576 (2021), which created the Work Group on Blockchain Matters.",
  },
  {
    q: "What did Texas HB 4474 do?",
    a: "HB 4474 added Chapter 12 to the Texas Business and Commerce Code, defining virtual currency as a digital representation of value used as a medium of exchange, unit of account, or store of value that is not legal tender. It defined 'control' as the power to derive the benefits of the asset, to exclude others, and to transfer it - powers that may be shared, which is what lets a bank custody it. A secured party can perfect an interest by control, and a purchaser who takes control for value without notice takes free of adverse claims. Abbott signed it June 15, 2021, effective September 1, 2021.",
  },
  {
    q: "What Bitcoin bills has Parker filed in the Texas Senate?",
    a: "Eight on digital assets and hard money across 2023 and 2025, none enacted: SB 770 (commingling), SB 925 (blockchain UCC filings), SB 1558 (gold and silver legal tender), SJR 67 and SJR 55 (a right to a mutually agreed medium of exchange), SB 1705 (virtual currency kiosks, which passed the Senate and died in the House), SB 1941 and SB 2174 (digital-asset service provider reporting), and SB 2922 (an oil-backed stablecoin). The House bills he sponsored - HB 1666 (commingling, 2023) and HB 150 (Texas Cyber Command, 2025) - became law, and he was a coauthor of SB 21, the reserve.",
  },
  {
    q: "What did Tan Parker say about Bitcoin?",
    a: "In April 2021: 'We as an American people have to engage with these digital currencies. They are instrumentally important to the economic and, I would argue, national security interest of the United States.' At the first Texas Blockchain Summit on October 8, 2021: 'You guys are pioneers on the front lines of an extraordinarily bright new future.' After the Senate passed SB 21 in March 2025: 'Bitcoin is a recognized asset, and Texas is taking action to secure our future.'",
  },
  {
    q: "What is the oil-backed stablecoin connection?",
    a: "On March 14, 2025 Parker filed SB 2922 to have the Texas Department of Banking license oil-backed stablecoins with custodial reserves of crude; it was referred to Business and Commerce and never heard. On April 16, 2026 the Texas Tribune reported that Railroad Commissioner Wayne Christian was promoting Energy Substantiation's $WTIC, a token pegged to barrels of crude, and that Parker, a member of the Senate Natural Resources Committee, was listed on the company's advisory board. His office did not respond to the Tribune.",
  },
];

const kindStyle: Record<ParkerTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  definition: { color: "var(--accent)", label: "The definition" },
  senate: { color: "#c98a4e", label: "The Senate" },
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
// Two figures - the definition as a mechanism, and the author's ledger -
// drawn from the dated, sourced facts on this page (Sept 2026).
// Server-rendered SVG, no client JS.
function ParkerDefinitionFigure() {
  const powers = [
    { title: "Derive the benefits", sub: "substantially all of them" },
    { title: "Exclude others", sub: "the exclusive power to prevent" },
    { title: "Transfer control", sub: "to another person" },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 330" role="img" aria-label="HB 4474 as a mechanism: virtual currency defined, control as three powers that may be shared, and two consequences - perfection by control and a purchaser who takes free of adverse claims">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE DEFINITION · HB 4474 (2021), CHAPTER 12 OF THE BUSINESS &amp; COMMERCE CODE, AS A MECHANISM</text>
        {/* definition box */}
        <rect x="28" y="52" width="754" height="54" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.25" />
        <text x="44" y="74" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">VIRTUAL CURRENCY</text>
        <text x="44" y="94" fontSize="11.5" fill="var(--foreground)">“a digital representation of value that is used as a medium of exchange, unit of account, or store of value; and is not legal tender”</text>
        {/* arrow */}
        <line x1="405" y1="106" x2="405" y2="132" stroke="var(--muted-2)" strokeWidth="1.25" />
        <polygon points="400,130 410,130 405,138" fill="var(--muted-2)" />
        <text x="420" y="126" fontSize="10" fill="var(--muted-2)">who has it? whoever has</text>
        {/* control: three powers */}
        <text x="28" y="156" fontSize="11" fontWeight="600" letterSpacing="2" fill="#c98a4e">CONTROL · THREE POWERS THE SYSTEM GIVES YOU</text>
        {powers.map((p, i) => {
          const x = 28 + i * 256;
          return (
            <g key={p.title}>
              <rect x={x} y="166" width="242" height="52" rx="8" fill="var(--surface-2)" stroke="#c98a4e" strokeWidth="1.25" />
              <text x={x + 14} y="188" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{i + 1}. {p.title}</text>
              <text x={x + 14} y="205" fontSize="10" fill="var(--muted-2)">{p.sub}</text>
            </g>
          );
        })}
        <text x="405" y="238" fontSize="10.5" textAnchor="middle" fill="var(--muted)">the powers may be shared with another person – which is what lets a bank hold your keys and you still have control</text>
        {/* two consequences */}
        <line x1="270" y1="246" x2="270" y2="262" stroke="var(--muted-2)" strokeWidth="1.25" />
        <line x1="540" y1="246" x2="540" y2="262" stroke="var(--muted-2)" strokeWidth="1.25" />
        <rect x="140" y="264" width="260" height="46" rx="8" fill="var(--surface-2)" stroke="#6f9e6a" strokeWidth="1.25" />
        <text x="154" y="283" fontSize="11.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">A lender perfects by control</text>
        <text x="154" y="299" fontSize="10" fill="var(--muted-2)">no filing needed while control is held</text>
        <rect x="410" y="264" width="372" height="46" rx="8" fill="var(--surface-2)" stroke="#6f9e6a" strokeWidth="1.25" />
        <text x="424" y="283" fontSize="11.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">A buyer for value, without notice, takes free of adverse claims</text>
        <text x="424" y="299" fontSize="10" fill="var(--muted-2)">clean title, the way cash and negotiable instruments already worked</text>
        <text x="405" y="324" fontSize="10" textAnchor="middle" fill="var(--muted-2)">HB 4474 enrolled text · Texas was the third state to write the asset into its Uniform Commercial Code</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The definition, as a mechanism. HB 4474 answered the question every later Texas statute assumes: what is this thing, and who has it? The answer is control – three powers the network gives whoever holds the keys, which may be shared – and from control follow the two things commerce needs: a lender can perfect against it, and a buyer can take it clean.
      </figcaption>
    </figure>
  );
}

function ParkerLedgerFigure() {
  const authored = [
    { bill: "HB 4517 · 2019", fate: "died in Calendars", ok: false },
    { bill: "HB 1576 · 2021", fate: "signed June 7", ok: true },
    { bill: "HB 4474 · 2021", fate: "signed June 15", ok: true },
    { bill: "SB 770 · 2023", fate: "left pending", ok: false },
    { bill: "SB 925 · 2023", fate: "no hearing", ok: false },
    { bill: "SB 1558 · 2023", fate: "no hearing", ok: false },
    { bill: "SJR 67 · 2023", fate: "no hearing", ok: false },
    { bill: "SB 1705 · 2025", fate: "passed Senate, died in House", ok: false },
    { bill: "SJR 55 · 2025", fate: "no hearing", ok: false },
    { bill: "SB 2174 · 2025", fate: "no hearing", ok: false },
    { bill: "SB 2922 · 2025", fate: "no hearing", ok: false },
  ];
  const carried = [
    { bill: "HB 1666 · 2023", fate: "sponsor · signed June 9", ok: true },
    { bill: "SB 21 · 2025", fate: "coauthor · signed June 20", ok: true },
    { bill: "HB 150 · 2025", fate: "sponsor · signed June 2", ok: true },
    { bill: "HJR 175 · 2025", fate: "sponsor · left pending", ok: false },
  ];
  const row = (r: { bill: string; fate: string; ok: boolean }, x: number, y: number, w: number) => (
    <g key={r.bill}>
      <circle cx={x + 8} cy={y - 4} r="4" fill={r.ok ? "#6f9e6a" : "#c98a4e"} />
      <text x={x + 20} y={y} fontSize="11" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">{r.bill}</text>
      <text x={x + w} y={y} fontSize="10" textAnchor="end" fill={r.ok ? "#6f9e6a" : "var(--muted-2)"}>{r.fate}</text>
    </g>
  );
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 360" role="img" aria-label="The author's ledger: eleven Bitcoin and hard-money bills Parker authored, two enacted, beside four he carried for others, three enacted">
        <text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE AUTHOR&apos;S LEDGER · WHAT HE WROTE, AND WHAT HE CARRIED</text>
        <rect x="28" y="50" width="440" height="286" rx="10" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="44" y="74" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">AUTHORED · 11 BILLS, 2 ENACTED</text>
        {authored.map((r, i) => row(r, 44, 98 + i * 22, 408))}
        <rect x="484" y="50" width="298" height="286" rx="10" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="500" y="74" fontSize="11" fontWeight="600" letterSpacing="2" fill="#c98a4e">CARRIED FOR OTHERS · 4, 3 ENACTED</text>
        {carried.map((r, i) => row(r, 500, 98 + i * 22, 266))}
        <text x="500" y="220" fontSize="10" fill="var(--muted-2)">Both House statutes he authored passed</text>
        <text x="500" y="234" fontSize="10" fill="var(--muted-2)">the year the Texas Blockchain Council</text>
        <text x="500" y="248" fontSize="10" fill="var(--muted-2)">first lobbied for them. Every Senate</text>
        <text x="500" y="262" fontSize="10" fill="var(--muted-2)">bill he has authored on the subject</text>
        <text x="500" y="276" fontSize="10" fill="var(--muted-2)">since has died in committee or in the</text>
        <text x="500" y="290" fontSize="10" fill="var(--muted-2)">other chamber; the ideas passed</text>
        <text x="500" y="304" fontSize="10" fill="var(--muted-2)">under House authors with him as</text>
        <text x="500" y="318" fontSize="10" fill="var(--muted-2)">sponsor.</text>
        <text x="405" y="352" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Texas Legislature Online, author reports 86R–89R and bill histories · green = enacted, amber = not</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The author&apos;s ledger. Eleven Bitcoin and hard-money bills under his name since 2019, two enacted – both in the House, both in 2021. In the Senate he has filed eight and passed none, while the House bills he carried as sponsor became law. The pattern is the House&apos;s, not his: Texas digital-asset statutes originate in the lower chamber and need a Senate sponsor, and since 2023 that sponsor has usually been Parker.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function TanParkerBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tan Parker: The Man Who Defined the Asset",
    description:
      "The Bitcoin record of the Texas legislator who wrote HB 4474, the 2021 statute defining virtual currency in the Texas UCC, and HB 1576, the Work Group on Blockchain Matters: the dead 2019 bill, the 2021 quotes, the custody notice, the work group's report, the Senate ledger of authored bills that died and sponsored bills that passed, the reserve coauthorship, the oil-backed stablecoin bill and the advisory board, and the boards he sits on as Majority Leader.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-13",
    dateModified: "2026-09-13",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Tan Parker" },
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
        name: "Tan Parker and Bitcoin",
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
          / Tan Parker &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The Senate
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Tan Parker: The Man Who Defined the Asset
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every Texas Bitcoin statute on this site rests on a sentence
            most of them never quote: the one that says what the thing is.
            Before the state could register a mine, ban a custodian from
            commingling, or buy ten million dollars of it for a reserve,
            its commercial code needed a definition of virtual currency and
            a rule for who has it. A Flower Mound businessman who chaired
            the House Republican Caucus wrote that sentence in 2021, two
            years after his first attempt died in a calendar committee, and
            a regulator used it within a week to let banks hold the keys.
            He has been in the Senate since, Majority Leader since January
            2025, and the chamber&apos;s busiest filer on the subject – with
            the thinnest record of passage. The definition, the ledger, and
            the oil-backed coin are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 13, 2026 · Updated{" "}
            {PARKER_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Tan Parker is the Republican Texas Senate Majority Leader from
            Flower Mound who, as a House member, authored HB 4474, the 2021
            law that wrote virtual currency into the Texas Uniform
            Commercial Code, and HB 1576, which created the Work Group on
            Blockchain Matters. In the Senate since 2023, he was a coauthor
            of Senate Bill 21, the Texas Strategic Bitcoin Reserve, and the
            Senate sponsor of the 2023 commingling ban and the 2025 Texas
            Cyber Command.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Tan Parker was the lead author of HB 4474, signed June 15,
              2021, which added Chapter 12, &ldquo;Virtual Currency,&rdquo;
              to the Texas Business and Commerce Code.<C n={7} /><C n={8} />
            </li>
            <li>
              Parker&apos;s first blockchain bill, HB 4517, was sent to the
              House Calendars Committee on April 29, 2019 and never reached
              the floor; its successor, HB 1576, was signed June 7, 2021.
              <C n={4} /><C n={6} />
            </li>
            <li>
              On June 10, 2021 the Texas Department of Banking notified
              state-chartered banks that they may custody virtual currency.
              <C n={10} />
            </li>
            <li>
              Parker has authored eight digital-asset and hard-money bills
              in the Texas Senate across the 2023 and 2025 sessions; none
              has been enacted.<C n={16} /><C n={23} />
            </li>
            <li>
              Parker was a coauthor of SB 21, signed June 20, 2025, and the
              Senate sponsor of HB 1666 (2023) and HB 150 (2025), both
              signed into law.<C n={21} /><C n={18} /><C n={28} />
            </li>
            <li>
              Parker filed SB 2922, an oil-backed stablecoin bill, on March
              14, 2025; on April 16, 2026 the Texas Tribune reported him on
              the advisory board of Energy Substantiation, which sells one.
              <C n={26} /><C n={31} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the caucus to the code
            </h2>
            <span className="text-xs text-muted-2">2007 → 2026</span>
          </div>
          <ol className="mt-5 space-y-4">
            {parkerTimeline.map((e) => {
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
          <h2>Who is Tan Parker, and why does the definition belong to him?</h2>
          <p>
            Because he filed it twice. Parker is a Flower Mound businessman
            – University of Dallas, a master&apos;s from the London School of
            Economics, technology and private equity after a start in his
            family&apos;s restaurants – who represented House District 63
            from 2007 to 2023, chaired the House Republican Caucus from 2015
            to 2018, and was named a Best Legislator by Texas Monthly in
            2015 for running a productive chamber and working with
            Democrats to do it.<C n={1} /><C n={2} /><C n={3} /> In March
            2019 he filed HB 4517, a work group on blockchain matters, with
            Representative Capriglione among the joint authors; it passed
            committee 10–0 and was sent to Calendars on April 29, where it
            was never set for a vote.<C n={4} /><C n={5} /> He came back in
            2021 with the same bill and a second one, and both became
            law.<C n={6} /><C n={7} /> The colleague who joint-authored
            all three and later carried the reserve is on{" "}
            <Link href="/giovanni-capriglione-bitcoin">
              Giovanni Capriglione and Bitcoin
            </Link>
            ; this is the member who wrote the definition they both built
            on.
          </p>

          <h2>What did HB 4474 actually do?</h2>
          <p>
            It told Texas commercial law what a bitcoin is and who has it.
            HB 4474, filed March 12, 2021 and signed June 15, added a new
            Chapter 12 to the Business and Commerce Code defining
            &ldquo;virtual currency&rdquo; as &ldquo;a digital representation
            of value that is used as a medium of exchange, unit of account,
            or store of value; and is not legal tender.&rdquo;<C n={7} />
            <C n={8} /> The operative concept is <em>control</em>: a person
            has it when the system gives them the power to derive
            substantially all the benefits of the asset, the exclusive power
            to prevent others from doing so, and the exclusive power to
            transfer it – and those powers may be shared with another
            person, which is the clause that lets a bank hold your keys
            while you keep control in law.<C n={8} /> From control follow
            the two things commerce needs: a secured lender can perfect an
            interest by taking control, with no filing, and a purchaser who
            takes control for value without notice of a competing claim
            takes the asset free of it, the way cash and negotiable
            instruments have always worked.<C n={8} /> Five days before the
            signature, the Department of Banking issued Industry Notice
            2021-03: state-chartered banks may custody virtual
            currency.<C n={10} /> Texas was the third state to write the
            asset into its Uniform Commercial Code.<C n={13} /> What the law
            settled and what it left open is on{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law actually says about Bitcoin
            </Link>
            .
          </p>

          <ParkerDefinitionFigure />

          <h2>How did Parker argue for it?</h2>
          <p>
            As a national-security question first and an economic one
            second, in the register of a caucus chairman rather than a
            maximalist. &ldquo;We as an American people have to engage with
            these digital currencies,&rdquo; he told Texas Monthly in April
            2021. &ldquo;They are instrumentally important to the economic
            and, I would argue, national security interest of the United
            States.&rdquo;<C n={12} /> On passage: &ldquo;Our state is now
            poised to take the lead in cryptocurrency for the Nation by
            offering a comprehensive framework for digital currency that
            will bring forth new opportunities for Texas&apos; economy,
            workforce as well as our national security.&rdquo;<C n={9} />{" "}
            At the first Texas Blockchain Summit on October 8, 2021 – 700
            people, Cruz and Abbott on the bill – he told the room,
            &ldquo;You guys are pioneers on the front lines of an
            extraordinarily bright new future,&rdquo; and predicted the
            technology&apos;s impact would exceed the internet&apos;s.
            <C n={13} /> The council that organized the summit called him
            and <Link href="/angela-paxton-bitcoin">Senator Paxton</Link>, his
            Senate sponsor, the champions of its first two laws and the
            laws &ldquo;the opening salvo.&rdquo;<C n={11} /> The work group
            HB 1576 created – 16 members, chaired by SMU&apos;s Carla Reyes,
            with Parker among Speaker Phelan&apos;s appointees beside Lee
            Bratcher – delivered its 84-page report on November 15, 2022,
            and its subcommittee list is the agenda of the next two
            sessions.<C n={14} /> The organizer beside him on it is on{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher and Bitcoin</Link>.
          </p>

          <h2>What has Parker done in the Senate?</h2>
          <p>
            Filed more digital-asset bills than any other senator and
            passed none of his own. Elected to Senate District 12 in 2022
            and handed a two-year straw in the redistricting lottery, he
            filed four in 2023 – SB 770 on commingling, SB 925 on blockchain
            UCC filings, SB 1558 on gold and silver as legal tender, SJR 67
            on a constitutional right to a medium of exchange – and none
            left committee; the commingling ban passed anyway as
            Capriglione&apos;s HB 1666 with Parker as Senate
            sponsor.<C n={15} /><C n={16} /><C n={17} /><C n={18} /> He won
            a full term with 61.54% in November 2024, was elected caucus
            chair unanimously on January 7, 2025, and became Majority Leader
            a week later.<C n={19} /><C n={20} /><C n={2} /> In 2025 he
            coauthored SB 21 – &ldquo;Bitcoin is a recognized asset, and
            Texas is taking action to secure our future&rdquo; – and filed
            SB 1705 on virtual currency kiosks, SB 1941 and SB 2174 on
            digital-asset service provider reporting, SJR 55 on the medium
            of exchange again, and SB 2922 to license an oil-backed
            stablecoin.<C n={21} /><C n={22} /><C n={23} /> The kiosk bill
            passed the Senate on May 15 and died on the House calendar; the
            rest never got a hearing.<C n={24} /><C n={25} /><C n={27} />
            <C n={26} /> What passed carried his name as sponsor: HB 150,
            the Texas Cyber Command, signed June 2, and his own SB 1057,
            the capital-markets bill the Texas Stock Exchange thanked him
            for – &ldquo;Texas is putting Delaware and New York on
            notice.&rdquo;<C n={28} /><C n={30} /> The kiosk bill&apos;s
            death, and its cost, is on{" "}
            <Link href="/texas-bitcoin-bills-that-died">the bills that died</Link>
            ; the reserve he coauthored is on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            .
          </p>

          <ParkerLedgerFigure />

          <h2>The honest counterweight: the ledger, the kiosks, and the oil-backed coin</h2>
          <p>
            Three things, in ascending order of weight. The ledger first:
            eleven Bitcoin and hard-money bills under his name since 2019
            and two enacted, both in 2021, both in the House.<C n={4} />
            <C n={16} /><C n={23} /> The Senate record is eight filed and
            none passed, which is partly the way Texas works – digital-asset
            statutes originate in the House and need a Senate sponsor,
            which he has been – and partly a senator whose ideas run ahead
            of his chamber&apos;s appetite. Second, the kiosks: SB 1705
            would have registered and regulated the virtual currency kiosks
            through which Texans lose tens of millions of dollars a year to
            scams; it passed his chamber on May 15, 2025 and died on the
            House calendar twelve days later, and the cost of that failure
            kept accruing.<C n={24} /> Third, the coin. On March 14, 2025
            Parker filed SB 2922, a licensing regime for oil-backed
            stablecoins with custodial reserves of crude; it was referred to
            Business and Commerce and never heard.<C n={26} /> On April 16,
            2026 the Texas Tribune reported that Railroad Commissioner Wayne
            Christian was promoting Energy Substantiation&apos;s $WTIC, a
            token pegged to barrels of oil, and that Parker – a member of
            the Senate Natural Resources Committee – was listed on the
            company&apos;s advisory board. His Capitol office did not
            respond.<C n={31} /> Three months later a cybersecurity company
            named the sitting Majority Leader to its board, citing the Cyber
            Command he carried.<C n={32} />
          </p>
          <p>
            The fair reading keeps the weights where they fall. A bill
            that dies unheard is not a scandal, and a senator who files the
            same medium-of-exchange amendment in two sessions is doing what
            legislators do with ideas that are early. The kiosk bill is the
            real loss and it was the House&apos;s, not his. The advisory
            board is the item that needs an answer he has not given: a
            legislator who drafted the licensing regime for a product and
            then advised a company selling that product, while sitting on
            the committee that oversees the commodity behind it, has at
            minimum a disclosure to make. The definition he wrote in 2021
            is untouched by any of it. It is the sentence the reserve, the
            registry, and the commingling ban all assume, and it will
            outlast every bill on the ledger.
          </p>

          <h2>Where does the Parker record stand today?</h2>
          <p>
            As of September 2026: Majority Leader, chair of Transportation,
            on Natural Resources and State Affairs, not on the ballot until
            2028.<C n={1} /><C n={19} /> The 90th Legislature convenes
            January 12, 2027 with his dead bills waiting to be refiled – the
            medium-of-exchange amendment, the provider audits, the kiosks –
            and the reserve he coauthored in the hands of Comptroller{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines</Link>. The
            senator who wrote the reserve is on{" "}
            <Link href="/charles-schwertner-bitcoin">
              Charles Schwertner and Bitcoin
            </Link>
            ; the one who tried to cap the mines is on{" "}
            <Link href="/lois-kolkhorst-bitcoin">Lois Kolkhorst and Bitcoin</Link>.
            The statute-by-statute record they all sit inside is on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            . This page is the man who wrote the first line of it.
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
            Legislature Online for every bill history, the author reports,
            and the enrolled HB 4474 text; the Department of Banking for the
            custody notice; SMU for the work group&apos;s report; Texas
            Monthly, the Texas Tribune, and Community Impact for the quotes,
            the terms, and the votes; the senator&apos;s own office and
            campaign site for his statements; trade press for the rest.
            This is a research and reference article, not financial,
            investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {parkerSources.map((s) => (
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
