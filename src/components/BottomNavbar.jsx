import { Link } from "react-router-dom";
import { FiHome, FiHeart, FiShoppingCart, FiUser, FiTag } from "react-icons/fi";
import { useEffect, useState } from "react";
import { apiClient } from "../utils/api.js";

const BottomNavbar = () => {


   const [cartItems, setCartItems] = useState([]);
    const [wishListItems, setWishListItems] = useState([]);


      useEffect(() => {
        const userId = localStorage.getItem("id");
    
        if (userId) {
          apiClient
            .get(`/get-cart/${userId}`)
            .then((res) => setCartItems(res.data))
            .catch((err) => console.error("Cart error:", err));
    
          apiClient
            .get(`/get-wishlist/${userId}`)
            .then((res) => setWishListItems(res.data))
            .catch((err) => console.error("Wishlist error:", err));
        }
      }, []);
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50 md:hidden">
      <div className="flex justify-around items-center  text-gray-700 text-xs py-2">
        <Link to="/" className="flex flex-col items-center justify-center">
          <FiHome size={24} />
          <span className="mt-1">HOME</span>
        </Link>

        <Link to="/wishlist" className="flex flex-col items-center cursor-pointer hover:bg-neutral-400 justify-center">
          <FiHeart size={24} />
            {wishListItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-gray-500 sm:block hidden text-white rounded-full text-xs w-5 h-5 :flex  items-center justify-center">
                {wishListItems.length}
              </span>
            )}
          <span className="mt-1">WISHLIST</span>
        </Link>

        <Link to="/shop" className="flex flex-col cursor-pointer hover:bg-neutral-400 items-center justify-center">
          <FiTag size={24} />
          <span className="mt-1">PRODUCTS</span>
        </Link>

        <Link to="/account" className="flex flex-col cursor-pointer hover:bg-neutral-400 items-center justify-center">
          <FiUser size={24} />
          <span className="mt-1">ACCOUNT</span>
        </Link>

        <Link to="/shoppingcart" className="flex flex-col items-center cursor-pointer hover:bg-neutral-400 justify-center">
          <FiShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          <span className="mt-1">CART</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavbar;


