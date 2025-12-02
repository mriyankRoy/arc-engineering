import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { products } from "../../utils/products";

const HeaderDropDown = () => {
  return (
    <div className="relative group">
      {/* Trigger button */}
      <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition">
        Products
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
      </button>

      {/* Dropdown container */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[750px] bg-white border border-gray-200 rounded-3xl shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
        {/* Arrow pointing to trigger */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200 z-10"></div>

        {/* Horizontal grid for categories */}
        <div className="flex justify-between gap-10 p-8">
          {products.map((category) => (
            <div key={category.slug} className="flex flex-col space-y-2">
              {/* Category Title */}
              <Link
                to={`/products?category=${category.slug}`}
                className="font-semibold text-gray-800 hover:text-gray-900 transition text-lg"
              >
                {category.category}
              </Link>

              {/* Items */}
              <div className="flex flex-col space-y-1">
                {category.items.map((item) => (
                  <Link
                    key={item.name}
                    to={`/products/${category.slug}/${encodeURIComponent(item.name)}`}
                    className="text-gray-600 hover:text-gray-900 hover:underline transition text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderDropDown;
