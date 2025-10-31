import { Hero } from "../organisms/Hero";
import { Navbar } from "../organisms/Navbar";

export function HomeTemplate() {
  return (
    <div className="flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        <Hero />
      </main>
      
    </div>
  );
}
