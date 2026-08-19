import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Doctor Bitcoin: The Mark Hopkins Case",
  description:
    "The sourced story of Mark Hopkins, the North Texas trader prosecuted under federal law Texas never required — and what his case taught P2P bitcoiners.",
  alternates: { canonical: `${site.url}/doctor-bitcoin` },
  openGraph: {
    type: "article",
    title: "Doctor Bitcoin: Mark Hopkins and the Federal Line Texas Never Drew",
    description:
      "Texas requires no license to sell your own bitcoin. Federal law reads it differently. The Hopkins case is where the two maps diverge — Voices of Texas Bitcoin, No. 1.",
    url: `${site.url}/doctor-bitcoin`,
  },
};

// Sources — every datable claim in the piece points here. Primary-first.
const sources = [
  { id: "s1", label: "U.S. Attorney's Office, N.D. Tex. — 'Doctor Bitcoin' Pleads Guilty to Illegal Cash-to-Crypto Scheme (June 2021)", url: "https://www.justice.gov/usao-ndtx/pr/doctor-bitcoin-pleads-guilty-illegal-cash-crypto-scheme" },
  { id: "s2", label: "Texas Department of Banking, Supervisory Memorandum 1037 (PDF)", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/New-Actions/sm1037.pdf" },
  { id: "s3", label: "FinCEN, Guidance FIN-2019-G001 — Application of FinCEN's Regulations to Certain Business Models Involving Convertible Virtual Currencies (May 9, 2019)", url: "https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf" },
  { id: "s4", label: "Hunton (Blockchain Legal Resource) — 'Doctor Bitcoin' Pleads Guilty to Illegal Crypto Conversion Scheme (July 2021)", url: "https://www.hunton.com/blockchain-legal-resource/doctor-bitcoin-pleads-guilty-to-illegal-crypto-conversion-scheme" },
  { id: "s5", label: "NBC 5 Dallas-Fort Worth — Richardson Man, 'Doctor Bitcoin,' Pleads Guilty to Illegal Cash-to-Crypto Scheme (June 29, 2021)", url: "https://www.nbcdfw.com/news/local/richardson-man-doctor-bitcoin-pleads-guilty-to-illegal-cash-to-crypto-scheme/2668888/" },
  { id: "s6", label: "Cointelegraph — Bitcoiner sentenced to federal prison warns users involved in OTC trading (September 2022)", url: "https://cointelegraph.com/news/bitcoiner-sentenced-to-federal-prison-warns-users-involved-in-otc-trading" },
  { id: "s7", label: "Bitcoin Magazine — Doctor Bitcoin, Jailed For Selling P2P, Warns Others They'll Be Next", url: "https://bitcoinmagazine.com/culture/doctor-bitcoin-jailed-for-selling" },
];

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Doctor Bitcoin?",
    a: "Doctor Bitcoin is the alias of Mark Alexander Hopkins, a Richardson, Texas bitcoiner and early Dallas-area Bitcoin educator who sold bitcoin peer-to-peer for cash. He pleaded guilty in June 2021 to operating an unlicensed money transmitting business, served federal time, and became a public voice warning P2P traders about federal registration law.",
  },
  {
    q: "Why was Doctor Bitcoin prosecuted?",
    a: "For a registration offense, not fraud. According to the Department of Justice, Hopkins converted cash to bitcoin for a fee without registering his business with FinCEN, and one customer's cash — between $550,000 and $1.5 million across 37 transactions — came from a Nigerian lottery scam. He pleaded guilty to one count of operating an unlicensed money transmitting business.",
  },
  {
    q: "Is it legal to sell Bitcoin peer-to-peer in Texas?",
    a: "Under Texas law, selling your own bitcoin requires no state money-transmission license — Supervisory Memorandum 1037 (2014) holds that Bitcoin is not 'money' under the Texas Money Services Act. Federal law is separate: FinCEN's 2019 guidance treats peer-to-peer exchangers operating as a business as money transmitters that must register with FinCEN. That gap is what the Hopkins case made concrete.",
  },
  {
    q: "What sentence did Doctor Bitcoin receive?",
    a: "The charge carried up to five years in federal prison. Cointelegraph reported in September 2022 that Hopkins was to serve between six and 15 months, and he reported to the federal correctional institution in Beaumont, Texas that month.",
  },
  {
    q: "What is 18 U.S.C. § 1960?",
    a: "A 1992 federal statute that makes operating an unlicensed or unregistered money transmitting business a crime. Under FinCEN's 2019 guidance, peer-to-peer virtual-currency exchangers operating as a business count as money transmitters — so trading without FinCEN registration can violate § 1960 even in a state, like Texas, that requires no license of its own.",
  },
];

function C({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#${sources[n - 1].id}`} aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

export default function DoctorBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Doctor Bitcoin: Mark Hopkins and the Federal Line Texas Never Drew",
    description:
      "The sourced profile of Mark Alexander Hopkins, the North Texas P2P trader federally prosecuted for unlicensed money transmission — and what his case taught Texas bitcoiners about the gap between state and federal law.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: `${site.url}/doctor-bitcoin`,
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    about: {
      "@type": "Person",
      name: "Mark Alexander Hopkins",
      alternateName: "Doctor Bitcoin",
      description:
        "North Texas bitcoiner and early Dallas-area Bitcoin educator, federally prosecuted in 2021 for operating an unlicensed money transmitting business.",
    },
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: "Voices of Texas Bitcoin",
    },
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
        name: "Doctor Bitcoin",
        item: `${site.url}/doctor-bitcoin`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / Voices of Texas Bitcoin / Doctor Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Voices of Texas Bitcoin · No. 1
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Doctor Bitcoin: Mark Hopkins and the Federal Line Texas Never Drew
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Texas told its bitcoiners they needed no license to sell. Federal
            law read the same trade differently. The first profile in our
            people-of-the-scene series is the man who found the seam — and now
            spends his time warning everyone else where it runs.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published July 22, 2026 · Updated July 22, 2026
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            &ldquo;Doctor Bitcoin&rdquo; is Mark Alexander Hopkins, a
            Richardson, Texas bitcoiner who pleaded guilty on June 29, 2021 to
            operating an unlicensed money transmitting business after converting
            cash to bitcoin peer-to-peer. Texas itself requires no license to
            sell bitcoin — but federal law required his business to register
            with FinCEN. Hopkins served federal time, and now warns other
            peer-to-peer traders about exactly that gap.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              On June 29, 2021, Mark Alexander Hopkins, 42, of Richardson,
              Texas — alias &ldquo;Doctor Bitcoin&rdquo; — pleaded guilty in
              the Northern District of Texas to one count of operating an
              unlicensed money transmitting business.<C n={1} /><C n={5} />
            </li>
            <li>
              According to the DOJ, Hopkins converted between $550,000 and $1.5
              million across 37 transactions over roughly a year for one
              customer whose cash came from a Nigerian lottery scam.<C n={1} />
              <C n={4} />
            </li>
            <li>
              The charge carried up to five years in federal prison;
              Cointelegraph reported in September 2022 that Hopkins was to
              serve between six and 15 months, reporting to FCI Beaumont in
              Texas.<C n={1} /><C n={6} />
            </li>
            <li>
              Texas Supervisory Memorandum 1037 (April 3, 2014) holds that
              Bitcoin is not &ldquo;money&rdquo; under the Texas Money Services
              Act, so selling your own bitcoin requires no state
              money-transmission license.<C n={2} />
            </li>
            <li>
              FinCEN guidance FIN-2019-G001 (May 9, 2019) applies federal
              money-services-business rules — registration, anti-money-laundering
              programs, recordkeeping — to virtual-currency money transmitters,
              including peer-to-peer exchangers operating as a business.
              <C n={3} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-10">
          <p>
            The history of Bitcoin in Texas is usually told in megawatts and
            memoranda. But the scene was built by people — organizers, miners,
            educators, evangelists — and some of them paid tuition for lessons
            the rest of the state got free. <strong>Voices of Texas
            Bitcoin</strong> profiles those people. We start with the hardest
            story first, because it carries the most transferable knowledge:
            the case that taught Texas P2P traders that a friendly state is
            only half the map.
          </p>

          <h2>Who is Doctor Bitcoin?</h2>
          <p>
            Doctor Bitcoin is the alias of{" "}
            <strong>Mark Alexander Hopkins</strong>, a Richardson, Texas
            bitcoiner who became one of the Dallas area&apos;s early Bitcoin
            educators and peer-to-peer sellers.<C n={5} /><C n={7} /> His
            origin story is the kind the early network ran on: Hopkins told
            Bitcoin Magazine he got his first coin in 2011, when a friend paid
            for a coffeehouse meal with half a bitcoin freshly mined on a
            laptop — worth, by his recollection, about thirteen or fourteen
            dollars.<C n={7} />
          </p>
          <p>
            From there he sold bitcoin peer-to-peer for years — cash deals and
            bank wires — and by his own account the point was as much
            evangelism as income. He told Bitcoin Magazine he sold
            &ldquo;mostly to meet people,&rdquo; rarely profiting except on
            larger deals, treating the trades as a way to bring newcomers into
            the network and clients into his marketing business.<C n={7} /> He
            also said he sought counsel from Texas lawmakers, who pointed him
            to the state&apos;s published position that selling bitcoin
            required no Texas license.<C n={7} /> On the state map he was
            reading, he was in the clear. The federal map — the one that
            ultimately mattered — is drawn by a different cartographer.
          </p>

          <h2>What was Mark Hopkins charged with?</h2>
          <p>
            Hopkins was charged with a registration offense, not fraud. On June
            29, 2021, he pleaded guilty in the Northern District of Texas to
            one count of operating an unlicensed money transmitting business —
            a violation of 18 U.S.C. § 1960, in case number 3:21-cr-00144.
            <C n={1} /><C n={4} /><C n={5} /> According to the Department of
            Justice, Hopkins ran a business converting U.S. dollars to
            cryptocurrency, primarily bitcoin, for a fee — without registering
            with FinCEN as a money services business and without
            anti-money-laundering or know-your-customer procedures.<C n={1} />
            <C n={4} />
          </p>
          <p>
            The case turned on one customer. Beginning in September 2019, a
            customer identified in court papers as &ldquo;M.H.&rdquo; brought
            Hopkins cash that, per the DOJ, stemmed from a lottery scam run
            with a co-conspirator in Nigeria; over roughly a year Hopkins
            converted between $550,000 and $1.5 million for her across 37
            transactions.<C n={1} /><C n={4} /> Per the plea papers, Hopkins
            told M.H. &ldquo;I don&apos;t want to get into details of whatever
            business [customers] are involved in,&rdquo; and instructed her to
            keep deposits under $9,500 to avoid bank reporting.<C n={4} />
            Acting U.S. Attorney Prerak Shah put the government&apos;s theory
            plainly: &ldquo;This defendant ignored federal law and allowed
            fraudsters to use Bitcoin to operate under the radar of law
            enforcement.&rdquo;<C n={5} /> Hopkins, for his part, told Bitcoin
            Magazine that federal agents had raided his home on October 23,
            and that he took the plea because &ldquo;my family comes
            first.&rdquo;<C n={7} />
          </p>

          <h2>Was selling Bitcoin peer-to-peer illegal in Texas?</h2>
          <p>
            Not under Texas law — and that is the whole story. Supervisory
            Memorandum 1037, issued by the Texas Department of Banking on April
            3, 2014, holds that Bitcoin is not &ldquo;money&rdquo; under the
            Texas Money Services Act, so selling your own bitcoin does not by
            itself require a state money-transmission license.<C n={2} /> That
            clarity is real, it predates almost every other state&apos;s
            position, and it is a genuine reason Texas became the friendliest
            jurisdiction in the country for Bitcoin.
          </p>
          <p>
            Federal law runs on a separate track. 18 U.S.C. § 1960 — a statute
            from 1992, decades older than Bitcoin — makes it a federal crime to
            operate an unlicensed or unregistered money transmitting business.
            <C n={6} /> And FinCEN&apos;s guidance FIN-2019-G001, issued May 9,
            2019, applies the federal money-services-business framework to
            virtual currency explicitly — including{" "}
            <strong>peer-to-peer exchangers</strong>, natural persons trading
            as a business, who must register with FinCEN and run
            anti-money-laundering programs like any other money transmitter.
            <C n={3} /> The two maps simply do not overlap: Texas asks nothing
            of a P2P seller that federal law does not, and federal law asks
            everything Texas does not. Hopkins&apos;s case is the place where a
            Texas bitcoiner stood on the state map and was prosecuted off the
            federal one.
          </p>

          <h2>What sentence did Doctor Bitcoin receive?</h2>
          <p>
            The charge carried a maximum of five years in federal prison.
            <C n={1} /> Cointelegraph reported in September 2022 that Hopkins
            was to serve between six and 15 months, and he reported to the
            federal correctional institution in Beaumont, Texas that month.
            <C n={6} /> His son kept his social accounts running while he was
            inside, and he came out doing the same thing he went in doing:
            educating — just with a sharper syllabus.<C n={7} />
          </p>

          <h2>The record, read straight</h2>
          <p>
            An honest profile holds both readings at once. The government&apos;s
            account is not flattering: per the DOJ, Hopkins declined to look
            into his customers&apos; businesses, kept converting after the
            volume grew large, and coached a customer on staying under bank
            reporting thresholds.<C n={1} /><C n={4} /> Hopkins&apos;s account
            is not a denial of the plea but a protest of the frame: he has said
            he was &ldquo;fully registered as a Bitcoin seller with
            FinCEN&rdquo; and that he was &ldquo;originally suspected of being
            a kingpin in this particular scam&rdquo; — a suspicion the eventual
            single registration count did not reflect.<C n={6} /> The plea
            resolved the legal question. The cultural argument — whether a
            registration statute from 1992 should reach a hobbyist-scale P2P
            seller — is the one he took public. We present the record and let
            it carry its own weight; that is the deal this series makes with
            every subject.
          </p>

          <h2>What did the Hopkins case change?</h2>
          <p>
            It gave Texas P2P traders their clearest cautionary tale — narrated
            by the defendant himself. &ldquo;I&apos;m just a regular bitcoiner
            caught in the crosshairs,&rdquo; Hopkins told Bitcoin Magazine, and
            he has spent his post-release energy warning that, as currently
            interpreted, § 1960 means &ldquo;any time anyone with a crypto
            trades p2p (i.e., not with an exchange), they&apos;re legally
            liable under this statute.&rdquo;<C n={6} /><C n={7} /> He calls
            the statute an &ldquo;existential threat&rdquo; to peer-to-peer
            trading and urges bitcoiners to push their legislators to change
            it.<C n={7} />
          </p>
          <p>
            The practical lesson is transferable and worth stating flatly:
            <strong> a state&apos;s clarity is not the whole map</strong>.
            Supervisory Memorandum 1037 defines what Texas asks of you — it has
            never defined what Washington does. Anyone regularly exchanging
            cash for bitcoin as a business is a money services business in
            FinCEN&apos;s eyes and must register federally, whatever their
            state says.<C n={3} /> That is not a reason to fear the frontier;
            it is the frontier&apos;s actual terrain. The Texas scene absorbed
            the lesson, kept building — and the sharpest advocate for fixing
            the federal seam is the man who fell into it.
          </p>

          <h2>Hear him tell it</h2>
          <p>
            This profile is built from the public record — but Hopkins has
            told the story himself, at length, on the record. We&apos;ve
            mapped every substantial interview he has given about the case —
            the 51-minute Digital Cash Network sit-down, the Free Talk Live
            appearance, and the federal-prison conversation with Aria DiMezzo
            — blended into one story in{" "}
            <Link href="/doctor-bitcoin-interviews">
              The Doctor Bitcoin Tapes
            </Link>
            .
          </p>

          <h2>About this series: Voices of Texas Bitcoin</h2>
          <p>
            Voices of Texas Bitcoin profiles the people who built the Texas
            scene — the organizers, builders, educators, and pioneers behind
            the headlines. Next up:{" "}
            <Link href="/events">the meetup organizers we&apos;ll profile
            next</Link>, the volunteers running Bitcoin nights from El Paso to
            Houston. For the full arc these people move through, start with{" "}
            <Link href="/history-of-bitcoin-in-texas">the history of Bitcoin
            in Texas</Link> — from the 2014 Supervisory Memo to the 2025
            Strategic Bitcoin Reserve — and see where the industrial side of
            the story lives on{" "}
            <Link href="/bitcoin-mining-map-texas">the Texas Bitcoin mining
            map</Link>.
          </p>

          <h2 id="faq">Frequently asked questions</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2 id="sources">Sources</h2>
          <p className="text-sm text-muted">
            Every datable claim above is sourced below. Characterizations of
            the case follow the Department of Justice&apos;s public statements;
            Hopkins&apos;s own account is attributed to his public interviews.
            This is a research and reference article, not financial or legal
            advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {sources.map((s, i) => (
              <li key={s.id} id={s.id} className="scroll-mt-24">
                <span className="text-muted-2">[{i + 1}]</span>{" "}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-soft underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </article>
    </>
  );
}
