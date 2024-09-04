import {
  composeRenderProps,
  Tag,
  TagGroup,
  TagGroupProps,
  TagList,
  TagListProps,
  TagProps,
  Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { Label } from "@/components/form/field";

import { Button } from "../button";

interface MyTagGroupProps<T>
  extends Omit<TagGroupProps, "children">,
    Pick<TagListProps<T>, "items" | "children" | "renderEmptyState"> {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export function MyTagGroup<T extends object>({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: MyTagGroupProps<T>) {
  return (
    <TagGroup className="space-y-1.5" {...props}>
      <Label>{label}</Label>
      <TagList
        items={items}
        renderEmptyState={renderEmptyState}
        className="flex border border-border-primary dark:border-border-dark-primary rounded-md divide-x divide-border-primary dark:divide-border-dark-primary overflow-hidden"
      >
        {children}
      </TagList>
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </TagGroup>
  );
}

const tagStyles = tv({
  base: "transition outline-4 -outline-offset-1 outline-blue-dark-500 px-[15px] py-[9px] text-button-secondary-fg dark:text-secondary-700 text-sm font-semibold grow text-center cursor-pointer",
  variants: {
    isSelected: {
      true: "bg-disabled dark:bg-secondary-dark",
    },
    isDisabled: {
      true: "bg-gray-100 text-gray-300 forced-colors:text-[GrayText]",
    },
  },
});

export function MyTag({ children, ...props }: TagProps) {
  const textValue = typeof children === "string" ? children : undefined;
  return (
    <Tag
      textValue={textValue}
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tagStyles({ ...renderProps, className })
      )}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && <Button slot="remove">ⓧ</Button>}
        </>
      )}
    </Tag>
  );
}
