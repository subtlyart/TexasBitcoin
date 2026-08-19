import { ImageResponse } from "next/og";

// Stable brand logo (512×512) for schema.org Organization/publisher `logo`.
// Mirrors the favicon and OG mark: the lone star in Bitcoin orange on the
// site's warm near-black. Served at /logo.
export const runtime = "edge";
export const contentType = "image/png";

const STAR_PATH =
  "M12 1.5l2.95 6.4 7.05.62-5.32 4.65 1.6 6.83L12 16.9 5.72 20.5l1.6-6.83L2 9.02l7.05-.62L12 1.5z";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
          background: "#0c0b09",
        }}
      >
        <svg viewBox="0 0 24 24" width={236} height={236}>
          <path d={STAR_PATH} fill="#f7931a" />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 54,
            fontWeight: 700,
            letterSpacing: 1,
            fontFamily: "sans-serif",
          }}
        >
          <span style={{ color: "#f3eee3" }}>Texas</span>
          <span style={{ color: "#f7931a" }}>Bitcoin</span>
        </div>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
