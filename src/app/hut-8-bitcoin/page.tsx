import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionsBlock } from "@/components/institutions-block";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";

const pageUrl = `${site.url}/hut-8-bitcoin`;

export const metadata: Metadata = {
  title: "Hut 8: The Half-Owned Mine and the Leased Campus",
  description:
    "Hut 8, headquartered in Miami, manages 280 MW at King Mountain through a joint venture it owns about half of, and has leased 704 MW of IT capacity at Beacon Point in Nueces County. The $19.6 billion figure is a base-term contract value, not cash collected. The halls are not delivered.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("Hut 8: The Half-Owned Mine and the Leased Campus"),
    type: "article",
    title: "Hut 8: The Half-Owned Mine and the Leased Campus",
    description:
      "King Mountain is a joint venture. Beacon Point is two leases and a construction schedule. The tenant is unnamed. NVIDIA designed the halls. It is not established as the tenant.",
    url: pageUrl,
  },
};

const sources = [
  {
    id: "s1",
    label:
      "Hut 8 and US Bitcoin — merger announcement (February 7, 2023, SEC Rule 425 filing): King Mountain, Texas; 220 MW of hosting owned by the King Mountain joint venture, in which US Bitcoin had a 50% membership interest; hosting powered by a mix including wind and nuclear; combined company to be U.S.-domiciled; datelined Toronto and Miami",
    url: "https://www.sec.gov/Archives/edgar/data/1731805/000110465923011696/tm235799d4_425.htm",
  },
  {
    id: "s2",
    label:
      "Hut 8 — Operations Update for January 2025 (February 4, 2025, Miami): 280 MW of capacity under management at King Mountain; the site is owned by a joint venture with a Fortune 200 renewable energy producer in which Hut 8 has an approximately 50% membership interest; self-mining operations include 100% of King Mountain, while some miner, hashrate, and bitcoin figures are reported net of the partner's 50%",
    url: "https://www.hut8.com/news-insights/press-releases/hut-8-operations-update-for-january-2025",
  },
  {
    id: "s3",
    label:
      "Hut 8 — commercializes first phase of Beacon Point (May 6, 2026, Miami): Nueces County; 15-year, $9.8 billion lease for 352 MW of IT capacity; unnamed high-investment-grade tenant; originally underwritten for American Bitcoin Corp. and repositioned to AI; interconnection agreement with AEP Texas for 1,000 MW; initial energization expected Q1 2027; initial data hall delivery expected Q3 2027; NVIDIA engaged as technology partner for the DSX reference architecture",
    url: "https://www.hut8.com/news-insights/press-releases/hut-8-commercializes-first-phase-of-1-gw-beacon-point-ai-data-center-campus-with-15-year-352-mw",
  },
  {
    id: "s4",
    label:
      "Hut 8 — closes $4.25 billion of 6.129% senior secured notes due 2042 for Beacon Point (June 9, 2026, Miami): issued by Beacon Point DC LLC; rated Baa2 by Moody's; proceeds to finance six data halls totaling 352 MW of critical IT capacity on about 521 acres in Nueces County, plus the substation; tenant rated AA− or higher as of that date; non-recourse to the parent",
    url: "https://www.hut8.com/news-insights/press-releases/hut-8-closes-usd4-25-billion-of-investment-grade-senior-secured-notes-for-beacon-point-data",
  },
  {
    id: "s5",
    label:
      "Hut 8 — fully commercializes Beacon Point (July 20, 2026, Miami): second 15-year, $9.8 billion lease for 352 MW of IT capacity to the same unnamed tenant, doubling contracted IT to 704 MW; campus base-term contract value $19.6 billion; renewal options would raise potential value to $50.2 billion if exercised; Phase 2 hall delivery expected Q2 2028; initial energization still scheduled for Q1 2027; site preparation underway",
    url: "https://www.hut8.com/news-insights/press-releases/hut-8-fully-commercializes-1-gw-beacon-point-ai-data-center-campus-with-second-352-mw-it-lease",
  },
  {
    id: "s6",
    label:
      "Cleanview — Hut 8 King Mountain, Upton County (280 MW, operational 2022). The company's own releases say King Mountain, Texas, and do not name the town in the documents read for this page.",
    url: "https://cleanview.co/data-centers/texas/2806/hut-8-king-mountain-crypto-mining",
  },
];

const faqs = [
  {
    q: "Does Hut 8 own the King Mountain mine?",
    a: "Not outright. Hut 8's January 2025 operations update says King Mountain is owned by a joint venture with a Fortune 200 renewable producer, and that Hut 8 holds about 50 percent. The company manages 280 megawatts there and reports self-mining operations at 100 percent of the site, while some miner and bitcoin figures are net of the partner's half.",
  },
  {
    q: "What is the $19.6 billion Beacon Point figure?",
    a: "Hut 8's July 20, 2026 release calls it the base-term contract value of two 15-year leases, each $9.8 billion, covering 704 megawatts of IT capacity, including a 3 percent annual rent escalator. It is not cash collected. The net-operating-income figures in the same release are expected, and the company says they are not reconciled to GAAP.",
  },
  {
    q: "Is Nvidia the tenant at Beacon Point?",
    a: "Not in Hut 8's releases. The tenant is unnamed. As of the June 9, 2026 notes closing, Hut 8 said the tenant was rated AA− or higher. NVIDIA is engaged as the technology partner for the DSX reference architecture the halls are designed to. Those are different roles. This page does not treat them as the same company.",
  },
  {
    q: "Is Beacon Point operating?",
    a: "No. As of July 20, 2026 Hut 8 said site preparation was underway, initial energization was still scheduled for the first quarter of 2027, the first data hall was expected in the third quarter of 2027, and the second phase's first hall in the second quarter of 2028. Fully commercialized, in the company's usage, means leased, not built.",
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

export default function Hut8Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(sources),
    headline: "Hut 8: The Half-Owned Mine and the Leased Campus",
    description:
      "Hut 8 manages King Mountain through a joint venture and has leased Beacon Point in Nueces County. The $19.6 billion figure is a contract value. The halls are not delivered.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-10-27",
    dateModified: "2026-10-27",
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
      { "@type": "ListItem", position: 2, name: "Hut 8", item: pageUrl },
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

      <article className="mx-auto max-w-3xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / Hut 8
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Company · Nasdaq: HUT
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Hut 8: The Half-Owned Mine and the Leased Campus
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The follow-on to Galaxy. One site is a joint venture that still
            mines. The other is a contract, not a hall.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published October 27, 2026 · Updated October 27, 2026
          </p>
        </header>

        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Hut 8 is headquartered in Miami. It manages 280 megawatts at
            King Mountain through a joint venture it owns about half of,
            and has leased 704 megawatts of IT capacity at Beacon Point in
            Nueces County. The $19.6 billion figure is a base-term contract
            value, not cash collected. The halls are not delivered. Initial
            energization is scheduled for the first quarter of 2027.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Hut 8 Corp. (Nasdaq, TSX: HUT) datelines its Texas releases
              from Miami. The February 7, 2023 merger announcement said the
              combined company would be U.S.-domiciled.<C n={1} /><C n={5} />
            </li>
            <li>
              On February 7, 2023 the merger papers put 220 megawatts of
              hosting at King Mountain, Texas, owned by a joint venture in
              which US Bitcoin held 50 percent, powered by a mix including
              wind and nuclear.<C n={1} />
            </li>
            <li>
              The January 2025 operations update lists 280 megawatts under
              management at King Mountain, owned by a joint venture with a
              Fortune 200 renewable producer. Hut 8&apos;s interest is about
              50 percent.<C n={2} />
            </li>
            <li>
              On May 6, 2026 Hut 8 announced a 15-year, $9.8 billion lease
              for 352 megawatts of IT capacity at Beacon Point in Nueces
              County. The tenant was not named. The site had been
              underwritten for American Bitcoin Corp. and was repositioned
              to AI.<C n={3} />
            </li>
            <li>
              On June 9, 2026 Beacon Point DC LLC closed $4.25 billion of
              6.129 percent senior secured notes due 2042, rated Baa2, to
              finance six halls and 352 megawatts on about 521 acres. As of
              that date the tenant was rated AA− or higher.<C n={4} />
            </li>
            <li>
              On July 20, 2026 a second lease of the same size doubled
              contracted IT capacity to 704 megawatts and lifted the
              campus base-term contract value to $19.6 billion. Phase 2
              hall delivery was expected in the second quarter of 2028.
              <C n={5} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-10">
          <p>
            <Link href="/galaxy-digital-bitcoin">Galaxy</Link> bought a
            distressed mine and rented the building. Hut 8 is the other
            shape on the{" "}
            <Link href="/bitcoin-mining-map-texas">mining map</Link>: a
            half-owned West Texas mine that is still hashing, and a Coastal
            Bend campus that was leased before it was built. The map had
            both. This is the page.
          </p>

          <h2>What does Hut 8 own at King Mountain?</h2>
          <p>
            About half of a joint venture, and the operating role. The
            February 7, 2023 merger announcement — Hut 8 Mining with U.S.
            Data Mining Group, doing business as US Bitcoin — put King
            Mountain, Texas, on the combined company&apos;s list. It
            described 220 megawatts of hosting infrastructure there, owned
            by the King Mountain joint venture, in which US Bitcoin had a
            50 percent membership interest alongside a leading energy
            partner. The hosting, the release said, was powered by a mix of
            sources including wind and nuclear.<C n={1} />
          </p>
          <p>
            Two years later the number was 280, and the ownership sentence
            had not become a wholly owned mine. Hut 8&apos;s operations
            update for January 2025, datelined Miami on February 4, lists
            280 megawatts of capacity under management at King Mountain.
            A note says the site is owned by a joint venture between Hut 8
            and a Fortune 200 renewable energy producer, in which Hut 8 has
            an approximately 50 percent membership interest.<C n={2} />
          </p>
          <p>
            The same update is careful about what &ldquo;100 percent&rdquo;
            means. Self-mining operations include 100 percent of operations
            at King Mountain. Deployed miners, hashrate, and bitcoin
            produced are also shown net of the partner&apos;s 50 percent.
            In January 2025 the net bitcoin figure was 51.<C n={2} /> A
            page that says Hut 8 owns a 280 megawatt mine is reading the
            operating line and skipping the ownership note.
          </p>
          <p>
            The company&apos;s releases read for this page say King
            Mountain, Texas. They do not name the town.{" "}
            <Link href="/bitcoin-mining-map-texas">The mining map</Link>{" "}
            places the site at McCamey in Upton County, citing a Cleanview
            listing that dates it operational in 2022.<C n={6} /> That is
            the map&apos;s placement. It is not a sentence in the merger
            papers.
          </p>

          <h2>What is the $19.6 billion?</h2>
          <p>
            A contract value, stated twice and then added. On May 6, 2026,
            from Miami, Hut 8 said it had commercialized the first phase of
            Beacon Point in Nueces County through a 15-year lease worth
            $9.8 billion for 352 megawatts of IT capacity. The tenant was a
            high-investment-grade company, not named. The lease includes a
            3 percent annual base-rent escalator. Three five-year renewal
            options would raise that one lease&apos;s potential value to
            about $25.1 billion if all of them were exercised.<C n={3} />
          </p>
          <p>
            On July 20, 2026 the same tenant signed a second lease on
            substantially the same terms: another 15 years, another $9.8
            billion, another 352 megawatts. Contracted IT capacity at the
            campus doubled to 704 megawatts. Hut 8 said the base-term
            contract value for the full 1,000 megawatts of utility capacity
            rose to $19.6 billion. If every renewal option on both leases
            were exercised, the company said, the potential campus-level
            value would be $50.2 billion.<C n={5} /> The second number is a
            conditional. It is not a result.
          </p>
          <p>
            The income figures sit in the same forward-looking block. Hut 8
            expects average annual net operating income of $1.31 billion
            for the full campus upon stabilization, and says expected NOI
            is not reconciled to GAAP because the company cannot quantify
            the deductions without a false precision.<C n={5} /> A sentence
            that treats $19.6 billion as money in hand is using the
            company&apos;s contract math as a cash count.
          </p>

          <h2>What has not been built?</h2>
          <p>
            The lease is not the hall. On July 20, 2026 Hut 8 said site
            preparation was underway and long-lead equipment had been
            procured. Initial energization remained on the company&apos;s
            schedule for the first quarter of 2027. The first phase&apos;s
            initial data hall had been expected in the third quarter of
            2027. The second phase&apos;s initial hall was expected in the
            second quarter of 2028.<C n={3} /><C n={5} /> &ldquo;Fully
            commercialized,&rdquo; in the July release, means the 1,000
            megawatts of utility capacity are contracted. It does not mean
            the campus is hashing, or cooling a chip.
          </p>
          <p>
            The financing is real, and it is financing of construction, not
            proof of delivery. On June 9, 2026 Beacon Point DC LLC, a
            wholly owned subsidiary, closed $4.25 billion of 6.129 percent
            senior secured notes due 2042, rated Baa2 by Moody&apos;s. The
            proceeds are intended to finance six data halls totaling 352
            megawatts of critical IT capacity on an approximately 521-acre
            property in Nueces County, and the substation on that property,
            plus reserves and fees. The notes are non-recourse to the
            parent. J.P. Morgan was lead bookrunner.<C n={4} /> Asher
            Genoot, the chief executive, called the structure a way to
            finance construction without recourse debt at the parent. That
            is a capital-markets fact. It is not an operating campus.
          </p>
          <p>
            The interconnection is a contract with AEP Texas for 1,000
            megawatts of utility capacity, with initial energization
            expected in the first quarter of 2027. Aaron Bowman, chief
            executive of the Corpus Christi Regional Economic Development
            Corporation, welcomed the project as a long-term investment in
            the Coastal Bend.<C n={3} /> A welcome is not a meter reading.
          </p>

          <h2>The honest counterweight: the tenant is unnamed, and the mine was the first plan</h2>
          <p>
            NVIDIA is not, on these documents, the tenant. Hut 8&apos;s May
            6 release says NVIDIA is engaged as technology partner, and
            that the first phase is engineered to NVIDIA&apos;s DSX
            reference architecture. The tenant is described as confidential
            and high-investment-grade.<C n={3} /> The June 9 notes release
            is more specific about credit and still does not give a name:
            as of that date the tenant was rated AA− or higher.<C n={4} />
            A design partner and a lessee are different companies until a
            document says they are the same one. This page does not say
            they are.
          </p>
          <p>
            Beacon Point was not born as an AI campus. The May 6 release
            says it was originally underwritten on a speed-to-power thesis
            to serve Hut 8&apos;s affiliated customer, American Bitcoin
            Corp., and was repositioned when power demand and customer
            requirements changed.<C n={3} /> Genoot&apos;s line is that
            operating across applications lets the company redirect an
            asset. The redirect is the story. A page that calls the campus
            purpose-built for AI and stops there is describing the second
            use and hiding the first.
          </p>
          <p>
            The headquarters never moved. Every release read for this page
            is datelined Miami. King Mountain is a Texas operating site
            Hut 8 does not wholly own. Beacon Point is a Texas contract
            Hut 8 has financed and not yet energized. Both belong on the
            map. Neither is a Texas company.
          </p>

          <InstitutionsBlock current="/hut-8-bitcoin" />

          <h2 id="faq">Frequently asked questions</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2 id="sources">Sources</h2>
          <p className="text-sm text-muted">
            Every datable claim above is sourced below. This is a research
            and reference article, not financial or legal advice.
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
