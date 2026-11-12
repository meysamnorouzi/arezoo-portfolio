import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { playbook } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How I Build",
  description:
    "Where strategy meets experience. A product design playbook for clarity, lower risk, and confident decisions.",
  path: "/how-i-build/",
});

export default function HowIBuildPage() {
  return (
    <>
      <PageHero
        muted="Where strategy"
        emphasis="meets experience."
      >
        <p className="font-ui text-[16px] font-medium leading-[1.6] text-subtle">
          I will help you create clarity, lower risk, and answer key questions
          with confidence — so the product is easier to understand and easier to
          finish.
        </p>
      </PageHero>

      {playbook.map((stage) => (
        <section key={stage.label} className="py-16 md:py-24">
          <Container>
            <p className="font-ui text-[13px] font-medium uppercase tracking-[0.12em] text-faint">
              {stage.label}
            </p>
            <h2 className="headline display-lg mt-4 max-w-3xl text-white">
              {stage.question}
            </h2>
            <p className="mt-5 font-ui text-[16px] font-medium text-subtle">
              {stage.lead}
            </p>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {stage.items.map((item) => (
                <div key={item.title}>
                  <h3 className="subhead text-[22px] text-white">{item.title}</h3>
                  <p className="mt-3 font-ui text-[15px] font-medium leading-[1.6] text-subtle">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
