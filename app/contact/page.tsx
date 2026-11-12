import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CopyButton } from "@/components/CopyButton";
import { PageHero } from "@/components/PageHero";
import { PortraitImage } from "@/components/PortraitImage";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Let’s connect — collaboration, product design work, or a conversation about a new opportunity.",
  path: "/contact/",
});

type Channel = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  copy?: boolean;
};

const channels: Channel[] = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, copy: true },
  { label: "LinkedIn", value: site.handles.linkedin, href: site.socials.linkedin, external: true },
  { label: "Dribbble", value: site.handles.dribbble, href: site.socials.dribbble, external: true },
  { label: "Instagram", value: site.handles.instagram, href: site.socials.instagram, external: true },
  { label: "Phone", value: site.phoneDisplay, href: `tel:${site.phone}` },
  { label: "Based in", value: site.location },
];

export default function ContactPage() {
  return (
    <>
      <PageHero muted="Let’s" emphasis="connect.">
        <p className="font-ui text-[16px] font-medium leading-[1.6] text-subtle">
          Whether you’re interested in collaborating, discussing a new
          opportunity, or just want to say hi — I’d love to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-start gap-3 md:justify-center">
          <Button href={`mailto:${site.email}`} variant="solid">
            Email Me
          </Button>
          <Button href={site.socials.linkedin} external>
            Connect on LinkedIn
          </Button>
        </div>
      </PageHero>

      <section className="pt-10 pb-20 md:pt-16 md:pb-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <aside className="self-start lg:sticky lg:top-28">
              <PortraitImage variant="card" className="max-w-[380px]" />
              <p className="mt-6 font-ui text-[16px] font-medium text-white">
                {site.name}
              </p>
              <p className="mt-1 font-ui text-[15px] text-subtle">
                {site.role} · {site.location}
              </p>
              <p className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 px-3.5 py-2 font-ui text-[13px] font-medium text-muted">
                <span className="status-dot" />
                Open to product design collaborations
              </p>
            </aside>

            <div>
              <h2 className="headline display-lg text-white">Reach me directly.</h2>
              <p className="mt-5 max-w-lg font-ui text-[16px] font-medium leading-[1.6] text-subtle">
                Email is the fastest way to start. A few lines on the product,
                where people hesitate today, and your timeline help me reply
                with something useful.
              </p>

              <ul className="mt-12 border-b border-line-dim">
                {channels.map((channel) => (
                  <ChannelRow key={channel.label} {...channel} />
                ))}
              </ul>

              <div className="mt-12 flex flex-col gap-6 rounded-[18px] bg-[#f5f5f7] p-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-ui text-[16px] font-medium tracking-[-0.1px] text-[#1d1d1f]">
                    Prefer the full picture first?
                  </h3>
                  <p className="mt-2 max-w-sm font-ui text-[15px] font-medium leading-[1.6] tracking-[-0.1px] text-[#6e6e73]">
                    Read the case stories or grab my resume — research, structure,
                    and interface, end to end.
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-3">
                  <a
                    href={site.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#1d1d1f] px-5 py-2.5 font-ui text-[14px] font-medium text-white transition-colors hover:bg-black"
                  >
                    Get Resume
                  </a>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-full border border-[#1d1d1f]/20 px-5 py-2.5 font-ui text-[14px] font-medium text-[#1d1d1f] transition-colors hover:border-[#1d1d1f]/50"
                  >
                    View Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ChannelRow({ label, value, href, external, copy }: Channel) {
  return (
    <li className="group relative grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-t border-line-dim py-6 sm:grid-cols-[120px_1fr_auto]">
      <span className="font-ui text-[13px] font-medium uppercase tracking-[0.08em] text-faint">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="col-start-1 row-start-2 break-all font-ui text-[18px] font-medium tracking-[-0.2px] text-white transition-opacity after:absolute after:inset-0 after:content-[''] group-hover:opacity-80 sm:col-start-2 sm:row-start-1 sm:text-[20px]"
        >
          {value}
        </a>
      ) : (
        <span className="col-start-1 row-start-2 font-ui text-[18px] font-medium tracking-[-0.2px] text-white sm:col-start-2 sm:row-start-1 sm:text-[20px]">
          {value}
        </span>
      )}
      <span className="col-start-2 row-span-2 row-start-1 flex justify-end sm:col-start-3 sm:row-span-1">
        {copy ? (
          <CopyButton value={value} label={label.toLowerCase()} />
        ) : href ? (
          <Arrow external={external} />
        ) : null}
      </span>
    </li>
  );
}

function Arrow({ external }: { external?: boolean }) {
  return (
    <svg
      aria-hidden
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={`text-faint transition-all duration-300 group-hover:text-white ${
        external
          ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          : "rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      }`}
    >
      <path
        d="M5 13 13 5M6.5 5H13v6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
