import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { site } from "@/lib/site";
import { ogImages } from "@/lib/og";
import { LoneStar } from "@/components/lone-star";
import {
  terms,
  GLOSSARY_CATEGORIES,
  CATEGORY_LABELS,
  CATEGORY_BLURBS,
  GLOSSARY_LAST_UPDATED,
} from "@/lib/glossary";

const pageUrl = `${site.url}/texas-bitcoin-glossary`;

export const metadata: Metadata = {
  title: "Texas Bitcoin Glossary — Plain-English Terms",
  description:
    "Every word you'll hear about Bitcoin in Texas, explained in plain English — Bitcoin, mining, ERCOT, demand response, SB 21, the Strategic Bitcoin Reserve, Lightning, and more. Written for your first day.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("Texas Bitcoin Glossary — Plain-English Terms"),
    type: "website",
    title: "Texas Bitcoin Glossary — Plain-English Terms",
    description:
      "The jargon of Bitcoin in Texas, defined in one or two plain sentences each — no jargon used to explain jargon.",
    url: pageUrl,
  },
};

export default function GlossaryPage() {
  // DefinedTermSet — the schema built for a glossary. Each term is a DefinedTerm
  // in the set, so answer engines can lift a single definition cleanly.
  const definedTermSetJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${pageUrl}#glossary`,
    name: "Texas Bitcoin Glossary",
    url: pageUrl,
    // Term and definition are the spoken-answer pair; speakable points voice
    // assistants and answer engines at exactly that markup (<dt>/<dd>).
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["dt", "dd"],
    },
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      inDefinedTermSet: `${pageUrl}#glossary`,
      // Canonical external identity, where the term maps to one unambiguously.
      ...(t.sameAs ? { sameAs: t.sameAs } : {}),
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Glossary", item: pageUrl },
    ],
  };

  return (
    <>
      {[definedTermSetJsonLd, breadcrumbJsonLd].map((schema, i) => (
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
            / Glossary
          </nav>
          {/* Direct Answer — self-contained, plain, entities named. */}
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Texas Bitcoin Glossary
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Bitcoin in Texas comes with its own vocabulary — ERCOT, demand
            response, SB 21, Lightning, self-custody. Here&apos;s every word that
            matters, in{" "}
            <strong className="text-foreground">one or two plain sentences</strong>{" "}
            each, with no jargon used to explain the jargon. Written for your
            first day.
          </p>
          <p className="mt-3 text-sm text-muted-2">
            Updated {GLOSSARY_LAST_UPDATED}. For the sourced detail behind any
            term, follow its link to the full page. Not financial, investment,
            legal, or tax advice.
          </p>
        </div>
      </section>

      {/* Terms by category */}
      {GLOSSARY_CATEGORIES.map((category) => {
        const entries = terms.filter((t) => t.category === category);
        if (entries.length === 0) return null;

        return (
          <section key={category} className="mx-auto max-w-6xl px-5 pt-14">
            <div className="flex items-center gap-2 text-accent">
              <BookOpen className="h-5 w-5" strokeWidth={1.5} />
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                {CATEGORY_LABELS[category]}
              </h2>
            </div>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              {CATEGORY_BLURBS[category]}
            </p>
            <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {entries.map((t) => (
                <div key={t.term} className="flex flex-col bg-surface p-6">
                  <dt className="font-display text-lg font-semibold">
                    {t.term}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    {t.definition}
                  </dd>
                  {t.related && (
                    <Link
                      href={t.related.href}
                      className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
                    >
                      {t.related.label}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </div>
              ))}
            </dl>
          </section>
        );
      })}

      {/* Closing — route back to the on-ramp and the two living assets. */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-2">
          Now that the words make sense, the rest of the site opens up. New here?
          The{" "}
          <Link
            href="/start-here"
            className="underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-soft"
          >
            Start Here page
          </Link>{" "}
          points you to the best first read, the{" "}
          <Link
            href="/events"
            className="underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-soft"
          >
            events directory
          </Link>{" "}
          finds the meetup nearest you, and the{" "}
          <Link
            href="/texas-bitcoin-resources"
            className="underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-soft"
          >
            resources shelf
          </Link>{" "}
          collects the free tools. All plain, all free.
        </p>
        <p className="mt-8 text-xs text-muted-2">
          By TexasBitcoin · Updated October 14, 2026
        </p>
      </section>
    </>
  );
}
