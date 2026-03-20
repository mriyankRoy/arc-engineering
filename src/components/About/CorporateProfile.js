import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ShieldCheck, Globe, Factory, Building2, HardHat } from "lucide-react";

const CorporateProfile = () => {
  const sectionRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasRevealed(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reveal = (isVisible, delay = "0ms") => ({
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    opacity: isVisible ? 1 : 0,
    transition: `all 1000ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
  });

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-gray-50"
      aria-labelledby="corporate-heading"
    >
      {/* SEO & ACCESSIBILITY: GHOST DECOR */}
      <div 
        className="absolute top-10 right-[-5%] md:right-[-2%] text-[8rem] sm:text-[12rem] md:text-[15rem] font-black text-gray-50 select-none pointer-events-none tracking-tighter uppercase leading-none z-0"
        aria-hidden="true"
      >
        ARC
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div style={reveal(hasRevealed)}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#BF092F]" aria-hidden="true" />
              <p className="text-[10px] tracking-[0.4em] text-[#BF092F] font-bold uppercase">
                Corporate Identity
              </p>
            </div>
            <h2 id="corporate-heading" className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#44444E] leading-[1.1] tracking-tight">
              Engineering <span className="text-gray-300 font-light">without</span> <br className="hidden sm:block" /> 
              Boundaries.
            </h2>
          </div>
          
          <div className="max-w-sm" style={reveal(hasRevealed, "200ms")}>
            <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest leading-relaxed border-l border-gray-100 pl-6 py-1">
              Strategic manufacturing operations providing UK-standard engineering with global scale for European and worldwide power requirements.
            </p>
          </div>
        </header>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: SEO-Optimized Text Content */}
          <article className="lg:col-span-5 space-y-8 order-2 lg:order-1" style={reveal(hasRevealed, "400ms")}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#BF092F]" size={28} aria-hidden="true" />
                <h3 className="text-xl md:text-2xl font-bold text-[#44444E]">UK Standards, Global Delivery</h3>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p className="leading-loose text-base md:text-lg">
                  Arc Engineering Solutions Ltd specializes in the manufacture of high-specification metal structures. We bridge the gap between **British engineering quality** and large-scale manufacturing to serve the UK and European infrastructure sectors.
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  Our expertise covers specialized industrial tanks, reservoirs, and precision metal containers, ensuring all units meet the stringent compliance required for UK and EU power projects.
                </p>
              </div>
            </div>

            {/* SECTOR CHIPS */}
            <div className="flex flex-wrap gap-3" role="list">
              {[
                { label: "Data Centers", icon: <Globe size={14} /> },
                { label: "UK Power Grid", icon: <Building2 size={14} /> },
                { label: "EU Installation", icon: <HardHat size={14} /> }
              ].map((sector, i) => (
                <div key={i} role="listitem" className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#BF092F]/20 transition-all">
                  <span className="text-[#BF092F]">{sector.icon}</span>
                  <span className="text-[10px] font-black text-[#44444E] uppercase tracking-widest">{sector.label}</span>
                </div>
              ))}
            </div>
          </article>

          {/* RIGHT: IMAGERY */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 order-1 lg:order-2" style={reveal(hasRevealed, "600ms")}>
            
            <figure className="md:col-span-8 overflow-hidden rounded-3xl shadow-xl relative group h-[280px] sm:h-[350px] md:h-[450px]">
              <img
                src="https://res.cloudinary.com/dc912sjxj/image/upload/v1767730757/Hamriyah_Facility_03_z6hmoe.webp"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Strategic manufacturing hub for UK and European export"
                loading="lazy"
              />
              <figcaption className="absolute bottom-4 left-4 right-4 p-4 md:p-6 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-between border border-white/20">
                <div>
                  <p className="text-[9px] font-bold text-[#BF092F] uppercase tracking-[0.2em]">Global Scale</p>
                  <p className="text-xs md:text-sm font-bold text-[#44444E]">Primary Manufacturing Facility</p>
                </div>
                <Globe size={18} className="text-gray-400" aria-hidden="true" />
              </figcaption>
            </figure>

            <div className="hidden md:flex md:col-span-4 flex-col gap-4">
               <figure className="h-[210px] rounded-3xl overflow-hidden shadow-lg border-2 border-white">
                  <img
                    src="https://res.cloudinary.com/dc912sjxj/image/upload/v1767792069/AGP_Project_Sajja_PowerPack_04_cb755l.webp"
                    className="w-full h-full object-cover"
                    alt="Precision engineering project for the power sector"
                    loading="lazy"
                  />
               </figure>
               <div className="bg-[#44444E] flex-grow rounded-3xl p-6 flex flex-col justify-between text-white shadow-xl relative overflow-hidden group">
                  <div className="h-8 w-8 bg-[#BF092F] rounded-lg flex items-center justify-center relative z-10">
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-sm font-bold uppercase tracking-tight">Technical Delivery</p>
                    <p className="text-[9px] uppercase tracking-widest opacity-50 mt-1">International Logistics</p>
                  </div>
                  <Factory className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-white/10 transition-colors" size={100} aria-hidden="true" />
               </div>
            </div>
          </div>
        </div>

        {/* FOOTER CTA */}
        <footer className="mt-16 md:mt-24 p-6 md:p-10 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-8" style={reveal(hasRevealed, "800ms")}>
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
               <Factory className="text-[#BF092F]" size={28} aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-[#44444E]">Engineering Specifications</h4>
              <p className="text-xs text-gray-400 max-w-sm">Review our compliance frameworks and technical standards for UK and European projects.</p>
            </div>
          </div>

          <a
            href="https://res.cloudinary.com/dc912sjxj/image/upload/v1767916702/Art_Genpower_Solutions_Ltd_AGP_Profile_tpmncv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-auto group flex items-center justify-center gap-4 px-10 py-5 bg-[#BF092F] text-white rounded-2xl hover:bg-[#44444E] transition-all shadow-lg active:scale-95"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">View Corporate Profile</span>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} aria-hidden="true" />
          </a>
        </footer>
      </div>
    </section>
  );
};

export default CorporateProfile;