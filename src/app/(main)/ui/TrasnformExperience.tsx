import { ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import RotateFadeInWhenVisible from "@/components/animation/RotateFadeInWhenVisible";
import { SimpleText } from "@/components/ui/typography";

export default function TrasnformExperience() {
  return (
    <section className="pt-[120px] pb-[200px] px-12">
      <div className="max-w-[532px] mx-auto text-center mb-[98px]">
        <FadeInWhenVisible>
          <SimpleText className="text-bg-overlay text-5xl leading-[60px] font-bold mb-[18px] tracking-tight">
            Transform Your Website Experience
          </SimpleText>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <SimpleText className="text-text-disabled  text-lg">
            Enhance engagement and drive results with dynamic widgets designed for your website.
          </SimpleText>
        </FadeInWhenVisible>
      </div>
      <div className="flex justify-center">
        <RotateFadeInWhenVisible
          className="shadow-[0px_-4px_0px_0px_#3E3E3E0A_inset,0px_1px_3px_0px_#8F8F8F33] relative top-4 left-[30px] p-[47px] border border-border-secondary rounded-2xl bg-white -rotate-[2.13deg] max-w-[566px]"
          initialRotate={-10}
          finalRotate={-2.13}
        >
          <SimpleText className="text-[24px] leading-[32px] mb-4" weight="font-semibold">
            Without WidgetJoy
          </SimpleText>
          <SimpleText className="text-xl leading-[30px] text-button-secondary-fg mb-9" weight="font-medium">
            With custom code, you will experience the following
          </SimpleText>
          <div className="space-y-[26px]">
            {minuses.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-error-500">
                  <ThumbsDown color="white" size={16} />
                </div>
                <SimpleText className="text-xl leading-[30px]" weight="font-medium">
                  {item}
                </SimpleText>
              </div>
            ))}
          </div>
        </RotateFadeInWhenVisible>
        <RotateFadeInWhenVisible
          className="shadow-[0px_6.65px_5.92px_0px_#6E6F7A07,0px_22.34px_19.88px_0px_#6E6F7A0B,0px_100px_89px_0px_#6E6F7A12] relative right-[30px] p-[47px] border border-border-secondary rounded-2xl rotate-[2deg] z-10 bg-white h-fit w-[568px]"
          initialRotate={10}
          finalRotate={2}
        >
          <SimpleText className="text-[24px] leading-[32px] mb-4" weight="font-semibold">
            With WidgetJoy
          </SimpleText>
          <SimpleText className="text-xl leading-[30px] text-button-secondary-fg mb-9" weight="font-medium">
            Jump painlessly through the No-Code tool
          </SimpleText>
          <div className="space-y-[26px]">
            {plusses.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-moss-500">
                  <ThumbsUp color="white" size={16} />
                </div>
                <SimpleText className="text-xl leading-[30px]" weight="font-medium">
                  {item}
                </SimpleText>
              </div>
            ))}
          </div>
        </RotateFadeInWhenVisible>
      </div>
    </section>
  );
}

const minuses = [
  "Complicated coding required",
  "Time-consuming widget creation",
  "Limited engagement with visitors",
  "Difficulty collecting user feedback",
  "Static, uninteresting web pages",
];
const plusses = [
  "No coding skills needed",
  "Create widgets in minutes",
  "Boost visitor interaction",
  "Easily gather valuable insights",
  "Dynamic, engaging web presence",
];
