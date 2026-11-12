import { ImageResponse } from "next/og";

// Rendered once at build time (static export).
export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Matches app/icon.svg: a white "A" with the green status dot, on near-black.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0d0d",
          color: "#ffffff",
          fontSize: 104,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 34,
            right: 38,
            width: 22,
            height: 22,
            borderRadius: 999,
            background: "#3ddc97",
          }}
        />
        A
      </div>
    ),
    size,
  );
}
