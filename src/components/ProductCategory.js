import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductCategory = ({ category }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mb-8">
      <h2
        onClick={() => setExpanded(!expanded)}
        className="text-2xl font-bold cursor-pointer mb-4 border-b pb-2"
      >
        {category.category}
      </h2>
      {expanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {category.items.map((item, idx) => (
            <ProductCard key={idx} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCategory;