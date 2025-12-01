import { DetailHero } from "../../atoms/DetailHero";
import { CommunityDetail } from "../../organisms/Communities/CommunityDetail/CommunityDetailContent";
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
      <CommunityDetail community={community} />
    </main>
  );
}

export default CommunityDetailTemplate;
