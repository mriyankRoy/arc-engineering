import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { products } from "../../utils/products";
import ProductCard from "../Products/ProductCard";
import { Search, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async"; // Use this for the absolute best SEO control

const SearchResultsPage = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const decodedQuery = decodeURIComponent(query);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    setCurrentPage(1);

    // Dynamic Title & Meta (Native fallback if not using Helmet)
    document.title = `Search: ${decodedQuery.toUpperCase()} | Arc Engineering Solutions`;
  }, [query, decodedQuery]);

  // Optimized flattening logic
  const allItems = products.flatMap((category) => {
    const baseSlug = category.slug;
    if (category.type === "parent" && category.subCategories) {
      return category.subCategories.flatMap((sub) =>
        (sub.items || []).map((item) => ({ ...item, categorySlug: sub.slug })),
      );
    }
    return (category.items || []).map((item) => ({
      ...item,
      categorySlug: baseSlug,
    }));
  });

  const results = allItems.filter((item) => {
    const searchTerm = decodedQuery.toLowerCase();
    return (
      item.name?.toLowerCase().includes(searchTerm) ||
      item.manufacturerPartNumber?.toLowerCase().includes(searchTerm) ||
      item.description?.toLowerCase().includes(searchTerm) // SEO: Search in description too
    );
  });

  const totalPages = Math.ceil(results.length / itemsPerPage) || 1;
  const paginatedResults = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // SEO UX: Scroll back to the results header, not the very top
    const mainSection = document.getElementById("main-content");
    mainSection?.scrollIntoView({ behavior: "smooth" });
  };

  const BoxedPagination = () => (
    <nav aria-label="Pagination" className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
          Index {currentPage} / {totalPages}
        </span>
        <div className="flex gap-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1.5 cursor-pointer rounded-lg border border-gray-100 disabled:opacity-20 hover:border-[#BF092F] transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-1.5 cursor-pointer rounded-lg border border-gray-100 disabled:opacity-20 hover:border-[#BF092F] transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-white text-[#44444E] font-sans selection:bg-[#BF092F] selection:text-white">
      {/* 1. ADVANCED SEO HEAD TAGS */}
      {/* If you have react-helmet-async, wrap these in <Helmet> */}
      <meta name="description" content={`Technical registry results for ${decodedQuery}. Browse engineering specifications and part details at Arc Engineering.`} />
      <meta name="robots" content="noindex, follow" /> {/* CRITICAL: Tells Google to follow links to products but not rank this specific search result page to avoid 'Thin Content' penalties */}
      <link rel="canonical" href={`https://arcengltd.com/search/${encodeURIComponent(query)}`} />

      {/* 2. JSON-LD: Machine-readable data for Google's Knowledge Graph */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SearchResultsPage",
          "name": `Search Results for ${decodedQuery}`,
          "description": `Found ${results.length} items matching ${decodedQuery}`,
          "url": window.location.href,
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arcengltd.com/" },
              { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://arcengltd.com/products" },
              { "@type": "ListItem", "position": 3, "name": "Search" }
            ]
          }
        })}
      </script>

      <div className="pt-22 px-2 md:px-2">
        <header className="shadow-xl relative h-[28vh] min-h-[300px] w-full flex items-center bg-[#44444E] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <nav className="hidden md:flex items-center flex-wrap gap-3 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-3">
                <li className="flex items-center">
                  <button onClick={() => navigate("/")} className="group flex items-center gap-1 text-white/50 hover:text-white transition-colors">
                    <Home size={14} />
                    <span className="text-[10px] md:text-xs tracking-widest uppercase font-bold">Home</span>
                  </button>
                </li>
                <li className="text-white/20 text-xs font-mono">{">"}</li>
                <li className="flex items-center">
                  <button onClick={() => navigate("/products")} className="text-[10px] md:text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors font-bold">
                    Products
                  </button>
                </li>
                <li className="text-white/20 text-xs font-mono">{">"}</li>
                <li aria-current="page">
                  <h2 className="text-[10px] md:text-xs tracking-widest uppercase bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg font-bold">
                    Search: {decodedQuery}
                  </h2>
                </li>
              </ol>
            </nav>

            <div role="status" aria-live="polite">
              <h1 className={`font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                Registry <span className="text-[#BF092F]">Query</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed mt-4 max-w-3xl">
                Displaying system matches for:{" "}
                <strong className="text-white font-mono italic font-normal">
                  "{decodedQuery}"
                </strong>
              </p>
            </div>
          </div>
        </header>
      </div>

      <main className="container mx-auto py-7 relative z-30 px-4" id="main-content">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 min-h-[600px] flex flex-col">
          <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-4">
              <div className="h-6 w-1 bg-[#BF092F]" aria-hidden="true" />
              <h2 className="tracking-widest text-[#44444E] uppercase text-sm font-bold">
                {results.length > 0 ? "Search Findings" : "System Alert"}
              </h2>
            </div>
            {totalPages > 1 && <BoxedPagination />}
          </div>

          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search size={48} className="text-gray-200 mb-6" />
              <h3 className="text-xl font-bold text-[#44444E] mb-2 uppercase tracking-tight">
                No Records Found
              </h3>
              <p className="text-gray-400 text-sm mb-8">Refine your query or check our category directory.</p>
              <button
                onClick={() => navigate("/products")}
                className="flex items-center gap-3 px-8 py-4 bg-[#44444E] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#BF092F] transition-all shadow-lg"
              >
                <ChevronLeft size={16} /> Return to Registry
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
                {paginatedResults.map((item, idx) => (
                  <article
                    key={item.id || idx}
                    className="transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* SEO: Using <article> for individual items helps Google see them as separate entities */}
                    <ProductCard
                      product={item}
                      categorySlug={item.categorySlug}
                    />
                  </article>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
                  <BoxedPagination />
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" aria-hidden="true" />
    </div>
  );
};

export default SearchResultsPage;