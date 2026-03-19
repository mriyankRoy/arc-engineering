import React, { useState, useEffect } from "react";
import {
  Factory,
  Cpu,
  Home,
  Info,
  Cpu,
  ChevronRight,
  Globe,
  PackageSearch,
} from "lucide-react";
import { useNavigate } from "react-router";
import SkillsShowcase from "./SkillsShowcase";
import CorporateProfile from "./CorporateProfile";
import HybridModel from "./HybridModel";
import ManufacturingScale from "./ManufacturingScale";
import ProductScope from "./ProductScope";

export default function AboutUsPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("Corporate Profile");

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (label, id) => {
    setActiveSection(label);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const sidebarLinks = [
    { label: "Corporate Profile", id: "corp-profile", icon: Info },
    { label: "Hybrid Model", id: "hybrid-model", icon: Globe },
    { label: "Manufacturing Scale", id: "manufacturing-scale", icon: Factory },
    { label: "Product Scope", id: "product-scope", icon: PackageSearch },
    { label: "Engineering Skills", id: "engineering-skills", icon: Cpu },
  ];

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      {/* HERO SECTION */}
      <div className="pt-22 px-2 md:px-2">
        <header className="shadow-xl relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            {/* 🧭 UPDATED: Now hidden on mobile, visible on medium screens and up */}
            <nav className="hidden md:flex items-center flex-wrap gap-3 mb-6">
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer group flex items-center gap-1 text-white/50 hover:text-white transition-colors"
              >
                <Home size={14} />
                <span className="text-[10px] md:text-xs tracking-widest uppercase">
                  Home
                </span>
              </button>
              <span className="text-white/20 text-xs font-mono">{">"}</span>
              <button className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20">
                About Arc Engineering
              </button>
            </nav>

            <h1
              className={`font-semibold text-3xl md:text-5xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Engineering <span className="text-[#BF092F]">Power.</span>{" "}
              <br></br>
              Manufacturing <span className="text-[#BF092F]">Precision.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-4 max-w-3xl">
              Arc Engineering Solutions Ltd - Bridging the gap between heavy-scale
              production and bespoke engineering.
            </p>
          </div>
        </header>
      </div>

      <main className="container mx-auto -translate-y-12 relative z-30 pb-20">
        <div className="pt-20 px-4 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch">
          {/* SIDEBAR */}
          <aside className="lg:col-span-3 space-y-8 h-full">
            <div className="rounded-2xl bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] sticky top-28 overflow-hidden">
              <div className="p-8 border-b border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <Info size={16} className="text-[#BF092F]" />
                  <h2 className="text-[12px] text-white tracking-[0.4em] uppercase">
                    Corporate Registry
                  </h2>
                </div>
                <ul className="space-y-2">
                  {sidebarLinks.map((link, idx) => (
                    <li
                      key={idx}
                      onClick={() => scrollToSection(link.label, link.id)}
                      className={`cursor-pointer px-4 py-4 rounded-xl text-[12px] uppercase tracking-[0.2em] transition-all flex items-center justify-between group ${
                        activeSection === link.label
                          ? "bg-white/10 text-white border-l-4 border-[#BF092F]"
                          : "text-white/40 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <link.icon
                          size={14}
                          className={
                            activeSection === link.label ? "text-[#BF092F]" : ""
                          }
                        />
                        {link.label}
                      </div>
                      <ChevronRight
                        size={14}
                        className={`transition-transform duration-300 ${
                          activeSection === link.label
                            ? "text-[#BF092F] translate-x-1"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <section className="lg:col-span-9 space-y-12">
            {/* 1. CORPORATE PROFILE */}
            <div id="corp-profile" className="scroll-mt-32">
              <CorporateProfile />
            </div>

            {/* 2. HYBRID MODEL */}
            <div id="hybrid-model" className="scroll-mt-32">
              <HybridModel />
            </div>

            {/* 3. MANUFACTURING SCALE */}
            <div id="manufacturing-scale" className="scroll-mt-32">
              <ManufacturingScale />
            </div>

            {/* PRODUCT SCOPE SECTION */}
            <div id="product-scope" className="scroll-mt-32">
              <ProductScope />
            </div>

            <div id="engineering-skills" className="scroll-mt-32">
              <SkillsShowcase />
            </div>
          </section>
        </div>
      </main>

      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}
