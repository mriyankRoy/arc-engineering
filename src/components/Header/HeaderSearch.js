import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { products } from "../../utils/products";
import { useNavigate } from "react-router";

const HeaderSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setHighlightedIndex(-1);

    if (value.trim().length < 1) {
      setResults([]);
      return;
    }

    // Performance: Memoize this if your product list grows significantly
    const allItems = products.flatMap((category) => {
      const items = category.items || [];
      const subItems = category.subCategories?.flatMap(sub => sub.items || []) || [];
      return [...items, ...subItems].map(item => ({
        ...item,
        categorySlug: category.slug
      }));
    });

    const filtered = allItems.filter((item) => {
      const searchTerm = value.toLowerCase();
      return (
        item.name?.toLowerCase().includes(searchTerm) || 
        item.manufacturerPartNumber?.toLowerCase().includes(searchTerm)
      );
    });

    setResults(filtered.slice(0, 5));
  };

  const handleSelect = (item) => {
    setQuery(""); 
    setResults([]);
    setHighlightedIndex(-1);
    navigate(`/products/${item.categorySlug}/${item.id}`);
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault(); // SEO: Prevent page reload on form submit
    if (query.trim()) {
      navigate(`/search/${encodeURIComponent(query)}`);
      setResults([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (highlightedIndex >= 0 && results.length > 0) {
        handleSelect(results[highlightedIndex]);
      } else {
        handleSearchSubmit();
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Escape") {
      setResults([]);
    }
  };

  return (
    <div ref={searchRef} className="relative flex items-center">
      {/* 1. SEMANTIC FORM: Helps Google recognize the search intent */}
      <form 
        role="search" 
        onSubmit={handleSearchSubmit} 
        className="relative w-full group"
      >
        <label htmlFor="product-search" className="sr-only">Search industrial products</label>
        <input
          id="product-search"
          type="search" // Use type="search" for mobile keyboard optimization
          placeholder="Search items..."
          autoComplete="off"
          className="pl-4 pr-10 py-2 bg-white/20 text-white placeholder-white/70 rounded-full border border-white/20 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BF092F] focus:bg-white focus:text-[#44444E] transition-all duration-300 w-28 lg:w-48 xl:w-90 hover:bg-white/20 hover:border-white/40"
          value={query}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          aria-label="Search products and technical specifications"
          aria-autocomplete="list"
          aria-expanded={results.length > 0}
          aria-owns="search-results-list"
        />
        <button 
          type="submit"
          aria-label="Submit search"
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer p-1 hover:bg-black/10 rounded-full transition-colors"
        >
          <Search className="text-white/70 w-4 h-4 transition-colors duration-300 group-focus-within:text-[#44444E]" />
        </button>

        {/* 2. DYNAMIC DROPDOWN */}
        {results.length > 0 && (
          <ul 
            id="search-results-list"
            role="listbox"
            className="absolute z-[120] w-full bg-white shadow-2xl rounded-2xl mt-3 py-2 border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200"
          >
            <li className="px-4 py-1 text-[9px] font-bold text-[#44444E]/40 uppercase tracking-[0.2em] mb-1" role="presentation">
              Quick Matches
            </li>
            {results.map((item, index) => (
              <li
                key={item.id}
                role="option"
                aria-selected={highlightedIndex === index}
                onClick={() => handleSelect(item)}
                className={`px-4 py-3 cursor-pointer transition-all duration-300 flex flex-col group ${
                  highlightedIndex === index 
                    ? "bg-[#BF092F] text-white" 
                    : "hover:bg-gray-100 text-[#44444E]"
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider ${highlightedIndex === index ? "text-white" : "text-[#BF092F]"}`}>
                    {item.manufacturerPartNumber}
                </span>
                <span className={`text-[11px] font-medium ${highlightedIndex === index ? "text-white/90" : "text-[#44444E]/80"}`}>
                    {item.name}
                </span>
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default HeaderSearch;