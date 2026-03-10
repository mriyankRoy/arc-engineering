import React from "react";
import { ArrowRight, Layers } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCategoryCard = ({ category, onClick }) => {
  const navigate = useNavigate();

  // Helper to determine counts
  const modelCount = category.subCategories?.length || category.items?.length || 0;
  const countLabel = category.type === 'parent' ? 'Types' : 'Models';

  return (
    <div
      onClick={() => onClick ? onClick() : navigate(`/products?category=${category.slug}`)}
      className="group relative flex flex-col h-full bg-white rounded-2xl shadow-xl border border-gray-100 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#BF092F]/20"
    >
      <div className="h-56 relative overflow-hidden bg-gray-50">
        {category.image?.url && (
          <img
            src={category.image.url}
            alt={category.category || category.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-90"
          />
        )}
      </div>
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-[#44444E] tracking-tight group-hover:text-[#BF092F] transition-colors mb-3">
            {category.category || category.name}
          </h3>
          <p className="text-[12px] text-gray-400 tracking-widest leading-relaxed line-clamp-2">
            {category.description || `${modelCount} ${countLabel} Available.`}
          </p>
        </div>
        <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Layers size={14} className="text-[#BF092F]" />
            <span className="text-[11px] font-bold text-[#44444E] uppercase tracking-widest">
              {modelCount} {countLabel}
            </span>
          </div>
          <ArrowRight
            size={18}
            className="text-gray-300 group-hover:text-[#BF092F] group-hover:translate-x-1 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;