import React, { useRef, useEffect, useState } from "react";
import { Zap, Globe, ShieldCheck, Activity, ArrowRight } from "lucide-react";

const HybridModel = () => {
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
      aria-labelledby="hybrid-heading"
    >
      {/* BACKGROUND DECOR: Aligned to Right to match CorporateProfile */}
      <div 
        className="absolute top-10 right-[-5%] md:right-[-2%] text-[8rem] sm:text-[12rem] md:text-[15rem] font-black text-gray-50 select-none pointer-events-none tracking-tighter uppercase leading-none z-0"
        aria-hidden="true"
      >
        HUB
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP HEADER: Perfectly Aligned */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div style={reveal(hasRevealed)}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#BF092F]" aria-hidden="true" />
              <p className="text-[10px] tracking-[0.4em] text-[#BF092F] font-bold uppercase">
                Strategic Framework
              </p>
            </div>
            <h2 id="hybrid-heading" className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#44444E] leading-[1.1] tracking-tight">
              The <span className="text-gray-300 font-light">Hybrid</span> <br className="hidden sm:block" /> 
              Supply <span className="text-[#BF092F]">Model.</span>
            </h2>
          </div>
          
          <div className="max-w-sm" style={reveal(hasRevealed, "200ms")}>
            <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest leading-relaxed border-l border-gray-100 pl-6 py-1">
              Eliminating the compromise between capacity and cost through a 
              seamless UK-UAE supply chain partnership.
            </p>
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: THE ANCHOR (UK Leadership) */}
          <div className="lg:col-span-5 space-y-12" style={reveal(hasRevealed, "400ms")}>
            <div className="group relative bg-[#44444E] p-10 rounded-2xl text-white shadow-2xl overflow-hidden aspect-[4/5] flex flex-col justify-between">
              <Globe className="absolute -right-16 -bottom-16 text-white/5 group-hover:text-[#BF092F]/10 transition-all duration-1000" size={350} />
              
              <div className="relative z-10">
                <ShieldCheck className="text-[#BF092F] mb-6" size={40} />
                <h3 className="text-3xl font-bold uppercase tracking-tight leading-none mb-6">
                  UK Commercial <br /> Leadership
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                  Strategic project management and commercial governance driven 
                  from our Leicester headquarters, ensuring British engineering 
                  standards for every contract.
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 pt-8 border-t border-white/10">
                <Activity className="text-[#BF092F] animate-pulse" size={18} />
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                  Efficiency Optimized
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: THE ENGINE (UAE Production) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-8" style={reveal(hasRevealed, "600ms")}>
              <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 group hover:border-[#BF092F]/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                   <Zap className="text-[#BF092F]" size={32} />
                   <h4 className="text-xl font-bold text-[#44444E] uppercase tracking-tight">UAE Production Scale</h4>
                </div>
                
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-5xl sm:text-6xl font-black text-[#44444E] tracking-tighter">41,000</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">SQM Floor</span>
                </div>

                <p className="text-sm text-gray-500 leading-loose">
                  Utilizing strategic industrial hubs in <span className="text-[#44444E] font-bold">Hamriyah and Sajja</span> to handle hyperscale projects. 
                  This partnership allows us to serve Europe, Africa, and the Middle East with 
                  unmatched turnaround times.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={reveal(hasRevealed, "800ms")}>
                <div className="p-8 border border-gray-100 rounded-2xl">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#BF092F] mb-4">Engineering ESI</h5>
                    <p className="text-[12px] text-gray-500 leading-relaxed font-medium">
                        Seamless supply chain integration ensuring raw material access and manufacturing agility.
                    </p>
                </div>
                <div className="p-8 border border-gray-100 rounded-2xl">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#BF092F] mb-4">Global Reach</h5>
                    <p className="text-[12px] text-gray-500 leading-relaxed font-medium">
                        Logistics-optimized manufacturing for rapid delivery across EAME infrastructure sectors.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridModel;