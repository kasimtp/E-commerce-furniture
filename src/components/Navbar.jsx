
// import React, { useState, useEffect, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
// import { IoIosSearch } from "react-icons/io";
// import { MdLogout } from "react-icons/md";
// import logogreen from "../assets/logogreen.png";
// import { AppContext } from "../context/AppContext";
// import { apiClient } from "../utils/api";

// const Navbar = () => {
//   const [wishListItems, setWishListItems] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const { cartItems, logout } = useContext(AppContext);
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const userId = localStorage.getItem("id");
//     if (userId) {
//       apiClient
//         .get(`/get-wishlist/${userId}`)
//         .then((res) => setWishListItems(res.data))
//         .catch((err) => console.error("Wishlist error:", err));
//     }
//   }, []);

//   // 🔍 Search with debounce
//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       if (searchQuery.trim() !== "") {
//         apiClient
//           .get(`/search-product?q=${searchQuery}`)
//           .then((res) => setSearchResults(res.data))
//           .catch((err) => console.error("Search error:", err));
//       } else {
//         setSearchResults([]);
//       }
//     }, 300);

//     return () => clearTimeout(delayDebounce);
//   }, [searchQuery]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("id");
//     logout(); // Clear AppContext state
//     navigate("/login");
//   };

//   const navLinks = (
//     <>
//       <Link to="/" className="hover:text-[#4CB19A] font-medium">
//         <p className="text-[44px] font-Poppins font-semibold">Home</p>
//       </Link>
//       <Link to="/shop" className="hover:text-[#4CB19A] font-medium">
//         <p className="text-[44px] font-Poppins font-semibold">Products</p>
//       </Link>
//       <Link to="/cart" className="hover:text-[#4CB19A] font-medium">
//         <p className="text-[44px] font-Poppins font-semibold">Cart</p>
//       </Link>
//       <Link to="/contact" className="hover:text-[#4CB19A] font-medium">
//         <p className="text-[44px] font-Poppins font-semibold">Contact</p>
//       </Link>
//     </>
//   );

//   return (
//     <nav className="sticky top-0 w-auto bg-[#e8ebea]  z-50 shadow-sm">
//       <div className="relative lg:max-w-screen max-w-screen-xl sm:w-12 sm:bg-amber-200 lg:space-x-44 space-x-2 flex items-center lg:h-60 h-18   m-auto lg:px-36 px-4 py-2 sm:py-3">
//         {/* Mobile Logo */}
//         <div className="block md:hidden flex-shrink-0">
//           <img src={logogreen} alt="Logo" className="h-8 w-auto" />
//         </div>

//         {/* Desktop Logo */}
//         <div className="hidden md:block lg:text-7xl font-bold font-Poppins">
//           <p className="text-[#4CB19A]">Flipkert</p>
//         </div>

//         {/* 🔍 Search bar */}
//         <div className="relative flex items-center border-1 border-gray-50 lg:rounded-full rounded-full lg:px-3 px-2 lg:w-full lg:h-30 h-[36px] w-60 bg-white">
//           <IoIosSearch className="text-gray-500 lg:ml-4 text-[20px] lg:text-7xl lg:mr-2 mr-1" />
//           <input
//             type="text"
//             placeholder="Search.."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="flex-grow outline-none font-Poppins lg:text-5xl text-[14px] text-gray-700 bg-transparent h-full"
//           />

//           {/* 🔽 Search Results Dropdown */}
//           {searchResults.length > 0 && (
//             <div className="absolute top-full left-0 mt-2 w-full max-h-[300px] overflow-y-auto bg-white shadow-md rounded-md z-50">
//               {searchResults.map((item) => (
//                 <Link
//                   to={`/product/${item._id}`}
//                   key={item._id}
//                   onClick={() => {
//                     setSearchQuery("");
//                     setSearchResults([]);
//                   }}
//                   className="block px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm lg:text-xl"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* 👉 Right icons */}
//         <div className="flex items-center lg:gap-12 space-x-1 ml-0 sm:ml-6">
//           {/* ❤️ Wishlist */}
//           <Link to="/wishlist" className="relative hidden md:block">
//             <FiHeart className="text-[22px] sm:text-[24px] lg:text-[74px] text-gray-800 hover:text-pink-500" />
//             {wishListItems.length > 0 && (
//               <span className="absolute -top-1 lg:-top-6 -right-2 lg:-right-6 bg-[#4CB19A] text-white text-[10px] lg:text-[34px] font-bold w-4 h-4 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
//                 {wishListItems.length}
//               </span>
//             )}
//           </Link>

//           {/* 👤 Account / Logout */}
//           {token ? (
//             <button onClick={handleLogout}>
//               <MdLogout className="text-[35px] sm:text-[24px] lg:text-[84px] text-gray-800 hover:text-[#4CB19A]" />
//             </button>
//           ) : (
//             <Link to="/login">
//               <FiUser className="text-[35px] sm:text-[24px] lg:text-[84px] text-gray-800 hover:text-[#4CB19A]" />
//             </Link>
//           )}

//           {/* 🛒 Cart */}
//           <Link to="/shoppingcart" className="relative">
//             <FiShoppingCart className="text-[30px] sm:text-[24px] lg:text-[84px] text-gray-800 hover:text-green-700" />
//             {cartItems.length > 0 && (
//               <span className="absolute -top-1 lg:-top-6 -right-2 lg:-right-6 bg-[#4CB19A] text-white text-[10px] lg:text-[34px] font-bold w-4 h-4 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
//                 {cartItems.length}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>

//       {/* ⬇ Bottom nav links */}
//       <div className="hidden md:flex justify-center lg:space-x-1 bg-[#e8ebea] lg:gap-22 py-2 lg:h-22 border-gray-300">
//         {navLinks}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
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

  // 🔍 Search with debounce
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

  const navLinks = (
    <>
      <Link to="/" className="hover:text-[#4CB19A] font-medium">
        Home
      </Link>
      <Link to="/shop" className="hover:text-[#4CB19A] font-medium">
        Products
      </Link>
      <Link to="/cart" className="hover:text-[#4CB19A] font-medium">
        Cart
      </Link>
      <Link to="/contact" className="hover:text-[#4CB19A] font-medium">
        Contact
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 w-full bg-[#e8ebea] z-50 shadow-sm">
      {/* 🔝 Top Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center ">
          <img src={logogreen} alt="Logo" className="h-8 md:h-10 w-auto mr-2" />
          <span className="hidden md:block text-2xl md:text-3xl font-bold text-[#4CB19A] font-Poppins">
            lipkert
          </span>
        </div>

        {/* Search bar */}
        <div className="relative flex items-center bg-white rounded-full px-2 md:px-4 w-[60%] md:w-[40%] lg:w-[50%] h-9 md:h-11">
          <IoIosSearch className="text-gray-500 text-lg md:text-xl mr-2" />
          <input
            type="text"
            placeholder="Search.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow outline-none font-Poppins text-sm md:text-base text-gray-700 bg-transparent"
          />

          {/* 🔽 Search Results */}
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 mt-2 w-full max-h-[250px] overflow-y-auto bg-white shadow-md rounded-md z-50">
              {searchResults.map((item) => (
                <Link
                  to={`/product/${item._id}`}
                  key={item._id}
                  onClick={() => {
                    setSearchQuery("");
                    setSearchResults([]);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-2 md:space-x-6">
          {/* ❤️ Wishlist */}
          <Link to="/wishlist" className="relative hidden sm:block">
            <FiHeart className="text-xl md:text-2xl lg:text-3xl text-gray-800 hover:text-pink-500" />
            {wishListItems.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#4CB19A] text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishListItems.length}
              </span>
            )}
          </Link>

          {/* 👤 Account / Logout */}
          {token ? (
            <button onClick={handleLogout}>
              <FiUser  className="size-8 md:text-2xl lg:text-3xl text-gray-800 hover:text-[#4CB19A]" />
            </button>
          ) : (
            <Link to="/login">
              <FiUser className="text-22 md:text-2xl lg:text-3xl text-gray-800 hover:text-[#4CB19A]" />
            </Link>
          )}

          {/* 🛒 Cart */}
          <Link to="/shoppingcart" className="relative">
            <FiShoppingCart className="size-8 md:text-2xl lg:text-3xl text-gray-800 hover:text-green-700" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#4CB19A] text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* ⬇ Bottom nav links for desktop */}
      <div className="hidden md:flex justify-center space-x-8 bg-[#e8ebea] py-2 border-t border-gray-200">
        {navLinks}
      </div>
    </nav>
  );
};

export default Navbar;
