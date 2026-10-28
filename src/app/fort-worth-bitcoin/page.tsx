import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";

const pageUrl = `${site.url}/fort-worth-bitcoin`;

export const metadata: Metadata = {
  title: "Fort Worth: The First City Government to Mine Bitcoin",
  description:
    "On April 26, 2022 Fort Worth turned on three donated Antminer S9s in City Hall. From June 2022 to June 2024 the replacement machine made $5,626.69 and spent $1,700.80. No later public accounting was located as of October 26, 2026.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("Fort Worth: The First City Government to Mine Bitcoin"),
    type: "article",
    title: "Fort Worth: The First City Government to Mine Bitcoin",
    description:
      "Three donated machines, one replacement, a four-figure profit, and a 2026 coda that is a gap. Sourced to the city and the Fort Worth Report.",
    url: pageUrl,
  },
};

const sources = [
  {
    id: "s1",
    label:
      "CNBC — Fort Worth, TX the first city in the U.S. to mine bitcoin (April 26, 2022): three Bitmain Antminer S9s in City Hall, donated by the Texas Blockchain Council, pooled through Luxor; Mayor Mattie Parker",
    url: "https://www.cnbc.com/2022/04/26/fort-worth-tx-the-first-city-in-the-us-to-mine-bitcoin.html",
  },
  {
    id: "s2",
    label:
      "KERA — Fort Worth embraces cryptocurrency, becomes first city in U.S. to mine Bitcoin (April 28, 2022): council voted unanimously to accept the machines; three S9s worth $2,100 altogether; six-month pilot",
    url: "https://www.kera.org/2022/04/28/fort-worth-embraces-cryptocurrency-becomes-first-city-in-u-s-to-mine-bitcoin/",
  },
  {
    id: "s3",
    label:
      "City of Fort Worth — City's Bitcoin program expected to draw innovation and commerce (November 2, 2022): six-month pilot dated to August 26, 2022 netted $1,019.31 after electricity; nearly 753 million media impressions; the Council is allowing the city to keep the machine",
    url: "https://www.fortworthtexas.gov/news/2022/11/bitcoin-review",
  },
  {
    id: "s4",
    label:
      "Fort Worth Report — Fort Worth began cryptocurrency mining over two years ago. What were the results? (July 28, 2024): June 2022–June 2024 public-records totals; Capua on the rate, the four-year life, and 200 Texas Street; Bratcher on Temple",
    url: "https://fortworthreport.org/2024/07/28/fort-worth-began-cryptocurrency-mining-over-two-years-ago-what-were-the-results/",
  },
  {
    id: "s5",
    label:
      "Fort Worth Report — Fort Worth was the first city to adopt bitcoin mining to attract attention. Was it worth it? (Seth Bodine, August 2, 2023): Parker unavailable for an interview; her statement names Techstars, Texas A&M-Fort Worth, and Alliance, and calls the program one example; Quinn PR crafted the media campaign; Bratcher on the leap of faith; Capua says the city does not endorse the industry",
    url: "https://fortworthreport.org/2023/08/02/fort-worth-was-the-first-city-to-adopt-bitcoin-mining-to-attract-attention-was-it-worth-it/",
  },
];

const faqs = [
  {
    q: "Was Fort Worth the first U.S. city to mine bitcoin?",
    a: "Fort Worth was the first U.S. city government to mine bitcoin. On April 26, 2022 Mayor Mattie Parker turned on three donated machines in City Hall. That is a municipal pilot, not a claim that Fort Worth was the first place in Texas where anyone mined.",
  },
  {
    q: "How much did Fort Worth's bitcoin machine make?",
    a: "The city's November 2, 2022 account says a six-month pilot dated to August 26, 2022 netted $1,019.31 after electricity. A public-records response reported by the Fort Worth Report put June 2022 through June 2024 at $5,626.69 in revenue and $1,700.80 in expenses, a profit of $3,925.89.",
  },
  {
    q: "Who donated the machines?",
    a: "The Texas Blockchain Council donated three Bitmain Antminer S9s. KERA put their value at $2,100 altogether. CNBC named Luxor as the mining pool. In November 2022 the city said the Council was allowing Fort Worth to keep the machine then in the data center.",
  },
  {
    q: "Is the City Hall machine still running?",
    a: "No public accounting after July 28, 2024 was located as of October 26, 2026. On that date Carlo Capua told the Fort Worth Report the machine had about a four-year life, had been running more than two years, and would stay at 200 Texas Street. That is the last sourced status, not a 2026 confirmation.",
  },
  {
    q: "What did Mayor Parker say the pilot was for?",
    a: "A rebrand, not a treasury. On April 26, 2022 she told CNBC that a lot of people did not know Fort Worth, and that tech innovation including cryptocurrency was how the city would change that conversation. On August 2, 2023 she was unavailable for a Fort Worth Report interview. Her statement did not mention the machine or the earnings. It called the program one example, beside Techstars, Texas A&M-Fort Worth, and Alliance.",
  },
  {
    q: "Did any other Texas city copy Fort Worth?",
    a: "Not as a city government running a machine, as of the July 28, 2024 Report. Lee Bratcher told that paper the Council donated a machine to Temple and Temple never installed it, and that Fort Worth was still the only city that had done it. Denton's story is a municipal utility hosting a company, not a City Hall rig.",
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

export default function FortWorthPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(sources),
    headline: "Fort Worth: The First City Government to Mine Bitcoin",
    description:
      "Three donated S9s in City Hall on April 26, 2022, one replacement machine, $3,925.89 of profit from June 2022 to June 2024, and no later public accounting located as of October 26, 2026.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-10-26",
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
      { "@type": "ListItem", position: 2, name: "Fort Worth", item: pageUrl },
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
          / Fort Worth
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Place · Tarrant County
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Fort Worth: The First City Government to Mine Bitcoin
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Three donated machines in City Hall, one replacement, a
            four-figure profit, and a coda that stops where the documents
            stop.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published October 26, 2026 · Updated October 27, 2026
          </p>
        </header>

        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Fort Worth was the first U.S. city government to mine bitcoin.
            On April 26, 2022 Mayor Mattie Parker turned on three Bitmain
            Antminer S9s, donated by the Texas Blockchain Council and pooled
            through Luxor, in City Hall. The city later ran a single
            replacement machine. From June 2022 to June 2024 that machine
            made $5,626.69 and spent $1,700.80. No public accounting after
            July 28, 2024 was located as of October 26, 2026.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              On April 26, 2022 Fort Worth turned on three Bitmain Antminer
              S9s in the information-technology wing of City Hall, the first
              U.S. city government to mine bitcoin.<C n={1} /><C n={2} />
            </li>
            <li>
              The Texas Blockchain Council donated the three machines. KERA
              put their combined value at $2,100. CNBC named Luxor
              Technologies as the pool.<C n={1} /><C n={2} />
            </li>
            <li>
              The Fort Worth City Council voted unanimously to accept the
              gifted machines.<C n={2} />
            </li>
            <li>
              The city&apos;s November 2, 2022 account dates a six-month
              pilot to August 26, 2022 and says it netted $1,019.31 after
              electricity.<C n={3} />
            </li>
            <li>
              A public-records response, reported July 28, 2024, put June
              2022 through June 2024 at $5,626.69 in revenue, $1,700.80 in
              expenses, and a profit of $3,925.89.<C n={4} />
            </li>
            <li>
              On July 28, 2024 Carlo Capua said the machine would stay at
              200 Texas Street and that the city had no plans to buy more.
              No later public accounting was located as of October 26, 2026.
              <C n={4} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-10">
          <p>
            This is a place page, not a second{" "}
            <Link href="/core-scientific-bitcoin">Denton</Link>. Denton is a
            municipal utility that signed a company. Fort Worth is a city
            government that plugged in a donated rig. The people who put it
            there are{" "}
            <Link href="/lee-bratcher-bitcoin">Lee Bratcher</Link> and the{" "}
            <Link href="/texas-blockchain-council">
              Texas Blockchain Council
            </Link>
            .
          </p>

          <h2>What did Fort Worth turn on in April 2022?</h2>
          <p>
            Three small machines, in City Hall, on purpose. CNBC reported on
            April 26, 2022 that Fort Worth was the first city government in
            the United States to mine bitcoin, and that Mayor Mattie Parker
            had overseen a small mine in City Hall.<C n={1} /> The three
            Bitmain Antminer S9s were to run around the clock in the
            climate-controlled information-technology wing, on a private
            network.<C n={1} />
          </p>
          <p>
            The donor was the Texas Blockchain Council. CNBC said each rig
            was valued at roughly $600. KERA, two days later, said the three
            machines were worth $2,100 altogether, and that the City Council
            had voted unanimously to accept them and a resolution encouraging
            blockchain and cryptocurrency.<C n={1} /><C n={2} /> KERA also
            recorded Parker turning the machines on during a Twitter stream
            that day: &ldquo;I&apos;ve been joking that we&apos;re Cowtown
            and cryptocurrency, right? It&apos;s all happening in Fort
            Worth.&rdquo;<C n={2} />
          </p>
          <p>
            The pool was Luxor. CNBC named Luxor Technologies as the partner
            that let the city&apos;s hashrate combine with other miners.
            <C n={1} /> Alex Brammer, then Luxor&apos;s vice president of
            business development, told CNBC that Parker was &ldquo;setting
            an example and effectively de-risking both bitcoin mining and
            bitcoin treasury strategies for every other mayor in the
            country.&rdquo;<C n={1} />
          </p>
          <p>
            Parker told CNBC the point was not the profit. &ldquo;For Fort
            Worth, a lot of people don&apos;t know who we are. We want to
            change that conversation.&rdquo;<C n={1} /> The city&apos;s own
            estimate, reported by CNBC, was that each machine would use
            about as much energy as a household vacuum cleaner, and that
            mined bitcoin would offset the electricity.<C n={1} /> KERA
            quoted a TCU professor, Kelly Slaughter, saying that comparison
            does not stay still: as the puzzles get harder, the machines
            work harder.<C n={2} />
          </p>

          <h2>What did the mayor say it was for?</h2>
          <p>
            A name, not a treasury. Parker told CNBC that day that a lot of
            people did not know Fort Worth, and that the city wanted to
            change that conversation. Tech innovation, including
            cryptocurrency, was how she said it would be done.<C n={1} /> She
            called the project brand new for any city, and said there had
            been a lot of policy to get through.<C n={1} /> She called Fort
            Worth the fastest growing city in the country and said
            cryptocurrency was a huge part of its future economy.<C n={1} />
            Governments, she said, usually move at a snail&apos;s pace. Fort
            Worth wanted to elbow its way into the room.<C n={1} />
          </p>
          <p>
            CNBC&apos;s account of where the idea came from is her friends,
            not a study. Parker, whom CNBC described as the city&apos;s first
            millennial mayor and about a year in office, got the idea after
            talking with people in venture capital. They told her that 80
            percent of venture capital was spent on tech, and that
            cryptocurrency was at the center of that.<C n={1} /> The 80
            percent is what she was told. This page has not checked it.
          </p>
          <p>
            A year later the sentence had moved. On August 2, 2023 the Fort
            Worth Report could not interview her. The statement it printed
            does not mention the machine, the rate, or the $1,019.31. It
            says local leaders have to embrace out-of-the-box ideas, names
            the Techstars Physical Health Fort Worth Accelerator, Texas
            A&amp;M-Fort Worth&apos;s research building, and Alliance&apos;s
            mobility zone, and calls the mining program &ldquo;just one
            example&rdquo; of expanding what is possible in the city.
            <C n={5} /> Lee Bratcher, in the same piece, called it &ldquo;the
            leap of faith that Mayor Parker took.&rdquo;<C n={5} /> Carlo
            Capua said the city does not endorse the crypto industry, or any
            industry.<C n={5} /> The Report also says Quinn PR crafted the
            campaign behind the impressions.<C n={5} /> The mayor&apos;s case
            was attention. The ledger on this page is the counterweight.
            No later statement from her about the rig was located.
          </p>

          <h2>What did the six-month pilot actually earn?</h2>
          <p>
            Four figures, and a media number the city liked better. On
            November 2, 2022 the City of Fort Worth published its own
            account. Carlo Capua, chief of strategy and innovation, told the
            City Council that a six-month pilot launched August 26, 2022
            had netted $1,019.31 after electricity.<C n={3} /> The same
            release says the project had produced nearly 753 million media
            impressions.<C n={3} />
          </p>
          <p>
            Capua&apos;s line, in the city&apos;s words, was that mining
            &ldquo;was never about the profit.&rdquo;<C n={3} /> He said
            Fort Worth would continue the program, and that the Texas
            Blockchain Council was allowing the city to keep the machine,
            then housed in the city&apos;s data center.<C n={3} /> Mayor
            Mattie Parker is in the city&apos;s photo with what the caption
            calls the startup machines.<C n={3} />
          </p>
          <p>
            The dates do not collapse into one clock, and this page does not
            force them to. The machines were turned on April 26, 2022.
            <C n={1} /><C n={2} /> The city&apos;s November account dates the
            six-month pilot to August 26, 2022.<C n={3} /> The Fort Worth
            Report later wrote that two months into the program the city
            exchanged the original machines for a donated newer one.
            <C n={4} /> Those are three sourced sentences. They are not one
            timeline invented to make them agree.
          </p>

          <h2>What did two years of the replacement machine earn?</h2>
          <p>
            A profit of $3,925.89, on numbers the city released only after
            a records request. The Fort Worth Report&apos;s July 28, 2024
            account says that from June 2022 to June 2024 the machine made
            $5,626.69 in revenue and ran expenses of $1,700.80.<C n={4} />
            The Report noted that those cost figures arrived after
            publication and that the story was updated.<C n={4} />
          </p>
          <p>
            Capua would not give the rate. He told the Report, in an earlier
            interview the paper quoted again, &ldquo;Our rate with our
            energy provider is confidential, so I&apos;m afraid I can&apos;t
            share the total electricity cost as it would be easy for someone
            to reverse engineer our rate.&rdquo;<C n={4} /> The $1,700.80 is
            the expense total the city did disclose. It is not a published
            kilowatt-hour price.
          </p>
          <p>
            He also said the city had no plans to buy more miners, that the
            machine had a shelf life of about four years and had been
            running more than two, and that Fort Worth would keep it
            &ldquo;until it becomes completely obsolete.&rdquo;<C n={4} />
            If it stopped competing, he said, the city would then evaluate
            next steps.<C n={4} />
          </p>

          <h2>Is Fort Worth still the only city?</h2>
          <p>
            As of July 28, 2024, Bratcher said yes. He told the Fort Worth
            Report that the Texas Blockchain Council had donated a machine
            to Temple and that Temple never installed it, and that Fort
            Worth was still the only city to participate.<C n={4} /> He did
            not think cities would mine for profit. He did think municipal
            power systems might monetize underused generation.<C n={4} />
          </p>
          <p>
            The contrast he named is Denton: a city utility, not a mayor
            plugging in an S9. That record lives on{" "}
            <Link href="/core-scientific-bitcoin">
              Core Scientific and Texas
            </Link>
            . It is not a second City Hall.
          </p>

          <h2>The honest counterweight: the rate, and the gap after 2024</h2>
          <p>
            The program&apos;s own numbers are the counterweight. A city
            that counted nearly 753 million impressions also cleared
            $1,019.31 on the six-month account and $3,925.89 over the two
            years in the records response.<C n={3} /><C n={4} /> Capua said
            in November 2022 that it was never about the profit. The ledger
            agrees with him.<C n={3} />
          </p>
          <p>
            The 2026 status is not a sourced fact. On July 28, 2024 Capua
            said the machine would stay at the current City Hall, 200 Texas
            Street, even as other city operations were planned to move to
            100 Fort Worth Trail.<C n={4} /> A four-year shelf life, stated
            when the machine had already run more than two years, pointed at
            roughly 2026. No city release, council minute, or later Report
            story accounting for the rig was located as of October 26, 2026.
            This page does not invent a shutdown, a move, or a still-running
            machine.
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
