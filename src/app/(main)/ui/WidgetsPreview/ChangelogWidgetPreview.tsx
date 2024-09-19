import React from "react";

import { SimpleText } from "@/components/ui/typography";

export default function ChangelogWidgetPreview() {
  return (
    <div>
      <div className="border dark:border-active-dark border-border-secondary rounded-[18px] dark:bg-bg-primary-dark mx-auto w-[69%] shadow-[0px_12px_12px_-8px_#8889961A,0px_-6px_0px_0px_#ECECEC66_inset] p-[27px] mb-4 bg-white h-fit z-10">
        <div className="flex gap-2 mb-3">
          <div className="bg-secondary-light dark:bg-secondary-dark rounded-full border border-border-secondary dark:border-active-dark py-1 px-2">
            <SimpleText color="quaternary-500" className="text-[8px] leading-[16px]" weight="font-medium">
              14 April, 2024
            </SimpleText>
          </div>
          <div className="bg-brand-500 rounded-full text-[8px] leading-[16px] font-medium py-1 px-2 text-white">
            Improvements
          </div>
        </div>
        <SimpleText color="quaternary-500" className="text-sm leading-[18px]">
          Improved editor canvas and many more
        </SimpleText>
      </div>
      <div className="border dark:border-active-dark border-border-secondary rounded-[18px] dark:bg-bg-primary-dark mx-auto w-[69%] shadow-[0px_12px_12px_-8px_#8889961A,0px_-6px_0px_0px_#ECECEC66_inset] p-[27px] bg-white">
        <div className="flex gap-2 mb-3">
          <div className="bg-secondary-light dark:bg-secondary-dark rounded-full border border-border-secondary dark:border-active-dark py-1 px-2">
            <SimpleText color="quaternary-500" className="text-[8px] leading-[16px]" weight="font-medium">
              5 Mayl, 2024
            </SimpleText>
          </div>
          <div className="bg-brand-500 rounded-full text-[8px] leading-[16px] font-medium py-1 px-2 text-white">
            Bugs
          </div>
        </div>
        <SimpleText color="quaternary-500" className="text-sm leading-[18px]">
          Fixed bugs on the Auth flow
        </SimpleText>
      </div>
    </div>
  );
}
