"use client";

import React from 'react';
import Image from 'next/image';
import RootButton from '../atoms/RootButton';
import { FaGithub } from 'react-icons/fa';

export function HeroContent() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex h-screen items-center justify-center bg-neutral-900"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/background2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-neutral-900/80" />
      </div>
      <div className="flex flex-col items-center gap-6 px-4">
        <span className="text-center text-3xl leading-tight font-black tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
          RECONNECT. WORK. GROW
        </span>
        <p className="mx-auto max-w-prose text-center text-base tracking-tight text-white md:tracking-wide">
          DigitalRoots connects remote workers with rural communities across Spain, revitalizing
          these areas through remote work.
        </p>

        <div className="container-hero-buttons flex gap-2">
          <RootButton
            variant="secondary"
            label="GitHub"
            iconPosition='right'
            width='lg'
            icon={<FaGithub className="text-lg" aria-hidden="true" />}
            href="https://github.com/valeriasadik/digital-roots"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroContent;