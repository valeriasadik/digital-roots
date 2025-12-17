import Hero from "@/components/organisms/Hero/Hero";
import { About } from "../../organisms/About/About";
import { Footer } from "../../organisms/Footer/Footer";
import { Faqs } from "@/components/organisms/Faqs/Faqs";

export function HomeTemplate() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Faqs />
      </main>
      <Footer />
    </div>
  );
}

export default HomeTemplate;
