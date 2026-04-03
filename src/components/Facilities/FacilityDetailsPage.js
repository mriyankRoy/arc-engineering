import { useParams, useNavigate } from "react-router";
import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { facilities } from "../../utils/facilities";
import {
  MapPin,
  ShieldCheck,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  Layers,
  ArrowLeft,
  ChartArea,
} from "lucide-react";

export default function FacilityDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const facility = facilities.find((f) => f.id === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [id]);

  // SEO: Industrial Hub Schema
  const hubSchema = facility
    ? {
        "@context": "https://schema.org",
        "@type": "IndustrialBusiness",
        name: `${facility.title} | Arc Engineering Solutions Ltd`,
        description: facility.desc,
        address: {
          "@type": "PostalAddress",
          addressLocality: facility.location,
          addressCountry: facility.location.includes("UK") ? "GB" : "Global",
        },
      }
    : null;

  const allImages = facility
    ? [
        ...facility.facilityImg.map((img) => ({
          img,
          title: "Infrastructure View",
          desc: facility.title,
        })),
        ...(facility.capabilityImg || []),
      ]
    : [];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const showNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    },
    [allImages.length],
  );

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setCurrentIndex(
        (prev) => (prev - 1 + allImages.length) % allImages.length,
      );
    },
    [allImages.length],
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, showNext, showPrev]);

  if (!facility) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#F8F9FA]">
        <h1 className="text-4xl font-bold text-[#44444E]">
          404 // FACILITY_NOT_FOUND
        </h1>
        <button
          onClick={() => navigate("/facilities")}
          className="mt-6 px-8 py-3 bg-[#BF092F] text-white rounded-xl font-bold"
        >
          Return to Terminal
        </button>
      </div>
    );
  }

  const currentData = allImages[currentIndex];

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      <Helmet>
        <html lang="en-GB" />
        <title>{`${facility.title} | Infrastructure & Capabilities | Arc Engineering`}</title>
        <meta
          name="description"
          content={`Technical specifications for ${facility.title} in ${facility.location}. High-capacity manufacturing for Generator Containers and E-Houses to British Standards.`}
        />
        <meta
          name="keywords"
          content={`Arc Engineering ${facility.location}, Industrial Fabrication ${facility.location}, E-House Manufacturing, Generator Container Production`}
        />
        <script type="application/ld+json">{JSON.stringify(hubSchema)}</script>
      </Helmet>

      {/* 🔍 LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1E]/95 backdrop-blur-xl md:p-4"
          onClick={closeLightbox}
        >
          {/* Close Button - Moved for better thumb-reach on mobile */}
          <button
            onClick={closeLightbox}
            className="cursor-pointer absolute top-6 right-6 text-white/50 hover:text-[#BF092F] transition-all z-[120] group"
          >
            <X
              size={32}
              className="md:w-10 md:h-10 group-hover:rotate-90 transition-transform"
            />
          </button>

          <div
            className="w-full h-full md:h-auto max-w-7xl flex flex-col items-center justify-center gap-4 md:gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex items-center justify-center group px-4 md:px-24">
              {/* Navigation Buttons - Hidden on very small screens or made smaller */}
              <button
                onClick={showPrev}
                className="cursor-pointer absolute left-2 md:left-0 text-white/20 hover:text-[#BF092F] transition-all p-2 z-[110] hover:scale-110"
              >
                <ChevronLeft
                  size={40}
                  className="md:w-[60px]"
                  strokeWidth={1}
                />
              </button>

              <div className="relative w-full flex justify-center">
                <img
                  src={currentData?.img}
                  /* Mobile: h-[50vh] or auto width to fill screen 
               Desktop: max-h-[75vh] 
            */
                  className="w-full md:w-auto h-auto max-h-[60vh] md:max-h-[75vh] object-contain select-none rounded-lg md:rounded-2xl shadow-2xl"
                  alt={currentData?.title || "Facility Detail"}
                />
              </div>

              <button
                onClick={showNext}
                className="cursor-pointer absolute right-2 md:right-0 text-white/20 hover:text-[#BF092F] transition-all p-2 z-[110] hover:scale-110"
              >
                <ChevronRight
                  size={40}
                  className="md:w-[60px]"
                  strokeWidth={1}
                />
              </button>
            </div>

            {/* Info Card - Optimized for mobile height */}
            <div className="w-[90%] md:w-full max-w-4xl bg-[#44444E] border border-white/10 p-5 md:p-6 rounded-2xl shadow-2xl">
              <div className="flex items-start justify-between gap-4 md:gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1 md:mb-2">
                    <div className="h-3 w-1 bg-[#BF092F]" />
                    <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-sm">
                      {currentData?.title || "Operational View"}
                    </h4>
                  </div>
                  <p className="text-white/60 leading-relaxed font-light tracking-wide italic text-xs md:text-sm">
                    {currentData?.desc ||
                      "Technical documentation for " + facility.title}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-white/40 text-[10px] md:text-[12px] font-black tracking-tighter">
                    {currentIndex + 1} / {allImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🏗️ HERO SECTION */}
      <div className="pt-22 px-2 md:px-2">
        <header className="shadow-xl relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <nav
              className="hidden md:flex items-center flex-wrap gap-3 mb-6"
              aria-label="Breadcrumb"
            >
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer group flex items-center gap-1 text-white/50 hover:text-white transition-colors"
              >
                <Home size={14} />
                <span className="text-[10px] md:text-xs tracking-widest uppercase">
                  Home
                </span>
              </button>
              <span
                className="text-white/20 text-xs font-mono"
                aria-hidden="true"
              >
                {">"}
              </span>
              <button
                onClick={() => navigate("/facilities")}
                className="cursor-pointer text-[10px] md:text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              >
                Facilities
              </button>
              <span
                className="text-white/20 text-xs font-mono"
                aria-hidden="true"
              >
                {">"}
              </span>
              <span className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg">
                {facility.title}
              </span>
            </nav>

            <h1
              className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {facility.title.split(" ")[0]}{" "}
              <span className="text-[#BF092F]">
                {facility.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-4 max-w-3xl font-medium">
              Technical infrastructure data for operational unit:{" "}
              {facility.title}.
            </p>
          </div>
        </header>
      </div>

      {/* 🏭 MAIN CONTENT */}
      <main className="container mx-auto -translate-y-12 relative z-30 pb-20">
        <div className="pt-20 px-4 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch">
          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="rounded-2xl bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] lg:sticky lg:top-28 overflow-hidden">
              <div className="p-5 border-b border-white/10 w-full overflow-hidden">
                <label className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-black block mb-3">
                  Facility Registry
                </label>
                <div className="relative group w-full">
                  <select
                    value={facility.id}
                    onChange={(e) => navigate(`/facilities/${e.target.value}`)}
                    className="w-full bg-white/5 border border-white/10 pl-4 pr-12 py-3 rounded-xl text-white text-sm font-bold appearance-none cursor-pointer hover:bg-white/10 transition-all"
                  >
                    {facilities.map((f) => (
                      <option key={f.id} value={f.id} className="bg-[#1A1A1E]">
                        {f.title}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronRight
                      size={14}
                      className="rotate-90 text-[#BF092F]"
                    />
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <SidebarStat
                  label="Location"
                  value={facility.location}
                  icon={<MapPin size={16} />}
                />
                <SidebarStat
                  label="Total Area"
                  value={facility.totalArea}
                  icon={<ChartArea size={16} />}
                />
                <SidebarStat
                  label="Standards"
                  value={facility.productionCapacity}
                  icon={<ShieldCheck size={16} />}
                />
              </div>

              <div className="p-8 bg-black/20">
                <button
                  onClick={() => navigate("/facilities")}
                  className="cursor-pointer w-full py-4 bg-[#BF092F] text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-[#44444E] transition-all"
                >
                  <ArrowLeft size={14} /> Back to Registry
                </button>
              </div>
            </div>
          </aside>

          {/* MAIN COLUMN */}
          <section className="lg:col-span-8 space-y-16 md:space-y-24 lg:pl-12 xl:pl-20 py-10 px-4 sm:px-6 lg:px-0">
            {/* 01. OPERATIONAL INTELLIGENCE */}
            <article className="relative group">
              <header className="mb-14 relative">
                <span className="absolute -left-6 -top-10 text-[130px] font-black text-gray-100/40 select-none pointer-events-none group-hover:text-[#BF092F]/10 transition-all duration-700 font-mono">
                  01
                </span>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="h-[3px] w-12 bg-[#BF092F]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#BF092F]">
                      Operational_Intelligence
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-[#44444E] tracking-tighter uppercase leading-none flex flex-col md:flex-row md:items-baseline gap-2">
                    <span>Infrastructure</span>
                    <span
                      className="text-transparent"
                      style={{ WebkitTextStroke: "1px #44444E", opacity: 0.3 }}
                    >
                      Capabilities_
                    </span>
                  </h2>
                  <div className="mt-8 h-[1px] w-full bg-gray-100" />
                </div>
              </header>
              <p className="text-lg md:text-xl leading-relaxed text-gray-500 font-medium tracking-tight max-w-4xl">
                {facility.desc}
              </p>
            </article>

            {/* 02. VISUAL LOGS */}
            <article className="space-y-8 relative group">
              <header className="mb-14 relative">
                <span className="absolute -left-6 -top-10 text-[130px] font-black text-gray-100/40 select-none pointer-events-none group-hover:text-[#BF092F]/10 transition-all duration-700 font-mono">
                  02
                </span>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="h-[3px] w-12 bg-[#BF092F]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#BF092F]">
                      Visual_Telemetry
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-[#44444E] tracking-tighter uppercase leading-none flex flex-col md:flex-row md:items-baseline gap-2">
                    <span>Site</span>
                    <span
                      className="text-transparent"
                      style={{ WebkitTextStroke: "1px #44444E", opacity: 0.3 }}
                    >
                      Gallery_
                    </span>
                  </h2>
                  <div className="mt-8 h-[1px] w-full bg-gray-100" />
                </div>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {facility.facilityImg.map((src, index) => (
                  <figure
                    key={index}
                    className="group/img relative aspect-square rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={src}
                      className="w-full h-full object-cover grayscale-[0.3] group-hover/img:grayscale-0 transition-all duration-1000 group-hover/img:scale-110"
                      alt="Facility"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#44444E]/40 opacity-0 group-hover/img:opacity-100 transition-all flex items-center justify-center">
                      <Maximize2 className="text-white" size={24} />
                    </div>
                  </figure>
                ))}
              </div>
            </article>

            {/* 03. TECHNICAL REGISTRY */}
            <article className="pt-20 border-t border-gray-100 relative group">
              <header className="mb-14 relative">
                <span className="absolute -left-6 -top-10 text-[130px] font-black text-gray-100/40 select-none pointer-events-none group-hover:text-[#BF092F]/10 transition-all duration-700 font-mono">
                  03
                </span>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="h-[3px] w-12 bg-[#BF092F]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#BF092F]">
                      Asset_Registry
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-[#44444E] tracking-tighter uppercase leading-none flex flex-col md:flex-row md:items-baseline gap-2">
                    <span>Tech</span>
                    <span
                      className="text-transparent"
                      style={{ WebkitTextStroke: "1px #44444E", opacity: 0.3 }}
                    >
                      Machinery_
                    </span>
                  </h2>
                  <div className="mt-8 h-[1px] w-full bg-gray-100" />
                </div>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {facility.capabilityImg?.map((cap, index) => (
                  <article
                    key={index}
                    className="group/cap cursor-pointer"
                    onClick={() =>
                      openLightbox(facility.facilityImg.length + index)
                    }
                  >
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-md group-hover/cap:shadow-2xl transition-all duration-1000 border border-gray-50">
                      <img
                        src={cap.img}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/cap:scale-110"
                        alt={cap.title}
                      />
                      <div className="absolute bottom-0 left-0 bg-[#BF092F] text-white p-3 rounded-tr-2xl shadow-lg">
                        <ShieldCheck size={18} />
                      </div>
                    </div>
                    <div className="px-2">
                      <h4 className="text-xl font-black text-[#44444E] uppercase tracking-tighter group-hover/cap:text-[#BF092F] transition-colors">
                        {cap.title}
                      </h4>
                      <p className="text-gray-500 text-sm font-medium italic mt-2">
                        {cap.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>

      <div
        className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
        aria-hidden="true"
      />
    </div>
  );
}

function SidebarStat({ label, value, icon }) {
  return (
    <div className="bg-white/5 p-4 rounded-xl border border-white/5 group hover:border-[#BF092F]/50 transition-colors">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-[#BF092F]" aria-hidden="true">
          {icon}
        </span>
        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
          {label}
        </span>
      </div>
      <p className="text-white font-bold tracking-wide">{value}</p>
    </div>
  );
}
