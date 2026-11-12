import { ImageResponse } from "next/og";
import { cases } from "@/lib/data";
import { Eyebrow, ogBackground, ogSize, sourceImage } from "@/lib/og";
import { site } from "@/lib/site";

// Rendered once at build time (static export).
export const dynamic = "force-static";

export const alt = `Case study by ${site.name}, ${site.role}`;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export default async function CaseOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = cases.find((entry) => entry.slug === slug) ?? cases[0];
  const cover = await sourceImage(item.cover.src);
  const coverWidth = 640;
  const coverHeight = Math.round((coverWidth * item.cover.height) / item.cover.width);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: ogBackground,
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 560,
            padding: "0 0 0 72px",
          }}
        >
          <Eyebrow>Case study</Eyebrow>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {item.title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 28,
              lineHeight: 1.35,
              color: "#9a9aa0",
            }}
          >
            {item.headline}
          </div>
          <div style={{ display: "flex", marginTop: 40, fontSize: 22, color: "#6e6e73" }}>
            {site.name} · {site.role}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: 600,
            top: Math.max(60, Math.round((630 - coverHeight) / 2)),
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
          }}
        >
          <img src={cover} alt="" width={coverWidth} height={coverHeight} />
        </div>
      </div>
    ),
    size,
  );
}
