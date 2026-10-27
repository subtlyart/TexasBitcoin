import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionsBlock } from "@/components/institutions-block";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";

const pageUrl = `${site.url}/galaxy-digital-bitcoin`;

export const metadata: Metadata = {
  title: "Galaxy and Helios: The Distressed Mine That Became the Lease",
  description:
    "Galaxy bought Argo's Helios facility in Dickens County for $65 million on December 28, 2022, hosted Argo's machines, and on July 6, 2026 delivered 133 MW of critical IT load to CoreWeave. The billion-dollar line is a projection.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("Galaxy and Helios: The Distressed Mine That Became the Lease"),
    type: "article",
    title: "Galaxy and Helios: The Distressed Mine That Became the Lease",
    description:
      "The company page the mining map was pointing at: a distressed Texas mine, a hosting deal, and a 2026 delivery to CoreWeave. Sourced to Argo's release and Galaxy's.",
    url: pageUrl,
  },
};

const sources = [
  {
    id: "s1",
    label:
      "Argo Blockchain — Announcement of Transformational Strategic Transactions with Galaxy Digital Holdings, Ltd. (December 28, 2022): Helios in Dickens County sold for $65 million; $35 million asset-backed loan; Argo keeps 23,619 Bitmain S19J Pros under a two-year hosting agreement; about 2.36 EH/s; expected to close the same day",
    url: "https://argoblockchain.com/news-room/2022-december-helios-sale-to-galaxy",
  },
  {
    id: "s2",
    label:
      "Galaxy Digital — Galaxy Completes Phase I of Its Helios Data Center Campus, Delivering 133 Megawatts of Critical IT Load to CoreWeave (July 6, 2026)",
    url: "https://www.galaxy.com/newsroom/galaxy-completes-phase-i-of-its-helios-data-center-campus",
  },
  {
    id: "s3",
    label:
      "PR Newswire — the same Galaxy release, datelined New York, July 6, 2026",
    url: "https://www.prnewswire.com/news-releases/galaxy-completes-phase-i-of-its-helios-data-center-campus-delivering-133-megawatts-of-critical-it-load-to-coreweave-302818664.html",
  },
  {
    id: "s4",
    label:
      "The Block — Galaxy delivers 133 MW of critical IT load to CoreWeave as Helios bitcoin mine turns AI hub (July 2026): recaps the 2022 purchase as a 180 MW facility bought for $65 million, and describes mining as wound down before the retrofit",
    url: "https://www.theblock.co/post/407396/galaxy-delivers-133-mw-of-critical-it-load-to-coreweave-as-helios-bitcoin-mine-turns-ai-hub",
  },
];

const faqs = [
  {
    q: "What is Galaxy's Helios campus?",
    a: "A data-center campus in Dickens County, Texas that began as Argo Blockchain's Bitcoin mine. Galaxy bought the facility and the real property for $65 million under agreements announced December 28, 2022. On July 6, 2026 Galaxy said it had delivered the first phase of power there to CoreWeave.",
  },
  {
    q: "Did Galaxy buy the mining machines?",
    a: "No. Argo's December 28, 2022 release says Argo kept ownership of the machines, including 23,619 Bitmain S19J Pros then operating at Helios, and that Galaxy would host them for two years. Galaxy bought the facility, the real property, and related assets.",
  },
  {
    q: "How much power did Helios deliver to CoreWeave?",
    a: "Galaxy's July 6, 2026 release says Phase I delivered about 200 megawatts of gross power, which it counts as 133 megawatts of critical IT load, under a 15-year lease, with rent starting in the second quarter of 2026. That is delivered load, not the campus's approved total.",
  },
  {
    q: "Is Helios making more than $1 billion a year?",
    a: "That figure is Galaxy's projection, not a reported result. The July 6, 2026 release says leases across Phases I through III are expected to generate more than $1 billion in average annual revenue. The same release labels statements about future delivery and revenue as forward-looking.",
  },
  {
    q: "Is Galaxy a Texas company?",
    a: "Helios is in Texas. Galaxy Digital Inc. says it is headquartered in New York City. The July 6, 2026 release was datelined New York. The Texas fact is the campus, not the headquarters.",
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

export default function GalaxyHeliosPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(sources),
    headline: "Galaxy and Helios: The Distressed Mine That Became the Lease",
    description:
      "Argo sold Helios in Dickens County to Galaxy for $65 million on December 28, 2022. On July 6, 2026 Galaxy delivered 133 MW of critical IT load to CoreWeave. The billion-dollar line is a projection.",
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
      { "@type": "ListItem", position: 2, name: "Galaxy and Helios", item: pageUrl },
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
          / Galaxy and Helios
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Company · Dickens County
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Galaxy and Helios: The Distressed Mine That Became the Lease
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The mining map already treated Helios as load-bearing. This is
            the company page that sentence was missing.
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
            On December 28, 2022 Argo Blockchain agreed to sell its Helios
            facility in Dickens County, Texas to Galaxy Digital for $65
            million. On July 6, 2026 Galaxy said it had delivered about 200
            megawatts of gross power — 133 megawatts of critical IT load —
            to CoreWeave under a 15-year lease, with rent starting in the
            second quarter of 2026. The figure of more than $1 billion a
            year is Galaxy&apos;s projection, not a collected result.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Argo&apos;s December 28, 2022 release says a subsidiary would
              sell the Helios facility and real property in Dickens County,
              Texas to Galaxy for $65 million, expected to close that day.
              <C n={1} />
            </li>
            <li>
              The same release says Argo would keep its mining machines,
              including 23,619 Bitmain S19J Pros then operating at Helios,
              under a two-year hosting agreement — about 2.36 exahash.
              <C n={1} />
            </li>
            <li>
              Galaxy also agreed to a $35 million asset-backed loan. Argo
              said the transactions would reduce its debt by $41 million.
              <C n={1} />
            </li>
            <li>
              On July 6, 2026 Galaxy said Phase I at Helios had delivered
              about 200 megawatts of gross power, 133 megawatts of critical
              IT load, to CoreWeave, on schedule, with rent commencing in
              the second quarter of 2026.<C n={2} />
            </li>
            <li>
              The same release says CoreWeave has committed to 526 megawatts
              of critical IT load across Phases I through III — the full 800
              megawatts of gross power then approved and contracted — under
              15-year leases with two five-year extensions.<C n={2} />
            </li>
            <li>
              Galaxy says those leases are expected to generate more than
              $1 billion in average annual revenue. That sentence is in the
              release&apos;s forward-looking block.<C n={2} /><C n={3} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-10">
          <p>
            <Link href="/bitcoin-mining-map-texas">The mining map</Link> and{" "}
            <Link href="/texas-bitcoin-miners-ai-pivot">
              the miners-to-AI longform
            </Link>{" "}
            already carried Helios as a line. Riot, MARA, Core Scientific,
            Cipher, Bitdeer, and Lancium had pages. Galaxy did not. This is
            that page. Hut 8 is the follow-on, not a substitute: King
            Mountain is still a mine, and Beacon Point is an AI campus with
            a miner as landlord.
          </p>

          <h2>What did Galaxy buy in December 2022?</h2>
          <p>
            Galaxy bought the facility, not the fleet. Argo Blockchain&apos;s
            December 28, 2022 release says an Argo subsidiary would sell the
            Helios facility and real property in Dickens County, Texas, and
            related assets, to Galaxy Digital Holdings, Ltd. for $65 million,
            subject to customary post-closing adjustments, with closing
            expected that same day.<C n={1} />
          </p>
          <p>
            Argo was selling to avoid a worse outcome. The release says the
            cash, plus part of a new $35 million asset-backed loan from
            Galaxy, would repay about $84 million owed to NYDIG and $1
            million owed to North Mill.<C n={1} /> Peter Wall, Argo&apos;s
            chief executive, called it transformational because it
            &ldquo;reduces our debt by $41 million&rdquo; and was meant to
            keep the company operating through the bear market.<C n={1} />
          </p>
          <p>
            The machines stayed Argo&apos;s. The release says Argo would
            maintain ownership of all mining machines, and that 23,619
            Bitmain S19J Pros then operating at Helios would remain there
            under a two-year hosting agreement, representing about 2.36
            exahash.<C n={1} /> Galaxy intended to sign a fixed-price power
            contract and pass that rate through to Argo, which would pay a
            hosting fee and collaborate on a curtailment strategy for ERCOT
            demand-response programs.<C n={1} /> A two-year host deal dated
            December 2022 runs out in December 2024. This page does not have
            a later document saying when those machines left.
          </p>

          <h2>What did Helios deliver on July 6, 2026?</h2>
          <p>
            Galaxy said the first phase was delivered, and that the campus
            had started earning rent. The July 6, 2026 release — on
            Galaxy&apos;s site and on PR Newswire, datelined New York —
            says the company completed delivery of the first phase of power
            at Helios in West Texas, about 200 megawatts of gross power,
            which it counts as 133 megawatts of critical IT load, to
            CoreWeave under a 15-year lease.<C n={2} /><C n={3} /> Phase I
            was on schedule. Rent under the Phase I lease began in the
            second quarter of 2026.<C n={2} />
          </p>
          <p>
            Mike Novogratz, founder and chief executive, said Helios was
            &ldquo;now generating revenue across its entire 133 MW of IT
            load.&rdquo;<C n={2} /> That is the sentence to quote. It is
            about Phase I. It is not a claim that the campus is full.
          </p>
          <p>
            The Block&apos;s account of the same delivery calls Helios, as
            purchased, a 180 megawatt facility bought for $65 million in
            2022, and says mining was wound down before the retrofit.
            <C n={4} /> The 180 megawatt figure is The Block&apos;s recap of
            the mine Galaxy bought. It is not the 200 megawatts of gross
            power Galaxy reported delivering in 2026, and it is not the 800
            megawatts of gross power the company said were approved and
            contracted.<C n={2} /><C n={4} />
          </p>

          <h2>What is still a schedule, not a hall?</h2>
          <p>
            Phase II is underway, and it has not been delivered. Galaxy says
            greenfield work is going on a 260 megawatt critical-IT Phase II,
            with data-hall deliveries expected to begin in the first half of
            2027.<C n={2} /> &ldquo;Expected&rdquo; is the company&apos;s
            word. This page does not move that date into the past.
          </p>
          <p>
            Across Phases I through III, Galaxy says CoreWeave has committed
            to 526 megawatts of critical IT load, which the company calls
            the full 800 megawatts of gross power then approved and
            contracted at Helios, on 15-year leases with two five-year
            extension options.<C n={2} /> The release also says the
            campus spans more than 2,200 acres, that approved power capacity
            has expanded to 1.63 gigawatts, and that it could scale to as
            much as 3.6 gigawatts.<C n={2} /> Those last two numbers are
            approved capacity and a potential, not energized halls.
          </p>
          <p>
            The revenue line belongs in the same bucket. Galaxy says the
            Phase I–III leases are expected to generate more than $1 billion
            in average annual revenue.<C n={2} /> The release then warns
            that forward-looking statements may not happen.<C n={3} /> A
            projection is not a collected rent roll.
          </p>

          <h2>The honest counterweight: the megawatts stopped flexing</h2>
          <p>
            Helios was built as a mine that could curtail. Argo&apos;s
            hosting agreement said the parties would design a curtailment
            strategy for ERCOT demand-response programs.<C n={1} /> A
            15-year critical-IT lease to CoreWeave is a different product.
            Converted megawatts do not hand power back the way a mine does.
            That is the same trade{" "}
            <Link href="/core-scientific-bitcoin">Core Scientific&apos;s Denton campus</Link>{" "}
            already made, and the reason{" "}
            <Link href="/ercot-bitcoin">the ERCOT page</Link> treats
            flexibility as a diminishing asset.
          </p>
          <p>
            Galaxy is not a Texas company that happens to have a campus. The
            July 6 release calls Galaxy Digital Inc. a company headquartered
            in New York City.<C n={2} /> The Texas fact is Dickens County.
            This page does not have a sourced jobs number, a water number,
            or an abatement vote for Helios. Those absences are the record,
            not a gap to fill from another county&apos;s campus.
          </p>
          <p>
            The two-year hosting deal is the other open end. Argo said its
            machines would stay. The Block later described the mine as wound
            down.<C n={1} /><C n={4} /> Between those two sentences, this
            page has not read a document that dates the last Bitcoin hashed
            at Helios.
          </p>

          <InstitutionsBlock current="/galaxy-digital-bitcoin" />

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
