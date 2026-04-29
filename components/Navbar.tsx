const navItems = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ivory/90 shadow-[0_1px_0_rgba(49,40,39,0.08)] backdrop-blur-md">
      <div className="hidden py-1.5 text-center font-accent text-[10px] font-semibold uppercase tracking-[0.24em] text-cocoa/68 sm:block">
        Free shipping on prepaid orders
      </div>
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="font-display text-xl tracking-[0.14em] text-ink sm:text-2xl"
          aria-label="Lakshvi home"
        >
          LAKSHVI
        </a>

        <div className="hidden items-center gap-8 font-accent text-[12px] font-semibold uppercase tracking-[0.16em] text-ink/58 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#shop"
          className="bg-ink px-3 py-2 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-ivory transition hover:bg-cocoa sm:px-4 sm:text-[11px] sm:tracking-[0.18em]"
        >
          Shop Now
        </a>
      </nav>
    </header>
  );
}
