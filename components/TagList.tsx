export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-white/10 px-3 py-1.5 font-ui text-[11px] font-medium uppercase tracking-[0.06em] text-faint"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
