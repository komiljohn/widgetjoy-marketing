import { LayoutGrid, Plus, Settings, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import { useBottomSheetStore } from "@/store/useBottomSheetStore";
import { Sheets } from "@/utils/constants";
import Routes from "@/utils/routes";

import Badge from "../badge";
import BottomSheet from "../bottom-sheet";
import { Button } from "../button";
import { SimpleText } from "../typography";
import { teamOptions } from "./fakeData";

export default function MenuSheet() {
  const { activeSheet, setActiveSheet } = useBottomSheetStore();
  const [activeId, setActiveId] = useState(1);

  const isOpen = activeSheet === Sheets.menu;
  const closeHandler = () => setActiveSheet(null);

  return (
    <BottomSheet isOpen={isOpen} setIsOpen={closeHandler}>
      <div className="py-6 px-5 bg-white dark:bg-secondary-dark">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-6 items-center">
            <Image src="/images/avatar.png" width={40} height={40} alt="user" />
            <Link href={Routes.dashboard} tabIndex={-1}>
              <Button variant="link">
                <LayoutGrid className="text-text-disabled dark:text-tertiary-dark-600" />
              </Button>
            </Link>
            <Link href={Routes.settings} tabIndex={-1}>
              <Button variant="link">
                <Settings className="text-text-disabled dark:text-tertiary-dark-600" />
              </Button>
            </Link>
          </div>
          <Button variant="link" onPress={closeHandler}>
            <X />
          </Button>
        </div>
        <div className="bg-bg-disabled dark:bg-bg-primary-dark rounded-xl p-2">
          {teamOptions.map((item) => (
            <div
              key={item.id}
              role="button"
              className={twMerge(
                "bg-white dark:bg-secondary-dark dark:border-border-dark-primary shadow-xs p-[15px] rounded-xl border border-border-secondary mb-2 outline-none",
                item.id === activeId && "shadow-button-ring border-brand-500 dark:border-brand-500"
              )}
              tabIndex={0}
              onClick={() => setActiveId(item.id)}
              onKeyDown={() => {}}
            >
              <div className="mb-2 flex justify-between">
                <SimpleText color="primary-900" weight="font-semibold">
                  {item.name}
                </SimpleText>
                <Badge color={item.isPro ? "brand" : "gray"}>{item.isPro ? "Pro" : "Free"}</Badge>
              </div>
              <SimpleText className="text-sm" color="quaternary-500" weight="font-medium">
                8 active widgets
              </SimpleText>
            </div>
          ))}
          <Button className="w-full" variant="secondary" leftIcon={<Plus />}>
            Create new workspace
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
}
