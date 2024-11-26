import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Process from "@/components/Process";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Process />
      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>
      <Footer />
    </div>
  );
}
