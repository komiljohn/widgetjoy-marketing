"use client";

import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import OpacityWhenVisible from "@/components/animation/OpacityWhenVisible";
import Accordion from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";

import { accordionData } from "../utils/fakeData";

export default function FAQ() {
  return (
    <section className="py-20 px-4 max-md:py-10">
      <div className="max-w-[532px] mx-auto text-center mb-20 max-md:mb-6">
        <FadeInWhenVisible>
          <SimpleText className="text-bg-overlay text-5xl max-md:text-4xl leading-[60px] font-bold mb-[18px] tracking-tight">
            Frequently asked questions
          </SimpleText>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <SimpleText className="text-text-disabled text-lg px-12 max-sm:px-0">Everything you need to know.</SimpleText>
        </FadeInWhenVisible>
      </div>
      <OpacityWhenVisible viewport={{ margin: "400px" }}>
        <div className="max-w-[700px] mx-auto py-10 max-md:py-5 px-5 bg-white rounded-2xl shadow-[0px_-4px_0px_0px_#3E3E3E0A_inset,0px_1px_3px_0px_#8F8F8F33]">
          <Accordion data={accordionData} />
          <div className="text-center mt-8">
            <div className="bg-widget-bg rounded-2xl py-12 max-md:py-6 max-w-[400px] mx-auto">
              <SimpleText className="text-2xl mb-3 text-bg-overlay" weight="font-semibold">
                Don't see what you're looking&nbsp;for?
              </SimpleText>
              <SimpleText className="text-lg mb-[28px] px-[14px]" color="secondary-700">
                Reach out to our team directly and we'll&nbsp;get back to you.
              </SimpleText>
              <Button size="lg" className="mx-auto">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </OpacityWhenVisible>
    </section>
  );
}
