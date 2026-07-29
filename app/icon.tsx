import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#050a14",
          borderRadius: 6,
          border: "1px solid #2dd4bf",
          color: "#2dd4bf",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          fontFamily: "sans-serif",
        }}
      >
        JAM
      </div>
    ),
    { ...size }
  );
}
