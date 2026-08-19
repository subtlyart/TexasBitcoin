import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, CalendarDays } from "lucide-react";
import { site } from "@/lib/site";
import { LoneStar } from "@/components/lone-star";
import {
  meetups,
  conferences,
  METROS,
  LAST_VERIFIED,
  type Meetup,
} from "@/lib/events";

export const metadata: Metadata = {
  title: "Texas Bitcoin Events — Meetups & Conferences",
  description:
    "A free, open directory of Bitcoin meetups and conferences across Texas — Austin, Dallas–Fort Worth, Houston, and San Antonio, linked to the organizer.",
  alternates: { canonical: `${site.url}/events` },
  openGraph: {
    type: "website",
    title: "Texas Bitcoin Events — Meetups & Conferences",
    description:
      "Every Bitcoin meetup and conference in Texas, curated and linked straight to the source. Free and open.",
    url: `${site.url}/events`,
  },
};

const platformLabel: Record<Meetup["platform"], string> = {
  Meetup: "Meetup",
  X: "X / Twitter",
  Web: "Website",
};

export default function EventsPage() {
  // ItemList JSON-LD (names + links only — no unverified dates, which would
  // violate Google's Event rich-result guidelines).
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Texas Bitcoin Events",
    itemListElement: [...conferences, ...meetups].map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: e.name,
      url: e.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <LoneStar className="pointer-events-none absolute -right-16 -top-20 h-80 w-80 text-accent/[0.05]" />
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-16 sm:pt-20">
          <nav className="text-xs text-muted-2">
            <Link href="/" className="hover:text-accent-soft">
              Home
            </Link>{" "}
            / Events
          </nav>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Texas Bitcoin Events
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            The Bitcoin community shouldn&apos;t need a paid login to find its own
            meetups. This is a free, open directory of the meetups and
            conferences worth knowing across Texas — curated, and linked{" "}
            <strong className="text-foreground">straight to the organizer</strong>,
            where the next date always lives.
          </p>
          <p className="mt-3 text-sm text-muted-2">
            Verified {LAST_VERIFIED}. Cadence is approximate — always confirm the
            next date and details at the organizer&apos;s link.
          </p>
        </div>
      </section>

      {/* Conferences */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex items-center gap-2 text-accent">
          <CalendarDays className="h-5 w-5" strokeWidth={1.5} />
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Conferences &amp; Summits
          </h2>
        </div>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          The marquee gatherings that bring the Texas Bitcoin scene together.
        </p>
        <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {conferences.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-surface p-6 transition-colors hover:bg-surface-2"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {c.name}
                </h3>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-2 transition-colors group-hover:text-accent" />
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-2">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {c.location}
                </span>
                <span className="text-accent">{c.cadence}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Meetups by metro */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="flex items-center gap-2 text-accent">
          <MapPin className="h-5 w-5" strokeWidth={1.5} />
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Meetups by metro
          </h2>
        </div>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Recurring local groups. Most gather monthly — tap through for the next
          one.
        </p>

        <div className="mt-8 space-y-10">
          {METROS.map((metro) => {
            const groups = meetups.filter((m) => m.metro === metro);
            if (groups.length === 0) return null;
            return (
              <div key={metro}>
                <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
                  <LoneStar className="h-4 w-4 text-accent" />
                  {metro}
                </h3>
                <div className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                  {groups.map((m) => (
                    <a
                      key={m.name}
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col bg-surface p-5 transition-colors hover:bg-surface-2"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-medium text-foreground">
                          {m.name}
                        </span>
                        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-2 transition-colors group-hover:text-accent" />
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {m.focus}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-2">
                        <span className="text-accent">{m.cadence}</span>
                        <span>· {platformLabel[m.platform]}</span>
                        {m.bitcoinOnly && <span>· Bitcoin-focused</span>}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Ambient context — the seam runs under the community layer too. */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-2">
          Every room on this list sits downstream of the same two currents:
          the{" "}
          <Link
            href="/bitcoin-mining-map-texas"
            className="underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-soft"
          >
            grid that made Texas the mining capital of the world
          </Link>{" "}
          and the{" "}
          <Link
            href="/texas-bitcoin-law-timeline"
            className="underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-soft"
          >
            money law that decided a bitcoiner needs no permission to sell
            what&apos;s theirs
          </Link>
          . The meetups came after both — people gather where the ground is
          already favorable.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-2">
          Looking for Bitcoin between meetups? The{" "}
          <Link
            href="/texas-bitcoin-resources"
            className="underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-soft"
          >
            resources shelf
          </Link>{" "}
          collects the free tools for finding it in the wild across Texas —
          merchant maps, the node census, and the grid data underneath it all.
        </p>
      </section>

      {/* Submit CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-10 sm:px-10">
          <LoneStar className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 text-accent/[0.06]" />
          <div className="relative max-w-xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Running an event we&apos;ve missed?
            </h2>
            <p className="mt-3 text-muted">
              This directory is for the community. If you organize a Texas
              Bitcoin meetup or conference and you&apos;re not listed — or a link
              here has gone stale — send it over and we&apos;ll add or fix it.
              Listings are free, and we link straight to you.
            </p>
            <a
              href="mailto:texasbitcoin@protonmail.com?subject=Texas%20Bitcoin%20event%20submission"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-[#1a1206] transition-colors hover:bg-accent-soft"
            >
              Submit an event
            </a>
            <p className="mt-3 text-xs text-muted-2">
              A submission form is on the roadmap. Inclusion is editorial and
              free; see our{" "}
              <Link href="/disclaimer" className="underline hover:text-accent-soft">
                disclosures
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
