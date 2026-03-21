import React, { useState } from "react";
import { ArrowRight, Cpu, Package } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product, categorySlug }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    // ROUTING: Matches /products/:category/:id structure
    const slug = categorySlug || "item";
    navigate(`/products/${slug}/${product.id}`);
  };

  const getOptimizedUrl = (url) => {
    if (!url || !url.includes("cloudinary.com")) return url;
    // Cloudinary dynamic optimization for global performance
    return url.replace("/upload/", "/upload/f_auto,q_auto/");
  };

  return (
    <article
      className="group relative flex flex-col h-full bg-white rounded-2xl shadow-xl border border-gray-100 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#BF092F]/20 hover:-translate-y-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleNavigate}
      aria-labelledby={`product-name-${product.id}`}
    >
      {/* PART NUMBER BADGE */}
      <div className="absolute top-4 right-4 z-20">
        <span className="text-[10px] font-mono font-bold text-gray-300 group-hover:text-[#BF092F] transition-colors tracking-widest uppercase">
          {product.AGPPartNumber || "SPEC_READY"}
        </span>
      </div>

      {/* 1. IMAGE SECTION */}
      <div className="h-64 min-h-[16rem] relative overflow-hidden bg-gray-50 border-b border-gray-50">
        <img
          src={getOptimizedUrl(product.images[0])}
          alt={`Arc Engineering Product: ${product.name} (${product.Make})`}
          className={`w-full h-full object-cover grayscale transition-all duration-700 opacity-90 ${
            hover ? "grayscale-0 scale-110 opacity-100" : ""
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" aria-hidden="true" />
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Cpu size={14} className="text-[#BF092F]" aria-hidden="true" />
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
              {product.Make || "Industrial Unit"}
            </span>
          </div>
          
          <h3 
            id={`product-name-${product.id}`}
            className="text-xl font-bold text-[#44444E] tracking-tight group-hover:text-[#BF092F] transition-colors mb-3 leading-snug min-h-[3.5rem] line-clamp-2"
          >
            {product.name}
          </h3>
          
          <p className="text-[12px] text-gray-400 tracking-widest leading-relaxed line-clamp-3 min-h-[3rem]">
            {product.shortDescription || `High-performance ${product.name} engineered for critical infrastructure and industrial deployment.`}
          </p>
        </div>

        {/* 3. FOOTER ACTION */}
        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package size={14} className="text-[#BF092F]" aria-hidden="true" />
            <span className="text-[11px] font-bold text-[#44444E] uppercase tracking-widest">
              {product.manufacturerPartNumber}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-[#BF092F] font-bold text-[11px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
            View Specs
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* 4. HOVER ACCENT BAR */}
      <div 
        className={`absolute bottom-0 left-0 h-1 bg-[#BF092F] transition-all duration-500 ${hover ? "w-full" : "w-0"}`} 
        aria-hidden="true" 
      />
    </article>
  );
};

export default ProductCard;