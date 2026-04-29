"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    name: "Blue Backline Kurti",
    image: "/images/kurti-blue-clean.png",
    tone: "Blue floral print",
    price: "Rs. 1,199",
    fabric: "Soft cotton blend",
    fit: "Sleeveless straight fit with side slits",
  },
  {
    name: "Black Backline Kurti",
    image: "/images/kurti-black-clean.png",
    tone: "Classic floral print",
    price: "Rs. 1,299",
    fabric: "Soft cotton blend",
    fit: "Sleeveless straight fit with side slits",
  },
  {
    name: "Reddish Backline Kurti",
    image: "/images/kurti-reddish-clean.png",
    tone: "Bold floral print",
    price: "Rs. 1,099",
    fabric: "Soft cotton blend",
    fit: "Sleeveless straight fit with side slits",
  },
];

type Product = (typeof products)[number];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="shop" className="bg-ivory px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-accent text-xs font-semibold uppercase tracking-[0.28em] text-clay">
              Our collection
            </p>
            <h2 className="mt-3 font-display text-5xl leading-none sm:text-7xl">
              The kurti edit
            </h2>
          </div>
          <div className="max-w-xl lg:ml-auto lg:text-right">
            <p className="text-sm leading-7 text-ink/58">
              Three easy prints, clean sleeveless cuts, and outfits that do not
              need overthinking.
            </p>
            <a
              href="#shop"
              className="mt-5 inline-block font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-ink underline decoration-ink/25 underline-offset-8 transition hover:decoration-ink"
            >
              View all products
            </a>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group bg-ivory shadow-[0_20px_65px_rgba(49,40,39,0.055)] transition-shadow hover:shadow-[0_26px_80px_rgba(49,40,39,0.095)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-mist to-linen">
                <div className="pointer-events-none absolute inset-x-8 bottom-8 h-20 rounded-full bg-ink/10 blur-2xl" />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain object-bottom p-3 transition duration-700 group-hover:scale-[1.025]"
                />
                <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-2 font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-cocoa backdrop-blur-sm">
                  New
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[1.75rem] leading-none text-ink sm:text-3xl">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-ink/52">{product.tone}</p>
                  </div>
                  <p className="text-sm font-medium text-ink">{product.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="block w-full bg-mist py-3 text-center font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-ivory"
                >
                  View Details
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {selectedProduct ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/35 px-3 py-4 pb-24 backdrop-blur-sm sm:px-4 sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProduct.name} details`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid max-h-[88svh] w-full max-w-4xl overflow-auto bg-ivory shadow-[0_28px_90px_rgba(49,40,39,0.22)] md:grid-cols-[0.9fr_1fr]"
          >
            <div className="relative min-h-[280px] bg-mist sm:min-h-[360px] md:min-h-[560px]">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                unoptimized
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-contain object-bottom p-5"
              />
            </div>

            <div className="flex flex-col justify-between p-5 sm:p-8">
              <div>
                <div className="mb-6 flex items-start justify-between gap-4 sm:mb-8 sm:gap-6">
                  <div>
                    <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.24em] text-clay">
                      Backline edit
                    </p>
                    <h3 className="mt-3 font-display text-3xl leading-none text-ink sm:text-5xl">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="bg-mist px-3 py-2 font-accent text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-ivory"
                  >
                    Close
                  </button>
                </div>

                <p className="text-2xl font-medium text-ink">
                  {selectedProduct.price}
                </p>
                <div className="mt-8 grid gap-4 text-sm leading-7 text-ink/64">
                  <p>
                    <span className="font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-clay">
                      Fabric
                    </span>
                    <br />
                    {selectedProduct.fabric}
                  </p>
                  <p>
                    <span className="font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-clay">
                      Fit
                    </span>
                    <br />
                    {selectedProduct.fit}
                  </p>
                  <p>
                    <span className="font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-clay">
                      Styling
                    </span>
                    <br />
                    Pair with linen pants, flats, hoops, and a clean tote.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://www.instagram.com/lakshvi.in"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-ink px-5 py-3 text-center font-accent text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory transition hover:bg-cocoa"
                >
                  Order on Instagram
                </a>
                <a
                  href="#contact"
                  onClick={() => setSelectedProduct(null)}
                  className="bg-mist px-5 py-3 text-center font-accent text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-ivory"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
