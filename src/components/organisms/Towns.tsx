import { TownsCardsContent } from "../molecules/TownsCardsContent";

interface Town {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  population?: number;
  internet?: number;
}

interface TownsTemplateProps {
  readonly towns: Town[];
}

export function Towns({ towns }: TownsTemplateProps) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      aria-label="Available towns list"
    >
      {towns.map((town) => (
        <TownsCardsContent key={town.id} {...town} />
      ))}
    </section>
  );
}

export default Towns;
