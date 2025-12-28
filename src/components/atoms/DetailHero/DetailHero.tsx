import Image from "next/image";

interface DetailHeroProps {
  readonly name: string;
  readonly imageUrl: string;
  readonly description: string;
}

export function DetailHero({ name, imageUrl, description }: DetailHeroProps) {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <Image
        src={imageUrl}
        alt={`View of ${name}`}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            {name}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default DetailHero;
