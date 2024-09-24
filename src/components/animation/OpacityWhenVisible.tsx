"use client";

import { motion, MotionProps } from "framer-motion";
import React, { ReactNode } from "react";

interface Props extends MotionProps {
  children: ReactNode;
  className?: string;
}

export default function OpacityWhenVisible({ children, ...props }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px", ...props.viewport }}
      className={props.className ?? ""}
    >
      {children}
    </motion.div>
  );
}
