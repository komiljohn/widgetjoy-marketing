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
  base: "transition rounded-md border flex gap-1.5 items-center justify-center w-full cursor-pointer font-semibold h-fit",
  variants: {
    variant: {
      primary:
        "text-sm bg-brand-500 hover:bg-brand-600 border border-brand-600 px-[13px] py-[9px] pressed:bg-brand-800 text-white outline-none focus-visible:shadow-button-ring shadow-xs disabled:bg-bg-disabled disabled:text-fg-disabled disabled:border-border-disabled_subtle disabled:cursor-default",
      secondary:
        "px-[13px] py-[9px] shadow-xs bg-white border-border-primary rounded-md text-button-secondary-fg text-sm hover:bg-disabled outline-none focus:shadow-[0_0_0_4px_#F1F2F4] disabled:border-border-disabled_subtle disabled:text-fg-disabled",
      destructive: "bg-red-700 hover:bg-red-800 pressed:bg-red-900 text-white hover:bg-disabled",
      icon: "border-0 p-1 flex items-center justify-center text-gray-600 hover:bg-black/[5%] pressed:bg-black/10 dark:text-zinc-400 dark:hover:bg-white/10 dark:pressed:bg-white/20 disabled:bg-transparent",
      link: "text-tertiary-600 border-none",
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
