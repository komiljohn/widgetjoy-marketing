import { ChevronDown } from "lucide-react";
import React, { ReactNode } from "react";
import { Button, ComboBox, ComboBoxProps, Input } from "react-aria-components";
import { Controller, FieldError as FieldErrorType, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { FieldError, Label } from "./field";
import MyListBox from "./list-box";
import { MyPopover } from "./popover";
import { textInputStyles } from "./text-input";

interface MyComboBoxProps<T extends object> extends Omit<ComboBoxProps<T>, "children"> {
  name: string;
  label?: string;
  description?: string | null;
  error?: FieldErrorType;
  placeholder: string;
  children: (item: T) => ReactNode;
}

export function FormComboBox<T extends object>({ name, label, children, ...props }: MyComboBoxProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <ComboBox {...props} selectedKey={field.value} onSelectionChange={field.onChange} menuTrigger="focus">
          <Label>{label}</Label>
          <div className={twMerge("relative", label && "mt-1")}>
            <Input className={textInputStyles} />
            <Button>
              <ChevronDown size={20} className="absolute top-3 right-3 text-tertiary-dark-600" />
            </Button>
          </div>
          <FieldError>{error?.message}</FieldError>
          <MyPopover>
            <MyListBox>{children}</MyListBox>
          </MyPopover>
        </ComboBox>
      )}
    />
  );
}
