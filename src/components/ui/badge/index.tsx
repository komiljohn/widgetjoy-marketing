import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const badge = tv({
  base: "text-xs leading-[18px] border size-fit rounded-full px-[7px] py-px font-medium",
  variants: {
    variant: {
      gray: "text-button-secondary-fg dark: border-border-secondary bg-disabled",
      brand:
        "text-utility-brand-700 dark:bg-utility-orange-50 border-utility-brand-200 dark:border-utility-orange-200 dark:text-utility-orange-700",
    },
  },
  defaultVariants: {
    variant: "gray",
  },
});

interface Props {
  className?: string;
  color?: "gray" | "brand";
  children: ReactNode;
}

export default function Badge({ className, color, children }: Props) {
  return <div className={twMerge(className, badge({ variant: color, className }))}>{children}</div>;
}
