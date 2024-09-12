import { EllipsisVertical } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import { useBottomSheetStore } from "@/store/useBottomSheetStore";
import { Sheets } from "@/utils/constants";
const WidgetActionsSheet = dynamic(() => import("./WidgetActionsSheet"), { ssr: false });

import WidgetTabs from "./WidgetTabs";

export default function WidgetHeaderMobile() {
  const { setActiveSheet } = useBottomSheetStore();

  return (
    <>
      <div className="sm:hidden bg-white dark:bg-bg-primary-dark">
        <div className="flex justify-between gap-2 py-4 px-5 border-b border-border-secondary dark:border-active-dark">
          <SimpleText className="text-xl leading-[30px]" weight="font-medium">
            Customer satisfactions
          </SimpleText>
          <Button variant="secondary" aria-label="Menu" isIcon onPress={() => setActiveSheet(Sheets.widget_actions)}>
            <EllipsisVertical size={20} />
          </Button>
        </div>
        <div className="py-4 px-5 border-b border-border-secondary dark:border-active-dark">
          <WidgetTabs />
        </div>
      </div>
      <WidgetActionsSheet />
    </>
  );
}
