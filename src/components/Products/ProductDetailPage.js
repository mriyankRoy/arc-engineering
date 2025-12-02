import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { products } from "../../utils/products";

const ProductDetailPage = () => {
  const { categorySlug, productName } = useParams();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const category = products.find((c) => c.slug === categorySlug);
  if (!category) return <p className="p-6">Category not found.</p>;

  const product = category.items.find(
    (item) => item.name === decodeURIComponent(productName)
  );
  if (!product) return <p className="p-6">Product not found.</p>;

  return (
    <div
      className="w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 min-h-screen pb-20 pt-32 overflow-hidden
   "
    >
        {/* Background grid + radial gradient */}
  <div className="-z-10 absolute inset-0 
       bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
       bg-[size:40px_40px]
       before:content-[''] before:absolute before:inset-0 
       before:bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_60%)]
  "></div>
      {/* FIXED: Gradient blob div closed properly */}
      <div className="absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0 bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl"></div>
      {/* Animated floating orbs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      <div
        className="absolute top-40 right-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translateY(${scrollY * 0.2}px) translateX(${
            Math.sin(scrollY * 0.01) * 20
          }px)`,
          animationDelay: "1s",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translateY(${-scrollY * 0.15}px)`,
          animationDelay: "2s",
        }}
      ></div>

      {/* HERO HEADER SECTION */}
      <div className="relative mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 opacity-95"></div>
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>

        {/* Animated light beams */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse"></div>
          <div
            className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-400 to-transparent animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div
              className={`inline-block px-4 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              {categorySlug.toUpperCase()}
            </div>
            <h1
              className={`text-6xl md:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-150 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {product.name}
            </h1>
            {product.shortDescription && (
              <p
                className={`text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-3xl transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {product.shortDescription}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* PRODUCT IMAGE SHOWCASE */}
        <div className="mb-16 -mt-32">
          <div
            className={`relative bg-white rounded-3xl shadow-2xl p-4 backdrop-blur-sm border border-gray-200/50 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl animate-pulse"></div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img
                src={product.image}
                alt={product.name}
                className="relative w-full max-h-[520px] object-cover shadow-xl transition-transform duration-700 group-hover:scale-105"
              />
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN: Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* DESCRIPTION CARD */}
            <div
              className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-10 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full group-hover:h-12 transition-all duration-300"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Product Description
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* USES SECTION */}
            {product.uses && product.uses.length > 0 && (
              <div
                className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-10 border border-gray-100 hover:border-purple-200 hover:-translate-y-1 relative overflow-hidden ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full group-hover:h-12 transition-all duration-300"></div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Applications & Uses
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                  {product.uses.map((use, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-gradient-to-br from-slate-50 to-blue-50/50 px-5 py-4 rounded-xl border border-blue-100/50 hover:border-blue-300/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group/item"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(20px)",
                        transition: "all 0.5s ease-out",
                      }}
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-700 text-base leading-relaxed">
                        {use}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Animated corner accent */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <div className="space-y-6">
            {/* SUMMARY CARD */}
            <div
              className={`bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl p-8 border border-gray-100 sticky top-28 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "1100ms" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Product Summary
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {product.shortDescription ||
                  "Premium engineered industrial product."}
              </p>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">Contact for Pricing</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>

                {product.pdfLink && (
                  <a
                    href={product.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-base font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                  >
                    <svg
                      className="w-5 h-5 relative z-10 group-hover:animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="relative z-10">View / Download PDF</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </a>
                )}
              </div>
            </div>

            {/* HELP CARD */}
            <div
              className={`bg-gradient-to-br from-blue-600 to-indigo-700 shadow-xl rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "1300ms" }}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    animation: "drift 20s linear infinite",
                  }}
                ></div>
              </div>

              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm relative z-10 group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-3 relative z-10">
                Need Expert Help?
              </h4>
              <p className="text-blue-100 mb-6 leading-relaxed relative z-10">
                Our specialists will guide you in selecting the perfect product
                for your specific project requirements.
              </p>
              <button className="w-full bg-white hover:bg-blue-50 text-blue-700 px-6 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative z-10 group">
                <span className="group-hover:tracking-wide transition-all duration-300">
                  Talk to Specialist
                </span>
              </button>

              {/* Glowing orb effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
