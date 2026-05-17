import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import logogreen from "../assets/logogreen.png";
import { AppContext } from "../context/AppContext";
import { apiClient } from "../utils/api";

const SEARCH_PHRASES = [
  "Search for sofas...",
  "Search for dining tables...",
  "Search for wardrobes...",
  "Search for beds...",
  "Search for chairs...",
  "Search for lamps...",
];

const useTypewriterPlaceholder = (phrases, typingSpeed = 80, erasingSpeed = 40, pauseMs = 1600) => {
  const [placeholder, setPlaceholder] = useState("");
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const isErasing = useRef(false);

  useEffect(() => {
    let timeout;

    const tick = () => {
      const current = phrases[phraseIdx.current];

      if (!isErasing.current) {
        // Typing
        charIdx.current += 1;
        setPlaceholder(current.slice(0, charIdx.current));

        if (charIdx.current === current.length) {
          // Pause then start erasing
          isErasing.current = true;
          timeout = setTimeout(tick, pauseMs);
          return;
        }
        timeout = setTimeout(tick, typingSpeed);
      } else {
        // Erasing
        charIdx.current -= 1;
        setPlaceholder(current.slice(0, charIdx.current));

        if (charIdx.current === 0) {
          isErasing.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
          timeout = setTimeout(tick, typingSpeed);
          return;
        }
        timeout = setTimeout(tick, erasingSpeed);
      }
    };

    timeout = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeout);
  }, [phrases, typingSpeed, erasingSpeed, pauseMs]);

  return placeholder;
};

const Navbar = () => {
  const [wishListItems, setWishListItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const { cartItems, logout } = useContext(AppContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const animatedPlaceholder = useTypewriterPlaceholder(SEARCH_PHRASES);

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
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .search-placeholder-wrapper {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
        }
        .search-animated-placeholder {
          position: absolute;
          left: 0;
          pointer-events: none;
          color: #9ca3af;
          font-size: inherit;
          white-space: nowrap;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 1px;
        }
        .search-animated-placeholder::after {
          content: '|';
          display: inline-block;
          animation: cursorBlink 0.75s step-end infinite;
          color: #4CB19A;
          font-weight: 400;
          margin-left: 1px;
        }
        .search-real-input::placeholder {
          color: transparent;
        }
      `}</style>

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
            <div className="search-placeholder-wrapper text-xs sm:text-sm md:text-lg font-medium">
              {/* Animated placeholder — hidden when user types or focuses */}
              {!searchQuery && !isFocused && (
                <span className="search-animated-placeholder">
                  {animatedPlaceholder}
                </span>
              )}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder=""
                className="search-real-input w-full outline-none text-gray-700 bg-transparent font-medium text-xs sm:text-sm md:text-lg"
              />
            </div>
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

          {/* Cart — opens login page if user is not logged in */}
          <button
            onClick={() => navigate(token ? "/shoppingcart" : "/login")}
            className="relative"
            aria-label="Shopping Cart"
          >
            <FiShoppingCart className="text-2xl md:text-3xl text-gray-800 hover:text-green-700 transition" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#4CB19A] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
