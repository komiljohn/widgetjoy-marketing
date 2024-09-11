import { Check } from "lucide-react";
import React, { ReactNode } from "react";
import { ListBox, ListBoxItem, ListBoxItemProps, ListBoxProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { SimpleText } from "../ui/typography";

interface IListBox<T> extends ListBoxProps<T> {
  className?: string;
  children: ReactNode | ((item: T) => ReactNode);
}

export default function MyListBox<T extends object>({ children }: IListBox<T>) {
  return <ListBox className="outline-none space-y-1">{children}</ListBox>;
}

interface IListBoxItem extends ListBoxItemProps {
  className?: string;
}

export function MyListBoxItem({ className, ...props }: IListBoxItem) {
  return (
    <ListBoxItem
      {...props}
      className="py-2.5 px-2 rounded-md cursor-pointer focus:bg-disabled focus:dark:bg-active-dark outline-none whitespace-nowrap text-ellipsis text-red-900"
    >
      {({ isSelected }) => (
        <SimpleText className={twMerge("flex items-center justify-between", className)}>
          <>{props.children}</>
          {isSelected && <Check size={20} className="dark:text-tertiary-dark-600 text-text-disabled min-w-5" />}
        </SimpleText>
      )}
    </ListBoxItem>
  );
}
