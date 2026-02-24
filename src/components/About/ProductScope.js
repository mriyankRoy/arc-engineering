import React, { useRef, useEffect, useState } from "react";
import { products } from "../../utils/products";
import ProductCard from "../Products/ProductCard";

/**
 * ProductScope Component
 * Integrated into 'About Us' to showcase Category 1 (Generator Systems) capabilities.
 */
const ProductScope = () => {
  const sectionRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  // Focus specifically on Category 1 (Generator Enclosures, etc.)
  const categoryData = products[0];
  const scopeItems = categoryData?.items || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasRevealed(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Standard reveal animation to match CorporateProfile style
  const revealClass = (active, delay = "duration-1000") =>
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      active ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
    }`;

  return (
    <div 
      ref={sectionRef}
      className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 mt-20"
    >
      {/* SECTION HEADER: Red accent bar and upper-case breadcrumb */}
      <div className={`flex items-center gap-4 mb-8 ${revealClass(hasRevealed)}`}>
        <div className="h-8 w-1 bg-[#BF092F]" />
        <h2 className="text-sm text-[#44444E] uppercase font-bold">
          Our Product Scope
        </h2>
        <div className="hidden md:block h-px flex-grow ml-8 bg-gray-100" />
      </div>

      {/* SUB-HEADER: Large-scale typography for clear section transition */}
      <p className={`text-2xl md:text-4xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight mb-12 ${revealClass(hasRevealed, "duration-1000 delay-100")}`}>
        Precision Manufactured <br className="hidden md:block" />{" "}
        {categoryData?.category}.
      </p>

      {/* PRODUCT LIST: 
          - flex-wrap: allows wrapping to next line
          - justify-center: horizontally centers items (including orphans like the 4th card)
      */}
      <div className={`flex flex-wrap justify-center gap-8 ${revealClass(hasRevealed, "duration-1000 delay-200")}`}>
        {scopeItems.map((item, index) => (
          <div 
            key={item.id || index}
            // Width Logic: Mobile (100%), Tablet (50%), Desktop (33%)
            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[400px]"
          >
            {/* Direct use of shared ProductCard for design parity across the site */}
            <ProductCard 
              product={item} 
              categorySlug={categoryData.slug} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductScope;