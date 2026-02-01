import Navbar from "@/components/sections/navbar/default";
import Hero from "@/components/sections/hero/default";
import Logos from "@/components/sections/logos/default";
import AppAndOs from "@/components/sections/app-and-os/default";
import Installing from "@/components/sections/installing/default";
import WhyUpgrade from "@/components/sections/why-upgrade/default";
import Features from "@/components/sections/features/default";
import Benchmarks from "@/components/sections/benchmarks/default";
import Pros from "@/components/sections/pros/default";
import Reviews from "@/components/sections/reviews/default";
import OpenSource from "@/components/sections/open-source/default";
import FAQ from "@/components/sections/faq/default";
import CTA from "@/components/sections/cta/default";
import Footer from "@/components/sections/footer/default";

export default function Home() {
  return (
    <main className="bg-background text-foreground relative min-h-screen w-full">
      <div
        className="bg-fluid pointer-events-none fixed inset-0 -z-10"
        aria-hidden
      />
      <Navbar />
      <Hero />
      <Logos />
      <AppAndOs />
      <Installing />
      <WhyUpgrade />
      <Features />
      <Benchmarks />
      <Pros />
      <Reviews />
      <OpenSource />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
