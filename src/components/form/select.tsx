import { ChevronDown } from "lucide-react";
import React, { ReactNode, useRef } from "react";
import {
  Button,
  Key,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
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
  selectedKey?: Key;
  onSelectionChange?: (key: Key) => void;
  children: ReactNode;
}

export function Select<T extends object>({ options = [], children, ...props }: MySelectProps<T>) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <AriaSelect isInvalid={!!props.error} {...props}>
      <Label isRequired={props.isRequired}>{props.label}</Label>
      <Button
        ref={ref}
        className="flex items-center gap-2 py-[7px] px-[13px] border border-border-primary rounded-md text-text-disabled font-medium focus:shadow-button-ring outline-none focus:border-border-brand dark:border-border-dark-primary dark:focus:border-brand-600 w-full justify-between"
      >
        {props.icon}
        <SelectValue className="whitespace-nowrap flex gap-2" />
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
            children
          ) : (
            <ListBoxItem className="py-2.5 px-2 outline-none rounded-md">No item</ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

interface IListBoxItem extends ListBoxItemProps {
  className?: string;
}

export function MyListBoxItem({ className, ...props }: IListBoxItem) {
  return (
    <ListBoxItem
      {...props}
      className={twMerge(
        "py-2.5 px-2 flex items-center justify-between outline-none focus:shadow-[0_0_0_4px_#98A2B324] rounded-md cursor-pointer",
        className
      )}
    >
      {props.children}
    </ListBoxItem>
  );
}
