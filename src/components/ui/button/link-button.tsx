import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
}

export default function LinkButton({ className, ...props }: Props) {
  return (
    <Link
      href={props.href}
      className={twMerge(
        "text-brand-500 cursor-pointer font-medium hover:text-brand-600 text-sm focus-within:underline outline-none",
        className
      )}
    >
      {props.children}
    </Link>
  );
}
