import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronDown, ArrowRight, PackageOpen } from "lucide-react";
import { products } from "../../utils/products";

const ProductsMobileDrawer = ({ isOpen, onClose, onCloseAll }) => {
  const [expandedCat, setExpandedCat] = useState(null);
  const navigate = useNavigate();

  // SEO: Handling the 'Back' logic properly for breadcrumb-like feel
  const handleBack = () => {
    setExpandedCat(null);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[130] bg-[#44444E] transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Product Categories Menu"
    >
      <div className="h-full pt-20 px-8 overflow-y-auto pb-10 custom-scrollbar">
        {/* Navigation Action */}
        <button
          onClick={handleBack}
          className="text-white/60 mb-12 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-[0.2em] text-[12px] font-bold"
        >
          <ChevronLeft size={20} aria-hidden="true" /> Main Menu
        </button>

        {/* Semantic Header for SEO Hierarchy */}
        <div className="flex items-center gap-3 mb-8 border-l-4 border-[#BF092F] pl-4">
          <PackageOpen className="text-[#BF092F]" size={24} aria-hidden="true" />
          <h2 className="text-white text-2xl font-black uppercase tracking-[0.2em]">
            Products
          </h2>
        </div>

        <nav className="flex flex-col max-w-sm mx-auto w-full" aria-label="Mobile Product Directory">
          {products.map((cat) => (
            <div key={cat.slug} className="border-b border-white/5">
              {/* Category Toggle */}
              <button
                onClick={() => setExpandedCat(expandedCat === cat.slug ? null : cat.slug)}
                aria-expanded={expandedCat === cat.slug}
                className="group flex items-center justify-between py-6 w-full text-left active:bg-white/5 px-2 rounded-lg transition-all"
              >
                <span className="text-white font-bold text-lg uppercase tracking-[0.15em]">
                  {cat.category}
                </span>
                <ChevronDown 
                  size={18} 
                  className={`text-[#BF092F] transition-transform duration-300 ${expandedCat === cat.slug ? "rotate-180" : ""}`} 
                  aria-hidden="true"
                />
              </button>

              {/* Sub-navigation List */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCat === cat.slug ? "max-h-[800px] opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
                role="region"
                aria-label={`${cat.category} sub-items`}
              >
                <div className="flex flex-col gap-2 pl-4 border-l-2 border-[#BF092F]/30 ml-2">
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
                      className="text-white/60 hover:text-white active:text-[#BF092F] py-3 text-[13px] font-bold uppercase tracking-widest text-left transition-colors flex items-center justify-between group/item"
                    >
                      <span className="flex items-center gap-3">
                        <ArrowRight size={14} className="text-[#BF092F]/50 group-hover/item:text-[#BF092F]" aria-hidden="true" />
                        {sub.name || sub.category}
                      </span>
                    </button>
                  ))}
                  
                  {/* SEO Strategy: Link to the main category page at the bottom of the list */}
                  <button
                    onClick={() => { navigate(`/products?category=${cat.slug}`); onCloseAll(); }}
                    className="mt-2 text-[#BF092F] text-[11px] font-black uppercase tracking-[0.2em] hover:underline flex items-center gap-2 py-2"
                  >
                    View All {cat.category}
                  </button>
                </div>
              </div>
            </div>
          ))}

          <footer className="mt-16 flex flex-col items-center gap-4">
            <div className="w-12 h-[1px] bg-[#BF092F]/50" aria-hidden="true" />
            <p className="text-white/40 text-[9px] font-bold tracking-[0.4em] uppercase text-center">
              Arc Engineering Solutions Ltd.
            </p>
          </footer>
        </nav>
      </div>
    </div>
  );
};

export default ProductsMobileDrawer;