import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { YouTubeEmbed } from "@/components/youtube-embed";
import {
  ULBRICHT_LAST_VERIFIED,
  ulbrichtSources,
  ulbrichtTimeline,
  type TimelineKind,
} from "@/lib/ulbricht";

const pageUrl = `${site.url}/ross-ulbricht-silk-road-bitcoin`;

export const metadata: Metadata = {
  title: "Ross Ulbricht, Silk Road, and Bitcoin's First Use Case",
  description:
    "The sourced account of Ross Ulbricht - the Austin-born founder of Silk Road, Bitcoin's first use case - his double-life sentence, the seized coins, and the full pardon he won on January 21, 2025.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Ross Ulbricht, Silk Road, and Bitcoin's First Use Case",
    description:
      "From an Austin physics degree to Dread Pirate Roberts to a full presidential pardon: the sourced story of Ross Ulbricht, Silk Road, and the Bitcoin the government seized - kept honest about what Silk Road was.",
    url: pageUrl,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is Ross Ulbricht?",
    a: "Ross Ulbricht is the Austin, Texas-born founder of Silk Road, the dark-web marketplace that became Bitcoin's first use case at scale. Convicted in 2015 on seven counts and sentenced to two life terms plus 40 years without parole, he was granted a full and unconditional presidential pardon on January 21, 2025.",
  },
  {
    q: "Is Ross Ulbricht from Texas?",
    a: "Yes. Ross William Ulbricht was born in Austin on March 27, 1984, grew up in the Westlake area, and earned a physics degree from the University of Texas at Dallas in 2006 before a materials-science master's at Penn State in 2009. He built Silk Road after moving to Austin and then San Francisco.",
  },
  {
    q: "What was Silk Road, and why did it matter to Bitcoin?",
    a: "Silk Road was the first anonymous online marketplace at scale, launched in early 2011 and run over the Tor network with Bitcoin as its only currency. Most of its trade was illegal drugs. It also became Bitcoin's first real application - proving the coin could move value pseudonymously and putting it in many new hands before it was shut down in October 2013.",
  },
  {
    q: "Did Ross Ulbricht order murders?",
    a: "No one was killed, and Ulbricht was never charged, tried, or convicted of any murder-for-hire. Prosecutors alleged he solicited killings to protect Silk Road, and the sentencing judge weighed those allegations, but she stated there was 'no evidence that the killings actually took place.' A separate Maryland murder-for-hire charge was dismissed in 2018.",
  },
  {
    q: "Was Ross Ulbricht pardoned?",
    a: "Yes. President Trump granted Ross Ulbricht a full and unconditional pardon on January 21, 2025, after a decade in prison. It fulfilled - and went beyond - a pledge Trump made at the 2024 Libertarian National Convention to commute Ulbricht's sentence, and followed a clemency petition with roughly 607,000 signatures.",
  },
  {
    q: "What happened to Silk Road's Bitcoin?",
    a: "The government seized about 174,000 bitcoin in Ulbricht's case and auctioned it off in 2014 and 2015, when Tim Draper was an early buyer. Separately, in November 2020 it seized 69,370 bitcoin a hacker had stolen from Silk Road - about $1 billion then. Those coins were never sold; in March 2025 they were placed in the U.S. Strategic Bitcoin Reserve.",
  },
];

const kindStyle: Record<TimelineKind, { color: string; label: string }> = {
  origin: { color: "var(--star)", label: "Origins" },
  rise: { color: "var(--accent)", label: "Silk Road" },
  fall: { color: "#bf5b4a", label: "The case" },
  seizure: { color: "#c98a4e", label: "Seizure" },
  freedom: { color: "#7a9e6a", label: "Freedom" },
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

// The 69,370 bitcoin the government seized from a Silk Road hacker in 2020,
// by fiat value at two moments - and the twist that they were never sold.
// Static, theme-aware SVG (site is single dark theme).
function SeizedBitcoinScale() {
  const max = 6.5; // $B, the early-2025 value
  const x0 = 250;
  const track = 400; // px for the full $6.5B
  const px = (b: number) => (b / max) * track;
  const y2020 = 1.0;
  const y2025 = 6.5;
  return (
    <figure className="mt-6 overflow-x-auto rounded-xl border border-border bg-surface p-5">
      <svg
        viewBox="0 0 680 250"
        className="h-auto w-full min-w-[560px]"
        role="img"
        aria-label="Bar chart: the 69,370 bitcoin the U.S. seized from a Silk Road hacker was worth about $1.0 billion in November 2020 and about $6.5 billion by early 2025, when courts cleared a sale. The coins were not sold; they were placed in the U.S. Strategic Bitcoin Reserve in March 2025."
      >
        <text x="0" y="22" fill="var(--accent)" fontSize="13" fontWeight="600" letterSpacing="2">
          THE SILK ROAD BITCOIN THE U.S. KEPT
        </text>
        <text x="0" y="44" fill="var(--muted-2)" fontSize="13">
          69,370 seized bitcoin, by fiat value, drawn to scale
        </text>

        {/* 2020 — at seizure */}
        <text x="0" y="96" fill="var(--muted)" fontSize="14">
          Nov 2020
        </text>
        <text x="0" y="115" fill="var(--foreground)" fontSize="15" fontWeight="600">
          at seizure
        </text>
        <rect x={x0} y="82" width={track} height="40" rx="6" fill="var(--surface-2)" />
        <rect x={x0} y="82" width={px(y2020)} height="40" rx="6" fill="var(--star)" />
        <text x={x0 + px(y2020) + 12} y="107" fill="var(--foreground)" fontSize="15" fontWeight="600">
          ~$1.0B
        </text>

        {/* 2025 — sale cleared */}
        <text x="0" y="176" fill="var(--muted)" fontSize="14">
          Early 2025
        </text>
        <text x="0" y="195" fill="var(--foreground)" fontSize="15" fontWeight="600">
          sale cleared
        </text>
        <rect x={x0} y="162" width={track} height="40" rx="6" fill="var(--surface-2)" />
        <rect x={x0} y="162" width={px(y2025)} height="40" rx="6" fill="var(--star)" />
        <text x={x0 + track - 14} y="187" textAnchor="end" fill="#1a1206" fontSize="15" fontWeight="700">
          ~$6.5B
        </text>

        <text x="0" y="238" fill="var(--muted-2)" fontSize="12">
          The coins were never sold. In March 2025 they were placed in the U.S. Strategic Bitcoin Reserve.
        </text>
      </svg>
    </figure>
  );
}

export default function RossUlbrichtPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ross Ulbricht, Silk Road, and Bitcoin's First Use Case",
    description:
      "The sourced account of Ross Ulbricht - the Austin-born founder of Silk Road, Bitcoin's first use case - his double-life sentence, the seized coins, and the full pardon he won on January 21, 2025.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-23",
    dateModified: "2026-08-23",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Thing", name: "Silk Road (marketplace)" },
      { "@type": "Person", name: "Ross Ulbricht" },
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
        name: "Ross Ulbricht, Silk Road, and Bitcoin's First Use Case",
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
          / Ross Ulbricht &amp; the Silk Road
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · Origins &amp; the base layer
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Ross Ulbricht, Silk Road, and Bitcoin&apos;s First Use Case
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            An Austin physics kid built the first marketplace that gave Bitcoin
            something to do - and it was a drug bazaar. It cost him two life
            sentences, a decade in prison, and nearly every coin he touched.
            This is the sourced story of how it happened, what is true and what
            is not, and how he walked free.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 23, 2026 · Updated{" "}
            {ULBRICHT_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Ross Ulbricht is the Austin-born founder of Silk Road, the dark-web
            marketplace that became Bitcoin&apos;s first use case at scale from
            2011 to 2013. Most of its trade was illegal drugs. Convicted in 2015
            on seven counts and sentenced to two life terms plus 40 years without
            parole, he was granted a full and unconditional pardon by President
            Trump on January 21, 2025, after a decade in prison and a years-long
            clemency campaign.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Ross Ulbricht was born March 27, 1984, in Austin, Texas, and earned
              a physics degree from the University of Texas at Dallas in 2006.
              <C n={21} />
            </li>
            <li>
              He launched Silk Road in early 2011 as &ldquo;Dread Pirate
              Roberts&rdquo;; the Justice Department later called it the
              internet&apos;s &ldquo;most sophisticated and extensive criminal
              marketplace,&rdquo; used by more than 100,000 buyers.<C n={1} />
            </li>
            <li>
              The FBI arrested Ulbricht on October 1, 2013, seizing a laptop that
              held roughly 144,000 bitcoin; about 174,000 BTC was seized in the
              case overall.<C n={8} /><C n={20} />
            </li>
            <li>
              A Manhattan jury convicted him on all seven counts on February 4,
              2015, and Judge Katherine Forrest sentenced him on May 29, 2015, to
              two life terms plus 40 years without parole.<C n={2} /><C n={1} />
            </li>
            <li>
              He was never charged, tried, or convicted of any murder-for-hire;
              the sentencing judge found &ldquo;no evidence that the killings
              actually took place.&rdquo;<C n={4} /><C n={15} />
            </li>
            <li>
              President Trump granted Ulbricht a full and unconditional pardon on
              January 21, 2025, after a clemency petition of roughly 607,000
              signatures.<C n={11} /><C n={25} />
            </li>
          </ul>
        </div>

        {/* Timeline — the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From Austin to the main stage
            </h2>
            <span className="text-xs text-muted-2">The arc, in order</span>
          </div>
          <ol className="mt-5 space-y-4">
            {ulbrichtTimeline.map((e) => {
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
          <h2>Who is Ross Ulbricht, and what does he have to do with Texas?</h2>
          <p>
            Ross Ulbricht is the Austin-born founder of Silk Road, and his story
            starts as an ordinary Texas one. He was born in Austin on March 27,
            1984, grew up in the Westlake suburbs, and made Eagle Scout before
            heading north on a full academic scholarship to the{" "}
            <strong>University of Texas at Dallas</strong>, where he took a
            physics degree in 2006 and worked in the university&apos;s Nanotech
            Institute on solar cells.<C n={21} /> A materials-science
            master&apos;s at Penn State followed in 2009. By the standard script,
            the UT Dallas physicist becomes an engineer. Instead he read Ludwig
            von Mises and the Austrian economists, decided he wanted to build
            something outside the state&apos;s reach, and moved back to Austin
            with an idea.
          </p>
          <p>
            That idea is why he belongs in any honest account of Bitcoin. Texas
            is where Bitcoin&apos;s <em>physical</em> base layer lives - the
            mines and the grid, told in{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>{" "}
            - but its <em>philosophical</em> base layer is a cypherpunk idea:
            censorship-resistant money that answers to no gatekeeper. Ulbricht,
            the Austin libertarian, built the first thing that put that idea to
            work in the world. What he did with it is a permanent stain and a
            genuine chapter of the record at the same time. Both halves are true,
            and this page keeps both.
          </p>

          <h2>What was Silk Road, and why did it matter to Bitcoin?</h2>
          <p>
            Silk Road was the first anonymous online marketplace to work at
            scale, and it became Bitcoin&apos;s first real use case. Launched in
            early 2011 and reachable only through the <strong>Tor</strong>{" "}
            anonymity network, it paired two technologies into something new: Tor
            hid who you were, and Bitcoin - pseudonymous, borderless, impossible
            to charge back - moved the money. There is no soft way to say what
            most of that money bought. Silk Road was, in the Justice
            Department&apos;s words, the internet&apos;s &ldquo;most
            sophisticated and extensive criminal marketplace,&rdquo; used by
            several thousand vendors and more than 100,000 buyers to trade
            illegal drugs, and prosecutors said it earned Ulbricht more than
            600,000 bitcoin in commissions, over $13 million at the exchange rates
            of the day.<C n={1} /><C n={2} />
          </p>
          <p>
            And yet its place in Bitcoin&apos;s history is not in dispute. Before
            Silk Road, Bitcoin was a mailing-list curiosity worth pennies with
            almost nothing to spend it on. Silk Road gave it a job. For its
            two-and-a-half-year run it was the demonstration that a purely digital,
            state-free money could actually clear real transactions between
            strangers who did not trust each other - the thesis the whitepaper
            had only asserted. Bitcoin Magazine, hardly a hostile source, calls
            Silk Road &ldquo;Bitcoin&apos;s earliest major application.&rdquo;
            <C n={22} /> It drew in early users and developers, stress-tested the
            network, and tied Bitcoin&apos;s reputation - for years, for better
            and worse - to the idea of money that cannot be stopped. The
            uncomfortable truth of the base layer is that its first proof of
            concept was a crime.
          </p>

          <h2>How was Ross Ulbricht caught?</h2>
          <p>
            The bust was as physical as the philosophy was abstract. On October
            1, 2013, FBI agents cornered Ulbricht in the science-fiction section
            of the <strong>Glen Park branch library</strong> in San Francisco. A
            staged lovers&apos; quarrel pulled his attention; an agent grabbed the
            open laptop before he could close it, catching him logged in as Dread
            Pirate Roberts with the administrative controls of Silk Road on
            screen.<C n={20} /> That laptop held roughly 144,000 bitcoin and the
            evidence that made the trial almost a formality.<C n={8} />
          </p>
          <p>
            The case moved to the Southern District of New York. In February 2015,
            after a roughly four-week trial before U.S. District Judge{" "}
            <strong>Katherine B. Forrest</strong>, a jury convicted Ulbricht on
            all seven counts - narcotics distribution, a narcotics-trafficking
            conspiracy, computer-hacking and money-laundering conspiracies,
            trafficking in fraudulent identity documents, and the continuing
            criminal enterprise or &ldquo;kingpin&rdquo; charge (21 U.S.C. §
            848), a statute written for cartel bosses.<C n={2} /><C n={4} /> On
            May 29, 2015, Forrest sentenced him to <strong>two life terms plus
            40 years, without the possibility of parole</strong>, and ordered
            $183,961,921 forfeited. She called Silk Road &ldquo;your opus.&rdquo;
            <C n={1} /> Ulbricht was 31, and a first-time offender. The Second
            Circuit affirmed, and in June 2018 the Supreme Court declined to hear
            the case, leaving the sentence final.<C n={5} />
          </p>

          <h2>Did Ross Ulbricht order murders?</h2>
          <p>
            No one was killed, and Ross Ulbricht was never charged, tried, or
            convicted of any murder-for-hire. This is the most misunderstood part
            of his case, and it deserves precision. At the New York trial that
            convicted him, murder-for-hire was <em>not</em> among the seven
            counts. Prosecutors did allege that Ulbricht, as Dread Pirate Roberts,
            had tried to arrange killings to protect the site: at sentencing,
            Judge Forrest found by a preponderance of the evidence that he had
            commissioned five murders through a user called
            &ldquo;redandwhite&rdquo; - while stating, in the same breath, that
            there was &ldquo;no evidence that the killings actually took
            place.&rdquo;<C n={4} />
          </p>
          <p>
            A separate federal indictment in Maryland charged a single
            murder-for-hire count, tied to a plot against a former Silk Road
            administrator - a plot that had in fact been staged by an undercover
            agent, so that no one was harmed. That Maryland case was never
            brought to trial; the government moved to dismiss it with prejudice in
            2018, once the New York conviction was final.<C n={15} /> So the
            allegations were serious, and the sentencing judge weighed them
            heavily as she went far beyond the ten-year mandatory minimum. But
            they were never proven to a jury, and no death ever resulted. That
            gap - between what was alleged and what was proven, and between a
            non-violent record of conviction and a sentence usually reserved for
            killers - is the exact fault line the campaign to free him would form
            along.
          </p>

          <h2>What happened to Silk Road&apos;s Bitcoin?</h2>
          <p>
            The government seized about <strong>174,000 bitcoin</strong> in
            Ulbricht&apos;s case - roughly 144,000 from his laptop and the rest
            from Silk Road&apos;s servers - and then did what Elon Musk&apos;s
            Tesla would later do with its own treasury: it sold too early. The
            U.S. Marshals auctioned the coins off in tranches across 2014 and
            2015, and the venture capitalist <strong>Tim Draper</strong> won the
            entire first block of nearly 30,000 BTC in June 2014 for about $19
            million, roughly $632 a coin.<C n={17} /><C n={6} /> Ulbricht dropped
            his own claim to the auction proceeds in 2017. The same instinct to
            sell early would echo, years later, in{" "}
            <Link href="/elon-musk-bitcoin-energy">
              Tesla&apos;s decision to convert most of its Bitcoin to cash
            </Link>
            .
          </p>
          <p>
            Then came a stranger coda. In November 2020 the government seized{" "}
            <strong>69,370 bitcoin</strong> that a hacker had quietly stolen from
            Silk Road years earlier - worth about $1 billion at the time, the
            largest cryptocurrency seizure in Justice Department history to that
            point, and entirely separate from Ulbricht&apos;s own coins.<C n={7} />
            <C n={13} /> As Bitcoin climbed, so did the stakes: by early 2025,
            after a failed ownership claim and a Supreme Court that declined to
            intervene, courts had cleared the government to sell a hoard then
            worth roughly $6.5 billion.<C n={14} /> It never did. In March 2025,
            President Trump&apos;s executive order established a{" "}
            <strong>U.S. Strategic Bitcoin Reserve</strong> and directed that
            seized bitcoin be held rather than sold.<C n={9} /><C n={10} /> The
            coins born from Silk Road became the seed of a national reserve - a
            federal echo of the{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              Texas Strategic Bitcoin Reserve
            </Link>{" "}
            the state had funded months earlier.
          </p>

          <SeizedBitcoinScale />

          <h2>Why was his sentence so controversial? The Free Ross campaign</h2>
          <p>
            The sentence became controversial because a double life term without
            parole, handed to a first-time offender whose counts of conviction
            carried no violence, struck a remarkable range of people as out of
            proportion. The campaign that formed around that argument was led,
            for a decade, by his mother. <strong>Lyn Ulbricht</strong> left her
            own life behind to run <Link href="https://freeross.org">FreeRoss.org</Link>,
            speaking from Bitcoin-conference stages and courthouses year after
            year, arguing not that her son was innocent but that the punishment
            had lost its bearings.<C n={24} /><C n={26} /> The clemency petition
            she helped drive gathered roughly <strong>607,000 signatures</strong>,
            described as the largest ever submitted to a U.S. president.<C n={25} />
          </p>
          <p>
            She was not alone, and the coalition is the tell. Support for Ross
            Ulbricht ran clean across the usual battle lines - libertarians who
            saw a martyr for permissionless technology, and criminal-justice
            reformers, drug-policy groups, and former federal judges who saw a
            sentencing failure, filed briefs on the same side.<C n={5} /> The
            case became a fixed reference point in the Bitcoin world&apos;s long
            argument about proportional punishment, the same argument this site
            traces through the federal money-transmission statute in{" "}
            <Link href="/doctor-bitcoin-interviews">
              the Doctor Bitcoin Tapes
            </Link>
            . Whatever one makes of what Ulbricht built, the breadth of the people
            who thought his sentence was wrong is a fact worth its own line.
          </p>

          <h2>Was Ross Ulbricht pardoned?</h2>
          <p>
            Yes. On <strong>January 21, 2025</strong>, President Trump granted
            Ross Ulbricht a full and unconditional pardon.<C n={11} /><C n={12} />{" "}
            It was a promise kept, and then some. At the Libertarian National
            Convention in May 2024, Trump had told the room he would commute
            Ulbricht&apos;s sentence to time served &ldquo;on day one&rdquo; - a
            direct pitch to a voting bloc for whom Free Ross had become a cause.
            <C n={16} /> What he ultimately signed was broader than a commutation:
            a full pardon wipes the conviction, not just the remaining sentence.
            Trump announced it on Truth Social, writing that he had called
            Ulbricht&apos;s mother to tell her personally. After more than eleven
            years in prison, Ulbricht was released.
          </p>

          <h2>Where it lands: freedom, and the base layer</h2>
          <p>
            On May 29, 2025 - ten years to the day after Judge Forrest sentenced
            him - Ross Ulbricht walked onto the main stage at{" "}
            <strong>Bitcoin 2025</strong> in Las Vegas for his first public
            speech as a free man. He was calm, and he was funny about the strange
            arithmetic of his own life: &ldquo;I effectively went into a time
            capsule in 2013,&rdquo; he said, &ldquo;and now I&apos;m coming out
            like Rip Van Winkle.&rdquo; Then he turned to the crowd that had
            written him letters and funded his defense for a decade: &ldquo;You
            didn&apos;t abandon me. You didn&apos;t forget me.&rdquo; His three
            words for them were freedom, decentralization, and unity, and his
            through-line was simple - freedom is worth the struggle.<C n={18} />
            <C n={19} />
          </p>

          <YouTubeEmbed
            id="8ZZGRA-8ZMU"
            title="Ross Ulbricht: Freedom, Decentralization, Unity at Bitcoin 2025"
            caption={
              <>
                Ross Ulbricht&apos;s first public speech after his pardon -
                &ldquo;Freedom, Decentralization, Unity&rdquo; - closing Bitcoin
                2025 in Las Vegas on May 29, 2025, ten years to the day after he
                was sentenced. Via Bitcoin Magazine.<C n={28} />
              </>
            }
          />

          <p>
            The homecoming was not without static. Weeks later, on-chain analysts
            flagged an anonymous donation of about 300 bitcoin - roughly $31
            million - sent to a wallet tied to Ulbricht, with the investigator
            ZachXBT tracing the funds through a mixing service to old darknet-market
            addresses and calling their origin questionable.<C n={27} /> It was a
            fitting complication for a man whose whole story lives in the gap
            between what Bitcoin makes possible and what people choose to do with
            it.
          </p>
          <p>
            That is the arc in one line. An Austin physics student built the first
            application that gave Bitcoin a purpose, chose to make that purpose a
            crime, and paid for it with a decade and a double life sentence -
            then walked out into a world where the coins seized from his
            marketplace seed a national reserve, and where the state next door
            treats Bitcoin as something to hold rather than hunt. The base layer
            was always going to touch the physical world. In Ross Ulbricht it
            touched a courtroom first, and Texas last.
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
            Primary record first: the Justice Department, FBI, and court filings
            for the charges, sentence, forfeiture, and seizures, then reputable
            journalism for the pardon and the aftermath, and the primary video of
            Ulbricht&apos;s own words. This is a research and reference article,
            not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {ulbrichtSources.map((s) => (
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
