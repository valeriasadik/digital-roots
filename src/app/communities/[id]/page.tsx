import { CommunityDetailTemplate } from "@/components/templates/CommunityDetailTemplate";
import { getCommunityById, getCommunities } from "@/lib/data";
import { buildTitle, siteMeta } from "@/lib/metadata";
import { notFound } from "next/navigation";

interface CommunityPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CommunityPageProps) {
  const { id } = await params;
  const community = await getCommunityById(id);

  if (!community) {
    return {
      title: buildTitle("Community Not Found"),
    };
  }

  return {
    title: buildTitle(community.name),
    description: community.description,
  };
}

export async function generateStaticParams() {
  const communities = await getCommunities();
  return communities.map((community) => ({
    id: community.id,
  }));
}

export default async function CommunityPage({ params }: CommunityPageProps) {
  const { id } = await params;
  const community = await getCommunityById(id);

  if (!community) {
    notFound();
  }

  return <CommunityDetailTemplate community={community} />;
}
