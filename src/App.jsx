


import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import Home from "./pages/Home";
import Shope from "./pages/Shope";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import CartPage from "./pages/CartPage";
import Cart from "./components/Cart";
import WishList from "./pages/WishList";
import ProductDs from "./pages/ProductDs";
import ProtectedRoute from "./components/ProtectedRoute";
import Address from "./pages/Address";
import CheckOut from "./pages/CheckOut";
import PaymentPage from "./pages/PaymentPage";

const App = () => {
  const location = useLocation();

  // Routes where Navbar should be visible
  const showNavbarRoutes = ["/", "/shop", "/contact", "/blog"];

  // Routes where BottomNavbar should be hidden
  const hideBottomNavbarRoutes = ["/checkout", "/login"];

  return (
    <div>
      <ToastContainer />

      {/* Show Navbar only on selected routes */}
      {showNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shope />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shoppingcart" element={<Cart />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/productdetiles/:id" element={<ProductDs />} />
        <Route path="/shippingaddress" element={<Address />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/paymentcash" element={<PaymentPage />} /> 

        {/* Protected Routes */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shoppingcart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Show BottomNavbar on all routes except specified */}
      {!hideBottomNavbarRoutes.includes(location.pathname) && <BottomNavbar />}
    </div>
  );
};

export default App;
