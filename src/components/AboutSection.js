import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Factory,
  ShieldCheck,
  Zap,
  Activity,
  Globe,
  Box,
  Cpu,
  Layers,
  Warehouse,
  Settings,
  Droplets,
} from "lucide-react";
import { Link } from "react-router";

/**
 * AboutSection: Core Corporate Identity & Infrastructure Overview
 * This component utilizes intersection observers for scroll-synced reveals
 * and a high-fidelity industrial aesthetic.
 */
export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
  const specsRef = useRef(null);

  // --- INITIALIZATION & INTERSECTION OBSERVER ---
  useEffect(() => {
    // Initial entrance animation trigger
    setIsVisible(true);

    // Observer to trigger secondary animations when the user scrolls to the Technical Specs grid
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSpecs(true);
        }
      },
      { threshold: 0.1 },
    );

    if (specsRef.current) {
      observer.observe(specsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // --- ANIMATION HELPER ---
  // Generates transition classes based on visibility and custom delay/duration
  const revealClass = (visible, delay = "duration-1000") =>
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`;

  return (
    <div id="about" className="relative bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* 🏗️ INDUSTRIAL HEADER: Corporate Identity & Engineering Meta-data */}
        <div className={`mb-16 ${revealClass(isVisible)}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#BF092F]" />
            <Activity size={14} className="text-[#BF092F] animate-pulse" />
            <h2 className="text-sm text-[#44444E] uppercase font-black tracking-[0.4em]">
              Strategic Infrastructure
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h3 className="text-3xl md:text-5xl font-semibold text-[#44444E] leading-tight uppercase tracking-tighter">
              Corporate <span className="text-[#BF092F]">Identity</span>{" "}
              <br className="hidden md:block" /> & Engineering
            </h3>
            <p className="max-w-md text-gray-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed pb-1 border-l-2 border-gray-100 pl-6 lg:ml-8">
              Precision-fabricated power infrastructure for critical
              applications.
            </p>
          </div>
        </div>

        {/* 🏭 MISSION MANIFESTO CARD: High-level summary and Core Deliverables grid */}
        <div
          className={`mb-12 ${revealClass(isVisible, "duration-[1200ms] delay-200")}`}
        >
          <div className="grid lg:grid-cols-12 gap-0 shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
            {/* Left Content: Mission Text */}
            <div className="lg:col-span-8 bg-white p-10 md:p-16 border-r border-gray-50">
              <h3 className="text-[11px] font-black text-[#BF092F] uppercase tracking-[0.4em] mb-8">
                Mission_Manifesto
              </h3>
              <p className="text-2xl md:text-3xl font-semibold text-[#44444E] uppercase tracking-tight leading-tight mb-8">
                Bridging the gap between{" "}
                <span className="text-[#BF092F]">Global Scale</span> <br /> and{" "}
                <span className="text-[#BF092F]">
                  UK Engineering Precision.
                </span>
              </p>
              <p className="text-gray-500 uppercase tracking-widest text-[11px] font-medium leading-loose mb-10 max-w-2xl">
                At Art GenPower Solution Ltd, we specialize in the design,
                fabrication, and integration of heavy-duty Generator Containers
                and E-House/EPOD power infrastructure. Our reputation is built
                on delivering robust, site-ready solutions.
              </p>

              {/* Quick-Stats Display */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Stat label="FAT Tested" val="100%" />
                <Stat label="Manufacturing" val="Global" />
                <Stat label="Engineering" val="Bespoke" />
                <Stat label="Standards" val="ISO" />
              </div>
            </div>

            {/* Right Content: Tech Sidebar */}
            <div className="lg:col-span-4 bg-[#44444E] p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group">
              <ShieldCheck
                size={200}
                className="absolute -right-10 -bottom-10 text-white/5 rotate-12 transition-transform group-hover:rotate-0 duration-1000"
              />
              <div className="relative z-10">
                <h4 className="text-xl font-black uppercase italic text-[#BF092F] mb-8 border-b border-white/10 pb-4">
                  Core Deliverables
                </h4>
                <ul className="space-y-6">
                  <TechItem icon={Zap} text="Generator Enclosures" />
                  <TechItem icon={Cpu} text="Utility E-Houses" />
                  <TechItem icon={Factory} text="Switchgear Modules" />
                  <TechItem icon={Layers} text="Acoustic Treatment" />
                </ul>
              </div>
              <div className="relative z-10 mt-12 pt-8 border-t border-white/10 text-[9px] font-mono text-white/40 uppercase tracking-[0.3em]">
                Registry_Ref: AGP_UK_STATUS_ELITE <br /> Verified:
                2026_PROTOCOLS
              </div>
            </div>
          </div>
        </div>

        {/* 🛠️ CORE STRENGTHS: Two-column grid highlighting specific build capabilities */}
        <div
          ref={specsRef}
          className={`grid lg:grid-cols-2 gap-8 items-stretch mb-8 ${revealClass(showSpecs, "duration-[1200ms]")}`}
        >
          {/* STRENGTH 01: GENERATOR CONTAINERS */}
          <div className="group relative bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#BF092F]/20 transition-all duration-500 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 text-gray-50 group-hover:text-[#BF092F]/5 transition-colors">
              <Box size={140} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-6 w-1 bg-[#BF092F]" />
                <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-[#44444E]/60">
                  Specialized Packaging
                </h2>
              </div>
              <h4 className="text-2xl font-semibold text-[#44444E] uppercase tracking-tight mb-6 leading-tight">
                Advanced Generator <br />
                <span className="text-[#BF092F]">Container Solutions</span>
              </h4>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-[11px] leading-loose mb-8 max-w-md">
                We go beyond standard fabrication. Our bespoke generator
                containers are engineered for maximum structural integrity and
                acoustic performance.
              </p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                {[
                  "Heavy-duty Steel",
                  "Acoustic Attenuation",
                  "Optimized Airflow",
                ].map((f) => (
                  <span
                    key={f}
                    className="text-[9px] font-black uppercase tracking-widest bg-gray-50 px-3 py-2 rounded-lg text-gray-400 group-hover:text-[#44444E] transition-colors"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* STRENGTH 02: E-HOUSE & PODS */}
          <div className="group relative bg-[#44444E] p-10 rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-[#BF092F]/10 transition-colors">
              <Warehouse size={140} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-6 w-1 bg-[#BF092F]" />
                <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40">
                  Modular Integration
                </h2>
              </div>
              <h4 className="text-2xl font-semibold text-white uppercase tracking-tight mb-6 leading-tight">
                E-House & Electrical <br />
                <span className="text-[#BF092F]">POD Manufacturing</span>
              </h4>
              <p className="text-white/50 font-medium uppercase tracking-widest text-[11px] leading-loose mb-8 max-w-md">
                Our pre-fabricated E-Houses (Electrical Power on Demand) offer a
                fully integrated, "plug-and-play" solution.
              </p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                {[
                  "Climate Controlled",
                  "Fire Suppression",
                  "Seamless Installation",
                ].map((f) => (
                  <span
                    key={f}
                    className="text-[9px] font-black uppercase tracking-widest bg-white/5 px-3 py-2 rounded-lg text-white/40 group-hover:text-white transition-colors"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 🛠️ SUPPLY CAPABILITIES: Engineering Dashboard for Ancillary Supply Chain */}
        <div
          className={`mb-24 ${revealClass(showSpecs, "duration-[1200ms] delay-200")}`}
        >
          <div className="relative group overflow-hidden rounded-[2rem] border border-gray-100 shadow-2xl bg-[#44444E]">
            <div className="relative z-10 grid lg:grid-cols-12">
              {/* Supply Chain Red Sidebar */}
              <div className="lg:col-span-4 p-12 md:p-16 bg-[#BF092F] text-white flex flex-col justify-between relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-5 w-1 bg-white" />
                    <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-white/80">
                      Ancillary_Supply_Chain
                    </h2>
                  </div>
                  <h4 className="text-4xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                    Precision <br />
                    <span className="text-white/40">Components.</span> <br />
                    Critical <br />
                    <span className="text-white/40">Reliability.</span>
                  </h4>
                </div>
                <div className="relative z-10 space-y-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 leading-relaxed max-w-xs">
                    A trustworthy global supplier of specialist instrumentation
                    and high-performance ancillaries, engineered to meet the
                    rigorous demands and precision standards of the modern power
                    generation industry.
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-6 px-8 py-5 bg-white text-[#BF092F] rounded-xl font-black text-[10px] uppercase tracking-[0.4em] hover:bg-[#44444E] hover:text-white transition-all duration-500 group/btn shadow-xl w-fit"
                  >
                    View Products{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-2 transition-transform"
                    />
                  </Link>
                </div>
              </div>

              {/* Main Supply Grid: Fuel and Build Components */}
              <div className="lg:col-span-8 p-12 md:p-16 relative bg-[#44444E]">
                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                  {/* Category: Fuel Management */}
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-4 py-2 px-4 bg-white/5 border border-white/10 rounded-lg mb-7">
                        <Droplets className="text-[#BF092F]" size={20} />
                        <h5 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">
                          Fuel Management
                        </h5>
                      </div>
                      <p className="text-[10px] text-white/40 font-medium uppercase tracking-[0.15em] leading-relaxed">
                        High-precision instruments for safety and efficiency of
                        fuel storage systems.
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {[
                        { name: "Level Gauges & Alarms" },
                        { name: "Leakage Detection" },
                        { name: "Overfill Prevention" },
                      ].map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center justify-between group/item p-4 border border-white/5 rounded-xl hover:border-[#BF092F]/50 hover:bg-white/[0.02] transition-all"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#BF092F]" />
                            <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                              {item.name}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category: Build Ancillaries */}
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-4 py-2 px-4 bg-white/5 border border-white/10 rounded-lg mb-7">
                        <Settings className="text-[#BF092F]" size={20} />
                        <h5 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">
                          Build Ancillaries
                        </h5>
                      </div>
                      <p className="text-[10px] text-white/40 font-medium uppercase tracking-[0.15em] leading-relaxed">
                        Heavy-duty components required to outfit generator
                        containers to global standards.
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {[
                        { name: "Vibration Isolators" },
                        { name: "Exhaust Insulation" },
                        { name: "Air Handling Louvres" },
                      ].map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center justify-between group/item p-4 border border-white/5 rounded-xl hover:border-[#BF092F]/50 hover:bg-white/[0.02] transition-all"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#BF092F]" />
                            <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                              {item.name}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dashboard Meta Footer */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] text-white/30 uppercase tracking-widest font-black">
                      Quality Protocol
                    </span>
                    <span className="text-[10px] text-white/60 uppercase font-bold tracking-widest underline decoration-[#BF092F] decoration-2 underline-offset-4">
                      PRECISION ENGINEERED
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] text-white/30 uppercase tracking-widest font-black">
                      Availability
                    </span>
                    <span className="text-[10px] text-white/60 uppercase font-bold tracking-widest">
                      Ex-Stock / Global Lead
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🏗️ MANUFACTURING PARTNERSHIP STRIP: Geographical & Quality assurance validation */}
        <div
          className={`grid md:grid-cols-2 gap-6 ${revealClass(showSpecs, "duration-[1200ms] delay-500")}`}
        >
          <div className="bg-gray-50 p-8 rounded-2xl flex items-center gap-6 group hover:bg-white transition-all border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl">
            <div className="w-16 h-16 bg-[#44444E] rounded-xl flex items-center justify-center text-[#BF092F]">
              <Globe size={32} />
            </div>
            <div>
              <h5 className="font-bold text-[#44444E] uppercase text-sm tracking-widest">
                Global Reach
              </h5>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                Direct manufacturing via UAE and India Hubs.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl flex items-center gap-6 group hover:bg-white transition-all border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl">
            <div className="w-16 h-16 bg-[#BF092F] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#BF092F]/20">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h5 className="font-bold text-[#44444E] uppercase text-sm tracking-widest">
                UK Quality Assurance
              </h5>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                Final FAT and inspection conducted to UK standards.
              </p>
            </div>
          </div>
        </div>

        {/* EPIC CTA SECTION: Final Call to Action with Link Navigation */}
        <div
          className={`mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-100 pt-12 ${revealClass(showSpecs, "delay-700")}`}
        >
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-[#BF092F]" />
            <div className="w-2 h-2 bg-[#44444E]" />
            <div className="w-2 h-2 bg-gray-200" />
          </div>
          <Link
            to={"/about"}
            className="group flex items-center gap-6 px-10 py-5 bg-[#BF092F] text-white rounded-xl shadow-lg shadow-[#BF092F]/20 hover:bg-[#44444E] transition-all duration-500"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">
              Explore Corporate Profile
            </span>
            <ArrowRight
              className="group-hover:translate-x-3 transition-transform"
              size={18}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

/**
 * Stat: Visual pill showing a metric value and a descriptive label
 */
function Stat({ label, val }) {
  return (
    <div className="bg-gray-50 p-5 border border-gray-100 rounded-xl group hover:bg-white hover:shadow-lg transition-all text-center">
      <div className="text-sm font-black text-[#BF092F] uppercase tracking-widest mb-1">
        {val}
      </div>
      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">
        {label}
      </div>
    </div>
  );
}

/**
 * TechItem: List item with a themed icon and bold tracking text
 */
function TechItem({ icon: Icon, text }) {
  return (
    <li className="flex items-center gap-4 group/item">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-[#BF092F] transition-all border border-white/10 group-hover/item:border-transparent">
        <Icon
          size={16}
          className="text-[#BF092F] group-hover/item:text-white transition-colors"
        />
      </div>
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 group-hover/item:text-white transition-colors">
        {text}
      </span>
    </li>
  );
}
