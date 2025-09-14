import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-slate-900">
      <div className="max-w-5xl mx-auto flex justify-between items-center h-16 px-4">
        {/* Left side: Logo */}
        <Link to="/" className="font-mono text-xl font-bold text-white">
          sharada_417<span className="text-blue-700">@dev</span>
        </Link>

        {/* Center-left: Menu links with extra left padding */}
        <div className="hidden md:flex items-center space-x-8 pl-10">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

       </div>
    </nav>
  );
};
