import { ArrowUpRight } from "lucide-react";
import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import OpacityWhenVisible from "@/components/animation/OpacityWhenVisible";
import MyLink from "@/components/ui/button/my-link";
import Carousel from "@/components/ui/carousel";
import { SimpleText } from "@/components/ui/typography";

import { StarsSvg } from "../../../../public/icons";
import BannerButtons from "./BannerButtons";

export default function Banner() {
  return (
    <section className="pt-[162px] overflow-x-hidden">
      <div className="mx-auto max-w-[724px] text-center mb-[100px]">
        <OpacityWhenVisible className="flex mx-auto gap-4 py-[5px] px-[15px] border border-border-secondary rounded-full w-fit shadow-[0px_2px_2px_0px_#0A0A0A0D] mb-10">
          <div className="flex items-center gap-1">
            <StarsSvg />
            <SimpleText color="tertiary-600" tag="span" weight="font-medium">
              We are launched on PH
            </SimpleText>
          </div>
          <div className="h-4 w-px bg-border-secondary"></div>
          <MyLink href="/" className="flex items-center font-medium">
            Upvote <ArrowUpRight size={20} />
          </MyLink>
        </OpacityWhenVisible>
        <FadeInWhenVisible>
          <h1 className="text-bg-primary-dark font-bold text-[60px] leading-[72px] mb-6 tracking-tight">
            The "Swiss Army Knife" of Widgets
          </h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-button-secondary-fg text-[20px] leading-[30px] mb-10 max-w-[494px] mx-auto">
            10+ powerful widgets to supercharge your website, engage visitors, and boost results.
          </h2>
        </FadeInWhenVisible>
        <BannerButtons />
      </div>
      <Carousel />
    </section>
  );
}
