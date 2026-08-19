import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { LoneStar } from "@/components/lone-star";

export const metadata: Metadata = {
  title: "The Wider Ledger — Texas Crypto Archive",
  description:
    "The wider Texas digital-asset story beyond Bitcoin — Factom, Hedera, Multicoin, 8VC, ATX DAO, and Consensus in Austin: developers, tokens, and VC.",
  alternates: { canonical: `${site.url}/texas-crypto-archive` },
  openGraph: {
    type: "article",
    title: "The Wider Ledger — Texas Crypto Archive",
    description:
      "The wider Texas digital-asset story — developers, tokens, and venture capital — kept off the main halls, on the record.",
    url: `${site.url}/texas-crypto-archive`,
  },
};

// Sources — same standard as the front of the house: primary-first, every
// datable claim cited.
const sources = [
  { id: "s1", label: "Wikipedia — 8VC (HQ relocated from San Francisco to Austin, 2020)", url: "https://en.wikipedia.org/wiki/8VC" },
  { id: "s2", label: "Forbes — Joe Lonsdale profile", url: "https://www.forbes.com/profile/joe-lonsdale/" },
  { id: "s3", label: "Cointelegraph — Austin officials approve blockchain resolutions (March 2022)", url: "https://cointelegraph.com/news/is-austin-the-next-us-crypto-hub-officials-approve-blockchain-resolutions" },
  { id: "s4", label: "Austin Monitor — Resolutions push city toward crypto, blockchain tech (March 2022)", url: "https://www.austinmonitor.com/stories/2022/03/resolutions-push-city-to-look-toward-future-use-of-crypto-blockchain-tech/" },
  { id: "s5", label: "PR Newswire — CoinDesk's Consensus 2023 draws 15,000 attendees to Austin", url: "https://www.prnewswire.com/news-releases/coindesks-consensus-2023-draws-15-000-attendees-from-around-the-globe-to-austin-texas-301820435.html" },
  { id: "s6", label: "PR Newswire — Consensus' 10th annual event in Austin, TX (2024)", url: "https://www.prnewswire.com/news-releases/consensus-10th-annual-event-in-austin-tx-commences-countdown-just-8-weeks-away-302105764.html" },
  { id: "s7", label: "Crunchbase — Multicoin Capital (founded 2017, Austin)", url: "https://www.crunchbase.com/organization/multicoin-capital" },
  { id: "s8", label: "The Block — Multicoin founder Kyle Samani steps back, will continue to advocate for Solana (Feb 2026)", url: "https://www.theblock.co/post/388561/multicoin-founder-kyle-samani-steps-back-vc-firm-continue-advocate-solana" },
  { id: "s9", label: "CoinDesk — Multicoin co-founder Kyle Samani steps down after nearly a decade (Feb 2026)", url: "https://www.coindesk.com/business/2026/02/04/multicoin-co-founder-kyle-samani-steps-down-after-nearly-a-decade-to-pursue-other-areas-of-tech" },
  { id: "s10", label: "U.S. House hearing — Paul Snow, Factom, written testimony (March 16, 2016)", url: "https://www.congress.gov/114/meeting/house/104677/witnesses/HHRG-114-IF17-TTF-SnowP-20160316.pdf" },
  { id: "s11", label: "CoinCentral — What Is Factom? (protocol anchored into Bitcoin)", url: "https://coincentral.com/factom-beginner-guide/" },
  { id: "s12", label: "CoinDesk — Factom Inc. files for Chapter 11 bankruptcy (June 2020)", url: "https://www.coindesk.com/markets/2020/06/19/blockchain-company-factom-inc-files-for-chapter-11-bankruptcy" },
  { id: "s13", label: "The Bitcoin Forum — Paul Snow AMA: architect of Factom, chair of the Texas Bitcoin Conference", url: "https://forum.bitcoin.com/ama-ask-me-anything/i-am-paul-snow-the-architect-of-factom-and-chair-of-the-texas-bitcoin-conference-ask-me-anything-t4026.html" },
  { id: "s14", label: "Wikipedia — Hedera (Swirlds founded 2015; mainnet August 2018)", url: "https://en.wikipedia.org/wiki/Hedera_(distributed_ledger)" },
  { id: "s15", label: "Dallas Innovates — Hedera Hashgraph moves global HQ to Richardson's Telecom Corridor", url: "https://dallasinnovates.com/hedera-hashgraph-moving-global-headquarters-to-richardsons-3400-at-cityline/" },
  { id: "s16", label: "Dallas Innovates — Hedera to open-source its hashgraph code", url: "https://dallasinnovates.com/hedera-will-open-source-its-hashgraph-code-to-capitalize-on-growing-demand-for-public-dlt/" },
  { id: "s17", label: "ATX DAO — official site (founded October 2021)", url: "https://www.atxdao.com/" },
  { id: "s18", label: "GlobeNewswire — ATX DAO brings 'Here We Go' NFT mural to life during Consensus (June 2022)", url: "https://www.globenewswire.com/en/news-release/2022/06/07/2458224/0/en/ATX-DAO-Partners-With-Artist-ER-HOPE-Campaign-and-Native-Hostel-During-Consensus-Keep-Austin-Web3-Event-at-Empire-Control-Room-Garage-to-Help-Bring-Local-NFT-Mural-to-Life.html" },
  { id: "s19", label: "Disruption Banking — Making Austin a crypto hub with ATX DAO (March 2023)", url: "https://www.disruptionbanking.com/2023/03/10/making-austin-a-crypto-hub-with-atx-dao/" },
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

const faqs = [
  {
    q: "Why does a Bitcoin site keep a crypto archive?",
    a: "Because the record matters. TexasBitcoin's front pages stay Bitcoin-centric on purpose — but the full Texas story includes the altcoin developers, the token cycles, and the venture capital that moved to the state. The archive records that wider ledger so it isn't lost, while the main halls keep flying one flag.",
  },
  {
    q: "Is Austin a crypto hub?",
    a: "By the record, yes. 8VC relocated its headquarters from San Francisco to Austin in 2020, the Austin City Council passed two crypto and blockchain resolutions unanimously in March 2022, CoinDesk's Consensus — the industry's largest gathering — was held in Austin in 2023 and 2024, and Multicoin Capital, one of crypto's most influential venture firms, has been Austin-based since 2017.",
  },
  {
    q: "What was Factom?",
    a: "Factom was an Austin-founded (November 2014) data-provenance protocol led by Paul Snow that anchored its ledger into Bitcoin's proof-of-work, so Bitcoin's hashpower secured Factom's history. It earned a Department of Homeland Security grant and Congressional testimony before Factom Inc. filed for Chapter 11 in June 2020 — though the protocol itself kept running without the company.",
  },
  {
    q: "Was Hedera founded in Texas?",
    a: "Yes. Hashgraph, the consensus algorithm behind Hedera, was invented by Dallas-area computer scientist Leemon Baird, who co-founded Swirlds with Mance Harmon in 2015. Hedera launched its mainnet in August 2018 and placed its global headquarters in Richardson's Telecom Corridor, north of Dallas.",
  },
  {
    q: "What is Multicoin Capital?",
    a: "An Austin-based, thesis-driven digital-asset venture firm founded in 2017 by Kyle Samani and Tushar Jain. It led an early Solana fundraise — buying SOL around $0.04 — and backed Helium before either was widely known, making it one of the most consequential venture calls made from Texas.",
  },
];

export default function ArchivePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Wider Ledger — Texas Crypto Archive",
    description:
      "The wider Texas digital-asset story — altcoins, developers, and venture capital — sourced and on the record.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: `${site.url}/texas-crypto-archive`,
    datePublished: "2026-07-13",
    dateModified: "2026-07-27",
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
        name: "The Wider Ledger — Texas Crypto Archive",
        item: `${site.url}/texas-crypto-archive`,
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
          / The Archive
        </nav>

        <header className="mt-6">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <LoneStar className="h-3.5 w-3.5" />
            The Archive · Direct link only
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Wider Ledger
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Out front, this site flies one flag — Bitcoin, the base layer, the
            hardest money. Back here, the archive keeps the rest of the record:
            the altcoins, the developers, and the venture capital that made
            Texas a home for the whole experiment. Quieter room, same standard —
            every claim sourced.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published July 13, 2026 · Updated July 27, 2026
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Texas&apos;s crypto story is bigger than Bitcoin: venture firm 8VC
            moved its headquarters from San Francisco to Austin in 2020, the
            Austin City Council passed two crypto and blockchain resolutions in
            March 2022, CoinDesk&apos;s Consensus — the industry&apos;s largest
            conference — convened in Austin in 2023 and 2024, and Austin&apos;s
            Multicoin Capital made one of venture&apos;s great token calls,
            backing Solana at roughly $0.04.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Factom, a data-provenance protocol whose ledger was anchored into
              Bitcoin&apos;s proof-of-work, was founded in Austin on November 7,
              2014.<C n={11} /><C n={13} />
            </li>
            <li>
              Hashgraph, a novel consensus algorithm invented by Dallas-area
              scientist Leemon Baird, was built by Swirlds (co-founded 2015) and
              became the Hedera network, headquartered in Richardson.
              <C n={14} /><C n={15} />
            </li>
            <li>
              Multicoin Capital, founded in Austin in 2017, made one of
              venture&apos;s great token calls — backing the Solana protocol at
              roughly $0.04 per SOL.<C n={7} /><C n={8} />
            </li>
            <li>
              Venture firm 8VC moved its headquarters from San Francisco to
              Austin in 2020, bringing one of the country&apos;s largest funds
              to Texas.<C n={1} /><C n={2} />
            </li>
            <li>
              The Austin City Council passed two crypto and blockchain
              resolutions in a single session in March 2022, both unanimously.
              <C n={3} /><C n={4} />
            </li>
            <li>
              CoinDesk&apos;s Consensus, the industry&apos;s largest conference,
              convened in Austin in April 2023 — drawing 15,000 attendees — and
              returned in May 2024.<C n={5} /><C n={6} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-10">
          <h2>Why this room exists</h2>
          <p>
            TexasBitcoin is Bitcoin-first, and the front of the house always
            will be. But a reference publication owes the record more than its
            thesis. The user&apos;s journey doesn&apos;t end at the base layer —
            the same state that mines the hardest money also raised token funds,
            hosted the industry&apos;s biggest conference, and passed city
            resolutions with &ldquo;blockchain&rdquo; in them. Leave that out
            and the history is incomplete; put it out front and the signal
            blurs. So it lives here: off the main halls, on the record.
          </p>

          <h2>2014: The Austin project that anchored to Bitcoin</h2>
          <p>
            Texas&apos;s first great token experiment bowed to the base layer.{" "}
            <strong>Factom</strong>, founded in Austin on November 7, 2014 by{" "}
            <strong>Paul Snow</strong> — who also chaired the Texas Bitcoin
            Conference — and a team including David Johnston and Peter Kirby,
            built a data-provenance layer with its own token whose entire
            history was <strong>anchored into Bitcoin&apos;s proof-of-work</strong>,
            so the hashpower securing the hardest money also secured
            Factom&apos;s ledger.<C n={11} /><C n={13} /> The idea traveled
            far for its era: a U.S. Department of Homeland Security grant, and
            Snow testifying on blockchain technology before a U.S. House
            subcommittee in March 2016.<C n={10} /> The honest ending belongs
            in the record too: Factom Inc. filed for Chapter 11 in June 2020,
            unable to cover roughly $7.5 million in debts — while the protocol
            itself, trustless by design, kept running without the company.
            <C n={12} /> Of all the altcoin architectures of its generation,
            Austin&apos;s bet was the one that treated Bitcoin as bedrock.
          </p>

          <h2>2015: A new consensus, born in the Telecom Corridor</h2>
          <p>
            Not every Texas experiment deferred to Bitcoin — the boldest one
            proposed a different physics entirely. <strong>Leemon Baird</strong>,
            a Dallas-area mathematician and computer scientist, invented{" "}
            <strong>hashgraph</strong> — a gossip-based, asynchronous
            Byzantine-fault-tolerant consensus that dispensed with blocks and
            mining altogether — and co-founded <strong>Swirlds</strong> with
            Mance Harmon in 2015 to build it.<C n={14} /> The public network it
            spawned, <strong>Hedera</strong>, launched its mainnet in August
            2018 and planted its global headquarters in Richardson&apos;s
            Telecom Corridor — the same North Dallas ground that built the
            telecom era.<C n={15} /> The experiment ran against the grain of
            the open-source ethos at first — patented algorithm, a governing
            council of corporations instead of miners — and the record shows
            the correction, too: Hedera later open-sourced the hashgraph code.
            <C n={16} /> Agree or not with the design, a genuinely novel
            consensus algorithm entered the world from Texas, and its community
            has defended it with a devotion any chain would envy.
          </p>

          <h2>2017: The venture call heard from Austin</h2>
          <p>
            Before the migration made it fashionable, <strong>Multicoin
            Capital</strong> set up in Austin in 2017 — a thesis-driven
            digital-asset fund founded by <strong>Kyle Samani</strong> and{" "}
            <strong>Tushar Jain</strong>.<C n={7} /> Its defining bet was made
            early: Multicoin led a fundraise for the Solana protocol, buying
            SOL at roughly four cents, and backed Helium before either name
            meant anything.<C n={8} /> Whatever one thinks of the token era,
            one of its most consequential venture calls was made from Texas.
            Samani stepped back from day-to-day investing in February 2026 —
            still, by his own account, an advocate for the ecosystem he
            backed.<C n={9} />
          </p>

          <h2>2020: The capital migration</h2>
          <p>
            When <strong>8VC</strong> moved its headquarters from San Francisco
            to Austin in 2020, it brought one of the largest venture funds in
            the country to Texas soil — and confirmed a migration already
            underway among founders and engineers.<C n={1} /><C n={2} /> The
            firm wasn&apos;t a crypto fund, but the move mattered to crypto: the
            developers and the capital that token projects draw on were now
            raising, hiring, and building in Austin.
          </p>

          <h2>2021: The DAO that adopted a city</h2>
          <p>
            In October 2021, a group of Austin crypto builders organized{" "}
            <strong>ATX DAO</strong> around a mission with no hedge in it: make
            Austin the crypto capital of the world.<C n={17} /> What makes it
            an experiment worth archiving is the direction it pointed the
            technology — outward, at a real city. The DAO testified before the
            Austin City Council and the state legislature, walked legislators
            through the technology, and put crypto&apos;s money where the
            culture is: commissioning &ldquo;Here We Go,&rdquo; a downtown
            mural by the artist ER unveiled in June 2022 at Native Bar &amp;
            Café, and running an artist residency that taught local creators to
            mint their own work.<C n={18} /><C n={19} /> When the City Council
            passed its crypto resolutions in March 2022, the ground had been
            worked by neighbors, not lobbyists — a decentralized organization
            practicing the oldest Texas technology there is: showing up.
          </p>

          <h2>2022: The city says yes</h2>
          <p>
            In March 2022, the Austin City Council passed two resolutions in a
            single working session — one from Mayor Steve Adler directing the
            city to support Web3 and blockchain technology broadly, one from
            Council Member Mackenzie Kelly directing staff to study accepting
            Bitcoin and other cryptocurrencies for city payments. Both passed
            unanimously.<C n={3} /><C n={4} /> A city government putting
            &ldquo;blockchain&rdquo; in its own resolutions marked how far the
            conversation had traveled from the 2014 banking memo.
          </p>

          <h2>2023–2024: The industry comes to town</h2>
          <p>
            <strong>Consensus</strong>, CoinDesk&apos;s flagship and the
            industry&apos;s largest, longest-running gathering, left New York
            and convened in Austin — drawing 15,000 attendees in April
            2023<C n={5} /> and returning to the Austin Convention Center for
            its tenth annual edition in May 2024.<C n={6} /> For two years the
            center of the crypto industry&apos;s calendar was a Texas zip code.
          </p>

          <h2>The shelf keeps filling</h2>
          <p>
            This archive is a living room, not a finished one. On the docket:
            the Texas Ethereum and Solana developer scenes, where the venture
            capital went next — and the through-line back to the base layer, because
            every one of these stories eventually touches{" "}
            <Link href="/texas-bitcoin-law-timeline">the money law</Link> and the{" "}
            <Link href="/bitcoin-mining-map-texas">grid</Link> that the front of
            this site documents.
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
            Same standard as the front of the house: every datable claim is
            sourced below. This is a research and reference article, not
            financial or legal advice.
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
