import React, { cloneElement, ReactElement } from "react";
import { FieldError, Input, Label, TextArea, TextField, TextFieldProps } from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface FormTextInputProps extends TextInputProps {
  name: string;
}

export function FormTextInput({ name, ...props }: FormTextInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => <TextInput {...field} error={error?.message} {...props} />}
    />
  );
}

interface TextInputProps extends TextFieldProps {
  label?: string;
  description?: string;
  error?: string;
  placeholder?: string;
  type?: "multiline";
  leftIcon?: ReactElement;
  className?: string;
}

export const textInputStyles =
  "w-full border shadow-input dark:shadow-xs rounded-lg py-[7px] px-[11px] focus-ring placeholder:text-text-disabled placeholder:text-base text-base text-primary-900 disabled:bg-disabled dark:bg-bg-primary-dark dark:border-dark-primary dark:text-primary-dark-900 dark:border-border-dark-primary dark:focus:border-brand-600 focus:border-border-brand";

export function TextInput({ leftIcon, label, error, placeholder, type, isRequired, ...props }: TextInputProps) {
  const clonedIcon = leftIcon
    ? cloneElement(leftIcon, { className: "absolute left-[13px] top-[calc(50%-10px)] text-text-disabled" })
    : null;

  return (
    <TextField isInvalid={!!error} {...props} className={twMerge("flex flex-col gap-1.5", props.className)}>
      {label && (
        <Label className="text-login-card-title dark:text-primary-dark-900 font-medium text-sm">
          {label} {isRequired && <span>*</span>}
        </Label>
      )}
      <div className="relative flex">
        {type === "multiline" ? (
          <TextArea
            rows={4}
            placeholder={placeholder}
            className={twMerge(textInputStyles, error && "border-brand-600 focus:border-brand-600")}
            style={{ paddingLeft: leftIcon ? "41px" : "11px" }}
          />
        ) : (
          <Input
            placeholder={placeholder}
            className={twMerge(textInputStyles, error && "border-brand-600 focus:border-brand-600")}
            style={{ paddingLeft: leftIcon ? "41px" : "11px" }}
          />
        )}
        {clonedIcon}
      </div>
      <FieldError className="text-brand-600 text-sm">{error}</FieldError>
    </TextField>
  );
}
