"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Key, Menu, MenuItem } from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";

import { ISidebarItem, sidebarItems, SidebarKeys } from "./sidebarItems";
import AppearanceTabItem from "./tabItems/AppearanceTabItem";
import CustomCSSTabItem from "./tabItems/CustomCSSTabItem";
import DetailsTabItem from "./tabItems/DetailsTabItem";

export default function WidgetSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const defaultKey = searchParams.get("tab");
  const [selectedKey, setSelectedKey] = useState<Key | null>(defaultKey);

  const handleUpdateKey = (item: ISidebarItem) => {
    if (!item.href) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", item.id);
      router.push(`?${params.toString()}`);
      setSelectedKey(item.id);
    }
  };

  return (
    <div className="flex">
      <Menu
        aria-label="Sidebar menu"
        className="w-[110px] border-r border-border-secondary dark:border-active-dark py-2"
      >
        {sidebarItems.map((item) => (
          <MenuItem
            aria-label={item.title}
            key={item.id}
            href={item.href?.(item.id)}
            onAction={() => handleUpdateKey(item)}
            target={item.target ?? "_self"}
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
          </MenuItem>
        ))}
      </Menu>
      <AnimatePresence initial={false}>
        {selectedKey && (
          <motion.div
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -15, opacity: 0 }}
            className="relative w-[344px] bg-white opacity-0 dark:bg-bg-primary-dark border-r border-border-secondary dark:border-active-dark"
          >
            {selectedKey === SidebarKeys.Appearance && <AppearanceTabItem />}
            {selectedKey === SidebarKeys.Details && <DetailsTabItem />}
            {selectedKey === SidebarKeys.Custom_CSS && <CustomCSSTabItem />}
            <Button
              variant="link"
              onPress={() => {
                setSelectedKey(null);
                router.replace(pathname);
              }}
              className="shadow-none absolute top-4 right-6 z-10 hover:bg-secondary-light p-2.5 dark:hover:bg-secondary-dark"
            >
              <X color="#98A2B3" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
