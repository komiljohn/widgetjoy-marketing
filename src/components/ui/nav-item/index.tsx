import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export interface NavItemProps {
  href: string;
  lefticon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const button = tv({
  base: "transition rounded-md flex gap-4 items-center justify-center w-full cursor-pointer font-medium size-fit border-none text-base shadow-none focus-ring text-primary-900",
  variants: {
    isActive: {
      true: "text-brand-500",
    },
  },
});

export function NavItem(props: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link {...props} className={twMerge(button({ isActive: pathname === props.href }), props.className)}>
      {props.lefticon}
      <>{props.children}</>
      {props.rightIcon}
    </Link>
  );
}
