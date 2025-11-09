"use client";

import Link from "next/link";
import RootButton from "../atoms/RootButton";
import { MdEmail } from "react-icons/md";

export function Navbar() {
  return (
    <header>
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 md:py-4"
      >
        <Link
          href="/"
          className="group relative select-none font-black text-lg tracking-tight bg-gradient-to-r from-green-600 via-emerald-500 to-amber-300 bg-clip-text text-transparent drop-shadow-sm"
        >
          DigitalRoots
          <span
            className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-green-500 to-amber-300 transition-all duration-300 group-hover:w-full"
            aria-hidden="true"
          />
        </Link>
        <div className="container-button">
          <RootButton
            label="Contact"
            width="md"
            variant="primary"
            icon={<MdEmail className="text-lg" aria-hidden="true" />}
            iconPosition="right"
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;