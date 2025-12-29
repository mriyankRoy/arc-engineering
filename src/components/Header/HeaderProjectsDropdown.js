import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { projects } from "../../utils/projects";
import { Link, useNavigate } from "react-router";

const HeaderProjectsDropdown = () => {
  // Dynamically get the types from the new API structure
  const projectTypes = projects.map((cat) => cat.categoryName);
  
  // Set initial state to the first category name
  const [activeType, setActiveType] = useState(projectTypes[0]);
  const navigate = useNavigate();

  // Find the specific category object to access its nested projects
  const activeCategory = projects.find(
    (cat) => cat.categoryName === activeType
  );
  const filteredProjects = activeCategory ? activeCategory.projects : [];

  const HoverEffect = () => (
    <>
      <span className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] -z-10 border border-white/20 shadow-xl" />
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white group-hover:w-1/4 transition-all duration-300 ease-out rounded-full" />
    </>
  );

  return (
    <div className="relative group">
      {/* --- TRIGGER --- */}
      <button
        onClick={() => navigate("/projects")}
        className="relative cursor-pointer inline-flex items-center tracking-widest text-white hover:text-white transition-all duration-300 px-2 py-2 text-[12px] lg:text-[13px] uppercase font-medium whitespace-nowrap group"
      >
        <HoverEffect />
        <span className="absolute inset-0 bg-[#BF092F]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20" />
        Projects
        <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
      </button>

      {/* --- DROPDOWN CONTAINER --- */}
      <div className="absolute left-[-50px] top-full pt-2 w-[750px] opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-out z-50">
        <div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl border-t-4 border-[#CF0F0F] overflow-hidden">
          <div className="grid grid-cols-[240px_1fr]">
            
            {/* LEFT: CATEGORY SIDEBAR */}
            <div className="bg-[#44444E] py-6">
              <nav className="flex flex-col">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onMouseEnter={() => setActiveType(type)}
                    onClick={() =>
                      navigate(`/projects?type=${encodeURIComponent(type)}`)
                    }
                    className={`cursor-pointer group/item relative px-6 py-4 flex items-center justify-between transition-all text-left ${
                      activeType === type
                        ? "bg-white text-[#44444E]"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span className="text-xs tracking-widest transition-transform group-hover/item:translate-x-1">
                      {type}
                    </span>
                    {activeType === type && (
                      <div className="absolute right-0 w-1.5 h-full bg-[#CF0F0F]" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* RIGHT: PROJECTS PREVIEW PANEL */}
            <div className="relative p-8 bg-white overflow-hidden min-h-[350px] flex flex-col">
              <div className="relative animate-fadeIn h-full flex flex-col">
                <div className="mb-6 pb-4 border-b border-gray-100 flex justify-between items-end">
                  <div>
                    <h4 className="text-2xl text-[#44444E] tracking-tight">
                      {activeType} Series
                    </h4>
                    <p className="text-[12px] text-[#CF0F0F] tracking-widest mt-1">
                      Technical Records
                    </p>
                  </div>
                  <span className="text-4xl font-black text-gray-50 uppercase select-none leading-none">
                    SPEC
                  </span>
                </div>

                {/* Sub-projects Grid */}
                <div className="grid grid-cols-2 gap-3 rounded-xl">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.slice(0, 6).map((project) => ( // Show top 6 for layout stability
                      <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        className="group/link flex items-center justify-between p-4 bg-gray-50 border border-transparent hover:border-[#CF0F0F] hover:bg-white transition-all duration-300 hover:rounded-xl"
                      >
                        <span className="text-xs text-[#44444E] tracking-wide group-hover/link:text-[#CF0F0F] font-medium">
                          {project.name}
                        </span>
                        <ArrowRight
                          size={14}
                          className="text-gray-300 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"
                        />
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-2 py-10 text-center text-gray-300 text-xs tracking-widest border-2 border-dashed border-gray-100 rounded-xl">
                      NO ACTIVE DEPLOYMENTS
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <button
                  onClick={() =>
                    navigate(`/projects?type=${encodeURIComponent(activeType)}`)
                  }
                  className="cursor-pointer mt-auto pt-6 flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#44444E] hover:text-[#CF0F0F] transition-colors uppercase"
                >
                  Explore {activeType} Portfolio <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProjectsDropdown;