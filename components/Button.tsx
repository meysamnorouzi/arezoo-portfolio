import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "outline" | "solid";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "outline",
  external,
  className = "",
}: Props) {
  const styles =
    variant === "solid"
      ? "bg-white text-[#0d0d0d] hover:bg-[#e8e8ea]"
      : "bg-transparent text-white border border-[#dbdbdb] hover:bg-white hover:text-[#0d0d0d]";

  const cls = `inline-flex items-center justify-center rounded-full px-6 py-3 font-ui text-[15px] font-medium tracking-[-0.1px] transition-colors duration-300 ${styles} ${className}`;

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
