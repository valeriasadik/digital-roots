import { TownsTemplate } from "@/components/templates/TownsTemplate/TownsTemplate";
import { getTowns } from "@/lib/data";
import { buildTitle, siteMeta } from "@/lib/metadata";

export const metadata = {
  title: buildTitle("Towns"),
  description: siteMeta.descriptionBase,
};

export default async function TownsPage() {
  const towns = await getTowns();
  return <TownsTemplate towns={towns} />;
}
