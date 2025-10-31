"use client";

import RootButton from "../atoms/RootButton";
import { MdEmail } from "react-icons/md";

export function Navbar() {
  return (
    <header>
    <nav aria-label="Main navigation" className="flex justify-between items-center fixed top-0 left-0 w-full h-[60px] px-6 bg-neutral-50/30 backdrop-blur-md shadow-sm z-50">
      <div className="logo-container">
        <span className="text-xl font-semibold">Digital Roots</span>
      </div>
      <div className="container-button">
        <RootButton
          label="Contact"
          width="md"
          variant="primary"
          href="mailto:valeriasadik@hotmail.com?subject=Contacto%20Digital%20Roots&body=Hola%20Valeria,%20quiero%20saber%20más%20sobre%20el%20proyecto."
          icon={<MdEmail className="text-lg" aria-hidden="true" />}
          iconPosition="right"
        />
      </div>
    </nav>
    </header>
  );
}
