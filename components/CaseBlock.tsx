import Link from "next/link";
import { TagList } from "@/components/TagList";
import type { CaseStudy } from "@/lib/data";

export function CaseBlock({ item }: { item: CaseStudy }) {
  return (
    <article className="border-t border-line-dim py-14 md:py-16">
      <p className="font-ui text-[15px] font-medium tracking-[-0.1px] text-subtle">
        {item.role}
      </p>
      <h3 className="headline display-md mt-4 max-w-3xl text-white">{item.title}</h3>
      <p className="mt-5 max-w-2xl font-ui text-[16px] font-medium leading-[1.6] tracking-[-0.1px] text-subtle">
        {item.summary}
      </p>
      <div className="mt-6">
        <TagList tags={item.tags} />
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link
          href={`/work/${item.slug}`}
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
