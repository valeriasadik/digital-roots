import { Town, Community } from "@/types/card";

export async function getTowns(): Promise<Town[]> {
  return [
    {
      id: "1",
      name: "Ainsa",
      description: "Medieval town in the Pyrenees",
      imageUrl: "/images/towns/ainsa.jpg",
      population: 2200,
      internet: 95,
    },
    {
      id: "2",
      name: "Albarracín",
      description: "Pink-hued medieval village",
      imageUrl: "/images/towns/albarracin.jpg",
      population: 1100,
      internet: 90,
    },
    {
      id: "3",
      name: "Pampaneira",
      description: "White village in the Alpujarras",
      imageUrl: "/images/towns/pampaneira.jpg",
      population: 3500,
      internet: 85,
    },
  ];
}

export async function getTownById(id: string): Promise<Town | undefined> {
  const towns = await getTowns();
  return towns.find((town) => town.id === id);
}

export async function getCommunities(): Promise<Community[]> {
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

export async function getCommunityById(
  id: string
): Promise<Community | undefined> {
  const communities = await getCommunities();
  return communities.find((community) => community.id === id);
}
