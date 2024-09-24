import React from "react";

import { SimpleText } from "@/components/ui/typography";

export default function PollWidgetPreview() {
  return (
    <div className="bg-white border dark:border-active-dark border-border-secondary rounded-[18px] dark:bg-bg-primary-dark mx-auto w-[69%] shadow-[0px_12px_12px_-8px_#8889961A,0px_-6px_0px_0px_#ECECEC66_inset] p-[27px] mb-4 h-fit z-10">
      <div className="dark:bg-brand-dark-noisy bg-[#FFF6F3] p-2.5 rounded-md mb-[9px]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="size-2.5 bg-brand-500 rounded-full border-[3px] border-transparent shadow-[0_0_0_3px_#fff,0_0_0_4px_#ff4f18] dark:shadow-[0_0_0_3px_#18141D,0_0_0_4px_#ff4f18]"></div>
            <SimpleText color="quaternary-500" className="text-xs">
              Collaboration
            </SimpleText>
          </div>
          <SimpleText color="quaternary-500" className="text-[10px] leading-[16px]">
            60%
          </SimpleText>
        </div>
        <div className="dark:bg-bg-primary-dark relative after:content-[''] after:absolute after:top-0 after:left-0 after:z-10 after:bg-brand-500 after:w-[60%] after:h-1 h-1 rounded-full overflow-hidden" />
      </div>
      <div className="dark:bg-[#0E131E] p-2.5 rounded-md mb-[9px]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded-full border dark:border-[#1E232E] border-border-secondary" />
            <SimpleText color="quaternary-500" className="text-xs">
              Lottie plugin
            </SimpleText>
          </div>
          <SimpleText color="quaternary-500" className="text-[10px] leading-[16px]">
            40%
          </SimpleText>
        </div>
        <div className="dark:bg-bg-primary-dark relative after:content-[''] after:absolute after:top-0 after:left-0 after:z-10 after:bg-brand-500 after:w-[40%] after:h-1 h-1 rounded-full overflow-hidden" />
      </div>
      <SimpleText
        weight="font-medium"
        color="primary-900"
        className="border dark:border-active-dark border-border-secondary text-button-secondary-fg rounded-md text-xs py-[9px] text-center"
      >
        Vote
      </SimpleText>
    </div>
  );
}
