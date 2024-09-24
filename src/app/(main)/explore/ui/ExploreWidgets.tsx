import React from "react";
import { twMerge } from "tailwind-merge";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import ClientButton from "@/components/ui/button/client-button";
import { SimpleText } from "@/components/ui/typography";

import { CardSvg } from "../../../../../public/icons";
import { widgets } from "../../ui/fakeData";

export default function ExploreWidgets() {
  return (
    <section className="pt-6 pb-[120px] max-md:pb-[60px] px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-md:grid-cols-1 max-md:gap-4">
        {widgets.map((item, idx) => (
          <FadeInWhenVisible key={idx} delay={0.1 + idx / 10} viewport={{ margin: "200px" }}>
            <article className="border border-border-primary rounded-3xl shadow-xs dark:border-border-dark-primary h-fit">
              <div
                className={twMerge(
                  "h-[294px] relative overflow-hidden flex justify-center pt-[60px]",
                  item.isCentered && "items-center pt-0"
                )}
              >
                <CardSvg className="stroke-border-secondary dark:stroke-active-dark absolute -z-[1] top-0 w-full object-fill" />
                {item.component}
              </div>
              <div className="px-[15px] py-[19px] border-t border-border-secondary rounded-b-3xl bg-white dark:bg-bg-primary-dark dark:border-active-dark">
                <SimpleText color="primary-900" className="text-xl mb-1.5" weight="font-medium">
                  {item.title}
                </SimpleText>
                <SimpleText color="quaternary-500" className="mb-4">
                  {item.subtitle}
                </SimpleText>
                <ClientButton size="lg" variant="secondary" className="w-full max-md:py-[7px]">
                  Get it & customize
                </ClientButton>
              </div>
            </article>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}
