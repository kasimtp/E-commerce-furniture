import { BsCart2, BsCurrencyDollar } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { apiClient } from "../utils/api.js";

const Shope = () => {
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await apiClient.get("/get-product");
        if (response.data) setProduct(response.data);
      } catch (error) {
        toast.error("Product loading failed");
        console.error("❌ Fetch error:", error);
      }
    };
    fetchInfo();
  }, []);

  const handleClickwishList = async (id) => {
    const user = localStorage.getItem("id");
    if (!user) return navigate("/Login");

    try {
      await apiClient.post("/wish-list", { user, product: id, quantity: 1 });
      toast.success("Added to wishlist");
    } catch (error) {
      console.error(error);
      toast.error("Error adding to wishlist");
    }
  };

  const handleClick = async (id) => {
    const user = localStorage.getItem("id");
    if (!user) return navigate("/Login");

    try {
      await apiClient.post("/post-cart", { user, product: id, quantity: 1 });
      toast.success("Added to cart");
    } catch (error) {
      console.error(error);
      toast.error("Error adding to cart");
    }
  };

  const handleCategoryClick = (cat) => setSelectedCategory(cat);

  const filteredProducts =
    selectedCategory === "All"
      ? product
      : product.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full font-Poppins pt-4 bg-[#edf0ef]">
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 lg:gap-8 py-6 lg:py-12 px-3">
        {["All", "Men's", "Watches", "Shoes", "Accessories", "More items", "Headset", "Airpod"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-4 py-2 rounded-lg font-medium text-sm sm:text-base md:text-lg lg:text-xl transition
                ${selectedCategory === cat
                  ? "bg-[#4CB19A] text-white scale-105 shadow"
                  : "bg-white border border-gray-200 text-black hover:bg-black hover:text-white"
                }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Sorting */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-10 my-6 gap-4">
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-medium">
          Showing {filteredProducts.length} result(s)
        </p>
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <label htmlFor="sort" className="text-sm md:text-base lg:text-lg font-medium text-gray-700">
            Sort by
          </label>
          <select
            id="sort"
            name="sort"
            className="w-full sm:w-52 md:w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
          >
            <option>Default sorting</option>
            <option>Sort by popularity</option>
            <option>Sort by latest</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10 lg:px-16">
  {filteredProducts.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-4 flex flex-col"
    >
      {/* Image */}
      <div
        onClick={() => navigate(`/productdetiles/${item._id}`)}
        className="relative w-full h-44 sm:h-52 md:h-64 lg:h-72 flex items-center justify-center bg-gray-50 rounded-xl cursor-pointer overflow-hidden"
      >
        <img
          src={item.image}
          alt={item.name}
          className="h-full object-contain transition-transform duration-300 hover:scale-105"
          onError={(e) => (e.target.src = "/no-image.png")}
        />
        {/* Discount Badge */}
        {item.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-[11px] sm:text-xs font-bold px-2 py-1 rounded-full shadow-md">
            {item.discount}% OFF
          </div>
        )}
        {/* Tag Badge */}
        {item.tag && (
          <div
            className={`absolute top-3 right-3 text-[11px] sm:text-xs font-semibold px-2 py-1 rounded-full text-white shadow-md
              ${item.tag === "Popular" ? "bg-blue-500" : item.tag === "Latest Model" ? "bg-green-500" : "bg-purple-500"}`}
          >
            {item.tag}
          </div>
        )}
        {/* Wishlist Icon */}
        <CiHeart
          onClick={() => handleClickwishList(item._id)}
          className="absolute bottom-3 right-3 text-2xl bg-[#4CB19A] text-white p-1.5 rounded-full shadow-md cursor-pointer hover:scale-110 transition"
        />
      </div>

      {/* Details */}
      <div className="mt-4 flex flex-col gap-1">
        <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 capitalize">
          {item.name}
        </p>
        {item.extraText && (
          <p className="text-yellow-600 text-xs md:text-sm font-medium">{item.extraText}</p>
        )}
        <p className="text-lg md:text-xl font-bold text-[#4CB19A] mt-1">
          ₹{item.price.toFixed(2)}
        </p>
        <button
          onClick={() => handleClick(item._id)}
          className="mt-3 bg-[#4CB19A] text-white text-sm md:text-base font-medium px-4 py-2 rounded-lg shadow-md hover:bg-[#3a8d7c] transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>

      <Footer />
    </div>
  );
};

export default Shope;
