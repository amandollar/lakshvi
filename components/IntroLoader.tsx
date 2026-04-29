"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const letters = "LAKSHVI".split("");

export function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1700);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[120] grid place-items-center bg-ivory"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              {letters.map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display text-5xl tracking-[0.12em] text-ink sm:text-7xl"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 font-accent text-[11px] font-semibold uppercase tracking-[0.28em] text-clay"
            >
              Gen Z wardrobe
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
