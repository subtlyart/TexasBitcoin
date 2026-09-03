import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  SONG_LAST_VERIFIED,
  songSources,
  songTimeline,
  type SongTimelineKind,
} from "@/lib/song";

const pageUrl = `${site.url}/jimmy-song-bitcoin`;

export const metadata: Metadata = {
  title: "Jimmy Song: The Man Who Teaches Bitcoin From Scratch",
  description:
    "Jimmy Song's Bitcoin record, sourced: the Austin-based developer, educator, and author of Programming Bitcoin (O'Reilly, 2019) who taught a graduate Programming Blockchain course at UT Austin, trained 500+ developers in his two-day seminar, landed fourteen test commits in Bitcoin Core in 2017, and fought the block-size war in essays. The books, the bets, the maximalism - and what the commit log actually says.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Jimmy Song: The Man Who Teaches Bitcoin From Scratch",
    description:
      "Texas shaped what a state does with Bitcoin. From Austin, Jimmy Song shaped who can build on it: the textbook, the seminar, the UT course, and the arguments.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Jimmy Song?",
    a: "Jimmy Song is an Austin-based Bitcoin developer, educator, and author. A University of Michigan mathematician who found Bitcoin in 2011, he ran engineering at the Armory wallet, was Principal Architect at Paxos, and joined Blockchain Capital as a venture partner in January 2018. He is best known for Programming Bitcoin (O'Reilly, March 2019), his Programming Blockchain seminar, the Bitcoin Fixes This podcast, and the Bitcoin Tech Talk newsletter.",
  },
  {
    q: "Is Jimmy Song a Bitcoin Core developer?",
    a: "He is a Bitcoin Core contributor, and the record is specific: fourteen commits authored by Song merged into Bitcoin Core between April and June 2017, all additions and clean-ups to the unit-test and RPC-test suites. He has not authored consensus or protocol changes. His influence on the network is as its most prolific teacher of the codebase, not as a designer of it.",
  },
  {
    q: "What is Programming Bitcoin?",
    a: "Programming Bitcoin: Learn How to Program Bitcoin from Scratch is Song's O'Reilly textbook, published March 26, 2019. It walks a reader through building a working Bitcoin library in Python - finite fields, elliptic-curve cryptography, transactions, Script, blocks, proof-of-work, and the peer-to-peer network. Its code repository, started December 2017, has roughly 1,900 stars and 700 forks, and the book is the written form of the two-day seminar Song had taught to more than 500 developers.",
  },
  {
    q: "What is Jimmy Song's connection to Texas?",
    a: "He lives and works in Austin. In early 2019 he taught 'Programming Blockchain,' a seven-week graduate course at the University of Texas at Austin's McCombs School of Business for business and computer-science master's students. He appeared onstage with Senator Ted Cruz at the Texas Blockchain Summit in October 2021, and his newsletter greeted the Consensus conference's 2022 move to Austin with a warning about 'altcoin scammer central.'",
  },
  {
    q: "What was the Jimmy Song and Joe Lubin bet?",
    a: "At Consensus 2018, Song bet ConsenSys founder Joe Lubin that decentralized apps would not find real users. Terms finalized in May 2019 put 810.8 ETH from Song against 69.74 BTC from Lubin, decided by whether five dapps held 10,000 daily and 100,000 monthly users for six months before May 23, 2023. At the deadline, two data firms counted exactly five qualifying apps, with the definition of 'decentralized' disputed; no public settlement followed.",
  },
];

const kindStyle: Record<SongTimelineKind, { color: string; label: string }> = {
  path: { color: "var(--star)", label: "The path" },
  code: { color: "var(--accent)", label: "The code" },
  teach: { color: "#8a7fb5", label: "The classroom" },
  fight: { color: "#c98a4e", label: "The argument" },
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

export default function JimmySongBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jimmy Song: The Man Who Teaches Bitcoin From Scratch",
    description:
      "The Bitcoin record of the Austin-based developer, educator, and author of Programming Bitcoin: the UT Austin course, the 500-developer seminar, the 2017 Bitcoin Core test commits, the block-size-war essays, the Lubin wager, and the maximalism.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Person", name: "Jimmy Song" },
      { "@type": "Book", name: "Programming Bitcoin" },
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
        name: "Jimmy Song and Bitcoin",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="mx-auto max-w-4xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / Jimmy Song &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The builders
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Jimmy Song: The Man Who Teaches Bitcoin From Scratch
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The rest of this cluster is about what the State of Texas does
            with Bitcoin – who signed the reserve, who prioritized it, who
            bought it, who holds it. This page is about the other kind of
            influence, the kind that lives in Austin and never files a bill.
            Jimmy Song wrote the textbook that teaches engineers to build
            Bitcoin from a blank Python file, taught it at the University of
            Texas, and drilled it into more than five hundred developers by
            hand. He also picked most of the industry&apos;s loudest fights.
            Both halves are the record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 1, 2026 · Updated{" "}
            {SONG_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Jimmy Song is an Austin-based Bitcoin developer, educator, and
            author. He wrote Programming Bitcoin (O&apos;Reilly, 2019), the
            standard textbook for building Bitcoin from scratch in Python,
            taught a graduate Programming Blockchain course at the University
            of Texas at Austin in 2019, and has trained more than 500
            developers in his two-day seminar. A 2017 contributor to Bitcoin
            Core&apos;s test suite, he is the network&apos;s most prolific
            teacher and one of its most uncompromising maximalists.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              O&apos;Reilly published Jimmy Song&apos;s Programming Bitcoin:
              Learn How to Program Bitcoin from Scratch on March 26, 2019.
              <C n={6} />
            </li>
            <li>
              Fourteen commits authored by Song were merged into Bitcoin Core
              between April and June 2017, all to the unit-test and RPC-test
              suites.<C n={4} />
            </li>
            <li>
              In early 2019 Song taught &ldquo;Programming Blockchain,&rdquo;
              a seven-week graduate course at UT Austin&apos;s McCombs School
              of Business.<C n={7} /><C n={8} />
            </li>
            <li>
              By Song&apos;s own count his two-day Programming Blockchain
              seminar had trained more than 500 developers.<C n={11} />
            </li>
            <li>
              Song&apos;s wager with Joe Lubin, finalized May 2019, staked
              810.8 ETH against 69.74 BTC on whether five dapps would hold
              10,000 daily users for six months before May 23, 2023.
              <C n={13} />
            </li>
            <li>
              Song has published five Bitcoin books between March 2019 and
              September 2023, from a Python textbook to a case for
              policymakers.<C n={6} /><C n={15} /><C n={16} /><C n={17} />
              <C n={18} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the commit log to the classroom
            </h2>
            <span className="text-xs text-muted-2">2011 → 2023</span>
          </div>
          <ol className="mt-5 space-y-4">
            {songTimeline.map((e) => {
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
          <h2>Who is Jimmy Song, and why does a Texas site cover him?</h2>
          <p>
            Because the state&apos;s Bitcoin story has two layers, and the
            people pages so far cover only one. The statutes, the reserve,
            and the mines are told in{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            ; underneath them is the question of who in Texas actually knows
            how the thing works, and who taught them. Song is the answer more
            often than anyone. Born in Korea, in the United States from age
            seven, a University of Michigan mathematician writing software
            since 1998, he found Bitcoin in 2011 and by 2013 was contributing
            to its open-source tooling.<C n={1} /><C n={2} /><C n={3} /> His
            résumé is infrastructure: engineering lead at the Armory
            cold-storage wallet, Bitcoin integration at Monetas in 2014,
            Principal Architect at the institutional platform Paxos, then a
            venture-partner seat at Blockchain Capital from January
            2018.<C n={2} /><C n={12} /> He works from Austin, and the
            city&apos;s builder scene – chronicled in{" "}
            <Link href="/texas-crypto-archive">the Texas crypto archive</Link>{" "}
            – is where his classroom and his arguments both happen.
            <C n={2} /><C n={20} />
          </p>

          <h2>What did Jimmy Song build for the Bitcoin network?</h2>
          <p>
            A way in. The single most-cited artifact is{" "}
            <strong>Programming Bitcoin</strong>, published by O&apos;Reilly
            on March 26, 2019: a book that refuses to explain Bitcoin and
            instead makes the reader build it – finite fields, elliptic-curve
            signatures, transaction parsing and signing, Script, block
            validation, proof-of-work, and the peer-to-peer network, in
            Python, from nothing.<C n={6} /> Its repository, started December
            17, 2017, sits at roughly 1,900 stars and 700 forks, and the
            book itself is the written form of a two-day seminar Song had
            already run for more than 500 developers.<C n={5} /><C n={11} />{" "}
            Then the university: in early 2019 he taught &ldquo;Programming
            Blockchain&rdquo; as a seven-week graduate course at UT
            Austin&apos;s McCombs School of Business, for business and
            computer-science master&apos;s students – the state&apos;s
            flagship university teaching engineers to build the protocol,
            from a working developer rather than a survey
            lecturer.<C n={7} /><C n={8} /> The point of all of it is the
            same: the number of people who can read a Bitcoin transaction at
            the byte level is the network&apos;s real security budget, and
            Song has done more to grow it than any other single teacher.
          </p>
          <p>
            The code record is smaller and worth stating precisely, because
            conference bios round it up. Fourteen commits authored by Song
            merged into Bitcoin Core between April 17 and June 3, 2017 –
            unit tests for address management and amount handling, RPC tests
            for getnetworkhashps, getdifficulty, gettxout, getchaintxstats,
            and the like.<C n={4} /> No consensus code, no protocol
            proposals. That is a contributor, not an architect – and it
            makes the classroom, not the commit log, the real instrument of
            his influence.
          </p>

          <h2>What did Song argue, and which fights did he pick?</h2>
          <p>
            The block-size war first. Through 2017, as the network split over
            SegWit, UASF, and the Segwit2x hard fork, Song&apos;s Medium
            essays on game theory, block weight, and fork scenarios became
            standard reading on the small-block side that won.<C n={10} />{" "}
            The day SegWit activated, he published &ldquo;Why I Was Wrong
            About Segwit And Big Blocks,&rdquo; grading his own pinned
            New Year&apos;s prediction &ldquo;2/3 wrong&rdquo; – a habit of
            public self-correction rare in the genre.<C n={9} /> Then the
            wager: onstage at Consensus 2018 he bet ConsenSys founder Joe
            Lubin that decentralized apps would never find real users; the
            finalized terms, a year later, put 810.8 ETH against 69.74 BTC on
            whether five dapps could hold 10,000 daily and 100,000 monthly
            users for six months before May 23, 2023.<C n={13} /> Then the
            books that carry the argument outward: The Little Bitcoin Book,
            written with seven co-authors in days in August 2019; Thank God
            for Bitcoin, the Christian case for sound money, in November
            2020; Bitcoin and the American Dream, written for legislators
            with the Bitcoin Policy Group in December 2021 – the same season
            Texas was writing its first digital-asset statutes; and Fiat
            Ruins Everything in September 2023.<C n={15} /><C n={16} />
            <C n={17} /><C n={18} />
          </p>
          <p>
            The Texas stage came in October 2021, when Song shared the Texas
            Blockchain Summit platform with Senator Ted Cruz and asked him
            when Peter Thiel first told him about Bitcoin – a moment told
            from the senator&apos;s side on{" "}
            <Link href="/ted-cruz-bitcoin">Ted Cruz and Bitcoin</Link>.
            <C n={19} /> When Consensus itself moved to Austin in June 2022,
            Song&apos;s newsletter drew the line on home turf: &ldquo;Austin
            is turning into altcoin scammer central for a week, so I&apos;m
            here to help by helping you navigate the place.&rdquo;<C n={20} />
          </p>

          <h2>The honest counterweight: the maximalist&apos;s ledger</h2>
          <p>
            The criticism worth engaging is not that Song is wrong about
            Bitcoin – this site shares the thesis – but that the certainty
            has a cost, and the record shows where. The Lubin wager is the
            cleanest case: at the May 2023 deadline, two blockchain-data
            firms counted exactly five dapps that met the usage bar – the
            bare minimum for Lubin to win – while whether those five were
            &ldquo;decentralized&rdquo; under the terms stayed contested, and
            no public settlement followed.<C n={14} /> A bet designed to
            prove a point ended as a definitional argument. The Blockchain
            Capital seat cuts the same way: a Bitcoin-only voice drawing a
            venture partner&apos;s chair at a fund that invests across the
            industry he calls scams.<C n={12} /> And the &ldquo;Core
            developer&rdquo; billing – repeated by podcasts, summits, and
            speaker bureaus – outruns fourteen test commits from one
            spring.<C n={4} />
          </p>
          <p>
            The fair reading is that none of this touches the work that
            matters. The essays that were wrong were graded wrong in public
            by their author. The wager, whatever its outcome, was the rare
            crypto argument with skin in the game. And the teaching is not a
            claim at all: it is a textbook in print, a course on a UT
            syllabus, and several hundred engineers who can build a
            transaction by hand because a man in Austin made them do it. The
            Texas legislature can write a reserve into law, as{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the reserve reference
            </Link>{" "}
            records; it cannot write the engineers. Song&apos;s influence on
            the network is that he did.
          </p>

          <h2>Where does the Song record stand today?</h2>
          <p>
            As of September 2026: five books, a standing seminar, a UT course
            on the record, a podcast and newsletter still running, and a home
            address in the city where the industry now holds its largest
            conference.<C n={1} /><C n={20} /> The officeholders who shaped
            Texas&apos;s Bitcoin law are on{" "}
            <Link href="/greg-abbott-bitcoin">Greg Abbott and Bitcoin</Link>,{" "}
            <Link href="/dan-patrick-bitcoin">Dan Patrick and Bitcoin</Link>,
            and{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines and Bitcoin</Link>.
            This page opens the other wing: the Texans who shaped the network
            itself.
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
            Primary record first: Song&apos;s own site and essays; the GitHub
            commit log for the code and the book&apos;s repository;
            O&apos;Reilly and the publishers for the books; UT Austin&apos;s
            McCombs School for the course; CoinDesk, Decrypt, and Bitcoin
            Magazine for the career and the wager. This is a research and
            reference article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {songSources.map((s) => (
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
