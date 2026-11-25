import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const STAR_PATH =
  "M12 1.5l2.95 6.4 7.05.62-5.32 4.65 1.6 6.83L12 16.9 5.72 20.5l1.6-6.83L2 9.02l7.05-.62L12 1.5z";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0b09",
          borderRadius: 36,
          border: "2px solid #2a2722",
        }}
      >
        <svg viewBox="0 0 24 24" width={112} height={112}>
          <path d={STAR_PATH} fill="#f7931a" />
        </svg>
      </div>
    ),
    size
  );
}
