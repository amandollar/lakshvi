"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const supportingLooks = [
  {
    name: "Blue",
    image: "/images/kurti-blue-clean.png",
  },
  {
    name: "Black",
    image: "/images/kurti-black-clean.png",
  },
];

const textReveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="home" className="px-4 pb-10 pt-20 sm:px-6 sm:pt-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden bg-ivory/70 lg:grid-cols-[0.86fr_1.14fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08, delayChildren: 0.05 },
              },
            }}
            className="flex flex-col justify-between px-1 py-6 sm:min-h-[500px] sm:px-6 sm:py-9 lg:min-h-[580px] lg:pr-14"
          >
            <div />

            <div className="max-w-[34rem] py-6 sm:py-8 lg:py-9">
              <motion.p
                variants={textReveal}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mb-4 font-accent text-[11px] font-semibold uppercase tracking-[0.3em] text-clay"
              >
                New drop
              </motion.p>
              <motion.h1
                variants={textReveal}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[3.15rem] leading-[1.02] text-ink sm:text-[3.85rem] xl:text-[4.2rem]"
              >
                Soft prints for everyday plans.
              </motion.h1>
              <motion.p
                variants={textReveal}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 max-w-md text-[15px] leading-7 text-ink/64 sm:leading-8"
              >
                Breathable sleeveless kurtis for campus days, coffee plans, and
                effortless repeat outfits.
              </motion.p>
              <motion.div
                variants={textReveal}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <motion.a
                  href="#shop"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-ink px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory transition hover:bg-cocoa"
                >
                  Shop Collection
                </motion.a>
              </motion.div>
            </div>

            <motion.p
              variants={textReveal}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-fit bg-petal px-4 py-2 font-accent text-sm font-semibold lowercase tracking-wide text-cocoa shadow-[0_12px_35px_rgba(49,40,39,0.05)]"
            >
              fit check: sorted
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="relative bg-linen p-3 sm:p-5 lg:min-h-[580px]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(233,183,189,0.28),transparent_18rem)]" />
            <div className="relative grid h-full gap-5 lg:grid-cols-[0.38fr_0.62fr]">
              <div className="grid content-between gap-4">
                <div className="bg-ivory/82 p-5 shadow-[0_18px_55px_rgba(49,40,39,0.05)] backdrop-blur">
                  <p className="font-display text-[1.7rem] leading-tight text-ink sm:text-[2rem]">
                    Available in three colors.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {supportingLooks.map((look, index) => (
                    <motion.article
                      key={look.name}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.22 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ y: -4 }}
                      className="group grid grid-cols-[5.5rem_1fr] overflow-hidden bg-ivory/92 shadow-[0_18px_55px_rgba(49,40,39,0.055)] backdrop-blur"
                    >
                      <div className="relative min-h-28 bg-mist sm:min-h-36">
                        <Image
                          src={look.image}
                          alt={`${look.name} Lakshvi kurti`}
                          fill
                          unoptimized
                          sizes="120px"
                          className="object-cover object-[50%_18%] transition duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="flex items-center p-4">
                        <h3 className="font-display text-2xl leading-none text-ink">
                          {look.name}
                        </h3>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              <motion.article
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
                whileHover={{ y: -5 }}
                className="group relative min-h-[430px] overflow-hidden bg-gradient-to-b from-mist to-[#e8e1da] shadow-[0_28px_90px_rgba(49,40,39,0.11)] sm:min-h-[520px]"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/kurti-reddish-clean.png"
                    alt="Reddish Lakshvi sleeveless kurti"
                    fill
                    unoptimized
                    priority
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-contain object-bottom p-4 transition duration-700 group-hover:scale-[1.018] sm:p-5"
                  />
                </motion.div>
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-4 bg-ivory/92 px-3 py-3 shadow-[0_12px_35px_rgba(49,40,39,0.08)] backdrop-blur sm:bottom-4 sm:left-4 sm:right-4 sm:px-4">
                  <div>
                    <h3 className="font-display text-xl leading-none text-ink sm:text-2xl">
                      Reddish Backline Kurti
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-ink">Rs. 1,099</p>
                </div>
              </motion.article>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
