import { Towns } from "../../organisms/Towns/Towns";
import { Footer } from "../../organisms/Footer/Footer";
import { Town } from "@/types/card";

interface TownsTemplateProps {
  readonly towns: Town[];
}

export function TownsTemplate({ towns }: TownsTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <header className="mb-12 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 mb-4 leading-tight">
            Discover Towns with{" "}
            <span className="block text-[var(--color-sage)] mt-2">
              Quality Internet
            </span>
          </h1>
          <p className="mx-auto lg:mx-0 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Explore rural communities across Spain that combine traditional
            charm with modern connectivity, perfect for remote work.
          </p>
        </header>

        <Towns towns={towns} />
      </main>
      <Footer />
    </div>
  );
}

export default TownsTemplate;
