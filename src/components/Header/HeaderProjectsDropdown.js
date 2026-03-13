import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, FolderOpen } from "lucide-react";
import { projects } from "../../utils/projects";
import { useNavigate } from "react-router";

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

  // 2. Auto-select the first project when the category (sidebar) changes
  useEffect(() => {
    if (filteredProjects?.length > 0) {
      setActiveProjectId(filteredProjects[0].id);
    }
  }, [activeType]);

  return (
    <div className="relative group">
      {/* TRIGGER */}
      <button
        onClick={() => navigate("/projects")}
        className="cursor-pointer relative inline-flex items-center tracking-widest text-white px-2 py-2 text-[12px] lg:text-[13px] uppercase font-medium"
      >
        Projects
        <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-500 group-hover:rotate-180" />
      </button>

      {/* DROPDOWN CONTAINER */}
      <div className="absolute left-[-120px] top-full pt-2 w-[900px] opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 z-50">
        <div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl border-t-4 border-[#BF092F] overflow-hidden">
          <div className="grid grid-cols-[260px_1fr_300px]">
            {/* 1. LEFT: SIDEBAR */}
            <div className="bg-[#44444E] py-6 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onMouseEnter={() => setActiveType(type)}
                  onClick={() =>
                    navigate(`/projects?type=${encodeURIComponent(type)}`)
                  }
                  className={`cursor-pointer w-full px-6 py-4 text-left transition-all relative ${
                    activeType === type
                      ? "bg-white text-[#44444E]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="text-[11px] tracking-widest uppercase leading-tight">
                    {type}
                  </span>
                  {activeType === type && (
                    <div className="absolute right-0 top-0 h-full w-1 bg-[#BF092F]" />
                  )}
                </button>
              ))}
            </div>

            {/* 2. MIDDLE: PROJECT LIST */}
            <div className="relative p-8 bg-white border-r border-[#44444E]/10">
              <h4 className="text-[10px] text-[#BF092F] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                <FolderOpen size={12} />
                {activeType} Portfolio
              </h4>

              <div className="relative group/list">
                <div className="max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                  <div className="flex flex-col gap-1 pb-10">
                    {filteredProjects.map((project) => (
                      <button
                        key={project.id}
                        onMouseEnter={() => setActiveProjectId(project.id)}
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className={`cursor-pointer group flex items-center justify-between p-3 rounded-lg transition-all text-left ${
                          activeProjectId === project.id
                            ? "bg-[#BF092F]/5 shadow-sm"
                            : "hover:bg-[#44444E]/5"
                        }`}
                      >
                        <div className="flex flex-col">
                          <span
                            className={`text-[11px] uppercase tracking-wide transition-colors ${
                              activeProjectId === project.id
                                ? "text-[#BF092F] font-bold"
                                : "text-[#44444E]"
                            }`}
                          >
                            {project.name}
                          </span>
                          <span className="text-[9px] text-gray-400 mt-0.5">
                            {project.client}
                          </span>
                        </div>
                        <ArrowRight
                          size={12}
                          className={`transition-all ${
                            activeProjectId === project.id
                              ? "opacity-100 translate-x-0 text-[#BF092F]"
                              : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#BF092F]"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                {/* Gradient Fade Effect Restored */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* 3. RIGHT: DYNAMIC PREVIEW PANEL */}
            <div className="p-6 flex flex-col justify-center bg-gray-50/30 overflow-hidden">
              {currentProject ? (
                <div className="animate-fadeIn space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden border border-[#44444E]/10 bg-white shadow-md">
                    <img
                      src={currentProject.imageUrls[0]}
                      alt={currentProject.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] bg-[#BF092F] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                      Case Study
                    </span>
                    <h5 className="text-[13px] text-[#44444E] font-bold uppercase leading-tight">
                      {currentProject.name}
                    </h5>
                    {/* Changed line-clamp-3 to line-clamp-2 */}
                    <p className="text-[10px] text-gray-500 line-clamp-2 leading-relaxed">
                      {currentProject.description ||
                        "Project execution for critical power infrastructure and specialized industrial solutions."}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate(`/projects/${currentProject.id}`)}
                    className="cursor-pointer w-full py-3 bg-[#44444E] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#BF092F] transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    View Project Details
                    <ArrowRight
                      size={12}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              ) : (
                <div className="text-center text-gray-400 text-[10px] uppercase">
                  Select a project
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: #44444E20; 
          border-radius: 10px; 
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { 
          background: #BF092F50; 
        }
      `}</style>
    </div>
  );
};

export default HeaderProjectsDropdown;
