import { Loader } from "lucide-react";
import React, { ReactNode } from "react";
import { Button as RACButton, ButtonProps as RACButtonProps, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";

export interface ButtonProps extends RACButtonProps {
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "destructive" | "icon" | "link";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const button = tv({
  base: "transition rounded-md border flex gap-1.5 items-center justify-center cursor-pointer font-semibold h-fit",
  variants: {
    variant: {
      primary:
        "text-sm bg-brand-500 hover:bg-brand-600 border border-brand-600 px-[13px] py-[9px] pressed:bg-brand-800 text-white outline-none focus-visible:shadow-button-ring shadow-xs disabled:bg-bg-disabled disabled:text-fg-disabled disabled:border-border-secondary disabled:cursor-default",
      secondary:
        "px-[13px] py-[9px] shadow-xs bg-white border-border-primary rounded-md text-button-secondary-fg text-sm hover:bg-disabled outline-none focus:shadow-[0_0_0_4px_#F1F2F4] disabled:border-border-secondary disabled:text-fg-disabled dark:border-border-dark-primary dark:bg-secondary-dark dark:text-secondary-700 dark:hover:bg-active-dark",
      destructive: "bg-red-700 hover:bg-red-800 pressed:bg-red-900 text-white hover:bg-disabled",
      icon: "bg-brand-500 hover:bg-brand-600 border border-brand-600 p-[9px] pressed:bg-brand-800 text-white",
      link: "text-tertiary-600 dark:text-secondary-700 border-none focus-visible:shadow-button-ring shadow-xs disabled:bg-bg-disabled disabled:text-fg-disabled disabled:border-border-secondary disabled:cursor-default outline-none",
    },
    isDisabled: {
      true: "bg-gray-100 dark:bg-zinc-800 text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText] border-black/5 dark:border-white/5",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      isDisabled={props.isDisabled || props.isLoading}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({ ...renderProps, variant: props.variant, className })
      )}
    >
      {props.isLoading ? <Loader size={16} className="animate-spin" /> : props.leftIcon}
      <>{props.children}</>
      {props.rightIcon && props.rightIcon}
    </RACButton>
  );
}
