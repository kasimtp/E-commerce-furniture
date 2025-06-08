import React, { useState } from "react";
import logotext from "../assets/FurnitureLogo.png";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdPermContactCalendar, MdMenu, MdClose } from "react-icons/md";
import { BiCartAlt } from "react-icons/bi";
import { useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);

  

    useEffect(() => {
      const userId = localStorage.getItem("id");
      if (userId) {
        fetch(`http://localhost:5000/api/get-cart/${userId}`)
          .then((res) => {
            if (!res.ok) throw new Error("Cart not found");
            return res.json();
          })
          .then((data) => setCartItems(data))
          .catch((err) => console.error("Error fetching cart items:", err));
      }
    }, []);

      useEffect(() => {
      const userId = localStorage.getItem("id");
      if (userId) {
        fetch(`http://localhost:5000/api/get-wishlist/${userId}`)
          .then((res) => {
            if (!res.ok) throw new Error("Cart not found");
            return res.json();
          })
          .then((data) => setWishListItems(data))
          .catch((err) => console.error("Error fetching cart items:", err));
      }
    }, []);
  


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-800 font-semibold " : "hover:text-blue-800"
        }
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <p className="lg:text-[20px] text-[16px]">Home</p>
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
        }
        onClick={() => setIsMobileMenuOpen(false)}
      >
         <p className="lg:text-[20px] text-[16px]">Shop</p>
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
        }
        onClick={() => setIsMobileMenuOpen(false)}
      >
         <p className="lg:text-[20px] text-[16px]">Cart</p>
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
        }
        onClick={() => setIsMobileMenuOpen(false)}
      >
         <p className="lg:text-[20px] text-[16px]">Blog</p>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
        }
        onClick={() => setIsMobileMenuOpen(false)}
      >
         <p className="lg:text-[20px] text-[16px]">Contact</p>
      </NavLink>
    </>
  );

  return (
    <div className="w-full font-Poppins">
      {/* Top Banner */}
      <div className="h-10 flex items-center justify-center bg-blue-800 px-2">
        <p className="text-white text-xs md:text-sm uppercase text-center">
          Free Shipping on Orders over $70
        </p>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-col md:flex-row items-center justify-between h-20 md:h-28    px-4 md:px-10 lg:px-16 md:py-4  shadow-sm space-y-1 md:space-y-0 relative">
        {/* Logo and Hamburger */}
        <div className="flex  -ml-9 place-content-center -mt-4 gap-4 md:mt-[17px] items-center">
          {/* Hamburger Menu Icon (Mobile Only) */}
          <button
            className="md:hidden text-4xl text-blue-800"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>

          {/* Logo */}
          <img
            src={logotext}
            alt="Logo"
            className="w-[130px]  sm:w-[150px] md:w-[100px] md:mb-4 lg:w-[250px]"
          />

          {/* Mobile Icons */}
          <div className="flex text-3xl  space-x-6 md:hidden">
            <div className="relative ">
              <NavLink to="/wishlist" className="hover:text-blue-800">
                <AiOutlineHeart />
                <span className="absolute -top-2 -right-2 bg-blue-800 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </NavLink>
            </div>

            <div className="relative">
              <NavLink to="/shoppingcart" className="hover:text-blue-800">
                <BiCartAlt />
                <span className="absolute -top-2 -right-2 bg-blue-800 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex space-x-8">
          {/* Desktop Nav */}
        <div className="hidden  bg-amber-8  md:flex items-center gap-8 text-[17px] font-medium capitalize">
          {navLinks}
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex  space-x-2 items-center gap-4 text-xl sm:text-4xl">
          <NavLink to="/search" className="hover:text-blue-800">
            <BsSearch />
          </NavLink>

          <div className="relative">
            <NavLink to="/wishlist" className="hover:text-blue-800">
              <AiOutlineHeart />
              <span className="absolute -top-2 -right-2 bg-blue-800 text-white text-[10px] rounded-full w-6 h-6 p-2 flex items-center justify-center">
                 {wishListItems.length}
              </span>
            </NavLink>
          </div>

          <div className="relative">
            <NavLink to="/login" className="hover:text-blue-800">
              <MdPermContactCalendar />
          
            </NavLink>
          </div>

          <div className="relative">
            <NavLink to="/shoppingcart" className="hover:text-blue-800">
              <BiCartAlt />
              <span className="absolute -top-2 -right-2 bg-blue-800 text-white text-[15px] p-2 rounded-full w-6 h-6 flex items-center justify-center">
                 {cartItems.length}
              </span>
            </NavLink>
          </div>
        </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4  px-6 flex flex-col gap-4 text-[17px] font-medium capitalize md:hidden z-20">
            {navLinks}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
