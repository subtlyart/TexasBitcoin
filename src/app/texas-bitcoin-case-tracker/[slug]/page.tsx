import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import {
  allCaseSlugs,
  districtSlug,
  formatDate,
  formatUsd,
  shortDistrict,
  themeLabel,
} from "@/lib/case-tracker";
import {
  casePosture,
  defendants,
  getCaseBySlug,
  officials,
  type Participant,
} from "@/lib/case-detail";

// The dataset is fixed per build (it regenerates on each nightly redeploy), so
// only known slugs render; anything else 404s instead of rendering on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return allCaseSlugs().map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const found = getCaseBySlug(slug);
  if (!found) return {};
  const { case: c, detail } = found;
  const posture = casePosture(detail);
  const url = `${site.url}/texas-bitcoin-case-tracker/${slug}`;
  const description = (
    c.summary ?? `${posture.label} — ${c.district}, ${formatDate(c.date)}.`
  ).slice(0, 200);
  return {
    title: `${c.title} — Texas § 1960 Case`,
    description,
    alternates: { canonical: url },
    // Charge-only cases stay reachable and useful on-site but are kept out of
    // the search index, so a page keyed to a case never becomes the top result
    // about a person who has not been convicted.
    robots: posture.adjudicated ? undefined : { index: false, follow: true },
    openGraph: { type: "article", title: c.title, description, url },
  };
}

function personLine(p: Participant): string {
  const bits = [p.age ? `age ${p.age}` : null, p.location].filter(Boolean);
  return bits.join(" · ");
}

export default async function CaseDetailPage({ params }: Params) {
  const { slug } = await params;
  const found = getCaseBySlug(slug);
  if (!found) notFound();
  const { case: c, detail } = found;

  const posture = casePosture(detail);
  const defs = defendants(detail);
  const offs = officials(detail);
  const dSlug = districtSlug(c.district);
  const url = `${site.url}/texas-bitcoin-case-tracker/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.summary ?? undefined,
    isBasedOn: c.doj_url,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: site.logo },
    },
    mainEntityOfPage: url,
    datePublished: c.date ?? undefined,
    dateModified: c.date ?? undefined,
    isAccessibleForFree: true,
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
  };

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
      { "@type": "ListItem", position: 3, name: c.title, item: url },
    ],
  };

  return (
    <>
      {[articleJsonLd, breadcrumbJsonLd].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

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
          / <span className="text-muted">Case</span>
        </nav>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded bg-accent/15 px-2 py-0.5 text-[0.7rem] font-semibold text-accent-soft">
              {posture.label}
            </span>
            <Link
              href={`/texas-bitcoin-case-tracker/district/${dSlug}`}
              className="rounded border border-border bg-surface px-2 py-0.5 text-[0.7rem] font-semibold text-muted hover:text-accent-soft"
            >
              {shortDistrict(c.district)}
            </Link>
            {detail.metadata?.case_number && (
              <span className="text-[0.7rem] text-muted-2">
                No. {detail.metadata.case_number}
              </span>
            )}
          </div>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
            {c.title}
          </h1>
          <p className="mt-4 text-sm text-muted-2">
            {formatDate(c.date)} · Sourced to the U.S. Department of Justice
          </p>
        </header>

        {/* Presumption-of-innocence framing, weighted by posture */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted">
          {posture.adjudicated ? (
            <>
              This case reached the <strong>{posture.label.toLowerCase()}</strong>{" "}
              stage in the Department of Justice&apos;s public record. Everything
              below reflects only what the government itself announced, and links
              to the original release.
            </>
          ) : (
            <>
              The charges described here are <strong>allegations</strong>.{" "}
              {defs.length > 0
                ? "The defendant(s) are"
                : "Any person charged is"}{" "}
              presumed innocent unless and until proven guilty in a court of law.
              This page reflects only what the Department of Justice has publicly
              announced, and links to the original release.
            </>
          )}
        </div>

        {c.summary && (
          <p className="mt-6 leading-relaxed text-foreground">{c.summary}</p>
        )}

        {/* Key facts */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Fact label="District">
            <Link
              href={`/texas-bitcoin-case-tracker/district/${dSlug}`}
              className="hover:text-accent-soft"
            >
              {shortDistrict(c.district)}
            </Link>
          </Fact>
          <Fact label="Announced">{formatDate(c.date)}</Fact>
          {c.forfeiture_usd > 0 && (
            <Fact label="Forfeiture">
              <span className="text-star">{formatUsd(c.forfeiture_usd)}</span>
            </Fact>
          )}
          <Fact label="Status">{posture.label}</Fact>
        </div>

        {defs.length > 0 && (
          <Section title="Defendants">
            <ul className="space-y-2.5">
              {defs.map((p, i) => (
                <li key={i} className="text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">
                    {p.name ?? "Unnamed defendant"}
                  </span>
                  {personLine(p) && (
                    <span className="text-muted-2"> — {personLine(p)}</span>
                  )}
                  {p.status && (
                    <span className="text-muted"> · {p.status}</span>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {detail.charges.length > 0 && (
          <Section title="Charges">
            <ul className="divide-y divide-border">
              {detail.charges.map((ch, i) => (
                <li key={i} className="py-3 text-sm leading-relaxed">
                  <p className="font-medium text-foreground">
                    {ch.charge_description ?? ch.statute ?? "Charge"}
                  </p>
                  <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-2">
                    {ch.statute && (
                      <span className="rounded border border-border bg-surface px-1.5 py-0.5 text-muted">
                        {ch.statute}
                      </span>
                    )}
                    {ch.max_penalty && <span>Max: {ch.max_penalty}</span>}
                    {ch.defendant && <span>{ch.defendant}</span>}
                    {ch.status && <span>· {ch.status}</span>}
                  </p>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {detail.financial_actions.length > 0 && (
          <Section title="Financial actions">
            <ul className="space-y-2 text-sm leading-relaxed">
              {detail.financial_actions.map((f, i) => (
                <li key={i}>
                  <span className="font-medium text-foreground">
                    {f.action_type ?? "Action"}
                    {f.amount ? `: ${f.amount}` : ""}
                    {f.currency && f.currency !== "USD" ? ` ${f.currency}` : ""}
                  </span>
                  {f.description && (
                    <span className="text-muted-2"> — {f.description}</span>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {detail.quotes.length > 0 && (
          <Section title="From the announcement">
            <div className="space-y-5">
              {detail.quotes.map((q, i) => (
                <figure key={i}>
                  <blockquote className="border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-muted italic">
                    &ldquo;{q.quote_text}&rdquo;
                  </blockquote>
                  {(q.speaker_name || q.speaker_title) && (
                    <figcaption className="mt-1.5 pl-4 text-xs text-muted-2">
                      — {q.speaker_name}
                      {q.speaker_title ? `, ${q.speaker_title}` : ""}
                      {q.speaker_organization ? `, ${q.speaker_organization}` : ""}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </Section>
        )}

        {detail.agencies.length > 0 && (
          <Section title="Investigating agencies">
            <div className="flex flex-wrap gap-1.5">
              {detail.agencies.map((a, i) => (
                <span
                  key={i}
                  className="rounded bg-surface-2 px-2 py-0.5 text-xs text-muted-2"
                  title={a.contribution ?? undefined}
                >
                  {a.agency_name ?? a.abbreviation}
                </span>
              ))}
            </div>
          </Section>
        )}

        {(detail.metadata?.judge_name ||
          detail.metadata?.district_office ||
          offs.length > 0) && (
          <Section title="Case details">
            <dl className="grid grid-cols-1 gap-y-2 text-sm sm:grid-cols-[10rem_1fr]">
              {detail.metadata?.district_office && (
                <Detail label="Prosecuting office">
                  {detail.metadata.district_office}
                </Detail>
              )}
              {detail.metadata?.judge_name && (
                <Detail label="Judge">
                  {detail.metadata.judge_name}
                  {detail.metadata.judge_title
                    ? `, ${detail.metadata.judge_title}`
                    : ""}
                </Detail>
              )}
              {detail.metadata?.case_number && (
                <Detail label="Case number">
                  {detail.metadata.case_number}
                </Detail>
              )}
              {detail.metadata?.crypto_assets && (
                <Detail label="Assets">{detail.metadata.crypto_assets}</Detail>
              )}
            </dl>
          </Section>
        )}

        {c.themes.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-1.5">
            {c.themes.map((t) => (
              <span
                key={t}
                className="rounded bg-surface-2 px-2 py-0.5 text-[0.7rem] text-muted-2"
              >
                {themeLabel(t)}
              </span>
            ))}
          </div>
        )}

        {/* Source & cross-links */}
        <div className="mt-10 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Primary source
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Every fact above is drawn from the Department of Justice&apos;s own
            announcement — a public-domain government record.
          </p>
          <a
            href={c.doj_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-accent-soft underline decoration-accent/40 underline-offset-2"
          >
            Read the original DOJ release →
          </a>
        </div>

        <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <Link
            href="/texas-bitcoin-case-tracker"
            className="hover:text-accent-soft"
          >
            ← All tracked cases
          </Link>
          <Link
            href={`/texas-bitcoin-case-tracker/district/${dSlug}`}
            className="hover:text-accent-soft"
          >
            More {shortDistrict(c.district)} cases
          </Link>
          <Link
            href="/texas-bitcoin-law-timeline"
            className="hover:text-accent-soft"
          >
            The law behind § 1960
          </Link>
        </nav>

        <p className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted-2">
          This is a research and reference page compiled from public DOJ
          announcements, not legal advice. Details reflect the government&apos;s
          statements as of its release date and may not capture later
          developments such as appeals, dismissals, or overturned convictions.
          Defendants are presumed innocent unless and until proven guilty.
        </p>
      </article>
    </>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-surface px-3 py-2.5">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted-2">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-foreground">{children}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 font-display text-xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <dt className="text-muted-2">{label}</dt>
      <dd className="text-foreground">{children}</dd>
    </>
  );
}
