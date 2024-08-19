import React from "react";
import { FieldError, Input, Label, TextArea, TextField, TextFieldProps } from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";

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
}

export function TextInput({ label, error, placeholder, type, isRequired, ...props }: TextInputProps) {
  const styles =
    "w-full border shadow-input rounded-lg py-[7px] px-[11px] outline-none focus:outline-offset-0 focus:outline-[4px] focus:outline-ring-error-shadow-xs focus:border-border-brand placeholder:text-text-disabled placeholder:text-sm text-primary-900 disabled:bg-disabled dark:bg-bg-primary-dark dark:border-dark-primary dark:text-tertiary-dark-600 dark:border-border-dark-primary dark:focus:border-brand-600";

  return (
    <TextField isInvalid={!!error} className="flex flex-col gap-1.5" {...props}>
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
            className={styles}
            style={{ borderColor: error ? "#FDA29B" : "" }}
          />
        ) : (
          <Input placeholder={placeholder} className={styles} style={{ borderColor: error ? "#FDA29B" : "" }} />
        )}
      </div>
      <FieldError className="text-error-primary text-sm">{error}</FieldError>
    </TextField>
  );
}
