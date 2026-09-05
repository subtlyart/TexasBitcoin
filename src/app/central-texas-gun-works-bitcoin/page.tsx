import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  GUNWORKS_LAST_VERIFIED,
  gunworksSources,
  gunworksTimeline,
  type GunworksTimelineKind,
} from "@/lib/gunworks";

const pageUrl = `${site.url}/central-texas-gun-works-bitcoin`;

export const metadata: Metadata = {
  title: "Central Texas Gun Works: The First Gun Store in America to Take Bitcoin",
  description:
    "The sourced record of Central Texas Gun Works, the South Austin firearms retailer and training school that began accepting Bitcoin on January 27, 2014 – the first licensed firearms dealer in Texas, and by Forbes's account the United States, to do so. The first legal Bitcoin firearm sale (February 4, 2014), the Robocoin ATM unveiled on Texas Independence Day, the BitPay de-platforming six weeks in, and where owner Michael Cargill went next: Garland v. Cargill (2024).",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Central Texas Gun Works: The First Gun Store in America to Take Bitcoin",
    description:
      "January 2014, South Austin: a gun store takes Bitcoin, sells a firearm for it, installs the country's second Bitcoin ATM, and gets dropped by its processor – all in six weeks. The record, sourced.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Was Central Texas Gun Works really the first gun store to accept Bitcoin?",
    a: "Central Texas Gun Works was the first licensed firearms retailer in Texas to accept Bitcoin, going live online on January 27, 2014 and in-store on January 28. Forbes described it in March 2014 as the first legal Bitcoin-friendly firearm retailer in the United States. Earlier Bitcoin gun sales existed only on darknet markets; this was the first through a federally licensed dealer running background checks.",
  },
  {
    q: "Did buying a gun with Bitcoin skip the background check?",
    a: "No. Central Texas Gun Works required the same federal Form 4473 and FBI background check of a Bitcoin buyer as of anyone paying cash or card, a point owner Michael Cargill made to Forbes and NBC News in March 2014. Federal law ties the background check to the licensed dealer, not to the payment method.",
  },
  {
    q: "Why did BitPay stop processing payments for Central Texas Gun Works?",
    a: "BitPay froze and dropped the store's account in March 2014, roughly six weeks after launch, citing terms of service that prohibited firearms sales. Cargill said he received no warning and that BitPay had known his business model at sign-up. After trying several processors he moved to Coinvoice.",
  },
  {
    q: "Where was the Central Texas Gun Works Bitcoin ATM?",
    a: "A Robocoin machine, installed with CoinVault ATM, was unveiled on Sunday, March 2, 2014 – Texas Independence Day – at the store's South Bend Center location, 321 W. Ben White Blvd, Suite 203, Austin, during a fundraiser for the Capital Area Food Bank. It followed Robocoin's HandleBar machine, the first Bitcoin ATM in the United States, by ten days.",
  },
  {
    q: "Who is Michael Cargill?",
    a: "Michael Cargill is a twelve-year U.S. Army veteran who founded Central Texas Gun Works in Austin in 2011 and put Bitcoin in it in January 2014. He ran for the Texas House in 2014, sued the City of Austin over its City Hall gun-free zone in 2015, and was the named respondent in Garland v. Cargill, the Supreme Court's 6–3 decision of June 14, 2024 striking down the ATF's bump-stock rule.",
  },
];

const kindStyle: Record<GunworksTimelineKind, { color: string; label: string }> = {
  store: { color: "var(--accent)", label: "The store" },
  rail: { color: "#c98a4e", label: "The rails" },
  city: { color: "var(--star)", label: "The city" },
  court: { color: "#8a7fb5", label: "The court" },
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

// people-figs:start
// Two figures - the record and the counterweight - drawn from the dated,
// sourced facts on this page (Sept 2026). Server-rendered SVG, no client JS.
function GunworksSixWeeksFigure() {
  // Six dated nodes across a single axis, Jan 27 → Mar 12, 2014. x is linear
  // in days from Jan 27 (day 0) to Mar 12 (day 44) across 60..750.
  const nodes = [
    { day: 0, label: "Jan 27", text: ["Bitcoin accepted", "online (BitPay)"], color: "var(--accent)", up: true },
    { day: 8, label: "Feb 4", text: ["First legal Bitcoin", "firearm sale in the US"], color: "var(--accent)", up: false },
    { day: 24, label: "Feb 20", text: ["Robocoin: first US", "Bitcoin ATM, HandleBar"], color: "var(--star)", up: true },
    { day: 34, label: "Mar 2", text: ["Store's Robocoin ATM", "· Texas Independence Day"], color: "var(--star)", up: false },
    { day: 41, label: "Mar 9", text: ["Forbes visits:", "“first in the country”"], color: "var(--star)", up: true },
    { day: 44, label: "Mar 12", text: ["BitPay freezes", "the account"], color: "#c98a4e", up: false },
  ];
  const x = (d: number) => 60 + (d / 44) * 690;
  const axisY = 150;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 280" role="img" aria-label="Six weeks in early 2014: Bitcoin accepted January 27, first firearm sale February 4, the HandleBar ATM February 20, the store's ATM March 2, Forbes March 9, BitPay drop March 12">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">SIX WEEKS · JANUARY 27 TO MARCH 12, 2014</text>
<line x1="40" y1={axisY} x2="770" y2={axisY} stroke="var(--border)" strokeWidth="1.5"/>
{nodes.map((n) => {
  const cx = x(n.day);
  // Three text rows at 15px pitch, stacked away from the axis: date label
  // outermost, then the two description lines nearest the tick.
  const rows = n.up
    ? { label: axisY - 64, line0: axisY - 47, line1: axisY - 32 }
    : { label: axisY + 40, line0: axisY + 55, line1: axisY + 70 };
  return (
    <g key={n.label}>
      <line x1={cx} y1={axisY} x2={cx} y2={n.up ? axisY - 24 : axisY + 24} stroke={n.color} strokeWidth="1.25"/>
      <circle cx={cx} cy={axisY} r="6" fill="var(--surface-2)" stroke={n.color} strokeWidth="2"/>
      <text x={cx} y={rows.label} fontSize="11" fontWeight="600" textAnchor="middle" fill={n.color}>{n.label}</text>
      <text x={cx} y={rows.line0} fontSize="10" textAnchor="middle" fill="var(--foreground)">{n.text[0]}</text>
      <text x={cx} y={rows.line1} fontSize="10" textAnchor="middle" fill="var(--muted-2)">{n.text[1]}</text>
    </g>
  );
})}
<text x="405" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Store releases (AmmoLand, Feb 4, Feb 28); TechCrunch; Forbes; NewsBTC · for two weeks both of America&apos;s Bitcoin ATMs were in Austin</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Six weeks, six dates. A gun store goes live on Bitcoin, sells a firearm for it, watches a bar downtown get the country&apos;s first Bitcoin ATM, installs the second, gets a Forbes visit, and is dropped by its processor. Everything the grassroots era had to teach, compressed into one South Austin storefront between late January and mid-March 2014.
      </figcaption>
    </figure>
  );
}

function GunworksRailsFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="Three payment rails from a customer's wallet to the store: through BitPay, refused in March 2014; through Coinvoice, accepted; and directly wallet to wallet, which no intermediary can refuse">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE RAILS · WHO CAN SAY NO BETWEEN A WALLET AND A STORE</text>
<rect x="28" y="60" width="130" height="150" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="93" y="128" fontSize="12.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Customer</text>
<text x="93" y="146" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Bitcoin wallet</text>
<rect x="652" y="60" width="130" height="150" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="717" y="122" fontSize="12.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Central Texas</text>
<text x="717" y="138" fontSize="12.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Gun Works</text>
<text x="717" y="156" fontSize="10" textAnchor="middle" fill="var(--muted-2)">FFL · Form 4473 · NICS</text>
<line x1="158" y1="85" x2="330" y2="85" stroke="#c98a4e" strokeWidth="1.5"/>
<rect x="330" y="68" width="150" height="34" rx="8" fill="var(--surface-2)" stroke="#c98a4e" strokeWidth="1.25"/>
<text x="405" y="89" fontSize="11" fontWeight="600" textAnchor="middle" fill="#c98a4e">BitPay · Jan 27 → Mar 12</text>
<line x1="480" y1="85" x2="560" y2="85" stroke="#c98a4e" strokeWidth="1.5" strokeDasharray="4 4"/>
<line x1="552" y1="75" x2="572" y2="95" stroke="#c98a4e" strokeWidth="2.5"/>
<line x1="572" y1="75" x2="552" y2="95" stroke="#c98a4e" strokeWidth="2.5"/>
<text x="606" y="89" fontSize="10" textAnchor="middle" fill="#c98a4e">refused</text>
<line x1="158" y1="135" x2="330" y2="135" stroke="var(--star)" strokeWidth="1.5"/>
<rect x="330" y="118" width="150" height="34" rx="8" fill="var(--surface-2)" stroke="var(--star)" strokeWidth="1.25"/>
<text x="405" y="139" fontSize="11" fontWeight="600" textAnchor="middle" fill="var(--star)">Coinvoice · from Mar 2014</text>
<line x1="480" y1="135" x2="652" y2="135" stroke="var(--star)" strokeWidth="1.5"/>
<line x1="158" y1="185" x2="652" y2="185" stroke="var(--accent)" strokeWidth="2"/>
<text x="405" y="178" fontSize="11" fontWeight="600" textAnchor="middle" fill="var(--accent)">wallet → wallet · no intermediary</text>
<text x="405" y="204" fontSize="10" textAnchor="middle" fill="var(--muted-2)">the rail Bitcoin was built for; the one nobody can freeze</text>
<text x="405" y="238" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">NewsBTC (Mar 12, 2014); NBC News (Mar 30, 2014) · the network never refused Cargill a payment – a company did</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The rails. Three ways a customer&apos;s Bitcoin could reach the store: through BitPay, which refused after six weeks; through Coinvoice, which did not; or directly, wallet to wallet, which no company is positioned to refuse. Every payment ran through a federally licensed dealer regardless. The lesson of 2014 was about the middle box, not the ends.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function CentralTexasGunWorksBitcoinPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Central Texas Gun Works: The First Gun Store in America to Take Bitcoin",
    description:
      "The sourced record of the South Austin firearms retailer that began accepting Bitcoin on January 27, 2014: the first legal Bitcoin firearm sale, the Robocoin ATM, the BitPay de-platforming, and owner Michael Cargill's road to Garland v. Cargill.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "LocalBusiness", name: "Central Texas Gun Works", address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX" } },
      { "@type": "Person", name: "Michael Cargill" },
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
        name: "Central Texas Gun Works and Bitcoin",
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
          / Central Texas Gun Works &amp; Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The grassroots era
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Central Texas Gun Works: The First Gun Store in America to Take Bitcoin
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Before the reserve, before the mines, before the Department of
            Banking had said a word, Texas had a street-level Bitcoin economy
            of a few dozen merchants. Most left no record. One left a trail of
            dated press releases, a Forbes video, an NBC story, and a Supreme
            Court opinion. This page is the merchant wing of the record, and it
            opens where the documentation is best: a gun store on Ben White
            Boulevard in the winter of 2014.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 5, 2026 · Updated{" "}
            {GUNWORKS_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Central Texas Gun Works, a South Austin firearms retailer and
            training school owned by Army veteran Michael Cargill, began
            accepting Bitcoin on January 27, 2014 – the first licensed
            firearms dealer in Texas, and by Forbes&apos;s account the United
            States, to do so. It completed the first legal Bitcoin firearm
            sale on February 4, 2014, and unveiled one of the country&apos;s
            first Bitcoin ATMs on March 2.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Central Texas Gun Works began taking Bitcoin for online orders
              on January 27, 2014 and for all in-store sales – firearms,
              ammunition, accessories, and CHL classes – on January 28, 2014.
              <C n={1} />
            </li>
            <li>
              The store recorded the first legal Bitcoin firearm purchase in
              the United States on February 4, 2014; the buyer found the shop
              through a syndicated newsfeed and had never visited it.
              <C n={2} />
            </li>
            <li>
              Forbes called Central Texas Gun Works &ldquo;the first legal
              Bitcoin-friendly firearm retail business in the country, if not
              the world&rdquo; on March 9, 2014.<C n={4} />
            </li>
            <li>
              BitPay, the store&apos;s original processor, froze and dropped
              the account in March 2014 under its no-firearms terms; Cargill
              moved to Coinvoice.<C n={5} /><C n={6} />
            </li>
            <li>
              On March 2, 2014 – Texas Independence Day – the store unveiled a
              Robocoin Bitcoin ATM at 321 W. Ben White Blvd, ten days after
              Robocoin switched on the first US Bitcoin ATM at HandleBar
              downtown.<C n={7} /><C n={8} />
            </li>
            <li>
              Owner Michael Cargill was the named respondent in Garland v.
              Cargill, the Supreme Court&apos;s 6–3 bump-stock decision of
              June 14, 2024.<C n={11} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the storefront to the Supreme Court
            </h2>
            <span className="text-xs text-muted-2">2014 → 2024</span>
          </div>
          <ol className="mt-5 space-y-4">
            {gunworksTimeline.map((e) => {
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
          <h2>Who is Michael Cargill, and why did a gun store take Bitcoin?</h2>
          <p>
            Michael Cargill is a twelve-year US Army veteran who opened Central
            Texas Gun Works in Austin in 2011, after an assault on his
            grandmother pushed him toward firearms education.<C n={12} /> By
            2014 he was a Texas DPS-certified concealed-handgun instructor
            with eight years&apos; standing and more than 7,000 students behind
            him, running a retail counter and a training school out of the
            South Bend Center on Ben White Boulevard.<C n={7} />
          </p>
          <p>
            His stated reasons for adopting Bitcoin were a merchant&apos;s
            reasons, not a maximalist&apos;s: lower processing costs than
            cards, no chargebacks, faster settlement, and less sensitive
            customer data to protect. &ldquo;We hope by using this currency in
            Austin, it will help to generate new customers and attract more
            visibility for our business,&rdquo; he said in the January 2014
            announcement.<C n={1} /> The visibility part worked immediately.
            Cargill was on Fox News on January 29, two days after going live,
            and Forbes sent Andy Greenberg to the store within six weeks.
            <C n={3} /><C n={4} /> This was the same season the Texas
            Department of Banking was drafting the memo that would say Bitcoin
            is not money – the seam{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>{" "}
            runs along. Cargill was operating on the merchant side of that
            seam before the state had drawn it.
          </p>

          <h2>What was the first Bitcoin gun sale?</h2>
          <p>
            The first transaction landed on February 4, 2014, and it is a
            small case study in what Bitcoin actually did for a retailer. The
            buyer had never visited the store. They found it through an online
            newsfeed, paid from a personal wallet, and completed the purchase
            remotely – the same path an online shopper takes anywhere, applied
            to a category most payment networks treated as radioactive.
            <C n={2} /> The store describes it as the first legal online
            firearm sale by Bitcoin in the United States. The gun still
            shipped to a licensed dealer for transfer and the buyer still
            cleared a federal background check. Bitcoin changed how the money
            moved, not how the firearm did.
          </p>

          <h2>Was buying a gun with Bitcoin anonymous?</h2>
          <p>
            No, and Cargill made a point of saying so. As Greenberg reported
            after visiting the shop, Cargill required the same Form 4473
            paperwork and FBI background check of a Bitcoin customer as of
            anyone paying cash.<C n={4} /> The store was answering the obvious
            question of early 2014 – Silk Road had been seized only four
            months earlier – and the answer was that a licensed dealer is a
            licensed dealer regardless of the payment rail. NBC News made the
            same point at the end of March, noting that Cargill and
            TrackingPoint&apos;s Oren Schauble, whose Austin precision-rifle
            company had also begun taking Bitcoin, both ran checks on every
            sale, and that federal law does not care how a buyer
            pays.<C n={6} />
          </p>

          <GunworksSixWeeksFigure />

          <h2>Why did BitPay drop the store?</h2>
          <p>
            Roughly six weeks in, BitPay froze Central Texas Gun Works&apos;
            account and cut it off, citing terms of service that prohibited
            firearms. Cargill said there was no warning and that BitPay had
            known his business model when he signed up.<C n={5} /> He tried
            several processors before landing on Coinvoice, which is what he
            was using by the time NBC reported the story on March
            30.<C n={6} />
          </p>
          <p>
            This is the most instructive part of the episode. The store
            discovered in 2014 what the wider industry would spend the next
            decade learning: a Bitcoin payment processor is a company, with a
            compliance department and a bank, and it can drop a merchant
            exactly as Visa can. Bitcoin the network never refused Cargill a
            payment. An intermediary did. The pure peer-to-peer version –
            buyer&apos;s wallet to store&apos;s wallet, no processor – was
            available the whole time, and it is the rail the protocol was
            designed around.
          </p>

          <h2>What about the Bitcoin ATM?</h2>
          <p>
            On Sunday, March 2, 2014, the store hosted a Texas Independence
            Day event with State Rep. Larry Gonzales, live music, free t-shirts
            for the first 100 guests, and a donation drive for the Capital
            Area Food Bank. The centerpiece was a Robocoin Bitcoin ATM,
            installed in partnership with CoinVault ATM.<C n={7} /> Robocoin
            had switched on the first Bitcoin ATM in the United States ten
            days earlier at HandleBar on East 5th Street.<C n={8} /><C n={9} />{" "}
            For a stretch of early March 2014, both of America&apos;s Bitcoin
            ATMs sat inside Austin city limits – one in a bar, one in a gun
            store. That pairing says something true about the city&apos;s
            Bitcoin culture then, and about why the inaugural Texas Bitcoin
            Conference opened at Circuit of the Americas three days
            later.<C n={10} /> &ldquo;Austin is quickly becoming a hub for new
            technology and innovative products,&rdquo; Cargill said at the
            unveiling.<C n={7} /> He was early to that, too. The Austin
            builders who would give the city its intellectual center –{" "}
            <Link href="/satoshi-nakamoto-institute">
              the Satoshi Nakamoto Institute
            </Link>
            , founded four months before – were writing their first essays in
            the same city the same spring.
          </p>

          <h2>The honest counterweight: the payment method was never the point</h2>
          <p>
            Gun-safety groups did not see the story the way the tech press
            did. Brian Malte of the Brady Campaign told NBC that Bitcoin was
            beside the point: the problem was the absence of a federal
            background-check requirement on private sales, which Texas does
            not mandate.<C n={6} /> That critique was about Texas gun law, not
            about Bitcoin, but the store&apos;s announcement gave it a fresh
            news hook, and it deserves to stand here in full. The BitPay
            episode also cuts both ways. Cargill was the aggrieved party, but
            BitPay was within its published terms, and a merchant who builds
            on a processor accepts the processor&apos;s rules. The lesson is
            about intermediaries, not villains.
          </p>

          <GunworksRailsFigure />

          <h2>Where did Michael Cargill go next?</h2>
          <p>
            Cargill ran for the Texas House in 2014 and lost. He sued the City
            of Austin in 2015 over its gun-free zone at City Hall and won in
            2019.<C n={12} /> And on June 14, 2024 he was the named respondent
            in <em>Garland v. Cargill</em>, the 6–3 Supreme Court decision
            holding that the ATF exceeded its statutory authority when it
            classified bump stocks as machine guns.<C n={11} /> That
            trajectory is the reason this story belongs on TexasBitcoin. The
            man who put Bitcoin in a South Austin gun store in January 2014
            went on to win one of the decade&apos;s defining Second Amendment
            cases. Texas Bitcoin history and Texas political history share
            more personnel than either side usually notices – the same
            pattern{" "}
            <Link href="/greg-abbott-bitcoin">Greg Abbott and Bitcoin</Link>{" "}
            records from the other direction, with a gubernatorial campaign
            taking Bitcoin donations three months after Cargill&apos;s store
            did.
          </p>
          <p>
            The store still accepts Bitcoin.<C n={13} /> As of September 2026
            it is among the longest-running Bitcoin merchants in Texas, and
            the best-documented survivor of{" "}
            <Link href="/early-bitcoin-merchants-texas">
              a grassroots era
            </Link>{" "}
            that the state would take another decade to catch up to – in{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Strategic Bitcoin Reserve
            </Link>{" "}
            and everything that followed.
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
            Primary record first: the store&apos;s own dated releases; Forbes
            and NBC News for the visits and the background-check question;
            NewsBTC for the BitPay drop; TechCrunch and KUT for the HandleBar
            ATM; the Supreme Court&apos;s opinion for Garland v. Cargill. The
            &ldquo;first in the country&rdquo; claim is Forbes&apos;s and the
            store&apos;s; no contemporaneous source contradicts it, and none
            independently proves it. This is a research and reference article,
            not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {gunworksSources.map((s) => (
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
