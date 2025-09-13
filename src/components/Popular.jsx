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
      alert("Please login to add to wishlist.");
      navigate("/Login");
      return;
    }

    try {
      await apiClient.post("/wish-list", {
        user,
        product: id,
        quantity: 1,
      });
      toast.success("Product added to wishlist!");
    } catch (err) {
      console.error("Wishlist error:", err);
      toast.error("Failed to add to wishlist.");
    }
  };

  return (
    <div className="w-full -mt-6 bg-gray-50 font-Poppins">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:pt-6 pt-4 lg:text-4xl font-semibold text-[#212529]">
          Trending Now
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 px-4 sm:px-6 md:px-12 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between"
          >
            {/* Image Section */}
            <div className="relative h-48 md:h-60 lg:h-72 overflow-hidden rounded-t-lg cursor-pointer">
              <img
                onClick={() => navigate(`/productdetiles/${item._id}`)}
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
              />
              {item.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.discount}% OFF
                </div>
              )}
              <CiHeart
                onClick={() => handleClickwishList(item._id)}
                className="absolute top-2 right-2 text-white bg-[#4CB19A] p-1 rounded-full text-2xl md:text-3xl hover:scale-110 transition"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col gap-2">
              <p className="text-sm md:text-base font-medium text-gray-700 truncate">
                {item.name}
              </p>

              <div className="text-[#4CB19A] font-bold text-lg md:text-xl">
                ₹{item.price.toFixed(2)}
              </div>

              {/* Uncomment this for Add to Cart */}
              {/* <button
                onClick={() => handleClick(item._id)}
                className="mt-2 flex items-center justify-center gap-2 bg-[#f0f0f0] hover:bg-[#e5e5e5] text-sm md:text-base font-medium px-4 py-2 rounded shadow"
              >
                <FiShoppingCart className="text-lg" />
                Add to Cart
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
