"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 glass-soft glass-border border-b">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4"
      >
        <Link
          href="/"
          className="group relative select-none font-black text-xl tracking-tight text-primary transition-colors hover:text-secondary"
        >
          <span className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <span>DigitalRoots</span>
          </span>
          <span
            className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"
            aria-hidden="true"
          />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
