"use client";

import React from "react";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  width?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
}

export const RootButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  width = "md",
  icon,
  iconPosition = "left",
  href,
}) => {
  const base =
    "rounded-3xl font-medium py-2 px-4 transition-colors duration-200 inline-flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-green-700 text-white hover:bg-emerald-800 disabled:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-60",
    secondary:
      "bg-amber-200 text-black hover:bg-yellow-500 disabled:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-60",
  };



  const widths = {
    sm: "w-24",
    md: "w-36",
    lg: "w-48", 
  };
 

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="flex items-center" aria-hidden="true">
          {icon}
        </span>
      )}
      {label && <span>{label}</span>}
      {icon && iconPosition === "right" && (
        <span className="flex items-center" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${widths[width]}`}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          }
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${widths[width]}`}
    >
      {content}
    </button>
  );
};

export default RootButton;
