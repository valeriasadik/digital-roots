"use client";
import React from "react";
import Image from "next/image";

export function AboutContent() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-32"
    >
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/background.jpg"
            alt="Rural landscape representing Spain's countryside"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/10 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col gap-8">
          <h2
            id="about-heading"
            className="text-4xl font-black leading-tight tracking-tight text-neutral-900 sm:text-5xl"
          >
            Digital Roots for the{" "}
            <span className="text-[var(--color-sage)]">Rural Future</span>
          </h2>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-neutral-600">
              <span className="font-black text-neutral-900">Digital Roots</span>{" "}
              is a project designed to reconnect remote professionals with rural
              communities across Spain. We believe remote work can be a powerful
              catalyst for local revitalization.
            </p>

            <p className="text-lg leading-relaxed text-neutral-600">
              Our platform helps people discover authentic places to live and
              work closer to nature while contributing to sustainable regional
              growth. We focus on collaboration, cultural exchange, and
              long-term impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;
