import { TownsTemplate } from "@/components/templates/TownsTemplate";
import { buildTitle, siteMeta } from "@/lib/metadata";

export const metadata = {
    title: buildTitle('Towns'),
    description: siteMeta.descriptionBase,
};

export default function TownsPage() { return <TownsTemplate />; }