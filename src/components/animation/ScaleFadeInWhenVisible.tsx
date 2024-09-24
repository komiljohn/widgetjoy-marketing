"use client";

import { motion, MotionProps } from "framer-motion";
import React, { ReactNode } from "react";

interface Props extends MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScaleFadeInWhenVisible({ children, delay, ...props }: Props) {
  return (
    <motion.div
      className={props.className}
      initial={{
        y: 15,
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          bounce: 0.25,
          delay,
        },
      }}
      viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px", ...props.viewport }}
    >
      {children}
    </motion.div>
  );
}
