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
  size?: "base" | "sm" | "lg";
}

const button = tv({
  base: "transition rounded-md flex gap-1.5 items-center justify-center cursor-pointer font-medium h-fit whitespace-nowrap focus-ring select-none",
  variants: {
    variant: {
      primary:
        "text-base bg-brand-500 hover:bg-brand-600 px-3 py-1.5 pressed:bg-brand-800 text-white disabled:bg-bg-disabled disabled:shadow-[0px_-2.4px_0px_0px_#98A2B3_inset] disabled:text-fg-disabled disabled:cursor-default shadow-[0px_-2.4px_0px_0px_#E3370B_inset,0px_0px_0px_1px_#E5370F,0px_1px_3px_0px_#8F270933]",
      secondary:
        "px-3 py-1.5 bg-white border-border-primary rounded-md text-button-secondary-fg text-base hover:bg-disabled disabled:border-border-secondary disabled:text-fg-disabled dark:border-border-dark-primary dark:bg-secondary-dark dark:text-secondary-700 dark:hover:bg-active-dark dark:disabled:border-border-dark-primary shadow-[0px_-2.4px_0px_0px_#3E3E3E0A_inset,0px_0px_0px_1px_#EBEBEB,0px_1px_3px_0px_#8F8F8F33]",
      destructive:
        "text-base bg-button-primary-error-bg hover:bg-button-primary-error-bg_hover px-3.5 py-2.5 pressed:bg-button-primary-error-bg_hover text-white shadow-xs disabled:bg-bg-disabled disabled:text-fg-disabled disabled:cursor-default border-none",
      link: "border-none disabled:text-fg-disabled disabled:cursor-default text-sm font-semibold dark:disabled:text-fg-disabled",
    },
    size: {
      base: "",
      sm: "",
      lg: "text-lg py-2.5 px-4",
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
  compoundVariants: [
    {
      variant: "secondary",
      size: "sm",
      className: "py-[7px]",
    },
  ],
});

export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      isDisabled={props.isDisabled || props.isLoading}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({
          ...renderProps,
          size: props.size,
          textColor: props.textColor,
          variant: props.variant,
          isIcon: props.isIcon,
          className,
        })
      )}
    >
      {props.isLoading ? <Loader size={16} className="animate-spin" /> : props.lefticon}
      <>{props.children}</>
      {props.rightIcon && props.rightIcon}
    </RACButton>
  );
}
