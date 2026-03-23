import React, { useRef, useEffect, useState } from "react";
import { Activity, MapPin, Factory, Users, Warehouse, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const ManufacturingScale = () => {
  const sectionRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  const navigate = useNavigate();

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
      aria-labelledby="scale-heading"
    >
      {/* BACKGROUND DECOR */}
      <div 
        className="absolute top-10 right-[-5%] md:right-[-2%] text-[8rem] sm:text-[12rem] md:text-[15rem] font-black text-gray-50 select-none pointer-events-none tracking-tighter uppercase leading-none z-0"
        aria-hidden="true"
      >
        SCALE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP HEADER */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div style={reveal(hasRevealed)}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#BF092F]" aria-hidden="true" />
              <p className="text-[10px] tracking-[0.4em] text-[#BF092F] font-bold uppercase">
                Production Capacity
              </p>
            </div>
            <h2 id="scale-heading" className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#44444E] leading-[1.1] tracking-tight">
              Reliability <span className="text-gray-300 font-light">built on</span> <br className="hidden sm:block" /> 
              Global <span className="text-[#BF092F]">Infrastructure.</span>
            </h2>
          </div>
          
          <div className="max-w-sm" style={reveal(hasRevealed, "200ms")}>
            <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest leading-relaxed border-l border-gray-100 pl-6 py-1">
              Providing UK and European markets with project continuity through 
              a massive, high-specification manufacturing footprint.
            </p>
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: THE DATA GRID */}
          <article className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={reveal(hasRevealed, "400ms")}>
              
              {/* Stat Card 1 */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 group hover:border-[#BF092F]/30 transition-all">
                <MapPin className="text-[#BF092F] mb-6" size={28} aria-hidden="true" />
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black text-[#44444E] tracking-tighter">41k</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">SQM</span>
                </div>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400">Infrastructure Capacity</h3>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 group hover:border-[#BF092F]/30 transition-all">
                <Factory className="text-[#BF092F] mb-6" size={28} aria-hidden="true" />
                <div className="text-5xl font-black text-[#44444E] tracking-tighter mb-2">05</div>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400">Specialized Facilities</h3>
              </div>
            </div>

            {/* Workforce Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8 group" style={reveal(hasRevealed, "600ms")}>
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-[#44444E] rounded-xl flex items-center justify-center text-white group-hover:bg-[#BF092F] transition-colors duration-500 shadow-lg shadow-gray-200">
                    <Users size={32} aria-hidden="true" />
                 </div>
                 <div>
                    <div className="text-4xl font-black text-[#44444E] tracking-tighter">260+</div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Technical Experts</p>
                 </div>
               </div>
               <div className="flex flex-wrap gap-2" role="list">
                {["Qualified Welders", "Specialist Fabricators", "Chartered Engineers"].map((role) => (
                  <span key={role} role="listitem" className="text-[9px] font-black uppercase tracking-[0.3em] bg-gray-50 px-4 py-2 rounded-lg text-gray-500 border border-gray-100">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4" style={reveal(hasRevealed, "800ms")}>
              <p className="text-sm text-gray-500 leading-loose border-l-4 border-[#BF092F] pl-8 italic max-w-2xl">
                Our facilities are optimized for parallel production, designed to meet the hyperscale delivery requirements of mission-critical UK and European data center projects.
              </p>
            </div>
          </article>

          {/* RIGHT: THE STRATEGY CARD */}
          <div className="lg:col-span-5 order-1 lg:order-2" style={reveal(hasRevealed, "400ms")}>
            <article className="relative group h-full bg-[#44444E] p-10 md:p-12 rounded-2xl text-white shadow-2xl overflow-hidden flex flex-col justify-between min-h-[450px] md:min-h-[500px]">
              <Warehouse className="absolute -right-12 -bottom-12 text-white/5 group-hover:text-[#BF092F]/10 transition-all duration-1000 scale-110" size={350} aria-hidden="true" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                   <Activity className="text-[#BF092F] animate-pulse" size={24} aria-hidden="true" />
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Business Continuity</span>
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tight leading-none mb-8">
                  Security of <br /> <span className="text-[#BF092F]">Supply.</span>
                </h3>
                <p className="text-white/50 text-sm leading-loose mb-10">
                  Reliability for our UK and European partners is built on physical ownership. 
                  We de-risk project timelines through control over our manufacturing line and 
                  British-standard quality oversight.
                </p>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#BF092F]">Operation Mode</p>
                  <p className="text-[11px] text-white/40 uppercase font-bold">Parallel Delivery</p>
                </div>
                <div onClick={() => {navigate("/projects")}} className="cursor-pointer w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#BF092F] group-hover:border-[#BF092F] transition-all">
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManufacturingScale;