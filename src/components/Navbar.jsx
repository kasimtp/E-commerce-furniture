import React from "react";
import logotext from "../assets/StoreLogo1.png";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { BiCartAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="w-full font-Poppins">
      {/* Top Banner */}
      <div className="h-10 flex items-center justify-center bg-blue-800 px-2">
        <p className="text-white text-xs md:text-sm uppercase text-center">
          Free Shipping on Orders over $70
        </p>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-16 py-4 shadow-sm bg-red-200 h-[100px] space-y-4 md:space-y-0">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img
            src={logotext}
            alt="Logo"
            className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[300px] h-auto object-contain"
          />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-[17px] font-medium capitalize">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-xl sm:text-2xl">
          <NavLink to="/search" className="hover:text-blue-800">
            <BsSearch />
          </NavLink>

          <div className="relative">
            <NavLink to="/wishlist" className="hover:text-blue-800">
              <AiOutlineHeart />
              <span className="absolute -top-2 -right-2 bg-blue-800 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </NavLink>
          </div>

          <div className="relative">
            <NavLink to="/login" className="hover:text-blue-800">
              <MdPermContactCalendar />
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
    </div>
  );
};

export default Navbar;
