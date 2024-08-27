import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const card = tv({
  base: "border rounded-xl p-[15px]",
  variants: {
    variant: {
      primary: "bg-white dark:bg-bg-primary-dark border border-border-secondary dark:border-secondary-dark",
      secondary: "bg-disabled dark:bg-secondary-dark border border-border-secondary dark:border-secondary-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface Props {
  className?: string;
  color?: "primary" | "secondary";
  children: ReactNode;
}

export default function Card({ className, color, children }: Props) {
  return <div className={twMerge(card({ variant: color, className }), className)}>{children}</div>;
}
