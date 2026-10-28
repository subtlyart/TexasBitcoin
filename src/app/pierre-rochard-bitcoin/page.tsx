import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";

const pageUrl = `${site.url}/pierre-rochard-bitcoin`;

export const metadata: Metadata = {
  title: "Pierre Rochard: The Institute, the Mine, and the Job That Left",
  description:
    "Pierre Rochard co-founded the Satoshi Nakamoto Institute in Austin, wrote Speculative Attack, and on March 28, 2023 testified against SB 1751 as Riot's vice president of research. By September 24, 2025 an SEC filing identified him as CEO of The Bitcoin Bond Company and a Strive director. No Texas office or filing for that company was located.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("Pierre Rochard: The Institute, the Mine, and the Job That Left"),
    type: "article",
    title: "Pierre Rochard: The Institute, the Mine, and the Job That Left",
    description:
      "The Texas thread is the Institute, the Rockdale operator, and the Senate testimony. The Bitcoin Bond Company is his next job. This page does not domicile it in Austin.",
    url: pageUrl,
  },
};

const sources = [
  {
    id: "s1",
    label:
      "CoinDesk — Pierre Rochard, the Bitcoin Maximalist OG (April 7, 2025): discovered Bitcoin in 2012 while studying at the University of Texas at Austin; co-founded the Satoshi Nakamoto Institute; roles at BitPay, Kraken, and Riot Platforms; CEO of The Bitcoin Bond Company. The article says parts were generated with AI tools and reviewed by editors.",
    url: "https://www.coindesk.com/consensus-toronto-2025-coverage/2025/04/07/pierre-rochard-the-bitcoin-maximalist-og-on-mining-markets-and-modern-finance",
  },
  {
    id: "s2",
    label:
      "Satoshi Nakamoto Institute — Pierre Rochard author page: essays from Working and Saving are Revolutionary Acts (December 24, 2012) through Speculative Attack (July 4, 2014)",
    url: "https://nakamotoinstitute.org/authors/pierre-rochard/",
  },
  {
    id: "s3",
    label:
      "Texas Legislature Online — Senate Business and Commerce witness list, March 28, 2023: Pierre Rochard, Riot Platforms, against SB 1751",
    url: "https://capitol.texas.gov/tlodocs/88R/witlistmtg/html/C5102023032808301.HTM",
  },
  {
    id: "s4",
    label:
      "Bitcoin Magazine — Texas Senate committee hears testimony on a Bitcoin mining bill (March 29, 2023): Rochard, then Riot's vice president of research, testified that the company's presence had beneficial impacts on rural communities, employment, and energy production",
    url: "https://bitcoinmagazine.com/legal/texas-senate-committee-hears-testimony-on-bitcoin-mining-bill",
  },
  {
    id: "s5",
    label:
      "Strive, Inc. — Form 425 transcript of Pierre Rochard's September 24, 2025 appearance (filed with the SEC): identified in the filing header as a board member of Strive and, in the introduction, as CEO of The Bitcoin Bond Company; he said he would chair the audit committee. No Texas address for the Bond Company appears in the portion read for this page.",
    url: "https://www.sec.gov/Archives/edgar/data/1920406/000095010325012145/dp234856_425-pierrerochard.htm",
  },
];

const faqs = [
  {
    q: "What is Pierre Rochard's Texas record?",
    a: "Three things. He discovered Bitcoin in 2012 while studying at the University of Texas at Austin and co-founded the Satoshi Nakamoto Institute there. He was Riot Platforms' vice president of research when he testified against Senate Bill 1751 on March 28, 2023. The Institute, the Rockdale operator, and that hearing are the Texas thread.",
  },
  {
    q: "What is Speculative Attack?",
    a: "An essay Rochard published on July 4, 2014, archived on the Satoshi Nakamoto Institute's author page. The Institute page quotes it as Bitcoin overtaking weak currencies through speculative attacks and currency crises, not through the careful evaluation of tech journalists. It is an Austin document. It is not a statute.",
  },
  {
    q: "Did he testify for the Texas Bitcoin reserve?",
    a: "The Riot page on this site records a February 2025 appearance in which he argued for a state reserve. This page does not re-quote that hearing. The testimony re-read here is the March 28, 2023 appearance against Senate Bill 1751, which the witness list and Bitcoin Magazine both place him at, as Riot's vice president of research.",
  },
  {
    q: "Is The Bitcoin Bond Company a Texas company?",
    a: "Not on the documents read for this page. A September 24, 2025 SEC filing identifies Rochard as its chief executive and as a Strive director. No Texas office, filing, or statute for the Bond Company was located. The company site did not render. This page does not domicile the job in Austin because the earlier career was there.",
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

export default function RochardPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(sources),
    headline: "Pierre Rochard: The Institute, the Mine, and the Job That Left",
    description:
      "The Texas record of Pierre Rochard is the Satoshi Nakamoto Institute, Riot's Rockdale testimony, and the absence of a Texas fact for The Bitcoin Bond Company.",
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
      { "@type": "ListItem", position: 2, name: "Pierre Rochard", item: pageUrl },
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
          / Pierre Rochard
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            People · the missing stitch
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Pierre Rochard: The Institute, the Mine, and the Job That Left
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The theorists on this site have a Texas address or they do not.
            His does, until the job after Riot.
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
            Pierre Rochard discovered Bitcoin in 2012 at the University of
            Texas at Austin, co-founded the Satoshi Nakamoto Institute, and
            on March 28, 2023 testified against Senate Bill 1751 as
            Riot&apos;s vice president of research. A September 24, 2025 SEC
            filing identifies him as chief executive of The Bitcoin Bond
            Company and a Strive director. No Texas office or filing for
            that company was located.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              CoinDesk&apos;s April 7, 2025 profile says Rochard discovered
              Bitcoin in 2012 while studying at the University of Texas at
              Austin, and that he co-founded the Satoshi Nakamoto Institute.
              <C n={1} />
            </li>
            <li>
              The Institute&apos;s author page archives his essay
              &ldquo;Speculative Attack,&rdquo; dated July 4, 2014.
              <C n={2} />
            </li>
            <li>
              The Senate Business and Commerce witness list for March 28,
              2023 records Pierre Rochard, Riot Platforms, against SB 1751.
              <C n={3} />
            </li>
            <li>
              Bitcoin Magazine&apos;s account of that hearing, published
              March 29, 2023, identifies him as Riot&apos;s vice president
              of research and says he testified that the company&apos;s
              presence benefited rural communities, employment, and energy
              production.<C n={4} />
            </li>
            <li>
              A Strive Form 425 filed with the SEC transcribes a September
              24, 2025 appearance. The filing header calls him a Strive
              board member. The introduction calls him chief executive of
              The Bitcoin Bond Company.<C n={5} />
            </li>
            <li>
              No Texas address, filing, or statute for The Bitcoin Bond
              Company was located in the documents read for this page. The
              company&apos;s own site did not render.<C n={5} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-10">
          <p>
            The people cluster on this site ran out of authors of bills.
            Rochard is the other kind of record: a person who wrote the
            argument, then sat in the hearing for the company that owned{" "}
            <Link href="/rockdale-texas-bitcoin">Rockdale</Link>, then took
            a job this page cannot place in Texas. The{" "}
            <Link href="/satoshi-nakamoto-institute">
              Satoshi Nakamoto Institute
            </Link>{" "}
            page is the institution. This one is the man, and the limit of
            what &ldquo;Texas&rdquo; still means in his title.
          </p>

          <h2>What did Austin actually produce?</h2>
          <p>
            A student, then an archive. CoinDesk&apos;s April 7, 2025
            profile says Rochard discovered Bitcoin in 2012 while studying
            at the University of Texas at Austin, at the intersection of
            Austrian economics and open-source software, and that he
            co-founded the Satoshi Nakamoto Institute to house foundational
            writings.<C n={1} /> The Institute&apos;s own page on this site
            dates that founding to November 2013, with Michael Goldstein and
            Daniel Krawisz. This page does not re-try the founding. It
            links the institution that already sourced it.
          </p>
          <p>
            The essay the hearing never quoted, and the reserve later
            rhymed, is &ldquo;Speculative Attack,&rdquo; dated July 4, 2014
            on the Institute&apos;s author page.<C n={2} /> The{" "}
            <Link href="/satoshi-nakamoto-institute">Institute page</Link>{" "}
            quotes the argument as Bitcoin overtaking weak currencies
            &ldquo;through speculative attacks and currency crises, not
            through the careful evaluation of tech journalists.&rdquo; A
            state reserve is a different instrument. The rhyme is the
            Institute&apos;s to draw. The date is the author page&apos;s.
          </p>
          <p>
            CoinDesk also lists BitPay and Kraken before Riot. Those are
            not Texas facts. They are the years between the essay and the
            witness table.<C n={1} /> The Institute page&apos;s timeline
            places the Riot job in 2022 and cites that CoinDesk piece plus
            a Presidio Bitcoin note. CoinDesk&apos;s April 2025 profile,
            re-read for this page, does not give the year. This page will
            not add a month the witness list does not give. By March 28,
            2023 he was in the room as Riot&apos;s man.<C n={3} />
          </p>

          <h2>What did he tell the Senate?</h2>
          <p>
            He was against the brake. The witness list for Senate Business
            and Commerce on March 28, 2023 records Pierre Rochard, Riot
            Platforms, against Senate Bill 1751.<C n={3} /> That is the
            document. Bitcoin Magazine&apos;s account the next day says the
            bill would have prohibited certain flexible-load arrangements
            in which miners are paid to turn off, and that Rochard,
            identified as vice president of research, testified that
            Riot&apos;s presence benefited rural communities, employment,
            and energy production.<C n={4} />
          </p>
          <p>
            The employment sentence the{" "}
            <Link href="/riot-platforms-bitcoin">Riot page</Link> carries
            — that miners were Rockdale&apos;s largest employer and the
            largest taxpayer to the school district — is that page&apos;s
            quotation, sourced there to Bitcoin Magazine. This page did not
            re-read that sentence in the Magazine body, and does not repeat
            it as if it had. The fact re-read here is the witness line and
            the Magazine&apos;s paraphrase of the argument: rural jobs,
            rural taxes, and the grid, offered against a bill that would
            have cut the payments for turning off.
          </p>
          <p>
            He came back for the reserve. The Riot page records a February
            2025 appearance in which he told the Senate a state bitcoin
            reserve was the preparation for a downturn. This page links
            that record and does not re-quote it. The{" "}
            <Link href="/texas-strategic-bitcoin-reserve">reserve</Link>{" "}
            is the Comptroller&apos;s statute, not Rochard&apos;s company.
            His role in the hearing is advocacy. It is not custody.
          </p>

          <h2>Is The Bitcoin Bond Company a Texas fact?</h2>
          <p>
            No document read for this page makes it one. CoinDesk&apos;s
            April 7, 2025 profile calls him chief executive of The Bitcoin
            Bond Company and describes the project as bankruptcy-remote,
            bitcoin-only credit structures, with a stated aim of acquiring
            $1 trillion of bitcoin over 21 years, market conditions
            permitting.<C n={1} /> That article says parts of it were
            generated with AI tools and reviewed by editors. The job title
            is the sentence this page needs. The trillion-dollar aim is
            CoinDesk&apos;s account of his goal, in a piece that discloses
            machine assistance. It is not a Texas filing.
          </p>
          <p>
            The later document is a securities filing, and it still has no
            Texas address. Strive, Inc. filed a Form 425 containing a
            transcript of Rochard&apos;s September 24, 2025 appearance on
            the Treasury Orange podcast. The header identifies him as a
            board member of Strive. The host&apos;s introduction calls him
            chief executive of The Bitcoin Bond Company. In the transcript
            he says he comes from an accounting background and that he
            would chair the audit committee.<C n={5} /> The filing&apos;s
            identification is &ldquo;board member.&rdquo; The chairmanship
            is what he said in the interview. This page does not promote
            the second into the first.
          </p>
          <p>
            Strive is not a Texas institution. The filing is about a stock
            combination with Semler Scientific and a bitcoin-treasury
            strategy. Nothing in the portion read places The Bitcoin Bond
            Company in Austin, or anywhere else in the state.<C n={5} />
            The company&apos;s own website did not render when this page
            was written. Absence of a rendered homepage is not proof the
            company is imaginary. It is proof this page will not invent a
            registered office to keep the career in town.
          </p>

          <h2>The honest counterweight: the theorist left the room</h2>
          <p>
            The useful Rochard, for a Texas record, is the one who could be
            put in a chair in Austin and a chair in the Capitol. The
            Institute still has his essays.<C n={2} /> The witness list
            still has his name against SB 1751.<C n={3} /> Those do not
            expire because he took a capital-markets job.
          </p>
          <p>
            What would expire the honesty of the page is a sentence that
            calls The Bitcoin Bond Company an Austin firm because its chief
            executive once was a Texas student. CoinDesk&apos;s career list
            runs BitPay, Kraken, Riot, then the Bond Company.<C n={1} />
            The September 2025 filing adds a Strive directorship.<C n={5} />
            The Texas thread is three items long. Stretching it to cover
            the fourth would be the kind of domicile the rest of this site
            refuses to other people&apos;s next jobs.
          </p>
          <p>
            He is also not, on these documents, still Riot&apos;s vice
            president of research. CoinDesk in April 2025 already described
            the Bond Company as the current role and Riot as prior.
            <C n={1} /> The{" "}
            <Link href="/riot-platforms-bitcoin">Riot page</Link> keeps the
            testimony. It should not be read as a current title.
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
            and reference article, not financial, legal, or career advice.
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
