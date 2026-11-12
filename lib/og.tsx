import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

/** Reads an original from /assets/images and returns it as a data URI for next/og. */
export async function sourceImage(src: string) {
  const file = await readFile(join(process.cwd(), "assets/images", src));
  const type = src.endsWith(".png") ? "image/png" : "image/jpeg";
  return `data:${type};base64,${file.toString("base64")}`;
}

export const ogBackground =
  "radial-gradient(circle at 30% 20%, #05323a 0%, #0d0d0d 60%)";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        fontSize: 22,
        letterSpacing: 3,
        textTransform: "uppercase",
        color: "#8a8a8f",
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: 999,
          background: "#3ddc97",
        }}
      />
      {children}
    </div>
  );
}
