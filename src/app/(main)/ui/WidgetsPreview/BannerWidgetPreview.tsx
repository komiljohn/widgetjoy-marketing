import Image from "next/image";
import React from "react";

import { SimpleText } from "@/components/ui/typography";

export default function BannerWidgetPreview() {
  return (
    <div className="flex gap-2 p-4 mx-auto items-center justify-center w-[78%] text-xs bg-blue-dark-500 rounded-xl shadow-[0px_12px_12px_-8px_#8889961A,_0px_-6px_0px_0px_#FFFFFF33_inset] h-fit z-10">
      <div className="flex items-center gap-1">
        <Image src="/images/stars.png" width={16} height={16} alt="star" />
        <SimpleText className="whitespace-nowrap text-white">We announce round C investment</SimpleText>
      </div>
      <SimpleText weight="font-semibold" className="whitespace-nowrap text-white">
        Read more
      </SimpleText>
    </div>
  );
}
