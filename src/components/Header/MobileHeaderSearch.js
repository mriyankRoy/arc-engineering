import React, { useState, useEffect, useRef } from "react";
import { products } from "../../utils/products";
import { useNavigate } from "react-router";
import { Search, X } from "lucide-react"; // Added icons for better UX

const MobileHeaderSearch = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setActiveIndex(-1);
    
    if (value.trim().length < 1) {
      setResults([]);
      return;
    }

    // Logic for finding items in both parent and standard categories
    const allItems = products.flatMap((c) =>
      c.type === "parent"
        ? c.subCategories.flatMap((s) =>
            (s.items || []).map((i) => ({ ...i, categorySlug: s.slug }))
          )
        : (c.items || []).map((i) => ({ ...i, categorySlug: c.slug }))
    );

    const filtered = allItems.filter((i) => 
      i.name?.toLowerCase().includes(value.toLowerCase()) || 
      i.manufacturerPartNumber?.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered.slice(0, 5));
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault(); // Prevent accidental page refreshes
    if (query.trim()) {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      navigate(`/search/${encodeURIComponent(query)}`);
      setResults([]);
      if (onSelect) onSelect();
    }
  };

  const handleSelect = (item) => {
    navigate(`/products/${item.categorySlug}/${item.id}`);
    setQuery("");
    setResults([]);
    if (onSelect) onSelect();
  };

  return (
    <div ref={searchRef} className="relative w-full">
      {/* 1. SEMANTIC FORM: Critical for Mobile 'Search' button on keyboards */}
      <form onSubmit={handleSearchSubmit} role="search" className="relative group">
        <label htmlFor="mobile-search-input" className="sr-only">Search Generator Parts</label>
        <div className="relative flex items-center">
          <input
            id="mobile-search-input"
            type="search" // SEO/UX: Shows 'Search' button on mobile keyboards
            value={query}
            onChange={handleSearchChange}
            placeholder="SEARCH REGISTRY..."
            autoComplete="off"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white text-lg font-bold placeholder:text-white/20 focus:outline-none focus:border-[#BF092F] focus:bg-white/10 transition-all"
            aria-label="Search Arc Engineering Products"
            aria-autocomplete="list"
            aria-expanded={results.length > 0}
            aria-controls="mobile-search-results"
          />
          <Search className="absolute left-4 w-5 h-5 text-white/30" aria-hidden="true" />
          
          {query && (
            <button 
              type="button" 
              onClick={() => setQuery("")}
              className="absolute right-4 p-2 text-white/40 hover:text-white"
              aria-label="Clear search"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </form>

      {/* 2. ACCESSIBLE RESULTS LIST */}
      {results.length > 0 && (
        <ul 
          id="mobile-search-results"
          role="listbox"
          className="absolute z-[120] w-full bg-[#2A2A32]/98 backdrop-blur-xl mt-3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2"
        >
          {results.map((item, idx) => (
            <li
              key={item.id}
              role="option"
              aria-selected={activeIndex === idx}
              onClick={() => handleSelect(item)}
              className={`px-6 py-4 border-b border-white/5 cursor-pointer transition-all duration-300 active:bg-[#BF092F] ${
                activeIndex === idx ? "bg-[#BF092F] text-white" : "text-white/70"
              }`}
            >
              <div className="flex flex-col gap-0.5">
                <span className={`block text-[9px] font-black tracking-[0.2em] uppercase ${activeIndex === idx ? "text-white" : "text-[#BF092F]"}`}>
                  {item.manufacturerPartNumber}
                </span>
                <span className="text-sm font-bold leading-tight">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileHeaderSearch;