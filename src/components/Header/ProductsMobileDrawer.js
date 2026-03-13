import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronDown, ArrowRight } from "lucide-react";
import { products } from "../../utils/products";

const ProductsMobileDrawer = ({ isOpen, onClose, onCloseAll }) => {
  const [expandedCat, setExpandedCat] = useState(null); // Track which category is open
  const navigate = useNavigate();

  return (
    <div
      className={`fixed inset-0 z-[120] bg-[#44444E] transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full pt-20 px-8 overflow-y-auto pb-10">
        <button
          onClick={onClose}
          className="text-white/60 mb-12 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-[0.2em] text-[12px]"
        >
          <ChevronLeft size={20} /> Back
        </button>

        <h2 className="text-white text-2xl font-black uppercase tracking-[0.2em] mb-8 border-l-2 border-[#BF092F] pl-4">
          Products
        </h2>

        <div className="flex flex-col max-w-sm mx-auto w-full">
          {products.map((cat) => (
            <div key={cat.slug} className="border-b border-white/5">
              {/* Category Header with Toggle */}
              <button
                onClick={() => setExpandedCat(expandedCat === cat.slug ? null : cat.slug)}
                className="group flex items-center justify-between py-5 w-full text-left"
              >
                <span className="text-white/80 group-hover:text-white text-xl uppercase tracking-[0.2em]">
                  {cat.category}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`text-[#BF092F] transition-transform ${expandedCat === cat.slug ? "rotate-180" : ""}`} 
                />
              </button>

              {/* Sub-options: Only shown when toggled */}
              <div className={`overflow-hidden transition-all duration-300 ${expandedCat === cat.slug ? "max-h-[500px] pb-5" : "max-h-0"}`}>
                <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                  {(cat.subCategories || cat.items || []).map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const path = cat.subCategories 
                          ? `/products?category=${sub.slug}` 
                          : `/products/${cat.slug}/${sub.id}`;
                        navigate(path);
                        onCloseAll();
                      }}
                      className="text-white/50 hover:text-white text-[12px] uppercase tracking-wider text-left transition-colors flex items-center gap-2"
                    >
                      <ArrowRight size={10} />
                      {sub.name || sub.category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="w-12 h-[1px] bg-[#BF092F]/50" />
            <p className="text-white text-[10px] font-bold tracking-[0.4em] uppercase">
              Art Genpower Solutions Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsMobileDrawer;