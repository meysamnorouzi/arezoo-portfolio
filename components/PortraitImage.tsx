import Image from "next/image";

type Props = {
  variant?: "hero" | "card" | "avatar";
  className?: string;
  priority?: boolean;
};

const SIZES = {
  hero: "(min-width: 1024px) 44vw, (min-width: 640px) 80vw, 100vw",
  card: "(min-width: 1024px) 30vw, 50vw",
  avatar: "176px",
} as const;

export function PortraitImage({
  variant = "card",
  className = "",
  priority = false,
}: Props) {
  const size = SIZES[variant];

  return (
    <div className={`portrait-frame portrait-frame--${variant} ${className}`}>
      <div className="portrait-media">
        <Image
          src="/IMG_4929.JPG"
          alt="Arezoo Jafary, Product Designer"
          fill
          priority={priority}
          sizes={size}
          className="portrait-img"
        />
        <div aria-hidden className="portrait-tint" />
        <div aria-hidden className="portrait-grain" />
        <div aria-hidden className="portrait-ring" />
      </div>
    </div>
  );
}
