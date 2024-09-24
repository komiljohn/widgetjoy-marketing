import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import OpacityWhenVisible from "@/components/animation/OpacityWhenVisible";

export default function ExploreBanner() {
  return (
    <section className="pt-[162px] pb-[191px] px-6 max-sm:pt-20 max-sm:pb-[100px]">
      <div className="mx-auto max-w-[724px] text-center">
        <OpacityWhenVisible className="flex mx-auto gap-4 py-[5px] px-[15px] border border-border-secondary rounded-full w-fit shadow-[0px_2px_2px_0px_#0A0A0A0D] mb-9">
          <span
            className="font-medium"
            style={{
              background: "linear-gradient(91.49deg, #FF4405 -10.01%, #58A942 60.82%, #95B520 101.53%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Discover widgets
          </span>
        </OpacityWhenVisible>
        <FadeInWhenVisible>
          <h1 className="text-bg-primary-dark font-bold text-[60px] leading-[72px] mb-6 tracking-tight">
            Explore Our Powerful Widgets
          </h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-button-secondary-fg text-[20px] leading-[30px] mb-10 max-w-[434px] mx-auto">
            Choose the perfect widgets to elevate your website effortlessly.
          </h2>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
