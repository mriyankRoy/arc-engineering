import React, { useState, useEffect } from "react";
// Ensure this path correctly leads to the updated products array
import { products } from "../../utils/products";
import ProductCard from "./ProductCard";
import { useLocation, useNavigate } from "react-router";
import { Filter, Home, ArrowRight } from "lucide-react";

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categorySlug = queryParams.get("category");

  // Determine if we are on the general overview page (no category selected)
  const isGeneralOverview = !categorySlug;

  // Find the matched category or default to the first one only if we AREN'T on the general overview
  const matchedCategory = categorySlug
    ? products.find((p) => p.slug === categorySlug)
    : null;

  // When a category is selected, this holds the current data.
  // We use the first category as a fallback only if 'isGeneralOverview' is false
  const currentCategory = !isGeneralOverview
    ? matchedCategory || products[0]
    : null; // Set to null if we are showing the general overview

  const [selectedCategory, setSelectedCategory] = useState(
    currentCategory ? currentCategory.category : ""
  );

  // --- ANIMATION AND SCROLL STATE ---
  // Default isVisible to false to ensure the entrance animation runs.
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Reset state for animation to run again
    setIsVisible(false);

    // **********************************************
    // FIX: Explicitly scroll to the top of the page
    window.scrollTo(0, 0);
    // **********************************************

    // 2. Wait briefly before showing content to force the transition
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // A small delay is crucial to ensure CSS transition runs

    // 3. Update selected category state based on URL/matched data
    if (currentCategory) {
      setSelectedCategory(currentCategory.category);
    } else {
      setSelectedCategory(""); // Reset if showing general overview
    }

    // 4. Clean up the timer
    return () => clearTimeout(timer);
  }, [categorySlug, currentCategory]); // Re-run effect when category changes

  /**
   * Component for the initial view: showing all categories as cards.
   * RENDERED for Maximum Visual Impact, Depth, and Perfect Alignment (Fixed H-96).
   * Uses strict color palette: #BF092F, #44444E, White, Black.
   */
  const AllCategoriesOverview = () => (
    <div className="container mx-auto px-4 p-7">
      <h2 className="text-4xl font-extrabold text-[#44444E] mb-7 pb-4 border-b border-gray-100">
        Explore Product Categories
      </h2>

      {/* GRID CONTAINER: Ensures cards are perfectly aligned and uniform width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
        {products.map((category, idx) => (
          <div
            key={idx}
            onClick={() => {
              navigate(`/products?category=${category.slug}`);
            }}
            // WRAPPER STYLING: Enforces full height for alignment and contains the glow
            className="group relative flex flex-col overflow-hidden cursor-pointer rounded-3xl transition-all duration-700 transform hover:-translate-y-2"
          >
            {/* 1. Animated GLOW EFFECT (Accent Color #BF092F) */}
            <div className="absolute -inset-3 bg-gradient-to-br from-[#BF092F]/60 via-transparent to-red-900/40 rounded-3xl blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>

            {/* 2. Main Card Content Container (FIXED HEIGHT h-96 applied here for alignment) */}
            <div
              className="relative z-10 flex flex-col h-96 bg-white shadow-2xl rounded-3xl border border-gray-100
                       transition-all duration-500 ease-out group-hover:shadow-3xl"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Image Area (Top 50%) */}
              <div className="w-full h-1/2 overflow-hidden relative border-b-4 border-transparent group-hover:border-[#BF092F] transition-all duration-500">
                {category.image && (
                  <img
                    src={category.image.url}
                    alt={category.image.alt || category.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                  />
                )}
                {/* Intentional Gradient Overlay for premium look */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#44444E]/20 to-transparent group-hover:from-transparent transition-colors duration-500"></div>
              </div>

              {/* Text Content Area (Bottom 50%) */}
              <div className="p-6 flex flex-col justify-between h-1/2">
                {/* Title and Description */}
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#44444E] mb-2 group-hover:text-[#BF092F] transition-colors duration-300">
                    {category.category}
                  </h3>

                  {/* Description (line-clamp-2 to prevent overflow) */}
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {category.description ||
                      `${category.items.length} specialized products.`}
                  </p>
                </div>

                {/* CTA - View link with Arrow icon (Prominent and clear) */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-semibold text-[#44444E]/70 uppercase tracking-widest">
                    {category.items.length} Products
                  </span>

                  {/* Animated Arrow Icon CTA */}
                  <div className="flex items-center text-sm font-bold text-[#44444E] group-hover:text-[#BF092F] transition-all duration-300">
                    View Collection
                    <ArrowRight
                      size={20}
                      className="ml-2 text-[#BF092F] transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  // ----------------------------------------

  // --- JSX Rendering ---
  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      {/* Responsive Padding: pt-32 pb-16 (small screens) / lg:pt-40 lg:pb-40 (large screens) */}
      <div className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-[#44444E] opacity-95"></div>

        {/* Dynamic Category Image in Hero (ONLY for specific categories) */}
        {!isGeneralOverview && currentCategory && currentCategory.image && (
          <img
            src={currentCategory.image.url}
            alt={currentCategory.image.alt || currentCategory.category}
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        )}

        {/* Animated pattern (Texture) - REMOVED SCROLLY STYLE */}
        <div
          className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS1wd2lkdGg9IjEiLz48L2RlZnM+PjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCIiLz48L2RlZnM+PC9zdmc=')] "
        ></div>

        {/* Animated background pattern (Subtle dots/texture) */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              animation: "drift 20s linear infinite", // Requires custom CSS for @keyframes drift
            }}
          ></div>
        </div>

        {/* Animated light beams (Texture) - White/red */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
          <div
            className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#CF0F0F] to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Hero Content Container (Text) */}
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl text-left">
            {/* --- BREADCRUMB --- */}
            <nav
              className={`mb-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              aria-label="Breadcrumb"
              style={{ transitionDelay: "100ms" }}
            >
              <ol className="inline-flex items-center space-x-2 text-sm md:text-base font-medium">
                {/* 1. HOME Link */}
                <li className="inline-flex items-center">
                  <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-1 text-white/80 hover:text-[#CF0F0F] transition-colors duration-200 focus:outline-none"
                  >
                    <Home className="w-4 h-4" />
                    Home
                  </button>
                </li>

                {/* Separator */}
                <li className="text-white/50">
                  <span className="mx-2">&gt;</span>
                </li>

                {/* 2. Products Root Link - REVERTED TO RED TAG WHEN ACTIVE */}
                <li className="inline-flex items-center">
                  <button
                    onClick={() => navigate("/products")}
                    className={`text-white transition-colors duration-200 focus:outline-none ${
                      isGeneralOverview
                        ? "px-4 py-1 bg-[#CF0F0F] text-white rounded-full font-semibold whitespace-nowrap"
                        : "hover:text-[#CF0F0F]"
                    }`}
                  >
                    Products
                  </button>
                </li>

                {/* 3. Category Name (Current Page) - Only show and style as tag if a category is selected */}
                {!isGeneralOverview && currentCategory && (
                  <>
                    {/* Separator */}
                    <li className="text-white/50">
                      <span className="mx-2">&gt;</span>
                    </li>
                    <li
                      // This remains the red tag, as it's the final, active element on the category page
                      className={`inline-block px-4 py-1 bg-[#CF0F0F] text-white rounded-full font-semibold whitespace-nowrap`}
                    >
                      {currentCategory.category}
                    </li>
                  </>
                )}
              </ol>
            </nav>
            {/* --- END BREADCRUMB --- */}

            <h1
              className={`text-3xl sm:text-5xl md:text-5xl font-extrabold text-white mb-4 transition-all duration-1000 delay-150 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {/* Dynamic Title based on view */}
              {isGeneralOverview
                ? "Powering Industries with World-Class Solutions"
                : currentCategory.category}
            </h1>
            <p
              className={`mt-6 text-xl text-white/90 max-w-3xl transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {/* Dynamic Subtitle based on view - Uses new category.description */}
              {isGeneralOverview
                ? "From precision instruments to robust enclosures, our advanced power systems deliver reliability, efficiency, and rapid deployment for industries across the UK and Europe."
                : currentCategory.description ||
                  `Browse all products in the ${currentCategory.category} category.`}
            </p>
          </div>
        </div>
      </div>{" "}
      {/* END OF HERO SECTION */}
      {/* --- CONDITIONAL CONTENT AREA --- */}
      {isGeneralOverview ? (
        // RENDER 1: GENERAL OVERVIEW (Category Cards)
        <AllCategoriesOverview />
      ) : (
        // RENDER 2: SPECIFIC CATEGORY VIEW (Sidebar + Product Grid)
        <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 flex-shrink-0 lg:block hidden">
            <div
              className={`bg-white shadow-2xl rounded-3xl p-6 border border-[#CF0F0F]/10 sticky top-6 h-fit transition-all duration-300`}
            >
              {/* Title, using the imported Filter icon */}
              <h2 className="text-2xl font-extrabold mb-5 border-b pb-3 border-[#44444E]/20 text-[#44444E] flex items-center gap-3">
                <Filter size={24} className="text-[#CF0F0F]" /> Categories
              </h2>

              <ul className="space-y-2">
                {products.map((category, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSelectedCategory(category.category);
                      navigate(`/products?category=${category.slug}`);
                    }}
                    className={`cursor-pointer px-4 py-3 rounded-xl text-lg transition-all duration-300 ease-in-out relative group ${
                      selectedCategory === category.category
                        ? "bg-[#CF0F0F] text-white font-semibold shadow-lg shadow-[#CF0F0F]/40 transform scale-[1.03]"
                        : "text-[#44444E] hover:bg-[#44444E]/10 hover:text-black hover:pl-6"
                    }`}
                  >
                    {category.category}

                    {/* Hover accent for non-selected items */}
                    {selectedCategory !== category.category && (
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#CF0F0F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
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
      )}
    </div>
  );
};

export default ProductPage;