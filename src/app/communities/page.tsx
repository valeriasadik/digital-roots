import { CommunitiesTemplate } from "@/components/templates/CommunitiesTemplate";
import { getCommunities } from "@/lib/data";
import { buildTitle, siteMeta } from "@/lib/metadata";

export const metadata = {
  title: buildTitle("Communities"),
  description: siteMeta.descriptionBase,
};

export default async function CommunitiesPage() {
  const communities = await getCommunities();
  return <CommunitiesTemplate communities={communities} />;
}
