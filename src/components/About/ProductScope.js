import React, { useRef, useEffect, useState } from "react";
import { products } from "../../utils/products";
import ProductCategoryCard from "../Products/ProductCategoryCard";
import { useNavigate } from "react-router";

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

  const revealClass = (active, delay = "duration-1000") =>
    `transition-all ${delay} ${active ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`;

  return (
    <div ref={sectionRef} className="w-full bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 mt-20">
      <div className={`flex items-center gap-4 mb-12 ${revealClass(hasRevealed)}`}>
        <div className="h-8 w-1 bg-[#BF092F]" />
        <h2 className="text-sm text-[#44444E] uppercase tracking-[0.4em]">Our Product Scope</h2>
      </div>

      {/* Grid container with centering logic */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center ${revealClass(hasRevealed, "duration-1000 delay-200")}`}>
        {products.map((cat, idx) => (
          <div key={idx} className="w-full max-w-sm">
            <ProductCategoryCard 
              category={cat} 
              onClick={() => navigate(`/products?category=${cat.slug}`)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductScope;