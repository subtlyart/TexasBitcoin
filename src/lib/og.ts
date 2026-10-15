import type { Metadata } from "next";

/**
 * Per-page Open Graph image descriptor.
 *
 * Returns the `openGraph.images` array pointing at the on-demand `/og` route
 * (see `src/app/og/route.tsx`), so every page gets a distinct social/SERP card
 * carrying its own title instead of the shared brand card. The URL is relative;
 * Next resolves it against `metadataBase` into the absolute URL crawlers fetch.
 *
 * `kicker` is an optional section label (e.g. "People", "The grid") rendered
 * above the title. Twitter/X falls back to `og:image` when no `twitter:image`
 * is set, so a single OG image covers both.
 */
export function ogImages(
  title: string,
  opts: { kicker?: string } = {}
): NonNullable<NonNullable<Metadata["openGraph"]>["images"]> {
  const params = new URLSearchParams({ title });
  if (opts.kicker) params.set("kicker", opts.kicker);
  return [
    {
      url: `/og?${params.toString()}`,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];
}
