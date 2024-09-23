"use client";

import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import { SimpleText } from "@/components/ui/typography";

// scroll animation needs to be added

export default function SaveHours() {
  const [activeId] = useState(1);

  return (
    <section className="pt-[120px] pb-[164px]">
      <div className="max-w-[532px] mx-auto text-center mb-20">
        <FadeInWhenVisible>
          <SimpleText className="text-bg-overlay text-5xl leading-[60px] font-bold mb-[18px] tracking-tight">
            Save your tons of expensive hours
          </SimpleText>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <SimpleText className="text-text-disabled text-lg px-12">
            Our widget solution is designed to help you save valuable time and resources.
          </SimpleText>
        </FadeInWhenVisible>
      </div>
      <div className="flex gap-20 justify-between items-center">
        <div className="pl-[120px] space-y-6">
          {items.map((item) => (
            <div key={item.title} className="max-w-[364px]">
              <div
                className={twMerge(
                  "border-l-2 border-transparent py-6 pl-[22px] pr-6",
                  activeId === item.id && "border-brand-logo"
                )}
              >
                <SimpleText className="text-bg-overlay mb-4 text-xl leading-[30px]" weight="font-semibold">
                  {item.title}
                </SimpleText>
                <SimpleText className="text-lg" color="secondary-700">
                  {item.subtitle}
                </SimpleText>
              </div>
            </div>
          ))}
        </div>
        <div
          className={twMerge("relative right-0 rounded-[9px] rounded-r-none border border-r-0 overflow-hidden", shadow)}
        >
          <Image width={938} height={670} alt="save hours" src="/images/save-hours.png" className="object-contain" />
        </div>
      </div>
    </section>
  );
}

const items = [
  {
    id: 1,
    title: "Easy-to-use widget builder",
    subtitle: "Effortlessly create widgets in minutes, no expertise needed.",
  },
  {
    id: 2,
    title: "Customizable designs",
    subtitle: "Tailor designs to match your brand, easily and intuitively.",
  },
  {
    id: 3,
    title: "Seamless website integration",
    subtitle: "Integrates smoothly with your website, no interruptions.",
  },
];

const shadow =
  "shadow-[0px_2.85px_2.21px_0px_#B5B4BE09,0px_6.85px_5.32px_0px_#B5B4BE0D,0px_12.9px_10.02px_0px_#B5B4BE11,0px_23.01px_17.87px_0px_#B5B4BE14,0px_43.03px_33.42px_0px_#B5B4BE18,0px_103px_80px_0px_#B5B4BE21]";
