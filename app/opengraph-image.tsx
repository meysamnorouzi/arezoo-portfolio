import { ImageResponse } from "next/og";
import { Eyebrow, ogBackground, ogSize, sourceImage } from "@/lib/og";
import { site } from "@/lib/site";

// Rendered once at build time (static export).
export const dynamic = "force-static";

export const alt = `${site.name} — ${site.role}`;
export const size = ogSize;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portrait = await sourceImage(site.portrait);

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
            width: 700,
            padding: "0 0 0 80px",
          }}
        >
          <Eyebrow>
            {site.role} · {site.location}
          </Eyebrow>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: 32,
              fontSize: 64,
              lineHeight: 1.12,
              letterSpacing: -2,
              fontWeight: 600,
            }}
          >
            <span style={{ color: "#b3b3b3" }}>I’m {site.firstName},&nbsp;</span>
            <span>designing products people trust to use.</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 22,
              letterSpacing: 2,
              color: "#6e6e73",
            }}
          >
            SUBSCRIPTION · AI PRODUCTS · WELLNESS
          </div>
        </div>
        <img
          src={portrait}
          alt=""
          width={480}
          height={576}
          style={{ position: "absolute", right: 60, bottom: -40 }}
        />
      </div>
    ),
    size,
  );
}
