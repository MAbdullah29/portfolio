import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // ✅ Using React Icons
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "About Us", path: "/about-us" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="border-b border-gray-800 bg-black text-white">
      <div className="flex justify-between items-center px-8 py-6 relative">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl text-yellow-500 font-bold tracking-tight"
        >
          MA.
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-10 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:underline hover:text-yellow-500 ${
                location.pathname === link.path
                  ? "underline font-semibold text-yellow-500"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-yellow-500"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-black border-t border-gray-800 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-8 py-4 space-y-4 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`hover:underline hover:text-yellow-500 ${
                location.pathname === link.path
                  ? "underline font-semibold text-yellow-500"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
