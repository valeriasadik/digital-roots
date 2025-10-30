import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
