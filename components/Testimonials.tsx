"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "No because this blue kurti is giving main-character college fit. Comfy, cute, zero effort.",
    name: "Krisha",
    tag: "blue girlie",
    rating: 5,
    avatar:
      "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Krisha&backgroundColor=f8e8e5",
  },
  {
    quote:
      "Wore the reddish one for brunch and everyone asked where it is from. Literally my soft launch outfit.",
    name: "Aanya",
    tag: "brunch coded",
    rating: 5,
    avatar:
      "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Aanya&backgroundColor=ebe0d2",
  },
  {
    quote:
      "The black print is such a slay. Goes with hoops, flats, messy hair, everything. She is in rotation.",
    name: "Meher",
    tag: "repeat fit",
    rating: 5,
    avatar:
      "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Meher&backgroundColor=f4efea",
  },
];

export function Testimonials() {
  return (
    <section className="bg-ivory px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div>
            <p className="font-accent text-xs font-semibold uppercase tracking-[0.28em] text-clay">
              Girl math reviews
            </p>
            <h2 className="mt-2 font-display text-4xl leading-none text-ink sm:text-5xl">
              The girls get it.
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-br from-petal/70 to-mist p-6 shadow-[0_18px_55px_rgba(49,40,39,0.05)]"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-ivory">
                  <img
                    src={item.avatar}
                    alt={`${item.name} avatar`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-2xl leading-none text-ink">
                    {item.name}
                  </p>
                  <p className="mt-1 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-clay">
                    {item.tag}
                  </p>
                </div>
              </div>

              <div
                className="mb-4 flex gap-1 font-accent text-sm tracking-[0.12em] text-clay"
                aria-label={`${item.rating} out of 5 stars`}
              >
                {Array.from({ length: item.rating }).map((_, starIndex) => (
                  <span key={starIndex}>★</span>
                ))}
              </div>

              <p className="text-lg leading-8 text-ink/74">"{item.quote}"</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
