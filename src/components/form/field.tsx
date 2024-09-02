import { ReactNode } from "react";
import { FieldError as AriaFieldError, Label as AriaLabel, LabelProps } from "react-aria-components";

interface ILabel extends LabelProps {
  children: ReactNode;
  isRequired?: boolean;
}

export function Label({ children, isRequired }: ILabel) {
  return (
    <AriaLabel className="text-login-card-title dark:text-primary-dark-900 font-medium text-sm">
      {children} {isRequired && <span>*</span>}
    </AriaLabel>
  );
}

export function FieldError({ children }: { children: ReactNode }) {
  return <AriaFieldError className="text-brand-600 text-sm">{children}</AriaFieldError>;
}
