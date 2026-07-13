import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const STAR_PATH =
  "M12 1.5l2.95 6.4 7.05.62-5.32 4.65 1.6 6.83L12 16.9 5.72 20.5l1.6-6.83L2 9.02l7.05-.62L12 1.5z";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <svg viewBox="0 0 24 24" width={24} height={24}>
          <path d={STAR_PATH} fill="#f7931a" />
        </svg>
      </div>
    ),
    size
  );
}
