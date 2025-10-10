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
 <div className="flex flex-row items-center justify-between w-full px-3 py-3 md:py-4 lg:py-5 gap-2">
  
  {/* Logo */}
  <Link to="/" className="flex-shrink-0">
    <div className="flex items-center gap-1">
      <span className="text-2xl font-extrabold text-green-500">Joy</span>
      <span className="text-2xl font-extrabold text-teal-500">Cart</span>
    </div>
  </Link>

  {/* Search Bar */}
  <div className="flex-grow mx-2">
    <div className="relative bg-white flex items-center rounded-full px-3 h-10 shadow w-full">
      <IoIosSearch className="text-gray-500 text-xl mr-2" />
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-grow outline-none text-base text-gray-700 bg-transparent"
      />
    </div>
  </div>

  {/* Right Icons */}
  <div className="flex items-center gap-3">
    <Link to="/login">
      <FiUser className="text-2xl text-gray-700" />
    </Link>
    <Link to="/shoppingcart" className="relative">
      <FiShoppingCart className="text-2xl text-gray-800" />
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
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
