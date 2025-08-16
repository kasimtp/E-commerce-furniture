

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
    <div className="w-full font-Poppins pt-4 bg-[#edf0ef] ">
      {/* Categories */}
      <div className="flex flex-wrap justify-center bg-gray-000  gap-2 lg:gap-20 rounded-lg sm:gap-3  py-6 lg:py-12  px-3  top-12  z-20 ">
        {["All", "Men's", "Watchs", "Shoes", "Accessories", "More items", "Headset" ,"airpod"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-3 py-1.5 border  rounded-lg  font-medium border-[#e8ebea] p-4 text-xs sm:text-sm lg:text-[33px] lg:w-68 lg:h-24   lg:py-2 lg:px-6 transition ${
                selectedCategory === cat
                  ? "bg-[#4CB19A]  text-white scale-105 shadow"
                  : "bg-white  text-black hover:bg-black hover:text-white"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Sorting */}
      <div className="flex flex-col md:flex-row justify-between lg:pt-18   items-start md:items-center px-4 md:px-16 my-6 gap-4">
        <p className="text-sm sm:text-base lg:text-[40px] font-medium">
          Showing {filteredProducts.length} result(s)
        </p>
        <div className="w-full  bg-red-000 lg:w-[800px]   md:w-auto flex flex-col sm:flex-row gap-2">
          <label htmlFor="sort" className="text-sm lg:text-[38px] font-medium text-gray-700">
            Sort by
          </label>
          <select
            id="sort"
            name="sort"
            className="w-full sm:w-64 px-3 py-2 border lg:text-[44px] lg:w-[400px] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
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
      <div className="grid grid-cols-2 bg-red-000 lg:mt-28 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-2  md:gap-6 lg:gap-20  mt-6 w-[92%] mx-auto">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className=" flex-col   bg-gray-000 gap-3 lg:py-8 md:gap-3 lg:gap-5 p-3 rounded-b-md  border-blue-000  md:rounded-4xl lg:rounded-4xl shadow-lg shadow-gray-300  hover:shadow-xl transition-shadow hover:shadow-gray-200   duration-300"
          >
            {/* Image */}
            <div className="relative bg-gray-000 rounded-sm overflow-hidden h-36 sm:h-44 md:h-52 lg:h-96 cursor-pointer">
              <img
                src={item.image}
                alt={item.name}
                onClick={() => navigate(`/productdetiles/${item._id}`)}
                className="w-full h-full p-2 object-contain transition-transform hover:scale-105 duration-300"                onError={(e) => (e.target.src = "/no-image.png")}
              />
              {item.discount && (
                <div className="absolute top-2 left-2 bg-white text-black text-[10px] font-semibold px-2 py-1 rounded-full shadow">
                  {item.discount}% OFF
                </div>
              )}
              {item.tag && (
                <div
                  className={`absolute top-2 right-2 text-[10px] font-semibold px-2 py-1 rounded-full text-white shadow ${
                    item.tag === "Popular"
                      ? "bg-blue-500"
                      : item.tag === "Latest Model"
                      ? "bg-green-500"
                      : "bg-purple-500"
                  }`}
                >
                  {item.tag}
                </div>
              )}
              <CiHeart
                onClick={() => handleClickwishList(item._id)}
               className="absolute top-0 right-0 lg:top-8 lg:right-8 text-xl ] md:text-2xl lg:text-[84px]  bg-[#4CB19A] text-white p-1 lg:p-3 rounded-full shadow cursor-pointer"
              />
            </div>

            {/* Details */}
            <div  className="flex flex-col lg:mt-8 items-left lg:items-center bg-red-000 gap-0">
              <p className="text-xs md:text-sm text-gray-500 lg:text-[42px]  font-semibold font-Poppins  capitalize">
                {item.name}
              </p>
              {item.extraText && (
                <p className="text-yellow-600 text-[10px] sm:text-xs font-medium">
                  {item.extraText}
                </p>
              )}
            <div className="flex items-center lg:mt-0 text-sm ">
                {/* <FaRupeeSign   className="text-[10px] text-[#4CB19A] lg:text-[32px] font-bold  " /> */}
                <span className="font-bold text-[14px] text-[#4CB19A] lg:text-[30px]  "> ₹{ item.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Shope;
