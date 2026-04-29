"use client";

import { motion } from "framer-motion";

const reelUrl =
  "https://res.cloudinary.com/du67s7p6d/video/upload/v1777479623/reel-2_xydqvh.mp4";
const secondReelUrl =
  "https://res.cloudinary.com/du67s7p6d/video/upload/v1777479616/reel-1_sovgpb.mp4";
const thirdReelUrl =
  "https://res.cloudinary.com/du67s7p6d/video/upload/v1777479614/reel-3_gosbem.mp4";

const reels = [
  { label: "Store try-on", src: reelUrl },
  { label: "Backline fit", src: secondReelUrl },
  { label: "Ethnic Gen Z", src: thirdReelUrl },
];

function ReelCard({
  reel,
  index,
  className = "",
}: {
  reel: (typeof reels)[number];
  index: number;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
      whileHover={{ y: -6 }}
      className={`group w-full overflow-hidden bg-ivory p-2 shadow-[0_18px_55px_rgba(49,40,39,0.075)] transition-shadow hover:shadow-[0_26px_80px_rgba(49,40,39,0.12)] ${className}`}
    >
      <div className="relative mx-auto aspect-[9/16] max-h-[420px] overflow-hidden bg-linen">
        <video
          src={reel.src}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between bg-ivory/88 px-3 py-2.5 backdrop-blur">
          <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-cocoa">
            {reel.label}
          </p>
          <p className="text-xs text-ink/48">Lakshvi</p>
        </div>
      </div>
    </motion.article>
  );
}

export function ReelSection() {
  const mobileReels = [...reels, ...reels];

  return (
    <section className="bg-mist px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-accent text-xs font-semibold uppercase tracking-[0.28em] text-clay">
              On reels
            </p>
            <h2 className="mt-2 font-display text-4xl leading-none text-ink sm:text-5xl">
              Reels in rotation.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="max-w-xs text-sm leading-7 text-ink/58 sm:text-right"
          >
            Real movement and everyday outfit energy.
          </motion.p>
        </div>

        <div className="-mx-5 overflow-hidden pl-5 sm:hidden">
          <div className="reel-mobile-track flex w-max gap-4 pr-5">
            {mobileReels.map((reel, index) => (
              <ReelCard
                key={`${reel.label}-${index}`}
                reel={reel}
                index={index % reels.length}
                className="w-[70vw] max-w-[270px] shrink-0"
              />
            ))}
          </div>
        </div>

        <div className="mx-auto hidden max-w-5xl justify-items-center gap-4 sm:grid sm:grid-cols-3">
          {reels.map((reel, index) => (
            <ReelCard
              key={`${reel.label}-${index}`}
              reel={reel}
              index={index}
              className="max-w-[240px] sm:max-w-none"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
