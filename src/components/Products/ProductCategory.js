import React, { useState } from "react";
import ProductCard from "../ProductCard";

const ProductCategory = ({ category }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mb-12">
      {/* Category Title */}
      <h2
        onClick={() => setExpanded(!expanded)}
        className="text-3xl md:text-4xl font-extrabold cursor-pointer mb-6 pb-2 border-b-2 border-gray-200 hover:text-gray-900 transition-colors duration-300"
      >
        {category.category}
      </h2>

      {/* Product Grid */}
      {expanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {category.items.map((item, idx) => (
            <div
              key={idx}
              className="transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300"
            >
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
