import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <Container className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="headline display-lg text-white">
            Let’s make the next product easier to trust.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-ui text-[16px] font-medium leading-[1.6] tracking-[-0.1px] text-subtle">
            I partner on research, structure, and interface — from first visit to a
            decision people feel ready to make.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/partner" variant="solid">
              How I Work
            </Button>
            <Button href="/playbook">View Playbook</Button>
          </div>
        </div>
      </Container>

      <div className="hairline" />

      <Container className="py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-ui text-[13px] font-medium uppercase tracking-[0.08em] text-faint">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              <li><FooterLink href="/resume">Resume</FooterLink></li>
              <li><FooterLink href="/partner">Your Partner</FooterLink></li>
              <li><FooterLink href="/playbook">Playbook</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </div>
          <div>
            <p className="font-ui text-[13px] font-medium uppercase tracking-[0.08em] text-faint">
              Work
            </p>
            <ul className="mt-5 space-y-3">
              <li><FooterLink href="/#cases">Selected work</FooterLink></li>
              <li><FooterLink href="/work/coffee-subscription">Coffee Subscription</FooterLink></li>
              <li><FooterLink href="/work/pico-ai">Pico AI</FooterLink></li>
              <li><FooterLink href="/work/yogian">Yogian</FooterLink></li>
            </ul>
          </div>
          <div>
            <p className="font-ui text-[13px] font-medium uppercase tracking-[0.08em] text-faint">
              Connect
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <FooterLink href={site.socials.linkedin} external>
                  LinkedIn
                </FooterLink>
              </li>
              <li>
                <FooterLink href={site.socials.dribbble} external>
                  Dribbble
                </FooterLink>
              </li>
              <li>
                <FooterLink href={site.socials.instagram} external>
                  Instagram
                </FooterLink>
              </li>
              <li>
                <FooterLink href={`mailto:${site.email}`}>{site.email}</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-ui text-[15px] font-medium tracking-[-0.1px] text-white">
              {site.name}
            </p>
            <p className="mt-3 font-ui text-[15px] leading-[1.6] text-subtle">
              Product Designer
              <br />
              {site.location}
            </p>
          </div>
        </div>

        <p className="mt-16 font-ui text-[13px] text-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls = "font-ui text-[15px] font-medium tracking-[-0.1px] text-subtle transition-colors hover:text-white";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
