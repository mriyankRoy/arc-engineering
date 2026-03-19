import React, { useRef, useEffect, useState } from "react";
import { Activity, MapPin, Factory, Users, Warehouse, ArrowRight } from "lucide-react";

const ManufacturingScale = () => {
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
    transition: `all 1000ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
  });

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-gray-50"
    >
      {/* BACKGROUND DECOR: Ghost "SCALE" matches the "ARC" and "HUB" motifs */}
      <div className="absolute top-10 right-[-2%] text-[15rem] font-black text-gray-50 select-none pointer-events-none tracking-tighter uppercase leading-none">
        SCALE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP HEADER: Matched to CorporateProfile (Sentence Case) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div style={reveal(hasRevealed)}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#BF092F]" />
              <span className="text-[10px] tracking-[0.4em] text-[#BF092F] font-bold uppercase">
                Production Capacity
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#44444E] leading-[1.1] tracking-tight">
              Reliability <span className="text-gray-300 font-light">built on</span> <br /> 
              Global <span className="text-[#BF092F]">Infrastructure.</span>
            </h2>
          </div>
          
          <div className="md:max-w-xs" style={reveal(hasRevealed, "200ms")}>
            <p className="text-xs text-gray-400 uppercase tracking-widest leading-relaxed border-l border-gray-100 pl-6">
              Total peace of mind through project continuity and a 
              massive physical manufacturing footprint.
            </p>
          </div>
        </div>

        {/* MAIN GRID: Asymmetrical 7/5 Split (Flipped for rhythm) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: THE DATA GRID (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={reveal(hasRevealed, "400ms")}>
              {/* Stat Card 1 */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 group hover:border-[#BF092F]/30 transition-all">
                <MapPin className="text-[#BF092F] mb-6" size={28} />
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black text-[#44444E] tracking-tighter">41k</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">SQM</span>
                </div>
                <p className="text-[11px] font-black uppercase tracking-widest text-gray-400">Production Footprint</p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 group hover:border-[#BF092F]/30 transition-all">
                <Factory className="text-[#BF092F] mb-6" size={28} />
                <div className="text-5xl font-black text-[#44444E] tracking-tighter mb-2">05</div>
                <p className="text-[11px] font-black uppercase tracking-widest text-gray-400">Specialized Factories</p>
              </div>
            </div>

            {/* Workforce Card */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8 group" style={reveal(hasRevealed, "600ms")}>
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-[#44444E] rounded-xl flex items-center justify-center text-white group-hover:bg-[#BF092F] transition-colors duration-500 shadow-lg shadow-gray-200">
                    <Users size={32} />
                 </div>
                 <div>
                    <div className="text-4xl font-black text-[#44444E] tracking-tighter">260+</div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Skilled Workforce</p>
                 </div>
               </div>
               <div className="flex flex-wrap gap-2">
                {["Fabricators", "Welders", "Engineers"].map((role) => (
                  <span key={role} className="text-[9px] font-black uppercase tracking-[0.3em] bg-gray-50 px-4 py-2 rounded-lg text-gray-500 border border-gray-100">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8" style={reveal(hasRevealed, "800ms")}>
              <p className="text-sm text-gray-500 leading-loose border-l-4 border-[#BF092F] pl-8 italic max-w-2xl">
                Our infrastructure is optimized for parallel production, specifically designed 
                to deliver hyperscale mission-critical packages without compromise.
              </p>
            </div>
          </div>

          {/* RIGHT: THE STRATEGY CARD (5 Columns) */}
          <div className="lg:col-span-5 order-1 lg:order-2" style={reveal(hasRevealed, "400ms")}>
            <div className="relative group h-full bg-[#44444E] p-12 rounded-2xl text-white shadow-2xl overflow-hidden flex flex-col justify-between min-h-[500px]">
              {/* Ghost Icon */}
              <Warehouse className="absolute -right-12 -bottom-12 text-white/5 group-hover:text-[#BF092F]/10 transition-all duration-1000 scale-110" size={350} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                   <Activity className="text-[#BF092F] animate-pulse" size={24} />
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Stability First</span>
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tight leading-none mb-8">
                  Security of <br /> <span className="text-[#BF092F]">Supply.</span>
                </h3>
                <p className="text-white/50 text-sm leading-loose mb-10">
                  Reliability isn't just about the product; it's about the partner. 
                  We eliminate project risk through expansive physical ownership 
                  of our production line and material supply chain.
                </p>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#BF092F]">Operation Mode</p>
                  <p className="text-[11px] text-white/40 uppercase font-bold">Parallel Delivery</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#BF092F] group-hover:border-[#BF092F] transition-all">
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManufacturingScale;