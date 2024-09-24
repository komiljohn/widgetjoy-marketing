"use client";

import { Check } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";

export default function PricingPlans() {
  return (
    <section className="py-6 px-4">
      <div className="flex justify-between gap-6 max-xl:flex-col max-xl:gap-4 max-w-[1200px] mx-auto">
        {plans.map((item, idx) => (
          <FadeInWhenVisible
            key={item.id}
            delay={idx === 1 ? 0.1 : 0.25}
            className={twMerge(
              "h-fit p-[23px] max-md:px-2 bg-white border border-border-secondary rounded-2xl shadow-[0px_1px_3px_0px_#8F8F8F33,0px_-4px_0px_0px_#3E3E3E0A_inset] relative max-xl:text-center",
              item.isMostPopular &&
                "border-brand-logo border-2 shadow-[0px_1px_3px_0px_#ff440533,0px_-4px_0px_0px_#ff44050A_inset] max-xl:mt-4"
            )}
          >
            {item.isMostPopular && (
              <Badge className="absolute -top-[18px] left-1/2 -translate-x-1/2 text-base py-[5px] px-[15px] bg-brand-logo text-white border-none">
                Most popular
              </Badge>
            )}
            <SimpleText
              className="text-xl leading-[30px] text-bg-overlay max-xl:mx-auto mb-4 max-md:mb-2"
              weight="font-semibold"
            >
              {item.title}
            </SimpleText>

            <SimpleText color="tertiary-600" className="text-lg mb-[38px] max-md:mb-[18px]">
              {item.description}
            </SimpleText>
            <SimpleText
              className="text-5xl max-md:text-4xl leading-[60px] tracking-tight mb-6 max-md:mb-4"
              weight="font-semibold"
            >
              {item.isCustomPrice ? "Custom" : `$${item.pricePerMonth}/m`}
            </SimpleText>
            <Button
              variant={item.isMostPopular ? "primary" : "secondary"}
              size="lg"
              className="mb-6 w-full max-xl:max-w-[270px] max-xl:mx-auto max-md:py-[7px] max-md:mb-4"
            >
              Choose plan
            </Button>
            <div>
              <SimpleText className="mb-6 max-md:mb-3" weight="font-medium">
                {item.title} includes:
              </SimpleText>
              <ul className="space-y-4 max-md:space-y-2 max-xl:mx-auto w-fit">
                {item.includes.map((childItem) => (
                  <li key={childItem} className="flex items-center gap-3">
                    <div className="bg-moss-500 p-1 rounded-full">
                      <Check color="#fff" className="size-4 max-md:size-3" />
                    </div>
                    <SimpleText className="text-bg-overlay" weight="font-medium">
                      {childItem}
                    </SimpleText>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}

const plans = [
  {
    id: "basic",
    title: "Basic",
    description: "Great for small-scale research and customer feedback",
    pricePerMonth: 16,
    includes: ["3 Widgets", "Basic Customization", "1,000 Monthly Views"],
  },
  {
    id: "pro",
    title: "Pro",
    description: "Great for small-scale research and customer feedback",
    pricePerMonth: 24,
    includes: ["Unlimited Widgets", "Advanced Customization", "10,000 Monthly Views", "Priority Support"],
    isMostPopular: true,
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Great for small-scale research and customer feedback",
    includes: ["Unlimited Everything", "Custom Development", "Dedicated Support", "SLA"],
    isCustomPrice: true,
  },
];
