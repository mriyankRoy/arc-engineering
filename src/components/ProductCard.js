import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="relative group border rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-white to-gray-50">
      {/* Image */}
      <div className="p-6 flex justify-center items-center h-40 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-32 object-contain transition-transform group-hover:scale-110"
        />
      </div>

      {/* Product Name */}
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition flex items-center justify-center">
        <button className="opacity-0 group-hover:opacity-100 text-white font-semibold bg-blue-600 px-5 py-2 rounded-lg shadow-lg transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
