import React from "react";
import { RootImage } from "./atoms/RootImage";

export const Hero = () => {
  return (
    <section className=" relative h-[100vh] flex items-center justify-center">
      <RootImage url="/images/home-background.png" />
      <h1 className="absolute text-white text-5xl font-bold">Digital Roots 🌿</h1>
    </section>
  );
};
