import { Button } from "@/components/Button";
import { CaseBlock } from "@/components/CaseBlock";
import { Container } from "@/components/Container";
import { LightCard } from "@/components/LightCard";
import { PortraitImage } from "@/components/PortraitImage";
import { RolesList } from "@/components/RolesList";
import { TagList } from "@/components/TagList";
import { capabilities, cases, industries } from "@/lib/data";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = cases[1];

  return (
    <>
      <section className="hero-shell relative isolate overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(52% 46% at 32% 30%, rgba(4, 32, 36, 0.9) 0%, rgba(13, 13, 13, 0) 62%), radial-gradient(46% 50% at 50% 29.6%, #021c21 0%, #0d0d0d 100%)",
          }}
        />
        <div aria-hidden className="hero-grid" />
        <Container className="relative">
          <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="flex flex-col items-start pt-16 text-left md:pt-24 lg:self-center lg:py-28">
              <p className="hero-eyebrow rise">
                <span className="status-dot" />
                {site.role} · {site.location}
              </p>
              <h1 className="headline display-xl rise rise-delay-1 mt-6 max-w-[720px]">
                <span className="text-[#b3b3b3]">I’m {site.firstName}, </span>
                <span className="text-white">
                  designing products people trust to use.
                </span>
              </h1>
              <div className="rise rise-delay-2 mt-6 max-w-xl font-ui text-[16px] font-medium leading-[1.6] tracking-[-0.1px] text-[#86868b] md:text-[17px]">
                <p>
                  I enable product teams to make{" "}
                  <span className="text-white">confident</span> decisions and{" "}
                  <span className="text-white">deliver outcomes</span> using
                  design as a strategic lever.
                </p>
              </div>
              <div className="rise rise-delay-3 mt-9 flex flex-wrap items-center gap-3">
                <Button href="/contact">Let’s Connect</Button>
                <Button href="/projects" variant="outline">
                  View Work
                </Button>
              </div>
              <div className="rise rise-delay-3 mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 whitespace-nowrap font-ui text-[12px] font-medium tracking-[0.06em] text-faint sm:gap-x-4 sm:text-[13px]">
                <span>SUBSCRIPTION</span>
                <span className="hero-sep" />
                <span>AI PRODUCTS</span>
                <span className="hero-sep" />
                <span>WELLNESS</span>
              </div>
            </div>

            <PortraitImage variant="hero" priority className="rise rise-delay-1" />
          </div>
        </Container>
        <div aria-hidden className="hero-fade" />
      </section>

      <section className="py-16 md:py-28">
        <Container>
          <h2 className="headline display-lg mx-auto max-w-3xl text-left md:text-center">
            <span className="text-white">Clear priorities.</span>
            <span className="text-[#6e6e73]"> Confident decisions.</span>
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {capabilities.map((item) => (
              <LightCard key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-28">
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

      <section className="py-16 md:py-28">
        <Container>
          <h2 className="headline display-lg mx-auto max-w-3xl text-left text-white md:text-center">
            Complex products, made simple.
          </h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <LightCard key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-28">
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

      <section id="cases" className="py-16 md:py-28">
        <Container>
          <h2 className="headline display-lg text-white">Projects</h2>
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
