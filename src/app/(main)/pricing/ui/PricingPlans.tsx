"use client";

import { Check } from "lucide-react";
import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import GlowingBorder from "@/components/animation/GlowingBorder";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";

export default function PricingPlans() {
  return (
    <section className="py-6">
      <div className="flex justify-between gap-6 max-w-[1200px] mx-auto">
        {plans.map((item, idx) => (
          <FadeInWhenVisible
            key={item.id}
            delay={idx === 1 ? 0.1 : 0.25}
            className="h-fit p-[23px] bg-white border border-border-secondary rounded-2xl shadow-[0px_1px_3px_0px_#8F8F8F33,0px_-4px_0px_0px_#3E3E3E0A_inset] relative"
          >
            <GlowingBorder isVisible={!!item.isMostPopular} />
            <div className="flex items-center justify-between mb-4">
              <SimpleText className="text-xl leading-[30px] text-bg-overlay" weight="font-semibold">
                {item.title}
              </SimpleText>
              {item.isMostPopular && (
                <Badge className="bg-white text-brand-logo text-base py-[5px] px-[15px] shadow-[0px_2px_2px_0px_#0A0A0A0D]">
                  Most popular
                </Badge>
              )}
            </div>
            <SimpleText color="tertiary-600" className="text-lg mb-[38px]">
              {item.description}
            </SimpleText>
            <SimpleText className="text-5xl leading-[60px] tracking-tight mb-6" weight="font-semibold">
              {item.isCustomPrice ? "Custom" : `$${item.pricePerMonth}/m`}
            </SimpleText>
            <Button variant={item.isMostPopular ? "primary" : "secondary"} size="lg" className="mb-6 w-full">
              Choose plan
            </Button>
            <div>
              <SimpleText className="mb-6" weight="font-medium">
                {item.title} includes:
              </SimpleText>
              <ul className="space-y-4">
                {item.includes.map((childItem) => (
                  <li key={childItem} className="flex items-center gap-3">
                    <div className="bg-moss-500 p-1 rounded-full">
                      <Check size={16} color="#fff" />
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
