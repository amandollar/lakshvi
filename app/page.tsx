import { BrandStatement } from "@/components/BrandStatement";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IntroLoader } from "@/components/IntroLoader";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";
import { ReelSection } from "@/components/ReelSection";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ivory text-ink">
      <IntroLoader />
      <Navbar />
      <Hero />
      <Products />
      <ReelSection />
      <Testimonials />
      <BrandStatement />
      <Footer />
      <StickyMobileCta />
    </main>
  );
}
