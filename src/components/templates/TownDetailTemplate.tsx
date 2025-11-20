import { DetailHero } from "../atoms/DetailHero";
import { TownDetailContent } from "../molecules/TownDetailContent";
import { Town } from "@/types/card";

interface TownDetailTemplateProps {
  readonly town: Town;
}

export function TownDetailTemplate({ town }: TownDetailTemplateProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      <DetailHero
        name={town.name}
        imageUrl={town.imageUrl}
        description={town.description}
      />
      <TownDetailContent town={town} />
    </main>
  );
}

export default TownDetailTemplate;
