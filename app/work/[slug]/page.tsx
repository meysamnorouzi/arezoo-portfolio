import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ProjectCover } from "@/components/ProjectCover";
import { TagList } from "@/components/TagList";
import { cases } from "@/lib/data";
import { caseJsonLd, JsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = cases.find((entry) => entry.slug === slug);
  if (!item) return {};
  const path = `/work/${item.slug}/`;
  const title = `${item.title} — Case Study`;
  return {
    title,
    description: item.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: `${title} — ${site.name}`,
      description: item.summary,
      authors: [site.name],
      tags: item.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description: item.summary,
    },
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const item = cases.find((entry) => entry.slug === slug);
  if (!item) notFound();

  const index = cases.findIndex((entry) => entry.slug === slug);
  const next = cases[(index + 1) % cases.length];

  return (
    <>
      <JsonLd data={caseJsonLd(item)} />
      <section className="pt-16 pb-10 md:pt-24">
        <Container>
          <p className="font-ui text-[15px] font-medium text-subtle">{item.title}</p>
          <h1 className="headline display-xl mt-4 max-w-4xl text-white">
            {item.headline}
          </h1>
          <p className="mt-5 font-ui text-[15px] font-medium text-subtle">
            {item.role}
          </p>
        </Container>
      </section>

      <section className="pb-4 md:pb-8">
        <Container>
          <ProjectCover item={item} priority />
        </Container>
      </section>

      <section id="headline" className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <h2 className="headline display-md text-white">My role</h2>
              <p className="mt-2 font-display text-[18px] font-medium tracking-[-0.4px] text-faint md:text-[20px] lg:text-[22px]">
                Where did the story begin?
              </p>
            </div>
            <div>
              <p className="font-ui text-[16px] font-medium leading-[1.7] text-subtle">
                {item.challenge}
              </p>
              <p className="mt-5 font-ui text-[16px] font-medium leading-[1.7] text-subtle">
                {item.summary}
              </p>
              <div className="mt-8">
                <TagList tags={item.tags} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="success" className="py-16 md:py-24">
        <Container>
          <h2 className="headline display-lg text-white">Opportunities</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {item.opportunities.map((entry) => (
              <div key={entry.title}>
                <h3 className="subhead text-[22px] text-white">{entry.title}</h3>
                <p className="mt-3 font-ui text-[15px] font-medium leading-[1.6] text-subtle">
                  {entry.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="approach" className="py-16 md:py-24">
        <Container>
          <h2 className="headline display-lg text-white">Approach</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {item.approach.map((entry) => (
              <div key={entry.title}>
                <h3 className="subhead text-[22px] text-white">{entry.title}</h3>
                <p className="mt-3 font-ui text-[15px] font-medium leading-[1.6] text-subtle">
                  {entry.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="outcomes" className="py-16 md:py-24">
        <Container>
          <h2 className="headline display-lg text-white">Impact and outcomes</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {item.outcomes.map((entry) => (
              <div key={entry.title}>
                <h3 className="subhead text-[22px] text-white">{entry.title}</h3>
                <p className="mt-3 font-ui text-[15px] font-medium leading-[1.6] text-subtle">
                  {entry.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="work" className="py-16 md:py-24">
        <Container>
          <h2 className="headline display-lg text-white">See the full project</h2>
          <p className="mt-5 max-w-2xl font-ui text-[16px] font-medium leading-[1.6] text-subtle">
            Walk through the interactive prototype, or read the story behind the
            work where it was first shared.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {item.links.map((link, index) => (
              <Button
                key={link.href}
                href={link.href}
                external
                variant={index === 0 && item.prototype ? "solid" : "outline"}
                className="w-full sm:w-auto"
              >
                {link.label}
              </Button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="border-t border-line-dim pt-12">
            <p className="font-ui text-[13px] uppercase tracking-[0.08em] text-faint">
              Next case
            </p>
            <Link
              href={`/work/${next.slug}`}
              className="headline display-md mt-4 block text-white transition-opacity hover:opacity-70"
            >
              {next.title}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
