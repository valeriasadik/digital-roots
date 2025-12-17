import { Accordion } from "@/components/molecules/Accordion/Accordion";

export function Faqs() {
  const accordionData = [
    {
      label: "What is Digital Roots?",
      content: (
        <p>
          Digital Roots is an initiative to connect rural communities with
          technology and promote sustainable development.
        </p>
      ),
    },
    {
      label: "How does it work?",
      content: (
        <p>
          We work with towns and communities to implement technological
          solutions that improve quality of life and preserve local culture.
        </p>
      ),
    },
    {
      label: "Who can participate?",
      content: (
        <p>
          Any rural community interested in digital transformation can join. We
          also seek collaborators and volunteers.
        </p>
      ),
    },
    {
      label: "Is this project open source?",
      content: (
        <p>
          Yes! Digital Roots is an open source project. We believe in
          transparency and community collaboration. You can find our code on
          GitHub and contribute to the development.
        </p>
      ),
    },
  ];
  return <Accordion accordeon={accordionData} />;
}
