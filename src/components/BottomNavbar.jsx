import { Link, useLocation } from "react-router-dom";
import { FiHome, FiHeart, FiShoppingCart, FiUser, FiTag } from "react-icons/fi";
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
    // { path: "/login", label: "ACCOUNT", icon: FiUser },
    { path: "/shoppingcart", label: "CART", icon: FiShoppingCart },
  ];

  return (
    <div className="  fixed px-2 bottom-0 left-0 right-0 bg-white border-t border-gray-200  -space-x-22 shadow-md z-50 md:hidden">
      <div className="flex justify-center space-x-10 items-center text-xs py-2 relative">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex flex-col  items-center justify-center"
            >
              {/* Animated background circle */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="activeBg"
                    className="absolute top-0 w-14 h-[50px]  rounded-md z-[-1]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </AnimatePresence>

              <motion.div
                animate={{ y: isActive ? -2 : 0 }}
                transition={{ duration: 0.2 }}
                className={isActive ? "text-[#4CB19A]" : "text-black"}
              >
                <Icon size={24} />
              </motion.div>

              {/* Badges */}
              {item.path === "/wishlist" && wishListItems.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-white text-text rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {wishListItems.length}
                </span>
              )}
              {item.path === "/shoppingcart" && cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#4CB19A] border-black text-white font-Poppins rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}

              <span className={`mt-1 ${isActive ? "text-[#4CB19A]  font-Poppins font-semibold" : "font-Poppins text-black"}`}>
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
