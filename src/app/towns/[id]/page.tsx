import { TownDetailTemplate } from "@/components/templates/TownDetailTemplate";
import { getTownById, getTowns } from "@/lib/data";
import { buildTitle, siteMeta } from "@/lib/metadata";
import { notFound } from "next/navigation";

interface TownPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: TownPageProps) {
  const { id } = await params;
  const town = await getTownById(id);

  if (!town) {
    return {
      title: buildTitle("Town Not Found"),
    };
  }

  return {
    title: buildTitle(town.name),
    description: town.description,
  };
}

export async function generateStaticParams() {
  const towns = await getTowns();
  return towns.map((town) => ({
    id: town.id,
  }));
}

export default async function TownPage({ params }: TownPageProps) {
  const { id } = await params;
  const town = await getTownById(id);

  if (!town) {
    notFound();
  }

  return <TownDetailTemplate town={town} />;
}
