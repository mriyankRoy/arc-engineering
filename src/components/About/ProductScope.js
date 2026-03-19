import React, { useRef, useEffect, useState } from "react";
import { products } from "../../utils/products";
import ProductCategoryCard from "../Products/ProductCategoryCard";
import { useNavigate } from "react-router";
import { ArrowRight, Box } from "lucide-react";

const ProductScope = () => {
  const sectionRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasRevealed(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reveal = (isVisible, delay = "0ms") => ({
    transform: isVisible ? "translateY(0)" : "translateY(40px)",
    opacity: isVisible ? 1 : 0,
    transition: `all 1000ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
  });

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-gray-50"
    >
      {/* BACKGROUND DECOR: Ghost "SCOPE" text matches the previous sections */}
      <div className="absolute top-10 left-[-2%] text-[15rem] font-black text-gray-50 select-none pointer-events-none tracking-tighter uppercase leading-none">
        SCOPE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP HEADER: Perfectly matched to CorporateProfile & HybridModel */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div style={reveal(hasRevealed)}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#BF092F]" />
              <span className="text-[10px] tracking-[0.4em] text-[#BF092F] font-bold uppercase">
                Product Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#44444E] leading-[1.1] tracking-tight">
              Our <span className="text-gray-300 font-light">technical</span> <br /> 
              Product <span className="text-[#BF092F]">Scope.</span>
            </h2>
          </div>
          
          <div className="md:max-w-xs" style={reveal(hasRevealed, "200ms")}>
            <p className="text-xs text-gray-400 uppercase tracking-widest leading-relaxed border-l border-gray-100 pl-6">
              Specialized engineering solutions designed for mission-critical 
              environments and high-performance industrial sectors.
            </p>
          </div>
        </div>

        {/* PRODUCT GALLERY: Using a modern, refined grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10" style={reveal(hasRevealed, "400ms")}>
          {products.map((cat, idx) => (
            <div 
              key={idx} 
              className="group relative transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-sm group-hover:shadow-2xl group-hover:border-[#BF092F]/20 transition-all duration-500">
                <ProductCategoryCard 
                  category={cat} 
                  onClick={() => navigate(`/products?category=${cat.slug}`)} 
                />
                
                {/* Custom Overlay Detail for "Modern & Elegant" feel */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-10 h-10 rounded-full bg-[#BF092F] flex items-center justify-center text-white shadow-lg">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: Capability Link matched to the page style */}
        <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8" style={reveal(hasRevealed, "600ms")}>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#44444E]">
               <Box size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#BF092F]">Full Integration</p>
              <p className="text-sm text-gray-500">All products are manufactured to ISO 9001 and British standards.</p>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/products')}
            className="cursor-pointer group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#44444E] hover:text-[#BF092F] transition-colors"
          >
            View Entire Range <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductScope;