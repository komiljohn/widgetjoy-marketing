import { Check, ChevronDown } from "lucide-react";
import React, { ReactNode, useRef } from "react";
import {
  Button,
  Key,
  ListBox,
  ListBoxItem,
  Popover,
  Select as AriaSelect,
  SelectProps,
  SelectValue,
} from "react-aria-components";
import { Controller, FieldError as FieldErrorType, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { FieldError, Label } from "./field";

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
  options: { id: string; name: string }[];
  icon?: ReactNode;
  label?: string;
  className?: string;
  error?: FieldErrorType;
  selectedKey: Key;
  onSelectionChange?: (key: Key) => void;
}

export function Select<T extends object>({ options = [], ...props }: MySelectProps<T>) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <AriaSelect isInvalid={!!props.error} {...props}>
      <Label isRequired={props.isRequired}>{props.label}</Label>
      <Button
        ref={ref}
        className="flex items-center gap-2 py-[7px] px-[13px] border border-border-primary rounded-md text-text-disabled font-medium focus-within:shadow-button-ring outline-none focus-within:border-border-brand dark:border-border-dark-primary dark:focus-within:border-brand-600"
      >
        {props.icon}
        <SelectValue className="whitespace-nowrap" />
        <span aria-hidden="true">
          <ChevronDown size={20} />
        </span>
      </Button>
      <FieldError>{props.error?.message}</FieldError>
      <Popover
        className="bg-white dark:bg-active-dark dark:border-border-dark-primary outline-none border border-border-secondary rounded-md py-1.5 px-1.5 shadow-popup"
        style={{ width: ref.current?.offsetWidth }}
      >
        <ListBox className="outline-none space-y-1">
          {options.length ? (
            options.map((item) => (
              <ListBoxItem
                key={item.id}
                textValue={item.name}
                id={item.id}
                className={twMerge(
                  "py-2.5 px-2 flex items-center justify-between outline-none focus-within:shadow-button-ring rounded-md",
                  item.id === props.selectedKey && "bg-disabled dark:bg-secondary-dark"
                )}
              >
                {({ isSelected }) => (
                  <>
                    {item.name}
                    {isSelected && <Check size={20} className="text-brand-600" />}
                  </>
                )}
              </ListBoxItem>
            ))
          ) : (
            <ListBoxItem>No item</ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}
