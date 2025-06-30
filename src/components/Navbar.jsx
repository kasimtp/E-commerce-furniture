import React, { useContext, useEffect, useState } from "react";
import logotext from "../assets/FurnitureLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdPermContactCalendar, MdMenu, MdClose } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { BiCartAlt } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AppContext } from "../context/AppContext";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);
  const navigate = useNavigate();
  const { logout } = useContext(AppContext);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (userId) {
      fetch(`http://localhost:5000/api/get-cart/${userId}`)
        .then((res) => res.json())
        .then((data) => setCartItems(data))
        .catch((err) => console.error("Cart error:", err));

      fetch(`http://localhost:5000/api/get-wishlist/${userId}`)
        .then((res) => res.json())
        .then((data) => setWishListItems(data))
        .catch((err) => console.error("Wishlist error:", err));
    }
  }, []);

  const navLinks = (
    <>
      {["/", "/shop", "/cartpage", "/blog", "/contact"].map((path, i) => (
        <NavLink
          key={i}
          to={path}
          className={({ isActive }) =>
            isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
          }
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <p className="lg:text-[20px] text-[16px]">
            {path === "/" ? "Home" : path.replace("/", "").replace("page", " P")}
          </p>
        </NavLink>
      ))}
    </>
  );

  return (
    <div className="w-full font-Poppins">
      <div className="h-10 flex items-center justify-center bg-blue-800 px-2">
        <p className="text-white text-xs md:text-sm uppercase text-center">
          Free Shipping on Orders over $70
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between h-20 md:h-28 px-4 md:px-10 lg:px-16 md:py-4 shadow-sm space-y-1 md:space-y-0 relative">
        <div className="flex items-center gap-4 -ml-9 md:mt-[17px]">
          <button className="md:hidden text-4xl text-blue-800" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>

          <img
            src={logotext}
            alt="Logo"
            className="w-[130px] sm:w-[150px] md:w-[100px] md:mb-4 lg:w-[250px]"
          />

          <div className="flex text-3xl space-x-6 md:hidden">
            <div className="relative">
              <NavLink to="/wishlist" className="hover:text-blue-800">
                <AiOutlineHeart />
                <span className="absolute -top-2 -right-2 bg-blue-800 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {wishListItems.length}
                </span>
              </NavLink>
            </div>

            <div className="relative">
              <NavLink to="/shoppingcart" className="hover:text-blue-800">
                <BiCartAlt />
                <span className="absolute -top-2 -right-2 bg-blue-800 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex space-x-8">
          <div className="hidden md:flex items-center gap-8 text-[17px] font-medium capitalize">
            {navLinks}
          </div>

          <div className="hidden md:flex space-x-2 items-center gap-4 text-xl sm:text-4xl">
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

            <NavLink to="/login" className="hover:text-blue-800">
              <VscAccount />
            </NavLink>

            <div className="relative">
              <NavLink to="/shoppingcart" className="hover:text-blue-800">
                <BiCartAlt />
                <span className="absolute -top-2 -right-2 bg-blue-800 text-white text-[10px] rounded-full w-6 h-6 p-2 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </NavLink>
            </div>

            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <p className="text-[18px] font-semibold flex items-center gap-2">
               <FiLogOut /> Logout
              </p>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col gap-4 text-[17px] font-medium capitalize md:hidden z-20">
            {navLinks}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
