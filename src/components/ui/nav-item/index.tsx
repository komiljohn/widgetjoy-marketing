import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export interface NavItemProps {
  href: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const button = tv({
  base: "transition rounded-md flex gap-4 items-center justify-center w-full cursor-pointer font-semibold h-fit px-[13px] py-2 border-none text-base shadow-none focus:shadow-[0_0_0_4px_#F1F2F4] outline-none",
  variants: {
    isActive: {
      true: "bg-disabled",
    },
  },
});

export function NavItem(props: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link {...props} className={twMerge(props.className, button({ isActive: pathname === props.href }))}>
      {props.leftIcon}
      <>{props.children}</>
      {props.rightIcon}
    </Link>
  );
}
