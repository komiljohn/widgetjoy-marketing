import "./style.css";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function GlowingBorder({ className, isVisible }: { className?: string; isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          data-visible={isVisible}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className={twMerge("card", className)}
        />
      )}
    </AnimatePresence>
  );
}
