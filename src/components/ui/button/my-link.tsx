import Link from "next/link";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function MyLink({ className, href, children }: Props) {
  return (
    <Link
      href={href}
      className={twMerge(
        "rounded-sm focus-ring text-brand-500 dark:text-brand-500 hover:text-brand-600 disabled:dark:text-fg-disabled font-medium",
        className
      )}
    >
      {children}
    </Link>
  );
}
