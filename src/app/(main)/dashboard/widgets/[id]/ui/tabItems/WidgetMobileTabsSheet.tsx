import { X } from "lucide-react";
import React from "react";

import BottomSheet from "@/components/ui/bottom-sheet";
import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import { useBottomSheetStore } from "@/store/useBottomSheetStore";
import { Sheets } from "@/utils/constants";

import { SidebarKeys } from "../sidebarItems";
import { AppearanceTabItemForm } from "./AppearanceTabItem";
import { CustomCSSTabItemForm } from "./CustomCSSTabItem";
import { DetailsTabItemForm } from "./DetailsTabItem";

export default function WidgetMobileTabsSheet() {
  const { activeSheet, setActiveSheet, sheetData } = useBottomSheetStore();

  const isOpen = activeSheet === Sheets.widget_tabs;
  const closeHandler = () => setActiveSheet(null);

  return (
    <BottomSheet isOpen={isOpen} setIsOpen={closeHandler}>
      <div className="py-6 px-5 bg-white dark:bg-secondary-dark rounded-t-3xl">
        <div className="flex items-center justify-between mb-6">
          <SimpleText className="text-xl leading-[30px]" weight="font-medium">
            {sheetData?.title}
          </SimpleText>
          <Button
            variant="link"
            onPress={closeHandler}
            className="p-[9px] hover:bg-secondary-light dark:hover:bg-secondary-dark"
          >
            <X className="text-tertiary-600" />
          </Button>
        </div>
        {sheetData?.id === SidebarKeys.Details && <DetailsTabItemForm />}
        {sheetData?.id === SidebarKeys.Appearance && <AppearanceTabItemForm />}
        {sheetData?.id === SidebarKeys.Custom_CSS && <CustomCSSTabItemForm />}
      </div>
    </BottomSheet>
  );
}
