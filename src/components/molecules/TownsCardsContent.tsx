import React from "react";
import Image from "next/image";

interface TownCardProps {
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly population?: number;
  readonly internet?: number;
}

export function TownsCardsContent({
  name,
  description,
  imageUrl,
  population,
  internet,
}: TownCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
        <Image
          src={imageUrl}
          alt={`View of ${name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-black text-neutral-900 mb-2">{name}</h3>
        <p className="text-base leading-relaxed text-neutral-600 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 text-sm">
          {population && (
            <div className="flex items-center gap-2 rounded-full bg-[var(--color-cream)] px-4 py-2">
              <span className="text-lg" aria-hidden="true">
                👥
              </span>
              <span className="font-semibold text-neutral-700">
                {population.toLocaleString()}
              </span>
              <span className="text-neutral-600">population</span>
            </div>
          )}
          {internet !== undefined && (
            <div className="flex items-center gap-2 rounded-full bg-[var(--color-sage)]/10 px-4 py-2">
              <span className="text-lg" aria-hidden="true">
                📡
              </span>
              <span className="font-semibold text-[var(--color-sage)]">
                {internet}%
              </span>
              <span className="text-neutral-600">coverage</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default TownsCardsContent;
