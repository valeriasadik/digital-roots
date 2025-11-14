import { CommunitiesTemplate } from "@/components/templates/CommunitiesTemplate";
import { buildTitle, siteMeta } from "@/lib/metadata";

export const metadata = {
  title: buildTitle("Communities"),
  description: siteMeta.descriptionBase,
};

async function getCommunities() {
  return [
    {
      id: "1",
      name: "El Calabacino",
      description: "Ecovillage focused on permaculture and sustainable living",
      imageUrl: "/images/communities/calabacino.jpeg",
      members: 25,
      type: "Ecovillage",
    },
    {
      id: "2",
      name: "Molino Lab",
      description: "Rural innovation hub combining technology and nature",
      imageUrl: "/images/communities/molinolab.jpg",
      members: 15,
      type: "Innovation Hub",
    },
    {
      id: "3",
      name: "Valdepiélagos",
      description: "Regenerative ecovillage in the Madrid mountains",
      imageUrl: "/images/communities/valdepielagos.jpeg",
      members: 30,
      type: "Ecovillage",
    },
  ];
}

export default async function CommunitiesPage() {
  const communities = await getCommunities();
  return <CommunitiesTemplate communities={communities} />;
}
