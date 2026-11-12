import type { NextConfig } from "next";

if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn(
    "\n⚠  NEXT_PUBLIC_SITE_URL is not set — canonical links, sitemap.xml and social\n" +
      "   previews will point at http://localhost:3000. Copy .env.production.example → .env.production.\n",
  );
}

const nextConfig: NextConfig = {
  agentRules: false,
  // Plain static site in /out — upload its contents to any host (e.g. cPanel public_html).
  output: "export",
  // /about → /about/index.html, so Apache serves every page without rewrites.
  trailingSlash: true,
  images: {
    // No server-side optimizer in a static export: images are pre-sized by
    // scripts/optimize-images.mjs and mapped by this loader.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [256, 384],
  },
};

export default nextConfig;
