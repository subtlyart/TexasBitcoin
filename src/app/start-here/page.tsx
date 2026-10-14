import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Compass,
  Cpu,
  Zap,
  Scale,
  Layers,
} from "lucide-react";
import { site } from "@/lib/site";
import { LoneStar } from "@/components/lone-star";
import { meetups, METROS } from "@/lib/events";

const pageUrl = `${site.url}/start-here`;

export const metadata: Metadata = {
  title: "Start Here — New to Bitcoin in Texas?",
  description:
    "A friendly, plain-English way into Bitcoin in Texas. Find the meetup nearest you, get the 60-second version of the whole story, and pick the door that fits — curious Texan, miner, or policy watcher.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    title: "Start Here — New to Bitcoin in Texas?",
    description:
      "The welcoming front door to Bitcoin in Texas: find your nearest meetup, get the plain-English version, and start wherever you like.",
    url: pageUrl,
  },
};

// Four doors into the site, by who's arriving. Each routes to an existing page
// with descriptive anchor text — this page curates the on-ramp, it doesn't
// duplicate the destinations.
const doors = [
  {
    icon: Users,
    title: "I just want to meet people",
    body: "The fastest way in is a room full of Texans. Find the group nearest you and go say howdy — most meet monthly and welcome newcomers.",
    href: "/events",
    cta: "Find your nearest meetup",
  },
  {
    icon: Compass,
    title: "I'm a curious Texan",
    body: "Start with the story of how Bitcoin and Texas found each other — the energy, the migration to Rockdale, and the law that followed.",
    href: "/history-of-bitcoin-in-texas",
    cta: "Read the history",
  },
  {
    icon: Zap,
    title: "I'm here for mining & the grid",
    body: "Texas turned stranded power into hashrate and made miners a tool for grid stability. See where the machines are and how the economics work.",
    href: "/bitcoin-mining-map-texas",
    cta: "See the mining map",
  },
  {
    icon: Scale,
    title: "I follow the policy",
    body: "From the 2014 memo that said Bitcoin isn't “money” to a funded state reserve, Texas keeps drawing the lines. The timeline tracks every move.",
    href: "/texas-bitcoin-law-timeline",
    cta: "Open the law timeline",
  },
];

// The 60-second version — the site's layered thesis, in plain language, one
// sentence each, every line a door deeper in.
const layers = [
  {
    icon: Cpu,
    kicker: "The base layer",
    plain:
      "Bitcoin is money you can hold yourself, secured by electricity and math instead of a bank — and in Texas, that electricity is the whole story.",
    href: "/history-of-bitcoin-in-texas",
    anchor: "how it started in Texas",
  },
  {
    icon: Zap,
    kicker: "The grid",
    plain:
      "Cheap, deregulated Texas power pulled the world's biggest Bitcoin mines here after China banned them — and those mines now help keep the grid steady.",
    href: "/bitcoin-mining-ercot",
    anchor: "mining and ERCOT",
  },
  {
    icon: Scale,
    kicker: "The money law",
    plain:
      "Texas wrote real rules — a state Bitcoin reserve and a gold-backed digital currency — so what the state does with Bitcoin is now a matter of statute, not opinion.",
    href: "/texas-strategic-bitcoin-reserve",
    anchor: "the state reserve",
  },
  {
    icon: Layers,
    kicker: "The frontier",
    plain:
      "Newer tools like the Lightning Network let Bitcoin settle payments instantly and cheaply — the part of the story still being built.",
    href: "/texas-bitcoin-resources",
    anchor: "the tools worth knowing",
  },
];

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never
// schema-only). Plain-language newcomer questions; facts defer to the deep
// pages, which carry the citations.
const faqs = [
  {
    q: "Is Bitcoin legal in Texas?",
    a: "Yes. Owning, buying, selling, and mining Bitcoin are all legal in Texas. The state went further than most: it has funded a Strategic Bitcoin Reserve and recognized a gold-backed digital currency. What the law actually says, and where the lines are, is laid out on our law pages.",
  },
  {
    q: "Does Texas really own Bitcoin?",
    a: "Yes. Senate Bill 21, passed in 2025, created a state-held Strategic Bitcoin Reserve managed by the comptroller and kept outside the general treasury. It's funded by the legislature, not private donations — there's no citizen share or token tied to it. Who holds it and how is covered in detail on our reserve pages.",
  },
  {
    q: "Where can I actually spend or find Bitcoin in Texas?",
    a: "There are merchants who accept it and local groups who use it. The free merchant maps and tools on our resources shelf show where, and the events directory lists the meetups where people gather. We link straight to each source and keep both free and open.",
  },
  {
    q: "Do I need to buy anything to get started?",
    a: "No. Nothing on TexasBitcoin asks you to buy, deposit, or sign up for anything. You can start by reading the history, finding a local meetup, and asking questions in person. We don't sell Bitcoin, custody it, or take referral fees — this is a reference publication, not a store.",
  },
  {
    q: "Is any of this financial advice?",
    a: "No. TexasBitcoin is a research and reference publication, not a licensed advisor. We explain what's true, cite the sources, and stop there. We make no recommendations about whether to own Bitcoin. Allocation, suitability, and tax questions belong with a licensed professional.",
  },
];

export default function StartHerePage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Start Here — New to Bitcoin in Texas?",
    description:
      "A friendly, plain-English on-ramp to Bitcoin in Texas: find your nearest meetup, get the 60-second version, and pick the door that fits.",
    isPartOf: { "@id": `${site.url}/#website` },
    inLanguage: "en-US",
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
      { "@type": "ListItem", position: 2, name: "Start Here", item: pageUrl },
    ],
  };

  const metroCounts = METROS.map((metro) => ({
    metro,
    count: meetups.filter((m) => m.metro === metro).length,
  })).filter((m) => m.count > 0);

  return (
    <>
      {[webPageJsonLd, faqJsonLd, breadcrumbJsonLd].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <LoneStar className="pointer-events-none absolute -right-16 -top-20 h-80 w-80 text-accent/[0.05]" />
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-16 sm:pt-20">
          <nav className="text-xs text-muted-2">
            <Link href="/" className="hover:text-accent-soft">
              Home
            </Link>{" "}
            / Start Here
          </nav>
          <p className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            <LoneStar className="h-3.5 w-3.5" />
            Howdy — new here?
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Start Here
          </h1>
          {/* Direct Answer — self-contained, plain-language, entity named. */}
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Bitcoin in Texas is bigger than a price chart. It&apos;s the mines on
            the grid, the money law coming out of Austin, and the people who meet
            up in every big city to talk about it. This page is the friendly way
            in — no jargon, nothing to buy. Pick the door that fits, and{" "}
            <strong className="text-foreground">start wherever you like</strong>.
          </p>
          <p className="mt-3 text-sm text-muted-2">
            A research and reference publication — not financial, investment,
            legal, or tax advice. Nothing here is for sale.
          </p>
        </div>
      </section>

      {/* Pick your way in */}
      <section className="mx-auto max-w-6xl px-5 pt-14">
        <div className="flex items-center gap-2 text-accent">
          <Compass className="h-5 w-5" strokeWidth={1.5} />
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Pick your way in
          </h2>
        </div>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Four doors into the same story. There&apos;s no wrong one — they all
          connect.
        </p>
        <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {doors.map((d) => {
            const Icon = d.icon;
            return (
              <Link
                key={d.title}
                href={d.href}
                className="group flex flex-col bg-surface p-6 transition-colors hover:bg-surface-2"
              >
                <div className="flex items-center gap-2 text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                    {d.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {d.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft">
                  {d.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Find your people */}
      <section className="mx-auto max-w-6xl px-5 pt-14">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-10 sm:px-10">
          <LoneStar className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 text-accent/[0.06]" />
          <div className="relative">
            <div className="flex items-center gap-2 text-accent">
              <Users className="h-5 w-5" strokeWidth={1.5} />
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Find your people
              </h2>
            </div>
            <p className="mt-3 max-w-2xl text-muted">
              You&apos;ll learn more in one evening at a meetup than in a week of
              reading. Texas has active Bitcoin groups in all four major
              metros — most gather monthly, and newcomers are the whole point.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {metroCounts.map(({ metro, count }) => (
                <Link
                  key={metro}
                  href="/events"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-2 text-sm transition-colors hover:border-accent/40 hover:text-accent-soft"
                >
                  <LoneStar className="h-3.5 w-3.5 text-accent" />
                  {metro}
                  <span className="text-muted-2">
                    {count} group{count === 1 ? "" : "s"}
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/events"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-[#1a1206] transition-colors hover:bg-accent-soft"
            >
              Browse every Texas meetup &amp; conference
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The 60-second version */}
      <section className="mx-auto max-w-6xl px-5 pt-14">
        <div className="flex items-center gap-2 text-accent">
          <Layers className="h-5 w-5" strokeWidth={1.5} />
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            The 60-second version
          </h2>
        </div>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          The whole Texas Bitcoin story is four layers stacked on each other.
          Here&apos;s each one in a sentence — follow any link to go deeper.
        </p>
        <div className="mt-7 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
          {layers.map((l) => {
            const Icon = l.icon;
            return (
              <div key={l.kicker} className="bg-surface p-6 sm:flex sm:gap-5">
                <div className="flex items-center gap-2 text-accent sm:w-44 sm:shrink-0">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                    {l.kicker}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-0">
                  {l.plain}{" "}
                  <Link
                    href={l.href}
                    className="whitespace-nowrap font-medium text-accent-soft underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
                  >
                    {l.anchor} &rarr;
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 pt-14">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Plain-English answers
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          The questions people actually ask on their first day.
        </p>
        <dl className="mt-7 max-w-3xl divide-y divide-border border-t border-border">
          {faqs.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="font-display text-lg font-semibold">{f.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Closing — warm, and back out to the two assets people keep. */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-2">
          That&apos;s the front porch. When you&apos;re ready to wander, the{" "}
          <Link
            href="/events"
            className="underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-soft"
          >
            events directory
          </Link>{" "}
          keeps you close to the people, and the{" "}
          <Link
            href="/texas-bitcoin-resources"
            className="underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-soft"
          >
            resources shelf
          </Link>{" "}
          keeps you close to the facts. Both are free, both link straight to the
          source, and neither will ever ask you for a thing.
        </p>
        <p className="mt-8 text-xs text-muted-2">
          By TexasBitcoin · Updated October 14, 2026
        </p>
      </section>
    </>
  );
}
