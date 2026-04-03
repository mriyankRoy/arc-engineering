import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import { Helmet } from "react-helmet-async"; // SEO Layer
import {
  MapPin,
  Tag,
  X,
  FileText,
  Calendar,
  Layers,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Home,
  Maximize2,
  ArrowLeft,
  Activity,
} from "lucide-react";
import { projects } from "../../utils/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects
    .flatMap((cat) => cat.projects)
    .find((p) => String(p.id) === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Find current category and projects (from previous step)
  const currentCategory = projects.find((cat) =>
    cat.projects.some((p) => String(p.id) === id),
  );

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [id]);

  // SEO: Technical Log Schema
  const technicalLogSchema = project
    ? {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: project.name,
        image: project.imageUrls,
        author: {
          "@type": "Organization",
          name: "Arc Engineering Solutions Ltd",
        },
        description: Array.isArray(project.description[0])
          ? project.description[1]
          : project.description[0],
        publisher: {
          "@type": "Organization",
          name: "Arc Engineering Solutions Ltd",
          logo: {
            "@type": "ImageObject",
            url: "https://arcengltd.com/logo.png",
          },
        },
      }
    : null;

  const showNext = useCallback(
    (e) => {
      e?.stopPropagation();
      if (project?.imageUrls) {
        setCurrentIndex((prev) => (prev + 1) % project.imageUrls.length);
      }
    },
    [project?.imageUrls],
  );

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      if (project?.imageUrls) {
        setCurrentIndex(
          (prev) =>
            (prev - 1 + project.imageUrls.length) % project.imageUrls.length,
        );
      }
    },
    [project?.imageUrls],
  );

  const getRandomProjects = useCallback(() => {
    let siblings =
      currentCategory?.projects.filter((p) => String(p.id) !== id) || [];
    let others = projects
      .filter((cat) => cat.categoryName !== currentCategory?.categoryName)
      .flatMap((cat) => cat.projects);

    const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

    // Combine all, shuffle, and take the top 5
    return shuffle([...siblings, ...others]).slice(0, 5);
  }, [id, currentCategory, projects]);

  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    setRelatedProjects(getRandomProjects());
  }, [id, getRandomProjects]);

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

  if (!project)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA]">
        <h1 className="text-4xl font-bold text-[#44444E]">
          404 // LOG_NOT_FOUND
        </h1>
        <button
          onClick={() => navigate("/projects")}
          className="mt-6 px-8 py-3 bg-[#BF092F] text-white rounded-xl font-bold"
        >
          Return to Terminal
        </button>
      </div>
    );

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const specs = [
    { label: "Client", value: project?.client, icon: <FileText size={16} /> },
    { label: "Category", value: project?.type, icon: <Tag size={16} /> },
    { label: "Location", value: project?.location, icon: <MapPin size={16} /> },
    { label: "Log ID", value: project?.id, icon: <Calendar size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      <Helmet>
        <title>{`${project.name} | Case Study | Arc Engineering`}</title>
        <meta
          name="description"
          content={`Technical field log for ${project.name} in ${project.location}. Deployment of ${project.type} systems by Arc Engineering.`}
        />
        <script type="application/ld+json">
          {JSON.stringify(technicalLogSchema)}
        </script>
      </Helmet>

      {/* 🔍 ENHANCED LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1E]/95 backdrop-blur-xl p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="cursor-pointer absolute top-10 right-10 text-white/50 hover:text-[#BF092F] transition-all z-[110] group"
          >
            <X
              size={40}
              className="group-hover:rotate-90 transition-transform"
            />
          </button>

          <div
            className="max-w-7xl w-full flex flex-col items-center gap-2 md:gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-center group px-0 md:px-24">
              <button
                onClick={showPrev}
                className="cursor-pointer absolute left-0 text-white/20 hover:text-[#BF092F] transition-all p-2 z-[110] hover:scale-110"
              >
                <ChevronLeft size={60} strokeWidth={1} />
              </button>

              <div className="relative border border-white/10 shadow-2xl rounded-2xl overflow-hidden">
                <img
                  src={project.imageUrls[currentIndex]}
                  className="max-h-[70vh] md:max-h-[65vh] w-auto block select-none"
                  alt="Technical View"
                />
              </div>

              <button
                onClick={showNext}
                className="cursor-pointer absolute right-0 text-white/20 hover:text-[#BF092F] transition-all p-2 z-[110] hover:scale-110"
              >
                <ChevronRight size={60} strokeWidth={1} />
              </button>
            </div>

            <div className="w-full max-w-4xl bg-[#44444E] border border-white/10 p-3 md:p-6 rounded-2xl shadow-2xl shrink-0">
              <div className="flex items-start justify-between gap-4 md:gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1 md:mb-2">
                    <div className="h-4 w-1 bg-[#BF092F]" />
                    <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-sm">
                      Field Documentation View
                    </h4>
                  </div>
                  <p className="text-white/60 leading-relaxed text-[11px] md:text-base italic">
                    Project: {project.name}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-white/40 text-[10px] md:text-[12px] tracking-tighter font-black">
                    {currentIndex + 1} / {project.imageUrls.length}
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
            <nav className="hidden md:flex items-center flex-wrap gap-3 mb-6">
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer group flex items-center gap-1 text-white/50 hover:text-white transition-colors"
              >
                <Home size={14} />
                <span className="text-[10px] md:text-xs tracking-widest uppercase">
                  Home
                </span>
              </button>
              <span className="text-white/20 text-xs font-mono">{">"}</span>
              <button
                onClick={() => navigate("/projects")}
                className="cursor-pointer text-[10px] md:text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              >
                Project Registry
              </button>
              <span className="text-white/20 text-xs font-mono">{">"}</span>
              <button
                onClick={() => navigate(`/projects?type=${project.type}`)}
                className="cursor-pointer text-[10px] md:text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              >
                {project.type}
              </button>
              <span className="text-white/20 text-xs font-mono">{">"}</span>
              <button className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg shadow-[#BF092F]/20">
                {project.name.length > 25
                  ? `${project.name.substring(0, 25)}...`
                  : project.name}
              </button>
            </nav>

            <h1
              className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {project.name}
            </h1>
            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-4 max-w-3xl font-medium">
              Technical field log and deployment data for site ID: {project.id}.
            </p>
          </div>
        </header>
      </div>

      {/* 🏭 CONTENT AREA */}
      <main className="container mx-auto -translate-y-12 relative z-30 pb-20">
        <div className="pt-20 px-4 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch">
          <aside className="lg:col-span-4 space-y-8">
            <div className="rounded-2xl bg-[#44444E] shadow-2xl border-t-4 border-[#BF092F] lg:sticky lg:top-28 overflow-hidden transition-all duration-500">
              {/* 🛠️ SCREEN-SAFE TECHNICAL SELECT */}
              <div className="p-5 border-b border-white/10 w-full overflow-hidden">
                <label
                  htmlFor="project-switcher"
                  className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-black block mb-3"
                >
                  Project Registry
                </label>

                <div className="relative group w-full max-w-full">
                  <select
                    id="project-switcher"
                    value={id}
                    onChange={(e) => navigate(`/projects/${e.target.value}`)}
                    className="w-full max-w-full bg-white/5 border border-white/10 pl-4 pr-12 py-3 rounded-xl 
                     text-white text-sm font-bold appearance-none cursor-pointer 
                     focus:outline-none focus:ring-1 focus:ring-[#BF092F] transition-all 
                     hover:bg-white/10 truncate box-border"
                    style={{ textOverflow: "ellipsis" }}
                  >
                    <optgroup
                      label={currentCategory?.categoryName || "Categories"}
                      className="bg-[#1A1A1E]"
                    >
                      {currentCategory?.projects.map((p) => (
                        <option
                          key={p.id}
                          value={p.id}
                          className="bg-[#1A1A1E] text-white"
                        >
                          {/* We keep this short to ensure it fits the native OS picker */}
                          {p.id} | {p.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>

                  {/* 📐 THE TOGGLE (Pinned to right with safe padding) */}
                  <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3 pointer-events-none">
                    <div className="h-2/3 border-l border-white/10 pl-3 flex items-center">
                      <ChevronRight
                        size={14}
                        className="rotate-90 text-[#BF092F] opacity-70 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="p-6 lg:p-8 flex flex-col gap-4 cursor-pointer lg:cursor-default border-b border-white/10"
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    const content = document.getElementById("specs-content");
                    const preview = document.getElementById("mobile-preview");
                    content.classList.toggle("hidden");
                    preview.classList.toggle("hidden");
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Layers size={16} className="text-[#BF092F]" />
                    <h2 className="text-[12px] text-white tracking-[0.4em] uppercase font-bold">
                      Technical Specs
                    </h2>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-white/40 lg:hidden transform rotate-90"
                  />
                </div>

                <div
                  id="mobile-preview"
                  className="flex flex-col gap-2 lg:hidden border-t border-white/5 pt-4"
                >
                  <dl className="flex flex-col gap-2">
                    {" "}
                    {/* dl = Definition List */}
                    <div className="flex items-center gap-2">
                      <FileText
                        size={12}
                        className="text-[#BF092F]"
                        aria-hidden="true"
                      />
                      <dt className="text-[10px] text-white/50 uppercase font-bold tracking-wider">
                        Client:
                      </dt>
                      <dd className="text-[10px] text-white font-bold">
                        {project?.client}
                      </dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag
                        size={12}
                        className="text-[#BF092F]"
                        aria-hidden="true"
                      />
                      <dt className="text-[10px] text-white/50 uppercase font-bold tracking-wider">
                        Category:
                      </dt>
                      <dd className="text-[10px] text-white font-bold">
                        {project?.type}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div id="specs-content" className="hidden lg:block">
                <div className="p-8 space-y-4">
                  {specs.map((spec, i) => (
                    <div
                      key={i}
                      className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#BF092F]/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[#BF092F]">{spec.icon}</span>
                        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                          {spec.label}
                        </span>
                      </div>
                      <p className="text-white font-bold tracking-wide">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-black/20">
                  <button
                    onClick={() => navigate(`/projects?type=${project.type}`)}
                    className="cursor-pointer w-full py-4 bg-[#BF092F] text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-[#44444E] transition-all shadow-lg"
                  >
                    <ArrowLeft size={14} /> Back to Registry
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <section className="lg:col-span-8 space-y-16 md:space-y-24 lg:pl-12 xl:pl-20 py-10 px-4 sm:px-6 lg:px-0">
            {/* 01. THE DOSSIER: MINIMALIST DESCRIPTION */}
            <article className="relative group">
              <header className="mb-14 relative">
                {/* Background Ghost Number */}
                <span className="absolute -left-6 -top-10 text-[130px] font-black text-gray-100/40 select-none pointer-events-none group-hover:text-[#BF092F]/10 transition-all duration-700 font-mono">
                  01
                </span>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="h-[3px] w-12 bg-[#BF092F]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#BF092F]">
                      Technical_Summary
                    </span>
                  </div>

                  {/* SOLID / OUTLINE COMBO */}
                  <h2 className="text-2xl md:text-4xl font-black text-[#44444E] tracking-tighter uppercase leading-none flex flex-col md:flex-row md:items-baseline gap-2">
                    <span>Project</span>
                    <span
                      className="text-transparent"
                      style={{ WebkitTextStroke: "1px #44444E", opacity: 0.3 }}
                    >
                      Brief_
                    </span>
                  </h2>

                  <div className="mt-8 h-[1px] w-full bg-gray-100" />
                </div>
              </header>

              <div className="grid grid-cols-1 gap-8">
                {project.description.map((desc, idx) =>
                  Array.isArray(desc) ? (
                    <div
                      key={idx}
                      className="grid sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-3xl overflow-hidden shadow-sm"
                    >
                      {desc.map((item, i) => (
                        <div
                          key={i}
                          className="bg-white p-8 hover:bg-gray-50 transition-colors group"
                        >
                          <p className="text-[9px] font-black text-[#BF092F] mb-3 tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                            Feature_0{i + 1}
                          </p>
                          <p className="text-sm font-bold text-[#44444E] leading-relaxed uppercase tracking-normal">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div key={idx} className="relative">
                      {/* Reduced from text-xl/2xl to text-lg/xl for better flow */}
                      <p className="text-lg md:text-xl leading-relaxed text-gray-500 font-medium tracking-tight max-w-3xl">
                        {desc}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </article>

            {/* 02. THE STUDIO: CINEMATIC GALLERY */}
            <article className="space-y-8 relative group">
              <header className="mb-14 relative">
                <span className="absolute -left-6 -top-10 text-[130px] font-black text-gray-100/40 select-none pointer-events-none group-hover:text-[#BF092F]/10 transition-all duration-700 font-mono">
                  02
                </span>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="h-[3px] w-12 bg-[#BF092F]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#BF092F]">
                      Visual_Data_Logs
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-black text-[#44444E] tracking-tighter uppercase leading-none flex flex-col md:flex-row md:items-baseline gap-2">
                    <span>Field</span>
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

              <div
                className="relative group aspect-[16/10] md:aspect-video rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl cursor-zoom-in"
                onClick={() => openLightbox(currentIndex)}
              >
                <img
                  src={project.imageUrls[currentIndex]}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt="Technical View"
                />

                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      showPrev();
                    }}
                    className="cursor-pointer p-4 text-white hover:text-[#BF092F] transition-colors"
                  >
                    <ChevronLeft size={32} strokeWidth={1} />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      showNext();
                    }}
                    className="cursor-pointer p-4 text-white hover:text-[#BF092F] transition-colors"
                  >
                    <ChevronRight size={32} strokeWidth={1} />
                  </button>
                </div>

                <div className="absolute bottom-8 right-8 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center gap-3">
                  <Maximize2 size={14} className="text-[#BF092F]" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#44444E]">
                    Expand View
                  </span>
                </div>
              </div>

              <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide px-2">
                {project.imageUrls.map((url, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`cursor-pointer relative shrink-0 w-28 h-18 rounded-2xl overflow-hidden transition-all duration-500 ${
                      i === currentIndex
                        ? "ring-2 ring-[#BF092F] ring-offset-4 scale-95"
                        : "opacity-30 hover:opacity-100 grayscale hover:grayscale-0"
                    }`}
                  >
                    <img
                      src={url}
                      className="w-full h-full object-cover"
                      alt="Thumbnail"
                    />
                  </button>
                ))}
              </div>
            </article>

            {/* 03. THE DISCOVERY: BORDERLESS SLIDER */}
            <article className="space-y-8 relative group">
              <header className="mb-14 relative">
                {/* Background Ghost Number */}
                <span className="absolute -left-6 -top-10 text-[130px] font-black text-gray-100/40 select-none pointer-events-none group-hover:text-[#BF092F]/10 transition-all duration-700 font-mono">
                  03
                </span>

                <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="h-[3px] w-12 bg-[#BF092F]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#BF092F]">
                        Archive_Discovery
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-black text-[#44444E] tracking-tighter uppercase leading-none flex flex-col md:flex-row md:items-baseline gap-2">
                      <span>Related</span>
                      <span
                        className="text-transparent"
                        style={{
                          WebkitTextStroke: "1px #44444E",
                          opacity: 0.3,
                        }}
                      >
                        Logs_
                      </span>
                    </h3>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => scroll("left")}
                      className="cursor-pointer w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#BF092F] hover:text-white transition-all shadow-sm hover:shadow-lg hover:shadow-[#BF092F]/20"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => scroll("right")}
                      className="cursor-pointer w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#BF092F] hover:text-white transition-all shadow-sm hover:shadow-lg hover:shadow-[#BF092F]/20"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="mt-8 h-[1px] w-full bg-gray-100" />
              </header>

              <div
                ref={scrollContainerRef}
                className="flex gap-10 overflow-x-auto pb-10 scrollbar-hide snap-x"
              >
                {relatedProjects.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/projects/${item.id}`)}
                    className="cursor-pointer group/card shrink-0 w-[85vw] md:w-[420px] snap-start relative"
                  >
                    {/* 🖼️ IMAGE CONTAINER */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-sm group-hover/card:shadow-2xl transition-all duration-700 bg-gray-100">
                      <img
                        src={item.imageUrls[0]}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110 group-hover/card:rotate-1"
                        alt={item.name}
                      />

                      {/* Dark Overlay that fades on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#44444E]/60 to-transparent group-hover/card:opacity-0 transition-opacity duration-500" />

                      {/* Floating Category Tag (Glassmorphism) */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg translate-y-2 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500">
                        <p className="text-[8px] font-black text-white uppercase tracking-[0.2em]">
                          {item.type}
                        </p>
                      </div>

                      {/* Corner "Bracket" decoration */}
                      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white/30 group-hover/card:border-[#BF092F] transition-colors duration-500" />
                    </div>

                    {/* 📝 TEXT CONTENT */}
                    <div className="relative pl-2">
                      {/* ID Stamp */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] uppercase font-bold text-[#BF092F] bg-[#BF092F]/5 px-2 py-0.5 rounded">
                          {item.type}
                        </span>
                        <div className="h-px w-8 bg-gray-100 group-hover/card:w-12 group-hover/card:bg-[#BF092F]/30 transition-all duration-500" />
                      </div>

                      <h4 className="text-xl font-bold text-[#44444E] uppercase tracking-tighter leading-tight group-hover/card:text-[#BF092F] transition-colors duration-300">
                        {item.name}
                      </h4>

                      {/* "View Log" appearing on hover */}
                      <div className="flex items-center gap-2 mt-4 opacity-0 -translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-500 delay-75">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                          VIEW_PROJECT_LOG
                        </span>
                        <ArrowRight size={14} className="text-[#BF092F]" />
                      </div>
                    </div>
                  </div>
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
