import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import {
  DISTRICTS,
  districtBySlug,
  formatDate,
  formatUsd,
  shortDistrict,
  trackedCasesWithSlug,
} from "@/lib/case-tracker";

export const dynamicParams = false;

export function generateStaticParams() {
  return DISTRICTS.map((d) => ({ district: d.slug }));
}

type Params = { params: Promise<{ district: string }> };

function casesForDistrict(name: string) {
  return trackedCasesWithSlug
    .filter((c) => c.district === name)
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { district } = await params;
  const d = districtBySlug(district);
  if (!d) return {};
  const cases = casesForDistrict(d.name);
  const url = `${site.url}/texas-bitcoin-case-tracker/district/${d.slug}`;
  const description = `All ${cases.length} federal § 1960 and cryptocurrency prosecutions tracked in the ${d.name} (${d.cities}), sourced to public DOJ releases.`;
  return {
    title: `${d.name} — Crypto & § 1960 Cases`,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title: `${d.name} Crypto Cases`, description, url },
  };
}

export default async function DistrictPage({ params }: Params) {
  const { district } = await params;
  const d = districtBySlug(district);
  if (!d) notFound();

  const cases = casesForDistrict(d.name);
  const url = `${site.url}/texas-bitcoin-case-tracker/district/${d.slug}`;
  const totalForfeiture = cases.reduce((s, c) => s + c.forfeiture_usd, 0);
  const years = cases.map((c) => c.date?.slice(0, 4)).filter(Boolean);
  const earliest = years.length ? years[years.length - 1] : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Texas Bitcoin Case Tracker",
        item: `${site.url}/texas-bitcoin-case-tracker`,
      },
      { "@type": "ListItem", position: 3, name: d.name, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          /{" "}
          <Link
            href="/texas-bitcoin-case-tracker"
            className="hover:text-accent-soft"
          >
            Case Tracker
          </Link>{" "}
          / <span className="text-muted">{shortDistrict(d.name)}</span>
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            District docket · The money law
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
            Crypto &amp; § 1960 Cases in the {d.name}
          </h1>
          <p className="mt-5 leading-relaxed text-muted">
            Every federal cryptocurrency and unlicensed-money-transmission
            prosecution tracked in the {d.name} — the federal court serving{" "}
            {d.cities}. {cases.length} case{cases.length === 1 ? "" : "s"}
            {earliest ? ` since ${earliest}` : ""}
            {totalForfeiture > 0
              ? `, with ${formatUsd(totalForfeiture)} in announced forfeitures`
              : ""}
            , each sourced to its original DOJ release.
          </p>
        </header>

        <div className="mt-8 divide-y divide-border border-y border-border">
          {cases.map((c) => (
            <article key={c.id} className="py-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                <h2 className="font-semibold leading-snug">
                  <Link
                    href={`/texas-bitcoin-case-tracker/${c.slug}`}
                    className="hover:text-accent-soft"
                  >
                    {c.title}
                  </Link>
                </h2>
                <span className="text-xs whitespace-nowrap text-muted-2">
                  {formatDate(c.date)}
                </span>
              </div>
              {c.summary && (
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.summary}
                </p>
              )}
              <p className="mt-2 text-xs text-muted-2">
                {c.forfeiture_usd > 0 && (
                  <span>
                    Forfeiture:{" "}
                    <span className="text-star">
                      {formatUsd(c.forfeiture_usd)}
                    </span>
                    {" · "}
                  </span>
                )}
                <Link
                  href={`/texas-bitcoin-case-tracker/${c.slug}`}
                  className="underline decoration-accent/40 underline-offset-2 hover:text-accent-soft"
                >
                  Case detail
                </Link>
              </p>
            </article>
          ))}
          {cases.length === 0 && (
            <p className="py-10 text-sm text-muted-2 italic">
              No cases are currently tracked in this district.
            </p>
          )}
        </div>

        <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <Link
            href="/texas-bitcoin-case-tracker"
            className="hover:text-accent-soft"
          >
            ← All tracked cases
          </Link>
          {DISTRICTS.filter((o) => o.slug !== d.slug).map((o) => (
            <Link
              key={o.slug}
              href={`/texas-bitcoin-case-tracker/district/${o.slug}`}
              className="hover:text-accent-soft"
            >
              {o.short} District
            </Link>
          ))}
        </nav>
      </article>
    </>
  );
}
