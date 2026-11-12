import Image from "next/image";
import { site } from "@/lib/site";

const ALT = `${site.name}, ${site.role}`;
// Intrinsic size of the transparent cutout in /public.
const WIDTH = 1145;
const HEIGHT = 1374;

/**
 * "hero"  — the transparent cutout placed directly on the hero background.
 * "card"  — the cutout inside a framed, softly lit card.
 */
export function PortraitImage({
  variant = "card",
  className = "",
  priority = false,
}: {
  variant?: "hero" | "card";
  className?: string;
  priority?: boolean;
}) {
  if (variant === "hero") {
    return (
      <div className={`hero-portrait ${className}`}>
        <div aria-hidden className="hero-portrait-glow" />
        <Image
          src={site.portrait}
          alt={ALT}
          width={WIDTH}
          height={HEIGHT}
          priority={priority}
          sizes="(min-width: 1024px) 520px, (min-width: 640px) 440px, 88vw"
          className="hero-portrait-img"
        />
      </div>
    );
  }

  return (
    <div className={`portrait-frame ${className}`}>
      <div className="portrait-media">
        {/* Inset from the top so the cutout has headroom inside the card. */}
        <div className="absolute inset-x-0 top-[7%] bottom-0">
          <Image
            src={site.portrait}
            alt={ALT}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 420px, 90vw"
            className="portrait-img"
          />
        </div>
        <div aria-hidden className="portrait-tint" />
        <div aria-hidden className="portrait-ring" />
      </div>
    </div>
  );
}
