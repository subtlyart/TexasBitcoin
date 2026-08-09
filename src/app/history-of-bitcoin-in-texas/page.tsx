import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The History of Bitcoin in Texas",
  description:
    "How a 2014 banking memo, China's mining ban, an old aluminum smelter, and a 2025 state Bitcoin reserve made Texas the center of gravity for hard money — sourced end to end.",
  alternates: { canonical: `${site.url}/history-of-bitcoin-in-texas` },
  openGraph: {
    type: "article",
    title: "The History of Bitcoin in Texas",
    description:
      "From Supervisory Memo 1037 to a state Strategic Bitcoin Reserve — the definitive, sourced account of how Texas became the capital of Bitcoin.",
    url: `${site.url}/history-of-bitcoin-in-texas`,
  },
};

// Sources — every datable claim in the piece points here.
const sources = [
  { id: "s1", label: "Texas Department of Banking, Supervisory Memorandum 1037 (PDF)", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/New-Actions/sm1037.pdf" },
  { id: "s2", label: "Texas Department of Banking — Virtual Currency Guidance", url: "https://www.dob.texas.gov/consumer-information/virtual-currency-guidance" },
  { id: "s3", label: "National Law Review — Certain Stablecoins Now Subject to Texas Money Services", url: "https://natlawreview.com/article/regulating-stablecoins-certain-stablecoins-are-now-subject-to-texas-money-services" },
  { id: "s4", label: "CNBC — China's bitcoin miner exodus, headed to Texas (June 2021)", url: "https://www.cnbc.com/2021/06/15/chinas-bitcoin-miner-exodus-.html" },
  { id: "s5", label: "Rest of World — Why China's crypto cowboys are fleeing to Texas", url: "https://restofworld.org/2021/bitcoin-miners-china-texas/" },
  { id: "s6", label: "Fortune — Inside Whinstone/Riot's Rockdale mine", url: "https://fortune.com/2022/03/08/crypto-bitcoin-mining-texas-whinstone-riot-chad-harris/" },
  { id: "s7", label: "CNBC — Bitcoin mining giants in Rockdale, Texas (Oct 2021)", url: "https://www.cnbc.com/2021/10/31/bitcoin-mining-giants-bitdeer-riot-blockchain-in-rockdale-texas.html" },
  { id: "s8", label: "CNBC — Bitcoin hashrate hits all-time high after China ban (Dec 2021)", url: "https://www.cnbc.com/2021/12/10/bitcoin-network-hashrate-hits-all-time-high-after-china-crypto-ban.html" },
  { id: "s9", label: "Texas Blockchain Council", url: "https://texasblockchaincouncil.org/" },
  { id: "s10", label: "Texas Comptroller — Cryptocurrency in Texas (Fiscal Notes, 2022)", url: "https://comptroller.texas.gov/economy/fiscal-notes/archive/2022/aug/crypto-tx.php" },
  { id: "s11", label: "CoinDesk — Texas Senate passes SB 1751 (April 2023)", url: "https://www.coindesk.com/policy/2023/04/12/texas-senate-passes-bill-to-limit-bitcoin-miners-participation-in-demand-response-programs" },
  { id: "s12", label: "CoinDesk — SB 1751 stopped in House committee (May 2023)", url: "https://www.coindesk.com/policy/2023/05/30/texas-bill-that-would-limit-miners-participation-in-cost-saving-grid-programs-stopped-in-house-committee" },
  { id: "s13", label: "Hunton — Texas Establishes Strategic Bitcoin Reserve (SB 21)", url: "https://www.hunton.com/blockchain-legal-resource/texas-establishes-strategic-bitcoin-reserve" },
  { id: "s14", label: "The Block — Abbott signs strategic Bitcoin reserve bill (June 2025)", url: "https://www.theblock.co/post/359089/texas-governor-greg-abbott-signs-strategic-bitcoin-reserve-bill-into-law" },
  { id: "s15", label: "Texas Legislature — HB 1056 (89R) bill analysis", url: "https://capitol.texas.gov/tlodocs/89R/analysis/html/HB01056S.htm" },
  { id: "s16", label: "CBS19 — Texas Senate approves gold-backed digital currency bill", url: "https://www.cbs19.tv/article/news/local/texas-senate-advances-gold-bill/501-143ce992-afb1-4b6a-a41a-e6d899441da1" },
  { id: "s17", label: "U.S. Attorney's Office, N.D. Tex. — 'Doctor Bitcoin' Pleads Guilty to Illegal Cash-to-Crypto Scheme (June 2021)", url: "https://www.justice.gov/usao-ndtx/pr/doctor-bitcoin-pleads-guilty-illegal-cash-crypto-scheme" },
  { id: "s18", label: "Cointelegraph — 'Doctor Bitcoin' sentenced to federal prison, warns P2P traders (2022)", url: "https://cointelegraph.com/news/bitcoiner-sentenced-to-federal-prison-warns-users-involved-in-otc-trading" },
  { id: "s19", label: "Bitcoin Magazine — Doctor Bitcoin, Jailed For Selling P2P, Warns Others They'll Be Next", url: "https://bitcoinmagazine.com/culture/doctor-bitcoin-jailed-for-selling" },
  { id: "s20", label: "Riot Platforms — August 2023 Production and Operations Update (SEC filing)", url: "https://www.sec.gov/Archives/edgar/data/1167419/000155837023015517/riot-20230906xex99d1.htm" },
  { id: "s21", label: "CNBC — Texas paid Riot $31.7 million to shut down during August heat wave (Sept 2023)", url: "https://www.cnbc.com/2023/09/06/texas-paid-bitcoin-miner-riot-31point7-million-to-shut-down-in-august.html" },
  { id: "s22", label: "The Bond Buyer — Texas makes first purchase for state's Bitcoin reserve: ~$5M in the iShares Bitcoin Trust, November 20, 2025 (placeholder)", url: "https://www.bondbuyer.com/news/texas-makes-first-purchase-for-states-bitcoin-reserve" },
  { id: "s23", label: "Texas Comptroller — Acting Comptroller Kelly Hancock Names Strategic Bitcoin Reserve Advisory Committee Members (May 28, 2026)", url: "https://comptroller.texas.gov/about/media-center/news/20260528-acting-texas-comptroller-kelly-hancock-names-strategic-bitcoin-reserve-advisory-committee-members-1778774749224" },
];

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Is Bitcoin mining legal in Texas?",
    a: "Yes. Bitcoin mining is legal in Texas and requires no state mining license. Large miners enroll with ERCOT as flexible, interruptible load and are paid to power down when the grid is stressed. A 2023 bill to cap that participation, Senate Bill 1751, passed the Texas Senate but died in a House committee.",
  },
  {
    q: "Does Texas have a Strategic Bitcoin Reserve?",
    a: "Yes, and it is funded. Senate Bill 21, signed by Governor Greg Abbott in June 2025, made Texas the first state with a standalone, publicly funded Strategic Bitcoin Reserve, managed by the Texas Comptroller outside the state treasury and limited to digital assets averaging at least $500 billion in market capitalization over two years — a bar only Bitcoin clears. The Comptroller made the first purchase on November 20, 2025 (about $5 million via a spot Bitcoin ETF, as a placeholder) and in May 2026 named an advisory committee and opened a custody RFP to move into directly held Bitcoin.",
  },
  {
    q: "Do you need a license to buy or sell Bitcoin in Texas?",
    a: "Under Texas law, no — Supervisory Memorandum 1037 (2014) holds that Bitcoin is not 'money' under the Texas Money Services Act, so crypto-to-crypto exchanges and selling your own bitcoin do not by themselves require a state money-transmission license. Federal law is separate: a business converting cash to bitcoin for customers must register with FinCEN as a money services business.",
  },
  {
    q: "Why did Bitcoin miners move to Texas?",
    a: "Cheap deregulated power on the ERCOT grid, industrial infrastructure left by plants like Rockdale's Alcoa aluminum smelter, and demand-response programs that pay miners to curtail. The migration accelerated after China banned Bitcoin mining in May 2021, sending displaced hashrate to the cheapest willing grid in the country.",
  },
  {
    q: "What is the largest Bitcoin mine in Texas?",
    a: "Riot's Rockdale facility in Milam County — the former Whinstone site, acquired by Riot in May 2021 for roughly $651 million — grew into the largest single Bitcoin mining operation in North America.",
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

export default function HistoryPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The History of Bitcoin in Texas",
    description:
      "The definitive, sourced account of how Texas became the center of gravity for Bitcoin — from the 2014 Supervisory Memo to the 2025 Strategic Bitcoin Reserve.",
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/history-of-bitcoin-in-texas`,
    datePublished: "2026-06-28",
    dateModified: "2026-08-09",
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
          / History of Bitcoin in Texas
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Cornerstone
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The History of Bitcoin in Texas
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            How a banking memo, a Chinese mining ban, a defunct aluminum smelter,
            and a state reserve law turned Texas into the capital of hard money —
            and the proving ground for what comes next.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published June 28, 2026 · Updated August 9, 2026
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Texas became the capital of Bitcoin through three moves: a 2014
            Texas Department of Banking memo holding that Bitcoin is not
            &ldquo;money&rdquo; and so needs no state license to sell; the 2021
            migration of mining to cheap ERCOT power after China&apos;s mining
            ban; and Senate Bill 21 in 2025, which made Texas the first state
            with a publicly funded Strategic Bitcoin Reserve — funded with its
            first purchase that November.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              On April 3, 2014, Texas issued Supervisory Memorandum 1037 — among
              the first formal state positions that Bitcoin is not
              &ldquo;money&rdquo; under money-transmission law.<C n={1} />
            </li>
            <li>
              In May 2021, Riot acquired the Whinstone site in Rockdale, Texas
              for roughly $651 million — the largest single Bitcoin mine in
              North America.<C n={6} />
            </li>
            <li>
              After China&apos;s May 2021 mining ban idled over half the global
              network, Bitcoin&apos;s hashrate hit a new all-time high by
              December 2021 — much of it relocated to Texas.<C n={4} />
              <C n={8} />
            </li>
            <li>
              In August 2023, Riot earned $31.7 million in ERCOT power credits
              for curtailing during the Texas heat wave — more than triple the
              ~$8.9 million value of the 333 bitcoin it mined that month.
              <C n={20} /><C n={21} />
            </li>
            <li>
              In June 2025, Senate Bill 21 made Texas the first state with a
              standalone, publicly funded Strategic Bitcoin Reserve.<C n={13} />
              <C n={14} />
            </li>
            <li>
              On November 20, 2025, the reserve made its first purchase — about
              $5 million in a spot Bitcoin ETF, held as a placeholder while the
              state contracts a Bitcoin custodian.<C n={22} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-10">
          <p>
            Texas did not become the center of gravity for Bitcoin by accident,
            and not in a single moment. It happened in layers — a regulator&apos;s
            quiet decision, an industrial migration measured in megawatts, and a
            legislature that kept testing how far a state can lean into hard
            money. To understand it, you have to follow the stack from the
            ground up: the law that made room, the energy that drew the
            machines, and the financial future now being built on top.
          </p>

          <h2>2014: The memo that said Bitcoin isn&apos;t money</h2>
          <p>
            The story starts not with miners but with lawyers. On April 3, 2014,
            the Texas Department of Banking issued{" "}
            <strong>Supervisory Memorandum 1037</strong> — among the first formal
            positions any U.S. state took on how its money-transmission law
            applies to virtual currency.<C n={1} /> Its core holding was
            deceptively simple: cryptocurrency is{" "}
            <strong>not &ldquo;money&rdquo;</strong> under the Texas Money Services
            Act, because it is not legal tender issued by a government.
          </p>
          <p>
            The consequences were what made Texas friendly. Because Bitcoin
            wasn&apos;t money, exchanging crypto for crypto — or a business
            selling its own crypto — did not, by itself, require a
            money-transmission license. A license was triggered only when{" "}
            <strong>sovereign (fiat) currency</strong> entered in a transmitting
            capacity.<C n={2} /> Texas offered clarity without inventing a
            custom licensing regime — a sharp contrast with New York&apos;s
            BitLicense, which arrived in 2015 and drove businesses out of the
            state.
          </p>
          <p>
            That single distinction — the base-layer asset sits outside the law,
            fiat-redeemable instruments sit inside it — is the seam everything
            else in this story runs along. The Department reaffirmed and
            sharpened it over time: a 2019 revision, and a further update in
            early 2025 under the new Money Services Modernization Act, made clear
            that <strong>stablecoins</strong> redeemable for sovereign currency
            face closer scrutiny as potential money transmission than Bitcoin
            itself does.<C n={3} /> Texas drew its regulatory line exactly where
            the technology&apos;s own architecture does.
          </p>
          <p>
            The seam has two edges, and one of Dallas&apos;s earliest Bitcoin
            educators found the other one. <strong>Mark Alexander Hopkins</strong>{" "}
            had been in Bitcoin since 2011, when a friend paid for his dinner in
            freshly mined coin. As &ldquo;Doctor Bitcoin,&rdquo; a teaching
            persona he wore online and around north Dallas, he became an early
            channel of knowledge transfer for the technology — selling
            personally mined bitcoin peer-to-peer as much to bring people into
            the network as to profit from it.<C n={19} /> Under Texas law — and,
            by his account, on the assurance of Texas lawmakers he consulted —
            none of that required a license.<C n={19} />
          </p>
          <p>
            Federal law read it differently. Hopkins had never registered with
            FinCEN as a money services business, and when one customer&apos;s
            funds were traced to a lottery scam, what the government charged was
            the licensure itself: in June 2021 he pleaded guilty in the Northern
            District of Texas to a single count of operating an unlicensed
            money-transmitting business — a registration offense, not fraud.
            <C n={17} /> He served federal time, and came out doing what he had
            always done: educating — warning peer-to-peer traders that, as the
            statute is currently interpreted, a state&apos;s clarity is not the
            whole map, and pushing for the federal law to change.<C n={18} />{" "}
            His case sharpened the memo rather than contradicting it:
            Supervisory Memorandum 1037 defines what Texas asks of you — it has
            never defined what Washington does. Hopkins&apos;s full story, told
            straight from the record, opens our{" "}
            <Link href="/doctor-bitcoin">Voices of Texas Bitcoin series</Link>.
          </p>

          <h2>The cypherpunk base layer</h2>
          <p>
            It is worth naming what that memo was, in effect, protecting. Bitcoin
            descends from the cypherpunk project — the decades-long effort to
            build money that settles without a trusted intermediary, secured by
            proof-of-work and held by whoever controls the keys. That ethos —
            trustless settlement and self-custody — is the soul of the thing.
            Texas&apos;s contribution was to take the part of that vision that
            touches the physical world most directly — the energy and the
            machines — and give it the cheapest, most willing home in the
            country.
          </p>

          <h2>2021: The great migration to Rockdale</h2>
          <p>
            The physical chapter opens in <strong>Rockdale</strong>, a small town
            in Milam County that had lost roughly 80% of its workforce when its
            Alcoa aluminum smelter wound down. What a defunct smelter leaves
            behind is exactly what a Bitcoin mine needs: high-voltage
            transmission lines and large substations already built. Miners moved
            into that infrastructure, and the site that became{" "}
            <strong>Whinstone</strong> grew into the largest single Bitcoin mining
            operation in North America.<C n={6} /> In May 2021, Riot acquired
            Whinstone US in a roughly $651 million deal, anchoring the
            town&apos;s reinvention around hashrate.<C n={6} />
          </p>
          <p>
            Then came the accelerant. On May 21, 2021, China moved to ban Bitcoin
            mining outright, and within weeks more than half of the global
            network&apos;s hashrate went dark.<C n={4} /> The displaced machines
            needed somewhere to go, and Texas — with the cheapest power in the
            country and a grid willing to enroll them — won the migration.
            <C n={5} /> Rockdale filled with operators; the network&apos;s
            hashrate not only recovered but hit an all-time high by December of
            the same year.<C n={8} /> By late 2021 the town hosted multiple
            industrial-scale mines.<C n={7} /> The full arc of that town — from
            Alcoa&apos;s crucibles to 700 MW of hashrate — is told in{" "}
            <Link href="/rockdale-texas-bitcoin">the Rockdale story</Link>, and
            every major Texas mine is plotted on{" "}
            <Link href="/bitcoin-mining-map-texas">
              the Texas Bitcoin mining map
            </Link>
            .
          </p>
          <p>
            The coordination layer arrived alongside the machines. The{" "}
            <strong>Texas Blockchain Council</strong>, founded in 2019,
            organized the industry&apos;s lobbying with an explicit goal: make
            Texas the jurisdiction of choice for Bitcoin.<C n={9} />{" "}
            Politicians obliged, and the state comptroller was soon publishing
            primers on the industry it was courting.<C n={10} />
          </p>

          <h2>The grid: friendly, but not unconditionally</h2>
          <p>
            What truly distinguishes Texas is that mining collides with the power
            grid here in a way it does almost nowhere else. ERCOT runs a
            deregulated, islanded market, and miners pitched themselves as a new
            kind of asset: <strong>flexible, interruptible load</strong> that can
            be paid to power down in seconds when demand spikes. After Winter
            Storm Uri exposed the grid&apos;s fragility in February 2021, that
            pitch — curtailable load as a stabilizing feature — became central to
            the industry&apos;s welcome.
          </p>
          <p>
            The pitch paid, literally. In August 2023, during a record heat
            wave, Riot curtailed its Rockdale operation by more than 95% at
            peak-demand hours and earned <strong>$31.7 million</strong> in
            power credits from ERCOT — $24.2 million in curtailment credits and
            $7.4 million from demand response — more than triple the roughly
            $8.9 million value of the 333 bitcoin it mined that month.
            <C n={20} /><C n={21} /> For one summer month, the largest Bitcoin
            mine in North America made more money stabilizing the Texas grid
            than mining Bitcoin on it. No other jurisdiction on earth has
            produced that sentence.
          </p>
          <p>
            But Texas friendliness has a ceiling, and 2023 found it. Senate Bill
            1751 proposed to cap miners&apos; demand-response participation at
            10%, strip their tax abatements, and require large operators to
            register as flexible loads with ERCOT. It passed the Texas Senate in
            a lopsided 30&ndash;1 vote in April 2023.<C n={11} /> And then it{" "}
            <strong>died</strong> — stopped in a House committee, never becoming
            law.<C n={12} /> The episode is the honest counterweight to the
            boosterism: Texas welcomes mining as a grid asset, but is wary of it
            as a subsidy. The friendliness is real, and it is conditional.
            Every bill, memo, and failed vote in this arc sits on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            .
          </p>

          <h2>2025: The money future, in two directions at once</h2>
          <p>
            If 2021 was the physical chapter, 2025 was the financial one — and it
            broke in two directions in the same season. In June 2025, Governor
            Greg Abbott signed <strong>Senate Bill 21</strong>, creating the{" "}
            <strong>Texas Strategic Bitcoin Reserve</strong>: a state-held reserve
            sitting outside the treasury, managed by the Comptroller, able to
            hold Bitcoin or any digital asset averaging at least $500 billion in
            market capitalization over two years — a threshold only Bitcoin
            currently clears.<C n={13} /> Texas became the first state to create a
            standalone, publicly funded Bitcoin reserve, with companion
            legislation shielding it from the treasury&apos;s periodic
            fund-sweeps.<C n={14} />
          </p>
          <p>
            In the same period, Texas advanced the other monetary tradition it
            has long flirted with: <strong>House Bill 1056</strong> directs the
            state to build a transactional digital currency backed by gold and
            silver held in the Texas Bullion Depository, redeemable and spendable
            as legal tender, with a payment system targeted for 2027.
            <C n={15} /><C n={16} /> Hard money in two flavors — the digital-native
            kind secured by proof-of-work, and the ancient kind secured by metal
            in a vault — both written into Texas law within weeks of each other.
          </p>
          <p>
            By late 2025, the reserve stopped being theoretical. On November 20,
            2025, the Comptroller&apos;s office made its first purchase — about
            $5 million in shares of the iShares Bitcoin Trust, a spot Bitcoin
            ETF, described as a temporary placeholder until a dedicated custodian
            is contracted.<C n={22} /> In May 2026, Acting Comptroller Kelly
            Hancock named the reserve&apos;s advisory committee — among them
            Cormint CEO Jamie McAvity, SMU law professor Carla Reyes, and
            CleanSpark CFO Gary Vecchiarelli — and opened a request for proposals
            for the custody and liquidity partner that will move the state from
            an ETF proxy into directly held Bitcoin.<C n={23} /> The distance
            from the 2014 memo is the whole arc in one line: Texas went from
            ruling that Bitcoin is not money to buying it for the state&apos;s
            own account.
          </p>

          <h2>The frontier: programmable money on the hardest base</h2>
          <p>
            The next chapter is already being drafted, and it resolves the
            apparent tension between Bitcoin&apos;s austere base layer and the
            world of stablecoins and smart contracts. The frontier isn&apos;t a
            rival chain — it&apos;s a set of layers that{" "}
            <strong>settle back to Bitcoin</strong>: payment rails like Lightning,
            and asset protocols like Taproot Assets that can issue dollar
            stablecoins on top of Bitcoin&apos;s settlement guarantees. The
            programmability arrives without abandoning the base.
          </p>
          <blockquote>
            Texas is the one place where Bitcoin&apos;s two frontiers — the
            physical and the financial — are both happening in the real world at
            once.
          </blockquote>
          <p>
            That is the throughline. The base layer is the soul: trustless,
            self-custodial, anchored in Texas through the energy and the
            machines. The programmable layer is the frontier: stablecoins and
            smart contracts pulled onto the hardest money, with the state&apos;s
            own reserve and money law as the legal scaffolding. And Texas is the
            ground truth that keeps the whole story specific — not an argument
            about &ldquo;crypto&rdquo; in the abstract, but a place where the
            ledger meets the grid, and the law meets the future.
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
            Every datable claim above is sourced below. This is a research and
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
