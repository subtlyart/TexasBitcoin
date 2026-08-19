import Link from "next/link";
import { ArrowRight, Zap, Scale, Layers, Cpu } from "lucide-react";
import { LoneStar } from "@/components/lone-star";
import { SeamMark } from "@/components/seam-mark";
import { site } from "@/lib/site";

const layers = [
  {
    icon: Cpu,
    kicker: "Base layer — principles",
    title: "Trustless settlement, made physical",
    body: "Bitcoin's cypherpunk core — self-custody and proof-of-work — touches the real world in Texas through mining and the grid. This is where the energy meets the ledger.",
  },
  {
    icon: Zap,
    kicker: "The grid",
    title: "Mining as a grid asset",
    body: "Deregulated ERCOT power, stranded gas and wind, and demand-response programs turned Texas into the post-China-ban capital of Bitcoin mining. The economics are the story.",
  },
  {
    icon: Scale,
    kicker: "The money law",
    title: "Where Texas drew the line",
    body: "From the 2014 Supervisory Memo that said Bitcoin isn't 'money,' to a now-funded state Strategic Bitcoin Reserve and a gold-backed digital currency — Texas keeps defining the rules.",
  },
  {
    icon: Layers,
    kicker: "Programmability — the frontier",
    title: "Stablecoins & smart contracts, settling to Bitcoin",
    body: "Lightning, Taproot Assets, and Bitcoin-settling layers are pulling programmable money onto the hardest base. We cover the frontier without drifting into altcoin noise.",
  },
];

export default function Home() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: site.url,
    name: `${site.name} — ${site.tagline}`,
    description: site.description,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <LoneStar className="pointer-events-none absolute -right-20 -top-24 h-[26rem] w-[26rem] text-accent/[0.05]" />
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            <LoneStar className="h-3.5 w-3.5" />
            Howdy, folks — the authority on Bitcoin in Texas
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Where Bitcoin meets the{" "}
            <span className="text-accent">physical world</span> — and the{" "}
            <span className="text-accent">financial future</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Texas is the one place where Bitcoin&apos;s two frontiers are happening
            at once: the physical — energy, the grid, and the largest mines in
            North America — and the financial — the money law, a state reserve,
            and programmable money built on the hardest base layer. We tell that
            whole story end to end — sourced, and plain as day.
            <SeamMark to="/texas-bitcoin-law-timeline" step={0} />
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/history-of-bitcoin-in-texas"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-[#1a1206] transition-colors hover:bg-accent-soft"
            >
              Read the History of Bitcoin in Texas
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#coverage"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent-soft"
            >
              Have a look around
            </a>
          </div>
        </div>
      </section>

      {/* The layered thesis */}
      <section id="coverage" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            One stack, anchored in Texas
          </h2>
          <p className="mt-4 text-muted">
            We don&apos;t flatten everything into &ldquo;crypto.&rdquo; We walk the
            stack like a fence line — post by post, from the cypherpunk base to
            the programmable frontier — and let the ground truth of Texas keep
            it honest.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {layers.map((l) => {
            const Icon = l.icon;
            return (
              <div key={l.title} className="bg-surface p-7 transition-colors hover:bg-surface-2">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {l.kicker}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{l.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cornerstone feature */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <Link
          href="/history-of-bitcoin-in-texas"
          className="group relative block overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-background p-8 transition-colors hover:border-accent/40 sm:p-12"
        >
          <LoneStar className="pointer-events-none absolute -bottom-12 -right-10 h-64 w-64 text-accent/[0.06] transition-transform duration-500 group-hover:rotate-12" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Cornerstone · The definitive account
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            The History of Bitcoin in Texas
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            How a 2014 banking memo, a Chinese mining ban, an old aluminum
            smelter, and a 2025 state reserve made Texas the center of gravity
            for hard money — told end to end, with every claim sourced.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 font-medium text-accent-soft">
            Read the cornerstone
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </section>

      {/* Mining map teaser */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <Link
          href="/bitcoin-mining-map-texas"
          className="group flex flex-col justify-between gap-4 rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/40 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Data asset · Interactive
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              The Texas Bitcoin Mining Map
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              Every major mine in the state — mapped, sized, and sourced. Drag
              the timeline from 2019 and watch gigawatts bloom across Texas,
              from Rockdale&apos;s 700 MW flagship to the sites now feeding AI.
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 font-medium text-accent-soft">
            Explore the map
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </section>

      {/* Stories & the law */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          <Link
            href="/rockdale-texas-bitcoin"
            className="group bg-surface p-7 transition-colors hover:bg-surface-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Story · Milam County
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold leading-snug">
              The Rockdale Story
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A dying aluminum town, an idle smelter&apos;s wires, and the 700
              MW flagship that gave Rockdale its second industrial life.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-soft">
              Read the story
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link
            href="/doctor-bitcoin"
            className="group bg-surface p-7 transition-colors hover:bg-surface-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Voices of Texas Bitcoin · No. 1
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold leading-snug">
              Doctor Bitcoin
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Mark Hopkins and the federal line Texas never drew — the case
              that taught every P2P trader where the seam runs.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-soft">
              Read the profile
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link
            href="/texas-bitcoin-law-timeline"
            className="group bg-surface p-7 transition-colors hover:bg-surface-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Interactive · The money law
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold leading-snug">
              The Texas Bitcoin Law Timeline
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Every law, memo, and failed bill from the 2014 &ldquo;not
              money&rdquo; memo to the 2025 Strategic Bitcoin Reserve.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-soft">
              Scroll the timeline
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* Events teaser */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <Link
          href="/events"
          className="group flex flex-col justify-between gap-4 rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/40 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Community
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Every Texas Bitcoin meetup &amp; conference
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              A free, open directory across Austin, Dallas–Fort Worth, Houston,
              and San Antonio — linked straight to the organizer, no login wall.
              Come say howdy in person.
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 font-medium text-accent-soft">
            Browse events
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </section>

      {/* Reference desk — quiet links to the deeper record */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-muted">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            The reference desk
          </p>
          <p className="mt-2 leading-relaxed">
            Straight to the record:{" "}
            <Link
              href="/what-texas-law-says-about-bitcoin"
              className="text-foreground underline decoration-accent/30 underline-offset-4 hover:text-accent-soft"
            >
              what Texas law actually says about Bitcoin
            </Link>
            , the{" "}
            <Link
              href="/texas-strategic-bitcoin-reserve"
              className="text-foreground underline decoration-accent/30 underline-offset-4 hover:text-accent-soft"
            >
              Texas Strategic Bitcoin Reserve
            </Link>
            , and the{" "}
            <Link
              href="/texas-bitcoin-case-tracker"
              className="text-foreground underline decoration-accent/30 underline-offset-4 hover:text-accent-soft"
            >
              federal § 1960 case tracker
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Sign-off — Big Tex tips his hat */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <LoneStar className="h-5 w-5 text-accent" />
          <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            This is Bitcoin country.
          </p>
          <p className="text-sm text-muted">
            Y&apos;all come back now — we keep the record fresh.
          </p>
        </div>
      </section>
    </>
  );
}
