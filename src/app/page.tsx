import { Footer } from "./components/organisms/Footer";
import { Hero } from "./components/organisms/Hero";
import { Navbar } from "./components/organisms/Navbar";

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
