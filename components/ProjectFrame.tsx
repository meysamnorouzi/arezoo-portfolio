import type { CaseStudy } from "@/lib/data";

export function ProjectFrame({ item }: { item: CaseStudy }) {
  if (item.slug === "pico-ai") return <PicoFrame accent={item.accent} />;
  if (item.slug === "yogian") return <YogaFrame accent={item.accent} />;
  return <CoffeeFrame accent={item.accent} />;
}

function Shell({
  children,
  accent,
  dark,
}: {
  children: React.ReactNode;
  accent: string;
  dark?: boolean;
}) {
  return (
    <div
      className="overflow-hidden rounded-[20px] border border-white/10"
      style={{ background: dark ? "#111318" : "#1a1816" }}
    >
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-3 h-5 flex-1 rounded-full bg-white/6" />
      </div>
      <div className="relative min-h-[240px] p-6 sm:min-h-[300px] sm:p-8" style={{ color: accent }}>
        {children}
      </div>
    </div>
  );
}

function CoffeeFrame({ accent }: { accent: string }) {
  return (
    <Shell accent={accent}>
      <p className="font-ui text-[12px] uppercase tracking-[0.16em] text-white/40">
        Taste first
      </p>
      <p className="mt-3 font-display text-[28px] font-medium leading-tight text-white">
        Find the cup
        <br />
        you’ll reorder.
      </p>
      <div className="mt-8 grid grid-cols-3 gap-3">
        {["Floral", "Nutty", "Cocoa"].map((label) => (
          <div
            key={label}
            className="rounded-2xl border border-white/8 bg-white/4 px-3 py-4 text-center font-ui text-[12px] text-white/70"
          >
            {label}
          </div>
        ))}
      </div>
      <div className="mt-6 h-10 w-40 rounded-full" style={{ background: accent, opacity: 0.85 }} />
    </Shell>
  );
}

function PicoFrame({ accent }: { accent: string }) {
  return (
    <Shell accent={accent} dark>
      <div className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-ui text-[12px] uppercase tracking-[0.16em] text-white/40">
            Pico AI
          </p>
          <p className="mt-3 font-display text-[26px] font-medium leading-tight text-white">
            Prompt with
            <br />
            contrast that holds.
          </p>
          <div className="mt-6 h-16 rounded-xl border border-white/10 bg-white/4" />
          <div className="mt-3 h-8 w-28 rounded-full" style={{ background: accent, opacity: 0.8 }} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gradient-to-br from-[#2a3348] to-[#111318]" />
          <div className="rounded-xl bg-gradient-to-br from-[#3d2f4a] to-[#111318]" />
          <div className="col-span-2 h-24 rounded-xl bg-gradient-to-r from-[#1c2433] via-[#243044] to-[#1a1d24]" />
        </div>
      </div>
    </Shell>
  );
}

function YogaFrame({ accent }: { accent: string }) {
  return (
    <Shell accent={accent}>
      <p className="font-ui text-[12px] uppercase tracking-[0.16em] text-white/40">
        Yogian
      </p>
      <p className="mt-3 font-display text-[28px] font-medium leading-tight text-white">
        A course that
        <br />
        fits your body.
      </p>
      <div className="mt-8 grid grid-cols-3 gap-3">
        {["Beginner", "Steady", "Advanced"].map((label, i) => (
          <div
            key={label}
            className="rounded-2xl border border-white/8 px-3 py-5 text-center"
            style={{ background: i === 1 ? `${accent}22` : "rgba(255,255,255,0.04)" }}
          >
            <p className="font-ui text-[12px] text-white/75">{label}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
}
