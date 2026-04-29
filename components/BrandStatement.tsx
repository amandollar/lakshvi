"use client";

import { motion } from "framer-motion";

export function BrandStatement() {
  return (
    <section id="story" className="bg-linen px-5 py-20 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-7xl gap-10 border-y border-ink/10 py-12 lg:grid-cols-[0.55fr_1fr] lg:items-end"
      >
        <div>
          <p className="font-accent text-xs font-semibold uppercase tracking-[0.32em] text-clay">
            About Lakshvi
          </p>
          <p className="mt-5 max-w-xs text-sm leading-7 text-ink/62">
            Built around daily wear that still feels special when the camera
            comes out.
          </p>
        </div>
        <p className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
          Everyday pieces with a soft, camera-ready mood.
        </p>
      </motion.div>
    </section>
  );
}
