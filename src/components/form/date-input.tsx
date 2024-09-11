import React from "react";
import {
  DateField as AriaDateField,
  DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  DateInputProps,
  DateSegment,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { SimpleText } from "../ui/typography";
import { composeTailwindRenderProps } from "../utils";
import { FieldError, Label } from "./field";

export interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateField<T extends DateValue>({ label, description, errorMessage, ...props }: DateFieldProps<T>) {
  return (
    <AriaDateField {...props} className={composeTailwindRenderProps(props.className, "flex flex-col gap-1")}>
      {label && <Label>{label}</Label>}
      <DateInput />
      {description && <SimpleText>{description}</SimpleText>}
      <FieldError>{errorMessage?.toString()}</FieldError>
    </AriaDateField>
  );
}

const segmentStyles = tv({
  base: "inline p-0.5 type-literal:px-0 rounded outline outline-0 caret-transparent text-gray-800 dark:text-zinc-200",
  variants: {
    isPlaceholder: {
      true: "text-text-disabled dark:text-text-disabled italic",
    },
    isDisabled: {
      true: "text-gray-200 dark:text-zinc-600",
    },
    isFocused: {
      true: "bg-blue-600 text-white dark:text-white",
    },
  },
});

export const fieldGroupStyles = tv({
  base: "group flex items-center h-9 bg-white dark:bg-bg-primary-dark border-2 rounded-md overflow-hidden",
});

export function DateInput(props: Omit<DateInputProps, "children">) {
  return (
    <AriaDateInput
      aria-label="date input"
      className={(renderProps) =>
        fieldGroupStyles({ ...renderProps, class: "block min-w-[150px] px-[11px] py-[7px] text-sm" })
      }
      {...props}
    >
      {(segment) => <DateSegment segment={segment} className={segmentStyles} />}
    </AriaDateInput>
  );
}
