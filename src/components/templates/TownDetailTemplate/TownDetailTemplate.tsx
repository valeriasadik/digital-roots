import { DetailHero } from "../../atoms/DetailHero";
import { TownDetail } from "../../organisms/Towns/TownDetail/TownDetail";
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
      <TownDetail town={town} />
    </main>
  );
}

export default TownDetailTemplate;
