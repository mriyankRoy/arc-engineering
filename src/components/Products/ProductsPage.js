import React, { useState, useEffect } from "react";
import { products } from "../../utils/products";
import ProductCard from "./ProductCard";
import { useLocation, useNavigate } from "react-router";

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categorySlug = queryParams.get("category");

  const matchedCategory = categorySlug
    ? products.find((p) => p.slug === categorySlug)
    : null;

  const currentCategory = matchedCategory || products[0];

  const [selectedCategory, setSelectedCategory] = useState(
    currentCategory.category
  );

  useEffect(() => {
    setSelectedCategory(currentCategory.category);
  }, [currentCategory]);

  return (
    <div className="pt-40 bg-gray-50 min-h-screen">
       {/* Background grid + radial gradient */}
      <div
        className="-z-10 absolute inset-0 
       bg-[linear-gradient(to_right,rgba(0,0,0,1)_4px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
       bg-[size:40px_40px]
       before:content-[''] before:absolute before:inset-0 
       before:bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_60%)]
  "
      ></div>
      {/* FIXED: Gradient blob div closed properly */}
      <div className="absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0 bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl"></div>
      {/* Hero */}
      <div className="mt-7 px-6 lg:px-8">
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

      {/* Content */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 p-6 rounded-2xl shadow-lg sticky top-6 h-fit bg-gradient-to-br from-pink-50 to-white">
          <h2 className="text-2xl font-bold mb-6 text-pink-700">Categories</h2>
          <ul>
            {products.map((category, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setSelectedCategory(category.category);
                  navigate(`/products?category=${category.slug}`);
                }}
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
              <ProductCard
                key={idx}
                product={item}
                categorySlug={currentCategory.slug}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
