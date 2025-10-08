import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#004d40] text-gray-200  font-Poppins mt-12 lg:mt-28">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Flipkert
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400">
            Quality products and trusted service to make your shopping experience simple and reliable.
          </p>
          <div className="flex space-x-4 sm:space-x-6 mt-4">
            {[FaFacebookF, FaTwitter, FaPinterestP, FaYoutube].map((Icon, idx) => (
              <a
                href="#"
                key={idx}
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Shop Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
            Shop
          </h3>
          <ul className="flex flex-col gap-2 text-sm sm:text-base lg:text-lg">
            <li>
              <Link to="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
             
               <Link to="/Sitemap" className="hover:text-white transition">
               Sitemap
              </Link>
            </li>
            <li>
             
               <Link to="/Press" className="hover:text-white transition">
               Press
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
            Support
          </h3>
          <ul className="flex flex-col gap-2 text-sm sm:text-base lg:text-lg">
            <li>
              <Link to="/support" className="hover:text-white transition">
                Support
              </Link>
            </li>
            <li>
              <Link to="/documentation" className="hover:text-white transition">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-white transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-white transition">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
            Newsletter
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400">
            Get 20% off for your first order by joining our newsletter.
          </p>
          <form className="flex w-full mt-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-l-full border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CB19A]"
            />
            <button className="bg-[#4CB19A] text-white text-sm sm:text-base lg:text-lg font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-r-full hover:bg-[#3a8c7f] transition transform hover:scale-105">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 py-6 text-center text-xs sm:text-sm lg:text-base text-gray-400">
        © {new Date().getFullYear()} Flipkert. Privacy Policy. All rights reserved. Designed & developed by Woostify.
      </div>
    </footer>
  );
};

export default Footer;
