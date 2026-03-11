import React, { useState, useRef } from "react";
import { facilities } from "../../utils/facilities";
import {
  ArrowRight,
  Activity,
  MapPin,
  Maximize,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

export default function FacilitiesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#fcfcfc] py-24 px-6 md:px-20 text-[#44444E]">
      {/* 🏗️ HEADER */}
      <div className="max-w-[1400px] mx-auto mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-8 w-1 bg-[#BF092F]" />
          <Activity size={14} className="text-[#BF092F] animate-pulse" />
          <h2 className="text-sm uppercase font-bold tracking-[0.4em]">Global Infrastructure</h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h3 className="text-3xl md:text-5xl font-semibold leading-tight uppercase tracking-tight">
            The <span className="text-[#BF092F]">Engine</span> <br /> of Production
          </h3>
          <p className="max-w-md text-[#44444E]/50 font-bold uppercase tracking-widest text-[10px] leading-relaxed pb-1 border-l-2 border-[#44444E]/10 pl-6 lg:ml-8">
            Precision manufacturing via ISO-certified high-capacity terminals.
          </p>
        </div>
      </div>

      {/* MOBILE SNAP LAYOUT */}
      <div className="lg:hidden flex flex-col gap-12 snap-y snap-mandatory">
        {facilities.map((f, i) => (
          <div key={f.id} className="snap-center h-auto">
            <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-6 bg-black shadow-xl relative">
              <img src={f.facilityImg[0]} className="w-full h-full object-cover" />
              <div className="absolute inset-0 rounded-[2rem] border-[1px] border-white/10 pointer-events-none" />
            </div>
            <Section data={f} index={i} onActive={() => setActiveIndex(i)} isMobile />
          </div>
        ))}
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex max-w-[1400px] mx-auto gap-32 relative">
        <div className="w-1/2 sticky top-[calc(50vh-300px)] h-[600px] z-10">
          <div className="w-full h-full rounded-[2rem] p-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] bg-black ring-1 ring-white/5 ring-inset overflow-hidden relative">
            {facilities.map((f, i) => (
              <motion.img
                key={f.id}
                src={f.facilityImg[0]}
                animate={{ opacity: activeIndex === i ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ))}
            <div className="absolute inset-0 rounded-[2rem] border-[1px] border-white/10 pointer-events-none" />
          </div>
        </div>

        <div className="w-1/2 pt-10">
          {facilities.map((c, i) => (
            <Section
              key={c.id}
              data={c}
              index={i}
              onActive={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Section({ data, index, onActive, isMobile }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["center end", "center start"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1 && latest < 0.9) onActive();
  });

  return (
    <div ref={ref} className={`relative mb-12 ${isMobile ? "pl-0" : "pl-12 min-h-[80vh]"}`}>
      {/* Progress Line - Now visible on both mobile and desktop */}
      <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#44444E]/10 ${isMobile ? "hidden" : "block"}`}>
        <motion.div className="w-full bg-[#BF092F]" style={{ height }} />
        <motion.div className="absolute -left-[5px] w-[12px] h-[12px] rounded-full border-[3px] border-[#BF092F] bg-white z-10" style={{ top: height }} />
      </div>

      <div className="bg-white p-8 rounded-3xl border border-[#eeeeee] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)]">
        <span className="text-[#BF092F] font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
          0{index + 1} // Infrastructure
        </span>
        <h4 className="text-3xl font-bold text-[#44444E] uppercase tracking-tighter mb-4">
          {data.title}
        </h4>

        <div className="flex items-center gap-2 text-[#44444E]/40 mb-6">
          <MapPin size={12} className="text-[#BF092F]" />
          <span className="text-[10px] font-bold uppercase tracking-widest">{data.location}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#f8f8f8] p-4 rounded-2xl border border-[#f0f0f0]">
            <span className="block text-[8px] font-bold text-[#44444E]/40 uppercase mb-1">Total Area</span>
            <span className="text-xs font-black text-[#44444E]">{data.totalArea}</span>
          </div>
          <div className="bg-[#f8f8f8] p-4 rounded-2xl border border-[#f0f0f0]">
            <span className="block text-[8px] font-bold text-[#44444E]/40 uppercase mb-1">Capacity</span>
            <span className="text-xs font-black text-[#44444E]">{data.productionCapacity}</span>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {data.highlights?.slice(0, 3).map((text, idx) => (
            <div key={idx} className="flex items-center gap-3 text-[#44444E]/60">
              <CheckCircle2 size={14} className="text-[#BF092F] flex-shrink-0" />
              <span className="text-[10px] font-medium uppercase tracking-wide">{text}</span>
            </div>
          ))}
        </div>

        <Link to={`/facilities/${data.id}`} className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#BF092F] group">
          Explore Unit <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}