import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiTag,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { apiClient } from "../utils/api.js";
import { motion, AnimatePresence } from "framer-motion";

const BottomNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

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

  const navItems = [
    { path: "/", label: "HOME", icon: FiHome },
    { path: "/wishlist", label: "WISHLIST", icon: FiHeart },
    { path: "/shop", label: "PRODUCTS", icon: FiTag },
    { path: "/shoppingcart", label: "CART", icon: FiShoppingCart },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-md lg:hidden">
      <div className="flex justify-around items-center py-2 text-xs sm:text-sm md:text-base max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex flex-col items-center justify-center w-1/4 px-1"
            >
              {/* Animated Background (active item) */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="activeBg"
                    className="absolute top-0 w-14 h-[48px] rounded-md z-[-1] bg-gray-000"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </AnimatePresence>

              {/* Icon */}
              <motion.div
                animate={{ y: isActive ? -2 : 0 }}
                transition={{ duration: 0.2 }}
                className={isActive ? "text-[#4CB19A]" : "text-gray-700"}
              >
                <Icon size={22} />
              </motion.div>

              {/* Badge for cart */}
              {item.path === "/shoppingcart" && cartItems.length > 0 && (
                <span className="absolute top-0 right-3 bg-[#4CB19A] text-white text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}

              {/* Badge for wishlist (optional, uncomment to enable) */}
              {/* {item.path === "/wishlist" && wishListItems.length > 0 && (
                <span className="absolute top-0 right-3 bg-red-500 text-white text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {wishListItems.length}
                </span>
              )} */}

              {/* Label */}
              <span
                className={`mt-0.5 text-[11px] sm:text-xs font-Poppins ${
                  isActive ? "text-[#4CB19A] font-semibold" : "text-black"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;
