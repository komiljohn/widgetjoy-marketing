import React from "react";

import { SimpleText } from "@/components/ui/typography";

import WidgetDots from "../icons/nps-widget-dots.svg";

export default function NpsWidgetPreview() {
  return (
    <div className="mx-auto py-[15px] px-[22px] h-fit z-10">
      <div className="flex lg:gap-4 gap-3 max-sm:gap-2">
        <SimpleText
          color="quaternary-500"
          className="h-[54px] max-sm:h-12 min-w-[54px] max-sm:min-w-12 dark:bg-bg-primary-dark bg-white border border-border-secondary dark:border-border-dark-primary flex items-center justify-center rounded-2xl shadow-[0px_-2.4px_0px_0px_#3E3E3E0A_inset]"
        >
          1
        </SimpleText>
        <SimpleText
          color="quaternary-500"
          className="h-[54px] max-sm:h-12 min-w-[56px] max-sm:min-w-12 dark:bg-bg-primary-dark bg-white border border-border-secondary dark:border-border-dark-primary flex items-center justify-center rounded-2xl shadow-[0px_-2.4px_0px_0px_#3E3E3E0A_inset]"
        >
          2
        </SimpleText>
        <SimpleText
          color="quaternary-500"
          className="h-[54px] max-sm:h-12 min-w-[56px] max-sm:min-w-12 dark:bg-bg-primary-dark bg-white border border-border-secondary dark:border-border-dark-primary flex items-center justify-center rounded-2xl shadow-[0px_-2.4px_0px_0px_#3E3E3E0A_inset]"
        >
          3
        </SimpleText>
        <SimpleText className="h-[54px] max-sm:h-12 min-w-[56px] max-sm:min-w-12 bg-brand-500 border text-white border-brand-600 flex items-center justify-center rounded-2xl shadow-[0px_-2.4px_0px_0px_#E3370B_inset]">
          4
          <WidgetDots className="absolute" />
        </SimpleText>
        <SimpleText
          color="quaternary-500"
          className="h-[54px] max-sm:h-12 min-w-[56px] max-sm:min-w-12 dark:bg-bg-primary-dark bg-white border border-border-secondary dark:border-border-dark-primary flex items-center justify-center rounded-2xl shadow-[0px_-2.4px_0px_0px_#3E3E3E0A_inset]"
        >
          5
        </SimpleText>
      </div>
    </div>
  );
}
