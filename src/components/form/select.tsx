import { ChevronDown } from "lucide-react";
import React, { ReactNode, useRef } from "react";
import { Button, Key, Select as AriaSelect, SelectProps, SelectValue } from "react-aria-components";
import { Controller, FieldError as FieldErrorType, useFormContext } from "react-hook-form";

import { FieldError, Label } from "./field";
import MyListBox from "./list-box";
import { MyPopover } from "./popover";

interface FormSelectProps extends MySelectProps<{ [key: string]: string }> {
  name: string;
}

export function FormSelect({ name, ...props }: FormSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Select {...props} error={error} selectedKey={field.value} onSelectionChange={field.onChange} />
      )}
    />
  );
}

interface MySelectProps<T extends object> extends Omit<SelectProps<T>, "children"> {
  icon?: ReactNode;
  label?: string;
  className?: string;
  error?: FieldErrorType;
  selectedKey?: Key;
  onSelectionChange?: (key: Key) => void;
  children: ReactNode;
}

export function Select<T extends object>({ children, ...props }: MySelectProps<T>) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <AriaSelect isInvalid={!!props.error} {...props}>
      <Label isRequired={props.isRequired}>{props.label}</Label>
      <Button
        ref={ref}
        className="flex items-center gap-2 py-[7px] px-[13px] border border-border-primary rounded-md text-text-disabled font-medium dark:border-border-dark-primary w-full justify-between focus-ring"
      >
        {!props.selectedKey && props.icon}
        <SelectValue className="flex gap-2 truncate" />
        <span aria-hidden="true">
          <ChevronDown size={20} className="text-tertiary-dark-600" />
        </span>
      </Button>
      <FieldError>{props.error?.message}</FieldError>
      <MyPopover width={ref.current?.offsetWidth}>
        <MyListBox>{children}</MyListBox>
      </MyPopover>
    </AriaSelect>
  );
}
