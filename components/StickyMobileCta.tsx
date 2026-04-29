export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-ink/10 bg-ivory/94 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href="#shop"
          className="bg-ink py-3 text-center font-accent text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory"
        >
          Shop
        </a>
        <a
          href="https://www.instagram.com/lakshvi.in"
          target="_blank"
          rel="noreferrer"
          className="bg-petal py-3 text-center font-accent text-[11px] font-semibold uppercase tracking-[0.16em] text-ink"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
