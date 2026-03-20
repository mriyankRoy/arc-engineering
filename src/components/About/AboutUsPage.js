import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async"; // SEO Layer - Invisible to user
import {
  Factory,
  Cpu,
  Home,
  Info,
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
    { label: "Engineering Skills", id: "engineering-skills", icon: Cpu },
    { label: "Hybrid Model", id: "hybrid-model", icon: Globe },
    { label: "Manufacturing Scale", id: "manufacturing-scale", icon: Factory },
    { label: "Product Scope", id: "product-scope", icon: PackageSearch },
  ];

  // SEO: Structured Data for UK/Global Organization
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arc Engineering Solutions Ltd",
    "url": "https://arcengltd.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB"
    },
    "description": "UK-based engineering specialists providing power infrastructure for UK, Europe, and global markets."
  };

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      {/* SEO: Invisible metadata for UK/EU search engines */}
      <Helmet>
        <html lang="en-GB" />
        <title>About Us | UK Engineering & Global Infrastructure | Arc Engineering</title>
        <meta name="description" content="Arc Engineering Solutions Ltd: UK-led engineering and manufacturing. Serving UK and European clients with bespoke power solutions." />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      {/* HERO SECTION - Design untouched */}
      <div className="pt-22 px-2 md:px-2">
        <header className="shadow-xl relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" aria-hidden="true" />

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <nav className="hidden md:flex items-center flex-wrap gap-3 mb-6" aria-label="Breadcrumb">
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer group flex items-center gap-1 text-white/50 hover:text-white transition-colors"
              >
                <Home size={14} />
                <span className="text-[10px] md:text-xs tracking-widest uppercase">
                  Home
                </span>
              </button>
              <span className="text-white/20 text-xs font-mono" aria-hidden="true">{">"}</span>
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
              Arc Engineering Solutions Ltd — UK-managed engineering bridging the gap between bespoke design and global production.
            </p>
          </div>
        </header>
      </div>

      <main className="container mx-auto -translate-y-12 relative z-30 pb-20">
        <div className="pt-20 px-4 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* SIDEBAR - Design untouched */}
          <aside className="lg:col-span-3 space-y-8 h-full" role="complementary">
            <div className="rounded-2xl bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] sticky top-28 overflow-hidden">
              <nav className="p-8 border-b border-white/10" aria-label="Internal Navigation">
                <div className="flex items-center gap-3 mb-8">
                  <Info size={16} className="text-[#BF092F]" aria-hidden="true" />
                  <h2 className="text-[12px] text-white tracking-[0.4em] uppercase font-bold">
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
                          aria-hidden="true"
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
                        aria-hidden="true"
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT AREA - Semantic tags added only */}
          <section className="lg:col-span-9 space-y-12">
            
            <article id="corp-profile" className="scroll-mt-32">
              <CorporateProfile />
            </article>

            <article id="engineering-skills" className="scroll-mt-32">
              <SkillsShowcase />
            </article>

            <article id="hybrid-model" className="scroll-mt-32">
              <HybridModel />
            </article>

            <article id="manufacturing-scale" className="scroll-mt-32">
              <ManufacturingScale />
            </article>

            <article id="product-scope" className="scroll-mt-32">
              <ProductScope />
            </article>

          </section>
        </div>
      </main>

      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" aria-hidden="true" />
    </div>
  );
}