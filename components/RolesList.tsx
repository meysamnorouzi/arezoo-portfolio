"use client";

import Link from "next/link";
import { useState } from "react";
import { cases } from "@/lib/data";

export function RolesList() {
  const [open, setOpen] = useState(false);
  const visible = open ? cases : cases.slice(0, 2);

  return (
    <div>
      <ul>
        {visible.map((item) => (
          <li key={item.slug} className="border-t border-white/8 first:border-t-0">
            <Link
              href={`/work/${item.slug}`}
              className="group flex flex-col gap-2 rounded-[18px] px-2 py-8 transition-colors hover:bg-white/[0.03] md:flex-row md:items-baseline md:justify-between md:gap-8"
            >
              <span className="font-ui text-[16px] font-medium tracking-[-0.1px] text-muted group-hover:text-white">
                {item.role}
              </span>
              <span className="headline display-md max-w-xl text-left text-white md:text-right md:text-[26px]">
                {item.headline.replace(/\.$/, "")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-4 font-ui text-[15px] font-medium tracking-[-0.1px] text-white transition-opacity hover:opacity-70"
        >
          More Roles
        </button>
      ) : null}
    </div>
  );
}
