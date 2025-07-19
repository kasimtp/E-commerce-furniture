import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { MdAccountCircle, MdClose } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { PiHeartFill } from "react-icons/pi";
import { AppContext } from "../context/AppContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);

  const navigate = useNavigate();
  const { logout } = useContext(AppContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const userId = localStorage.getItem("id");

    if (userId) {
      // Get Cart Items
      fetch(`${BASE_URL}/get-cart/${userId}`)
        .then((res) => res.json())
        .then((data) => setCartItems(data))
        .catch((err) => console.error("Cart error:", err));

      // Get Wishlist Items
      fetch(`${BASE_URL}/get-wishlist/${userId}`)
        .then((res) => res.json())
        .then((data) => setWishListItems(data))
        .catch((err) => console.error("Wishlist error:", err));
    }
  }, []);

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul className="nav-links">{navLinks}</ul>

      <div className="nav-icons">
        <Link to="/search">
          <BiSearch size={24} />
        </Link>
        <Link to="/wishlist">
          <PiHeartFill size={24} />
          <span>{wishListItems.length}</span>
        </Link>
        <Link to="/cart">
          <BsCart4 size={24} />
          <span>{cartItems.length}</span>
        </Link>
        <Link to="/account">
          <MdAccountCircle size={24} />
        </Link>
        <button onClick={logout}>Logout</button>
      </div>

      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <MdClose size={24} /> : <span>Menu</span>}
      </button>
    </nav>
  );
};

export default Navbar;
