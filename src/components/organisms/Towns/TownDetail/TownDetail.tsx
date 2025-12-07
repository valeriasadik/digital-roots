import { Town } from "@/types/card";
import { Tabs, TabData } from "@/components/molecules/Tabs/Tabs";

interface TownDetailContentProps {
  readonly town: Town;
}

export function TownDetail({ town }: TownDetailContentProps) {
  const generalInfoContent = (
    <div className="space-y-8">
      <section>
        <h3 className="text-2xl font-black text-neutral-900 mb-6">
          Key Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {town.population && (
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl" aria-hidden="true">
                  👥
                </span>
                <h4 className="text-xl font-bold text-neutral-900">
                  Population
                </h4>
              </div>
              <p className="text-3xl font-black text-[var(--color-sage)] ml-12">
                {town.population.toLocaleString()}
              </p>
            </div>
          )}

          {town.internet !== undefined && (
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl" aria-hidden="true">
                  📡
                </span>
                <h4 className="text-xl font-bold text-neutral-900">
                  Internet Coverage
                </h4>
              </div>
              <p className="text-3xl font-black text-[var(--color-sage)] ml-12">
                {town.internet}%
              </p>
            </div>
          )}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-black text-neutral-900 mb-6">
          About {town.name}
        </h3>
        <div className="bg-white rounded-xl p-8 border border-neutral-200">
          <p className="text-lg leading-relaxed text-neutral-700">
            {town.description}
          </p>
        </div>
      </section>
    </div>
  );

  const forumContent = (
    <div className="bg-white rounded-xl p-8 border border-neutral-200">
      <h3 className="text-2xl font-black text-neutral-900 mb-4">
        Community Forum
      </h3>
      <p className="text-neutral-600">
        Forum content coming soon. Here you can discuss with other members about{" "}
        {town.name}.
      </p>
    </div>
  );

  const galleryContent = (
    <div className="bg-white rounded-xl p-8 border border-neutral-200">
      <h3 className="text-2xl font-black text-neutral-900 mb-6">Gallery</h3>
      <p className="text-neutral-600">
        Photo gallery of {town.name} coming soon.
      </p>
    </div>
  );

  const tabs: TabData[] = [
    {
      label: "General Information",
      content: generalInfoContent,
    },
    {
      label: "Forum",
      content: forumContent,
    },
    {
      label: "Gallery",
      content: galleryContent,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

export default TownDetail;
