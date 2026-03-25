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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow max-w-7xl mx-auto w-full mt-4 md:mt-8 lg:mt-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 tracking-tight">
          Default Wishlist
        </h1>

        <div className="overflow-x-auto bg-white border border-gray-100 rounded-2xl shadow-sm mb-12">
          <table className="min-w-full table-auto border-collapse text-left text-sm sm:text-base">
            <thead className="bg-gray-100 text-gray-700 text-sm sm:text-base border-b border-gray-200">
              <tr>
                <th className="py-4 px-4 sm:px-6 font-semibold"></th>
                <th className="py-4 px-4 sm:px-6 font-semibold">Product Name</th>
                <th className="py-4 px-4 sm:px-6 font-semibold">Unit Price</th>
                <th className="py-4 px-4 sm:px-6 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {wishListItems?.map((item) => (
                <tr key={item._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 sm:px-6 align-middle text-center w-16">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item?.product?.image}
                        alt={item?.product?.name}
                        className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 p-2 rounded-lg object-contain shadow-sm border border-gray-100"
                        onError={(e) => (e.target.src = "/no-image.png")}
                      />
                      <span className="capitalize text-sm md:text-base lg:text-lg font-semibold text-gray-800 line-clamp-2">
                        {item?.product?.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#4CB19A] font-bold text-base md:text-lg whitespace-nowrap">
                    ₹{item?.product?.price?.toFixed(2)}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-center align-middle">
                    <button
                      onClick={() => handleAddToCart(item.product._id)}
                      className="inline-flex justify-center items-center bg-[#4CB19A] hover:bg-[#3a8d7c] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-xl shadow-md transition-all sm:text-sm font-medium w-full sm:w-auto"
                    >
                      <FiShoppingCart className="mr-2" />
                      <span className="hidden sm:inline">Add to Cart</span>
                    </button>
                  </td>
                </tr>
              ))}
              {(!wishListItems || wishListItems.length === 0) && (
                <tr>
                  <td colSpan="4" className="py-12 text-center text-gray-500">
                    Your wishlist is empty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishList;
