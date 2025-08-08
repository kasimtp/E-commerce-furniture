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

// // export default Navbar;

// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { BiSearch } from "react-icons/bi";
// import { MdAccountCircle, MdClose } from "react-icons/md";
// import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
// import { FiMenu } from "react-icons/fi";

// import { AppContext } from "../context/AppContext";
// // import logo from "../assets/logo2.jpg";
// import logoblue from "../assets/logoblue.png";
// import { apiClient } from "../utils/api.js";
// import { IoIosSearch } from "react-icons/io";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [wishListItems, setWishListItems] = useState([]);

//   const { logout } = useContext(AppContext);
//   const token = localStorage.getItem("token");

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   useEffect(() => {
//     const userId = localStorage.getItem("id");

//     if (userId) {
//       apiClient
//         .get(`/get-cart/${userId}`)
//         .then((res) => setCartItems(res.data))
//         .catch((err) => console.error("Cart error:", err));

//       apiClient
//         .get(`/get-wishlist/${userId}`)
//         .then((res) => setWishListItems(res.data))
//         .catch((err) => console.error("Wishlist error:", err));
//     }
//   }, []);

//   const navLinks = (
//     <>
//       <li>
//         <Link
//           to="/"
//           className="hover:text-blue-500  text-[16px] md:text-[17px] lg:text-[18px] font-medium font-serif text-blue-900   transition"
//         >
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/shop"
//           className="hover:text-blue-500 text-[17px] md:text-[17px] lg:text-[18px] font-medium font-serif text-blue-900 transition"
//         >
//           Products
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/cart"
//           className="hover:text-blue-700  text-[17px]  md:text-[17px] lg:text-[19px] font-medium font-serif text-blue-900 transition"
//         >
//           Cart
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/contact"
//           className="hover:text-blue-500 text-[17px] md:text-[17px] lg:text-[18px]  text-blue-900 font-medium font-serif transition"
//         >
//           Contact
//         </Link>
//       </li>
//     </>
//   );

//   return (
//     <nav
//       className="bg-red-000  pr-1 md:pr-0 lg:pr-0 pl-4 md:pl-0 lg:pl-0 md:px-4 lg:px-4
//      py-0 place-content-center sticky md:mt-0 font-Poppins bg-[#e8ebea] lg:mt-0 text-center z-50  h-14 lg:h-28 sm:h-22 "
//     >
//       <div className="max-w-7xl mx-auto bg-amber-300 flex items-center justify-center">
//         <div className="flex items-center p-1 bg-gray-900">
//           <div className="  md:hidden text-center bg-red-200  items-center flex border px-0 border-gray-400 rounded-sm">
//             <IoIosSearch className="text-gray-900  h-8    text-[23px] mr-2" />
//             <input
//               type="text"
//               className="text-gray-500 bg-transparent outline-none flex-1"
//               placeholder="Search  "
//             />
//           </div>

//           {/* Mobile menu toggle */}
//           {/* <button
//             className="md:hidden "
//             onClick={toggleMobileMenu}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? (
//               <MdClose className="text-[#0052cc] text-[30px] stroke-2" />
//             ) : (
//               <FiMenu className="text-blue-900 text-[33px] stroke-2" />
//             )}
//           </button> */}

//           {/* Logo */}
//           {/* {!isMobileMenuOpen && (
//             <Link to="/">
//               <img
//                 src={logoblue}
//                 alt="Logo"
//                 className="h-[25px] pl-3   md:h-[28px] mt-0 md:mt-0 lg:mt-0  sm:h-[52px] lg:h-[55px]  md:pl-5  lg:pl-2  sm:pl-0 w-auto"
//               />
//             </Link>
//           )} */}
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex gap-6 md:gap-8 text-blue-900 ">
//           {navLinks}
//         </ul>

//         {/* Icons */}

//         <div className="flex items-center bg-red-000 gap-1 pr-2 md:pr-0 lg:pr-0 md:gap-8 lg:gap-8 text-gray-700">
//           <Link to="/search">
//             <BiSearch className="hover:text-blue-500 text-blue-900 sm:block text-[30px] hidden transition" />
//           </Link>

//           <Link to="/wishlist" className="relative">
//             <FiHeart className="hover:text-blue-500 text-blue-900 sm:block text-[30px] md:text-[30px] lg:text-[38px] hidden transition" />
//             {wishListItems.length > 0 && (
//               <span className="absolute -top-2 -right-2  bg-green-600  sm:block hidden text-white rounded-full text-xs w-5 h-5 :flex  items-center justify-center">
//                 {wishListItems.length}
//               </span>
//             )}
//           </Link>

//           {!isMobileMenuOpen && (
//             <Link to="/login">
//               <FiUser className="hover:text-blue-900 text-gray-700    md:text-blue-900 lg:text-blue-900 transition text-[28px] md:text-[30px] lg:text-[38px]  " />
//             </Link>
//           )}

//           {!isMobileMenuOpen && (
//             <Link to="/shoppingcart" className="relative">
//               <FiShoppingCart className="hover:text-blue-500 text-gray-700 md:text-blue-900 lg:text-blue-900 text-[26px] stroke-2.5  md:text-[30px] lg:text-[38px] transition" />
//               {cartItems.length > 0 && (
//                 <span className="absolute -top-2 -right-2  text-white bg-[#4CB19A]  rounded-full border border-white text-xs w-5 h-5 flex items-center justify-center">
//                   {cartItems.length}
//                 </span>
//               )}
//             </Link>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden  w-screen px-4 text-left pt-0  h-screen  bg-white  py-4 mt-2  border-t border-gray-200">
//           <ul className="flex flex-col gap-4 text-base font-medium text-gray-700">
//             {navLinks}
//           </ul>
//           {token ? (
//             <button
//               onClick={logout}
//               className="mt-4 px-4 py-2 w-full bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               to="/register"
//               className="mt-4 block px-4 py-2 w-full text-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//             >
//               Register / Login
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { BiSearch } from "react-icons/bi";
// import { FiHeart, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
// import { MdClose } from "react-icons/md";
// import { IoIosSearch } from "react-icons/io";

// import { AppContext } from "../context/AppContext";
// import logoblue from "../assets/logoblue.png";
// import { apiClient } from "../utils/api.js";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [wishListItems, setWishListItems] = useState([]);

//   const { logout } = useContext(AppContext);
//   const token = localStorage.getItem("token");

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   useEffect(() => {
//     const userId = localStorage.getItem("id");
//     if (userId) {
//       apiClient
//         .get(`/get-cart/${userId}`)
//         .then((res) => setCartItems(res.data))
//         .catch((err) => console.error("Cart error:", err));

//       apiClient
//         .get(`/get-wishlist/${userId}`)
//         .then((res) => setWishListItems(res.data))
//         .catch((err) => console.error("Wishlist error:", err));
//     }
//   }, []);

//   const navLinks = (
//     <>
//       <li>
//         <Link
//           to="/"
//           className="hover:text-blue-500 text-[17px] font-medium font-serif text-blue-900"
//         >
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/shop"
//           className="hover:text-blue-500 text-[17px] font-medium font-serif text-blue-900"
//         >
//           Products
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/cart"
//           className="hover:text-blue-700 text-[17px] font-medium font-serif text-blue-900"
//         >
//           Cart
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/contact"
//           className="hover:text-blue-500 text-[17px] font-medium font-serif text-blue-900"
//         >
//           Contact
//         </Link>
//       </li>
//     </>
//   );

//   return (
//     <nav className="bg-[#e8ebea] px-4 sm:px-6 lg:px-8 py-2 sticky top-0 z-50 shadow font-Poppins">
//       <div className="max-w-7xl mx-auto flex items-center justify-between h-16">

//         {/* Left: Logo */}
//         <Link to="/" className="flex-shrink-0">
//           <img
//             src={logoblue}
//             alt="Logo"
//             className="h-8 sm:h-10 md:h-12 w-auto"
//           />
//         </Link>

//         {/* Center: Nav Links (Desktop) */}
//         <ul className="hidden md:flex gap-6 items-center">{navLinks}</ul>

//         {/* Right: Icons */}
//         <div className="flex items-center gap-4 sm:gap-5 md:gap-6">

//           {/* Search icon (desktop) */}
//           <Link to="/search" className="hidden sm:block">
//             <BiSearch className="text-[24px] text-blue-900 hover:text-blue-500" />
//           </Link>

//           {/* Wishlist */}
//           <Link to="/wishlist" className="relative hidden sm:block">
//             <FiHeart className="text-[24px] text-blue-900 hover:text-blue-500" />
//             {wishListItems.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {wishListItems.length}
//               </span>
//             )}
//           </Link>

//           {/* Account */}
//           <Link to="/login" className="hidden sm:block">
//             <FiUser className="text-[24px] text-blue-900 hover:text-blue-500" />
//           </Link>

//           {/* Cart */}
//           <Link to="/shoppingcart" className="relative hidden sm:block">
//             <FiShoppingCart className="text-[24px] text-blue-900 hover:text-blue-500" />
//             {cartItems.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-[#4CB19A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {cartItems.length}
//               </span>
//             )}
//           </Link>

//           {/* Mobile menu toggle */}
//           <button className="md:hidden text-blue-900" onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? (
//               <MdClose className="text-2xl" />
//             ) : (
//               <FiMenu className="text-2xl" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Search */}
//       <div className="md:hidden mt-2 flex items-center bg-white border border-gray-300 rounded-md px-2 py-1">
//         <IoIosSearch className="text-gray-600 text-xl mr-2" />
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full outline-none text-sm text-gray-700"
//         />
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-t mt-2 py-4 px-4">
//           <ul className="flex flex-col gap-4">{navLinks}</ul>

//           {token ? (
//             <button
//               onClick={logout}
//               className="mt-4 px-4 py-2 w-full bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               to="/register"
//               className="mt-4 block text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Register / Login
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { BiSearch } from "react-icons/bi";
// import { FiHeart, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
// import { MdClose } from "react-icons/md";
// import { FiSearch } from "react-icons/fi";
// import { BsChatDots } from "react-icons/bs";

// import { AppContext } from "../context/AppContext";
// import logoblue from "../assets/logoblue.png";
// import { apiClient } from "../utils/api.js";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [wishListItems, setWishListItems] = useState([]);

//   const { logout } = useContext(AppContext);
//   const token = localStorage.getItem("token");

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   useEffect(() => {
//     const userId = localStorage.getItem("id");
//     if (userId) {
//       apiClient
//         .get(`/get-cart/${userId}`)
//         .then((res) => setCartItems(res.data))
//         .catch((err) => console.error("Cart error:", err));

//       apiClient
//         .get(`/get-wishlist/${userId}`)
//         .then((res) => setWishListItems(res.data))
//         .catch((err) => console.error("Wishlist error:", err));
//     }
//   }, []);

//   const navLinks = (
//     <>
//       <li>
//         <Link to="/" className="hover:text-blue-500 text-[17px] font-medium font-serif text-blue-900">
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link to="/shop" className="hover:text-blue-500 text-[17px] font-medium font-serif text-blue-900">
//           Products
//         </Link>
//       </li>
//       <li>
//         <Link to="/cart" className="hover:text-blue-700 text-[17px] font-medium font-serif text-blue-900">
//           Cart
//         </Link>
//       </li>
//       <li>
//         <Link to="/contact" className="hover:text-blue-500 text-[17px] font-medium font-serif text-blue-900">
//           Contact
//         </Link>
//       </li>
//     </>
//   );

//   return (
//     <nav className="bg-[#e8ebea] px-4 sm:px-6 lg:px-8 py-2 sticky top-0 z-50 shadow font-Poppins">
//       {/* TOP NAVBAR */}
//       <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
//         {/* Logo */}
//         <Link to="/" className="flex-shrink-0">
//           <img src={logoblue} alt="Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
//         </Link>

//         {/* Nav Links - Desktop */}
//         <ul className="hidden md:flex gap-6 items-center">{navLinks}</ul>

//         {/* Desktop Icons */}
//         <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
//           <Link to="/search" className="hidden sm:block">
//             <BiSearch className="text-[24px] text-blue-900 hover:text-blue-500" />
//           </Link>

//           {/* Wishlist */}
//           <Link to="/wishlist" className="relative hidden sm:block">
//             <FiHeart className="text-[24px] text-blue-900 hover:text-blue-500" />
//             {wishListItems.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {wishListItems.length > 9 ? "9+" : wishListItems.length}
//               </span>
//             )}
//           </Link>

//           {/* Account */}
//           <Link to="/login" className="hidden sm:block">
//             <FiUser className="text-[24px] text-blue-900 hover:text-blue-500" />
//           </Link>

//           {/* Cart */}
//           <Link to="/shoppingcart" className="relative hidden sm:block">
//             <FiShoppingCart className="text-[24px] text-blue-900 hover:text-blue-500" />
//             {cartItems.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-[#4CB19A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {cartItems.length > 9 ? "9+" : cartItems.length}
//               </span>
//             )}
//           </Link>

//           {/* Mobile menu toggle */}
//           <button className="md:hidden text-blue-900" onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? (
//               <MdClose className="text-2xl" />
//             ) : (
//               <FiMenu className="text-2xl" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE HEADER - Visible only on mobile */}
//       <div className="md:hidden mt-2 px-2 flex items-center justify-between">
//         {/* Search input */}
//         <div className="flex items-center flex-1 mr-4 bg-white px-3 py-2 rounded-xl border border-gray-300">
//           <FiSearch className="text-gray-400 text-lg mr-2" />
//           <input
//             type="text"
//             placeholder="Search.."
//             className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
//           />
//         </div>

//         {/* Wishlist Icon */}
//         <Link to="/wishlist" className="relative ml-2">
//           <FiHeart className="text-[22px] text-gray-700" />
//           {wishListItems.length > 0 && (
//             <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
//               {wishListItems.length > 9 ? "9+" : wishListItems.length}
//             </span>
//           )}
//         </Link>

//         {/* Cart Icon */}
//         <Link to="/shoppingcart" className="relative ml-2">
//           <FiShoppingCart className="text-[22px] text-gray-700" />
//           {cartItems.length > 0 && (
//             <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
//               {cartItems.length > 9 ? "9+" : cartItems.length}
//             </span>
//           )}
//         </Link>
//       </div>

//       {/* MOBILE MENU DRAWER */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-t mt-2 py-4 px-4">
//           <ul className="flex flex-col gap-4">{navLinks}</ul>

//           {token ? (
//             <button
//               onClick={logout}
//               className="mt-4 px-4 py-2 w-full bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               to="/register"
//               className="mt-4 block text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Register / Login
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { BiSearch } from "react-icons/bi";
// import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
// import { FiSearch } from "react-icons/fi";

// import { AppContext } from "../context/AppContext";
// import { apiClient } from "../utils/api.js";

// const Navbar = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [wishListItems, setWishListItems] = useState([]);

//   const { logout } = useContext(AppContext);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const userId = localStorage.getItem("id");
//     if (userId) {
//       apiClient
//         .get(`/get-cart/${userId}`)
//         .then((res) => setCartItems(res.data))
//         .catch((err) => console.error("Cart error:", err));

//       apiClient
//         .get(`/get-wishlist/${userId}`)
//         .then((res) => setWishListItems(res.data))
//         .catch((err) => console.error("Wishlist error:", err));
//     }
//   }, []);

//   const navLinks = (
//     <>
//       <li>
//         <Link to="/" className="hover:text-blue-500 text-[17px] font-medium font-serif text-blue-900">Home</Link>
//       </li>
//       <li>
//         <Link to="/shop" className="hover:text-blue-500 text-[17px] font-medium font-serif text-blue-900">Products</Link>
//       </li>
//       <li>
//         <Link to="/cart" className="hover:text-blue-700 text-[17px] font-medium font-serif text-blue-900">Cart</Link>
//       </li>
//       <li>
//         <Link to="/contact" className="hover:text-blue-500 text-[17px] font-medium font-serif text-blue-900">Contact</Link>
//       </li>
//     </>
//   );

//   return (
//     <nav className="bg-[#e8ebea] px-4 sm:px-6 lg:px-8 py-2 sticky  top-0 z-50 shadow font-Poppins">
//       {/* Top Navbar */}
//       <div className="max-w-7xl mx-auto flex items-center justify-between h-">
//         {/* Nav Links - Desktop only */}
//         <ul className="hidden md:flex gap-6 items-center">{navLinks}</ul>

//         {/* Desktop Icons */}
//         <div className="flex items-center gap-4 sm:gap-5 md:gap-6 ml-auto">
//           <Link to="/search" className="hidden sm:block">
//             <BiSearch className="text-[24px] text-blue-900 hover:text-blue-500" />
//           </Link>

//           <Link to="/wishlist" className="relative hidden sm:block">
//             <FiHeart className="text-[24px] text-blue-900 hover:text-blue-500" />
//             {wishListItems.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {wishListItems.length > 9 ? "9+" : wishListItems.length}
//               </span>
//             )}
//           </Link>

//           <Link to="/login" className="hidden sm:block">
//             <FiUser className="text-[24px] text-blue-900 hover:text-blue-500" />
//           </Link>

//           <Link to="/shoppingcart" className="relative hidden sm:block">
//             <FiShoppingCart className="text-[24px] text-blue-900 hover:text-blue-500" />
//             {cartItems.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-[#4CB19A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {cartItems.length > 9 ? "9+" : cartItems.length}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Header - Only on mobile */}
//       <div className="md:hidden mt-2 px-2 flex items-center justify-between">
//         <div className="flex items-center flex-1 mr-4 bg-white px-3 py-2 rounded-xl border border-gray-300">
//           <FiSearch className="text-gray-400 text-lg mr-2" />
//           <input
//             type="text"
//             placeholder="Search.."
//             className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
//           />
//         </div>

//         <Link to="/wishlist" className="relative ml-2">
//           <FiHeart className="text-[22px] text-gray-700" />
//           {wishListItems.length > 0 && (
//             <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
//               {wishListItems.length > 9 ? "9+" : wishListItems.length}
//             </span>
//           )}
//         </Link>

//         <Link to="/shoppingcart" className="relative ml-2">
//           <FiShoppingCart className="text-[22px] text-gray-700" />
//           {cartItems.length > 0 && (
//             <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
//               {cartItems.length > 9 ? "9+" : cartItems.length}
//             </span>
//           )}
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { BiSearch } from "react-icons/bi";
// import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
// import { IoIosSearch } from "react-icons/io";
// import logogreen from "../assets/logogreen.png";

// import { AppContext } from "../context/AppContext";
// import { apiClient } from "../utils/api";

// const Navbar = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [wishListItems, setWishListItems] = useState([]);

//   const { logout } = useContext(AppContext);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const userId = localStorage.getItem("id");

//     if (userId) {
//       apiClient
//         .get(`/get-cart/${userId}`)
//         .then((res) => setCartItems(res.data))
//         .catch((err) => console.error("Cart error:", err));

//       apiClient
//         .get(`/get-wishlist/${userId}`)
//         .then((res) => setWishListItems(res.data))
//         .catch((err) => console.error("Wishlist error:", err));
//     }
//   }, []);

//   const navLinks = (
//     <>
//       <Link to="/" className="hover:text-blue-600  font-medium">
//         <p className="text-[44px] font-Poppins font-semibold">Home</p>
//       </Link>
//       <Link to="/shop" className="hover:text-blue-600 font-medium">
//         <p className="text-[44px] font-Poppins font-semibold">Products</p>
//       </Link>
//       <Link to="/cart" className="hover:text-blue-600 font-medium">
//         <p className="text-[44px] font-Poppins font-semibold">Cart</p>
//       </Link>
//       <Link to="/contact" className="hover:text-blue-600 font-medium">
//         <p className="text-[44px] font-Poppins font-semibold">Contact</p>
//       </Link>
//     </>
//   );

//   return (
//     <nav className=" sticky top-0  w-auto bg-[#e8ebea]  z-50 shadow-sm ">
//       <div className="lg:max-w-screen max-w-screen-xl lg:space-x-44 space-x-2  lg:bg-[#e8ebea] bg-amber-000   flex bg-red-000   items-center lg:h-60 h-18  m-auto lg:px-36 px-4 py-2 sm:py-3">
//         <div className="block md:hidden flex-shrink-0">
//           <img src={logogreen} alt="Logo" className="h-8 w-auto" />
//         </div>

//         <div className=" hidden md:block bg-red-000   lg:text-7xl font-bold font-Poppins">
//           Flipkert
//         </div>
//         {/* Search bar */}
//         <div className=" flex items-center border  border-gray-400 bg-red-000  rounded-sm lg:px-3 px-2 lg:w-full  lg:h-30 h-[36px] w-60 ">
//           <IoIosSearch className="text-gray-500 lg:ml-4  text-[20px] lg:text-7xl lg:mr-2 mr-1" />
//           <input
//             type="text"
//             placeholder="Search.."
//             className="flex-grow outline-none  font-Poppins lg:text-5xl  text-[14px] text-gray-700 bg-transparent h-full"
//           />
//         </div>

//         {/* Right icons */}
//         <div className="flex items-center lg:gap-12 bg-red-000 space-x-1  ml-0 sm:ml-6">
//           {/* Wishlist */}
//           <Link to="/wishlist" className="relative hidden md:block">
//             <FiHeart className=" hidden  md:block text-[22px] sm:text-[24px] lg:text-[74px] text-gray-800 hover:text-pink-500" />
//             {wishListItems.length > 0 && (
//               <span className="absolute    -top-1 -right-2 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
//                 {wishListItems.length}
//               </span>
//             )}
//           </Link>

//           {/* Account */}
//           <Link to="/login">
//             <FiUser className="text-[35px] sm:text-[24px] lg:text-[84px] text-gray-800 hover:text-[#4CB19A]" />
//           </Link>

//           {/* Cart */}
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

//       {/* Bottom Navigation Links (visible on md and up) */}
//       <div className="hidden md:flex justify-center  lg:space-x-1 bg-[#e8ebea] lg:gap-22 py-2 lg:h-22    border-gray-300">
//         {navLinks}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import logogreen from "../assets/logogreen.png";

import { AppContext } from "../context/AppContext";
import { apiClient } from "../utils/api";

const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { logout } = useContext(AppContext);
  const token = localStorage.getItem("token");

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

  const navLinks = (
    <>
      <Link to="/" className="hover:text-blue-600 font-medium">
        <p className="text-[44px] font-Poppins font-semibold">Home</p>
      </Link>
      <Link to="/shop" className="hover:text-blue-600 font-medium">
        <p className="text-[44px] font-Poppins font-semibold">Products</p>
      </Link>
      <Link to="/cart" className="hover:text-blue-600 font-medium">
        <p className="text-[44px] font-Poppins font-semibold">Cart</p>
      </Link>
      <Link to="/contact" className="hover:text-blue-600 font-medium">
        <p className="text-[44px] font-Poppins font-semibold">Contact</p>
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 w-auto bg-[#e8ebea] z-50 shadow-sm">
      <div className="relative lg:max-w-screen max-w-screen-xl lg:space-x-44 space-x-2 flex items-center lg:h-60 h-18 m-auto lg:px-36 px-4 py-2 sm:py-3">
        <div className="block md:hidden flex-shrink-0">
          <img src={logogreen} alt="Logo" className="h-8 w-auto" />
        </div>

        <div className="hidden md:block lg:text-7xl font-bold font-Poppins">
          Flipkert
        </div>

        {/* 🔍 Search bar */}
        <div className="relative flex items-center border border-gray-400 rounded-sm lg:px-3 px-2 lg:w-full lg:h-30 h-[36px] w-60 bg-white">
          <IoIosSearch className="text-gray-500 lg:ml-4 text-[20px] lg:text-7xl lg:mr-2 mr-1" />
          <input
            type="text"
            placeholder="Search.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow outline-none font-Poppins lg:text-5xl text-[14px] text-gray-700 bg-transparent h-full"
          />

          {/* 🔽 Search Results Dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 mt-2 w-full max-h-[300px] overflow-y-auto bg-white shadow-md rounded-md z-50">
              {searchResults.map((item) => (
                <Link
                  to={`/product/${item._id}`}
                  key={item._id}
                  onClick={() => {
                    setSearchQuery("");
                    setSearchResults([]);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm lg:text-xl"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* 👉 Right icons */}
        <div className="flex items-center lg:gap-12 space-x-1 ml-0 sm:ml-6">
          {/* ❤️ Wishlist */}
          <Link to="/wishlist" className="relative hidden md:block">
            <FiHeart className="text-[22px] sm:text-[24px] lg:text-[74px] text-gray-800 hover:text-pink-500" />
            {wishListItems.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishListItems.length}
              </span>
            )}
          </Link>

          {/* 👤 Account */}
          <Link to="/login">
            <FiUser className="text-[35px] sm:text-[24px] lg:text-[84px] text-gray-800 hover:text-[#4CB19A]" />
          </Link>

          {/* 🛒 Cart */}
          <Link to="/shoppingcart" className="relative">
            <FiShoppingCart className="text-[30px] sm:text-[24px] lg:text-[84px] text-gray-800 hover:text-green-700" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 lg:-top-6 -right-2 lg:-right-6 bg-[#4CB19A] text-white text-[10px] lg:text-[34px] font-bold w-4 h-4 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* ⬇ Bottom nav links */}
      <div className="hidden md:flex justify-center lg:space-x-1 bg-[#e8ebea] lg:gap-22 py-2 lg:h-22 border-gray-300">
        {navLinks}
      </div>
    </nav>
  );
};

export default Navbar;

