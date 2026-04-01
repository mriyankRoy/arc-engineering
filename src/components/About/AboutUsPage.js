import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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

  const sidebarLinks = [
    { label: "Corporate Profile", id: "corp-profile", icon: Info },
    { label: "Engineering Skills", id: "engineering-skills", icon: Cpu },
    { label: "Hybrid Model", id: "hybrid-model", icon: Globe },
    { label: "Manufacturing Scale", id: "manufacturing-scale", icon: Factory },
    { label: "Product Scope", id: "product-scope", icon: PackageSearch },
  ];

  // SCROLL SPY: Highlights sidebar as sections pass the middle of the screen
  useEffect(() => {
    const observerOptions = {
      root: null,
      // Target a narrow 10% strip in the dead center of the window
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = sidebarLinks.find((l) => l.id === entry.target.id);
          if (link) {
            setActiveSection(link.label);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    const articles = document.querySelectorAll("section > article[id]");
    articles.forEach((article) => observer.observe(article));

    return () => observer.disconnect();
  }, [sidebarLinks]);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // MANUAL SCROLL: Calculates the center of the element relative to the window center
  const scrollToSection = (label, id) => {
    setActiveSection(label);
    const element = document.getElementById(id);
    if (!element) return;

    const targetPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const viewportCenter = window.innerHeight / 2;
    const elementHalfHeight = element.getBoundingClientRect().height / 2;

    // The precise "Center" destination
    const startPosition = window.pageYOffset;
    const distance =
      targetPosition - viewportCenter + elementHalfHeight - startPosition;
    const duration = 1000; // 1 second for a premium feel
    let start = null;

    // Standard "Cubic Out" easing for that "luxury car" braking feel
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const progress = currentTime - start;
      const percentage = Math.min(progress / duration, 1);

      window.scrollTo(0, startPosition + distance * easeOutCubic(percentage));

      if (progress < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arc Engineering Solutions Ltd",
    url: "https://arcengltd.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    description:
      "UK-based engineering specialists providing power infrastructure for UK, Europe, and global markets.",
  };

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      <Helmet>
        <html lang="en-GB" />
        <title>
          About Us | UK Engineering & Global Infrastructure | Arc Engineering
        </title>
        <meta
          name="description"
          content="Arc Engineering Solutions Ltd: UK-led engineering and manufacturing. Serving UK and European clients with bespoke power solutions."
        />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      {/* HERO SECTION */}
      <div className="pt-22 px-2 md:px-2">
        <header className="shadow-xl relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 md:px-6 relative z-20">
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
              className={`font-semibold text-3xl md:text-5xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Engineering <span className="text-[#BF092F]">Power.</span> <br />
              Manufacturing <span className="text-[#BF092F]">Precision.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-4 max-w-3xl font-medium">
              Arc Engineering Solutions Ltd — UK-managed engineering bridging
              the gap between bespoke design and global production.
            </p>
          </div>
        </header>
      </div>

      <main className="container mx-auto -translate-y-12 relative z-30 pb-20">
        <div className="pt-20 px-4 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch">
          <aside className="lg:col-span-3 space-y-8 h-full">
            <div className="rounded-2xl bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] sticky top-[20vh] overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <Info size={16} className="text-[#BF092F]" />
                  <h2 className="text-[12px] text-white tracking-[0.4em] uppercase font-bold">
                    Corporate Registry
                  </h2>
                </div>

                <div className="lg:hidden relative">
                  <select
                    value={activeSection}
                    onChange={(e) => {
                      const selected = sidebarLinks.find(
                        (l) => l.label === e.target.value,
                      );
                      scrollToSection(selected.label, selected.id);
                    }}
                    className="w-full bg-white/5 border border-white/10 text-white text-[12px] uppercase tracking-[0.2em] px-4 py-4 rounded-xl cursor-pointer focus:outline-none focus:border-[#BF092F]"
                  >
                    {sidebarLinks.map((link) => (
                      <option
                        key={link.id}
                        value={link.label}
                        className="bg-[#44444E]"
                      >
                        {link.label}
                      </option>
                    ))}
                  </select>
                </div>

                <ul className="hidden lg:block space-y-2">
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
                        className={`transition-transform duration-300 ${activeSection === link.label ? "text-[#BF092F] translate-x-1" : "opacity-0 group-hover:opacity-100"}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA - Centering applied via scrollToSection calculation */}
          <section className="lg:col-span-9 space-y-12">
            <article id="corp-profile">
              <CorporateProfile />
            </article>
            <article id="engineering-skills">
              <SkillsShowcase />
            </article>
            <article id="hybrid-model">
              <HybridModel />
            </article>
            <article id="manufacturing-scale">
              <ManufacturingScale />
            </article>
            <article id="product-scope">
              <ProductScope />
            </article>
          </section>
        </div>
      </main>

      <div
        className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
        aria-hidden="true"
      />
    </div>
  );
}
