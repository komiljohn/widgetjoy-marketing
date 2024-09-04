import React from "react";

import Skleton from "@/components/ui/skleton";

export default function page() {
  return (
    <div className="px-[124px] pb-[52px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-12 py-12">
          <Skleton noAnimate className="size-[60px]" />
          <div className="flex gap-12">
            <Skleton noAnimate className="w-[148px] h-2.5" />
            <Skleton noAnimate className="w-[148px] h-2.5" />
            <Skleton noAnimate className="w-[148px] h-2.5" />
          </div>
        </div>
        <div className="flex items-center gap-12">
          <Skleton noAnimate className="w-[123px] h-2.5" />
          <Skleton noAnimate className="w-[153px] h-12" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 h-[386px] mb-8">
        <Skleton noAnimate className="col-span-2 h-full" />
        <Skleton noAnimate className="h-full" />
      </div>
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i}>
            <Skleton noAnimate className="h-[256px] mb-6" />
            <Skleton noAnimate className="h-2.5 w-full mb-[18px]" />
            <Skleton noAnimate className="h-2.5 w-5/6 mb-8" />
            <div className="flex gap-12 items-center justify-end">
              <Skleton noAnimate className="h-2.5 w-1/3" />
              <Skleton noAnimate className="h-12 w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
