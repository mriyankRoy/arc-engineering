import React, { useState } from "react";
import { 
  ChevronDown, 
  MapPin, 
  ArrowRight, 
  Building2 
} from "lucide-react";
import { facilities } from "../../utils/facilities";
import { useNavigate } from "react-router";

const HeaderFacilitiesDropdown = () => {
  const navigate = useNavigate();

  // 1. Core State
  const [activeFacilityId, setActiveFacilityId] = useState(facilities[0]?.id);
  const currentFacility = facilities.find((f) => f.id === activeFacilityId) || facilities[0];

  const HoverEffect = () => (
    <>
      <span className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] -z-10 border border-white/20 shadow-xl" />
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white group-hover:w-1/4 transition-all duration-300 ease-out rounded-full" />
    </>
  );

  return (
    <div className="relative group">
      {/* TRIGGER */}
      <button
        onClick={() => navigate("/facilities")}
        className="relative cursor-pointer inline-flex items-center tracking-widest text-white hover:text-white transition-all duration-300 px-2 py-2 text-[12px] lg:text-[13px] uppercase font-medium whitespace-nowrap group"
      >
        <HoverEffect />
        <span className="absolute inset-0 bg-[#BF092F]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20" />
        Facilities
        <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
      </button>

      {/* DROPDOWN CONTAINER - Set to 550px to stay compact */}
      <div className="absolute left-0 top-full pt-2 w-[550px] opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 z-50">
        <div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl border-t-4 border-[#BF092F] overflow-hidden">
          
          <div className="grid grid-cols-[240px_1fr]">
            
            {/* 1. LEFT: LIST (Typography matched to Products/Projects middle column) */}
            <div className="relative p-6 bg-white border-r border-[#44444E]/10">
              <h4 className="text-[10px] text-[#BF092F] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                <Building2 size={12} />
                Infrastructure
              </h4>

              <div className="max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="flex flex-col gap-1 pb-6">
                  {facilities.map((f) => (
                    <button
                      key={f.id}
                      onMouseEnter={() => setActiveFacilityId(f.id)}
                      onClick={() => navigate(`/facilities/${f.id}`)}
                      className={`cursor-pointer group flex items-center justify-between p-3 rounded-lg transition-all text-left ${
                        activeFacilityId === f.id
                          ? "bg-[#BF092F]/5 shadow-sm"
                          : "hover:bg-[#44444E]/5"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span
                          className={`text-[11px] uppercase tracking-wide transition-colors ${
                            activeFacilityId === f.id
                              ? "text-[#BF092F] font-bold"
                              : "text-[#44444E]"
                          }`}
                        >
                          {f.name || f.title}
                        </span>
                        <span className="text-[9px] text-gray-400 mt-0.5">
                          {f.location}
                        </span>
                      </div>
                      <ArrowRight
                        size={12}
                        className={
                          activeFacilityId === f.id
                            ? "text-[#BF092F] translate-x-0 opacity-100"
                            : "opacity-0 -translate-x-2"
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>

            {/* 2. RIGHT: PREVIEW PANEL (Typography matched to Products/Projects right column) */}
            <div className="p-6 flex flex-col justify-center bg-gray-50/30">
              {currentFacility && (
                <div className="animate-fadeIn space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden border border-[#44444E]/10 bg-white shadow-md">
                    <img
                      src={currentFacility.facilityImg[0]}
                      alt={currentFacility.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[9px] bg-[#BF092F] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                      Facility
                    </span>
                    <h5 className="text-[13px] text-[#44444E] font-bold uppercase leading-tight">
                      {currentFacility.title}
                    </h5>
                    <p className="text-[10px] text-gray-500 line-clamp-2 leading-relaxed">
                      {currentFacility.description || "Specialized infrastructure for critical power and industrial manufacturing."}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate(`/facilities/${currentFacility.id}`)}
                    className="cursor-pointer w-full py-3 bg-[#44444E] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#BF092F] transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    View Details
                    <ArrowRight
                      size={12}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: #BF092F30; 
          border-radius: 10px; 
        }
      `}</style>
    </div>
  );
};

export default HeaderFacilitiesDropdown;