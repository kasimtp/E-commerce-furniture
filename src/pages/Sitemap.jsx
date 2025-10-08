import React from "react";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-md">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">Sitemap</h1>
        <p className="text-gray-500 mb-6">Last updated: {today}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-700">Main Pages</h2>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <Link to="/" className="hover:text-[#4CB19A] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#4CB19A] transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-[#4CB19A] transition">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#4CB19A] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-700">Support & Resources</h2>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <Link to="/faqs" className="hover:text-[#4CB19A] transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-[#4CB19A] transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-[#4CB19A] transition">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="hover:text-[#4CB19A] transition">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies & Legal */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-700">Policies & Legal</h2>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <Link to="/terms" className="hover:text-[#4CB19A] transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#4CB19A] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-[#4CB19A] transition">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-400 mt-10 text-sm sm:text-base text-center">
          © {new Date().getFullYear()} Flipkert. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Sitemap;
