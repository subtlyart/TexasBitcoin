import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";
import { CiteLine } from "@/components/cite-line";

const pageUrl = `${site.url}/buy-and-hold-bitcoin-texas`;
const LAST_VERIFIED = "November 27, 2026";

export const metadata: Metadata = {
  title: "Buy and Hold Bitcoin in Texas",
  description:
    "The products around Bitcoin are built to take the coin. A fixed buy, and then holding what you bought — with the Texas record as the examples. Not financial advice.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("Buy and Hold Bitcoin in Texas", {
      kicker: "Reference",
      stat: "The coin, not the pitch",
    }),
    type: "article",
    title: "Buy and Hold Bitcoin in Texas",
    description:
      "Why the pitches want the coin, what a fixed purchase does to the average price, and which Texas cases show a claim instead of the asset. Not advice.",
    url: pageUrl,
  },
};

const sources = [
  {
    id: 1,
    label:
      "Texas Department of Banking — Supervisory Memorandum 1037, April 3, 2014: Bitcoin is not money under the Money Services Act",
    url: "http://business.cch.com/BANKD/sm1037-04042014.pdf",
  },
  {
    id: 2,
    label:
      "U.S. Attorney's Office, N.D. Tex. — 'Doctor Bitcoin' pleads guilty to operating an unlicensed money transmitting business (June 2021)",
    url: "https://www.justice.gov/usao-ndtx/pr/doctor-bitcoin-pleads-guilty-illegal-cash-crypto-scheme",
  },
  {
    id: 3,
    label:
      "FBI IC3 — 2025 cryptocurrency kiosk complaint data by state: Texas, 1,179 complaints, $56,802,197 adjusted losses",
    url: "https://www.ic3.gov/PSA/2026/PSA260515-2",
  },
  {
    id: 4,
    label:
      "SEC — press release 2015-271: GAW Miners and ZenMiner charged with selling cloud-mining shares the company did not have the power to back",
    url: "https://www.sec.gov/newsroom/press-releases/2015-271",
  },
  {
    id: 5,
    label:
      "Texas State Securities Board — January 4, 2018 emergency cease and desist against BitConnect, including its cloud-mining offering",
    url: "https://www.ssb.texas.gov/news-publications/administrative-action-report-jan-march-2018",
  },
  {
    id: 6,
    label:
      "The Bond Buyer — Texas's first reserve purchase, about $5 million in the iShares Bitcoin Trust on November 20, 2025, held as a placeholder",
    url: "https://www.bondbuyer.com/news/texas-makes-first-purchase-for-states-bitcoin-reserve",
  },
  {
    id: 7,
    label:
      "Texas SmartBuy ESBD — RFP 908-26-1778WS, read November 27, 2026: status Closed, Awards section “No awards available,” last modified July 10, 2026",
    url: "https://www.txsmartbuy.gov/esbd/908-26-1778WS",
  },
];

const faqs = [
  {
    q: "Is this advice to buy Bitcoin?",
    a: "No. It is a way to read the products sold around Bitcoin in Texas. The publication does not custody, transmit, or recommend a purchase size. Bitcoin can fall for years, and a holder can lose the entire amount.",
  },
  {
    q: "What is dollar-cost averaging, in one sentence?",
    a: "Spend the same number of dollars on a schedule. When the price is low, those dollars buy more coin. When the price is high, they buy less. The average price paid is pulled toward the cheaper purchases. It does not guarantee a gain.",
  },
  {
    q: "Does Texas law reward holding your own bitcoin?",
    a: "Supervisory Memorandum 1037 says selling your own bitcoin is not money transmission under the Texas Money Services Act, so no state license attaches to that act. Federal law is a separate question if you transmit value for other people. Holding is the quiet side of that line. It is not a tax shelter and not legal advice.",
  },
  {
    q: "Why is the state's own reserve in this article?",
    a: "Because it is the largest public example in Texas of holding a claim instead of the coin. The first purchase was shares of a spot Bitcoin ETF. As of the November 27, 2026 read of the custody solicitation, no award had been posted. The resident's lesson is the order the state is still trying to finish: end with the coin.",
  },
];

function C({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#r${n}`} aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

export default function BuyAndHoldPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(sources),
    headline: "Buy and Hold Bitcoin in Texas",
    description:
      "The products around Bitcoin want the coin. A fixed purchase and a hold, read against the Texas record. Not financial advice.",
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: site.logo },
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: site.logo },
    },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-11-27",
    dateModified: "2026-11-27",
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
      { "@type": "ListItem", position: 2, name: "Buy and Hold Bitcoin in Texas", item: pageUrl },
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

      <article className="mx-auto max-w-4xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / Buy and Hold
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Reference · The hold
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Buy the coin. Then keep it.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            The ironic warning is the useful one. A large share of the industry
            around Bitcoin is in the business of getting the coin out of your
            hands and into a product. The practice on the other side of that
            pitch is ordinary: buy bitcoin on a schedule, and hold the bitcoin.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published {LAST_VERIFIED} · Updated {LAST_VERIFIED}
          </p>
          <CiteLine
            title="Buy and Hold Bitcoin in Texas"
            updated={LAST_VERIFIED}
            url={pageUrl}
          />
          <p className="mt-3 text-sm text-muted-2">
            Research and reference. Not financial, investment, legal, or tax
            advice. Nothing here is for sale.
          </p>
        </header>

        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            The short answer
          </p>
          <p className="mt-3 leading-7">
            Buy bitcoin, not a claim on bitcoin. Hold it somewhere the product
            company cannot spend it. If you cannot judge whether today is a
            good day — and almost no one can — spend the same dollars on a
            schedule. Those dollars buy more coin when the price is low. That
            is the whole of dollar-cost averaging. It does not promise a profit.
          </p>
        </div>

        <div className="prose-tx mt-12">
          <h2>What are the products actually selling?</h2>
          <p>
            A platform balance is the company&apos;s promise to pay you bitcoin
            later. A rented-hashrate contract is a promise that machines you
            never see will earn it. A new token is an offer to trade the coin
            you have for a story someone else is paid to sell. The Texas record
            already has the failures of that pattern. The SEC charged GAW Miners
            with selling cloud-mining shares the firm did not have the power to
            back.<C n={4} /> The Texas Securities Commissioner ordered BitConnect
            to stop, including its cloud-mining pitch.<C n={5} /> The category
            is read, without naming a seller, on{" "}
            <Link href="/rented-hashrate-cloud-mining">
              rented hashrate and cloud mining
            </Link>
            .
          </p>
          <p>
            The kiosk is the same shape in a grocery store. The machine can be
            a legal way to buy coin. In 2025 it was also the exit for 1,179
            Texas complaints and $56.8 million in adjusted losses on the FBI&apos;s
            kiosk table.<C n={3} /> The caller who tells someone to feed the
            machine wants the coins. The ledger is on{" "}
            <Link href="/texas-crypto-kiosk-scams">the kiosk page</Link>.
          </p>

          <h2>Where does the state itself still hold a claim?</h2>
          <p>
            The Strategic Bitcoin Reserve is the public version of the
            distinction. The first purchase, about $5 million on November 20,
            2025, was shares of the iShares Bitcoin Trust — a spot ETF, a claim
            on coin a fund holds.<C n={6} /> The custody solicitation that would
            move the state from that claim to coin in its own name was still
            unawarded on the November 27, 2026 read: the ESBD page lists it
            Closed, and the Awards section says no awards are available.
            <C n={7} /> The living account is{" "}
            <Link href="/who-holds-the-texas-bitcoin-reserve">
              who holds the reserve
            </Link>
            . A resident does not have to wait on that award to learn the
            order. End with the coin.
          </p>

          <h2>What does “hold” mean under Texas law?</h2>
          <p>
            Supervisory Memorandum 1037, on April 3, 2014, said Bitcoin is not
            money under the Texas Money Services Act. Selling your own bitcoin
            does not, by itself, require a state money-transmission license.
            <C n={1} /> The federal line is different, and it is the one that
            reached Mark Hopkins. He sold bitcoin for cash as a business
            without registering with FinCEN and pleaded guilty to operating an
            unlicensed money transmitting business.<C n={2} /> Holding your own
            coin is the quiet side of that seam. Transmitting value for other
            people is the loud side. The case is{" "}
            <Link href="/doctor-bitcoin">Doctor Bitcoin</Link>, and the statute
            map is{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law says about Bitcoin
            </Link>
            . None of this is tax advice. Federal capital gains still apply
            when coin is sold. Estate questions have their own page:{" "}
            <Link href="/bitcoin-estate-planning-texas">
              Bitcoin estate planning in Texas
            </Link>
            .
          </p>

          <h2>Why does a fixed purchase change the average?</h2>
          <p>
            Dollar-cost averaging is not a forecast. It is arithmetic. Spend
            the same dollars each time. The number of coins those dollars buy
            is the dollars divided by the price. A low price puts more coin in
            the stack. A high price puts less in. Over a path that visits both,
            the average price per coin is pulled toward the cheaper days,
            because those days contributed more coins.
          </p>
          <p>
            An illustration, not a history and not a promise: $100 when a coin
            costs $100,000 buys 0.001 coin. $100 when it costs $50,000 buys
            0.002 coin. $100 when it returns to $100,000 buys another 0.001.
            Three hundred dollars bought 0.004 coin. The average price paid is
            $75,000, which is below both of the $100,000 days. Someone who
            bought only on those high days paid $100,000 for fewer coins. Someone
            who happened to put all $300 in on the $50,000 day did better than
            the schedule. The schedule is how you buy when you do not know
            which day that is. It will lag a lucky lump sum at the bottom. It
            will beat the habit of buying only when the price feels exciting.
          </p>
          <p>
            What the schedule cannot do is make a small commitment into a large
            stack, or protect coin left where a company can lose it. The
            averaging works on bitcoin you still have. A node is one way to
            check that the coin the wallet shows is the coin the network
            recognizes:{" "}
            <Link href="/run-a-bitcoin-node-texas">running a node in Texas</Link>.
          </p>

          <h2>What is the practice, stated without a pitch?</h2>
          <p>
            Decide an amount you can miss. Buy bitcoin with it on a date you
            pick in advance. Withdraw to a hold you control, or to a custody
            arrangement you have read. Ignore the next ticker. The companies
            selling the next ticker are paid when you leave the coin. The Texas
            pages linked above are the record of what leaving looks like when
            it goes badly, and of a state that bought the claim first and is
            still waiting on the coin.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold">Sources</h2>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            {sources.map((s) => (
              <li key={s.id} id={`r${s.id}`}>
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
        </section>
      </article>
    </>
  );
}
