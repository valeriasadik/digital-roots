import { Card } from "../../molecules/Card/Card";
import { Community } from "@/types/card";

interface CommunitiesProps {
  readonly communities: Community[];
}

export function Communities({ communities }: CommunitiesProps) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      aria-label="Available communities list"
    >
      {communities.map((community) => (
        <Card
          key={community.id}
          {...community}
          href={`/communities/${community.id}`}
        />
      ))}
    </section>
  );
}

export default Communities;
