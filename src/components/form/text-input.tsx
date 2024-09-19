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
  lefticon?: ReactElement;
  className?: string;
  isDark?: boolean;
  inputClassName?: string;
}

export const textInputStyles =
  "w-full border  rounded-lg py-[7px] px-[11px] placeholder:text-text-disabled placeholder:text-base text-base disabled:bg-disabled outline-none focus:border-brand-600 shadow-input focus:shadow-button-ring text-primary-900 focus:border-brand-600";

const darkStyles =
  "shadow-xs focus:shadow-button-ring bg-gray-light-800 text-primary-dark-900 border-border-dark-primary focus:border-brand-600";

export function TextInput({
  lefticon,
  label,
  error,
  placeholder,
  type,
  isRequired,
  inputClassName,
  isDark,
  ...props
}: TextInputProps) {
  const clonedIcon = lefticon
    ? cloneElement(lefticon, { className: "absolute left-[13px] top-[calc(50%-10px)] text-text-disabled" })
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
            className={twMerge(
              textInputStyles,
              isDark && darkStyles,
              inputClassName,
              error && "border-brand-600 focus:border-brand-600"
            )}
            style={{ paddingLeft: lefticon ? "41px" : "11px" }}
          />
        ) : (
          <Input
            placeholder={placeholder}
            className={twMerge(
              textInputStyles,
              isDark && darkStyles,
              inputClassName,
              error && "border-brand-600 focus:border-brand-600"
            )}
            style={{ paddingLeft: lefticon ? "41px" : "11px" }}
          />
        )}
        {clonedIcon}
      </div>
      <FieldError className="text-brand-600 text-sm">{error}</FieldError>
    </TextField>
  );
}
