import React, { useRef, useEffect, useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

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
    transform: isVisible ? "translateY(0)" : "translateY(40px)",
    opacity: isVisible ? 1 : 0,
    transition: `all 1000-ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
  });

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* BACKGROUND DECOR: Ghost industrial numbers/text for "Elegant Engineering" feel */}
      <div className="absolute top-10 right-[-5%] text-[15rem] font-black text-gray-50 select-none pointer-events-none tracking-tighter uppercase leading-none">
        ARC
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP HEADER: Clean & Minimal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div style={reveal(hasRevealed)}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#BF092F]" />
              <span className="text-[10px] tracking-[0.4em] text-[#BF092F] font-bold uppercase">
                Corporate Identity
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#44444E] leading-[1.1] tracking-tight">
              Engineering <span className="text-gray-300">without</span> <br /> 
              Boundaries.
            </h2>
          </div>
          
          <div className="md:max-w-xs" style={reveal(hasRevealed, "200ms")}>
            <p className="text-xs text-gray-400 uppercase tracking-widest leading-relaxed border-l border-gray-100 pl-6">
              Strategic manufacturing operations across the UK and UAE, delivering 
              cost-efficient, mission-critical infrastructure.
            </p>
          </div>
        </div>

        {/* MAIN GRID: Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: The "Technical" Column */}
          <div className="lg:col-span-5 space-y-12" style={reveal(hasRevealed, "400ms")}>
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5]">
                <img
                  src="https://res.cloudinary.com/dc912sjxj/image/upload/v1767730757/Hamriyah_Facility_03_z6hmoe.webp"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  alt="Engineering Detail"
                />
              </div>
              {/* Floating Stat or Label */}
              <div className="absolute -bottom-6 -right-6 bg-[#44444E] p-8 text-white rounded-xl shadow-2xl hidden md:block">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Global Reach</p>
                <p className="text-xl font-bold">UK & UAE HUB</p>
              </div>
            </div>

            <div className="space-y-6 pt-4">
               <p className="text-lg text-[#44444E] font-medium leading-relaxed italic border-l-4 border-[#BF092F] pl-6">
                "We provide British engineering quality with the scale and cost-efficiency of Middle Eastern manufacturing."
              </p>
              <p className="text-sm text-gray-500 leading-loose max-w-md">
                Arc Engineering Solutions Ltd specializes in the design, manufacture, 
                and supply of mission-critical acoustic enclosures, E-Houses, 
                and fuel systems for the world's most demanding sectors.
              </p>
            </div>
          </div>

          {/* RIGHT: The "Visual" Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Image Cluster */}
            <div className="grid grid-cols-2 gap-6 items-start">
              <div className="space-y-6" style={reveal(hasRevealed, "600ms")}>
                <img
                  src="https://res.cloudinary.com/dc912sjxj/image/upload/v1767730365/Hamriyah_Facility_05_fyuzwt.webp"
                  className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                  alt="Facility"
                />
                <div className="bg-[#BF092F] p-8 rounded-2xl text-white">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-4">Core Sectors</h4>
                    <ul className="text-[11px] space-y-2 opacity-90 font-medium">
                        <li>• DATA CENTERS</li>
                        <li>• OIL & GAS</li>
                        <li>• POWER GENERATION</li>
                    </ul>
                </div>
              </div>
              <div style={reveal(hasRevealed, "800ms")}>
                <img
                  src="https://res.cloudinary.com/dc912sjxj/image/upload/v1767792069/AGP_Project_Sajja_PowerPack_04_cb755l.webp"
                  className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg"
                  alt="Project"
                />
              </div>
            </div>

            {/* DOWNLOAD CTA: Modern minimalist style */}
            <div className="mt-12 lg:mt-0 flex flex-col sm:flex-row items-center gap-8 border-t border-gray-100 pt-12" style={reveal(hasRevealed, "1000ms")}>
               <a
                href="https://res.cloudinary.com/dc912sjxj/image/upload/v1767916702/Art_Genpower_Solutions_Ltd_AGP_Profile_tpmncv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-20 h-20 rounded-full bg-[#BF092F] text-white transition-transform hover:scale-110"
              >
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span className="absolute -bottom-8 whitespace-nowrap text-[9px] font-black uppercase tracking-widest text-[#44444E]">
                  Full Profile
                </span>
              </a>
              <div className="text-left">
                <h4 className="text-xl font-bold text-[#44444E]">Ready to scale?</h4>
                <p className="text-sm text-gray-400">Review our global infrastructure and full technical capabilities.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateProfile;