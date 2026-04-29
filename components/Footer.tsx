export function Footer() {
  return (
    <footer id="contact" className="bg-ink px-5 pb-28 pt-12 text-ivory sm:px-8 sm:pb-12 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr]">
        <div>
          <p className="font-display text-4xl tracking-[0.08em]">LAKSHVI</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-ivory/62">
            Soft ethnicwear made for everyday plans, pretty pictures, and a
            wardrobe that feels effortless.
          </p>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.22em] text-ivory/48">
            Explore
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-ivory/72">
            <a href="#home" className="transition hover:text-ivory">
              Home
            </a>
            <a href="#shop" className="transition hover:text-ivory">
              Shop
            </a>
            <a href="#story" className="transition hover:text-ivory">
              About
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.22em] text-ivory/48">
            Help
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-ivory/72">
            <span>Shipping in India</span>
            <span>Easy exchange</span>
            <span>Size assistance</span>
          </div>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.22em] text-ivory/48">
            Contact
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-ivory/72">
            <a
              href="https://www.instagram.com/lakshvi.in"
              className="transition hover:text-ivory"
            >
              Instagram
            </a>
            <span>India</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-ivory/12 pt-6 text-xs text-ivory/46 sm:flex-row sm:items-center sm:justify-between">
        <span>Copyright 2026 Lakshvi. All rights reserved.</span>
        <span>Privacy Policy / Terms & Conditions</span>
      </div>
    </footer>
  );
}
