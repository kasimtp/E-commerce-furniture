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
  <div className="max-w-7xl mx-auto bg-red-000 flex flex-row lg:flex-row items-center lg:items-center justify-between px-4 py-3 md:py-4 lg:py-5 gap-3 lg:gap-0">
    
    {/* Logo */}
    <Link to="/" className="flex items-center gap-2">
      <div className="flex flex-row  bg-red-000 lg:flex-row items-start lg:items-center gap-0 lg:gap-2">
        <span className="text-[12px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 tracking-wide drop-shadow-md">
          Joy
        </span>
        <span className="text-[12px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#4CB19A] tracking-wider -mt- sm:-mt-2 md:-mt-2 lg:-mt-3 xl:-mt-4 drop-shadow-sm">
          Cart
        </span>
      </div>
    </Link>

    {/* Search Bar */}
    <div className="relative bg-white flex items-center rounded-full px-4 md:px-6 lg:px-8 w-[52%] sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[45%] h-8 md:h-14 lg:h-16 shadow-lg">
      <IoIosSearch className="text-gray-500 text-3xl md:text-4xl lg:text-5xl mr-3" />
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-grow outline-none text-[10px] md:text-xl lg:text-2xl text-gray-700 bg-transparent font-medium"
      />
      {searchResults.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-full max-h-[300px] overflow-y-auto bg-white shadow-xl rounded-xl z-50 border border-gray-200">
          {searchResults.map((item) => (
            <Link
              to={`/product/${item._id}`}
              key={item._id}
              onClick={() => {
                setSearchQuery("");
                setSearchResults([]);
              }}
              className="block px-4 py-3 hover:bg-[#f0f7f6] text-gray-800 text-lg lg:text-xl"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>

    {/* Right Icons */}
    <div className="flex items-center space-x-3 md:space-x-5 lg:space-x-8 mt-2 lg:mt-0">
      {/* Wishlist */}
      <Link to="/wishlist" className="relative hidden sm:block" aria-label="Wishlist">
        <FiHeart className="text-3xl md:text-4xl lg:text-5xl text-gray-700 hover:text-pink-500 transition" />
        {wishListItems.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-[#4CB19A] text-white text-[14px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
            {wishListItems.length}
          </span>
        )}
      </Link>

      {/* Account / Logout */}
      {token ? (
        <button onClick={handleLogout} aria-label="Logout">
          <FiUser className="text-3xl md:text-4xl lg:text-5xl text-gray-700 hover:text-[#4CB19A] transition" />
        </button>
      ) : (
        <Link to="/login" aria-label="Login">
          <FiUser className="text-3xl md:text-4xl lg:text-5xl text-gray-700 hover:text-[#4CB19A] transition" />
        </Link>
      )}

      {/* Cart */}
      <Link to="/shoppingcart" className="relative" aria-label="Shopping Cart">
        <FiShoppingCart className="text-3xl md:text-4xl lg:text-5xl text-gray-800 hover:text-green-700 transition" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-[#4CB19A] text-white text-[14px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
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
