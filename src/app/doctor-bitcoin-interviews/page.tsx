import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Doctor Bitcoin Tapes — The Lore of Mark Hopkins, In His Own Words",
  description:
    "The blended story of Mark 'Doctor Bitcoin' Hopkins, drawn from every interview he's given: the educator, the raid, the paperwork crime, the prison conversations — and the open questions only he can answer.",
  alternates: { canonical: `${site.url}/doctor-bitcoin-interviews` },
  openGraph: {
    type: "article",
    title: "The Doctor Bitcoin Tapes",
    description:
      "One story, blended from every tape: the Dallas educator, an October 23rd raid, a paperwork crime, and the man who rose above it. A living page — the Doctor still owes us answers.",
    url: `${site.url}/doctor-bitcoin-interviews`,
  },
};

// Sources — numbered, primary-first. Episode pages and court records first,
// then press. Every datable claim points here.
const sources = [
  { id: "s1", label: "Digital Cash Network (Joël Valenzuela) — 'Is Selling Bitcoin Illegal?! “Dr. Bitcoin” Mark Rizzn Hopkins on His Case' (video, 51:08, April 25, 2023)", url: "https://www.youtube.com/watch?v=k2C3TKovL9o" },
  { id: "s2", label: "Free Talk Live — episode of May 2, 2023, featuring Hopkins on his case (audio)", url: "https://soundcloud.com/freetalklive/free-talk-live-2023-05-02" },
  { id: "s3", label: "Free Talk Cast #35 — 'Inside & After: How Federal Prison Changed Us Forever,' ft. Mark 'Rizzn' Hopkins (April 2025)", url: "https://freetalkcast.podbean.com/" },
  { id: "s4", label: "Free Talk Cast on Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/free-talk-cast/id1776670594" },
  { id: "s5", label: "Aria DiMezzo — video announcement of the Hopkins episode (X, April 8, 2025)", url: "https://x.com/Aria_DiMezzo/status/1909415801666347307" },
  { id: "s6", label: "The Bitcoin Boomer Show with Gary Leland — Episode 12: Mark Hopkins (October 6, 2020)", url: "https://www.bitcoinforboomers.com/episode/12th-podcast" },
  { id: "s7", label: "Crypto Cousins Podcast (Gary Leland) — Mark Hopkins on the value of the Bitcoin blockchain (S1E5, pre-case)", url: "https://www.youtube.com/watch?v=Ypyo901bJ3s" },
  { id: "s8", label: "U.S. Attorney's Office, D.N.H. — Ian Freeman convicted on all counts relating to bitcoin money laundering scheme (December 2022)", url: "https://www.justice.gov/usao-nh/pr/ian-freeman-convicted-all-counts-relating-bitcoin-money-laundering-scheme" },
  { id: "s9", label: "NBC Boston — Ian Freeman of 'Crypto Six' sentenced to 8 years in NH bitcoin case (October 2, 2023)", url: "https://www.nbcboston.com/news/local/ian-freeman-of-crypto-six-sentenced-to-8-years-in-nh-bitcoin-case/3150311/" },
  { id: "s10", label: "CNBC — Ian Freeman ordered to pay $3.5 million restitution (February 13, 2024)", url: "https://www.cnbc.com/2024/02/13/bitcoin-money-launderer-ian-freeman-ordered-to-pay-3point5-million.html" },
  { id: "s11", label: "New Hampshire Union Leader — First Circuit upholds Freeman's conviction (July 29, 2025)", url: "https://www.unionleader.com/news/courts/free-keene-activists-conviction-for-bitcoin-money-laundering-upheld/article_97441455-b54d-4919-baa1-75dd2f9c6952.html" },
  { id: "s12", label: "U.S. Attorney's Office, D.N.H. — Aria DiMezzo sentenced to 18 months for operating an unlicensed money transmitting business (April 2023)", url: "https://www.justice.gov/usao-nh/pr/keene-woman-sentenced-18-months-operating-unlicensed-money-transmitting-business" },
  { id: "s13", label: "The Boston Globe — Aria DiMezzo of the 'Crypto 6' sentenced to 18 months (April 25, 2023)", url: "https://www.bostonglobe.com/2023/04/25/metro/aria-dimezzo-crypto-6-sentenced-18-months-bitcoin-scam/" },
  { id: "s14", label: "U.S. Attorney's Office, N.D. Tex. — 'Doctor Bitcoin' Pleads Guilty to Illegal Cash-to-Crypto Scheme (June 2021)", url: "https://www.justice.gov/usao-ndtx/pr/doctor-bitcoin-pleads-guilty-illegal-cash-crypto-scheme" },
  { id: "s15", label: "Bitcoin Magazine — Doctor Bitcoin, Jailed For Selling P2P, Warns Others They'll Be Next", url: "https://bitcoinmagazine.com/culture/doctor-bitcoin-jailed-for-selling" },
  { id: "s16", label: "The Merge — 'Federal Prison for Selling Bitcoin' w/ Mark Hopkins (video, 1:42:06)", url: "https://www.youtube.com/watch?v=pQeH56QfKY0" },
  { id: "s17", label: "The Bitcoin Treasuries Podcast (Tim Kotzman) — 'Jailed for Selling Bitcoin P2P and You're Next!' w/ Mark Hopkins", url: "https://creators.spotify.com/pod/profile/timothy-kotzman/episodes/Jailed-for-Selling-Bitcoin-P2P-and-Youre-Next--w-Mark-Hopkins-e2ridjp" },
  { id: "s18", label: "Buckazoid — 'Unpacking Bitcoin's early frontier' w/ Mark 'Rizzn' Hopkins (May 12, 2025)", url: "https://buckazoid.substack.com/p/interview-unpacking-bitcoins-early" },
  { id: "s19", label: "brainpower podcast — Episode 16: Mark 'Rizzn' Hopkins (July 24, 2025)", url: "https://www.youtube.com/watch?v=tMKv5gC36Ds" },
  { id: "s20", label: "CNBC — Binance founder Changpeng Zhao sentenced to 4 months in prison after plea deal (April 30, 2024)", url: "https://www.cnbc.com/2024/04/30/binance-founder-changpeng-zhao-cz-sentenced-to-four-months-in-prison-.html" },
  { id: "s21", label: "CNBC — Trump pardons Binance founder Changpeng Zhao (October 23, 2025)", url: "https://www.cnbc.com/2025/10/23/trump-pardons-binance-founder-cz-zhao.html" },
  { id: "s22", label: "Cointelegraph — 'Doctor Bitcoin' sentenced to federal prison, warns P2P traders (2022)", url: "https://cointelegraph.com/news/bitcoiner-sentenced-to-federal-prison-warns-users-involved-in-otc-trading" },
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

// The tapes, for ItemList schema and the on-page listening list.
const tapes = [
  {
    name: "Crypto Cousins S1E5 — the early-era conversation (pre-case)",
    url: "https://www.youtube.com/watch?v=Ypyo901bJ3s",
    note: "Gary Leland and Hopkins on the value of the Bitcoin blockchain — the educator, years before the storm.",
  },
  {
    name: "The Bitcoin Boomer Show, Episode 12 (October 6, 2020)",
    url: "https://www.bitcoinforboomers.com/episode/12th-podcast",
    note: "Leland again. An easy conversation, recorded on the eve of everything.",
  },
  {
    name: "Digital Cash Network — 'Is Selling Bitcoin Illegal?!' (April 25, 2023)",
    url: "https://www.youtube.com/watch?v=k2C3TKovL9o",
    note: "The fullest telling: 51 minutes with Joël Valenzuela on the case, the targeting, and the fix.",
  },
  {
    name: "Free Talk Live (May 2, 2023)",
    url: "https://soundcloud.com/freetalklive/free-talk-live-2023-05-02",
    note: "Hopkins on the air at Ian Freeman's station — while Freeman awaited his own sentence.",
  },
  {
    name: "Free Talk Cast #35 — 'Inside & After' with Aria DiMezzo (April 2025)",
    url: "https://freetalkcast.podbean.com/",
    note: "Two § 1960 defendants on what federal prison takes, and what it left behind.",
  },
];

export default function DoctorBitcoinTapesPage() {
  const pageUrl = `${site.url}/doctor-bitcoin-interviews`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Doctor Bitcoin Tapes — The Lore of Mark Hopkins, In His Own Words",
    description:
      "The blended story of Mark 'Doctor Bitcoin' Hopkins, drawn from every interview he's given about his case — and the open questions only he can answer.",
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    about: {
      "@type": "Person",
      name: "Mark Alexander Hopkins",
      alternateName: "Doctor Bitcoin",
    },
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: "Voices of Texas Bitcoin",
    },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "The Doctor Bitcoin tapes",
    itemListElement: tapes.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      url: t.url,
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
      {
        "@type": "ListItem",
        position: 3,
        name: "The Tapes",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {[articleJsonLd, itemListJsonLd, breadcrumbJsonLd].map(
        (schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )
      )}

      <article className="mx-auto max-w-3xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/doctor-bitcoin" className="hover:text-accent-soft">
            Doctor Bitcoin
          </Link>{" "}
          / The Tapes
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Voices of Texas Bitcoin · No. 1 · The Lore
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Doctor Bitcoin Tapes
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            <Link
              href="/doctor-bitcoin"
              className="text-accent-soft underline decoration-accent/40 underline-offset-2"
            >
              Our profile
            </Link>{" "}
            told his story from the record. This is the other telling — blended
            from every tape he&apos;s left across a decade of microphones. It
            is a living page: the Doctor has seen it, and he still owes us
            answers.
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
            Mark &ldquo;Doctor Bitcoin&rdquo; Hopkins — the Dallas-area Bitcoin
            educator federally prosecuted for selling bitcoin peer-to-peer
            without a license — has told his own story across a handful of
            interviews: pre-case conversations with Gary Leland, a 51-minute
            Digital Cash Network telling (April 2023), a Free Talk Live
            appearance (May 2023), and a federal-prison reflection with Aria
            DiMezzo (April 2025). This page blends them into one story and
            links every original.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Mark Hopkins pleaded guilty in June 2021 to one count of
              operating an unlicensed money transmitting business — a
              registration offense; the government never charged him with
              fraud.<C n={14} />
            </li>
            <li>
              On April 25, 2023, the Digital Cash Network published the
              fullest telling of his case: a 51-minute interview on P2P
              trading, federal targeting, and reform.<C n={1} />
            </li>
            <li>
              In April 2025, Free Talk Cast #35 paired Hopkins with host Aria
              DiMezzo — sentenced to 18 months under the same statute — for a
              conversation on how federal prison changed them both.<C n={3} />
              <C n={12} />
            </li>
            <li>
              Binance founder Changpeng Zhao was sentenced to four months in
              April 2024 for Bank Secrecy Act failures as Binance paid $4.3
              billion, and was pardoned on October 23, 2025.<C n={20} />
              <C n={21} />
            </li>
            <li>
              Ian Freeman, whose radio station hosted Hopkins in May 2023, was
              himself sentenced to 8 years in October 2023 in the Crypto Six
              bitcoin-sales case.<C n={2} /><C n={9} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-10">
          <p>
            Every legend in Texas Bitcoin has a first trade. His was half a
            bitcoin, tendered across a Dallas coffeehouse table in 2011 to
            settle a meal — thirteen, maybe fourteen dollars&apos; worth of a
            thing almost nobody had heard of.<C n={15} /> The man who accepted
            it spent the next decade giving the knowledge away, took a federal
            case on the chin for the way he did it, and walked out of prison
            still teaching. The tapes tell that story better than any court
            record does. We&apos;ve gathered all of them.
          </p>

          <h2>The educator, on tape before the storm</h2>
          <p>
            The earliest recordings are the most innocent artifacts in Bitcoin
            lore: Gary Leland — the Fort Worth podcast pioneer who founded the
            BitBlockBoom conference in{" "}
            <Link href="/events">our events directory</Link> — has Hopkins on
            tape twice before the case, explaining the blockchain to newcomers
            on Crypto Cousins and, on October 6, 2020, sitting for an easy
            Episode 12 of The Bitcoin Boomer Show.<C n={6} /><C n={7} /> Just
            a Dallas educator doing what he always did: bringing people in.
            By his own account, he sold bitcoin peer-to-peer &ldquo;mostly to
            meet people&rdquo; — evangelism dressed as commerce, rarely
            profitable, always personal.<C n={15} />
          </p>
          <p>
            What the tape can&apos;t know is what was already in motion around
            it. Hopkins has said his home was raided by fifteen armed agents
            on an October 23rd — guns, search warrants, five or six hours of
            questions, some $60,000 in electronics carried out the door.
            <C n={15} /> Whether that morning came weeks after Leland&apos;s
            easy episode or a year before it is a detail the record never
            pinned down — even the year is a question only the Doctor can
            settle. Hold that thought. October 23rd is a date this story is
            not done with.
          </p>

          <h2>A paperwork crime</h2>
          <p>
            Here is what the government actually charged, and it is less than
            the legend suggests: one count. Operating an unlicensed money
            transmitting business, 18 U.S.C. &sect; 1960 — a registration
            offense.<C n={14} /> No fraud count. No victim of his own conduct
            named in the charge. The fraud in the case file belonged to a
            customer — a woman moving proceeds of a Nigerian lottery scam —
            and prosecutors&apos; theory was that Hopkins should have looked
            harder and registered federally.<C n={14} /> Texas asked nothing
            of him; the state&apos;s own memo says selling your bitcoin needs
            no license here.{" "}
            <Link href="/doctor-bitcoin">The profile</Link> walks that
            state-federal seam in full. He pleaded guilty in June 2021 —
            &ldquo;my family comes first,&rdquo; he later said of the decision
            — and served his time at FCI Beaumont.<C n={15} /><C n={22} /> A
            teacher, imprisoned over paperwork. Sit with that sentence; the
            rest of this page is what happened when he stood back up.
          </p>

          <h2>The tapes that matter: 2023</h2>
          <p>
            He came out talking. In April 2023, Jo&euml;l Valenzuela&apos;s
            Digital Cash Network sat him down for 51 minutes — the fullest
            telling on tape.<C n={1} /> The chapters read like a syllabus for
            the next generation: how he got into P2P trading; how legal it
            really is; who the feds target, and why — Hopkins argues his
            outspokenness made him a target, a claim that is his own and that
            no prosecutor has ever had to answer — and, in the final stretch,
            the strategist emerges: how much of this can be fixed by the
            states, without waiting on Washington?<C n={1} /> It is the
            question{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>{" "}
            keeps score on.
          </p>
          <p>
            A week later — May 2, 2023 — he was on Free Talk Live, the Keene,
            New Hampshire liberty-radio institution, telling the story to an
            audience that understood it better than any in America.<C n={2} />{" "}
            Because the station&apos;s own founder, Ian Freeman, was living
            the heavier version: convicted on all counts in December 2022 in
            the Crypto Six case, five months from an 8-year sentence.
            <C n={8} /><C n={9} /> A Texan who had served his time, on air
            with a New Hampshire broadcaster about to serve his. The federal
            seam, audible.
          </p>

          <h2>Inside &amp; after: the bond</h2>
          <p>
            The most personal tape came two years later. Free Talk Cast #35 —
            &ldquo;Inside &amp; After: How Federal Prison Changed Us
            Forever,&rdquo; April 2025 — pairs Hopkins with Aria DiMezzo,
            Freeman&apos;s longtime co-host, herself sentenced to 18 months
            under the same statute as Hopkins and out about a year when they
            recorded.<C n={3} /><C n={5} /><C n={12} /> Fifty minutes, no
            case chronology, no legal argument — just two people who went
            through the machine comparing what it took from them and what
            they refuse to let it keep.<C n={3} /> It is the kind of
            conversation only shared scars make possible, and it is the
            closest thing on record to the Doctor off the record. What did
            prison actually change in him? The tape gestures; it doesn&apos;t
            answer. That question is still open — and he knows we&apos;re
            asking.
          </p>

          <h2>The measuring stick: CZ</h2>
          <p>
            Every proportionality debate needs a control group, and crypto
            history supplied a perfect one. Changpeng Zhao — CZ, founder of
            Binance, the largest exchange on earth — pleaded guilty to Bank
            Secrecy Act failures at global scale; Binance paid $4.3 billion,
            and CZ was sentenced in April 2024 to four months.<C n={20} />{" "}
            On October 23, 2025, he was pardoned outright.<C n={21} /> Read
            the ledger side by side: the billionaire whose exchange&apos;s
            compliance failures spanned the planet served four months and
            received a pardon — on an October 23rd, of all dates. The Dallas
            educator with the single registration count served his time in
            Beaumont with no pardon in sight, and Freeman is serving eight
            years.<C n={9} /> We don&apos;t flatten the differences between
            these cases — the counterweight below insists on them — but the
            spread in outcomes is the fact no one defends out loud. Hopkins
            noticed. It is precisely why he says the statute, not the
            defendants, is what needs fixing.<C n={22} />
          </p>

          <h2>The counterweight: precision is respect</h2>
          <p>
            This page argues sympathy, so it owes you exactness. Hopkins
            pleaded guilty; this page does not relitigate that plea, and
            neither does he — his protest is the frame, not the facts.
            <C n={22} /> And the three &sect; 1960 stories here are not one
            story: Freeman was convicted at trial of money laundering, tax
            evasion, and more, with scam victims out real money, and the
            First Circuit upheld all of it in July 2025<C n={8} />
            <C n={10} /><C n={11} />; DiMezzo pleaded to the transmitting
            count<C n={12} /><C n={13} />; Hopkins&apos;s single count
            carried no fraud and no victim of his own making.<C n={14} /> The
            seam is shared. The weight each carried across it was not.
            Keeping that straight is what makes the sympathy worth anything.
          </p>

          <h2>The tapes</h2>
          <ul>
            {tapes.map((t) => (
              <li key={t.url}>
                <a href={t.url} target="_blank" rel="noopener noreferrer">
                  {t.name}
                </a>{" "}
                — {t.note}
              </li>
            ))}
          </ul>
          <p>
            Deeper cuts: The Merge&apos;s 100-minute conversation,
            <C n={16} /> The Bitcoin Treasuries Podcast,<C n={17} /> a written
            interview on Bitcoin&apos;s early frontier at Buckazoid,
            <C n={18} /> and the brainpower podcast.<C n={19} /> One tape is
            missing: Hopkins remembers a case-era conversation with Gary
            Leland that no index we searched contains. If it exists, we want
            it.
          </p>
          <p>
            The scene that produced Doctor Bitcoin — the meetups, the
            educators, the builders — is still out there compounding, and
            he&apos;s still in it. That is the part of this story nobody can
            prosecute. For where it all began, start with{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            . For what he taught everyone the hard way,{" "}
            <Link href="/doctor-bitcoin">the profile</Link> holds the record.
            The next tape belongs to us — and it&apos;s coming.
          </p>

          <h2 id="sources">Sources</h2>
          <p className="text-sm text-muted">
            Episode pages and court records first, then press. Where an
            episode could not be directly opened for verification, claims are
            limited to what its own listing states; Hopkins&apos;s personal
            accounts are attributed to him throughout. This is a research and
            reference article, not financial or legal advice.
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
