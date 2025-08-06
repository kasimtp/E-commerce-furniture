import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-000 border-t-2 border-t-gray-200 mt-0 md:mt-0 lg:w-full lg:mt-28 text-gray-600 font-Poppins">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto bg-amber-000 px-4 py-20 lg:max-w-screen lg:px-98 lg:mx-98  lg:gap-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-10">
        
        {/* Woostify Section */}
        <div className="flex flex-col gap-6 lg:gap-13">
          <h2 className="text-3xl lg:text-[68px] font-bold text-gray-800 capitalize">flipkert</h2>
          <p className="text-base lg:text-[34px]">
            At Flipkert, we bring you quality products and trusted service to make your shopping experience simple and reliable.


          </p>
          <div className="flex space-x-6 lg:space-x-8 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <FaFacebookF size={70}  />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <FaTwitter size={70} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <FaPinterestP size={70} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <FaYoutube size={70} />
            </a>
          </div>
        </div>

        {/* Shop Section */}
        <div className="flex flex-col gap-6 lg:gap-16">
          <h3 className="text-2xl font-semibold  lg:text-[48px] lg:font-semibold text-gray-800">Shop</h3>
          <ul className="flex flex-col lg:text-[34px] lg:font-medium gap-4">
            <li><a href="#" className="hover:text-gray-800 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-800 transition">Sitemap</a></li>
            <li><a href="#" className="hover:text-gray-800 transition">Press</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-6 lg:gap-16">
          <h3 className="text-2xl font-semibold lg:text-[48px] lg:font-semibold text-gray-800">Support</h3>
          <ul className="flex flex-col lg:text-[34px] lg:font-medium gap-4">
            <li><a href="#" className="hover:text-gray-800 transition">Documentation</a></li>
            <li><a href="#" className="hover:text-gray-800 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-800 transition">General FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-6 lg:gap-16">
          <h3 className="text-2xl font-semibold lg:text-[48px] lg:font-semibold text-gray-800">Newsletter</h3>
          <p className="text-base lg:text-[30px] lg:font-semibold">
            Get 20% off for your first order by joining our newsletter.
          </p>
          <form className="flex lg:h-30    w-full mt-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full lg:text-82 lg:p-12 p-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="  bg-gray-800 text-white font-semibold px-6 py-3 rounded-r-full hover:bg-gray-700 transition">
              SUBSCRIBE
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-300 mt-10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} flipkert. Privacy Policy. All rights reserved. Designed & developed by Woostify.
      </div>
    </footer>
  );
};

export default Footer;
