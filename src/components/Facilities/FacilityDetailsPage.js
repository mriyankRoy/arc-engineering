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
          <aside className="lg:col-span-4 space-y-8">
            <div className="rounded-2xl bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] lg:sticky lg:top-28 overflow-hidden transition-all duration-500">
              {/* 📱 MOBILE FACILITY SELECTOR (Visible only on mobile) */}
              <div className="p-6 lg:hidden border-b border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Layers
                    size={16}
                    className="text-[#BF092F]"
                    aria-hidden="true"
                  />
                  <h2 className="text-[11px] text-white tracking-[0.4em] uppercase font-bold">
                    Select Facility
                  </h2>
                </div>

                <div className="relative">
                  <select
                    value={facility.id}
                    onChange={(e) => navigate(`/facilities/${e.target.value}`)}
                    className="w-full bg-white/5 border border-white/10 text-white text-[12px] uppercase tracking-[0.2em] px-4 py-4 pr-10 rounded-xl cursor-pointer focus:outline-none focus:border-[#BF092F] appearance-none"
                  >
                    {facilities.map((f) => (
                      <option key={f.id} value={f.id} className="bg-[#44444E]">
                        {f.title}
                      </option>
                    ))}
                  </select>
                  {/* Custom Arrow for select */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#BF092F]">
                    <ChevronRight size={14} className="rotate-90" />
                  </div>
                </div>
              </div>

              {/* 🖥️ DESKTOP REGISTRY VIEW (Hidden on mobile) */}
              <div className="hidden lg:block">
                <div className="p-8 border-b border-white/10">
                  <div className="flex items-center gap-3 mb-8">
                    <Layers
                      size={16}
                      className="text-[#BF092F]"
                      aria-hidden="true"
                    />
                    <h2 className="text-[12px] text-white tracking-[0.4em] uppercase font-bold">
                      Facility Registry
                    </h2>
                  </div>

                  <div className="space-y-4">
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

                  {/* Desktop Switcher */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <label
                      htmlFor="unit-switch-desktop"
                      className="text-[11px] text-white/40 tracking-[0.3em] uppercase block mb-3 font-bold"
                    >
                      Switch Unit
                    </label>
                    <select
                      id="unit-switch-desktop"
                      value={facility.id}
                      onChange={(e) =>
                        navigate(`/facilities/${e.target.value}`)
                      }
                      className="rounded-xl w-full bg-black/20 border border-white/10 p-3 text-white outline-none focus:border-[#BF092F] cursor-pointer text-sm font-bold"
                    >
                      {facilities.map((f) => (
                        <option
                          key={f.id}
                          value={f.id}
                          className="bg-[#44444E]"
                        >
                          {f.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="p-8 bg-black/20">
                  <button
                    onClick={() => navigate("/facilities")}
                    className="cursor-pointer w-full py-4 bg-[#BF092F] text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-xl shadow-lg hover:bg-white hover:text-[#44444E] transition-all flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={14} /> Back to Registry
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <section className="lg:col-span-8 space-y-16 md:space-y-24 lg:pl-12 xl:pl-20 py-10 px-4 sm:px-6 lg:px-0">
            {/* 01. OPERATIONAL INTELLIGENCE: OVERVIEW */}
            <article className="relative">
              <header className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-[1px] bg-[#BF092F]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#BF092F]">
                    Operational_Intelligence
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#44444E] tracking-tight leading-none mb-6">
                  Infrastructure{" "}
                  <span className="text-gray-300 font-light italic">
                    Capabilities.
                  </span>
                </h2>
              </header>

              <div className="relative">
                <p className="text-lg md:text-xl leading-relaxed text-gray-500 font-medium tracking-tight max-w-4xl border-l-2 border-gray-100 pl-8 py-1">
                  {facility.desc}
                </p>
              </div>
            </article>

            {/* 02. VISUAL LOGS: SITE GALLERY */}
            <article className="space-y-6">
              <div className="flex items-end justify-between px-2">
                <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-300">
                  Site_Telemetry_Logs
                </h3>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest hidden sm:block">
                    Unit_ID: {facility.id}
                  </span>
                  <span className="text-[10px] font-black text-[#44444E] bg-gray-50 px-3 py-1 rounded-full">
                    COUNT // {facility.facilityImg.length}
                  </span>
                </div>
              </div>

              {/* Modern Grid with refined spacing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {facility.facilityImg.map((src, index) => (
                  <figure
                    key={index}
                    className="group relative aspect-square rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={src}
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                      alt={`${facility.title} view ${index + 1}`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#44444E]/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                      <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                        <Maximize2
                          className="text-white"
                          size={20}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </figure>
                ))}
              </div>
            </article>

            {/* 03. TECHNICAL REGISTRY: SYSTEMS & MACHINERY */}
            <article className="pt-20 border-t border-gray-100">
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#44444E] tracking-tight uppercase">
                  Capabilities{" "}
                  <span className="text-gray-300 font-light italic">
                    & Machineries.
                  </span>
                </h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-2 font-bold">
                  Deployment of critical industrial assets
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {facility.capabilityImg?.map((cap, index) => {
                  const actualIndex = facility.facilityImg.length + index;
                  return (
                    <article
                      key={index}
                      onClick={() => openLightbox(actualIndex)}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-6 shadow-md group-hover:shadow-2xl transition-all duration-1000 border border-gray-50">
                        <img
                          src={cap.img}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          alt={cap.title}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />

                        <div className="absolute bottom-0 left-0 bg-[#BF092F] text-white p-3 rounded-tr-2xl shadow-lg">
                          <ShieldCheck size={18} strokeWidth={2} />
                        </div>
                      </div>

                      <div className="px-2">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[9px] font-black text-[#BF092F] uppercase tracking-[0.4em]">
                            Capability_0{index + 1}
                          </span>
                          <div className="h-px flex-1 bg-gray-100" />
                        </div>
                        <h4 className="text-xl font-bold text-[#44444E] uppercase tracking-tight group-hover:text-[#BF092F] transition-colors mb-2">
                          {cap.title}
                        </h4>
                        <p className="text-gray-500 leading-relaxed text-sm font-medium tracking-wide italic">
                          {cap.desc}
                        </p>
                      </div>
                    </article>
                  );
                })}
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
