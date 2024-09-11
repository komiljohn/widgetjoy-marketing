import { CalendarIcon } from "lucide-react";
import React from "react";
import {
  DatePicker as AriaDatePicker,
  DatePickerProps as AriaDatePickerProps,
  DateValue,
  Group,
  ValidationResult,
} from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";

import { Button } from "../ui/button";
import { SimpleText } from "../ui/typography";
import { composeTailwindRenderProps } from "../utils";
import { Calendar } from "./calendar";
import { DateInput } from "./date-input";
import { FieldError, Label } from "./field";
import { MyPopover } from "./popover";

export interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
  name: string;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function DatePicker<T extends DateValue>({ name, label, description, ...props }: DatePickerProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <AriaDatePicker
          {...props}
          isInvalid={!!error?.message}
          {...field}
          className={composeTailwindRenderProps(props.className, "group flex flex-col gap-1 w-[145px]")}
        >
          {label && <Label>{label}</Label>}
          <Group className="flex items-center border border-border-primary rounded-md px-[11px] dark:border-border-dark-primary">
            <DateInput className="flex-1 py-[9px] pr-2 text-sm" />
            <Button variant="link">
              <CalendarIcon aria-hidden size={20} />
            </Button>
          </Group>
          {description && <SimpleText>{description}</SimpleText>}
          <FieldError>{error?.message?.toString()}</FieldError>
          <MyPopover>
            <Calendar />
          </MyPopover>
        </AriaDatePicker>
      )}
    />
  );
}
