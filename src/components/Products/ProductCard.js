import React, { useState } from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product, categorySlug }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full max-w-sm mx-auto"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        onClick={() =>
          navigate(
            `/products/${categorySlug}/${encodeURIComponent(product.name)}`
          )
        }
        className={`relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-xl bg-white transition-transform duration-300 cursor-pointer ${
          hover ? "scale-[1.03] -translate-y-4" : ""
        }`}
        style={{ aspectRatio: "3/5" }}
      >
        <div className="absolute inset-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center hover:bg-white/80">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 p-6 text-white w-full">
          <button className="w-full mt-5 p-3 rounded-full bg-white text-gray-900 font-medium text-sm shadow-md hover:bg-gray-200 transition cursor-pointer">
            {product.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
