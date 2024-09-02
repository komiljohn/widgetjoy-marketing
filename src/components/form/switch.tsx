import React from "react";
import { Switch as AriaSwitch, SwitchProps as AriaSwitchProps } from "react-aria-components";
import { tv } from "tailwind-variants";

import { SimpleText } from "../ui/typography";
import { composeTailwindRenderProps } from "../utils";

export interface SwitchProps extends Omit<AriaSwitchProps, "children"> {
  description?: string;
  children: React.ReactNode;
}

const track = tv({
  base: "outline-none flex h-5 min-w-9 px-0.5 items-center cursor-pointer rounded-full transition duration-200 ease-in-out",
  variants: {
    isSelected: {
      false:
        "bg-bg-disabled dark:bg-button-secondary-fg group-focus-visible/switch:shadow-button-ring-gray dark:group-focus-visible/switch:shadow-button-ring-dark",
      true: "bg-brand-600 dark:bg-brand-600 group-focus-visible/switch:shadow-button-ring",
    },
    isDisabled: {
      true: "bg-gray-200 dark:bg-zinc-700",
    },
  },
  compoundVariants: [
    {
      isHovered: true,
      isSelected: true,
      className: "bg-utility-brand-700",
    },
  ],
});

const handle = tv({
  base: "size-4 transform rounded-full bg-white dark:bg-zinc-900 transition duration-200 ease-in-out shadow-sm dark:bg-bg-disabled",
  variants: {
    isSelected: {
      false: "translate-x-0",
      true: "translate-x-[calc(100%-1px)]",
    },
    isDisabled: {
      true: "",
    },
  },
});

export function Switch({ children, ...props }: SwitchProps) {
  return (
    <AriaSwitch
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group/switch flex gap-2 text-button-secondary-fg disabled:text- dark:text- dark:disabled:text- font-medium text-sm transition"
      )}
    >
      {(renderProps) => (
        <>
          <div className={track(renderProps)}>
            <span className={handle(renderProps)} />
          </div>
          <div className="flex flex-col">
            <SimpleText color="secondary-700" className="text-sm" weight="font-medium">
              {children}
            </SimpleText>
            <SimpleText color="tertiary-600" className="text-sm font-normal">
              {props.description}
            </SimpleText>
          </div>
        </>
      )}
    </AriaSwitch>
  );
}
