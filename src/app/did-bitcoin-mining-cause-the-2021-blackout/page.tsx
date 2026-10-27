import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";

const pageUrl = `${site.url}/did-bitcoin-mining-cause-the-2021-blackout`;

export const metadata: Metadata = {
  title: "Did Bitcoin Mining Cause the 2021 Blackout?",
  description:
    "No. Winter Storm Uri was February 2021. FERC and NERC attributed the outages to frozen generation and fuel, and ERCOT shed 20,000 MW. The industrial Texas mining fleet mostly came online after. A $175,000-an-hour Bitdeer figure is from an April 9, 2023 New York Times article and is not assigned to Uri here.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("Did Bitcoin Mining Cause the 2021 Blackout?"),
    type: "article",
    title: "Did Bitcoin Mining Cause the 2021 Blackout?",
    description:
      "The calendar, not a defense. Which Texas mines existed in February 2021, which did not, and which storm a famous dollar figure does not get pinned to.",
    url: pageUrl,
  },
};

const sources = [
  {
    id: "s1",
    label:
      "FERC — Final Report on February 2021 Freeze Underscores Winterization Recommendations (news release): Winter Storm Uri; ERCOT ordered 20,000 MW of rolling blackouts, the largest manually controlled load shedding in U.S. history; more than 4.5 million people in Texas lost power; freezing issues 44.2 percent and fuel issues 31.4 percent of the unplanned outages, derates, and failures to start",
    url: "https://www.ferc.gov/news-events/news/final-report-february-2021-freeze-underscores-winterization-recommendations",
  },
  {
    id: "s2",
    label:
      "Bitmain (PR Newswire) — launch of a mining farm in Rockdale, Texas, to construct a 50 MW facility (October 21, 2019)",
    url: "https://www.prnewswire.com/news-releases/bitmain-fulfills-commitment-to-rockdale-texas-with-launch-of-cryptocurrency-mining-farm-to-construct-50mw-facility-300941759.html",
  },
  {
    id: "s3",
    label:
      "The Block — Peter Thiel-backed Layer1 begins mining at its West Texas facility (February 2020)",
    url: "https://www.theblock.co/post/56337/peter-thiel-texas-bitcoin-mine-goes-live",
  },
  {
    id: "s4",
    label:
      "Riot Blockchain (GlobeNewswire) — Riot Completes Acquisition of Whinstone US (May 26, 2021)",
    url: "https://www.globenewswire.com/en/news-release/2021/05/26/2236906/0/en/Riot-Blockchain-Completes-Acquisition-of-Whinstone-US-Creating-Leading-North-American-Bitcoin-Mining-Company.html",
  },
  {
    id: "s5",
    label:
      "Argo Blockchain — sale of the Helios facility in Dickens County to Galaxy (December 28, 2022)",
    url: "https://argoblockchain.com/news-room/2022-december-helios-sale-to-galaxy",
  },
  {
    id: "s6",
    label:
      "New York Times — The Real-World Costs of the Digital Race for Bitcoin (April 9, 2023). The article did not render for this page. Indexed descriptions attribute to it a figure of about $175,000 an hour paid regarding Bitdeer, and more than $18 million over four days. This page does not assign that figure to a storm.",
    url: "https://www.nytimes.com/2023/04/09/business/bitcoin-mining-electricity-pollution.html",
  },
  {
    id: "s7",
    label:
      "The Week — indexed text attaches the Bitdeer dollar figure to Winter Storm Uri. The article body did not render for this page, so that attachment is not treated as established.",
    url: "https://theweek.com/in-depth/1022698/how-voracious-bitcoin-mining-is-messing-with-texans",
  },
  {
    id: "s8",
    label:
      "City of Denton — Legistar file 21-1364 (August 24, 2021): ordinance approving a power purchase agreement between the City and Core Scientific Inc.",
    url: "https://denton-tx.legistar.com/LegislationDetail.aspx?ID=5092359&GUID=258CEBCC-D1B9-4996-934F-1ADA035D8595&Options=ID%7CText%7C&Search=power+purchase+agreement",
  },
  {
    id: "s9",
    label:
      "BuzzFeed News, Sarah Emerson — How Denton, Texas, embraced a crypto miner it didn't want (March 7, 2022): the August 2021 vote; Denton Municipal Electric's about $140 million of Winter Storm Uri debt",
    url: "https://www.buzzfeednews.com/article/sarahemerson/denton-texas-crypto-miner-core-scientific",
  },
  {
    id: "s10",
    label:
      "Cipher Mining (GlobeNewswire) — Cipher Mining commences bitcoin mining at Odessa data center (November 29, 2022)",
    url: "https://www.globenewswire.com/news-release/2022/11/29/2564500/0/en/Cipher-Mining-Commences-Bitcoin-Mining-at-Odessa-Data-Center.html",
  },
  {
    id: "s11",
    label:
      "Cleanview — Hut 8 King Mountain data center, Upton County (280 MW, operational 2022)",
    url: "https://cleanview.co/data-centers/texas/2806/hut-8-king-mountain-crypto-mining",
  },
];

const faqs = [
  {
    q: "Did Bitcoin mining cause the 2021 Texas blackout?",
    a: "No. Winter Storm Uri was February 2021. The FERC-NERC account says ERCOT ordered 20,000 megawatts of rolling blackouts, and attributes the generating-unit failures to freezing and fuel, mostly natural gas. The industrial mining fleet this site maps mostly came online after that month.",
  },
  {
    q: "Were any Bitcoin mines running in Texas during Uri?",
    a: "Yes, some. Bitmain launched a Rockdale mining farm on October 21, 2019. Layer1 began mining in West Texas in February 2020. Riot did not close its purchase of Whinstone until May 26, 2021. This page does not have a sourced megawatt total for mining load on the days of the blackout.",
  },
  {
    q: "What is the $175,000 an hour figure?",
    a: "A New York Times article dated April 9, 2023 is the piece secondary accounts quote for a payment of about $175,000 an hour related to Bitdeer, and more than $18 million over four days. The Times article did not render here. This page does not assign those dollars to Winter Storm Uri or to any other named storm.",
  },
  {
    q: "Which storms did Texas miners actually curtail in?",
    a: "The dated curtailment record on this site starts after Uri. ERCOT's own later accounts cover Winter Storm Elliott in December 2022, and later storms including Heather and Fern. Those pages are the place for the dollar figures that have been re-read. Uri is not one of them.",
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

export default function UriPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(sources),
    headline: "Did Bitcoin Mining Cause the 2021 Blackout?",
    description:
      "No. Winter Storm Uri was February 2021. FERC and NERC attributed the outages to frozen plants and fuel. The industrial Texas mining fleet mostly came online afterward.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-10-26",
    dateModified: "2026-10-26",
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
        name: "The 2021 blackout",
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

      <article className="mx-auto max-w-3xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / The 2021 blackout
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The calendar · not a defense
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Did Bitcoin Mining Cause the 2021 Blackout?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The sentence people search is not on the ERCOT page. The answer
            is the order of the dates.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published October 26, 2026 · Updated October 26, 2026
          </p>
        </header>

        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            No. Winter Storm Uri was February 2021. The FERC-NERC account
            says ERCOT ordered 20,000 megawatts of rolling blackouts, and
            that freezing and fuel — not a new industrial mining fleet —
            took the plants down. Riot did not close its Whinstone purchase
            until May 26, 2021. Galaxy did not buy Helios until December
            2022. A widely repeated Bitdeer dollar figure belongs to an
            April 9, 2023 New York Times article, which this page does not
            assign to Uri.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              In February 2021, Winter Storm Uri caused generating-plant
              outages across Texas. FERC&apos;s news release on the joint
              final report says ERCOT ordered 20,000 megawatts of rolling
              blackouts, the largest manually controlled load shedding in
              U.S. history, and that more than 4.5 million people in Texas
              lost power.<C n={1} />
            </li>
            <li>
              The same release says freezing issues caused 44.2 percent of
              the unplanned outages, derates, and failures to start, and
              fuel issues 31.4 percent. Natural-gas-fired units were 58
              percent of the units that failed. The release does not discuss
              Bitcoin mining.<C n={1} />
            </li>
            <li>
              Bitmain launched a Rockdale mining farm on October 21, 2019,
              to construct a 50 megawatt facility.<C n={2} />
            </li>
            <li>
              Layer1 began mining at a West Texas facility in February 2020.
              <C n={3} />
            </li>
            <li>
              Riot completed its acquisition of Whinstone US on May 26,
              2021 — after Uri.<C n={4} />
            </li>
            <li>
              Argo agreed on December 28, 2022 to sell the Helios mine in
              Dickens County. That campus did not exist as Galaxy&apos;s, and
              the sale was twenty-two months after the blackout.<C n={5} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-10">
          <p>
            <Link href="/ercot-bitcoin">The ERCOT page</Link> owns Elliott,
            Heather, and Fern. It does not own this sentence. The job here
            is to stop a false one. It is not to argue that mining is harmless,
            and it is not to pretend no miner was using power in February
            2021.
          </p>

          <h2>What failed in February 2021?</h2>
          <p>
            Plants froze, and fuel did not arrive. The Federal Energy
            Regulatory Commission, with the North American Electric
            Reliability Corporation, published the account this page uses:
            a February 2021 cold-weather event, also called Winter Storm
            Uri, caused outages, derates, or failures to start at generating
            plants across Texas and the South Central United States.
            <C n={1} /> ERCOT ordered a total of 20,000 megawatts of rolling
            blackouts to avoid a grid collapse. The release calls that the
            largest manually controlled load shedding in U.S. history. More
            than 4.5 million people in Texas lost power, some for as long as
            four days.<C n={1} />
          </p>
          <p>
            The cause shares in that release are generation, not a new
            class of customer. Freezing issues were 44.2 percent of the
            unplanned outages, derates, and failures to start. Fuel issues
            were 31.4 percent. Together, 75.6 percent. Natural-gas-fired
            units were 58 percent of the units that failed; wind 27 percent;
            coal 6 percent; solar 2 percent.<C n={1} /> Eighty-one percent
            of freeze-related outages happened at temperatures above the
            units&apos; stated design temperature.<C n={1} /> The news
            release does not mention Bitcoin mining. This page has not
            re-read all 300 pages of the report, and does not claim the
            report&apos;s body is silent. The public summary of the finding
            is plants and fuel.
          </p>

          <h2>Which Texas mines were already hashing?</h2>
          <p>
            A few, and they were not the fleet the map now tracks. Bitmain
            announced on October 21, 2019 that it had launched a
            cryptocurrency mining farm in Rockdale to construct a 50 megawatt
            facility.<C n={2} /> That site is the one{" "}
            <Link href="/bitdeer-bitcoin">Bitdeer</Link> later operated, on
            the{" "}
            <Link href="/rockdale-texas-bitcoin">Rockdale</Link> land. It
            was online before Uri. Layer1, the Peter Thiel-backed project,
            began mining at a West Texas facility in February 2020, a year
            before the storm.<C n={3} />
          </p>
          <p>
            Those two facts are enough to reject a cleaner story than the
            record supports. Mining load was not zero in February 2021. This
            page does not have a sourced megawatt reading for either site on
            the days ERCOT was shedding load. Absence of a meter reading is
            not a claim that the machines were off, and it is not a claim
            that they were large enough to explain 20,000 megawatts of
            load shed.
          </p>

          <h2>Which sites came online after the blackout?</h2>
          <p>
            The industrial build the{" "}
            <Link href="/bitcoin-mining-map-texas">mining map</Link> is
            known for is a post-Uri build. Riot completed its acquisition of
            Whinstone US on May 26, 2021.<C n={4} /> The close is three
            months after the storm. Whether Whinstone&apos;s own machines
            were hashing in February, before Riot owned them, is a separate
            fact. This page has not located a February 2021 operating record
            for that site, and does not invent one.
          </p>
          <p>
            The rest of the familiar names are later still.{" "}
            <Link href="/core-scientific-bitcoin">Core Scientific&apos;s</Link>{" "}
            Denton contract was approved August 24, 2021, after Uri.
            <C n={8} /> The city utility that signed it was already carrying
            about $140 million of debt from buying emergency power during
            the storm.<C n={9} />{" "}
            <Link href="/cipher-mining-bitcoin">Cipher</Link> began hashing
            at Odessa on November 29, 2022.<C n={10} /> Galaxy agreed to buy
            Helios in Dickens County on December 28, 2022.<C n={5} /> Hut
            8&apos;s King Mountain, in Upton County, is dated operational
            2022.<C n={11} /> The later ERCOT programs that treat mines as a
            class of large flexible load, and the dates those programs were
            created, are on the{" "}
            <Link href="/ercot-bitcoin">ERCOT page</Link>. They come after
            this storm. They are not a feature of it.
          </p>

          <h2>Which storm does the $175,000 figure belong to?</h2>
          <p>
            Not one this page will name. A New York Times article dated
            April 9, 2023, &ldquo;The Real-World Costs of the Digital Race
            for Bitcoin,&rdquo; is the piece secondary accounts quote for a
            payment of about $175,000 an hour related to Bitdeer, and more
            than $18 million over four days.<C n={6} /> The Times article
            did not render when this page was written. An April 2023
            publication date does not by itself prove the payment was or
            was not during Uri. Retrospective articles exist. So do later
            storms.
          </p>
          <p>
            What this page will not do is accept the paste. Indexed text of
            a Week article attaches that Bitdeer figure to Winter Storm Uri.
            <C n={7} /> The Week body did not render either. A search-index
            sentence is not an award notice, and it is not a storm
            assignment. Elliott, in December 2022, is the first winter storm
            for which this site has re-read operator accounts of Texas mines
            powering down. Those dollars live on the Bitdeer page and the
            ERCOT page. They do not get moved onto February 2021 to fill a
            hole.
          </p>

          <h2>The honest counterweight: some load is not the cause</h2>
          <p>
            A mine that was hashing in February 2021 was a load on a grid
            that failed. That sentence is allowed. Bitmain&apos;s Rockdale
            site and Layer1 were already in the state.<C n={2} /><C n={3} />
            Using power is not the same claim as causing a 20,000 megawatt
            load-shed whose official account is frozen equipment and fuel.
            <C n={1} /> Collapsing those two claims is how the false
            sentence gets made.
          </p>
          <p>
            The later record cuts the other way, and this page does not
            hide it. After Uri, Texas recruited miners as controllable load,
            and miners were later paid, or credited, to come off the grid in
            other storms. That is a real controversy. It is Elliott, the
            August 2023 heat, Heather, Fern — storms with dates and
            documents on{" "}
            <Link href="/ercot-bitcoin">the ERCOT page</Link>. It is not
            Uri. A page that used those later payments to acquit mining of
            every grid complaint would be a defense. This one is a calendar.
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
            Every datable claim above is sourced below. This is a research
            and reference article, not an argument for or against mining.
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
