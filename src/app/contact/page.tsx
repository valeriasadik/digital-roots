import { buildTitle, siteMeta } from "@/lib/metadata";
import { ContactTemplate } from "@/components/templates/ContactTemplate/ContactTemplate";

export const metadata = {
  title: buildTitle("Contact"),
  description: siteMeta.descriptionBase,
};

export default async function ContactPage() {
  return <ContactTemplate />;
}
