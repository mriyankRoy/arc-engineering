import { useState } from "react";
import { ChevronDown } from "lucide-react";

const HeaderDropDown = () => {

  return (
    <div className="relative group">
      {/* Main nav button */}
      <button className="px-4 border-l border-r border-gray-300 inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition">
        Products
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      {/* Dropdown content */}
      <div
        className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-4 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50"
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Product A
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Product B
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Product C
        </a>
      </div>
    </div>
  );
};

export default HeaderDropDown;
