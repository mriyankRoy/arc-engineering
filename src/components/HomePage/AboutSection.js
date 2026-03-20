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
import { Helmet } from "react-helmet-async";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
  const specsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
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

  const revealClass = (visible, delay = "duration-1000") =>
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`;

  return (
    <section id="about" className="relative bg-white py-24 overflow-hidden">
      <Helmet>
        <title>Engineering Excellence | Arc Engineering Ltd</title>
        <meta name="description" content="UK-governed engineering providing global scale for Generator Enclosures, E-Houses, and mission-critical power infrastructure." />
      </Helmet>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <header className={`mb-16 ${revealClass(isVisible)}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#BF092F]" aria-hidden="true" />
            <Activity size={14} className="text-[#BF092F] animate-pulse" aria-hidden="true" />
            <h2 className="text-sm text-[#44444E] uppercase font-black tracking-[0.4em]">
              Global Infrastructure
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h3 className="text-3xl md:text-5xl font-semibold text-[#44444E] leading-tight uppercase tracking-tighter">
              UK <span className="text-[#BF092F]">Engineering</span>{" "}
              <br className="hidden md:block" /> Global <span className="text-[#BF092F]">Scale.</span>
            </h3>
            <p className="max-w-md text-gray-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed pb-1 border-l-2 border-gray-100 pl-6 lg:ml-8">
              Bespoke power infrastructure engineered to British standards for worldwide delivery.
            </p>
          </div>
        </header>

        <article
          className={`mb-12 ${revealClass(isVisible, "duration-[1200ms] delay-200")}`}
        >
          <div className="grid lg:grid-cols-12 gap-0 shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
            <div className="lg:col-span-8 bg-white p-10 md:p-16 border-r border-gray-50">
              <h4 className="text-[11px] font-black text-[#BF092F] uppercase tracking-[0.4em] mb-8">
                The_Hybrid_Model
              </h4>
              <p className="text-2xl md:text-3xl font-semibold text-[#44444E] uppercase tracking-tight leading-tight mb-8">
                Direct <span className="text-[#BF092F]">Manufacturing</span> <br /> With{" "}
                <span className="text-[#BF092F]">
                  UK Quality Governance.
                </span>
              </p>
              <p className="text-gray-500 uppercase tracking-widest text-[11px] font-medium leading-loose mb-10 max-w-2xl">
                Arc Engineering Ltd bridges the gap between massive production capacity and stringent UK engineering precision, specializing in mission-critical E-House and Generator infrastructure.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Stat label="QA Protocol" val="UK-Led" />
                <Stat label="Production" val="Direct" />
                <Stat label="Standards" val="BS EN" />
                <Stat label="Inspection" val="FAT" />
              </div>
            </div>

            <aside className="lg:col-span-4 bg-[#44444E] p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group">
              <ShieldCheck
                size={200}
                className="absolute -right-10 -bottom-10 text-white/5 rotate-12 transition-transform group-hover:rotate-0 duration-1000"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <h4 className="text-xl font-black uppercase italic text-[#BF092F] mb-8 border-b border-white/10 pb-4">
                  Strategic Scope
                </h4>
                <ul className="space-y-6">
                  <TechItem icon={Zap} text="Acoustic Enclosures" />
                  <TechItem icon={Cpu} text="Modular E-Houses" />
                  <TechItem icon={Factory} text="Grid Infrastructure" />
                  <TechItem icon={Layers} text="Custom Fabrication" />
                </ul>
              </div>
              <div className="relative z-10 mt-12 pt-8 border-t border-white/10 text-[9px] font-mono text-white/40 uppercase tracking-[0.3em]">
                Engineered for UK, European, and Worldwide Clients.
              </div>
            </aside>
          </div>
        </article>

        <div
          ref={specsRef}
          className={`grid lg:grid-cols-2 gap-8 items-stretch mb-8 ${revealClass(showSpecs, "duration-[1200ms]")}`}
        >
          <article className="group relative bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#BF092F]/20 transition-all duration-500 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 text-gray-50 group-hover:text-[#BF092F]/5 transition-colors">
              <Box size={140} aria-hidden="true" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-6 w-1 bg-[#BF092F]" aria-hidden="true" />
                <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-[#44444E]/60">
                  Power Packaging
                </h4>
              </div>
              <h4 className="text-2xl font-semibold text-[#44444E] uppercase tracking-tight mb-6 leading-tight">
                Specialist Generator <br />
                <span className="text-[#BF092F]">Container Systems</span>
              </h4>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-[11px] leading-loose mb-8 max-w-md">
                Bespoke enclosures engineered for critical structural integrity and high-performance acoustic attenuation.
              </p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                {[
                  "ISO Compliant",
                  "Acoustic Rated",
                  "Seismic Options",
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
          </article>

          <article className="group relative bg-[#44444E] p-10 rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-[#BF092F]/10 transition-colors">
              <Warehouse size={140} aria-hidden="true" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-6 w-1 bg-[#BF092F]" aria-hidden="true" />
                <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40">
                  Integrated Power
                </h4>
              </div>
              <h4 className="text-2xl font-semibold text-white uppercase tracking-tight mb-6 leading-tight">
                E-House & Modular <br />
                <span className="text-[#BF092F]">POD Solutions</span>
              </h4>
              <p className="text-white/50 font-medium uppercase tracking-widest text-[11px] leading-loose mb-8 max-w-md">
                Pre-fabricated, integrated electrical rooms (EPODs) designed for rapid site-ready deployment.
              </p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                {[
                  "UKCA / CE Marked",
                  "Fire Integrated",
                  "Rapid Deployment",
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
          </article>
        </div>

        <div
          className={`mb-24 ${revealClass(showSpecs, "duration-[1200ms] delay-200")}`}
        >
          <div className="relative group overflow-hidden rounded-[2rem] border border-gray-100 shadow-2xl bg-[#44444E]">
            <div className="relative z-10 grid lg:grid-cols-12">
              <aside className="lg:col-span-4 p-12 md:p-16 bg-[#BF092F] text-white flex flex-col justify-between relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-5 w-1 bg-white" aria-hidden="true" />
                    <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-white/80">
                      Supply_Chain_Assurance
                    </h2>
                  </div>
                  <h4 className="text-4xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                    British <br />
                    <span className="text-white/40">Design.</span> <br />
                    Global <br />
                    <span className="text-white/40">Delivery.</span>
                  </h4>
                </div>
                <div className="relative z-10 space-y-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 leading-relaxed max-w-xs">
                    Managing a worldwide supply chain of high-performance technical ancillaries.
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-6 px-8 py-5 bg-white text-[#BF092F] rounded-xl font-black text-[10px] uppercase tracking-[0.4em] hover:bg-[#44444E] hover:text-white transition-all duration-500 group/btn shadow-xl w-fit"
                  >
                    Explore Range{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-2 transition-transform"
                    />
                  </Link>
                </div>
              </aside>

              <div className="lg:col-span-8 p-12 md:p-16 relative bg-[#44444E]">
                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-4 py-2 px-4 bg-white/5 border border-white/10 rounded-lg mb-7">
                        <Droplets className="text-[#BF092F]" size={20} aria-hidden="true" />
                        <h5 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">
                          Fluid Handling
                        </h5>
                      </div>
                      <p className="text-[10px] text-white/40 font-medium uppercase tracking-[0.15em] leading-relaxed">
                        Instrumentation for mission-critical fuel systems.
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {[
                        { name: "Digital Level Gauges" },
                        { name: "Leakage Monitoring" },
                        { name: "Environmental Alarms" },
                      ].map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center justify-between group/item p-4 border border-white/5 rounded-xl hover:border-[#BF092F]/50 hover:bg-white/[0.02] transition-all"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#BF092F]" aria-hidden="true" />
                            <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                              {item.name}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-4 py-2 px-4 bg-white/5 border border-white/10 rounded-lg mb-7">
                        <Settings className="text-[#BF092F]" size={20} aria-hidden="true" />
                        <h5 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">
                          Project Support
                        </h5>
                      </div>
                      <p className="text-[10px] text-white/40 font-medium uppercase tracking-[0.15em] leading-relaxed">
                        Ancillary components for global grid standards.
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {[
                        { name: "Vibration Control" },
                        { name: "Thermal Insulation" },
                        { name: "Acoustic Louvres" },
                      ].map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center justify-between group/item p-4 border border-white/5 rounded-xl hover:border-[#BF092F]/50 hover:bg-white/[0.02] transition-all"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#BF092F]" aria-hidden="true" />
                            <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                              {item.name}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] text-white/30 uppercase tracking-widest font-black">
                      UK Governance
                    </span>
                    <span className="text-[10px] text-white/60 uppercase font-bold tracking-widest underline decoration-[#BF092F] decoration-2 underline-offset-4">
                      PROJECT ASSURED
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] text-white/30 uppercase tracking-widest font-black">
                      Fulfillment
                    </span>
                    <span className="text-[10px] text-white/60 uppercase font-bold tracking-widest">
                      Worldwide Logistics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-6 ${revealClass(showSpecs, "duration-[1200ms] delay-500")}`}
        >
          <aside className="bg-gray-50 p-8 rounded-2xl flex items-center gap-6 group hover:bg-white transition-all border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl">
            <div className="w-16 h-16 bg-[#44444E] rounded-xl flex items-center justify-center text-[#BF092F]">
              <Globe size={32} aria-hidden="true" />
            </div>
            <div>
              <h5 className="font-bold text-[#44444E] uppercase text-sm tracking-widest">
                Global Network
              </h5>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                High-capacity manufacturing via UK-led facilities.
              </p>
            </div>
          </aside>
          <aside className="bg-gray-50 p-8 rounded-2xl flex items-center gap-6 group hover:bg-white transition-all border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl">
            <div className="w-16 h-16 bg-[#BF092F] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#BF092F]/20">
              <ShieldCheck size={32} aria-hidden="true" />
            </div>
            <div>
              <h5 className="font-bold text-[#44444E] uppercase text-sm tracking-widest">
                UK Quality Assurance
              </h5>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                All projects managed to British engineering standards.
              </p>
            </div>
          </aside>
        </div>       
      </div>
    </section>
  );
}

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

function TechItem({ icon: Icon, text }) {
  return (
    <li className="flex items-center gap-4 group/item">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-[#BF092F] transition-all border border-white/10 group-hover/item:border-transparent">
        <Icon
          size={16}
          className="text-[#BF092F] group-hover/item:text-white transition-colors"
          aria-hidden="true"
        />
      </div>
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 group-hover/item:text-white transition-colors">
        {text}
      </span>
    </li>
  );
}