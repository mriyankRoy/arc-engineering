import React, { useState } from "react";
import { products } from "../utils/products";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    products[0].category
  );
  const currentCategory = products.find((p) => p.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="mt-16 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Powering Industries with World-Class Containerized Solutions
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl">
            From precision instruments to robust enclosures, our advanced power
            systems deliver reliability, efficiency, and rapid deployment for
            industries across the UK and Europe.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 p-6 rounded-2xl shadow-lg sticky top-6 h-fit bg-gradient-to-br from-pink-50 to-white">
          <h2 className="text-2xl font-bold mb-6 text-pink-700">Categories</h2>
          <ul>
            {products.map((category, idx) => (
              <li
                key={idx}
                onClick={() => setSelectedCategory(category.category)}
                className={`cursor-pointer p-3 mb-3 rounded-xl transition-all font-medium text-gray-700 ${
                  selectedCategory === category.category
                    ? "bg-pink-600 text-white shadow-lg scale-105 transform"
                    : "hover:bg-pink-100 hover:text-pink-700 hover:scale-105 transform"
                }`}
              >
                {category.category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <section className="w-full lg:w-3/4">
          <h2 className="text-3xl font-bold mb-8">
            {currentCategory.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentCategory.items.map((item, idx) => (
              <ProductCard key={idx} product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
