"use client";

import React, { useState } from "react";
import { Key, Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { twMerge } from "tailwind-merge";

import Card from "@/components/ui/cards";
import { SimpleText } from "@/components/ui/typography";

import { sidebarItems } from "./sidebarItems";

export default function WidgetSidebar() {
  const [selectedKey, setSelectedKey] = useState<Key>("general");

  return (
    <div className="flex bg-white dark:bg-bg-primary-dark grow">
      <Tabs selectedKey={selectedKey} onSelectionChange={setSelectedKey} className="flex group">
        <TabList
          aria-label="Widget configurations"
          className="w-[110px] border-r border-border-secondary dark:border-active-dark py-2"
        >
          {sidebarItems.map((item) => (
            <Tab
              id={item.id}
              key={item.id}
              className={twMerge(
                "cursor-pointer outline-none flex flex-col justify-center items-center gap-2 text-text-tertiary py-4 z-10 mr-1 rounded-md relative",
                item.id === selectedKey &&
                  "text-brand-500 after:content-[''] after:absolute after:w-0.5 after:bg-brand-500 after:h-full after:top-0 after:-right-[5px]"
              )}
            >
              {<item.icon />}
              <SimpleText
                color="quaternary-500"
                className={twMerge(
                  "text-xs leading-[18px]",
                  item.id === selectedKey && "text-brand-500 dark:text-brand-500"
                )}
                weight="font-semibold"
              >
                {item.title}
              </SimpleText>
            </Tab>
          ))}
        </TabList>
        {sidebarItems.map((item) => (
          <TabPanel
            id={item.id}
            key={item.id}
            className="w-[344px] bg-white dark:bg-bg-primary-dark border-r border-border-secondary dark:border-active-dark"
          >
            <item.element />
          </TabPanel>
        ))}
      </Tabs>
      <div className="w-full bg-dots dark:bg-dots-dark flex justify-center items-center">
        <Card className="min-w-[200px] text-center">
          <SimpleText>Widget</SimpleText>
        </Card>
      </div>
    </div>
  );
}
