"use client";

import RootButton from "./ui/RootButton";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 w-full h-13 px-6 bg-neutral-50 backdrop-blur-md shadow-sm">
      <div className="logo-container">
        <h1 className="text-xl font-semibold">Digital Roots</h1>
      </div>

      <div className="container-list">
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-700 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700 transition">
              Communities
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="container-button">
        <RootButton label="Join" width="sm"   onClick={()=> console.log('Holaa')}></RootButton>
        
      </div>
    </nav>
  );
}
