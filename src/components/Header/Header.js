import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import HeaderSearch from "./HeaderSearch";
import HeaderFacilitiesDropdown from "./HeaderFacilitiesDropdown";
import HeaderProjectsDropdown from "./HeaderProjectsDropdown";
import HeaderProductsDropDown from "./HeaderProductsDropDown";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyles =
    "relative cursor-pointer inline-flex items-center tracking-widest text-white transition-all duration-300 px-4 py-2 text-[12px] lg:text-[13px] uppercase whitespace-nowrap group";

  const HoverEffect = () => (
    <>
      <span className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] -z-10 border border-white/20 shadow-xl" />
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white group-hover:w-1/4 transition-all duration-300 ease-out rounded-full" />
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-[100] pt-1 px-2 transition-all duration-500">
      <div
        className="relative w-full mx-auto" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute inset-0 -z-10 transition-all duration-700 rounded-2xl shadow-2xl overflow-hidden
            ${isScrolled && !isHovered ? "opacity-90 backdrop-blur-xl" : "opacity-100"}`}
          style={{
            background: "linear-gradient(110deg, #BF092F 64vw, #44444E 64vw)",
          }}
        />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-[auto_1fr_auto] h-18 md:h-20 items-center gap-8">
            <div className="flex justify-start items-center">
              <Link to="/" className="flex-shrink-0 group/logo">
                <img
                  src="https://res.cloudinary.com/dc912sjxj/image/upload/v1766520846/AGP_Logo_j44tzo.png"
                  alt="AGP Logo"
                  className="h-12 sm:h-14 md:h-16 w-auto transition-transform duration-500 group-hover/logo:scale-110"
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center justify-center gap-x-1 lg:gap-x-2">
              <Link to="/about" className={navLinkStyles}>
                <HoverEffect />
                <span className="group-hover:-translate-y-0.5 transition-transform duration-300">About</span>
              </Link>

              {/* Ensure these sub-components use the same group-hover logic inside their triggers */}
              <HeaderProductsDropDown />
              <HeaderProjectsDropdown />
              <HeaderFacilitiesDropdown />

              <Link to="/careers" className={navLinkStyles}>
                <HoverEffect />
                <span className="group-hover:-translate-y-0.5 transition-transform duration-300">Career</span>
              </Link>

              <Link to="/contact" className={navLinkStyles}>
                <HoverEffect />
                <span className="group-hover:-translate-y-0.5 transition-transform duration-300">Contact</span>
              </Link>
            </nav>

            <div className="hidden md:flex items-center justify-end pl-6 border-l border-white/10">
              <HeaderSearch />
            </div>

            <div className="md:hidden flex items-center justify-end">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 hover:bg-white/10 transition-colors rounded-lg"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;