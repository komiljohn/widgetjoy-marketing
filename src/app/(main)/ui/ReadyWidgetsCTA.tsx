import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import { SimpleText } from "@/components/ui/typography";

import BGSvg from "./icons/ready-widget-cta-bg.svg";
import ReadyWidgetsButtons from "./ReadyWidgetsButtons";

export default function ReadyWidgetsCTA() {
  return (
    <section className="pt-20 pb-[164px] max-md:pb-20 max-md:pt-12 px-12 max-md:px-6">
      <div className="relative shadow-[0px_-2.4px_0px_0px_#3E3E3E0A_inset,0px_0px_0px_1px_#EBEBEB,0px_1px_3px_0px_#8F8F8F33] rounded-3xl py-[66px] max-sm:py-9 mx-auto px-4">
        <BGSvg className="absolute size-full top-0 left-0 -z-[1]" alt="bg" />
        <div className="max-w-[648px] mx-auto text-center mb-9">
          <FadeInWhenVisible>
            <SimpleText className="text-bg-overlay text-5xl max-sm:text-4xl leading-[60px] font-bold mb-5 tracking-tight">
              Get ready-made widgets within minutes
            </SimpleText>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.1}>
            <SimpleText className="text-text-disabled text-lg max-w-[400px] mx-auto">
              Get started in minutes with no technical expertise required.
            </SimpleText>
          </FadeInWhenVisible>
        </div>
        <ReadyWidgetsButtons />
      </div>
    </section>
  );
}
