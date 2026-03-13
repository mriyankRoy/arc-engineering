import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { projects } from "../../utils/projects";
import { useNavigate } from "react-router";

const HeaderProjectsDropdown = () => {
  const projectTypes = projects.map((cat) => cat.categoryName);
  const [activeType, setActiveType] = useState(projectTypes[0]);
  const [activeProjectId, setActiveProjectId] = useState(projects[0].projects[0].id);
  const navigate = useNavigate();

  const activeCategory = projects.find((cat) => cat.categoryName === activeType);
  const filteredProjects = activeCategory ? activeCategory.projects : [];
  const currentProject = filteredProjects.find((p) => p.id === activeProjectId) || filteredProjects[0];

  // Helper to navigate to the category section/page
  const handleCategoryNavigation = (categoryName) => {
    navigate(`/projects?type=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="relative group">
      {/* TRIGGER */}
      <button
        onClick={() => navigate("/projects")}
        className="cursor-pointer relative inline-flex items-center tracking-widest text-white px-2 py-2 text-[13px] uppercase font-medium"
      >
        Projects
        <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
      </button>

      {/* DROPDOWN CONTAINER */}
      <div className="absolute left-[-120px] top-full pt-2 w-[850px] opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 z-50">
        <div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl border-t-4 border-[#BF092F] overflow-hidden">
          <div className="grid grid-cols-[240px_1fr_280px]">
            
            {/* LEFT: SIDEBAR - Now fully clickable */}
            <div className="bg-[#44444E] py-6">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onMouseEnter={() => {
                    setActiveType(type);
                    const cat = projects.find(c => c.categoryName === type);
                    if(cat?.projects[0]) setActiveProjectId(cat.projects[0].id);
                  }}
                  onClick={() => handleCategoryNavigation(type)}
                  className={`cursor-pointer w-full px-6 py-4 text-left transition-all ${
                    activeType === type ? "bg-white text-[#44444E]" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="text-xs tracking-widest uppercase">{type}</span>
                </button>
              ))}
            </div>

            {/* MIDDLE: PROJECT LIST */}
            <div className="relative p-8 bg-white border-r border-[#44444E]/10">
              <h4 className="text-[10px] text-[#BF092F] font-bold tracking-[0.2em] uppercase mb-6">
                {activeType} Portfolio
              </h4>
              
              <div className="relative group/list">
                <div className="max-h-[350px] overflow-y-auto pr-4 custom-scrollbar">
                  <div className="flex flex-col gap-2 pb-10">
                    {filteredProjects.map((project) => (
                      <button
                        key={project.id}
                        onMouseEnter={() => setActiveProjectId(project.id)}
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className={`cursor-pointer group flex items-center justify-between p-3 rounded-lg transition-all text-left ${
                          activeProjectId === project.id ? "bg-[#44444E]/5 shadow-sm" : "hover:bg-[#44444E]/5"
                        }`}
                      >
                        <span className={`text-xs uppercase tracking-wide transition-colors ${
                          activeProjectId === project.id ? "text-[#BF092F] font-semibold" : "text-[#44444E]"
                        }`}>
                          {project.name}
                        </span>
                        <ArrowRight size={12} className={`transition-all ${
                          activeProjectId === project.id ? "opacity-100 translate-x-0 text-[#BF092F]" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#BF092F]"
                        }`} />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* RIGHT: PREVIEW PANEL */}
            <div 
              className="cursor-pointer bg-white p-6 flex flex-col justify-center"
              onClick={() => navigate(`/projects/${currentProject?.id}`)}
            >
              {currentProject && (
                <div className="animate-fadeIn">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-[#44444E]/10 bg-gray-50 shadow-inner">
                    <img 
                      src={currentProject.imageUrls[0]} 
                      alt={currentProject.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <p className="text-[9px] text-[#44444E]/60 uppercase tracking-widest mb-1">{currentProject.client}</p>
                  <h5 className="text-[12px] text-[#44444E] font-bold uppercase tracking-wide leading-tight">{currentProject.name}</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
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