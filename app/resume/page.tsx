import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { cases, courses, education, industries, skills } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Product designer with a foundation in urban planning — research, structure, and interface for products people can trust.",
};

export default function ResumePage() {
  return (
    <>
      <PageHero
        muted="I design product growth"
        emphasis="through human-centered decisions."
      >
        <p className="font-ui text-[16px] font-medium leading-[1.6] tracking-[-0.1px] text-subtle">
          Connecting human hesitation to a clearer product path.
        </p>
        <div className="mt-8 flex justify-start md:justify-center">
          <Button href={site.resumePath} external>
            Get Resume
          </Button>
        </div>
      </PageHero>

      <section id="how" className="py-20 md:py-28">
        <Container>
          <h2 className="headline display-lg mx-auto max-w-3xl text-left text-white md:text-center">
            Here’s <span className="italic text-muted">how</span> I help you.
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            <Help
              title="Behavior"
              body="I stay curious, outcome-focused, and pragmatic. I build trust by working from the user’s actual anxiety — then designing the path that removes it."
            />
            <Help
              title="Strengths"
              body="I balance hands-on interface work with product thinking. My strength is turning research and journeys into experiences people can finish."
            />
            <Help
              title="Mindset"
              body="I help others succeed by making the problem shared and visible. With a human-centered mindset, I create products that feel understandable."
            />
          </div>
        </Container>
      </section>

      <section id="industries" className="py-20 md:py-28">
        <Container>
          <h2 className="headline display-lg max-w-3xl text-white">
            I simplify complex systems into intuitive product experiences.
          </h2>
          <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <div key={item.title}>
                <h3 className="font-ui text-[16px] font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-3 font-ui text-[15px] font-medium leading-[1.6] text-subtle">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="workexperience" className="py-20 md:py-28">
        <Container>
          <h2 className="headline display-lg max-w-3xl text-white">
            Selected product work.
          </h2>
          <div className="mt-12">
            {cases.map((item) => (
              <Role
                key={item.slug}
                org={item.title}
                role="Product Designer"
                href={`/work/${item.slug}`}
                prototype={item.prototype}
              />
            ))}
          </div>
        </Container>
      </section>

      <section id="background" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="headline display-lg text-white">Where I come from.</h2>
              <p className="mt-6 max-w-xl font-ui text-[16px] font-medium leading-[1.6] text-subtle">
                Based in Tehran, I trained first as an urban planner — learning to
                read how people move through systems, and where those systems fail
                them. That habit still guides my product work: listen, map the
                friction, then design a path that feels possible.
              </p>
            </div>
            <div className="grid gap-10">
              <div>
                <h3 className="headline text-[22px] text-white">Why I design</h3>
                <p className="mt-3 font-ui text-[15px] font-medium leading-[1.6] text-subtle">
                  I’m interested in turning vision into outcomes by aligning
                  interface decisions with user needs. Design is not only making
                  screens — it is removing the fear of a wrong choice.
                </p>
              </div>
              <div>
                <h3 className="headline text-[22px] text-white">What I bring</h3>
                <p className="mt-3 font-ui text-[15px] font-medium leading-[1.6] text-subtle">
                  Research, information architecture, journey mapping, wireframes,
                  visual systems, and usability testing. I work hands-on from
                  problem to prototype.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact-details" className="py-20 md:py-28">
        <Container>
          <h2 className="headline display-lg text-white">Contact and socials.</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Detail label="Email" value={site.email} href={`mailto:${site.email}`} />
            <Detail label="Phone" value={site.phoneDisplay} href={`tel:${site.phone}`} />
            <Detail label="Address" value={site.location} />
            <Detail label="Instagram" value={site.handles.instagram} href={site.socials.instagram} />
            <Detail label="Dribbble" value={site.handles.dribbble} href={site.socials.dribbble} />
            <Detail label="LinkedIn" value={site.handles.linkedin} href={site.socials.linkedin} />
          </div>
        </Container>
      </section>

      <section id="education" className="py-20 md:py-28">
        <Container>
          <h2 className="headline display-lg text-white">
            Education, courses, and language.
          </h2>
          <div className="mt-12 grid gap-16 lg:grid-cols-2">
            <div>
              {education.map((item) => (
                <div key={item.program} className="border-t border-line-dim py-8">
                  <h3 className="font-ui text-[16px] font-medium text-white">
                    {item.school}
                  </h3>
                  <p className="mt-2 font-ui text-[15px] leading-[1.6] text-subtle">
                    {item.program}
                  </p>
                  <p className="mt-1 font-ui text-[14px] text-faint">
                    {item.dates} · {item.place}
                  </p>
                </div>
              ))}
              <div className="border-t border-line-dim py-8">
                <h3 className="font-ui text-[16px] font-medium text-white">
                  Language
                </h3>
                <p className="mt-2 font-ui text-[15px] text-subtle">
                  English — Intermediate
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-ui text-[16px] font-medium text-white">
                Courses
              </h3>
              {courses.map((item) => (
                <div key={item.school} className="border-t border-line-dim py-8 first:mt-6">
                  <p className="font-ui text-[16px] font-medium text-white">
                    {item.school}
                  </p>
                  <p className="mt-2 font-ui text-[15px] text-subtle">{item.program}</p>
                </div>
              ))}
              <div className="border-t border-line-dim py-8">
                <h3 className="font-ui text-[16px] font-medium text-white">
                  Skills
                </h3>
                <p className="mt-3 max-w-md font-ui text-[14px] leading-7 text-faint">
                  {skills.join("  ·  ")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Help({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="headline text-[22px] text-white">{title}</h3>
      <p className="mt-4 font-ui text-[16px] font-medium leading-[1.6] text-subtle">
        {body}
      </p>
    </div>
  );
}

function Role({
  org,
  role,
  href,
  prototype,
}: {
  org: string;
  role: string;
  href: string;
  prototype?: string;
}) {
  return (
    <div className="grid gap-2 border-t border-line-dim py-8 md:grid-cols-[1fr_1fr_auto] md:items-baseline">
      <Link href={href} className="headline text-[22px] text-white md:text-[24px]">
        {org}
      </Link>
      <span className="font-ui text-[15px] font-medium text-subtle">{role}</span>
      <span className="flex flex-wrap gap-4 font-ui text-[14px] text-faint">
        <Link href={href} className="hover:text-white">
          View Work
        </Link>
        {prototype ? (
          <a href={prototype} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            View in prototype
          </a>
        ) : null}
      </span>
    </div>
  );
}

function Detail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="font-ui text-[13px] font-medium uppercase tracking-[0.08em] text-faint">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="mt-2 block font-ui text-[16px] font-medium text-white hover:opacity-70"
        >
          {value}
        </a>
      ) : (
        <p className="mt-2 font-ui text-[16px] font-medium text-white">{value}</p>
      )}
    </div>
  );
}
