import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let’s connect — collaboration, product design work, or a conversation about a new opportunity.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero muted="Let’s" emphasis="connect.">
        <p className="font-ui text-[16px] font-medium leading-[1.6] text-subtle">
          I work through focused product design engagements — research, structure,
          and interface — helping teams stay aligned and solve the moments people
          hesitate.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-start gap-3 md:justify-center">
          <Button href={site.socials.linkedin} variant="solid" external>
            Connect on LinkedIn
          </Button>
          <Button href="#form">Send a Message</Button>
        </div>
      </PageHero>

      <section id="form" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="headline display-lg text-white">Send a message.</h2>
              <p className="mt-5 max-w-md font-ui text-[16px] font-medium leading-[1.6] text-subtle">
                I’d love to hear from you. Whether you’re interested in
                collaborating, discussing new opportunities, or just want to say
                hi.
              </p>
              <ul className="mt-10 space-y-3 font-ui text-[15px] text-subtle">
                <li>
                  <a className="hover:text-white" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href={`tel:${site.phone}`}>
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>{site.location}</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
