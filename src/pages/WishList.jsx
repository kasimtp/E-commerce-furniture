import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Check, Trash2 } from "lucide-react";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { apiClient } from "../utils/api.js";
import { FiShoppingCart } from "react-icons/fi";

const WishList = () => {
  const navigate = useNavigate();
  const [wishListItems, setWishListItems] = useState([]);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        if (userId) {
          const res = await apiClient.get(`/get-wishlist/${userId}`);
          setWishListItems(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch wishlist:", err);
      }
    };
    fetchWishlist();
  }, [userId]);

  const handleAddToCart = async (productId) => {
    try {
      const res = await apiClient.post("/post-cart", {
        user: userId,
        product: productId,
        quantity: 1,
      });

      if (res.status === 200) {
        toast.success("Product added to cart!");
      } else {
        toast.error("Failed to add to cart");
      }
    } catch (err) {
      console.error("Add to cart failed:", err);
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (wishlistId) => {
    try {
      const res = await apiClient.delete(`/delete-wishlist/${wishlistId}`);
      if (res.status === 200) {
        setWishListItems((prev) =>
          prev.filter((item) => item._id !== wishlistId)
        );
        toast.success("Removed from wishlist");
      }
    } catch (err) {
      console.error("Failed to delete wishlist item:", err);
      toast.error("Error removing item");
    }
  };

  return (
    <>
      <div className="mt-4 md:mt-8 lg:mt-28 px-4 sm:px-6 md:px-10 lg:px-24 min-h-[600px] bg-white">
        <h1 className="text-lg sm:text-2xl  md:text-4xl lg:text-[86px] lg:font-semibold font-semibold mb-6 text-gray-800">
          Default Wishlist
        </h1>

        <div className="overflow-x-auto bg-amber-000 border rounded-lg shadow-md">
          <table className="min-w-full table-auto border-collapse text-left text-sm sm:text-base">
            <thead className="bg-gray-100 lg:text-[48px] text-gray-700">
              <tr>
                <th className="p-3 sm:p-4"></th>
                <th className="p-3 sm:p-4 text-gray-800">Product Name</th>
                <th className="p-3 sm:p-4 text-gray-800">Unit Price</th>

                <th className="p-3 sm:p-4"></th>
              </tr>
            </thead>
            <tbody>
              {wishListItems?.map((item) => (
                <tr key={item._id} className="border-t ">
                  <td className="p-2  h-12 sm:p-4">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-black hover:text-red-700"
                    >
                      <Trash2  size={20} className="lg:text[84px] lg:ml-22 lg:h-14 lg:w-14" />
                    </button>
                  </td>
                  <td className="p-1 sm:p-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src={item?.product?.image}
                        alt={item?.product?.name}
                        className="w-18 h-18 lg:w-42 lg:h-42  p-4  text-gray-800 rounded object-cover"
                      />
                      <span className="capitalize   lg:text-[38px] text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                        {item?.product?.name}
                      </span>
                    </div>
                  </td>
                  <td className="p-2 sm:p-4 text-black  lg:text-[38px] font-bold">
                    ₹{item?.product?.price?.toFixed(2)}
                  </td>

                  <td className="p-1  sm:p-4">
                    <button
                      onClick={() => handleAddToCart(item.product._id)}
                      className="bg-[#4CB19A] hover:bg-blue-800 text-white lg:text-[88px] lg:w-[282px]  lg:h-[132px] h-[38px]  text-[22px] w-12 px-2 py-1.5 sm:px-4 sm:py-2 rounded-xs  sm:text-sm"
                    >
                      <FiShoppingCart className=" m-auto " />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WishList;
