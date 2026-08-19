import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { SeamMark } from "@/components/seam-mark";

export const metadata: Metadata = {
  title: "Rockdale: From Alcoa Smelter to Bitcoin Mine",
  description:
    "Alcoa's smelter powered Rockdale, Texas for 56 years; 2008 hollowed it out. How Bitmain, Whinstone, and Riot turned the land into a 700 MW Bitcoin mine.",
  alternates: { canonical: `${site.url}/rockdale-texas-bitcoin` },
  openGraph: {
    type: "article",
    title: "The Rockdale Story: From Alcoa Smelter to Bitcoin Mining Capital",
    description:
      "A town-revival story told in megawatts: Alcoa 1952–2008, the idle years, Bitmain's arrival, Whinstone's build, and Riot's 700 MW flagship — sourced end to end.",
    url: `${site.url}/rockdale-texas-bitcoin`,
  },
};

// Sources — numbered, primary-first. Every datable claim in the piece points here.
const sources = [
  { id: "s1", label: "Alcoa Inc. — press release, September 30, 2008 (SEC exhibit): Alcoa to curtail remaining Rockdale smelting capacity", url: "https://www.sec.gov/Archives/edgar/data/4281/000119312508205949/dex99.htm" },
  { id: "s2", label: "Alcoa Corporation — Alcoa Sells Former Rockdale Industrial Site for $240 Million (November 1, 2021)", url: "https://news.alcoa.com/press-releases/press-release-details/2021/Alcoa-Sells-Former-Rockdale-Industrial-Site-for-240-Million/default.aspx" },
  { id: "s3", label: "Riot Blockchain (GlobeNewswire) — Riot to Acquire Whinstone, Creating a US-Based Industry Leader in Bitcoin Mining (April 8, 2021)", url: "https://www.globenewswire.com/news-release/2021/04/08/2206616/0/en/Riot-to-Acquire-Whinstone-Creating-a-US-Based-Industry-Leader-in-Bitcoin-Mining.html" },
  { id: "s4", label: "Riot Blockchain (GlobeNewswire) — Riot Completes Acquisition of Whinstone US (May 26, 2021)", url: "https://www.globenewswire.com/en/news-release/2021/05/26/2236906/0/en/Riot-Blockchain-Completes-Acquisition-of-Whinstone-US-Creating-Leading-North-American-Bitcoin-Mining-Company.html" },
  { id: "s5", label: "Riot Platforms — Rockdale facility (700 MW developed capacity)", url: "https://www.riotplatforms.com/bitcoin-mining/rockdale/" },
  { id: "s6", label: "Bitmain (PR Newswire) — Bitmain fulfills commitment to Rockdale, Texas, with launch of mining farm to construct 50MW facility (October 21, 2019)", url: "https://www.prnewswire.com/news-releases/bitmain-fulfills-commitment-to-rockdale-texas-with-launch-of-cryptocurrency-mining-farm-to-construct-50mw-facility-300941759.html" },
  { id: "s7", label: "City of Rockdale, Texas — official history", url: "https://www.rockdaletx.gov/155/History" },
  { id: "s8", label: "CoinDesk — Why Bitmain Is Building the World's Largest Bitcoin Mine in Rural Texas (October 22, 2019)", url: "https://www.coindesk.com/markets/2019/10/22/why-bitmain-is-building-the-worlds-largest-bitcoin-mine-in-rural-texas" },
  { id: "s9", label: "Fortune — Inside Whinstone/Riot's Rockdale mine (March 8, 2022)", url: "https://fortune.com/2022/03/08/crypto-bitcoin-mining-texas-whinstone-riot-chad-harris/" },
  { id: "s10", label: "CNBC — Bitcoin mining giants Bitdeer, Riot Blockchain in Rockdale, Texas (October 31, 2021)", url: "https://www.cnbc.com/2021/10/31/bitcoin-mining-giants-bitdeer-riot-blockchain-in-rockdale-texas.html" },
  { id: "s11", label: "FOX 7 Austin — Rockdale boom: Bitcoin mining companies move to rural Texas town (November 4, 2021)", url: "https://www.fox7austin.com/news/rockdale-boom-bitcoin-mining-companies-move-to-rural-texas-town" },
  { id: "s12", label: "Global Energy Monitor — Bitdeer Rockdale facility profile (~170 MW operating)", url: "https://www.gem.wiki/BitDeer_Douglas_County_facility" },
  { id: "s13", label: "CNBC — Texas paid Riot $31.7 million to shut down during August 2023 heat wave (September 6, 2023)", url: "https://www.cnbc.com/2023/09/06/texas-paid-bitcoin-miner-riot-31point7-million-to-shut-down-in-august.html" },
];

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Why is Rockdale, Texas the Bitcoin mining capital of North America?",
    a: "Because Alcoa's shuttered aluminum smelter left Rockdale with massive high-voltage power infrastructure and nothing to feed it. Bitmain broke ground on the vacant Alcoa land in 2018, Whinstone built the giant next door, and Riot's 700 MW Rockdale facility is now the largest single Bitcoin mine in North America.",
  },
  {
    q: "What happened to the Alcoa plant in Rockdale?",
    a: "Alcoa opened its Rockdale aluminum works in 1952 and curtailed the smelter's last production on September 30, 2008, citing uncompetitive power supply and market conditions. The plant was permanently closed in 2017, and in October 2021 Alcoa sold the 31,000-acre site for $240 million.",
  },
  {
    q: "Who owns the biggest Bitcoin mine in Rockdale?",
    a: "Riot Platforms. Riot completed its acquisition of Whinstone US on May 26, 2021, in a deal valued at roughly $651 million — $80 million in cash plus 11.8 million Riot shares — and expanded the site to 700 MW of developed capacity, the largest single Bitcoin mining facility in North America.",
  },
  {
    q: "Is Bitmain still mining Bitcoin in Rockdale?",
    a: "The site Bitmain launched in October 2019 is now operated by Bitdeer, the mining company spun off from Bitmain in 2021. Bitdeer's Rockdale campus, roughly 170 MW, runs on the same former Alcoa land — directly beside Riot's 700 MW flagship in Milam County.",
  },
  {
    q: "How many jobs has Bitcoin mining created in Rockdale?",
    a: "As of November 2021, Whinstone employed about 150 people at the Rockdale site, with more than 200 construction workers on the expansion. That is real payroll but well below the roughly 1,500 Alcoa employed at its peak — the honest trade of a capital-intensive industry replacing a labor-intensive one.",
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

// One original visual: the Rockdale site's transformation, era by era.
// Server-rendered inline SVG — no client JS. Animation is CSS-only and
// disabled under prefers-reduced-motion.
function RockdaleTimeline() {
  return (
    <figure className="mt-10 rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg
        viewBox="0 0 640 330"
        role="img"
        aria-labelledby="rk-title rk-desc"
        className="h-auto w-full"
      >
        <title id="rk-title">The Rockdale transformation timeline</title>
        <desc id="rk-desc">
          One site, five eras: Alcoa&apos;s aluminum smelter from 1952 to its
          2008 curtailment, the idle years, Bitmain&apos;s 50 MW launch in
          2019, Whinstone&apos;s build and Riot&apos;s 2021 acquisition, and
          the 700 MW flagship today — drawn as a falling-then-rising arc.
        </desc>
        <style>{`
          .rk-arc {
            stroke-dasharray: 900;
            stroke-dashoffset: 900;
            animation: rk-draw 2.4s ease-out 0.3s forwards;
          }
          @keyframes rk-draw {
            to { stroke-dashoffset: 0; }
          }
          @media (prefers-reduced-motion: reduce) {
            .rk-arc { animation: none; stroke-dashoffset: 0; }
          }
        `}</style>

        {/* The fortune arc: plateau, fall, silence, rise */}
        <path
          className="rk-arc"
          d="M30,150 L265,150 C300,150 308,232 338,236 L368,236 C408,232 422,182 458,161 C494,140 520,122 552,100 C582,79 602,66 616,58"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Milestone markers */}
        <circle cx="30" cy="150" r="5" fill="var(--muted)" stroke="var(--surface)" strokeWidth="2" />
        <circle cx="265" cy="150" r="5" fill="var(--muted)" stroke="var(--surface)" strokeWidth="2" />
        <circle cx="352" cy="236" r="4" fill="var(--muted-2)" stroke="var(--surface)" strokeWidth="2" />
        <circle cx="458" cy="161" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2" />
        <circle cx="552" cy="100" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2" />
        <circle cx="616" cy="58" r="6" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2" />

        {/* Milestone labels */}
        <text x="30" y="126" fontSize="15" textAnchor="start">
          <tspan fill="var(--accent)" fontWeight="600">1952</tspan>
          <tspan fill="var(--muted)"> · Alcoa opens</tspan>
        </text>
        <text x="265" y="126" fontSize="15" textAnchor="middle">
          <tspan fill="var(--accent)" fontWeight="600">2008</tspan>
          <tspan fill="var(--muted)"> · Smelter curtailed</tspan>
        </text>
        <text x="352" y="262" fontSize="15" textAnchor="middle" fill="var(--muted-2)">
          Idle years
        </text>
        <text x="440" y="196" fontSize="15" textAnchor="middle">
          <tspan fill="var(--accent)" fontWeight="600">2019</tspan>
          <tspan fill="var(--muted)"> · Bitmain: 50 MW</tspan>
        </text>
        <text x="560" y="82" fontSize="15" textAnchor="end">
          <tspan fill="var(--accent)" fontWeight="600">2021</tspan>
          <tspan fill="var(--muted)"> · Riot buys Whinstone</tspan>
        </text>
        <text x="628" y="40" fontSize="15" textAnchor="end">
          <tspan fill="var(--accent)" fontWeight="700">Today · 700 MW</tspan>
        </text>

        {/* Era band — aluminum, silence, hashrate */}
        <rect x="30" y="282" width="235" height="16" rx="3" fill="var(--surface-2)" stroke="var(--border)" />
        <rect x="265" y="282" width="103" height="16" rx="3" fill="var(--surface-2)" fillOpacity="0.45" stroke="var(--border)" />
        <rect x="368" y="282" width="64" height="16" rx="3" fill="var(--accent)" fillOpacity="0.3" />
        <rect x="432" y="282" width="120" height="16" rx="3" fill="var(--accent)" fillOpacity="0.55" />
        <rect x="552" y="282" width="64" height="16" rx="3" fill="var(--accent)" fillOpacity="0.85" />

        {/* Year ticks under the era band */}
        <text x="30" y="318" fontSize="13" fill="var(--muted-2)" textAnchor="start">1952</text>
        <text x="265" y="318" fontSize="13" fill="var(--muted-2)" textAnchor="middle">2008</text>
        <text x="368" y="318" fontSize="13" fill="var(--muted-2)" textAnchor="middle">2018</text>
        <text x="432" y="318" fontSize="13" fill="var(--muted-2)" textAnchor="middle">2020</text>
        <text x="552" y="318" fontSize="13" fill="var(--muted-2)" textAnchor="middle">2021</text>
        <text x="616" y="318" fontSize="13" fill="var(--muted-2)" textAnchor="end">today</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The Rockdale arc: seven decades on one patch of Milam County —
        aluminum, silence, then hashrate. Timeline is narrative, not to
        scale; every milestone is sourced in the article below.
      </figcaption>
    </figure>
  );
}

export default function RockdalePage() {
  const pageUrl = `${site.url}/rockdale-texas-bitcoin`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "The Rockdale Story: How a Dying Aluminum Town Became the Bitcoin Mining Capital of North America",
    description:
      "The sourced story of Rockdale, Texas: Alcoa's smelter era, the 2008 curtailment, Bitmain's arrival, Whinstone's build, Riot's ~$651 million acquisition, and the 700 MW flagship today.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
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
        name: "The Rockdale Story",
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

      <article className="mx-auto max-w-3xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / The Rockdale Story
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Story · Milam County
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Rockdale Story: How a Dying Aluminum Town Became the Bitcoin
            Mining Capital of North America
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            For 56 years, Rockdale turned cheap power into aluminum. Then the
            smelter went quiet — and a decade later, the same wires started
            turning cheap power into the hardest money ever made.
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
            Rockdale, Texas became the Bitcoin mining capital of North America
            because its shuttered Alcoa aluminum smelter left behind the
            high-voltage power infrastructure industrial mining needs. Bitmain
            arrived on the old Alcoa land in 2018, Whinstone built the giant
            next door, and Riot acquired Whinstone in May 2021 for roughly
            $651 million. Riot&apos;s Rockdale facility now has 700 MW of
            developed capacity — the largest single Bitcoin mine in North
            America.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Alcoa opened its aluminum works near Rockdale, Texas in 1952,
              and at its zenith the plant employed roughly 1,500 people.
              <C n={7} />
            </li>
            <li>
              On September 30, 2008, Alcoa curtailed the Rockdale
              smelter&apos;s remaining ~150,000 metric tons of annual
              production, citing uncompetitive power supply — laying off about
              660 employees on top of roughly 160 cut earlier that year.
              <C n={1} />
            </li>
            <li>
              Bitmain launched a 50 MW Bitcoin mining facility on the former
              Alcoa property on October 21, 2019, with plans to expand beyond
              300 MW.<C n={6} />
            </li>
            <li>
              Riot completed its acquisition of Whinstone US on May 26, 2021,
              in a deal of $80 million cash plus 11.8 million Riot shares —
              an implied value of roughly $651 million.<C n={3} /><C n={4} />
            </li>
            <li>
              Riot&apos;s Rockdale facility has 700 MW of developed capacity —
              the largest single Bitcoin mining facility in North America.
              <C n={5} />
            </li>
            <li>
              On October 29, 2021, Alcoa sold the 31,000-acre former Rockdale
              site for $240 million to a Texas-based real estate group.
              <C n={2} />
            </li>
          </ul>
        </div>

        <RockdaleTimeline />

        <div className="prose-tx mt-10">
          <p>
            Every chapter of{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>{" "}
            runs through one small town in Milam County. Rockdale is where the
            industrial era of American Bitcoin mining began — not because
            anyone planned it that way, but because a dying aluminum town was
            sitting on the one thing the new industry could not build fast:
            wires. This is the story of that transfer, era by era, from
            crucible to hashboard.
          </p>

          <h2>What did Alcoa build in Rockdale?</h2>
          <p>
            Alcoa — the Aluminum Company of America — opened an aluminum
            processing plant and its own power generating plant near Rockdale
            in 1952, and for over half a century the operation was the
            economic spine of Milam County.<C n={7} /> At its zenith, the
            plant employed roughly 1,500 people, offering some of the
            best-paying industrial work in central Texas.<C n={7} />
          </p>
          <p>
            The detail that matters for everything that follows is what an
            aluminum smelter actually is: a machine for turning enormous
            amounts of cheap electricity into value. Smelting aluminum is so
            power-hungry that the metal is sometimes called &ldquo;congealed
            electricity,&rdquo; and Alcoa built Rockdale around that equation
            — dedicated generation, heavy substations, and high-voltage
            transmission feeding a single industrial customer. Decades later,
            a different industry would arrive with exactly the same equation
            and find the hard part already built.
          </p>

          <h2>Why did the Alcoa smelter close in 2008?</h2>
          <p>
            Alcoa curtailed the last of Rockdale&apos;s smelting on September
            30, 2008, citing uncompetitive power supply and collapsing market
            conditions.<C n={1} /> The end came in two blows in a single year:
            in June 2008 the company idled three of the plant&apos;s six
            potlines — about 120,000 metric tons of annual production — over
            local power-supply problems, and the September announcement
            curtailed the remaining ~150,000 metric tons.<C n={1} /> About
            660 employees were laid off in the final round, on top of roughly
            160 impacted earlier in the year.<C n={1} /> The plant never
            restarted; Alcoa permanently closed the site in 2017.<C n={2} />
          </p>
          <p>
            For Rockdale, the numbers were existential. The closure ultimately
            erased an estimated 1,700 jobs tied to the Alcoa complex and
            roughly 30% of Milam County&apos;s tax revenue.<C n={11} /> Abi
            Vasquez, who later joined Whinstone as a project administrator,
            put the decade after plainly: &ldquo;It was becoming a ghost
            town.&rdquo;<C n={11} /> What remained on the land was silence —
            and an industrial-scale electrical system with nothing left to
            feed.
          </p>

          <h2>Why did Bitmain pick Rockdale in 2018?</h2>
          <p>
            Bitmain, then the world&apos;s dominant maker of Bitcoin mining
            hardware, chose Rockdale because the smelter&apos;s death left
            behind exactly what industrial mining needs: big substations and
            high-voltage lines already permitted, built, and idle. In 2018 the
            Beijing-based company inked a deal with local officials to mine
            Bitcoin on the vacant Alcoa property, pledging an investment of
            $500 million.<C n={8} /><C n={10} />
          </p>
          <p>
            Then came the stumble — and it belongs in the record. When Bitcoin
            fell roughly 75% from its 2018 highs, Bitmain shelved the Rockdale
            project in early 2019, and a town that had already been promised
            one revival watched it stall.<C n={8} /> The recovery was as fast
            as the retreat: once the price turned, Bitmain raced to finish,
            and on October 21, 2019 it launched a 50 MW mining farm on the
            former smelter land, with plans to expand past 300 MW.<C n={6} />{" "}
            &ldquo;Once the price turned around, we ramped up,&rdquo; said
            Clint Brown, Bitmain&apos;s project manager on the site.
            &ldquo;And it was like, &lsquo;hurry up, we need to get this
            done.&rsquo;&rdquo;<C n={8} /> At the ribbon-cutting, Rockdale
            Mayor John King made the town&apos;s bet explicit:
            &ldquo;There&apos;s going to be jobs, there&apos;s going to be
            revenue. We&apos;re going to see great things coming in the
            future.&rdquo;<C n={8} />
          </p>

          <h2>How did Whinstone build North America&apos;s largest Bitcoin mine?</h2>
          <p>
            Whinstone US built the largest Bitcoin mine in North America by
            out-building everyone on the same former Alcoa land — a
            100-acre campus of warehouse-scale buildings begun while most of
            the industry was still recovering from the 2018 winter.<C n={9} />{" "}
            The company&apos;s co-founder Chad Harris, a Louisiana
            entrepreneur with no mining background, was blunt about the site
            selection: &ldquo;What drove us to Texas was two things. One, A;
            we needed power.&rdquo;<C n={11} /> By spring 2021 the Whinstone
            facility had 300 MW of developed capacity, with infrastructure in
            place to rapidly add 450 MW more.<C n={3} />
          </p>
          <p>
            That build is what turned Rockdale from an experiment into a
            capital. Bitmain proved the site could host industrial mining;
            Whinstone proved it could host the biggest mine on the continent —
            three buildings, each longer than three football fields, filled
            with machines doing one job: converting the smelter&apos;s old
            power capacity into hashrate.<C n={11} />
          </p>

          <h2>What did Riot pay for Rockdale — and how big is it now?</h2>
          <p>
            Riot agreed to acquire Whinstone US on April 8, 2021, for $80
            million in cash plus 11.8 million shares of Riot stock — an
            implied transaction value of approximately $651 million — and
            closed the deal on May 26, 2021.<C n={3} /><C n={4} /> Riot CEO
            Jason Les called it &ldquo;the most significant milestone in
            Riot&apos;s history.&rdquo;<C n={4} /> The company then executed
            the expansion Whinstone had designed, taking the site to{" "}
            <strong>700 MW of developed capacity</strong> — the largest
            single Bitcoin mining facility in North America.<C n={5} />
          </p>
          <p>
            And Riot is not alone on the old smelter land. Next door sits
            Bitdeer — the mining company spun off from Bitmain in 2021 —
            operating the campus where Bitmain first broke ground, at roughly
            170 MW.<C n={10} /><C n={12} /> One former aluminum site in Milam
            County now hosts two of the largest Bitcoin mines on the
            continent; you can see both, alongside every other major Texas
            site, on{" "}
            <Link href="/bitcoin-mining-map-texas">
              the Texas Bitcoin mining map
            </Link>
            . The site even inherited the smelter&apos;s old relationship
            with the grid, inverted: in August 2023, ERCOT paid Riot $31.7
            million in power credits to curtail Rockdale during the Texas
            heat wave — the mine acting as the grid&apos;s shock absorber
            rather than its burden.<C n={13} />
          </p>

          <h2>What does Bitcoin mean for Milam County today?</h2>
          <p>
            Bitcoin gave Rockdale its second industrial life. As of November
            2021, Whinstone employed about 150 people with more than 200
            construction workers on the expansion, and the county&apos;s
            economic development office was fielding two to three calls a
            week from miners looking for a way in.<C n={11} /> The land
            itself repriced: on October 29, 2021, Alcoa sold the 31,000-acre
            former Rockdale site — mostly idle since 2008 — for $240 million
            to a Texas real estate group planning broader redevelopment.
            <C n={2} /> Mayor John King, who had bet on the miners at that
            2019 ribbon-cutting, described the change in the town&apos;s own
            terms: &ldquo;There is a heartbeat.&rdquo;<C n={11} />
          </p>
          <blockquote>
            The same wires, the same substations, the same deal with cheap
            Texas power — first aluminum, now Bitcoin. Rockdale never changed
            its business model. It changed its product.
          </blockquote>

          <h2>The honest counterweight: megawatts aren&apos;t headcount</h2>
          <p>
            A Bitcoin mine will never employ a town the way a smelter did,
            and Rockdale knows it. Alcoa&apos;s plant employed roughly 1,500
            people at its peak; Whinstone employed about 150 in late 2021
            while building the largest Bitcoin mine on the continent.
            <C n={7} /><C n={11} /> Data centers are
            capital-intensive, not labor-intensive — that is the honest trade
            at the heart of this story, and locals said so from the start.
            &ldquo;People are a little skeptical, because nobody really
            understands how it works,&rdquo; said Royce Hudson, a 73-year-old
            former Alcoa worker, at Bitmain&apos;s 2019 opening.<C n={8} />
          </p>
          <p>
            The bullish case doesn&apos;t require pretending otherwise. What
            the mines restored is not the smelter&apos;s payroll but its{" "}
            <strong>gravity</strong>: a tax base, construction waves, an
            anchor tenant that makes the county legible to every industry
            that needs power. The frontier question for Milam County&apos;s
            next decade is what compounds around 870-plus megawatts of
            developed mining capacity — and Rockdale, twice now, has been the
            town that
            finds out first.
            <SeamMark to="/the-seam" step={4} />
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
