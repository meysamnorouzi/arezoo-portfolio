"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#0d0d0d]/70 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-ui text-[15px] font-medium tracking-[-0.1px] text-subtle transition-colors hover:text-white"
        >
          Arezoo Jafary
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className="nav-link font-ui text-[15px] font-medium tracking-[-0.1px]"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="font-ui text-[15px] font-medium text-subtle md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line-dim px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link font-ui text-[18px] font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
