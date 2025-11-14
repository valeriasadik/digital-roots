import { Card } from "../molecules/Card";
import { Town } from "@/types/card";

interface TownsProps {
  readonly towns: Town[];
}

export function Towns({ towns }: TownsProps) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      aria-label="Available towns list"
    >
      {towns.map((town) => (
        <Card key={town.id} {...town} />
      ))}
    </section>
  );
}

export default Towns;
