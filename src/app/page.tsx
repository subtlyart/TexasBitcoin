import Link from "next/link";
import { ArrowRight, Zap, Scale, Layers, Cpu } from "lucide-react";
import { Newsletter } from "@/components/newsletter";
import { LoneStar } from "@/components/lone-star";

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
    body: "From the 2014 Supervisory Memo that said Bitcoin isn't 'money,' to a state Strategic Bitcoin Reserve and a gold-backed digital currency in 2025 — Texas keeps defining the rules.",
  },
  {
    icon: Layers,
    kicker: "Programmability — the frontier",
    title: "Stablecoins & smart contracts, settling to Bitcoin",
    body: "Lightning, Taproot Assets, and Bitcoin-settling layers are pulling programmable money onto the hardest base. We cover the frontier without drifting into altcoin noise.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <LoneStar className="pointer-events-none absolute -right-20 -top-24 h-[26rem] w-[26rem] text-accent/[0.05]" />
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            <LoneStar className="h-3.5 w-3.5" />
            The authority on Bitcoin in Texas
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
            story end to end, sourced and plainly.
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
              href="#newsletter"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent-soft"
            >
              Get the weekly brief
            </a>
          </div>
        </div>
      </section>

      {/* The layered thesis */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            One stack, anchored in Texas
          </h2>
          <p className="mt-4 text-muted">
            We don&apos;t flatten everything into &ldquo;crypto.&rdquo; We follow the
            stack — from the cypherpunk base to the programmable frontier — and
            let the ground truth of Texas keep it honest.
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

      <div className="py-12">
        <Newsletter />
      </div>
    </>
  );
}
