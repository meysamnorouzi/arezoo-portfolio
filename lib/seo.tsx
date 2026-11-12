import type { Metadata } from "next";
import type { CaseStudy } from "@/lib/data";
import { largestImagePath } from "@/lib/image";
import { site } from "@/lib/site";

/** Shared metadata for a top-level page: title, description, canonical, social. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} — ${site.name}`;
  // Child pages that set openGraph don't inherit app/opengraph-image, so point at it.
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: site.title };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: `${site.url}/`,
  image: `${site.url}${largestImagePath(site.portrait)}`,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tehran",
    addressCountry: "IR",
  },
  knowsAbout: [
    "Product design",
    "User research",
    "Information architecture",
    "Interaction design",
    "Prototyping",
    "Dark mode visual systems",
  ],
  sameAs: Object.values(site.socials),
};

export function caseJsonLd(item: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    headline: item.headline,
    description: item.summary,
    url: `${site.url}/work/${item.slug}/`,
    image: `${site.url}${largestImagePath(item.cover.src)}`,
    keywords: item.tags.join(", "),
    creator: { "@type": "Person", name: site.name, url: site.url },
  };
}

/** Renders a JSON-LD script tag. `<` is escaped so content can't close the tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
