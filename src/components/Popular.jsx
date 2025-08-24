 
import { BsCart2 } from "react-icons/bs";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getData } from "../ProductList";
import { apiClient } from "../utils/api";
import { MdCurrencyRupee } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

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

  // const handleClick = async (id) => {
  //   const user = localStorage.getItem("id");
  //   if (!user) {
  //     alert("Please login to add to cart.");
  //     navigate("/Login");
  //     return;
  //   }

  //   try {
  //     await apiClient.post("/post-cart", {
  //       user,
  //       product: id,
  //       quantity: 1,
  //     });
  //     toast.success("Product added to cart!");
  //   } catch (err) {
  //     console.error("Cart error:", err);
  //     toast.error("Failed to add to cart.");
  //   }
  // };

  return (
    <div className="w-full mt-6 md:mt-10 font-Poppins bg-gray-50 lg:mt-16">
      {/* Header */}
      <div className="text-center pt-4">
        <p className="text-sm md:text-2xl lg:text-4xl  text-[#212529] font-Poppins font-extralight  decoration-[#4CB19A] capitalize">
          Trending now
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 bg-red-000 lg:mt-28 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-2  md:gap-6 lg:gap-20  mt-6 w-[92%] mx-auto">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className="flex flex-col   bg-gray-000 gap-3 lg:py-8 md:gap-3 lg:gap-5 p-3 rounded-b-md  border-blue-000  md:rounded-4xl lg:rounded-4xl shadow-lg shadow-gray-300  hover:shadow-xl transition-shadow hover:shadow-gray-200   duration-300"
          >
            {/* Image */}
            <div className="relative bg-gray-000 rounded-sm overflow-hidden h-36 sm:h-44 md:h-52 lg:h-96 cursor-pointer">
              <img
                onClick={() => navigate(`/productdetiles/${item._id}`)}
                src={item.image}
                alt={`popular-${index}`}
                 className="w-full h-full p-2 object-contain transition-transform hover:scale-105 duration-300"
              />
              {item.discount && (
                <div className="absolute top-2 left-2 bg-white text-black px-2 py-0.5 text-xs font-semibold rounded-full shadow">
                  5% OFF
                </div>
              )}
              <CiHeart
                onClick={() => handleClickwishList(item._id)}
                className="absolute top-0 right-0 lg:top-8 lg:right-8 text-xl ] md:text-2xl lg:text-[84px]  bg-[#4CB19A] text-white p-1 lg:p-3 rounded-full shadow cursor-pointer"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col lg:mt-8 items-left lg:items-center bg-red-000 gap-0">
              <p className="text-xs md:text-sm text-gray-500 lg:text-[42px]  font-semibold font-Poppins  capitalize">
                {item.name}
              </p>

              <div className="flex items-center lg:mt-0 text-sm ">
                {/* <FaRupeeSign   className="text-[10px] text-[#4CB19A] lg:text-[32px] font-bold  " /> */}
                <span className="font-bold text-[14px] text-[#4CB19A] lg:text-[30px]  "> ₹{ item.price.toFixed(2)}</span>
              </div>
{/* 
              <div
                className="flex items-center lg:gap-3 gap-2 text-center lg:w-[203px] lg:h-[53px] justify-center place-content-center m-auto bg-neutral-100 hover:bg-neutral-200 px-2 py-1 rounded shadow cursor-pointer"
                onClick={() => handleClick(item._id)}
              >
                <FiShoppingCart className="text-sm md:text-base lg:text-[28px]" />
                <span className="text-xs md:text-sm lg:text-[19px]  font-Poppins  font-medium">Add To Cart</span>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;



