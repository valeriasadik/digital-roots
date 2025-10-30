import React from "react";

interface ImageProps {
  url: string;
  bgColor?: boolean;
}

export const RootImage: React.FC<ImageProps> = ({
  url,
  bgColor = false,
}) => {
  const base = "absolute inset-0 bg-cover bg-center bg-black/40 bg-blend-multiply";

  const background = bgColor ? "bg-neutral-100" : "";

  return (
    <div
      className={`${base} ${background}`}
      style={{
        backgroundImage: `url(${url})`,
      }}
    ></div>
  );
};
