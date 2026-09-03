import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  SNI_LAST_VERIFIED,
  sniSources,
  sniTimeline,
  type SniTimelineKind,
} from "@/lib/sni";

const pageUrl = `${site.url}/satoshi-nakamoto-institute`;

export const metadata: Metadata = {
  title: "The Satoshi Nakamoto Institute: The Canon Was Written in Austin",
  description:
    "The sourced history of the Satoshi Nakamoto Institute, the Austin nonprofit founded in November 2013 by Michael Goldstein, Daniel Krawisz, and Pierre Rochard out of a University of Texas reading group: the Complete Satoshi archive, the cypherpunk Library, the Mempool essays that coined 'hyperbitcoinization' and 'speculative attack,' the co-founder who left for BSV, and the 2024 relaunch as a 501(c)(3) with OpenSats funding.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Satoshi Nakamoto Institute: The Canon Was Written in Austin",
    description:
      "Hyperbitcoinization, speculative attack, everyone's a scammer - the Bitcoin-only canon came out of a UT Austin reading group. The Institute's history, the schism, and the relaunch.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is the Satoshi Nakamoto Institute?",
    a: "The Satoshi Nakamoto Institute is an Austin, Texas nonprofit founded in November 2013 to advance and preserve knowledge of Bitcoin's history, economics, and technology. It maintains the Complete Satoshi - every known writing of Bitcoin's pseudonymous creator from 2008 to 2012 - a Library of the cypherpunk and monetary works Bitcoin descends from, and the Mempool, an essay archive. It became a Texas 501(c)(3) public charity in 2024.",
  },
  {
    q: "Who founded the Satoshi Nakamoto Institute?",
    a: "Michael Goldstein, Daniel Krawisz, and Pierre Rochard, three members of the Mises Circle, an Austrian-economics reading group Goldstein ran at the University of Texas at Austin. Goldstein has been president since the founding; Krawisz was director of research until his essays stopped in January 2017; Rochard later became Riot Platforms' Vice President of Research and founded The Bitcoin Bond Company.",
  },
  {
    q: "Who coined the term hyperbitcoinization?",
    a: "Daniel Krawisz, in a Satoshi Nakamoto Institute essay titled 'Hyperbitcoinization' published March 29, 2014. He defined it as a voluntary transition from an inferior currency to a superior one, carried out as a series of individual acts of entrepreneurship rather than by a single monopolist. Pierre Rochard's 'Speculative Attack' followed on July 4, 2014, and Michael Goldstein's 'Everyone's a Scammer' on September 11, 2014.",
  },
  {
    q: "Why did Daniel Krawisz leave the Nakamoto Institute?",
    a: "Over the block-size war. His last Institute essay ran January 8, 2017; by August 2017 he was publicly favoring forks over Bitcoin Core's development model, and he later became a Bitcoin SV advocate. In 2020 he said he had lost the allies he started the Institute with because they 'bought into core ideas,' and that 'BTC betrayed me.' The Institute still hosts all thirty of his essays.",
  },
  {
    q: "Is the Satoshi Nakamoto Institute still active?",
    a: "Yes, and more than at any point since 2014. It incorporated as a Texas 501(c)(3) in March 2024, raised 21 million sats to redesign its site, launched a translation community, received OpenSats Education Initiative funding in July 2024 to rebuild the archive to Library of Congress preservation standards, shipped the new site on July 26, 2024, and started The Reorg podcast in February 2025. Fiscal 2024 revenue was about $138,000.",
  },
];

const kindStyle: Record<SniTimelineKind, { color: string; label: string }> = {
  circle: { color: "var(--star)", label: "The circle" },
  canon: { color: "var(--accent)", label: "The canon" },
  schism: { color: "#c98a4e", label: "The schism" },
  institution: { color: "#8a7fb5", label: "The institution" },
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

export default function SatoshiNakamotoInstitutePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Satoshi Nakamoto Institute: The Canon Was Written in Austin",
    description:
      "The sourced history of the Austin nonprofit that archives Satoshi's writings and published the essays that coined hyperbitcoinization and speculative attack: the UT reading group, the 2014 canon, the co-founder who left for BSV, and the 2024 relaunch.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Organization", name: "Satoshi Nakamoto Institute", url: "https://nakamotoinstitute.org/" },
      { "@type": "Person", name: "Michael Goldstein" },
      { "@type": "Person", name: "Pierre Rochard" },
      { "@type": "Person", name: "Daniel Krawisz" },
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
        name: "The Satoshi Nakamoto Institute",
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
          / The Satoshi Nakamoto Institute
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The builders
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Satoshi Nakamoto Institute: The Canon Was Written in Austin
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Before Texas had a mining boom, a reserve, or a single Bitcoin
            statute, three students in an Austrian-economics reading group at
            the University of Texas started writing down why Bitcoin would
            win. The words they used – hyperbitcoinization, speculative
            attack, everyone&apos;s a scammer – became the working vocabulary
            of the Bitcoin-only worldview, and the archive they built became
            the closest thing the network has to a library. This is the
            record of the Satoshi Nakamoto Institute: the reading group, the
            canon, the co-founder who walked out the other door, and the
            relaunch that turned a website into an institution.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 1, 2026 · Updated{" "}
            {SNI_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            The Satoshi Nakamoto Institute is an Austin, Texas nonprofit
            founded in November 2013 by Michael Goldstein, Daniel Krawisz,
            and Pierre Rochard, three members of a University of Texas
            Austrian-economics reading group. It maintains the Complete
            Satoshi archive, a Library of Bitcoin&apos;s cypherpunk and
            monetary canon, and the Mempool essays that coined
            &ldquo;hyperbitcoinization.&rdquo; It became a 501(c)(3) in 2024
            and relaunched with OpenSats funding.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              The Satoshi Nakamoto Institute was founded in November 2013 by
              Michael Goldstein, Daniel Krawisz, and Pierre Rochard.
              <C n={1} /><C n={2} />
            </li>
            <li>
              Daniel Krawisz coined &ldquo;hyperbitcoinization&rdquo; in an
              Institute essay published March 29, 2014.<C n={6} />
            </li>
            <li>
              Pierre Rochard&apos;s &ldquo;Speculative Attack&rdquo; was
              published July 4, 2014, and Michael Goldstein&apos;s
              &ldquo;Everyone&apos;s a Scammer&rdquo; on September 11, 2014.
              <C n={5} /><C n={7} />
            </li>
            <li>
              Krawisz&apos;s last Institute essay ran January 8, 2017; by
              2020 he was a Bitcoin SV advocate saying &ldquo;BTC betrayed
              me.&rdquo;<C n={6} /><C n={13} />
            </li>
            <li>
              The Institute became a Texas 501(c)(3) in March 2024, raised 21
              million sats for a redesign, and shipped its new site July 26,
              2024.<C n={14} /><C n={17} />
            </li>
            <li>
              OpenSats funded the Institute on July 5, 2024, with 213 million
              sats in total support; fiscal 2024 revenue was about $138,000.
              <C n={16} /><C n={17} />
            </li>
          </ul>
        </div>

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the reading group to the institution
            </h2>
            <span className="text-xs text-muted-2">2012 → 2025</span>
          </div>
          <ol className="mt-5 space-y-4">
            {sniTimeline.map((e) => {
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
          <h2>What is the Satoshi Nakamoto Institute, and why is it in Austin?</h2>
          <p>
            Because it began as a University of Texas reading group. Michael
            Goldstein ran the Mises Circle, an Austrian-economics study group
            on the Austin campus, and when Bitcoin reached it the group
            started writing – Pierre Rochard, a UT accounting student, from
            December 2012; Daniel Krawisz with a four-part series on
            crypto-anarchy in the spring of 2013.<C n={5} /><C n={6} />
            <C n={19} /><C n={3} /> In November 2013 the three launched the
            Institute under a name Goldstein says began as a joke in
            conversation – &ldquo;a Nakamoto Institute for Bitcoin&rdquo; –
            with a mission that has not changed since: &ldquo;to advance and
            preserve knowledge of Bitcoin&apos;s history, economics, and
            technology.&rdquo;<C n={1} /><C n={2} /><C n={3} /> The reading
            group posted the invitation to its successor in May 2014.
            <C n={4} /> Austin at the time had a Bitcoin meetup that drew a
            few dozen people on a good month; the Institute was the part of
            that room that wrote things down.<C n={3} /> The wider city story
            is in{" "}
            <Link href="/texas-crypto-archive">the Texas crypto archive</Link>.
          </p>

          <h2>What did the Institute write that the network still quotes?</h2>
          <p>
            Three essays in six months of 2014, and a vocabulary. On March
            29, Krawisz published <strong>&ldquo;Hyperbitcoinization&rdquo;</strong>{" "}
            – a voluntary transition from an inferior currency to a superior
            one, made of &ldquo;a series of individual acts of
            entrepreneurship rather than a single monopolist that games the
            system.&rdquo;<C n={6} /> On July 4, Rochard published{" "}
            <strong>&ldquo;Speculative Attack&rdquo;</strong>: Bitcoin
            overtakes weak currencies &ldquo;through speculative attacks and
            currency crises, not through the careful evaluation of tech
            journalists&rdquo; – borrow the weak money, buy the hard
            one.<C n={5} /> On September 11, Goldstein published{" "}
            <strong>&ldquo;Everyone&apos;s a Scammer&rdquo;</strong>:
            &ldquo;There is a war going on for your bitcoins, and willpower
            is your only defense.&rdquo;<C n={7} /> Around them sat the
            anti-altcoin line – &ldquo;The Problem with Altcoins,&rdquo;
            &ldquo;Appcoins Are Snake Oil,&rdquo; &ldquo;The Coming Demise of
            the Altcoins&rdquo; – years before the position had a slur to go
            with it, and Krawisz&apos;s &ldquo;The Legacy of the Dread Pirate
            Roberts,&rdquo; the Institute&apos;s reading of the case told on{" "}
            <Link href="/ross-ulbricht-silk-road-bitcoin">
              the Ross Ulbricht page
            </Link>
            .<C n={6} /> The Mempool then became the shelf the next
            generation published on: Parker Lewis&apos;s 2020 essays,
            Gigi&apos;s &ldquo;Bitcoin is Time&rdquo; in 2021, and
            Goldstein&apos;s own return in 2022 and 2023.<C n={8} />
          </p>

          <h2>What does the archive actually hold?</h2>
          <p>
            Two reference works. <strong>The Complete Satoshi</strong> is the
            whitepaper, every known email and forum post, the original code,
            the curated quotes, and the PGP key of the pseudonymous author,
            spanning 2008 to 2012, published under a Creative Commons
            license – the copy of record that other archives cite.<C n={9} />{" "}
            <strong>The Library</strong> is the argument that Bitcoin has a
            lineage: David Chaum&apos;s blind signatures (1982), Tim
            May&apos;s crypto-anarchist manifesto (1988), Eric Hughes&apos;s
            cypherpunk manifesto (1993), Nick Szabo&apos;s smart contracts,
            &ldquo;Shelling Out,&rdquo; and Bit Gold, Wei Dai&apos;s b-money,
            Adam Back&apos;s hashcash, Hal Finney&apos;s reusable proofs of
            work – shelved beside Mises, Hayek, and Rothbard.<C n={10} /> Its
            first sentence is the Institute&apos;s thesis: &ldquo;Bitcoin was
            not forged in a vacuum.&rdquo;<C n={10} /> The site&apos;s own
            telling of that lineage, and of Texas&apos;s place in it, is{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            .
          </p>

          <h2>The honest counterweight: the co-founder who left, and the years nobody was home</h2>
          <p>
            The Institute&apos;s most prolific author ended up on the other
            side of its central argument. Krawisz wrote thirty of the
            Mempool&apos;s essays; the last ran on January 8, 2017.<C n={6} />{" "}
            Seven months later, with Bitcoin Cash forking off, he told
            Bitcoin.com &ldquo;I don&apos;t like altcoins, but I like
            forks&rdquo; – forks put investors, not developers, in
            control.<C n={12} /> By 2020 he was a Bitcoin SV advocate:
            &ldquo;BTC betrayed me,&rdquo; and &ldquo;I lost the allies with
            whom I started the Satoshi Nakamoto Institute because they bought
            into &lsquo;core&rsquo; ideas&rdquo; – a think tank, he said,
            that should also have been a mining pool.<C n={13} /> The second
            criticism is quieter: between roughly 2017 and 2023 the Institute
            was a website, not an organization – new essays arrived, but the
            founders were elsewhere, Goldstein consulting and podcasting,
            Rochard at Kraken and then Riot.<C n={7} /><C n={18} /> And a
            third, which this site is in a position to notice: the canon
            described hyperbitcoinization as individual acts, not state
            policy – and the state that got there first was Texas, by
            statute, with{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              a $10 million reserve
            </Link>{" "}
            the essays never imagined.
          </p>
          <p>
            The fair reading is that all three are the record working as
            designed. The Institute did not delete Krawisz when he left; his
            thirty essays are online with the rest, which is what an archive
            is for.<C n={6} /> The dormant years still produced the shelf
            Parker Lewis and Gigi published on.<C n={8} /> And a state reserve
            is a speculative attack by another name – a treasury borrowing
            against the dollar to hold the harder asset – which is closer to
            Rochard&apos;s 2014 essay than to anything its critics predicted.
            The Institute&apos;s own podcast now grades these arguments
            against a decade of hindsight, episode by episode.<C n={15} />
          </p>

          <h2>What changed in 2024?</h2>
          <p>
            It became an institution in fact as well as name. On March 4,
            2024 the newsletter announced &ldquo;Going Institutional&rdquo;:
            a Texas 501(c)(3) public charity, with an IRS ruling that
            year.<C n={14} /><C n={17} /> A redesign fundraiser opened in
            April and closed on May 27 at 21 million sats; a translation
            community launched April 30 in more than fifteen
            languages.<C n={14} /><C n={3} /> On July 5, OpenSats funded the
            Institute under its Education Initiative – 213 million sats in
            total support – to rebuild the archive &ldquo;using the same
            preservation standards that govern the Library of
            Congress.&rdquo;<C n={16} /> On July 26 the new site shipped
            under a title borrowed from an Austin neighbor&apos;s essay
            series: &ldquo;The New SNI: Gradually, Then Suddenly.&rdquo;
            <C n={14} /> In February 2025 came The Reorg, Goldstein&apos;s
            re-reading of the archive, opening with Rochard on his 2013
            argument that Bitcoin competes with fiat.<C n={15} /> Fiscal
            2024 revenue was about $138,000; the first annual dinner was
            announced for early 2026.<C n={17} /><C n={14} />
          </p>

          <h2>Where does the Institute stand in the Texas story?</h2>
          <p>
            As the intellectual origin of the builder scene the rest of this
            site covers. Rochard, the speculative-attack theorist, became
            Vice President of Research at Riot Platforms – the company that
            owns{" "}
            <Link href="/rockdale-texas-bitcoin">the Rockdale mine</Link> –
            and then founded The Bitcoin Bond Company.<C n={18} /> Parker
            Lewis wrote his series on the Institute&apos;s shelf while
            building Unchained in Austin.<C n={8} /> A few miles away,{" "}
            <Link href="/jimmy-song-bitcoin">Jimmy Song</Link> was teaching
            the protocol at the same university the reading group came from.
            The officeholders who wrote Texas&apos;s Bitcoin law are on their
            own pages; this one is the room where the reasons were written
            first.
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
            Primary record first: the Institute&apos;s own site – About, the
            author pages and their essay dates, the Mempool, the Complete
            Satoshi, the Library, the newsletter archive; the founders in
            their own words on Epicenter, TFTC, and in the BSV press; the
            funder and the IRS record via ProPublica; trade press for the
            careers. This is a research and reference article, not
            financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {sniSources.map((s) => (
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
