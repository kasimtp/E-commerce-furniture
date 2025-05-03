import React from "react";
import logo from "../assets/logo.png";
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
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-38 h-28 py-4 shadow-sm bg-white">
        {/* Logo on the Left */}
        <div>
          <img src={logo} alt="Logo" className="w-[120px]" />
        </div>

        {/* Nav Links and Icons Grouped Right */}
        <div className="flex items-center gap-8">
          {/* Nav Links */}
          <div className="flex items-center gap-12 text-[17px] font-medium capitalize">
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

            <NavLink to="/cart" 
               className={({ isActive }) =>
                isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
              }>
              Cart
            </NavLink>
            <NavLink to="/blog"    className={({ isActive }) =>
                isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
              }>
              Blog
            </NavLink>
            <NavLink to="/contact"    className={({ isActive }) =>
                isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
              }>
              Contact
            </NavLink>
          </div>

          {/* Icons with Badges */}
          <div className="flex items-center space-x-5 text-3xl">
            <NavLink to="/search">
              <BsSearch    className={({ isActive }) =>
                isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
              } />
            </NavLink>

            <div className="relative">
              <AiOutlineHeart className="cursor-pointer hover:text-blue-800" />
              <span className="absolute -top-2 -right-2 bg-blue-800 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>

            <NavLink to="/login" className="relative">
              <MdPermContactCalendar className="cursor-pointer hover:text-blue-800" />
              <span className="absolute -top-2 -right-2 bg-blue-800 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </NavLink>

            <NavLink to="/shoppingcart" className="relative">
              <BiCartAlt className="cursor-pointer hover:text-blue-800" />
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
