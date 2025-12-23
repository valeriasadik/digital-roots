"use client";

import React from "react";
import Button from "../../atoms/Button/Button";
import { FaGithub } from "react-icons/fa";

export function HeroContent() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[80vh] items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6 px-4 py-12 text-center sm:gap-8 sm:py-16">
        <h1
          id="hero-heading"
          className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Reconnect. <span className="text-[var(--color-sage)]">Work.</span>{" "}
          Grow.
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
          DigitalRoots connects remote workers with rural communities across
          Spain, revitalizing these areas through remote work.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <Button
            variant="secondary"
            label="GitHub"
            iconPosition="right"
            width="lg"
            icon={<FaGithub className="text-lg" aria-hidden="true" />}
            href="https://github.com/valeriasadik/digital-roots"
          />
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6 text-neutral-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

export default HeroContent;
