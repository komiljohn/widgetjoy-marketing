import { Check, Minus } from "lucide-react";
import React, { ReactNode } from "react";
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  CheckboxProps,
  composeRenderProps,
  FieldError,
  Label,
  ValidationResult,
} from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";
import { tv } from "tailwind-variants";

import { composeTailwindRenderProps } from "@/components/utils";

export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, "children"> {
  label?: string;
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup {...props} className={composeTailwindRenderProps(props.className, "flex flex-col gap-2")}>
      <Label>{props.label}</Label>
      {props.children}
      <FieldError>{props.errorMessage}</FieldError>
    </AriaCheckboxGroup>
  );
}

const checkboxStyles = tv({
  base: "flex gap-2 items-center group text-sm transition",
  variants: {
    isDisabled: {
      false: "text-gray-800 dark:text-zinc-200",
      true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]",
    },
  },
});

const boxStyles = tv({
  base: "size-4 flex-shrink-0 flex items-center justify-center border transition rounded-[4px] dark:bg-bg-primary-dark shadow-input dark:border-border-dark-primary dark:shadow-xs",
  variants: {
    isSelected: {
      false: "border border-border-primary bg-white",
      true: "border-brand-600 bg-brand-600",
    },
    isInvalid: {
      true: "",
    },
    isDisabled: {
      true: "bg-disabled",
    },
    isFocused: {
      true: "shadow-[0_0_0_4px_rgb(241,242,244)]",
    },
  },
  compoundVariants: [
    {
      isFocused: true,
      isSelected: true,
      class: "shadow-[0_0_0_4px_rgb(255,213,200)]",
    },
  ],
});

const iconStyles =
  "w-4 h-4 text-white group-disabled:text-gray-400 dark:text-slate-900 dark:group-disabled:text-slate-600 forced-colors:text-[HighlightText]";

interface Props extends CheckboxProps {
  name: string;
  label: string;
}

export function FormCheckbox(props: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field }) => (
        <AriaCheckbox
          {...props}
          {...field}
          isSelected={field.value}
          onChange={field.onChange}
          className={composeRenderProps(props.className, (className, renderProps) =>
            checkboxStyles({ ...renderProps, className })
          )}
        >
          {({ isSelected, isIndeterminate, ...renderProps }) => (
            <>
              <div className={boxStyles({ isSelected: isSelected || isIndeterminate, ...renderProps })}>
                {isIndeterminate ? (
                  <Minus aria-hidden className={iconStyles} />
                ) : isSelected ? (
                  <Check aria-hidden className={iconStyles} />
                ) : null}
              </div>
              {props.children}
              <Label>{props.label}</Label>
            </>
          )}
        </AriaCheckbox>
      )}
    />
  );
}
