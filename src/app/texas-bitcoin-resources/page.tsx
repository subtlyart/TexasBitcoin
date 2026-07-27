import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
import { site } from "@/lib/site";
import { LoneStar } from "@/components/lone-star";
import {
  resources,
  RESOURCE_CATEGORIES,
  CATEGORY_LABELS,
  CATEGORY_BLURBS,
  RESOURCES_LAST_VERIFIED,
} from "@/lib/resources";

export const metadata: Metadata = {
  title: "Texas Bitcoin Resources — Tools, Maps & Data",
  description:
    "A curated reference shelf for Bitcoin in Texas: merchant and community maps, the node census, ERCOT grid data, and the policy bodies that shape state law. Free tools, linked straight to the source.",
  alternates: { canonical: `${site.url}/texas-bitcoin-resources` },
  openGraph: {
    type: "website",
    title: "Texas Bitcoin Resources — Tools, Maps & Data",
    description:
      "The tools worth knowing for finding and understanding Bitcoin in Texas — from merchant maps to the grid data underneath the mining industry.",
    url: `${site.url}/texas-bitcoin-resources`,
  },
};

export default function ResourcesPage() {
  // ItemList JSON-LD — names and links only, consistent with the events
  // directory. No ratings or review markup; we curate, we don't score.
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Texas Bitcoin Resources",
    itemListElement: resources.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.name,
      url: r.url,
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
            / Resources
          </nav>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Texas Bitcoin Resources
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Bitcoin in Texas is a physical thing — storefronts that take it,
            machines that run it, and a grid that powers it. These are the free
            tools that let you{" "}
            <strong className="text-foreground">see it for yourself</strong>,
            without taking our word or anyone else&apos;s.
          </p>
          <p className="mt-3 text-sm text-muted-2">
            Verified {RESOURCES_LAST_VERIFIED}. We list reference tools only —
            no exchanges, no brokers, no referral links. Nothing here pays us.
          </p>
        </div>
      </section>

      {/* Categories */}
      {RESOURCE_CATEGORIES.map((category) => {
        const entries = resources.filter((r) => r.category === category);
        if (entries.length === 0) return null;

        return (
          <section
            key={category}
            className="mx-auto max-w-6xl px-5 pt-14 first-of-type:pt-14"
          >
            <div className="flex items-center gap-2 text-accent">
              <Compass className="h-5 w-5" strokeWidth={1.5} />
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                {CATEGORY_LABELS[category]}
              </h2>
            </div>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              {CATEGORY_BLURBS[category]}
            </p>
            <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {entries.map((r) => (
                <a
                  key={r.name}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-surface p-6 transition-colors hover:bg-surface-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">
                      {r.name}
                    </h3>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-2 transition-colors group-hover:text-accent" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {r.blurb}
                  </p>
                  {r.caveat && (
                    <p className="mt-3 border-l-2 border-border pl-3 text-xs leading-relaxed text-muted-2">
                      {r.caveat}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </section>
        );
      })}

      {/* Why the shelf is short */}
      <section className="mx-auto max-w-6xl px-5 pt-14">
        <div className="max-w-2xl">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            Why this list is short
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Because most of what gets called a Bitcoin resource is a funnel.
            We link tools that answer a question and then get out of the way —
            not services that want your email, your ID, or your coin. That
            rules out a great deal, and it should.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            It also rules out anything we think won&apos;t be here next year.
            Bitnodes.io crawled the network without interruption from 2013
            until its domain quietly lapsed in May 2026, and the node counters
            that depended on it went dark the same week — a reminder that the
            infrastructure of a decentralized network is still, in places, one
            person paying one invoice. Where we link a stand-in, we say so on
            the card.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Know a tool that belongs here?{" "}
            <a
              href="mailto:texasbitcoin@protonmail.com?subject=Texas%20Bitcoin%20resource%20suggestion"
              className="underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent-soft"
            >
              Send it over
            </a>
            . Listing is free and editorial; see our{" "}
            <Link
              href="/disclaimer"
              className="underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent-soft"
            >
              disclosures
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Ambient context — the shelf sits on the same two currents. */}
      <section className="mx-auto max-w-6xl px-5 pt-10">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-2">
          Read together, these tools describe one system from four angles: the
          counter you can pay at, the nodes keeping the ledger honest, the{" "}
          <Link
            href="/bitcoin-mining-map-texas"
            className="underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-soft"
          >
            gigawatts Texas turned into hashrate
          </Link>
          , and the{" "}
          <Link
            href="/texas-bitcoin-law-timeline"
            className="underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-soft"
          >
            statutes that decided how much of it needed permission
          </Link>
          . Start anywhere; you end up at the same seam.
        </p>
      </section>
    </>
  );
}
