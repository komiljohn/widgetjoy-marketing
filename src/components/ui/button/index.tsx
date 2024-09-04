import { Loader } from "lucide-react";
import React, { ReactNode } from "react";
import { Button as RACButton, ButtonProps as RACButtonProps, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";

export interface ButtonProps extends RACButtonProps {
  textColor?: "brand-500" | "text-disabled";
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "destructive" | "link";
  lefticon?: ReactNode;
  rightIcon?: ReactNode;
  isIcon?: boolean;
}

const button = tv({
  base: "transition rounded-md border flex gap-1.5 items-center justify-center cursor-pointer font-semibold h-fit whitespace-nowrap focus-ring select-none",
  variants: {
    variant: {
      primary:
        "text-sm bg-brand-500 hover:bg-brand-600 border border-brand-600 px-[13px] py-[9px] pressed:bg-brand-800 text-white shadow-xs disabled:bg-bg-disabled disabled:text-fg-disabled disabled:border-border-secondary disabled:cursor-default",
      secondary:
        "px-[13px] py-[9px] shadow-xs bg-white border-border-primary rounded-md text-button-secondary-fg text-sm hover:bg-disabled disabled:border-border-secondary disabled:text-fg-disabled dark:border-border-dark-primary dark:bg-secondary-dark dark:text-secondary-700 dark:hover:bg-active-dark dark:disabled:border-border-dark-primary",
      destructive:
        "text-sm bg-button-primary-error-bg hover:bg-button-primary-error-bg_hover px-3.5 py-2.5 pressed:bg-button-primary-error-bg_hover text-white shadow-xs disabled:bg-bg-disabled disabled:text-fg-disabled disabled:cursor-default border-none",
      link: "border-none disabled:text-fg-disabled disabled:cursor-default text-sm font-semibold",
    },
    isIcon: {
      true: "p-[9px]",
      false: "",
    },
    textColor: {
      "text-disabled": "text-text-disabled dark:text-fg-disabled hover:text-text-disabled",
      "brand-500": "text-brand-500 dark:text-brand-500 hover:text-brand-600",
    },
    isDisabled: {
      true: "cursor-default",
    },
  },
  defaultVariants: {
    variant: "primary",
    isIcon: false,
  },
});

export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      isDisabled={props.isDisabled || props.isLoading}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({ ...renderProps, textColor: props.textColor, variant: props.variant, isIcon: props.isIcon, className })
      )}
    >
      {props.isLoading ? <Loader size={16} className="animate-spin" /> : props.lefticon}
      <>{props.children}</>
      {props.rightIcon && props.rightIcon}
    </RACButton>
  );
}
