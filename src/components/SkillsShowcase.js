import React, { useState, useEffect } from "react";
import { skills } from "../utils/skills";
import { Zap, Layers, ShieldCheck } from "lucide-react";

export default function SkillsTabs() {
  const [selected, setSelected] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    const timer = setTimeout(() => setImageLoaded(true), 50);
    return () => clearTimeout(timer);
  }, [selected]);

  const firstHalf = skills.slice(0, 5);
  const secondHalf = skills.slice(5);

  const renderTab = (skill, actualIndex) => (
    <button
      key={actualIndex}
      onClick={() => setSelected(actualIndex)}
      className={`cursor-pointer group relative px-6 py-5 text-left transition-all duration-300 border-b border-white/5 flex items-center justify-between ${
        selected === actualIndex
          ? "bg-white text-[#44444E]"
          : "bg-transparent text-white/40 hover:text-white hover:bg-white/5"
      }`}
    >
      <div className="flex flex-col">
        <span className={`text-[8px] font-black uppercase tracking-[0.3em] mb-1 ${
          selected === actualIndex ? "text-[#BF092F]" : "text-white/20"
        }`}>
          MODULE 0{actualIndex + 1}
        </span>
        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] transition-all">
          {skill.title}
        </h3>
      </div>

      <div className={`w-1.5 h-1.5 rounded-full transition-all ${
        selected === actualIndex ? "bg-[#BF092F] scale-125 shadow-[0_0_8px_#BF092F]" : "bg-white/10"
      }`} />
      
      {selected === actualIndex && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#BF092F]" />
      )}
    </button>
  );

  return (
    <section className="relative py-12 bg-transparent">
      <div className="relative mx-auto w-full">
        
        {/* --- HEADER SECTION: Matched to AboutUsPage Manifesto style --- */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#BF092F]" />
            <h2 className="text-sm text-[#44444E] uppercase font-bold tracking-wider">Technical Capabilities</h2>
          </div>
          <h3 className="text-2xl md:text-4xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight">
            Engineering <span className="text-[#BF092F]">Toolkit</span> & Standards
          </h3>
        </div>

        {/* --- MAIN CHASSIS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl rounded-2xl overflow-hidden border border-gray-100 bg-[#44444E]">
          
          {/* LEFT TERMINAL */}
          <div className="lg:col-span-3 bg-[#44444E] flex flex-col border-r border-white/5">
            <div className="p-6 border-b border-white/10 bg-black/20">
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Module Index A</h4>
            </div>
            {firstHalf.map((skill, index) => renderTab(skill, index, index))}
          </div>

          {/* CENTER VIEWPORT */}
          <div className="lg:col-span-6 relative bg-white overflow-hidden">
            <div className="relative aspect-square md:aspect-video lg:aspect-auto lg:h-[600px] bg-[#1A1A1E]">
              {/* Technical Dotted Overlay */}
              <div 
                className="absolute inset-0 z-10 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "24px 24px"
                }}
              />

              <img
                src={skills[selected].image}
                alt={skills[selected].title}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />

              {/* Info Overlay: Matched to AboutUs CTA/Manifesto design */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-10 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                 <div className="flex items-center gap-3 mb-4">
                    <Layers className="text-[#BF092F]" size={16} />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Skill: {skills[selected].title}</span>
                 </div>
                 <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed tracking-wide max-w-lg italic border-l-2 border-[#BF092F] pl-5">
                    {skills[selected].description}
                 </p>
              </div>

              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30">
                <div 
                  className="h-full bg-[#BF092F] transition-all duration-700 ease-out"
                  style={{ width: imageLoaded ? '100%' : '0%' }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT TERMINAL */}
          <div className="lg:col-span-3 bg-[#44444E] flex flex-col">
            <div className="p-6 border-b border-white/10 bg-black/20">
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Module Index B</h4>
            </div>
            {secondHalf.map((skill, index) =>
              renderTab(skill, index + 5, index + 5)
            )}
            
            {/* Technical Verification Footer */}
            <div className="mt-auto p-8 bg-black/30 border-t border-white/5">
               <div className="flex items-center gap-3 text-white/40 mb-3">
                  <ShieldCheck size={16} className="text-[#BF092F]" />
                  <span className="text-[9px] font-black uppercase tracking-widest">System Verified</span>
               </div>
               <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] leading-relaxed">
                 Compliant with ISO 9001:2015 <br/> Engineering Protocols.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}