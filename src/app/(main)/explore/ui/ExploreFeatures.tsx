import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import { SimpleText } from "@/components/ui/typography";

import InboxSvg from "../icons/inbox.svg";
import RocketSvg from "../icons/rocket.svg";
import WandSvg from "../icons/wand.svg";

export default function ExploreFeatures() {
  return (
    <section className="grid grid-cols-3 gap-6 mt-8 max-md:grid-cols-1">
      {features.map((item, idx) => (
        <FadeInWhenVisible key={item.title} delay={0.1 + idx / 10}>
          <article className="p-4">
            {item.icon}
            <SimpleText className="mt-6 mb-3 max-md:mt-4 max-md:mb-1.5 text-lg" weight="font-bold">
              {item.title}
            </SimpleText>
            <SimpleText className="text-lg">{item.subtitle}</SimpleText>
          </article>
        </FadeInWhenVisible>
      ))}
    </section>
  );
}

const features = [
  {
    title: "Doubled our email signups",
    subtitle: "Boost email signups instantly with our smart, engaging widgets.",
    icon: <RocketSvg />,
  },
  {
    title: "Customer feedback is now effortless",
    subtitle: "Collect valuable feedback easily with just a few clicks.",
    icon: <InboxSvg />,
  },
  {
    title: "No technical knowledge required",
    subtitle: "Simple to use, no coding or setup needed—just plug and play.",
    icon: <WandSvg />,
  },
];
