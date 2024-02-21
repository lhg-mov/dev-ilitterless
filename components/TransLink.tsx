"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";

import Link from "next/link";

export default function TransLink({ href, title, className, desc, haveDesc }: { href: string; haveDesc?: boolean; title?: string; desc?: string; className?: string }) {
  return (
    <Link className={`cursor-pointer ${className}`} href={href}>
      <div className={`link__content`}>
        <div className={`${haveDesc ? "font-semibold text-base mb-1 text-wrap break-words" : "font-normal"}`}>{title}</div>
        <div className={`${haveDesc ? "text-default-500 text-xs text-wrap line-clamp-2 mb-0 pb-0" : "hidden"}`}>{desc}</div>
      </div>
    </Link>
  );
}
