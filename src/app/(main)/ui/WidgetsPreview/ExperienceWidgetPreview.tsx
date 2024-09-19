import Image from "next/image";
import React from "react";

import { SimpleText } from "@/components/ui/typography";

export default function ExperienceWidgetPreview() {
  return (
    <div className="border dark:border-active-dark border-border-secondary rounded-[18px] dark:bg-bg-primary-dark mx-auto w-[69%] p-4 bg-white shadow-[0px_12px_12px_-8px_#8889961A,0px_-6px_0px_0px_#ECECEC66_inset] h-fit z-10">
      <SimpleText className="text-sm mb-4" color="quaternary-500" weight="font-medium">
        Tell us about your experience
      </SimpleText>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="h-[76px] rounded-md text-center py-3.5 border dark:border-secondary-dark border-secondary-light bg-[#FFEDE7] dark:bg-[#24171D]">
          <Image className="mx-auto" src="/images/info.png" width={24} height={24} alt="issue" />
          <SimpleText className="mt-2 text-xs text-brand-500">Issue</SimpleText>
        </div>
        <div className="h-[76px] rounded-md text-center py-3.5 border dark:border-secondary-dark border-secondary-light">
          <Image className="mx-auto" src="/images/bulb.png" width={24} height={24} alt="idea" />
          <SimpleText color="quaternary-500" className="mt-2 text-xs">
            Idea
          </SimpleText>
        </div>
        <div className="h-[76px] rounded-md text-center py-3.5 border dark:border-secondary-dark border-secondary-light">
          <Image className="mx-auto" src="/images/stars.png" width={24} height={24} alt="other" />
          <SimpleText color="quaternary-500" className="mt-2 text-xs">
            Other
          </SimpleText>
        </div>
      </div>
      <div className="bg-secondary-light dark:bg-secondary-dark rounded-md p-2.5 h-[85px]">
        <SimpleText color="quaternary-500" className="text-xs">
          Please, describe the issue
        </SimpleText>
      </div>
    </div>
  );
}
