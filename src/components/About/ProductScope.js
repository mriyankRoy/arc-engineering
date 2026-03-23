import React, { useRef, useEffect, useState } from "react";
import { products } from "../../utils/products";
import ProductCategoryCard from "../Products/ProductCategoryCard";
import { useNavigate } from "react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";

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
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    opacity: isVisible ? 1 : 0,
    transition: `all 1000ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
  });

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-white py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-gray-50"
      aria-labelledby="scope-heading"
    >
      {/* BACKGROUND DECOR */}
      <div 
        className="absolute top-10 right-[-5%] md:right-[-2%] text-[8rem] sm:text-[12rem] md:text-[15rem] font-black text-gray-50 select-none pointer-events-none tracking-tighter uppercase leading-none z-0"
        aria-hidden="true"
      >
        SCOPE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP HEADER */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div style={reveal(hasRevealed)}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#BF092F]" aria-hidden="true" />
              <p className="text-[10px] tracking-[0.4em] text-[#BF092F] font-bold uppercase">
                Product Portfolio
              </p>
            </div>
            <h2 id="scope-heading" className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#44444E] leading-[1.1] tracking-tight">
              Our <span className="text-gray-300 font-light">technical</span> <br className="hidden sm:block" /> 
              Product <span className="text-[#BF092F]">Scope.</span>
            </h2>
          </div>
          
          <div className="max-w-sm" style={reveal(hasRevealed, "200ms")}>
            <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest leading-relaxed border-l border-gray-100 pl-6 py-1">
              High-specification engineering solutions meeting UKCA and CE standards for mission-critical infrastructure across the UK and Europe.
            </p>
          </div>
        </header>

        {/* PRODUCT GALLERY */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12" 
          style={reveal(hasRevealed, "400ms")}
        >
          {products.map((cat, idx) => (
            <article 
              key={idx} 
              className="group relative transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#BF092F]/20 transition-all duration-500">
                <ProductCategoryCard 
                  category={cat} 
                  onClick={() => navigate(`/products?category=${cat.slug}`)} 
                />
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-[#BF092F] flex items-center justify-center text-white shadow-xl">
                    <ArrowRight size={20} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER CTA */}
        <footer 
          className="mt-16 md:mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8" 
          style={reveal(hasRevealed, "600ms")}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#44444E] shadow-inner">
               <ShieldCheck className="text-[#BF092F]" size={28} aria-hidden="true" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#BF092F]">Compliance Assurance</p>
              <p className="text-sm text-gray-500 max-w-sm">All strategic product lines are manufactured to ISO 9001:2015, UKCA, and CE British engineering standards.</p>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/products')}
            className="cursor-pointer w-full md:w-auto group flex items-center justify-center gap-6 px-10 py-5 bg-white border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-[#44444E] hover:border-[#BF092F] hover:text-[#BF092F] transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            Explore Technical Range 
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" aria-hidden="true" />
          </button>
        </footer>

      </div>
    </section>
  );
};

export default ProductScope;