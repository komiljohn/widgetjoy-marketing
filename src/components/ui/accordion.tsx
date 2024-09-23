import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import Divider from "./divider";
import { SimpleText } from "./typography";

export default function Accordion({ data }: { data: { id: string; answer: string; question: string }[] }) {
  const [activeId, setActiveId] = useState<string | null>(data[0].id);

  return (
    <div>
      {data.map((item, idx) => (
        <>
          <section key={item.id} className="px-5">
            <button
              aria-expanded={activeId === item.id}
              aria-controls="accordion-content"
              onClick={() => setActiveId((p) => (p === item.id ? null : item.id))}
              className="py-[15px] flex items-center justify-between gap-3 w-full focus-ring rounded-md"
            >
              <SimpleText className="text-lg" weight="font-semibold" tag="span">
                {item.question}
              </SimpleText>
              <ChevronDown
                size={20}
                color="#667085"
                className={twMerge(
                  "transition-transform duration-400",
                  activeId === item.id ? "rotate-180" : "rotate-0"
                )}
              />
            </button>
            {
              <AnimatePresence>
                {item.id === activeId && (
                  <motion.div
                    id="accordion-content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.p
                      variants={{ collapsed: { scale: 0.95 }, open: { scale: 1 } }}
                      transition={{ duration: 0.4 }}
                    >
                      <SimpleText className="text-accordion-answer">{item.answer}</SimpleText>
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            }
          </section>
          {data.length - 1 !== idx && <Divider className="bg-bg-disabled my-2" />}
        </>
      ))}
    </div>
  );
}
