import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getData } from "../ProductList";
import { apiClient } from "../utils/api";

const Popular = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    try {
      const response = await getData();
      if (response.data) {
        setProduct(response.data);
        setFilteredProducts(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    if (!selectedCategory) {
      setFilteredProducts(product);
    } else {
      const filtered = product.filter(
        (item) =>
          item.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, product]);

  const handleClickwishList = async (id) => {
    const user = localStorage.getItem("id");
    if (!user) {
      toast.warn("Please login to add to wishlist.");
      navigate("/Login");
      return;
    }

    try {
      await apiClient.post("/wish-list", {
        user,
        product: id,
        quantity: 1,
      });
      toast.success("Added to wishlist!");
    } catch (err) {
      console.error("Wishlist error:", err);
      toast.error("Failed to add to wishlist.");
    }
  };

  return (
    <section className="w-full bg-gray-50 py-10 font-Poppins">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 tracking-tight">
          ✨ Trending Now
        </h2>
        <p className="text-base md:text-lg text-gray-500 mt-2">
          Discover what’s popular and trending today
        </p>
      </div>

      {/* Product Grid */}
      <div
        className="
          grid gap-6 px-3 sm:px-6 md:px-12
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5
        "
      >
        {filteredProducts.map((item, index) => (
          <div
            key={item._id}
            className="
              group bg-white rounded-2xl shadow transition-shadow duration-300 
              flex flex-col overflow-hidden relative hover:shadow-2xl
            "
          >
            {/* Image Section */}
            <div
              className="relative w-full aspect-[4/5] overflow-hidden cursor-pointer"
              onClick={() => navigate(`/productdetiles/${item._id}`)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain bg-gray-50 p-4 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              {item.discount && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-full shadow">
                  {item.discount}% OFF
                </span>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClickwishList(item._id);
                }}
                aria-label="Add to wishlist"
                className="absolute top-3 right-3 bg-white/90 hover:bg-teal-500 hover:text-white text-[#4CB19A] p-2 rounded-full transition duration-300 shadow"
              >
                <CiHeart className="text-lg sm:text-2xl" />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col gap-1 flex-1">
              <h3 className="text-base md:text-lg font-medium text-gray-800 truncate">
                {item.name}
              </h3>
              <div className="text-[#4CB19A] font-semibold text-base md:text-lg">
                ₹{item.price.toFixed(2)}
              </div>
              <button
                onClick={() => navigate(`/productdetiles/${item._id}`)}
                className="
                  mt-4 bg-[#4CB19A] text-white text-sm md:text-base py-2 px-3 font-semibold
                  rounded-lg hover:bg-[#3b917f] transition-colors duration-300 shadow-sm
                "
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-gray-500">
          <span className="text-5xl mb-3">🔎</span>
          <p className="text-base md:text-lg">No products found in this category.</p>
        </div>
      )}
    </section>
  );
};

export default Popular;
