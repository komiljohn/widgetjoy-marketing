import { Minus, Plus } from "lucide-react";
import React from "react";

import { SimpleText } from "@/components/ui/typography";

export default function FaqWidgetPreview() {
  return (
    <div className="border dark:border-active-dark border-border-secondary bg-white rounded-[18px] dark:bg-bg-primary-dark mx-auto w-[69%] shadow-[0px_12px_12px_-8px_#8889961A,0px_-6px_0px_0px_#ECECEC66_inset] p-[15px] h-fit">
      <div className="flex gap-1 items-center p-2.5">
        <Plus className="text-text-disabled" size={20} />
        <SimpleText color="quaternary-500" className="text-xs">
          Do I have to install anything?
        </SimpleText>
      </div>
      <div className="p-2.5 dark:bg-secondary-dark bg-secondary-light rounded-md">
        <div className="flex gap-1 items-center">
          <Minus size={20} className="text-text-disabled" />
          <SimpleText color="quaternary-500" className="text-xs mb-1">
            Who owns the collected data?
          </SimpleText>
        </div>
        <SimpleText color="quaternary-500" className="text-[11px] pl-6">
          All contents is 100% owned by you
        </SimpleText>
      </div>
      <div className="flex gap-1 items-center p-2.5">
        <Plus className="text-text-disabled" size={20} />
        <SimpleText color="quaternary-500" className="text-xs">
          Can I cancel my account anytime?
        </SimpleText>
      </div>
    </div>
  );
}
