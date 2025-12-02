import { useParams, useNavigate } from "react-router";
import { products } from "../../utils/products";

const SearchResultsPage = () => {
  const { query } = useParams();
  const navigate = useNavigate();

  const allItems = products.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      categorySlug: category.slug,
    }))
  );

  const results = allItems.filter((item) =>
    item.name.toLowerCase().includes(decodeURIComponent(query).toLowerCase())
  );

  if (results.length === 0) {
    return (
      <div className="pt-50 container mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-4">
          No results found for "{query}"
        </h1>
      </div>
    );
  }

  return (
    <div className="pt-50 container mx-auto py-20 px-6 ">
      {/* Background grid + radial gradient */}
      <div
        className="-z-10 absolute inset-0 
       bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
       bg-[size:40px_40px]
       before:content-[''] before:absolute before:inset-0 
       before:bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_60%)]
  "
      ></div>
      {/* FIXED: Gradient blob div closed properly */}
      <div className="absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0 bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl"></div>

      <h1 className="text-3xl font-bold mb-8">
        Search results for "{decodeURIComponent(query)}"
      </h1>

      <div className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {results.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition"
            onClick={() =>
              navigate(
                `/products/${item.categorySlug}/${encodeURIComponent(
                  item.name
                )}`
              )
            }
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-600">{item.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
