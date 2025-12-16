"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  width?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string; // internal (/...) or external (http/ https / mailto)
}

export const Button: React.FC<ButtonProps> = ({
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
    "rounded-3xl font-medium py-2 px-4 transition-colors duration-200 inline-flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600 disabled:pointer-events-none";

  const variants: Record<string, string> = {
    primary:
      "bg-green-900 text-white hover:bg-emerald-800 disabled:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-60",
    secondary:
      "bg-amber-200 text-black hover:bg-yellow-500 disabled:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-60",
  };


  const widths: Record<string, string> = {
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
    const isInternal = href.startsWith("/");
    const isHttpExternal = href.startsWith("http://") || href.startsWith("https://");
    const isMailTo = href.startsWith("mailto:");

    const className = `${base} ${variants[variant]} ${widths[width]}`;

    if (isInternal) {
      return (
        <Link
          href={href}
          aria-disabled={disabled}
          className={className + (disabled ? " opacity-60" : "")}
          onClick={(e) => {
            if (disabled) e.preventDefault();
          }}
        >
          {content}
        </Link>
      );
    }

    // External or mailto
    return (
      <a
        href={href}
        className={className}
        onClick={(e) => {
          if (disabled) e.preventDefault();
          if (!disabled && !isMailTo && !isHttpExternal) {
            // non-http schemes (like custom) open in same tab
            return;
          }
        }}
        target={isHttpExternal ? "_blank" : undefined}
        rel={isHttpExternal ? "noopener noreferrer" : undefined}
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
      type="button"
    >
      {content}
    </button>
  );
};

export default Button;