import { ArrowUpRight } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import ScaleFadeInWhenVisible from "@/components/animation/ScaleFadeInWhenVisible";
import ClientButton from "@/components/ui/button/client-button";
import { SimpleText } from "@/components/ui/typography";

import ExploreFeatures from "./ExploreFeatures";

export default function NoCodeToolWidget() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeInWhenVisible
          viewport={{ margin: "300px" }}
          className="shadow-[0px_-2.4px_0px_0px_#3E3E3E0A_inset,0px_0px_0px_1px_#EBEBEB,0px_1px_3px_0px_#8F8F8F33] p-6 max-md:p-4 bg-white rounded-3xl mb-6"
        >
          <div className="rounded-[20px] bg-widget-bg py-[29px] flex justify-center px-4 max-md:flex-wrap max-sm:flex-col max-sm:items-center">
            <FadeInWhenVisible
              delay={0.1}
              className="sm:mr-[21px] flex flex-col items-end md:mt-[44px] max-md:order-3 max-sm:order-2 max-md:ml-5 max-sm:ml-0"
            >
              <div className="py-3 px-2 shadow-[0px_20px_28px_-16px_#E5E5E5] rounded-lg bg-white mb-9 max-md:mb-2 sm:mr-[18px]">
                <SimpleText color="overlay-950" className="mb-1.5 text-xs" weight="font-medium">
                  Api url
                </SimpleText>
                <div className="rounded-[4px] bg-[#F5F5F5] py-3 px-4 text-[#00000080] text-xs truncate max-w-[231px]">
                  api.widgetjoy.com/v2/getmails/bkhj3k
                </div>
              </div>
              <div className="py-3 px-2 shadow-[0px_20px_28px_-16px_#E5E5E5] rounded-lg bg-white w-[200px]">
                <SimpleText color="overlay-950" className="mb-1.5 text-xs" weight="font-medium">
                  Button width
                </SimpleText>
                <div className="flex items-center text-center bg-[#F5F5F5] rounded-[4px] p-1">
                  <div className="bg-white w-1/2 py-2 shadow-[0px_2px_2px_0px_#0000001A] rounded-[4px] text-xs font-medium">
                    Fit content
                  </div>
                  <div className="w-1/2 py-2 text-center text-xs font-medium">Fill</div>
                </div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible
              delay={0.2}
              className="border border-[#F0F3F2] shadow-[0px_24.1px_37.88px_-27.55px_#D5E0DD] rounded-[14px] bg-white p-5 w-[345px] md:mt-[27px] md:mr-5 lg:mr-[39px] max-md:mx-20 max-sm:mx-0 max-md:order-1 max-sm:order-3 max-md:mb-5 max-sm:mt-5 max-sm:w-full"
            >
              <SimpleText className="text-xl mb-5 max-md:text-lg" color="overlay-950" weight="font-semibold">
                Join weekly newsletter
              </SimpleText>
              <div className="bg-[#F9F9F9] p-[13px] text-[#9C9C9C] rounded-[7px] tracking-tight mb-3.5">Your name</div>
              <div className="bg-[#F9F9F9] p-[13px] text-[#9C9C9C] rounded-[7px] tracking-tight mb-5">
                Email address
              </div>
              <div className="bg-[#07B682] py-2.5 text-white text-sm leading-[20px] relative border-[1.25px] border-[#067FF3] font-medium text-center">
                Submit
                <div className="border-[1.25px] border-[#067FF3] size-2.5 bg-white absolute -top-1 -left-1"></div>
                <div className="border-[1.25px] border-[#067FF3] size-2.5 bg-white absolute -bottom-1 -left-1"></div>
                <div className="border-[1.25px] border-[#067FF3] size-2.5 bg-white absolute -top-1 -right-1"></div>
                <div className="border-[1.25px] border-[#067FF3] size-2.5 bg-white absolute -bottom-1 -right-1"></div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3} className="w-[150px] max-md:mb-5 max-md:order-2 max-sm:order-1">
              {colors.map((item) => (
                <div
                  key={item.hex}
                  className={twMerge(
                    "py-3 px-2 flex items-center gap-[9px] bg-white w-full rounded-lg mb-2",
                    item.isActive && "shadow-[0px_20px_28px_-16px_#E5E5E5]"
                  )}
                >
                  <div className="size-[26px] rounded-full" style={{ backgroundColor: item.hex }}></div>
                  <div>
                    <SimpleText className="mb-0.5 text-xs" color="overlay-950">
                      {item.text}
                    </SimpleText>
                    <SimpleText className="text-[8px] leading-[10px] text-[#9A9A9A]">{item.hex}</SimpleText>
                  </div>
                </div>
              ))}
            </FadeInWhenVisible>
          </div>
          <div>
            <FadeInWhenVisible delay={0.1}>
              <SimpleText className="text-2xl mb-3" weight="font-bold">
                No-code tool
              </SimpleText>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <SimpleText color="secondary-700" className="text-lg mb-6">
                Choose ready-made widget & customize within minutes and done.
              </SimpleText>
            </FadeInWhenVisible>
            <ScaleFadeInWhenVisible delay={0.3}>
              <ClientButton size="lg" variant="secondary" rightIcon={<ArrowUpRight />}>
                Explore blocks
              </ClientButton>
            </ScaleFadeInWhenVisible>
          </div>
        </FadeInWhenVisible>
        <ExploreFeatures />
      </div>
    </section>
  );
}

const colors = [
  {
    hex: "#07B682",
    text: "Mint",
    isActive: true,
  },
  {
    hex: "#067FF3",
    text: "Azure",
  },
  {
    hex: "#F7CD1B",
    text: "Jonquil",
  },
  {
    hex: "#FFB7F1",
    text: "Lavender",
  },
];
