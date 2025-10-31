import React from "react";
import Image from "next/image";
import RootButton from "../atoms/RootButton";

export function HeroContent() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex items-center justify-center h-screen overflow-hidden bg-neutral-900"
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
      <div className="flex flex-col items-center gap-6">
 <span>RECONNECT. WORK. GROW</span>
    <p>DigitalRoots connects remote workers with rural communities across Spain, revitalizing these areas through remote work</p>
      
   
    <div className="container-hero-buttons flex gap-2">
     <RootButton variant="primary" label="Stay update!"></RootButton>
    <RootButton variant="secondary" label="GitHub"></RootButton>
    </div>
   </div>
    </section>
  );
}