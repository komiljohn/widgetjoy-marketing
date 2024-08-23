import React from "react";

import { SimpleText } from "@/components/ui/typography";

export default function CookieWidgetPreview() {
  return (
    <div className="border dark:border-active-dark border-border-secondary bg-white rounded-[18px] dark:bg-bg-primary-dark mx-auto w-[69%] shadow-[0px_12px_12px_-8px_#8889961A,0px_-6px_0px_0px_#ECECEC66_inset] p-[15px] h-fit">
      <SimpleText color="quaternary-500" className="text-xs" weight="font-medium">
        Cookie Consent
      </SimpleText>
      <SimpleText color="quaternary-500" className="text-[11px] mb-4">
        We use cookies to enhance your experience on our website, personalize content, and analyze site traffic.
      </SimpleText>
      <div className="flex gap-2">
        <div className="bg-brand-500 border border-brand-600 text-white text-xs rounded-md font-medium py-[7px] px-[17px]">
          Accept
        </div>
        <div className="py-[7px] rounded-md font-medium px-[17px] text-button-secondary-fg text-xs shadow-[0px_-2.4px_0px_0px_#3E3E3E0A_inset,0px_1px_3px_0px_#8F8F8F33] dark:shadow-none border border-[#EBEBEB] dark:border-border-dark-primary dark:text-secondary-700">
          More details
        </div>
      </div>
    </div>
  );
}
