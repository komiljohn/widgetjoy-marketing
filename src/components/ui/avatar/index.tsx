import React from "react";

import { SimpleText } from "../typography";

export default function Avatar({ str }: { str: string }) {
  return (
    <div className="border border-avatar-contrast-border dark:border-[#3A3E48] rounded-full p-[7px] max-w-10 bg-bg-disabled dark:bg-active-dark h-fit">
      <SimpleText color="quaternary-500" className="uppercase text-base text-center" weight="font-semibold">
        {str.substring(0, 2)}
      </SimpleText>
    </div>
  );
}
