import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router"; 
import { Helmet } from "react-helmet-async"; 
import HeaderSearch from "./HeaderSearch";
import HeaderFacilitiesDropdown from "./HeaderFacilitiesDropdown";
import HeaderProjectsDropdown from "./HeaderProjectsDropdown";
import HeaderProductsDropDown from "./HeaderProductsDropDown";
import MobileHeaderSearch from "./MobileHeaderSearch";
import ProductsMobileDrawer from "./ProductsMobileDrawer";
import ProjectsMobileDrawer from "./ProjectsMobileDrawer";
import FacilitiesMobileDrawer from "./FacilitiesMobileDrawer";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsDrawerOpen, setIsProductsDrawerOpen] = useState(false);
  const [isProjectsDrawerOpen, setIsProjectsDrawerOpen] = useState(false); 
  const [isFacilitiesDrawerOpen, setIsFacilitiesDrawerOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "hasPart": [
      { "@type": "WebPage", "name": "About", "url": "https://arcengltd.com/about" },
      { "@type": "WebPage", "name": "Products", "url": "https://arcengltd.com/products" },
      { "@type": "WebPage", "name": "Projects", "url": "https://arcengltd.com/projects" },
      { "@type": "WebPage", "name": "Facilities", "url": "https://arcengltd.com/facilities" },
      { "@type": "WebPage", "name": "Careers", "url": "https://arcengltd.com/careers" },
      { "@type": "WebPage", "name": "Contact", "url": "https://arcengltd.com/contact" }
    ]
  };

  // 1. UPDATED NAV ITEMS: Facilities now uses the drawer trigger
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Products", isDrawer: "products" }, 
    { name: "Projects", isDrawer: "projects" },
    { name: "Facilities", isDrawer: "facilities" }, // Changed from path to isDrawer
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  // 2. UPDATED NAV LOGIC: Added facilities check
  const handleMobileNav = (item) => {
    if (item.isDrawer === "products") {
      setIsProductsDrawerOpen(true);
    } else if (item.isDrawer === "projects") {
      setIsProjectsDrawerOpen(true);
    } else if (item.isDrawer === "facilities") {
      setIsFacilitiesDrawerOpen(true);
    } else {
      setMobileMenuOpen(false);
      navigate(item.path);
    }
  };

  // 3. UPDATED SCROLL LOCK: Included isFacilitiesDrawerOpen
  useEffect(() => {
    const isAnyDrawerOpen = 
      mobileMenuOpen || 
      isProductsDrawerOpen || 
      isProjectsDrawerOpen || 
      isFacilitiesDrawerOpen;
      
    document.body.style.overflow = isAnyDrawerOpen ? "hidden" : "unset";
  }, [mobileMenuOpen, isProductsDrawerOpen, isProjectsDrawerOpen, isFacilitiesDrawerOpen]);

  const navLinkStyles =
    "relative cursor-pointer inline-flex items-center tracking-widest text-white transition-all duration-300 px-4 py-2 text-[12px] lg:text-[13px] uppercase whitespace-nowrap group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg";

  const HoverEffect = () => (
    <>
      <span className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] -z-10 border border-white/20 shadow-xl" aria-hidden="true" />
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white group-hover:w-1/4 transition-all duration-300 ease-out rounded-full" aria-hidden="true" />
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-[100] pt-1 px-2" role="banner">
      <Helmet>
        <link rel="canonical" href={`https://arcengltd.com${location.pathname}`} />
        <script type="application/ld+json">
          {JSON.stringify(navSchema)}
        </script>
      </Helmet>

      <div className="relative w-full mx-auto">
        <div
          className="absolute inset-0 -z-10 rounded-2xl shadow-2xl overflow-hidden"
          style={{
            background: "linear-gradient(110deg, #BF092F 64vw, #44444E 64vw)",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-[auto_1fr_auto] h-18 md:h-20 items-center gap-4">
            
            <div className="flex justify-start items-center">
              <Link
                to="/"
                className="flex-shrink-0 group/logo flex items-center"
                aria-label="Arc Engineering Home"
              >
                <img
                  src="https://res.cloudinary.com/dc912sjxj/image/upload/v1772287992/Gemini_Generated_Image_tler0wtler0wtler-removebg-preview_zhmv2k.png"
                  alt="Arc Engineering Solutions Ltd Logo"
                  className="h-10 sm:h-12 md:h-16 w-auto transition-transform duration-500 group-hover/logo:scale-110"
                  width="150"
                  height="64"
                  loading="eager"
                  fetchPriority="high"
                />
              </Link>
            </div>

            <div className="md:hidden flex flex-col items-center justify-center text-center" aria-hidden="true">
              <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase whitespace-nowrap">
                Arc Engineering
              </span>
              <span className="text-white/60 text-[7px] font-bold tracking-[0.3em] uppercase border-t border-white/10 pt-0.5">
                Solutions Ltd.
              </span>
            </div>

            <div className="flex items-center justify-end">
              <nav className="hidden md:flex items-center justify-end gap-x-2" aria-label="Main Navigation">
                <Link to="/about" className={navLinkStyles}>
                  <HoverEffect />
                  <span>About</span>
                </Link>
                
                <HeaderProductsDropDown />
                <HeaderProjectsDropdown />
                <HeaderFacilitiesDropdown />
                
                <Link to="/careers" className={navLinkStyles}>
                  <HoverEffect />
                  <span>Careers</span>
                </Link>
                <Link to="/contact" className={navLinkStyles}>
                  <HoverEffect />
                  <span>Contact</span>
                </Link>
                
                <div className="pl-4 border-l border-white/10" role="search">
                  <HeaderSearch />
                </div>
              </nav>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 z-[110] relative md:hidden transition-transform active:scale-95"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[105] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-[#44444E]" aria-hidden="true" />
        <div className="h-full pt-28 px-8 relative z-10 overflow-y-auto pb-10">
          
          <div className="mb-12 flex justify-center w-full px-2">
            <MobileHeaderSearch onSelect={() => setMobileMenuOpen(false)} />
          </div>

          <nav className="flex flex-col gap-2 max-w-sm mx-auto w-full" aria-label="Mobile Navigation">
            {navItems?.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMobileNav(item)}
                  className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-[#BF092F]/50 transition-all text-left"
                  aria-label={item.isDrawer ? `Open ${item.name} menu` : `Go to ${item.name}`}
                >
                  <span className="text-white/80 group-hover:text-white text-xl uppercase tracking-[0.2em]">
                    {item.name}
                  </span>
                  <ArrowRight size={16} className="text-[#BF092F]" aria-hidden="true" />
                </button>
            ))}
          </nav>

          <ProductsMobileDrawer
            isOpen={isProductsDrawerOpen}
            onClose={() => setIsProductsDrawerOpen(false)}
            onCloseAll={() => {
              setIsProductsDrawerOpen(false);
              setMobileMenuOpen(false);
            }}
          />

          <ProjectsMobileDrawer
            isOpen={isProjectsDrawerOpen}
            onClose={() => setIsProjectsDrawerOpen(false)}
            onCloseAll={() => {
              setIsProjectsDrawerOpen(false);
              setMobileMenuOpen(false);
            }}
          />

          <FacilitiesMobileDrawer
            isOpen={isFacilitiesDrawerOpen}
            onClose={() => setIsFacilitiesDrawerOpen(false)}
            onCloseAll={() => {
              setIsFacilitiesDrawerOpen(false);
              setMobileMenuOpen(false);
            }}
          />

          <footer className="mt-12 flex flex-col items-center gap-4">
            <div className="w-12 h-[1px] bg-[#BF092F]/50" aria-hidden="true" />
            <p className="text-white text-[10px] font-bold tracking-[0.4em] uppercase">
              Arc Engineering Solutions Ltd.
            </p>
          </footer>
        </div>
      </div>
    </header>
  );
};

export default Header;