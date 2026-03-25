import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, FolderOpen } from "lucide-react";
import { projects } from "../../utils/projects";
import { useNavigate, Link } from "react-router"; // Added Link for SEO discovery

const HeaderProjectsDropdown = () => {
  const navigate = useNavigate();

  // 1. Core State
  const projectTypes = projects.map((cat) => cat.categoryName);
  const [activeType, setActiveType] = useState(projectTypes[0]);
  const [activeProjectId, setActiveProjectId] = useState(
    projects[0]?.projects[0]?.id,
  );

  const activeCategory = projects.find(
    (cat) => cat.categoryName === activeType,
  );
  const filteredProjects = activeCategory ? activeCategory.projects : [];
  const currentProject =
    filteredProjects.find((p) => p.id === activeProjectId) ||
    filteredProjects[0];

  useEffect(() => {
    if (filteredProjects?.length > 0) {
      setActiveProjectId(filteredProjects[0].id);
    }
  }, [activeType, filteredProjects]);

  const HoverEffect = () => (
    <>
      <span className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] -z-10 border border-white/20 shadow-xl" aria-hidden="true" />
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white group-hover:w-1/4 transition-all duration-300 ease-out rounded-full" aria-hidden="true" />
    </>
  );
  
  return (
    <div className="relative group">
      {/* TRIGGER: Semantic link for SEO discovery */}
      <Link
        to="/projects"
        aria-haspopup="true"
        aria-expanded="false"
        className="relative cursor-pointer inline-flex items-center tracking-widest text-white hover:text-white transition-all duration-300 px-2 py-2 text-[12px] lg:text-[13px] uppercase font-medium whitespace-nowrap group focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg"
      >
        <HoverEffect />
        <span className="absolute inset-0 bg-[#BF092F]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20" aria-hidden="true" />
        Projects
        <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180 ml-1" aria-hidden="true" />
      </Link>

      {/* MEGA MENU CONTAINER */}
      <div 
        className="absolute left-[-120px] top-full pt-2 w-[900px] opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 z-50"
        role="menu"
        aria-label="Project Portfolio Submenu"
      >
        <div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl border-t-4 border-[#BF092F] overflow-hidden">
          <div className="grid grid-cols-[260px_1fr_300px]">
            
            {/* 1. SIDEBAR: PROJECT CATEGORIES */}
            <nav className="bg-[#44444E] py-6 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Portfolio Categories">
              <ul className="flex flex-col w-full" role="list">
                {projectTypes.map((type) => (
                  <li key={type} role="none">
                    <Link
                      to={`/projects?type=${encodeURIComponent(type)}`}
                      onMouseEnter={() => setActiveType(type)}
                      className={`cursor-pointer block w-full px-6 py-4 text-left transition-all relative ${
                        activeType === type ? "bg-white text-[#44444E]" : "text-white/60 hover:text-white"
                      }`}
                      title={`View ${type} Engineering Projects`}
                    >
                      <span className="text-[11px]  tracking-widest uppercase leading-tight">
                        {type}
                      </span>
                      {activeType === type && (
                        <div className="absolute right-0 top-0 h-full w-1 bg-[#BF092F]" aria-hidden="true" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 2. MIDDLE: CASE STUDY LIST */}
            <div className="relative p-8 bg-white border-r border-[#44444E]/10">
              <h4 className="text-[10px] text-[#BF092F] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                <FolderOpen size={12} aria-hidden="true" />
                {activeType} Portfolio
              </h4>

              <div className="relative group/list">
                <div className="max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                  <ul className="flex flex-col gap-1 pb-10" role="list">
                    {filteredProjects.map((project) => (
                      <li key={project.id} role="none">
                        <Link
                          to={`/projects/${project.id}`}
                          onMouseEnter={() => setActiveProjectId(project.id)}
                          className={`cursor-pointer group flex items-center justify-between p-3 rounded-lg transition-all text-left ${
                            activeProjectId === project.id ? "bg-[#BF092F]/5 shadow-sm" : "hover:bg-[#44444E]/5"
                          }`}
                        >
                          <div className="flex flex-col">
                            <span className={`text-[11px] uppercase tracking-wide transition-colors ${
                                activeProjectId === project.id ? "text-[#BF092F] font-bold" : "text-[#44444E]"
                              }`}>
                              {project.name}
                            </span>
                            <span className="text-[9px] text-gray-400 mt-0.5 font-medium">
                              {project.client}
                            </span>
                          </div>
                          <ArrowRight size={12} className={`transition-all ${
                              activeProjectId === project.id ? "opacity-100 translate-x-0 text-[#BF092F]" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#BF092F]"
                            }`} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" aria-hidden="true" />
              </div>
            </div>

            {/* 3. RIGHT: PREVIEW PANEL */}
            <aside className="p-6 flex flex-col justify-center bg-gray-50/30 overflow-hidden" aria-live="polite">
              {currentProject ? (
                <div className="animate-fadeIn space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden border border-[#44444E]/10 bg-white shadow-md">
                    <img
                      src={currentProject.imageUrls?.[0] || "/project-placeholder.jpg"}
                      // SEO: Contextual alt text with location or brand keywords
                      alt={`Case Study: ${currentProject.name} engineering project by Arc Engineering Solutions Ltd`}
                      loading="lazy"
                      width="250"
                      height="250"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] bg-[#BF092F] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                      Engineering Case Study
                    </span>
                    <h5 className="text-[13px] text-[#44444E] font-bold uppercase leading-tight">
                      {currentProject.name}
                    </h5>
                    <p className="text-[10px] text-gray-500 line-clamp-2 leading-relaxed font-medium">
                      {currentProject.description || `Successful deployment of ${currentProject.name} for ${currentProject.client || 'international infrastructure'}.`}
                    </p>
                  </div>

                  <Link
                    to={`/projects/${currentProject.id}`}
                    className="cursor-pointer w-full py-3 bg-[#44444E] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#BF092F] transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    View Project Details
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              ) : (
                <div className="text-center text-gray-400 text-[10px] uppercase font-bold">
                  Select a project to view details
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #44444E20; border-radius: 10px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: #BF092F50; }
      `}</style>
    </div>
  );
};

export default HeaderProjectsDropdown;