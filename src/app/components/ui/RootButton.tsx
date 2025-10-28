"use client";

import React from "react";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
   width?: "sm" | "md" | "lg";
}

export const RootButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  width = "md",
}) => {
  const base =
    "rounded-xl font-medium py-2 px-4 transition-colors duration-200";

  const variants = {
    primary:
      "bg-lime-400 text-white hover:bg-emerald-500 disabled:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-60",
    secondary:
      "bg-amber-200 text-black hover:bg-yellow-500 disabled:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-60",
  };



  const widths = {
    sm: "w-24",
    md: "w-36",
    lg: "w-48", 
  };
 

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${widths[width]}`}
    >
      {label}
    </button>
  );
};

export default RootButton;
