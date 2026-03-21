import React, { useState, useEffect, useRef } from "react";
import { products } from "../../utils/products";
import { useNavigate, Link } from "react-router"; 
import { Search, X } from "lucide-react";

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
    setActiveIndex(-1); // Reset highlight when typing
    
    if (value.trim().length < 1) {
      setResults([]);
      return;
    }

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

  // --- NEW KEYBOARD LOGIC ---
  const handleKeyDown = (e) => {
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && activeIndex !== -1) {
      e.preventDefault();
      handleSelect(results[activeIndex]);
    }
  };
  // ---------------------------

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    // If user presses Enter without highlighting an item, perform general search
    if (activeIndex === -1 && query.trim()) {
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
      <form 
        onSubmit={handleSearchSubmit} 
        role="search" 
        action="/search" 
        method="get"
        className="relative group"
      >
        <label htmlFor="mobile-search-input" className="sr-only">
          Search Engineering Products & Parts
        </label>
        
        <div className="relative flex items-center">
          <input
            id="mobile-search-input"
            name="q"
            type="search"
            value={query}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown} // Trigger arrow key logic here
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
              onClick={() => { setQuery(""); setResults([]); }}
              className="absolute right-4 p-2 text-white/40 hover:text-white"
              aria-label="Clear search input"
            >
              <X size={20} aria-hidden="true" />
            </button>
          )}
        </div>
      </form>

      {results.length > 0 && (
        <ul 
          id="mobile-search-results"
          role="listbox"
          className="absolute z-[120] w-full bg-[#2A2A32]/98 backdrop-blur-xl mt-3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          {results.map((item, idx) => (
            <li
              key={item.id}
              role="none"
              className="border-b border-white/5 last:border-0"
            >
              <Link
                to={`/products/${item.categorySlug}/${item.id}`}
                onClick={(e) => {
                    e.preventDefault();
                    handleSelect(item);
                }}
                className={`block px-6 py-4 cursor-pointer transition-all duration-300 ${
                  activeIndex === idx ? "bg-[#BF092F] text-white" : "text-white/70"
                }`}
                role="option"
                aria-selected={activeIndex === idx}
                title={`View details for ${item.name}`}
              >
                <div className="flex flex-col gap-0.5 pointer-events-none">
                  <span className={`block text-[9px] font-black tracking-[0.2em] uppercase ${activeIndex === idx ? "text-white" : "text-[#BF092F]"}`}>
                    {item.manufacturerPartNumber}
                  </span>
                  <span className="text-sm font-bold leading-tight">{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileHeaderSearch;