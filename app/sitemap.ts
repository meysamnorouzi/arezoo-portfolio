import type { MetadataRoute } from "next";
import { cases } from "@/lib/data";
import { largestImagePath } from "@/lib/image";
import { site } from "@/lib/site";

// Rendered once at build time (static export).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    { path: "/", priority: 1 },
    { path: "/projects/", priority: 0.9 },
    { path: "/about/", priority: 0.8 },
    { path: "/how-i-build/", priority: 0.7 },
    { path: "/contact/", priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));

  const work: MetadataRoute.Sitemap = cases.map((item) => ({
    url: `${site.url}/work/${item.slug}/`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.8,
    images: [`${site.url}${largestImagePath(item.cover.src)}`],
  }));

  return [...pages, ...work];
}
