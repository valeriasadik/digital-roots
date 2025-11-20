import { Town } from "@/types/card";

interface TownDetailContentProps {
  readonly town: Town;
}

export function TownDetailContent({ town }: TownDetailContentProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-black text-neutral-900 mb-6">
            Key Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {town.population && (
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl" aria-hidden="true">
                    👥
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900">
                    Population
                  </h3>
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
                  <h3 className="text-xl font-bold text-neutral-900">
                    Internet Coverage
                  </h3>
                </div>
                <p className="text-3xl font-black text-[var(--color-sage)] ml-12">
                  {town.internet}%
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black text-neutral-900 mb-6">
            About {town.name}
          </h2>
          <div className="bg-white rounded-xl p-8 border border-neutral-200">
            <p className="text-lg leading-relaxed text-neutral-700">
              {town.description}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TownDetailContent;
