"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { widgets } from "@/app/(main)/ui/fakeData";

import { SimpleText } from "../typography";

const animationVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  inView: {
    x: 0,
    opacity: 1,
    transition: {
      bounce: 0,
      duration: 0.6,
      delay: 0.5,
    },
  },
};

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll({ playOnInit: true })]);

  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      animate="inView"
      className="overflow-hidden w-full mx-auto flex items-center justify-center touch-pan-y touch-pinch-zoom py-6"
      ref={emblaRef}
    >
      <div className="flex w-full">
        {widgets.map((item) => (
          <article
            key={item.id}
            className="shadow-xs border border-border-secondary rounded-3xl dark:border-border-dark-primary h-fit flex-[0_0_376px] mr-8"
          >
            <div
              className={twMerge(
                "h-[294px] relative overflow-hidden flex justify-center lg:pt-[63px] pt-[60px] bg-bg-widget-card rounded-3xl",
                item.isCentered && "items-center pt-0"
              )}
            >
              <CardBgPatternSvg />
              {item.component}
            </div>
            <div className="px-[15px] py-[19px] border-t border-border-secondary rounded-b-3xl bg-white dark:bg-bg-primary-dark dark:border-active-dark shadow-[0px_-4px_0px_0px_#3E3E3E0A_inset,0px_1px_3px_0px_#8F8F8F33]">
              <SimpleText weight="font-medium" className="whitespace-nowrap text-xl text-card-title">
                {item.title}
              </SimpleText>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
}

const CardBgPatternSvg = () => (
  <svg
    className="absolute z-[1] w-full -top-px left-0 object-fill"
    width="100%"
    height="100%"
    viewBox="0 0 384 294"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="mask0_22270_27315" maskUnits="userSpaceOnUse" x="0" y="0" width="384" height="294">
      <rect width="384" height="294" fill="url(#paint0_linear_22270_27315)" />
    </mask>
    <g mask="url(#mask0_22270_27315)">
      <line x1="60.5" y1="-2.18557e-08" x2="60.5" y2="294" stroke="#EAEAEA" />
      <line x1="126.5" y1="-2.18557e-08" x2="126.5" y2="294" stroke="#EAEAEA" />
      <line x1="192.5" y1="-2.18557e-08" x2="192.5" y2="294" stroke="#EAEAEA" />
      <line x1="258.5" y1="-2.18557e-08" x2="258.5" y2="294" stroke="#EAEAEA" />
      <line x1="324.5" y1="-2.18557e-08" x2="324.5" y2="294" stroke="#EAEAEA" />
      <line x1="384" y1="62.5" y2="62.5" stroke="#EAEAEA" />
      <line x1="384" y1="128.5" y2="128.5" stroke="#EAEAEA" />
      <line x1="384" y1="194.5" y2="194.5" stroke="#EAEAEA" />
      <line x1="384" y1="260.5" y2="260.5" stroke="#EAEAEA" />
    </g>
    <defs>
      <linearGradient id="paint0_linear_22270_27315" x1="192" y1="0" x2="192" y2="294" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D9D9D9" />
        <stop offset="1" stopColor="#737373" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
