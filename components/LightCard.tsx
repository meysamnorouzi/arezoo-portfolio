export function LightCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-[18px] bg-[#f5f5f7] p-8">
      <h3 className="font-ui text-[16px] font-medium tracking-[-0.1px] text-[#1d1d1f]">
        {title}
      </h3>
      <p className="font-ui text-[15px] font-medium leading-[1.6] tracking-[-0.1px] text-[#6e6e73]">
        {body}
      </p>
    </div>
  );
}
