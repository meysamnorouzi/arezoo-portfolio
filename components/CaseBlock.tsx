import Link from "next/link";
import { ProjectCover } from "@/components/ProjectCover";
import { TagList } from "@/components/TagList";
import type { CaseStudy } from "@/lib/data";

export function CaseBlock({ item }: { item: CaseStudy }) {
  const href = `/work/${item.slug}`;

  return (
    <article className="border-t border-line-dim py-12 md:py-16">
      <ProjectCover item={item} href={href} crop />
      <h3 className="headline display-md mt-8 text-white md:mt-10">
        <Link href={href} className="transition-opacity hover:opacity-80">
          {item.title}
        </Link>
      </h3>
      <p className="mt-5 font-ui text-[16px] font-medium leading-[1.6] tracking-[-0.1px] text-subtle">
        {item.summary}
      </p>
      <div className="mt-6">
        <TagList tags={item.tags} />
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link
          href={href}
          className="inline-flex font-ui text-[15px] font-medium tracking-[-0.1px] text-white transition-opacity hover:opacity-70"
        >
          View Case Story
        </Link>
        {item.prototype ? (
          <a
            href={item.prototype}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex font-ui text-[15px] font-medium tracking-[-0.1px] text-subtle transition-colors hover:text-white"
          >
            View in prototype
          </a>
        ) : null}
      </div>
    </article>
  );
}
