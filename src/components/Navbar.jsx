import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import logogreen from "../assets/logogreen.png";
import { AppContext } from "../context/AppContext";
import { apiClient } from "../utils/api";

const Navbar = () => {
  const [wishListItems, setWishListItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { cartItems, logout } = useContext(AppContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (userId) {
      apiClient
        .get(`/get-wishlist/${userId}`)
        .then((res) => setWishListItems(res.data))
        .catch((err) => console.error("Wishlist error:", err));
    }
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        apiClient
          .get(`/search-product?q=${searchQuery}`)
          .then((res) => setSearchResults(res.data))
          .catch((err) => console.error("Search error:", err));
      } else {
        setSearchResults([]);
      }
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleLogout = () => {
    localStorage.clear();
    logout();
    navigate("/login", { replace: true });
  };

  return (
   <nav className="sticky top-0 w-full bg-[#e8ebea] shadow-md z-50 font-Poppins">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8 lg:py-4 gap-4 w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4CB19A] tracking-wide">
              Joy
            </span>
            <span className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#4CB19A] tracking-wider drop-shadow-sm">
              Cart
            </span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-auto w-full">
          <div className="relative bg-white flex items-center rounded-full px-4 py-2 sm:px-6 shadow-sm h-10 md:h-12 lg:h-14">
            <IoIosSearch className="text-gray-500 text-xl md:text-2xl mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full outline-none text-xs sm:text-sm md:text-lg text-gray-700 bg-transparent font-medium"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 flex-shrink-0">
          {/* Wishlist */}
          <Link to="/wishlist" className="relative hidden sm:block" aria-label="Wishlist">
            <FiHeart className="text-2xl md:text-3xl text-gray-700 hover:text-pink-500 transition" />
            {wishListItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#4CB19A] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {wishListItems.length}
              </span>
            )}
          </Link>

          {/* Account / Logout */}
          {token ? (
             <button onClick={handleLogout} aria-label="Logout">
              <FiUser className="text-2xl md:text-3xl text-gray-700 hover:text-[#4CB19A] transition" />
            </button>
          ) : (
            <Link to="/login" aria-label="Login">
              <FiUser className="text-2xl md:text-3xl text-gray-700 hover:text-[#4CB19A] transition" />
            </Link>
          )}

          {/* Cart */}
          <Link to="/shoppingcart" className="relative" aria-label="Shopping Cart">
            <FiShoppingCart className="text-2xl md:text-3xl text-gray-800 hover:text-green-700 transition" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#4CB19A] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
