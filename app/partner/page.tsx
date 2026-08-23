import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { partnerSections } from "@/lib/data";

export const metadata: Metadata = {
  title: "Your Partner",
  description:
    "Where I create impact — I partner with product teams to turn user anxiety into clear, finishable experiences.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHero
        muted="Where I create"
        emphasis="impact."
      >
        <p className="font-ui text-[16px] font-medium leading-[1.6] text-subtle">
          The impact goes beyond delivery — I help teams figure out what matters,
          make better product decisions, and design outcomes people can complete.
        </p>
      </PageHero>

      {partnerSections.map((section) => (
        <section key={section.id} id={section.id} className="py-20 md:py-28">
          <Container>
            <p className="font-ui text-[13px] font-medium uppercase tracking-[0.08em] text-faint">
              {section.eyebrow}
            </p>
            <h2 className="headline display-lg mt-4 max-w-3xl text-white">
              {section.title}
            </h2>
            <p className="mt-6 max-w-2xl font-ui text-[16px] font-medium leading-[1.6] text-subtle">
              {section.lead}
            </p>
            <div className="mt-14 grid gap-12 sm:grid-cols-2">
              {section.items.map((item) => (
                <div key={item.title}>
                  <h3 className="headline text-[22px] text-white">{item.title}</h3>
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
