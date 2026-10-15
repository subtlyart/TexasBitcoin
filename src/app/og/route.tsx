import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Per-page Open Graph / social card, rendered on demand.
//
// Pages pass their own title (and an optional kicker — the section it belongs
// to, e.g. "People", "The grid", "Law & policy") via query string; see
// `ogImages` in `src/lib/og.ts`. Without a title this falls back to the brand
// card, matching the root `opengraph-image.tsx` so a bare /og is never blank.
//
// Same visual language as the root OG mark and /logo: the lone star in Bitcoin
// orange on the site's warm near-black, Fraunces-less (edge runtime uses the
// system serif/sans stack — next/font is not available here).
export const runtime = "edge";
export const contentType = "image/png";

const STAR_PATH =
  "M12 1.5l2.95 6.4 7.05.62-5.32 4.65 1.6 6.83L12 16.9 5.72 20.5l1.6-6.83L2 9.02l7.05-.62L12 1.5z";

const SIZE = { width: 1200, height: 630 };

// Scale the headline to the title length so long and short titles both sit
// comfortably without overflowing the card.
function titleFontSize(title: string): number {
  const n = title.length;
  if (n <= 36) return 72;
  if (n <= 60) return 60;
  if (n <= 90) return 50;
  return 42;
}

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawTitle = (searchParams.get("title") ?? "").trim();
  const title = rawTitle.slice(0, 160);
  const kicker = (searchParams.get("kicker") ?? "").trim().slice(0, 48);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0c0b09 0%, #1b1916 100%)",
          color: "#f3eee3",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Oversized watermark star, echoing the site's hero motif */}
        <svg
          viewBox="0 0 24 24"
          width={560}
          height={560}
          style={{ position: "absolute", right: -120, top: -140 }}
        >
          <path d={STAR_PATH} fill="rgba(247, 147, 26, 0.08)" />
        </svg>

        {/* Brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg viewBox="0 0 24 24" width={36} height={36}>
            <path d={STAR_PATH} fill="#f7931a" />
          </svg>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#f7931a",
            }}
          >
            TexasBitcoin
          </div>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {kicker ? (
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#c98a4e",
              }}
            >
              {kicker}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: title ? titleFontSize(title) : 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            {title || site.tagline}
          </div>
          <div style={{ fontSize: 26, color: "#b8b0a0" }}>
            {`The authority on Bitcoin in Texas · ${site.domain}`}
          </div>
        </div>
      </div>
    ),
    SIZE
  );
}
