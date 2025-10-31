import React from "react";
import Image from "next/image";

export function HeroContent(){
    return (
<section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex items-center min-h-[calc(100vh-60px)] pt-[60px] overflow-hidden bg-neutral-900"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/home2-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-neutral-900/80" />
      </div>
    </section>
    )
}