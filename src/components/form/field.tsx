import { ReactNode } from "react";
import { FieldError as AriaFieldError, Label as AriaLabel } from "react-aria-components";

export function Label({ children, isRequired }: { children: ReactNode; isRequired?: boolean }) {
  return (
    <AriaLabel className="text-login-card-title dark:text-primary-dark-900 font-medium text-sm">
      {children} {isRequired && <span>*</span>}
    </AriaLabel>
  );
}

export function FieldError({ children }: { children: ReactNode }) {
  return <AriaFieldError className="text-brand-600 text-sm">{children}</AriaFieldError>;
}
