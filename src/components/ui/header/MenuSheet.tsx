import { LayoutGrid, LucideCircleUserRound, Plus, Settings, X } from "lucide-react";
import Link from "next/link";
import React from "react";

import { useBottomSheetStore } from "@/store/useBottomSheetStore";
import { Sheets } from "@/utils/constants";
import Routes from "@/utils/routes";

import Badge from "../badge";
import BottomSheet from "../bottom-sheet";
import { Button } from "../button";
import { SimpleText } from "../typography";

export default function MenuSheet() {
  const { activeSheet, setActiveSheet } = useBottomSheetStore();

  const isOpen = activeSheet === Sheets.menu;
  const closeHandler = () => setActiveSheet(null);

  return (
    <BottomSheet isOpen={isOpen} setIsOpen={closeHandler}>
      <div className="py-6 px-5 bg-white dark:bg-secondary-dark">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-6 items-center">
            <LucideCircleUserRound size={40} />
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
          <div
            role="button"
            className="bg-white dark:bg-secondary-dark dark:border-border-dark-primary shadow-xs p-[15px] rounded-xl border border-border-secondary mb-2 dark:focus:shadow-[0_0_0_4px_#98A2B324] outline-none focus:shadow-button-ring"
            tabIndex={1}
          >
            <div className="mb-2 flex justify-between">
              <SimpleText color="primary-900" weight="font-semibold">
                Jamik's Workspace
              </SimpleText>
              <Badge>Free</Badge>
            </div>
            <SimpleText className="text-sm" color="quaternary-500" weight="font-medium">
              8 active widgets
            </SimpleText>
          </div>
          <div
            role="button"
            className="bg-white dark:bg-secondary-dark dark:border-border-dark-primary shadow-xs p-[15px] rounded-xl border border-border-secondary mb-2 dark:focus:shadow-[0_0_0_4px_#98A2B324] outline-none focus:shadow-button-ring"
            tabIndex={1}
          >
            <div className="mb-2 flex justify-between">
              <SimpleText color="primary-900" weight="font-semibold">
                Adams's Workspace
              </SimpleText>
              <Badge color="brand">Pro</Badge>
            </div>
            <SimpleText className="text-sm" color="quaternary-500" weight="font-medium">
              8 active widgets
            </SimpleText>
          </div>
          <div
            role="button"
            className="bg-white dark:bg-secondary-dark dark:border-border-dark-primary shadow-xs p-[15px] rounded-xl border border-border-secondary mb-2 dark:focus:shadow-[0_0_0_4px_#98A2B324] outline-none focus:shadow-button-ring"
            tabIndex={1}
          >
            <div className="mb-2 flex justify-between">
              <SimpleText color="primary-900" weight="font-semibold">
                Company Workspace
              </SimpleText>
              <Badge color="brand">Pro</Badge>
            </div>
            <SimpleText className="text-sm" color="quaternary-500" weight="font-medium">
              8 active widgets
            </SimpleText>
          </div>
          <Button className="w-full" variant="secondary" leftIcon={<Plus />}>
            Create new workspace
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
}
