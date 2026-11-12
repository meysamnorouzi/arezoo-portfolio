import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/data";

/**
 * Framed screenshot of a project.
 * - `crop`: fixed 16:10 frame, anchored to the top of the shot (used in lists).
 * - default: the screenshot at its natural aspect ratio (used on case pages).
 */
export function ProjectCover({
  item,
  href,
  crop = false,
  priority = false,
}: {
  item: CaseStudy;
  href?: string;
  crop?: boolean;
  priority?: boolean;
}) {
  const frame = (
    <div className={`project-cover ${crop ? "project-cover--crop" : ""}`}>
      <Image
        src={item.cover.src}
        alt={item.cover.alt}
        width={item.cover.width}
        height={item.cover.height}
        priority={priority}
        sizes="(min-width: 1200px) 1104px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 48px)"
        className="project-cover-img"
      />
    </div>
  );

  if (!href) return frame;

  return (
    <Link href={href} aria-label={`View the ${item.title} case story`} className="project-cover-link block">
      {frame}
    </Link>
  );
}
