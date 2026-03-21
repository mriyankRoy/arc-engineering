import React, { useState, useEffect, useRef } from "react";
import { partners } from "../../utils/partners";
import { Activity, Box } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function TrustedPartners() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // SEO: Comprehensive Partner List for Search Engine Knowledge Graph
  const fullPartnerList = "Abu Dhabi National Oil Company (ADNOC), Siemens Energy, Cummins, Caterpillar (Al Bahar), Dubai Petroleum, Webuild, MTU, Jakson Group, Kanoo Energy, Expro";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const revealClass = (visible, delay = "duration-1000") => 
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`;

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-24 bg-white overflow-hidden"
      aria-labelledby="partners-title"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Arc Engineering Solutions Ltd",
            "url": "https://arcengltd.com",
            "description": `Strategic partner to global energy and infrastructure leaders including ${fullPartnerList}.`,
            "brand": partners.map(p => ({ "@type": "Brand", "name": p.name }))
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 🏗️ INDUSTRIAL HEADER */}
        <header className={`mb-16 ${revealClass(isVisible)}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#BF092F]" aria-hidden="true" />
            <Activity size={14} className="text-[#BF092F] animate-pulse" aria-hidden="true" />
            <h2 className="text-sm text-[#44444E] uppercase font-bold tracking-[0.4em]">
              Global Network
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h3 id="partners-title" className="text-3xl md:text-5xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight">
              Strategic <br />
              <span className="text-[#BF092F]">Partnerships</span>
            </h3>
            <p className="max-w-md text-gray-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed pb-1 border-l-2 border-gray-100 pl-6 lg:ml-8">
              Our <strong>UK-led engineering</strong> and large-scale manufacturing are trusted by global leaders in <strong>Oil & Gas, Renewable Energy, and Mission-Critical Infrastructure.</strong>
            </p>
          </div>
        </header>

        {/* 2. LOGO GRID CHASSIS */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ${revealClass(isVisible, "duration-[1200ms] delay-300")}`}
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative aspect-[3/2] bg-white border-r border-b border-gray-100 flex flex-col items-center justify-center p-8 transition-all duration-500 hover:z-20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1 cursor-crosshair overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#BF092F]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" aria-hidden="true" />

              <span className="absolute top-4 left-4 text-[8px] font-mono font-bold text-gray-300 group-hover:text-[#44444E] transition-colors uppercase tracking-widest z-10">
                NETWORK_0{index + 1}
              </span>

              <Box className="absolute top-4 right-4 text-gray-100 group-hover:text-[#BF092F] transition-all z-10" size={14} aria-hidden="true" />

              <div className="relative z-10 w-full flex justify-center items-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} - Official Project Partner of Arc Engineering`}
                  loading="lazy"
                  className="w-[80%] h-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
              </div>

              <div className="absolute bottom-4 left-0 w-full px-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500 text-center z-10">
                <span className="text-[9px] font-black text-[#BF092F] uppercase tracking-[0.3em]">
                  {partner.name}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#BF092F] group-hover:w-full transition-all duration-500" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}