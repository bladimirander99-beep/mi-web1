import { Hero } from "./components/Hero";
import { CategoriesSection } from "./components/CategoriesSection";
import { CursoRedes } from "./components/CursoRedes";
import { EarningsSection } from "./components/EarningsSection";
import { Donaciones } from "./components/Donaciones";
import { AdsterraBanner } from "./components/AdsterraBanner";
import { Footer } from "./components/Footer";
import { ADSTERRA_BANNER } from "@/lib/constants";

export default function Page() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <CursoRedes />
      <EarningsSection />
      <Donaciones />
      <AdsterraBanner adCode={ADSTERRA_BANNER} />
      <Footer />
    </>
  );
}