import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layout components (shown on every page or most pages)
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";

// Pages - each one is a full screen/page of the app
import Home from "./pages/Home";
import Shope from "./pages/Shope";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CartPage from "./pages/CartPage";
import WishList from "./pages/WishList";
import ProductDs from "./pages/ProductDs";
import Address from "./pages/Address";
import CheckOut from "./pages/CheckOut";
import PaymentPage from "./pages/PaymentPage";
import TermsConditions from "./pages/TermsConditions";
import Support from "./pages/Support";
import Documentation from "./pages/Documentation";
import HelpCenter from "./pages/HelpCenter";
import GeneralFAQs from "./pages/GeneralFAQs";
import Sitemap from "./pages/Sitemap";
import Press from "./pages/Press";

// Components used as pages
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import Cart from "./components/Cart";

// ProtectedRoute: redirects to login if user is not logged in
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  // useLocation gives us the current URL path (e.g. "/", "/shop")
  const location = useLocation();

  // Navbar is only shown on these routes
  const showNavbarRoutes = ["/", "/shop", "/contact", "/blog"];

  // BottomNavbar is hidden on these routes
  const hideBottomNavbarRoutes = ["/checkout", "/login"];

  return (
    <div>
      {/* Toast notifications - shows success/error popups */}
      <ToastContainer />

      {/* Show Navbar only on the routes listed above */}
      {showNavbarRoutes.includes(location.pathname) && <Navbar />}

      {/* All app routes are defined here */}
      <Routes>
        {/* ---- Public Routes (anyone can visit) ---- */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shope />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/productdetiles/:id" element={<ProductDs />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shoppingcart" element={<Cart />} />
        <Route path="/shippingaddress" element={<Address />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/paymentcash" element={<PaymentPage />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/support" element={<Support />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/faqs" element={<GeneralFAQs />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/press" element={<Press />} />

        {/* ---- Protected Routes (only logged-in users can visit) ---- */}
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Show BottomNavbar on all pages except login and checkout */}
      {!hideBottomNavbarRoutes.includes(location.pathname) && <BottomNavbar />}
    </div>
  );
};

export default App;
