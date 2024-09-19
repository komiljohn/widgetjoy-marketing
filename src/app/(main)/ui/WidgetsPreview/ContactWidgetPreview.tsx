import React from "react";

import { SimpleText } from "@/components/ui/typography";

export default function ContactWidgetPreview() {
  return (
    <div className="border dark:border-active-dark border-border-secondary rounded-[18px] dark:bg-bg-primary-dark mx-auto w-[69%] shadow-[0px_12px_12px_-8px_#8889961A,0px_-6px_0px_0px_#ECECEC66_inset] p-7 bg-white h-fit z-10">
      <div className="bg-secondary-light dark:bg-secondary-dark rounded-md p-2.5 mb-[9px]">
        <SimpleText color="quaternary-500" className="text-xs">
          Your name
        </SimpleText>
      </div>
      <div className="bg-secondary-light dark:bg-secondary-dark rounded-md p-2.5 h-[85px]">
        <SimpleText color="quaternary-500" className="text-xs">
          Message
        </SimpleText>
      </div>
    </div>
  );
}
