import React, { useState, useRef } from "react";
import { facilities } from "../../utils/facilities";
import { ArrowRight, Activity, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async"; // SEO: Added Helmet
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

function KineticCard({ data, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax and Opacity
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.article
      ref={ref}
      style={{ opacity }}
      // sticky top-24 pins it closer to the top for a "Full Screen" feel
      // w-full here fills the 95% width of the parent container
      className="relative w-full h-[75vh] min-h-[550px] overflow-hidden rounded-2xl bg-white shadow-2xl sticky top-24"
    >
      {/* 🖼️ IMAGE LAYER (Full Color & High Width) */}
      <div className="absolute inset-0 overflow-hidden bg-gray-100">
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-[-12%] w-[124%] h-[124%]"
        >
          <img
            src={data.facilityImg[0]}
            alt={data.title}
            className="w-full h-full object-cover" // Full color
          />
        </motion.div>

        {/* SHORT SHADOW SCRIM: Dense at bottom, vanishes by 45% height */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent via-45%" />
      </div>

      {/* 🖋️ CONTENT LAYER */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
        {/* Top Index */}
        <div className="absolute top-8 left-10 flex items-center gap-3">
          <span className="text-[12px] font-black tracking-[0.5em] text-white/40">
            0{index + 1}
          </span>
          <div className="w-10 h-[1.5px] bg-[#BF092F]" />
        </div>

        {/* Text Box */}
        <div className="relative z-10 w-full">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={14} className="text-[#BF092F]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
              {data.location}
            </span>
          </div>

          <h4 className="text-4xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
            {data.title}
          </h4>

          {/* Expanded Stats Row */}
          <div className="grid grid-cols-2 gap-8 mb-10 pt-8 border-t border-white/10">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mb-2 font-black">
                Total Area
              </p>
              <p className="text-sm font-bold tracking-tight">
                {data.totalArea}
              </p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mb-2 font-black">
                Production
              </p>
              <p className="text-sm font-bold tracking-tight">
                {data.productionCapacity}
              </p>
            </div>
          </div>

          {/* Action Button: Matches the extra width with a larger tap area */}
          <Link
            to={`/facilities/${data.id}`}
            className="flex items-center justify-between group bg-white text-[#44444E] h-16 px-8 rounded-xl font-black text-[11px] uppercase tracking-[0.3em] shadow-2xl active:scale-95 transition-all"
          >
            Explore Technicals
            <div className="bg-[#BF092F] p-2 rounded-full text-white">
              <ArrowRight
                size={20}
                strokeWidth={3}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Progress Base */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#BF092F] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.article>
  );
}
export default function FacilitiesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // SEO: Structured Data for Manufacturing Facilities
  const facilitySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Arc Engineering Global Manufacturing Facilities",
    itemListElement: facilities.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "LocalBusiness",
        name: f.title,
        image: f.facilityImg[0],
        address: {
          "@type": "PostalAddress",
          addressLocality: f.location,
        },
        description: `ISO-certified production facility specializing in ${f.highlights?.join(", ")}`,
      },
    })),
  };

  return (
    <section
      className="bg-[#fcfcfc] py-24 px-6 md:px-20 text-[#44444E]"
      aria-labelledby="facilities-title"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(facilitySchema)}
        </script>
      </Helmet>

      {/* 🏗️ HEADER */}
      <header className="max-w-[1400px] mx-auto mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-8 w-1 bg-[#BF092F]" aria-hidden="true" />
          <Activity
            size={14}
            className="text-[#BF092F] animate-pulse"
            aria-hidden="true"
          />
          <h2 className="text-sm uppercase font-bold tracking-[0.4em]">
            Global Infrastructure
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h3
            id="facilities-title"
            className="text-3xl md:text-5xl font-semibold leading-tight uppercase tracking-tight"
          >
            The <span className="text-[#BF092F]">Engine</span> <br /> of
            Production
          </h3>
          <p className="max-w-md text-[#44444E]/50 font-bold uppercase tracking-widest text-[10px] leading-relaxed pb-1 border-l-2 border-[#44444E]/10 pl-6 lg:ml-8">
            Precision <strong>manufacturing</strong> via ISO-certified
            high-capacity terminals and <strong>industrial fabrication</strong>{" "}
            hubs.
          </p>
        </div>
      </header>

      {/* 📱 EXPANSIVE MOBILE LAYOUT */}
      <div className="lg:hidden w-full flex flex-col items-center pb-20">
        <div className="w-[99%] flex flex-col gap-10">
          {facilities.map((f, i) => (
            <KineticCard key={f.id} data={f} index={i} />
          ))}
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex max-w-[1400px] mx-auto gap-32 relative">
        <aside
          className="w-1/2 sticky top-[calc(50vh-300px)] h-[600px] z-10"
          aria-hidden="true"
        >
          <div className="w-full h-full rounded-[2rem] p-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] bg-black ring-1 ring-white/5 ring-inset overflow-hidden relative">
            {facilities.map((f, i) => (
              <motion.img
                key={f.id}
                src={f.facilityImg[0]}
                alt="" // Decorative in this context as the text section handles the SEO
                animate={{ opacity: activeIndex === i ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ))}
            <div className="absolute inset-0 rounded-[2rem] border-[1px] border-white/10 pointer-events-none" />
          </div>
        </aside>

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1 && latest < 0.9) onActive();
  });

  return (
    <article
      ref={ref}
      className={`relative mb-12 ${isMobile ? "pl-0" : "pl-12 min-h-[80vh]"}`}
    >
      <div
        className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#44444E]/10 ${isMobile ? "hidden" : "block"}`}
        aria-hidden="true"
      >
        <motion.div className="w-full bg-[#BF092F]" style={{ height }} />
        <motion.div
          className="absolute -left-[5px] w-[12px] h-[12px] rounded-full border-[3px] border-[#BF092F] bg-white z-10"
          style={{ top: height }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(191,9,47,0)", // Shadow is gone
              "0 0 15px rgba(191,9,47,0.8)", // Shadow is at max
              "0 0 0px rgba(191,9,47,0)", // Shadow is gone again
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="bg-white p-8 rounded-3xl border border-[#eeeeee] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)]">
        <header>
          <span className="text-[#BF092F] font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
            0{index + 1} // Infrastructure
          </span>
          <h4 className="text-3xl font-bold text-[#44444E] uppercase tracking-tighter mb-4">
            {data.title}
          </h4>

          <div className="flex items-center gap-2 text-[#44444E]/40 mb-6">
            <MapPin size={12} className="text-[#BF092F]" aria-hidden="true" />
            <address className="text-[10px] font-bold uppercase tracking-widest not-italic">
              {data.location}
            </address>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#f8f8f8] p-4 rounded-2xl border border-[#f0f0f0]">
            <span className="block text-[8px] font-bold text-[#44444E]/40 uppercase mb-1">
              Total Area
            </span>
            <span className="text-xs font-black text-[#44444E]">
              {data.totalArea}
            </span>
          </div>
          <div className="bg-[#f8f8f8] p-4 rounded-2xl border border-[#f0f0f0]">
            <span className="block text-[8px] font-bold text-[#44444E]/40 uppercase mb-1">
              Production Capacity
            </span>
            <span className="text-xs font-black text-[#44444E]">
              {data.productionCapacity}
            </span>
          </div>
        </div>

        <ul className="space-y-3 mb-8" aria-label="Facility Highlights">
          {data.highlights?.slice(0, 3).map((text, idx) => (
            <li key={idx} className="flex items-center gap-3 text-[#44444E]/60">
              <CheckCircle2
                size={14}
                className="text-[#BF092F] flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-[10px] font-medium uppercase tracking-wide">
                {text}
              </span>
            </li>
          ))}
        </ul>

        <Link
          to={`/facilities/${data.id}`}
          title={`View technical specifications for ${data.title}`}
          className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#BF092F] group"
        >
          Explore Unit{" "}
          <ArrowRight
            size={16}
            className="group-hover:translate-x-2 transition-transform duration-300"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
