import type { Metadata } from "next";
import { CaseBlock } from "@/components/CaseBlock";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { cases } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Selected product design work across subscription, AI, and wellness — research, structure, and interface.",
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero muted="Selected work that makes" emphasis="products clearer.">
        <p className="font-ui text-[16px] font-medium leading-[1.6] text-subtle">
          Case stories across subscription, AI, and wellness — each one starts
          from the moment people hesitate, and ends with a path they can finish.
        </p>
      </PageHero>

      <section className="pb-20 md:pb-28">
        <Container>
          {cases.map((item) => (
            <CaseBlock key={item.slug} item={item} />
          ))}
        </Container>
      </section>
    </>
  );
}
