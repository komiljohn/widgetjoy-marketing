"use client";

import Image from "next/image";
import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import { SimpleText } from "@/components/ui/typography";

import StarSvg from "../icons/star.svg";
import { testimonials } from "../utils/fakeData";

export default function Testimonials() {
  return (
    <section className="py-20 px-4 max-md:py-10">
      <div className="max-w-[532px] mx-auto text-center mb-20 max-md:mb-6">
        <FadeInWhenVisible>
          <SimpleText className="text-bg-overlay text-5xl max-md:text-4xl leading-[60px] font-bold mb-[18px] tracking-tight">
            Hear From Our Customers
          </SimpleText>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <SimpleText className="text-text-disabled text-lg px-12">Experiences that speak for themselves.</SimpleText>
        </FadeInWhenVisible>
      </div>
      <div className="grid grid-cols-3 gap-6 max-xl:gap-4 max-w-[1200px] mx-auto max-lg:grid-cols-2 max-sm:grid-cols-1">
        {testimonials.map((item, idx) => (
          <FadeInWhenVisible
            delay={(idx + 1) / 10}
            key={item.id}
            className="p-4 h-fit border border-bg-disabled rounded-md shadow-sm"
          >
            <div className="flex justify-between mb-[18px]">
              <div className="flex items-center gap-3">
                <Image width={48} height={48} src={item.profilePic} alt="user" />
                <div>
                  <SimpleText color="secondary-700" className="text-sm" weight="font-semibold">
                    {item.name}
                  </SimpleText>
                  <SimpleText color="tertiary-600" className="text-sm">
                    {item.position}
                  </SimpleText>
                </div>
              </div>
              <Image width={24} height={24} src={item.sourcePic} alt="source" className="h-fit" />
            </div>
            <SimpleText className="mb-[18px]">{item.comment}</SimpleText>
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {Array.from({ length: item.stars }).map((i) => (
                  <StarSvg key={i} />
                ))}
              </div>
              <SimpleText color="quaternary-500" tag="span" weight="font-medium">
                {item.date}
              </SimpleText>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}
