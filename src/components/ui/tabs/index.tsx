import React from "react";
import {
  composeRenderProps,
  Tab as RACTab,
  TabList as RACTabList,
  TabListProps,
  TabPanel as RACTabPanel,
  TabPanelProps,
  TabProps,
  Tabs as RACTabs,
  TabsProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const tabsStyles = tv({
  base: "flex gap-4",
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "flex-row w-[800px]",
    },
  },
});

export function Tabs(props: TabsProps) {
  return (
    <RACTabs
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabsStyles({ ...renderProps, className })
      )}
    />
  );
}

const tabListStyles = tv({
  base: "flex gap-1",
  variants: {
    orientation: {
      horizontal:
        "flex-row bg-disabled rounded-lg border border-border-secondary dark:border-secondary-dark dark:bg-active-dark p-[3px]",
      vertical: "flex-col items-start",
    },
  },
});

export function TabList<T extends object>(props: TabListProps<T>) {
  return (
    <RACTabList
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabListStyles({ ...renderProps, className })
      )}
    />
  );
}

const tabProps = tv({
  base: "flex grow items-center justify-center focus-ring cursor-pointer rounded-md px-4 py-1.5 text-sm font-medium transition forced-color-adjust-none font-semibold",
  variants: {
    isSelected: {
      false:
        "text-text-disabled dark:text-tertiary-dark-600 hover:bg-white hover:shadow-sm dark:hover:bg-bg-primary-dark",
      true: "bg-white dark:bg-bg-primary-dark text-button-secondary-fg dark:text-secondary-700 shadow-sm",
    },
    isDisabled: {
      true: "text-gray-200 dark:text-zinc-600 selected:text-gray-300 dark:selected:text-zinc-500 selected:bg-gray-200 dark:selected:bg-zinc-600",
    },
  },
});

export function Tab(props: TabProps) {
  return (
    <RACTab
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabProps({ ...renderProps, className })
      )}
    />
  );
}

const tabPanelStyles = tv({
  base: "flex-1 text-sm text-gray-900 dark:text-zinc-100",
});

export function TabPanel(props: TabPanelProps) {
  return (
    <RACTabPanel
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabPanelStyles({ ...renderProps, className })
      )}
    />
  );
}
