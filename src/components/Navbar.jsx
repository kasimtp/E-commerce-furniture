// import React, { useState, useEffect, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { BiSearch } from "react-icons/bi";
// import { MdAccountCircle, MdClose } from "react-icons/md";
// import { BsCart4 } from "react-icons/bs";
// import { PiHeartFill } from "react-icons/pi";
// import { AppContext } from "../context/AppContext";
// import logo from "../assets/logo.png";
// import BASE_URL from "../utils/api"

// // example POST
// fetch(`${BASE_URL}/post-cart`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// });

// const Navbar = () => {

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [wishListItems, setWishListItems] = useState([]);

//   const navigate = useNavigate();
//   const { logout } = useContext(AppContext);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   useEffect(() => {
//     const userId = localStorage.getItem("id");

//     if (userId) {
//       // Get Cart Items
//       fetch(`${BASE_URL}/get-cart/${userId}`)
//         .then((res) => res.json())
//         .then((data) => setCartItems(data))
//         .catch((err) => console.error("Cart error:", err));

//       // Get Wishlist Items
//       fetch(`${BASE_URL}/get-wishlist/${userId}`)
//         .then((res) => res.json())
//         .then((data) => setWishListItems(data))
//         .catch((err) => console.error("Wishlist error:", err));
//     }
//   }, []);

//   const navLinks = (
//     <>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/products">Products</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/contact">Contact</Link>
//       </li>
//     </>
//   );

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link to="/">
//           <img src={logo} alt="Logo" />
//         </Link>
//       </div>

//       <ul className="nav-links">{navLinks}</ul>

//       <div className="nav-icons">
//         <Link to="/search">
//           <BiSearch size={24} />
//         </Link>
//         <Link to="/wishlist">
//           <PiHeartFill size={24} />
//           <span>{wishListItems.length}</span>
//         </Link>
//         <Link to="/cart">
//           <BsCart4 size={24} />
//           <span>{cartItems.length}</span>
//         </Link>
//         <Link to="/account">
//           <MdAccountCircle size={24} />
//         </Link>
//         <button onClick={logout}>Logout</button>
//       </div>

//       <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
//         {isMobileMenuOpen ? <MdClose size={24} /> : <span>Menu</span>}
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { MdAccountCircle, MdClose } from "react-icons/md";
// import { BsCart4 } from "react-icons/bs";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { AppContext } from "../context/AppContext";
import logo from "../assets/logoiconwbg.png";
import { apiClient } from "../utils/api.js";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);

  const { logout } = useContext(AppContext);
  const token = localStorage.getItem("token");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  const navLinks = (
    <>
      <li>
        <Link to="/" className="hover:text-blue-600 transition">
          Home
        </Link>
      </li>
      <li>
        <Link to="/shop" className="hover:text-blue-600 transition">
          Products
        </Link>
      </li>
      <li>
        <Link to="/cart" className="hover:text-blue-600 transition">
          Cart
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-blue-600 transition">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">

 {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <MdClose size={26} />
            ) : (
              <FiMenu size={26} />  
            )}
          </button>

    
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
          {navLinks}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-700">
          <Link to="/search">
            <BiSearch
              size={24}
              className="hover:text-blue-600 sm:block hidden transition"
            />
          </Link>
          <Link to="/wishlist" className="relative">
            <FiHeart
              size={22}
              className="hover:text-pink-600 sm:block hidden transition"
            />
            {wishListItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 sm:block hidden text-white rounded-full text-xs w-5 h-5 :flex  items-center justify-center">
                {wishListItems.length}
              </span>
            )}
          </Link>
          <Link to="/login">
            <FiUser
              size={24}
              className="hover:text-blue-600 transition"
            />
          </Link>

          <Link to="/shoppingcart" className="relative">
            <FiShoppingCart size={24} className="hover:text-green-600 transition" /> 
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Auth button - Desktop */}
          {/* {token ? (
            <button
              onClick={logout}
              className="hidden md:block px-4 py-1.5 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/register"
              className="hidden md:block px-4 py-1.5 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Register / Login
            </Link>
          )} */}

         
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 bg-white px-4 py-4 border-t border-gray-200">
          <ul className="flex flex-col gap-4 text-base font-medium text-gray-700">
            {navLinks}
          </ul>
          {token ? (
            <button
              onClick={logout}
              className="mt-4 px-4 py-2 w-full bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/register"
              className="mt-4 block px-4 py-2 w-full text-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Register / Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { BsCart4 } from "react-icons/bs";
// import { MdClose } from "react-icons/md";
// import { AppContext } from "../context/AppContext";
// import logo from "../assets/logowbg.png";
// import { apiClient } from "../utils/api.js";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const { logout } = useContext(AppContext);
//   const token = localStorage.getItem("token");

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   useEffect(() => {
//     const userId = localStorage.getItem("id");

//     if (userId) {
//       apiClient
//         .get(`/get-cart/${userId}`)
//         .then((res) => setCartItems(res.data))
//         .catch((err) => console.error("Cart error:", err));
//     }
//   }, []);

//   const navLinks = (
//     <>
//       <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
//       <li><Link to="/shop" className="hover:text-blue-600">Products</Link></li>
//       <li><Link to="/cart" className="hover:text-blue-600">Cart</Link></li>
//       <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
//     </>
//   );

//   return (
//     <nav className="bg-white shadow-md border-b sticky top-0 z-50 px-4 py-2">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">

//         {/* Left Section - Mobile Menu Button */}
//         <div className="md:hidden flex items-center gap-3">
//           <button onClick={toggleMobileMenu} className="text-gray-700">
//             {isMobileMenuOpen ? <MdClose size={26} /> : <HiOutlineMenuAlt3 size={26} />}
//           </button>
//         </div>

//         {/* Logo */}
//         <div className="flex-grow flex justify-center md:justify-start">
//           <Link to="/">
//             <img src={logo} alt="Logo" className="h-10 w-auto" />
//           </Link>
//         </div>

//         {/* Right Section - Cart Icon */}
//         <div className="flex items-center md:gap-5">
//           <Link to="/shoppingcart" className="relative text-gray-700">
//             <BsCart4 size={22} className="hover:text-green-600" />
//             {cartItems.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartItems.length}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden mt-2 border-t border-gray-200 bg-white px-4 py-3">
//           <ul className="flex flex-col gap-4 text-base font-medium text-gray-700">
//             {navLinks}
//           </ul>
//           {token ? (
//             <button
//               onClick={logout}
//               className="mt-4 w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               to="/register"
//               className="mt-4 block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//             >
//               Register / Login
//             </Link>
//           )}
//         </div>
//       )}

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex justify-between items-center mt-3">
//         <ul className="flex gap-8 text-sm font-semibold text-gray-700">
//           {navLinks}
//         </ul>
//         {token ? (
//           <button
//             onClick={logout}
//             className="px-4 py-1.5 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
//           >
//             Logout
//           </button>
//         ) : (
//           <Link
//             to="/register"
//             className="px-4 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Register / Login
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
