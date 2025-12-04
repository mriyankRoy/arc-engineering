import { useState } from "react";
import { Menu, X } from "lucide-react";
import HeaderDropDown from "./HeaderDropDown";
import { Link } from "react-router";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-15 left-0 w-full z-50 backdrop-blur-md">
      {/* Top double border */}
      <div className="flex flex-col gap-2">
        <div className="h-[1px] bg-gray-300" />
        <div className="h-[1px] bg-gray-300" />
      </div>

      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://res.cloudinary.com/dc912sjxj/image/upload/v1764248576/Art_Genpower_Solutions_Ltd_Logo_wswrtz.png"
              alt="AGP Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-15 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="
            hidden md:flex items-center space-x-4 lg:space-x-6 
            text-sm font-medium text-gray-700 relative
          ">
            <HeaderDropDown />

            <Link
              to="/"
              className="px-3 lg:px-4 border-l border-r border-gray-300 hover:text-gray-900 hover:underline underline-offset-4 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="px-3 lg:px-4 border-l border-r border-gray-300 hover:text-gray-900 hover:underline underline-offset-4 transition"
            >
              Company
            </Link>

            <Link
              to="/projects"
              className="px-3 lg:px-4 border-l border-r border-gray-300 hover:text-gray-900 hover:underline underline-offset-4 transition"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="px-3 lg:px-4 border-l border-r border-gray-300 hover:text-gray-900 hover:underline underline-offset-4 transition"
            >
              Contact
            </Link>

            <HeaderSearch />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 border-t border-gray-200 bg-white/70 backdrop-blur-md">
          <nav className="flex flex-col gap-3 text-base font-medium text-gray-700">

            <button className="text-left">Products</button>
            <Link to="/" className="text-left">Home</Link>
            <Link to="/about" className="text-left">Company</Link>
            <Link to="/projects" className="text-left">Projects</Link>
            <Link to="/contact" className="text-left">Contact</Link>

            <button className="mt-2 inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">
              Get started
            </button>
          </nav>
        </div>
      )}

      {/* Bottom double border */}
      <div className="flex flex-col gap-2">
        <div className="h-[1px] bg-gray-300" />
        <div className="h-[1px] bg-gray-300" />
      </div>
    </header>
  );
};

export default Header;
