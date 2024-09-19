"use client";

import { motion, MotionProps } from "framer-motion";
import React, { ReactNode } from "react";

interface Props extends MotionProps {
  children: ReactNode;
  delay?: number;
  initialRotate: number;
  finalRotate: number;
  className?: string;
}

export default function RotateFadeInWhenVisible({ children, delay, ...props }: Props) {
  return (
    <motion.div
      className={props.className}
      initial={{
        opacity: 0,
        rotate: props.initialRotate,
      }}
      whileInView={{
        opacity: 1,
        rotate: props.finalRotate,
        transition: {
          type: "spring",
          bounce: 0.4,
          delay,
        },
      }}
      viewport={{ once: true, amount: "all", ...props.viewport }}
    >
      {children}
    </motion.div>
  );
}
