import { Hero } from "../organisms/Hero";
import { Navbar } from "../organisms/Navbar";
import { About } from "../organisms/About";
import { Footer } from "../organisms/Footer";

export function HomeTemplate() {
  return (
    <div className="flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}
