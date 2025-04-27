import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="mb-10 w-11/12 md:w-6xl mx-auto mt-12 ">
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
          <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-xl">
            Fady Essam
          </a>
        </div>
        {/* Desktop Navigation (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-20 text-white ml-10 ">
          <a href="" className="hover:text-[#FD6F00]">
            Home
          </a>
          <a href="#about" className="hover:text-[#FD6F00]">
            About
          </a>
          <a href="" className="hover:text-[#FD6F00]">
            Skills
          </a>
          <a href="" className="hover:text-[#FD6F00]">
            Projects
          </a>
          <a href="" className="hover:text-[#FD6F00]">
            Contacts
          </a>
        </div>

        {/* Hire Me button (visible on all screens) */}
        <button className="bg-gradient-to-r from-[#FD6F00] to-[#E46400] px-4 py-1.5 rounded-md text-sm text-white ml-auto md:ml-0 cursor-pointer">
          Hire me
        </button>
      </div>

      {/* Mobile Menu (visible only on mobile when hamburger is clicked) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out  ${
          isMenuOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <div className="space-y-2 text-white">
          <a href="" className="block py-2 hover:text-[#FD6F00]">
            Home
          </a>
          <a href="#about" className="block py-2 hover:text-[#FD6F00]">
            About
          </a>
          <a href="" className="block py-2 hover:text-[#FD6F00]">
            Skills
          </a>
          <a href="" className="block py-2 hover:text-[#FD6F00]">
            Projects
          </a>
          <a href="" className="block py-2 hover:text-[#FD6F00]">
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
