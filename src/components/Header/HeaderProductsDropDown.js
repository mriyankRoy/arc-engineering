import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ArrowRight,
  Layers,
  Package,
  ListTree,
} from "lucide-react";
import { useNavigate, Link } from "react-router"; // Added Link for crawler discovery
import { products } from "../../utils/products";

const HeaderProductsDropDown = () => {
  const navigate = useNavigate();

  // 1. Core State
  const [activeCategorySlug, setActiveCategorySlug] = useState(products[0]?.slug);
  const [activeSubOrItem, setActiveSubOrItem] = useState(null);

  const currentCategory = products.find((p) => p.slug === activeCategorySlug);
  const hasSubCategories = currentCategory?.subCategories?.length > 0;
  const displayList = hasSubCategories ? currentCategory.subCategories : currentCategory.items;

  useEffect(() => {
    if (displayList?.length > 0) {
      setActiveSubOrItem(displayList[0]);
    }
  }, [activeCategorySlug, displayList]);

  const getPreviewImage = () => {
    if (hasSubCategories && activeSubOrItem?.image?.url) return activeSubOrItem.image.url;
    if (!hasSubCategories && activeSubOrItem?.images?.[0]) return activeSubOrItem.images[0];
    return currentCategory?.image?.url || "https://placehold.co/600x400?text=Arc+Engineering";
  };

  const HoverEffect = () => (
    <>
      <span className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] -z-10 border border-white/20 shadow-xl" aria-hidden="true" />
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white group-hover:w-1/4 transition-all duration-300 ease-out rounded-full" aria-hidden="true" />
    </>
  );

  return (
    <div className="relative group">
      {/* TRIGGER: Semantic Link for SEO Crawler discovery */}
      <Link
        to="/products"
        aria-haspopup="true"
        aria-expanded="false"
        className="relative cursor-pointer inline-flex items-center tracking-widest text-white hover:text-white transition-all duration-300 px-2 py-2 text-[12px] lg:text-[13px] uppercase font-medium whitespace-nowrap group focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg"
      >
        <HoverEffect />
        <span className="absolute inset-0 bg-[#BF092F]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20" aria-hidden="true" />
        Products
        <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180 ml-1" aria-hidden="true" />
      </Link>

      {/* MEGA MENU CONTAINER */}
      <div 
        className="absolute left-[-120px] top-full pt-2 w-[900px] opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 z-50"
        role="menu"
        aria-label="Products Mega Menu"
      >
        <div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl border-t-4 border-[#BF092F] overflow-hidden">
          <div className="grid grid-cols-[260px_1fr_300px]">
            
            {/* 1. SIDEBAR: PRIMARY CATEGORIES */}
            <nav className="bg-[#44444E] py-6 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Main Product Categories">
              <ul className="flex flex-col w-full" role="list">
                {products.map((cat) => (
                  <li key={cat.slug} role="none">
                    <Link
                      to={`/products?category=${cat.slug}`}
                      onMouseEnter={() => setActiveCategorySlug(cat.slug)}
                      className={`cursor-pointer block w-full px-6 py-4 text-left transition-all relative ${
                        activeCategorySlug === cat.slug
                          ? "bg-white text-[#44444E]"
                          : "text-white/60 hover:text-white"
                      }`}
                      title={`Browse ${cat.category} Solutions`}
                    >
                      <span className="text-[11px] font-bold tracking-widest uppercase leading-tight">
                        {cat.category}
                      </span>
                      {activeCategorySlug === cat.slug && (
                        <div className="absolute right-0 top-0 h-full w-1 bg-[#BF092F]" aria-hidden="true" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 2. MIDDLE: SPECIFIC MODELS / SUB-GROUPS */}
            <div className="relative p-8 bg-white border-r border-[#44444E]/10">
              <h4 className="text-[10px] text-[#BF092F] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                {hasSubCategories ? <ListTree size={12} aria-hidden="true" /> : <Package size={12} aria-hidden="true" />}
                {hasSubCategories ? "Technical Classifications" : "Product Range"}
              </h4>

              <div className="max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                <ul className="flex flex-col gap-1 pb-10" role="list">
                  {displayList?.map((item, idx) => (
                    <li key={item.slug || item.id || idx} role="none">
                      <Link
                        to={hasSubCategories
                          ? `/products?category=${item.slug}`
                          : `/products/${currentCategory.slug}/${item.id}`}
                        onMouseEnter={() => setActiveSubOrItem(item)}
                        className={`cursor-pointer group flex items-center justify-between p-3 rounded-lg transition-all text-left ${
                          activeSubOrItem?.name === item.name
                            ? "bg-[#BF092F]/5 shadow-sm"
                            : "hover:bg-[#44444E]/5"
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className={`text-[11px] uppercase tracking-wide transition-colors ${
                              activeSubOrItem?.name === item.name ? "text-[#BF092F] font-bold" : "text-[#44444E]"
                            }`}>
                            {item.name}
                          </span>
                          {item.items && (
                            <span className="text-[9px] text-gray-400 mt-0.5 font-medium">
                              {item.items.length} Engineering Units
                            </span>
                          )}
                        </div>
                        <ArrowRight size={12} className={activeSubOrItem?.name === item.name ? "text-[#BF092F] translate-x-0" : "opacity-0 -translate-x-2"} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />
            </div>

            {/* 3. RIGHT: UNIT PREVIEW */}
            <aside className="p-6 flex flex-col justify-center bg-gray-50/30" aria-live="polite">
              <div className="animate-fadeIn space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden border border-[#44444E]/10 bg-white shadow-md">
                  <img
                    src={getPreviewImage()}
                    // SEO: Context-rich dynamic alt tags
                    alt={`${activeSubOrItem?.name} - Arc Engineering Ltd industrial power equipment module`}
                    loading="lazy"
                    width="250"
                    height="250"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] bg-[#BF092F] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                    {hasSubCategories ? "Range Overview" : "Technical Detail"}
                  </span>
                  <h5 className="text-[13px] text-[#44444E] font-bold uppercase leading-tight">
                    {activeSubOrItem?.name}
                  </h5>
                  <p className="text-[10px] text-gray-500 line-clamp-3 leading-relaxed font-medium">
                    {activeSubOrItem?.description || activeSubOrItem?.shortDescription || `Specialized ${activeSubOrItem?.name || "engineering module"} designed for mission-critical UK and international infrastructure.`}
                  </p>
                </div>

                <Link
                  to={hasSubCategories
                    ? `/products?category=${activeSubOrItem?.slug}`
                    : `/products/${currentCategory.slug}/${activeSubOrItem?.id}`}
                  className="cursor-pointer w-full py-3 bg-[#44444E] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#BF092F] transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  Technical Specifications
                  <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #BF092F30; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default HeaderProductsDropDown;