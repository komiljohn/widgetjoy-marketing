"use client";

import { motion, MotionProps } from "framer-motion";
import React, { ReactNode } from "react";

interface Props extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInWhenVisible({ children, delay, ...props }: Props) {
  return (
    <motion.div
      initial={{
        y: 15,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          delay,
        },
      }}
      viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px", ...props.viewport }}
      className={props.className ?? ""}
    >
      {children}
    </motion.div>
  );
}
