import { useState } from "react";

const Navbar = () => {
  //** States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //** Handlers
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-11/12 md:w-7xl bg-[#1e1e1e] rounded-xl z-1000 px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Hamburger menu (visible only on mobile) */}
        <button
          className="text-white md:hidden cursor-pointer hover:text-[#FD6F00]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 12h12"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 18h16"
            />
          </svg>
        </button>

        {/* Logo (centered on mobile, aligned left on desktop) */}
        <div className="flex-1 text-center md:text-left md:flex-none">
          <a
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-xl"
            href="#hero"
          >
            Fady Essam
          </a>
        </div>
        {/* Desktop Navigation (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-20 text-white ml-10 ">
          <a href="#hero" className="hover:text-[#FD6F00]">
            Home
          </a>
          <a href="#about" className="hover:text-[#FD6F00]">
            About
          </a>
          <a href="#skills" className="hover:text-[#FD6F00]">
            Skills
          </a>
          <a href="#projects" className="hover:text-[#FD6F00]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#FD6F00]">
            Contacts
          </a>
        </div>

        {/* Hire Me button (visible on all screens) */}
        <a href="https://wa.me/201221597924?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20work%20opportunity%20with%20you.%20Thank%20you.">
          <button className="bg-gradient-to-r from-[#FD6F00] to-[#E46400] px-4 py-1.5 rounded-md text-sm text-white ml-auto md:ml-0 cursor-pointer">
            Contact via WhatsApp
          </button>
        </a>
      </div>

      {/* Mobile Menu (visible only on mobile when hamburger is clicked) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out  ${
          isMenuOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <div className="space-y-2 text-white">
          <a
            href="#hero"
            className="block py-2 hover:text-[#FD6F00]"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 hover:text-[#FD6F00]"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#skills"
            className="block py-2 hover:text-[#FD6F00]"
            onClick={handleLinkClick}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block py-2 hover:text-[#FD6F00]"
            onClick={handleLinkClick}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-[#FD6F00]"
            onClick={handleLinkClick}
          >
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
