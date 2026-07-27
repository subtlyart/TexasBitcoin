import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { LoneStar } from "@/components/lone-star";

export const metadata: Metadata = {
  title: "The Wider Ledger — Texas Crypto Archive",
  description:
    "The direct-link archive of the wider Texas digital-asset story: the altcoins, the developers, and the venture capital — from 8VC's 2020 move to Austin through Multicoin's Solana call and Consensus coming to town. Sourced end to end.",
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
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/texas-crypto-archive`,
    datePublished: "2026-07-13",
    dateModified: "2026-07-13",
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
            By {site.name} · Published July 13, 2026 · Updated July 13, 2026
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
            the Texas Ethereum and Solana developer scenes, the token projects
            that rose and fell from Texas addresses, where the venture capital
            went next — and the through-line back to the base layer, because
            every one of these stories eventually touches the money law and the
            grid that the front of this site documents.
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
