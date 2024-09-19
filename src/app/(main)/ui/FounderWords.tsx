import Image from "next/image";
import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import OpacityWhenVisible from "@/components/animation/OpacityWhenVisible";
import { SimpleText } from "@/components/ui/typography";

export default function FounderWords() {
  return (
    <section className="py-[120px] bg-brand-logo">
      <div className="max-w-[732px] mx-auto text-center">
        <OpacityWhenVisible>
          <QuoteSvg />
        </OpacityWhenVisible>
        <FadeInWhenVisible>
          <SimpleText className="mb-12 text-white text-[36px] leading-[44px] font-medium tracking-tight mt-12">
            We wanted to create a tool that would allow anyone to build stunning, interactive widgets in just a few
            clicks.
          </SimpleText>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <div>
            <Image
              src="/images/ceo-image.png"
              width={86}
              height={86}
              alt="founder"
              className="mb-6 rounded-full mx-auto min-h-[86px]"
            />
            <SimpleText className="text-white text-xl leading-[30px] font-semibold mb-0.5">Andrei Canta</SimpleText>
            <SimpleText className="text-white text-lg font-medium opacity-80">Founder</SimpleText>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

const QuoteSvg = () => (
  <svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <path
      d="M44.17 5.21216L36.7934 30.7644H25.286L32.6625 5.21216H44.17ZM21.7452 5.21216L14.3687 30.7644H2.86133L10.2379 5.21216H21.7452Z"
      fill="white"
      fillOpacity="0.5"
    />
  </svg>
);
