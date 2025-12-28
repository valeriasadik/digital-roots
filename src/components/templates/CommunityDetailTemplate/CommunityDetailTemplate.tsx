import { DetailHero } from "../../atoms/DetailHero/DetailHero";
import { CommunityDetail } from "../../organisms/Communities/CommunityDetail/CommunityDetailContent";
import { Community } from "@/types/card";

interface CommunityDetailTemplateProps {
  readonly community: Community;
}

export function CommunityDetailTemplate({
  community,
}: CommunityDetailTemplateProps) {
  return (
    <main className="min-h-screen">
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
