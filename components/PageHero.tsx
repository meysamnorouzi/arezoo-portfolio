import { Container } from "@/components/Container";

export function PageHero({
  muted,
  emphasis,
  children,
}: {
  muted: string;
  emphasis: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="pt-16 pb-10 md:pt-24 md:pb-14">
      <Container>
        <div className="mx-auto max-w-[860px] text-left md:text-center">
          <h1 className="headline display-xl rise">
            <span className="text-muted">{muted} </span>
            <span className="text-white">{emphasis}</span>
          </h1>
          {children ? (
            <div className="rise rise-delay-1 mt-8 max-w-2xl md:mx-auto">{children}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
