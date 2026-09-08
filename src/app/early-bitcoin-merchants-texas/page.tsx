import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  GRASSROOTS_LAST_VERIFIED,
  grassrootsSources,
  grassrootsTimeline,
  type GrassrootsTimelineKind,
} from "@/lib/grassroots";

const pageUrl = `${site.url}/early-bitcoin-merchants-texas`;

export const metadata: Metadata = {
  title: "Before the State: Texas's Grassroots Bitcoin Economy, 2013–2015",
  description:
    "The sourced record of who took Bitcoin in Texas before the state had a position on it: Brave New Books and its two customers (June 2013), the Scholz Garten meetup, eleven Austin merchants on a map and the Leander dentist–meat-market–contractor cluster (February 2014), the first US Bitcoin ATM in an Austin bar, the first Texas Bitcoin Conference, Houston's 15–17 merchants, and the SXSW 2015 Bitcoin pedicab – kept honest about what is documented and what is lore.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Before the State: Texas's Grassroots Bitcoin Economy, 2013–2015",
    description:
      "One bookstore with two Bitcoin customers in 2013. Eleven merchants and two ATMs in Austin by March 2014. A pedicab at SXSW 2015. The street-level record, sourced – and honest about its gaps.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What was the first business in Texas to accept Bitcoin?",
    a: "The earliest documented Texas merchant is Brave New Books, the libertarian bookstore at 1904 Guadalupe Street across from the University of Texas at Austin. KUT reported on June 6, 2013 that it was the only known Austin vendor taking Bitcoin and that two customers had paid in it. Earlier undocumented acceptance elsewhere in Texas is likely but unrecorded.",
  },
  {
    q: "How many Austin businesses accepted Bitcoin in 2014?",
    a: "Techzette mapped eleven Austin-area businesses accepting Bitcoin on February 11, 2014 – among them Central Texas Gun Works, Brave New Books, Art of Tacos and Little Lucy's Mini Donuts on Rainey Street, Havi Hair, The Unconventional Oven pizza truck, La Canasta Market in Leander, a coin dealer, and a dentist. Volumes were small: one Rainey Street food truck reported about one Bitcoin sale a week in July 2014.",
  },
  {
    q: "Where was the first Bitcoin ATM in the United States?",
    a: "Robocoin switched on the first Bitcoin ATM in the United States at HandleBar, a bar on East 5th Street in downtown Austin, on February 20, 2014. Central Texas Gun Works unveiled a second Robocoin machine on Ben White Boulevard on March 2, 2014, so for a stretch of March both of the country's Bitcoin ATMs were in Austin.",
  },
  {
    q: "Who was the Bitcoin pedicab driver at SXSW 2015?",
    a: "A pedicab driver named Carrie, filmed accepting Bitcoin for rides in downtown Austin during SXSW Interactive and posted to YouTube on March 14, 2015 by Austin Bitcoin advocate Scott Rose as 'The World's First Bitcoin Pedicab Driver.' The video is the only source; her surname, her company, and a forum claim that she earned over a bitcoin in tips are all unverified.",
  },
  {
    q: "Did Houston and Dallas accept Bitcoin as early as Austin?",
    a: "Not at Austin's pace. Free Press Houston counted 15 to 17 Houston merchants accepting Bitcoin in 2014 and quoted a local advocate saying Houston was 'dragging way behind compared to Austin, Dallas.' The Houston Bitcoin Embassy opened on March 29, 2015 in part to grow that merchant base. No named Dallas merchant from 2013–2015 has been found in the record; Fort Worth's contribution was Coinsource, the ATM operator founded there in 2015.",
  },
];

const kindStyle: Record<GrassrootsTimelineKind, { color: string; label: string }> = {
  shop: { color: "var(--accent)", label: "The shops" },
  machine: { color: "var(--star)", label: "The machines" },
  room: { color: "#8a7fb5", label: "The rooms" },
  lore: { color: "#c98a4e", label: "The lore" },
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
function GrassrootsStripFigure() {
  // Months from June 2013 (0) to March 2015 (21) across x = 60..750.
  const nodes = [
    { m: 0, label: "Jun 2013", text: ["Brave New Books:", "one shop, two customers"], color: "var(--accent)", up: true },
    { m: 6.7, label: "Dec 2013", text: ["Scholz Garten meetup:", "189 members"], color: "#8a7fb5", up: false },
    { m: 8.7, label: "Feb–Mar 2014", text: ["11 merchants, 2 ATMs,", "first Texas Bitcoin Conference"], color: "var(--star)", up: true },
    { m: 13.7, label: "Jul 2014", text: ["Art of Tacos:", "~1 Bitcoin sale a week"], color: "var(--accent)", up: true },
    { m: 17, label: "Late 2014", text: ["Houston: 15–17", "merchants, “dragging behind”"], color: "var(--accent)", up: false },
    { m: 21, label: "Mar 2015", text: ["SXSW pedicab (lore);", "Houston Bitcoin Embassy"], color: "#c98a4e", up: true },
  ];
  const x = (m: number) => 60 + (m / 21) * 690;
  const axisY = 150;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 280" role="img" aria-label="Texas's grassroots Bitcoin economy from June 2013 to March 2015: one bookstore, a meetup, eleven merchants and the first US ATM, the first Texas Bitcoin Conference, a taco truck's one sale a week, Houston's 15 to 17 merchants, the SXSW pedicab and the Houston embassy">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE GRASSROOTS ERA · JUNE 2013 TO MARCH 2015</text>
<line x1="40" y1={axisY} x2="770" y2={axisY} stroke="var(--border)" strokeWidth="1.5"/>
{nodes.map((n) => {
  const cx = x(n.m);
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
<text x="405" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">KUT; Silicon Hills News; Techzette; TechCrunch; Free Press Houston; Bitcoin Magazine · the state&apos;s first position (Memo 1037) lands in April 2014, mid-strip</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Twenty-one months, six waypoints. A bookstore with two Bitcoin customers becomes a mapped economy of eleven merchants and two ATMs in nine months, then plateaus at one sale a week per shop while Houston tries to catch up. The Department of Banking&apos;s memo saying Bitcoin is not money arrives in April 2014, in the middle of the strip – after the merchants, not before them.
      </figcaption>
    </figure>
  );
}

function GrassrootsLedgerFigure() {
  const tiles = [
    { n: "2", label: "CUSTOMERS", sub: ["Brave New Books,", "June 2013"], color: "var(--accent)" },
    { n: "189", label: "MEMBERS", sub: ["Austin meetup,", "December 2013"], color: "#8a7fb5" },
    { n: "11", label: "MERCHANTS", sub: ["on Techzette's map,", "February 2014"], color: "var(--accent-soft)" },
    { n: "~1/wk", label: "BITCOIN SALES", sub: ["Art of Tacos,", "July 2014"], color: "var(--star)" },
    { n: "1", label: "VIDEO", sub: ["the SXSW pedicab,", "March 2015"], color: "#c98a4e" },
  ];
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 260" role="img" aria-label="The grassroots ledger in five counted tiles: two customers, 189 meetup members, eleven merchants, about one Bitcoin sale a week, one video">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE GRASSROOTS LEDGER · WHAT THE RECORD ACTUALLY COUNTS</text>
{tiles.map((t, i) => {
  const w = 142.8;
  const x0 = 28 + i * (w + 10);
  const cx = x0 + w / 2;
  return (
    <g key={t.label}>
      <rect x={x0} y="52" width={w} height="150" rx="10" fill="var(--surface-2)" stroke={t.color} strokeWidth="1.25"/>
      <text x={cx} y="104" fontSize="30" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">{t.n}</text>
      <text x={cx} y="126" fontSize="11" fontWeight="600" letterSpacing="1.5" textAnchor="middle" fill={t.color}>{t.label}</text>
      <text x={cx} y="150" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">{t.sub[0]}</text>
      <text x={cx} y="163" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">{t.sub[1]}</text>
    </g>
  );
})}
<text x="405" y="250" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">KUT; Silicon Hills News; Techzette (Feb + Jul 2014); YouTube · the volumes were tiny, and the record says so</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The ledger, counted. Two customers, a meetup of 189, eleven pins on a map, about one Bitcoin sale a week at the friendliest taco truck in town, and a single video for the era&apos;s most-repeated story. These are the real numbers of Texas&apos;s grassroots Bitcoin economy, and they are the reason this page holds its claims lightly.
      </figcaption>
    </figure>
  );
}
// people-figs:end

export default function EarlyBitcoinMerchantsTexasPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Before the State: Texas's Grassroots Bitcoin Economy, 2013–2015",
    description:
      "The sourced record of Texas's street-level Bitcoin economy before the state had a position: Brave New Books, the Austin meetup, eleven mapped merchants, the first US Bitcoin ATM, the first Texas Bitcoin Conference, Houston's lag, and the SXSW 2015 pedicab – with the documented and the lore kept separate.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Place", name: "Austin, Texas" },
      { "@type": "LocalBusiness", name: "Brave New Books", address: { "@type": "PostalAddress", streetAddress: "1904 Guadalupe St", addressLocality: "Austin", addressRegion: "TX" } },
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
        name: "Texas's grassroots Bitcoin economy, 2013–2015",
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
          / The grassroots era
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The grassroots era
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Before the State: Texas&apos;s Grassroots Bitcoin Economy, 2013–2015
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The rest of this record is about what the State of Texas did with
            Bitcoin – the memo, the mines, the reserve – and about the people
            who did it. This page is about what came first: a bookstore, a
            taco truck, a dentist in Cedar Park, a bar with a machine in it,
            and a pedicab driver at SXSW. Most of the grassroots era left no
            record at all. This is what survived, sorted into what is
            documented and what is lore.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 5, 2026 · Updated{" "}
            {GRASSROOTS_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Texas&apos;s grassroots Bitcoin economy began in Austin with Brave
            New Books, the only known Texas merchant taking Bitcoin in June
            2013, and grew by February 2014 to eleven mapped Austin merchants,
            the first Bitcoin ATM in the United States, and the first Texas
            Bitcoin Conference – all before the Texas Department of Banking
            issued its first position on Bitcoin in April 2014. Volumes were
            tiny, Houston lagged, and the era&apos;s most-repeated story, the
            SXSW 2015 Bitcoin pedicab, rests on a single video.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Brave New Books, at 1904 Guadalupe Street in Austin, was the
              only known Texas vendor accepting Bitcoin on June 6, 2013, and
              two customers had paid in it.<C n={1} />
            </li>
            <li>
              The Austin Bitcoin and Cryptocurrency Meetup had 189 members in
              December 2013 and met in the back room of Scholz Garten.
              <C n={2} />
            </li>
            <li>
              Techzette mapped eleven Austin-area businesses accepting Bitcoin
              on February 11, 2014, seven of which its reporter visited in an
              afternoon.<C n={3} />
            </li>
            <li>
              Robocoin switched on the first Bitcoin ATM in the United States
              at HandleBar on East 5th Street in Austin on February 20, 2014.
              <C n={5} /><C n={6} />
            </li>
            <li>
              Art of Tacos on Rainey Street reported about one Bitcoin sale a
              week in July 2014, with more than half of all its Bitcoin sales
              occurring during SXSW.<C n={9} />
            </li>
            <li>
              Free Press Houston counted 15 to 17 Houston merchants accepting
              Bitcoin in 2014; the Houston Bitcoin Embassy opened March 29,
              2015 in part to grow that number.<C n={10} /><C n={11} />
            </li>
            <li>
              The SXSW 2015 Bitcoin pedicab rests on one YouTube video posted
              March 14, 2015 by Austin advocate Scott Rose; no press covered
              it and the driver&apos;s surname is unrecorded.<C n={13} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From one bookstore to a pedicab
            </h2>
            <span className="text-xs text-muted-2">2013 → 2015</span>
          </div>
          <ol className="mt-5 space-y-4">
            {grassrootsTimeline.map((e) => {
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
          <h2>Where did Bitcoin first get spent in Texas?</h2>
          <p>
            At a bookstore, for ideological reasons, twice. When KUT went
            looking in June 2013 for anywhere in Austin that took Bitcoin, it
            found exactly one: Brave New Books, the libertarian bookshop at
            1904 Guadalupe across from the UT campus, where owner Harlan
            Dietrich saw a decentralized currency as a fit for the
            store&apos;s politics and two customers had so far agreed.
            &ldquo;People are really holding onto their coins here,&rdquo;
            Dietrich said. &ldquo;That&apos;s going to be how Bitcoin lives or
            dies.&rdquo;<C n={1} /> The consultant who set it up was a UT
            student named Michael Goldstein, for whom the bookstore was his
            only client; five months later he would co-found{" "}
            <Link href="/satoshi-nakamoto-institute">
              the Satoshi Nakamoto Institute
            </Link>{" "}
            out of the same campus circle, and the other consultant KUT
            quoted, Pierre Rochard, would co-found it with him.<C n={1} />{" "}
            The merchant layer and the intellectual layer of Austin Bitcoin
            began in the same room, and the room was small. By December, when
            Silicon Hills News counted the Austin Bitcoin and Cryptocurrency
            Meetup at 189 members with about forty in the back room of Scholz
            Garten, Brave New Books was still the anchor merchant.
            <C n={2} />
          </p>

          <h2>What could you buy with Bitcoin in Austin in 2014?</h2>
          <p>
            Tacos, donuts, a haircut, a pizza, groceries, a firearm, and a
            dental cleaning – and someone checked. On February 11, 2014,
            Techzette&apos;s Savanna Rose walked the city&apos;s Bitcoin
            economy and published it: seven storefronts visited –{" "}
            <Link href="/central-texas-gun-works-bitcoin">
              Central Texas Gun Works
            </Link>
            , Little Lucy&apos;s Mini Donuts and Art of Tacos on Rainey Street,
            Havi Hair on Anderson Lane, Brave New Books, The Unconventional
            Oven pizza truck on Lakeshore, and La Canasta Market in Leander –
            with eleven pins on the accompanying map, the extras being a coin
            and bullion dealer, an office-furniture store, a peace studio, and
            a dentist.<C n={3} /> Six days later Community Impact filled in the
            suburbs: Vista Ridge Family Dentistry in Cedar Park, La Canasta
            Meat Market and Hill Country Home Improvements in Leander, all
            onboarded to BitPay by Steven Wilkinson of the Austin Bitcoin
            group. The dentist, Dr. Max Kerr, made the merchant&apos;s case in
            one sentence – &ldquo;It&apos;s the freest form of currency&rdquo;
            – and the arithmetic underneath it was BitPay&apos;s 1% against
            roughly 2.5% for cards. Hill Country&apos;s owner had bought beer
            at La Canasta with Bitcoin in January. Bitcoin was around
            $800.<C n={4} /><C n={20} />
          </p>
          <p>
            The volumes are the honest part. In July 2014 Techzette&apos;s
            Kaoru Fujita tried to live on Bitcoin in Austin for five days and
            recorded the one transaction that went smoothly: five tacos,
            drinks and a 15% tip at Art of Tacos for 0.0485 BTC at $618.55,
            confirmed in about thirty seconds through a Coinbase wallet. The
            owner, Les, had taken Bitcoin since early 2014 and liked it. He
            saw about one Bitcoin sale a week – and more than half of all his
            Bitcoin sales had come during SXSW.<C n={9} /> That is the shape
            of the whole era: a real, working, tiny market that spiked when
            the festival brought the wallets to town.
          </p>

          <GrassrootsStripFigure />

          <h2>Why did Austin have both of America&apos;s Bitcoin ATMs?</h2>
          <p>
            Because the scene had organized before the machines arrived. On
            February 20, 2014, Robocoin switched on the first Bitcoin ATM in
            the United States at HandleBar, a bar on East 5th Street, with
            TechCrunch and KUT present.<C n={5} /><C n={6} /> Ten days later{" "}
            <Link href="/central-texas-gun-works-bitcoin">
              Central Texas Gun Works
            </Link>{" "}
            unveiled a second Robocoin unit on Ben White Boulevard at a Texas
            Independence Day fundraiser, and for a stretch of March both of
            the country&apos;s Bitcoin ATMs sat inside Austin city
            limits.<C n={7} /> Three days after that, the first Texas Bitcoin
            Conference opened at Circuit of the Americas – three tracks, an
            exhibit hall, and a hackathon with Ethereum, Mastercoin and
            Monetas among the prize sponsors.<C n={8} /> Six weeks later,
            Greg Abbott&apos;s gubernatorial campaign began taking Bitcoin
            donations, a story told on{" "}
            <Link href="/greg-abbott-bitcoin">Greg Abbott and Bitcoin</Link>.
            The Department of Banking&apos;s Supervisory Memorandum 1037,
            the state&apos;s first formal word on Bitcoin, landed on April 3,
            2014 – after the merchants, the machines, the conference, and the
            candidate. The sequence matters:{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>{" "}
            usually begins with the memo, and the memo was catching up.
          </p>

          <h2>Did the grassroots reach Houston and Dallas?</h2>
          <p>
            Slowly. Free Press Houston, surveying its own city in 2014, found
            15 to 17 merchants taking Bitcoin and quoted local evangelist
            Kevin Moore without softening it: &ldquo;Houston&apos;s dragging
            way behind compared to Austin, Dallas.&rdquo; The Texas Alcoholic
            Beverage Commission&apos;s Carolyn Beck confirmed for the record
            that a bar accepting Bitcoin was &ldquo;the establishment&apos;s
            choice.&rdquo;<C n={10} /> The response was a room: the Houston
            Bitcoin Embassy, opened March 29, 2015 at 6907 Almeda Road as a
            coworking space and home to the Texas Coinitiative nonprofit,
            founded – Bitcoin Magazine noted – in part because so few Houston
            merchants accepted the coin.<C n={11} /> Dallas is the gap in the
            record: contemporaries placed it ahead of Houston, but no named
            Dallas merchant from 2013–2015 has surfaced; Fort Worth&apos;s
            contribution was Coinsource, the ATM operator founded there in
            2015. North of Dallas, in Muenster, a UNT alumni note records Dave
            Reiter&apos;s Crossroads Express Stop as the first convenience
            store of its type in Texas to take Bitcoin. It is a single source,
            and this page holds it as one.<C n={12} />
          </p>

          <h2>What about the Bitcoin pedicab at SXSW 2015?</h2>
          <p>
            It happened, and almost nothing else about it can be established.
            During SXSW Interactive in March 2015 – the festival&apos;s first
            year with an official day of Bitcoin programming, on March 16 at
            the Hilton Downtown, with Barry Silbert, Jeremy Allaire and the
            Wall Street Journal&apos;s Paul Vigna on the bill and BitPay,
            ChangeTip and Gyft as sponsors – a pedicab driver named Carrie
            took Bitcoin for rides downtown.<C n={15} /><C n={16} /> We know
            because Scott Rose filmed her. Rose was not a bystander: an
            Austin-based former Apple presenter turned Bitcoin speaker, a
            CoinDesk op-ed contributor in March 2014, and the man behind
            Austin Nerd Night&apos;s &ldquo;Bitcoin 101,&rdquo; he posted the
            clip on March 14, 2015 under an advocate&apos;s headline:
            &ldquo;Meet Carrie, The World&apos;s First Bitcoin Pedicab
            Driver.&rdquo;<C n={13} /><C n={14} /> It reached the bitcointalk
            forum that night and drew a second thread the next
            morning.<C n={17} /><C n={18} />
          </p>
          <p>
            That is the entire record. Her surname and her pedicab company
            are unrecorded. No Austin, Texas or crypto-trade outlet covered
            her. &ldquo;World&apos;s first&rdquo; is the video&apos;s title,
            not a finding; by 2015, with the city already running Bitcoin
            through taco trucks and gun stores, an earlier undocumented
            pedicab ride is close to certain, and &ldquo;first
            documented&rdquo; is the defensible phrase. The one checkable
            claim – a forum commenter&apos;s &ldquo;over a bitcoin in tips so
            far&rdquo; – fails its check, though not in the way you&apos;d
            expect. The only Bitcoin address in the threads turns out to
            belong to the poster, not the driver: it received 0.01 BTC in
            April 2013 and sent it on March 8, 2014 to the relief fund for
            Dorian Nakamoto, the man Newsweek had just misidentified as
            Bitcoin&apos;s creator. It has never received a satoshi
            since.<C n={19} /> Whatever address Carrie displayed on her
            pedicab is not in the written record, so the tip figure – about
            $270 at the time – cannot be verified, and this page does not
            repeat it as fact.<C n={20} /> What remains is still worth
            keeping: a dated video, by an identifiable Austin Bitcoiner, of
            the street-level tail of a sequence that began at a bookstore two
            years earlier. Lore, labeled as lore.
          </p>

          <h2>The honest counterweight: the volumes were tiny</h2>
          <p>
            Every number on this page is small. Two customers at the
            bookstore. Eleven pins on the map. One sale a week at the
            friendliest taco truck in town. Fifteen to seventeen merchants in
            the fourth-largest city in America. One video for the era&apos;s
            most-repeated story. The grassroots era was real, but it was
            never an economy in the sense the mines or the reserve would
            become – it was a few hundred people who had decided the thing
            mattered, and a few dozen merchants willing to humor them at 1%.
            Most of it left no record at all; the merchants named here are the
            ones a reporter happened to visit. A page that claimed more would
            be doing what the pedicab video did: putting an advocate&apos;s
            headline on a modest fact.
          </p>

          <GrassrootsLedgerFigure />

          <h2>Why does the grassroots era matter to the record?</h2>
          <p>
            Because the sequence runs the opposite way from the way the story
            is usually told. The Department of Banking&apos;s memo, the
            mining migration, Senate Bill 21 and the state&apos;s first
            Bitcoin purchase are institutions responding to something that
            already existed. What existed was this: a bookstore, a meetup, a
            map, two machines, a conference, and a pedicab – built by people
            with no authority and small balances, in the eleven months before
            the state said a word. The man who set up the bookstore went on to
            run the institution that keeps Bitcoin&apos;s founding texts. The
            gun store&apos;s owner went on to the Supreme Court. The state
            that ruled in April 2014 that Bitcoin was not money now holds it
            in{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Strategic Bitcoin Reserve
            </Link>
            . The grassroots era is where all of that was first paid for,
            one taco at a time.
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
            Contemporaneous local reporting first – KUT, Silicon Hills News,
            Techzette, Community Impact, Free Press Houston – then the national
            and trade press that visited, then the forum threads and the
            public ledger for the pedicab. Two items rest on a single source
            and are labeled as such on the page: the Muenster convenience
            store and the SXSW pedicab. This is a research and reference
            article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {grassrootsSources.map((s) => (
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
