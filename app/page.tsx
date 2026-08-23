import { Button } from "@/components/Button";
import { CaseBlock } from "@/components/CaseBlock";
import { Container } from "@/components/Container";
import { LightCard } from "@/components/LightCard";
import { RolesList } from "@/components/RolesList";
import { TagList } from "@/components/TagList";
import { capabilities, cases, industries } from "@/lib/data";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = cases[1];

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(46% 50% at 50% 29.6%, #021c21 0%, #0d0d0d 100%)",
          }}
        />
        <Container className="px-6 py-24 sm:px-8 md:px-[72px] md:py-36">
          <div className="mx-auto flex max-w-[1056px] flex-col items-start gap-12 text-left md:items-center md:text-center">
            <h1 className="headline display-xl rise max-w-[880px]">
              <span className="text-[#b3b3b3]">I’m {site.firstName}, </span>
              <span className="text-white">
                designing products people trust to use.
              </span>
            </h1>
            <div className="rise rise-delay-1 max-w-2xl font-ui text-[16px] font-medium leading-[1.6] tracking-[-0.1px] text-[#86868b] md:text-[17px]">
              <p>
                I enable product teams to make{" "}
                <span className="text-white">confident</span> decisions and{" "}
                <span className="text-white">deliver outcomes</span> using
                design as a strategic lever.
              </p>
            </div>
            <div className="rise rise-delay-2">
              <Button href={site.socials.linkedin} external>
                Let’s Connect
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="headline display-lg mx-auto max-w-3xl text-left md:text-center">
            <span className="text-[#6e6e73]">I’ll help you to </span>
            <span className="text-white">create clarity on what matters </span>
            <span className="text-[#6e6e73]">and the </span>
            <span className="text-white">confidence to act on it.</span>
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {capabilities.map((item) => (
              <LightCard key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="headline display-lg max-w-3xl">
            <span className="text-[#86868b]">I’ve contributed as a </span>
            <span className="text-white">product designer </span>
            <span className="text-[#86868b]">across </span>
            <span className="text-white">subscription, AI, and wellness:</span>
          </h2>
          <div className="mt-12">
            <RolesList />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="headline display-lg mx-auto max-w-3xl text-left text-white md:text-center">
            I simplify complex systems into intuitive product experiences.
          </h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <LightCard key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="headline display-lg text-white">
              I recently designed Pico AI, making an AI product feel clear in
              dark mode.
            </h2>
            <p className="mt-4 font-ui text-[15px] font-medium text-[#86868b]">
              {featured.role}
            </p>
            <p className="mt-6 font-ui text-[16px] font-medium leading-[1.6] tracking-[-0.1px] text-[#86868b]">
              {featured.summary}
            </p>
            <div className="mt-6">
              <TagList tags={featured.tags} />
            </div>
          </div>
        </Container>
      </section>

      <section id="cases" className="py-20 md:py-28">
        <Container>
          <h2 className="headline display-lg max-w-3xl">
            <span className="text-white">Selected work</span>
            <span className="text-[#6e6e73]"> that makes </span>
            <span className="text-white">lives better</span>
            <span className="text-[#6e6e73]"> and products clearer.</span>
          </h2>
          <div className="mt-10">
            {cases.map((item) => (
              <CaseBlock key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
