import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async"; // SEO: Integrated for Meta Tags
import FacilityCard from "./FacilityCard";
import { facilities } from "../../utils/facilities";
import { Factory, Home } from "lucide-react";
import { useNavigate } from "react-router";

export default function FacilitiesPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const visibleFacilities = facilities;

  // SEO: Structured Data Schema for Search Engines
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BusinessAudience",
    "name": "Arc Engineering Global Manufacturing",
    "description": "Strategic manufacturing hubs for Generator Enclosures and E-Houses.",
    "hasPart": facilities.map(f => ({
      "@type": "Place",
      "name": f.title,
      "address": f.location
    }))
  };

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      {/* SEO: Metadata Layer */}
      <Helmet>
        <title>Strategic Manufacturing Facilities | Arc Engineering Solutions</title>
        <meta name="description" content="Explore our global production hubs in the UK, UAE, and India. High-capacity fabrication of Generator Containers and E-Houses to UK quality standards." />
        <meta name="keywords" content="Engineering Facilities, Generator Container Manufacturing, E-House Fabrication, UK Engineering Hubs" />
        <link rel="canonical" href="https://arcengltd.com/facilities" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* 🏗️ MATCHED FLOATING HERO SECTION */}
      <div className="pt-22 px-2 md:px-2">
        <header className="relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

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
                Facilities
              </button>
            </nav>

            <h1
              className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Strategic <span className="text-[#BF092F]">Facilities</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-4 max-w-3xl font-medium">
              Global Infrastructure & Production Hubs
            </p>
          </div>
        </header>
      </div>

      {/* 🏭 MAIN CONTENT AREA (Changed div to main for SEO) */}
      <main className="container mx-auto relative z-30">
        <div className="container mx-auto px-4 md:px-6 py-7 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-8 w-1 bg-[#BF092F]" aria-hidden="true" />
            <h2 className="text-sm text-[#44444E] uppercase tracking-[0.4em]">
              Operational Facilities
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {visibleFacilities.map((facility) => (
              <article key={facility.id} className="px-0">
                <FacilityCard facility={facility} />
              </article>
            ))}
          </div>
        </div>

        {/* Technical Footer Section (Changed div to section for SEO) */}
        <section className="container mx-auto px-4 md:px-6">
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-12 pb-12">
            <div className="rounded-2xl flex flex-col gap-3">
              <Factory className="text-[#BF092F]" size={32} aria-hidden="true" />
              <h3 className="text-xl text-[#44444E] font-bold uppercase">
                PRECISION SCALE
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light tracking-wide">
                Integrated manufacturing processes ensuring high-volume output
                with surgical accuracy across all units.
              </p>
            </div>
            <div className="rounded-2xl bg-[#44444E] p-8 text-white md:col-span-2 flex flex-col justify-center border-t-4 border-[#BF092F] shadow-xl">
              <h3 className="text-2xl mb-2 uppercase italic text-[#BF092F] font-bold">
                Unified Quality Standard
              </h3>
              <p className="text-white/70 font-light tracking-widest">
                Every facility operates under the same rigorous ISO
                certifications and engineering protocols, delivering identical
                excellence regardless of location.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Carbon Fibre Texture Overlay */}
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" aria-hidden="true" />
    </div>
  );
}