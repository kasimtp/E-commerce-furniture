import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 font-Poppins mt-12 lg:mt-28">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Flipkert
          </h2>
          <p className="text-sm sm:text-base lg:text-base text-gray-600">
            Quality products and trusted service to make your shopping simple
            and reliable.
          </p>
          <div className="flex space-x-4 sm:space-x-6 mt-4 text-gray-600">
            <a href="#" className="hover:text-gray-800 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-gray-800 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-gray-800 transition">
              <FaPinterestP size={18} />
            </a>
            <a href="#" className="hover:text-gray-800 transition">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Shop Section */}
        

        {/* Support Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
            Support
          </h3>
          <ul className="flex flex-col gap-2 text-sm sm:text-base lg:text-base">
            <li>
              <Link to="/support" className="hover:text-gray-800 transition">
                Support
              </Link>
            </li>
            <li>
              <Link to="/documentation" className="hover:text-gray-800 transition">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-gray-800 transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-gray-800 transition">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
            Newsletter
          </h3>
          <p className="text-sm sm:text-base lg:text-base text-gray-600">
            Get 20% off for your first order by joining our newsletter.
          </p>
          <form className="flex w-full mt-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full text-sm sm:text-base lg:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="bg-gray-300 text-gray-800 text-sm sm:text-base lg:text-base font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-r-full hover:bg-gray-400 transition">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-300 py-6 text-center text-xs sm:text-sm lg:text-base text-gray-500">
        © {new Date().getFullYear()} Flipkert. All Rights Reserved. Designed &
        developed by Woostify.
      </div>
    </footer>
  );
};

export default Footer;
