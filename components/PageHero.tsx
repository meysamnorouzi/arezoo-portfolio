import { Container } from "@/components/Container";

export function PageHero({
  muted,
  emphasis,
  children,
  align = "center",
}: {
  muted: string;
  emphasis: string;
  children?: React.ReactNode;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-left md:text-center" : "text-left";

  return (
    <section className="pt-16 pb-10 md:pt-24 md:pb-14">
      <Container>
        <div className={`mx-auto max-w-[860px] ${alignCls}`}>
          <h1 className={`headline display-xl rise ${alignCls}`}>
            <span className="text-muted">{muted} </span>
            <span className="text-white">{emphasis}</span>
          </h1>
          {children ? (
            <div className={`rise rise-delay-1 mt-8 ${align === "center" ? "md:mx-auto" : ""} max-w-2xl`}>
              {children}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
