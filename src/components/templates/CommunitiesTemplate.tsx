import { Communities } from "../organisms/Communities";
import { Community } from "@/types/card";

interface CommunitiesTemplateProps {
  readonly communities: Community[];
}

export function CommunitiesTemplate({ communities }: CommunitiesTemplateProps) {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
            Communities
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover ecovillages and intentional communities committed to
            sustainable living
          </p>
        </header>

        <Communities communities={communities} />
      </div>
    </main>
  );
}

export default CommunitiesTemplate;
