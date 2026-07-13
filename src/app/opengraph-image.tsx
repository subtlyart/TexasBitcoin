import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STAR_PATH =
  "M12 1.5l2.95 6.4 7.05.62-5.32 4.65 1.6 6.83L12 16.9 5.72 20.5l1.6-6.83L2 9.02l7.05-.62L12 1.5z";

export default function OgImage() {
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

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              maxWidth: 900,
            }}
          >
            Where Bitcoin meets the physical world — and the financial future.
          </div>
          <div style={{ fontSize: 28, color: "#b8b0a0" }}>
            The authority on Bitcoin in Texas · texasbitcoin.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
