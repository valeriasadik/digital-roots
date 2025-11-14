import { TownsTemplate } from "@/components/templates/TownsTemplate";
import { buildTitle, siteMeta } from "@/lib/metadata";

export const metadata = {
  title: buildTitle("Towns"),
  description: siteMeta.descriptionBase,
};

async function getTowns() {
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

export default async function TownsPage() {
  const towns = await getTowns();
  return <TownsTemplate towns={towns} />;
}
