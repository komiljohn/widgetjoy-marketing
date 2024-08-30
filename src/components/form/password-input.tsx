import { Eye, EyeOff } from "lucide-react";
import React, { useRef, useState } from "react";
import { FieldError, Input, Label, TextField, TextFieldProps } from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface FormPasswordInputProps extends PasswordInputProps {
  name: string;
}

export function FormPasswordInput({ name, ...props }: FormPasswordInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => <PasswordInput {...field} error={error?.message} {...props} />}
    />
  );
}

interface PasswordInputProps extends TextFieldProps {
  label?: string;
  description?: string;
  error?: string;
  placeholder?: string;
  className?: string;
}

export function PasswordInput({ label, error, placeholder, isRequired, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const styles =
    "w-full border shadow-input dark:shadow-xs rounded-lg py-[7px] pl-[11px] pr-9 placeholder:text-text-disabled text-primary-900 disabled:bg-disabled placeholder:text-base dark:bg-bg-primary-dark dark:border-dark-primary dark:text-tertiary-dark-600 dark:border-border-dark-primary error:border-border-error [data-invalid]:border-error-primary placeholder:select-none dark:focus:border-brand-600 outline-none focus:border-brand-600 focus:shadow-button-ring";

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      isInvalid={!!error}
      {...props}
      className={twMerge("flex flex-col gap-1.5", props.className)}
    >
      {label && (
        <Label className="text-login-card-title font-medium text-sm dark:text-primary-dark-900">
          {label} {isRequired && <span>*</span>}
        </Label>
      )}
      <div className="relative flex">
        <Input
          ref={ref}
          placeholder={placeholder}
          className={twMerge(styles, error && "border-brand-600 focus:border-brand-600")}
        />

        {showPassword ? (
          <Eye
            size={16}
            className="absolute top-3 right-3 cursor-pointer"
            onClick={() => {
              setShowPassword(false);
              ref.current?.focus();
            }}
          />
        ) : (
          <EyeOff
            size={16}
            className="absolute top-3 right-3 cursor-pointer"
            onClick={() => {
              setShowPassword(true);
              ref.current?.focus();
            }}
          />
        )}
      </div>
      <FieldError className="text-brand-600 text-sm">{error}</FieldError>
    </TextField>
  );
}
