import "./style.css";

import { ReactNode } from "react";
import { Popover } from "react-aria-components";

export function MyPopover({ children }: { children: ReactNode }) {
  return (
    <Popover className="bg-white dark:bg-bg-primary-dark dark:border-border-dark-primary outline-none border border-border-secondary rounded-md py-1.5 px-1.5 shadow-popup entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out react-aria-Popover">
      {children}
    </Popover>
  );
}
