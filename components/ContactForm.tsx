"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="font-ui text-[16px] font-medium leading-[1.6] text-muted">
        Your mail client should open now. If it doesn’t, write directly to{" "}
        <a className="text-white underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        .
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <label className="grid gap-2">
        <span className="font-ui text-[13px] font-medium text-subtle">Name</span>
        <input
          required
          name="name"
          autoComplete="name"
          className="h-12 rounded-2xl border border-line-dim bg-white/3 px-4 font-ui text-[15px] text-white outline-none transition-colors focus:border-white/30"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-ui text-[13px] font-medium text-subtle">Email</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="h-12 rounded-2xl border border-line-dim bg-white/3 px-4 font-ui text-[15px] text-white outline-none transition-colors focus:border-white/30"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-ui text-[13px] font-medium text-subtle">Message</span>
        <textarea
          required
          name="message"
          rows={6}
          className="resize-y rounded-2xl border border-line-dim bg-white/3 px-4 py-3 font-ui text-[15px] text-white outline-none transition-colors focus:border-white/30"
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 font-ui text-[15px] font-medium text-[#0d0d0d] transition-colors hover:bg-[#e8e8ea]"
      >
        Send a Message
      </button>
    </form>
  );
}
