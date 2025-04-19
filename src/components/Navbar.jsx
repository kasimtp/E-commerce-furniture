import React from "react";
// import {assets} from "../assets";
import logo from "../assets/logo.png";

import { NavLink } from "react-router-dom";
import { BsSearch } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdPermContactCalendar } from 'react-icons/md'
import { BiCartAlt } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="  md:h-9 h-8  text-center place-content-center bg-blue-800  ">
        <p className="text-amber-50 md:text-[19px] text-[14px] uppercase ">
          Free Shipping on Orders over $70
        </p>
      </div>

      <div className="flex flex-row justify-center gap-[400px] items-center -mt-3">

       
         
       <div className="  ">
          <img
            className="  w-32 "
            src={logo}
            alt=""
          />
        

       </div>

       <div className="flex  gap-x-28">
    
       <div className=" flex items-center justify-center ">
          <ul className="flex flex-row gap-11 text-[14px] font-sans   capitalize ">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            
            <NavLink to={"/shope"}>
            <li>shop</li>
            </NavLink>

            <NavLink to={"/contact"}>
            <li>Cart</li>
            </NavLink>

            <NavLink to={"/blog"}>
            <li>Blog</li>
            </NavLink>

            <NavLink to={"/cart"}>
            <li>Contact</li>
            </NavLink>
          </ul>
        </div>

        <div className=" flex flex-row items-center justify-center  text-xl space-x-8">
        <BsSearch />
        <AiOutlineHeart />
        <MdPermContactCalendar />
        <BiCartAlt />
        </div>

       </div>

        
      </div>
    </div>
  );
};

export default Navbar;
