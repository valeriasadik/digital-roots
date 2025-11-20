import { DetailHero } from "../atoms/DetailHero";
import { CommunityDetailContent } from "../molecules/CommunityDetailContent";
import { Community } from "@/types/card";

interface CommunityDetailTemplateProps {
  readonly community: Community;
}

export function CommunityDetailTemplate({
  community,
}: CommunityDetailTemplateProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      <DetailHero
        name={community.name}
        imageUrl={community.imageUrl}
        description={community.description}
      />
      <CommunityDetailContent community={community} />
    </main>
  );
}

export default CommunityDetailTemplate;
