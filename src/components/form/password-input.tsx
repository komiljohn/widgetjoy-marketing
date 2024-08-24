import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { FieldError, Input, Label, TextField, TextFieldProps } from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";

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
}

export function PasswordInput({ label, error, placeholder, isRequired, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const styles =
    "w-full border shadow-input dark:shadow-xs rounded-lg py-[7px] pl-[11px] pr-9 outline-none focus:outline-offset-0 focus:outline-[4px] focus:outline-ring-error-shadow-xs focus:border-border-error placeholder:text-text-disabled text-primary-900 disabled:bg-disabled placeholder:text-base dark:bg-bg-primary-dark dark:border-dark-primary dark:text-tertiary-dark-600 dark:border-border-dark-primary dark:focus:border-brand-600 error:border-border-error [data-invalid]:border-error-primary";

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      isInvalid={!!error}
      className="flex flex-col gap-1.5"
      {...props}
    >
      {label && (
        <Label className="text-login-card-title font-medium text-sm dark:text-primary-dark-900">
          {label} {isRequired && <span>*</span>}
        </Label>
      )}
      <div className="relative flex">
        <Input placeholder={placeholder} className={styles} style={{ borderColor: error ? "#FDA29B" : "" }} />

        {showPassword ? (
          <Eye size={16} className="absolute top-3 right-3 cursor-pointer" onClick={() => setShowPassword(false)} />
        ) : (
          <EyeOff size={16} className="absolute top-3 right-3 cursor-pointer" onClick={() => setShowPassword(true)} />
        )}
      </div>
      <FieldError className="text-error-primary text-sm">{error}</FieldError>
    </TextField>
  );
}
