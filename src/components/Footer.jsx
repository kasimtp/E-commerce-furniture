import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Woostify Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Woostify</h2>
          <p className="mb-6">
            You can easily edit this paragraph to talk about your brand as well as your products to your potential customers.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaPinterestP size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Shop Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gray-800">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-800">Sitemap</a></li>
            <li><a href="#" className="hover:text-gray-800">Press</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gray-800">Documentation</a></li>
            <li><a href="#" className="hover:text-gray-800">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-800">General FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Newsletter</h3>
          <p className="mb-4">
            Get 20% off for your first order by joining to our newsletter.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-3 rounded-l-full border border-gray-300 focus:outline-none"
            />
            <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-r-full border-t border-b border-r border-gray-300 hover:bg-gray-200">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-300 py-6 text-center text-gray-500 text-sm">
        © 2021 Woostify Privacy Policy All rights reserved. Designed & developed by woostify
      </div>
    </footer>
  );
};

export default Footer;
