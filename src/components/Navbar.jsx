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
        <p className="text-amber-50 text-xs md:text-sm uppercase text-center">
          Free Shipping on Orders over $70
        </p>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-col border-b-1 md:flex-row md:justify-between items-center px-4 md:px-10 lg:px-20 -mt-14 gap-4 md:gap-0">
        {/* Logo */}
        <div className="   flex  justify-center md:justify-start">
          <img src={logo} alt="Logo" className=" max-w-[130px] mt-12" />
        </div>

        {/* Nav Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mt-14 text-[16px] font-medium capitalize">
          <NavLink to={"/"} className="hover:text-blue-800">
            Home
          </NavLink>
          <NavLink to={"/shope"} className="hover:text-blue-800">
            Shop
          </NavLink>
          
          <NavLink to={"/blog"} className="hover:text-blue-800">
            Blog
          </NavLink>
          <NavLink to={"/cart"} className="hover:text-blue-800">
          cart
          </NavLink>
          <NavLink to={"/contact"} className="hover:text-blue-800">
          contact
          </NavLink>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-lg md:text-3xl   pt-14 md:mt-0">

          <NavLink to={'/search'}>
          < BsSearch className="cursor-pointer hover:text-blue-800" />
          </NavLink>
          <AiOutlineHeart className="cursor-pointer hover:text-blue-800" />

          <NavLink to={"/Login"}>
          <MdPermContactCalendar className="cursor-pointer hover:text-blue-800" />

          </NavLink>


          <BiCartAlt className="cursor-pointer hover:text-blue-800" />
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
