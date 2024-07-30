"use client";

import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white fixed top-0 w-full z-20">
      <div className="container mx-auto px-4 py-2 flex justify-center">
        <nav className="space-x-8 text-lg flex">
          <ScrollLink to="about" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
            About me
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
            Skills
          </ScrollLink>
          <ScrollLink to="works" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
            Works
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
            Contact
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
}
