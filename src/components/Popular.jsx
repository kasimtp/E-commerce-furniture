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
    <div className="w-full bg-gray-50 font-Poppins py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#212529] tracking-tight">
            Trending Now
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col h-full overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative bg-gray-100 aspect-[4/5] sm:aspect-square flex justify-center items-center overflow-hidden cursor-pointer group">
                <img
                  onClick={() => navigate(`/productdetiles/${item._id}`)}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                {item.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm z-10">
                    {item.discount}% OFF
                  </div>
                )}
                <CiHeart
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickwishList(item._id);
                  }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 cursor-pointer text-gray-400 bg-white hover:text-white hover:bg-[#4CB19A] p-1.5 sm:p-2 rounded-full text-2xl sm:text-3xl lg:text-4xl shadow-md transform hover:scale-110 transition-all z-10"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4 md:p-5 flex flex-col cursor-pointer flex-grow justify-between bg-white z-20">
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800 line-clamp-2 mb-2 leading-tight">
                  {item.name}
                </p>

                <div className="text-[#4CB19A] font-bold text-sm sm:text-base md:text-xl">
                  ₹{item.price.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
