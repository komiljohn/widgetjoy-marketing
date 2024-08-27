import { ChevronDown } from "lucide-react";
import React, { useRef } from "react";
import {
  Button,
  ComboBox,
  ComboBoxProps,
  Input,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Popover,
} from "react-aria-components";
import { Controller, FieldError as FieldErrorType, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { FieldError, Label } from "./field";
import { textInputStyles } from "./text-input";

interface MyComboBoxProps<T extends object> extends Omit<ComboBoxProps<T>, "children"> {
  name: string;
  label?: string;
  description?: string | null;
  error?: FieldErrorType;
  placeholder: string;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function FormComboBox<T extends object>({ name, label, children, ...props }: MyComboBoxProps<T>) {
  const ref = useRef<HTMLInputElement>(null);
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <ComboBox {...props} selectedKey={field.value} onSelectionChange={field.onChange} menuTrigger="focus">
          <Label>{label}</Label>
          <div className={twMerge("relative", label && "mt-1")}>
            <Input className={textInputStyles} ref={ref} />
            <Button>
              <ChevronDown size={20} className="absolute top-3 right-3 text-tertiary-dark-600" />
            </Button>
          </div>
          <FieldError>{error?.message}</FieldError>
          <Popover
            className="bg-white dark:bg-active-dark dark:border-border-dark-primary outline-none border border-border-secondary rounded-md py-1.5 px-1.5 shadow-popup"
            style={{ width: ref.current?.offsetWidth }}
          >
            <ListBox>{children}</ListBox>
          </Popover>
        </ComboBox>
      )}
    />
  );
}

export function MyListBoxItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={twMerge(
        "py-2.5 px-2 flex items-center gap-2 outline-none focus-within:shadow-button-ring rounded-md cursor-pointer"
      )}
    />
  );
}
